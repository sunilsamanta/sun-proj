export interface PageBanner {
  image: string;
  alt: string;
  position?: string;
}

const cdn = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1920&h=760&q=78`;

/** Real, page-specific photography for every primary page hero. */
export const pageBanners = {
  about: {
    image: cdn(5717690),
    alt: "An experienced digital consultant working on a laptop in a modern office.",
    position: "center 42%",
  },
  services: {
    image: cdn(3182800),
    alt: "A collaborative digital agency team working together at computers in a modern office.",
    position: "center 48%",
  },
  audit: {
    image: cdn(577210),
    alt: "A laptop displaying business analytics dashboards and graphs during a digital visibility audit.",
    position: "center 52%",
  },
  caseStudies: {
    image: cdn(3183153),
    alt: "A business team analysing reports and charts during a results review meeting.",
    position: "center 45%",
  },
  insights: {
    image: cdn(16094044),
    alt: "A professional researching artificial intelligence and digital trends on a laptop.",
    position: "center 45%",
  },
  blog: {
    image: cdn(8092408),
    alt: "A clean editorial workspace with a laptop and notebook, representing digital publishing.",
    position: "center 52%",
  },
  contact: {
    image: cdn(7709245),
    alt: "A professional consultant speaking with a client while working at a laptop.",
    position: "center 42%",
  },
} satisfies Record<string, PageBanner>;