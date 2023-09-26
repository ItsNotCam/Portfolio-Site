import styled from "styled-components"

export const Socials = (): JSX.Element => {
  return (
    <S.div_Socials>
      <a href="https://github.com/ItsNotCam" target="_blank">
        <img src="GitHub.png"/>
      </a>
      <a href="https://www.linkedin.com/in/cameron-young-37b173129/" target="_blank">
        <img src="LinkedIn.png"/>
      </a>
    </S.div_Socials>
  )
}

const S = {
  div_Socials: styled.div`
    position: fixed;
    top: 48vh;
    left: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 15px;
    transform: translateY(-50%);

    img {
      width: 25px;
      height: 25px;
      margin: 5px 12px;
      z-index: 5;
      transition: filter 0.2s;

    };

    img:hover {
      filter: drop-shadow(0 0px 5px white);
    };

  `,
}