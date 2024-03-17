import { Toaster } from "react-hot-toast";
import "./App.css";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Recipes></Recipes>
      <Toaster position="top-right"></Toaster>
    </>
  );
}

export default App;
