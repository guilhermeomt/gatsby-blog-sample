import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AvatarWrapper } from "./styles";

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <StaticImage src="../../images/profile.jpg" alt="Profile" />
    </AvatarWrapper>
  );
};
