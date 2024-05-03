import { Link, Outlet } from "react-router-dom";

import { IconUser, IconSettings, IconArticle } from "@tabler/icons-react";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-6 border rounded-md">
        <div className="p-4 flex md:flex-col gap-4 justify-between md:justify-start border-b md:border-r md:border-b-0">
          <Link to="profile" className="flex gap-2 items-center">
            <IconUser className="w-8 h-8" />
            <p className="hidden md:block">My Profile</p>
          </Link>
          <Link to="myposts" className="flex gap-2 items-center">
            <IconArticle className="w-8 h-8" />
            <p className="hidden md:block">My Posts</p>
          </Link>
          <Link to="settings" className="flex gap-2 items-center">
            <IconSettings className="w-8 h-8" />
            <p className="hidden md:block">Settings</p>
          </Link>
        </div>
        <div className="flex-grow p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
