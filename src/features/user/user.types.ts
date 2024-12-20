export interface UserDataType {
  id: string;
  name: string;
  username: string;
  image?: string;
  description?: string;
}

export type UserFormDataType = {
  name: string;
  username: string;
  image?: string;
  description?: string;
};
