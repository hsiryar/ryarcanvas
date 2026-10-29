export interface PortfolioProject {
  id: string;
  name: string;
  url: string;
  image: string;
  description: string;
  category: string;
  tags: string[];
  active: boolean;
}

/**
 * Portfolio project registry.
 * Only verified, active projects are included.
 * Future client projects can be added to this array as they are launched.
 */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "design-bench",
    name: "Design Bench",
    url: "https://designbench.netlify.app",
    image: "/assets/images/designbench-thumbnail.webp",
    description: "Explore the Design Bench project — a suite of free, client-side web design utilities and image optimization tools built for modern digital creators.",
    category: "Web Application & Tools",
    tags: ["Web Application", "Client-Side Tools", "Responsive UI"],
    active: true,
  },
];
