// script.js - Fungsi Utilitas Global Bersama
function formatRupiah(angka) {
    if (!angka && angka !== 0) return "";
    return Math.round(angka).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}