let ozelOdalar= ["A-818", "A-820", "A-822","B-818", "B-820", "B-822", "C-818", "C-820", "C-822"];
let yariOzelOdalar= ["A-812", "A-814", "A-816"];
let genelOdalar=["B-812", "B-814", "B-816", "C-812", "C-814", "C-816"]

let secilenBlok= document.querySelector("#blok");
let secilenOda = document.querySelector('#oda')
let girilenOda = document.querySelector(".odaNo");
let odaTipi= document.querySelector(".odaTipi");
let gunlukTutarYaz= document.querySelector(".gunlukTutarYaz");
let yatisTarihi= document.querySelector(".tarih-yatis");
let taburcuTarihi= document.querySelector(".tarih-taburcu");
let yazilanYatisTarihi= document.querySelector(".p-tarih-yatis-yaz");
let yazilanTaburcuTarihi= document.querySelector(".p-tarih-taburcu-yaz");
let buttonSubmit= document.querySelector(".buttonSubmit");
let kalinanGunSayisi= document.querySelector(".p-kalinan-gun-yaz");
let yazTutar= document.querySelector(".p-tutar-yaz");
let bugun= `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
console.log(`Bugünün tarihi: ${bugun}`);



buttonSubmit.addEventListener('click', yatisYaz);

function yatisYaz(){
    
    girilenOda.textContent= `${secilenBlok.value}-${secilenOda.value}`;

    yazilanYatisTarihi.textContent= yatisTarihi.value;
    yazilanTaburcuTarihi.textContent= taburcuTarihi.value;

    let date1 = new Date(`${yatisTarihi.value}`);
    let date2 = new Date(`${taburcuTarihi.value}`);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    kalinanGunSayisi.textContent= `${diffDays} Gün`

    for (let i=0; i<ozelOdalar.length; i++){
        if (girilenOda.textContent == yariOzelOdalar[i]){
            odaTipi.textContent= 'YARI ÖZEL';
            gunlukTutarYaz.textContent= '49 TL'
            
   
        let tutar= diffDays*49;
        yazTutar.textContent= `${tutar}TL`
        
        
    }
        if (girilenOda.textContent == ozelOdalar[i]){
            odaTipi.textContent= 'ÖZEL';
            gunlukTutarYaz.textContent= '99 TL'
           
                let tutar= diffDays*99;
                yazTutar.textContent= `${tutar}TL`
                
                
        }
        if (girilenOda.textContent == genelOdalar[i]){
            odaTipi.textContent= 'GENEL ';
            gunlukTutarYaz.textContent= 'ÜCRETSİZ';
            
                yazTutar.textContent= "0 TL"
                
                
        }
    }
   

}








