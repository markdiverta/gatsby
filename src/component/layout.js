import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import '../style/main.scss'

const Layout = (content) => {
  return (
    <section>
      <Header />
      {content.children}
      <Footer />
    </section>
  )
}

export default Layout