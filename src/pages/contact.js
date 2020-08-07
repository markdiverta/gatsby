import React from 'react'
import { Link } from 'gatsby'
import Layout from '../component/layout'

const Heading = () => {
  return (
    <Layout>
      <h1>Contact page</h1>
      <h3>Diverta Asia</h3>
      <p>Address: Unit 3A-05, Level 3A, Tower B, Vertical Business Suite, Bangsar South City, Jalan Kerinchi, 59200 Kuala Lumpur</p>
      <p>Tel: 03 7876-9161</p>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input name="name" placeholder="Your Name" type="text"/>
        <button>Send</button>
      </form>
    </Layout>
  )
}

export default Heading