export interface IExperience {
  company: string,
  location: string,
  title: string,
  start_month: string,
  start_year: string,
  end_month: string,
  end_year: string,
  job_description: Array<string>,
  company_link: string,
  logo_path: string,
  links: Array<ILink>,
  tags: Array<string>
}

export interface ILink {
  link: string;
  name: string;
}

export const EXPERIENCE: Array<IExperience> = [
  {
    company: "BAE Systems, Inc.",
    location: "Reston, VA",
    title: "DevOps Software Engineering Intern",
    start_month: "Dec",
    start_year: "2019",
    end_month: "March",
    end_year: "2020",
    logo_path: "BAE.png",
    job_description: [`
      Independently developed a full stack web application to assist cyber security professionals in 
      analyzing packet capture data.`, `I was given an empty slate and took the app from planning to 
      architecture and finally development.`, `This application included a front end for uploading and viewing 
      data as well as a back end REST API to allow users to integrate the tool into their own 
      automation processes.
    `],
    company_link: "https://www.baesystems.com/en/home",
    tags: ["Python", "JavaScript", "Flask", "ReactJS", "Material UI", "Bootstrap", "Docker", "NoSQL"],
    links: []
  },
  {
    company: "BAE Systems, Inc.",
    location: "Reston, VA",
    title: "IT Intern",
    start_month: "May",
    start_year: "2019",
    end_month: "Dec",
    end_year: "2019",
    logo_path: "BAE.png",
    job_description: [`
      My work on this project was acknowledged by the VP of IT at BAE Systems who offered me a full 
      time position and a full ride to my university.`, ` I lead the design and development of a Windows 
      sytem performance testing tool that accurately quantified the performance impacts of various 
      software components on BAE's standard system image.`, `System Administrators who recorded performance
      data using this tool reported time savings in excess of 75% over their previous 
      methods.`, `The resulting data was used to influence future hardware and software requisition.
    `],
    company_link: "https://www.baesystems.com/en/home",
    tags: ["Windows", "Powershell"],
    links: []
  },
  {
    company: "Parsons Corporation",
    location: "Centreville, VA",
    title: "ITOps Junior Software Engineering Intern",
    start_month: "June",
    start_year: "2018",
    end_month: "August",
    end_year: "2018",
    logo_path: "Parsons.png",
    job_description: [`
      I implemented a feature into an internal tool that allowed for the selection of specific key exchange 
      algorithms for tunneling. 
    `],
    company_link: "https://www.parsons.com",
    tags: ["Python", "Flask", "Docker", "Docker Compose", "Unix"],
    links: []
  }
]