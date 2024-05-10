export interface User {
    id: number;
    avatar: string;
    name: string;
}

export interface Message {
    messageId: number;
    content: string;
    user : User;
    dateSent: Date;
  }

export const users : User[] = [
  {
    id: 1,
    avatar: 'https://github.com/fabianbarua.png',
    name: 'Fabian Barua'
  },
  {
    id: 2,
    avatar: 'https://github.com/shadcn.png',
    name: 'Andrea Aguayo'
  }
]

export const baseDate = (x:number) => new Date(new Date().getTime() + x * 60000)

export const messages : Message[] = [
  {
    messageId: 1,
    content: 'Hola Andrea, ¿Cómo estás?',
    user: users[0],
    dateSent: baseDate(1)
  },
  {
    messageId: 2,
    content: 'Hola Fabian, bien y tú?',
    user: users[1],
    dateSent: baseDate(2)
  },
  {
    messageId: 3,
    content: 'Muy bien, gracias',
    user: users[0],
    dateSent: baseDate(3)
  },
  {
    messageId: 4,
    content: '¿Qué has hecho hoy?',
    user: users[0],
    dateSent: baseDate(4)
  },
  {
    messageId: 5,
    content: 'He estado trabajando en un proyecto personal',
    user: users[1],
    dateSent: baseDate(5)
  },
  {
    messageId: 6,
    content: '¿Y tú?',
    user: users[1],
    dateSent: baseDate(6)
  },
  {
    messageId: 7,
    content: 'He estado trabajando en un proyecto personal también',
    user: users[0],
    dateSent: baseDate(7)
  },
  {
    messageId: 8,
    content: '¿Qué proyecto?',
    user: users[0],
    dateSent: baseDate(8)
  },
  {
    messageId: 9,
    content: 'Estoy haciendo una app de chat',
    user: users[1],
    dateSent: baseDate(9)
  },
  {
    messageId: 10,
    content: '¡Qué genial! ¿Con qué tecnologías?',
    user: users[0],
    dateSent: baseDate(10)
  },
  {
    messageId: 11,
    content: 'Con React y TailwindCSS',
    user: users[1],
    dateSent: baseDate(11)
  },
  {
    messageId: 12,
    content: '¡Genial! ¿Me puedes mostrar?',
    user: users[0],
    dateSent: baseDate(12)
  },
  {
    messageId: 13,
    content: '¡Claro! ¿Quieres verlo ahora?',
    user: users[1],
    dateSent: baseDate(13)
  },
  {
    messageId: 14,
    content: '¡Sí! ¿Puedes compartirme el link?',
    user: users[0],
    dateSent: baseDate(14)
  },
  {
    messageId: 15,
    content: '¡Claro! Aquí tienes:HTTPS://CHAT-APP-REACT-TAILWINDCSS.NETLIFY.APP',
    user: users[1],
    dateSent: baseDate(15)
  },
  {
    messageId: 16,
    content: '¡Gracias! Lo revisaré ahora',
    user: users[0],
    dateSent: baseDate(16)
  },
  {
    messageId: 17,
    content: '¡De nada! ¿Qué te parece?',
    user: users[1],
    dateSent: baseDate(17)
  },
  {
    messageId: 18,
    content: '¡Me encanta! ¿Te gustaría trabajar juntos en un proyecto?',
    user: users[0],
    dateSent: baseDate(18)
  },
  {
    messageId: 19,
    content: '¡Claro! ¿Qué tienes en mente?',
    user: users[1],
    dateSent: baseDate(19)
  },
  {
    messageId: 20,
    content: '¡Estoy pensando en hacer una app de tareas con React y TailwindCSS!',
    user: users[0],
    dateSent: baseDate(20)
  },
  {
    messageId: 21,
    content: '¡Me encanta la idea! ¿Cuándo empezamos?',
    user: users[1],
    dateSent: baseDate(21)
  },
  {
    messageId: 22,
    content: '¡Hagámoslo! ¿Qué te parece si empezamos mañana?',
    user: users[0],
    dateSent: baseDate(22)
  },
  {
    messageId: 23,
    content: '¡Perfecto! ¿A qué hora?',
    user: users[1],
    dateSent: baseDate(23)
  },
  {
    messageId: 24,
    content: '¿Qué te parece a las 10am?',
    user: users[0],
    dateSent: baseDate(24)
  },
  {
    messageId: 25,
    content: '¡Perfecto! Nos vemos mañana a las 10am',
    user: users[1],
    dateSent: baseDate(25)
  }
]

export const userLogged : User = users[0]
