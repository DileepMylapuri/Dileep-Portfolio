import HomeLogo from './Home.jpg';
import BoyLogo from './gallery/boy-model.webp';
import GirlLogo from './girl-model.jpg';
import SingleLogo from './gallery/single-person.webp';
import TeamLogo from './gallery/team.webp';
import Building1 from './Building1.jpg';
import Building2 from './building2.jpg';
import Building3 from './building3.jpg';
import Building4 from './building4.jpg';
import Building5 from './gallery/building5.webp';
import Building6 from './gallery/building6.webp';
import Airplain from './gallery/airplane.webp';
import Accenture from '../assets/accenture.png';
import Amazon from '../assets/amazon.png';
import Cognizant from '../assets/cognizant.png';
import Dell from '../assets/dell.png';
import Deloitte from '../assets/deloitte.png';
import Flipkart from '../assets/Flipkart.png';
import Google from '../assets/google.png';
import HCL from '../assets/hcl.png';
import IBM from '../assets/ibm.png';
import Infosys from '../assets/infosys.png';
import Intel from '../assets/intel.png';
import JPMorgan from '../assets/JPMorgan.png';
import Meta from '../assets/meta.png';
import Microsoft from '../assets/microsoft.png';
import Oracle from '../assets/oracle.png';
import Qualcomm from '../assets/Qualcomm.png';
import TCS from '../assets/tcs.png';
import TechMahindra from '../assets/techmahindra.png';
import Uber from '../assets/Uber.png';
import Html5 from '../assets/html5.png';
import Css3 from '../assets/css3.png';
import JavaScript from '../assets/js.png';
import React from '../assets/ReactJS.png';
import Redux from '../assets/redux.png';
import Responsive from '../assets/responsive.png';
import Native from '../assets/native.png';
import MongoDB from '../assets/mongodb.png';
import NodeJs from '../assets/nodejs.png';
import Express from '../assets/express.png';
import Bootstrap from '../assets/bootstrap.png';
import TailwindCSS from '../assets/tailwindcss.png';
import Python from '../assets/python.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';
import API from '../assets/api.png';
import TypeScript from '../assets/typescript.png';
import NextJS from '../assets/nextjs.png';
import SQL from '../assets/sql.png';
import Dileep from '../assets/Dileep.jpg';
import Lee from '../assets/Lee.jpg';
import MSDileep from '../assets/MSDileep.png';
import DileepSoftDev from '../assets/generated-image.png';
import DileepSoftDev1 from '../assets/DileepSoftDev7.png';
import BgVideo from '../assets/BgVideo.mp4';

export const ImageData = {
    BgVideo,
    HomeLogo,
    BoyLogo,
    Dileep,
    MSDileep, 
    Lee,
    GirlLogo,
    SingleLogo,
    TeamLogo,
    Building1,
    Building2,
    Building3,
    Building4,
    Building5,
    Building6,
    Airplain,
    DileepSoftDev,
    DileepSoftDev1,
};


export const Courosels = [
    {id:1, src: Building1},
    {id:2, src: Building2},
    {id:3, src: Building3},
    {id:4, src: Building4},
    {id:5, src: Building5},
    {id:6, src: Building6},
    {id:7, src: Airplain },
]


