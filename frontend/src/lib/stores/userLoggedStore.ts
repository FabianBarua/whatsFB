import { create } from 'zustand'
import { User } from '@/lib/data'

interface UserLogged {
    userLogged: User | null
}

export const useUserLoggedStore = create(
  () => (
    {
      userLogged: null
    }
  ) as UserLogged)

export const setUserLogged = (user: User) => {
  localStorage.setItem('userLogged', JSON.stringify(user))
  useUserLoggedStore.setState(() => {
    return {
      userLogged: user
    }
  })
}

export const removeUserLogged = () => {
  useUserLoggedStore.setState(() => {
    return {
      userLogged: null
    }
  })
}

// get userLogged from localStorage
export const getUserLogged = () => {
  console.log('getting userLogged from localStorage')
  const userLogged = localStorage.getItem('userLogged')
  if (userLogged) {
    setUserLogged(JSON.parse(userLogged))
  }
}

getUserLogged()
