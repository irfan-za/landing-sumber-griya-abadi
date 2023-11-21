import { NextResponse } from "next/server"
export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      name: "Donny",
      job: "Retailer Plafon PVC",
      message: "SGA selalu mensupply kebutuhan hollow dan lis figura ditoko saya👍",
    },
    {
      id:2,
      name: "Anwar",
      job: "Mandor Proyek",
      message: "Beli gypsum Knauf dan hollow untuk proyek perumahan di Salatiga 1 hari langsung sampai",
    },
    {
      id:3,
      name: "Luki",
      job: "Pimpinan Proyek",
      message: "SGA bisa mensupply kebutuhan gypsum Jayaboard proyek saya di Magetan. Harga oke dan pengirimannya cepat",
    },
    {
      id:4,
      name: "Devi",
      job: "Staff Administrator",
      message: "Pertama kali belanja gypsum Knauf disini. transfer lansung dikirim barangnya. Penjual Amanah👍",
    },
  ])
}
