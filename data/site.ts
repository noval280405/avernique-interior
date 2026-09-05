export const navigation = [
  { label: "Beranda", to: "/" },
  { label: "Tentang", to: "/tentang" },
  { label: "Produk", to: "/produk" },
  { label: "Koleksi", to: "/koleksi" },
  { label: "Layanan", to: "/layanan" },
  { label: "Proyek", to: "/proyek" },
  { label: "Galeri", to: "/galeri" },
  { label: "Kontak", to: "/kontak" },
];
// Ganti nomor ini dengan nomor WhatsApp studio sebelum publikasi.
export const whatsapp = (
  subject = "Halo Avernique, saya ingin berkonsultasi tentang interior.",
) => `https://wa.me/6280000000000?text=${encodeURIComponent(subject)}`;
export const photos = {
  hero: "/images/hero-interior.jpg",
  living: "/images/living.jpg",
  dining: "/images/dining.jpg",
  bedroom: "/images/bedroom.jpg",
  office: "/images/office.jpg",
  kitchen: "/images/kitchen.jpg",
  sofa: "/images/sofa.jpg",
  chair: "/images/chair.jpg",
  wood: "/images/wood.jpg",
  cafe: "/images/cafe.jpg",
};
export interface Product {
  name: string;
  category: string;
  price: string;
  material: string;
  image: string;
}
export const products: Product[] = [
  {
    name: "Luna Sofa",
    category: "Sofa",
    price: "Rp4.850.000",
    material: "Solid wood · Premium fabric",
    image: photos.sofa,
  },
  {
    name: "Elora Sofa",
    category: "Sofa",
    price: "Rp3.750.000",
    material: "Solid wood · Linen fabric",
    image: photos.living,
  },
  {
    name: "Arden Modular Sofa",
    category: "Sofa",
    price: "Mulai Rp6.500.000",
    material: "Modular · Premium fabric",
    image: photos.hero,
  },
  {
    name: "Arden Dining Table",
    category: "Meja",
    price: "Rp4.200.000",
    material: "Solid wood · Natural finish",
    image: photos.dining,
  },
  {
    name: "Nara Coffee Table",
    category: "Meja",
    price: "Rp1.750.000",
    material: "Solid wood · Matte finish",
    image: photos.living,
  },
  {
    name: "Elvan Working Desk",
    category: "Workspace",
    price: "Rp2.250.000",
    material: "Plywood · HPL",
    image: photos.office,
  },
  {
    name: "Noma Dining Chair",
    category: "Kursi",
    price: "Rp950.000",
    material: "Solid wood · Fabric",
    image: photos.chair,
  },
  {
    name: "Elora Lounge Chair",
    category: "Kursi",
    price: "Rp1.850.000",
    material: "Solid wood · Linen",
    image: photos.chair,
  },
  {
    name: "Arven Office Chair",
    category: "Workspace",
    price: "Rp1.650.000",
    material: "Metal · Ergonomic fabric",
    image: photos.office,
  },
  {
    name: "Vella Wardrobe",
    category: "Lemari",
    price: "Rp4.750.000",
    material: "Plywood · HPL finish",
    image: photos.bedroom,
  },
  {
    name: "Arden Display Cabinet",
    category: "Lemari",
    price: "Rp3.250.000",
    material: "Plywood · Glass",
    image: photos.living,
  },
  {
    name: "Aruna Bed Frame",
    category: "Bedroom",
    price: "Rp4.200.000",
    material: "Solid wood · Fabric",
    image: photos.bedroom,
  },
  {
    name: "Nara Bedside Table",
    category: "Bedroom",
    price: "Rp950.000",
    material: "Solid wood · Natural finish",
    image: photos.bedroom,
  },
  {
    name: "Minimal Kitchen Set",
    category: "Kitchen",
    price: "Mulai Rp2.500.000 / meter",
    material: "Plywood · HPL",
    image: photos.kitchen,
  },
  {
    name: "Premium Kitchen Set",
    category: "Kitchen",
    price: "Mulai Rp4.500.000 / meter",
    material: "Plywood · Premium finishing",
    image: photos.kitchen,
  },
];
export const categories = [
  {
    name: "Ruang Tamu",
    description: "Sofa · Coffee Table · Cabinet",
    image: photos.living,
    filter: "Sofa",
  },
  {
    name: "Ruang Makan",
    description: "Dining Table · Dining Chair",
    image: photos.dining,
    filter: "Meja",
  },
  {
    name: "Kamar Tidur",
    description: "Bed · Wardrobe · Bedside",
    image: photos.bedroom,
    filter: "Bedroom",
  },
  {
    name: "Ruang Kerja",
    description: "Desk · Chair · Storage",
    image: photos.office,
    filter: "Workspace",
  },
  {
    name: "Kitchen",
    description: "Kitchen Set · Cabinet",
    image: photos.kitchen,
    filter: "Kitchen",
  },
];
export const services = [
  {
    name: "Custom Furniture",
    description:
      "Furniture berdasarkan ukuran, fungsi, material dan desain pelanggan.",
    image: photos.chair,
  },
  {
    name: "Interior Design",
    description:
      "Konsep interior rumah maupun bisnis yang menyatukan fungsi dan karakter.",
    image: photos.living,
  },
  {
    name: "Kitchen Set",
    description:
      "Desain dan pembuatan kitchen set custom untuk keseharian yang lebih nyaman.",
    image: photos.kitchen,
  },
  {
    name: "Residential Interior",
    description:
      "Interior rumah dan apartemen yang terasa personal dan hangat.",
    image: photos.bedroom,
  },
  {
    name: "Office Interior",
    description: "Workspace, meeting room, reception dan office furniture.",
    image: photos.office,
  },
  {
    name: "Commercial Interior",
    description: "Coffee shop, restoran, retail, salon dan bisnis lainnya.",
    image: photos.cafe,
  },
];
export interface Project {
  name: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}
