import styled from "styled-components"
import { CS } from "../../ConstantStyles"

export const Credits = (): JSX.Element => {
  return (
    <S.div_Credits>
      <p>Background image 
        by <a href="https://www.freepik.com/free-vector/realistic-polygonal-background_13294928.htm" target="_blank">pikisuperstar</a>
      </p>
      <p>
        Written by <span className="color-alt">
        Cameron Young</span>
      </p>
      <p>
        Inspired by <a href="https://tamalsen.dev" target="_blank">
          Tamal Sen</a>
      </p>
    </S.div_Credits>
  )
}

const S = {
  div_Credits: styled.div`
    text-align: left;
    position: absolute;
    top: 3vh;
    left: 1.5vw;

    a {
      text-decoration: none;
      color: ${CS.color_alt}
    }
  `,
  span_ColorAlt: styled.span`
    color: ${CS.color_alt}
  `
}
