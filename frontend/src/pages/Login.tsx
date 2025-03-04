import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { users } from '@/lib/data'
import { setUserLogged } from '@/lib/stores/userLoggedStore'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Login () {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fakeUser = users[0]
    setUserLogged(fakeUser)
    navigate('/')
  }

  return (
    <div className="w-full lg:grid  lg:grid-cols-2  h-screen">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={ handleSubmit } className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden flex-1 bg-muted lg:block">
      <img
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className=" h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
