import { API_URL } from '@config/index.ts';

export const getUsersURL = `${API_URL}/users`;
export const getUserURL = (id: string) => `${API_URL}/users/${id}`;
export const postUserURL = `${API_URL}/users`;
export const putUserURl = (id: string) => `${API_URL}/users/${id}`;
export const deleteUserURl = (id: string) => `${API_URL}/users/${id}`;
