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
let yatisSubmit= document.querySelector(".yatis-submit");
let taburcuSubmit= document.querySelector(".taburcu-submit");
let kalinanGunSayisi= document.querySelector(".gun-sayisi");
let kalinanGunSubmit= document.querySelector(".kalinanGunSubmit");
let yazTutar= document.querySelector(".p-tutar-yaz")



yatisSubmit.addEventListener('click', yatisYaz);

function yatisYaz(){
    yazilanYatisTarihi.textContent= yatisTarihi.value;
    
    taburcuSubmit.addEventListener('click', taburcuYaz);
    function taburcuYaz(){
        yazilanTaburcuTarihi.textContent= taburcuTarihi.value;
        // console.log(taburcuTarihi.value);
    }
}


// ODA VE BLOK SEÇİM İŞLEMİ

secilenOda.addEventListener('click', odaYaz);
function odaYaz() {
girilenOda.textContent= `${secilenBlok.value}-${secilenOda.value}`;

for (let i=0; i<ozelOdalar.length; i++){
    if (girilenOda.textContent == yariOzelOdalar[i]){
        odaTipi.textContent= 'YARI ÖZEL';
        gunlukTutarYaz.textContent= '49 TL'
        kalinanGunSubmit.addEventListener('click', kalinanGunYaz);
function kalinanGunYaz(){
    console.log(`Kalınan Gün Sayısı: ${kalinanGunSayisi.value}`);
    let tutar= kalinanGunSayisi.value*49;
    yazTutar.textContent= `${tutar}TL`
    // console.log(`Tutar: ${tutar}TL`);
    
    }
}
    if (girilenOda.textContent == ozelOdalar[i]){
        odaTipi.textContent= 'ÖZEL';
        gunlukTutarYaz.textContent= '99 TL'
        kalinanGunSubmit.addEventListener('click', kalinanGunYaz);
        function kalinanGunYaz(){
            // console.log(`Kalınan Gün Sayısı: ${kalinanGunSayisi.value}`);
            let tutar= kalinanGunSayisi.value*99;
            yazTutar.textContent= `${tutar}TL`
            // console.log(`Tutar: ${tutar}TL`);
            
            }
    }
    if (girilenOda.textContent == genelOdalar[i]){
        odaTipi.textContent= 'GENEL ';
        gunlukTutarYaz.textContent= 'ÜCRETSİZ';
        kalinanGunSubmit.addEventListener('click', kalinanGunYaz);
        function kalinanGunYaz(){
            yazTutar.textContent= "Ücretsiz"
            
            }
    }
}
}

// TARİH SEÇİM İŞLEMİ

// yatisTarihi.addEventListener('click', yatisYaz);








