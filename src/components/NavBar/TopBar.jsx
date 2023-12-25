import Link from "next/link";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-topbar">
      <div className="shadin-container">
        <div className="flex justify-between items-center gap-5">
          <div className="w-[30%] flex gap-2 py-2 text-white leading-4">
            <span>
              <TfiHeadphoneAlt />
            </span>
            <p>
              Support:
              <Link href={"tel:123456789"}> 123456789</Link>
            </p>
          </div>
          {/* <div className="w-[55%] self-stretch bg-slate-200 skew-x-[-30deg]"></div> */}
          <div className="w-[15%] flex gap-2 justify-end">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TopBar;
