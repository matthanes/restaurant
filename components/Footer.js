import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-600 p-2 lg:h-[4.75rem] text-white">
      <div className="flex flex-col-reverse gap-4 lg:flex-row justify-around max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="flex gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              href="https://www.facebook.com/Taste-Of-India-Indian-Restaurant-150802362254694/"
            >
              <FaFacebook size={28} />
            </a>
          </div>
          <p className="text-center">
            Updated{" "}
            {new Date().toLocaleString("default", { month: "long" }) +
              " " +
              new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>2301 Airport Thruway Suite F5</p>
          <p>(706) 940-0044</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
