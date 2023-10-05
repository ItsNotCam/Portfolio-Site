export interface IProject {
  location: string,
  affiliated_company?: string,
  name: string,
  month: string,
  year: string,
  description: string,
  company_link: string,
  logo_path: string,
  github_link?: ILink,
  tags: Array<string>
  readme_link?: ILink
}

export interface ILink {
  link: string;
  name: string;
}

export const PROJECTS: Array<IProject> = [
  {
    location: "Reston, VA",
    affiliated_company: "",
    name: "😊 This Website",
    month: "Oct",
    year: "2023",
    logo_path: "BAE.png",
    description: `
      This website was designed and written by me. It was developed using ReactJS with Typescript and 
      vanilla CSS (no CSS frameworks used).
    `,
    company_link: "https://www.baesystems.com/en/home",
    tags: [ "ReactJS", "Typescript", "Vanilla CSS" ],
  },
  {
    location: "Reston, VA",
    affiliated_company: "BAE Systems, Inc.",
    name: "PCAP Extractor",
    month: "Dec",
    year: "2019",
    logo_path: "BAE.png",
    description: `
      Containerized full stack web application developed for BAE Systems, Inc.
      This application extracts information from packet capture files and stores them
      in a NoSQL database.
    `,
    company_link: "https://www.baesystems.com/en/home",
    tags: [ "Python", "Javascript", "Flask", "ReactJS", "Docker" ],
  },
  {
    location: "Centreville, VA",
    name: "Home File Server App",
    month: "June",
    year: "2018",
    logo_path: "Parsons.png",
    description: `
      Containerized full stack web application that allows me to manipulate the file 
      system of my home lab.
    `,
    company_link: "https://www.parsons.com",
    tags: [ "Python", "Javascript", "ReactJS", "Flask", "Docker" ],
    github_link: {
        name: "Repo", 
        link: "https://github.com/ItsNotCam/File-Server" 
    }
  },
  {
    location: "Centreville, VA",
    name: "VR Smart Watch",
    month: "June",
    year: "2018",
    logo_path: "Parsons.png",
    description: `
      A virtual reality smart watch that connects the real world to the virtual world. 
      It displays in real time a user's local time and weather, their heart rate, and more.
    `,
    company_link: "https://www.parsons.com",
    tags: [ "C#", "WebSockets", "Multiprocessing" ],
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/BitwatchVR"
    }
  },
  {
    location: "Centreville, VA",
    name: "\'Coordinates Book\' Minecraft Mod",
    month: "June",
    year: "2018",
    logo_path: "Parsons.png",
    description: `
      Modification for the popular video game Minecraft. This automates the process of saving your favorite locations
      within the game, replacing traditional pen-and-paper methods.
    `,
    company_link: "https://www.parsons.com",
    tags: [ "Java", "NoSQL" ],
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/MC-CoordinatesBook"
    }
  },
  {
    location: "Centreville, VA",
    name: "HeaterPi",
    month: "June",
    year: "2018",
    logo_path: "Parsons.png",
    description: `Full stack web application that controls the temperature in a room using a Raspberry Pi. Uses websockets for 
    real-time communication between the client and the device.`,
    company_link: "https://www.parsons.com",
    tags: [ "Python", "Typescript", "ReactJS" ],
    readme_link: { name: "Readme", link: "https://raw.githubusercontent.com/ItsNotCam/HeaterPi-Client/master/README.md" },
    github_link:  { name: "Repo", link: "https://github.com/ItsNotCam/HeaterPi-Client" },
  }
]