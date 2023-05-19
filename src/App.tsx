import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./routes/Home/HomePage"
import RegionPage from "./routes/Region/RegionPage"

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/region/:regionName" element={<RegionPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
