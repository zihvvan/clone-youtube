import React from "react";
import styled from "styled-components";
import LargeVideo from "../component/Finder/LargeVideo";
import { useState, useEffect } from "react";
import axios from "axios";

import popular from "../assets/card/popular.png";
import music from "../assets/card/music.png";
import movie from "../assets/card/movie.png";
import game from "../assets/card/game.png";
import sport from "../assets/card/sport.png";
import learn from "../assets/card/learn.png";

const Finder = () => {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://3.38.67.46:8080/user/1/video/list/recommend"
        );
        setVideos(response.data);
        console.log(videos);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Wrapper />;
  }

  if (!videos) {
    return <div>데이터없다!</div>;
  }

  return (
    <Wrapper>
      <Cards>
        <Card src={popular} />
        <Card src={music} />
        <Card src={movie} />
        <Card src={game} />
        <Card src={sport} />
        <Card src={learn} />
      </Cards>
      {videos.map((i) => (
        <LargeVideo index={i.videoIdx} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70vw;

  @media (max-width: 1300px) {
    width: 80vw;
  }
  @media (max-width: 800px) {
    width: 80vw;
  }
`;

const Cards = styled.div`
  margin-bottom: 50px;
`;
const Card = styled.img`
  width: 210px;
  height: 116px;
  border-radius: 10px;

  :hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`;

export default Finder;
