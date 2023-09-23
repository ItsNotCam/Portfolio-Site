import { useState } from "react";
interface IMousePos {
	left: number;
	top: number;
}

export const CustomCursor = (): JSX.Element => {
	const [mousePos, setMousePos] = useState<IMousePos>({ left: 0, top: 0 })

	document.addEventListener('mousemove', (e: MouseEvent) => {
		setMousePos({ left: e.pageX, top: e.pageY });
	})

	return (
		<div className='circle-follow no-cursor'
			id="circle-follow"
			style={mousePos} />
	)
}