import Document, { Html, Head, Main, NextScript } from 'next/document';
import TwSizeIndicator from '@components/TwSizeIndicator';
import config from '@config/config.json';
import theme from '@config/theme.json';
import Script from 'next/script';

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

          <Script id="clarity" strategy="beforeInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nhmfksrzgs");`}
          </Script>

          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PTM5F7CJ');`}
          </Script>

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
