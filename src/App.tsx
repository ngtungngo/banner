import Abi2023 from "./containers/Abi2023"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from "react"


const App = (): JSX.Element => (
  <BrowserRouter>
    <main className="mt-4 h-full">
      <Routes>
        <Route path="/" element={<Abi2023 />} />
      </Routes>
    </main>
  </BrowserRouter>)

export default App
