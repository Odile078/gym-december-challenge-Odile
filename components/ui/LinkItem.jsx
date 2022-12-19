const { default: Link } = require("next/link");

const LinkItem = ({ className, text }) => {
  return (
    <Link className={className} href="/">
      {text}
    </Link>
  );
};

export default LinkItem;
