import React from "react";
import { Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark {
        edges {
          node {
            html
            excerpt
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Page two" />
      {data.allMarkdownRemark.edges[0].node.excerpt}
      <p>
        Post was made {data.allMarkdownRemark.edges[0].node.frontmatter.date}
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;
