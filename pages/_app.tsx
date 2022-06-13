import "../styles/globals.css";
import 'react-virtualized/styles.css';
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { persistor, store } from "../state/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ChakraProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
