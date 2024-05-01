import { useContext } from "react";
import { UserContext } from "./Home";
import { LoginForm } from "./LoginForm";

const LogInPage = () => {
  const { setUser } = useContext(UserContext);

  return (
    <main className="flex-grow flex items-center">
      <LoginForm setUser={setUser} />
    </main>
  );
};

export default LogInPage;
