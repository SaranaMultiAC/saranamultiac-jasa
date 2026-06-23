const layanan = [
  {nama: 'Cuci AC', harga: '85.000', deskripsi: 'Cuci AC bersih menyeluruh unit indoor & outdoor'},
  {nama: 'Isi Freon R32/R410', harga: '150.000', deskripsi: 'Isi freon + cek tekanan standar pabrik'},
  {nama: 'Bongkar Pasang AC', harga: '350.000', deskripsi: 'Bongkar pasang rapih bergaransi'},
  {nama: 'Service AC Tidak Dingin', harga: '200.000', deskripsi: 'Diagnosa & perbaikan sampai dingin lagi'}
]

export default function Home() {
  const wa = '6281373210666'
  return (
    <main style={{fontFamily:'system-ui',maxWidth:800,margin:'0 auto',padding:20}}>
      <div style={{background:'#1e40af',color:'white',padding:40,textAlign:'center',borderRadius:12}}>
        <h1 style={{fontSize:32,margin:0}}>Jasa Service AC Jakarta Bergaransi</h1>
        <p style={{fontSize:18,margin:'10px 0'}}>Sarana Multi AC - Teknisi Berpengalaman</p>
        <a href={`https://wa.me/${wa}`} style={{background:'#25d366',color:'white',padding:'15px 30px',borderRadius:8,textDecoration:'none',fontWeight:'bold',display:'inline-block',marginTop:10}}>Chat WA: 0813-7321-0666</a>
      </div>
      
      <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800" style={{width:'100%',borderRadius:12,margin:'30px 0'}} alt="Teknisi Service AC"/>
      
      <h2 style={{textAlign:'center'}}>Layanan Kami</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:20}}>
        {layanan.map(item => (
          <div key={item.nama} style={{border:'1px solid #e5e7eb',borderRadius:12,padding:20}}>
            <h3 style={{margin:'0 0 10px 0'}}>{item.nama}</h3>
            <p style={{color:'#6b7280',fontSize:14,margin:'0 0 15px 0'}}>{item.deskripsi}</p>
            <p style={{fontSize:24,fontWeight:'bold',color:'#1e40af',margin:'0 0 15px 0'}}>Rp {item.harga}</p>
            <a href={`https://wa.me/${wa}?text=Halo, saya mau ${item.nama}`} style={{background:'#1e40af',color:'white',padding:'10px',borderRadius:8,textDecoration:'none',display:'block',textAlign:'center'}}>Pesan Sekarang</a>
          </div>
        ))}
      </div>
    </main>
  )
}
