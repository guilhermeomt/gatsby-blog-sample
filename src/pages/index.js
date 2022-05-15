import * as React from "react";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home</h1>
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </Layout>
);

export default IndexPage;
