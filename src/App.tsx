import { Routes, Route } from "react-router-dom";
import './App.css'
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Statistic } from "./components/Statistic";
import { SetUp } from "./components/SetUp";
import { LoginSingUp } from "./components/LogInSinghUp/lindex";
import { NoPage } from "./components/NoPage";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="statistic" element={<Statistic />} />
        <Route path="setUp" element={<SetUp />} />
        <Route path="login" element={<LoginSingUp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App
