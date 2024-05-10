import { TailIn, TailOut } from './Tails'
import { User } from '@/lib/data'

interface MessagePopProps {
    message: string;
    user: User;
    userLogged: boolean;
    firstMessageFollowing: boolean;
  }

export const MessagePop = ({
  message,
  userLogged,
  firstMessageFollowing
}: MessagePopProps) => {
  return (
      <>
        <div className=" relative flex gap-5 ">
          {firstMessageFollowing && (
            <span
              className={`absolute  w-4 h-4 top-0  ${userLogged ? '  -right-4  ' : 'text-muted -left-2 '
                }`}
            >
              {userLogged ? <TailOut /> : <TailIn />}
            </span>
          )}
          <div
            className={`flex w-max max-w-[20rem] break-words p-2   flex-col gap-2 rounded-b-lg   text-sm  
      ${userLogged
                ? 'bg-primary text-primary-foreground  rounded-tl-lg'
                : 'bg-muted text-muted-foreground rounded-tr-lg'
              }
      ${!firstMessageFollowing ? 'rounded-t-lg' : ''}
      `}
          >
            {message}
          </div>
        </div>
      </>
  )
}
