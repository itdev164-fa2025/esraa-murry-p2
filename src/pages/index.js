import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Blog Posts</h1>
    
    {/* Blog Post List */}
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.frontmatter.slug}>
          <Link to={`/blog/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>

    {/* Links to About and Contact Pages */}
    <div>
      <h2>More Pages</h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
