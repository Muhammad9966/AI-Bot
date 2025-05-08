const daftarBelanja = [];
const hargaBarang = {
  "beras": 12000,
  "telur": 25000,
  "minyak goreng": 14000,
  "susu": 18000,
  "sabun": 5000,
  "mentega":7500,
  "shampoo":10000,
  "pasta gigi":9000,
  "galon":15000,
  "sikat gigi":7000,
  "teh melati":4000,
  "kopi luwaq":17000
};

function tambahBarang() {
  const input = document.getElementById("inputBarang");
  const barang = input.value.trim().toLowerCase();

  if (barang !== "") {
    daftarBelanja.push(barang);
    tampilkanDaftar();
    input.value = "";
    document.getElementById("hasilHarga").innerText = "";
  }
}

function hapusBarang(index) {
  daftarBelanja.splice(index, 1);
  tampilkanDaftar();
}

function tampilkanDaftar() {
  const ul = document.getElementById("belanjaan");
  ul.innerHTML = "";

  daftarBelanja.forEach((barang, index) => {
    const li = document.createElement("li");
    li.className = "item";
    const hargaTeks = hargaBarang[barang] ? `Rp${hargaBarang[barang].toLocaleString('id-ID')}` : "Tidak diketahui";
    li.innerHTML = `
      <span>${barang} - ${hargaTeks}</span>
      <button class="remove" onclick="hapusBarang(${index})">Hapus</button>
    `;
    ul.appendChild(li);
  });

  updateTotalHarga();
}

function updateTotalHarga() {
  let total = 0;
  daftarBelanja.forEach(barang => {
    if (hargaBarang.hasOwnProperty(barang)) {
      total += hargaBarang[barang];
    }
  });

  document.getElementById("totalHarga").innerText = `Total: Rp${total.toLocaleString('id-ID')}`;
}

function cekHarga() {
  const input = document.getElementById("inputBarang").value.trim().toLowerCase();
  const harga = hargaBarang[input];
  const hasil = document.getElementById("hasilHarga");

  if (harga) {
    hasil.innerText = `Harga ${input} adalah Rp${harga.toLocaleString('id-ID')}`;
  } else {
    hasil.innerText = `Maaf, saya tidak tahu harga "${input}"`;
  }
}
