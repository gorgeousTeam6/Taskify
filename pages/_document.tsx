import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <body>
        <Main />
        <div id='_modal'></div>
        <div id='_toast'></div>
        <NextScript />
      </body>
    </Html>
  );
}
