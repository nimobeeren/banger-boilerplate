import { AppProps } from "next/app";
import { withApollo } from "../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withApollo({ ssr: true })(MyApp);
