'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p className={classes.description}>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      {/* To add a copyright to the the footer.  
      1. pass the footer prop to the FooterComponent 
      2. add copyright to the payload-types.ts  
      3. add the globals.ts 
      4. add the field in
      Footer.ts 
      5. yarn payload generate:graphQLSchema 
      6. yarn payload generate:types  */}
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src={'/logo-white.svg'} alt="Logo" width={170} height={50} />
            </Link>
            <p>{footer.copyright}</p>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
