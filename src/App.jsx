import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Messeges from "./pages/Messeges";
import Profile from "./pages/Profile";
import SignOut from "./pages/SignOut";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/messages" element={<Messeges />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signout" element={<SignOut />} />
    </Routes>
  );
}

export default App;
