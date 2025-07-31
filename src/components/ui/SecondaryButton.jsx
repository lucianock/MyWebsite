import Link from "next/link";

const SecondaryButton = ({
  text = "Read More",
  clasName = "btn-style2",
  url = "#",
  external = false,
  icon = null
}) => {
  if (external) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={clasName}
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        {icon && icon}
        {text}
      </a>
    );
  }

  return (
    <Link href={url} rel="noopener" className={clasName}>
      {text}
    </Link>
  );
};

export default SecondaryButton;
