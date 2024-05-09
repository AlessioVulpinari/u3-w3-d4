import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Container } from "react-bootstrap"
import MainPage from "./components/MainPage"
import DetailsPage from "./components/DetailsPage"
import MyNavBar from "./components/MyNavBar"

function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Container className='d-flex justify-content-center my-2'>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/article-details/:articleId' element={<DetailsPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
