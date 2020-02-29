import React from 'react'
import {Provider} from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import {initStore} from "../store/store";
import {PersistGate} from "redux-persist/integration/react";
import Head from "next/head";

export default withRedux(initStore)(class MyApp extends App<any> {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        }
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return <Provider store={store}>
            {/*<PersistGate loading={null} persistor={store['__PERSISTOR']}>*/}
                <Head>
                    <title>ListApp.co</title>
                </Head>
                <Component {...pageProps} />
            {/*</PersistGate>*/}
        </Provider>

    }
})
