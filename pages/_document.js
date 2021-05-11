import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
                    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
                </Head>
                <body>
                    <Main>
                    </Main>
                    <NextScript />

                    {/* <style jsx>{`
                        margin : 0px; 
                        overflow: hidden;
                    `}</style> */}
                </body>
            </Html>
        )
    }
}

export default MyDocument