import Document, { Html, Head, Main, NextScript } from 'next/document';
import TwSizeIndicator from '@components/TwSizeIndicator';
import config from '@config/config.json';
import theme from '@config/theme.json';
// _document.js

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { favicon } = config.site;
    const pf = encodeURIComponent(theme.fonts.font_family.primary);
    const sf = theme.fonts.font_family.secondary
      ? `&family=${encodeURIComponent(theme.fonts.font_family.secondary)}`
      : "";
    const fontUrl = `https://fonts.googleapis.com/css2?family=${pf}${sf}&display=swap`;

    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href={favicon} />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href={fontUrl} rel="stylesheet" />
          <meta name="theme-name" content="andromeda-light-nextjs" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
