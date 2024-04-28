import Header from "./Header";
import { SignupForm } from "./ui/SignupForm";

const SignupPage = () => {
  return (
    <div className="mt-2 max-w-screen-xl mx-2 md:mx-4 lg:mx-6 xl:mx-auto min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center">
        <SignupForm />
      </main>
    </div>
  );
};

export default SignupPage;