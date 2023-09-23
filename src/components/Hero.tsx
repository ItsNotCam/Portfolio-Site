export const Hero = (): JSX.Element => {
	return (
		<div className="centered-container no-select">
			<h1 className="header-name header-lg">
				{'\u00A0'}
				<span className="color-alt">CAM</span>ERON YOUNG
				<span className="blinking-text">_</span>
			</h1>
			<h1 className="header-name header-md">
				{'\u00A0'}
				<span className="color-alt">CAM</span>ERON Y
				<span className="blinking-text">_</span>
			</h1>
			<h1 className="header-name header-sm">
				{'\u00A0'}
				<span className="color-alt">CAM</span> Y
				<span className="blinking-text">_</span>
			</h1>
			<p className="header-description">
				SOFTWARE, LEARNING, and <span className="color-alt">COFFEE</span>
			</p>
		</div>
	)
}