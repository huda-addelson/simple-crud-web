import Axios from '../../utils/Axios';

const getPosts = async () => {
  const { data } = await Axios.get('/posts');
  return data;
};

const detailPost = async (id) => {
  const { data } = await Axios.get(`/posts/${id}`);
  return data;
};

const updatePost = async ({ id, post }) => {
  const { data } = await Axios.patch(`/posts/${id}`, post);
  return data;
};

const createPost = async ({ post }) => {
  const { data } = await Axios.post(`/posts`, post);
  return data;
};

export { getPosts, detailPost, updatePost, createPost };
