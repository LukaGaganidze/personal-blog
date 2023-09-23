"use client";
import {
  ProjectsContextType,
  projectData,
} from "@/types/coding-projects-types";

// images
// portfolio
import portfolioImg1 from "../assets/coding/portfolio/img1.png";
import portfolioImg2 from "../assets/coding/portfolio/img2.png";
import portfolioImg3 from "../assets/coding/portfolio/img3.png";

// marvel
import marvelImg1 from "../assets/coding/marvel/img1-test.png";
import marvelImg2 from "../assets/coding/marvel/img2-test.png";
import marvelImg3 from "../assets/coding/marvel/img3-test.png";

// paragliding
import paraglidingImg1 from "../assets/coding/paragliding/img1paragliding.png";
import paraglidingImg2 from "../assets/coding/paragliding/img2paragliding.png";
import paraglidingImg3 from "../assets/coding/paragliding/img3paragliding.png";

// fencing
import fencingImg1 from "../assets/coding/fencing/fencingImg1.png";
import fencingImg2 from "../assets/coding/fencing/fencingImg2.png";
import fencingImg3 from "../assets/coding/fencing/fencingImg3.png";

// old portfolio
import veryFirstPortfolioImg1 from "../assets/coding/veryFirstPortfolio/veryFirstPortfolioImg1.png";
import veryFirstPortfolioImg2 from "../assets/coding/veryFirstPortfolio/veryFirstPortfolioImg2.png";
import veryFirstPortfolioImg3 from "../assets/coding/veryFirstPortfolio/veryFirstPortfolioImg3.png";

import { createContext, ReactNode } from "react";

export const ProjectsCtx = createContext<ProjectsContextType>({
  projectsData: [],
});

const projectsStaticData: projectData[] = [
  {
    projectLink: "https://lukasportfolio.vercel.app/",
    header: "MY PORTFOLIO WEBSITE",
    text1:
      "I've created this minimalist Next JS-based website to provide you with effortless access to essential information about me. It serves as a concise window into my world, featuring a collection of projects I've worked on and shedding light on my interests. The focus here is on clarity and accessibility, ensuring you can easily navigate through my portfolio and gain insights into my professional journey.",
    text2:
      "If you'd like to learn more about me or explore my resume, you'll find everything you need just a click away. Don't hesitate to get in touch through the provided contact information; I'm always open to new opportunities and collaborations. Thank you for visiting, and I hope you enjoy your time here – it's a pleasure to have you!",
    img1: portfolioImg1,
    img2: portfolioImg2,
    img3: portfolioImg3,
    id: 1,
    gitLink: "https://github.com/LukaGaganidze/lukasportfolio",
    lastOne: false,
  },
  {
    projectLink: "https://marvelpedia-v1.netlify.app/",
    header: "MARVELPEDIA: MARVEL INSIGHTS",
    text1:
      "This is Marvelpedia, one of my personal projects for my portfolio. Marvelpedia is a testament to my passion for web development. It's crafted with ReactJS. It serves as your guide to the Marvel Universe, offering information about Marvel characters, creators, series, and much more.",
    text2:
      "To bring this project to life, I've harnessed the power of the Marvel Developer API, ensuring that the content is up-to-date and accurate. Beyond just facts and figures, I've strived to capture the very essence of Marvel by designing the website in the iconic Marvel colors and infusing it with the unmistakable Marvel atmosphere. Whether you're a seasoned Marvel fan or a curious newcomer, join me in celebrating the world of Marvel as we uncover the stories, characters, and creativity that have captivated fans for generations.",
    img1: marvelImg1,
    img2: marvelImg2,
    img3: marvelImg3,
    id: 2,
    gitLink: "https://github.com/LukaGaganidze/marvel",
    lastOne: false,
  },
  {
    projectLink: "https://online-shop-cart.vercel.app/",
    header: "ONLINE SHOPPING CART",
    text1:
      "Welcome to our Online Shopping Cart – a conceptual online fencing shop designed to simulate the online shopping experience. Here, you can browse our selection of items and add them to your shopping cart, just like in a real online store. To ensure a seamless shopping experience and to save your selected items, we've integrated Firebase as our backend server.",
    text2:
      "In terms of design, I've aimed for a clean and minimalist aesthetic, avoiding overly intricate details. My priority is to provide client with an intuitive and straightforward shopping interface, making it easy for you to explore our virtual fencing shop and conveniently manage your shopping cart.",
    img1: fencingImg1,
    img2: fencingImg2,
    img3: fencingImg3,
    id: 3,
    gitLink: "https://github.com/LukaGaganidze/online_shopping_cart",
    lastOne: false,
  },
  {
    projectLink: "https://paragliding-initial-luch.vercel.app/",
    header: "ONLINE PARAGLIDING BOOKING",
    text1:
      "This is Paragliding Booking website. As a freelance project, I'm excited to present this demo version to showcase the world of paragliding. Crafted with Next JS, this website is your gateway to discovering the exhilarating sport of paragliding, learning how to book a paragliding flight, and making the entire process as user-friendly as possible.",
    text2:
      "With a passion for the breathtaking beauty of paragliding, I've endeavored to capture the essence of this adventure sport. The website not only guides you through the booking process but also takes you on a visual journey through the stunning locations where these flights take place. Website provides informative and inspiring content about paragliding to ensure costumer has a comprehensive understanding of the sport. Feel free to explore the world of paragliding with the online booking platform.",
    img1: paraglidingImg1,
    img2: paraglidingImg2,
    img3: paraglidingImg3,
    id: 4,
    gitLink: "https://github.com/LukaGaganidze/paragliding-v1",
    lastOne: false,
  },
  {
    projectLink: "https://very-first-portfolio-page.vercel.app/",
    header: "MY VERY FIRST PAGE LUNCHED",
    text1:
      "Welcome to my very first web page, a humble beginning in the world of web development. This project was crafted using plain HTML, CSS, and JavaScript – the foundational building blocks of web development. It serves as a simple yet significant milestone, showcasing the skills and tools I had in my arsenal during that early phase of my journey.",
    text2:
      "This web page, though straightforward in its design and functionality, reflects the enthusiasm and dedication I had to learn and create. While I've since explored more advanced technologies and design principles, this project remains a cherished reminder of my initial steps in the world of web development.",
    img1: veryFirstPortfolioImg1,
    img2: veryFirstPortfolioImg2,
    img3: veryFirstPortfolioImg3,
    id: 5,
    gitLink: "https://github.com/LukaGaganidze/very-first-portfolio-page",
    lastOne: true,
  },
];

export const ProjectsCTXProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProjectsCtx.Provider
      value={{
        projectsData: projectsStaticData,
      }}
    >
      {children}
    </ProjectsCtx.Provider>
  );
};
