import React from 'react'

import NextDocument, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components';
import {ServerStyleSheets as MaterialUiServerStyleSheets} from '@material-ui/styles'

class MyDocument extends NextDocument {
    static async getInitialProps(ctx) {
        const styledComponentSheet = new ServerStyleSheet();
        const materialUiSheets = new MaterialUiServerStyleSheets();

        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        styledComponentSheet.collectStyles(
                            materialUiSheets.collect(<App {...props} />),
                        ),
                });
            const initialProps = await NextDocument.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [
                    <React.Fragment key="styles">
                        {initialProps.styles}
                        {materialUiSheets.getStyleElement()}
                        {styledComponentSheet.getStyleElement()}
                    </React.Fragment>,
                ],
            }
        } finally {
            styledComponentSheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport"
                          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>


                </Head>
                <body>
                <Main>

                </Main>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
