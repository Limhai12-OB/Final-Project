import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { getProfile } from "../auth/authAction";
import { useEffect, useRef, useState } from "react";

const AvatarMenue = ({ avatar }) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();
  const logout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="">
      <div className="flex">
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block mx-5"
          onClick={() => setState(!state)}
        >
          <img
            src={avatar}
            className="w-full h-full rounded-full"
            alt="Profile"
          />
        </button>
        <Link
          onClick={logout}
          className="bg-red-600 w-24 p-2 font-bold text-center text-white  rounded-full"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default function HeaderPage() {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const profile = useSelector((state) => state.auth.profile);

  useEffect(() => {
    console.log("testing");
    dispatch(getProfile(accessToken));
  }, [isAuthenticated]);

  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Provinces", path: "/province" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={` pb-5 md:text-sm ${
        state
          ? " shadow-lg rounded-xl  mx-2 mt-2 md:shadow-none  md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center px-4 md:flex md:px-8 relative">
        <div className="flex items-center justify-between py-5 md:block">
          <Link to={"/"}>
            <img src="/image/logo.png" width={120} height={50} alt="logo" />
          </Link>
          <div className="md:hidden">
            <button className="menu-btn " onClick={() => setState(!state)}>
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1  011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-white hover:text-gray-300">
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            {isAuthenticated && isAuthenticated ? (
              <AvatarMenue avatar={profile && profile.avatar} />
            ) : (
              <Link
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-800  rounded-full md:inline-flex"
                to={"/login"}
              >
                Log in
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
