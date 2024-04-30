import { HomeIcon, HomeModernIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";


const achievementsList = [
  {
    metric: "Followers",
    value: "3000",
    postfix: "+",
  },
  {
    metric: "Pelanggan",
    value: "1000",
    postfix: "+",
  },
  {
    metric: "Tahun",
    value: "15",
    postfix: "+",
  },
  {
    metric: "Proyek",
    value: "96",
  },
];


const socialMedia=[
  {
    link: 'https://www.instagram.com/sumbergriyaabadi',
    alt: 'Instagram Sumber Griya Abadi',
    image: '/ig.svg'
  },
  {
    link: 'https://web.facebook.com/sumbergriyaabadi?_rdc=1&_rdr',
    alt: 'Facebook Sumber Griya Abadi',
    image: '/fb.svg'
  },
  {
    link: 'https://www.tiktok.com/@sumbergriyaabadi',
    alt: 'Tiktok Sumber Griya Abadi',
    image: '/tiktok.svg'
  },
  {
    link: 'https://www.youtube.com/@sumbergriyaabadi',
    alt: 'Youtube Sumber Griya Abadi',
    image: '/yt.svg'
  },
  {
    link: 'https://api.whatsapp.com/send?phone=6285602904294&text=halo%20pak%2C%20saya%20mau%20konsultasi%20Plafon.',
    alt: 'Whatsapp Sumber Griya Abadi',
    image: '/wa.svg'
  },
]


export {
  achievementsList,
  socialMedia,
}