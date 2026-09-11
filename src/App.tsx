import { Suspense } from "react";
import Banner from "./componenets/Banner"
import Navbar from "./componenets/Navbar"
import type { Technology } from "./componenets/Type/types";
import TechnologySection from "./componenets/TechnologySection";
import Footer from "./componenets/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const technologyFetch = async ():Promise<Technology[]> =>{
    const res = await fetch("/data.json")
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
