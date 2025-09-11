'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import './Header.css'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    // <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
    //   <div className="py-8 flex justify-between">
    //     <Link href="/">
    //       <Logo loading="eager" priority="high" className="invert dark:invert-0" />
    //     </Link>
    //     <HeaderNav data={data} />
    //   </div>
    // </header>
    <header>
      <div className={`header-sec scrolled`}>
        <div className="custom-container">
          <div className="header-flex">
            <div className="header-logo">
              <Link href="/">
                <img src="/media/logo1.jpg" alt="logo image" />
              </Link>
            </div>

            <div className="header-right">
              <div className="header-list desktop-only">
                <Link href="/services">Services</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
