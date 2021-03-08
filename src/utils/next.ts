import { ParsedUrlQuery } from 'querystring'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next/types'

export type TypedGetStaticPropsContext<Q> = GetStaticPropsContext & {
  params: Q
}

export type TypedGetStaticProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (context: TypedGetStaticPropsContext<Q>) => Promise<GetStaticPropsResult<P>>