export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    client: "Personal Project",
    period: "January 2023 - March 2023",
    type: "personal",
    description: "Built a comprehensive e-commerce admin dashboard with real-time analytics, inventory management, and order processing capabilities using modern React.js ecosystem.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
    features: [
      "Real-time sales analytics and reporting",
      "Inventory management with stock alerts",
      "Order processing and status tracking",
      "Customer management dashboard",
      "Responsive charts and data visualization"
    ],
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "Chart.js", "Axios"],
    githubUrl: "https://github.com/dileepmylapuri/ecommerce-dashboard",
    liveUrl: "http://leefurniturekart.netlify.app",
    featured: false,
    createdAt: new Date("2023-01-01")
  },
  {
  id: 2,
  title: "Spotify Like Music App",
  client: "Personal Project",
  period: "May 2024 - June 2024",
  type: "personal",
  description: "Built a Spotify-style music streaming app using React. Users can browse albums, play songs, and explore music categorized by language and genre.",
  image: "https://i.pinimg.com/736x/2e/89/e3/2e89e310f49a76343932e0d216d6323b.jpg",
  features: [
    "Play, pause, and skip music",
    "Language-based album categorization",
    "Responsive music player UI",
    "Reusable component design",
    "Dark theme support"
  ],
  technologies: ["React.js", "Tailwind CSS", "JavaScript", "React Context"],
  githubUrl: "https://github.com/dileepmylapuri/spotify-clone",
  liveUrl: "https://leespotifyboat.netlify.app/",
  featured: false,
  createdAt: new Date("2024-05-01")
},
{
  id: 3,
  title: "YouTube Clone App",
  client: "Personal Project",   
  period: "March 2024 - April 2024",
  type: "personal",
  description: "Developed a YouTube-like platform that allows users to explore and play videos using YouTube Data API. Focused on responsive layout and routing.",
  image: "https://i.pinimg.com/1200x/a9/42/60/a9426006d5196b3fe89afb552b24bce5.jpg",
  features: [
    "YouTube Data API integration",
    "Video search and listing",
    "Responsive layout for all devices",
    "Dynamic routing with video playback",
    "Theme-based styling"
  ],
  technologies: ["React.js", "JavaScript", "React Router", "Tailwind CSS"],
  githubUrl: "https://github.com/dileepmylapuri/youtube-clone",
  liveUrl: "https://msyoutubelee.netlify.app",
  featured: false,
  createdAt: new Date("2024-03-01")
},
  {
    id: 4,
    title: "Task Management App",
    client: "Personal Project",
    period: "October 2022 - December 2022",
    type: "personal",
    description: "Developed a full-featured task management application with drag-and-drop functionality, team collaboration features, and real-time updates using React.js and modern state management.",
    image: "https://i.pinimg.com/1200x/a7/84/0e/a7840e856f7f968ec1666d71f8113922.jpg",
    features: [
      "Drag and drop task organization",
      "Team collaboration and assignments",
      "Real-time notifications and updates",
      "Project timeline and milestone tracking",
      "Mobile-responsive design"
    ],
    technologies: ["React.js", "Context API", "React DnD", "Firebase", "Material-UI"],
    githubUrl: "https://github.com/dileepmylapuri/task-manager",
    liveUrl: "https://lee-drag-drop-project.vercel.app/",
    featured: false,
    createdAt: new Date("2022-10-01")
  },
{
  id: 5,
  title: "WhatsApp Chat UI",
  client: "Personal Project",
  period: "February 2024",
  type: "personal",
  description: "Designed a real-time chat UI inspired by WhatsApp. It features user lists, dynamic chat screens, and smooth sidebar layout using React and CSS.",
  image: "https://i.pinimg.com/736x/3d/71/33/3d7133f6079d8cc7c1d6cb120dd7fb56.jpg",
  features: [
    "Sidebar with active chat users",
    "Dynamic chat container and routing",
    "Responsive chat layout",
    "User login and state management",
    "Componentized structure"
  ],
  technologies: ["React.js", "CSS3", "React Router", "JavaScript"],
  githubUrl: "https://github.com/dileepmylapuri/whatsapp-ui",
  liveUrl: "https://dileeprealtimechatapp.netlify.app/",
  featured: false,
  createdAt: new Date("2024-02-01")
},
{
  id: 6,
  title: "Directors Hub",
  client: "Personal Project",
  period: "January 2024 - February 2024",
  type: "personal",
  description: "A creative platform to explore Indian film directors and their popular movies. Categorized by language and genre, it helps users discover cinematic work.",
  image: "https://i.pinimg.com/1200x/54/e2/cd/54e2cd545ddbb6256ebca8a57e49366a.jpg",
  features: [
    "Director-based movie categorization",
    "Language filter with routing",
    "Responsive layout with visual emphasis",
    "Hover animations and styling",
    "Optimized component rendering"
  ],
  technologies: ["React.js", "Tailwind CSS", "JavaScript", "React Router"],
  githubUrl: "https://github.com/dileepmylapuri/directors-hub",
  liveUrl: "https://leedirectorshub.netlify.app/",
  featured: false,
  createdAt: new Date("2024-01-01")
},
{
  id: 7,
  title: "Real-Time Chat App",
  client: "Personal Project",
  period: "December 2023 - January 2024",
  type: "personal",
  description: "Built a real-time messaging app with WebSocket integration, user login, and live chat updates. Designed to replicate modern chat experience.",
  image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=800&h=400",
  features: [
    "Real-time messaging with WebSockets",
    "User authentication and chat history",
    "Live status indicators",
    "Message grouping and timestamps",
    "Responsive chat interface"
  ],
  technologies: ["React.js", "Node.js", "Socket.io", "Tailwind CSS", "Express.js"],
  githubUrl: "https://github.com/dileepmylapuri/realtime-chat-app",
  liveUrl: "https://leeteamschatapp.netlify.app",
  featured: false,
  createdAt: new Date("2023-12-01")
},
{
  id: 8,
  title: "Wikipedia Search Engine",
  client: "Personal Project",
  period: "August 2023 - September 2023",
  type: "personal",
  description: "Built a Wikipedia search engine app for getting the input to required users include the data like google search application. Designed to replicate modern UI experience.",
  image: "https://images.unsplash.com/photo-1657256031790-e898b7b3f3eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
  features: [
    "Wkipedia for gathering the data",
    "User knowing with information about the wikipedia info",
    "User analyse the status indicators",
    "Informations grouping and updated details",
    "Responsive design with the react and tailwind css"
  ],
  technologies: ["React.js", "React Functionalities" ,"Tailwind CSS", "JavaScript"],
  liveUrl: "https://leewikipediasearchengine.netlify.app/",
  featured: false,
  createdAt: new Date("")
},
{
  id: 9,
  title: "Speech Synthesis",
  client: "Personal Project",
  period: "June 2023 - June 2023",
  type: "personal",
  description: "Built a Speech Synthesis app for hearing the input users given inside the inout data like google search application. Designed to replicate modern UI experience.",
  image: "https://images.unsplash.com/photo-1656099707461-d9a6d60a6783?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dm9pY2UlMjBjb252ZXJzYXRpb24lMjBnb29nbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  features: [
    "Speech synthesis to managing the data",
    "User knowing with voice to the text",
    "User analyse the status indicators",
    "Message grouping and updated values",
    "Responsive design with the react and tailwind css"
  ],
  technologies: ["React.js", "Speech Synthesis", "Tailwind CSS","JavaScript"],
  liveUrl: "https://leespeechsynthesis.netlify.app/",
  featured: false,
  createdAt: new Date("")
},
{
  id: 10,
  title: "Country Population Counter",
  client: "Personal Project",
  period: "April 2023 - April 2023",
  type: "personal",
  description: "Built a Country Population Counter app for finding the population count of the all country data. Designed to replicate modern UI experience.",
  image: "https://media.istockphoto.com/id/1315728897/photo/top10-countries-of-population-in-the-world.webp?a=1&b=1&s=612x612&w=0&k=20&c=y8q-G5y2F3e1IUWO7_jF5o1LsaV5BDHmgHdIHXsJEgU=",
  features: [
    "Country Population Counter to managing the data",
    "User getting the countries with population count",
    "Responsive design with the react and tailwind css",
    "User analyse the status indicators",
    "API Integration to getting data",
  ],
  technologies: ["React.js", "API Integration", "Tailwind CSS","JavaScript"],
  liveUrl: "https://leecountrypopulationfinder.netlify.app",
  featured: false,
  createdAt: new Date("")
},

];



