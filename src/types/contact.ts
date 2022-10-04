export interface ContactsType {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
}
export interface ObjectList {
  name: string;
  items: ContactsType[];
}
export interface ObjectContacts<ObjectList> {
  [id: string]: ObjectList;
}
