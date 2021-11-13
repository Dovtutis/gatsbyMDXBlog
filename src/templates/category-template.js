import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';

const CategoryTemplate = ({ data, pageContext }) => {
  const { category } = pageContext;
  const {
    categories: { nodes: posts },
  } = data;

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  );
};

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      distinct(field: frontmatter___category)
      nodes {
        excerpt
        id
        frontmatter {
          author
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          readTime
          title
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

export default CategoryTemplate;
