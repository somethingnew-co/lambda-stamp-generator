import React, { useEffect, useRef, useState } from 'react'
import { SVG } from '@svgdotjs/svg.js'
import styled from '@emotion/styled'
import { usePaths } from 'assets/svg'
import WebFont from 'webfontloader'
import theme from 'styles/Theme'
import * as dat from 'dat.gui'
import { EncodedFonts } from 'assets/fonts'
import { saveSvgAsPng } from 'save-svg-as-png'

const dimention = 252
const fontSize = 17.64
const fontWeight = 700
const circleStrokeWidth = 2.25
const tracking = 1
const innerRadiusRatio = 0.46
const outerRadiusRatio = 0.857

const exportSVG = ({ svg, anchor, embedFonts = true }) => {
  if (embedFonts) {
    if (!svg.node.getElementById('svgFontStyles')) {
      const newStyleElement = document.createElementNS('http://www.w3.org/2000/svg', 'style')
      newStyleElement.innerHTML = `
        @font-face {
          font-family: 'SuisseIntl';
          font-weight: 700;
          src: url('data:application/x-font-ttf;base64,${EncodedFonts.book}');
        }
      `
      svg.node.appendChild(newStyleElement)
    }
  }

  const svgString = svg.svg().replace(/&nbsp;/g, ' ')
  anchor.current.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`
  anchor.current.click()
}

const exportPNG = ({ svg, pngResolution }) => {
  saveSvgAsPng(svg.node, 'stamp.png', {
    scale: 0.5 * pngResolution / dimention,
  })
  return null
}

const exportAsset = (data, type) => type === 'png'
  ? exportPNG(data)
  : exportSVG(data)

const Container = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  height: ${({ dim }) => dim}px;
  width: ${({ dim }) => dim}px;
`

const DowloadLink = styled.a`
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  position: fixed;
`

const Generator = () => {
  const [fontLoaded, setFontLoaded] = useState(false)
  const paths = usePaths()

  const [containerDim, setContainerDim] = useState()
  const containerRef = useRef()
  const drawingRef = useRef()
  const downloadRef = useRef()
  const drawData = useRef({
    general: {
      angle: 0,
      colors: theme.combos[0].name,
      primaryText: 'LAMBDA SCHOOL',
      secondaryText: 'GO ALL IN',
      innerStroke: true,
      outerStroke: true,
      invert: false,
    },
    exporting: {
      embedFonts: true,
      pngResolution: 1000,
      type: 'svg',
      export: () => null,
    },
  })

  const draw = () => {
    const { general } = drawData.current
    const { innerStroke, outerStroke, invert, innerImage } = general
    const colorObj = theme.combos.filter(combo => combo.name === general.colors)[0]
    const colors = invert ? {
      foreground: colorObj.background,
      background: colorObj.foreground,
    } : colorObj

    const halfDim = dimention / 2

    const innerRadius = innerRadiusRatio * dimention
    const outerRadius = outerRadiusRatio * dimention

    // tokenize text and parse bold text
    const primaryText = general.primaryText.replace(/\s/g, '\u00A0')
    const secondaryText = general.secondaryText.replace(/\s/g, '\u00A0')

    const svgLoadEl = document.createElement('div')
    svgLoadEl.appendChild(paths[innerImage])

    const logoGroup = drawingRef.current.group()
    logoGroup.svg(svgLoadEl.innerHTML).node.childNodes[0]

    logoGroup.findOne('#Layer_1').stroke(colors.foreground).fill(colors.foreground)

    // inner circle
    logoGroup.circle(innerRadius).attr({
      'cx': halfDim,
      'cy': halfDim,
      'fill': colors.background,
      'stroke': colors.foreground,
      'stroke-width': innerStroke ? circleStrokeWidth : 0,
    }).back()

    // outer circle
    logoGroup.circle(outerRadius).attr({
      'cx': halfDim,
      'cy': halfDim,
      'fill': colors.background,
      'stroke': colors.foreground,
      'stroke-width': outerStroke ? circleStrokeWidth : 0,
    }).back()

    // prep for adding text
    const textPathRadius = ((innerRadius + (outerRadius - innerRadius) / 2) / 2)
    const textInnerRadius = textPathRadius + fontSize / 2.7
    const textOuterRadius = textPathRadius - fontSize / 2.7

    const primaryTextPath = `
      M ${halfDim} ${halfDim}
      m -${textOuterRadius}, 0
      a ${textOuterRadius},${textOuterRadius} 0 1,1 ${textOuterRadius * 2},0
      a ${textOuterRadius},${textOuterRadius} 0 1,1 -${textOuterRadius * 2},0
      a ${textOuterRadius},${textOuterRadius} 0 1,1 ${textOuterRadius * 2},0
      a ${textOuterRadius},${textOuterRadius} 0 1,1 -${textOuterRadius * 2},0
      a ${textOuterRadius},${textOuterRadius} 0 1,1 ${textOuterRadius * 2},0
      a ${textOuterRadius},${textOuterRadius} 0 1,1 -${textOuterRadius * 2},0
    `.replace(/\n/g, '').replace(/\s+/g, ' ')

    const secondaryTextPath = `
      M ${halfDim} ${halfDim}
      m -${textInnerRadius}, 0
      a ${textInnerRadius},${textInnerRadius} 0 1,0 ${textInnerRadius * 2},0
      a ${textInnerRadius},${textInnerRadius} 0 1,0 -${textInnerRadius * 2},0
      a ${textInnerRadius},${textInnerRadius} 0 1,0 ${textInnerRadius * 2},0
      a ${textInnerRadius},${textInnerRadius} 0 1,0 -${textInnerRadius * 2},0
      a ${textInnerRadius},${textInnerRadius} 0 1,0 ${textInnerRadius * 2},0
      a ${textInnerRadius},${textInnerRadius} 0 1,0 -${textInnerRadius * 2},0
    `.replace(/\n/g, '').replace(/\s+/g, ' ')

    // add primary text
    const primaryTextShape = logoGroup.text(add => add.tspan(primaryText.toUpperCase()).font({
      'size': fontSize,
      'family': 'SuisseIntl',
      'weight': fontWeight,
      'letter-spacing': `${tracking}px`,
      'anchor': 'middle',
    }))
    primaryTextShape.path(primaryTextPath)
    primaryTextShape.textPath().attr({
      'startOffset': `${(100 * (2.5 + general.angle / 180)) / 6}%`,
      'fill': colors.foreground,
    })

    // add secondary text
    const secondaryTextShape = logoGroup.text(add => add.tspan(secondaryText.toUpperCase()).font({
      'size': fontSize,
      'family': 'SuisseIntl',
      'weight': fontWeight,
      'letter-spacing': `${tracking}px`,
      'anchor': 'middle',
    }))
    secondaryTextShape.path(secondaryTextPath)
    secondaryTextShape.textPath().attr({
      'startOffset': `${(100 * (2.5 - general.angle / 180)) / 6}%`,
      'fill': colors.foreground,
    })
  }

  const redraw = () => {
    if (!paths.loaded) setTimeout(redraw, 500)
    setContainerDim(Math.min(window.innerHeight - 70, window.innerWidth))
    const { colors } = drawData.current.general
    if (!drawingRef.current)
      // eslint-disable-next-line new-cap
      drawingRef.current = SVG()
        .addTo('#svgContainer')
        .viewbox(0, 0, dimention, dimention)

    drawingRef.current.clear()

    containerRef.current.style.backgroundColor = colors.background
    draw()
  }

  useEffect(() => {
    if (fontLoaded && paths) {
      drawData.current.general.innerImage = 'base_logo'
      redraw()
      drawData.current.exporting.export = () => {
        exportAsset(
          {
            svg: drawingRef.current,
            anchor: downloadRef,
            ...drawData.current.exporting,
          },
          drawData.current.exporting.type,
        )
      }
      const gui = new dat.GUI({ hideable: false, width: 300, closeOnTop: true })
      const colorOptions = theme.combos.map(combo => combo.name)
      const colorsKnob = gui.add(drawData.current.general, 'colors', colorOptions).name('Colors')
      colorsKnob.onChange(redraw)
      const invertKnob = gui.add(drawData.current.general, 'invert').name('Invert Colors')
      invertKnob.onChange(redraw)
      const innerImageKnob = gui.add(drawData.current.general, 'innerImage', Object.keys(paths)).name('Inner Image')
      innerImageKnob.onChange(redraw)
      const angleKnob = gui.add(drawData.current.general, 'angle', 0, 360, .1).name('Rotation')
      angleKnob.onChange(redraw)
      const primaryTextKnob = gui.add(drawData.current.general, 'primaryText').name('Primary Text')
      primaryTextKnob.onChange(redraw)
      const secondaryTextKnob = gui.add(drawData.current.general, 'secondaryText').name('Secondary Text')
      secondaryTextKnob.onChange(redraw)
      const innerStrokeKnob = gui.add(drawData.current.general, 'innerStroke').name('Inner Stroke')
      innerStrokeKnob.onChange(redraw)
      const outerStrokeKnob = gui.add(drawData.current.general, 'outerStroke').name('Outer Stroke')
      outerStrokeKnob.onChange(redraw)

      const primaryTextFolder = gui.addFolder('Exporting')
      const typeKnob = primaryTextFolder.add(drawData.current.exporting, 'type', ['svg', 'png']).name('Type')
      typeKnob.onChange(redraw)
      primaryTextFolder.add(drawData.current.exporting, 'embedFonts').name('Embed Font (SVG)')
      primaryTextFolder.add(drawData.current.exporting, 'pngResolution', 200, 5000, 2).name('Resolution (PNG)')
      const exportKnob = primaryTextFolder.add(drawData.current.exporting, 'export').name('Export')
      exportKnob.onChange(redraw)

      return () => { if (gui) gui.destroy() }
    }
  }, [fontLoaded, paths])

  useEffect(() => {
    WebFont.load({
      custom: { families: ['SuisseIntl'] },
      fontactive: () => setFontLoaded(true),
    })
    window.addEventListener('resize', redraw)
    return () => window.removeEventListener('resize', redraw)
  }, [])

  return (
    <Container id="svgContainer" dim={containerDim} ref={containerRef}>
      <DowloadLink ref={downloadRef} download="stamp" ></DowloadLink>
    </Container>
  )
}

Generator.propTypes = {}

export { Generator }
