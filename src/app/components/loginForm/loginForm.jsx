import Image from "next/image";
import React from "react";
import loginImage from "../../../../public/assets/LoginImage.webp";
import Form from "@/app/Components/loginForm/Form";

const LoginForm = () => {
  return (
    <div className="flex">
      {/* Left side - Image */}
      <div className="hidden md:block flex-none w-1/2">
        <div
          className="p-5 rounded"
          style={{ margin: "34px", padding: "30px" }}
        >
          <Image
            className="rounded w-auto"
            // style={{ height: "500px" }}
            priority="false"
            src={loginImage}
            alt="Image"
          />
        </div>
       
        <div
          className="py-5 rounded"
          style={{ margin: "0 30px", padding: "0 30px" }}
        >
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quo vero vitae dolorem tenetur cumque, est cupiditate qui omnis repellendus eaque architecto sunt aliquam nesciunt cum. Unde eius autem quisquam.
        </p>
        </div>
       
      </div>
      <div className="flex-auto">
        <section className="bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="/login"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Image
                className="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
                width={50}
                height={50}
                property="false"
              />
              9x Cart
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <Form />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
