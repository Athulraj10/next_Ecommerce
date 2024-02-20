import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const RegisterForm = () => {
  const initialValues = {
    email: "",
    gender: "male",
    password: "",
    phone:"",
    confirmPassword: "",
    acceptedTerms: false
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!values.phone) {
        errors.phone = "Required";
      } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Invalid phone number. Please enter a 10-digit phone number without any spaces or special characters.";
      }
    
      if (!values.acceptedTerms) {
        errors.acceptedTerms = "Required";
      } else if (!(values.acceptedTerms)) {
        errors.acceptedTerms = "Invalid phone number. Please enter a 10-digit phone number without any spaces or special characters.";
      }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="email">Your email</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="password" component="div" className="text-red-500" />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
          <Field
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
        </div>

    <div>
        <label htmlFor="number">Enter your number</label>
        <Field
        type='number'
        name='phone'
        id='mobile'
        placeholder='+91 9999999999'
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        />
         <ErrorMessage name="phone" component="div" className="text-red-500" />
    </div>
      
        <div className="flex items-start">
          <Field
            type="checkbox"
            id="acceptedTerms"
            name="acceptedTerms"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
          <label htmlFor="acceptedTerms" className="ml-3 text-sm">
            I accept the
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Terms and Conditions
            </a>
          <ErrorMessage name='acceptedTerms' component='div' className="text-red-500"  />
          </label>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Create an account
        </button>

       
      </Form>
    </Formik>
  );
};

export default RegisterForm;
