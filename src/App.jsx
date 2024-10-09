import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Community from "./components/Community/Community";
import News from "./components/News/News";
import Faq from "./components/Faq/Faq";
import Home from "./components/Home/Home";
import RootLayout from "./routes/RootLayout";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="community" element={<Community />} />
        <Route path="news" element={<News />} />
        <Route path="faq" element={<Faq />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
