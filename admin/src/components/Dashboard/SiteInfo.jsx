import Image from "next/image";
import logo from "@/assets/siteInfo/logo.png";

const SiteInfo = ({ expanded }) => {
  return (
    <div className="flex items-center">
      <Image
        width={40}
        height={40}
        className={`cursor-pointer duration-500`}
        src={`${logo.src}`}
      />
      <div
        className={`transition-all duration-200 ${
          expanded ? "w-52 ml-2" : "w-0 invisible"
        }`}
      >
        <h1
          className={`whitespace-nowrap origin-left font-semibold text-lg uppercase`}
        >
          Imam Hossain
        </h1>
        <p className="whitespace-nowrap opacity-80 text-xs -mt-1">
          Web Developer
        </p>
      </div>
    </div>
  );
};

export default SiteInfo;
