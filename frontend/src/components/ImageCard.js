import { Card, Button } from "react-bootstrap";

const ImageCard = ({ image, handleDelete }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image.urls.small} />
        <Card.Body>
          <Card.Title>{image.title.toUpperCase()}</Card.Title>
          <Card.Text>{image.description || image.alt_description}</Card.Text>
          <Button onClick={() => handleDelete(image.id)} variant="primary">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ImageCard;
