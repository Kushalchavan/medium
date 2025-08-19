import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layout/DashboardLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Write from "./pages/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { themeStore } from "./store/theme";
import BlogDetail from "./pages/BlogDetail";

const App = () => {
  const { theme } = themeStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route element={<ProtectedRoute />}>
          <Route
            element={
              <div data-theme={theme}>
                <DashboardLayout />
              </div>
            }
          >
            <Route path="/home" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
