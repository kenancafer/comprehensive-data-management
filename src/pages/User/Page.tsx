import { Container } from "react-bootstrap";
import "../../style/usersPage.css";
import { BsFilePerson } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
interface UsersParam {
  id: number;
  name: string;
  email: string;
  phone: number;
}

const UsersPage = () => {
  const users = useLoaderData() as UsersParam[];
  return (
    <Container id="usersPage">
      <h1>Kullanıcılar</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <BsFilePerson />-
            <Link to={`/users/${user.id}`}>
              <i>{user.name}</i>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default UsersPage;
