import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClientProvider, QueryClient} from "react-query";
import {store} from '../redux/store'
import {Provider} from 'react-redux'

//creating  a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
      <QueryClientProvider client={queryClient}>
          <Provider store={store}>
              <Component {...pageProps} />
          </Provider>
      </QueryClientProvider>
  )
}


//add a query provider create a client so that react query can store
// all the cache data in the object
