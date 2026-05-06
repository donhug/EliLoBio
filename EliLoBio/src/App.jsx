import {BrowserRouter as Routes, Route, Router} from "react-router-dom";
import './App.css'
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Accueil from "./pages/accueil/Accueil.jsx"
import Produits from "./pages/produits/Produits.jsx"
import Erreur from "./pages/erreur/Erreur.jsx"

function App() {
  return (
      <Header/>
  )
}
export default App
