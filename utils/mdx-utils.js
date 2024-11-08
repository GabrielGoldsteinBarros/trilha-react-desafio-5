import { api } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');

  if (data) {
    return data;
  }

  return [];
};

export const getPostBySlug = async (id) => {
  // Busca um post específico pelo ID utilizando Supabase
  const { data, error } = await api.get(`/posts?id=eq.${id}`);

  if (error) {
    console.error('Erro ao buscar o post:', error);
    return {};
  }

  if (data && data.length > 0) {
    return data[0]; // Retorna o primeiro (e único) post encontrado
  }

  return {};
};