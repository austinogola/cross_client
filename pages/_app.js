import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { PageProvider } from 'context/page';

function MyApp({ Component, pageProps }) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  )
}

export default MyApp
