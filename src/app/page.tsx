import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import styles from "./styles/home.module.scss";
import Link from "next/link";
import linkedinIcon from "@/app/assets/logo_linkedin.svg";
import githubIcon from "@/app/assets/logo_github.svg";

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Image
        src={logo}
        alt="Rick and Morty World logo"
        width={10}
        height={10}
        className={styles.home__logo}
        priority
      />
      <div className={styles.home__base}>
        <h1 className={styles.home__title}>
          THE RICK AND MORTY UNIVERSE WEBSITE
        </h1>
        <h2 className={styles.home__subtitle}>
          Listing Of The Main Characters And Their Attributes Of The Cartoon
          Rick And Morty. You Can Create New Characters And Battle Each Other.
          Use Your Creativity And May The Best Win.
        </h2>
        <div>
          <Link href="https://www.linkedin.com/in/enrico-santarelli-b50054236/">
            <Image
              src={linkedinIcon}
              alt="Linkedin logo"
              width={10}
              height={10}
              className={styles.home__icon}
              priority
            />
          </Link>
          <Link href="https://github.com/EnricoSantarelli">
            <Image
              src={githubIcon}
              alt="Github logo"
              width={10}
              height={10}
              className={styles.home__icon}
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
