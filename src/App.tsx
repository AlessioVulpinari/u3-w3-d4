import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Container } from "react-bootstrap"
import MainPage from "./components/MainPage"
import DetailsPage from "./components/DetailsPage"

function App() {
  return (
    <BrowserRouter>
      <Container className='d-flex justify-content-center'>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/article-details/:articleId' element={<DetailsPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
