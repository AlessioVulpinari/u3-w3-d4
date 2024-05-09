import { Card, Col, ListGroup } from "react-bootstrap"
import { NavLink, useParams } from "react-router-dom"
import { Result } from "../interfaces/IArticle"
import { useEffect, useState } from "react"

const DetailsPage = () => {
  const params = useParams()
  const articleId = params.articleId

  const [article, setArticle] = useState<Result | null>(null)

  const fetchFunction = async () => {
    try {
      const resp = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${articleId}`)
      if (resp.ok) {
        const objOfArticle = await resp.json()
        setArticle(objOfArticle)
      } else {
        throw new Error("Errore nel reperire gli articoli")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFunction()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {article && (
        <Col xs={12} md={10} lg={8} className='my-5'>
          <Card>
            <Card.Img variant='top' src={article?.image_url} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>{article.news_site}</Card.Subtitle>
              <Card.Text>{article.summary}</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroup.Item>Pubblicata il: {new Date(article.published_at).toLocaleDateString()}</ListGroup.Item>
              <ListGroup.Item>Ultima modifica: {new Date(article.updated_at).toLocaleDateString()}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link target='blank' href={article.url}>
                {article.url}
              </Card.Link>
            </Card.Body>
            <NavLink to={"/"} className={"btn btn-info"}>
              Ritorna alla pagina principale!
            </NavLink>
          </Card>
        </Col>
      )}
    </>
  )
}

export default DetailsPage
