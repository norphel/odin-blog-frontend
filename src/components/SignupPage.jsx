import { useContext, useEffect } from "react";
import { UserContext } from "./Home";
import { useNavigate } from "react-router-dom";

import { SignupForm } from "./ui/SignupForm";

const SignupPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/dashboard");
    }
  });

  return (
    <main className="flex-grow flex items-center">
      <SignupForm />
    </main>
  );
};

export default SignupPage;
