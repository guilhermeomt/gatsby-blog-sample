import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Avatar } from "../Avatar";

const Profile = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          position
          description
          author
        }
      }
    }
  `);

  const { title, position, description, author } = data.site.siteMetadata;
  return (
    <div className="wrapper">
      <Avatar />
      <h1>{title}</h1>
      <span>{author}</span>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
