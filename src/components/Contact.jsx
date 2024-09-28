import { CONTACT } from "../constants";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-5">
      <div className="text-center tracking-tighter flex flex-col">
        <p className="mt-4 flex text-center justify-center items-center">
          <FaLocationDot className="m-2"/>
          {CONTACT.address}
        </p>
        <p className="flex text-center justify-center items-center border-   ">
          <IoIosMail className="m-2"/>
          {CONTACT.email}
        </p>
      </div>
    </div>
  );
};

export default Contact;
