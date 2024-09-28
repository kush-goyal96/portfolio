import logo from "../assets/myPic.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/kush-goyal96">
          <FaGithub className="hover:text-green-400" />
        </a>
        <a href="https://www.linkedin.com/in/kushgoyal96/">
          <FaLinkedin className="hover:text-blue-500" />
        </a>
        <a href="https://leetcode.com/u/ExoticOrange96/">
          <SiLeetcode className="hover:text-yellow-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
