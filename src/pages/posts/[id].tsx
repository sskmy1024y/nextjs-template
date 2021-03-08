import Head from 'next/head'
import { GetStaticPaths } from 'next'
import styled from 'styled-components'
import Layout from 'components/layout'
import { getAllPostIds, getPostData } from 'libs/posts'
import DateView from 'components/date'
import { TypedGetStaticProps } from 'utils/next'

interface Props {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
  datetime: number
}

export default function Post({ postData, datetime }: Props) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <Header>{postData.title}</Header>
        <DateView dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div>{`SSGのDatetime:${datetime}`}</div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

type Params = {
  id: string
}

export const getStaticProps: TypedGetStaticProps<Props, Params> = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
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
