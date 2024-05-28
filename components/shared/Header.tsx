import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>


            <div className='flex w-32 justify-end gap-3'>

                <SignedIn>
                    <UserButton afterSignOutUrl='/'/>
                </SignedIn>

                <SignedOut>
                    <Button asChild className='rounded-full' size={'lg'}>
                        <Link href={'/sign-in'}>
                            Login
                        </Link>

                    </Button>
                </SignedOut>
            </div>
        </div>

    </header>
  )
}

export default Header