import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./components/Error"
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import SignIn from "./pages/login/SignIn"
import Layout from "./components/layout/Layout";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login/>}>
            <Route path="/login/sign_in" element={<SignIn setIsLogged={setIsLogged}/>}/>
            <Route path="/login/sign_up" element={<SignUp setIsLogged={setIsLogged}/>}/>
          </Route>
          <Route element={<ProtectedRoutes isLogged={isLogged} />}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
