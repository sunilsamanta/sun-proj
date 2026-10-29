import logoIcon from "../assets/images/aum-logo-icon.png";

interface LogoProps {
  dark?: boolean;
}

/**
 * Aum Web Solutions logo — emblem icon (Ganesha / lotus / pen / digital pixels)
 * paired with the brand wordmark. The icon sits inside a soft chip so it reads
 * cleanly on both the light header and the dark footer.
 */
export default function Logo({ dark = false }: LogoProps) {
  return (
    <span className={`logo ${dark ? "logo-dark" : ""}`}>
      <span className="logo-badge" aria-hidden="true">
        <img
          src={logoIcon}
          alt=""
          className="logo-mark-img"
          width="44"
          height="44"
        />
      </span>
      {/*<span className="logo-text">
        <strong className="logo-title">
          Aum <span className="logo-title-accent">Web</span>
        </strong>
        <span className="logo-sub">Solutions</span>
      </span>*/}
    </span>
  );
}
