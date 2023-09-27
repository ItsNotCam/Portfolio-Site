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


	return (
		<S.div_CustomCursor id="circle-follow" style={mousePos}>
			<S.div_CustomCursorTwo />
		</S.div_CustomCursor>
	)
}

const S = {
	div_CustomCursor: styled.div`
		position: absolute;
		transform: translate(-50%, -50%);
		/* height: 1.5em;
		width: 1.5em; */
		height: 100vh;
		width: 100vh;
		z-index: 20;
		/* border: 2px solid #dddd; */
		border-radius: 50%;
		pointer-events: none;
		overflow: hidden !important;
	`,

	div_CustomCursorTwo: styled.div`
		width: 100%;
		height: 100%;
		z-index: 9999;
		background: radial-gradient(400px, rgba(134, 134, 134, 0.068), transparent 80%);
		pointer-events: none;
		overflow: hidden !important;
	`
}