import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Avatar } from "../Avatar";
import * as S from "./styles";

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
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <p>{author}</p>
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};

export default Profile;
