import { FaCircleUser } from "react-icons/fa6";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      <Image src={profileImage} alt="user profile image" className="w- h-7 rounded-full object-cover" />
    );
  return <FaCircleUser className="w-10 h- bg-black rounded-full text-white" />;
}
export default UserIcon;
