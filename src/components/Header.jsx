import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from "../redux/user/userSlice.js";
import { baseUrl } from "../environment.js";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    navigate(`/search?${urlParams.toString()}`);
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      
      const res = await fetch(`${baseUrl}/auth/signout`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");

    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, []);

  return (
    <header className="bg-slate-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-lg md:text-2xl text-slate-700">
            Inspiration Oracle Tech Training
          </h1>
        </Link>

        {/* Search Box */}
        {/* <form
          onSubmit={handleSubmit}
          className="hidden md:flex bg-white rounded-lg px-3 py-2 items-center shadow"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-56"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form> */}

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-slate-700 font-medium">
          <Link to="/">
            <li className="hover:text-blue-600">Home</li>
          </Link>

          <Link to="/oraclefusion-training">
            <li className="hover:text-blue-600">Oracle Fusion Tech</li>
          </Link>

          <Link to="/oic">
            <li className="hover:text-blue-600">OIC </li>
          </Link>

          <Link to="/vbs">
            <li className="hover:text-blue-600">VBS/VBCS</li>
          </Link>

          <Link to="/bi-reports">
            <li className="hover:text-blue-600">BI Reports</li>
          </Link>

          <Link to="/otbi-reports">
            <li className="hover:text-blue-600">OTBI Reports</li>
          </Link>

          <Link to="/about">
            <li className="hover:text-blue-600">About</li>
          </Link>

          {/* <button >
            <li className="hover:text-blue-600">Logout</li>
          </button> */}
          {currentUser && (
            <span
              onClick={handleSignOut}
              className="text-red-700 cursor-pointer"
            >
              {/* Sign out */}
              <li className="hover:text-blue-600">Sign out</li>
            </span>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-slate-700"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Search */}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-lg">Menu</h2>

          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <li className="px-6 py-4 hover:bg-slate-100 border-b">Home</li>
          </Link>

          <Link to="/oraclefusion-training" onClick={() => setMenuOpen(false)}>
            <li className="px-6 py-4 hover:bg-slate-100 border-b">
              Oracle Fusion Tech
            </li>
          </Link>

          <Link to="/oic" onClick={() => setMenuOpen(false)}>
            <li className="px-6 py-4 hover:bg-slate-100 border-b">OIC</li>
          </Link>

          <Link to="/vbs" onClick={() => setMenuOpen(false)}>
            <li className="px-6 py-4 hover:bg-slate-100 border-b">VBS/VBCS</li>
          </Link>

          <Link to="/bi-reports" onClick={() => setMenuOpen(false)}>
            <li className="px-6 py-4 hover:bg-slate-100 border-b">
              BI Reports
            </li>
          </Link>

          <Link to="/otbi-reports" onClick={() => setMenuOpen(false)}>
            <li className="px-6 py-4 hover:bg-slate-100 border-b">
              OTBI Reports
            </li>
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <li className="px-6 py-4 hover:bg-slate-100 border-b">About</li>
          </Link>

          {/* Profile */}
          {/* <Link to="/profile" onClick={() => setMenuOpen(false)}>
            <li className="px-6 py-4 hover:bg-slate-100 border-b">
              {currentUser ? "Profile" : "Sign In"}
            </li>
          </Link> */}
        </ul>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
