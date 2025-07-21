import api from './api';

export interface User {
  id: number;
  name: string;
  email: string;
}

export const getAllUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/User');
  return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await api.get<User>(`/User/${id}`);
  return response.data;
};

export const addUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const response = await api.post<User>('/User', user);
  return response.data;
};

export const updateUser = async (user: User): Promise<void> => {
  await api.put(`/User/${user.id}`, user);
};

export const deleteUser = async (id: number): Promise<void> => {
  await api.delete(`/User/${id}`);
};