import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import PersonIcon from "@mui/icons-material/Person";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handle = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await axios.post(
        "https://appoint-api.testingelmo.com/api/v1/en/admin/auth/login",
        data
      );
  
      const elmoToken = response.data.data.tokenDetails.token;
      localStorage.setItem("token", elmoToken);
      toast.success("Login Successfully!")
      setTimeout(() => {
        window.location.reload();
        navigate("/Dashboard");
      }, 500);
  
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(`${error.response.data.message}`);
    }
  };
  



  const login = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <div className="flex h-screen w-full items-start justify-center bg-white rounded-3xl">
      <div className="w-[50vw] h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pb-10">
          <div className="pb-5">
            <div className="flex items-center justify-center p-4 rounded-xl border border-slate-200">
              <PersonIcon className="w-[40px] h-[40px]" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="text-md text-slate-500 font-[500]">
              Sign in to your account below.
            </p>
          </div>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={login}
          onSubmit={handle}
        >
          <Form className="flex flex-col gap-3 relative">
            <label htmlFor="email" className="font-medium text-sm">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="john_doe@example.com"
              required
              className="bg-[rgba(99,102,241,0.06)] border border-slate-200 rounded-md w-full h-10 px-[12px] pr-10 placeholder-slate-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-black focus:border-black"
            />
            <ErrorMessage
              component="p"
              name="email"
              className="text-red-500 text-sm text-center"
            />

            <label htmlFor="password" className="font-medium text-sm">
              Password
            </label>
            <div className="relative w-[400px]">
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••••"
                required
                className="bg-[rgba(99,102,241,0.06)] border border-slate-200 rounded-md w-full h-10 px-[12px] pr-10 placeholder-slate-400 focus:outline-none focus:border-none focus:ring-2 focus:ring-black focus:border-black"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            <ErrorMessage
              component="p"
              name="password"
              className="text-red-500 text-sm text-center"
            />

            <div className="text-sm flex justify-end !pb-[25px]">
              <Link
                to=""
                className="text-sm text-muted-foreground hover:text-primary text-right underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-[oklch(83.98%_.195_124.9)] text-[1rem] font-[500] !px-[1.25rem] bg-[#032212] rounded-md flex justify-center items-center cursor-pointer h-[2.5rem] transition"
            >
              Sign in
            </button>
          </Form>
        </Formik>
      </div>

      <div className="w-[50vw] relative bg-[#032212] h-screen pl-20 py-24 overflow-hidden">
        <div className="relative z-10 rounded-bl-[28px] rounded-tl-[28px] bg-white/10 backdrop-blur-sm py-4 pl-4">
          <div
            style={{
              boxShadow:
                "-399px 97px 73px 49px rgba(174, 223, 51, 0.51), 302px 142px 11px 108px rgba(174, 223, 51, 0.35)",
            }}
            className="bg-secondary z-0 absolute top-10 -right-[80px] w-[400px] h-[24px] blur-sm -rotate-[50deg]"
          ></div>
          <div
            style={{
              boxShadow:
                "11px -33px 113px 49px rgba(174, 223, 51, 0.51), 302px 142px 11px 108px rgba(174, 223, 51, 0.35)",
            }}
            className="bg-secondary z-0 absolute -top-20 -right-[180px] w-[400px] h-[24px] blur-sm -rotate-[70deg]"
          ></div>
          <div className="rounded-bl-[28px] h-[500px] rounded-tl-[28px] bg-white/10 backdrop-blur-sm py-4 pl-4">
            <img
              className="w-full relative h-full rounded-bl-[28px] rounded-tl-[28px] object-center z-20"
              src="public\image\auth-photo.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
