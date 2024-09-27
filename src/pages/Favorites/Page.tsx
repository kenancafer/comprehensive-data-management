import { Card, Col, Container, Row } from "react-bootstrap";
import { useFavoriteStore } from "../../stores/counter-store";

const FavoritesPage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <>
      <Container>
        {favorites.length === 0 ? (
          <h2> Henüz favorileriniz yok...</h2>
        ) : (
          <Row className="g-4">
            <h2>Favoriler</h2>

            {favorites.map((photo) => (
              <Col key={photo.id}>
                <Card
                  style={{
                    width: "250px",
                    height: "425px",
                    overflow: "hidden",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>{photo.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default FavoritesPage;
