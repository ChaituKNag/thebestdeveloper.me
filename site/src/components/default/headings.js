import styled from "styled-components"

const styles = `
background: #ADA996;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display: inline-block;
padding: 6px 10px;
border-radius: 5px;
background-color: #FAACA8;
background-image: -webkit-linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
background-image: -moz-linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
background-image: -o-linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);

`

const H1 = styled.h1`
  ${styles}
`

const H2 = styled.h2`
  ${styles}
`
const H3 = styled.h3`
  ${styles}
`
const H4 = styled.h4`
  ${styles}
`
const H5 = styled.h5`
  ${styles}
`
const H6 = styled.h6`
  ${styles}
`

export { H1, H2, H3, H4, H5, H6 }
