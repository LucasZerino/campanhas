import { AppProps } from 'next/app'; // Importa os tipos AppProps
import { UserProvider } from '../context/UserContext'; // Ajuste o caminho conforme necessário
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
