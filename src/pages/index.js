import * as React from "react";
import Layout from "../components/Layout";
import PostItem from "../components/PostItem";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home</h1>
    <PostItem
      slug="/about"
      background="blue"
      category="Sobre"
      date="20/05/2020"
      timeToRead={3}
      title="Meu primeiro post!"
      description="Aqui vai uma descrição do meu primeiro post!"
    />
  </Layout>
);

export default IndexPage;
