import Link from "next/link";

const Button = ({href, text}) => {
  return (
    <Link href={href}>
      <a className="lg:inline-flex lg:w-auto lg:ml-8 px-3 py-2 rounded text-white font-bold items-center justify-center w-fit bg-rose-600  lg:bg-rose-600 hover:bg-rose-800 transition duration-500">
        {text}
      </a>
    </Link>
  );
};

export default Button;
