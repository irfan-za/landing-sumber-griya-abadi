import {
  Squares2X2Icon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

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

const timer = [
  {
    metric: "Hari",
    value: "0",
  },
  {
    metric: "Jam",
    value: "2",
  },
  {
    metric: "Menit",
    value: "10",
  },
  {
    metric: "Detik",
    value: "7",
  },
];

const socialMedia = [
  {
    link: "https://www.instagram.com/sumbergriyaabadi",
    alt: "Instagram Sumber Griya Abadi",
    image: "/ig.svg",
  },
  {
    link: "https://web.facebook.com/sumbergriyaabadi?_rdc=1&_rdr",
    alt: "Facebook Sumber Griya Abadi",
    image: "/fb.svg",
  },
  {
    link: "https://www.tiktok.com/@sumbergriyaabadi",
    alt: "Tiktok Sumber Griya Abadi",
    image: "/tiktok.svg",
  },
  {
    link: "https://www.youtube.com/@sumbergriyaabadi",
    alt: "Youtube Sumber Griya Abadi",
    image: "/yt.svg",
  },
  {
    link: `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE}&text=halo%20pak%2C%20saya%20mau%20konsultasi%20Plafon.`,
    alt: "Whatsapp Sumber Griya Abadi",
    image: "/wa.svg",
  },
];
const bankAccounts = [
  {
    bank: "bni",
    no: "090 464 9357",
    name: "Muhammad Irfan Zahran",
  },
];

const sidebarLinks = [
  {
    title: "Produk Offline",
    href: "/admin",
    activeNav: null,
    icon: <Squares2X2Icon width={20} height={20} />,
  },
  {
    title: "Jasa Layanan",
    href: "/admin/services",
    activeNav: "services",
    icon: <WrenchScrewdriverIcon width={20} height={20} />,
  },
];
export { achievementsList, socialMedia, timer, bankAccounts, sidebarLinks };
