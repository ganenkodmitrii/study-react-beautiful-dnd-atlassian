import { v4 as uuid_v4 } from 'uuid';

export const contacts = [
  {
    id: uuid_v4(),
    name: 'Allen Raymond',
    age: 40,
    email: 'nulla.ante@vestibul.co.uk',
    phone: '(992) 914-3792',
  },
  {
    id: uuid_v4(),
    name: 'Chaim Lewis',
    age: 40,
    email: 'dui.in@egetlacus.ca',
    phone: '(294) 840-6685',
  },
  {
    id: uuid_v4(),
    name: 'Kennedy Lane',
    age: 40,
    email: 'mattis.Cras@nonenimMauris.net',
    phone: '(542) 451-7038',
  },
  {
    id: uuid_v4(),
    name: 'Wylie Pope',
    age: 40,
    email: 'est@utquamvel.net',
    phone: '(692) 802-2949',
  },
  {
    id: uuid_v4(),
    name: 'Cyrus Jackson',
    age: 40,
    email: 'nibh@semsempererat.com',
    phone: '(501) 472-5218',
  },
  {
    id: uuid_v4(),
    name: 'Abbot Franks',
    age: 40,
    email: 'scelerisque@magnis.org',
    phone: '(186) 568-3720',
  },
  {
    id: uuid_v4(),
    name: 'Reuben Henry',
    age: 40,
    email: 'pharetra.ut@dictum.co.uk',
    phone: '(715) 598-5792',
  },
  {
    id: uuid_v4(),
    name: 'Simon Morton',
    age: 40,
    email: 'dui.Fusce.diam@Donec.com',
    phone: '(233) 738-2360',
  },
  {
    id: uuid_v4(),
    name: 'Alex Raypinos',
    age: 40,
    email: 'raypino@vestibul.co.uk',
    phone: '(992) 834-3799',
  },
  {
    id: uuid_v4(),
    name: 'Alec Howard',
    age: 35,
    email: 'Donec.elementum@scelari.net',
    phone: '(748) 206-2688',
  },
];

export const lists = {
  [uuid_v4()]: {
    name: 'Familiar person',
    items: contacts,
  },
  [uuid_v4()]: {
    name: 'Companion',
    items: [],
  },
  [uuid_v4()]: {
    name: 'Friend',
    items: [],
  },
  [uuid_v4()]: {
    name: 'Best friend',
    items: [],
  },
};
