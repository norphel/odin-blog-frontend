import { useContext } from "react";
import { UserContext } from "../main";

const MyProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
        <div className="w-2/4 aspect-square md:w-1/4 rounded-full">
          <img
            src={
              user.profilePicture === undefined
                ? `https://avatar.iran.liara.run/username?username=${user.displayName}`
                : `${user.profilePicture}`
            }
            alt="user avatar"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="pt-2">{user.displayName}</h2>
          <p className="italic text-slate-600">{user.username}</p>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
