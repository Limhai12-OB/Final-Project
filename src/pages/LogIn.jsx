import { Link, useNavigate } from "react-router";
import HeaderPage from "../Components/Header";
import FooterPage from "./Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../auth/authAction";
import { useEffect } from "react";

export default function LogInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuthenticated) {
      // Route to /
      navigate("/");
    }
  }, [navigate, isAuthenticated]);
  //  create formik
  // submit

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(8, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    //  handle on submit
    onSubmit: (value) => {
      console.log("value from formik", value);
      dispatch(login(value));
    },
  });

  return (
    <>
      <section className=" bg-[url('https://images.unsplash.com/photo-1623473882999-2f33d6fc1d09?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/65 "></div>
        <HeaderPage />
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen -mt-20 ">
          <div class="w-full bg-gray-300 opacity-75   rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 class="text-xl font-bold text-center text-gray-900 md:text-2xl dark:text-white ">
                <h1>ចូលគណនី</h1>Log In
              </h2>
              <form
                onSubmit={formik.handleSubmit}
                class="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-600">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-600">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class=" w-full rounded-lg text-sm px-5 py-2.5 bg-amber-300 m-auto "
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                  Don’t have an account yet?
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500 "
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
}
