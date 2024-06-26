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
      This website was designed and written by me.`,
      `It was developed using ReactJS with Typescript and 
      vanilla CSS.
    `],
    tags: ["ReactJS", "Typescript", "Vanilla CSS"],
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/Portfolio-Site"
    }
  },
	{
    name: "🚀 Pokescrape",
    month: "May",
    year: "2024",
    description: [
      "A web scraper that scrapes 'pokemondb.net'",
			"It stores the scraped Pokemon data in a PostgreSQL database that holds several entities. These entities facilitate " +
			"the adequate storage and categorization of the vast amount of information that the Pokemon game mechanics hold."
    ],
    tags: ["Python", "SQL (PostgreSQL)"],
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/Pokescrape"
    },
    readme_link: {
      link: "https://raw.githubusercontent.com/ItsNotCam/Pokescrape/master/README.md",
      name: "Readme"
    }
	},
	{
    name: "💸 Pico",
    month: "February",
    year: "2024",
    description: [
      "An HTML, CSS, and JQuery website displaying a fake smartphone ad.",
			"It is my first attempt at a pure static site with a heavy focus on CSS (semi-responsive), and it " +
			"was created as a school project.",
			"Due to its quality, the professor openly admitted that they believed me to be cheating."
    ],
    tags: ["HTML", "CSS (PostCSS)", "JQuery", "JavaScript", "TypeScript", "Webpack"],
    github_link: {
      name: "Repo",
      link: "https://github.com/ItsNotCam/Pico"
    },
		demo_link: {
			link: "https://mason.gmu.edu/~cyoung35/index.html",
			name: "Demo"
		}
	},
  {
    name: "🌏 Cloud File Sharing App",
    month: "January",
    year: "2024",
    description: [
      "A containerized full stack web application that performs a large portion of " +
			"the base functionality of a cloud file sharing application. ",
			"Users can create an account to which they can upload and download files, as " +
			"well as can grant and revoke access permissions to those files for other users."
    ],
    tags: ["Typescript", "NodeJS", "ReactJS", "NextJS", "Docker", "SQL (MySQL)"],
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
    tags: ["Java", "SQL (SQLite)"],
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
      and stores them in a SQLite database. It also exposes an API for integration into other internal tools.
    `],
    company_link: { name: "BAE Systems, Inc.", link: "https://www.baesystems.com/en/home" },
    tags: ["Python", "Javascript", "Flask", "ReactJS", "Docker", "SQL (SQLite)"]
  }
]