import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import ITTraining from "./pages/ITTraining";
import OracleFusionTraining from "./pages/OracleFusionTraining";
import ReactTraining from "./pages/ReactTraining";
import AngularTraining from "./pages/AngularTraining";
import DotNetTraining from "./pages/DotnetTraining";
import CLanguage from "./pages/CLanguage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<OracleFusionTraining />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route
          path="/oraclefusion-training"
          element={<OracleFusionTraining />}
        ></Route>
        <Route path="/react-training" element={<ReactTraining />}></Route>
        <Route path="/angular-training" element={<AngularTraining />}></Route>
        <Route path="/dotnet-training" element={<DotNetTraining />}></Route>
        <Route path="/c-training" element={<CLanguage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/listing/:listingId" element={<Listing />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
