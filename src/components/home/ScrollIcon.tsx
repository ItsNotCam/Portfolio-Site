import { BrowserView } from "react-device-detect"

export const ScrollIcon = (): JSX.Element => {
  return (
    <BrowserView>
      <section id="scroll" className="scroll">
        <a href="#about"><span></span></a>
      </section>
    </BrowserView>
  )
}