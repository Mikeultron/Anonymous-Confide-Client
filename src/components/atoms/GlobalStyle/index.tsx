import { createGlobalStyle } from "styled-components";
import { breakPoints, fontFamily } from "utils";
import {
  openSansRegular,
  poppinsBold,
  poppinsMedium,
  poppinsRegular,
  poppinsSemiBold,
} from "assets";

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: ${fontFamily.poppins.regular};
    src: url(${poppinsRegular});
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face{
    font-family: ${fontFamily.poppins.medium};
    src: url(${poppinsMedium});
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face{
    font-family: ${fontFamily.poppins.semiBold};
    src: url(${poppinsSemiBold});
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face{
    font-family: ${fontFamily.poppins.bold};
    src: url(${poppinsBold});
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face{
    font-family: ${fontFamily.openSans.regular};
    src: url(${openSansRegular});
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* input[type="date"]::-webkit-calendar-picker-indicator{
    background: transparent;
    height: auto;
    width: auto;
    color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    user-select: none;
  } */

  html{
    font-size: 36px;
  }

  @media (max-width: ${breakPoints.tablet}px){
    html{
      font-size: 24px;
    }
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body{
    font-family: ${fontFamily.poppins.regular};
  }
`;

export default GlobalStyle;
