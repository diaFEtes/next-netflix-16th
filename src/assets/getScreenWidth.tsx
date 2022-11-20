// 반응형? 을 위해 화면크기를 받아오는 함수입니다
import { useState, useEffect } from "react";

export function GetScreenWidth() {
  const [windowWidth, setWindowWidth] = useState(0)
  console.log('1')

  // resize 될때만 함수 불러오기
  let timer:NodeJS.Timeout
  const resizeWindow = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // 현재 window width 값
      setWindowWidth(window.innerWidth)
      console.log('2')
    }, 500)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", resizeWindow)
    console.log('3')
    return () => {
      window.removeEventListener("resize", resizeWindow)
      console.log('4')
    }
  }, [windowWidth])

  return windowWidth;
}