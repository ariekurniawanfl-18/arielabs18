export default async function handler(req, res) {
  // Mengatur izin akses keamanan agar web React Anda bisa membaca datanya
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metode tidak diizinkan. Gunakan POST.' });
  }

  try {
    const { sektor, namaLembaga, kebutuhan, prompt } = req.body;
    const apiKey = "AIzaSyBJdyuVvyK8B38Qo2WZyrtbviQ0CaHQbzg"; 
    
    let finalPrompt = prompt;
    if (!finalPrompt) {
      finalPrompt = `Buatkan rancangan blueprint penataan database dan alur kerja otomatis untuk instansi berikut:\n- Sektor Lembaga: ${sektor || 'Lembaga'}\n- Nama Lembaga/Bisnis: ${namaLembaga || 'Instansi'}\n- Kebutuhan Sistem Khusus: ${kebutuhan || 'Standar Otomasi'}\n\nBerikan rekomendasi skema database relasional yang aman dan estimasi timeline pengerjaan portal secara instan.`;
    }

    // URL Resmi Google Gemini API (Menggunakan model gemini-2.5-flash)
    const url = `https://googleapis.com{apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: finalPrompt }] }]
      })
    });

    const data = await response.json();
    
    // Kirim kembali jawaban asli dari Gemini AI ke website depan Anda tanpa lola
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Gagal terhubung ke Google AI Studio: ' + error.message });
  }
}