export const projects: Project[] = [
  {
    name: "Serene House",
    category: "Residential Interior",
    location: "Tangerang",
    year: "2026",
    image: photos.living,
    description:
      "Hunian hangat dengan palet natural, tekstur lembut, dan furniture yang mengutamakan kenyamanan.",
  },
  {
    name: "Arden Workspace",
    category: "Office Interior",
    location: "Jakarta",
    year: "2026",
    image: photos.office,
    description:
      "Ruang kerja terbuka yang mendukung fokus, kolaborasi, dan keseharian yang lebih produktif.",
  },
  {
    name: "Nara Coffee Space",
    category: "Commercial Interior",
    location: "Tangerang",
    year: "2026",
    image: photos.cafe,
    description:
      "Ruang bertemu dengan material kayu dan pencahayaan hangat untuk pengalaman yang berkesan.",
  },
  {
    name: "Elora Apartment",
    category: "Apartment Interior",
    location: "Jakarta",
    year: "2026",
    image: photos.bedroom,
    description:
      "Pemanfaatan ruang yang efisien dengan penyimpanan terintegrasi dan desain minimalis.",
  },
];
export const collections = [
  {
    name: "Modern Living",
    description: "Garis bersih, kenyamanan yang tak lekang waktu.",
    image: photos.living,
    filter: "Sofa",
  },
  {
    name: "Scandinavian Home",
    description: "Cahaya alami dan kesederhanaan yang hangat.",
    image: photos.dining,
    filter: "Meja",
  },
  {
    name: "Warm Minimalist",
    description: "Lebih sedikit, lebih bermakna.",
    image: photos.bedroom,
    filter: "Bedroom",
  },
  {
    name: "Natural Living",
    description: "Tekstur organik untuk ruang yang hidup.",
    image: photos.chair,
    filter: "Kursi",
  },
  {
    name: "Urban Apartment",
    description: "Desain cerdas untuk kehidupan urban.",
    image: photos.kitchen,
    filter: "Kitchen",
  },
  {
    name: "Modern Workspace",
    description: "Ruang untuk ide-ide besar Anda.",
    image: photos.office,
    filter: "Workspace",
  },
];
export const gallery = [
  {
    image: photos.living,
    name: "Sudut ruang yang hangat",
    category: "Interior",
  },
  { image: photos.chair, name: "Bentuk dan kenyamanan", category: "Furniture" },
  { image: photos.wood, name: "Tekstur kayu natural", category: "Material" },
  {
    image: photos.kitchen,
    name: "Detail instalasi kitchen set",
    category: "Installation",
  },
  { image: photos.sofa, name: "Luna Sofa", category: "Furniture" },
  { image: photos.office, name: "Ruang untuk berkarya", category: "Interior" },
  { image: photos.wood, name: "Material di workshop", category: "Workshop" },
  {
    image: photos.bedroom,
    name: "Ketenangan dalam ruang",
    category: "Interior",
  },
  { image: photos.dining, name: "Momen bersama", category: "Furniture" },
  { image: photos.cafe, name: "Ruang penuh cerita", category: "Interior" },
];
