import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import clickedHome from "../assets/icon/clicked-home.png";
import home from "../assets/icon/home.png";
import clickedExplore from "../assets/icon/clicked-explore.png";
import explore from "../assets/icon/explore.png";
import clicedSub from "../assets/icon/clicked-subscribe.png";
import subscribe from "../assets/icon/subscribe.png";
import keep from "../assets/icon/keep.png";
import viewRecord from "../assets/icon/view_record.png";
import myVideo from "../assets/icon/my_video.png";
import savedVideo from "../assets/icon/saved_video.png";
import likedVideo from "../assets/icon/liked_video.png";
import film from "../assets/icon/film.png";
import edu from "../assets/icon/edu.png";

const Sidebar = ({ active }) => {
  return (
    <Container>
      <Link to="/" className="link">
        {active === "main" ? (
          <MainMenuDiv style={{ backgroundColor: "#cacaca" }}>
            <Icon src={clickedHome}></Icon>
            <MenuSpan>홈</MenuSpan>
          </MainMenuDiv>
        ) : (
          <MainMenuDiv>
            <Icon src={home}></Icon>
            <MenuSpan>홈</MenuSpan>
          </MainMenuDiv>
        )}
      </Link>
      <Link to="/Finder" className="link">
        {active === "finder" ? (
          <MainMenuDiv style={{ backgroundColor: "#cacaca" }}>
            <Icon src={clickedExplore}></Icon>
            <MenuSpan>로그인</MenuSpan>
          </MainMenuDiv>
        ) : (
          <MainMenuDiv>
            <Icon src={explore}></Icon>
            <MenuSpan>로그인</MenuSpan>
          </MainMenuDiv>
        )}
      </Link>
      <Link to="/Subscribe" className="link">
        {active === "subscribe" ? (
          <MainMenuDiv style={{ backgroundColor: "#cacaca" }}>
            <Icon src={clicedSub}></Icon>
            <MenuSpan>회원가입</MenuSpan>
          </MainMenuDiv>
        ) : (
          <MainMenuDiv>
            <Icon src={subscribe}></Icon>
            <MenuSpan>회원가입</MenuSpan>
          </MainMenuDiv>
        )}
      </Link>
      <Line />

      <MenuDiv>
        <Icon src={keep}></Icon>
        <MenuSpan>게시판</MenuSpan>
      </MenuDiv>
      
      <Line />

      <MenuDiv></MenuDiv>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 250px;
  float: left;
  position: fixed;
  left: 0;
  height: 100%;
  text-align: left;
  overflow-y: scroll;

  @media (max-width: 1300px) {
    width: 90px;

    .title {
      display: none;
    }
  }

  .link {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 800px) {
    display: none;
  }
  ,

  /*스크롤바*/
  &::-webkit-scrollbar {
    border: none;
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar-thumb {
    background: darkgrey;
    border-radius: 8px;
  }
`;

const MainMenuDiv = styled.div`
  padding: 0px 20px 0px 20px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f3f3f3;
  }

  @media (max-width: 1300px) {
    height: 90px;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

const MenuDiv = styled.div`
  padding: 0px 20px 0px 20px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f3f3f3;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

const Icon = styled.img`
  margin-right: 20px;
  height: 25px;
  align-items: center;
  display: flex;
  float: left;

  @media (max-width: 1300px) {
    margin: 0;
  }
`;

const MenuSpan = styled.span`
  font-size: 14px;
`;

const Line = styled.div`
  height: 1px;
  background: #dedede;
  margin-top: 14px;
  margin-bottom: 14px;

  @media (max-width: 1300px) {
    display: none;
  }
`;
