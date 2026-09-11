import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import type { Technology } from "./components/Type/types";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const technologyFetch = async (): Promise<Technology[]> => {
    const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
    if (!res.ok) {
      throw new Error("Failed to fetch technologies");
    }
    const data = await res.json();
    return data;
  };

  const technologyPromise = technologyFetch();

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        }
      >
        <TechnologySection technologiesPromise={technologyPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
