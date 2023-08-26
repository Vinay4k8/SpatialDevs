import { NavLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import AuthProvider from './AuthProvider'

const Navbar = () => {

    const session={}

  return (
    <nav className='flexBetween navbar'>
        <div className="flex-1 flexStart gap-8">
           <Link href={"/"} >
            <span className='navbar-brand'>
                SpatialDevs
            </span>
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map((link)=>{
                   return <Link href={link.href}
                    key={link.key}
                    >
                        {link.text}
                    </Link>
                 })}
            </ul>
        </div>
        <div className="flexCenter gap-4">
            {session?
            <>userPhoto
            <Link href={"/create-project"}>
                Share Work
            </Link>
            </> :(<AuthProvider/>)
            }
        </div>
    </nav>
  )
}

export default Navbar