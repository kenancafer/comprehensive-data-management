import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link, useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
export interface userDetailParam {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface Albums {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface Todos {
  id: number;
  userId: number;
  title: string;
  body: string;
}
const UserDetailPage = () => {
  const { user, posts, albums, todos } = useLoaderData() as {
    user: userDetailParam;
    posts: Post[];
    albums: Albums[];
    todos: Todos[];
  };
  const { userId } = useParams<{ userId: string }>();

  return (
    <Container>
      <div>
        <h1>Kullanıcı Bilgisi</h1>
        <p>İsim: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Kullanıcı Adı: {user.username}</p>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="post" title="post">
          post
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`/users/${userId}/posts/${post.id}`}>
                  <h5>{post.title}</h5>
                  <p>{post.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Tab>
        <Tab eventKey="album" title="album">
          album
          <ListGroup>
            {albums.map((album) => (
              <ListGroupItem key={album.id}>
                <Link to={`/users/${userId}/albums/${album.id}`}>
                  <h4>{album.title}</h4>
                  <p>{album.body}</p>
                </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Tab>
        <Tab eventKey="todos" title="todos">
          todos
          <ListGroup>
            {todos.map((todo) => (
              <ListGroupItem key={todo.id}>
                <h4>{todo.title}</h4>
                <p>{todo.body}</p>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default UserDetailPage;
