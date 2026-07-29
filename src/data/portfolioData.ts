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
  githubUrl?: string;
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
      "Crafting pixel-perfect, high-performance web applications with React, Next.js, and modern TypeScript architecture. Dedicated to building smooth, interactive user experiences with clean, scalable code.",
    portraitImage:
      "./profile.png",
    location: "Wayanad, Kerala, India",
    bioTitle: "About Me",
    bioParagraphs: [
      "My journey into frontend development began with a curiosity for creating interactive experiences on the web. Today, I specialize in building modern applications using React, Next.js, TypeScript, and Tailwind CSS, focusing on responsive design, accessibility, and performance.",
      "Every project is an opportunity to solve real problems, learn something new, and create interfaces that people genuinely enjoy using.",
      "As I continue growing as a developer, I'm expanding my knowledge into backend technologies while staying committed to writing clean, scalable, and maintainable code."
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
      { name: "GitHub", icon: "lucide:github", url: "https://github.com/navaneethpv" },
      { name: "LinkedIn", icon: "lucide:linkedin", url: "https://www.linkedin.com/in/navaneethpv-dev" },
      { name: "Email", icon: "lucide:mail", url: "mailto:navaneethpv.dev@gmail.com" },
      { name: "Whatsapp", icon: "ri:whatsapp-fill", url: "https://wa.me/+916282592895" },
    ],
  },
  projects: [
    {
      id: "cm-college",
      number: "01",
      category: "Educational Web Platform",
      title: "CM College",
      summary:
        "A full-featured web platform and administrative portal for CM College, powering digital admissions, academic resources, department hubs, and dynamic institutional content management.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Clerk", "Framer Motion", "ImageKit"],
      image:
        "https://ik.imagekit.io/1yxtj9qun/About/Untitled%20design.png?updatedAt=1768755140239?auto=format&fit=crop&w=800&q=80",
      liveDemoUrl: "https://www.cmcollege.in",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "01 / CM COLLEGE",
        keyMetric: {
          value: "100%",
          label: "Digitized institutional workflows & dynamic portal administration.",
        },
        role: "Full Stack Developer",
        timeline: "2024",
        client: "CM College",
        deliverables: "Web Application, Admin Dashboard, Resource Hub",
        challenge: {
          title: "Architecting a secure, dynamic web portal for institutional workflows.",
          paragraphs: [
            "Developing a unified portal for an educational institution requires serving high-traffic public access to academic resources, news, and calendars while maintaining strict, role-based access control for administrative content management."
          ],
        },
        solution: {
          title: "Next.js App Router, Clerk RBAC & MongoDB.",
          paragraphs: [
            "Leveraged Next.js App Router with MongoDB & Mongoose for scalable dynamic content delivery, coupled with Clerk authentication and custom JWT metadata validation to secure administrative routes and server actions."
          ],
        },
        codeSnippet: {
          filename: "middleware.ts",
          code: `import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) {
    const { userId, sessionClaims, redirectToSignIn } = await auth();
    if (!userId) return redirectToSignIn();

    let role = (sessionClaims as any)?.metadata?.role;
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
});`,
        },
        interactiveSandbox: [],
        keyFeatures: [
          {
            icon: "lucide:shield-check",
            title: "Role-Based Admin Portal",
            description: "Protected administration area for dynamic management of announcements, admissions, news, and faculty records.",
          },
          {
            icon: "lucide:book-open",
            title: "Question Bank & Resource Hub",
            description: "Searchable digital archive for past question papers and study resources stored via optimized ImageKit CDN.",
          },
          {
            icon: "lucide:graduation-cap",
            title: "Admissions & Department Portals",
            description: "Dynamic admission status management and comprehensive department pages with enquiry workflows.",
          },
          {
            icon: "lucide:sparkles",
            title: "Fluid Micro-Interactions",
            description: "Smooth page transitions and responsive user experience powered by Lenis smooth scroll and Framer Motion.",
          }
        ],
        nextCaseStudySlug: "eyoris-fashion",
        nextCaseStudyTitle: "Eyoris Fashion",
      },
    },
    {
      id: "eyoris-fashion",
      number: "02",
      category: "AI-Powered E-Commerce Platform",
      title: "Eyoris Fashion",
      summary:
        "A modern luxury fashion e-commerce platform featuring AI visual search, multimodal Gemini catalog tagging, and high-performance full-stack architecture.",
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Google Gemini AI",
        "Clerk Auth",
        "Framer Motion",
      ],
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
      liveDemoUrl: "https://eyoris-fashion.vercel.app",
      githubUrl: "https://github.com/navaneethpv/Eyoris-Fashion",
      caseStudy: {
        breadcrumbCategory: "02 / EYORIS FASHION",
        keyMetric: {
          value: "< 500ms",
          label: "Real-time AI visual search & structured tagging across 44,000+ catalog items.",
        },
        role: "Full Stack Developer & AI Engineer",
        timeline: "2024 – 2025",
        client: "Self Project / Production Showcase",
        deliverables: "Monorepo Web App, RESTful API, AI Visual Search Engine, Admin Dashboard",
        challenge: {
          title: "Building intuitive visual discovery and automated catalog indexing at scale.",
          paragraphs: [
            "Traditional e-commerce search relies heavily on text queries and manually tagged catalog attributes, creating friction when users search by style, visual aesthetics, or uploaded photos.",
            "Building an automated pipeline capable of parsing raw customer uploads, recognizing precise garment categories, extracting dominant color palettes, and returning matching product variants with low latency required careful AI integration and optimized database queries.",
          ],
        },
        solution: {
          title: "Multimodal AI Integration with Next.js 16, Google Gemini, and Express/MongoDB.",
          paragraphs: [
            "Engineered a full-stack monorepo featuring a Next.js 16 frontend with dynamic animations and an Express/MongoDB REST backend.",
            "Integrated Google Gemini vision models using strict JSON schema enforcement to perform zero-shot visual categorization and dominant color extraction directly from uploaded images. Combined this with Clerk authentication, variant inventory tracking, and deterministic catalog seeding.",
          ],
        },
        codeSnippet: {
          filename: "visualSearchAI.ts",
          code: `import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export const analyzeImageForVisualSearch = async (buffer: Buffer, mimeType: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      bufferToGenerativePart(buffer, mimeType),
      "Analyze this fashion image and return category, gender, and dominant color hex."
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema: ANALYSIS_SCHEMA,
    },
  });

  return JSON.parse(response.text);
};`,
        },
        interactiveSandbox: [],
        keyFeatures: [
          {
            icon: "lucide:sparkles",
            title: "AI Visual Search",
            description: "Upload any fashion image or snapshot to instantly find matching clothing items by category, color, and style.",
          },
          {
            icon: "lucide:tags",
            title: "Automated Gemini Tagging",
            description: "Zero-shot catalog metadata generation enforcing structured JSON schemas for automated categorization.",
          },
          {
            icon: "lucide:shopping-bag",
            title: "Multi-Variant Inventory Engine",
            description: "Comprehensive product management handling dynamic sizes, colors, SKUs, and real-time stock validation.",
          },
          {
            icon: "lucide:shield-check",
            title: "Auth & Admin Dashboard",
            description: "Clerk-authenticated user management with role-based access control and live order tracking.",
          },
        ],
        nextCaseStudySlug: "jcom-member-directory",
        nextCaseStudyTitle: "JCOM Member Directory",
      },
    },
    {
      id: "jcom-member-directory",
      number: "03",
      category: "Internship Project | Business Directory",
      title: "JCOM Member Directory",
      summary:
        "An internship project developed at Exouzia Technologies — a high-performance digital member directory and business networking platform for JCOM members, featuring instant real-time search, touch gesture navigation, and interactive profile cards.",
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      liveDemoUrl: "https://www.contacts.jcompattambi.com",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "03 / EXOUZIA INTERNSHIP - JCOM",
        keyMetric: {
          value: "100+",
          label: "Member business profiles indexed with sub-millisecond search & gesture navigation.",
        },
        role: "Frontend Developer Intern @ Exouzia",
        timeline: "2024",
        client: "JCOM Pattambi",
        deliverables: "Internship Project, Web Application, Digital Profile Cards",
        challenge: {
          title: "Building a production-ready client directory during internship at Exouzia.",
          paragraphs: [
            "As a Frontend Developer Intern at Exouzia, I was responsible for architecting a mobile-first directory for 100+ organization members. The challenge was ensuring sub-millisecond search filtering, immediate contact action buttons, and zero layout shifts across desktop and mobile devices."
          ],
        },
        solution: {
          title: "React 19, Vite & Framer Motion with Tailwind CSS v4.",
          paragraphs: [
            "Leveraged modern React 19 memoized state hooks (`useMemo`) for instant search execution, built custom horizontal touch swipe gesture handlers for intuitive mobile navigation, and applied Framer Motion for staggered list entrance animations."
          ],
        },
        codeSnippet: {
          filename: "MemberIndex.tsx",
          code: `const filteredMembers = useMemo(() => {
  if (!searchQuery.trim()) return members;
  const query = searchQuery.toLowerCase().trim();
  return members.filter((member) => {
    const formattedIdx = String(member.id).padStart(2, "0");
    return (
      member.name.toLowerCase().includes(query) ||
      member.slug.toLowerCase().includes(query) ||
      formattedIdx.includes(query) ||
      String(member.id).includes(query)
    );
  });
}, [searchQuery]);`,
        },
        interactiveSandbox: [],
        keyFeatures: [
          {
            icon: "lucide:search",
            title: "Real-Time Instant Search",
            description: "Sub-millisecond fuzzy filtering across member names, company titles, IDs, and business categories.",
          },
          {
            icon: "lucide:id-card",
            title: "Digital Profile Cards",
            description: "Interactive cards displaying business services, direct WhatsApp touchpoints, telephone dialing, and social links.",
          },
          {
            icon: "lucide:touchpad",
            title: "Touch & Gesture Navigation",
            description: "Mobile-optimized horizontal swipe handlers enabling seamless touch navigation between directory lists and profile views.",
          },
          {
            icon: "lucide:sparkles",
            title: "Staggered Motion UI",
            description: "Fluid entrance animations and responsive layout transitions powered by Lenis smooth scroll and Framer Motion.",
          }
        ],
        nextCaseStudySlug: "asset-homes",
        nextCaseStudyTitle: "Asset Homes Property Management",
      },
    },
    {
      id: "asset-homes",
      number: "04",
      category: "Internship Project | Real Estate & Property Management",
      title: "Asset Homes Property Management",
      summary:
        "A luxury real estate and property management web platform developed for Asset Homes LLC in Abu Dhabi & Al Ain — featuring GSAP scroll-triggered clip-path animations, Lenis inertia scrolling, interactive asset showcases, and responsive hero carousels.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Lenis", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
      liveDemoUrl: "https://asset-homes.vercel.app/",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "04 / EXOUZIA INTERNSHIP - ASSET HOMES",
        keyMetric: {
          value: "15+ Years",
          label: "Of real estate management legacy digitized with GSAP scroll triggers & inertia scroll engine.",
        },
        role: "Frontend Developer Intern @ Exouzia",
        timeline: "2024",
        client: "Asset Homes LLC, Abu Dhabi",
        deliverables: "Web Application, Interactive Asset Showcase, Operational Roadmap",
        challenge: {
          title: "Digitizing a premier real estate legacy with luxury aesthetics & zero scroll-jank.",
          paragraphs: [
            "Developing a mobile-first digital platform for Asset Homes Property Management LLC required presenting 15+ years of property management experience in Abu Dhabi and Al Ain. The main challenge was synchronizing smooth inertia scroll physics with high-performance GSAP ScrollTrigger animations without layout shifts or frame stuttering on low-power devices."
          ],
        },
        solution: {
          title: "Next.js 16 App Router, React 19, GSAP ScrollTrigger & Lenis Inertia Engine.",
          paragraphs: [
            "Architected a Next.js web application utilizing React 19 client components, binding Lenis smooth scroll updates directly into GSAP's Ticker RAF loop to eliminate scroll desync. Built custom clip-path image reveal transitions, interactive property showcase cards, and a 3-second progress timer hero carousel using Framer Motion."
          ],
        },
        codeSnippet: {
          filename: "LenisProvider.tsx",
          code: `useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Sync Lenis scroll updates with GSAP Ticker to prevent desync & frame jitter
  function update(time: number) {
    lenisRef.current?.lenis?.raf(time * 1000);
  }

  gsap.ticker.add(update);
  gsap.ticker.lagSmoothing(0);
  ScrollTrigger.refresh();

  return () => {
    gsap.ticker.remove(update);
  };
}, []);`,
        },
        interactiveSandbox: [],
        keyFeatures: [
          {
            icon: "lucide:sliders",
            title: "Sync-Driven Hero Carousel",
            description: "Auto-advancing 3-second progress bar slider with Framer Motion crossfade transitions and pause-on-hover capability.",
          },
          {
            icon: "lucide:scroll",
            title: "GSAP & Lenis Scroll Sync",
            description: "Inertia-based smooth scrolling integrated with GSAP Ticker for scroll-triggered clip-path reveals and parallax scaling.",
          },
          {
            icon: "lucide:building-2",
            title: "Interactive Asset Showcase",
            description: "Filterable property matrix showcasing luxury residential, commercial, and infrastructure management projects.",
          },
          {
            icon: "lucide:map-pin",
            title: "Operational Workflow Roadmap",
            description: "Step-by-step interactive methodology detailing property onboarding, tenant services, and maintenance operations.",
          }
        ],
        nextCaseStudySlug: "cm-college",
        nextCaseStudyTitle: "CM College",
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
