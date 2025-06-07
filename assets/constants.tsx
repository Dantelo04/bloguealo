export const BLOG_TAGS = [
  "Technology",
  "Design",
  "Development",
  "Marketing",
  "Business",
  "Finance",
  "Health",
  "Education",
  "Science",
  "Art",
  "Music",
  "Travel",
  "Food",
];

export const NAV_ITEMS = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Sobre Mi",
    href: "/about",
  },
  {
    label: "Contacto",
    href: "/contact",
  },
];

export const ROLES = [
  {
    // Maximo un blog sin verificacion de email
    label: "Invitado",
    value: "guest",
  },
  {
    // Maximo 5 blogs con verificacion de email
    label: "Usuario",
    value: "user",
  },
  {
    // Maximo 10 blogs con verificacion de email
    label: "Usuario Premium",
    value: "premium",
  },
  {
    label: "Administrador",
    value: "admin",
  },
];

export const DEFAULT_ROLE = "guest";

export const blogsSample = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'Description 1',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'Description 2',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
    {
      id: 3,
      title: 'Blog 3',
      description: 'Description 3',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
    {
      id: 4,
      title: 'Blog 4',
      description: 'Description 4',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
    {
      id: 5,
      title: 'Blog 5',
      description: 'Description 5',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
    {
      id: 6,
      title: 'Blog 6',
      description: 'Description 6',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
    {
      id: 7,
      title: 'Blog 7',
      description: 'Description 7',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
    {
      id: 8,
      title: 'Blog 8',
      description: 'Description 8',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
    {
      id: 9,
      title: 'Blog 9',
      description: 'Description 9',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
    {
      id: 10,
      title: 'Blog 10',
      description: 'Description 10',
      image: 'https://picsum.photos/200/300',
      date: '2021-01-01',
      author: 'John Doe',
      authorImage: 'https://picsum.photos/50/50',
      likes: 10,
      tag: 'Technology',
      liked: false,
    },
  ]
  
  export const DEFAULT_BLOG_IMAGE = "/default-background.webp";

  export const DateFormat = (date: string) => {
    return new Date(date).toLocaleDateString("es-ES", {
      month: "long",
      day: "numeric",
    });
  };

  export const TAG_LIMIT = 3;

  export const MIN_TAGS = 1;

  export const VALID_IMAGE_DOMAINS = [
    "picsum.photos",
  ]