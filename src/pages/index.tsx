import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import { useDispatch } from 'hooks/hooks'
import { decrement, increment, useCount } from 'modules/count'
import { useCallback } from 'react'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../libs/posts'
import Date from '../components/date'
import GlobalStyle from '../utils/GlobalStyle'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  const dispatch = useDispatch()
  const count = useCount()

  const onIncrement = useCallback(() => dispatch(increment()), [dispatch])
  const onDecrement = useCallback(() => dispatch(decrement()), [dispatch])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <GlobalStyle />
      <Section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </Section>
      <Section>
        <Header2>Blog</Header2>
        <List>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </List>
      </Section>
      <Section>
        <button onClick={onIncrement}>+</button>
        <p>{count}</p>
        <button onClick={onDecrement}>-</button>
      </Section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const Section = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`

const Header2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 1.25rem;
  }
`
