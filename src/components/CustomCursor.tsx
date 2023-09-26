import { useState } from "react";
import styled from "styled-components";
interface IMousePos {
	left: number;
	top: number;
}

export const CustomCursor = (): JSX.Element => {
	const [mousePos, setMousePos] = useState<IMousePos>({ left: 0, top: 0 })

	document.addEventListener('mousemove', (e: MouseEvent) => {
		setMousePos({ left: e.pageX, top: e.pageY});
	})

	return <S.div_CustomCursor id="circle-follow" style={mousePos} />
}

const S = {
	div_CustomCursor: styled.div`
		position: absolute;
		transform: translate(-50%, -50%);
		height: 1.5em;
		width: 1.5em;
		z-index: 20;
		border: 2px solid #dddd;
		border-radius: 50%;
		pointer-events: none;
	`
}