import Head from 'next/head'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'
import Layout from 'components/layout'

interface Props {
  datetime: number
}

export default function SSR({ datetime }: Props) {
  return (
    <Layout>
      <Head>
        <title>{'SSR'}</title>
      </Head>
      <article>
        <Header>{'Server Side Rendering'}</Header>
        <div>{`SSRのDatetime:${datetime}`}</div>
      </article>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      datetime: Date.now(),
    },
  }
}

const Header = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`
