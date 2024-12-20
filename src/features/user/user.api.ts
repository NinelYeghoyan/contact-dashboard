import {
  deleteUserURl,
  getUsersURL,
  getUserURL,
  postUserURL,
  putUserURl,
} from '@features/user/user.endpoints.ts';
import type {
  UserDataType,
  UserFormDataType,
} from '@features/user/user.types.ts';

export const getUsers = async (): Promise<UserDataType[]> => {
  const response = await fetch(getUsersURL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const getUser = async (id: string): Promise<UserDataType> => {
  const response = await fetch(getUserURL(id));
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
};

export const createUser = async (
  newUser: UserFormDataType,
): Promise<UserDataType> => {
  const response = await fetch(postUserURL, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  return response.json();
};

export const editUser = async (user: UserDataType | UserFormDataType) => {
  if (!('id' in user)) {
    throw new Error('User ID is required to edit a user');
  }

  const { id, ...data } = user;

  const response = await fetch(putUserURl(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to update user');
  }

  return response.json();
};

export const deleteUser = async (id: string): Promise<void> => {
  const response = await fetch(deleteUserURl(id), {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete user');
  }
};
