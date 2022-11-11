import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "../../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const netflixContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: netflixContainer.current as HTMLDivElement,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../public/img/netflix-logo.json"),
    });

    const timer = setTimeout(() => {
      router.push("/home");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <Item ref={netflixContainer}></Item>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: 375px;
  height: 100%;
  position: fixed;
  z-index: 1000;
`;
