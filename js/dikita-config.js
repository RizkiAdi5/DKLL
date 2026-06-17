/**
 * Konfigurasi situs Dikita Laundry
 */
window.DIKITA = {
  name: "Dikita Laundry",
  tagline: "Jasa Laundry Profesional & Terpercaya",
  whatsapp: "6285245736325",
  whatsappDisplay: "0852-4573-6325",
  phone: "085245736325",
  address: "Jl. Mawar No.11, Sekip Lama, Kec. Singkawang Tengah, Kota Singkawang, Kalimantan Barat 79113",
  city: "Kota Singkawang",
  hours: "Senin – Minggu, 08.00 – 20.00 WIB",
  instagram: "https://www.instagram.com/dikitalaundry_?igsh=MXAwc2lxYzVpbjR1cw==",
  mapShareUrl: "https://share.google/3A9foVIomb4W4Bbnp",
  // Embed iframe — tidak perlu Google Maps JavaScript API
  mapEmbedUrl:
    "https://www.google.com/maps?q=Laundry+DIKITA,+Jl.+Mawar+No.11,+Sekip+Lama,+Singkawang,+Kalimantan+Barat+79113&hl=id&z=17&output=embed",
  waMessage: "Halo Dikita Laundry, saya ingin tanya layanan laundry.",
  waUrl: function () {
    return "https://wa.me/" + this.whatsapp + "?text=" + encodeURIComponent(this.waMessage);
  },
};
