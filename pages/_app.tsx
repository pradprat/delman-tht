import "../styles/globals.css";
import "@inovua/reactdatagrid-community/index.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { persistor, store } from "../state/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../layout";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ChakraProvider>
                    <QueryClientProvider client={queryClient}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </QueryClientProvider>
                </ChakraProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
