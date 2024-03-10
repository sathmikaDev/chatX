import { useState } from "react";
import TextField from "../components/TextField";
import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";
import signUpImage3 from "../images/SignUp3.jpg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firsName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
    birthDate: "",
  });

  return (
    <div className="flex justify-center items-center w-full h-screen text-sm">
      <div className="flex w-2/3 2xl:w-1/2 shadow-2xl shadow-slate-200 rounded-md">
        {/* images */}
        <div className="basis-1/3 bg-blue-600 rounded-l-md">
          <img
            src={signUpImage3}
            alt="image"
            className="overflow-hidden w-full h-full rounded-l-md object-cover bg-no-repeat bg-center bg-cover"
          />
        </div>

        {/* form */}
        <div className="basis-2/3 rounded-r-md bg-white p-6">
          <form>
            <div className="text-center">
              <h1 className="font-bold text-2xl">Create an Account</h1>
              <p className="text-gray-400">
                Sign Up for an Exclusive Chat Experience
              </p>
            </div>

            {/* first name last name */}
            <div className="flex justify-between items-center gap-4 mt-6">
              <TextField label={"First Name"} type={"text"} required={true} />
              <TextField label={"Last Name"} type={"text"} required={true} />
            </div>

            {/* email */}
            <div className="mt-4">
              <TextField label={"Email"} type={"text"} required={true} />
            </div>

            <div className="flex justify-between items-center gap-4 mt-6">
              <TextField
                label={"Create Password"}
                type={"password"}
                required={true}
              />
              <TextField
                label={"Confirm Password"}
                type={"password"}
                required={true}
              />
            </div>

            <div className="flex justify-between items-center gap-4 mt-6">
              <TextField label={"Birth Date"} type={"date"} />
              <TextField label={"Country"} type={"text"} />
            </div>

            <div className="mt-6 mb-4">
              <PrimaryButton buttonText={"Sign Up"} />
              <p className="text-center mt-2 cursor-pointer underline text-xs">
                {/* <Link
                to="/login"
                className="text-blue-600 block text-center mt-4 underline"
              > */}
                Already have an account? Login
                {/* </Link> */}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
