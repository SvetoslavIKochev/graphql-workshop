const users = [
  {
    id: '1',
    name: 'Stefaka',
    email: 'stefaka@accedia.com',
    age: 21
  },
  {
    id: '2',
    name: 'Gosho',
    email: 'gosho@accedia.com',
    age: 30
  },
  {
    id: '3',
    name: 'Pesho',
    email: 'pesho@accedia.com',
    age: 24
  }
];

const posts = [
  {
    id: '11',
    title: 'Pesho otide na pochivka',
    body: 'neznaino kude',
    published: true,
    author: '1'
  },
  {
    id: '12',
    title: 'Testing titles bulshit',
    body: 'Bulshits are everywhere',
    published: true,
    author: '1'
  },
  {
    id: '13',
    title: 'Accedia flames everyone',
    body: 'Pesho frame everyone up against each other',
    published: false,
    author: '2'
  }
];

const comments = [
  {
    id: '21',
    text: 'Great post',
    author: '3',
    post: '12'
  },
  {
    id: '22',
    text: 'Mnogo tupo',
    author: '3',
    post: '12'
  },
  {
    id: '23',
    text: 'Brao mashina',
    author: '2',
    post: '13'
  },
  {
    id: '24',
    text: 'This is great article',
    author: '1',
    post: '13'
  }
];

const db = {
  users,
  posts,
  comments
};

export default db;
