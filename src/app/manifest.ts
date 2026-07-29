import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Navaneeth PV — Full-Stack & Frontend Developer Portfolio",
    short_name: "Navaneeth PV",
    description:
      "Interactive Developer Portfolio of Navaneeth PV specializing in React, Next.js, TypeScript, Node.js & modern UI engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
