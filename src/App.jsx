import './App.css'
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {

  return (
      <div className="site-content">
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
