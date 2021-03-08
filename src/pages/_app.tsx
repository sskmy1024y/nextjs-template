import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '../modules/reducer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
