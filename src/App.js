import React, { Fragment } from 'react'
import { Global } from '@emotion/core'
import { GlobalStyles } from 'styles/GlobalStyles'

import { Home } from 'pages/home'

const App = () => (
  <Fragment>
    <Global styles={GlobalStyles} />
    <Home/>
  </Fragment>
)


export default App
