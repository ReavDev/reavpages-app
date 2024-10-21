import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'

const jaka = Plus_Jakarta_Sans({
  subsets: ['latin', 'cyrillic-ext', 'latin-ext', 'vietnamese'],
  display: 'swap',
  variable: '--font-jakarta',
})
const jaka_main = localFont({
  src: [
    {
      path: './fonts/plus_jakarta/PlusJakartaSans-Regular.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
const rubik = localFont({
  src: [
    {
      path: './fonts/mona_sans/MonaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

const mona_sans_semibold = localFont({
  src: [
    {
      path: './fonts/mona_sans/MonaSans-SemiBold.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

const mona_sans_medium = localFont({
  src: [
    {
      path: './fonts/mona_sans/MonaSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})
const chelsea_market = localFont({
  src: [
    {
      path: './fonts/chelsea_market/ChelseaMarket-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

const inter = localFont({
  src: [
    {
      path: './fonts/mona_sans/MonaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})
export {
  inter,
  mona_sans_medium,
  mona_sans_semibold,
  rubik,
  jaka,
  chelsea_market,
  jaka_main,
}
