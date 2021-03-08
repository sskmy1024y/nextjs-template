import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }: { children: ReactNode; home?: boolean }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        {home ? (
          <>
            <HeaderHomeImage src="/images/profile.jpg" alt={name} />
            <ProfileLabel>{name}</ProfileLabel>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <HeaderImage src="/images/profile.jpg" alt={name} />
              </a>
            </Link>
            <Header2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </Header2>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </Container>
  )
}

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackToHome = styled.div`
  margin: 3rem 0 0;
`

const HeaderHomeImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
`

const ProfileLabel = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

const HeaderImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
`

const Header2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;

  a {
    color: inherit;
  }
`
