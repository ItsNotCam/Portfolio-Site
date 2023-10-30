import './_Projects.css';
import './_Markdown.css';

import { useState } from "react";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IReadmeContentProps {
  content: string; 
  visible: boolean, 
  setShowReadmeVisible: (show: boolean) => void
}

export const ReadmeContent = (props: IReadmeContentProps): JSX.Element => {
  const [canHideContent, setCanHideConent] = useState<boolean>(false);

  let mouseContext: any = {
    onMouseEnter: () => setCanHideConent(false),
    onMouseLeave: () => setCanHideConent(true)
  }

  const tryHideContent = () => {
    if(canHideContent) {
      hideContent();
    }
  }

  const hideContent = () => {
    let md: HTMLElement | null = document.getElementById("markdown");
    md?.classList.add("slide-out");
      setTimeout(() => {
          props.setShowReadmeVisible(false);
          md?.classList.remove("slide-out"); 
      }, 400);
  }

  return (
    <div className={`readme-container ${props.visible ? "" : "readme-hidden"}`} onClick={tryHideContent}>
      <ClearOutlinedIcon 
        className="md-icon-button color-alt-hover" 
        style={{fontSize: "3rem"}} 
        onClick={hideContent} 
      />
      <div id="markdown" className={"readme-content markdown"} {...mouseContext}>
        <Markdown remarkPlugins={[remarkGfm]}>
          {props.content}
        </Markdown>
      </div>
    </div>
  );
};
