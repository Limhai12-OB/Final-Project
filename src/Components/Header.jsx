import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { getProfile } from "../auth/authAction";
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
          className="bg-red-600 dark:hover:text-red-800 rounded-md text-white text-md p-2.5"
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
    { title: "Partners", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Team", path: "javascript:void(0)" },
  ];
  return (
    <>
      <nav className="relative items-center pt-5 px-4  sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between">
          <Link to={"/"}>
            <img
              src="/image/logo.png"
              width={130}
              height={50}
              alt="Float UI logo"
            />
          </Link>
          <button
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
            state
              ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
              : "hidden"
          }`}
        >
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </div>
          {isAuthenticated && isAuthenticated ? (
            <AvatarMenue avatar={profile && profile.avatar} />
          ) : (
            <li className="order-2 py-5 md:py-0">
              <Link
                to={"/login"}
                className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600  active:bg-indigo-700 duration-150 block md:py-3 md:inline"
              >
                Log in
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
