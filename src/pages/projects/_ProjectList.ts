export interface IProject {
  name: string,
  month: string,
  year: string,
  description: Array<string>,
  company_link?: ILink,
  github_link?: ILink,
  tags: Array<string>
  readme_link?: ILink,
  demo_link?: ILink
}

export interface ILink {
  link: string;
  name: string;
}

export const PROJECTS: Array<IProject> = [
  {
    name: "😊 This Website",
    month: "Oct",
    year: "2023 - 2024",
    description: [`
      This fully mobile-responsive website was designed and written by me. (try it!)`,
      `It was developed using ReactJS with Typescript and 
      vanilla CSS (no CSS frameworks or html templates were used).
    `],
    tags: ["ReactJS", "Typescript", "Vanilla CSS"],
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/Portfolio-Site"
    }
  },
  {
    name: "🌏 Google Drive Clone",
    month: "January",
    year: "2024",
    description: [
      `A containerized full stack web application that performs a large portion of 
			the base functionality of Google Drive. Users can create an account to which they 
			can upload and download files, and they can grant and revoke access permissions 
			for other users.`
    ],
    tags: ["Typescript", "NodeJS", "ReactJS", "NextJS", "Docker"],
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/GoogleDriveClone"
    },
    readme_link: {
      link: "https://raw.githubusercontent.com/ItsNotCam/GoogleDriveClone/master/README.md",
      name: "Readme"
    }
  },
  {
    name: "⌚ VR Smart Watch",
    month: "June",
    year: "2023",
    description: [`
      A virtual reality smart watch that connects the real world to the virtual world. 
      It displays in real time a user's local time and weather, their heart rate, and more.
    `],
    tags: ["C#", "WebSockets"],
    readme_link: { name: "Readme", link: "https://raw.githubusercontent.com/ItsNotCam/BitwatchVR/master/README.md" },
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/BitwatchVR"
    }
  },
  {
    name: "⚡HeaterPi",
    month: "September",
    year: "2023",
    description: [`Full stack web application that controls the temperature in a room using a Raspberry Pi and a standard space heater.`, `Uses websockets for 
    real-time communication between the client and the device.`],
    tags: ["Python", "Typescript", "ReactJS"],
    readme_link: { name: "Readme", link: "https://raw.githubusercontent.com/ItsNotCam/HeaterPi-Server/master/README.md" },
    github_link: { name: "Repo", link: "https://github.com/ItsNotCam/HeaterPi-Server" },
  },
  {
    name: "📦\'Coordinates Book\' Minecraft Mod",
    month: "June",
    year: "2019 - 2023",
    description: [`
      Modification for the popular video game Minecraft.`,
      `This automates the process of saving your favorite locations
      within the game, replacing traditional pen-and-paper methods.
    `],
    tags: ["Java", "NoSQL"],
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/MC-Coordinates-Book"
    },
    readme_link: {
      link: "https://raw.githubusercontent.com/ItsNotCam/MC-Coordinates-Book/master/README.md",
      name: "Readme"
    }
  },
  {
    name: "📑Home File Server App",
    month: "January",
    year: "2020",
    description: [`
      Containerized full stack web application that allows me to manipulate the file 
      system of my home server.
    `],
    tags: ["Python", "Javascript", "Flask", "ReactJS", "Docker"],
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/File-Server"
    }
  },
  {
    name: "📩 PCAP Extractor",
    month: "Dec",
    year: "2019",
    description: [`
      Full stack web application developed for BAE Systems, Inc.`,
      `It extracts information from packet capture files 
      and stores them in a NoSQL database. It also exposes an API for integration into other internal tools.
    `],
    company_link: { name: "BAE Systems, Inc.", link: "https://www.baesystems.com/en/home" },
    tags: ["Python", "Javascript", "Flask", "ReactJS", "Docker", "NoSQL"]
  }
]