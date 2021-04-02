import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { getVisitorCount } from "../api/aws"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage() {
  const [count, setCount] = useState(1)
  useEffect(() => {
    getVisitorCount().then(res => {
      setCount(res)
    })
  })
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Ja moin</h1>
      <p>{`Nr: ${count}`}</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}
