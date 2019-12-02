import { css } from '@emotion/core'

import SuisseIntl_Black from 'assets/fonts/SuisseIntl-Black.ttf'
import SuisseIntl_BlackItalic from 'assets/fonts/SuisseIntl-BlackItalic.ttf'
import SuisseIntl_Bold from 'assets/fonts/SuisseIntl-Bold.ttf'
import SuisseIntl_BoldItalic from 'assets/fonts/SuisseIntl-BoldItalic.ttf'
import SuisseIntl_Book from 'assets/fonts/SuisseIntl-Book.ttf'
import SuisseIntl_BookItalic from 'assets/fonts/SuisseIntl-BookItalic.ttf'
import SuisseIntl_Light from 'assets/fonts/SuisseIntl-Light.ttf'
import SuisseIntl_LightItalic from 'assets/fonts/SuisseIntl-LightItalic.ttf'
import SuisseIntl_Medium from 'assets/fonts/SuisseIntl-Medium.ttf'
import SuisseIntl_MediumItalic from 'assets/fonts/SuisseIntl-MediumItalic.ttf'
import SuisseIntl_Regular from 'assets/fonts/SuisseIntl-Regular.ttf'
import SuisseIntl_RegularItalic from 'assets/fonts/SuisseIntl-RegularItalic.ttf'
import SuisseIntl_SemiBold from 'assets/fonts/SuisseIntl-SemiBold.ttf'
import SuisseIntl_SemiBoldItalic from 'assets/fonts/SuisseIntl-SemiBoldItalic.ttf'
import SuisseIntl_Thin from 'assets/fonts/SuisseIntl-Thin.ttf'
import SuisseIntl_ThinItalic from 'assets/fonts/SuisseIntl-ThinItalic.ttf'
import SuisseIntl_Ultralight from 'assets/fonts/SuisseIntl-Ultralight.ttf'
import SuisseIntl_UltralightItalic from 'assets/fonts/SuisseIntl-UltralightItalic.ttf'

export const GlobalStyles = css`
*,
*::before,
*::after {
  box-sizing: border-box;
}


@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_Black}) format('truetype');
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_BlackItalic}) format('truetype');
  font-weight: 900;
  font-style: italic;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_Bold}) format('truetype');
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_BoldItalic}) format('truetype');
  font-weight: 800;
  font-style: italic;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_Book}) format('truetype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_BookItalic}) format('truetype');
  font-weight: 700;
  font-style: italic;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_Light}) format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_LightItalic}) format('truetype');
  font-weight: 600;
  font-style: italic;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_Medium}) format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_MediumItalic}) format('truetype');
  font-weight: 500;
  font-style: italic;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_Regular}) format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_RegularItalic}) format('truetype');
  font-weight: 400;
  font-style: italic;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_SemiBold}) format('truetype');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_SemiBoldItalic}) format('truetype');
  font-weight: 300;
  font-style: italic;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_Thin}) format('truetype');
  font-weight: 200;
  font-style: normal;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_ThinItalic}) format('truetype');
  font-weight: 200;
  font-style: italic;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_Ultralight}) format('truetype');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'SuisseIntl';
  src: url(${SuisseIntl_UltralightItalic}) format('truetype');
  font-weight: 100;
  font-style: italic;
}

html, body {
  width: 100%;
  height: 100%;
  
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-family: 'SuisseIntl';
}

svg {
  user-select: none;
  display: block;
  width: 100%;
  height: 100%;
}

.dg.main {
  margin-top: 70px;
}

`
