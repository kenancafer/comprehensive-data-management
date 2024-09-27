import { Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
}

const UserPostPage = () => {
  const { user, post, comments } = useLoaderData() as {
    user: User;
    post: Post;
    comments: Comment[];
  };
  return (
    <>
      <Container>
        <div>
          <p>
            <strong>Kullanıcı ID:</strong> {post.userId}
            <br />
            <strong>İsim: </strong>
            <Link to={`/users/${user.id}`}>{<i>{user.name}</i>}</Link>
          </p>
          <h4>title: {post.title}</h4>
          <p>{post.body}</p>
        </div>
        <div>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <h4>{comment.name}</h4>
                <small>Yazar: {comment.email}</small>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};
export default UserPostPage;
