import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import { Articles } from "../interfaces/IArticle"
import SingleArticle from "./SingleArticle"

const MainPage = () => {
  const [articles, setArticles] = useState<Articles>()

  const fetchFunction = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles")
      if (resp.ok) {
        const arrOfArticle = await resp.json()
        setArticles(arrOfArticle)
      } else {
        throw new Error("Errore nel reperire gli articoli")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFunction()
  }, [])

  return (
    <Row className='gy-3'>
      {articles && articles.results.map((article) => <SingleArticle article={article} key={article.id} />)}
    </Row>
  )
}

export default MainPage
