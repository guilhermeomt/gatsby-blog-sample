import React from "react";
import * as S from "./styles";

const PostItem = () => (
  <S.PostItemLink cover direction="right" duration={0.6}>
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          12 de Agosto de 2021 • 30 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>Meu primeiro post!</S.PostItemTitle>
        <S.PostItemDescription>
          Inaugurando o blog (finalmente!)
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

export default PostItem;
