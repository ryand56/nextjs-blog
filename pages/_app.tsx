import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "@assets/css/main.css";

import "typeface-open-sans";
import "typeface-merriweather";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