export const CompanyData = [
    {id:1, img: Accenture},
    {id:2, img: Amazon},
    {id:3, img: Cognizant},
    {id:4, img: Dell},
    {id:5, img: Deloitte},
    {id:6, img: Flipkart},
    {id:7, img: Google},
    {id:8, img: HCL},
    {id:9, img: IBM},
    {id:10, img: Infosys},
    {id:11, img: Intel},
    {id:12, img: JPMorgan},
    {id:13, img: Meta},
    {id:14, img: Microsoft},
    {id:15, img: Oracle},
    {id:16, img: Qualcomm},
    {id:17, img: TCS},
    {id:18, img: TechMahindra},
    {id:19, img: Uber},
    {id:20, img: Oracle},
];


export const TechnicalSkills = [
  {
    id: 1,
    name: "HTML5",
    image: Html5,
    description: "Markup language used to structure web content."
  },
  {
    id: 2,
    name: "CSS3",
    image: Css3,
    description: "Style sheet language for designing web pages with layout and animations."
  },
  {
    id: 3,
    name: "JavaScript (ES6+)",
    image: JavaScript,
    description: "Core scripting language for interactive web applications."
  },
  {
    id: 4,
    name: "React.js",
    image:React,
    description: "JavaScript library for building fast and interactive user interfaces."
  },
  {
    id: 5,
    name: "Redux & Redux Toolkit",
    image: Redux,
    description: "State management libraries for managing complex application state."
  },
  {
    id: 6,
    name: "Node.js",
    image: NodeJs,
    description: "JavaScript runtime environment for backend development."
  },
  {
    id: 7,
    name: "Express.js",
    image: Express,
    description: "Web application framework for Node.js to build APIs and server-side logic."
  },
  {
    id: 8,
    name: "Tailwind CSS",
    image: TailwindCSS,
    description: "Utility-first CSS framework for custom user interfaces."
  },
  {
    id: 9,
    name: "Bootstrap",
    image: Bootstrap,
    description: "Front-end CSS framework for responsive web design."
  },
  {
    id: 10,
    name: "Responsive Design",
    image: Responsive,
    description: "Building mobile-first, adaptive layouts for all screen sizes."
  },
  {
    id: 11,
    name: "API Integration",
    image: API,
    description: "Connecting frontend applications to backend services using REST APIs or Fetch/Axios."
  },
  {
    id: 12,
    name: "Git",
    image: Git,
    description: "Distributed version control system for tracking code changes and collaborating efficiently."
  },
  {
    id: 13,
    name: "GitHub",
    image:GitHub,
    description: "Cloud-based platform for hosting Git repositories, collaboration, and code management."
  },
  {
    id: 14,
    name: "TypeScript",
    image: TypeScript,
    description: "Typed superset of JavaScript that improves code reliability and maintainability."
  },
  {
    id: 15,
    name: "Next.js (Basics)",
    image: NextJS,
    description: "React framework for building server-rendered and static web applications with built-in routing."
  },
  {
    id: 16,
    name: "SQL (Basics)",
    image: SQL,
    description: "Standard language for querying and managing data in relational databases."
  },
  {
    id: 17,
    name: "MongoDB (Basics)",
    image: MongoDB,
    description: "NoSQL database used for flexible and scalable data storage."
  },
  {
    id: 18,
    name: "React Native (Basics)",
    image: Native,
    description: "Framework for building cross-platform mobile apps using React."
  },
  {
    id: 19,
    name: "Python (Basics)",
    image: Python,
    description: "High-level programming language used for scripting and automation."
  },


]



