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
    name: "Kaelen.dev",
    logoLetter: "K",
    tagline: "Available for contract & senior roles",
    titleLines: ["Crafting", "Digital", "Experiences."],
    description:
      "Frontend Engineer specializing in highly interactive, design-driven web applications. Crafting immersive user interfaces with modern frameworks, robust architectures, and pixel-perfect precision.",
    portraitImage:
      "https://uxmagic.blob.core.windows.net/public/agent-images/img-hero-portrait-1784636829830-i5jgzb4h0p.png",
    location: "San Francisco, CA",
    bioTitle: "Engineering with design-level intent.",
    bioParagraphs: [
      "I am a senior frontend developer who operates at the intersection of robust engineering and high-end visual design. Over the last 6+ years, I have worked with hyper-growth startups and creative agencies to build digital products that aren't just fast, but feel incredible to use.",
      "My philosophy is heavily inspired by Apple, Linear, and Vercel: software should be clean, fast, and completely focused on user delight. I specialize in crafting performant architectures, smooth page transitions, and highly accessible user interfaces.",
    ],
    bioImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Shipped Apps", value: "24+" },
      { label: "Technologies", value: "15+" },
      { label: "Years Exp", value: "6+" },
      { label: "Coffee ☕", value: "9.2k+" },
    ],
    competencies: [
      "Advanced React & Next.js Architecture",
      "Design Systems & Component Libraries",
      "WebGL, Three.js & Shader Dev",
      "Performance Optimization & Core Web Vitals",
    ],
    contactTitle: "Let's Build Something Great.",
    contactSubtitle:
      "Whether you have a specific product project in mind, a senior role to fill, or just want to chat about high-end design systems — my inbox is always open.",
    copyrightYear: "2024",
    versionTag: "PORTFOLIO v4.0",
    accoladeTag: "AWWWARDS NOMINEE",
    socials: [
      { name: "GitHub", icon: "lucide:github", url: "https://github.com" },
      { name: "LinkedIn", icon: "lucide:linkedin", url: "https://linkedin.com" },
      { name: "Email", icon: "lucide:mail", url: "mailto:hello@kaelen.dev" },
      { name: "Website", icon: "lucide:globe", url: "https://kaelen.dev" },
    ],
  },
  projects: [
    {
      id: "aether-task-management",
      number: "01",
      category: "Web Application",
      title: "Aether Task Management",
      summary:
        "A highly interactive, Linear-inspired project management application built for modern development teams. Features real-time state synchronization, multi-keyboard shortcut navigation, and rich interactive canvas views.",
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand"],
      image:
        "https://uxmagic.blob.core.windows.net/public/agent-images/img-project-1-1784636845082-w5euld5slf.png",
      liveDemoUrl: "#",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "01 / AETHER TASK MANAGEMENT",
        keyMetric: {
          value: "+40%",
          label: "Faster loading and rendering times compared to legacy platforms.",
        },
        role: "Lead Frontend Engineer",
        timeline: "4 Months (2023)",
        client: "Linear Tech Inc.",
        deliverables: "Web App, Design System, API",
        challenge: {
          title: "The latency of modern project management.",
          paragraphs: [
            "Most productivity tools suffer from severe performance bottlenecks when handling large, nested project lists and real-time state synchronizations. Teams frequently complain about delayed state updates, cluttered interfaces, and poor keyboard accessibility.",
            "The goal was to build a tool that felt as instantaneous as a local text editor, with robust offline capabilities, elegant visual hierarchy, and instant keyboard shortcuts.",
          ],
        },
        solution: {
          title: "Optimistic state & canvas-based rendering.",
          paragraphs: [
            "We implemented an optimistic state synchronization architecture using Zustand and custom React hooks, updating the client UI instantaneously while syncing with the server in the background.",
            "For complex project boards, we utilized highly optimized React rendering patterns alongside CSS container queries to ensure fluid interactions even with thousands of concurrent cards.",
          ],
        },
        codeSnippet: {
          filename: "useOptimisticSync.ts",
          code: `const useOptimisticSync = (taskId: string) => {
  const { updateTask, syncQueue } = useTaskStore();

  return useCallback(async (updates) => {
    // 1. Mutate local state instantly
    updateTask(taskId, updates);

    // 2. Push to background sync queue
    syncQueue.push({
      id: taskId,
      payload: updates,
      timestamp: Date.now()
    });
  }, [taskId]);
};`,
        },
        interactiveSandbox: [
          {
            id: "1",
            title: "Refactor Core Canvas Rendering Pipeline",
            priority: "High",
            completed: false,
          },
          {
            id: "2",
            title: "Implement Multi-Keyboard Shortcut Listener",
            priority: "Medium",
            completed: false,
          },
          {
            id: "3",
            title: "Configure WebGL Shader Cache Strategy",
            priority: "Low",
            completed: false,
          },
        ],
        keyFeatures: [
          {
            icon: "lucide:zap",
            title: "Sub-100ms Interactions",
            description:
              "Every click, toggle, and view change completes under 100ms, conforming to strict industrial performance guidelines.",
          },
          {
            icon: "lucide:keyboard",
            title: "Keyboard First",
            description:
              "Full keyboard control allows power users to navigate, create, assign, and search tasks without ever lifting their hands.",
          },
          {
            icon: "lucide:wifi-off",
            title: "Offline Ready",
            description:
              "Automatic local caching enables seamless offline use, syncing conflict-free the moment connection is re-established.",
          },
        ],
        nextCaseStudySlug: "helios-creative-canvas",
        nextCaseStudyTitle: "Helios Creative Canvas",
      },
    },
    {
      id: "helios-creative-canvas",
      number: "02",
      category: "Interactive WebGL",
      title: "Helios Creative Canvas",
      summary:
        "An infinite vector diagramming and creative layout tool built with custom WebGL shaders and Three.js. Allows high-performance rendering of millions of dynamic vector paths at 120fps.",
      techStack: ["Three.js", "React Three Fiber", "GLSL Shaders", "Vite"],
      image:
        "https://uxmagic.blob.core.windows.net/public/agent-images/img-project-2-1784636853599-djiq2h21lzc.png",
      liveDemoUrl: "#",
      githubUrl: "#",
      caseStudy: {
        breadcrumbCategory: "02 / HELIOS CREATIVE CANVAS",
        keyMetric: {
          value: "120fps",
          label: "Ultra smooth vector rendering across 10,000+ simultaneous viewport elements.",
        },
        role: "Senior WebGL Engineer",
        timeline: "6 Months (2023)",
        client: "Helios Space",
        deliverables: "WebGL Canvas Core, Shader Engine, Web Platform",
        challenge: {
          title: "DOM bottlenecks in infinite canvas design applications.",
          paragraphs: [
            "Standard HTML DOM and SVG rendering trees become exponentially sluggish when rendering thousands of complex vector shapes simultaneously during pan and zoom operations.",
            "Helios needed a hardware-accelerated rendering pipeline capable of maintaining a buttery smooth 120fps frame rate while processing complex bezier curves, drop shadows, and blending modes.",
          ],
        },
        solution: {
          title: "Custom GPU shaders & instanced WebGL buffers.",
          paragraphs: [
            "We developed a custom GPU instancing architecture in Three.js and custom GLSL vertex/fragment shaders to process vector path math directly on the GPU.",
            "By decoupling geometry computation from the main UI thread using Web Workers, users can pan, zoom, and transform millions of paths without experiencing frame drops.",
          ],
        },
        codeSnippet: {
          filename: "instancedShaderBuffer.ts",
          code: `const useInstancedPathBuffer = (pathCount: number) => {
  const bufferRef = useRef<THREE.InstancedBufferAttribute>();

  useFrame(({ clock }) => {
    if (bufferRef.current) {
      // Compute vertex displacement on GPU thread
      bufferRef.current.needsUpdate = true;
    }
  });

  return { bufferRef };
};`,
        },
        interactiveSandbox: [
          {
            id: "1",
            title: "Compile Custom Fragment Shaders",
            priority: "High",
            completed: true,
          },
          {
            id: "2",
            title: "Initialize WebGL Context & Instanced Mesh",
            priority: "High",
            completed: false,
          },
          {
            id: "3",
            title: "Bind Quadtree Spatial Indexing Worker",
            priority: "Medium",
            completed: false,
          },
        ],
        keyFeatures: [
          {
            icon: "lucide:zap",
            title: "120 FPS Rendering",
            description:
              "Hardware-accelerated GLSL shader engine built to maintain native display refresh rates.",
          },
          {
            icon: "lucide:sparkles",
            title: "Infinite Zoom",
            description:
              "Spatial quadtree indexing algorithm enabling seamless pan and infinite zoom levels.",
          },
          {
            icon: "lucide:globe",
            title: "Real-time Canvas Sync",
            description:
              "Multi-cursor collaborative drawing canvas powered by WebSockets and CRDT algorithms.",
          },
        ],
        nextCaseStudySlug: "aether-task-management",
        nextCaseStudyTitle: "Aether Task Management",
      },
    },
  ],
  techStack: [
    { id: "01", name: "React", category: "Framework", icon: "logos:react" },
    { id: "02", name: "Next.js", category: "Meta-framework", icon: "logos:nextjs-icon" },
    { id: "03", name: "TypeScript", category: "Type Safety", icon: "logos:typescript-icon" },
    { id: "04", name: "Tailwind", category: "Styling", icon: "logos:tailwindcss-icon" },
    { id: "05", name: "Node.js", category: "Runtime", icon: "logos:nodejs-icon" },
    { id: "06", name: "MongoDB", category: "Database", icon: "logos:mongodb-icon" },
    { id: "07", name: "Docker", category: "DevOps", icon: "logos:docker-icon" },
    { id: "08", name: "AWS", category: "Cloud Hosting", icon: "logos:aws" },
    { id: "09", name: "Framer Motion", category: "Animation", icon: "logos:framer" },
    { id: "10", name: "GSAP", category: "Tween Engine", icon: "lucide:sparkles" },
  ],
  experience: [
    {
      period: "2022 — Present",
      role: "Senior Frontend Engineer",
      company: "Linear Tech Inc.",
      description:
        "Led the rewrite of the core interactive workspace canvas, resulting in a 40% improvement in load times and rendering performance. Spearheaded the creation of the internal Design System used across 4 product teams.",
      alignment: "right",
    },
    {
      period: "2020 — 2022",
      role: "Frontend Engineer",
      company: "Vercel (Remote)",
      description:
        "Developed and maintained key templates and developer tools for the Next.js ecosystem. Collaborated closely with the design team to build elegant, high-fidelity landing pages and documentation hubs.",
      alignment: "left",
    },
    {
      period: "2018 — 2020",
      role: "UI/UX Developer",
      company: "Stripe Agency",
      description:
        "Designed and developed interactive payment funnels and web flow templates for high-profile clients. Mastered CSS animations, SVG manipulation, and client-side performance optimization.",
      alignment: "right",
    },
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
  testimonials: [
    {
      quote:
        "\"Kaelen possesses a rare combination of pure visual aesthetic taste and deep, bulletproof technical execution. He completely rebuilt our customer-facing site from scratch, exceeding our performance goals and making our brand look premium.\"",
      author: "Marcus Aurelius",
      role: "VP of Product, Linear Tech",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "\"Working with Kaelen was a masterclass in collaboration. He didn't just take specifications and build them; he asked critical questions, designed beautiful solutions on the fly, and delivered ahead of schedule. Highly recommended.\"",
      author: "Elena Rostova",
      role: "Co-Founder, Helios Space",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ],
};
