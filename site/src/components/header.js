import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // backgroundColor: `#21D4FD`,
      // backgroundImage: `linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)`,
      // backgroundImage: `linear-gradient( 112.5deg,  rgba(95,10,135,1) 11.4%, rgba(164,80,139,1) 60.2% )`,
      // marginBottom: `1.45rem`,
      fontFamily: "'Merriweather'",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: "'Merriweather', cursive",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
