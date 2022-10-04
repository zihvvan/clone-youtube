import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`

.contents {
  margin-left: 240px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 100px;

  @media (max-width:1300px) {
    margin-left:80px;
    padding-left: 0;

  },

  @media (max-width:500px) {
    margin-left:0px;
    padding-left: 0;

  },
}
`;

const Body = styled.div`
  margin-top: 76px;
`;

function Layout({ active, content }) {
  return (
    <Wrapper>
      <Header />
      <Body>
        <Sidebar active={active}></Sidebar>
        <div className="contents">{content}</div>
      </Body>
    </Wrapper>
  );
}

export default Layout;
