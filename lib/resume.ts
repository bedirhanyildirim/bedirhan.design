import {
  Iexperiences,
  Ieducation,
  Ivolunteer,
  Ilanguages,
} from "@/types/resume";

export const experiences: Iexperiences[] = [
  {
    id: 6,
    company: "Orzax Poland",
    title: "Co-Founder & CEO",
    location: "Poland",
    description: "I manage the Polish operation.",
    type: "Remote",
    skills: ["Project Management", "Digital Marketing", "Supply Chain", "Allegro", "WooCommerce"],
    start_date: "3.2024",
    end_date: "present",
    website: "http://orzax.pl",
  },
  {
    id: 5,
    company: "Orzax Global",
    title: "Ecommerce Specialist",
    location: "Poland",
    description: "I manage the online sales on USA & UK websites, asist to the digital marketing team with analysis.",
    type: "Remote",
    skills: ["WooCommerce", "Google Analytics", "Google Ads", "Meta Ads", "SEO"],
    start_date: "1.2024",
    end_date: "present",
    website: "https://www.orzax.com",
  },
  {
    id: 4,
    company: "Upwork",
    title: "Software Engineer",
    location: "Poland",
    description: "I worked as a freelancer Frontend Web Developer.",
    type: "Remote",
    skills: ["React", "Next.js", "Remix.js", "Tailwind", "TypeScript"],
    start_date: "6.2023",
    end_date: "12.2023",
    website: "https://www.upwork.com/freelancers/~0142975d9f6689e77d",
  },
  {
    id: 3,
    company: "EPAM Systems",
    title: "Software Engineer",
    location: "Krakow, Poland",
    description:
      "I collaborated with one of the biggest asset management companies in the world, contributing to the client's B2C onboarding application using Angular, while also enhancing their mock server with Node.js Express, and working within an Agile Scrum methodology.",
    logo_url:
      "https://media.licdn.com/dms/image/C4D0BAQEE73wQBVodMQ/company-logo_100_100/0/1677598469595?e=1694649600&v=beta&t=si8lCR_Tz-70ID3LJt_66MHHEmjmleazqTBs0UTjw3I",
    type: "Remote",
    skills: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "React",
      "Redux",
      "Cypress",
      "Jest",
      "RxJS",
      "a11y",
    ],
    start_date: "6.2022",
    end_date: "5.2023",
    website: "https://www.epam.com/",
  },
  {
    id: 2,
    company: "Wash Out",
    title: "Software Engineer",
    location: "Milan, Italy",
    description:
      "I developed the redesign project of the B2C website and contributed to the redesign project of the admin dashboard, both utilizing Vue.js, while working within the Scrum framework of the Agile methodology.",
    logo_url:
      "https://media.licdn.com/dms/image/C4E0BAQE2GqAfzc9kgg/company-logo_100_100/0/1626968084794?e=1694649600&v=beta&t=b9VaDX7a1btyyu_vy9uDOJYtyAxJpGz9ho2a0zHWK5c",
    type: "Remote",
    skills: ["Vue.js", "Vuex", "JavaScript", "Bootstrap"],
    start_date: "7.2021",
    end_date: "1.2022",
    website: "https://www.washout-app.com/",
  },
  {
    id: 1,
    company: "Ariston Group",
    title: "Digital Solutions Specialist",
    location: "Fabriano, Italy",
    description:
      "I was accepted into the ICT e-Career program, alongside 13 other students from around the world, and during this time, I followed the renovation application project for web and mobile platforms at Elco Switzerland and Germany, contributing to the UI & UX improvement of the applications while providing technical support on Google Play Store and App Store Connect for all projects. Additionally, I developed a backend application using Node.js to collect metadata and statistics about the mobile applications from both stores. As a result of my performance, I was promoted to a full-time specialist at the conclusion of the ICT e-Career program.",
    logo_url:
      "https://media.licdn.com/dms/image/C4D0BAQH2d5bYtA5IRw/company-logo_100_100/0/1671698811499?e=1694649600&v=beta&t=2G6As8fkf8ZTdMIIOMupDGZF063hIokPYiivTwVSKmQ",
    type: "Hybrid",
    skills: [
      "Node.js",
      "REST",
      "JavaScript",
      "Vue.js",
      "Project Planning",
      "UI & UX Design",
    ],
    start_date: "8.2020",
    end_date: "7.2022",
    website: "https://www.ariston.com/",
  },
  {
    id: 0,
    company: "Turkish Airlines",
    title: "Software Engineer",
    location: "Istanbul, Turkiye",
    description:
      "I contributed to the redesign project of www.thy.com, utilizing Vue.js, while working within the Scrum framework of the Agile methodology.",
    logo_url:
      "https://media.licdn.com/dms/image/C4D0BAQGEfBbouGENQw/company-logo_100_100/0/1677651510531?e=1694649600&v=beta&t=xbEy3F7y5OwCyZOXC4OAs9Fw8D1udxMzprwLDtusl34",
    type: "Office",
    skills: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Vuex",
      "Knockout.js",
      "jQuery",
      "Bootstrap",
    ],
    start_date: "7.2018",
    end_date: "6.2019",
    website: "https://www.turkishairlines.com/",
  },
];

export const educations: Ieducation[] = [
  {
    id: 0,
    school: "Fatih Sultan Mehmet Vakif University",
    field: "Computer Engineering",
    degree: "Bachelor",
    start_year: "2014",
    end_year: "2021",
    location: "Istanbul",
  },
  {
    id: 1,
    school: "Haydarpaşa Technical High School",
    field: "Information Technologies",
    degree: "High school",
    start_year: "2010",
    end_year: "2014",
    location: "Istanbul",
  },
];

export const volunteers: Ivolunteer[] = [
  {
    id: 0,
    organisation: "Türkiye Teknoloji Takımı Foundation",
    role: "Mentor",
    start_date: "2.2020",
    end_date: "1.2021",
    field: "Science and Technology",
    website: "https://t3vakfi.org/en/",
  },
  {
    id: 1,
    organisation: "Yeni Nesil Arge Student Club",
    role: "President",
    start_date: "7.2016",
    end_date: "6.2020",
    field: "Science and Technology",
    website: "https://www.instagram.com/yeninesilarge/",
  },
];

export const languages: Ilanguages[] = [
  {
    id: 0,
    language: "Turkish",
    level: "Native",
  },
  {
    id: 1,
    language: "English",
    level: "Proficient",
  },
  {
    id: 2,
    language: "Italian",
    level: "Basic",
  },
  {
    id: 3,
    language: "Polish",
    level: "Basic",
  },
];
