import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Checkout from "../components/checkout"

const fundraising = () => {
  return (
    <Layout>
      <Seo title="ProAca" description="fundraising" />
      <h1>決済機能ページ</h1>
      <Checkout />
    </Layout>
  )
}

export default fundraising
