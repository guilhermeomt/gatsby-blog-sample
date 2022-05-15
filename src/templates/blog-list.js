import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import Pagination from "../components/Pagination";
import Seo from "../components/seo";

const BlogList = props => {
  const { edges: postList } = props.data.allMarkdownRemark;

  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <Seo title="Home" />
      {postList.map(
        (
          {
            node: {
              fields: { slug },
              frontmatter: { title, date, background, description, category },
              timeToRead,
            },
          },
          index
        ) => {
          return (
            <PostItem
              slug={slug}
              key={index}
              title={title}
              date={date}
              background={background}
              description={description}
              category={category}
              timeToRead={timeToRead}
            />
          );
        }
      )}

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(fromNow: true, locale: "pt-br")
            background
            image
            title
            description
            category
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
