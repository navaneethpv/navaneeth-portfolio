export interface PersonalInfo {
  name: string;
  logoLetter: string;
  tagline: string;
  titleLines: string[];
  description: string;
  portraitImage: string;
  location: string;
  bioTitle: string;
  bioParagraphs: string[];
  bioImage: string;
  stats: { label: string; value: string }[];
  competencies: string[];
  contactTitle: string;
  contactSubtitle: string;
  copyrightYear: string;
  versionTag: string;
  accoladeTag: string;
  socials: { name: string; icon: string; url: string }[];
}

export interface InteractiveTask {
  id: string;
  title: string;
  priority: string;
  completed: boolean;
}

export interface KeyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudyData {
  breadcrumbCategory: string;
  keyMetric: { value: string; label: string };
  role: string;
  timeline: string;
  client: string;
  deliverables: string;
  challenge: {
    title: string;
    paragraphs: string[];
  };
  solution: {
    title: string;
    paragraphs: string[];
  };
  codeSnippet: {
    filename: string;
    code: string;
  };
  interactiveSandbox: InteractiveTask[];
  keyFeatures: KeyFeature[];
  nextCaseStudySlug: string;
  nextCaseStudyTitle: string;
}

export interface Project {
  id: string; // slug
  number: string;
  category: string;
  title: string;
  summary: string;
  techStack: string[];
  image: string;
  liveDemoUrl: string;
  githubUrl: string;
  caseStudy: CaseStudyData;
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  icon: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  alignment: "right" | "left";
}

