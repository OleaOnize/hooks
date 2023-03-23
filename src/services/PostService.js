import { http } from "./BaseService";

export const listPost = () => http.get("/posts");

export const getPost = (id) =>
  http.get(`/posts/${id}`, {
    params: {
      _embed: "comments",
    },
  });
// export const getPost = (id) => http.get(`/posts/${id}?_embed=comments`);
