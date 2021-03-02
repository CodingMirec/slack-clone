import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import AccessTimeIcon from "@material-ui/icons/AccessTime";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)``;