export const statusData = [
  {
    id: 1,
    iconPath: "M64 144C64 117.5 85.5 96 112 96L208 96C234.5 96 256 117.5 256 144L256 160L384 160L384 144C384 117.5 405.5 96 432 96L528 96C554.5 96 576 117.5 576 144L576 240C576 266.5 554.5 288 528 288L432 288C405.5 288 384 266.5 384 240L384 224L256 224L256 240C256 247.3 254.3 254.3 251.4 260.5L320 352L400 352C426.5 352 448 373.5 448 400L448 496C448 522.5 426.5 544 400 544L304 544C277.5 544 256 522.5 256 496L256 400C256 392.7 257.7 385.7 260.6 379.5L192 288L112 288C85.5 288 64 266.5 64 240L64 144z",
    value: projectsData.length,
    title: "Projects",
    description: "Built Responsively and Dynamically"
  },
  {
    id: 2,
    iconPath: "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z",
    value: TechnicalSkills.length,
    title: "Technologies",
    description: "Learned and practised through projects"
  },
  {
    id: 3,
    iconPath: "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z",
    value: "2",
    title: "Games",
    description: "Playable demos built for fun and practice"
  },
  {
    id: 4,
    iconPath: "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z",
    value: "2022",
    title: "Post Graduate",
    description: "MBA (Travel and Tourism Administration Management)"
  }
];
