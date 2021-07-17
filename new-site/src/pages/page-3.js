import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page three" />
    <h1>Hi from the third page</h1>
    <p className="message">Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
