import { useContext, useEffect } from "react";
import { UserContext } from "../main";
import { LoginForm } from "./LoginForm";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/dashboard");
    }
  });

  return (
    <main className="flex-grow flex items-center">
      <LoginForm setUser={setUser} />
    </main>
  );
};

export default LogInPage;
