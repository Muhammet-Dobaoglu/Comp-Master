//  function Deneme() {
//   return (
//     <div>Deneme</div>
//   )
// }
const Deneme=()=>{
  let isim = "Deneme Componenti"
  let plist = [
    {"id":1,"Ad":"Umut","maas":3000},
    {"id":2,"Ad":"Şamil","maas":6000}
  ]
  var html = plist.map(p=> { 
  return (
    <li>{p.id} {p.Ad} {p.maas}</li>
  )
  })
    return (
     <>
     <p>{isim}</p>
     <h4>Personel Listesi</h4>
     <ul>
      {html}
     </ul>
     </>   
    )
  }
export default Deneme