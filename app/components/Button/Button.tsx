import Link from "next/link";
import styles from "./button.module.css";

interface PropsButton {
  label: string;
  action?: () => void;
  url?: string;
  customClasses?: string;
}

const Button = ({ label, action, url, customClasses }: PropsButton) => {
  return (
    <>
      {(url && (
        <Link className={`${customClasses} ${styles.link}`} href={url}>
          {label ? label : "Go to"}
        </Link>
      )) ||
        (customClasses?.includes("up") || customClasses?.includes("down") ? (
          <button
            className={`${customClasses} ${styles.button} ${styles.buttonWithIcon} `}
          >
            {label ? label + "2" : "Click here"}
            <span
              className={`${
                (customClasses?.includes("up") && styles.up) ||
                (customClasses?.includes("down") && styles.down)
              }`}
            ></span>
          </button>
        ) : (
          <button className={`${customClasses} ${styles.button} `}>
            {label ? label : "Click here"}
          </button>
        ))}
    </>
  );
};

export default Button;
