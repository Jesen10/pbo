// Custom Error Class
class ValidasiError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidasiError";
    }
}

// Fungsi untuk mengecek usia
function cekUsia(usia) {
    if (usia < 17) {
        throw new Error("maaf anda belom cukup umur");
    }
    return "Usia valid: " + usia + " tahun";
}

// Fungsi untuk mengecek nama
function cekNama(nama) {
    if (nama.length < 3) {
        throw new ValidasiError("Nama terlalu pendek");
    }
    return "Nama valid: " + nama;
}

// ===== EKSEKUSI PROGRAM =====
console.log("=== Test 1: Akses Array Index ===");
try {
    let mahasiswa = ["Andi", "Budi", "Citra"];
    console.log(mahasiswa[5].toUpperCase());
} catch (error) {
    console.log("Terjadi error: " + error.message);
} finally {
    console.log("Proses selesai.");
}

console.log("\n=== Test 2: Validasi Usia ===");
try {
    console.log(cekUsia(16));
} catch (error) {
    console.log("Terjadi kesalahan: " + error.message);
}

console.log("\n=== Test 3: Validasi Nama ===");
try {
    console.log(cekNama("Jo"));
} catch (error) {
    if (error instanceof ValidasiError) {
        console.log("Terjadi kesalahan validasi: " + error.message);
    } else {
        console.log("Kesalahan lain: " + error.message);
    }
}
