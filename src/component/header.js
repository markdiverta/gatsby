import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

/* export const query = graphql`
    query (
        contentfulWebsiteGlobalItem {
        logo {
          file {
            url
          }
        }
      }
    }
` */

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulWebsiteGlobalItem {
        logo {
          file {
            url
          }
          title
        }
      }
    }
  `)
 
  return (
    <header id="header" class="l-header">
      <div class="l-container--middle l-header__wrapper">
      <div class="l-header__container">
      <h1 class="l-header__logo"><a href="https://www.diverta.co.jp/"><img src={data.contentfulWebsiteGlobalItem.logo.file.url} alt={data.contentfulWebsiteGlobalItem.logo.file.url}/></a></h1>
      <div class="l-header__lang">
        <div class="l-header__lang--list active">JPN</div>|
        <div class="l-header__lang--list"><a href="https://www.diverta.co.jp/en/products/">ENG</a></div>
      </div>

      <div class="nav sp-menu" data-js="nav-menu">
        <span class="top"></span>
        <span class="bottom"></span>
      </div>
      <div class="l-header__menu">
        <div class="l-header__menu--list"><Link to="/">Products</Link></div>
        <div class="l-header__menu--list"><Link to="/about">Statement</Link></div>
        <div class="l-header__menu--list"><Link to="/about">Diverta Way</Link></div>
        <div class="l-header__menu--list"><Link to="/about">Careers</Link></div>
        <div class="l-header__menu--list"><Link to="/about">Q&A</Link></div>
        <div class="l-header__menu--list"><Link to="/about">About</Link></div>
        <div class="l-header__menu--list"><Link to="/contact">Contact</Link></div>
      </div>
      </div>
      </div>
    </header>
  )
}


export default Header