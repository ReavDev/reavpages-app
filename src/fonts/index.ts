import { Plus_Jakarta_Sans } from "next/font/google"
import localFont from "next/font/local"

const jaka = Plus_Jakarta_Sans({
 subsets: ["latin", "cyrillic-ext", "latin-ext", "vietnamese"],
 display: "swap",
 variable: "--font-jakarta",
})

const chelsea_market = localFont({
 src: [
  {
   path: "./fonts/chelsea_market/ChelseaMarket-Regular.woff2",
   weight: "500",
   style: "normal",
  },
 ],
})

export { chelsea_market, jaka }
