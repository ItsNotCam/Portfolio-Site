export interface IProjects {
  location: string,
  affiliated_company?: string,
  name: string,
  start_month: string,
  start_year: string,
  end_month: string,
  end_year: string,
  description: string,
  company_link: string,
  logo_path: string,
  github_links?: Array<ILink>,
  other_links?: Array<ILink>
  tags: Array<string>
}

export interface ILink {
  link: string;
  name: string;
}

export const ProjectsConstants: Array<IProjects> = [
  {
    location: "Reston, VA",
    affiliated_company: "BAE Systems, Inc.",
    name: "PCAP Extractor",
    start_month: "Dec",
    start_year: "2019",
    end_month: "March",
    end_year: "2020",
    logo_path: "BAE.png",
    description: `
      Containerized full stack web application developed for BAE Systems, Inc.
      This tool ingests packet capture files, extracts important information using a 
      Zeek script, then stores the parsed data in a NoSQL database. It exposes
      a front end to perform these tasks as well as a back end REST API which can be 
      integrated into other internal tools.
    `,
    company_link: "https://www.baesystems.com/en/home",
    tags: [ "Python", "Javascript", "Flask", "ReactJS", "Material UI", "Bootstrap", "Zeek", 
      "Docker", "Docker Compose", "NoSQL" ],
  },
  // {
  //   location: "Reston, VA",
  //   name: "Weather Man",
  //   start_month: "May",
  //   start_year: "2019",
  //   end_month: "Dec",
  //   end_year: "2019",
  //   logo_path: "BAE.png",
  //   description: `
  //     Containerized full stack web application running on Raspberry PI.
  //     Retrieves weather data, stores and parses it, and uses AWS Polly to 
  //     translate the parsed output to audio for playback to the user.
  //   `,
  //   company_link: "https://www.baesystems.com/en/home",
  //   tags: [ "Python", "Javascript", "Python Flask", "MongoDB", "AWS Polly","Unix", 
  //     "Python", "ReactJS", "NodeJS", "Bootstrap", "SQL", "Docker", "Docker Compose" ],
  //   links: [ 
  //     // { name: "Company", link: "https://www.baesystems.com/en/home" },
  //   ]
  // },
  {
    location: "Centreville, VA",
    name: "Home File Server App",
    start_month: "June",
    start_year: "2018",
    end_month: "August",
    end_year: "2018",
    logo_path: "Parsons.png",
    description: `
      Containerized full stack web application that allows me to manipulate the file 
      structure of my home lab. The back end REST API is written in Python using the 
      Flask library, and the front end is written in Javascript using the ReactJS library.
    `,
    company_link: "https://www.parsons.com",
    tags: [ "Python", "Javascript", "ReactJS", "Unix", "Flask", "Docker", "Docker Compose" ],
    github_links: [{
        name: "Repo", 
        link: "https://github.com/ItsNotCam/File-Server" 
    }]
  },
  {
    location: "Centreville, VA",
    name: "VR Smart Watch",
    start_month: "June",
    start_year: "2018",
    end_month: "August",
    end_year: "2018",
    logo_path: "Parsons.png",
    description: `
      Smart watch for a virtual reality game. It connects the real world to the virtual world 
      in a tangeable way by displaying real world time and date, real world weather forecasts, and real 
      world heart rate readings. All of this is projected onto a watch on your wrist inside the virtual 
      reality platform.
    `,
    company_link: "https://www.parsons.com",
    tags: [ "C#", "WebSockets", "Multiprocessing" ],
    github_links: [{
      name: "Repo",
      link: "https://github.com/ItsNotCam/BitwatchVR"
    }] 
  },
  {
    location: "Centreville, VA",
    name: "Minecraft \'Coordinates Book\' Multiplayer Plugin",
    start_month: "June",
    start_year: "2018",
    end_month: "August",
    end_year: "2018",
    logo_path: "Parsons.png",
    description: `
      Assisted in the development of a conceptual REST API that would provide authentication and authorization over LDAP.
      Additionally I implemented a feature into an internal tool that allowed for the selection of specific key exchange 
      algorithms for tunneling. 
    `,
    company_link: "https://www.parsons.com",
    tags: [ "Java", "NoSQL" ],
    github_links: [{
      name: "Repo",
      link: "https://github.com/ItsNotCam/MC-CoordinatesBook"
    }]
  },
  {
    location: "Centreville, VA",
    name: "HeaterPi",
    start_month: "June",
    start_year: "2018",
    end_month: "August",
    end_year: "2018",
    logo_path: "Parsons.png",
    description: `
      HeaterPi is a full-stack web application that allows users to remotely control and monitor the temperature in a 
      room using a Raspberry Pi. It utilizes websockets such that the temperature can be shown in real-time.
    `,
    company_link: "https://www.parsons.com",
    tags: [ "Python", "Typescript", "WebSockets", "ReactJS" ],
    github_links: [ 
      { name: "Client", link: "https://github.com/ItsNotCam/HeaterPi-Client" },
      { name: "Server", link: "https://github.com/ItsNotCam/HeaterPi-Server" }
    ]
  }
]