import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Archive = () => {
  const data = useStaticQuery(blogPostQuery);

  const blogPosts = data.allMarkdownRemark.edges.map(edge => {
    const frontmatter = edge.node.frontmatter;
    return (
      <li key={frontmatter.slug}>
        <Link to={`/posts${frontmatter.slug}`}>{frontmatter.title}</Link>
      </li>
    );
  });

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ArchiveList>{blogPosts}</ArchiveList>
      </aside>
    </>
  );
};

const blogPostQuery = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

export default Archive;
