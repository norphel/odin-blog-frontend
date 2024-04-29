import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

export function SignupForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error);
        return;
      }

      const result = await response.json();
      setSuccessMessage(result.msg);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input ">
      <h2 className=" text-center font-bold text-xl text-neutral-800">
        Welcome!
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            type="text"
            name="displayName"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="johndoe"
            type="text"
            name="username"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="john.doe@example.com"
            type="email"
            name="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            name="password"
            required
          />
        </LabelInputContainer>
        <FormError message={errorMessage} />
        <FormSuccess message={successMessage} />

        <button
          className="bg-[#007FC9] mt-4 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
          type="submit"
        >
          Create an account &rarr;
          <BottomGradient />
        </button>
      </form>

      <p className="italic text-slate-600 text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-[#007FC9] underline">
          Log In
        </Link>
      </p>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
