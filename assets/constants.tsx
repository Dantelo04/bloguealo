export const BLOG_TAGS = [
    'Technology',
    'Design',
    'Development',
    'Marketing',
    'Business',
    'Finance',
    'Health',
    'Education',
    'Science',
    'Art',
    'Music',
    'Travel',
    'Food',
]

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
]

export const DEFAULT_ROLE = "guest";