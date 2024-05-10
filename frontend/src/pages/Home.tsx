import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { ChatList } from '@/components/chat/ChatList'
import React from 'react'
import { useMessagesStore, addNewMessage, fetchMoreMessages } from '@/lib/stores/messagesStore'
import {
  Bell,
  MessageCircle,
  Menu

} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

import { useNavigate, Link, Navigate } from 'react-router-dom'

import { useUserLoggedStore } from '@/lib/stores/userLoggedStore'

export function HomeDashboard () {
  const { messages } = useMessagesStore()
  const { userLogged } = useUserLoggedStore()
  console.log(userLogged)

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

      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <MessageCircle className="h-6 w-6" />
                <span className="">WhatsFB</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Button
                  variant={'ghost'}
                  aling={'start'}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Avatar className=' size-7' >
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  IA Chat
                  <div className='  flex-1 '>
                    <Badge className="ml-auto flex-1  flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge>
                  </div>
                </Button>

              </nav>
            </div>

          </div>
        </div>

        <main className=" mx-auto h-screen relative  overflow-x-visible w-full flex-col  flex">
        <header className="flex justify-between h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className=" cursor-pointer rounded-lg hover:bg-muted transition-colors  flex  gap-4 p-2 px-3 items-center">
          <Avatar className=' size-8 ' >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
          <h1 className=' font-semibold text-base leading-4' >IA Chat</h1>
          <h2 className=' text-muted-foreground text-sm leading-3 mt-1' >Active now</h2>
          </div>

          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
          <ChatList
            onScrollTop={() => {
              fetchMoreMessages()
            }}
            messages={messages}
            selectedUser={userLogged}
          />
          <form onSubmit={handleSubmit} className=" p-5 gap-5 flex" >
            <Input type="text" autoComplete="off" placeholder="Escribe un mensaje" />
            <Button type='submit' >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </form>
        </main>
      </div>

    </>
  )
}
