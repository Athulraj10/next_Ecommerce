"use client";
import Form from "./Form";

const registerPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 mx-auto max-w-3xl sm:px-4 lg:px-6">
      <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-[90%] bg-white rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <Form />

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <a
                href="/login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default registerPage;
