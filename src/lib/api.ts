import axios from "axios"

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface CreatePostData {
  title: string
  body: string
  userId: number
}

export interface UpdatePostData {
  id: number
  title: string
  body: string
  userId: number
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!

export const postsApi = {
  getPosts: async (): Promise<Post[]> => {
    const response = await axios.get(`${API_BASE}/posts`)
    return response.data
  },

  getPost: async (id: string): Promise<Post> => {
    const response = await axios.get(`${API_BASE}/posts/${id}`)
    return response.data
  },

  createPost: async (data: CreatePostData): Promise<Post> => {
    const response = await axios.post(`${API_BASE}/posts`, data)
    return response.data
  },

  updatePost: async (data: UpdatePostData): Promise<Post> => {
    const response = await axios.put(`${API_BASE}/posts/${data.id}`, data)
    return response.data
  },

  deletePost: async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE}/posts/${id}`)
  },
}
