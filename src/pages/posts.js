import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';
import Posts from '../components/Posts';

const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;

  return (
    <>
      <Hero />
      <Posts posts={posts} title="all posts" />
    </>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        id
        frontmatter {
          title
          author
          date(formatString: "MMMM Do,YYYY")
          category
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default PostsPage;
