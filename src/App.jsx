import './App.css'
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {CaretUp} from "@phosphor-icons/react";



function App() {

  return (
      <div className="site-content">
          <a href="#topScroll" className="scroll-top-block">
              <CaretUp size={18} weight="bold" color="#ec7532" />
          </a>
          <Header />
          <main className="site-main">
              <Main />
          </main>
          <footer className="site-footer">
              <Footer />
          </footer>
      </div>
  )
}
export default App
