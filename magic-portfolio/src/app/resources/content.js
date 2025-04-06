import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shivam",
  lastName: "Sharma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full stack developer",
  avatar: "/images/avatar.jpg",

  location: "Asia/Calcutta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'

  timezone: "GMT+7", // Expecting the GMT offset, e.g., 'GMT+1' 
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Shivam38391",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shivam-sharma-6499061a9/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "Shivamsharma38391@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full stack developer and sometime an artist</>,
  subline: (
    <>
      I'm Shivam sharma, a Fullstack developer , with over 2.8 years of experience.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Full-Stack Developer with over 2 years of experience in building scalable web applications. Proficient in
 frontend development using React.js and Next.js, with backend development experience through personal projects
 using Django and Django REST Framework (DRF). Adept at collaborating in dynamic environments and passionate
 about learning new technologies to enhance application performance and user experience.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "People central infotech Pvt. Ltd.",
        timeframe: "2024 - Present",
        role: "Frontend Developer",

        achievements: [
          <>
             Optimized web applications for maximum speed and scalability, improving performance by 30%.
          </>,
          <>
          Integrated applications with third-party software, including QuickBooks, various financial institutions, and accounting platforms like Xero.
          </>,

          <>
            • Collaborated with designers and backend developers to enhance UI/UX and application functionality
          </>
        ],

        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Auctopus Technology",
        timeframe: "june2023 - feb-2023 ",
        role: "Auctopus Technology",
        achievements: [
          <>
            Assisted in backend development tasks using Django framework.
          </>,
          <>
            • Gained hands-on experience in API development and database management.
            • Collaborated with the development team on project planning and execution.

          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Cluster University of jammu",
        description: <>Bachelor of Science (B.Sc)</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Django and Django REST framework",
        description: <> For Developing backend apis </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/django-cover.jpg",
            alt: "django-cover",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/django-rest-framework.png",
            alt: "Django REST framework",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <> fullstack framework, for  Building next gen apps with Next.js + ShadcnUI</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/Nextjs-recact.png",
            alt: "Nextjs-recact.png",
            width: 16,
            height: 9,
          },

          {
            src: "/images/projects/project-01/ShadcnUI.png",
            alt: "ShadcnUI.png",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
