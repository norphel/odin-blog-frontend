const MyProfile = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
        <div className="w-2/4 aspect-square md:w-1/4 rounded-full">
          <img src="https://avatar.iran.liara.run/public/3" alt="user avatar" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="pt-2">FirstName LastName</h2>
          <p className="italic text-slate-600">username</p>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
