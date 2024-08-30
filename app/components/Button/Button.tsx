import Link from "next/link";

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
        <Link className={`${customClasses}`} href={url}>
          {label ? label : "Go to"}
        </Link>
      )) ||
        (action && (
          <button className={`${customClasses}`}>
            {label ? label : "Click here"}
          </button>
        ))}
    </>
  );
};

export default Button;
