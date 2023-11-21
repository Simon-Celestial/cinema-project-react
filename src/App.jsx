import './App.css'
import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";

function App() {

  return (
      <div className="site-content">
          <Header />
          <main className="site-main">
              <Main />
          </main>
      </div>
  )
}

export default App
