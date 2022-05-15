import { useStaticQuery, graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import Seo from "../components/seo";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
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
  `);

  const { edges: postList } = data.allMarkdownRemark;

  return (
    <Layout>
      <Seo title="Home" />
      {postList.map(
        (
          {
            node: {
              frontmatter: { title, date, background, description, category },
              timeToRead,
            },
          },
          index
        ) => {
          return (
            <PostItem
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
    </Layout>
  );
};

export default IndexPage;
