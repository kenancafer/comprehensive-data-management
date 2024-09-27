import { LoaderFunction, json } from "react-router-dom";
// USER LIST LOADER
export const usersLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Veri çekilirken bir hata oluştu!");
  }
  return response.json();
};
// USER DETAIL LOADER
export const userDetailsLoader: LoaderFunction = async ({ params }) => {
  const { userId } = params;
  const [userResponse, postResponse, albumResponse, todosResponse] =
    await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`),
    ]);
  if (!userResponse.ok) {
    throw new Response("Kullanıcı bulunamadı!", { status: 404 });
  }
  const user = await userResponse.json();
  const posts = await postResponse.json();
  const albums = await albumResponse.json();
  const todos = await todosResponse.json();
  return json({ user, posts, albums, todos });
};

// USER POST LOADER

export const userPostLoader: LoaderFunction = async ({ params }) => {
  const { userId, postId } = params;

  const [userResponse, postResponse, commentsResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
  ]);
  if (!userResponse.ok || !postResponse.ok || !commentsResponse.ok) {
    throw new Response("Veriler bulunamadı!", { status: 404 });
  }
  const user = await userResponse.json();
  const post = await postResponse.json();
  const comments = await commentsResponse.json();

  return json({ user, post, comments });
};

//USER ALBUM LOADER

export const userAlbumLoader: LoaderFunction = async ({ params }) => {
  const { userId, albumId } = params;
  const [userResponse, albumResponse, photosResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`),
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`),
  ]);
  const user = await userResponse.json();
  const albums = await albumResponse.json();

  const albumPics = await photosResponse.json();
  return json({ user, albums, albumPics });
};
