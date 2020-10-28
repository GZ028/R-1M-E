// ==UserScript==
// @name        Reach-1M-Easy
// @description Reach-1M-Easy
//@author       -----
//@defaulticon  https://alairasgyujtes.com/assets/front/img/logo.png    
// @namespace   https://alairasgyujtes.com/
// @updateURL   https://github.com/GZ028/R-1M-E/raw/master/Reach1MEasy.user.js
// @downloadURL https://github.com/GZ028/R-1M-E/raw/master/Reach1MEasy.user.js
// @match        https*://*.alairasgyujtes.com/*  
// @version     0.9
// ==/UserScript==

var input = document.createElement("input");
input.type = "button";
input.value = "Nyomkodj!";
input.style = "top:0;right:0;position:absolute;z-index: 9999; color:red;border:none;background-color:orange;color:white;font-size:241%;"
input.onclick = showAlert;
document.body.appendChild(input);
var nevek = Array("Görény", "Lapper", "Gomba", "Reptilián", "EOL", "Hihetetlen", "Jóskagyerek", "Nagypatika", "Influenza", "Korona", "MilyenFeri", "Gyökér", "Farok", "Vargha", "Ötgé", "Maksz", "Zokszigén", "Pumped", "Vitamin", "Lenkei", "Gabor", "Gyuros", "orvos", "Pömpöpő", "Apáti", "Buda", "Nemoda", "Chemtrail", "HAARP", "Laposföld", "AlSanyko", "Tubi", "Gézabá", "ObiGabi", "Szilárd", "Konteó", "Megatron", "Optimus", "Laci", "John", "Bravo", "Ed", "Eddy", "Pad", "Sátán", "Gábor", "Anyád", "Apád", "Ponyva", "Nagyapád", "Idegen", "anonym", "Turbó", "Magdi", "Kolompár", "Marika", "Gézu", "Pista", "Marci", "Márton", "Gépuska", "Emperor", "Császár", "Kolompár", "Anonymus", "Te", "Mi", "Ti", "Ők", "Tibor", "Napsugár", "Hajnal", "Bógyó", "Babóca", "Hefner", "Nímand", "Gyökér", "Klazsnyikov", "Róbert", "Fricc", "András", "Mészáros", "Ügyes", "Péter", "Takarodj", "Jogász", "Dávid", "Látszik", "Picsa", "Tökös", "Néz", "Gorgor", "Zizi", "Hess", "hűs", "polc", "Q", "Pán", "Csincsilla", "Csillag", "Lajos", "Tövig", "Rózsa", "Kuro", "Dora", "Bane", "Gotham", "Tunya", "Csáp", "SpongyaBob", "Kockanadrág", "Csillag", "Patrik", "Nádas", "Bikini", "fenék", "Alekosz", "Györgyi", "Ló", "Erika", "Szabó", "Elena", "Zagreb", "Ada", "Abigél", "Csillag", "kitty", "Alicia", "Alex", "Romanov", "Bill", "Gates", "Steve", "Jobs", "Adolf", "Hitler", "Pokol", "Baranya", "Csallóköz", "Alita", "John", "wick", "Neó", "Kanál", "Kilincs", "Angelina", "Aranyka", "Erzsi", "Kiverem", "Előd", "Élet", "Lájf", "Alfonz", "Edward", "Eduard", "Anabell", "Célia", "Horváth", "Szekta", "Antimaszk", "Atilla", "Lehúz", "Átver", "Holapénzlebowsky?", "Büdös", "Cilike", "Mulajtovics", "Réjteservi", "Kirics", "Kirill", "Androméda", "Dongó", "Ősember", "Előember", "Retard", "Bivalybasznád", "Péter", "Hömpölygö", "fos", "Lapos", "Tardika", "Dohány", "Szaros", "Szagos", "Beveszi", "Kinyal", "Árpád", "Dart", "Wader", "Fülöp", "Fülönköp", "Mormota", "Kuss", "Igazadvan", "Tés", "Őrűlt", "Nemkomplett", "Lájk", "Szilveszter", "Csőrike", "Zsirdisznó", "Mangalica", "Herénverem", "Kicsapja", "kicsapom", "Kancsal", "Nemnormális", "Közveszélyes", "Maszkos", "Na", "Ni", "Ni ni", "pézsmapocok", "Pézsma", "Holnap", "Részeg", "Hányik", "Másnapos", "Kampókezű", "Fafej", "Rob", "Bob", "Drabália", "Rontó", "Keserű", "Kugli", "Szappan", "Leesettaszappan", "Nagyonhülye", "Életképtelen", "Hüllő", "Kapjabe", "Eberszabású", "Bácsi", "Köllök", "Istenbarma", "Kerberos", "Trump", "Hangya", "puhapöcs", "telavív", "Répa", "Tapsol", "Réka", "Norbert", "Donovan", "Kevin", "Vilma", "Komoly", "Mó", "Sejhaj", "Lőrinc", "Istenvilágkirálycsászár", "Korrekt", "Csaló", "Rabló", "Nyüzüge", "Kalap", "Huzzálel", "Elek", "Kavics", "Kitörik", "Papucs", "Szilánk", "Tébolyult", "Uninteligens", "Ikunuku", "Ködvanafejben", "Tuktuktuk", "László", "Pokolbugyra", "Gyufa", "Sőtét", "Üresfejü", "Porcica", "Jenő", "Fejbensötét", "Philips", "Apple", "Samsung", "Zsuga", "Tiborc", "Leköp", "Bimbó");
var emailveg = Array("chem", "haarp", "flat", "5g", "maksz", "maszk", "org", "com", "hu", "freemail", "gov", "Whitehouse", "hesspicsába", "outlook", "live", "gyokerek", "hotmail", "citromail", "ru", "gmx", "alcatraz", "black", "anon", "fun", "google", "yahoo", "telex", "info", "chem", "bongo", "elittárs", "nart", "cert", "uno", "monopoly", "send", "nsa", "cia", "ncsi", "newyork", "magyarországkormánya", "lidli", "aldi", "spar", "malkovics", "nothuman", "lizardmail", "tardia", "at", "qwerty", "anonym", "apokalipszis", "nasa", "upc", "anyádtudja", "antimaszk", "microsoft", "HH", "hh", "hatterhatalom", "cz", "uk", "au", "ak", "bc", "ujvilagrend", "sd", "alvilag", "sziriusz", "cdns", "wordpress", "network", "exploit", "bitninja", "admin", "user");
function showAlert() {

    var item = nevek[Math.floor(Math.random() * nevek.length)];
    var item2 = nevek[Math.floor(Math.random() * nevek.length)];
    document.getElementsByName("name")[0].value = item + " " + item2;
    document.getElementsByName("zipcode")[0].value = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    item = nevek[Math.floor(Math.random() * nevek.length)];
    document.getElementsByName("city")[0].value = item;
    item = nevek[Math.floor(Math.random() * nevek.length)];
    document.getElementsByName("street")[0].value = item;
    document.getElementsByName("house_nr")[0].value = Math.floor(Math.random() * (100 - 1)) + 1;
    item = nevek[Math.floor(Math.random() * nevek.length)];
    item2 = nevek[Math.floor(Math.random() * nevek.length)];
    var item3 = emailveg[Math.floor(Math.random() * emailveg.length)];
    document.getElementsByName("email")[0].value = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "@" + item2.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "." + item3;
    document.getElementsByName("phone")[0].value = Math.floor(Math.random() * (999999999 - 111111111)) + 111111111;
    document.querySelectorAll('input[type="checkbox"]').forEach(ele => ele.checked = true);


}
