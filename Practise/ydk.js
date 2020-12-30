// Bu cözüm en moderni
// bizim ama normal fonksiyonlari kullanmamiz lazim

const carParts = ["tsla342", "vw0929", "tyt567", "bmw6126", "cabrio213", "alfaromeo3234"];

// Parca isimleri büyük harflere cevrilecektir.
const capitalize = (pName) => pName.toUpperCase();
// Parca isimlerinden sayilar cikartilacaktir.
const extractNumbers = (pName) => pName.replace(/[0-9]/g, '');
// Parca isimleri tersine cevrilecektir.
const reverse = (pName) => pName.split("").reverse().join("");
// Her parcanin basina KEREMAG_ eklenecektir.
const addCompanyName = (pName) => "KEREMAG__" + pName;
// Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir.
const addDate = (pName) => pName + "__" + Date();

const result = carParts.map(capitalize)
                       .map(reverse)
                       .map(addCompanyName)
                       .map(extractNumbers)
                       .map(addDate);
                       
console.log("Spare Parts in Kerem AG", result);