import { useState } from "react";
import styled from "styled-components";
interface IMousePos {
	left: number;
	top: number;
}

export default function CustomCursor(): JSX.Element {
	const [mousePos, setMousePos] = useState<IMousePos>({ left: 0, top: 0 })
	// const [isHoveringOverClickable, setIsHoveringOverClickable] = useState<boolean>(false)

	document.addEventListener('mousemove', (e: MouseEvent) => {
		setMousePos({ left: e.pageX, top: e.pageY});
	})

	// document.onmouseover = function(e) {
	// 	let target: any = e.target;
	// 	let tagName: string = target.tagName;
	// 	let classList: any = target.classList;

	// 	let clickable: boolean = classList.contains("clickable") 
	// 		|| tagName === "A" || tagName === "BUTTON";

	// 	setIsHoveringOverClickable(clickable);
	// }

	return <S.div_CustomCursor id="circle-follow" style={mousePos} />;
	// if(isHoveringOverClickable) {
	// 	return <S.div_CustomCursorHover id="circle-follow" style={mousePos}/>;
	// } else {
	// 	return <S.div_CustomCursor id="circle-follow" style={mousePos} />;
	// }
}

const S = {
	div_CustomCursor: styled.div`
		position: absolute;
		transform: translate(-50%, -50%);
		height: 1.5em;
		width: 1.5em;
		z-index: 9999;
		border: 2px solid #dddd;
		border-radius: 50%;
		pointer-events: none;
		overflow: hidden !important;
	`,

	div_CustomCursorHover: styled.div`
		position: absolute;
		transform: translate(-50%, -50%);
		height: 3em;
		width: 3em;
		z-index: 9999;
		background-color: rgba(12,12,12,0.4);
		border: 2px solid #dddd;
		border-radius: 50%;
		pointer-events: none;
		overflow: hidden !important;
	`,
}