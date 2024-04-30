import Header from "./Header";
import { IconUser, IconSettings, IconArticle } from "@tabler/icons-react";

const Dashboard = () => {
  return (
    <div className="mt-2 max-w-screen-xl mx-2 md:mx-4 lg:mx-6 xl:mx-auto min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row mt-6">
        <div className="p-4 flex md:flex-col gap-4 justify-between border-b md:border-r md:border-b-0">
          <div className="flex gap-2 items-center">
            <IconUser className="w-8 h-8" />
            <p className="hidden md:block">My Profile</p>
          </div>
          <div className="flex gap-2 items-center">
            <IconArticle className="w-8 h-8" />
            <p className="hidden md:block">My Posts</p>
          </div>
          <div className="flex gap-2 items-center">
            <IconSettings className="w-8 h-8" />
            <p className="hidden md:block">Settings</p>
          </div>
        </div>
        <div className="flex-grow p-4">D A S H B O A R D</div>
      </div>
    </div>
  );
};

export default Dashboard;
