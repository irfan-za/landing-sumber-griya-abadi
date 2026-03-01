import {
  Squares2X2Icon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const achievementsList = [
  {
    metric: "Produk",
    value: "3000",
    postfix: "+",
  },
  {
    metric: "Pelanggan",
    value: "4200",
    postfix: "+",
  },
  {
    metric: "Tahun",
    value: "20",
    postfix: "+",
  },
  {
    metric: "Kepuasan",
    value: "96",
    postfix: "%",
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
    image: "/icons/ig.svg",
  },
  {
    link: "https://web.facebook.com/sumbergriyaabadi?_rdc=1&_rdr",
    alt: "Facebook Sumber Griya Abadi",
    image: "/icons/fb.svg",
  },
  {
    link: "https://www.tiktok.com/@sumbergriyaabadi",
    alt: "Tiktok Sumber Griya Abadi",
    image: "/icons/tiktok.svg",
  },
  {
    link: "https://www.youtube.com/@sumbergriyaabadi",
    alt: "Youtube Sumber Griya Abadi",
    image: "/icons/yt.svg",
  },
  {
    link: `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE}&text=halo%20pak%2C%20saya%20mau%20konsultasi%20Plafon.`,
    alt: "Whatsapp Sumber Griya Abadi",
    image: "/icons/wa.svg",
  },
];
const marketplaces = [
  {
    link: "https://www.tokopedia.com/sumbergriyaabadi",
    alt: "Tokopedia Sumber Griya Abadi",
    image: "/icons/tokopedia.svg",
    name: "Tokopedia",
  },
  {
    link: "https://shopee.co.id/sumbergriyaabadi",
    alt: "Shopee Sumber Griya Abadi",
    image: "/icons/shopee.svg",
    name: "Shopee",
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

const reviews = [
  {
    id: 1,
    name: "Donny",
    job: "Retailer Plafon PVC",
    message: "SGA selalu mensupply kebutuhan hollow dan lis figura ditoko saya👍",
  },
  {
    id: 2,
    name: "Anwar",
    job: "Mandor Proyek",
    message: "Beli gypsum Knauf dan hollow untuk proyek perumahan di Salatiga 1 hari langsung sampai",
  },
  {
    id: 3,
    name: "Luki",
    job: "Pimpinan Proyek",
    message: "SGA bisa mensupply kebutuhan gypsum Jayaboard proyek saya di Magetan. Harga oke dan pengirimannya cepat",
  },
  {
    id: 4,
    name: "Devi",
    job: "Staff Administrator",
    message: "Pertama kali belanja gypsum Knauf disini. transfer lansung dikirim barangnya. Penjual Amanah👍",
  },
];

export { achievementsList, socialMedia, timer, bankAccounts, sidebarLinks, marketplaces, reviews };
