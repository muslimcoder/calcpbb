import React, {useState} from 'react'

import './index.css'


function App() {

  // state
  const [luasTanah, setLuasT] = useState(0);
  const [luasBangunan, setLuasB] = useState(0);
  const [njopTanah, setNjopT] = useState(0);
  const [hargaTanah,setHargaT]= useState(0);
  const [hargaBangunan,setHargaB]= useState(0);
  const [pbbTahunan,setPBBT]= useState(0);
  const [njopBangunan,setNjopB]= useState(0);




  let calcPBB = (event) => {
    //prevent submitting
    event.preventDefault()

    if (luasTanah === 0 || luasBangunan === 0 || njopTanah === 0 || njopBangunan === 0) {
      alert('Please enter all inputan')
    } else {
     
      let hargaTanah = luasTanah * njopTanah;
      let hargaBangunan = luasBangunan * njopBangunan;
      let njoptkp = 12000000;
      let stimulus = 15000;
      let pbbTahunan = ((((hargaTanah + hargaBangunan) - njoptkp) * (20/100)) * (5/100)) - stimulus
      
   
      //konversi ker Rupiah
          const hargaTanahku = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
           }).format(hargaTanah);
        const hargaBangunanku = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
           }).format(hargaBangunan);
        const pbbTahunanku = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
          }).format(pbbTahunan);

      setHargaT(hargaTanahku);
      setHargaB(hargaBangunanku);
      setPBBT(pbbTahunanku);

    }
 
  }
  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2>PBB Calculator</h2>
        <h3>Perhitungan Pajak Bumi dan bangunan</h3> <br></br>
        <form onSubmit={calcPBB}>
          <div>
            <label>Luas Tanah (Meter Persegi)</label>
            <input type="number" value={luasTanah} onChange={(e) => setLuasT(e.target.value)} />
          </div>
          <div>
            <label>Luas Banguna (Meter Persegi)</label>
            <input type="number" value={luasBangunan} onChange={(event) => setLuasB(event.target.value)} />
          </div>
          <div>
            <label>Njop Tanah (Rupiah)</label>
            <input type="number" value={njopTanah} onChange={(event) => setNjopT(event.target.value)} />
          </div>
          <div>
            <label>Njop bangunan (Rupiah)</label>
            <input type="number" value={njopBangunan} onChange={(event) => setNjopB(event.target.value)} />
          </div>


          <div>
            <button className='btn' type='submit'>Hitung</button>
            <button className='btn' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Harga Tanah: {hargaTanah} - Harga Bangunan: {hargaBangunan} <br></br>PBB tahunan: {pbbTahunan}</h3>
       
        </div>
        <div> Programed By; Rosid Mustofa</div>
       
      </div>
    </div>
  );

  }
export default App;