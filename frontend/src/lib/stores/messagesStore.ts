import { create } from 'zustand'
import { Message, messages as messagesMock, users } from '@/lib/data'

export const useMessagesStore = create(() => ({
  messages: messagesMock
}))

export const addNewMessage = (message:Message) => {
  useMessagesStore.setState((state) => {
    return {
      messages: [...state.messages, message]
    }
  })
}

export const fetchMoreMessages = async () => {
  console.log('fetching more messages')
  const fakeMessages : Message[] = [
    {
      messageId: Math.random() * 1000,
      content: 'Teste',
      user: users[1],
      dateSent: new Date()
    },
    {
      messageId: Math.random() * 1000,
      content: 'teste recibido',
      user: users[0],
      dateSent: new Date()
    },
    {
      messageId: Math.random() * 1000,
      content: 'ok',
      user: users[0],
      dateSent: new Date()
    }
  ]

  await new Promise((resolve) => setTimeout(resolve, 500))

  useMessagesStore.setState((state) => {
    return {
      messages: [...fakeMessages, ...state.messages]
    }
  })
}
