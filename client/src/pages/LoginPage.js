import React from "react";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <main className="bg-hero-pattern w-screen h-screen">
      <div className="w-full flex justify-center items-center p-5">
        <img src="/assets/logo.gif" alt="logo" />
      </div>
      <div className="w-full flex justify-center items-center mt-20">
        <Login />
      </div>
    </main>
  );
};

export default LoginPage;
