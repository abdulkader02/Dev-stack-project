import { Suspense } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import type { Technology } from "./components/Type/types";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const technologyFetch = async ():Promise<Technology[]> =>{
    const res = await fetch("/data.json")
    if (!res.ok){
      throw new Error("Failed to fetch technologies")
    }
     const data = await res.json();
  return data;
  }

  const technologyPromise = technologyFetch()

  return (
    <>
     <Navbar/>
    <Banner/>
    <Suspense fallback={<h1 className="flex justify-center font-bold">Loading...</h1>}>
    <TechnologySection technologiesPromise={technologyPromise}/>
    </Suspense>
    <Footer/>
    <ToastContainer />
    </>
  )
}

export default App
