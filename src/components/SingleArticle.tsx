import { Card, Col } from "react-bootstrap"
import { Result } from "../interfaces/IArticle"
import { useNavigate } from "react-router-dom"

interface SingleArticleProps {
  article: Result
}

const SingleArticle = (props: SingleArticleProps) => {
  const navigate = useNavigate()
  return (
    <Col xs={12} md={4} className='text-center'>
      <Card onClick={() => navigate(`/article-details/${props.article.id}`)}>
        <Card.Img className='img-fluid img-thumbnail' variant='top' src={props.article.image_url} />
        <Card.Body>
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{props.article.news_site}</Card.Subtitle>
          <Card.Text>{props.article.summary}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleArticle
