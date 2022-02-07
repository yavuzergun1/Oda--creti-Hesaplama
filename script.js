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
let kalinanGunSayisi= document.querySelector(".gun-sayisi");
let buttonSubmit= document.querySelector(".buttonSubmit");
let buttonHesapla= document.querySelector(".hesapla")
let yazTutar= document.querySelector(".p-tutar-yaz")



buttonSubmit.addEventListener('click', yatisYaz);

function yatisYaz(){
    yazilanYatisTarihi.textContent= yatisTarihi.value;
    yazilanTaburcuTarihi.textContent= taburcuTarihi.value;
    girilenOda.textContent= `${secilenBlok.value}-${secilenOda.value}`;
    for (let i=0; i<ozelOdalar.length; i++){
        if (girilenOda.textContent == yariOzelOdalar[i]){
            odaTipi.textContent= 'YARI ÖZEL';
            gunlukTutarYaz.textContent= '49 TL'
            buttonHesapla.addEventListener('click', kalinanGunYaz);
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
            buttonSubmit.addEventListener('click', kalinanGunYaz);
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
            buttonSubmit.addEventListener('click', kalinanGunYaz);
            function kalinanGunYaz(){
                yazTutar.textContent= "Ücretsiz"
                
                }
        }
    }
    // taburcuSubmit.addEventListener('click', taburcuYaz);
    // function yatisYaz(){
    //     yazilanTaburcuTarihi.textContent= taburcuTarihi.value;
    //     // console.log(taburcuTarihi.value);
    // }
}


// ODA VE BLOK SEÇİM İŞLEMİ

secilenOda.addEventListener('click', odaYaz);
function odaYaz() {



}

// TARİH SEÇİM İŞLEMİ

// yatisTarihi.addEventListener('click', yatisYaz);








