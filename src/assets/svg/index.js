import { useState, useEffect, useRef } from 'react'

import load from 'load-svg'

import base_logo from './insides/base_logo.svg'
import city_california_1 from './insides/city_california_1.svg'
import city_california from './insides/city_california.svg'
import city_canada from './insides/city_canada.svg'
import city_cotedlvoire from './insides/city_cotedlvoire.svg'
import city_ghana from './insides/city_ghana.svg'
import city_houston from './insides/city_houston.svg'
import city_illinois_1 from './insides/city_illinois_1.svg'
import city_illinois from './insides/city_illinois.svg'
import city_india1 from './insides/city_india1.svg'
import city_india2 from './insides/city_india2.svg'
import city_kenya from './insides/city_kenya.svg'
import city_newyork_1 from './insides/city_newyork_1.svg'
import city_newyork from './insides/city_newyork.svg'
import city_nigeria from './insides/city_nigeria.svg'
import city_southafrica from './insides/city_southafrica.svg'
import city_uk from './insides/city_uk.svg'
import city_washingston_1 from './insides/city_washingston_1.svg'
import city_washington from './insides/city_washington.svg'
import city_washingtondc_1 from './insides/city_washingtondc_1.svg'
import city_washingtondc from './insides/city_washingtondc.svg'
import course_datasciene from './insides/course_datasciene.svg'
import course_fullstackdev from './insides/course_fullstackdev.svg'
import course_iosdev from './insides/course_iosdev.svg'
import course_nursing from './insides/course_nursing.svg'
import course_securityanalysis from './insides/course_securityanalysis.svg'
import course_securityengineering from './insides/course_securityengineering.svg'
import course_userexperiencedesign from './insides/course_userexperiencedesign.svg'

const usePaths = () => {
  const [loaded, setLoaded] = useState(false)
  const paths = useRef({
    options: {
      'Lambda Logo': base_logo,
      'California': city_california_1,
      'Golden Gate': city_california,
      'Canada': city_canada,
      'Côte d\'Ivoire': city_cotedlvoire,
      'Ghana': city_ghana,
      'Houston': city_houston,
      'Illinois': city_illinois_1,
      'Chicago': city_illinois,
      'Taj Mahal': city_india1,
      'India 2': city_india2,
      'Kenya': city_kenya,
      'New York': city_newyork_1,
      'Empire State': city_newyork,
      'Nigeria': city_nigeria,
      'South Africa': city_southafrica,
      'United Kingdom': city_uk,
      'Washington': city_washingston_1,
      'Rocky Mountains': city_washington,
      'Washington DC': city_washingtondc_1,
      'US Capitol': city_washingtondc,
      'Data Sciene': course_datasciene,
      'Full Stack Dev': course_fullstackdev,
      'iOS Dev': course_iosdev,
      'Nursing': course_nursing,
      'Security Analysis': course_securityanalysis,
      'Security Engineering': course_securityengineering,
      'UX Design': course_userexperiencedesign,
    },
    loaded: false,
    toLoad: 0,
  })

  useEffect(() => {
    paths.current.toLoad = Object.keys(paths.current.options).length
    Object.keys(paths.current.options).forEach((key) => {
      load(paths.current.options[key], (err, svg) => {
        paths.current.options[key] = svg
        paths.current.toLoad -= 1
        if (paths.current.toLoad === 0) setLoaded(true)
      })
    })
  }, [])

  return loaded ? paths.current.options : null
}

export { usePaths }
