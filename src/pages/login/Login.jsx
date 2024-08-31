import React from "react";
import { LoginBack } from "../../assets/images";
import { Divider } from "antd";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <>
      <div className="hidden lg:flex h-screen">
        <div className="w-[55%] bg-gray-800 text-white p-8 relative flex items-end justify-center">
          <img
            src={LoginBack}
            alt="CourtDesk"
            className="absolute inset-0 object-cover w-full h-full opacity-50"
          />
          <div className="relative bottom-2 z-10 w-[70%]">
            <h1 className="text-4xl font-bold mb-4">Welcome to CourtDesk</h1>
            <Divider className="mt-0 mb-4 bg-white" />
            <p>
              Welcome to Precision Law: Simplifying Legal Management for
              Exceptional Advocacy and Efficiency.
            </p>
          </div>
        </div>
        <div className="w-[45%] flex items-center justify-center p-8">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md justify-center items-center">
            <h2 className="text-2xl font-semibold text-center text-primary">
              Login to your account
            </h2>
            <p className="text-sm mb-6 text-center mt-2 text-primary">
              Welcome back! Please enter login details.
            </p>
            <LoginForm />
            <p className="text-sm mt-6 text-center text-primary">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
            <p className="mt-6 text-center text-gray-500 text-sm">
              &copy; 2024 Aventure •{" "}
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>{" "}
              •{" "}
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden min-h-screen">
        <div className="w-full bg-gray-800 text-white p-8 relative flex items-center justify-center">
          <img
            src={LoginBack}
            alt="CourtDesk"
            className="absolute inset-0 object-cover w-full h-full opacity-50"
          />
          <div className="relative bottom-2 z-10 justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to CourtDesk</h1>
            <Divider className="mt-0 mb-4 bg-white" />
            <p>
              Welcome to Precision Law: Simplifying Legal Management for
              Exceptional Advocacy and Efficiency.
            </p>

            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md justify-center items-center mt-12">
              <h2 className="text-2xl font-semibold text-center text-primary">
                Login to your account
              </h2>
              <p className="text-sm mb-6 text-center mt-2 text-primary">
                Welcome back! Please enter login details.
              </p>
              <LoginForm />
              <p className="text-sm mt-6 text-center text-primary">
                Don't have an account?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Sign up
                </a>
              </p>
              <p className="mt-6 text-center text-gray-500 text-sm">
                &copy; 2024 Aventure •{" "}
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>{" "}
                •{" "}
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
