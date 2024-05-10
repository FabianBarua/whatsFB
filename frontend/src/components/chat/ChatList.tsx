import { Message, User, userLogged } from '@/lib/data'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { scrollWithRef } from '@/lib/utils'
import { MessagePop } from '@/components/chat/MessagePop'

interface ChatListProps {
  messages: Message[];
  selectedUser: User;
  onScrollTop: () => void;
}

const useChatList = ({ messages, onScrollTop }: { messages: Message[], onScrollTop: ()=>void }) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const currentDate = useRef<Date>(messages[messages.length - 1].dateSent)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    scrollWithRef({ ref: messagesContainerRef, behavior: 'auto' })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (messagesContainerRef.current) {
        const { scrollHeight, scrollTop, clientHeight } =
          messagesContainerRef.current
        setIsScrolling(scrollHeight - scrollTop - 100 > clientHeight)
      }

      if (messagesContainerRef.current?.scrollTop === 0) {
        messagesContainerRef.current?.scrollTo(0, 1)
        onScrollTop()
      }
    }
    messagesContainerRef.current?.addEventListener('scroll', handleScroll)
    return () => {
      messagesContainerRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (
      currentDate.current !== messages[messages.length - 1].dateSent &&
      (!isScrolling || messages[messages.length - 1].user.id === userLogged.id)
    ) {
      currentDate.current = messages[messages.length - 1].dateSent
      scrollWithRef({ ref: messagesContainerRef })
    }
  }, [messages])

  return {
    messagesContainerRef,
    isScrolling
  }
}

export function ChatList ({ messages, selectedUser, onScrollTop }: ChatListProps) {
  const { messagesContainerRef, isScrolling } = useChatList({ messages, onScrollTop })

  return (
    <>
      {isScrolling && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => scrollWithRef({ ref: messagesContainerRef })}
          className=" size-8 rounded absolute border flex justify-center items-center  bottom-20 right-3 z-50  cursor-pointer bg-background"
        >
          <ChevronDownIcon className="h-4 w-4" />
        </motion.div>
      )}

      <div className="  flex-1 overflow-y-hidden ">
        <div
          id="messages-container"
          ref={messagesContainerRef}
          className="  mask    w-full  pb-10 p-10 gap-2 flex flex-col  scrollbar-hide h-full overflow-y-auto overflow-x-hidden"
        >
          {messages.map((message, i) => {
            return (
              <div
                key={message.messageId}
                className={`flex  w-full justify-start items-start ${message.user.id === selectedUser.id
                    ? ' flex-row-reverse   '
                    : ''
                  }`}
              >
                <MessagePop
                  firstMessageFollowing={
                    !(messages[i - 1]
                      ? messages[i - 1].user.id === message.user.id
                      : false)
                  }
                  message={message.content}
                  user={message.user}
                  userLogged={message.user.id === userLogged.id}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
