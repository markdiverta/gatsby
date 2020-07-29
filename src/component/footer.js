import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
 
  return (
    <footer class="l-footer">
    <div class="l-container--middle">
      <div class="l-foooter__wrapper">
        <ul class="l-footer__menu">
          <li class="l-footer__menu--list"><a href="https://www.diverta.co.jp/">Top</a></li>
          <li class="l-footer__menu--list"><a href="https://www.diverta.co.jp/products/">products</a></li>
          <li class="l-footer__menu--list"><a href="https://www.diverta.co.jp/statement/">statement</a></li>
          <li class="l-footer__menu--list"><a href="https://www.diverta.co.jp/careers/">careers</a></li>
          <li class="l-footer__menu--list"><a href="https://www.diverta.co.jp/faq/">Q&amp;A</a></li>
          <li class="l-footer__menu--list"><a href="https://www.diverta.co.jp/about/">About</a></li>
          <li class="l-footer__menu--list"><a href="https://www.diverta.co.jp/contact/">Contact</a></li>
          <li class="l-footer__menu--list"><a href="https://www.diverta.co.jp/privacy/">Privacy</a></li>
          <li class="l-footer__menu--list"><a href="https://www.diverta.co.jp/security/">Security</a></li>
        </ul>
        <div class="l-footer__copyright">© Diverta Inc. managed by RCMS.</div>
            </div>
    </div>
  </footer>
  )
}


export default Footer