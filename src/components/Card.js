import {Card} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

function MovieCard({movie}) {



    return (
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <ReactStars
    count={5}
    value={movie.rate}
    size={24}
    activeColor="#ffd700"
  />,
  </Card.Body>
</Card>

        </div>


)
}
export default MovieCard