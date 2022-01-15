import RouteIndicator from "@components/RouteIndicator";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return ( 
    <>
      <RouteIndicator />
      <Component {...pageProps} /> 
    </>
  );
}

export default MyApp;
