import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <script defer src="https://videoadstech.org/ads/sportus_livextop_com.9f28114a-03b4-4167-a7dc-f9c4138a2797.video.js"></script>
        <script async src="https://server.adhub.media/ads/sportus_livextop_com.cad91433-89e5-431f-a716-dd4628a1b8dd.display.js"></script>

         </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
