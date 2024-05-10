import { Input } from '@/components/ui/input'
import { Button } from './components/ui/button'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { ChatList } from '@/components/chat/ChatList'
import { User, userLogged } from '@/lib/data'
import React, { useEffect, useState } from 'react'
import { useMessagesStore, addNewMessage, fetchMoreMessages } from './lib/stores/messagesStore'

export function App () {
  const { messages } = useMessagesStore()

  const [user, setUser] = useState<User | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.querySelector('input')
    const message = input?.value

    if (message) {
      addNewMessage({
        messageId: Math.random(),
        content: message,
        user: userLogged,
        dateSent: new Date()
      })

      input.value = ''
    }
  }

  return (
    <>
      <main className=" h-screen relative max-w-[60rem] overflow-x-visible mx-auto w-full flex-col  flex">
        {
          user && (
            <>
              <ChatList
                onScrollTop={() => {
                  fetchMoreMessages()
                }}
                messages={messages}
                selectedUser={userLogged}
              />

              <form onSubmit={handleSubmit} className=" p-5 gap-5 flex" >
                <Input type="text" autoComplete="off" placeholder="Escribe un mensaje" />
                <Button type='submit' size="icon">
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </form>
            </>
          )
        }

      </main>
    </>
  )
}
