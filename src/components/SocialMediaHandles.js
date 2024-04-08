import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const SocialMediaHandles = () => {
  return (
    <div className="flex lg:mx-10 md:ml-[15.5rem] pl-4 mx-12 cursor-pointer items-center">
      <FaFacebookF fontSize={30} className="mx-2 bg-orange-200 p-2 rounded-full"/>
      <FaInstagram fontSize={30} className="mx-2 bg-orange-200 p-2 rounded-full" />
      <FaTwitter fontSize={30} className="mx-2 bg-orange-200 p-2 rounded-full" />
      <FaPinterestP fontSize={30} className="mx-2 bg-orange-200 p-2 rounded-full" />
      <CiMail fontSize={30} className="mx-2 bg-orange-200 p-2 rounded-full" />
    </div>
  );
};

export default SocialMediaHandles;
