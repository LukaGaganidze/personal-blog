import classes from "./about.module.scss";
import { Playfair_Display_SC as playfair } from "next/font/google";
const inter = playfair({ subsets: ["latin"], weight: ["400", "700", "900"] });
const About = () => {
  return (
    <section className={classes["about-page"]}>
      <h2 className={`${inter.className} ${classes["about-page__heading"]}`}>
        About the project - "Coffee-Driven-Coder"
      </h2>

      <div className={classes["about-text"]}>
        <p>
          This website serves as my personal newspaper, a platform where I share
          my interests, hobbies, news, and the tapestry of my life's
          experiences. It holds a special place in my heart for several reasons.
        </p>
        <p>
          Firstly, as someone deeply passionate about designing and coding web
          applications, creating this website has been an immensely enjoyable
          endeavor. It's a canvas where I blend technology and creativity to
          craft an engaging digital space.
        </p>
        <p>
          Secondly, it functions as a living timeline, allowing me to revisit
          moments in time. I find it truly remarkable to reflect upon my journey
          years from now and witness the chapters that have shaped my life.
        </p>
        <p>
          But beyond being my digital haven, this website is also for you, the
          visitor. I invite you to explore its pages and discover what resonates
          with you. Your curiosity is greatly appreciated, and your presence
          enriches the experience.
        </p>
        <p>
          As time unfolds, I'm committed to nurturing this website, not only by
          sharing news but also by introducing exciting new features and
          functionalities. It's a dynamic space that will continue to evolve.
        </p>

        <p>
          So, in essence, this is the spirit and inspiration behind my website.
          Thank you for joining me on this journey. Enjoy exploring
          Coffee-Driven-Coder!
        </p>
      </div>
    </section>
  );
};

export default About;
