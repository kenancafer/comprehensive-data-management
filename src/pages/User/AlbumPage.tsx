import { Link, useLoaderData } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useFavoriteStore } from "../../stores/counter-store";
interface User {
  id: number;
  name: string;
  email: string;
}
interface Album {
  userId: number;
  id: number;
  title: string;
}
interface AlbumPics {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const UserAlbumPage = () => {
  const { albums, user, albumPics } = useLoaderData() as {
    albums: Album;
    user: User;
    albumPics: AlbumPics[];
  };

  const { increase, favorites } = useFavoriteStore();
  return (
    <>
      <Container>
        <p>
          <strong>Kullanıcı ID: </strong>
          {user.id}
          <br />
          <strong>İsim: </strong>
          <Link to={`/users/${user.id}`}>{<i>{user.name}</i>}</Link>
        </p>

        <div>Album :{<h6>{albums.title}</h6>}</div>

        <Row className="g-4">
          {albumPics.map((pic) => (
            <Col key={pic.id}>
              <Card
                style={{ width: "250px", height: "425px", overflow: "hidden" }}
              >
                <Card.Img
                  variant="top"
                  src={pic.thumbnailUrl}
                  alt={pic.title}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>{pic.title}</Card.Text>

                  <div
                    onClick={() => increase(pic)}
                    style={{ cursor: "pointer" }}
                  >
                    {favorites.find((favorite) => favorite.id === pic.id) ? (
                      <FaHeart style={{ color: "red" }} />
                    ) : (
                      <FaRegHeart />
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default UserAlbumPage;
