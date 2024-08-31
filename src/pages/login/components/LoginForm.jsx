import { Checkbox, Form, Input } from "antd";
import React from "react";

const LoginForm = () => {
  return (
    <Form>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-primary">
          Phone Number*
        </label>
        <Input
          type="text"
          id="phoneNumber"
          className="w-full border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Phone Number"
          size="large"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-primary">
          Password*
        </label>
        <Input
          type="password"
          id="password"
          className="w-full border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          size="large"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-row">
          <Checkbox
            type="checkbox"
            id="rememberMe"
            className="mr-2"
            size="large"
          />
          <label htmlFor="rememberMe" className="text-primary">
            Remember me
          </label>
        </div>
        <a href="#" className="text-primary hover:underline">
          Forgot Password?
        </a>
      </div>
      <button className="w-full bg-primary text-white text-lg py-3 rounded-lg hover:bg-primary transition duration-200">
        Log in
      </button>
    </Form>
  );
};

export default LoginForm;
