import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ncbsLogo,
    asiaTechLogo,
    pharmScrollLogo,
    dwDLogo,
    nimbus,
    DPS,
    HyperLedger
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const resumeLinks = "https://drive.google.com/drive/folders/10_K6fUxk2qrDSDG3OHmTkHM43rw6cIky"
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Research Fellowship",
      company_name: "National Centre For Biological Sciences Bengaluru",
      icon: ncbsLogo,
      iconBg: "#383E56",
      date: "June 2022 - July 2022",
      points: [
        "Research Experience: Interpretation of more than 30 research papers to compare and analyze the state of an art method in applying deep learning to biology",
        "Hands-on Experience: Software analyzing and debugging along with manual annotation of cryoTomographs and application of deep-learning techniques to classify and locate protein particles in cryoTomographs.",
        "Problem Solving Teamwork: Strong problem-solving skills and ability to work independently and as part of a team to achieve research goals and understand research methodology",
        
      ],
    },
    
    {
      title: "React Js Developer",
      company_name: "Asia Tech Journal",
      icon: asiaTechLogo,
      iconBg: "#E6DEDD",
      date: "July 2022 - August 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "Python Developer (WebScraper)",
      company_name: "Pharmscroll",
      icon: pharmScrollLogo,
      iconBg: "#FFF",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "UI/UX Mentorship",
      company_name: "DesignWithDesigners",
      icon: dwDLogo,
      iconBg: "black",
      date: "Feb 2023 - April 2023",
      points: [
        "Participated in a comprehensive learning experience for beginners",
        "Received mentorship and feedback from experienced designers",
        "Collaborated with other mentees and developed communication and teamwork abilities",
        
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Digital Product School",
      icon: DPS,
      iconBg: "black",
      date: "May 2023 - July2023",
      points: [
       
        "Created Histourists an immersive web app that unveiled Munich’s rich history and boosted historical engagement by an impressive 60% .",
        "Utilized Agile methodologies to drive MVP development in just 3 months, addressing real-world challenges and user testing with 10  nline and offline users.",
        "Collaborated seamlessly with a cross-functional team of 5 members, Integrating React, AWS, LLM Model and PostgreSQL to craft innovative, human-centric solutions."
        
      ],
    },
    {
      title: "Open Source Contributor/Mentee",
      company_name: "HyperLedger Foundation",
      icon: dwDLogo,
      iconBg: "black",
      date: "June 2023 - Nov 2023",
      points: [
        "Architected the upgrade of Iroha 2 Blockchain Explorer,leveraging Rust to seamlessly incorporate the latest Iroha version; meticulously reviewed and merged 4 PRs to fortify system reliability and performance",
        "Functioned effectivly within a diverse international team of 24+ members, alongside 2 mentors"
      ],
    },
  ];
  
  const educations = [
    {
      
      name: "NIT Hamirpur",
      duration: "Dec 2020 - July 2024",
      degree:"B.Tech",
      education:
        "Computer Science and Engineering",
      cgpa: "9.65",
      total:"10",
      image: "https://th.bing.com/th/id/OIP.SpSPMmPtOhAGfoZIjyY1gAHaHQ?w=161&h=180&c=7&r=0&o=5&pid=1.7",
    },
 

    {
      
      name: "IIT Madras",
      duration: "Dec 2020 - July 2025",
      degree:"Online B.Sc",
      education:
        " Data Science and Programming",
      cgpa: "7",
      total:"10",
      image: "https://th.bing.com/th?id=OIP.PYybJXX-J8TMgfTN9vugHQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
 
   
  ];
  
  const projects = [
  
    {
      name: "BrandGenrator.ai",
      description:
        "Developed user-friendly brand generator website with custom tagline creation options and hashtag generation in markdown format. Features include a user-friendly interface, wide range of word play options, social media hashtags, and a download option for future use.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Fastapi",
          color: "green-text-gradient",
        },
        {
          name: "AWSLambda",
          color: "pink-text-gradient",
        },
        {
          name: "ChatGpt3",
          color: "blue-text-gradient",
        },
      ],
      image: "https://user-images.githubusercontent.com/76839614/224964030-b85689d8-09b6-4693-a604-c52579bf25fd.png",
      source_code_link: "https://github.com/horizenight/BrandGenerator.ai",
      live_link:"https://brand-generator-ai.vercel.app/"
    },
    {
      name: "FlaskGram",
      description:
        "A web application like Instagram Clone developed using Flask framework with technologies such as Jinja2, WTForms, Werkzeug, SQLAlchemy, Flask-ckeditor, and Flask-login. The application features the user’s customized feed, likes, archives, login/logout, search, follow/unfollow and access control to pages. A database schema was designed to store posts, users, and likes.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Sqlite",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: "https://user-images.githubusercontent.com/76839614/224969055-5046a136-e2c3-4bcc-9012-cb9abe78e360.png",
      source_code_link: "https://github.com/horizenight/flaskgram",
      live_link:'http://horizenight.pythonanywhere.com/posts'
    },
    {
      name: "Nimbus 2k22",
      description:
        "The NIMBUS website project is for a national level tech fest in NIT Hamirpur. It is a platform for tech enthusiasts to showcase their skills and improve their talents. The festival is known for its pillars of innovation, creativity, and teamwork. The website was built using Javascript, React JS, Three JS and Firebase and serves as a portal to advertise various events and increase participation.",
      tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "Three Js",
          color: "green-text-gradient",
        },
        {
          name: "Node Js",
          color: "pink-text-gradient",
        },
      ],
      image: nimbus,
      live_link:"https://nimbus2k22.netlify.app/",
      source_code_link: "https://github.com/pixonoids/Nimbus-2k22",
    },
  ];
  
  export { services, technologies, experiences, educations, projects };