import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import type { ITechnoCartType } from "./types/type";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import ExploreTechno from "./components/ExpoloreTechno";

const fetchData = async (): Promise<ITechnoCartType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [dataPromise] = useState(() => fetchData());
  const [stack, setStack] = useState<ITechnoCartType[]>([]);
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense
        fallback={
          <div className="my-30 flex items-center justify-center">
          <span className="loading loading-spinner"></span>
          </div>
        }
      >
        <ExploreTechno
          dataPromise={dataPromise}
          stack={stack}
          setStack={setStack}
        />
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
