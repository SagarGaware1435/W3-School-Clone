import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../firebase";
import logo from "../logo/favicon.ico"
function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState(""); 
  const [passwordValidation, setPasswordValidation] = useState({

    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
    length: false,
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubscribeChange = () => {
    setSubscribe(!subscribe);
  };
  const validatePassword = (password) => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const lengthRegex = /.{8,}/;

    const isLowercase = lowercaseRegex.test(password);
    const isUppercase = uppercaseRegex.test(password);
    const isNumber = numberRegex.test(password);
    const isSpecialChar = specialCharRegex.test(password);
    const isLengthValid = lengthRegex.test(password);

    return {
      lowercase: isLowercase,
      uppercase: isUppercase,
      number: isNumber,
      specialChar: isSpecialChar,
      length: isLengthValid,
    };
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const validation = validatePassword(password);
    setPasswordValidation(validation);
    setValues((prev) => ({ ...prev, pass: password }));
  };

  const handleGoogleAuthentication = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      console.log("Login Successfully");

      navigate("/entry");
    } catch (error) {
      console.error("Google Authentication Error:", error);
    }
  };

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill in all fields");
      return;
    }

    const validation = validatePassword(values.pass);

    if (
      !validation.lowercase ||
      !validation.uppercase ||
      !validation.number ||
      !validation.specialChar ||
      !validation.length
    ) {
      setErrorMsg("Password does not meet the criteria.");
      return;
    }

    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        setUserDisplayName(values.name); 
        navigate("/entry");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
      <Link to="/"><img src={logo} className="p-5" alt="" /></Link>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="lg:w-1/3 md:w-2/3 w-11/12 border-[1px] border-gray-300 rounded-2xl">
          <div className="p-4 lg:p-8">
            <h1 className="text-2xl lg:text-3xl font-inherit font-bold mb-5">
              Sign up
            </h1>
            <div></div>

            <InputControl
              label="Name"
              placeholder="Enter your name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            />
            <InputControl
              label="Email"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              placeholder="Enter email address"
            />
            <div className="relative">
              <InputControl
                label="Password"
                type={showPassword ? "text" : "password"}
                className="w-full py-2 px-3 rounded-md border-[1px] border-gray-300"
                placeholder="Enter Password"
                value={values.pass}
                onChange={handlePasswordChange}
              />
              <button
                className="absolute top-1 right-3 text-[14px] font-semibold"
                onClick={toggleShowPassword}
              >
                {!showPassword ? "Show" : "Hide"}
              </button>
            </div>
            <ul className="list-inside mb-6 text-[14px]">
              <li className="text-black">
                <span className="text-green-500 mr-2 ">•</span> One lowercase
                character
              </li>
              <li className="text-black">
                <span className="text-green-500 mr-2">•</span> One uppercase
                character
              </li>
              <li className="text-black">
                <span className="text-green-500 mr-2">•</span> One number
              </li>
              <li className="text-black">
                <span className="text-green-500 mr-2">•</span> One special
                character
              </li>
              <li className="text-black">
                <span className="text-green-500 mr-2">•</span> 8 characters
                minimum
              </li>
            </ul>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                checked={subscribe}
                onChange={handleSubscribeChange}
                className="mr-2 mb-4 text-[#04aa6d]"
              />
              <label htmlFor="subscribe" className="mb-4">Email me with news and updates</label>
            </div>

            <div className="">
              <b className="text-red-600">{errorMsg}</b>
              <button
                className="bg-[#04aa6d] w-full rounded-3xl text-[16px] font-bold text-white py-3 px-4 "
                disabled={submitButtonDisabled}
                onClick={handleSubmission}
              >
                Sign up for free
              </button>
              <button
                className="w-full flex gap-5 items-center justify-center rounded-3xl text-[16px] border-[1px] border-gray-300 mt-6 py-3 px-4"
                onClick={handleGoogleAuthentication}
              >
                <svg
                  height="10%"
                  viewBox="0 0 20 20"
                  width="7%"
                  fit=""
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <span>Continue with Google</span>
              </button>

              <p className="mt-5 text-[14px]">
                Already have an account?{" "}
                <span>
                  <Link to="/login" className="text-[#04aa6d]">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