export interface PlaygroundItem {
  tag: string;
  title: string;
  subtext: string;
  type: "cursor" | "glass" | "tilt";
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  techStack: TechItem[];
  experience: ExperienceItem[];
  playground: PlaygroundItem[];
  testimonials: Testimonial[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Navaneeth PV",
    logoLetter: "N",
    tagline: "Frontend Developer • React • Next.js • TypeScript",
    titleLines: ["Building", "Modern", "Web Experiences."],
    description:
      "I'm a Frontend Developer passionate about building modern, responsive, and high-performance web applications. I specialize in React, Next.js, TypeScript, and Tailwind CSS, creating scalable, accessible, and user-friendly interfaces with a strong focus on clean architecture, performance, and exceptional user experience.",
    portraitImage:
      "./profile.png",
    location: "Wayanad, Kerala, India",
    bioTitle: "About Me",
    bioParagraphs: [
      "I'm a Frontend Developer passionate about building modern, responsive, and high-performance web applications.",
      "I specialize in React, Next.js, TypeScript, and Tailwind CSS, creating scalable, accessible, and user-friendly interfaces with a strong focus on clean architecture, performance, and exceptional user experience.",
      "I'm continuously improving my skills by building real-world projects and learning backend technologies including Node.js, Express.js, MongoDB, Docker, and cloud deployment."
    ],
    bioImage:
      "./profile1.jpeg",
    stats: [
      { label: "Projects", value: "10+" },
      { label: "Technologies", value: "12+" },
      { label: "Internship", value: "1+" },
      { label: "Frontend Focus", value: "100%" },
    ],
    competencies: [
      "React & Next.js",
      "TypeScript",
      "Responsive Web Design",
      "Tailwind CSS",
      "REST API Integration",
      "Performance Optimization",
      "Accessibility",
      "Git & GitHub",
      "UI Implementation",
      "Modern Frontend Development"
    ],
    contactTitle: "Let's Build Something Great.",
    contactSubtitle:
      "I'm open to internships, frontend developer roles, freelance projects, and exciting collaborations.",
    copyrightYear: "2026",
    versionTag: "PORTFOLIO v1.0",
    accoladeTag: "FRONTEND DEVELOPER",
    socials: [
      { name: "GitHub", icon: "lucide:github", url: "https://github.com/navaneethpv-dev" },
      { name: "LinkedIn", icon: "lucide:linkedin", url: "https://www.linkedin.com/in/navaneethpv-dev" },
      { name: "Email", icon: "lucide:mail", url: "mailto:navaneethpv550@gmail.com" },
      { name: "Website", icon: "lucide:globe", url: "#" },
    ],
  },
  projects: [
    {
      id: "eyoris-fashion",
      number: "01",
      category: "E-commerce Web Application",
      title: "Eyoris Fashion",
      summary:
        "A full-featured e-commerce platform for fashion apparel.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
      liveDemoUrl: "#",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "01 / EYORIS FASHION",
        keyMetric: {
          value: "100%",
          label: "Responsive and scalable e-commerce architecture.",
        },
        role: "Frontend Developer",
        timeline: "2024",
        client: "Self Project",
        deliverables: "Web App, E-commerce flows",
        challenge: {
          title: "Building a performant shopping experience.",
          paragraphs: [
            "Creating seamless shopping cart flows and product discovery experiences requires careful state management and optimized rendering."
          ],
        },
        solution: {
          title: "React & Tailwind CSS.",
          paragraphs: [
            "Utilized modern React practices for state management and Tailwind CSS for rapid, responsive UI development."
          ],
        },
        codeSnippet: {
          filename: "cartStore.ts",
          code: `const useCart = () => {
  // Cart state logic
};`,
        },
        interactiveSandbox: [],
        keyFeatures: [
          {
            icon: "lucide:shopping-bag",
            title: "Shopping Cart",
            description: "Full cart functionality.",
          }
        ],
        nextCaseStudySlug: "jcom-member-directory",
        nextCaseStudyTitle: "JCOM Member Directory",
      },
    },
    {
      id: "jcom-member-directory",
      number: "02",
      category: "Directory Application",
      title: "JCOM Member Directory",
      summary:
        "A comprehensive directory for JCOM members to manage and find contacts.",
      techStack: ["React", "Next.js", "TypeScript"],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      liveDemoUrl: "#",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "02 / JCOM MEMBER DIRECTORY",
        keyMetric: {
          value: "Fast",
          label: "Quick member lookup and filtering.",
        },
        role: "Frontend Developer",
        timeline: "2024",
        client: "JCOM",
        deliverables: "Web App, Directory System",
        challenge: {
          title: "Handling large lists of members.",
          paragraphs: [
            "Needed an efficient way to display, filter, and search through many member profiles."
          ],
        },
        solution: {
          title: "Optimized Next.js rendering.",
          paragraphs: [
            "Used Next.js for fast initial load and effective caching strategies."
          ],
        },
        codeSnippet: {
          filename: "filterMembers.ts",
          code: `const filterMembers = (query) => {
  // Filtering logic
};`,
        },
        interactiveSandbox: [],
        keyFeatures: [
          {
            icon: "lucide:users",
            title: "Member Search",
            description: "Advanced search and filtering capabilities.",
          }
        ],
        nextCaseStudySlug: "asset-homes-website",
        nextCaseStudyTitle: "Asset Homes Website",
      },
    },
    {
      id: "asset-homes-website",
      number: "03",
      category: "Corporate Website",
      title: "Asset Homes Website",
      summary:
        "A corporate website showcasing properties and services for Asset Homes.",
      techStack: ["React", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      liveDemoUrl: "#",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "03 / ASSET HOMES WEBSITE",
        keyMetric: {
          value: "Modern",
          label: "Sleek and professional design.",
        },
        role: "Frontend Developer",
        timeline: "2024",
        client: "Asset Homes",
        deliverables: "Website",
        challenge: {
          title: "Presenting properties elegantly.",
          paragraphs: [
            "The client needed a way to showcase real estate effectively."
          ],
        },
        solution: {
          title: "Visual-first approach.",
          paragraphs: [
            "Built a gallery-heavy site focusing on high-quality imagery and smooth transitions."
          ],
        },
        codeSnippet: {
          filename: "gallery.tsx",
          code: `const Gallery = () => {
  // Gallery logic
};`,
        },
        interactiveSandbox: [],
        keyFeatures: [
          {
            icon: "lucide:home",
            title: "Property Showcase",
            description: "Beautiful property listings.",
          }
        ],
        nextCaseStudySlug: "malabar-heritage",
        nextCaseStudyTitle: "Malabar Heritage",
      },
    },
    {
      id: "malabar-heritage",
      number: "04",
      category: "Cultural Website",
      title: "Malabar Heritage",
      summary:
        "A website highlighting the cultural heritage and tourism of Malabar.",
      techStack: ["Next.js", "React", "CSS"],
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      liveDemoUrl: "#",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "04 / MALABAR HERITAGE",
        keyMetric: {
          value: "Engaging",
          label: "Immersive storytelling experience.",
        },
        role: "Frontend Developer",
        timeline: "2024",
        client: "Cultural Board",
        deliverables: "Website",
        challenge: {
          title: "Storytelling through web.",
          paragraphs: [
            "We needed to convey the rich history of the Malabar region interactively."
          ],
        },
        solution: {
          title: "Interactive timelines.",
          paragraphs: [
            "Implemented scrolling animations and interactive elements."
          ],
        },
        codeSnippet: {
          filename: "timeline.tsx",
          code: `const Timeline = () => {
  // Timeline animations
};`,
        },
        interactiveSandbox: [],
        keyFeatures: [
          {
            icon: "lucide:map",
            title: "Interactive Maps",
            description: "Explore the region digitally.",
          }
        ],
        nextCaseStudySlug: "event-planner-website",
        nextCaseStudyTitle: "Event Planner Website",
      },
    },
    {
      id: "event-planner-website",
      number: "05",
      category: "Business Website",
      title: "Event Planner Website",
      summary:
        "A professional platform for an event planning business.",
      techStack: ["React", "TypeScript", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
      liveDemoUrl: "#",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "05 / EVENT PLANNER WEBSITE",
        keyMetric: {
          value: "Elegant",
          label: "Sophisticated and inviting design.",
        },
        role: "Frontend Developer",
        timeline: "2024",
        client: "Event Co.",
        deliverables: "Website",
        challenge: {
          title: "Capturing the magic of events.",
          paragraphs: [
            "The site needed to look as good as the events they plan."
          ],
        },
        solution: {
          title: "Premium aesthetics.",
          paragraphs: [
            "Used refined typography and subtle animations."
          ],
        },
        codeSnippet: {
          filename: "booking.tsx",
          code: `const BookingForm = () => {
  // Form handling
};`,
        },
        interactiveSandbox: [],
        keyFeatures: [
          {
            icon: "lucide:calendar",
            title: "Booking Integration",
            description: "Easy scheduling.",
          }
        ],
        nextCaseStudySlug: "eyoris-fashion",
        nextCaseStudyTitle: "Eyoris Fashion",
      },
    }
  ],
  techStack: [
    { id: "01", name: "React", category: "Framework", icon: "logos:react" },
    { id: "02", name: "Next.js", category: "Framework", icon: "logos:nextjs-icon" },
    { id: "03", name: "TypeScript", category: "Language", icon: "logos:typescript-icon" },
    { id: "04", name: "JavaScript", category: "Language", icon: "logos:javascript" },
    { id: "05", name: "Tailwind CSS", category: "Styling", icon: "logos:tailwindcss-icon" },
    { id: "06", name: "Node.js", category: "Backend", icon: "logos:nodejs-icon" },
    { id: "07", name: "Express.js", category: "Backend", icon: "logos:express" },
    { id: "08", name: "MongoDB", category: "Database", icon: "logos:mongodb-icon" },
    { id: "09", name: "Git", category: "Version Control", icon: "logos:git-icon" },
    { id: "10", name: "GitHub", category: "Version Control", icon: "logos:github-icon" },
    { id: "11", name: "Framer Motion", category: "Animation", icon: "logos:framer" },
    { id: "12", name: "Figma", category: "Design", icon: "logos:figma" },
  ],
  experience: [
    {
      period: "July 2026 – Present",
      role: "Frontend Developer Intern",
      company: "Exouzia Protech Academy",
      description:
        "Building responsive web applications and developing modern UI using Next.js and TypeScript. Collaborating on client projects to improve UI/UX and overall performance.",
      alignment: "right",
    },
    {
      period: "October 2024 – February 2026",
      role: "Frontend / Full Stack Projects",
      company: "Self Learning & Personal Projects",
      description:
        "Built real-world React and Next.js applications while working with REST APIs and implementing authentication systems. Developed responsive UIs with Tailwind CSS, focusing on clean code and performance.",
      alignment: "left",
    },
    {
      period: "2023 – 2026",
      role: "Bachelor of Computer Applications (BCA)",
      company: "University of Calicut",
      description:
        "Pursuing higher education in computer science applications.",
      alignment: "right",
    },
    {
      period: "2021 – 2023",
      role: "Higher Secondary (Science)",
      company: "AMMR GHSS Nalloornad",
      description:
        "Completed higher secondary education focusing on science subjects.",
      alignment: "left",
    }
  ],
  playground: [
    {
      tag: "[ Custom Cursor ]",
      title: "Elastic Follower",
      subtext: "GSAP + EventListener",
      type: "cursor",
    },
    {
      tag: "[ Glassmorphism ]",
      title: "Refractive Cards",
      subtext: "CSS Backdrop Filter",
      type: "glass",
    },
    {
      tag: "[ Three.js / CSS ]",
      title: "Perspective Tilt",
      subtext: "Vanilla JS Perspective",
      type: "tilt",
    },
  ],
  testimonials: [],
};
