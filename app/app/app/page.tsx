import { FaWhatsapp, FaStar } from 'react-icons/fa';

const WA = '628137321066';
const layanan = [
  {nama: 'Cuci AC', harga: 'Rp85.000', img: 'https://images.unsplash.com/photo-1631545806601-20a6d6f0f961?w=400', desc: 'Cuci indoor + outdoor, cek freon gratis'},
  {nama: 'Isi Freon R32', harga: 'Rp150.000', img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400', desc: 'Freon R32/R410 original bergaransi'},
  {nama: 'Bongkar Pasang AC', harga: 'Rp350.000', img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400', desc: 'Pindah unit 0.5-2 PK rapih'},
  {nama: 'Service AC Bocor', harga: 'Rp200.000', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400', desc: 'Perbaikan kebocoran air + netes'}
];

export default function Home() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif'}}>
      <header style={{background:'#0056b3', color:'white', padding:'16px'}}>
        <h1 style={{margin:0, fontSize:'20px'}}>Sarana Multi AC</h1>
        <p style={{margin:'4px 0 0', fontSize:'14px'}}>Jasa Service AC Jakarta Bergaransi 30 Hari</p>
      </header>
      
      <main style={{padding:'16px'}}>
        <h2 style={{fontSize:'18px', marginBottom:'16px'}}>Layanan AC Terlaris</h2>
        <div style={{display:'grid', gap:'16px', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))'}}>
          {layanan.map((item) => (
            <div key={item.nama} style={{border:'1px solid #ddd', borderRadius:'8px', overflow:'hidden'}}>
              <img src={item.img} alt={item.nama} style={{width:'100%', height:'160px', objectFit:'cover'}}/>
              <div style={{padding:'12px'}}>
                <h3 style={{margin:'0 0 4px', fontSize:'16px'}}>{item.nama}</h3>
                <p style={{margin:'0 0 8px', color:'#666', fontSize:'14px'}}>{item.desc}</p>
                <p style={{margin:'0 0 8px', fontWeight:'bold', color:'#0056b3', fontSize:'18px'}}>{item.harga}</p>
                <div style={{display:'flex', color:'#f5a623', fontSize:'12px', marginBottom:'12px', alignItems:'center'}}>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <span style={{color:'#333', marginLeft:'4px'}}>5.0 (128 review)</span>
                </div>
                <a href={`https://wa.me/${WA}?text=Halo Sarana Multi AC, saya mau order ${item.nama}`} 
                   style={{background:'#25D366', color:'white', padding:'12px', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', borderRadius:'6px', textDecoration:'none', fontWeight:'bold'}}>
                   <FaWhatsapp/> Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
