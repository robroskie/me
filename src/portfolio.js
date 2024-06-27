/* Change this file to get your personal Portfolio */

import pdfCFEreport from "./assets/documents/inquiry_final.pdf";
import psInfographic from "./assets/documents/ps_infographic.pdf";

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Luke Roblesky",
  title: "Hi all, I'm Luke",
  subTitle: emoji(
    "Welcome to my teaching portfolio, where my passion for education intersects with my dedication to integrating technology, promoting equal opportunity and access, and gamifying the classroom to enhance learning experiences. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GGgk9-3zUVq218S4zKB0ZN8Dxn8G_T29/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/robroskie",
  linkedin: "https://www.linkedin.com/in/robroskie/",
  gmail: "LRoblesky@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Professional Identity",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Create engaging and interactive math and science lessons for students"
    ),
    emoji("⚡ Utilize innovative technology and tools to enhance learning experiences in the classroom"),
    emoji(
      "⚡ Integrate educational resources and platforms such as Kahoot, Quizizz and Gimkit and others to support student learning"
    )
  ],
  pdfToDisplay: psInfographic,

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Knowledge acquisition",
      fontAwesomeClassname: "fas fa-apple-alt"
    },
    {
      skillName: "Technology integration",
      fontAwesomeClassname: "fas fa-laptop"
    },
    {
      skillName: "Equal access",
      fontAwesomeClassname: "fas fa-universal-access"
    },
    {
      skillName: "Classroom gamification",
      fontAwesomeClassname: "fas fa-gamepad"
    },
    {
      skillName: "Community and collaboration",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "Critical thinking",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Innovation and creativity",
      fontAwesomeClassname: "fas fa-lightbulb"
    },
    {
      skillName: "Robotics",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Google Classroom",
      fontAwesomeClassname: "fa-brands fa-google"
    },
    {
      skillName: "Inquiry Learning",
      fontAwesomeClassname: "fas fa-question-circle"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UBC Okanagan",
      logo: require("./assets/images/ubc_logo.png"),
      subHeader: "Bachelor of Education",
      duration: "September 2023 - December 2024",
      desc: "",
      descBullets: [
        "Math, Computer Science and General Science Teaching Specializations"
      ]
    },
    {
      schoolName: "UBC Okanagan",
      logo: require("./assets/images/ubc_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - August 2023",
      desc: "",
      descBullets: ["Cumulative GPA: 4.0/4.3", 
      "Dean’s List"]
    },
    {
      schoolName: "SEE TEFL",
      logo: require("./assets/images/see_tefl.jpg"),
      subHeader: "120 Hour TEFL Certificate",
      duration: "August 2015",
      desc: "",
      descBullets: ["Completed a 120-hour course covering pedagogical knowledge, practical teaching skills, and 16 key topics essential for novice EFL teachers."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Standard #1: Educators value and care for all students and act in their best interests.", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Standard #2: Educators are role models who act ethically and honestly.",
      progressPercentage: "100%"
    },
    {
      Stack: "Standard #3: Educators understand and apply knowledge of student growth and development.",
      progressPercentage: "80%"
    },
    {
      Stack: "Standard #4: Educators value the involvement and support of parents, guardians, families and communities in schools.",
      progressPercentage: "85%"
    },
    {
      Stack: "Standard #5: Educators implement effective practices in areas of planning, instruction, assessment, evaluation and reporting.",
      progressPercentage: "70%"
    },
    {
      Stack: "Standard #6: Educators have a broad knowledge base and understand the subject areas they teach.",
      progressPercentage: "85%"
    },
    {
      Stack: "Standard #7: Educators engage in career-long learning.",
      progressPercentage: "95%"
    },
    {
      Stack: "Standard #8: Educators contribute to the profession.",
      progressPercentage: "65%"
    },
    {
      Stack: "Standard #9: Educators respect and value the history of First Nations, Inuit and Métis in Canada and the impact of the past on the present and the future. Educators contribute towards truth, reconciliation and healing.",
      progressPercentage: "75%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Practicum & Field Experiences",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/robot.png"),
      projectName: "Community Field Experience",
      projectDesc: "Final report summarizing the answers I found to my inquiry questions through observations and research during the field experience",
      footerLink: [
        {
          name: "Click to view",
          url: ""
        }
        //  you can add extra buttons here.
      ],
      pdfToDisplay: pdfCFEreport
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Coursework

const courseWork = {
  title: "Courses",
  subtitle:
    "In progress.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Educ 403 - Becoming a Scholar-Practitioner",
      description:
        "I explored the basics of education from different angles like culture, philosophy, ethics, and history. I learned key educational principles that create a supportive learning environment, and started thinking about my role of bringing academic research and theories into a practical setting as a scholar-practitioner."
    },
    {
      url: "",
      title: "Educ 431 - Developing a Pedagogical Stance",
      description:
        "In this course, we dove into teaching basics and hands-on practice through discussions, seminars, and real-world learning. We developed our skills and understanding of diversity, literacy, numeracy, and different learning theories."
    },
    {
      url: "",
      title: "Educ 436 - Developing Curricular Vision for a Democratic Society: Educational Purposes, Policies, and Practices, Part I",
      description:
        "Learned to design and implement curriculum across subjects, integrating Indigenous knowledge to create inclusive and engaging classrooms. Explored how historical, legal, and moral factors shape education, focusing on educational policy, law, and the impact of language teaching on curriculum decisions."
    },
    {
      url: "",
      title: "Educ 438 - Educating for the Whole Person",
      description:
        "Explored the concept of educating the whole person within a liberal democracy, emphasizing physical, emotional, and intellectual well-being. Developed innovative methods to promote well-being in educational settings, considering diverse cultural perspectives."
    },
    {
      url: "",
      title: "Educ 437 - Developing Curricular Vision for a Democratic Society: Educational Purposes, Policies, and Practices, Part 2",
      description:
        "In this course, we explored how to integrate subjects like Science, Technology, Engineering, Arts, and Math in teaching. We focused on the importance of inquiry, critical reflection, creativity, and innovation in education."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Community Field Experience Placement",
      company: "Aberdeen Hall Preparatory School",
      companylogo: require("./assets/images/aberdeen_hall.png"),
      date: "May 2024",
      desc: "",
      descBullets: [
        "Taught Pre-calculus 11",
        "Assisted in a variety of math, science, and robotics courses across middle and high school grade levels"
      ]
    },
    {
      role: "6-Week Practicum",
      company: "George Elliot Secondary",
      companylogo: require("./assets/images/ge.png"),
      date: "November 2023 - March 2024",
      descBullets: [
        "Completed a two and then a six week practicums at this secondary school",
        "Taught Science 10, Apprenticeship Math 12, and Foundations Math 10",
      ]
    },
    {
      role: "In-situ Placements. Health and Wellness Seminar",
      company: "Rutland Middle",
      companylogo: require("./assets/images/rms.png"),
      date: "November 2023 and April 2024",
      descBullets: [
        "Introduced to teaching through co-teaching two comprehensive grammar lessons",
        "Designed and led a wellness seminar on breathing exercises for stress reduction and improved mental health",
      ]
    },
    {
      role: "Secondary Geometry Teacher",
      company: "Saint Joseph Convent",
      companylogo: require("./assets/images/sjc.jpg"),
      date: "March 2016 and April 2017",
      descBullets: [
        "Effectively instructed three different class sections of grade 9 geometry within the English Program using American Curriculum",
        "Responsible for designing course material, delivering lessons, classroom management and extra‑curricular activities",
      ]
    },
    {
      role: "ESL Teacher",
      company: "Chonradsadornumrung (Chonchai) School",
      companylogo: require("./assets/images/chon_chai.jpg"),
      date: "November 2015 and February 2016",
      descBullets: [
        "Instructed English Communication Development to grade 7 and 8 ESL learners, delivering approximately 20 sections per week",
        "Managed large class sizes of 50 students per section, which required me to employ creativity and variation to make the lessons fun and engaging",
      ]
    },
  ]
};


// Pedagogical Stance

const pedagogicalStance = {
  title: "Pedagogical Stance",
  subtitle:
    "My pedagogical stance is a continually evolving philosophy, rooted in the belief that as educators, we must be lifelong learners.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Embracing Individuality",
      description:
        "As I anticipate becoming a teacher, the most crucial lesson about knowing my learners is the recognition of their individuality. Each student brings a unique set of strengths, challenges, and backgrounds to the classroom. Understanding and appreciating this diversity is essential for tailoring my teaching approaches, creating an inclusive environment, and providing effective support to meet the diverse needs of every learner."
    },
    {
      url: "",
      title: "Building Relationships",
      description:
        "Building strong, respectful relationships with students, colleagues, and parents is fundamental to a successful teaching career. By actively listening, showing empathy, and maintaining open communication, I aim to create a supportive and collaborative learning environment. Strong relationships foster trust and cooperation, enabling me to better understand and meet the needs of my students while also promoting a positive school community."
    },
    {
      url: "",
      title: "Engaging Curiosity",
      description:
        "Stimulating curiosity through interactive and hands-on learning experiences will spark a passion for exploration and discovery among my students. By integrating creative activities and real-world connections into lessons, I strive to ignite their innate curiosity, encouraging them to ask questions, seek answers, and develop a lifelong love for learning."
    },
    {
      url: "",
      title: "Fostering Growth",
      description:
        "Nurturing a growth mindset and encouraging resilience will empower students to embrace challenges as opportunities for learning and development. By fostering a supportive environment that values effort and progress, I aim to cultivate confident, motivated learners who are eager to explore and expand their capabilities."
    },
    {
      url: "",
      title: "Integrating Technology",
      description:
        "I believe in using technology to make learning more engaging and relevant for students. By incorporating educational apps, multimedia resources, and interactive tools into lessons, I aim to create a dynamic learning environment where students can collaborate, think critically, and develop digital skills. Embracing technology helps me personalize learning, keep students actively involved, and prepare them for success in today's digital world."
    },
    {
      url: "",
      title: "Lifelong Learning",
      description:
        "Consistently engaging in personal and professional development is vital throughout my teaching career. By staying current with educational research, attending workshops, and seeking feedback, I aim to continually refine my teaching practices. Embracing lifelong learning not only enhances my skills but also sets a positive example for my students, demonstrating the value of growth and improvement at every stage of life."
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out!",
  number: "204-333-2682",
  email_address: "LRoblesky@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,

  educationInfo,
  techStack,
  workExperiences,
  courseWork,
  pedagogicalStance,
  openSource,
  bigProjects,
  achievementSection,
  skillsSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
