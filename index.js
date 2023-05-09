import {franc} from 'franc';
import colors from 'colors';

let codes={
    "lang_c":[
    {
      "Id": "aaa",
      "Print_Name": "Ghotuo",
      "Inverted_Name": "Ghotuo"
    },
    {
      "Id": "aab",
      "Print_Name": "Alumu-Tesu",
      "Inverted_Name": "Alumu-Tesu"
    },
    {
      "Id": "aac",
      "Print_Name": "Ari",
      "Inverted_Name": "Ari"
    },
    {
      "Id": "aad",
      "Print_Name": "Amal",
      "Inverted_Name": "Amal"
    },
    {
      "Id": "aae",
      "Print_Name": "Arbëreshë Albanian",
      "Inverted_Name": "Albanian, Arbëreshë"
    },
    {
      "Id": "aaf",
      "Print_Name": "Aranadan",
      "Inverted_Name": "Aranadan"
    },
    {
      "Id": "aag",
      "Print_Name": "Ambrak",
      "Inverted_Name": "Ambrak"
    },
    {
      "Id": "aah",
      "Print_Name": "Abu' Arapesh",
      "Inverted_Name": "Arapesh, Abu'"
    },
    {
      "Id": "aai",
      "Print_Name": "Arifama-Miniafia",
      "Inverted_Name": "Arifama-Miniafia"
    },
    {
      "Id": "aak",
      "Print_Name": "Ankave",
      "Inverted_Name": "Ankave"
    },
    {
      "Id": "aal",
      "Print_Name": "Afade",
      "Inverted_Name": "Afade"
    },
    {
      "Id": "aan",
      "Print_Name": "Anambé",
      "Inverted_Name": "Anambé"
    },
    {
      "Id": "aao",
      "Print_Name": "Algerian Saharan Arabic",
      "Inverted_Name": "Arabic, Algerian Saharan"
    },
    {
      "Id": "aap",
      "Print_Name": "Pará Arára",
      "Inverted_Name": "Arára, Pará"
    },
    {
      "Id": "aaq",
      "Print_Name": "Eastern Abnaki",
      "Inverted_Name": "Abnaki, Eastern"
    },
    {
      "Id": "aar",
      "Print_Name": "Afar",
      "Inverted_Name": "Afar"
    },
    {
      "Id": "aas",
      "Print_Name": "Aasáx",
      "Inverted_Name": "Aasáx"
    },
    {
      "Id": "aat",
      "Print_Name": "Arvanitika Albanian",
      "Inverted_Name": "Albanian, Arvanitika"
    },
    {
      "Id": "aau",
      "Print_Name": "Abau",
      "Inverted_Name": "Abau"
    },
    {
      "Id": "aaw",
      "Print_Name": "Solong",
      "Inverted_Name": "Solong"
    },
    {
      "Id": "aax",
      "Print_Name": "Mandobo Atas",
      "Inverted_Name": "Mandobo Atas"
    },
    {
      "Id": "aaz",
      "Print_Name": "Amarasi",
      "Inverted_Name": "Amarasi"
    },
    {
      "Id": "aba",
      "Print_Name": "Abé",
      "Inverted_Name": "Abé"
    },
    {
      "Id": "abb",
      "Print_Name": "Bankon",
      "Inverted_Name": "Bankon"
    },
    {
      "Id": "abc",
      "Print_Name": "Ambala Ayta",
      "Inverted_Name": "Ayta, Ambala"
    },
    {
      "Id": "abd",
      "Print_Name": "Manide",
      "Inverted_Name": "Manide"
    },
    {
      "Id": "abe",
      "Print_Name": "Western Abnaki",
      "Inverted_Name": "Abnaki, Western"
    },
    {
      "Id": "abf",
      "Print_Name": "Abai Sungai",
      "Inverted_Name": "Abai Sungai"
    },
    {
      "Id": "abg",
      "Print_Name": "Abaga",
      "Inverted_Name": "Abaga"
    },
    {
      "Id": "abh",
      "Print_Name": "Tajiki Arabic",
      "Inverted_Name": "Arabic, Tajiki"
    },
    {
      "Id": "abi",
      "Print_Name": "Abidji",
      "Inverted_Name": "Abidji"
    },
    {
      "Id": "abj",
      "Print_Name": "Aka-Bea",
      "Inverted_Name": "Aka-Bea"
    },
    {
      "Id": "abk",
      "Print_Name": "Abkhazian",
      "Inverted_Name": "Abkhazian"
    },
    {
      "Id": "abl",
      "Print_Name": "Lampung Nyo",
      "Inverted_Name": "Lampung Nyo"
    },
    {
      "Id": "abm",
      "Print_Name": "Abanyom",
      "Inverted_Name": "Abanyom"
    },
    {
      "Id": "abn",
      "Print_Name": "Abua",
      "Inverted_Name": "Abua"
    },
    {
      "Id": "abo",
      "Print_Name": "Abon",
      "Inverted_Name": "Abon"
    },
    {
      "Id": "abp",
      "Print_Name": "Abellen Ayta",
      "Inverted_Name": "Ayta, Abellen"
    },
    {
      "Id": "abq",
      "Print_Name": "Abaza",
      "Inverted_Name": "Abaza"
    },
    {
      "Id": "abr",
      "Print_Name": "Abron",
      "Inverted_Name": "Abron"
    },
    {
      "Id": "abs",
      "Print_Name": "Ambonese Malay",
      "Inverted_Name": "Malay, Ambonese"
    },
    {
      "Id": "abt",
      "Print_Name": "Ambulas",
      "Inverted_Name": "Ambulas"
    },
    {
      "Id": "abu",
      "Print_Name": "Abure",
      "Inverted_Name": "Abure"
    },
    {
      "Id": "abv",
      "Print_Name": "Baharna Arabic",
      "Inverted_Name": "Arabic, Baharna"
    },
    {
      "Id": "abw",
      "Print_Name": "Pal",
      "Inverted_Name": "Pal"
    },
    {
      "Id": "abx",
      "Print_Name": "Inabaknon",
      "Inverted_Name": "Inabaknon"
    },
    {
      "Id": "aby",
      "Print_Name": "Aneme Wake",
      "Inverted_Name": "Aneme Wake"
    },
    {
      "Id": "abz",
      "Print_Name": "Abui",
      "Inverted_Name": "Abui"
    },
    {
      "Id": "aca",
      "Print_Name": "Achagua",
      "Inverted_Name": "Achagua"
    },
    {
      "Id": "acb",
      "Print_Name": "Áncá",
      "Inverted_Name": "Áncá"
    },
    {
      "Id": "acd",
      "Print_Name": "Gikyode",
      "Inverted_Name": "Gikyode"
    },
    {
      "Id": "ace",
      "Print_Name": "Achinese",
      "Inverted_Name": "Achinese"
    },
    {
      "Id": "acf",
      "Print_Name": "Saint Lucian Creole French",
      "Inverted_Name": "Creole French, Saint Lucian"
    },
    {
      "Id": "ach",
      "Print_Name": "Acoli",
      "Inverted_Name": "Acoli"
    },
    {
      "Id": "aci",
      "Print_Name": "Aka-Cari",
      "Inverted_Name": "Aka-Cari"
    },
    {
      "Id": "ack",
      "Print_Name": "Aka-Kora",
      "Inverted_Name": "Aka-Kora"
    },
    {
      "Id": "acl",
      "Print_Name": "Akar-Bale",
      "Inverted_Name": "Akar-Bale"
    },
    {
      "Id": "acm",
      "Print_Name": "Mesopotamian Arabic",
      "Inverted_Name": "Arabic, Mesopotamian"
    },
    {
      "Id": "acn",
      "Print_Name": "Achang",
      "Inverted_Name": "Achang"
    },
    {
      "Id": "acp",
      "Print_Name": "Eastern Acipa",
      "Inverted_Name": "Acipa, Eastern"
    },
    {
      "Id": "acq",
      "Print_Name": "Ta'izzi-Adeni Arabic",
      "Inverted_Name": "Arabic, Ta'izzi-Adeni"
    },
    {
      "Id": "acr",
      "Print_Name": "Achi",
      "Inverted_Name": "Achi"
    },
    {
      "Id": "acs",
      "Print_Name": "Acroá",
      "Inverted_Name": "Acroá"
    },
    {
      "Id": "act",
      "Print_Name": "Achterhoeks",
      "Inverted_Name": "Achterhoeks"
    },
    {
      "Id": "acu",
      "Print_Name": "Achuar-Shiwiar",
      "Inverted_Name": "Achuar-Shiwiar"
    },
    {
      "Id": "acv",
      "Print_Name": "Achumawi",
      "Inverted_Name": "Achumawi"
    },
    {
      "Id": "acw",
      "Print_Name": "Hijazi Arabic",
      "Inverted_Name": "Arabic, Hijazi"
    },
    {
      "Id": "acx",
      "Print_Name": "Omani Arabic",
      "Inverted_Name": "Arabic, Omani"
    },
    {
      "Id": "acy",
      "Print_Name": "Cypriot Arabic",
      "Inverted_Name": "Arabic, Cypriot"
    },
    {
      "Id": "acz",
      "Print_Name": "Acheron",
      "Inverted_Name": "Acheron"
    },
    {
      "Id": "ada",
      "Print_Name": "Adangme",
      "Inverted_Name": "Adangme"
    },
    {
      "Id": "adb",
      "Print_Name": "Atauran",
      "Inverted_Name": "Atauran"
    },
    {
      "Id": "add",
      "Print_Name": "Dzodinka",
      "Inverted_Name": "Dzodinka"
    },
    {
      "Id": "add",
      "Print_Name": "Lidzonka",
      "Inverted_Name": "Lidzonka"
    },
    {
      "Id": "ade",
      "Print_Name": "Adele",
      "Inverted_Name": "Adele"
    },
    {
      "Id": "adf",
      "Print_Name": "Dhofari Arabic",
      "Inverted_Name": "Arabic, Dhofari"
    },
    {
      "Id": "adg",
      "Print_Name": "Andegerebinha",
      "Inverted_Name": "Andegerebinha"
    },
    {
      "Id": "adh",
      "Print_Name": "Adhola",
      "Inverted_Name": "Adhola"
    },
    {
      "Id": "adi",
      "Print_Name": "Adi",
      "Inverted_Name": "Adi"
    },
    {
      "Id": "adj",
      "Print_Name": "Adioukrou",
      "Inverted_Name": "Adioukrou"
    },
    {
      "Id": "adl",
      "Print_Name": "Galo",
      "Inverted_Name": "Galo"
    },
    {
      "Id": "adn",
      "Print_Name": "Adang",
      "Inverted_Name": "Adang"
    },
    {
      "Id": "ado",
      "Print_Name": "Abu",
      "Inverted_Name": "Abu"
    },
    {
      "Id": "adq",
      "Print_Name": "Adangbe",
      "Inverted_Name": "Adangbe"
    },
    {
      "Id": "adr",
      "Print_Name": "Adonara",
      "Inverted_Name": "Adonara"
    },
    {
      "Id": "ads",
      "Print_Name": "Adamorobe Sign Language",
      "Inverted_Name": "Adamorobe Sign Language"
    },
    {
      "Id": "adt",
      "Print_Name": "Adnyamathanha",
      "Inverted_Name": "Adnyamathanha"
    },
    {
      "Id": "adu",
      "Print_Name": "Aduge",
      "Inverted_Name": "Aduge"
    },
    {
      "Id": "adw",
      "Print_Name": "Amundava",
      "Inverted_Name": "Amundava"
    },
    {
      "Id": "adx",
      "Print_Name": "Amdo Tibetan",
      "Inverted_Name": "Tibetan, Amdo"
    },
    {
      "Id": "ady",
      "Print_Name": "Adygei",
      "Inverted_Name": "Adygei"
    },
    {
      "Id": "ady",
      "Print_Name": "Adyghe",
      "Inverted_Name": "Adyghe"
    },
    {
      "Id": "adz",
      "Print_Name": "Adzera",
      "Inverted_Name": "Adzera"
    },
    {
      "Id": "aea",
      "Print_Name": "Areba",
      "Inverted_Name": "Areba"
    },
    {
      "Id": "aeb",
      "Print_Name": "Tunisian Arabic",
      "Inverted_Name": "Arabic, Tunisian"
    },
    {
      "Id": "aec",
      "Print_Name": "Saidi Arabic",
      "Inverted_Name": "Arabic, Saidi"
    },
    {
      "Id": "aed",
      "Print_Name": "Argentine Sign Language",
      "Inverted_Name": "Argentine Sign Language"
    },
    {
      "Id": "aee",
      "Print_Name": "Northeast Pashai",
      "Inverted_Name": "Pashai, Northeast"
    },
    {
      "Id": "aee",
      "Print_Name": "Northeast Pashayi",
      "Inverted_Name": "Pashayi, Northeast"
    },
    {
      "Id": "aek",
      "Print_Name": "Haeke",
      "Inverted_Name": "Haeke"
    },
    {
      "Id": "ael",
      "Print_Name": "Ambele",
      "Inverted_Name": "Ambele"
    },
    {
      "Id": "aem",
      "Print_Name": "Arem",
      "Inverted_Name": "Arem"
    },
    {
      "Id": "aen",
      "Print_Name": "Armenian Sign Language",
      "Inverted_Name": "Armenian Sign Language"
    },
    {
      "Id": "aeq",
      "Print_Name": "Aer",
      "Inverted_Name": "Aer"
    },
    {
      "Id": "aer",
      "Print_Name": "Eastern Arrernte",
      "Inverted_Name": "Arrernte, Eastern"
    },
    {
      "Id": "aes",
      "Print_Name": "Alsea",
      "Inverted_Name": "Alsea"
    },
    {
      "Id": "aeu",
      "Print_Name": "Akeu",
      "Inverted_Name": "Akeu"
    },
    {
      "Id": "aew",
      "Print_Name": "Ambakich",
      "Inverted_Name": "Ambakich"
    },
    {
      "Id": "aey",
      "Print_Name": "Amele",
      "Inverted_Name": "Amele"
    },
    {
      "Id": "aez",
      "Print_Name": "Aeka",
      "Inverted_Name": "Aeka"
    },
    {
      "Id": "afb",
      "Print_Name": "Gulf Arabic",
      "Inverted_Name": "Arabic, Gulf"
    },
    {
      "Id": "afd",
      "Print_Name": "Andai",
      "Inverted_Name": "Andai"
    },
    {
      "Id": "afe",
      "Print_Name": "Putukwam",
      "Inverted_Name": "Putukwam"
    },
    {
      "Id": "afg",
      "Print_Name": "Afghan Sign Language",
      "Inverted_Name": "Afghan Sign Language"
    },
    {
      "Id": "afh",
      "Print_Name": "Afrihili",
      "Inverted_Name": "Afrihili"
    },
    {
      "Id": "afi",
      "Print_Name": "Akrukay",
      "Inverted_Name": "Akrukay"
    },
    {
      "Id": "afi",
      "Print_Name": "Chini",
      "Inverted_Name": "Chini"
    },
    {
      "Id": "afk",
      "Print_Name": "Nanubae",
      "Inverted_Name": "Nanubae"
    },
    {
      "Id": "afn",
      "Print_Name": "Defaka",
      "Inverted_Name": "Defaka"
    },
    {
      "Id": "afo",
      "Print_Name": "Eloyi",
      "Inverted_Name": "Eloyi"
    },
    {
      "Id": "afp",
      "Print_Name": "Tapei",
      "Inverted_Name": "Tapei"
    },
    {
      "Id": "afr",
      "Print_Name": "Afrikaans",
      "Inverted_Name": "Afrikaans"
    },
    {
      "Id": "afs",
      "Print_Name": "Afro-Seminole Creole",
      "Inverted_Name": "Creole, Afro-Seminole"
    },
    {
      "Id": "aft",
      "Print_Name": "Afitti",
      "Inverted_Name": "Afitti"
    },
    {
      "Id": "afu",
      "Print_Name": "Awutu",
      "Inverted_Name": "Awutu"
    },
    {
      "Id": "afz",
      "Print_Name": "Obokuitai",
      "Inverted_Name": "Obokuitai"
    },
    {
      "Id": "aga",
      "Print_Name": "Aguano",
      "Inverted_Name": "Aguano"
    },
    {
      "Id": "agb",
      "Print_Name": "Legbo",
      "Inverted_Name": "Legbo"
    },
    {
      "Id": "agc",
      "Print_Name": "Agatu",
      "Inverted_Name": "Agatu"
    },
    {
      "Id": "agd",
      "Print_Name": "Agarabi",
      "Inverted_Name": "Agarabi"
    },
    {
      "Id": "age",
      "Print_Name": "Angal",
      "Inverted_Name": "Angal"
    },
    {
      "Id": "agf",
      "Print_Name": "Arguni",
      "Inverted_Name": "Arguni"
    },
    {
      "Id": "agg",
      "Print_Name": "Angor",
      "Inverted_Name": "Angor"
    },
    {
      "Id": "agh",
      "Print_Name": "Ngelima",
      "Inverted_Name": "Ngelima"
    },
    {
      "Id": "agi",
      "Print_Name": "Agariya",
      "Inverted_Name": "Agariya"
    },
    {
      "Id": "agj",
      "Print_Name": "Argobba",
      "Inverted_Name": "Argobba"
    },
    {
      "Id": "agk",
      "Print_Name": "Isarog Agta",
      "Inverted_Name": "Agta, Isarog"
    },
    {
      "Id": "agl",
      "Print_Name": "Fembe",
      "Inverted_Name": "Fembe"
    },
    {
      "Id": "agm",
      "Print_Name": "Angaataha",
      "Inverted_Name": "Angaataha"
    },
    {
      "Id": "agn",
      "Print_Name": "Agutaynen",
      "Inverted_Name": "Agutaynen"
    },
    {
      "Id": "ago",
      "Print_Name": "Tainae",
      "Inverted_Name": "Tainae"
    },
    {
      "Id": "agq",
      "Print_Name": "Aghem",
      "Inverted_Name": "Aghem"
    },
    {
      "Id": "agr",
      "Print_Name": "Aguaruna",
      "Inverted_Name": "Aguaruna"
    },
    {
      "Id": "ags",
      "Print_Name": "Esimbi",
      "Inverted_Name": "Esimbi"
    },
    {
      "Id": "agt",
      "Print_Name": "Central Cagayan Agta",
      "Inverted_Name": "Agta, Central Cagayan"
    },
    {
      "Id": "agu",
      "Print_Name": "Aguacateco",
      "Inverted_Name": "Aguacateco"
    },
    {
      "Id": "agv",
      "Print_Name": "Remontado Dumagat",
      "Inverted_Name": "Dumagat, Remontado"
    },
    {
      "Id": "agw",
      "Print_Name": "Kahua",
      "Inverted_Name": "Kahua"
    },
    {
      "Id": "agx",
      "Print_Name": "Aghul",
      "Inverted_Name": "Aghul"
    },
    {
      "Id": "agy",
      "Print_Name": "Southern Alta",
      "Inverted_Name": "Alta, Southern"
    },
    {
      "Id": "agz",
      "Print_Name": "Mt. Iriga Agta",
      "Inverted_Name": "Agta, Mt. Iriga"
    },
    {
      "Id": "aha",
      "Print_Name": "Ahanta",
      "Inverted_Name": "Ahanta"
    },
    {
      "Id": "ahb",
      "Print_Name": "Axamb",
      "Inverted_Name": "Axamb"
    },
    {
      "Id": "ahg",
      "Print_Name": "Qimant",
      "Inverted_Name": "Qimant"
    },
    {
      "Id": "ahh",
      "Print_Name": "Aghu",
      "Inverted_Name": "Aghu"
    },
    {
      "Id": "ahi",
      "Print_Name": "Tiagbamrin Aizi",
      "Inverted_Name": "Aizi, Tiagbamrin"
    },
    {
      "Id": "ahk",
      "Print_Name": "Akha",
      "Inverted_Name": "Akha"
    },
    {
      "Id": "ahl",
      "Print_Name": "Igo",
      "Inverted_Name": "Igo"
    },
    {
      "Id": "ahm",
      "Print_Name": "Mobumrin Aizi",
      "Inverted_Name": "Aizi, Mobumrin"
    },
    {
      "Id": "ahn",
      "Print_Name": "Àhàn",
      "Inverted_Name": "Àhàn"
    },
    {
      "Id": "aho",
      "Print_Name": "Ahom",
      "Inverted_Name": "Ahom"
    },
    {
      "Id": "ahp",
      "Print_Name": "Aproumu Aizi",
      "Inverted_Name": "Aizi, Aproumu"
    },
    {
      "Id": "ahr",
      "Print_Name": "Ahirani",
      "Inverted_Name": "Ahirani"
    },
    {
      "Id": "ahs",
      "Print_Name": "Ashe",
      "Inverted_Name": "Ashe"
    },
    {
      "Id": "aht",
      "Print_Name": "Ahtena",
      "Inverted_Name": "Ahtena"
    },
    {
      "Id": "aia",
      "Print_Name": "Arosi",
      "Inverted_Name": "Arosi"
    },
    {
      "Id": "aib",
      "Print_Name": "Ainu (China)",
      "Inverted_Name": "Ainu (China)"
    },
    {
      "Id": "aic",
      "Print_Name": "Ainbai",
      "Inverted_Name": "Ainbai"
    },
    {
      "Id": "aid",
      "Print_Name": "Alngith",
      "Inverted_Name": "Alngith"
    },
    {
      "Id": "aie",
      "Print_Name": "Amara",
      "Inverted_Name": "Amara"
    },
    {
      "Id": "aif",
      "Print_Name": "Agi",
      "Inverted_Name": "Agi"
    },
    {
      "Id": "aig",
      "Print_Name": "Antigua and Barbuda Creole English",
      "Inverted_Name": "Creole English, Antigua and Barbuda"
    },
    {
      "Id": "aih",
      "Print_Name": "Ai-Cham",
      "Inverted_Name": "Ai-Cham"
    },
    {
      "Id": "aii",
      "Print_Name": "Assyrian Neo-Aramaic",
      "Inverted_Name": "Neo-Aramaic, Assyrian"
    },
    {
      "Id": "aij",
      "Print_Name": "Lishanid Noshan",
      "Inverted_Name": "Lishanid Noshan"
    },
    {
      "Id": "aik",
      "Print_Name": "Ake",
      "Inverted_Name": "Ake"
    },
    {
      "Id": "ail",
      "Print_Name": "Aimele",
      "Inverted_Name": "Aimele"
    },
    {
      "Id": "aim",
      "Print_Name": "Aimol",
      "Inverted_Name": "Aimol"
    },
    {
      "Id": "ain",
      "Print_Name": "Ainu (Japan)",
      "Inverted_Name": "Ainu (Japan)"
    },
    {
      "Id": "aio",
      "Print_Name": "Aiton",
      "Inverted_Name": "Aiton"
    },
    {
      "Id": "aip",
      "Print_Name": "Burumakok",
      "Inverted_Name": "Burumakok"
    },
    {
      "Id": "aiq",
      "Print_Name": "Aimaq",
      "Inverted_Name": "Aimaq"
    },
    {
      "Id": "air",
      "Print_Name": "Airoran",
      "Inverted_Name": "Airoran"
    },
    {
      "Id": "ait",
      "Print_Name": "Arikem",
      "Inverted_Name": "Arikem"
    },
    {
      "Id": "aiw",
      "Print_Name": "Aari",
      "Inverted_Name": "Aari"
    },
    {
      "Id": "aix",
      "Print_Name": "Aighon",
      "Inverted_Name": "Aighon"
    },
    {
      "Id": "aiy",
      "Print_Name": "Ali",
      "Inverted_Name": "Ali"
    },
    {
      "Id": "aja",
      "Print_Name": "Aja (South Sudan)",
      "Inverted_Name": "Aja (South Sudan)"
    },
    {
      "Id": "ajg",
      "Print_Name": "Aja (Benin)",
      "Inverted_Name": "Aja (Benin)"
    },
    {
      "Id": "aji",
      "Print_Name": "Ajië",
      "Inverted_Name": "Ajië"
    },
    {
      "Id": "ajn",
      "Print_Name": "Andajin",
      "Inverted_Name": "Andajin"
    },
    {
      "Id": "ajs",
      "Print_Name": "Algerian Jewish Sign Language",
      "Inverted_Name": "Algerian Jewish Sign Language"
    },
    {
      "Id": "aju",
      "Print_Name": "Judeo-Moroccan Arabic",
      "Inverted_Name": "Arabic, Judeo-Moroccan"
    },
    {
      "Id": "ajw",
      "Print_Name": "Ajawa",
      "Inverted_Name": "Ajawa"
    },
    {
      "Id": "ajz",
      "Print_Name": "Amri Karbi",
      "Inverted_Name": "Karbi, Amri"
    },
    {
      "Id": "aka",
      "Print_Name": "Akan",
      "Inverted_Name": "Akan"
    },
    {
      "Id": "akb",
      "Print_Name": "Batak Angkola",
      "Inverted_Name": "Batak Angkola"
    },
    {
      "Id": "akc",
      "Print_Name": "Mpur",
      "Inverted_Name": "Mpur"
    },
    {
      "Id": "akd",
      "Print_Name": "Ukpet-Ehom",
      "Inverted_Name": "Ukpet-Ehom"
    },
    {
      "Id": "ake",
      "Print_Name": "Akawaio",
      "Inverted_Name": "Akawaio"
    },
    {
      "Id": "akf",
      "Print_Name": "Akpa",
      "Inverted_Name": "Akpa"
    },
    {
      "Id": "akg",
      "Print_Name": "Anakalangu",
      "Inverted_Name": "Anakalangu"
    },
    {
      "Id": "akh",
      "Print_Name": "Angal Heneng",
      "Inverted_Name": "Angal Heneng"
    },
    {
      "Id": "aki",
      "Print_Name": "Aiome",
      "Inverted_Name": "Aiome"
    },
    {
      "Id": "akj",
      "Print_Name": "Aka-Jeru",
      "Inverted_Name": "Aka-Jeru"
    },
    {
      "Id": "akk",
      "Print_Name": "Akkadian",
      "Inverted_Name": "Akkadian"
    },
    {
      "Id": "akl",
      "Print_Name": "Aklanon",
      "Inverted_Name": "Aklanon"
    },
    {
      "Id": "akm",
      "Print_Name": "Aka-Bo",
      "Inverted_Name": "Aka-Bo"
    },
    {
      "Id": "ako",
      "Print_Name": "Akurio",
      "Inverted_Name": "Akurio"
    },
    {
      "Id": "akp",
      "Print_Name": "Siwu",
      "Inverted_Name": "Siwu"
    },
    {
      "Id": "akq",
      "Print_Name": "Ak",
      "Inverted_Name": "Ak"
    },
    {
      "Id": "akr",
      "Print_Name": "Araki",
      "Inverted_Name": "Araki"
    },
    {
      "Id": "aks",
      "Print_Name": "Akaselem",
      "Inverted_Name": "Akaselem"
    },
    {
      "Id": "akt",
      "Print_Name": "Akolet",
      "Inverted_Name": "Akolet"
    },
    {
      "Id": "aku",
      "Print_Name": "Akum",
      "Inverted_Name": "Akum"
    },
    {
      "Id": "akv",
      "Print_Name": "Akhvakh",
      "Inverted_Name": "Akhvakh"
    },
    {
      "Id": "akw",
      "Print_Name": "Akwa",
      "Inverted_Name": "Akwa"
    },
    {
      "Id": "akx",
      "Print_Name": "Aka-Kede",
      "Inverted_Name": "Aka-Kede"
    },
    {
      "Id": "aky",
      "Print_Name": "Aka-Kol",
      "Inverted_Name": "Aka-Kol"
    },
    {
      "Id": "akz",
      "Print_Name": "Alabama",
      "Inverted_Name": "Alabama"
    },
    {
      "Id": "ala",
      "Print_Name": "Alago",
      "Inverted_Name": "Alago"
    },
    {
      "Id": "alc",
      "Print_Name": "Qawasqar",
      "Inverted_Name": "Qawasqar"
    },
    {
      "Id": "ald",
      "Print_Name": "Alladian",
      "Inverted_Name": "Alladian"
    },
    {
      "Id": "ale",
      "Print_Name": "Aleut",
      "Inverted_Name": "Aleut"
    },
    {
      "Id": "alf",
      "Print_Name": "Alege",
      "Inverted_Name": "Alege"
    },
    {
      "Id": "alh",
      "Print_Name": "Alawa",
      "Inverted_Name": "Alawa"
    },
    {
      "Id": "ali",
      "Print_Name": "Amaimon",
      "Inverted_Name": "Amaimon"
    },
    {
      "Id": "alj",
      "Print_Name": "Alangan",
      "Inverted_Name": "Alangan"
    },
    {
      "Id": "alk",
      "Print_Name": "Alak",
      "Inverted_Name": "Alak"
    },
    {
      "Id": "all",
      "Print_Name": "Allar",
      "Inverted_Name": "Allar"
    },
    {
      "Id": "alm",
      "Print_Name": "Amblong",
      "Inverted_Name": "Amblong"
    },
    {
      "Id": "aln",
      "Print_Name": "Gheg Albanian",
      "Inverted_Name": "Albanian, Gheg"
    },
    {
      "Id": "alo",
      "Print_Name": "Larike-Wakasihu",
      "Inverted_Name": "Larike-Wakasihu"
    },
    {
      "Id": "alp",
      "Print_Name": "Alune",
      "Inverted_Name": "Alune"
    },
    {
      "Id": "alq",
      "Print_Name": "Algonquin",
      "Inverted_Name": "Algonquin"
    },
    {
      "Id": "alr",
      "Print_Name": "Alutor",
      "Inverted_Name": "Alutor"
    },
    {
      "Id": "als",
      "Print_Name": "Tosk Albanian",
      "Inverted_Name": "Albanian, Tosk"
    },
    {
      "Id": "alt",
      "Print_Name": "Southern Altai",
      "Inverted_Name": "Altai, Southern"
    },
    {
      "Id": "alu",
      "Print_Name": "'Are'are",
      "Inverted_Name": "'Are'are"
    },
    {
      "Id": "alw",
      "Print_Name": "Alaba-K’abeena",
      "Inverted_Name": "Alaba-K’abeena"
    },
    {
      "Id": "alw",
      "Print_Name": "Wanbasana",
      "Inverted_Name": "Wanbasana"
    },
    {
      "Id": "alx",
      "Print_Name": "Amol",
      "Inverted_Name": "Amol"
    },
    {
      "Id": "aly",
      "Print_Name": "Alyawarr",
      "Inverted_Name": "Alyawarr"
    },
    {
      "Id": "alz",
      "Print_Name": "Alur",
      "Inverted_Name": "Alur"
    },
    {
      "Id": "ama",
      "Print_Name": "Amanayé",
      "Inverted_Name": "Amanayé"
    },
    {
      "Id": "amb",
      "Print_Name": "Ambo",
      "Inverted_Name": "Ambo"
    },
    {
      "Id": "amc",
      "Print_Name": "Amahuaca",
      "Inverted_Name": "Amahuaca"
    },
    {
      "Id": "ame",
      "Print_Name": "Yanesha'",
      "Inverted_Name": "Yanesha'"
    },
    {
      "Id": "amf",
      "Print_Name": "Hamer-Banna",
      "Inverted_Name": "Hamer-Banna"
    },
    {
      "Id": "amg",
      "Print_Name": "Amurdak",
      "Inverted_Name": "Amurdak"
    },
    {
      "Id": "amh",
      "Print_Name": "Amharic",
      "Inverted_Name": "Amharic"
    },
    {
      "Id": "ami",
      "Print_Name": "Amis",
      "Inverted_Name": "Amis"
    },
    {
      "Id": "amj",
      "Print_Name": "Amdang",
      "Inverted_Name": "Amdang"
    },
    {
      "Id": "amk",
      "Print_Name": "Ambai",
      "Inverted_Name": "Ambai"
    },
    {
      "Id": "aml",
      "Print_Name": "War-Jaintia",
      "Inverted_Name": "War-Jaintia"
    },
    {
      "Id": "amm",
      "Print_Name": "Ama (Papua New Guinea)",
      "Inverted_Name": "Ama (Papua New Guinea)"
    },
    {
      "Id": "amn",
      "Print_Name": "Amanab",
      "Inverted_Name": "Amanab"
    },
    {
      "Id": "amo",
      "Print_Name": "Amo",
      "Inverted_Name": "Amo"
    },
    {
      "Id": "amp",
      "Print_Name": "Alamblak",
      "Inverted_Name": "Alamblak"
    },
    {
      "Id": "amq",
      "Print_Name": "Amahai",
      "Inverted_Name": "Amahai"
    },
    {
      "Id": "amr",
      "Print_Name": "Amarakaeri",
      "Inverted_Name": "Amarakaeri"
    },
    {
      "Id": "ams",
      "Print_Name": "Southern Amami-Oshima",
      "Inverted_Name": "Amami-Oshima, Southern"
    },
    {
      "Id": "amt",
      "Print_Name": "Amto",
      "Inverted_Name": "Amto"
    },
    {
      "Id": "amu",
      "Print_Name": "Guerrero Amuzgo",
      "Inverted_Name": "Amuzgo, Guerrero"
    },
    {
      "Id": "amv",
      "Print_Name": "Ambelau",
      "Inverted_Name": "Ambelau"
    },
    {
      "Id": "amw",
      "Print_Name": "Western Neo-Aramaic",
      "Inverted_Name": "Neo-Aramaic, Western"
    },
    {
      "Id": "amx",
      "Print_Name": "Anmatyerre",
      "Inverted_Name": "Anmatyerre"
    },
    {
      "Id": "amy",
      "Print_Name": "Ami",
      "Inverted_Name": "Ami"
    },
    {
      "Id": "amz",
      "Print_Name": "Atampaya",
      "Inverted_Name": "Atampaya"
    },
    {
      "Id": "ana",
      "Print_Name": "Andaqui",
      "Inverted_Name": "Andaqui"
    },
    {
      "Id": "anb",
      "Print_Name": "Andoa",
      "Inverted_Name": "Andoa"
    },
    {
      "Id": "anc",
      "Print_Name": "Ngas",
      "Inverted_Name": "Ngas"
    },
    {
      "Id": "and",
      "Print_Name": "Ansus",
      "Inverted_Name": "Ansus"
    },
    {
      "Id": "ane",
      "Print_Name": "Xârâcùù",
      "Inverted_Name": "Xârâcùù"
    },
    {
      "Id": "anf",
      "Print_Name": "Animere",
      "Inverted_Name": "Animere"
    },
    {
      "Id": "ang",
      "Print_Name": "Old English (ca. 450-1100)",
      "Inverted_Name": "English, Old (ca. 450-1100)"
    },
    {
      "Id": "anh",
      "Print_Name": "Nend",
      "Inverted_Name": "Nend"
    },
    {
      "Id": "ani",
      "Print_Name": "Andi",
      "Inverted_Name": "Andi"
    },
    {
      "Id": "anj",
      "Print_Name": "Anor",
      "Inverted_Name": "Anor"
    },
    {
      "Id": "ank",
      "Print_Name": "Goemai",
      "Inverted_Name": "Goemai"
    },
    {
      "Id": "anl",
      "Print_Name": "Anu-Hkongso Chin",
      "Inverted_Name": "Chin, Anu-Hkongso"
    },
    {
      "Id": "anm",
      "Print_Name": "Anal",
      "Inverted_Name": "Anal"
    },
    {
      "Id": "ann",
      "Print_Name": "Obolo",
      "Inverted_Name": "Obolo"
    },
    {
      "Id": "ano",
      "Print_Name": "Andoque",
      "Inverted_Name": "Andoque"
    },
    {
      "Id": "anp",
      "Print_Name": "Angika",
      "Inverted_Name": "Angika"
    },
    {
      "Id": "anq",
      "Print_Name": "Jarawa (India)",
      "Inverted_Name": "Jarawa (India)"
    },
    {
      "Id": "anr",
      "Print_Name": "Andh",
      "Inverted_Name": "Andh"
    },
    {
      "Id": "ans",
      "Print_Name": "Anserma",
      "Inverted_Name": "Anserma"
    },
    {
      "Id": "ant",
      "Print_Name": "Antakarinya",
      "Inverted_Name": "Antakarinya"
    },
    {
      "Id": "ant",
      "Print_Name": "Antikarinya",
      "Inverted_Name": "Antikarinya"
    },
    {
      "Id": "anu",
      "Print_Name": "Anuak",
      "Inverted_Name": "Anuak"
    },
    {
      "Id": "anv",
      "Print_Name": "Denya",
      "Inverted_Name": "Denya"
    },
    {
      "Id": "anw",
      "Print_Name": "Anaang",
      "Inverted_Name": "Anaang"
    },
    {
      "Id": "anx",
      "Print_Name": "Andra-Hus",
      "Inverted_Name": "Andra-Hus"
    },
    {
      "Id": "any",
      "Print_Name": "Anyin",
      "Inverted_Name": "Anyin"
    },
    {
      "Id": "anz",
      "Print_Name": "Anem",
      "Inverted_Name": "Anem"
    },
    {
      "Id": "aoa",
      "Print_Name": "Angolar",
      "Inverted_Name": "Angolar"
    },
    {
      "Id": "aob",
      "Print_Name": "Abom",
      "Inverted_Name": "Abom"
    },
    {
      "Id": "aoc",
      "Print_Name": "Pemon",
      "Inverted_Name": "Pemon"
    },
    {
      "Id": "aod",
      "Print_Name": "Andarum",
      "Inverted_Name": "Andarum"
    },
    {
      "Id": "aoe",
      "Print_Name": "Angal Enen",
      "Inverted_Name": "Angal Enen"
    },
    {
      "Id": "aof",
      "Print_Name": "Bragat",
      "Inverted_Name": "Bragat"
    },
    {
      "Id": "aog",
      "Print_Name": "Angoram",
      "Inverted_Name": "Angoram"
    },
    {
      "Id": "aoi",
      "Print_Name": "Anindilyakwa",
      "Inverted_Name": "Anindilyakwa"
    },
    {
      "Id": "aoj",
      "Print_Name": "Mufian",
      "Inverted_Name": "Mufian"
    },
    {
      "Id": "aok",
      "Print_Name": "Arhö",
      "Inverted_Name": "Arhö"
    },
    {
      "Id": "aol",
      "Print_Name": "Alor",
      "Inverted_Name": "Alor"
    },
    {
      "Id": "aom",
      "Print_Name": "Ömie",
      "Inverted_Name": "Ömie"
    },
    {
      "Id": "aon",
      "Print_Name": "Bumbita Arapesh",
      "Inverted_Name": "Arapesh, Bumbita"
    },
    {
      "Id": "aor",
      "Print_Name": "Aore",
      "Inverted_Name": "Aore"
    },
    {
      "Id": "aos",
      "Print_Name": "Taikat",
      "Inverted_Name": "Taikat"
    },
    {
      "Id": "aot",
      "Print_Name": "A'tong",
      "Inverted_Name": "A'tong"
    },
    {
      "Id": "aot",
      "Print_Name": "Atong (India)",
      "Inverted_Name": "Atong (India)"
    },
    {
      "Id": "aou",
      "Print_Name": "A'ou",
      "Inverted_Name": "A'ou"
    },
    {
      "Id": "aox",
      "Print_Name": "Atorada",
      "Inverted_Name": "Atorada"
    },
    {
      "Id": "aoz",
      "Print_Name": "Uab Meto",
      "Inverted_Name": "Uab Meto"
    },
    {
      "Id": "apb",
      "Print_Name": "Sa'a",
      "Inverted_Name": "Sa'a"
    },
    {
      "Id": "apc",
      "Print_Name": "Levantine Arabic",
      "Inverted_Name": "Levantine Arabic"
    },
    {
      "Id": "apd",
      "Print_Name": "Sudanese Arabic",
      "Inverted_Name": "Arabic, Sudanese"
    },
    {
      "Id": "ape",
      "Print_Name": "Bukiyip",
      "Inverted_Name": "Bukiyip"
    },
    {
      "Id": "apf",
      "Print_Name": "Pahanan Agta",
      "Inverted_Name": "Agta, Pahanan"
    },
    {
      "Id": "apg",
      "Print_Name": "Ampanang",
      "Inverted_Name": "Ampanang"
    },
    {
      "Id": "aph",
      "Print_Name": "Athpariya",
      "Inverted_Name": "Athpariya"
    },
    {
      "Id": "api",
      "Print_Name": "Apiaká",
      "Inverted_Name": "Apiaká"
    },
    {
      "Id": "apj",
      "Print_Name": "Jicarilla Apache",
      "Inverted_Name": "Apache, Jicarilla"
    },
    {
      "Id": "apk",
      "Print_Name": "Kiowa Apache",
      "Inverted_Name": "Apache, Kiowa"
    },
    {
      "Id": "apl",
      "Print_Name": "Lipan Apache",
      "Inverted_Name": "Apache, Lipan"
    },
    {
      "Id": "apm",
      "Print_Name": "Mescalero-Chiricahua Apache",
      "Inverted_Name": "Apache, Mescalero-Chiricahua"
    },
    {
      "Id": "apn",
      "Print_Name": "Apinayé",
      "Inverted_Name": "Apinayé"
    },
    {
      "Id": "apo",
      "Print_Name": "Ambul",
      "Inverted_Name": "Ambul"
    },
    {
      "Id": "app",
      "Print_Name": "Apma",
      "Inverted_Name": "Apma"
    },
    {
      "Id": "apq",
      "Print_Name": "A-Pucikwar",
      "Inverted_Name": "A-Pucikwar"
    },
    {
      "Id": "apr",
      "Print_Name": "Arop-Lokep",
      "Inverted_Name": "Arop-Lokep"
    },
    {
      "Id": "aps",
      "Print_Name": "Arop-Sissano",
      "Inverted_Name": "Arop-Sissano"
    },
    {
      "Id": "apt",
      "Print_Name": "Apatani",
      "Inverted_Name": "Apatani"
    },
    {
      "Id": "apu",
      "Print_Name": "Apurinã",
      "Inverted_Name": "Apurinã"
    },
    {
      "Id": "apv",
      "Print_Name": "Alapmunte",
      "Inverted_Name": "Alapmunte"
    },
    {
      "Id": "apw",
      "Print_Name": "Western Apache",
      "Inverted_Name": "Apache, Western"
    },
    {
      "Id": "apx",
      "Print_Name": "Aputai",
      "Inverted_Name": "Aputai"
    },
    {
      "Id": "apy",
      "Print_Name": "Apalaí",
      "Inverted_Name": "Apalaí"
    },
    {
      "Id": "apz",
      "Print_Name": "Safeyoka",
      "Inverted_Name": "Safeyoka"
    },
    {
      "Id": "aqc",
      "Print_Name": "Archi",
      "Inverted_Name": "Archi"
    },
    {
      "Id": "aqd",
      "Print_Name": "Ampari Dogon",
      "Inverted_Name": "Dogon, Ampari"
    },
    {
      "Id": "aqg",
      "Print_Name": "Arigidi",
      "Inverted_Name": "Arigidi"
    },
    {
      "Id": "aqk",
      "Print_Name": "Aninka",
      "Inverted_Name": "Aninka"
    },
    {
      "Id": "aqm",
      "Print_Name": "Atohwaim",
      "Inverted_Name": "Atohwaim"
    },
    {
      "Id": "aqn",
      "Print_Name": "Northern Alta",
      "Inverted_Name": "Alta, Northern"
    },
    {
      "Id": "aqp",
      "Print_Name": "Atakapa",
      "Inverted_Name": "Atakapa"
    },
    {
      "Id": "aqr",
      "Print_Name": "Arhâ",
      "Inverted_Name": "Arhâ"
    },
    {
      "Id": "aqt",
      "Print_Name": "Angaité",
      "Inverted_Name": "Angaité"
    },
    {
      "Id": "aqz",
      "Print_Name": "Akuntsu",
      "Inverted_Name": "Akuntsu"
    },
    {
      "Id": "ara",
      "Print_Name": "Arabic",
      "Inverted_Name": "Arabic"
    },
    {
      "Id": "arb",
      "Print_Name": "Standard Arabic",
      "Inverted_Name": "Arabic, Standard"
    },
    {
      "Id": "arc",
      "Print_Name": "Imperial Aramaic (700-300 BCE)",
      "Inverted_Name": "Aramaic, Imperial (700-300 BCE)"
    },
    {
      "Id": "arc",
      "Print_Name": "Official Aramaic (700-300 BCE)",
      "Inverted_Name": "Aramaic, Official (700-300 BCE)"
    },
    {
      "Id": "ard",
      "Print_Name": "Arabana",
      "Inverted_Name": "Arabana"
    },
    {
      "Id": "are",
      "Print_Name": "Western Arrarnta",
      "Inverted_Name": "Arrarnta, Western"
    },
    {
      "Id": "arg",
      "Print_Name": "Aragonese",
      "Inverted_Name": "Aragonese"
    },
    {
      "Id": "arh",
      "Print_Name": "Arhuaco",
      "Inverted_Name": "Arhuaco"
    },
    {
      "Id": "ari",
      "Print_Name": "Arikara",
      "Inverted_Name": "Arikara"
    },
    {
      "Id": "arj",
      "Print_Name": "Arapaso",
      "Inverted_Name": "Arapaso"
    },
    {
      "Id": "ark",
      "Print_Name": "Arikapú",
      "Inverted_Name": "Arikapú"
    },
    {
      "Id": "arl",
      "Print_Name": "Arabela",
      "Inverted_Name": "Arabela"
    },
    {
      "Id": "arn",
      "Print_Name": "Mapuche",
      "Inverted_Name": "Mapuche"
    },
    {
      "Id": "arn",
      "Print_Name": "Mapudungun",
      "Inverted_Name": "Mapudungun"
    },
    {
      "Id": "aro",
      "Print_Name": "Araona",
      "Inverted_Name": "Araona"
    },
    {
      "Id": "arp",
      "Print_Name": "Arapaho",
      "Inverted_Name": "Arapaho"
    },
    {
      "Id": "arq",
      "Print_Name": "Algerian Arabic",
      "Inverted_Name": "Arabic, Algerian"
    },
    {
      "Id": "arr",
      "Print_Name": "Karo (Brazil)",
      "Inverted_Name": "Karo (Brazil)"
    },
    {
      "Id": "ars",
      "Print_Name": "Najdi Arabic",
      "Inverted_Name": "Arabic, Najdi"
    },
    {
      "Id": "aru",
      "Print_Name": "Arawá",
      "Inverted_Name": "Arawá"
    },
    {
      "Id": "aru",
      "Print_Name": "Aruá (Amazonas State)",
      "Inverted_Name": "Aruá (Amazonas State)"
    },
    {
      "Id": "arv",
      "Print_Name": "Arbore",
      "Inverted_Name": "Arbore"
    },
    {
      "Id": "arw",
      "Print_Name": "Arawak",
      "Inverted_Name": "Arawak"
    },
    {
      "Id": "arx",
      "Print_Name": "Aruá (Rodonia State)",
      "Inverted_Name": "Aruá (Rodonia State)"
    },
    {
      "Id": "ary",
      "Print_Name": "Moroccan Arabic",
      "Inverted_Name": "Arabic, Moroccan"
    },
    {
      "Id": "arz",
      "Print_Name": "Egyptian Arabic",
      "Inverted_Name": "Arabic, Egyptian"
    },
    {
      "Id": "asa",
      "Print_Name": "Asu (Tanzania)",
      "Inverted_Name": "Asu (Tanzania)"
    },
    {
      "Id": "asb",
      "Print_Name": "Assiniboine",
      "Inverted_Name": "Assiniboine"
    },
    {
      "Id": "asc",
      "Print_Name": "Casuarina Coast Asmat",
      "Inverted_Name": "Asmat, Casuarina Coast"
    },
    {
      "Id": "ase",
      "Print_Name": "American Sign Language",
      "Inverted_Name": "American Sign Language"
    },
    {
      "Id": "asf",
      "Print_Name": "Auslan",
      "Inverted_Name": "Auslan"
    },
    {
      "Id": "asf",
      "Print_Name": "Australian Sign Language",
      "Inverted_Name": "Australian Sign Language"
    },
    {
      "Id": "asg",
      "Print_Name": "Cishingini",
      "Inverted_Name": "Cishingini"
    },
    {
      "Id": "ash",
      "Print_Name": "Abishira",
      "Inverted_Name": "Abishira"
    },
    {
      "Id": "asi",
      "Print_Name": "Buruwai",
      "Inverted_Name": "Buruwai"
    },
    {
      "Id": "asj",
      "Print_Name": "Sari",
      "Inverted_Name": "Sari"
    },
    {
      "Id": "ask",
      "Print_Name": "Ashkun",
      "Inverted_Name": "Ashkun"
    },
    {
      "Id": "asl",
      "Print_Name": "Asilulu",
      "Inverted_Name": "Asilulu"
    },
    {
      "Id": "asm",
      "Print_Name": "Assamese",
      "Inverted_Name": "Assamese"
    },
    {
      "Id": "asn",
      "Print_Name": "Xingú Asuriní",
      "Inverted_Name": "Asuriní, Xingú"
    },
    {
      "Id": "aso",
      "Print_Name": "Dano",
      "Inverted_Name": "Dano"
    },
    {
      "Id": "asp",
      "Print_Name": "Algerian Sign Language",
      "Inverted_Name": "Algerian Sign Language"
    },
    {
      "Id": "asq",
      "Print_Name": "Austrian Sign Language",
      "Inverted_Name": "Austrian Sign Language"
    },
    {
      "Id": "asr",
      "Print_Name": "Asuri",
      "Inverted_Name": "Asuri"
    },
    {
      "Id": "ass",
      "Print_Name": "Ipulo",
      "Inverted_Name": "Ipulo"
    },
    {
      "Id": "ast",
      "Print_Name": "Asturian",
      "Inverted_Name": "Asturian"
    },
    {
      "Id": "ast",
      "Print_Name": "Asturleonese",
      "Inverted_Name": "Asturleonese"
    },
    {
      "Id": "ast",
      "Print_Name": "Bable",
      "Inverted_Name": "Bable"
    },
    {
      "Id": "ast",
      "Print_Name": "Leonese",
      "Inverted_Name": "Leonese"
    },
    {
      "Id": "asu",
      "Print_Name": "Tocantins Asurini",
      "Inverted_Name": "Asurini, Tocantins"
    },
    {
      "Id": "asv",
      "Print_Name": "Asoa",
      "Inverted_Name": "Asoa"
    },
    {
      "Id": "asw",
      "Print_Name": "Australian Aborigines Sign Language",
      "Inverted_Name": "Australian Aborigines Sign Language"
    },
    {
      "Id": "asx",
      "Print_Name": "Muratayak",
      "Inverted_Name": "Muratayak"
    },
    {
      "Id": "asy",
      "Print_Name": "Yaosakor Asmat",
      "Inverted_Name": "Asmat, Yaosakor"
    },
    {
      "Id": "asz",
      "Print_Name": "As",
      "Inverted_Name": "As"
    },
    {
      "Id": "ata",
      "Print_Name": "Pele-Ata",
      "Inverted_Name": "Pele-Ata"
    },
    {
      "Id": "atb",
      "Print_Name": "Zaiwa",
      "Inverted_Name": "Zaiwa"
    },
    {
      "Id": "atc",
      "Print_Name": "Atsahuaca",
      "Inverted_Name": "Atsahuaca"
    },
    {
      "Id": "atd",
      "Print_Name": "Ata Manobo",
      "Inverted_Name": "Manobo, Ata"
    },
    {
      "Id": "ate",
      "Print_Name": "Atemble",
      "Inverted_Name": "Atemble"
    },
    {
      "Id": "atg",
      "Print_Name": "Ivbie North-Okpela-Arhe",
      "Inverted_Name": "Ivbie North-Okpela-Arhe"
    },
    {
      "Id": "ati",
      "Print_Name": "Attié",
      "Inverted_Name": "Attié"
    },
    {
      "Id": "atj",
      "Print_Name": "Atikamekw",
      "Inverted_Name": "Atikamekw"
    },
    {
      "Id": "atk",
      "Print_Name": "Ati",
      "Inverted_Name": "Ati"
    },
    {
      "Id": "atl",
      "Print_Name": "Mt. Iraya Agta",
      "Inverted_Name": "Agta, Mt. Iraya"
    },
    {
      "Id": "atm",
      "Print_Name": "Ata",
      "Inverted_Name": "Ata"
    },
    {
      "Id": "atn",
      "Print_Name": "Ashtiani",
      "Inverted_Name": "Ashtiani"
    },
    {
      "Id": "ato",
      "Print_Name": "Atong (Cameroon)",
      "Inverted_Name": "Atong (Cameroon)"
    },
    {
      "Id": "atp",
      "Print_Name": "Pudtol Atta",
      "Inverted_Name": "Atta, Pudtol"
    },
    {
      "Id": "atq",
      "Print_Name": "Aralle-Tabulahan",
      "Inverted_Name": "Aralle-Tabulahan"
    },
    {
      "Id": "atr",
      "Print_Name": "Waimiri-Atroari",
      "Inverted_Name": "Waimiri-Atroari"
    },
    {
      "Id": "ats",
      "Print_Name": "Gros Ventre",
      "Inverted_Name": "Gros Ventre"
    },
    {
      "Id": "att",
      "Print_Name": "Pamplona Atta",
      "Inverted_Name": "Atta, Pamplona"
    },
    {
      "Id": "atu",
      "Print_Name": "Reel",
      "Inverted_Name": "Reel"
    },
    {
      "Id": "atv",
      "Print_Name": "Northern Altai",
      "Inverted_Name": "Altai, Northern"
    },
    {
      "Id": "atw",
      "Print_Name": "Atsugewi",
      "Inverted_Name": "Atsugewi"
    },
    {
      "Id": "atx",
      "Print_Name": "Arutani",
      "Inverted_Name": "Arutani"
    },
    {
      "Id": "aty",
      "Print_Name": "Aneityum",
      "Inverted_Name": "Aneityum"
    },
    {
      "Id": "atz",
      "Print_Name": "Arta",
      "Inverted_Name": "Arta"
    },
    {
      "Id": "aua",
      "Print_Name": "Asumboa",
      "Inverted_Name": "Asumboa"
    },
    {
      "Id": "aub",
      "Print_Name": "Alugu",
      "Inverted_Name": "Alugu"
    },
    {
      "Id": "auc",
      "Print_Name": "Waorani",
      "Inverted_Name": "Waorani"
    },
    {
      "Id": "aud",
      "Print_Name": "Anuta",
      "Inverted_Name": "Anuta"
    },
    {
      "Id": "aug",
      "Print_Name": "Aguna",
      "Inverted_Name": "Aguna"
    },
    {
      "Id": "auh",
      "Print_Name": "Aushi",
      "Inverted_Name": "Aushi"
    },
    {
      "Id": "aui",
      "Print_Name": "Anuki",
      "Inverted_Name": "Anuki"
    },
    {
      "Id": "auj",
      "Print_Name": "Awjilah",
      "Inverted_Name": "Awjilah"
    },
    {
      "Id": "auk",
      "Print_Name": "Heyo",
      "Inverted_Name": "Heyo"
    },
    {
      "Id": "aul",
      "Print_Name": "Aulua",
      "Inverted_Name": "Aulua"
    },
    {
      "Id": "aum",
      "Print_Name": "Asu (Nigeria)",
      "Inverted_Name": "Asu (Nigeria)"
    },
    {
      "Id": "aun",
      "Print_Name": "Molmo One",
      "Inverted_Name": "One, Molmo"
    },
    {
      "Id": "auo",
      "Print_Name": "Auyokawa",
      "Inverted_Name": "Auyokawa"
    },
    {
      "Id": "aup",
      "Print_Name": "Makayam",
      "Inverted_Name": "Makayam"
    },
    {
      "Id": "auq",
      "Print_Name": "Anus",
      "Inverted_Name": "Anus"
    },
    {
      "Id": "auq",
      "Print_Name": "Korur",
      "Inverted_Name": "Korur"
    },
    {
      "Id": "aur",
      "Print_Name": "Aruek",
      "Inverted_Name": "Aruek"
    },
    {
      "Id": "aut",
      "Print_Name": "Austral",
      "Inverted_Name": "Austral"
    },
    {
      "Id": "auu",
      "Print_Name": "Auye",
      "Inverted_Name": "Auye"
    },
    {
      "Id": "auw",
      "Print_Name": "Awyi",
      "Inverted_Name": "Awyi"
    },
    {
      "Id": "aux",
      "Print_Name": "Aurá",
      "Inverted_Name": "Aurá"
    },
    {
      "Id": "auy",
      "Print_Name": "Awiyaana",
      "Inverted_Name": "Awiyaana"
    },
    {
      "Id": "auz",
      "Print_Name": "Uzbeki Arabic",
      "Inverted_Name": "Arabic, Uzbeki"
    },
    {
      "Id": "ava",
      "Print_Name": "Avaric",
      "Inverted_Name": "Avaric"
    },
    {
      "Id": "avb",
      "Print_Name": "Avau",
      "Inverted_Name": "Avau"
    },
    {
      "Id": "avd",
      "Print_Name": "Alviri-Vidari",
      "Inverted_Name": "Alviri-Vidari"
    },
    {
      "Id": "ave",
      "Print_Name": "Avestan",
      "Inverted_Name": "Avestan"
    },
    {
      "Id": "avi",
      "Print_Name": "Avikam",
      "Inverted_Name": "Avikam"
    },
    {
      "Id": "avk",
      "Print_Name": "Kotava",
      "Inverted_Name": "Kotava"
    },
    {
      "Id": "avl",
      "Print_Name": "Eastern Egyptian Bedawi Arabic",
      "Inverted_Name": "Arabic, Eastern Egyptian Bedawi"
    },
    {
      "Id": "avm",
      "Print_Name": "Angkamuthi",
      "Inverted_Name": "Angkamuthi"
    },
    {
      "Id": "avn",
      "Print_Name": "Avatime",
      "Inverted_Name": "Avatime"
    },
    {
      "Id": "avo",
      "Print_Name": "Agavotaguerra",
      "Inverted_Name": "Agavotaguerra"
    },
    {
      "Id": "avs",
      "Print_Name": "Aushiri",
      "Inverted_Name": "Aushiri"
    },
    {
      "Id": "avt",
      "Print_Name": "Au",
      "Inverted_Name": "Au"
    },
    {
      "Id": "avu",
      "Print_Name": "Avokaya",
      "Inverted_Name": "Avokaya"
    },
    {
      "Id": "avv",
      "Print_Name": "Avá-Canoeiro",
      "Inverted_Name": "Avá-Canoeiro"
    },
    {
      "Id": "awa",
      "Print_Name": "Awadhi",
      "Inverted_Name": "Awadhi"
    },
    {
      "Id": "awb",
      "Print_Name": "Awa (Papua New Guinea)",
      "Inverted_Name": "Awa (Papua New Guinea)"
    },
    {
      "Id": "awc",
      "Print_Name": "Cicipu",
      "Inverted_Name": "Cicipu"
    },
    {
      "Id": "awe",
      "Print_Name": "Awetí",
      "Inverted_Name": "Awetí"
    },
    {
      "Id": "awg",
      "Print_Name": "Anguthimri",
      "Inverted_Name": "Anguthimri"
    },
    {
      "Id": "awh",
      "Print_Name": "Awbono",
      "Inverted_Name": "Awbono"
    },
    {
      "Id": "awi",
      "Print_Name": "Aekyom",
      "Inverted_Name": "Aekyom"
    },
    {
      "Id": "awk",
      "Print_Name": "Awabakal",
      "Inverted_Name": "Awabakal"
    },
    {
      "Id": "awm",
      "Print_Name": "Arawum",
      "Inverted_Name": "Arawum"
    },
    {
      "Id": "awn",
      "Print_Name": "Awngi",
      "Inverted_Name": "Awngi"
    },
    {
      "Id": "awo",
      "Print_Name": "Awak",
      "Inverted_Name": "Awak"
    },
    {
      "Id": "awr",
      "Print_Name": "Awera",
      "Inverted_Name": "Awera"
    },
    {
      "Id": "aws",
      "Print_Name": "South Awyu",
      "Inverted_Name": "Awyu, South"
    },
    {
      "Id": "awt",
      "Print_Name": "Araweté",
      "Inverted_Name": "Araweté"
    },
    {
      "Id": "awu",
      "Print_Name": "Central Awyu",
      "Inverted_Name": "Awyu, Central"
    },
    {
      "Id": "awv",
      "Print_Name": "Jair Awyu",
      "Inverted_Name": "Awyu, Jair"
    },
    {
      "Id": "aww",
      "Print_Name": "Awun",
      "Inverted_Name": "Awun"
    },
    {
      "Id": "awx",
      "Print_Name": "Awara",
      "Inverted_Name": "Awara"
    },
    {
      "Id": "awy",
      "Print_Name": "Edera Awyu",
      "Inverted_Name": "Awyu, Edera"
    },
    {
      "Id": "axb",
      "Print_Name": "Abipon",
      "Inverted_Name": "Abipon"
    },
    {
      "Id": "axe",
      "Print_Name": "Ayerrerenge",
      "Inverted_Name": "Ayerrerenge"
    },
    {
      "Id": "axg",
      "Print_Name": "Mato Grosso Arára",
      "Inverted_Name": "Arára, Mato Grosso"
    },
    {
      "Id": "axk",
      "Print_Name": "Yaka (Central African Republic)",
      "Inverted_Name": "Yaka (Central African Republic)"
    },
    {
      "Id": "axl",
      "Print_Name": "Lower Southern Aranda",
      "Inverted_Name": "Aranda, Lower Southern"
    },
    {
      "Id": "axm",
      "Print_Name": "Middle Armenian",
      "Inverted_Name": "Armenian, Middle"
    },
    {
      "Id": "axx",
      "Print_Name": "Xârâgurè",
      "Inverted_Name": "Xârâgurè"
    },
    {
      "Id": "aya",
      "Print_Name": "Awar",
      "Inverted_Name": "Awar"
    },
    {
      "Id": "ayb",
      "Print_Name": "Ayizo Gbe",
      "Inverted_Name": "Gbe, Ayizo"
    },
    {
      "Id": "ayc",
      "Print_Name": "Southern Aymara",
      "Inverted_Name": "Aymara, Southern"
    },
    {
      "Id": "ayd",
      "Print_Name": "Ayabadhu",
      "Inverted_Name": "Ayabadhu"
    },
    {
      "Id": "aye",
      "Print_Name": "Ayere",
      "Inverted_Name": "Ayere"
    },
    {
      "Id": "ayg",
      "Print_Name": "Ginyanga",
      "Inverted_Name": "Ginyanga"
    },
    {
      "Id": "ayh",
      "Print_Name": "Hadrami Arabic",
      "Inverted_Name": "Arabic, Hadrami"
    },
    {
      "Id": "ayi",
      "Print_Name": "Leyigha",
      "Inverted_Name": "Leyigha"
    },
    {
      "Id": "ayk",
      "Print_Name": "Akuku",
      "Inverted_Name": "Akuku"
    },
    {
      "Id": "ayl",
      "Print_Name": "Libyan Arabic",
      "Inverted_Name": "Arabic, Libyan"
    },
    {
      "Id": "aym",
      "Print_Name": "Aymara",
      "Inverted_Name": "Aymara"
    },
    {
      "Id": "ayn",
      "Print_Name": "Sanaani Arabic",
      "Inverted_Name": "Arabic, Sanaani"
    },
    {
      "Id": "ayo",
      "Print_Name": "Ayoreo",
      "Inverted_Name": "Ayoreo"
    },
    {
      "Id": "ayp",
      "Print_Name": "North Mesopotamian Arabic",
      "Inverted_Name": "Arabic, North Mesopotamian"
    },
    {
      "Id": "ayq",
      "Print_Name": "Ayi (Papua New Guinea)",
      "Inverted_Name": "Ayi (Papua New Guinea)"
    },
    {
      "Id": "ayr",
      "Print_Name": "Central Aymara",
      "Inverted_Name": "Aymara, Central"
    },
    {
      "Id": "ays",
      "Print_Name": "Sorsogon Ayta",
      "Inverted_Name": "Ayta, Sorsogon"
    },
    {
      "Id": "ayt",
      "Print_Name": "Magbukun Ayta",
      "Inverted_Name": "Ayta, Magbukun"
    },
    {
      "Id": "ayu",
      "Print_Name": "Ayu",
      "Inverted_Name": "Ayu"
    },
    {
      "Id": "ayz",
      "Print_Name": "Mai Brat",
      "Inverted_Name": "Mai Brat"
    },
    {
      "Id": "aza",
      "Print_Name": "Azha",
      "Inverted_Name": "Azha"
    },
    {
      "Id": "azb",
      "Print_Name": "South Azerbaijani",
      "Inverted_Name": "Azerbaijani, South"
    },
    {
      "Id": "azd",
      "Print_Name": "Eastern Durango Nahuatl",
      "Inverted_Name": "Nahuatl, Eastern Durango"
    },
    {
      "Id": "aze",
      "Print_Name": "Azerbaijani",
      "Inverted_Name": "Azerbaijani"
    },
    {
      "Id": "azg",
      "Print_Name": "San Pedro Amuzgos Amuzgo",
      "Inverted_Name": "Amuzgo, San Pedro Amuzgos"
    },
    {
      "Id": "azj",
      "Print_Name": "North Azerbaijani",
      "Inverted_Name": "Azerbaijani, North"
    },
    {
      "Id": "azm",
      "Print_Name": "Ipalapa Amuzgo",
      "Inverted_Name": "Amuzgo, Ipalapa"
    },
    {
      "Id": "azn",
      "Print_Name": "Western Durango Nahuatl",
      "Inverted_Name": "Nahuatl, Western Durango"
    },
    {
      "Id": "azo",
      "Print_Name": "Awing",
      "Inverted_Name": "Awing"
    },
    {
      "Id": "azt",
      "Print_Name": "Faire Atta",
      "Inverted_Name": "Atta, Faire"
    },
    {
      "Id": "azz",
      "Print_Name": "Highland Puebla Nahuatl",
      "Inverted_Name": "Nahuatl, Highland Puebla"
    },
    {
      "Id": "baa",
      "Print_Name": "Babatana",
      "Inverted_Name": "Babatana"
    },
    {
      "Id": "bab",
      "Print_Name": "Bainouk-Gunyuño",
      "Inverted_Name": "Bainouk-Gunyuño"
    },
    {
      "Id": "bac",
      "Print_Name": "Badui",
      "Inverted_Name": "Badui"
    },
    {
      "Id": "bae",
      "Print_Name": "Baré",
      "Inverted_Name": "Baré"
    },
    {
      "Id": "baf",
      "Print_Name": "Nubaca",
      "Inverted_Name": "Nubaca"
    },
    {
      "Id": "bag",
      "Print_Name": "Tuki",
      "Inverted_Name": "Tuki"
    },
    {
      "Id": "bah",
      "Print_Name": "Bahamas Creole English",
      "Inverted_Name": "Creole English, Bahamas"
    },
    {
      "Id": "baj",
      "Print_Name": "Barakai",
      "Inverted_Name": "Barakai"
    },
    {
      "Id": "bak",
      "Print_Name": "Bashkir",
      "Inverted_Name": "Bashkir"
    },
    {
      "Id": "bal",
      "Print_Name": "Baluchi",
      "Inverted_Name": "Baluchi"
    },
    {
      "Id": "bam",
      "Print_Name": "Bambara",
      "Inverted_Name": "Bambara"
    },
    {
      "Id": "ban",
      "Print_Name": "Balinese",
      "Inverted_Name": "Balinese"
    },
    {
      "Id": "bao",
      "Print_Name": "Waimaha",
      "Inverted_Name": "Waimaha"
    },
    {
      "Id": "bap",
      "Print_Name": "Bantawa",
      "Inverted_Name": "Bantawa"
    },
    {
      "Id": "bar",
      "Print_Name": "Bavarian",
      "Inverted_Name": "Bavarian"
    },
    {
      "Id": "bas",
      "Print_Name": "Basa (Cameroon)",
      "Inverted_Name": "Basa (Cameroon)"
    },
    {
      "Id": "bau",
      "Print_Name": "Bada (Nigeria)",
      "Inverted_Name": "Bada (Nigeria)"
    },
    {
      "Id": "bav",
      "Print_Name": "Vengo",
      "Inverted_Name": "Vengo"
    },
    {
      "Id": "baw",
      "Print_Name": "Bambili-Bambui",
      "Inverted_Name": "Bambili-Bambui"
    },
    {
      "Id": "bax",
      "Print_Name": "Bamun",
      "Inverted_Name": "Bamun"
    },
    {
      "Id": "bay",
      "Print_Name": "Batuley",
      "Inverted_Name": "Batuley"
    },
    {
      "Id": "bba",
      "Print_Name": "Baatonum",
      "Inverted_Name": "Baatonum"
    },
    {
      "Id": "bbb",
      "Print_Name": "Barai",
      "Inverted_Name": "Barai"
    },
    {
      "Id": "bbc",
      "Print_Name": "Batak Toba",
      "Inverted_Name": "Batak Toba"
    },
    {
      "Id": "bbd",
      "Print_Name": "Bau",
      "Inverted_Name": "Bau"
    },
    {
      "Id": "bbe",
      "Print_Name": "Bangba",
      "Inverted_Name": "Bangba"
    },
    {
      "Id": "bbf",
      "Print_Name": "Baibai",
      "Inverted_Name": "Baibai"
    },
    {
      "Id": "bbg",
      "Print_Name": "Barama",
      "Inverted_Name": "Barama"
    },
    {
      "Id": "bbh",
      "Print_Name": "Bugan",
      "Inverted_Name": "Bugan"
    },
    {
      "Id": "bbi",
      "Print_Name": "Barombi",
      "Inverted_Name": "Barombi"
    },
    {
      "Id": "bbj",
      "Print_Name": "Ghomálá'",
      "Inverted_Name": "Ghomálá'"
    },
    {
      "Id": "bbk",
      "Print_Name": "Babanki",
      "Inverted_Name": "Babanki"
    },
    {
      "Id": "bbl",
      "Print_Name": "Bats",
      "Inverted_Name": "Bats"
    },
    {
      "Id": "bbm",
      "Print_Name": "Babango",
      "Inverted_Name": "Babango"
    },
    {
      "Id": "bbn",
      "Print_Name": "Uneapa",
      "Inverted_Name": "Uneapa"
    },
    {
      "Id": "bbo",
      "Print_Name": "Konabéré",
      "Inverted_Name": "Konabéré"
    },
    {
      "Id": "bbo",
      "Print_Name": "Northern Bobo Madaré",
      "Inverted_Name": "Bobo Madaré, Northern"
    },
    {
      "Id": "bbp",
      "Print_Name": "West Central Banda",
      "Inverted_Name": "Banda, West Central"
    },
    {
      "Id": "bbq",
      "Print_Name": "Bamali",
      "Inverted_Name": "Bamali"
    },
    {
      "Id": "bbr",
      "Print_Name": "Girawa",
      "Inverted_Name": "Girawa"
    },
    {
      "Id": "bbs",
      "Print_Name": "Bakpinka",
      "Inverted_Name": "Bakpinka"
    },
    {
      "Id": "bbt",
      "Print_Name": "Mburku",
      "Inverted_Name": "Mburku"
    },
    {
      "Id": "bbu",
      "Print_Name": "Kulung (Nigeria)",
      "Inverted_Name": "Kulung (Nigeria)"
    },
    {
      "Id": "bbv",
      "Print_Name": "Karnai",
      "Inverted_Name": "Karnai"
    },
    {
      "Id": "bbw",
      "Print_Name": "Baba",
      "Inverted_Name": "Baba"
    },
    {
      "Id": "bbx",
      "Print_Name": "Bubia",
      "Inverted_Name": "Bubia"
    },
    {
      "Id": "bby",
      "Print_Name": "Befang",
      "Inverted_Name": "Befang"
    },
    {
      "Id": "bca",
      "Print_Name": "Central Bai",
      "Inverted_Name": "Bai, Central"
    },
    {
      "Id": "bcb",
      "Print_Name": "Bainouk-Samik",
      "Inverted_Name": "Bainouk-Samik"
    },
    {
      "Id": "bcc",
      "Print_Name": "Southern Balochi",
      "Inverted_Name": "Balochi, Southern"
    },
    {
      "Id": "bcd",
      "Print_Name": "North Babar",
      "Inverted_Name": "Babar, North"
    },
    {
      "Id": "bce",
      "Print_Name": "Bamenyam",
      "Inverted_Name": "Bamenyam"
    },
    {
      "Id": "bcf",
      "Print_Name": "Bamu",
      "Inverted_Name": "Bamu"
    },
    {
      "Id": "bcg",
      "Print_Name": "Baga Pokur",
      "Inverted_Name": "Baga Pokur"
    },
    {
      "Id": "bch",
      "Print_Name": "Bariai",
      "Inverted_Name": "Bariai"
    },
    {
      "Id": "bci",
      "Print_Name": "Baoulé",
      "Inverted_Name": "Baoulé"
    },
    {
      "Id": "bcj",
      "Print_Name": "Bardi",
      "Inverted_Name": "Bardi"
    },
    {
      "Id": "bck",
      "Print_Name": "Bunuba",
      "Inverted_Name": "Bunuba"
    },
    {
      "Id": "bcl",
      "Print_Name": "Central Bikol",
      "Inverted_Name": "Bikol, Central"
    },
    {
      "Id": "bcm",
      "Print_Name": "Bannoni",
      "Inverted_Name": "Bannoni"
    },
    {
      "Id": "bcn",
      "Print_Name": "Bali (Nigeria)",
      "Inverted_Name": "Bali (Nigeria)"
    },
    {
      "Id": "bco",
      "Print_Name": "Kaluli",
      "Inverted_Name": "Kaluli"
    },
    {
      "Id": "bcp",
      "Print_Name": "Bali (Democratic Republic of Congo)",
      "Inverted_Name": "Bali (Democratic Republic of Congo)"
    },
    {
      "Id": "bcq",
      "Print_Name": "Bench",
      "Inverted_Name": "Bench"
    },
    {
      "Id": "bcr",
      "Print_Name": "Babine",
      "Inverted_Name": "Babine"
    },
    {
      "Id": "bcs",
      "Print_Name": "Kohumono",
      "Inverted_Name": "Kohumono"
    },
    {
      "Id": "bct",
      "Print_Name": "Bendi",
      "Inverted_Name": "Bendi"
    },
    {
      "Id": "bcu",
      "Print_Name": "Awad Bing",
      "Inverted_Name": "Awad Bing"
    },
    {
      "Id": "bcv",
      "Print_Name": "Shoo-Minda-Nye",
      "Inverted_Name": "Shoo-Minda-Nye"
    },
    {
      "Id": "bcw",
      "Print_Name": "Bana",
      "Inverted_Name": "Bana"
    },
    {
      "Id": "bcy",
      "Print_Name": "Bacama",
      "Inverted_Name": "Bacama"
    },
    {
      "Id": "bcz",
      "Print_Name": "Bainouk-Gunyaamolo",
      "Inverted_Name": "Bainouk-Gunyaamolo"
    },
    {
      "Id": "bda",
      "Print_Name": "Bayot",
      "Inverted_Name": "Bayot"
    },
    {
      "Id": "bdb",
      "Print_Name": "Basap",
      "Inverted_Name": "Basap"
    },
    {
      "Id": "bdc",
      "Print_Name": "Emberá-Baudó",
      "Inverted_Name": "Emberá-Baudó"
    },
    {
      "Id": "bdd",
      "Print_Name": "Bunama",
      "Inverted_Name": "Bunama"
    },
    {
      "Id": "bde",
      "Print_Name": "Bade",
      "Inverted_Name": "Bade"
    },
    {
      "Id": "bdf",
      "Print_Name": "Biage",
      "Inverted_Name": "Biage"
    },
    {
      "Id": "bdg",
      "Print_Name": "Bonggi",
      "Inverted_Name": "Bonggi"
    },
    {
      "Id": "bdh",
      "Print_Name": "Baka (South Sudan)",
      "Inverted_Name": "Baka (South Sudan)"
    },
    {
      "Id": "bdi",
      "Print_Name": "Burun",
      "Inverted_Name": "Burun"
    },
    {
      "Id": "bdj",
      "Print_Name": "Bai",
      "Inverted_Name": "Bai"
    },
    {
      "Id": "bdj",
      "Print_Name": "Bai (South Sudan)",
      "Inverted_Name": "Bai (South Sudan)"
    },
    {
      "Id": "bdk",
      "Print_Name": "Budukh",
      "Inverted_Name": "Budukh"
    },
    {
      "Id": "bdl",
      "Print_Name": "Indonesian Bajau",
      "Inverted_Name": "Bajau, Indonesian"
    },
    {
      "Id": "bdm",
      "Print_Name": "Buduma",
      "Inverted_Name": "Buduma"
    },
    {
      "Id": "bdn",
      "Print_Name": "Baldemu",
      "Inverted_Name": "Baldemu"
    },
    {
      "Id": "bdo",
      "Print_Name": "Morom",
      "Inverted_Name": "Morom"
    },
    {
      "Id": "bdp",
      "Print_Name": "Bende",
      "Inverted_Name": "Bende"
    },
    {
      "Id": "bdq",
      "Print_Name": "Bahnar",
      "Inverted_Name": "Bahnar"
    },
    {
      "Id": "bdr",
      "Print_Name": "West Coast Bajau",
      "Inverted_Name": "Bajau, West Coast"
    },
    {
      "Id": "bds",
      "Print_Name": "Burunge",
      "Inverted_Name": "Burunge"
    },
    {
      "Id": "bdt",
      "Print_Name": "Bokoto",
      "Inverted_Name": "Bokoto"
    },
    {
      "Id": "bdu",
      "Print_Name": "Oroko",
      "Inverted_Name": "Oroko"
    },
    {
      "Id": "bdv",
      "Print_Name": "Bodo Parja",
      "Inverted_Name": "Bodo Parja"
    },
    {
      "Id": "bdw",
      "Print_Name": "Baham",
      "Inverted_Name": "Baham"
    },
    {
      "Id": "bdx",
      "Print_Name": "Budong-Budong",
      "Inverted_Name": "Budong-Budong"
    },
    {
      "Id": "bdy",
      "Print_Name": "Bandjalang",
      "Inverted_Name": "Bandjalang"
    },
    {
      "Id": "bdz",
      "Print_Name": "Badeshi",
      "Inverted_Name": "Badeshi"
    },
    {
      "Id": "bea",
      "Print_Name": "Beaver",
      "Inverted_Name": "Beaver"
    },
    {
      "Id": "beb",
      "Print_Name": "Bebele",
      "Inverted_Name": "Bebele"
    },
    {
      "Id": "bec",
      "Print_Name": "Iceve-Maci",
      "Inverted_Name": "Iceve-Maci"
    },
    {
      "Id": "bed",
      "Print_Name": "Bedoanas",
      "Inverted_Name": "Bedoanas"
    },
    {
      "Id": "bee",
      "Print_Name": "Byangsi",
      "Inverted_Name": "Byangsi"
    },
    {
      "Id": "bef",
      "Print_Name": "Benabena",
      "Inverted_Name": "Benabena"
    },
    {
      "Id": "beg",
      "Print_Name": "Belait",
      "Inverted_Name": "Belait"
    },
    {
      "Id": "beh",
      "Print_Name": "Biali",
      "Inverted_Name": "Biali"
    },
    {
      "Id": "bei",
      "Print_Name": "Bekati'",
      "Inverted_Name": "Bekati'"
    },
    {
      "Id": "bej",
      "Print_Name": "Bedawiyet",
      "Inverted_Name": "Bedawiyet"
    },
    {
      "Id": "bej",
      "Print_Name": "Beja",
      "Inverted_Name": "Beja"
    },
    {
      "Id": "bek",
      "Print_Name": "Bebeli",
      "Inverted_Name": "Bebeli"
    },
    {
      "Id": "bel",
      "Print_Name": "Belarusian",
      "Inverted_Name": "Belarusian"
    },
    {
      "Id": "bem",
      "Print_Name": "Bemba (Zambia)",
      "Inverted_Name": "Bemba (Zambia)"
    },
    {
      "Id": "ben",
      "Print_Name": "Bengali",
      "Inverted_Name": "Bengali"
    },
    {
      "Id": "beo",
      "Print_Name": "Beami",
      "Inverted_Name": "Beami"
    },
    {
      "Id": "bep",
      "Print_Name": "Besoa",
      "Inverted_Name": "Besoa"
    },
    {
      "Id": "beq",
      "Print_Name": "Beembe",
      "Inverted_Name": "Beembe"
    },
    {
      "Id": "bes",
      "Print_Name": "Besme",
      "Inverted_Name": "Besme"
    },
    {
      "Id": "bet",
      "Print_Name": "Guiberoua Béte",
      "Inverted_Name": "Béte, Guiberoua"
    },
    {
      "Id": "beu",
      "Print_Name": "Blagar",
      "Inverted_Name": "Blagar"
    },
    {
      "Id": "bev",
      "Print_Name": "Daloa Bété",
      "Inverted_Name": "Bété, Daloa"
    },
    {
      "Id": "bew",
      "Print_Name": "Betawi",
      "Inverted_Name": "Betawi"
    },
    {
      "Id": "bex",
      "Print_Name": "Jur Modo",
      "Inverted_Name": "Jur Modo"
    },
    {
      "Id": "bey",
      "Print_Name": "Beli (Papua New Guinea)",
      "Inverted_Name": "Beli (Papua New Guinea)"
    },
    {
      "Id": "bez",
      "Print_Name": "Bena (Tanzania)",
      "Inverted_Name": "Bena (Tanzania)"
    },
    {
      "Id": "bfa",
      "Print_Name": "Bari",
      "Inverted_Name": "Bari"
    },
    {
      "Id": "bfb",
      "Print_Name": "Pauri Bareli",
      "Inverted_Name": "Bareli, Pauri"
    },
    {
      "Id": "bfc",
      "Print_Name": "Northern Bai",
      "Inverted_Name": "Bai, Northern"
    },
    {
      "Id": "bfc",
      "Print_Name": "Panyi Bai",
      "Inverted_Name": "Bai, Panyi"
    },
    {
      "Id": "bfd",
      "Print_Name": "Bafut",
      "Inverted_Name": "Bafut"
    },
    {
      "Id": "bfe",
      "Print_Name": "Betaf",
      "Inverted_Name": "Betaf"
    },
    {
      "Id": "bfe",
      "Print_Name": "Tena",
      "Inverted_Name": "Tena"
    },
    {
      "Id": "bff",
      "Print_Name": "Bofi",
      "Inverted_Name": "Bofi"
    },
    {
      "Id": "bfg",
      "Print_Name": "Busang Kayan",
      "Inverted_Name": "Kayan, Busang"
    },
    {
      "Id": "bfh",
      "Print_Name": "Blafe",
      "Inverted_Name": "Blafe"
    },
    {
      "Id": "bfi",
      "Print_Name": "British Sign Language",
      "Inverted_Name": "British Sign Language"
    },
    {
      "Id": "bfj",
      "Print_Name": "Bafanji",
      "Inverted_Name": "Bafanji"
    },
    {
      "Id": "bfk",
      "Print_Name": "Ban Khor Sign Language",
      "Inverted_Name": "Ban Khor Sign Language"
    },
    {
      "Id": "bfl",
      "Print_Name": "Banda-Ndélé",
      "Inverted_Name": "Banda-Ndélé"
    },
    {
      "Id": "bfm",
      "Print_Name": "Mmen",
      "Inverted_Name": "Mmen"
    },
    {
      "Id": "bfn",
      "Print_Name": "Bunak",
      "Inverted_Name": "Bunak"
    },
    {
      "Id": "bfo",
      "Print_Name": "Malba Birifor",
      "Inverted_Name": "Birifor, Malba"
    },
    {
      "Id": "bfp",
      "Print_Name": "Beba",
      "Inverted_Name": "Beba"
    },
    {
      "Id": "bfq",
      "Print_Name": "Badaga",
      "Inverted_Name": "Badaga"
    },
    {
      "Id": "bfr",
      "Print_Name": "Bazigar",
      "Inverted_Name": "Bazigar"
    },
    {
      "Id": "bfs",
      "Print_Name": "Southern Bai",
      "Inverted_Name": "Bai, Southern"
    },
    {
      "Id": "bft",
      "Print_Name": "Balti",
      "Inverted_Name": "Balti"
    },
    {
      "Id": "bfu",
      "Print_Name": "Gahri",
      "Inverted_Name": "Gahri"
    },
    {
      "Id": "bfw",
      "Print_Name": "Bondo",
      "Inverted_Name": "Bondo"
    },
    {
      "Id": "bfx",
      "Print_Name": "Bantayanon",
      "Inverted_Name": "Bantayanon"
    },
    {
      "Id": "bfy",
      "Print_Name": "Bagheli",
      "Inverted_Name": "Bagheli"
    },
    {
      "Id": "bfz",
      "Print_Name": "Mahasu Pahari",
      "Inverted_Name": "Pahari, Mahasu"
    },
    {
      "Id": "bga",
      "Print_Name": "Gwamhi-Wuri",
      "Inverted_Name": "Gwamhi-Wuri"
    },
    {
      "Id": "bgb",
      "Print_Name": "Bobongko",
      "Inverted_Name": "Bobongko"
    },
    {
      "Id": "bgc",
      "Print_Name": "Haryanvi",
      "Inverted_Name": "Haryanvi"
    },
    {
      "Id": "bgd",
      "Print_Name": "Rathwi Bareli",
      "Inverted_Name": "Bareli, Rathwi"
    },
    {
      "Id": "bge",
      "Print_Name": "Bauria",
      "Inverted_Name": "Bauria"
    },
    {
      "Id": "bgf",
      "Print_Name": "Bangandu",
      "Inverted_Name": "Bangandu"
    },
    {
      "Id": "bgg",
      "Print_Name": "Bugun",
      "Inverted_Name": "Bugun"
    },
    {
      "Id": "bgi",
      "Print_Name": "Giangan",
      "Inverted_Name": "Giangan"
    },
    {
      "Id": "bgj",
      "Print_Name": "Bangolan",
      "Inverted_Name": "Bangolan"
    },
    {
      "Id": "bgk",
      "Print_Name": "Bit",
      "Inverted_Name": "Bit"
    },
    {
      "Id": "bgk",
      "Print_Name": "Buxinhua",
      "Inverted_Name": "Buxinhua"
    },
    {
      "Id": "bgl",
      "Print_Name": "Bo (Laos)",
      "Inverted_Name": "Bo (Laos)"
    },
    {
      "Id": "bgn",
      "Print_Name": "Western Balochi",
      "Inverted_Name": "Balochi, Western"
    },
    {
      "Id": "bgo",
      "Print_Name": "Baga Koga",
      "Inverted_Name": "Baga Koga"
    },
    {
      "Id": "bgp",
      "Print_Name": "Eastern Balochi",
      "Inverted_Name": "Balochi, Eastern"
    },
    {
      "Id": "bgq",
      "Print_Name": "Bagri",
      "Inverted_Name": "Bagri"
    },
    {
      "Id": "bgr",
      "Print_Name": "Bawm Chin",
      "Inverted_Name": "Chin, Bawm"
    },
    {
      "Id": "bgs",
      "Print_Name": "Tagabawa",
      "Inverted_Name": "Tagabawa"
    },
    {
      "Id": "bgt",
      "Print_Name": "Bughotu",
      "Inverted_Name": "Bughotu"
    },
    {
      "Id": "bgu",
      "Print_Name": "Mbongno",
      "Inverted_Name": "Mbongno"
    },
    {
      "Id": "bgv",
      "Print_Name": "Warkay-Bipim",
      "Inverted_Name": "Warkay-Bipim"
    },
    {
      "Id": "bgw",
      "Print_Name": "Bhatri",
      "Inverted_Name": "Bhatri"
    },
    {
      "Id": "bgx",
      "Print_Name": "Balkan Gagauz Turkish",
      "Inverted_Name": "Turkish, Balkan Gagauz"
    },
    {
      "Id": "bgy",
      "Print_Name": "Benggoi",
      "Inverted_Name": "Benggoi"
    },
    {
      "Id": "bgz",
      "Print_Name": "Banggai",
      "Inverted_Name": "Banggai"
    },
    {
      "Id": "bha",
      "Print_Name": "Bharia",
      "Inverted_Name": "Bharia"
    },
    {
      "Id": "bhb",
      "Print_Name": "Bhili",
      "Inverted_Name": "Bhili"
    },
    {
      "Id": "bhc",
      "Print_Name": "Biga",
      "Inverted_Name": "Biga"
    },
    {
      "Id": "bhd",
      "Print_Name": "Bhadrawahi",
      "Inverted_Name": "Bhadrawahi"
    },
    {
      "Id": "bhe",
      "Print_Name": "Bhaya",
      "Inverted_Name": "Bhaya"
    },
    {
      "Id": "bhf",
      "Print_Name": "Odiai",
      "Inverted_Name": "Odiai"
    },
    {
      "Id": "bhg",
      "Print_Name": "Binandere",
      "Inverted_Name": "Binandere"
    },
    {
      "Id": "bhh",
      "Print_Name": "Bukharic",
      "Inverted_Name": "Bukharic"
    },
    {
      "Id": "bhi",
      "Print_Name": "Bhilali",
      "Inverted_Name": "Bhilali"
    },
    {
      "Id": "bhj",
      "Print_Name": "Bahing",
      "Inverted_Name": "Bahing"
    },
    {
      "Id": "bhl",
      "Print_Name": "Bimin",
      "Inverted_Name": "Bimin"
    },
    {
      "Id": "bhm",
      "Print_Name": "Bathari",
      "Inverted_Name": "Bathari"
    },
    {
      "Id": "bhn",
      "Print_Name": "Bohtan Neo-Aramaic",
      "Inverted_Name": "Neo-Aramaic, Bohtan"
    },
    {
      "Id": "bho",
      "Print_Name": "Bhojpuri",
      "Inverted_Name": "Bhojpuri"
    },
    {
      "Id": "bhp",
      "Print_Name": "Bima",
      "Inverted_Name": "Bima"
    },
    {
      "Id": "bhq",
      "Print_Name": "Tukang Besi South",
      "Inverted_Name": "Tukang Besi South"
    },
    {
      "Id": "bhr",
      "Print_Name": "Bara Malagasy",
      "Inverted_Name": "Malagasy, Bara"
    },
    {
      "Id": "bhs",
      "Print_Name": "Buwal",
      "Inverted_Name": "Buwal"
    },
    {
      "Id": "bht",
      "Print_Name": "Bhattiyali",
      "Inverted_Name": "Bhattiyali"
    },
    {
      "Id": "bhu",
      "Print_Name": "Bhunjia",
      "Inverted_Name": "Bhunjia"
    },
    {
      "Id": "bhv",
      "Print_Name": "Bahau",
      "Inverted_Name": "Bahau"
    },
    {
      "Id": "bhw",
      "Print_Name": "Biak",
      "Inverted_Name": "Biak"
    },
    {
      "Id": "bhx",
      "Print_Name": "Bhalay",
      "Inverted_Name": "Bhalay"
    },
    {
      "Id": "bhy",
      "Print_Name": "Bhele",
      "Inverted_Name": "Bhele"
    },
    {
      "Id": "bhz",
      "Print_Name": "Bada (Indonesia)",
      "Inverted_Name": "Bada (Indonesia)"
    },
    {
      "Id": "bia",
      "Print_Name": "Badimaya",
      "Inverted_Name": "Badimaya"
    },
    {
      "Id": "bib",
      "Print_Name": "Bisa",
      "Inverted_Name": "Bisa"
    },
    {
      "Id": "bib",
      "Print_Name": "Bissa",
      "Inverted_Name": "Bissa"
    },
    {
      "Id": "bid",
      "Print_Name": "Bidiyo",
      "Inverted_Name": "Bidiyo"
    },
    {
      "Id": "bie",
      "Print_Name": "Bepour",
      "Inverted_Name": "Bepour"
    },
    {
      "Id": "bif",
      "Print_Name": "Biafada",
      "Inverted_Name": "Biafada"
    },
    {
      "Id": "big",
      "Print_Name": "Biangai",
      "Inverted_Name": "Biangai"
    },
    {
      "Id": "bik",
      "Print_Name": "Bikol",
      "Inverted_Name": "Bikol"
    },
    {
      "Id": "bil",
      "Print_Name": "Bile",
      "Inverted_Name": "Bile"
    },
    {
      "Id": "bim",
      "Print_Name": "Bimoba",
      "Inverted_Name": "Bimoba"
    },
    {
      "Id": "bin",
      "Print_Name": "Bini",
      "Inverted_Name": "Bini"
    },
    {
      "Id": "bin",
      "Print_Name": "Edo",
      "Inverted_Name": "Edo"
    },
    {
      "Id": "bio",
      "Print_Name": "Nai",
      "Inverted_Name": "Nai"
    },
    {
      "Id": "bip",
      "Print_Name": "Bila",
      "Inverted_Name": "Bila"
    },
    {
      "Id": "biq",
      "Print_Name": "Bipi",
      "Inverted_Name": "Bipi"
    },
    {
      "Id": "bir",
      "Print_Name": "Bisorio",
      "Inverted_Name": "Bisorio"
    },
    {
      "Id": "bis",
      "Print_Name": "Bislama",
      "Inverted_Name": "Bislama"
    },
    {
      "Id": "bit",
      "Print_Name": "Berinomo",
      "Inverted_Name": "Berinomo"
    },
    {
      "Id": "biu",
      "Print_Name": "Biete",
      "Inverted_Name": "Biete"
    },
    {
      "Id": "biv",
      "Print_Name": "Southern Birifor",
      "Inverted_Name": "Birifor, Southern"
    },
    {
      "Id": "biw",
      "Print_Name": "Kol (Cameroon)",
      "Inverted_Name": "Kol (Cameroon)"
    },
    {
      "Id": "bix",
      "Print_Name": "Bijori",
      "Inverted_Name": "Bijori"
    },
    {
      "Id": "biy",
      "Print_Name": "Birhor",
      "Inverted_Name": "Birhor"
    },
    {
      "Id": "biz",
      "Print_Name": "Baloi",
      "Inverted_Name": "Baloi"
    },
    {
      "Id": "bja",
      "Print_Name": "Budza",
      "Inverted_Name": "Budza"
    },
    {
      "Id": "bjb",
      "Print_Name": "Banggarla",
      "Inverted_Name": "Banggarla"
    },
    {
      "Id": "bjc",
      "Print_Name": "Bariji",
      "Inverted_Name": "Bariji"
    },
    {
      "Id": "bje",
      "Print_Name": "Biao-Jiao Mien",
      "Inverted_Name": "Mien, Biao-Jiao"
    },
    {
      "Id": "bjf",
      "Print_Name": "Barzani Jewish Neo-Aramaic",
      "Inverted_Name": "Neo-Aramaic, Barzani Jewish"
    },
    {
      "Id": "bjg",
      "Print_Name": "Bidyogo",
      "Inverted_Name": "Bidyogo"
    },
    {
      "Id": "bjh",
      "Print_Name": "Bahinemo",
      "Inverted_Name": "Bahinemo"
    },
    {
      "Id": "bji",
      "Print_Name": "Burji",
      "Inverted_Name": "Burji"
    },
    {
      "Id": "bjj",
      "Print_Name": "Kanauji",
      "Inverted_Name": "Kanauji"
    },
    {
      "Id": "bjk",
      "Print_Name": "Barok",
      "Inverted_Name": "Barok"
    },
    {
      "Id": "bjl",
      "Print_Name": "Bulu (Papua New Guinea)",
      "Inverted_Name": "Bulu (Papua New Guinea)"
    },
    {
      "Id": "bjm",
      "Print_Name": "Bajelani",
      "Inverted_Name": "Bajelani"
    },
    {
      "Id": "bjn",
      "Print_Name": "Banjar",
      "Inverted_Name": "Banjar"
    },
    {
      "Id": "bjo",
      "Print_Name": "Mid-Southern Banda",
      "Inverted_Name": "Banda, Mid-Southern"
    },
    {
      "Id": "bjp",
      "Print_Name": "Fanamaket",
      "Inverted_Name": "Fanamaket"
    },
    {
      "Id": "bjr",
      "Print_Name": "Binumarien",
      "Inverted_Name": "Binumarien"
    },
    {
      "Id": "bjs",
      "Print_Name": "Bajan",
      "Inverted_Name": "Bajan"
    },
    {
      "Id": "bjt",
      "Print_Name": "Balanta-Ganja",
      "Inverted_Name": "Balanta-Ganja"
    },
    {
      "Id": "bju",
      "Print_Name": "Busuu",
      "Inverted_Name": "Busuu"
    },
    {
      "Id": "bjv",
      "Print_Name": "Bedjond",
      "Inverted_Name": "Bedjond"
    },
    {
      "Id": "bjw",
      "Print_Name": "Bakwé",
      "Inverted_Name": "Bakwé"
    },
    {
      "Id": "bjx",
      "Print_Name": "Banao Itneg",
      "Inverted_Name": "Itneg, Banao"
    },
    {
      "Id": "bjy",
      "Print_Name": "Bayali",
      "Inverted_Name": "Bayali"
    },
    {
      "Id": "bjz",
      "Print_Name": "Baruga",
      "Inverted_Name": "Baruga"
    },
    {
      "Id": "bka",
      "Print_Name": "Kyak",
      "Inverted_Name": "Kyak"
    },
    {
      "Id": "bkc",
      "Print_Name": "Baka (Cameroon)",
      "Inverted_Name": "Baka (Cameroon)"
    },
    {
      "Id": "bkd",
      "Print_Name": "Binukid",
      "Inverted_Name": "Binukid"
    },
    {
      "Id": "bkd",
      "Print_Name": "Talaandig",
      "Inverted_Name": "Talaandig"
    },
    {
      "Id": "bkf",
      "Print_Name": "Beeke",
      "Inverted_Name": "Beeke"
    },
    {
      "Id": "bkg",
      "Print_Name": "Buraka",
      "Inverted_Name": "Buraka"
    },
    {
      "Id": "bkh",
      "Print_Name": "Bakoko",
      "Inverted_Name": "Bakoko"
    },
    {
      "Id": "bki",
      "Print_Name": "Baki",
      "Inverted_Name": "Baki"
    },
    {
      "Id": "bkj",
      "Print_Name": "Pande",
      "Inverted_Name": "Pande"
    },
    {
      "Id": "bkk",
      "Print_Name": "Brokskat",
      "Inverted_Name": "Brokskat"
    },
    {
      "Id": "bkl",
      "Print_Name": "Berik",
      "Inverted_Name": "Berik"
    },
    {
      "Id": "bkm",
      "Print_Name": "Kom (Cameroon)",
      "Inverted_Name": "Kom (Cameroon)"
    },
    {
      "Id": "bkn",
      "Print_Name": "Bukitan",
      "Inverted_Name": "Bukitan"
    },
    {
      "Id": "bko",
      "Print_Name": "Kwa'",
      "Inverted_Name": "Kwa'"
    },
    {
      "Id": "bkp",
      "Print_Name": "Boko (Democratic Republic of Congo)",
      "Inverted_Name": "Boko (Democratic Republic of Congo)"
    },
    {
      "Id": "bkq",
      "Print_Name": "Bakairí",
      "Inverted_Name": "Bakairí"
    },
    {
      "Id": "bkr",
      "Print_Name": "Bakumpai",
      "Inverted_Name": "Bakumpai"
    },
    {
      "Id": "bks",
      "Print_Name": "Northern Sorsoganon",
      "Inverted_Name": "Sorsoganon, Northern"
    },
    {
      "Id": "bkt",
      "Print_Name": "Boloki",
      "Inverted_Name": "Boloki"
    },
    {
      "Id": "bku",
      "Print_Name": "Buhid",
      "Inverted_Name": "Buhid"
    },
    {
      "Id": "bkv",
      "Print_Name": "Bekwarra",
      "Inverted_Name": "Bekwarra"
    },
    {
      "Id": "bkw",
      "Print_Name": "Bekwel",
      "Inverted_Name": "Bekwel"
    },
    {
      "Id": "bkx",
      "Print_Name": "Baikeno",
      "Inverted_Name": "Baikeno"
    },
    {
      "Id": "bky",
      "Print_Name": "Bokyi",
      "Inverted_Name": "Bokyi"
    },
    {
      "Id": "bkz",
      "Print_Name": "Bungku",
      "Inverted_Name": "Bungku"
    },
    {
      "Id": "bla",
      "Print_Name": "Siksika",
      "Inverted_Name": "Siksika"
    },
    {
      "Id": "blb",
      "Print_Name": "Bilua",
      "Inverted_Name": "Bilua"
    },
    {
      "Id": "blc",
      "Print_Name": "Bella Coola",
      "Inverted_Name": "Bella Coola"
    },
    {
      "Id": "bld",
      "Print_Name": "Bolango",
      "Inverted_Name": "Bolango"
    },
    {
      "Id": "ble",
      "Print_Name": "Balanta-Kentohe",
      "Inverted_Name": "Balanta-Kentohe"
    },
    {
      "Id": "blf",
      "Print_Name": "Buol",
      "Inverted_Name": "Buol"
    },
    {
      "Id": "blh",
      "Print_Name": "Kuwaa",
      "Inverted_Name": "Kuwaa"
    },
    {
      "Id": "bli",
      "Print_Name": "Bolia",
      "Inverted_Name": "Bolia"
    },
    {
      "Id": "blj",
      "Print_Name": "Bolongan",
      "Inverted_Name": "Bolongan"
    },
    {
      "Id": "blk",
      "Print_Name": "Pa'O",
      "Inverted_Name": "Pa'O"
    },
    {
      "Id": "blk",
      "Print_Name": "Pa'o Karen",
      "Inverted_Name": "Karen, Pa'o"
    },
    {
      "Id": "bll",
      "Print_Name": "Biloxi",
      "Inverted_Name": "Biloxi"
    },
    {
      "Id": "blm",
      "Print_Name": "Beli (South Sudan)",
      "Inverted_Name": "Beli (South Sudan)"
    },
    {
      "Id": "bln",
      "Print_Name": "Southern Catanduanes Bikol",
      "Inverted_Name": "Bikol, Southern Catanduanes"
    },
    {
      "Id": "blo",
      "Print_Name": "Anii",
      "Inverted_Name": "Anii"
    },
    {
      "Id": "blp",
      "Print_Name": "Blablanga",
      "Inverted_Name": "Blablanga"
    },
    {
      "Id": "blq",
      "Print_Name": "Baluan-Pam",
      "Inverted_Name": "Baluan-Pam"
    },
    {
      "Id": "blr",
      "Print_Name": "Blang",
      "Inverted_Name": "Blang"
    },
    {
      "Id": "bls",
      "Print_Name": "Balaesang",
      "Inverted_Name": "Balaesang"
    },
    {
      "Id": "blt",
      "Print_Name": "Tai Dam",
      "Inverted_Name": "Tai Dam"
    },
    {
      "Id": "blv",
      "Print_Name": "Bolo",
      "Inverted_Name": "Bolo"
    },
    {
      "Id": "blv",
      "Print_Name": "Kibala",
      "Inverted_Name": "Kibala"
    },
    {
      "Id": "blw",
      "Print_Name": "Balangao",
      "Inverted_Name": "Balangao"
    },
    {
      "Id": "blx",
      "Print_Name": "Mag-Indi Ayta",
      "Inverted_Name": "Ayta, Mag-Indi"
    },
    {
      "Id": "bly",
      "Print_Name": "Notre",
      "Inverted_Name": "Notre"
    },
    {
      "Id": "blz",
      "Print_Name": "Balantak",
      "Inverted_Name": "Balantak"
    },
    {
      "Id": "bma",
      "Print_Name": "Lame",
      "Inverted_Name": "Lame"
    },
    {
      "Id": "bmb",
      "Print_Name": "Bembe",
      "Inverted_Name": "Bembe"
    },
    {
      "Id": "bmc",
      "Print_Name": "Biem",
      "Inverted_Name": "Biem"
    },
    {
      "Id": "bmd",
      "Print_Name": "Baga Manduri",
      "Inverted_Name": "Manduri, Baga"
    },
    {
      "Id": "bme",
      "Print_Name": "Limassa",
      "Inverted_Name": "Limassa"
    },
    {
      "Id": "bmf",
      "Print_Name": "Bom-Kim",
      "Inverted_Name": "Bom-Kim"
    },
    {
      "Id": "bmg",
      "Print_Name": "Bamwe",
      "Inverted_Name": "Bamwe"
    },
    {
      "Id": "bmh",
      "Print_Name": "Kein",
      "Inverted_Name": "Kein"
    },
    {
      "Id": "bmi",
      "Print_Name": "Bagirmi",
      "Inverted_Name": "Bagirmi"
    },
    {
      "Id": "bmj",
      "Print_Name": "Bote-Majhi",
      "Inverted_Name": "Bote-Majhi"
    },
    {
      "Id": "bmk",
      "Print_Name": "Ghayavi",
      "Inverted_Name": "Ghayavi"
    },
    {
      "Id": "bml",
      "Print_Name": "Bomboli",
      "Inverted_Name": "Bomboli"
    },
    {
      "Id": "bmm",
      "Print_Name": "Northern Betsimisaraka Malagasy",
      "Inverted_Name": "Malagasy, Northern Betsimisaraka"
    },
    {
      "Id": "bmn",
      "Print_Name": "Bina (Papua New Guinea)",
      "Inverted_Name": "Bina (Papua New Guinea)"
    },
    {
      "Id": "bmo",
      "Print_Name": "Bambalang",
      "Inverted_Name": "Bambalang"
    },
    {
      "Id": "bmp",
      "Print_Name": "Bulgebi",
      "Inverted_Name": "Bulgebi"
    },
    {
      "Id": "bmq",
      "Print_Name": "Bomu",
      "Inverted_Name": "Bomu"
    },
    {
      "Id": "bmr",
      "Print_Name": "Muinane",
      "Inverted_Name": "Muinane"
    },
    {
      "Id": "bms",
      "Print_Name": "Bilma Kanuri",
      "Inverted_Name": "Kanuri, Bilma"
    },
    {
      "Id": "bmt",
      "Print_Name": "Biao Mon",
      "Inverted_Name": "Biao Mon"
    },
    {
      "Id": "bmu",
      "Print_Name": "Somba-Siawari",
      "Inverted_Name": "Somba-Siawari"
    },
    {
      "Id": "bmv",
      "Print_Name": "Bum",
      "Inverted_Name": "Bum"
    },
    {
      "Id": "bmw",
      "Print_Name": "Bomwali",
      "Inverted_Name": "Bomwali"
    },
    {
      "Id": "bmx",
      "Print_Name": "Baimak",
      "Inverted_Name": "Baimak"
    },
    {
      "Id": "bmz",
      "Print_Name": "Baramu",
      "Inverted_Name": "Baramu"
    },
    {
      "Id": "bna",
      "Print_Name": "Bonerate",
      "Inverted_Name": "Bonerate"
    },
    {
      "Id": "bnb",
      "Print_Name": "Bookan",
      "Inverted_Name": "Bookan"
    },
    {
      "Id": "bnc",
      "Print_Name": "Bontok",
      "Inverted_Name": "Bontok"
    },
    {
      "Id": "bnd",
      "Print_Name": "Banda (Indonesia)",
      "Inverted_Name": "Banda (Indonesia)"
    },
    {
      "Id": "bne",
      "Print_Name": "Bintauna",
      "Inverted_Name": "Bintauna"
    },
    {
      "Id": "bnf",
      "Print_Name": "Masiwang",
      "Inverted_Name": "Masiwang"
    },
    {
      "Id": "bng",
      "Print_Name": "Benga",
      "Inverted_Name": "Benga"
    },
    {
      "Id": "bni",
      "Print_Name": "Bangi",
      "Inverted_Name": "Bangi"
    },
    {
      "Id": "bnj",
      "Print_Name": "Eastern Tawbuid",
      "Inverted_Name": "Tawbuid, Eastern"
    },
    {
      "Id": "bnk",
      "Print_Name": "Bierebo",
      "Inverted_Name": "Bierebo"
    },
    {
      "Id": "bnl",
      "Print_Name": "Boon",
      "Inverted_Name": "Boon"
    },
    {
      "Id": "bnm",
      "Print_Name": "Batanga",
      "Inverted_Name": "Batanga"
    },
    {
      "Id": "bnn",
      "Print_Name": "Bunun",
      "Inverted_Name": "Bunun"
    },
    {
      "Id": "bno",
      "Print_Name": "Bantoanon",
      "Inverted_Name": "Bantoanon"
    },
    {
      "Id": "bnp",
      "Print_Name": "Bola",
      "Inverted_Name": "Bola"
    },
    {
      "Id": "bnq",
      "Print_Name": "Bantik",
      "Inverted_Name": "Bantik"
    },
    {
      "Id": "bnr",
      "Print_Name": "Butmas-Tur",
      "Inverted_Name": "Butmas-Tur"
    },
    {
      "Id": "bns",
      "Print_Name": "Bundeli",
      "Inverted_Name": "Bundeli"
    },
    {
      "Id": "bnu",
      "Print_Name": "Bentong",
      "Inverted_Name": "Bentong"
    },
    {
      "Id": "bnv",
      "Print_Name": "Beneraf",
      "Inverted_Name": "Beneraf"
    },
    {
      "Id": "bnv",
      "Print_Name": "Bonerif",
      "Inverted_Name": "Bonerif"
    },
    {
      "Id": "bnv",
      "Print_Name": "Edwas",
      "Inverted_Name": "Edwas"
    },
    {
      "Id": "bnw",
      "Print_Name": "Bisis",
      "Inverted_Name": "Bisis"
    },
    {
      "Id": "bnx",
      "Print_Name": "Bangubangu",
      "Inverted_Name": "Bangubangu"
    },
    {
      "Id": "bny",
      "Print_Name": "Bintulu",
      "Inverted_Name": "Bintulu"
    },
    {
      "Id": "bnz",
      "Print_Name": "Beezen",
      "Inverted_Name": "Beezen"
    },
    {
      "Id": "boa",
      "Print_Name": "Bora",
      "Inverted_Name": "Bora"
    },
    {
      "Id": "bob",
      "Print_Name": "Aweer",
      "Inverted_Name": "Aweer"
    },
    {
      "Id": "bod",
      "Print_Name": "Tibetan",
      "Inverted_Name": "Tibetan"
    },
    {
      "Id": "boe",
      "Print_Name": "Mundabli",
      "Inverted_Name": "Mundabli"
    },
    {
      "Id": "bof",
      "Print_Name": "Bolon",
      "Inverted_Name": "Bolon"
    },
    {
      "Id": "bog",
      "Print_Name": "Bamako Sign Language",
      "Inverted_Name": "Bamako Sign Language"
    },
    {
      "Id": "boh",
      "Print_Name": "Boma",
      "Inverted_Name": "Boma"
    },
    {
      "Id": "boi",
      "Print_Name": "Barbareño",
      "Inverted_Name": "Barbareño"
    },
    {
      "Id": "boj",
      "Print_Name": "Anjam",
      "Inverted_Name": "Anjam"
    },
    {
      "Id": "bok",
      "Print_Name": "Bonjo",
      "Inverted_Name": "Bonjo"
    },
    {
      "Id": "bol",
      "Print_Name": "Bole",
      "Inverted_Name": "Bole"
    },
    {
      "Id": "bom",
      "Print_Name": "Berom",
      "Inverted_Name": "Berom"
    },
    {
      "Id": "bon",
      "Print_Name": "Bine",
      "Inverted_Name": "Bine"
    },
    {
      "Id": "boo",
      "Print_Name": "Tiemacèwè Bozo",
      "Inverted_Name": "Bozo, Tiemacèwè"
    },
    {
      "Id": "bop",
      "Print_Name": "Bonkiman",
      "Inverted_Name": "Bonkiman"
    },
    {
      "Id": "boq",
      "Print_Name": "Bogaya",
      "Inverted_Name": "Bogaya"
    },
    {
      "Id": "bor",
      "Print_Name": "Borôro",
      "Inverted_Name": "Borôro"
    },
    {
      "Id": "bos",
      "Print_Name": "Bosnian",
      "Inverted_Name": "Bosnian"
    },
    {
      "Id": "bot",
      "Print_Name": "Bongo",
      "Inverted_Name": "Bongo"
    },
    {
      "Id": "bou",
      "Print_Name": "Bondei",
      "Inverted_Name": "Bondei"
    },
    {
      "Id": "bov",
      "Print_Name": "Tuwuli",
      "Inverted_Name": "Tuwuli"
    },
    {
      "Id": "bow",
      "Print_Name": "Rema",
      "Inverted_Name": "Rema"
    },
    {
      "Id": "box",
      "Print_Name": "Buamu",
      "Inverted_Name": "Buamu"
    },
    {
      "Id": "boy",
      "Print_Name": "Bodo (Central African Republic)",
      "Inverted_Name": "Bodo (Central African Republic)"
    },
    {
      "Id": "boz",
      "Print_Name": "Tiéyaxo Bozo",
      "Inverted_Name": "Bozo, Tiéyaxo"
    },
    {
      "Id": "bpa",
      "Print_Name": "Daakaka",
      "Inverted_Name": "Daakaka"
    },
    {
      "Id": "bpc",
      "Print_Name": "Mbuk",
      "Inverted_Name": "Mbuk"
    },
    {
      "Id": "bpd",
      "Print_Name": "Banda-Banda",
      "Inverted_Name": "Banda-Banda"
    },
    {
      "Id": "bpe",
      "Print_Name": "Bauni",
      "Inverted_Name": "Bauni"
    },
    {
      "Id": "bpg",
      "Print_Name": "Bonggo",
      "Inverted_Name": "Bonggo"
    },
    {
      "Id": "bph",
      "Print_Name": "Botlikh",
      "Inverted_Name": "Botlikh"
    },
    {
      "Id": "bpi",
      "Print_Name": "Bagupi",
      "Inverted_Name": "Bagupi"
    },
    {
      "Id": "bpj",
      "Print_Name": "Binji",
      "Inverted_Name": "Binji"
    },
    {
      "Id": "bpk",
      "Print_Name": "'Ôrôê",
      "Inverted_Name": "'Ôrôê"
    },
    {
      "Id": "bpk",
      "Print_Name": "Orowe",
      "Inverted_Name": "Orowe"
    },
    {
      "Id": "bpl",
      "Print_Name": "Broome Pearling Lugger Pidgin",
      "Inverted_Name": "Broome Pearling Lugger Pidgin"
    },
    {
      "Id": "bpm",
      "Print_Name": "Biyom",
      "Inverted_Name": "Biyom"
    },
    {
      "Id": "bpn",
      "Print_Name": "Dzao Min",
      "Inverted_Name": "Dzao Min"
    },
    {
      "Id": "bpo",
      "Print_Name": "Anasi",
      "Inverted_Name": "Anasi"
    },
    {
      "Id": "bpp",
      "Print_Name": "Kaure",
      "Inverted_Name": "Kaure"
    },
    {
      "Id": "bpq",
      "Print_Name": "Banda Malay",
      "Inverted_Name": "Malay, Banda"
    },
    {
      "Id": "bpr",
      "Print_Name": "Koronadal Blaan",
      "Inverted_Name": "Blaan, Koronadal"
    },
    {
      "Id": "bps",
      "Print_Name": "Sarangani Blaan",
      "Inverted_Name": "Blaan, Sarangani"
    },
    {
      "Id": "bpt",
      "Print_Name": "Barrow Point",
      "Inverted_Name": "Barrow Point"
    },
    {
      "Id": "bpu",
      "Print_Name": "Bongu",
      "Inverted_Name": "Bongu"
    },
    {
      "Id": "bpv",
      "Print_Name": "Bian Marind",
      "Inverted_Name": "Marind, Bian"
    },
    {
      "Id": "bpw",
      "Print_Name": "Bo (Papua New Guinea)",
      "Inverted_Name": "Bo (Papua New Guinea)"
    },
    {
      "Id": "bpx",
      "Print_Name": "Palya Bareli",
      "Inverted_Name": "Bareli, Palya"
    },
    {
      "Id": "bpy",
      "Print_Name": "Bishnupriya",
      "Inverted_Name": "Bishnupriya"
    },
    {
      "Id": "bpz",
      "Print_Name": "Bilba",
      "Inverted_Name": "Bilba"
    },
    {
      "Id": "bqa",
      "Print_Name": "Tchumbuli",
      "Inverted_Name": "Tchumbuli"
    },
    {
      "Id": "bqb",
      "Print_Name": "Bagusa",
      "Inverted_Name": "Bagusa"
    },
    {
      "Id": "bqc",
      "Print_Name": "Boko (Benin)",
      "Inverted_Name": "Boko (Benin)"
    },
    {
      "Id": "bqc",
      "Print_Name": "Boo",
      "Inverted_Name": "Boo"
    },
    {
      "Id": "bqd",
      "Print_Name": "Bung",
      "Inverted_Name": "Bung"
    },
    {
      "Id": "bqf",
      "Print_Name": "Baga Kaloum",
      "Inverted_Name": "Baga Kaloum"
    },
    {
      "Id": "bqg",
      "Print_Name": "Bago-Kusuntu",
      "Inverted_Name": "Bago-Kusuntu"
    },
    {
      "Id": "bqh",
      "Print_Name": "Baima",
      "Inverted_Name": "Baima"
    },
    {
      "Id": "bqi",
      "Print_Name": "Bakhtiari",
      "Inverted_Name": "Bakhtiari"
    },
    {
      "Id": "bqj",
      "Print_Name": "Bandial",
      "Inverted_Name": "Bandial"
    },
    {
      "Id": "bqk",
      "Print_Name": "Banda-Mbrès",
      "Inverted_Name": "Banda-Mbrès"
    },
    {
      "Id": "bql",
      "Print_Name": "Bilakura",
      "Inverted_Name": "Bilakura"
    },
    {
      "Id": "bqm",
      "Print_Name": "Wumboko",
      "Inverted_Name": "Wumboko"
    },
    {
      "Id": "bqn",
      "Print_Name": "Bulgarian Sign Language",
      "Inverted_Name": "Bulgarian Sign Language"
    },
    {
      "Id": "bqo",
      "Print_Name": "Balo",
      "Inverted_Name": "Balo"
    },
    {
      "Id": "bqp",
      "Print_Name": "Busa",
      "Inverted_Name": "Busa"
    },
    {
      "Id": "bqq",
      "Print_Name": "Biritai",
      "Inverted_Name": "Biritai"
    },
    {
      "Id": "bqr",
      "Print_Name": "Burusu",
      "Inverted_Name": "Burusu"
    },
    {
      "Id": "bqs",
      "Print_Name": "Bosngun",
      "Inverted_Name": "Bosngun"
    },
    {
      "Id": "bqt",
      "Print_Name": "Bamukumbit",
      "Inverted_Name": "Bamukumbit"
    },
    {
      "Id": "bqu",
      "Print_Name": "Boguru",
      "Inverted_Name": "Boguru"
    },
    {
      "Id": "bqv",
      "Print_Name": "Begbere-Ejar",
      "Inverted_Name": "Begbere-Ejar"
    },
    {
      "Id": "bqv",
      "Print_Name": "Koro Wachi",
      "Inverted_Name": "Koro Wachi"
    },
    {
      "Id": "bqw",
      "Print_Name": "Buru (Nigeria)",
      "Inverted_Name": "Buru (Nigeria)"
    },
    {
      "Id": "bqx",
      "Print_Name": "Baangi",
      "Inverted_Name": "Baangi"
    },
    {
      "Id": "bqy",
      "Print_Name": "Bengkala Sign Language",
      "Inverted_Name": "Bengkala Sign Language"
    },
    {
      "Id": "bqz",
      "Print_Name": "Bakaka",
      "Inverted_Name": "Bakaka"
    },
    {
      "Id": "bra",
      "Print_Name": "Braj",
      "Inverted_Name": "Braj"
    },
    {
      "Id": "brb",
      "Print_Name": "Brao",
      "Inverted_Name": "Brao"
    },
    {
      "Id": "brb",
      "Print_Name": "Lave",
      "Inverted_Name": "Lave"
    },
    {
      "Id": "brc",
      "Print_Name": "Berbice Creole Dutch",
      "Inverted_Name": "Creole Dutch, Berbice"
    },
    {
      "Id": "brd",
      "Print_Name": "Baraamu",
      "Inverted_Name": "Baraamu"
    },
    {
      "Id": "bre",
      "Print_Name": "Breton",
      "Inverted_Name": "Breton"
    },
    {
      "Id": "brf",
      "Print_Name": "Bira",
      "Inverted_Name": "Bira"
    },
    {
      "Id": "brg",
      "Print_Name": "Baure",
      "Inverted_Name": "Baure"
    },
    {
      "Id": "brh",
      "Print_Name": "Brahui",
      "Inverted_Name": "Brahui"
    },
    {
      "Id": "bri",
      "Print_Name": "Mokpwe",
      "Inverted_Name": "Mokpwe"
    },
    {
      "Id": "brj",
      "Print_Name": "Bieria",
      "Inverted_Name": "Bieria"
    },
    {
      "Id": "brk",
      "Print_Name": "Birked",
      "Inverted_Name": "Birked"
    },
    {
      "Id": "brl",
      "Print_Name": "Birwa",
      "Inverted_Name": "Birwa"
    },
    {
      "Id": "brm",
      "Print_Name": "Barambu",
      "Inverted_Name": "Barambu"
    },
    {
      "Id": "brn",
      "Print_Name": "Boruca",
      "Inverted_Name": "Boruca"
    },
    {
      "Id": "bro",
      "Print_Name": "Brokkat",
      "Inverted_Name": "Brokkat"
    },
    {
      "Id": "brp",
      "Print_Name": "Barapasi",
      "Inverted_Name": "Barapasi"
    },
    {
      "Id": "brq",
      "Print_Name": "Breri",
      "Inverted_Name": "Breri"
    },
    {
      "Id": "brr",
      "Print_Name": "Birao",
      "Inverted_Name": "Birao"
    },
    {
      "Id": "brs",
      "Print_Name": "Baras",
      "Inverted_Name": "Baras"
    },
    {
      "Id": "brt",
      "Print_Name": "Bitare",
      "Inverted_Name": "Bitare"
    },
    {
      "Id": "bru",
      "Print_Name": "Eastern Bru",
      "Inverted_Name": "Bru, Eastern"
    },
    {
      "Id": "brv",
      "Print_Name": "Western Bru",
      "Inverted_Name": "Bru, Western"
    },
    {
      "Id": "brw",
      "Print_Name": "Bellari",
      "Inverted_Name": "Bellari"
    },
    {
      "Id": "brx",
      "Print_Name": "Bodo (India)",
      "Inverted_Name": "Bodo (India)"
    },
    {
      "Id": "bry",
      "Print_Name": "Burui",
      "Inverted_Name": "Burui"
    },
    {
      "Id": "brz",
      "Print_Name": "Bilbil",
      "Inverted_Name": "Bilbil"
    },
    {
      "Id": "bsa",
      "Print_Name": "Abinomn",
      "Inverted_Name": "Abinomn"
    },
    {
      "Id": "bsb",
      "Print_Name": "Brunei Bisaya",
      "Inverted_Name": "Bisaya, Brunei"
    },
    {
      "Id": "bsc",
      "Print_Name": "Bassari",
      "Inverted_Name": "Bassari"
    },
    {
      "Id": "bsc",
      "Print_Name": "Oniyan",
      "Inverted_Name": "Oniyan"
    },
    {
      "Id": "bse",
      "Print_Name": "Wushi",
      "Inverted_Name": "Wushi"
    },
    {
      "Id": "bsf",
      "Print_Name": "Bauchi",
      "Inverted_Name": "Bauchi"
    },
    {
      "Id": "bsg",
      "Print_Name": "Bashkardi",
      "Inverted_Name": "Bashkardi"
    },
    {
      "Id": "bsh",
      "Print_Name": "Kati",
      "Inverted_Name": "Kati"
    },
    {
      "Id": "bsi",
      "Print_Name": "Bassossi",
      "Inverted_Name": "Bassossi"
    },
    {
      "Id": "bsj",
      "Print_Name": "Bangwinji",
      "Inverted_Name": "Bangwinji"
    },
    {
      "Id": "bsk",
      "Print_Name": "Burushaski",
      "Inverted_Name": "Burushaski"
    },
    {
      "Id": "bsl",
      "Print_Name": "Basa-Gumna",
      "Inverted_Name": "Basa-Gumna"
    },
    {
      "Id": "bsm",
      "Print_Name": "Busami",
      "Inverted_Name": "Busami"
    },
    {
      "Id": "bsn",
      "Print_Name": "Barasana-Eduria",
      "Inverted_Name": "Barasana-Eduria"
    },
    {
      "Id": "bso",
      "Print_Name": "Buso",
      "Inverted_Name": "Buso"
    },
    {
      "Id": "bsp",
      "Print_Name": "Baga Sitemu",
      "Inverted_Name": "Baga Sitemu"
    },
    {
      "Id": "bsq",
      "Print_Name": "Bassa",
      "Inverted_Name": "Bassa"
    },
    {
      "Id": "bsr",
      "Print_Name": "Bassa-Kontagora",
      "Inverted_Name": "Bassa-Kontagora"
    },
    {
      "Id": "bss",
      "Print_Name": "Akoose",
      "Inverted_Name": "Akoose"
    },
    {
      "Id": "bst",
      "Print_Name": "Basketo",
      "Inverted_Name": "Basketo"
    },
    {
      "Id": "bsu",
      "Print_Name": "Bahonsuai",
      "Inverted_Name": "Bahonsuai"
    },
    {
      "Id": "bsv",
      "Print_Name": "Baga Sobané",
      "Inverted_Name": "Baga Sobané"
    },
    {
      "Id": "bsw",
      "Print_Name": "Baiso",
      "Inverted_Name": "Baiso"
    },
    {
      "Id": "bsx",
      "Print_Name": "Yangkam",
      "Inverted_Name": "Yangkam"
    },
    {
      "Id": "bsy",
      "Print_Name": "Sabah Bisaya",
      "Inverted_Name": "Bisaya, Sabah"
    },
    {
      "Id": "bta",
      "Print_Name": "Bata",
      "Inverted_Name": "Bata"
    },
    {
      "Id": "btc",
      "Print_Name": "Bati (Cameroon)",
      "Inverted_Name": "Bati (Cameroon)"
    },
    {
      "Id": "btd",
      "Print_Name": "Batak Dairi",
      "Inverted_Name": "Batak Dairi"
    },
    {
      "Id": "bte",
      "Print_Name": "Gamo-Ningi",
      "Inverted_Name": "Gamo-Ningi"
    },
    {
      "Id": "btf",
      "Print_Name": "Birgit",
      "Inverted_Name": "Birgit"
    },
    {
      "Id": "btg",
      "Print_Name": "Gagnoa Bété",
      "Inverted_Name": "Bété, Gagnoa"
    },
    {
      "Id": "bth",
      "Print_Name": "Biatah Bidayuh",
      "Inverted_Name": "Bidayuh, Biatah"
    },
    {
      "Id": "bti",
      "Print_Name": "Burate",
      "Inverted_Name": "Burate"
    },
    {
      "Id": "btj",
      "Print_Name": "Bacanese Malay",
      "Inverted_Name": "Malay, Bacanese"
    },
    {
      "Id": "btm",
      "Print_Name": "Batak Mandailing",
      "Inverted_Name": "Batak Mandailing"
    },
    {
      "Id": "btn",
      "Print_Name": "Ratagnon",
      "Inverted_Name": "Ratagnon"
    },
    {
      "Id": "bto",
      "Print_Name": "Rinconada Bikol",
      "Inverted_Name": "Bikol, Rinconada"
    },
    {
      "Id": "btp",
      "Print_Name": "Budibud",
      "Inverted_Name": "Budibud"
    },
    {
      "Id": "btq",
      "Print_Name": "Batek",
      "Inverted_Name": "Batek"
    },
    {
      "Id": "btr",
      "Print_Name": "Baetora",
      "Inverted_Name": "Baetora"
    },
    {
      "Id": "bts",
      "Print_Name": "Batak Simalungun",
      "Inverted_Name": "Batak Simalungun"
    },
    {
      "Id": "btt",
      "Print_Name": "Bete-Bendi",
      "Inverted_Name": "Bete-Bendi"
    },
    {
      "Id": "btu",
      "Print_Name": "Batu",
      "Inverted_Name": "Batu"
    },
    {
      "Id": "btv",
      "Print_Name": "Bateri",
      "Inverted_Name": "Bateri"
    },
    {
      "Id": "btw",
      "Print_Name": "Butuanon",
      "Inverted_Name": "Butuanon"
    },
    {
      "Id": "btx",
      "Print_Name": "Batak Karo",
      "Inverted_Name": "Batak Karo"
    },
    {
      "Id": "bty",
      "Print_Name": "Bobot",
      "Inverted_Name": "Bobot"
    },
    {
      "Id": "btz",
      "Print_Name": "Batak Alas-Kluet",
      "Inverted_Name": "Batak Alas-Kluet"
    },
    {
      "Id": "bua",
      "Print_Name": "Buriat",
      "Inverted_Name": "Buriat"
    },
    {
      "Id": "bub",
      "Print_Name": "Bua",
      "Inverted_Name": "Bua"
    },
    {
      "Id": "buc",
      "Print_Name": "Bushi",
      "Inverted_Name": "Bushi"
    },
    {
      "Id": "bud",
      "Print_Name": "Ntcham",
      "Inverted_Name": "Ntcham"
    },
    {
      "Id": "bue",
      "Print_Name": "Beothuk",
      "Inverted_Name": "Beothuk"
    },
    {
      "Id": "buf",
      "Print_Name": "Bushoong",
      "Inverted_Name": "Bushoong"
    },
    {
      "Id": "bug",
      "Print_Name": "Buginese",
      "Inverted_Name": "Buginese"
    },
    {
      "Id": "buh",
      "Print_Name": "Younuo Bunu",
      "Inverted_Name": "Bunu, Younuo"
    },
    {
      "Id": "bui",
      "Print_Name": "Bongili",
      "Inverted_Name": "Bongili"
    },
    {
      "Id": "buj",
      "Print_Name": "Basa-Gurmana",
      "Inverted_Name": "Basa-Gurmana"
    },
    {
      "Id": "buk",
      "Print_Name": "Bugawac",
      "Inverted_Name": "Bugawac"
    },
    {
      "Id": "bul",
      "Print_Name": "Bulgarian",
      "Inverted_Name": "Bulgarian"
    },
    {
      "Id": "bum",
      "Print_Name": "Bulu (Cameroon)",
      "Inverted_Name": "Bulu (Cameroon)"
    },
    {
      "Id": "bun",
      "Print_Name": "Sherbro",
      "Inverted_Name": "Sherbro"
    },
    {
      "Id": "buo",
      "Print_Name": "Terei",
      "Inverted_Name": "Terei"
    },
    {
      "Id": "bup",
      "Print_Name": "Busoa",
      "Inverted_Name": "Busoa"
    },
    {
      "Id": "buq",
      "Print_Name": "Brem",
      "Inverted_Name": "Brem"
    },
    {
      "Id": "bus",
      "Print_Name": "Bokobaru",
      "Inverted_Name": "Bokobaru"
    },
    {
      "Id": "but",
      "Print_Name": "Bungain",
      "Inverted_Name": "Bungain"
    },
    {
      "Id": "buu",
      "Print_Name": "Budu",
      "Inverted_Name": "Budu"
    },
    {
      "Id": "buv",
      "Print_Name": "Bun",
      "Inverted_Name": "Bun"
    },
    {
      "Id": "buw",
      "Print_Name": "Bubi",
      "Inverted_Name": "Bubi"
    },
    {
      "Id": "bux",
      "Print_Name": "Boghom",
      "Inverted_Name": "Boghom"
    },
    {
      "Id": "buy",
      "Print_Name": "Bullom So",
      "Inverted_Name": "Bullom So"
    },
    {
      "Id": "buz",
      "Print_Name": "Bukwen",
      "Inverted_Name": "Bukwen"
    },
    {
      "Id": "bva",
      "Print_Name": "Barein",
      "Inverted_Name": "Barein"
    },
    {
      "Id": "bvb",
      "Print_Name": "Bube",
      "Inverted_Name": "Bube"
    },
    {
      "Id": "bvc",
      "Print_Name": "Baelelea",
      "Inverted_Name": "Baelelea"
    },
    {
      "Id": "bvd",
      "Print_Name": "Baeggu",
      "Inverted_Name": "Baeggu"
    },
    {
      "Id": "bve",
      "Print_Name": "Berau Malay",
      "Inverted_Name": "Malay, Berau"
    },
    {
      "Id": "bvf",
      "Print_Name": "Boor",
      "Inverted_Name": "Boor"
    },
    {
      "Id": "bvg",
      "Print_Name": "Bonkeng",
      "Inverted_Name": "Bonkeng"
    },
    {
      "Id": "bvh",
      "Print_Name": "Bure",
      "Inverted_Name": "Bure"
    },
    {
      "Id": "bvi",
      "Print_Name": "Belanda Viri",
      "Inverted_Name": "Belanda Viri"
    },
    {
      "Id": "bvj",
      "Print_Name": "Baan",
      "Inverted_Name": "Baan"
    },
    {
      "Id": "bvk",
      "Print_Name": "Bukat",
      "Inverted_Name": "Bukat"
    },
    {
      "Id": "bvl",
      "Print_Name": "Bolivian Sign Language",
      "Inverted_Name": "Bolivian Sign Language"
    },
    {
      "Id": "bvm",
      "Print_Name": "Bamunka",
      "Inverted_Name": "Bamunka"
    },
    {
      "Id": "bvn",
      "Print_Name": "Buna",
      "Inverted_Name": "Buna"
    },
    {
      "Id": "bvo",
      "Print_Name": "Bolgo",
      "Inverted_Name": "Bolgo"
    },
    {
      "Id": "bvp",
      "Print_Name": "Bumang",
      "Inverted_Name": "Bumang"
    },
    {
      "Id": "bvq",
      "Print_Name": "Birri",
      "Inverted_Name": "Birri"
    },
    {
      "Id": "bvr",
      "Print_Name": "Burarra",
      "Inverted_Name": "Burarra"
    },
    {
      "Id": "bvt",
      "Print_Name": "Bati (Indonesia)",
      "Inverted_Name": "Bati (Indonesia)"
    },
    {
      "Id": "bvu",
      "Print_Name": "Bukit Malay",
      "Inverted_Name": "Malay, Bukit"
    },
    {
      "Id": "bvv",
      "Print_Name": "Baniva",
      "Inverted_Name": "Baniva"
    },
    {
      "Id": "bvw",
      "Print_Name": "Boga",
      "Inverted_Name": "Boga"
    },
    {
      "Id": "bvx",
      "Print_Name": "Dibole",
      "Inverted_Name": "Dibole"
    },
    {
      "Id": "bvy",
      "Print_Name": "Baybayanon",
      "Inverted_Name": "Baybayanon"
    },
    {
      "Id": "bvz",
      "Print_Name": "Bauzi",
      "Inverted_Name": "Bauzi"
    },
    {
      "Id": "bwa",
      "Print_Name": "Bwatoo",
      "Inverted_Name": "Bwatoo"
    },
    {
      "Id": "bwb",
      "Print_Name": "Namosi-Naitasiri-Serua",
      "Inverted_Name": "Namosi-Naitasiri-Serua"
    },
    {
      "Id": "bwc",
      "Print_Name": "Bwile",
      "Inverted_Name": "Bwile"
    },
    {
      "Id": "bwd",
      "Print_Name": "Bwaidoka",
      "Inverted_Name": "Bwaidoka"
    },
    {
      "Id": "bwe",
      "Print_Name": "Bwe Karen",
      "Inverted_Name": "Karen, Bwe"
    },
    {
      "Id": "bwf",
      "Print_Name": "Boselewa",
      "Inverted_Name": "Boselewa"
    },
    {
      "Id": "bwg",
      "Print_Name": "Barwe",
      "Inverted_Name": "Barwe"
    },
    {
      "Id": "bwh",
      "Print_Name": "Bishuo",
      "Inverted_Name": "Bishuo"
    },
    {
      "Id": "bwi",
      "Print_Name": "Baniwa",
      "Inverted_Name": "Baniwa"
    },
    {
      "Id": "bwj",
      "Print_Name": "Láá Láá Bwamu",
      "Inverted_Name": "Bwamu, Láá Láá"
    },
    {
      "Id": "bwk",
      "Print_Name": "Bauwaki",
      "Inverted_Name": "Bauwaki"
    },
    {
      "Id": "bwl",
      "Print_Name": "Bwela",
      "Inverted_Name": "Bwela"
    },
    {
      "Id": "bwm",
      "Print_Name": "Biwat",
      "Inverted_Name": "Biwat"
    },
    {
      "Id": "bwn",
      "Print_Name": "Wunai Bunu",
      "Inverted_Name": "Bunu, Wunai"
    },
    {
      "Id": "bwo",
      "Print_Name": "Borna (Ethiopia)",
      "Inverted_Name": "Borna (Ethiopia)"
    },
    {
      "Id": "bwo",
      "Print_Name": "Boro (Ethiopia)",
      "Inverted_Name": "Boro (Ethiopia)"
    },
    {
      "Id": "bwp",
      "Print_Name": "Mandobo Bawah",
      "Inverted_Name": "Mandobo Bawah"
    },
    {
      "Id": "bwq",
      "Print_Name": "Southern Bobo Madaré",
      "Inverted_Name": "Bobo Madaré, Southern"
    },
    {
      "Id": "bwr",
      "Print_Name": "Bura-Pabir",
      "Inverted_Name": "Bura-Pabir"
    },
    {
      "Id": "bws",
      "Print_Name": "Bomboma",
      "Inverted_Name": "Bomboma"
    },
    {
      "Id": "bwt",
      "Print_Name": "Bafaw-Balong",
      "Inverted_Name": "Bafaw-Balong"
    },
    {
      "Id": "bwu",
      "Print_Name": "Buli (Ghana)",
      "Inverted_Name": "Buli (Ghana)"
    },
    {
      "Id": "bww",
      "Print_Name": "Bwa",
      "Inverted_Name": "Bwa"
    },
    {
      "Id": "bwx",
      "Print_Name": "Bu-Nao Bunu",
      "Inverted_Name": "Bunu, Bu-Nao"
    },
    {
      "Id": "bwy",
      "Print_Name": "Cwi Bwamu",
      "Inverted_Name": "Bwamu, Cwi"
    },
    {
      "Id": "bwz",
      "Print_Name": "Bwisi",
      "Inverted_Name": "Bwisi"
    },
    {
      "Id": "bxa",
      "Print_Name": "Tairaha",
      "Inverted_Name": "Tairaha"
    },
    {
      "Id": "bxb",
      "Print_Name": "Belanda Bor",
      "Inverted_Name": "Bor, Belanda"
    },
    {
      "Id": "bxc",
      "Print_Name": "Molengue",
      "Inverted_Name": "Molengue"
    },
    {
      "Id": "bxd",
      "Print_Name": "Pela",
      "Inverted_Name": "Pela"
    },
    {
      "Id": "bxe",
      "Print_Name": "Birale",
      "Inverted_Name": "Birale"
    },
    {
      "Id": "bxf",
      "Print_Name": "Bilur",
      "Inverted_Name": "Bilur"
    },
    {
      "Id": "bxf",
      "Print_Name": "Minigir",
      "Inverted_Name": "Minigir"
    },
    {
      "Id": "bxg",
      "Print_Name": "Bangala",
      "Inverted_Name": "Bangala"
    },
    {
      "Id": "bxh",
      "Print_Name": "Buhutu",
      "Inverted_Name": "Buhutu"
    },
    {
      "Id": "bxi",
      "Print_Name": "Pirlatapa",
      "Inverted_Name": "Pirlatapa"
    },
    {
      "Id": "bxj",
      "Print_Name": "Bayungu",
      "Inverted_Name": "Bayungu"
    },
    {
      "Id": "bxk",
      "Print_Name": "Bukusu",
      "Inverted_Name": "Bukusu"
    },
    {
      "Id": "bxk",
      "Print_Name": "Lubukusu",
      "Inverted_Name": "Lubukusu"
    },
    {
      "Id": "bxl",
      "Print_Name": "Jalkunan",
      "Inverted_Name": "Jalkunan"
    },
    {
      "Id": "bxm",
      "Print_Name": "Mongolia Buriat",
      "Inverted_Name": "Buriat, Mongolia"
    },
    {
      "Id": "bxn",
      "Print_Name": "Burduna",
      "Inverted_Name": "Burduna"
    },
    {
      "Id": "bxo",
      "Print_Name": "Barikanchi",
      "Inverted_Name": "Barikanchi"
    },
    {
      "Id": "bxp",
      "Print_Name": "Bebil",
      "Inverted_Name": "Bebil"
    },
    {
      "Id": "bxq",
      "Print_Name": "Beele",
      "Inverted_Name": "Beele"
    },
    {
      "Id": "bxr",
      "Print_Name": "Russia Buriat",
      "Inverted_Name": "Buriat, Russia"
    },
    {
      "Id": "bxs",
      "Print_Name": "Busam",
      "Inverted_Name": "Busam"
    },
    {
      "Id": "bxu",
      "Print_Name": "China Buriat",
      "Inverted_Name": "Buriat, China"
    },
    {
      "Id": "bxv",
      "Print_Name": "Berakou",
      "Inverted_Name": "Berakou"
    },
    {
      "Id": "bxw",
      "Print_Name": "Bankagooma",
      "Inverted_Name": "Bankagooma"
    },
    {
      "Id": "bxz",
      "Print_Name": "Binahari",
      "Inverted_Name": "Binahari"
    },
    {
      "Id": "bya",
      "Print_Name": "Batak",
      "Inverted_Name": "Batak"
    },
    {
      "Id": "byb",
      "Print_Name": "Bikya",
      "Inverted_Name": "Bikya"
    },
    {
      "Id": "byc",
      "Print_Name": "Ubaghara",
      "Inverted_Name": "Ubaghara"
    },
    {
      "Id": "byd",
      "Print_Name": "Benyadu'",
      "Inverted_Name": "Benyadu'"
    },
    {
      "Id": "bye",
      "Print_Name": "Pouye",
      "Inverted_Name": "Pouye"
    },
    {
      "Id": "byf",
      "Print_Name": "Bete",
      "Inverted_Name": "Bete"
    },
    {
      "Id": "byg",
      "Print_Name": "Baygo",
      "Inverted_Name": "Baygo"
    },
    {
      "Id": "byh",
      "Print_Name": "Bhujel",
      "Inverted_Name": "Bhujel"
    },
    {
      "Id": "byi",
      "Print_Name": "Buyu",
      "Inverted_Name": "Buyu"
    },
    {
      "Id": "byj",
      "Print_Name": "Bina (Nigeria)",
      "Inverted_Name": "Bina (Nigeria)"
    },
    {
      "Id": "byk",
      "Print_Name": "Biao",
      "Inverted_Name": "Biao"
    },
    {
      "Id": "byl",
      "Print_Name": "Bayono",
      "Inverted_Name": "Bayono"
    },
    {
      "Id": "bym",
      "Print_Name": "Bidjara",
      "Inverted_Name": "Bidjara"
    },
    {
      "Id": "byn",
      "Print_Name": "Bilin",
      "Inverted_Name": "Bilin"
    },
    {
      "Id": "byn",
      "Print_Name": "Blin",
      "Inverted_Name": "Blin"
    },
    {
      "Id": "byo",
      "Print_Name": "Biyo",
      "Inverted_Name": "Biyo"
    },
    {
      "Id": "byp",
      "Print_Name": "Bumaji",
      "Inverted_Name": "Bumaji"
    },
    {
      "Id": "byq",
      "Print_Name": "Basay",
      "Inverted_Name": "Basay"
    },
    {
      "Id": "byr",
      "Print_Name": "Baruya",
      "Inverted_Name": "Baruya"
    },
    {
      "Id": "byr",
      "Print_Name": "Yipma",
      "Inverted_Name": "Yipma"
    },
    {
      "Id": "bys",
      "Print_Name": "Burak",
      "Inverted_Name": "Burak"
    },
    {
      "Id": "byt",
      "Print_Name": "Berti",
      "Inverted_Name": "Berti"
    },
    {
      "Id": "byv",
      "Print_Name": "Medumba",
      "Inverted_Name": "Medumba"
    },
    {
      "Id": "byw",
      "Print_Name": "Belhariya",
      "Inverted_Name": "Belhariya"
    },
    {
      "Id": "byx",
      "Print_Name": "Qaqet",
      "Inverted_Name": "Qaqet"
    },
    {
      "Id": "byz",
      "Print_Name": "Banaro",
      "Inverted_Name": "Banaro"
    },
    {
      "Id": "bza",
      "Print_Name": "Bandi",
      "Inverted_Name": "Bandi"
    },
    {
      "Id": "bzb",
      "Print_Name": "Andio",
      "Inverted_Name": "Andio"
    },
    {
      "Id": "bzc",
      "Print_Name": "Southern Betsimisaraka Malagasy",
      "Inverted_Name": "Malagasy, Southern Betsimisaraka"
    },
    {
      "Id": "bzd",
      "Print_Name": "Bribri",
      "Inverted_Name": "Bribri"
    },
    {
      "Id": "bze",
      "Print_Name": "Jenaama Bozo",
      "Inverted_Name": "Bozo, Jenaama"
    },
    {
      "Id": "bzf",
      "Print_Name": "Boikin",
      "Inverted_Name": "Boikin"
    },
    {
      "Id": "bzg",
      "Print_Name": "Babuza",
      "Inverted_Name": "Babuza"
    },
    {
      "Id": "bzh",
      "Print_Name": "Mapos Buang",
      "Inverted_Name": "Buang, Mapos"
    },
    {
      "Id": "bzi",
      "Print_Name": "Bisu",
      "Inverted_Name": "Bisu"
    },
    {
      "Id": "bzj",
      "Print_Name": "Belize Kriol English",
      "Inverted_Name": "Kriol English, Belize"
    },
    {
      "Id": "bzk",
      "Print_Name": "Nicaragua Creole English",
      "Inverted_Name": "Creole English, Nicaragua"
    },
    {
      "Id": "bzl",
      "Print_Name": "Boano (Sulawesi)",
      "Inverted_Name": "Boano (Sulawesi)"
    },
    {
      "Id": "bzm",
      "Print_Name": "Bolondo",
      "Inverted_Name": "Bolondo"
    },
    {
      "Id": "bzn",
      "Print_Name": "Boano (Maluku)",
      "Inverted_Name": "Boano (Maluku)"
    },
    {
      "Id": "bzo",
      "Print_Name": "Bozaba",
      "Inverted_Name": "Bozaba"
    },
    {
      "Id": "bzp",
      "Print_Name": "Kemberano",
      "Inverted_Name": "Kemberano"
    },
    {
      "Id": "bzq",
      "Print_Name": "Buli (Indonesia)",
      "Inverted_Name": "Buli (Indonesia)"
    },
    {
      "Id": "bzr",
      "Print_Name": "Biri",
      "Inverted_Name": "Biri"
    },
    {
      "Id": "bzs",
      "Print_Name": "Brazilian Sign Language",
      "Inverted_Name": "Brazilian Sign Language"
    },
    {
      "Id": "bzt",
      "Print_Name": "Brithenig",
      "Inverted_Name": "Brithenig"
    },
    {
      "Id": "bzu",
      "Print_Name": "Burmeso",
      "Inverted_Name": "Burmeso"
    },
    {
      "Id": "bzv",
      "Print_Name": "Naami",
      "Inverted_Name": "Naami"
    },
    {
      "Id": "bzw",
      "Print_Name": "Basa (Nigeria)",
      "Inverted_Name": "Basa (Nigeria)"
    },
    {
      "Id": "bzx",
      "Print_Name": "Kɛlɛngaxo Bozo",
      "Inverted_Name": "Bozo, Kɛlɛngaxo"
    },
    {
      "Id": "bzy",
      "Print_Name": "Obanliku",
      "Inverted_Name": "Obanliku"
    },
    {
      "Id": "bzz",
      "Print_Name": "Evant",
      "Inverted_Name": "Evant"
    },
    {
      "Id": "caa",
      "Print_Name": "Chortí",
      "Inverted_Name": "Chortí"
    },
    {
      "Id": "cab",
      "Print_Name": "Garifuna",
      "Inverted_Name": "Garifuna"
    },
    {
      "Id": "cac",
      "Print_Name": "Chuj",
      "Inverted_Name": "Chuj"
    },
    {
      "Id": "cad",
      "Print_Name": "Caddo",
      "Inverted_Name": "Caddo"
    },
    {
      "Id": "cae",
      "Print_Name": "Laalaa",
      "Inverted_Name": "Laalaa"
    },
    {
      "Id": "cae",
      "Print_Name": "Lehar",
      "Inverted_Name": "Lehar"
    },
    {
      "Id": "caf",
      "Print_Name": "Southern Carrier",
      "Inverted_Name": "Carrier, Southern"
    },
    {
      "Id": "cag",
      "Print_Name": "Nivaclé",
      "Inverted_Name": "Nivaclé"
    },
    {
      "Id": "cah",
      "Print_Name": "Cahuarano",
      "Inverted_Name": "Cahuarano"
    },
    {
      "Id": "caj",
      "Print_Name": "Chané",
      "Inverted_Name": "Chané"
    },
    {
      "Id": "cak",
      "Print_Name": "Cakchiquel",
      "Inverted_Name": "Cakchiquel"
    },
    {
      "Id": "cak",
      "Print_Name": "Kaqchikel",
      "Inverted_Name": "Kaqchikel"
    },
    {
      "Id": "cal",
      "Print_Name": "Carolinian",
      "Inverted_Name": "Carolinian"
    },
    {
      "Id": "cam",
      "Print_Name": "Cemuhî",
      "Inverted_Name": "Cemuhî"
    },
    {
      "Id": "can",
      "Print_Name": "Chambri",
      "Inverted_Name": "Chambri"
    },
    {
      "Id": "cao",
      "Print_Name": "Chácobo",
      "Inverted_Name": "Chácobo"
    },
    {
      "Id": "cap",
      "Print_Name": "Chipaya",
      "Inverted_Name": "Chipaya"
    },
    {
      "Id": "caq",
      "Print_Name": "Car Nicobarese",
      "Inverted_Name": "Nicobarese, Car"
    },
    {
      "Id": "car",
      "Print_Name": "Galibi Carib",
      "Inverted_Name": "Carib, Galibi"
    },
    {
      "Id": "cas",
      "Print_Name": "Tsimané",
      "Inverted_Name": "Tsimané"
    },
    {
      "Id": "cat",
      "Print_Name": "Catalan",
      "Inverted_Name": "Catalan"
    },
    {
      "Id": "cat",
      "Print_Name": "Valencian",
      "Inverted_Name": "Valencian"
    },
    {
      "Id": "cav",
      "Print_Name": "Cavineña",
      "Inverted_Name": "Cavineña"
    },
    {
      "Id": "caw",
      "Print_Name": "Callawalla",
      "Inverted_Name": "Callawalla"
    },
    {
      "Id": "cax",
      "Print_Name": "Chiquitano",
      "Inverted_Name": "Chiquitano"
    },
    {
      "Id": "cay",
      "Print_Name": "Cayuga",
      "Inverted_Name": "Cayuga"
    },
    {
      "Id": "caz",
      "Print_Name": "Canichana",
      "Inverted_Name": "Canichana"
    },
    {
      "Id": "cbb",
      "Print_Name": "Cabiyarí",
      "Inverted_Name": "Cabiyarí"
    },
    {
      "Id": "cbc",
      "Print_Name": "Carapana",
      "Inverted_Name": "Carapana"
    },
    {
      "Id": "cbd",
      "Print_Name": "Carijona",
      "Inverted_Name": "Carijona"
    },
    {
      "Id": "cbg",
      "Print_Name": "Chimila",
      "Inverted_Name": "Chimila"
    },
    {
      "Id": "cbi",
      "Print_Name": "Chachi",
      "Inverted_Name": "Chachi"
    },
    {
      "Id": "cbj",
      "Print_Name": "Ede Cabe",
      "Inverted_Name": "Ede Cabe"
    },
    {
      "Id": "cbk",
      "Print_Name": "Chavacano",
      "Inverted_Name": "Chavacano"
    },
    {
      "Id": "cbl",
      "Print_Name": "Bualkhaw Chin",
      "Inverted_Name": "Chin, Bualkhaw"
    },
    {
      "Id": "cbn",
      "Print_Name": "Nyahkur",
      "Inverted_Name": "Nyahkur"
    },
    {
      "Id": "cbo",
      "Print_Name": "Izora",
      "Inverted_Name": "Izora"
    },
    {
      "Id": "cbq",
      "Print_Name": "Cuba",
      "Inverted_Name": "Cuba"
    },
    {
      "Id": "cbq",
      "Print_Name": "Tsucuba",
      "Inverted_Name": "Tsucuba"
    },
    {
      "Id": "cbr",
      "Print_Name": "Cashibo-Cacataibo",
      "Inverted_Name": "Cashibo-Cacataibo"
    },
    {
      "Id": "cbs",
      "Print_Name": "Cashinahua",
      "Inverted_Name": "Cashinahua"
    },
    {
      "Id": "cbt",
      "Print_Name": "Chayahuita",
      "Inverted_Name": "Chayahuita"
    },
    {
      "Id": "cbu",
      "Print_Name": "Candoshi-Shapra",
      "Inverted_Name": "Candoshi-Shapra"
    },
    {
      "Id": "cbv",
      "Print_Name": "Cacua",
      "Inverted_Name": "Cacua"
    },
    {
      "Id": "cbw",
      "Print_Name": "Kinabalian",
      "Inverted_Name": "Kinabalian"
    },
    {
      "Id": "cby",
      "Print_Name": "Carabayo",
      "Inverted_Name": "Carabayo"
    },
    {
      "Id": "ccc",
      "Print_Name": "Chamicuro",
      "Inverted_Name": "Chamicuro"
    },
    {
      "Id": "ccd",
      "Print_Name": "Cafundo Creole",
      "Inverted_Name": "Creole, Cafundo"
    },
    {
      "Id": "cce",
      "Print_Name": "Chopi",
      "Inverted_Name": "Chopi"
    },
    {
      "Id": "ccg",
      "Print_Name": "Samba Daka",
      "Inverted_Name": "Daka, Samba"
    },
    {
      "Id": "cch",
      "Print_Name": "Atsam",
      "Inverted_Name": "Atsam"
    },
    {
      "Id": "ccj",
      "Print_Name": "Kasanga",
      "Inverted_Name": "Kasanga"
    },
    {
      "Id": "ccl",
      "Print_Name": "Cutchi-Swahili",
      "Inverted_Name": "Cutchi-Swahili"
    },
    {
      "Id": "ccm",
      "Print_Name": "Malaccan Creole Malay",
      "Inverted_Name": "Creole Malay, Malaccan"
    },
    {
      "Id": "cco",
      "Print_Name": "Comaltepec Chinantec",
      "Inverted_Name": "Chinantec, Comaltepec"
    },
    {
      "Id": "ccp",
      "Print_Name": "Chakma",
      "Inverted_Name": "Chakma"
    },
    {
      "Id": "ccr",
      "Print_Name": "Cacaopera",
      "Inverted_Name": "Cacaopera"
    },
    {
      "Id": "cda",
      "Print_Name": "Choni",
      "Inverted_Name": "Choni"
    },
    {
      "Id": "cde",
      "Print_Name": "Chenchu",
      "Inverted_Name": "Chenchu"
    },
    {
      "Id": "cdf",
      "Print_Name": "Chiru",
      "Inverted_Name": "Chiru"
    },
    {
      "Id": "cdh",
      "Print_Name": "Chambeali",
      "Inverted_Name": "Chambeali"
    },
    {
      "Id": "cdi",
      "Print_Name": "Chodri",
      "Inverted_Name": "Chodri"
    },
    {
      "Id": "cdj",
      "Print_Name": "Churahi",
      "Inverted_Name": "Churahi"
    },
    {
      "Id": "cdm",
      "Print_Name": "Chepang",
      "Inverted_Name": "Chepang"
    },
    {
      "Id": "cdn",
      "Print_Name": "Chaudangsi",
      "Inverted_Name": "Chaudangsi"
    },
    {
      "Id": "cdo",
      "Print_Name": "Min Dong Chinese",
      "Inverted_Name": "Chinese, Min Dong"
    },
    {
      "Id": "cdr",
      "Print_Name": "Cinda-Regi-Tiyal",
      "Inverted_Name": "Cinda-Regi-Tiyal"
    },
    {
      "Id": "cds",
      "Print_Name": "Chadian Sign Language",
      "Inverted_Name": "Chadian Sign Language"
    },
    {
      "Id": "cdy",
      "Print_Name": "Chadong",
      "Inverted_Name": "Chadong"
    },
    {
      "Id": "cdz",
      "Print_Name": "Koda",
      "Inverted_Name": "Koda"
    },
    {
      "Id": "cea",
      "Print_Name": "Lower Chehalis",
      "Inverted_Name": "Chehalis, Lower"
    },
    {
      "Id": "ceb",
      "Print_Name": "Cebuano",
      "Inverted_Name": "Cebuano"
    },
    {
      "Id": "ceg",
      "Print_Name": "Chamacoco",
      "Inverted_Name": "Chamacoco"
    },
    {
      "Id": "cek",
      "Print_Name": "Eastern Khumi Chin",
      "Inverted_Name": "Chin, Eastern Khumi"
    },
    {
      "Id": "cen",
      "Print_Name": "Cen",
      "Inverted_Name": "Cen"
    },
    {
      "Id": "ces",
      "Print_Name": "Czech",
      "Inverted_Name": "Czech"
    },
    {
      "Id": "cet",
      "Print_Name": "Centúúm",
      "Inverted_Name": "Centúúm"
    },
    {
      "Id": "cey",
      "Print_Name": "Ekai Chin",
      "Inverted_Name": "Chin, Ekai"
    },
    {
      "Id": "cfa",
      "Print_Name": "Dijim-Bwilim",
      "Inverted_Name": "Dijim-Bwilim"
    },
    {
      "Id": "cfd",
      "Print_Name": "Cara",
      "Inverted_Name": "Cara"
    },
    {
      "Id": "cfg",
      "Print_Name": "Como Karim",
      "Inverted_Name": "Como Karim"
    },
    {
      "Id": "cfm",
      "Print_Name": "Falam Chin",
      "Inverted_Name": "Chin, Falam"
    },
    {
      "Id": "cga",
      "Print_Name": "Changriwa",
      "Inverted_Name": "Changriwa"
    },
    {
      "Id": "cgc",
      "Print_Name": "Kagayanen",
      "Inverted_Name": "Kagayanen"
    },
    {
      "Id": "cgg",
      "Print_Name": "Chiga",
      "Inverted_Name": "Chiga"
    },
    {
      "Id": "cgk",
      "Print_Name": "Chocangacakha",
      "Inverted_Name": "Chocangacakha"
    },
    {
      "Id": "cha",
      "Print_Name": "Chamorro",
      "Inverted_Name": "Chamorro"
    },
    {
      "Id": "chb",
      "Print_Name": "Chibcha",
      "Inverted_Name": "Chibcha"
    },
    {
      "Id": "chc",
      "Print_Name": "Catawba",
      "Inverted_Name": "Catawba"
    },
    {
      "Id": "chd",
      "Print_Name": "Highland Oaxaca Chontal",
      "Inverted_Name": "Chontal, Highland Oaxaca"
    },
    {
      "Id": "che",
      "Print_Name": "Chechen",
      "Inverted_Name": "Chechen"
    },
    {
      "Id": "chf",
      "Print_Name": "Tabasco Chontal",
      "Inverted_Name": "Chontal, Tabasco"
    },
    {
      "Id": "chg",
      "Print_Name": "Chagatai",
      "Inverted_Name": "Chagatai"
    },
    {
      "Id": "chh",
      "Print_Name": "Chinook",
      "Inverted_Name": "Chinook"
    },
    {
      "Id": "chj",
      "Print_Name": "Ojitlán Chinantec",
      "Inverted_Name": "Chinantec, Ojitlán"
    },
    {
      "Id": "chk",
      "Print_Name": "Chuukese",
      "Inverted_Name": "Chuukese"
    },
    {
      "Id": "chl",
      "Print_Name": "Cahuilla",
      "Inverted_Name": "Cahuilla"
    },
    {
      "Id": "chm",
      "Print_Name": "Mari (Russia)",
      "Inverted_Name": "Mari (Russia)"
    },
    {
      "Id": "chn",
      "Print_Name": "Chinook jargon",
      "Inverted_Name": "Chinook jargon"
    },
    {
      "Id": "cho",
      "Print_Name": "Choctaw",
      "Inverted_Name": "Choctaw"
    },
    {
      "Id": "chp",
      "Print_Name": "Chipewyan",
      "Inverted_Name": "Chipewyan"
    },
    {
      "Id": "chp",
      "Print_Name": "Dene Suline",
      "Inverted_Name": "Dene Suline"
    },
    {
      "Id": "chq",
      "Print_Name": "Quiotepec Chinantec",
      "Inverted_Name": "Chinantec, Quiotepec"
    },
    {
      "Id": "chr",
      "Print_Name": "Cherokee",
      "Inverted_Name": "Cherokee"
    },
    {
      "Id": "cht",
      "Print_Name": "Cholón",
      "Inverted_Name": "Cholón"
    },
    {
      "Id": "chu",
      "Print_Name": "Church Slavic",
      "Inverted_Name": "Slavic, Church"
    },
    {
      "Id": "chu",
      "Print_Name": "Church Slavonic",
      "Inverted_Name": "Slavonic, Church"
    },
    {
      "Id": "chu",
      "Print_Name": "Old Bulgarian",
      "Inverted_Name": "Bulgarian, Old"
    },
    {
      "Id": "chu",
      "Print_Name": "Old Church Slavonic",
      "Inverted_Name": "Slavonic, Old Church"
    },
    {
      "Id": "chu",
      "Print_Name": "Old Slavonic",
      "Inverted_Name": "Slavonic, Old"
    },
    {
      "Id": "chv",
      "Print_Name": "Chuvash",
      "Inverted_Name": "Chuvash"
    },
    {
      "Id": "chw",
      "Print_Name": "Chuwabu",
      "Inverted_Name": "Chuwabu"
    },
    {
      "Id": "chx",
      "Print_Name": "Chantyal",
      "Inverted_Name": "Chantyal"
    },
    {
      "Id": "chy",
      "Print_Name": "Cheyenne",
      "Inverted_Name": "Cheyenne"
    },
    {
      "Id": "chz",
      "Print_Name": "Ozumacín Chinantec",
      "Inverted_Name": "Chinantec, Ozumacín"
    },
    {
      "Id": "cia",
      "Print_Name": "Cia-Cia",
      "Inverted_Name": "Cia-Cia"
    },
    {
      "Id": "cib",
      "Print_Name": "Ci Gbe",
      "Inverted_Name": "Gbe, Ci"
    },
    {
      "Id": "cic",
      "Print_Name": "Chickasaw",
      "Inverted_Name": "Chickasaw"
    },
    {
      "Id": "cid",
      "Print_Name": "Chimariko",
      "Inverted_Name": "Chimariko"
    },
    {
      "Id": "cie",
      "Print_Name": "Cineni",
      "Inverted_Name": "Cineni"
    },
    {
      "Id": "cih",
      "Print_Name": "Chinali",
      "Inverted_Name": "Chinali"
    },
    {
      "Id": "cik",
      "Print_Name": "Chitkuli Kinnauri",
      "Inverted_Name": "Kinnauri, Chitkuli"
    },
    {
      "Id": "cim",
      "Print_Name": "Cimbrian",
      "Inverted_Name": "Cimbrian"
    },
    {
      "Id": "cin",
      "Print_Name": "Cinta Larga",
      "Inverted_Name": "Cinta Larga"
    },
    {
      "Id": "cip",
      "Print_Name": "Chiapanec",
      "Inverted_Name": "Chiapanec"
    },
    {
      "Id": "cir",
      "Print_Name": "Haméa",
      "Inverted_Name": "Haméa"
    },
    {
      "Id": "cir",
      "Print_Name": "Méa",
      "Inverted_Name": "Méa"
    },
    {
      "Id": "cir",
      "Print_Name": "Tiri",
      "Inverted_Name": "Tiri"
    },
    {
      "Id": "ciw",
      "Print_Name": "Chippewa",
      "Inverted_Name": "Chippewa"
    },
    {
      "Id": "ciy",
      "Print_Name": "Chaima",
      "Inverted_Name": "Chaima"
    },
    {
      "Id": "cja",
      "Print_Name": "Western Cham",
      "Inverted_Name": "Cham, Western"
    },
    {
      "Id": "cje",
      "Print_Name": "Chru",
      "Inverted_Name": "Chru"
    },
    {
      "Id": "cjh",
      "Print_Name": "Upper Chehalis",
      "Inverted_Name": "Chehalis, Upper"
    },
    {
      "Id": "cji",
      "Print_Name": "Chamalal",
      "Inverted_Name": "Chamalal"
    },
    {
      "Id": "cjk",
      "Print_Name": "Chokwe",
      "Inverted_Name": "Chokwe"
    },
    {
      "Id": "cjm",
      "Print_Name": "Eastern Cham",
      "Inverted_Name": "Cham, Eastern"
    },
    {
      "Id": "cjn",
      "Print_Name": "Chenapian",
      "Inverted_Name": "Chenapian"
    },
    {
      "Id": "cjo",
      "Print_Name": "Ashéninka Pajonal",
      "Inverted_Name": "Ashéninka Pajonal"
    },
    {
      "Id": "cjp",
      "Print_Name": "Cabécar",
      "Inverted_Name": "Cabécar"
    },
    {
      "Id": "cjs",
      "Print_Name": "Shor",
      "Inverted_Name": "Shor"
    },
    {
      "Id": "cjv",
      "Print_Name": "Chuave",
      "Inverted_Name": "Chuave"
    },
    {
      "Id": "cjy",
      "Print_Name": "Jinyu Chinese",
      "Inverted_Name": "Chinese, Jinyu"
    },
    {
      "Id": "ckb",
      "Print_Name": "Central Kurdish",
      "Inverted_Name": "Kurdish, Central"
    },
    {
      "Id": "ckh",
      "Print_Name": "Chak",
      "Inverted_Name": "Chak"
    },
    {
      "Id": "ckl",
      "Print_Name": "Cibak",
      "Inverted_Name": "Cibak"
    },
    {
      "Id": "ckm",
      "Print_Name": "Chakavian",
      "Inverted_Name": "Chakavian"
    },
    {
      "Id": "ckn",
      "Print_Name": "Kaang Chin",
      "Inverted_Name": "Chin, Kaang"
    },
    {
      "Id": "cko",
      "Print_Name": "Anufo",
      "Inverted_Name": "Anufo"
    },
    {
      "Id": "ckq",
      "Print_Name": "Kajakse",
      "Inverted_Name": "Kajakse"
    },
    {
      "Id": "ckr",
      "Print_Name": "Kairak",
      "Inverted_Name": "Kairak"
    },
    {
      "Id": "cks",
      "Print_Name": "Tayo",
      "Inverted_Name": "Tayo"
    },
    {
      "Id": "ckt",
      "Print_Name": "Chukot",
      "Inverted_Name": "Chukot"
    },
    {
      "Id": "cku",
      "Print_Name": "Koasati",
      "Inverted_Name": "Koasati"
    },
    {
      "Id": "ckv",
      "Print_Name": "Kavalan",
      "Inverted_Name": "Kavalan"
    },
    {
      "Id": "ckx",
      "Print_Name": "Caka",
      "Inverted_Name": "Caka"
    },
    {
      "Id": "cky",
      "Print_Name": "Cakfem-Mushere",
      "Inverted_Name": "Cakfem-Mushere"
    },
    {
      "Id": "ckz",
      "Print_Name": "Cakchiquel-Quiché Mixed Language",
      "Inverted_Name": "Cakchiquel-Quiché Mixed Language"
    },
    {
      "Id": "cla",
      "Print_Name": "Ron",
      "Inverted_Name": "Ron"
    },
    {
      "Id": "clc",
      "Print_Name": "Chilcotin",
      "Inverted_Name": "Chilcotin"
    },
    {
      "Id": "cld",
      "Print_Name": "Chaldean Neo-Aramaic",
      "Inverted_Name": "Neo-Aramaic, Chaldean"
    },
    {
      "Id": "cle",
      "Print_Name": "Lealao Chinantec",
      "Inverted_Name": "Chinantec, Lealao"
    },
    {
      "Id": "clh",
      "Print_Name": "Chilisso",
      "Inverted_Name": "Chilisso"
    },
    {
      "Id": "cli",
      "Print_Name": "Chakali",
      "Inverted_Name": "Chakali"
    },
    {
      "Id": "clj",
      "Print_Name": "Laitu Chin",
      "Inverted_Name": "Chin, Laitu"
    },
    {
      "Id": "clk",
      "Print_Name": "Idu-Mishmi",
      "Inverted_Name": "Idu-Mishmi"
    },
    {
      "Id": "cll",
      "Print_Name": "Chala",
      "Inverted_Name": "Chala"
    },
    {
      "Id": "clm",
      "Print_Name": "Clallam",
      "Inverted_Name": "Clallam"
    },
    {
      "Id": "clo",
      "Print_Name": "Lowland Oaxaca Chontal",
      "Inverted_Name": "Chontal, Lowland Oaxaca"
    },
    {
      "Id": "clt",
      "Print_Name": "Lautu Chin",
      "Inverted_Name": "Chin, Lautu"
    },
    {
      "Id": "clu",
      "Print_Name": "Caluyanun",
      "Inverted_Name": "Caluyanun"
    },
    {
      "Id": "clw",
      "Print_Name": "Chulym",
      "Inverted_Name": "Chulym"
    },
    {
      "Id": "cly",
      "Print_Name": "Eastern Highland Chatino",
      "Inverted_Name": "Chatino, Eastern Highland"
    },
    {
      "Id": "cma",
      "Print_Name": "Maa",
      "Inverted_Name": "Maa"
    },
    {
      "Id": "cme",
      "Print_Name": "Cerma",
      "Inverted_Name": "Cerma"
    },
    {
      "Id": "cmg",
      "Print_Name": "Classical Mongolian",
      "Inverted_Name": "Mongolian, Classical"
    },
    {
      "Id": "cmi",
      "Print_Name": "Emberá-Chamí",
      "Inverted_Name": "Emberá-Chamí"
    },
    {
      "Id": "cml",
      "Print_Name": "Campalagian",
      "Inverted_Name": "Campalagian"
    },
    {
      "Id": "cmm",
      "Print_Name": "Michigamea",
      "Inverted_Name": "Michigamea"
    },
    {
      "Id": "cmn",
      "Print_Name": "Mandarin Chinese",
      "Inverted_Name": "Chinese, Mandarin"
    },
    {
      "Id": "cmo",
      "Print_Name": "Central Mnong",
      "Inverted_Name": "Mnong, Central"
    },
    {
      "Id": "cmr",
      "Print_Name": "Mro-Khimi Chin",
      "Inverted_Name": "Chin, Mro-Khimi"
    },
    {
      "Id": "cms",
      "Print_Name": "Messapic",
      "Inverted_Name": "Messapic"
    },
    {
      "Id": "cmt",
      "Print_Name": "Camtho",
      "Inverted_Name": "Camtho"
    },
    {
      "Id": "cna",
      "Print_Name": "Changthang",
      "Inverted_Name": "Changthang"
    },
    {
      "Id": "cnb",
      "Print_Name": "Chinbon Chin",
      "Inverted_Name": "Chin, Chinbon"
    },
    {
      "Id": "cnc",
      "Print_Name": "Côông",
      "Inverted_Name": "Côông"
    },
    {
      "Id": "cng",
      "Print_Name": "Northern Qiang",
      "Inverted_Name": "Qiang, Northern"
    },
    {
      "Id": "cnh",
      "Print_Name": "Haka Chin",
      "Inverted_Name": "Chin, Haka"
    },
    {
      "Id": "cnh",
      "Print_Name": "Hakha Chin",
      "Inverted_Name": "Chin, Hakha"
    },
    {
      "Id": "cni",
      "Print_Name": "Asháninka",
      "Inverted_Name": "Asháninka"
    },
    {
      "Id": "cnk",
      "Print_Name": "Khumi Chin",
      "Inverted_Name": "Chin, Khumi"
    },
    {
      "Id": "cnl",
      "Print_Name": "Lalana Chinantec",
      "Inverted_Name": "Chinantec, Lalana"
    },
    {
      "Id": "cno",
      "Print_Name": "Con",
      "Inverted_Name": "Con"
    },
    {
      "Id": "cnp",
      "Print_Name": "Northern Ping Chinese",
      "Inverted_Name": "Chinese, Northern Ping"
    },
    {
      "Id": "cnp",
      "Print_Name": "Northern Pinghua",
      "Inverted_Name": "Pinghua, Northern"
    },
    {
      "Id": "cnq",
      "Print_Name": "Chung",
      "Inverted_Name": "Chung"
    },
    {
      "Id": "cnr",
      "Print_Name": "Montenegrin",
      "Inverted_Name": "Montenegrin"
    },
    {
      "Id": "cns",
      "Print_Name": "Central Asmat",
      "Inverted_Name": "Asmat, Central"
    },
    {
      "Id": "cnt",
      "Print_Name": "Tepetotutla Chinantec",
      "Inverted_Name": "Chinantec, Tepetotutla"
    },
    {
      "Id": "cnu",
      "Print_Name": "Chenoua",
      "Inverted_Name": "Chenoua"
    },
    {
      "Id": "cnw",
      "Print_Name": "Ngawn Chin",
      "Inverted_Name": "Chin, Ngawn"
    },
    {
      "Id": "cnx",
      "Print_Name": "Middle Cornish",
      "Inverted_Name": "Cornish, Middle"
    },
    {
      "Id": "coa",
      "Print_Name": "Cocos Islands Malay",
      "Inverted_Name": "Malay, Cocos Islands"
    },
    {
      "Id": "cob",
      "Print_Name": "Chicomuceltec",
      "Inverted_Name": "Chicomuceltec"
    },
    {
      "Id": "coc",
      "Print_Name": "Cocopa",
      "Inverted_Name": "Cocopa"
    },
    {
      "Id": "cod",
      "Print_Name": "Cocama-Cocamilla",
      "Inverted_Name": "Cocama-Cocamilla"
    },
    {
      "Id": "coe",
      "Print_Name": "Koreguaje",
      "Inverted_Name": "Koreguaje"
    },
    {
      "Id": "cof",
      "Print_Name": "Colorado",
      "Inverted_Name": "Colorado"
    },
    {
      "Id": "cog",
      "Print_Name": "Chong",
      "Inverted_Name": "Chong"
    },
    {
      "Id": "coh",
      "Print_Name": "Chichonyi-Chidzihana-Chikauma",
      "Inverted_Name": "Chichonyi-Chidzihana-Chikauma"
    },
    {
      "Id": "coh",
      "Print_Name": "Chonyi-Dzihana-Kauma",
      "Inverted_Name": "Chonyi-Dzihana-Kauma"
    },
    {
      "Id": "coj",
      "Print_Name": "Cochimi",
      "Inverted_Name": "Cochimi"
    },
    {
      "Id": "cok",
      "Print_Name": "Santa Teresa Cora",
      "Inverted_Name": "Cora, Santa Teresa"
    },
    {
      "Id": "col",
      "Print_Name": "Columbia-Wenatchi",
      "Inverted_Name": "Columbia-Wenatchi"
    },
    {
      "Id": "com",
      "Print_Name": "Comanche",
      "Inverted_Name": "Comanche"
    },
    {
      "Id": "con",
      "Print_Name": "Cofán",
      "Inverted_Name": "Cofán"
    },
    {
      "Id": "coo",
      "Print_Name": "Comox",
      "Inverted_Name": "Comox"
    },
    {
      "Id": "cop",
      "Print_Name": "Coptic",
      "Inverted_Name": "Coptic"
    },
    {
      "Id": "coq",
      "Print_Name": "Coquille",
      "Inverted_Name": "Coquille"
    },
    {
      "Id": "cor",
      "Print_Name": "Cornish",
      "Inverted_Name": "Cornish"
    },
    {
      "Id": "cos",
      "Print_Name": "Corsican",
      "Inverted_Name": "Corsican"
    },
    {
      "Id": "cot",
      "Print_Name": "Caquinte",
      "Inverted_Name": "Caquinte"
    },
    {
      "Id": "cou",
      "Print_Name": "Wamey",
      "Inverted_Name": "Wamey"
    },
    {
      "Id": "cov",
      "Print_Name": "Cao Miao",
      "Inverted_Name": "Cao Miao"
    },
    {
      "Id": "cow",
      "Print_Name": "Cowlitz",
      "Inverted_Name": "Cowlitz"
    },
    {
      "Id": "cox",
      "Print_Name": "Nanti",
      "Inverted_Name": "Nanti"
    },
    {
      "Id": "coz",
      "Print_Name": "Chochotec",
      "Inverted_Name": "Chochotec"
    },
    {
      "Id": "cpa",
      "Print_Name": "Palantla Chinantec",
      "Inverted_Name": "Chinantec, Palantla"
    },
    {
      "Id": "cpb",
      "Print_Name": "Ucayali-Yurúa Ashéninka",
      "Inverted_Name": "Ashéninka, Ucayali-Yurúa"
    },
    {
      "Id": "cpc",
      "Print_Name": "Ajyíninka Apurucayali",
      "Inverted_Name": "Ajyíninka Apurucayali"
    },
    {
      "Id": "cpg",
      "Print_Name": "Cappadocian Greek",
      "Inverted_Name": "Greek, Cappadocian"
    },
    {
      "Id": "cpi",
      "Print_Name": "Chinese Pidgin English",
      "Inverted_Name": "Pidgin English, Chinese"
    },
    {
      "Id": "cpn",
      "Print_Name": "Cherepon",
      "Inverted_Name": "Cherepon"
    },
    {
      "Id": "cpo",
      "Print_Name": "Kpeego",
      "Inverted_Name": "Kpeego"
    },
    {
      "Id": "cps",
      "Print_Name": "Capiznon",
      "Inverted_Name": "Capiznon"
    },
    {
      "Id": "cpu",
      "Print_Name": "Pichis Ashéninka",
      "Inverted_Name": "Ashéninka, Pichis"
    },
    {
      "Id": "cpx",
      "Print_Name": "Pu-Xian Chinese",
      "Inverted_Name": "Chinese, Pu-Xian"
    },
    {
      "Id": "cpy",
      "Print_Name": "South Ucayali Ashéninka",
      "Inverted_Name": "Ashéninka, South Ucayali"
    },
    {
      "Id": "cqd",
      "Print_Name": "Chuanqiandian Cluster Miao",
      "Inverted_Name": "Miao, Chuanqiandian Cluster"
    },
    {
      "Id": "cra",
      "Print_Name": "Chara",
      "Inverted_Name": "Chara"
    },
    {
      "Id": "crb",
      "Print_Name": "Island Carib",
      "Inverted_Name": "Carib, Island"
    },
    {
      "Id": "crc",
      "Print_Name": "Lonwolwol",
      "Inverted_Name": "Lonwolwol"
    },
    {
      "Id": "crd",
      "Print_Name": "Coeur d'Alene",
      "Inverted_Name": "Coeur d'Alene"
    },
    {
      "Id": "cre",
      "Print_Name": "Cree",
      "Inverted_Name": "Cree"
    },
    {
      "Id": "crf",
      "Print_Name": "Caramanta",
      "Inverted_Name": "Caramanta"
    },
    {
      "Id": "crg",
      "Print_Name": "Michif",
      "Inverted_Name": "Michif"
    },
    {
      "Id": "crh",
      "Print_Name": "Crimean Tatar",
      "Inverted_Name": "Tatar, Crimean"
    },
    {
      "Id": "crh",
      "Print_Name": "Crimean Turkish",
      "Inverted_Name": "Turkish, Crimean"
    },
    {
      "Id": "cri",
      "Print_Name": "Sãotomense",
      "Inverted_Name": "Sãotomense"
    },
    {
      "Id": "crj",
      "Print_Name": "Southern East Cree",
      "Inverted_Name": "Cree, Southern East"
    },
    {
      "Id": "crk",
      "Print_Name": "Plains Cree",
      "Inverted_Name": "Cree, Plains"
    },
    {
      "Id": "crl",
      "Print_Name": "Northern East Cree",
      "Inverted_Name": "Cree, Northern East"
    },
    {
      "Id": "crm",
      "Print_Name": "Moose Cree",
      "Inverted_Name": "Cree, Moose"
    },
    {
      "Id": "crn",
      "Print_Name": "El Nayar Cora",
      "Inverted_Name": "Cora, El Nayar"
    },
    {
      "Id": "cro",
      "Print_Name": "Crow",
      "Inverted_Name": "Crow"
    },
    {
      "Id": "crq",
      "Print_Name": "Iyo'wujwa Chorote",
      "Inverted_Name": "Chorote, Iyo'wujwa"
    },
    {
      "Id": "crr",
      "Print_Name": "Carolina Algonquian",
      "Inverted_Name": "Algonquian, Carolina"
    },
    {
      "Id": "crs",
      "Print_Name": "Seselwa Creole French",
      "Inverted_Name": "Creole French, Seselwa"
    },
    {
      "Id": "crt",
      "Print_Name": "Iyojwa'ja Chorote",
      "Inverted_Name": "Chorote, Iyojwa'ja"
    },
    {
      "Id": "crv",
      "Print_Name": "Chaura",
      "Inverted_Name": "Chaura"
    },
    {
      "Id": "crw",
      "Print_Name": "Chrau",
      "Inverted_Name": "Chrau"
    },
    {
      "Id": "crx",
      "Print_Name": "Carrier",
      "Inverted_Name": "Carrier"
    },
    {
      "Id": "cry",
      "Print_Name": "Cori",
      "Inverted_Name": "Cori"
    },
    {
      "Id": "crz",
      "Print_Name": "Cruzeño",
      "Inverted_Name": "Cruzeño"
    },
    {
      "Id": "csa",
      "Print_Name": "Chiltepec Chinantec",
      "Inverted_Name": "Chinantec, Chiltepec"
    },
    {
      "Id": "csb",
      "Print_Name": "Kashubian",
      "Inverted_Name": "Kashubian"
    },
    {
      "Id": "csc",
      "Print_Name": "Catalan Sign Language",
      "Inverted_Name": "Catalan Sign Language"
    },
    {
      "Id": "csc",
      "Print_Name": "Lengua de señas catalana",
      "Inverted_Name": "Lengua de señas catalana"
    },
    {
      "Id": "csc",
      "Print_Name": "Llengua de Signes Catalana",
      "Inverted_Name": "Llengua de Signes Catalana"
    },
    {
      "Id": "csd",
      "Print_Name": "Chiangmai Sign Language",
      "Inverted_Name": "Chiangmai Sign Language"
    },
    {
      "Id": "cse",
      "Print_Name": "Czech Sign Language",
      "Inverted_Name": "Czech Sign Language"
    },
    {
      "Id": "csf",
      "Print_Name": "Cuba Sign Language",
      "Inverted_Name": "Cuba Sign Language"
    },
    {
      "Id": "csg",
      "Print_Name": "Chilean Sign Language",
      "Inverted_Name": "Chilean Sign Language"
    },
    {
      "Id": "csh",
      "Print_Name": "Asho Chin",
      "Inverted_Name": "Chin, Asho"
    },
    {
      "Id": "csi",
      "Print_Name": "Coast Miwok",
      "Inverted_Name": "Miwok, Coast"
    },
    {
      "Id": "csj",
      "Print_Name": "Songlai Chin",
      "Inverted_Name": "Chin, Songlai"
    },
    {
      "Id": "csk",
      "Print_Name": "Jola-Kasa",
      "Inverted_Name": "Jola-Kasa"
    },
    {
      "Id": "csl",
      "Print_Name": "Chinese Sign Language",
      "Inverted_Name": "Chinese Sign Language"
    },
    {
      "Id": "csm",
      "Print_Name": "Central Sierra Miwok",
      "Inverted_Name": "Miwok, Central Sierra"
    },
    {
      "Id": "csn",
      "Print_Name": "Colombian Sign Language",
      "Inverted_Name": "Colombian Sign Language"
    },
    {
      "Id": "cso",
      "Print_Name": "Sochiapam Chinantec",
      "Inverted_Name": "Chinantec, Sochiapam"
    },
    {
      "Id": "cso",
      "Print_Name": "Sochiapan Chinantec",
      "Inverted_Name": "Chinantec, Sochiapan"
    },
    {
      "Id": "csp",
      "Print_Name": "Southern Ping Chinese",
      "Inverted_Name": "Chinese, Southern Ping"
    },
    {
      "Id": "csp",
      "Print_Name": "Southern Pinghua",
      "Inverted_Name": "Pinghua, Southern"
    },
    {
      "Id": "csq",
      "Print_Name": "Croatia Sign Language",
      "Inverted_Name": "Croatia Sign Language"
    },
    {
      "Id": "csr",
      "Print_Name": "Costa Rican Sign Language",
      "Inverted_Name": "Costa Rican Sign Language"
    },
    {
      "Id": "css",
      "Print_Name": "Southern Ohlone",
      "Inverted_Name": "Ohlone, Southern"
    },
    {
      "Id": "cst",
      "Print_Name": "Northern Ohlone",
      "Inverted_Name": "Ohlone, Northern"
    },
    {
      "Id": "csv",
      "Print_Name": "Sumtu Chin",
      "Inverted_Name": "Chin, Sumtu"
    },
    {
      "Id": "csw",
      "Print_Name": "Swampy Cree",
      "Inverted_Name": "Cree, Swampy"
    },
    {
      "Id": "csx",
      "Print_Name": "Cambodian Sign Language",
      "Inverted_Name": "Cambodian Sign Language"
    },
    {
      "Id": "csy",
      "Print_Name": "Siyin Chin",
      "Inverted_Name": "Chin, Siyin"
    },
    {
      "Id": "csz",
      "Print_Name": "Coos",
      "Inverted_Name": "Coos"
    },
    {
      "Id": "cta",
      "Print_Name": "Tataltepec Chatino",
      "Inverted_Name": "Chatino, Tataltepec"
    },
    {
      "Id": "ctc",
      "Print_Name": "Chetco",
      "Inverted_Name": "Chetco"
    },
    {
      "Id": "ctd",
      "Print_Name": "Tedim Chin",
      "Inverted_Name": "Chin, Tedim"
    },
    {
      "Id": "cte",
      "Print_Name": "Tepinapa Chinantec",
      "Inverted_Name": "Chinantec, Tepinapa"
    },
    {
      "Id": "ctg",
      "Print_Name": "Chittagonian",
      "Inverted_Name": "Chittagonian"
    },
    {
      "Id": "cth",
      "Print_Name": "Thaiphum Chin",
      "Inverted_Name": "Chin, Thaiphum"
    },
    {
      "Id": "ctl",
      "Print_Name": "Tlacoatzintepec Chinantec",
      "Inverted_Name": "Chinantec, Tlacoatzintepec"
    },
    {
      "Id": "ctm",
      "Print_Name": "Chitimacha",
      "Inverted_Name": "Chitimacha"
    },
    {
      "Id": "ctn",
      "Print_Name": "Chhintange",
      "Inverted_Name": "Chhintange"
    },
    {
      "Id": "cto",
      "Print_Name": "Emberá-Catío",
      "Inverted_Name": "Emberá-Catío"
    },
    {
      "Id": "ctp",
      "Print_Name": "Western Highland Chatino",
      "Inverted_Name": "Chatino, Western Highland"
    },
    {
      "Id": "cts",
      "Print_Name": "Northern Catanduanes Bikol",
      "Inverted_Name": "Bikol, Northern Catanduanes"
    },
    {
      "Id": "ctt",
      "Print_Name": "Wayanad Chetti",
      "Inverted_Name": "Chetti, Wayanad"
    },
    {
      "Id": "ctu",
      "Print_Name": "Chol",
      "Inverted_Name": "Chol"
    },
    {
      "Id": "cty",
      "Print_Name": "Moundadan Chetty",
      "Inverted_Name": "Moundadan Chetty"
    },
    {
      "Id": "ctz",
      "Print_Name": "Zacatepec Chatino",
      "Inverted_Name": "Chatino, Zacatepec"
    },
    {
      "Id": "cua",
      "Print_Name": "Cua",
      "Inverted_Name": "Cua"
    },
    {
      "Id": "cub",
      "Print_Name": "Cubeo",
      "Inverted_Name": "Cubeo"
    },
    {
      "Id": "cuc",
      "Print_Name": "Usila Chinantec",
      "Inverted_Name": "Chinantec, Usila"
    },
    {
      "Id": "cuh",
      "Print_Name": "Chuka",
      "Inverted_Name": "Chuka"
    },
    {
      "Id": "cuh",
      "Print_Name": "Gichuka",
      "Inverted_Name": "Gichuka"
    },
    {
      "Id": "cui",
      "Print_Name": "Cuiba",
      "Inverted_Name": "Cuiba"
    },
    {
      "Id": "cuj",
      "Print_Name": "Mashco Piro",
      "Inverted_Name": "Mashco Piro"
    },
    {
      "Id": "cuk",
      "Print_Name": "San Blas Kuna",
      "Inverted_Name": "Kuna, San Blas"
    },
    {
      "Id": "cul",
      "Print_Name": "Culina",
      "Inverted_Name": "Culina"
    },
    {
      "Id": "cul",
      "Print_Name": "Kulina",
      "Inverted_Name": "Kulina"
    },
    {
      "Id": "cuo",
      "Print_Name": "Cumanagoto",
      "Inverted_Name": "Cumanagoto"
    },
    {
      "Id": "cup",
      "Print_Name": "Cupeño",
      "Inverted_Name": "Cupeño"
    },
    {
      "Id": "cuq",
      "Print_Name": "Cun",
      "Inverted_Name": "Cun"
    },
    {
      "Id": "cur",
      "Print_Name": "Chhulung",
      "Inverted_Name": "Chhulung"
    },
    {
      "Id": "cut",
      "Print_Name": "Teutila Cuicatec",
      "Inverted_Name": "Cuicatec, Teutila"
    },
    {
      "Id": "cuu",
      "Print_Name": "Tai Ya",
      "Inverted_Name": "Tai Ya"
    },
    {
      "Id": "cuv",
      "Print_Name": "Cuvok",
      "Inverted_Name": "Cuvok"
    },
    {
      "Id": "cuw",
      "Print_Name": "Chukwa",
      "Inverted_Name": "Chukwa"
    },
    {
      "Id": "cux",
      "Print_Name": "Tepeuxila Cuicatec",
      "Inverted_Name": "Cuicatec, Tepeuxila"
    },
    {
      "Id": "cuy",
      "Print_Name": "Cuitlatec",
      "Inverted_Name": "Cuitlatec"
    },
    {
      "Id": "cvg",
      "Print_Name": "Chug",
      "Inverted_Name": "Chug"
    },
    {
      "Id": "cvn",
      "Print_Name": "Valle Nacional Chinantec",
      "Inverted_Name": "Chinantec, Valle Nacional"
    },
    {
      "Id": "cwa",
      "Print_Name": "Kabwa",
      "Inverted_Name": "Kabwa"
    },
    {
      "Id": "cwb",
      "Print_Name": "Maindo",
      "Inverted_Name": "Maindo"
    },
    {
      "Id": "cwd",
      "Print_Name": "Woods Cree",
      "Inverted_Name": "Cree, Woods"
    },
    {
      "Id": "cwe",
      "Print_Name": "Kwere",
      "Inverted_Name": "Kwere"
    },
    {
      "Id": "cwg",
      "Print_Name": "Cheq Wong",
      "Inverted_Name": "Cheq Wong"
    },
    {
      "Id": "cwg",
      "Print_Name": "Chewong",
      "Inverted_Name": "Chewong"
    },
    {
      "Id": "cwt",
      "Print_Name": "Kuwaataay",
      "Inverted_Name": "Kuwaataay"
    },
    {
      "Id": "cxh",
      "Print_Name": "Cha'ari",
      "Inverted_Name": "Cha'ari"
    },
    {
      "Id": "cya",
      "Print_Name": "Nopala Chatino",
      "Inverted_Name": "Chatino, Nopala"
    },
    {
      "Id": "cyb",
      "Print_Name": "Cayubaba",
      "Inverted_Name": "Cayubaba"
    },
    {
      "Id": "cym",
      "Print_Name": "Welsh",
      "Inverted_Name": "Welsh"
    },
    {
      "Id": "cyo",
      "Print_Name": "Cuyonon",
      "Inverted_Name": "Cuyonon"
    },
    {
      "Id": "czh",
      "Print_Name": "Huizhou Chinese",
      "Inverted_Name": "Chinese, Huizhou"
    },
    {
      "Id": "czk",
      "Print_Name": "Knaanic",
      "Inverted_Name": "Knaanic"
    },
    {
      "Id": "czn",
      "Print_Name": "Zenzontepec Chatino",
      "Inverted_Name": "Chatino, Zenzontepec"
    },
    {
      "Id": "czo",
      "Print_Name": "Min Zhong Chinese",
      "Inverted_Name": "Chinese, Min Zhong"
    },
    {
      "Id": "czt",
      "Print_Name": "Zotung Chin",
      "Inverted_Name": "Chin, Zotung"
    },
    {
      "Id": "daa",
      "Print_Name": "Dangaléat",
      "Inverted_Name": "Dangaléat"
    },
    {
      "Id": "dac",
      "Print_Name": "Dambi",
      "Inverted_Name": "Dambi"
    },
    {
      "Id": "dad",
      "Print_Name": "Marik",
      "Inverted_Name": "Marik"
    },
    {
      "Id": "dae",
      "Print_Name": "Duupa",
      "Inverted_Name": "Duupa"
    },
    {
      "Id": "dag",
      "Print_Name": "Dagbani",
      "Inverted_Name": "Dagbani"
    },
    {
      "Id": "dah",
      "Print_Name": "Gwahatike",
      "Inverted_Name": "Gwahatike"
    },
    {
      "Id": "dai",
      "Print_Name": "Day",
      "Inverted_Name": "Day"
    },
    {
      "Id": "daj",
      "Print_Name": "Dar Fur Daju",
      "Inverted_Name": "Daju, Dar Fur"
    },
    {
      "Id": "dak",
      "Print_Name": "Dakota",
      "Inverted_Name": "Dakota"
    },
    {
      "Id": "dal",
      "Print_Name": "Dahalo",
      "Inverted_Name": "Dahalo"
    },
    {
      "Id": "dam",
      "Print_Name": "Damakawa",
      "Inverted_Name": "Damakawa"
    },
    {
      "Id": "dan",
      "Print_Name": "Danish",
      "Inverted_Name": "Danish"
    },
    {
      "Id": "dao",
      "Print_Name": "Daai Chin",
      "Inverted_Name": "Chin, Daai"
    },
    {
      "Id": "daq",
      "Print_Name": "Dandami Maria",
      "Inverted_Name": "Maria, Dandami"
    },
    {
      "Id": "dar",
      "Print_Name": "Dargwa",
      "Inverted_Name": "Dargwa"
    },
    {
      "Id": "das",
      "Print_Name": "Daho-Doo",
      "Inverted_Name": "Daho-Doo"
    },
    {
      "Id": "dau",
      "Print_Name": "Dar Sila Daju",
      "Inverted_Name": "Daju, Dar Sila"
    },
    {
      "Id": "dav",
      "Print_Name": "Dawida",
      "Inverted_Name": "Dawida"
    },
    {
      "Id": "dav",
      "Print_Name": "Taita",
      "Inverted_Name": "Taita"
    },
    {
      "Id": "daw",
      "Print_Name": "Davawenyo",
      "Inverted_Name": "Davawenyo"
    },
    {
      "Id": "dax",
      "Print_Name": "Dayi",
      "Inverted_Name": "Dayi"
    },
    {
      "Id": "daz",
      "Print_Name": "Dao",
      "Inverted_Name": "Dao"
    },
    {
      "Id": "dba",
      "Print_Name": "Bangime",
      "Inverted_Name": "Bangime"
    },
    {
      "Id": "dbb",
      "Print_Name": "Deno",
      "Inverted_Name": "Deno"
    },
    {
      "Id": "dbd",
      "Print_Name": "Dadiya",
      "Inverted_Name": "Dadiya"
    },
    {
      "Id": "dbe",
      "Print_Name": "Dabe",
      "Inverted_Name": "Dabe"
    },
    {
      "Id": "dbf",
      "Print_Name": "Edopi",
      "Inverted_Name": "Edopi"
    },
    {
      "Id": "dbg",
      "Print_Name": "Dogul Dom Dogon",
      "Inverted_Name": "Dogon, Dogul Dom"
    },
    {
      "Id": "dbi",
      "Print_Name": "Doka",
      "Inverted_Name": "Doka"
    },
    {
      "Id": "dbj",
      "Print_Name": "Ida'an",
      "Inverted_Name": "Ida'an"
    },
    {
      "Id": "dbl",
      "Print_Name": "Dyirbal",
      "Inverted_Name": "Dyirbal"
    },
    {
      "Id": "dbm",
      "Print_Name": "Duguri",
      "Inverted_Name": "Duguri"
    },
    {
      "Id": "dbn",
      "Print_Name": "Duriankere",
      "Inverted_Name": "Duriankere"
    },
    {
      "Id": "dbo",
      "Print_Name": "Dulbu",
      "Inverted_Name": "Dulbu"
    },
    {
      "Id": "dbp",
      "Print_Name": "Duwai",
      "Inverted_Name": "Duwai"
    },
    {
      "Id": "dbq",
      "Print_Name": "Daba",
      "Inverted_Name": "Daba"
    },
    {
      "Id": "dbr",
      "Print_Name": "Dabarre",
      "Inverted_Name": "Dabarre"
    },
    {
      "Id": "dbt",
      "Print_Name": "Ben Tey Dogon",
      "Inverted_Name": "Dogon, Ben Tey"
    },
    {
      "Id": "dbu",
      "Print_Name": "Bondum Dom Dogon",
      "Inverted_Name": "Dogon, Bondum Dom"
    },
    {
      "Id": "dbv",
      "Print_Name": "Dungu",
      "Inverted_Name": "Dungu"
    },
    {
      "Id": "dbw",
      "Print_Name": "Bankan Tey Dogon",
      "Inverted_Name": "Dogon, Bankan Tey"
    },
    {
      "Id": "dby",
      "Print_Name": "Dibiyaso",
      "Inverted_Name": "Dibiyaso"
    },
    {
      "Id": "dcc",
      "Print_Name": "Deccan",
      "Inverted_Name": "Deccan"
    },
    {
      "Id": "dcr",
      "Print_Name": "Negerhollands",
      "Inverted_Name": "Negerhollands"
    },
    {
      "Id": "dda",
      "Print_Name": "Dadi Dadi",
      "Inverted_Name": "Dadi Dadi"
    },
    {
      "Id": "ddd",
      "Print_Name": "Dongotono",
      "Inverted_Name": "Dongotono"
    },
    {
      "Id": "dde",
      "Print_Name": "Doondo",
      "Inverted_Name": "Doondo"
    },
    {
      "Id": "ddg",
      "Print_Name": "Fataluku",
      "Inverted_Name": "Fataluku"
    },
    {
      "Id": "ddi",
      "Print_Name": "West Goodenough",
      "Inverted_Name": "Goodenough, West"
    },
    {
      "Id": "ddj",
      "Print_Name": "Jaru",
      "Inverted_Name": "Jaru"
    },
    {
      "Id": "ddn",
      "Print_Name": "Dendi (Benin)",
      "Inverted_Name": "Dendi (Benin)"
    },
    {
      "Id": "ddo",
      "Print_Name": "Dido",
      "Inverted_Name": "Dido"
    },
    {
      "Id": "ddr",
      "Print_Name": "Dhudhuroa",
      "Inverted_Name": "Dhudhuroa"
    },
    {
      "Id": "dds",
      "Print_Name": "Donno So Dogon",
      "Inverted_Name": "Dogon, Donno So"
    },
    {
      "Id": "ddw",
      "Print_Name": "Dawera-Daweloor",
      "Inverted_Name": "Dawera-Daweloor"
    },
    {
      "Id": "dec",
      "Print_Name": "Dagik",
      "Inverted_Name": "Dagik"
    },
    {
      "Id": "ded",
      "Print_Name": "Dedua",
      "Inverted_Name": "Dedua"
    },
    {
      "Id": "dee",
      "Print_Name": "Dewoin",
      "Inverted_Name": "Dewoin"
    },
    {
      "Id": "def",
      "Print_Name": "Dezfuli",
      "Inverted_Name": "Dezfuli"
    },
    {
      "Id": "deg",
      "Print_Name": "Degema",
      "Inverted_Name": "Degema"
    },
    {
      "Id": "deh",
      "Print_Name": "Dehwari",
      "Inverted_Name": "Dehwari"
    },
    {
      "Id": "dei",
      "Print_Name": "Demisa",
      "Inverted_Name": "Demisa"
    },
    {
      "Id": "dek",
      "Print_Name": "Dek",
      "Inverted_Name": "Dek"
    },
    {
      "Id": "del",
      "Print_Name": "Delaware",
      "Inverted_Name": "Delaware"
    },
    {
      "Id": "dem",
      "Print_Name": "Dem",
      "Inverted_Name": "Dem"
    },
    {
      "Id": "den",
      "Print_Name": "Slave (Athapascan)",
      "Inverted_Name": "Slave (Athapascan)"
    },
    {
      "Id": "dep",
      "Print_Name": "Pidgin Delaware",
      "Inverted_Name": "Delaware, Pidgin"
    },
    {
      "Id": "deq",
      "Print_Name": "Dendi (Central African Republic)",
      "Inverted_Name": "Dendi (Central African Republic)"
    },
    {
      "Id": "der",
      "Print_Name": "Deori",
      "Inverted_Name": "Deori"
    },
    {
      "Id": "des",
      "Print_Name": "Desano",
      "Inverted_Name": "Desano"
    },
    {
      "Id": "deu",
      "Print_Name": "German",
      "Inverted_Name": "German"
    },
    {
      "Id": "dev",
      "Print_Name": "Domung",
      "Inverted_Name": "Domung"
    },
    {
      "Id": "dez",
      "Print_Name": "Dengese",
      "Inverted_Name": "Dengese"
    },
    {
      "Id": "dga",
      "Print_Name": "Southern Dagaare",
      "Inverted_Name": "Dagaare, Southern"
    },
    {
      "Id": "dgb",
      "Print_Name": "Bunoge Dogon",
      "Inverted_Name": "Dogon, Bunoge"
    },
    {
      "Id": "dgc",
      "Print_Name": "Casiguran Dumagat Agta",
      "Inverted_Name": "Agta, Casiguran Dumagat"
    },
    {
      "Id": "dgd",
      "Print_Name": "Dagaari Dioula",
      "Inverted_Name": "Dagaari Dioula"
    },
    {
      "Id": "dge",
      "Print_Name": "Degenan",
      "Inverted_Name": "Degenan"
    },
    {
      "Id": "dgg",
      "Print_Name": "Doga",
      "Inverted_Name": "Doga"
    },
    {
      "Id": "dgh",
      "Print_Name": "Dghwede",
      "Inverted_Name": "Dghwede"
    },
    {
      "Id": "dgi",
      "Print_Name": "Northern Dagara",
      "Inverted_Name": "Dagara, Northern"
    },
    {
      "Id": "dgk",
      "Print_Name": "Dagba",
      "Inverted_Name": "Dagba"
    },
    {
      "Id": "dgl",
      "Print_Name": "Andaandi",
      "Inverted_Name": "Andaandi"
    },
    {
      "Id": "dgl",
      "Print_Name": "Dongolawi",
      "Inverted_Name": "Dongolawi"
    },
    {
      "Id": "dgn",
      "Print_Name": "Dagoman",
      "Inverted_Name": "Dagoman"
    },
    {
      "Id": "dgo",
      "Print_Name": "Dogri (individual language)",
      "Inverted_Name": "Dogri (individual language)"
    },
    {
      "Id": "dgr",
      "Print_Name": "Dogrib",
      "Inverted_Name": "Dogrib"
    },
    {
      "Id": "dgr",
      "Print_Name": "Tłı̨chǫ",
      "Inverted_Name": "Tłı̨chǫ"
    },
    {
      "Id": "dgs",
      "Print_Name": "Dogoso",
      "Inverted_Name": "Dogoso"
    },
    {
      "Id": "dgt",
      "Print_Name": "Ndra'ngith",
      "Inverted_Name": "Ndra'ngith"
    },
    {
      "Id": "dgw",
      "Print_Name": "Daungwurrung",
      "Inverted_Name": "Daungwurrung"
    },
    {
      "Id": "dgx",
      "Print_Name": "Doghoro",
      "Inverted_Name": "Doghoro"
    },
    {
      "Id": "dgz",
      "Print_Name": "Daga",
      "Inverted_Name": "Daga"
    },
    {
      "Id": "dhd",
      "Print_Name": "Dhundari",
      "Inverted_Name": "Dhundari"
    },
    {
      "Id": "dhg",
      "Print_Name": "Dhangu",
      "Inverted_Name": "Dhangu"
    },
    {
      "Id": "dhg",
      "Print_Name": "Dhangu-Djangu",
      "Inverted_Name": "Dhangu-Djangu"
    },
    {
      "Id": "dhg",
      "Print_Name": "Djangu",
      "Inverted_Name": "Djangu"
    },
    {
      "Id": "dhi",
      "Print_Name": "Dhimal",
      "Inverted_Name": "Dhimal"
    },
    {
      "Id": "dhl",
      "Print_Name": "Dhalandji",
      "Inverted_Name": "Dhalandji"
    },
    {
      "Id": "dhm",
      "Print_Name": "Zemba",
      "Inverted_Name": "Zemba"
    },
    {
      "Id": "dhn",
      "Print_Name": "Dhanki",
      "Inverted_Name": "Dhanki"
    },
    {
      "Id": "dho",
      "Print_Name": "Dhodia",
      "Inverted_Name": "Dhodia"
    },
    {
      "Id": "dhr",
      "Print_Name": "Dhargari",
      "Inverted_Name": "Dhargari"
    },
    {
      "Id": "dhs",
      "Print_Name": "Dhaiso",
      "Inverted_Name": "Dhaiso"
    },
    {
      "Id": "dhu",
      "Print_Name": "Dhurga",
      "Inverted_Name": "Dhurga"
    },
    {
      "Id": "dhv",
      "Print_Name": "Dehu",
      "Inverted_Name": "Dehu"
    },
    {
      "Id": "dhv",
      "Print_Name": "Drehu",
      "Inverted_Name": "Drehu"
    },
    {
      "Id": "dhw",
      "Print_Name": "Dhanwar (Nepal)",
      "Inverted_Name": "Dhanwar (Nepal)"
    },
    {
      "Id": "dhx",
      "Print_Name": "Dhungaloo",
      "Inverted_Name": "Dhungaloo"
    },
    {
      "Id": "dia",
      "Print_Name": "Dia",
      "Inverted_Name": "Dia"
    },
    {
      "Id": "dib",
      "Print_Name": "South Central Dinka",
      "Inverted_Name": "Dinka, South Central"
    },
    {
      "Id": "dic",
      "Print_Name": "Lakota Dida",
      "Inverted_Name": "Dida, Lakota"
    },
    {
      "Id": "did",
      "Print_Name": "Didinga",
      "Inverted_Name": "Didinga"
    },
    {
      "Id": "dif",
      "Print_Name": "Dieri",
      "Inverted_Name": "Dieri"
    },
    {
      "Id": "dif",
      "Print_Name": "Diyari",
      "Inverted_Name": "Diyari"
    },
    {
      "Id": "dig",
      "Print_Name": "Chidigo",
      "Inverted_Name": "Chidigo"
    },
    {
      "Id": "dig",
      "Print_Name": "Digo",
      "Inverted_Name": "Digo"
    },
    {
      "Id": "dih",
      "Print_Name": "Kumiai",
      "Inverted_Name": "Kumiai"
    },
    {
      "Id": "dii",
      "Print_Name": "Dimbong",
      "Inverted_Name": "Dimbong"
    },
    {
      "Id": "dij",
      "Print_Name": "Dai",
      "Inverted_Name": "Dai"
    },
    {
      "Id": "dik",
      "Print_Name": "Southwestern Dinka",
      "Inverted_Name": "Dinka, Southwestern"
    },
    {
      "Id": "dil",
      "Print_Name": "Dilling",
      "Inverted_Name": "Dilling"
    },
    {
      "Id": "dim",
      "Print_Name": "Dime",
      "Inverted_Name": "Dime"
    },
    {
      "Id": "din",
      "Print_Name": "Dinka",
      "Inverted_Name": "Dinka"
    },
    {
      "Id": "dio",
      "Print_Name": "Dibo",
      "Inverted_Name": "Dibo"
    },
    {
      "Id": "dip",
      "Print_Name": "Northeastern Dinka",
      "Inverted_Name": "Dinka, Northeastern"
    },
    {
      "Id": "diq",
      "Print_Name": "Dimli (individual language)",
      "Inverted_Name": "Dimli (individual language)"
    },
    {
      "Id": "dir",
      "Print_Name": "Dirim",
      "Inverted_Name": "Dirim"
    },
    {
      "Id": "dis",
      "Print_Name": "Dimasa",
      "Inverted_Name": "Dimasa"
    },
    {
      "Id": "diu",
      "Print_Name": "Diriku",
      "Inverted_Name": "Diriku"
    },
    {
      "Id": "div",
      "Print_Name": "Dhivehi",
      "Inverted_Name": "Dhivehi"
    },
    {
      "Id": "div",
      "Print_Name": "Divehi",
      "Inverted_Name": "Divehi"
    },
    {
      "Id": "div",
      "Print_Name": "Maldivian",
      "Inverted_Name": "Maldivian"
    },
    {
      "Id": "diw",
      "Print_Name": "Northwestern Dinka",
      "Inverted_Name": "Dinka, Northwestern"
    },
    {
      "Id": "dix",
      "Print_Name": "Dixon Reef",
      "Inverted_Name": "Dixon Reef"
    },
    {
      "Id": "diy",
      "Print_Name": "Diuwe",
      "Inverted_Name": "Diuwe"
    },
    {
      "Id": "diz",
      "Print_Name": "Ding",
      "Inverted_Name": "Ding"
    },
    {
      "Id": "dja",
      "Print_Name": "Djadjawurrung",
      "Inverted_Name": "Djadjawurrung"
    },
    {
      "Id": "djb",
      "Print_Name": "Djinba",
      "Inverted_Name": "Djinba"
    },
    {
      "Id": "djc",
      "Print_Name": "Dar Daju Daju",
      "Inverted_Name": "Daju, Dar Daju"
    },
    {
      "Id": "djd",
      "Print_Name": "Djamindjung",
      "Inverted_Name": "Djamindjung"
    },
    {
      "Id": "djd",
      "Print_Name": "Ngaliwurru",
      "Inverted_Name": "Ngaliwurru"
    },
    {
      "Id": "dje",
      "Print_Name": "Zarma",
      "Inverted_Name": "Zarma"
    },
    {
      "Id": "djf",
      "Print_Name": "Djangun",
      "Inverted_Name": "Djangun"
    },
    {
      "Id": "dji",
      "Print_Name": "Djinang",
      "Inverted_Name": "Djinang"
    },
    {
      "Id": "djj",
      "Print_Name": "Djeebbana",
      "Inverted_Name": "Djeebbana"
    },
    {
      "Id": "djk",
      "Print_Name": "Businenge Tongo",
      "Inverted_Name": "Businenge Tongo"
    },
    {
      "Id": "djk",
      "Print_Name": "Eastern Maroon Creole",
      "Inverted_Name": "Eastern Maroon Creole"
    },
    {
      "Id": "djk",
      "Print_Name": "Nenge",
      "Inverted_Name": "Nenge"
    },
    {
      "Id": "djm",
      "Print_Name": "Jamsay Dogon",
      "Inverted_Name": "Dogon, Jamsay"
    },
    {
      "Id": "djn",
      "Print_Name": "Djauan",
      "Inverted_Name": "Djauan"
    },
    {
      "Id": "djn",
      "Print_Name": "Jawoyn",
      "Inverted_Name": "Jawoyn"
    },
    {
      "Id": "djo",
      "Print_Name": "Jangkang",
      "Inverted_Name": "Jangkang"
    },
    {
      "Id": "djr",
      "Print_Name": "Djambarrpuyngu",
      "Inverted_Name": "Djambarrpuyngu"
    },
    {
      "Id": "dju",
      "Print_Name": "Kapriman",
      "Inverted_Name": "Kapriman"
    },
    {
      "Id": "djw",
      "Print_Name": "Djawi",
      "Inverted_Name": "Djawi"
    },
    {
      "Id": "dka",
      "Print_Name": "Dakpakha",
      "Inverted_Name": "Dakpakha"
    },
    {
      "Id": "dkg",
      "Print_Name": "Kadung",
      "Inverted_Name": "Kadung"
    },
    {
      "Id": "dkk",
      "Print_Name": "Dakka",
      "Inverted_Name": "Dakka"
    },
    {
      "Id": "dkr",
      "Print_Name": "Kuijau",
      "Inverted_Name": "Kuijau"
    },
    {
      "Id": "dks",
      "Print_Name": "Southeastern Dinka",
      "Inverted_Name": "Dinka, Southeastern"
    },
    {
      "Id": "dkx",
      "Print_Name": "Mazagway",
      "Inverted_Name": "Mazagway"
    },
    {
      "Id": "dlg",
      "Print_Name": "Dolgan",
      "Inverted_Name": "Dolgan"
    },
    {
      "Id": "dlk",
      "Print_Name": "Dahalik",
      "Inverted_Name": "Dahalik"
    },
    {
      "Id": "dlm",
      "Print_Name": "Dalmatian",
      "Inverted_Name": "Dalmatian"
    },
    {
      "Id": "dln",
      "Print_Name": "Darlong",
      "Inverted_Name": "Darlong"
    },
    {
      "Id": "dma",
      "Print_Name": "Duma",
      "Inverted_Name": "Duma"
    },
    {
      "Id": "dmb",
      "Print_Name": "Mombo Dogon",
      "Inverted_Name": "Dogon, Mombo"
    },
    {
      "Id": "dmc",
      "Print_Name": "Gavak",
      "Inverted_Name": "Gavak"
    },
    {
      "Id": "dmd",
      "Print_Name": "Madhi Madhi",
      "Inverted_Name": "Madhi Madhi"
    },
    {
      "Id": "dme",
      "Print_Name": "Dugwor",
      "Inverted_Name": "Dugwor"
    },
    {
      "Id": "dmf",
      "Print_Name": "Medefaidrin",
      "Inverted_Name": "Medefaidrin"
    },
    {
      "Id": "dmg",
      "Print_Name": "Upper Kinabatangan",
      "Inverted_Name": "Kinabatangan, Upper"
    },
    {
      "Id": "dmk",
      "Print_Name": "Domaaki",
      "Inverted_Name": "Domaaki"
    },
    {
      "Id": "dml",
      "Print_Name": "Dameli",
      "Inverted_Name": "Dameli"
    },
    {
      "Id": "dmm",
      "Print_Name": "Dama",
      "Inverted_Name": "Dama"
    },
    {
      "Id": "dmo",
      "Print_Name": "Kemedzung",
      "Inverted_Name": "Kemedzung"
    },
    {
      "Id": "dmr",
      "Print_Name": "East Damar",
      "Inverted_Name": "Damar, East"
    },
    {
      "Id": "dms",
      "Print_Name": "Dampelas",
      "Inverted_Name": "Dampelas"
    },
    {
      "Id": "dmu",
      "Print_Name": "Dubu",
      "Inverted_Name": "Dubu"
    },
    {
      "Id": "dmu",
      "Print_Name": "Tebi",
      "Inverted_Name": "Tebi"
    },
    {
      "Id": "dmv",
      "Print_Name": "Dumpas",
      "Inverted_Name": "Dumpas"
    },
    {
      "Id": "dmw",
      "Print_Name": "Mudburra",
      "Inverted_Name": "Mudburra"
    },
    {
      "Id": "dmx",
      "Print_Name": "Dema",
      "Inverted_Name": "Dema"
    },
    {
      "Id": "dmy",
      "Print_Name": "Demta",
      "Inverted_Name": "Demta"
    },
    {
      "Id": "dmy",
      "Print_Name": "Sowari",
      "Inverted_Name": "Sowari"
    },
    {
      "Id": "dna",
      "Print_Name": "Upper Grand Valley Dani",
      "Inverted_Name": "Dani, Upper Grand Valley"
    },
    {
      "Id": "dnd",
      "Print_Name": "Daonda",
      "Inverted_Name": "Daonda"
    },
    {
      "Id": "dne",
      "Print_Name": "Ndendeule",
      "Inverted_Name": "Ndendeule"
    },
    {
      "Id": "dng",
      "Print_Name": "Dungan",
      "Inverted_Name": "Dungan"
    },
    {
      "Id": "dni",
      "Print_Name": "Lower Grand Valley Dani",
      "Inverted_Name": "Dani, Lower Grand Valley"
    },
    {
      "Id": "dnj",
      "Print_Name": "Dan",
      "Inverted_Name": "Dan"
    },
    {
      "Id": "dnk",
      "Print_Name": "Dengka",
      "Inverted_Name": "Dengka"
    },
    {
      "Id": "dnn",
      "Print_Name": "Dzùùngoo",
      "Inverted_Name": "Dzùùngoo"
    },
    {
      "Id": "dno",
      "Print_Name": "Ndrulo",
      "Inverted_Name": "Ndrulo"
    },
    {
      "Id": "dno",
      "Print_Name": "Northern Lendu",
      "Inverted_Name": "Lendu, Northern"
    },
    {
      "Id": "dnr",
      "Print_Name": "Danaru",
      "Inverted_Name": "Danaru"
    },
    {
      "Id": "dnt",
      "Print_Name": "Mid Grand Valley Dani",
      "Inverted_Name": "Dani, Mid Grand Valley"
    },
    {
      "Id": "dnu",
      "Print_Name": "Danau",
      "Inverted_Name": "Danau"
    },
    {
      "Id": "dnv",
      "Print_Name": "Danu",
      "Inverted_Name": "Danu"
    },
    {
      "Id": "dnw",
      "Print_Name": "Western Dani",
      "Inverted_Name": "Dani, Western"
    },
    {
      "Id": "dny",
      "Print_Name": "Dení",
      "Inverted_Name": "Dení"
    },
    {
      "Id": "doa",
      "Print_Name": "Dom",
      "Inverted_Name": "Dom"
    },
    {
      "Id": "dob",
      "Print_Name": "Dobu",
      "Inverted_Name": "Dobu"
    },
    {
      "Id": "doc",
      "Print_Name": "Northern Dong",
      "Inverted_Name": "Dong, Northern"
    },
    {
      "Id": "doe",
      "Print_Name": "Doe",
      "Inverted_Name": "Doe"
    },
    {
      "Id": "dof",
      "Print_Name": "Domu",
      "Inverted_Name": "Domu"
    },
    {
      "Id": "doh",
      "Print_Name": "Dong",
      "Inverted_Name": "Dong"
    },
    {
      "Id": "doi",
      "Print_Name": "Dogri (macrolanguage)",
      "Inverted_Name": "Dogri (macrolanguage)"
    },
    {
      "Id": "dok",
      "Print_Name": "Dondo",
      "Inverted_Name": "Dondo"
    },
    {
      "Id": "dol",
      "Print_Name": "Doso",
      "Inverted_Name": "Doso"
    },
    {
      "Id": "don",
      "Print_Name": "Toura (Papua New Guinea)",
      "Inverted_Name": "Toura (Papua New Guinea)"
    },
    {
      "Id": "doo",
      "Print_Name": "Dongo",
      "Inverted_Name": "Dongo"
    },
    {
      "Id": "dop",
      "Print_Name": "Lukpa",
      "Inverted_Name": "Lukpa"
    },
    {
      "Id": "doq",
      "Print_Name": "Dominican Sign Language",
      "Inverted_Name": "Dominican Sign Language"
    },
    {
      "Id": "dor",
      "Print_Name": "Dori'o",
      "Inverted_Name": "Dori'o"
    },
    {
      "Id": "dos",
      "Print_Name": "Dogosé",
      "Inverted_Name": "Dogosé"
    },
    {
      "Id": "dot",
      "Print_Name": "Dass",
      "Inverted_Name": "Dass"
    },
    {
      "Id": "dov",
      "Print_Name": "Dombe",
      "Inverted_Name": "Dombe"
    },
    {
      "Id": "dow",
      "Print_Name": "Doyayo",
      "Inverted_Name": "Doyayo"
    },
    {
      "Id": "dox",
      "Print_Name": "Bussa",
      "Inverted_Name": "Bussa"
    },
    {
      "Id": "doy",
      "Print_Name": "Dompo",
      "Inverted_Name": "Dompo"
    },
    {
      "Id": "doz",
      "Print_Name": "Dorze",
      "Inverted_Name": "Dorze"
    },
    {
      "Id": "dpp",
      "Print_Name": "Papar",
      "Inverted_Name": "Papar"
    },
    {
      "Id": "drb",
      "Print_Name": "Dair",
      "Inverted_Name": "Dair"
    },
    {
      "Id": "drc",
      "Print_Name": "Minderico",
      "Inverted_Name": "Minderico"
    },
    {
      "Id": "drd",
      "Print_Name": "Darmiya",
      "Inverted_Name": "Darmiya"
    },
    {
      "Id": "dre",
      "Print_Name": "Dolpo",
      "Inverted_Name": "Dolpo"
    },
    {
      "Id": "drg",
      "Print_Name": "Rungus",
      "Inverted_Name": "Rungus"
    },
    {
      "Id": "dri",
      "Print_Name": "C'Lela",
      "Inverted_Name": "C'Lela"
    },
    {
      "Id": "drl",
      "Print_Name": "Paakantyi",
      "Inverted_Name": "Paakantyi"
    },
    {
      "Id": "drn",
      "Print_Name": "West Damar",
      "Inverted_Name": "Damar, West"
    },
    {
      "Id": "dro",
      "Print_Name": "Daro-Matu Melanau",
      "Inverted_Name": "Melanau, Daro-Matu"
    },
    {
      "Id": "drq",
      "Print_Name": "Dura",
      "Inverted_Name": "Dura"
    },
    {
      "Id": "drs",
      "Print_Name": "Gedeo",
      "Inverted_Name": "Gedeo"
    },
    {
      "Id": "drt",
      "Print_Name": "Drents",
      "Inverted_Name": "Drents"
    },
    {
      "Id": "dru",
      "Print_Name": "Rukai",
      "Inverted_Name": "Rukai"
    },
    {
      "Id": "dry",
      "Print_Name": "Darai",
      "Inverted_Name": "Darai"
    },
    {
      "Id": "dsb",
      "Print_Name": "Lower Sorbian",
      "Inverted_Name": "Sorbian, Lower"
    },
    {
      "Id": "dse",
      "Print_Name": "Dutch Sign Language",
      "Inverted_Name": "Dutch Sign Language"
    },
    {
      "Id": "dsh",
      "Print_Name": "Daasanach",
      "Inverted_Name": "Daasanach"
    },
    {
      "Id": "dsi",
      "Print_Name": "Disa",
      "Inverted_Name": "Disa"
    },
    {
      "Id": "dsk",
      "Print_Name": "Dokshi",
      "Inverted_Name": "Dokshi"
    },
    {
      "Id": "dsl",
      "Print_Name": "Danish Sign Language",
      "Inverted_Name": "Danish Sign Language"
    },
    {
      "Id": "dsn",
      "Print_Name": "Dusner",
      "Inverted_Name": "Dusner"
    },
    {
      "Id": "dso",
      "Print_Name": "Desiya",
      "Inverted_Name": "Desiya"
    },
    {
      "Id": "dsq",
      "Print_Name": "Tadaksahak",
      "Inverted_Name": "Tadaksahak"
    },
    {
      "Id": "dsz",
      "Print_Name": "Mardin Sign Language",
      "Inverted_Name": "Mardin Sign Language"
    },
    {
      "Id": "dta",
      "Print_Name": "Daur",
      "Inverted_Name": "Daur"
    },
    {
      "Id": "dtb",
      "Print_Name": "Labuk-Kinabatangan Kadazan",
      "Inverted_Name": "Kadazan, Labuk-Kinabatangan"
    },
    {
      "Id": "dtd",
      "Print_Name": "Ditidaht",
      "Inverted_Name": "Ditidaht"
    },
    {
      "Id": "dth",
      "Print_Name": "Adithinngithigh",
      "Inverted_Name": "Adithinngithigh"
    },
    {
      "Id": "dti",
      "Print_Name": "Ana Tinga Dogon",
      "Inverted_Name": "Dogon, Ana Tinga"
    },
    {
      "Id": "dtk",
      "Print_Name": "Tene Kan Dogon",
      "Inverted_Name": "Dogon, Tene Kan"
    },
    {
      "Id": "dtm",
      "Print_Name": "Tomo Kan Dogon",
      "Inverted_Name": "Dogon, Tomo Kan"
    },
    {
      "Id": "dtn",
      "Print_Name": "Daatsʼíin",
      "Inverted_Name": "Daatsʼíin"
    },
    {
      "Id": "dto",
      "Print_Name": "Tommo So Dogon",
      "Inverted_Name": "Dogon, Tommo So"
    },
    {
      "Id": "dtp",
      "Print_Name": "Central Dusun",
      "Inverted_Name": "Dusun, Central"
    },
    {
      "Id": "dtp",
      "Print_Name": "Kadazan Dusun",
      "Inverted_Name": "Dusun, Kadazan"
    },
    {
      "Id": "dtr",
      "Print_Name": "Lotud",
      "Inverted_Name": "Lotud"
    },
    {
      "Id": "dts",
      "Print_Name": "Toro So Dogon",
      "Inverted_Name": "Dogon, Toro So"
    },
    {
      "Id": "dtt",
      "Print_Name": "Toro Tegu Dogon",
      "Inverted_Name": "Dogon, Toro Tegu"
    },
    {
      "Id": "dtu",
      "Print_Name": "Tebul Ure Dogon",
      "Inverted_Name": "Dogon, Tebul Ure"
    },
    {
      "Id": "dty",
      "Print_Name": "Dotyali",
      "Inverted_Name": "Dotyali"
    },
    {
      "Id": "dua",
      "Print_Name": "Duala",
      "Inverted_Name": "Duala"
    },
    {
      "Id": "dub",
      "Print_Name": "Dubli",
      "Inverted_Name": "Dubli"
    },
    {
      "Id": "duc",
      "Print_Name": "Duna",
      "Inverted_Name": "Duna"
    },
    {
      "Id": "due",
      "Print_Name": "Umiray Dumaget Agta",
      "Inverted_Name": "Agta, Umiray Dumaget"
    },
    {
      "Id": "duf",
      "Print_Name": "Drubea",
      "Inverted_Name": "Drubea"
    },
    {
      "Id": "duf",
      "Print_Name": "Dumbea",
      "Inverted_Name": "Dumbea"
    },
    {
      "Id": "dug",
      "Print_Name": "Chiduruma",
      "Inverted_Name": "Chiduruma"
    },
    {
      "Id": "dug",
      "Print_Name": "Duruma",
      "Inverted_Name": "Duruma"
    },
    {
      "Id": "duh",
      "Print_Name": "Dungra Bhil",
      "Inverted_Name": "Dungra Bhil"
    },
    {
      "Id": "dui",
      "Print_Name": "Dumun",
      "Inverted_Name": "Dumun"
    },
    {
      "Id": "duk",
      "Print_Name": "Uyajitaya",
      "Inverted_Name": "Uyajitaya"
    },
    {
      "Id": "dul",
      "Print_Name": "Alabat Island Agta",
      "Inverted_Name": "Agta, Alabat Island"
    },
    {
      "Id": "dum",
      "Print_Name": "Middle Dutch (ca. 1050-1350)",
      "Inverted_Name": "Dutch, Middle (ca. 1050-1350)"
    },
    {
      "Id": "dun",
      "Print_Name": "Dusun Deyah",
      "Inverted_Name": "Dusun Deyah"
    },
    {
      "Id": "duo",
      "Print_Name": "Dupaninan Agta",
      "Inverted_Name": "Agta, Dupaninan"
    },
    {
      "Id": "dup",
      "Print_Name": "Duano",
      "Inverted_Name": "Duano"
    },
    {
      "Id": "duq",
      "Print_Name": "Dusun Malang",
      "Inverted_Name": "Dusun Malang"
    },
    {
      "Id": "dur",
      "Print_Name": "Dii",
      "Inverted_Name": "Dii"
    },
    {
      "Id": "dus",
      "Print_Name": "Dumi",
      "Inverted_Name": "Dumi"
    },
    {
      "Id": "duu",
      "Print_Name": "Drung",
      "Inverted_Name": "Drung"
    },
    {
      "Id": "duv",
      "Print_Name": "Duvle",
      "Inverted_Name": "Duvle"
    },
    {
      "Id": "duw",
      "Print_Name": "Dusun Witu",
      "Inverted_Name": "Dusun Witu"
    },
    {
      "Id": "dux",
      "Print_Name": "Duungooma",
      "Inverted_Name": "Duungooma"
    },
    {
      "Id": "duy",
      "Print_Name": "Dicamay Agta",
      "Inverted_Name": "Agta, Dicamay"
    },
    {
      "Id": "duz",
      "Print_Name": "Duli-Gey",
      "Inverted_Name": "Duli-Gey"
    },
    {
      "Id": "dva",
      "Print_Name": "Duau",
      "Inverted_Name": "Duau"
    },
    {
      "Id": "dwa",
      "Print_Name": "Diri",
      "Inverted_Name": "Diri"
    },
    {
      "Id": "dwk",
      "Print_Name": "Dawik Kui",
      "Inverted_Name": "Kui, Dawik"
    },
    {
      "Id": "dwr",
      "Print_Name": "Dawro",
      "Inverted_Name": "Dawro"
    },
    {
      "Id": "dws",
      "Print_Name": "Dutton World Speedwords",
      "Inverted_Name": "Dutton World Speedwords"
    },
    {
      "Id": "dwu",
      "Print_Name": "Dhuwal",
      "Inverted_Name": "Dhuwal"
    },
    {
      "Id": "dww",
      "Print_Name": "Dawawa",
      "Inverted_Name": "Dawawa"
    },
    {
      "Id": "dwy",
      "Print_Name": "Dhuwaya",
      "Inverted_Name": "Dhuwaya"
    },
    {
      "Id": "dwz",
      "Print_Name": "Dewas Rai",
      "Inverted_Name": "Rai, Dewas"
    },
    {
      "Id": "dya",
      "Print_Name": "Dyan",
      "Inverted_Name": "Dyan"
    },
    {
      "Id": "dyb",
      "Print_Name": "Dyaberdyaber",
      "Inverted_Name": "Dyaberdyaber"
    },
    {
      "Id": "dyd",
      "Print_Name": "Dyugun",
      "Inverted_Name": "Dyugun"
    },
    {
      "Id": "dyg",
      "Print_Name": "Villa Viciosa Agta",
      "Inverted_Name": "Agta, Villa Viciosa"
    },
    {
      "Id": "dyi",
      "Print_Name": "Djimini Senoufo",
      "Inverted_Name": "Senoufo, Djimini"
    },
    {
      "Id": "dym",
      "Print_Name": "Yanda Dom Dogon",
      "Inverted_Name": "Dogon, Yanda Dom"
    },
    {
      "Id": "dyn",
      "Print_Name": "Dhanggatti",
      "Inverted_Name": "Dhanggatti"
    },
    {
      "Id": "dyn",
      "Print_Name": "Dyangadi",
      "Inverted_Name": "Dyangadi"
    },
    {
      "Id": "dyo",
      "Print_Name": "Jola-Fonyi",
      "Inverted_Name": "Jola-Fonyi"
    },
    {
      "Id": "dyr",
      "Print_Name": "Dyarim",
      "Inverted_Name": "Dyarim"
    },
    {
      "Id": "dyu",
      "Print_Name": "Dyula",
      "Inverted_Name": "Dyula"
    },
    {
      "Id": "dyy",
      "Print_Name": "Djabugay",
      "Inverted_Name": "Djabugay"
    },
    {
      "Id": "dyy",
      "Print_Name": "Dyaabugay",
      "Inverted_Name": "Dyaabugay"
    },
    {
      "Id": "dza",
      "Print_Name": "Tunzu",
      "Inverted_Name": "Tunzu"
    },
    {
      "Id": "dzd",
      "Print_Name": "Daza",
      "Inverted_Name": "Daza"
    },
    {
      "Id": "dze",
      "Print_Name": "Djiwarli",
      "Inverted_Name": "Djiwarli"
    },
    {
      "Id": "dzg",
      "Print_Name": "Dazaga",
      "Inverted_Name": "Dazaga"
    },
    {
      "Id": "dzl",
      "Print_Name": "Dzalakha",
      "Inverted_Name": "Dzalakha"
    },
    {
      "Id": "dzn",
      "Print_Name": "Dzando",
      "Inverted_Name": "Dzando"
    },
    {
      "Id": "dzo",
      "Print_Name": "Dzongkha",
      "Inverted_Name": "Dzongkha"
    },
    {
      "Id": "eaa",
      "Print_Name": "Karenggapa",
      "Inverted_Name": "Karenggapa"
    },
    {
      "Id": "ebc",
      "Print_Name": "Beginci",
      "Inverted_Name": "Beginci"
    },
    {
      "Id": "ebg",
      "Print_Name": "Ebughu",
      "Inverted_Name": "Ebughu"
    },
    {
      "Id": "ebk",
      "Print_Name": "Eastern Bontok",
      "Inverted_Name": "Bontok, Eastern"
    },
    {
      "Id": "ebo",
      "Print_Name": "Teke-Ebo",
      "Inverted_Name": "Teke-Ebo"
    },
    {
      "Id": "ebr",
      "Print_Name": "Ebrié",
      "Inverted_Name": "Ebrié"
    },
    {
      "Id": "ebu",
      "Print_Name": "Embu",
      "Inverted_Name": "Embu"
    },
    {
      "Id": "ebu",
      "Print_Name": "Kiembu",
      "Inverted_Name": "Kiembu"
    },
    {
      "Id": "ecr",
      "Print_Name": "Eteocretan",
      "Inverted_Name": "Eteocretan"
    },
    {
      "Id": "ecs",
      "Print_Name": "Ecuadorian Sign Language",
      "Inverted_Name": "Ecuadorian Sign Language"
    },
    {
      "Id": "ecy",
      "Print_Name": "Eteocypriot",
      "Inverted_Name": "Eteocypriot"
    },
    {
      "Id": "eee",
      "Print_Name": "E",
      "Inverted_Name": "E"
    },
    {
      "Id": "efa",
      "Print_Name": "Efai",
      "Inverted_Name": "Efai"
    },
    {
      "Id": "efe",
      "Print_Name": "Efe",
      "Inverted_Name": "Efe"
    },
    {
      "Id": "efi",
      "Print_Name": "Efik",
      "Inverted_Name": "Efik"
    },
    {
      "Id": "ega",
      "Print_Name": "Ega",
      "Inverted_Name": "Ega"
    },
    {
      "Id": "egl",
      "Print_Name": "Emilian",
      "Inverted_Name": "Emilian"
    },
    {
      "Id": "egm",
      "Print_Name": "Benamanga",
      "Inverted_Name": "Benamanga"
    },
    {
      "Id": "ego",
      "Print_Name": "Eggon",
      "Inverted_Name": "Eggon"
    },
    {
      "Id": "egy",
      "Print_Name": "Egyptian (Ancient)",
      "Inverted_Name": "Egyptian (Ancient)"
    },
    {
      "Id": "ehs",
      "Print_Name": "Miyakubo Sign Language",
      "Inverted_Name": "Miyakubo Sign Language"
    },
    {
      "Id": "ehu",
      "Print_Name": "Ehueun",
      "Inverted_Name": "Ehueun"
    },
    {
      "Id": "eip",
      "Print_Name": "Eipomek",
      "Inverted_Name": "Eipomek"
    },
    {
      "Id": "eit",
      "Print_Name": "Eitiep",
      "Inverted_Name": "Eitiep"
    },
    {
      "Id": "eiv",
      "Print_Name": "Askopan",
      "Inverted_Name": "Askopan"
    },
    {
      "Id": "eja",
      "Print_Name": "Ejamat",
      "Inverted_Name": "Ejamat"
    },
    {
      "Id": "eka",
      "Print_Name": "Ekajuk",
      "Inverted_Name": "Ekajuk"
    },
    {
      "Id": "eke",
      "Print_Name": "Ekit",
      "Inverted_Name": "Ekit"
    },
    {
      "Id": "ekg",
      "Print_Name": "Ekari",
      "Inverted_Name": "Ekari"
    },
    {
      "Id": "eki",
      "Print_Name": "Eki",
      "Inverted_Name": "Eki"
    },
    {
      "Id": "ekk",
      "Print_Name": "Standard Estonian",
      "Inverted_Name": "Estonian, Standard"
    },
    {
      "Id": "ekl",
      "Print_Name": "Kol",
      "Inverted_Name": "Kol"
    },
    {
      "Id": "ekl",
      "Print_Name": "Kol (Bangladesh)",
      "Inverted_Name": "Kol (Bangladesh)"
    },
    {
      "Id": "ekm",
      "Print_Name": "Elip",
      "Inverted_Name": "Elip"
    },
    {
      "Id": "eko",
      "Print_Name": "Koti",
      "Inverted_Name": "Koti"
    },
    {
      "Id": "ekp",
      "Print_Name": "Ekpeye",
      "Inverted_Name": "Ekpeye"
    },
    {
      "Id": "ekr",
      "Print_Name": "Yace",
      "Inverted_Name": "Yace"
    },
    {
      "Id": "eky",
      "Print_Name": "Eastern Kayah",
      "Inverted_Name": "Kayah, Eastern"
    },
    {
      "Id": "ele",
      "Print_Name": "Elepi",
      "Inverted_Name": "Elepi"
    },
    {
      "Id": "elh",
      "Print_Name": "El Hugeirat",
      "Inverted_Name": "El Hugeirat"
    },
    {
      "Id": "eli",
      "Print_Name": "Nding",
      "Inverted_Name": "Nding"
    },
    {
      "Id": "elk",
      "Print_Name": "Elkei",
      "Inverted_Name": "Elkei"
    },
    {
      "Id": "ell",
      "Print_Name": "Modern Greek (1453-)",
      "Inverted_Name": "Greek, Modern (1453-)"
    },
    {
      "Id": "elm",
      "Print_Name": "Eleme",
      "Inverted_Name": "Eleme"
    },
    {
      "Id": "elo",
      "Print_Name": "El Molo",
      "Inverted_Name": "El Molo"
    },
    {
      "Id": "elu",
      "Print_Name": "Elu",
      "Inverted_Name": "Elu"
    },
    {
      "Id": "elx",
      "Print_Name": "Elamite",
      "Inverted_Name": "Elamite"
    },
    {
      "Id": "ema",
      "Print_Name": "Emai-Iuleha-Ora",
      "Inverted_Name": "Emai-Iuleha-Ora"
    },
    {
      "Id": "emb",
      "Print_Name": "Embaloh",
      "Inverted_Name": "Embaloh"
    },
    {
      "Id": "eme",
      "Print_Name": "Emerillon",
      "Inverted_Name": "Emerillon"
    },
    {
      "Id": "emg",
      "Print_Name": "Eastern Meohang",
      "Inverted_Name": "Meohang, Eastern"
    },
    {
      "Id": "emi",
      "Print_Name": "Mussau-Emira",
      "Inverted_Name": "Mussau-Emira"
    },
    {
      "Id": "emk",
      "Print_Name": "Eastern Maninkakan",
      "Inverted_Name": "Maninkakan, Eastern"
    },
    {
      "Id": "emm",
      "Print_Name": "Mamulique",
      "Inverted_Name": "Mamulique"
    },
    {
      "Id": "emn",
      "Print_Name": "Eman",
      "Inverted_Name": "Eman"
    },
    {
      "Id": "emp",
      "Print_Name": "Northern Emberá",
      "Inverted_Name": "Emberá, Northern"
    },
    {
      "Id": "emq",
      "Print_Name": "Eastern Minyag",
      "Inverted_Name": "Minyag, Eastern"
    },
    {
      "Id": "ems",
      "Print_Name": "Pacific Gulf Yupik",
      "Inverted_Name": "Yupik, Pacific Gulf"
    },
    {
      "Id": "emu",
      "Print_Name": "Eastern Muria",
      "Inverted_Name": "Muria, Eastern"
    },
    {
      "Id": "emw",
      "Print_Name": "Emplawas",
      "Inverted_Name": "Emplawas"
    },
    {
      "Id": "emx",
      "Print_Name": "Erromintxela",
      "Inverted_Name": "Erromintxela"
    },
    {
      "Id": "emy",
      "Print_Name": "Epigraphic Mayan",
      "Inverted_Name": "Mayan, Epigraphic"
    },
    {
      "Id": "emz",
      "Print_Name": "Mbessa",
      "Inverted_Name": "Mbessa"
    },
    {
      "Id": "ena",
      "Print_Name": "Apali",
      "Inverted_Name": "Apali"
    },
    {
      "Id": "enb",
      "Print_Name": "Markweeta",
      "Inverted_Name": "Markweeta"
    },
    {
      "Id": "enc",
      "Print_Name": "En",
      "Inverted_Name": "En"
    },
    {
      "Id": "end",
      "Print_Name": "Ende",
      "Inverted_Name": "Ende"
    },
    {
      "Id": "enf",
      "Print_Name": "Forest Enets",
      "Inverted_Name": "Enets, Forest"
    },
    {
      "Id": "eng",
      "Print_Name": "English",
      "Inverted_Name": "English"
    },
    {
      "Id": "enh",
      "Print_Name": "Tundra Enets",
      "Inverted_Name": "Enets, Tundra"
    },
    {
      "Id": "enl",
      "Print_Name": "Enlhet",
      "Inverted_Name": "Enlhet"
    },
    {
      "Id": "enm",
      "Print_Name": "Middle English (1100-1500)",
      "Inverted_Name": "English, Middle (1100-1500)"
    },
    {
      "Id": "enn",
      "Print_Name": "Engenni",
      "Inverted_Name": "Engenni"
    },
    {
      "Id": "eno",
      "Print_Name": "Enggano",
      "Inverted_Name": "Enggano"
    },
    {
      "Id": "enq",
      "Print_Name": "Enga",
      "Inverted_Name": "Enga"
    },
    {
      "Id": "enr",
      "Print_Name": "Emem",
      "Inverted_Name": "Emem"
    },
    {
      "Id": "enr",
      "Print_Name": "Emumu",
      "Inverted_Name": "Emumu"
    },
    {
      "Id": "enu",
      "Print_Name": "Enu",
      "Inverted_Name": "Enu"
    },
    {
      "Id": "env",
      "Print_Name": "Enwan (Edo State)",
      "Inverted_Name": "Enwan (Edo State)"
    },
    {
      "Id": "enw",
      "Print_Name": "Enwan (Akwa Ibom State)",
      "Inverted_Name": "Enwan (Akwa Ibom State)"
    },
    {
      "Id": "enx",
      "Print_Name": "Enxet",
      "Inverted_Name": "Enxet"
    },
    {
      "Id": "eot",
      "Print_Name": "Beti (Côte d'Ivoire)",
      "Inverted_Name": "Beti (Côte d'Ivoire)"
    },
    {
      "Id": "epi",
      "Print_Name": "Epie",
      "Inverted_Name": "Epie"
    },
    {
      "Id": "epo",
      "Print_Name": "Esperanto",
      "Inverted_Name": "Esperanto"
    },
    {
      "Id": "era",
      "Print_Name": "Eravallan",
      "Inverted_Name": "Eravallan"
    },
    {
      "Id": "erg",
      "Print_Name": "Sie",
      "Inverted_Name": "Sie"
    },
    {
      "Id": "erh",
      "Print_Name": "Eruwa",
      "Inverted_Name": "Eruwa"
    },
    {
      "Id": "eri",
      "Print_Name": "Ogea",
      "Inverted_Name": "Ogea"
    },
    {
      "Id": "erk",
      "Print_Name": "South Efate",
      "Inverted_Name": "Efate, South"
    },
    {
      "Id": "ero",
      "Print_Name": "Horpa",
      "Inverted_Name": "Horpa"
    },
    {
      "Id": "err",
      "Print_Name": "Erre",
      "Inverted_Name": "Erre"
    },
    {
      "Id": "ers",
      "Print_Name": "Ersu",
      "Inverted_Name": "Ersu"
    },
    {
      "Id": "ert",
      "Print_Name": "Eritai",
      "Inverted_Name": "Eritai"
    },
    {
      "Id": "erw",
      "Print_Name": "Erokwanas",
      "Inverted_Name": "Erokwanas"
    },
    {
      "Id": "ese",
      "Print_Name": "Ese Ejja",
      "Inverted_Name": "Ese Ejja"
    },
    {
      "Id": "esg",
      "Print_Name": "Aheri Gondi",
      "Inverted_Name": "Gondi, Aheri"
    },
    {
      "Id": "esh",
      "Print_Name": "Eshtehardi",
      "Inverted_Name": "Eshtehardi"
    },
    {
      "Id": "esi",
      "Print_Name": "North Alaskan Inupiatun",
      "Inverted_Name": "Inupiatun, North Alaskan"
    },
    {
      "Id": "esk",
      "Print_Name": "Northwest Alaska Inupiatun",
      "Inverted_Name": "Inupiatun, Northwest Alaska"
    },
    {
      "Id": "esl",
      "Print_Name": "Egypt Sign Language",
      "Inverted_Name": "Egypt Sign Language"
    },
    {
      "Id": "esm",
      "Print_Name": "Esuma",
      "Inverted_Name": "Esuma"
    },
    {
      "Id": "esn",
      "Print_Name": "Salvadoran Sign Language",
      "Inverted_Name": "Salvadoran Sign Language"
    },
    {
      "Id": "eso",
      "Print_Name": "Estonian Sign Language",
      "Inverted_Name": "Estonian Sign Language"
    },
    {
      "Id": "esq",
      "Print_Name": "Esselen",
      "Inverted_Name": "Esselen"
    },
    {
      "Id": "ess",
      "Print_Name": "Central Siberian Yupik",
      "Inverted_Name": "Yupik, Central Siberian"
    },
    {
      "Id": "est",
      "Print_Name": "Estonian",
      "Inverted_Name": "Estonian"
    },
    {
      "Id": "esu",
      "Print_Name": "Central Yupik",
      "Inverted_Name": "Yupik, Central"
    },
    {
      "Id": "esy",
      "Print_Name": "Eskayan",
      "Inverted_Name": "Eskayan"
    },
    {
      "Id": "etb",
      "Print_Name": "Etebi",
      "Inverted_Name": "Etebi"
    },
    {
      "Id": "etc",
      "Print_Name": "Etchemin",
      "Inverted_Name": "Etchemin"
    },
    {
      "Id": "eth",
      "Print_Name": "Ethiopian Sign Language",
      "Inverted_Name": "Ethiopian Sign Language"
    },
    {
      "Id": "etn",
      "Print_Name": "Eton (Vanuatu)",
      "Inverted_Name": "Eton (Vanuatu)"
    },
    {
      "Id": "eto",
      "Print_Name": "Eton (Cameroon)",
      "Inverted_Name": "Eton (Cameroon)"
    },
    {
      "Id": "etr",
      "Print_Name": "Edolo",
      "Inverted_Name": "Edolo"
    },
    {
      "Id": "ets",
      "Print_Name": "Yekhee",
      "Inverted_Name": "Yekhee"
    },
    {
      "Id": "ett",
      "Print_Name": "Etruscan",
      "Inverted_Name": "Etruscan"
    },
    {
      "Id": "etu",
      "Print_Name": "Ejagham",
      "Inverted_Name": "Ejagham"
    },
    {
      "Id": "etx",
      "Print_Name": "Eten",
      "Inverted_Name": "Eten"
    },
    {
      "Id": "etz",
      "Print_Name": "Semimi",
      "Inverted_Name": "Semimi"
    },
    {
      "Id": "eud",
      "Print_Name": "Eudeve",
      "Inverted_Name": "Eudeve"
    },
    {
      "Id": "eus",
      "Print_Name": "Basque",
      "Inverted_Name": "Basque"
    },
    {
      "Id": "eve",
      "Print_Name": "Even",
      "Inverted_Name": "Even"
    },
    {
      "Id": "evh",
      "Print_Name": "Uvbie",
      "Inverted_Name": "Uvbie"
    },
    {
      "Id": "evn",
      "Print_Name": "Evenki",
      "Inverted_Name": "Evenki"
    },
    {
      "Id": "ewe",
      "Print_Name": "Ewe",
      "Inverted_Name": "Ewe"
    },
    {
      "Id": "ewo",
      "Print_Name": "Ewondo",
      "Inverted_Name": "Ewondo"
    },
    {
      "Id": "ext",
      "Print_Name": "Extremaduran",
      "Inverted_Name": "Extremaduran"
    },
    {
      "Id": "eya",
      "Print_Name": "Eyak",
      "Inverted_Name": "Eyak"
    },
    {
      "Id": "eyo",
      "Print_Name": "Keiyo",
      "Inverted_Name": "Keiyo"
    },
    {
      "Id": "eza",
      "Print_Name": "Ezaa",
      "Inverted_Name": "Ezaa"
    },
    {
      "Id": "eze",
      "Print_Name": "Uzekwe",
      "Inverted_Name": "Uzekwe"
    },
    {
      "Id": "faa",
      "Print_Name": "Fasu",
      "Inverted_Name": "Fasu"
    },
    {
      "Id": "fab",
      "Print_Name": "Fa d'Ambu",
      "Inverted_Name": "Fa d'Ambu"
    },
    {
      "Id": "fad",
      "Print_Name": "Wagi",
      "Inverted_Name": "Wagi"
    },
    {
      "Id": "faf",
      "Print_Name": "Fagani",
      "Inverted_Name": "Fagani"
    },
    {
      "Id": "fag",
      "Print_Name": "Finongan",
      "Inverted_Name": "Finongan"
    },
    {
      "Id": "fah",
      "Print_Name": "Baissa Fali",
      "Inverted_Name": "Fali, Baissa"
    },
    {
      "Id": "fai",
      "Print_Name": "Faiwol",
      "Inverted_Name": "Faiwol"
    },
    {
      "Id": "faj",
      "Print_Name": "Faita",
      "Inverted_Name": "Faita"
    },
    {
      "Id": "fak",
      "Print_Name": "Fang (Cameroon)",
      "Inverted_Name": "Fang (Cameroon)"
    },
    {
      "Id": "fal",
      "Print_Name": "South Fali",
      "Inverted_Name": "Fali, South"
    },
    {
      "Id": "fam",
      "Print_Name": "Fam",
      "Inverted_Name": "Fam"
    },
    {
      "Id": "fan",
      "Print_Name": "Fang (Equatorial Guinea)",
      "Inverted_Name": "Fang (Equatorial Guinea)"
    },
    {
      "Id": "fao",
      "Print_Name": "Faroese",
      "Inverted_Name": "Faroese"
    },
    {
      "Id": "fap",
      "Print_Name": "Paloor",
      "Inverted_Name": "Paloor"
    },
    {
      "Id": "far",
      "Print_Name": "Fataleka",
      "Inverted_Name": "Fataleka"
    },
    {
      "Id": "fas",
      "Print_Name": "Persian",
      "Inverted_Name": "Persian"
    },
    {
      "Id": "fat",
      "Print_Name": "Fanti",
      "Inverted_Name": "Fanti"
    },
    {
      "Id": "fau",
      "Print_Name": "Fayu",
      "Inverted_Name": "Fayu"
    },
    {
      "Id": "fax",
      "Print_Name": "Fala",
      "Inverted_Name": "Fala"
    },
    {
      "Id": "fay",
      "Print_Name": "Southwestern Fars",
      "Inverted_Name": "Fars, Southwestern"
    },
    {
      "Id": "faz",
      "Print_Name": "Northwestern Fars",
      "Inverted_Name": "Fars, Northwestern"
    },
    {
      "Id": "fbl",
      "Print_Name": "West Albay Bikol",
      "Inverted_Name": "Bikol, West Albay"
    },
    {
      "Id": "fcs",
      "Print_Name": "Quebec Sign Language",
      "Inverted_Name": "Quebec Sign Language"
    },
    {
      "Id": "fer",
      "Print_Name": "Feroge",
      "Inverted_Name": "Feroge"
    },
    {
      "Id": "ffi",
      "Print_Name": "Foia Foia",
      "Inverted_Name": "Foia Foia"
    },
    {
      "Id": "ffm",
      "Print_Name": "Maasina Fulfulde",
      "Inverted_Name": "Fulfulde, Maasina"
    },
    {
      "Id": "fgr",
      "Print_Name": "Fongoro",
      "Inverted_Name": "Fongoro"
    },
    {
      "Id": "fia",
      "Print_Name": "Nobiin",
      "Inverted_Name": "Nobiin"
    },
    {
      "Id": "fie",
      "Print_Name": "Fyer",
      "Inverted_Name": "Fyer"
    },
    {
      "Id": "fif",
      "Print_Name": "Faifi",
      "Inverted_Name": "Faifi"
    },
    {
      "Id": "fij",
      "Print_Name": "Fijian",
      "Inverted_Name": "Fijian"
    },
    {
      "Id": "fil",
      "Print_Name": "Filipino",
      "Inverted_Name": "Filipino"
    },
    {
      "Id": "fil",
      "Print_Name": "Pilipino",
      "Inverted_Name": "Pilipino"
    },
    {
      "Id": "fin",
      "Print_Name": "Finnish",
      "Inverted_Name": "Finnish"
    },
    {
      "Id": "fip",
      "Print_Name": "Fipa",
      "Inverted_Name": "Fipa"
    },
    {
      "Id": "fir",
      "Print_Name": "Firan",
      "Inverted_Name": "Firan"
    },
    {
      "Id": "fit",
      "Print_Name": "Meänkieli",
      "Inverted_Name": "Meänkieli"
    },
    {
      "Id": "fit",
      "Print_Name": "Tornedalen Finnish",
      "Inverted_Name": "Finnish, Tornedalen"
    },
    {
      "Id": "fiw",
      "Print_Name": "Fiwaga",
      "Inverted_Name": "Fiwaga"
    },
    {
      "Id": "fkk",
      "Print_Name": "Kirya-Konzəl",
      "Inverted_Name": "Kirya-Konzəl"
    },
    {
      "Id": "fkv",
      "Print_Name": "Kven Finnish",
      "Inverted_Name": "Finnish, Kven"
    },
    {
      "Id": "fla",
      "Print_Name": "Kalispel-Pend d'Oreille",
      "Inverted_Name": "Kalispel-Pend d'Oreille"
    },
    {
      "Id": "flh",
      "Print_Name": "Foau",
      "Inverted_Name": "Foau"
    },
    {
      "Id": "fli",
      "Print_Name": "Fali",
      "Inverted_Name": "Fali"
    },
    {
      "Id": "fll",
      "Print_Name": "North Fali",
      "Inverted_Name": "Fali, North"
    },
    {
      "Id": "fln",
      "Print_Name": "Flinders Island",
      "Inverted_Name": "Flinders Island"
    },
    {
      "Id": "flr",
      "Print_Name": "Fuliiru",
      "Inverted_Name": "Fuliiru"
    },
    {
      "Id": "fly",
      "Print_Name": "Flaaitaal",
      "Inverted_Name": "Flaaitaal"
    },
    {
      "Id": "fly",
      "Print_Name": "Tsotsitaal",
      "Inverted_Name": "Tsotsitaal"
    },
    {
      "Id": "fmp",
      "Print_Name": "Fe'fe'",
      "Inverted_Name": "Fe'fe'"
    },
    {
      "Id": "fmu",
      "Print_Name": "Far Western Muria",
      "Inverted_Name": "Muria, Far Western"
    },
    {
      "Id": "fnb",
      "Print_Name": "Fanbak",
      "Inverted_Name": "Fanbak"
    },
    {
      "Id": "fng",
      "Print_Name": "Fanagalo",
      "Inverted_Name": "Fanagalo"
    },
    {
      "Id": "fni",
      "Print_Name": "Fania",
      "Inverted_Name": "Fania"
    },
    {
      "Id": "fod",
      "Print_Name": "Foodo",
      "Inverted_Name": "Foodo"
    },
    {
      "Id": "foi",
      "Print_Name": "Foi",
      "Inverted_Name": "Foi"
    },
    {
      "Id": "fom",
      "Print_Name": "Foma",
      "Inverted_Name": "Foma"
    },
    {
      "Id": "fon",
      "Print_Name": "Fon",
      "Inverted_Name": "Fon"
    },
    {
      "Id": "for",
      "Print_Name": "Fore",
      "Inverted_Name": "Fore"
    },
    {
      "Id": "fos",
      "Print_Name": "Siraya",
      "Inverted_Name": "Siraya"
    },
    {
      "Id": "fpe",
      "Print_Name": "Fernando Po Creole English",
      "Inverted_Name": "Creole English, Fernando Po"
    },
    {
      "Id": "fqs",
      "Print_Name": "Fas",
      "Inverted_Name": "Fas"
    },
    {
      "Id": "fra",
      "Print_Name": "French",
      "Inverted_Name": "French"
    },
    {
      "Id": "frc",
      "Print_Name": "Cajun French",
      "Inverted_Name": "French, Cajun"
    },
    {
      "Id": "frd",
      "Print_Name": "Fordata",
      "Inverted_Name": "Fordata"
    },
    {
      "Id": "frk",
      "Print_Name": "Frankish",
      "Inverted_Name": "Frankish"
    },
    {
      "Id": "frm",
      "Print_Name": "Middle French (ca. 1400-1600)",
      "Inverted_Name": "French, Middle (ca. 1400-1600)"
    },
    {
      "Id": "fro",
      "Print_Name": "Old French (842-ca. 1400)",
      "Inverted_Name": "French, Old (842-ca. 1400)"
    },
    {
      "Id": "frp",
      "Print_Name": "Arpitan",
      "Inverted_Name": "Arpitan"
    },
    {
      "Id": "frp",
      "Print_Name": "Francoprovençal",
      "Inverted_Name": "Francoprovençal"
    },
    {
      "Id": "frq",
      "Print_Name": "Forak",
      "Inverted_Name": "Forak"
    },
    {
      "Id": "frr",
      "Print_Name": "Northern Frisian",
      "Inverted_Name": "Frisian, Northern"
    },
    {
      "Id": "frs",
      "Print_Name": "Eastern Frisian",
      "Inverted_Name": "Frisian, Eastern"
    },
    {
      "Id": "frt",
      "Print_Name": "Fortsenal",
      "Inverted_Name": "Fortsenal"
    },
    {
      "Id": "fry",
      "Print_Name": "Western Frisian",
      "Inverted_Name": "Frisian, Western"
    },
    {
      "Id": "fse",
      "Print_Name": "Finnish Sign Language",
      "Inverted_Name": "Finnish Sign Language"
    },
    {
      "Id": "fsl",
      "Print_Name": "French Sign Language",
      "Inverted_Name": "French Sign Language"
    },
    {
      "Id": "fss",
      "Print_Name": "finlandssvenskt teckenspråk",
      "Inverted_Name": "finlandssvenskt teckenspråk"
    },
    {
      "Id": "fss",
      "Print_Name": "Finland-Swedish Sign Language",
      "Inverted_Name": "Finland-Swedish Sign Language"
    },
    {
      "Id": "fss",
      "Print_Name": "suomenruotsalainen viittomakieli",
      "Inverted_Name": "suomenruotsalainen viittomakieli"
    },
    {
      "Id": "fub",
      "Print_Name": "Adamawa Fulfulde",
      "Inverted_Name": "Fulfulde, Adamawa"
    },
    {
      "Id": "fuc",
      "Print_Name": "Pulaar",
      "Inverted_Name": "Pulaar"
    },
    {
      "Id": "fud",
      "Print_Name": "East Futuna",
      "Inverted_Name": "Futuna, East"
    },
    {
      "Id": "fue",
      "Print_Name": "Borgu Fulfulde",
      "Inverted_Name": "Fulfulde, Borgu"
    },
    {
      "Id": "fuf",
      "Print_Name": "Pular",
      "Inverted_Name": "Pular"
    },
    {
      "Id": "fuh",
      "Print_Name": "Western Niger Fulfulde",
      "Inverted_Name": "Fulfulde, Western Niger"
    },
    {
      "Id": "fui",
      "Print_Name": "Bagirmi Fulfulde",
      "Inverted_Name": "Fulfulde, Bagirmi"
    },
    {
      "Id": "fuj",
      "Print_Name": "Ko",
      "Inverted_Name": "Ko"
    },
    {
      "Id": "ful",
      "Print_Name": "Fulah",
      "Inverted_Name": "Fulah"
    },
    {
      "Id": "fum",
      "Print_Name": "Fum",
      "Inverted_Name": "Fum"
    },
    {
      "Id": "fun",
      "Print_Name": "Fulniô",
      "Inverted_Name": "Fulniô"
    },
    {
      "Id": "fuq",
      "Print_Name": "Central-Eastern Niger Fulfulde",
      "Inverted_Name": "Fulfulde, Central-Eastern Niger"
    },
    {
      "Id": "fur",
      "Print_Name": "Friulian",
      "Inverted_Name": "Friulian"
    },
    {
      "Id": "fut",
      "Print_Name": "Futuna-Aniwa",
      "Inverted_Name": "Futuna-Aniwa"
    },
    {
      "Id": "fuu",
      "Print_Name": "Furu",
      "Inverted_Name": "Furu"
    },
    {
      "Id": "fuv",
      "Print_Name": "Nigerian Fulfulde",
      "Inverted_Name": "Fulfulde, Nigerian"
    },
    {
      "Id": "fuy",
      "Print_Name": "Fuyug",
      "Inverted_Name": "Fuyug"
    },
    {
      "Id": "fvr",
      "Print_Name": "Fur",
      "Inverted_Name": "Fur"
    },
    {
      "Id": "fwa",
      "Print_Name": "Fwâi",
      "Inverted_Name": "Fwâi"
    },
    {
      "Id": "fwe",
      "Print_Name": "Fwe",
      "Inverted_Name": "Fwe"
    },
    {
      "Id": "gaa",
      "Print_Name": "Ga",
      "Inverted_Name": "Ga"
    },
    {
      "Id": "gab",
      "Print_Name": "Gabri",
      "Inverted_Name": "Gabri"
    },
    {
      "Id": "gac",
      "Print_Name": "Mixed Great Andamanese",
      "Inverted_Name": "Great Andamanese, Mixed"
    },
    {
      "Id": "gad",
      "Print_Name": "Gaddang",
      "Inverted_Name": "Gaddang"
    },
    {
      "Id": "gae",
      "Print_Name": "Guarequena",
      "Inverted_Name": "Guarequena"
    },
    {
      "Id": "gaf",
      "Print_Name": "Gende",
      "Inverted_Name": "Gende"
    },
    {
      "Id": "gag",
      "Print_Name": "Gagauz",
      "Inverted_Name": "Gagauz"
    },
    {
      "Id": "gah",
      "Print_Name": "Alekano",
      "Inverted_Name": "Alekano"
    },
    {
      "Id": "gai",
      "Print_Name": "Borei",
      "Inverted_Name": "Borei"
    },
    {
      "Id": "gaj",
      "Print_Name": "Gadsup",
      "Inverted_Name": "Gadsup"
    },
    {
      "Id": "gak",
      "Print_Name": "Gamkonora",
      "Inverted_Name": "Gamkonora"
    },
    {
      "Id": "gal",
      "Print_Name": "Galolen",
      "Inverted_Name": "Galolen"
    },
    {
      "Id": "gam",
      "Print_Name": "Kandawo",
      "Inverted_Name": "Kandawo"
    },
    {
      "Id": "gan",
      "Print_Name": "Gan Chinese",
      "Inverted_Name": "Chinese, Gan"
    },
    {
      "Id": "gao",
      "Print_Name": "Gants",
      "Inverted_Name": "Gants"
    },
    {
      "Id": "gap",
      "Print_Name": "Gal",
      "Inverted_Name": "Gal"
    },
    {
      "Id": "gaq",
      "Print_Name": "Gata'",
      "Inverted_Name": "Gata'"
    },
    {
      "Id": "gar",
      "Print_Name": "Galeya",
      "Inverted_Name": "Galeya"
    },
    {
      "Id": "gas",
      "Print_Name": "Adiwasi Garasia",
      "Inverted_Name": "Garasia, Adiwasi"
    },
    {
      "Id": "gat",
      "Print_Name": "Kenati",
      "Inverted_Name": "Kenati"
    },
    {
      "Id": "gau",
      "Print_Name": "Mudhili Gadaba",
      "Inverted_Name": "Gadaba, Mudhili"
    },
    {
      "Id": "gaw",
      "Print_Name": "Nobonob",
      "Inverted_Name": "Nobonob"
    },
    {
      "Id": "gax",
      "Print_Name": "Borana-Arsi-Guji Oromo",
      "Inverted_Name": "Oromo, Borana-Arsi-Guji"
    },
    {
      "Id": "gay",
      "Print_Name": "Gayo",
      "Inverted_Name": "Gayo"
    },
    {
      "Id": "gaz",
      "Print_Name": "West Central Oromo",
      "Inverted_Name": "Oromo, West Central"
    },
    {
      "Id": "gba",
      "Print_Name": "Gbaya (Central African Republic)",
      "Inverted_Name": "Gbaya (Central African Republic)"
    },
    {
      "Id": "gbb",
      "Print_Name": "Kaytetye",
      "Inverted_Name": "Kaytetye"
    },
    {
      "Id": "gbd",
      "Print_Name": "Karajarri",
      "Inverted_Name": "Karajarri"
    },
    {
      "Id": "gbe",
      "Print_Name": "Niksek",
      "Inverted_Name": "Niksek"
    },
    {
      "Id": "gbf",
      "Print_Name": "Gaikundi",
      "Inverted_Name": "Gaikundi"
    },
    {
      "Id": "gbg",
      "Print_Name": "Gbanziri",
      "Inverted_Name": "Gbanziri"
    },
    {
      "Id": "gbh",
      "Print_Name": "Defi Gbe",
      "Inverted_Name": "Gbe, Defi"
    },
    {
      "Id": "gbi",
      "Print_Name": "Galela",
      "Inverted_Name": "Galela"
    },
    {
      "Id": "gbj",
      "Print_Name": "Bodo Gadaba",
      "Inverted_Name": "Gadaba, Bodo"
    },
    {
      "Id": "gbk",
      "Print_Name": "Gaddi",
      "Inverted_Name": "Gaddi"
    },
    {
      "Id": "gbl",
      "Print_Name": "Gamit",
      "Inverted_Name": "Gamit"
    },
    {
      "Id": "gbm",
      "Print_Name": "Garhwali",
      "Inverted_Name": "Garhwali"
    },
    {
      "Id": "gbn",
      "Print_Name": "Mo'da",
      "Inverted_Name": "Mo'da"
    },
    {
      "Id": "gbo",
      "Print_Name": "Northern Grebo",
      "Inverted_Name": "Grebo, Northern"
    },
    {
      "Id": "gbp",
      "Print_Name": "Gbaya-Bossangoa",
      "Inverted_Name": "Gbaya-Bossangoa"
    },
    {
      "Id": "gbq",
      "Print_Name": "Gbaya-Bozoum",
      "Inverted_Name": "Gbaya-Bozoum"
    },
    {
      "Id": "gbr",
      "Print_Name": "Gbagyi",
      "Inverted_Name": "Gbagyi"
    },
    {
      "Id": "gbs",
      "Print_Name": "Gbesi Gbe",
      "Inverted_Name": "Gbe, Gbesi"
    },
    {
      "Id": "gbu",
      "Print_Name": "Gagadu",
      "Inverted_Name": "Gagadu"
    },
    {
      "Id": "gbv",
      "Print_Name": "Gbanu",
      "Inverted_Name": "Gbanu"
    },
    {
      "Id": "gbw",
      "Print_Name": "Gabi-Gabi",
      "Inverted_Name": "Gabi-Gabi"
    },
    {
      "Id": "gbx",
      "Print_Name": "Eastern Xwla Gbe",
      "Inverted_Name": "Gbe, Eastern Xwla"
    },
    {
      "Id": "gby",
      "Print_Name": "Gbari",
      "Inverted_Name": "Gbari"
    },
    {
      "Id": "gbz",
      "Print_Name": "Zoroastrian Dari",
      "Inverted_Name": "Dari, Zoroastrian"
    },
    {
      "Id": "gcc",
      "Print_Name": "Mali",
      "Inverted_Name": "Mali"
    },
    {
      "Id": "gcd",
      "Print_Name": "Ganggalida",
      "Inverted_Name": "Ganggalida"
    },
    {
      "Id": "gce",
      "Print_Name": "Galice",
      "Inverted_Name": "Galice"
    },
    {
      "Id": "gcf",
      "Print_Name": "Guadeloupean Creole French",
      "Inverted_Name": "Creole French, Guadeloupean"
    },
    {
      "Id": "gcl",
      "Print_Name": "Grenadian Creole English",
      "Inverted_Name": "Creole English, Grenadian"
    },
    {
      "Id": "gcn",
      "Print_Name": "Gaina",
      "Inverted_Name": "Gaina"
    },
    {
      "Id": "gcr",
      "Print_Name": "Guianese Creole French",
      "Inverted_Name": "Creole French, Guianese"
    },
    {
      "Id": "gct",
      "Print_Name": "Colonia Tovar German",
      "Inverted_Name": "German, Colonia Tovar"
    },
    {
      "Id": "gda",
      "Print_Name": "Gade Lohar",
      "Inverted_Name": "Lohar, Gade"
    },
    {
      "Id": "gdb",
      "Print_Name": "Pottangi Ollar Gadaba",
      "Inverted_Name": "Gadaba, Pottangi Ollar"
    },
    {
      "Id": "gdc",
      "Print_Name": "Gugu Badhun",
      "Inverted_Name": "Gugu Badhun"
    },
    {
      "Id": "gdd",
      "Print_Name": "Gedaged",
      "Inverted_Name": "Gedaged"
    },
    {
      "Id": "gde",
      "Print_Name": "Gude",
      "Inverted_Name": "Gude"
    },
    {
      "Id": "gdf",
      "Print_Name": "Guduf-Gava",
      "Inverted_Name": "Guduf-Gava"
    },
    {
      "Id": "gdg",
      "Print_Name": "Ga'dang",
      "Inverted_Name": "Ga'dang"
    },
    {
      "Id": "gdh",
      "Print_Name": "Gadjerawang",
      "Inverted_Name": "Gadjerawang"
    },
    {
      "Id": "gdh",
      "Print_Name": "Gajirrabeng",
      "Inverted_Name": "Gajirrabeng"
    },
    {
      "Id": "gdi",
      "Print_Name": "Gundi",
      "Inverted_Name": "Gundi"
    },
    {
      "Id": "gdj",
      "Print_Name": "Gurdjar",
      "Inverted_Name": "Gurdjar"
    },
    {
      "Id": "gdk",
      "Print_Name": "Gadang",
      "Inverted_Name": "Gadang"
    },
    {
      "Id": "gdl",
      "Print_Name": "Dirasha",
      "Inverted_Name": "Dirasha"
    },
    {
      "Id": "gdm",
      "Print_Name": "Laal",
      "Inverted_Name": "Laal"
    },
    {
      "Id": "gdn",
      "Print_Name": "Umanakaina",
      "Inverted_Name": "Umanakaina"
    },
    {
      "Id": "gdo",
      "Print_Name": "Ghodoberi",
      "Inverted_Name": "Ghodoberi"
    },
    {
      "Id": "gdq",
      "Print_Name": "Mehri",
      "Inverted_Name": "Mehri"
    },
    {
      "Id": "gdr",
      "Print_Name": "Wipi",
      "Inverted_Name": "Wipi"
    },
    {
      "Id": "gds",
      "Print_Name": "Ghandruk Sign Language",
      "Inverted_Name": "Ghandruk Sign Language"
    },
    {
      "Id": "gdt",
      "Print_Name": "Kungardutyi",
      "Inverted_Name": "Kungardutyi"
    },
    {
      "Id": "gdu",
      "Print_Name": "Gudu",
      "Inverted_Name": "Gudu"
    },
    {
      "Id": "gdx",
      "Print_Name": "Godwari",
      "Inverted_Name": "Godwari"
    },
    {
      "Id": "gea",
      "Print_Name": "Geruma",
      "Inverted_Name": "Geruma"
    },
    {
      "Id": "geb",
      "Print_Name": "Kire",
      "Inverted_Name": "Kire"
    },
    {
      "Id": "gec",
      "Print_Name": "Gboloo Grebo",
      "Inverted_Name": "Grebo, Gboloo"
    },
    {
      "Id": "ged",
      "Print_Name": "Gade",
      "Inverted_Name": "Gade"
    },
    {
      "Id": "gef",
      "Print_Name": "Gerai",
      "Inverted_Name": "Gerai"
    },
    {
      "Id": "geg",
      "Print_Name": "Gengle",
      "Inverted_Name": "Gengle"
    },
    {
      "Id": "geh",
      "Print_Name": "Hutterisch",
      "Inverted_Name": "Hutterisch"
    },
    {
      "Id": "geh",
      "Print_Name": "Hutterite German",
      "Inverted_Name": "German, Hutterite"
    },
    {
      "Id": "gei",
      "Print_Name": "Gebe",
      "Inverted_Name": "Gebe"
    },
    {
      "Id": "gej",
      "Print_Name": "Gen",
      "Inverted_Name": "Gen"
    },
    {
      "Id": "gek",
      "Print_Name": "Ywom",
      "Inverted_Name": "Ywom"
    },
    {
      "Id": "gel",
      "Print_Name": "ut-Ma'in",
      "Inverted_Name": "ut-Ma'in"
    },
    {
      "Id": "geq",
      "Print_Name": "Geme",
      "Inverted_Name": "Geme"
    },
    {
      "Id": "ges",
      "Print_Name": "Geser-Gorom",
      "Inverted_Name": "Geser-Gorom"
    },
    {
      "Id": "gev",
      "Print_Name": "Eviya",
      "Inverted_Name": "Eviya"
    },
    {
      "Id": "gew",
      "Print_Name": "Gera",
      "Inverted_Name": "Gera"
    },
    {
      "Id": "gex",
      "Print_Name": "Garre",
      "Inverted_Name": "Garre"
    },
    {
      "Id": "gey",
      "Print_Name": "Enya",
      "Inverted_Name": "Enya"
    },
    {
      "Id": "gez",
      "Print_Name": "Geez",
      "Inverted_Name": "Geez"
    },
    {
      "Id": "gfk",
      "Print_Name": "Patpatar",
      "Inverted_Name": "Patpatar"
    },
    {
      "Id": "gft",
      "Print_Name": "Gafat",
      "Inverted_Name": "Gafat"
    },
    {
      "Id": "gga",
      "Print_Name": "Gao",
      "Inverted_Name": "Gao"
    },
    {
      "Id": "ggb",
      "Print_Name": "Gbii",
      "Inverted_Name": "Gbii"
    },
    {
      "Id": "ggd",
      "Print_Name": "Gugadj",
      "Inverted_Name": "Gugadj"
    },
    {
      "Id": "gge",
      "Print_Name": "Gurr-goni",
      "Inverted_Name": "Gurr-goni"
    },
    {
      "Id": "ggg",
      "Print_Name": "Gurgula",
      "Inverted_Name": "Gurgula"
    },
    {
      "Id": "ggk",
      "Print_Name": "Kungarakany",
      "Inverted_Name": "Kungarakany"
    },
    {
      "Id": "ggl",
      "Print_Name": "Ganglau",
      "Inverted_Name": "Ganglau"
    },
    {
      "Id": "ggt",
      "Print_Name": "Gitua",
      "Inverted_Name": "Gitua"
    },
    {
      "Id": "ggu",
      "Print_Name": "Gagu",
      "Inverted_Name": "Gagu"
    },
    {
      "Id": "ggu",
      "Print_Name": "Gban",
      "Inverted_Name": "Gban"
    },
    {
      "Id": "ggw",
      "Print_Name": "Gogodala",
      "Inverted_Name": "Gogodala"
    },
    {
      "Id": "gha",
      "Print_Name": "Ghadamès",
      "Inverted_Name": "Ghadamès"
    },
    {
      "Id": "ghc",
      "Print_Name": "Hiberno-Scottish Gaelic",
      "Inverted_Name": "Gaelic, Hiberno-Scottish"
    },
    {
      "Id": "ghe",
      "Print_Name": "Southern Ghale",
      "Inverted_Name": "Ghale, Southern"
    },
    {
      "Id": "ghh",
      "Print_Name": "Northern Ghale",
      "Inverted_Name": "Ghale, Northern"
    },
    {
      "Id": "ghk",
      "Print_Name": "Geko Karen",
      "Inverted_Name": "Karen, Geko"
    },
    {
      "Id": "ghl",
      "Print_Name": "Ghulfan",
      "Inverted_Name": "Ghulfan"
    },
    {
      "Id": "ghn",
      "Print_Name": "Ghanongga",
      "Inverted_Name": "Ghanongga"
    },
    {
      "Id": "gho",
      "Print_Name": "Ghomara",
      "Inverted_Name": "Ghomara"
    },
    {
      "Id": "ghr",
      "Print_Name": "Ghera",
      "Inverted_Name": "Ghera"
    },
    {
      "Id": "ghs",
      "Print_Name": "Guhu-Samane",
      "Inverted_Name": "Guhu-Samane"
    },
    {
      "Id": "ght",
      "Print_Name": "Kuke",
      "Inverted_Name": "Kuke"
    },
    {
      "Id": "ght",
      "Print_Name": "Kutang Ghale",
      "Inverted_Name": "Ghale, Kutang"
    },
    {
      "Id": "gia",
      "Print_Name": "Kija",
      "Inverted_Name": "Kija"
    },
    {
      "Id": "gib",
      "Print_Name": "Gibanawa",
      "Inverted_Name": "Gibanawa"
    },
    {
      "Id": "gic",
      "Print_Name": "Gail",
      "Inverted_Name": "Gail"
    },
    {
      "Id": "gid",
      "Print_Name": "Gidar",
      "Inverted_Name": "Gidar"
    },
    {
      "Id": "gie",
      "Print_Name": "Gaɓogbo",
      "Inverted_Name": "Gaɓogbo"
    },
    {
      "Id": "gie",
      "Print_Name": "Guébie",
      "Inverted_Name": "Guébie"
    },
    {
      "Id": "gig",
      "Print_Name": "Goaria",
      "Inverted_Name": "Goaria"
    },
    {
      "Id": "gih",
      "Print_Name": "Githabul",
      "Inverted_Name": "Githabul"
    },
    {
      "Id": "gii",
      "Print_Name": "Girirra",
      "Inverted_Name": "Girirra"
    },
    {
      "Id": "gil",
      "Print_Name": "Gilbertese",
      "Inverted_Name": "Gilbertese"
    },
    {
      "Id": "gim",
      "Print_Name": "Gimi (Eastern Highlands)",
      "Inverted_Name": "Gimi (Eastern Highlands)"
    },
    {
      "Id": "gin",
      "Print_Name": "Hinukh",
      "Inverted_Name": "Hinukh"
    },
    {
      "Id": "gip",
      "Print_Name": "Gimi (West New Britain)",
      "Inverted_Name": "Gimi (West New Britain)"
    },
    {
      "Id": "giq",
      "Print_Name": "Green Gelao",
      "Inverted_Name": "Gelao, Green"
    },
    {
      "Id": "gir",
      "Print_Name": "Red Gelao",
      "Inverted_Name": "Gelao, Red"
    },
    {
      "Id": "gis",
      "Print_Name": "North Giziga",
      "Inverted_Name": "Giziga, North"
    },
    {
      "Id": "git",
      "Print_Name": "Gitxsan",
      "Inverted_Name": "Gitxsan"
    },
    {
      "Id": "giu",
      "Print_Name": "Mulao",
      "Inverted_Name": "Mulao"
    },
    {
      "Id": "giw",
      "Print_Name": "White Gelao",
      "Inverted_Name": "Gelao, White"
    },
    {
      "Id": "gix",
      "Print_Name": "Gilima",
      "Inverted_Name": "Gilima"
    },
    {
      "Id": "giy",
      "Print_Name": "Giyug",
      "Inverted_Name": "Giyug"
    },
    {
      "Id": "giz",
      "Print_Name": "South Giziga",
      "Inverted_Name": "Giziga, South"
    },
    {
      "Id": "gjk",
      "Print_Name": "Kachi Koli",
      "Inverted_Name": "Koli, Kachi"
    },
    {
      "Id": "gjm",
      "Print_Name": "Gunditjmara",
      "Inverted_Name": "Gunditjmara"
    },
    {
      "Id": "gjn",
      "Print_Name": "Gonja",
      "Inverted_Name": "Gonja"
    },
    {
      "Id": "gjr",
      "Print_Name": "Gurindji Kriol",
      "Inverted_Name": "Gurindji Kriol"
    },
    {
      "Id": "gju",
      "Print_Name": "Gujari",
      "Inverted_Name": "Gujari"
    },
    {
      "Id": "gka",
      "Print_Name": "Guya",
      "Inverted_Name": "Guya"
    },
    {
      "Id": "gkd",
      "Print_Name": "Magɨ (Madang Province)",
      "Inverted_Name": "Magɨ (Madang Province)"
    },
    {
      "Id": "gke",
      "Print_Name": "Ndai",
      "Inverted_Name": "Ndai"
    },
    {
      "Id": "gkn",
      "Print_Name": "Gokana",
      "Inverted_Name": "Gokana"
    },
    {
      "Id": "gko",
      "Print_Name": "Kok-Nar",
      "Inverted_Name": "Kok-Nar"
    },
    {
      "Id": "gkp",
      "Print_Name": "Guinea Kpelle",
      "Inverted_Name": "Kpelle, Guinea"
    },
    {
      "Id": "gku",
      "Print_Name": "ǂUngkue",
      "Inverted_Name": "ǂUngkue"
    },
    {
      "Id": "gla",
      "Print_Name": "Gaelic",
      "Inverted_Name": "Gaelic"
    },
    {
      "Id": "gla",
      "Print_Name": "Scottish Gaelic",
      "Inverted_Name": "Gaelic, Scottish"
    },
    {
      "Id": "glb",
      "Print_Name": "Belning",
      "Inverted_Name": "Belning"
    },
    {
      "Id": "glc",
      "Print_Name": "Bon Gula",
      "Inverted_Name": "Bon Gula"
    },
    {
      "Id": "gld",
      "Print_Name": "Nanai",
      "Inverted_Name": "Nanai"
    },
    {
      "Id": "gle",
      "Print_Name": "Irish",
      "Inverted_Name": "Irish"
    },
    {
      "Id": "glg",
      "Print_Name": "Galician",
      "Inverted_Name": "Galician"
    },
    {
      "Id": "glh",
      "Print_Name": "Northwest Pashai",
      "Inverted_Name": "Pashai, Northwest"
    },
    {
      "Id": "glh",
      "Print_Name": "Northwest Pashayi",
      "Inverted_Name": "Pashayi, Northwest"
    },
    {
      "Id": "glj",
      "Print_Name": "Gula Iro",
      "Inverted_Name": "Gula Iro"
    },
    {
      "Id": "glk",
      "Print_Name": "Gilaki",
      "Inverted_Name": "Gilaki"
    },
    {
      "Id": "gll",
      "Print_Name": "Garlali",
      "Inverted_Name": "Garlali"
    },
    {
      "Id": "glo",
      "Print_Name": "Galambu",
      "Inverted_Name": "Galambu"
    },
    {
      "Id": "glr",
      "Print_Name": "Glaro-Twabo",
      "Inverted_Name": "Glaro-Twabo"
    },
    {
      "Id": "glu",
      "Print_Name": "Gula (Chad)",
      "Inverted_Name": "Gula (Chad)"
    },
    {
      "Id": "glv",
      "Print_Name": "Manx",
      "Inverted_Name": "Manx"
    },
    {
      "Id": "glw",
      "Print_Name": "Glavda",
      "Inverted_Name": "Glavda"
    },
    {
      "Id": "gly",
      "Print_Name": "Gule",
      "Inverted_Name": "Gule"
    },
    {
      "Id": "gma",
      "Print_Name": "Gambera",
      "Inverted_Name": "Gambera"
    },
    {
      "Id": "gmb",
      "Print_Name": "Gula'alaa",
      "Inverted_Name": "Gula'alaa"
    },
    {
      "Id": "gmd",
      "Print_Name": "Mághdì",
      "Inverted_Name": "Mághdì"
    },
    {
      "Id": "gmg",
      "Print_Name": "Magɨyi",
      "Inverted_Name": "Magɨyi"
    },
    {
      "Id": "gmh",
      "Print_Name": "Middle High German (ca. 1050-1500)",
      "Inverted_Name": "German, Middle High (ca. 1050-1500)"
    },
    {
      "Id": "gml",
      "Print_Name": "Middle Low German",
      "Inverted_Name": "German, Middle Low"
    },
    {
      "Id": "gmm",
      "Print_Name": "Gbaya-Mbodomo",
      "Inverted_Name": "Gbaya-Mbodomo"
    },
    {
      "Id": "gmn",
      "Print_Name": "Gimnime",
      "Inverted_Name": "Gimnime"
    },
    {
      "Id": "gmr",
      "Print_Name": "Mirning",
      "Inverted_Name": "Mirning"
    },
    {
      "Id": "gmr",
      "Print_Name": "Mirniny",
      "Inverted_Name": "Mirniny"
    },
    {
      "Id": "gmu",
      "Print_Name": "Gumalu",
      "Inverted_Name": "Gumalu"
    },
    {
      "Id": "gmv",
      "Print_Name": "Gamo",
      "Inverted_Name": "Gamo"
    },
    {
      "Id": "gmx",
      "Print_Name": "Magoma",
      "Inverted_Name": "Magoma"
    },
    {
      "Id": "gmy",
      "Print_Name": "Mycenaean Greek",
      "Inverted_Name": "Greek, Mycenaean"
    },
    {
      "Id": "gmz",
      "Print_Name": "Mgbolizhia",
      "Inverted_Name": "Mgbolizhia"
    },
    {
      "Id": "gna",
      "Print_Name": "Kaansa",
      "Inverted_Name": "Kaansa"
    },
    {
      "Id": "gnb",
      "Print_Name": "Gangte",
      "Inverted_Name": "Gangte"
    },
    {
      "Id": "gnc",
      "Print_Name": "Guanche",
      "Inverted_Name": "Guanche"
    },
    {
      "Id": "gnd",
      "Print_Name": "Zulgo-Gemzek",
      "Inverted_Name": "Zulgo-Gemzek"
    },
    {
      "Id": "gne",
      "Print_Name": "Ganang",
      "Inverted_Name": "Ganang"
    },
    {
      "Id": "gng",
      "Print_Name": "Ngangam",
      "Inverted_Name": "Ngangam"
    },
    {
      "Id": "gnh",
      "Print_Name": "Lere",
      "Inverted_Name": "Lere"
    },
    {
      "Id": "gni",
      "Print_Name": "Gooniyandi",
      "Inverted_Name": "Gooniyandi"
    },
    {
      "Id": "gnj",
      "Print_Name": "Ngen",
      "Inverted_Name": "Ngen"
    },
    {
      "Id": "gnk",
      "Print_Name": "ǁGana",
      "Inverted_Name": "ǁGana"
    },
    {
      "Id": "gnl",
      "Print_Name": "Gangulu",
      "Inverted_Name": "Gangulu"
    },
    {
      "Id": "gnm",
      "Print_Name": "Ginuman",
      "Inverted_Name": "Ginuman"
    },
    {
      "Id": "gnn",
      "Print_Name": "Gumatj",
      "Inverted_Name": "Gumatj"
    },
    {
      "Id": "gno",
      "Print_Name": "Northern Gondi",
      "Inverted_Name": "Gondi, Northern"
    },
    {
      "Id": "gnq",
      "Print_Name": "Gana",
      "Inverted_Name": "Gana"
    },
    {
      "Id": "gnr",
      "Print_Name": "Gureng Gureng",
      "Inverted_Name": "Gureng Gureng"
    },
    {
      "Id": "gnt",
      "Print_Name": "Guntai",
      "Inverted_Name": "Guntai"
    },
    {
      "Id": "gnu",
      "Print_Name": "Gnau",
      "Inverted_Name": "Gnau"
    },
    {
      "Id": "gnw",
      "Print_Name": "Western Bolivian Guaraní",
      "Inverted_Name": "Guaraní, Western Bolivian"
    },
    {
      "Id": "gnz",
      "Print_Name": "Ganzi",
      "Inverted_Name": "Ganzi"
    },
    {
      "Id": "goa",
      "Print_Name": "Guro",
      "Inverted_Name": "Guro"
    },
    {
      "Id": "gob",
      "Print_Name": "Playero",
      "Inverted_Name": "Playero"
    },
    {
      "Id": "goc",
      "Print_Name": "Gorakor",
      "Inverted_Name": "Gorakor"
    },
    {
      "Id": "god",
      "Print_Name": "Godié",
      "Inverted_Name": "Godié"
    },
    {
      "Id": "goe",
      "Print_Name": "Gongduk",
      "Inverted_Name": "Gongduk"
    },
    {
      "Id": "gof",
      "Print_Name": "Gofa",
      "Inverted_Name": "Gofa"
    },
    {
      "Id": "gog",
      "Print_Name": "Gogo",
      "Inverted_Name": "Gogo"
    },
    {
      "Id": "goh",
      "Print_Name": "Old High German (ca. 750-1050)",
      "Inverted_Name": "German, Old High (ca. 750-1050)"
    },
    {
      "Id": "goi",
      "Print_Name": "Gobasi",
      "Inverted_Name": "Gobasi"
    },
    {
      "Id": "goj",
      "Print_Name": "Gowlan",
      "Inverted_Name": "Gowlan"
    },
    {
      "Id": "gok",
      "Print_Name": "Gowli",
      "Inverted_Name": "Gowli"
    },
    {
      "Id": "gol",
      "Print_Name": "Gola",
      "Inverted_Name": "Gola"
    },
    {
      "Id": "gom",
      "Print_Name": "Goan Konkani",
      "Inverted_Name": "Konkani, Goan"
    },
    {
      "Id": "gon",
      "Print_Name": "Gondi",
      "Inverted_Name": "Gondi"
    },
    {
      "Id": "goo",
      "Print_Name": "Gone Dau",
      "Inverted_Name": "Gone Dau"
    },
    {
      "Id": "gop",
      "Print_Name": "Yeretuar",
      "Inverted_Name": "Yeretuar"
    },
    {
      "Id": "goq",
      "Print_Name": "Gorap",
      "Inverted_Name": "Gorap"
    },
    {
      "Id": "gor",
      "Print_Name": "Gorontalo",
      "Inverted_Name": "Gorontalo"
    },
    {
      "Id": "gos",
      "Print_Name": "Gronings",
      "Inverted_Name": "Gronings"
    },
    {
      "Id": "got",
      "Print_Name": "Gothic",
      "Inverted_Name": "Gothic"
    },
    {
      "Id": "gou",
      "Print_Name": "Gavar",
      "Inverted_Name": "Gavar"
    },
    {
      "Id": "gov",
      "Print_Name": "Goo",
      "Inverted_Name": "Goo"
    },
    {
      "Id": "gow",
      "Print_Name": "Gorowa",
      "Inverted_Name": "Gorowa"
    },
    {
      "Id": "gox",
      "Print_Name": "Gobu",
      "Inverted_Name": "Gobu"
    },
    {
      "Id": "goy",
      "Print_Name": "Goundo",
      "Inverted_Name": "Goundo"
    },
    {
      "Id": "goz",
      "Print_Name": "Gozarkhani",
      "Inverted_Name": "Gozarkhani"
    },
    {
      "Id": "gpa",
      "Print_Name": "Gupa-Abawa",
      "Inverted_Name": "Gupa-Abawa"
    },
    {
      "Id": "gpe",
      "Print_Name": "Ghanaian Pidgin English",
      "Inverted_Name": "Pidgin English, Ghanaian"
    },
    {
      "Id": "gpn",
      "Print_Name": "Taiap",
      "Inverted_Name": "Taiap"
    },
    {
      "Id": "gqa",
      "Print_Name": "Ga'anda",
      "Inverted_Name": "Ga'anda"
    },
    {
      "Id": "gqi",
      "Print_Name": "Guiqiong",
      "Inverted_Name": "Guiqiong"
    },
    {
      "Id": "gqn",
      "Print_Name": "Guana (Brazil)",
      "Inverted_Name": "Guana (Brazil)"
    },
    {
      "Id": "gqr",
      "Print_Name": "Gor",
      "Inverted_Name": "Gor"
    },
    {
      "Id": "gqu",
      "Print_Name": "Qau",
      "Inverted_Name": "Qau"
    },
    {
      "Id": "gra",
      "Print_Name": "Rajput Garasia",
      "Inverted_Name": "Garasia, Rajput"
    },
    {
      "Id": "grb",
      "Print_Name": "Grebo",
      "Inverted_Name": "Grebo"
    },
    {
      "Id": "grc",
      "Print_Name": "Ancient Greek (to 1453)",
      "Inverted_Name": "Greek, Ancient (to 1453)"
    },
    {
      "Id": "grd",
      "Print_Name": "Guruntum-Mbaaru",
      "Inverted_Name": "Guruntum-Mbaaru"
    },
    {
      "Id": "grg",
      "Print_Name": "Madi",
      "Inverted_Name": "Madi"
    },
    {
      "Id": "grh",
      "Print_Name": "Gbiri-Niragu",
      "Inverted_Name": "Gbiri-Niragu"
    },
    {
      "Id": "gri",
      "Print_Name": "Ghari",
      "Inverted_Name": "Ghari"
    },
    {
      "Id": "grj",
      "Print_Name": "Southern Grebo",
      "Inverted_Name": "Grebo, Southern"
    },
    {
      "Id": "grm",
      "Print_Name": "Kota Marudu Talantang",
      "Inverted_Name": "Kota Marudu Talantang"
    },
    {
      "Id": "grn",
      "Print_Name": "Guarani",
      "Inverted_Name": "Guarani"
    },
    {
      "Id": "gro",
      "Print_Name": "Groma",
      "Inverted_Name": "Groma"
    },
    {
      "Id": "grq",
      "Print_Name": "Gorovu",
      "Inverted_Name": "Gorovu"
    },
    {
      "Id": "grr",
      "Print_Name": "Taznatit",
      "Inverted_Name": "Taznatit"
    },
    {
      "Id": "grs",
      "Print_Name": "Gresi",
      "Inverted_Name": "Gresi"
    },
    {
      "Id": "grt",
      "Print_Name": "Garo",
      "Inverted_Name": "Garo"
    },
    {
      "Id": "gru",
      "Print_Name": "Kistane",
      "Inverted_Name": "Kistane"
    },
    {
      "Id": "grv",
      "Print_Name": "Central Grebo",
      "Inverted_Name": "Grebo, Central"
    },
    {
      "Id": "grw",
      "Print_Name": "Gweda",
      "Inverted_Name": "Gweda"
    },
    {
      "Id": "grx",
      "Print_Name": "Guriaso",
      "Inverted_Name": "Guriaso"
    },
    {
      "Id": "gry",
      "Print_Name": "Barclayville Grebo",
      "Inverted_Name": "Grebo, Barclayville"
    },
    {
      "Id": "grz",
      "Print_Name": "Guramalum",
      "Inverted_Name": "Guramalum"
    },
    {
      "Id": "gse",
      "Print_Name": "Ghanaian Sign Language",
      "Inverted_Name": "Ghanaian Sign Language"
    },
    {
      "Id": "gsg",
      "Print_Name": "German Sign Language",
      "Inverted_Name": "German Sign Language"
    },
    {
      "Id": "gsl",
      "Print_Name": "Gusilay",
      "Inverted_Name": "Gusilay"
    },
    {
      "Id": "gsm",
      "Print_Name": "Guatemalan Sign Language",
      "Inverted_Name": "Guatemalan Sign Language"
    },
    {
      "Id": "gsn",
      "Print_Name": "Gusan",
      "Inverted_Name": "Gusan"
    },
    {
      "Id": "gsn",
      "Print_Name": "Nema",
      "Inverted_Name": "Nema"
    },
    {
      "Id": "gso",
      "Print_Name": "Southwest Gbaya",
      "Inverted_Name": "Gbaya, Southwest"
    },
    {
      "Id": "gsp",
      "Print_Name": "Wasembo",
      "Inverted_Name": "Wasembo"
    },
    {
      "Id": "gss",
      "Print_Name": "Greek Sign Language",
      "Inverted_Name": "Greek Sign Language"
    },
    {
      "Id": "gsw",
      "Print_Name": "Alemannic",
      "Inverted_Name": "Alemannic"
    },
    {
      "Id": "gsw",
      "Print_Name": "Alsatian",
      "Inverted_Name": "Alsatian"
    },
    {
      "Id": "gsw",
      "Print_Name": "Swiss German",
      "Inverted_Name": "German, Swiss"
    },
    {
      "Id": "gta",
      "Print_Name": "Guató",
      "Inverted_Name": "Guató"
    },
    {
      "Id": "gtu",
      "Print_Name": "Aghu-Tharnggala",
      "Inverted_Name": "Aghu-Tharnggala"
    },
    {
      "Id": "gua",
      "Print_Name": "Shiki",
      "Inverted_Name": "Shiki"
    },
    {
      "Id": "gub",
      "Print_Name": "Guajajára",
      "Inverted_Name": "Guajajára"
    },
    {
      "Id": "guc",
      "Print_Name": "Wayuu",
      "Inverted_Name": "Wayuu"
    },
    {
      "Id": "gud",
      "Print_Name": "Yocoboué Dida",
      "Inverted_Name": "Dida, Yocoboué"
    },
    {
      "Id": "gue",
      "Print_Name": "Gurindji",
      "Inverted_Name": "Gurindji"
    },
    {
      "Id": "guf",
      "Print_Name": "Gupapuyngu",
      "Inverted_Name": "Gupapuyngu"
    },
    {
      "Id": "gug",
      "Print_Name": "Paraguayan Guaraní",
      "Inverted_Name": "Guaraní, Paraguayan"
    },
    {
      "Id": "guh",
      "Print_Name": "Guahibo",
      "Inverted_Name": "Guahibo"
    },
    {
      "Id": "gui",
      "Print_Name": "Eastern Bolivian Guaraní",
      "Inverted_Name": "Guaraní, Eastern Bolivian"
    },
    {
      "Id": "guj",
      "Print_Name": "Gujarati",
      "Inverted_Name": "Gujarati"
    },
    {
      "Id": "guk",
      "Print_Name": "Gumuz",
      "Inverted_Name": "Gumuz"
    },
    {
      "Id": "gul",
      "Print_Name": "Sea Island Creole English",
      "Inverted_Name": "Creole English, Sea Island"
    },
    {
      "Id": "gum",
      "Print_Name": "Guambiano",
      "Inverted_Name": "Guambiano"
    },
    {
      "Id": "gun",
      "Print_Name": "Mbyá Guaraní",
      "Inverted_Name": "Guaraní, Mbyá"
    },
    {
      "Id": "guo",
      "Print_Name": "Guayabero",
      "Inverted_Name": "Guayabero"
    },
    {
      "Id": "gup",
      "Print_Name": "Gunwinggu",
      "Inverted_Name": "Gunwinggu"
    },
    {
      "Id": "guq",
      "Print_Name": "Aché",
      "Inverted_Name": "Aché"
    },
    {
      "Id": "gur",
      "Print_Name": "Farefare",
      "Inverted_Name": "Farefare"
    },
    {
      "Id": "gus",
      "Print_Name": "Guinean Sign Language",
      "Inverted_Name": "Guinean Sign Language"
    },
    {
      "Id": "gut",
      "Print_Name": "Maléku Jaíka",
      "Inverted_Name": "Maléku Jaíka"
    },
    {
      "Id": "guu",
      "Print_Name": "Yanomamö",
      "Inverted_Name": "Yanomamö"
    },
    {
      "Id": "guw",
      "Print_Name": "Gun",
      "Inverted_Name": "Gun"
    },
    {
      "Id": "gux",
      "Print_Name": "Gourmanchéma",
      "Inverted_Name": "Gourmanchéma"
    },
    {
      "Id": "guz",
      "Print_Name": "Ekegusii",
      "Inverted_Name": "Ekegusii"
    },
    {
      "Id": "guz",
      "Print_Name": "Gusii",
      "Inverted_Name": "Gusii"
    },
    {
      "Id": "gva",
      "Print_Name": "Guana (Paraguay)",
      "Inverted_Name": "Guana (Paraguay)"
    },
    {
      "Id": "gvc",
      "Print_Name": "Guanano",
      "Inverted_Name": "Guanano"
    },
    {
      "Id": "gve",
      "Print_Name": "Duwet",
      "Inverted_Name": "Duwet"
    },
    {
      "Id": "gvf",
      "Print_Name": "Golin",
      "Inverted_Name": "Golin"
    },
    {
      "Id": "gvj",
      "Print_Name": "Guajá",
      "Inverted_Name": "Guajá"
    },
    {
      "Id": "gvl",
      "Print_Name": "Gulay",
      "Inverted_Name": "Gulay"
    },
    {
      "Id": "gvm",
      "Print_Name": "Gurmana",
      "Inverted_Name": "Gurmana"
    },
    {
      "Id": "gvn",
      "Print_Name": "Kuku-Yalanji",
      "Inverted_Name": "Kuku-Yalanji"
    },
    {
      "Id": "gvo",
      "Print_Name": "Gavião Do Jiparaná",
      "Inverted_Name": "Gavião Do Jiparaná"
    },
    {
      "Id": "gvp",
      "Print_Name": "Pará Gavião",
      "Inverted_Name": "Gavião, Pará"
    },
    {
      "Id": "gvr",
      "Print_Name": "Gurung",
      "Inverted_Name": "Gurung"
    },
    {
      "Id": "gvs",
      "Print_Name": "Gumawana",
      "Inverted_Name": "Gumawana"
    },
    {
      "Id": "gvy",
      "Print_Name": "Guyani",
      "Inverted_Name": "Guyani"
    },
    {
      "Id": "gwa",
      "Print_Name": "Mbato",
      "Inverted_Name": "Mbato"
    },
    {
      "Id": "gwb",
      "Print_Name": "Gwa",
      "Inverted_Name": "Gwa"
    },
    {
      "Id": "gwc",
      "Print_Name": "Gawri",
      "Inverted_Name": "Gawri"
    },
    {
      "Id": "gwc",
      "Print_Name": "Kalami",
      "Inverted_Name": "Kalami"
    },
    {
      "Id": "gwd",
      "Print_Name": "Gawwada",
      "Inverted_Name": "Gawwada"
    },
    {
      "Id": "gwe",
      "Print_Name": "Gweno",
      "Inverted_Name": "Gweno"
    },
    {
      "Id": "gwf",
      "Print_Name": "Gowro",
      "Inverted_Name": "Gowro"
    },
    {
      "Id": "gwg",
      "Print_Name": "Moo",
      "Inverted_Name": "Moo"
    },
    {
      "Id": "gwi",
      "Print_Name": "Gwichʼin",
      "Inverted_Name": "Gwichʼin"
    },
    {
      "Id": "gwj",
      "Print_Name": "ǀGwi",
      "Inverted_Name": "ǀGwi"
    },
    {
      "Id": "gwm",
      "Print_Name": "Awngthim",
      "Inverted_Name": "Awngthim"
    },
    {
      "Id": "gwn",
      "Print_Name": "Gwandara",
      "Inverted_Name": "Gwandara"
    },
    {
      "Id": "gwr",
      "Print_Name": "Gwere",
      "Inverted_Name": "Gwere"
    },
    {
      "Id": "gwt",
      "Print_Name": "Gawar-Bati",
      "Inverted_Name": "Gawar-Bati"
    },
    {
      "Id": "gwu",
      "Print_Name": "Guwamu",
      "Inverted_Name": "Guwamu"
    },
    {
      "Id": "gww",
      "Print_Name": "Kwini",
      "Inverted_Name": "Kwini"
    },
    {
      "Id": "gwx",
      "Print_Name": "Gua",
      "Inverted_Name": "Gua"
    },
    {
      "Id": "gxx",
      "Print_Name": "Wè Southern",
      "Inverted_Name": "Wè Southern"
    },
    {
      "Id": "gya",
      "Print_Name": "Northwest Gbaya",
      "Inverted_Name": "Gbaya, Northwest"
    },
    {
      "Id": "gyb",
      "Print_Name": "Garus",
      "Inverted_Name": "Garus"
    },
    {
      "Id": "gyd",
      "Print_Name": "Kayardild",
      "Inverted_Name": "Kayardild"
    },
    {
      "Id": "gye",
      "Print_Name": "Gyem",
      "Inverted_Name": "Gyem"
    },
    {
      "Id": "gyf",
      "Print_Name": "Gungabula",
      "Inverted_Name": "Gungabula"
    },
    {
      "Id": "gyg",
      "Print_Name": "Gbayi",
      "Inverted_Name": "Gbayi"
    },
    {
      "Id": "gyi",
      "Print_Name": "Gyele",
      "Inverted_Name": "Gyele"
    },
    {
      "Id": "gyl",
      "Print_Name": "Gayil",
      "Inverted_Name": "Gayil"
    },
    {
      "Id": "gym",
      "Print_Name": "Ngäbere",
      "Inverted_Name": "Ngäbere"
    },
    {
      "Id": "gyn",
      "Print_Name": "Guyanese Creole English",
      "Inverted_Name": "Creole English, Guyanese"
    },
    {
      "Id": "gyo",
      "Print_Name": "Gyalsumdo",
      "Inverted_Name": "Gyalsumdo"
    },
    {
      "Id": "gyr",
      "Print_Name": "Guarayu",
      "Inverted_Name": "Guarayu"
    },
    {
      "Id": "gyy",
      "Print_Name": "Gunya",
      "Inverted_Name": "Gunya"
    },
    {
      "Id": "gyz",
      "Print_Name": "Geji",
      "Inverted_Name": "Geji"
    },
    {
      "Id": "gyz",
      "Print_Name": "Gyaazi",
      "Inverted_Name": "Gyaazi"
    },
    {
      "Id": "gza",
      "Print_Name": "Ganza",
      "Inverted_Name": "Ganza"
    },
    {
      "Id": "gzi",
      "Print_Name": "Gazi",
      "Inverted_Name": "Gazi"
    },
    {
      "Id": "gzn",
      "Print_Name": "Gane",
      "Inverted_Name": "Gane"
    },
    {
      "Id": "haa",
      "Print_Name": "Han",
      "Inverted_Name": "Han"
    },
    {
      "Id": "hab",
      "Print_Name": "Hanoi Sign Language",
      "Inverted_Name": "Hanoi Sign Language"
    },
    {
      "Id": "hac",
      "Print_Name": "Gurani",
      "Inverted_Name": "Gurani"
    },
    {
      "Id": "had",
      "Print_Name": "Hatam",
      "Inverted_Name": "Hatam"
    },
    {
      "Id": "hae",
      "Print_Name": "Eastern Oromo",
      "Inverted_Name": "Oromo, Eastern"
    },
    {
      "Id": "haf",
      "Print_Name": "Haiphong Sign Language",
      "Inverted_Name": "Haiphong Sign Language"
    },
    {
      "Id": "hag",
      "Print_Name": "Hanga",
      "Inverted_Name": "Hanga"
    },
    {
      "Id": "hah",
      "Print_Name": "Hahon",
      "Inverted_Name": "Hahon"
    },
    {
      "Id": "hai",
      "Print_Name": "Haida",
      "Inverted_Name": "Haida"
    },
    {
      "Id": "haj",
      "Print_Name": "Hajong",
      "Inverted_Name": "Hajong"
    },
    {
      "Id": "hak",
      "Print_Name": "Hakka Chinese",
      "Inverted_Name": "Chinese, Hakka"
    },
    {
      "Id": "hal",
      "Print_Name": "Halang",
      "Inverted_Name": "Halang"
    },
    {
      "Id": "ham",
      "Print_Name": "Hewa",
      "Inverted_Name": "Hewa"
    },
    {
      "Id": "han",
      "Print_Name": "Hangaza",
      "Inverted_Name": "Hangaza"
    },
    {
      "Id": "hao",
      "Print_Name": "Hakö",
      "Inverted_Name": "Hakö"
    },
    {
      "Id": "hap",
      "Print_Name": "Hupla",
      "Inverted_Name": "Hupla"
    },
    {
      "Id": "haq",
      "Print_Name": "Ha",
      "Inverted_Name": "Ha"
    },
    {
      "Id": "har",
      "Print_Name": "Harari",
      "Inverted_Name": "Harari"
    },
    {
      "Id": "has",
      "Print_Name": "Haisla",
      "Inverted_Name": "Haisla"
    },
    {
      "Id": "hat",
      "Print_Name": "Haitian",
      "Inverted_Name": "Haitian"
    },
    {
      "Id": "hat",
      "Print_Name": "Haitian Creole",
      "Inverted_Name": "Creole, Haitian"
    },
    {
      "Id": "hau",
      "Print_Name": "Hausa",
      "Inverted_Name": "Hausa"
    },
    {
      "Id": "hav",
      "Print_Name": "Havu",
      "Inverted_Name": "Havu"
    },
    {
      "Id": "haw",
      "Print_Name": "Hawaiian",
      "Inverted_Name": "Hawaiian"
    },
    {
      "Id": "hax",
      "Print_Name": "Southern Haida",
      "Inverted_Name": "Haida, Southern"
    },
    {
      "Id": "hay",
      "Print_Name": "Haya",
      "Inverted_Name": "Haya"
    },
    {
      "Id": "haz",
      "Print_Name": "Hazaragi",
      "Inverted_Name": "Hazaragi"
    },
    {
      "Id": "hba",
      "Print_Name": "Hamba",
      "Inverted_Name": "Hamba"
    },
    {
      "Id": "hbb",
      "Print_Name": "Huba",
      "Inverted_Name": "Huba"
    },
    {
      "Id": "hbn",
      "Print_Name": "Heiban",
      "Inverted_Name": "Heiban"
    },
    {
      "Id": "hbo",
      "Print_Name": "Ancient Hebrew",
      "Inverted_Name": "Hebrew, Ancient"
    },
    {
      "Id": "hbs",
      "Print_Name": "Serbo-Croatian",
      "Inverted_Name": "Serbo-Croatian"
    },
    {
      "Id": "hbu",
      "Print_Name": "Habu",
      "Inverted_Name": "Habu"
    },
    {
      "Id": "hca",
      "Print_Name": "Andaman Creole Hindi",
      "Inverted_Name": "Creole Hindi, Andaman"
    },
    {
      "Id": "hch",
      "Print_Name": "Huichol",
      "Inverted_Name": "Huichol"
    },
    {
      "Id": "hdn",
      "Print_Name": "Northern Haida",
      "Inverted_Name": "Haida, Northern"
    },
    {
      "Id": "hds",
      "Print_Name": "Honduras Sign Language",
      "Inverted_Name": "Honduras Sign Language"
    },
    {
      "Id": "hdy",
      "Print_Name": "Hadiyya",
      "Inverted_Name": "Hadiyya"
    },
    {
      "Id": "hea",
      "Print_Name": "Northern Qiandong Miao",
      "Inverted_Name": "Miao, Northern Qiandong"
    },
    {
      "Id": "heb",
      "Print_Name": "Hebrew",
      "Inverted_Name": "Hebrew"
    },
    {
      "Id": "hed",
      "Print_Name": "Herdé",
      "Inverted_Name": "Herdé"
    },
    {
      "Id": "heg",
      "Print_Name": "Helong",
      "Inverted_Name": "Helong"
    },
    {
      "Id": "heh",
      "Print_Name": "Hehe",
      "Inverted_Name": "Hehe"
    },
    {
      "Id": "hei",
      "Print_Name": "Heiltsuk",
      "Inverted_Name": "Heiltsuk"
    },
    {
      "Id": "hem",
      "Print_Name": "Hemba",
      "Inverted_Name": "Hemba"
    },
    {
      "Id": "her",
      "Print_Name": "Herero",
      "Inverted_Name": "Herero"
    },
    {
      "Id": "hgm",
      "Print_Name": "Haiǁom",
      "Inverted_Name": "Haiǁom"
    },
    {
      "Id": "hgw",
      "Print_Name": "Haigwai",
      "Inverted_Name": "Haigwai"
    },
    {
      "Id": "hhi",
      "Print_Name": "Hoia Hoia",
      "Inverted_Name": "Hoia Hoia"
    },
    {
      "Id": "hhr",
      "Print_Name": "Kerak",
      "Inverted_Name": "Kerak"
    },
    {
      "Id": "hhy",
      "Print_Name": "Hoyahoya",
      "Inverted_Name": "Hoyahoya"
    },
    {
      "Id": "hia",
      "Print_Name": "Lamang",
      "Inverted_Name": "Lamang"
    },
    {
      "Id": "hib",
      "Print_Name": "Hibito",
      "Inverted_Name": "Hibito"
    },
    {
      "Id": "hid",
      "Print_Name": "Hidatsa",
      "Inverted_Name": "Hidatsa"
    },
    {
      "Id": "hif",
      "Print_Name": "Fiji Hindi",
      "Inverted_Name": "Hindi, Fiji"
    },
    {
      "Id": "hig",
      "Print_Name": "Kamwe",
      "Inverted_Name": "Kamwe"
    },
    {
      "Id": "hih",
      "Print_Name": "Pamosu",
      "Inverted_Name": "Pamosu"
    },
    {
      "Id": "hii",
      "Print_Name": "Hinduri",
      "Inverted_Name": "Hinduri"
    },
    {
      "Id": "hij",
      "Print_Name": "Hijuk",
      "Inverted_Name": "Hijuk"
    },
    {
      "Id": "hik",
      "Print_Name": "Seit-Kaitetu",
      "Inverted_Name": "Seit-Kaitetu"
    },
    {
      "Id": "hil",
      "Print_Name": "Hiligaynon",
      "Inverted_Name": "Hiligaynon"
    },
    {
      "Id": "hin",
      "Print_Name": "Hindi",
      "Inverted_Name": "Hindi"
    },
    {
      "Id": "hio",
      "Print_Name": "Tsoa",
      "Inverted_Name": "Tsoa"
    },
    {
      "Id": "hir",
      "Print_Name": "Himarimã",
      "Inverted_Name": "Himarimã"
    },
    {
      "Id": "hit",
      "Print_Name": "Hittite",
      "Inverted_Name": "Hittite"
    },
    {
      "Id": "hiw",
      "Print_Name": "Hiw",
      "Inverted_Name": "Hiw"
    },
    {
      "Id": "hix",
      "Print_Name": "Hixkaryána",
      "Inverted_Name": "Hixkaryána"
    },
    {
      "Id": "hji",
      "Print_Name": "Haji",
      "Inverted_Name": "Haji"
    },
    {
      "Id": "hka",
      "Print_Name": "Kahe",
      "Inverted_Name": "Kahe"
    },
    {
      "Id": "hke",
      "Print_Name": "Hunde",
      "Inverted_Name": "Hunde"
    },
    {
      "Id": "hkh",
      "Print_Name": "Khah",
      "Inverted_Name": "Khah"
    },
    {
      "Id": "hkh",
      "Print_Name": "Poguli",
      "Inverted_Name": "Poguli"
    },
    {
      "Id": "hkk",
      "Print_Name": "Hunjara-Kaina Ke",
      "Inverted_Name": "Hunjara-Kaina Ke"
    },
    {
      "Id": "hkn",
      "Print_Name": "Mel-Khaonh",
      "Inverted_Name": "Mel-Khaonh"
    },
    {
      "Id": "hks",
      "Print_Name": "Heung Kong Sau Yue",
      "Inverted_Name": "Heung Kong Sau Yue"
    },
    {
      "Id": "hks",
      "Print_Name": "Hong Kong Sign Language",
      "Inverted_Name": "Hong Kong Sign Language"
    },
    {
      "Id": "hla",
      "Print_Name": "Halia",
      "Inverted_Name": "Halia"
    },
    {
      "Id": "hlb",
      "Print_Name": "Halbi",
      "Inverted_Name": "Halbi"
    },
    {
      "Id": "hld",
      "Print_Name": "Halang Doan",
      "Inverted_Name": "Halang Doan"
    },
    {
      "Id": "hle",
      "Print_Name": "Hlersu",
      "Inverted_Name": "Hlersu"
    },
    {
      "Id": "hlt",
      "Print_Name": "Matu Chin",
      "Inverted_Name": "Chin, Matu"
    },
    {
      "Id": "hlu",
      "Print_Name": "Hieroglyphic Luwian",
      "Inverted_Name": "Luwian, Hieroglyphic"
    },
    {
      "Id": "hma",
      "Print_Name": "Southern Mashan Hmong",
      "Inverted_Name": "Hmong, Southern Mashan"
    },
    {
      "Id": "hma",
      "Print_Name": "Southern Mashan Miao",
      "Inverted_Name": "Miao, Southern Mashan"
    },
    {
      "Id": "hmb",
      "Print_Name": "Humburi Senni Songhay",
      "Inverted_Name": "Songhay, Humburi Senni"
    },
    {
      "Id": "hmc",
      "Print_Name": "Central Huishui Hmong",
      "Inverted_Name": "Hmong, Central Huishui"
    },
    {
      "Id": "hmc",
      "Print_Name": "Central Huishui Miao",
      "Inverted_Name": "Miao, Central Huishui"
    },
    {
      "Id": "hmd",
      "Print_Name": "A-hmaos",
      "Inverted_Name": "A-hmaos"
    },
    {
      "Id": "hmd",
      "Print_Name": "Da-Hua Miao",
      "Inverted_Name": "Miao, Da-Hua"
    },
    {
      "Id": "hmd",
      "Print_Name": "Large Flowery Miao",
      "Inverted_Name": "Miao, Large Flowery"
    },
    {
      "Id": "hme",
      "Print_Name": "Eastern Huishui Hmong",
      "Inverted_Name": "Hmong, Eastern Huishui"
    },
    {
      "Id": "hme",
      "Print_Name": "Eastern Huishui Miao",
      "Inverted_Name": "Miao, Eastern Huishui"
    },
    {
      "Id": "hmf",
      "Print_Name": "Hmong Don",
      "Inverted_Name": "Hmong Don"
    },
    {
      "Id": "hmg",
      "Print_Name": "Southwestern Guiyang Hmong",
      "Inverted_Name": "Hmong, Southwestern Guiyang"
    },
    {
      "Id": "hmh",
      "Print_Name": "Southwestern Huishui Hmong",
      "Inverted_Name": "Hmong, Southwestern Huishui"
    },
    {
      "Id": "hmh",
      "Print_Name": "Southwestern Huishui Miao",
      "Inverted_Name": "Miao, Southwestern Huishui"
    },
    {
      "Id": "hmi",
      "Print_Name": "Northern Huishui Hmong",
      "Inverted_Name": "Hmong, Northern Huishui"
    },
    {
      "Id": "hmi",
      "Print_Name": "Northern Huishui Miao",
      "Inverted_Name": "Miao, Northern Huishui"
    },
    {
      "Id": "hmj",
      "Print_Name": "Ge",
      "Inverted_Name": "Ge"
    },
    {
      "Id": "hmj",
      "Print_Name": "Gejia",
      "Inverted_Name": "Gejia"
    },
    {
      "Id": "hmk",
      "Print_Name": "Maek",
      "Inverted_Name": "Maek"
    },
    {
      "Id": "hml",
      "Print_Name": "Luopohe Hmong",
      "Inverted_Name": "Hmong, Luopohe"
    },
    {
      "Id": "hml",
      "Print_Name": "Luopohe Miao",
      "Inverted_Name": "Miao, Luopohe"
    },
    {
      "Id": "hmm",
      "Print_Name": "Central Mashan Hmong",
      "Inverted_Name": "Hmong, Central Mashan"
    },
    {
      "Id": "hmm",
      "Print_Name": "Central Mashan Miao",
      "Inverted_Name": "Miao, Central Mashan"
    },
    {
      "Id": "hmn",
      "Print_Name": "Hmong",
      "Inverted_Name": "Hmong"
    },
    {
      "Id": "hmn",
      "Print_Name": "Mong",
      "Inverted_Name": "Mong"
    },
    {
      "Id": "hmo",
      "Print_Name": "Hiri Motu",
      "Inverted_Name": "Hiri Motu"
    },
    {
      "Id": "hmp",
      "Print_Name": "Northern Mashan Hmong",
      "Inverted_Name": "Hmong, Northern Mashan"
    },
    {
      "Id": "hmp",
      "Print_Name": "Northern Mashan Miao",
      "Inverted_Name": "Miao, Northern Mashan"
    },
    {
      "Id": "hmq",
      "Print_Name": "Eastern Qiandong Miao",
      "Inverted_Name": "Miao, Eastern Qiandong"
    },
    {
      "Id": "hmr",
      "Print_Name": "Hmar",
      "Inverted_Name": "Hmar"
    },
    {
      "Id": "hms",
      "Print_Name": "Southern Qiandong Miao",
      "Inverted_Name": "Miao, Southern Qiandong"
    },
    {
      "Id": "hmt",
      "Print_Name": "Hamtai",
      "Inverted_Name": "Hamtai"
    },
    {
      "Id": "hmu",
      "Print_Name": "Hamap",
      "Inverted_Name": "Hamap"
    },
    {
      "Id": "hmv",
      "Print_Name": "Hmong Dô",
      "Inverted_Name": "Hmong Dô"
    },
    {
      "Id": "hmw",
      "Print_Name": "Western Mashan Hmong",
      "Inverted_Name": "Hmong, Western Mashan"
    },
    {
      "Id": "hmw",
      "Print_Name": "Western Mashan Miao",
      "Inverted_Name": "Miao, Western Mashan"
    },
    {
      "Id": "hmy",
      "Print_Name": "Southern Guiyang Hmong",
      "Inverted_Name": "Hmong, Southern Guiyang"
    },
    {
      "Id": "hmy",
      "Print_Name": "Southern Guiyang Miao",
      "Inverted_Name": "Miao, Southern Guiyang"
    },
    {
      "Id": "hmz",
      "Print_Name": "Hmong Shua",
      "Inverted_Name": "Hmong Shua"
    },
    {
      "Id": "hmz",
      "Print_Name": "Sinicized Miao",
      "Inverted_Name": "Miao, Sinicized"
    },
    {
      "Id": "hna",
      "Print_Name": "Mina (Cameroon)",
      "Inverted_Name": "Mina (Cameroon)"
    },
    {
      "Id": "hnd",
      "Print_Name": "Southern Hindko",
      "Inverted_Name": "Hindko, Southern"
    },
    {
      "Id": "hne",
      "Print_Name": "Chhattisgarhi",
      "Inverted_Name": "Chhattisgarhi"
    },
    {
      "Id": "hng",
      "Print_Name": "Hungu",
      "Inverted_Name": "Hungu"
    },
    {
      "Id": "hnh",
      "Print_Name": "ǁAni",
      "Inverted_Name": "ǁAni"
    },
    {
      "Id": "hni",
      "Print_Name": "Hani",
      "Inverted_Name": "Hani"
    },
    {
      "Id": "hnj",
      "Print_Name": "Hmong Njua",
      "Inverted_Name": "Hmong Njua"
    },
    {
      "Id": "hnj",
      "Print_Name": "Mong Leng",
      "Inverted_Name": "Mong Leng"
    },
    {
      "Id": "hnj",
      "Print_Name": "Mong Njua",
      "Inverted_Name": "Mong Njua"
    },
    {
      "Id": "hnn",
      "Print_Name": "Hanunoo",
      "Inverted_Name": "Hanunoo"
    },
    {
      "Id": "hno",
      "Print_Name": "Northern Hindko",
      "Inverted_Name": "Hindko, Northern"
    },
    {
      "Id": "hns",
      "Print_Name": "Caribbean Hindustani",
      "Inverted_Name": "Hindustani, Caribbean"
    },
    {
      "Id": "hnu",
      "Print_Name": "Hung",
      "Inverted_Name": "Hung"
    },
    {
      "Id": "hoa",
      "Print_Name": "Hoava",
      "Inverted_Name": "Hoava"
    },
    {
      "Id": "hob",
      "Print_Name": "Mari (Madang Province)",
      "Inverted_Name": "Mari (Madang Province)"
    },
    {
      "Id": "hoc",
      "Print_Name": "Ho",
      "Inverted_Name": "Ho"
    },
    {
      "Id": "hod",
      "Print_Name": "Holma",
      "Inverted_Name": "Holma"
    },
    {
      "Id": "hoe",
      "Print_Name": "Horom",
      "Inverted_Name": "Horom"
    },
    {
      "Id": "hoh",
      "Print_Name": "Hobyót",
      "Inverted_Name": "Hobyót"
    },
    {
      "Id": "hoi",
      "Print_Name": "Holikachuk",
      "Inverted_Name": "Holikachuk"
    },
    {
      "Id": "hoj",
      "Print_Name": "Hadothi",
      "Inverted_Name": "Hadothi"
    },
    {
      "Id": "hoj",
      "Print_Name": "Haroti",
      "Inverted_Name": "Haroti"
    },
    {
      "Id": "hol",
      "Print_Name": "Holu",
      "Inverted_Name": "Holu"
    },
    {
      "Id": "hom",
      "Print_Name": "Homa",
      "Inverted_Name": "Homa"
    },
    {
      "Id": "hoo",
      "Print_Name": "Holoholo",
      "Inverted_Name": "Holoholo"
    },
    {
      "Id": "hop",
      "Print_Name": "Hopi",
      "Inverted_Name": "Hopi"
    },
    {
      "Id": "hor",
      "Print_Name": "Horo",
      "Inverted_Name": "Horo"
    },
    {
      "Id": "hos",
      "Print_Name": "Ho Chi Minh City Sign Language",
      "Inverted_Name": "Ho Chi Minh City Sign Language"
    },
    {
      "Id": "hot",
      "Print_Name": "Hote",
      "Inverted_Name": "Hote"
    },
    {
      "Id": "hot",
      "Print_Name": "Malê",
      "Inverted_Name": "Malê"
    },
    {
      "Id": "hov",
      "Print_Name": "Hovongan",
      "Inverted_Name": "Hovongan"
    },
    {
      "Id": "how",
      "Print_Name": "Honi",
      "Inverted_Name": "Honi"
    },
    {
      "Id": "hoy",
      "Print_Name": "Holiya",
      "Inverted_Name": "Holiya"
    },
    {
      "Id": "hoz",
      "Print_Name": "Hozo",
      "Inverted_Name": "Hozo"
    },
    {
      "Id": "hpo",
      "Print_Name": "Hpon",
      "Inverted_Name": "Hpon"
    },
    {
      "Id": "hps",
      "Print_Name": "Hawai'i Pidgin Sign Language",
      "Inverted_Name": "Hawai'i Pidgin Sign Language"
    },
    {
      "Id": "hps",
      "Print_Name": "Hawai'i Sign Language (HSL)",
      "Inverted_Name": "Hawai'i Sign Language (HSL)"
    },
    {
      "Id": "hra",
      "Print_Name": "Hrangkhol",
      "Inverted_Name": "Hrangkhol"
    },
    {
      "Id": "hrc",
      "Print_Name": "Niwer Mil",
      "Inverted_Name": "Niwer Mil"
    },
    {
      "Id": "hre",
      "Print_Name": "Hre",
      "Inverted_Name": "Hre"
    },
    {
      "Id": "hrk",
      "Print_Name": "Haruku",
      "Inverted_Name": "Haruku"
    },
    {
      "Id": "hrm",
      "Print_Name": "Horned Miao",
      "Inverted_Name": "Miao, Horned"
    },
    {
      "Id": "hro",
      "Print_Name": "Haroi",
      "Inverted_Name": "Haroi"
    },
    {
      "Id": "hrp",
      "Print_Name": "Nhirrpi",
      "Inverted_Name": "Nhirrpi"
    },
    {
      "Id": "hrt",
      "Print_Name": "Hértevin",
      "Inverted_Name": "Hértevin"
    },
    {
      "Id": "hru",
      "Print_Name": "Hruso",
      "Inverted_Name": "Hruso"
    },
    {
      "Id": "hrv",
      "Print_Name": "Croatian",
      "Inverted_Name": "Croatian"
    },
    {
      "Id": "hrw",
      "Print_Name": "Warwar Feni",
      "Inverted_Name": "Warwar Feni"
    },
    {
      "Id": "hrx",
      "Print_Name": "Hunsrik",
      "Inverted_Name": "Hunsrik"
    },
    {
      "Id": "hrz",
      "Print_Name": "Harzani",
      "Inverted_Name": "Harzani"
    },
    {
      "Id": "hsb",
      "Print_Name": "Upper Sorbian",
      "Inverted_Name": "Sorbian, Upper"
    },
    {
      "Id": "hsh",
      "Print_Name": "Hungarian Sign Language",
      "Inverted_Name": "Hungarian Sign Language"
    },
    {
      "Id": "hsl",
      "Print_Name": "Hausa Sign Language",
      "Inverted_Name": "Hausa Sign Language"
    },
    {
      "Id": "hsn",
      "Print_Name": "Xiang Chinese",
      "Inverted_Name": "Chinese, Xiang"
    },
    {
      "Id": "hss",
      "Print_Name": "Harsusi",
      "Inverted_Name": "Harsusi"
    },
    {
      "Id": "hti",
      "Print_Name": "Hoti",
      "Inverted_Name": "Hoti"
    },
    {
      "Id": "hto",
      "Print_Name": "Minica Huitoto",
      "Inverted_Name": "Huitoto, Minica"
    },
    {
      "Id": "hts",
      "Print_Name": "Hadza",
      "Inverted_Name": "Hadza"
    },
    {
      "Id": "htu",
      "Print_Name": "Hitu",
      "Inverted_Name": "Hitu"
    },
    {
      "Id": "htx",
      "Print_Name": "Middle Hittite",
      "Inverted_Name": "Hittite, Middle"
    },
    {
      "Id": "hub",
      "Print_Name": "Huambisa",
      "Inverted_Name": "Huambisa"
    },
    {
      "Id": "huc",
      "Print_Name": "ǂ'Amkhoe",
      "Inverted_Name": "ǂ'Amkhoe"
    },
    {
      "Id": "huc",
      "Print_Name": "ǂHua",
      "Inverted_Name": "ǂHua"
    },
    {
      "Id": "hud",
      "Print_Name": "Huaulu",
      "Inverted_Name": "Huaulu"
    },
    {
      "Id": "hue",
      "Print_Name": "San Francisco Del Mar Huave",
      "Inverted_Name": "Huave, San Francisco Del Mar"
    },
    {
      "Id": "huf",
      "Print_Name": "Humene",
      "Inverted_Name": "Humene"
    },
    {
      "Id": "hug",
      "Print_Name": "Huachipaeri",
      "Inverted_Name": "Huachipaeri"
    },
    {
      "Id": "huh",
      "Print_Name": "Huilliche",
      "Inverted_Name": "Huilliche"
    },
    {
      "Id": "hui",
      "Print_Name": "Huli",
      "Inverted_Name": "Huli"
    },
    {
      "Id": "huj",
      "Print_Name": "Northern Guiyang Hmong",
      "Inverted_Name": "Hmong, Northern Guiyang"
    },
    {
      "Id": "huj",
      "Print_Name": "Northern Guiyang Miao",
      "Inverted_Name": "Miao, Northern Guiyang"
    },
    {
      "Id": "huk",
      "Print_Name": "Hulung",
      "Inverted_Name": "Hulung"
    },
    {
      "Id": "hul",
      "Print_Name": "Hula",
      "Inverted_Name": "Hula"
    },
    {
      "Id": "hum",
      "Print_Name": "Hungana",
      "Inverted_Name": "Hungana"
    },
    {
      "Id": "hun",
      "Print_Name": "Hungarian",
      "Inverted_Name": "Hungarian"
    },
    {
      "Id": "huo",
      "Print_Name": "Hu",
      "Inverted_Name": "Hu"
    },
    {
      "Id": "hup",
      "Print_Name": "Hupa",
      "Inverted_Name": "Hupa"
    },
    {
      "Id": "huq",
      "Print_Name": "Tsat",
      "Inverted_Name": "Tsat"
    },
    {
      "Id": "hur",
      "Print_Name": "Halkomelem",
      "Inverted_Name": "Halkomelem"
    },
    {
      "Id": "hus",
      "Print_Name": "Huastec",
      "Inverted_Name": "Huastec"
    },
    {
      "Id": "hut",
      "Print_Name": "Humla",
      "Inverted_Name": "Humla"
    },
    {
      "Id": "huu",
      "Print_Name": "Murui Huitoto",
      "Inverted_Name": "Huitoto, Murui"
    },
    {
      "Id": "huv",
      "Print_Name": "San Mateo Del Mar Huave",
      "Inverted_Name": "Huave, San Mateo Del Mar"
    },
    {
      "Id": "huw",
      "Print_Name": "Hukumina",
      "Inverted_Name": "Hukumina"
    },
    {
      "Id": "hux",
      "Print_Name": "Nüpode Huitoto",
      "Inverted_Name": "Huitoto, Nüpode"
    },
    {
      "Id": "huy",
      "Print_Name": "Hulaulá",
      "Inverted_Name": "Hulaulá"
    },
    {
      "Id": "huz",
      "Print_Name": "Hunzib",
      "Inverted_Name": "Hunzib"
    },
    {
      "Id": "hvc",
      "Print_Name": "Haitian Vodoun Culture Language",
      "Inverted_Name": "Haitian Vodoun Culture Language"
    },
    {
      "Id": "hve",
      "Print_Name": "San Dionisio Del Mar Huave",
      "Inverted_Name": "Huave, San Dionisio Del Mar"
    },
    {
      "Id": "hvk",
      "Print_Name": "Haveke",
      "Inverted_Name": "Haveke"
    },
    {
      "Id": "hvn",
      "Print_Name": "Sabu",
      "Inverted_Name": "Sabu"
    },
    {
      "Id": "hvv",
      "Print_Name": "Santa María Del Mar Huave",
      "Inverted_Name": "Huave, Santa María Del Mar"
    },
    {
      "Id": "hwa",
      "Print_Name": "Wané",
      "Inverted_Name": "Wané"
    },
    {
      "Id": "hwc",
      "Print_Name": "Hawai'i Creole English",
      "Inverted_Name": "Creole English, Hawai'i"
    },
    {
      "Id": "hwc",
      "Print_Name": "Hawai'i Pidgin",
      "Inverted_Name": "Hawai'i Pidgin"
    },
    {
      "Id": "hwo",
      "Print_Name": "Hwana",
      "Inverted_Name": "Hwana"
    },
    {
      "Id": "hya",
      "Print_Name": "Hya",
      "Inverted_Name": "Hya"
    },
    {
      "Id": "hye",
      "Print_Name": "Armenian",
      "Inverted_Name": "Armenian"
    },
    {
      "Id": "hyw",
      "Print_Name": "Western Armenian",
      "Inverted_Name": "Armenian, Western"
    },
    {
      "Id": "iai",
      "Print_Name": "Iaai",
      "Inverted_Name": "Iaai"
    },
    {
      "Id": "ian",
      "Print_Name": "Iatmul",
      "Inverted_Name": "Iatmul"
    },
    {
      "Id": "iar",
      "Print_Name": "Purari",
      "Inverted_Name": "Purari"
    },
    {
      "Id": "iba",
      "Print_Name": "Iban",
      "Inverted_Name": "Iban"
    },
    {
      "Id": "ibb",
      "Print_Name": "Ibibio",
      "Inverted_Name": "Ibibio"
    },
    {
      "Id": "ibd",
      "Print_Name": "Iwaidja",
      "Inverted_Name": "Iwaidja"
    },
    {
      "Id": "ibe",
      "Print_Name": "Akpes",
      "Inverted_Name": "Akpes"
    },
    {
      "Id": "ibg",
      "Print_Name": "Ibanag",
      "Inverted_Name": "Ibanag"
    },
    {
      "Id": "ibh",
      "Print_Name": "Bih",
      "Inverted_Name": "Bih"
    },
    {
      "Id": "ibl",
      "Print_Name": "Ibaloi",
      "Inverted_Name": "Ibaloi"
    },
    {
      "Id": "ibm",
      "Print_Name": "Agoi",
      "Inverted_Name": "Agoi"
    },
    {
      "Id": "ibn",
      "Print_Name": "Ibino",
      "Inverted_Name": "Ibino"
    },
    {
      "Id": "ibo",
      "Print_Name": "Igbo",
      "Inverted_Name": "Igbo"
    },
    {
      "Id": "ibr",
      "Print_Name": "Ibuoro",
      "Inverted_Name": "Ibuoro"
    },
    {
      "Id": "ibu",
      "Print_Name": "Ibu",
      "Inverted_Name": "Ibu"
    },
    {
      "Id": "iby",
      "Print_Name": "Ibani",
      "Inverted_Name": "Ibani"
    },
    {
      "Id": "ica",
      "Print_Name": "Ede Ica",
      "Inverted_Name": "Ede Ica"
    },
    {
      "Id": "ich",
      "Print_Name": "Etkywan",
      "Inverted_Name": "Etkywan"
    },
    {
      "Id": "icl",
      "Print_Name": "Icelandic Sign Language",
      "Inverted_Name": "Icelandic Sign Language"
    },
    {
      "Id": "icr",
      "Print_Name": "Islander Creole English",
      "Inverted_Name": "Creole English, Islander"
    },
    {
      "Id": "ida",
      "Print_Name": "Idakho-Isukha-Tiriki",
      "Inverted_Name": "Idakho-Isukha-Tiriki"
    },
    {
      "Id": "ida",
      "Print_Name": "Luidakho-Luisukha-Lutirichi",
      "Inverted_Name": "Luidakho-Luisukha-Lutirichi"
    },
    {
      "Id": "idb",
      "Print_Name": "Indo-Portuguese",
      "Inverted_Name": "Indo-Portuguese"
    },
    {
      "Id": "idc",
      "Print_Name": "Ajiya",
      "Inverted_Name": "Ajiya"
    },
    {
      "Id": "idc",
      "Print_Name": "Idon",
      "Inverted_Name": "Idon"
    },
    {
      "Id": "idd",
      "Print_Name": "Ede Idaca",
      "Inverted_Name": "Ede Idaca"
    },
    {
      "Id": "ide",
      "Print_Name": "Idere",
      "Inverted_Name": "Idere"
    },
    {
      "Id": "idi",
      "Print_Name": "Idi",
      "Inverted_Name": "Idi"
    },
    {
      "Id": "ido",
      "Print_Name": "Ido",
      "Inverted_Name": "Ido"
    },
    {
      "Id": "idr",
      "Print_Name": "Indri",
      "Inverted_Name": "Indri"
    },
    {
      "Id": "ids",
      "Print_Name": "Idesa",
      "Inverted_Name": "Idesa"
    },
    {
      "Id": "idt",
      "Print_Name": "Idaté",
      "Inverted_Name": "Idaté"
    },
    {
      "Id": "idu",
      "Print_Name": "Idoma",
      "Inverted_Name": "Idoma"
    },
    {
      "Id": "ifa",
      "Print_Name": "Amganad Ifugao",
      "Inverted_Name": "Ifugao, Amganad"
    },
    {
      "Id": "ifb",
      "Print_Name": "Ayangan Ifugao",
      "Inverted_Name": "Ifugao, Ayangan"
    },
    {
      "Id": "ifb",
      "Print_Name": "Batad Ifugao",
      "Inverted_Name": "Ifugao, Batad"
    },
    {
      "Id": "ife",
      "Print_Name": "Ifè",
      "Inverted_Name": "Ifè"
    },
    {
      "Id": "iff",
      "Print_Name": "Ifo",
      "Inverted_Name": "Ifo"
    },
    {
      "Id": "ifk",
      "Print_Name": "Tuwali Ifugao",
      "Inverted_Name": "Ifugao, Tuwali"
    },
    {
      "Id": "ifm",
      "Print_Name": "Teke-Fuumu",
      "Inverted_Name": "Teke-Fuumu"
    },
    {
      "Id": "ifu",
      "Print_Name": "Mayoyao Ifugao",
      "Inverted_Name": "Ifugao, Mayoyao"
    },
    {
      "Id": "ify",
      "Print_Name": "Keley-I Kallahan",
      "Inverted_Name": "Kallahan, Keley-I"
    },
    {
      "Id": "igb",
      "Print_Name": "Ebira",
      "Inverted_Name": "Ebira"
    },
    {
      "Id": "ige",
      "Print_Name": "Igede",
      "Inverted_Name": "Igede"
    },
    {
      "Id": "igg",
      "Print_Name": "Igana",
      "Inverted_Name": "Igana"
    },
    {
      "Id": "igl",
      "Print_Name": "Igala",
      "Inverted_Name": "Igala"
    },
    {
      "Id": "igm",
      "Print_Name": "Kanggape",
      "Inverted_Name": "Kanggape"
    },
    {
      "Id": "ign",
      "Print_Name": "Ignaciano",
      "Inverted_Name": "Ignaciano"
    },
    {
      "Id": "igo",
      "Print_Name": "Isebe",
      "Inverted_Name": "Isebe"
    },
    {
      "Id": "igs",
      "Print_Name": "Interglossa",
      "Inverted_Name": "Interglossa"
    },
    {
      "Id": "igw",
      "Print_Name": "Igwe",
      "Inverted_Name": "Igwe"
    },
    {
      "Id": "ihb",
      "Print_Name": "Iha Based Pidgin",
      "Inverted_Name": "Iha Based Pidgin"
    },
    {
      "Id": "ihi",
      "Print_Name": "Ihievbe",
      "Inverted_Name": "Ihievbe"
    },
    {
      "Id": "ihp",
      "Print_Name": "Iha",
      "Inverted_Name": "Iha"
    },
    {
      "Id": "ihw",
      "Print_Name": "Bidhawal",
      "Inverted_Name": "Bidhawal"
    },
    {
      "Id": "iii",
      "Print_Name": "Nuosu",
      "Inverted_Name": "Nuosu"
    },
    {
      "Id": "iii",
      "Print_Name": "Sichuan Yi",
      "Inverted_Name": "Yi, Sichuan"
    },
    {
      "Id": "iin",
      "Print_Name": "Thiin",
      "Inverted_Name": "Thiin"
    },
    {
      "Id": "ijc",
      "Print_Name": "Izon",
      "Inverted_Name": "Izon"
    },
    {
      "Id": "ije",
      "Print_Name": "Biseni",
      "Inverted_Name": "Biseni"
    },
    {
      "Id": "ijj",
      "Print_Name": "Ede Ije",
      "Inverted_Name": "Ede Ije"
    },
    {
      "Id": "ijn",
      "Print_Name": "Kalabari",
      "Inverted_Name": "Kalabari"
    },
    {
      "Id": "ijs",
      "Print_Name": "Southeast Ijo",
      "Inverted_Name": "Ijo, Southeast"
    },
    {
      "Id": "ike",
      "Print_Name": "Eastern Canadian Inuktitut",
      "Inverted_Name": "Inuktitut, Eastern Canadian"
    },
    {
      "Id": "ikh",
      "Print_Name": "Ikhin-Arokho",
      "Inverted_Name": "Ikhin-Arokho"
    },
    {
      "Id": "iki",
      "Print_Name": "Iko",
      "Inverted_Name": "Iko"
    },
    {
      "Id": "ikk",
      "Print_Name": "Ika",
      "Inverted_Name": "Ika"
    },
    {
      "Id": "ikl",
      "Print_Name": "Ikulu",
      "Inverted_Name": "Ikulu"
    },
    {
      "Id": "iko",
      "Print_Name": "Olulumo-Ikom",
      "Inverted_Name": "Olulumo-Ikom"
    },
    {
      "Id": "ikp",
      "Print_Name": "Ikpeshi",
      "Inverted_Name": "Ikpeshi"
    },
    {
      "Id": "ikr",
      "Print_Name": "Ikaranggal",
      "Inverted_Name": "Ikaranggal"
    },
    {
      "Id": "iks",
      "Print_Name": "Inuit Sign Language",
      "Inverted_Name": "Inuit Sign Language"
    },
    {
      "Id": "ikt",
      "Print_Name": "Inuinnaqtun",
      "Inverted_Name": "Inuinnaqtun"
    },
    {
      "Id": "ikt",
      "Print_Name": "Western Canadian Inuktitut",
      "Inverted_Name": "Inuktitut, Western Canadian"
    },
    {
      "Id": "iku",
      "Print_Name": "Inuktitut",
      "Inverted_Name": "Inuktitut"
    },
    {
      "Id": "ikv",
      "Print_Name": "Iku-Gora-Ankwa",
      "Inverted_Name": "Iku-Gora-Ankwa"
    },
    {
      "Id": "ikw",
      "Print_Name": "Ikwere",
      "Inverted_Name": "Ikwere"
    },
    {
      "Id": "ikx",
      "Print_Name": "Ik",
      "Inverted_Name": "Ik"
    },
    {
      "Id": "ikz",
      "Print_Name": "Ikizu",
      "Inverted_Name": "Ikizu"
    },
    {
      "Id": "ila",
      "Print_Name": "Ile Ape",
      "Inverted_Name": "Ile Ape"
    },
    {
      "Id": "ilb",
      "Print_Name": "Ila",
      "Inverted_Name": "Ila"
    },
    {
      "Id": "ile",
      "Print_Name": "Interlingue",
      "Inverted_Name": "Interlingue"
    },
    {
      "Id": "ile",
      "Print_Name": "Occidental",
      "Inverted_Name": "Occidental"
    },
    {
      "Id": "ilg",
      "Print_Name": "Garig-Ilgar",
      "Inverted_Name": "Garig-Ilgar"
    },
    {
      "Id": "ili",
      "Print_Name": "Ili Turki",
      "Inverted_Name": "Ili Turki"
    },
    {
      "Id": "ilk",
      "Print_Name": "Ilongot",
      "Inverted_Name": "Ilongot"
    },
    {
      "Id": "ilm",
      "Print_Name": "Iranun (Malaysia)",
      "Inverted_Name": "Iranun (Malaysia)"
    },
    {
      "Id": "ilo",
      "Print_Name": "Iloko",
      "Inverted_Name": "Iloko"
    },
    {
      "Id": "ilp",
      "Print_Name": "Iranun (Philippines)",
      "Inverted_Name": "Iranun (Philippines)"
    },
    {
      "Id": "ils",
      "Print_Name": "International Sign",
      "Inverted_Name": "International Sign"
    },
    {
      "Id": "ilu",
      "Print_Name": "Ili'uun",
      "Inverted_Name": "Ili'uun"
    },
    {
      "Id": "ilv",
      "Print_Name": "Ilue",
      "Inverted_Name": "Ilue"
    },
    {
      "Id": "ima",
      "Print_Name": "Mala Malasar",
      "Inverted_Name": "Malasar, Mala"
    },
    {
      "Id": "imi",
      "Print_Name": "Anamgura",
      "Inverted_Name": "Anamgura"
    },
    {
      "Id": "iml",
      "Print_Name": "Miluk",
      "Inverted_Name": "Miluk"
    },
    {
      "Id": "imn",
      "Print_Name": "Imonda",
      "Inverted_Name": "Imonda"
    },
    {
      "Id": "imo",
      "Print_Name": "Imbongu",
      "Inverted_Name": "Imbongu"
    },
    {
      "Id": "imr",
      "Print_Name": "Imroing",
      "Inverted_Name": "Imroing"
    },
    {
      "Id": "ims",
      "Print_Name": "Marsian",
      "Inverted_Name": "Marsian"
    },
    {
      "Id": "imt",
      "Print_Name": "Imotong",
      "Inverted_Name": "Imotong"
    },
    {
      "Id": "imy",
      "Print_Name": "Milyan",
      "Inverted_Name": "Milyan"
    },
    {
      "Id": "ina",
      "Print_Name": "Interlingua (International Auxiliary Language Association)",
      "Inverted_Name": "Interlingua (International Auxiliary Language Association)"
    },
    {
      "Id": "inb",
      "Print_Name": "Inga",
      "Inverted_Name": "Inga"
    },
    {
      "Id": "ind",
      "Print_Name": "Indonesian",
      "Inverted_Name": "Indonesian"
    },
    {
      "Id": "ing",
      "Print_Name": "Degexit'an",
      "Inverted_Name": "Degexit'an"
    },
    {
      "Id": "inh",
      "Print_Name": "Ingush",
      "Inverted_Name": "Ingush"
    },
    {
      "Id": "inj",
      "Print_Name": "Jungle Inga",
      "Inverted_Name": "Inga, Jungle"
    },
    {
      "Id": "inl",
      "Print_Name": "Indonesian Sign Language",
      "Inverted_Name": "Indonesian Sign Language"
    },
    {
      "Id": "inm",
      "Print_Name": "Minaean",
      "Inverted_Name": "Minaean"
    },
    {
      "Id": "inn",
      "Print_Name": "Isinai",
      "Inverted_Name": "Isinai"
    },
    {
      "Id": "ino",
      "Print_Name": "Inoke-Yate",
      "Inverted_Name": "Inoke-Yate"
    },
    {
      "Id": "inp",
      "Print_Name": "Iñapari",
      "Inverted_Name": "Iñapari"
    },
    {
      "Id": "ins",
      "Print_Name": "Indian Sign Language",
      "Inverted_Name": "Indian Sign Language"
    },
    {
      "Id": "int",
      "Print_Name": "Intha",
      "Inverted_Name": "Intha"
    },
    {
      "Id": "inz",
      "Print_Name": "Ineseño",
      "Inverted_Name": "Ineseño"
    },
    {
      "Id": "ior",
      "Print_Name": "Inor",
      "Inverted_Name": "Inor"
    },
    {
      "Id": "iou",
      "Print_Name": "Tuma-Irumu",
      "Inverted_Name": "Tuma-Irumu"
    },
    {
      "Id": "iow",
      "Print_Name": "Iowa-Oto",
      "Inverted_Name": "Iowa-Oto"
    },
    {
      "Id": "ipi",
      "Print_Name": "Ipili",
      "Inverted_Name": "Ipili"
    },
    {
      "Id": "ipk",
      "Print_Name": "Inupiaq",
      "Inverted_Name": "Inupiaq"
    },
    {
      "Id": "ipo",
      "Print_Name": "Ipiko",
      "Inverted_Name": "Ipiko"
    },
    {
      "Id": "iqu",
      "Print_Name": "Iquito",
      "Inverted_Name": "Iquito"
    },
    {
      "Id": "iqw",
      "Print_Name": "Ikwo",
      "Inverted_Name": "Ikwo"
    },
    {
      "Id": "ire",
      "Print_Name": "Iresim",
      "Inverted_Name": "Iresim"
    },
    {
      "Id": "irh",
      "Print_Name": "Irarutu",
      "Inverted_Name": "Irarutu"
    },
    {
      "Id": "iri",
      "Print_Name": "Irigwe",
      "Inverted_Name": "Irigwe"
    },
    {
      "Id": "iri",
      "Print_Name": "Rigwe",
      "Inverted_Name": "Rigwe"
    },
    {
      "Id": "irk",
      "Print_Name": "Iraqw",
      "Inverted_Name": "Iraqw"
    },
    {
      "Id": "irn",
      "Print_Name": "Irántxe",
      "Inverted_Name": "Irántxe"
    },
    {
      "Id": "irr",
      "Print_Name": "Ir",
      "Inverted_Name": "Ir"
    },
    {
      "Id": "iru",
      "Print_Name": "Irula",
      "Inverted_Name": "Irula"
    },
    {
      "Id": "irx",
      "Print_Name": "Kamberau",
      "Inverted_Name": "Kamberau"
    },
    {
      "Id": "iry",
      "Print_Name": "Iraya",
      "Inverted_Name": "Iraya"
    },
    {
      "Id": "isa",
      "Print_Name": "Isabi",
      "Inverted_Name": "Isabi"
    },
    {
      "Id": "isc",
      "Print_Name": "Isconahua",
      "Inverted_Name": "Isconahua"
    },
    {
      "Id": "isd",
      "Print_Name": "Isnag",
      "Inverted_Name": "Isnag"
    },
    {
      "Id": "ise",
      "Print_Name": "Italian Sign Language",
      "Inverted_Name": "Italian Sign Language"
    },
    {
      "Id": "isg",
      "Print_Name": "Irish Sign Language",
      "Inverted_Name": "Irish Sign Language"
    },
    {
      "Id": "ish",
      "Print_Name": "Esan",
      "Inverted_Name": "Esan"
    },
    {
      "Id": "isi",
      "Print_Name": "Nkem-Nkum",
      "Inverted_Name": "Nkem-Nkum"
    },
    {
      "Id": "isk",
      "Print_Name": "Ishkashimi",
      "Inverted_Name": "Ishkashimi"
    },
    {
      "Id": "isl",
      "Print_Name": "Icelandic",
      "Inverted_Name": "Icelandic"
    },
    {
      "Id": "ism",
      "Print_Name": "Masimasi",
      "Inverted_Name": "Masimasi"
    },
    {
      "Id": "isn",
      "Print_Name": "Isanzu",
      "Inverted_Name": "Isanzu"
    },
    {
      "Id": "iso",
      "Print_Name": "Isoko",
      "Inverted_Name": "Isoko"
    },
    {
      "Id": "isr",
      "Print_Name": "Israeli Sign Language",
      "Inverted_Name": "Israeli Sign Language"
    },
    {
      "Id": "ist",
      "Print_Name": "Istriot",
      "Inverted_Name": "Istriot"
    },
    {
      "Id": "isu",
      "Print_Name": "Isu (Menchum Division)",
      "Inverted_Name": "Isu (Menchum Division)"
    },
    {
      "Id": "ita",
      "Print_Name": "Italian",
      "Inverted_Name": "Italian"
    },
    {
      "Id": "itb",
      "Print_Name": "Binongan Itneg",
      "Inverted_Name": "Itneg, Binongan"
    },
    {
      "Id": "itd",
      "Print_Name": "Southern Tidung",
      "Inverted_Name": "Tidung, Southern"
    },
    {
      "Id": "ite",
      "Print_Name": "Itene",
      "Inverted_Name": "Itene"
    },
    {
      "Id": "iti",
      "Print_Name": "Inlaod Itneg",
      "Inverted_Name": "Itneg, Inlaod"
    },
    {
      "Id": "itk",
      "Print_Name": "Judeo-Italian",
      "Inverted_Name": "Judeo-Italian"
    },
    {
      "Id": "itl",
      "Print_Name": "Itelmen",
      "Inverted_Name": "Itelmen"
    },
    {
      "Id": "itm",
      "Print_Name": "Itu Mbon Uzo",
      "Inverted_Name": "Itu Mbon Uzo"
    },
    {
      "Id": "ito",
      "Print_Name": "Itonama",
      "Inverted_Name": "Itonama"
    },
    {
      "Id": "itr",
      "Print_Name": "Iteri",
      "Inverted_Name": "Iteri"
    },
    {
      "Id": "its",
      "Print_Name": "Isekiri",
      "Inverted_Name": "Isekiri"
    },
    {
      "Id": "itt",
      "Print_Name": "Maeng Itneg",
      "Inverted_Name": "Itneg, Maeng"
    },
    {
      "Id": "itv",
      "Print_Name": "Itawit",
      "Inverted_Name": "Itawit"
    },
    {
      "Id": "itw",
      "Print_Name": "Ito",
      "Inverted_Name": "Ito"
    },
    {
      "Id": "itx",
      "Print_Name": "Itik",
      "Inverted_Name": "Itik"
    },
    {
      "Id": "ity",
      "Print_Name": "Moyadan Itneg",
      "Inverted_Name": "Itneg, Moyadan"
    },
    {
      "Id": "itz",
      "Print_Name": "Itzá",
      "Inverted_Name": "Itzá"
    },
    {
      "Id": "ium",
      "Print_Name": "Iu Mien",
      "Inverted_Name": "Mien, Iu"
    },
    {
      "Id": "ivb",
      "Print_Name": "Ibatan",
      "Inverted_Name": "Ibatan"
    },
    {
      "Id": "ivv",
      "Print_Name": "Ivatan",
      "Inverted_Name": "Ivatan"
    },
    {
      "Id": "iwk",
      "Print_Name": "I-Wak",
      "Inverted_Name": "I-Wak"
    },
    {
      "Id": "iwm",
      "Print_Name": "Iwam",
      "Inverted_Name": "Iwam"
    },
    {
      "Id": "iwo",
      "Print_Name": "Iwur",
      "Inverted_Name": "Iwur"
    },
    {
      "Id": "iws",
      "Print_Name": "Sepik Iwam",
      "Inverted_Name": "Iwam, Sepik"
    },
    {
      "Id": "ixc",
      "Print_Name": "Ixcatec",
      "Inverted_Name": "Ixcatec"
    },
    {
      "Id": "ixl",
      "Print_Name": "Ixil",
      "Inverted_Name": "Ixil"
    },
    {
      "Id": "iya",
      "Print_Name": "Iyayu",
      "Inverted_Name": "Iyayu"
    },
    {
      "Id": "iyo",
      "Print_Name": "Mesaka",
      "Inverted_Name": "Mesaka"
    },
    {
      "Id": "iyx",
      "Print_Name": "Yaka (Congo)",
      "Inverted_Name": "Yaka (Congo)"
    },
    {
      "Id": "izh",
      "Print_Name": "Ingrian",
      "Inverted_Name": "Ingrian"
    },
    {
      "Id": "izm",
      "Print_Name": "Kizamani",
      "Inverted_Name": "Kizamani"
    },
    {
      "Id": "izr",
      "Print_Name": "Izere",
      "Inverted_Name": "Izere"
    },
    {
      "Id": "izz",
      "Print_Name": "Izii",
      "Inverted_Name": "Izii"
    },
    {
      "Id": "jaa",
      "Print_Name": "Jamamadí",
      "Inverted_Name": "Jamamadí"
    },
    {
      "Id": "jab",
      "Print_Name": "Hyam",
      "Inverted_Name": "Hyam"
    },
    {
      "Id": "jac",
      "Print_Name": "Jakalteko",
      "Inverted_Name": "Jakalteko"
    },
    {
      "Id": "jac",
      "Print_Name": "Popti'",
      "Inverted_Name": "Popti'"
    },
    {
      "Id": "jad",
      "Print_Name": "Jahanka",
      "Inverted_Name": "Jahanka"
    },
    {
      "Id": "jae",
      "Print_Name": "Yabem",
      "Inverted_Name": "Yabem"
    },
    {
      "Id": "jaf",
      "Print_Name": "Jara",
      "Inverted_Name": "Jara"
    },
    {
      "Id": "jah",
      "Print_Name": "Jah Hut",
      "Inverted_Name": "Jah Hut"
    },
    {
      "Id": "jaj",
      "Print_Name": "Zazao",
      "Inverted_Name": "Zazao"
    },
    {
      "Id": "jak",
      "Print_Name": "Jakun",
      "Inverted_Name": "Jakun"
    },
    {
      "Id": "jal",
      "Print_Name": "Yalahatan",
      "Inverted_Name": "Yalahatan"
    },
    {
      "Id": "jam",
      "Print_Name": "Jamaican Creole English",
      "Inverted_Name": "Creole English, Jamaican"
    },
    {
      "Id": "jan",
      "Print_Name": "Jandai",
      "Inverted_Name": "Jandai"
    },
    {
      "Id": "jao",
      "Print_Name": "Yanyuwa",
      "Inverted_Name": "Yanyuwa"
    },
    {
      "Id": "jaq",
      "Print_Name": "Yaqay",
      "Inverted_Name": "Yaqay"
    },
    {
      "Id": "jas",
      "Print_Name": "New Caledonian Javanese",
      "Inverted_Name": "Javanese, New Caledonian"
    },
    {
      "Id": "jat",
      "Print_Name": "Jakati",
      "Inverted_Name": "Jakati"
    },
    {
      "Id": "jau",
      "Print_Name": "Yaur",
      "Inverted_Name": "Yaur"
    },
    {
      "Id": "jav",
      "Print_Name": "Javanese",
      "Inverted_Name": "Javanese"
    },
    {
      "Id": "jax",
      "Print_Name": "Jambi Malay",
      "Inverted_Name": "Malay, Jambi"
    },
    {
      "Id": "jay",
      "Print_Name": "Nhangu",
      "Inverted_Name": "Nhangu"
    },
    {
      "Id": "jay",
      "Print_Name": "Yan-nhangu",
      "Inverted_Name": "Yan-nhangu"
    },
    {
      "Id": "jaz",
      "Print_Name": "Jawe",
      "Inverted_Name": "Jawe"
    },
    {
      "Id": "jbe",
      "Print_Name": "Judeo-Berber",
      "Inverted_Name": "Judeo-Berber"
    },
    {
      "Id": "jbi",
      "Print_Name": "Badjiri",
      "Inverted_Name": "Badjiri"
    },
    {
      "Id": "jbj",
      "Print_Name": "Arandai",
      "Inverted_Name": "Arandai"
    },
    {
      "Id": "jbk",
      "Print_Name": "Barikewa",
      "Inverted_Name": "Barikewa"
    },
    {
      "Id": "jbm",
      "Print_Name": "Bijim",
      "Inverted_Name": "Bijim"
    },
    {
      "Id": "jbn",
      "Print_Name": "Nafusi",
      "Inverted_Name": "Nafusi"
    },
    {
      "Id": "jbo",
      "Print_Name": "Lojban",
      "Inverted_Name": "Lojban"
    },
    {
      "Id": "jbr",
      "Print_Name": "Jofotek-Bromnya",
      "Inverted_Name": "Jofotek-Bromnya"
    },
    {
      "Id": "jbt",
      "Print_Name": "Jabutí",
      "Inverted_Name": "Jabutí"
    },
    {
      "Id": "jbu",
      "Print_Name": "Jukun Takum",
      "Inverted_Name": "Jukun Takum"
    },
    {
      "Id": "jbw",
      "Print_Name": "Yawijibaya",
      "Inverted_Name": "Yawijibaya"
    },
    {
      "Id": "jcs",
      "Print_Name": "Jamaican Country Sign Language",
      "Inverted_Name": "Jamaican Country Sign Language"
    },
    {
      "Id": "jct",
      "Print_Name": "Krymchak",
      "Inverted_Name": "Krymchak"
    },
    {
      "Id": "jda",
      "Print_Name": "Jad",
      "Inverted_Name": "Jad"
    },
    {
      "Id": "jdg",
      "Print_Name": "Jadgali",
      "Inverted_Name": "Jadgali"
    },
    {
      "Id": "jdt",
      "Print_Name": "Judeo-Tat",
      "Inverted_Name": "Judeo-Tat"
    },
    {
      "Id": "jeb",
      "Print_Name": "Jebero",
      "Inverted_Name": "Jebero"
    },
    {
      "Id": "jee",
      "Print_Name": "Jerung",
      "Inverted_Name": "Jerung"
    },
    {
      "Id": "jeh",
      "Print_Name": "Jeh",
      "Inverted_Name": "Jeh"
    },
    {
      "Id": "jei",
      "Print_Name": "Yei",
      "Inverted_Name": "Yei"
    },
    {
      "Id": "jek",
      "Print_Name": "Jeri Kuo",
      "Inverted_Name": "Jeri Kuo"
    },
    {
      "Id": "jel",
      "Print_Name": "Yelmek",
      "Inverted_Name": "Yelmek"
    },
    {
      "Id": "jen",
      "Print_Name": "Dza",
      "Inverted_Name": "Dza"
    },
    {
      "Id": "jer",
      "Print_Name": "Jere",
      "Inverted_Name": "Jere"
    },
    {
      "Id": "jet",
      "Print_Name": "Manem",
      "Inverted_Name": "Manem"
    },
    {
      "Id": "jeu",
      "Print_Name": "Jonkor Bourmataguil",
      "Inverted_Name": "Jonkor Bourmataguil"
    },
    {
      "Id": "jgb",
      "Print_Name": "Ngbee",
      "Inverted_Name": "Ngbee"
    },
    {
      "Id": "jge",
      "Print_Name": "Judeo-Georgian",
      "Inverted_Name": "Judeo-Georgian"
    },
    {
      "Id": "jgk",
      "Print_Name": "Gwak",
      "Inverted_Name": "Gwak"
    },
    {
      "Id": "jgo",
      "Print_Name": "Ngomba",
      "Inverted_Name": "Ngomba"
    },
    {
      "Id": "jhi",
      "Print_Name": "Jehai",
      "Inverted_Name": "Jehai"
    },
    {
      "Id": "jhs",
      "Print_Name": "Jhankot Sign Language",
      "Inverted_Name": "Jhankot Sign Language"
    },
    {
      "Id": "jia",
      "Print_Name": "Jina",
      "Inverted_Name": "Jina"
    },
    {
      "Id": "jib",
      "Print_Name": "Jibu",
      "Inverted_Name": "Jibu"
    },
    {
      "Id": "jic",
      "Print_Name": "Tol",
      "Inverted_Name": "Tol"
    },
    {
      "Id": "jid",
      "Print_Name": "Bu (Kaduna State)",
      "Inverted_Name": "Bu (Kaduna State)"
    },
    {
      "Id": "jie",
      "Print_Name": "Jilbe",
      "Inverted_Name": "Jilbe"
    },
    {
      "Id": "jig",
      "Print_Name": "Djingili",
      "Inverted_Name": "Djingili"
    },
    {
      "Id": "jig",
      "Print_Name": "Jingulu",
      "Inverted_Name": "Jingulu"
    },
    {
      "Id": "jih",
      "Print_Name": "Shangzhai",
      "Inverted_Name": "Shangzhai"
    },
    {
      "Id": "jih",
      "Print_Name": "sTodsde",
      "Inverted_Name": "sTodsde"
    },
    {
      "Id": "jii",
      "Print_Name": "Jiiddu",
      "Inverted_Name": "Jiiddu"
    },
    {
      "Id": "jil",
      "Print_Name": "Jilim",
      "Inverted_Name": "Jilim"
    },
    {
      "Id": "jim",
      "Print_Name": "Jimi (Cameroon)",
      "Inverted_Name": "Jimi (Cameroon)"
    },
    {
      "Id": "jio",
      "Print_Name": "Jiamao",
      "Inverted_Name": "Jiamao"
    },
    {
      "Id": "jiq",
      "Print_Name": "Guanyinqiao",
      "Inverted_Name": "Guanyinqiao"
    },
    {
      "Id": "jiq",
      "Print_Name": "Lavrung",
      "Inverted_Name": "Lavrung"
    },
    {
      "Id": "jit",
      "Print_Name": "Jita",
      "Inverted_Name": "Jita"
    },
    {
      "Id": "jiu",
      "Print_Name": "Youle Jinuo",
      "Inverted_Name": "Jinuo, Youle"
    },
    {
      "Id": "jiv",
      "Print_Name": "Shuar",
      "Inverted_Name": "Shuar"
    },
    {
      "Id": "jiy",
      "Print_Name": "Buyuan Jinuo",
      "Inverted_Name": "Jinuo, Buyuan"
    },
    {
      "Id": "jje",
      "Print_Name": "Jejueo",
      "Inverted_Name": "Jejueo"
    },
    {
      "Id": "jjr",
      "Print_Name": "Bankal",
      "Inverted_Name": "Bankal"
    },
    {
      "Id": "jka",
      "Print_Name": "Kaera",
      "Inverted_Name": "Kaera"
    },
    {
      "Id": "jkm",
      "Print_Name": "Mobwa Karen",
      "Inverted_Name": "Karen, Mobwa"
    },
    {
      "Id": "jko",
      "Print_Name": "Kubo",
      "Inverted_Name": "Kubo"
    },
    {
      "Id": "jkp",
      "Print_Name": "Paku Karen",
      "Inverted_Name": "Karen, Paku"
    },
    {
      "Id": "jkr",
      "Print_Name": "Koro (India)",
      "Inverted_Name": "Koro (India)"
    },
    {
      "Id": "jks",
      "Print_Name": "Amami Koniya Sign Language",
      "Inverted_Name": "Amami Koniya Sign Language"
    },
    {
      "Id": "jku",
      "Print_Name": "Labir",
      "Inverted_Name": "Labir"
    },
    {
      "Id": "jle",
      "Print_Name": "Ngile",
      "Inverted_Name": "Ngile"
    },
    {
      "Id": "jls",
      "Print_Name": "Jamaican Sign Language",
      "Inverted_Name": "Jamaican Sign Language"
    },
    {
      "Id": "jma",
      "Print_Name": "Dima",
      "Inverted_Name": "Dima"
    },
    {
      "Id": "jmb",
      "Print_Name": "Zumbun",
      "Inverted_Name": "Zumbun"
    },
    {
      "Id": "jmc",
      "Print_Name": "Machame",
      "Inverted_Name": "Machame"
    },
    {
      "Id": "jmd",
      "Print_Name": "Yamdena",
      "Inverted_Name": "Yamdena"
    },
    {
      "Id": "jmi",
      "Print_Name": "Jimi (Nigeria)",
      "Inverted_Name": "Jimi (Nigeria)"
    },
    {
      "Id": "jml",
      "Print_Name": "Jumli",
      "Inverted_Name": "Jumli"
    },
    {
      "Id": "jmn",
      "Print_Name": "Makuri Naga",
      "Inverted_Name": "Naga, Makuri"
    },
    {
      "Id": "jmr",
      "Print_Name": "Kamara",
      "Inverted_Name": "Kamara"
    },
    {
      "Id": "jms",
      "Print_Name": "Mashi (Nigeria)",
      "Inverted_Name": "Mashi (Nigeria)"
    },
    {
      "Id": "jmw",
      "Print_Name": "Mouwase",
      "Inverted_Name": "Mouwase"
    },
    {
      "Id": "jmx",
      "Print_Name": "Western Juxtlahuaca Mixtec",
      "Inverted_Name": "Mixtec, Western Juxtlahuaca"
    },
    {
      "Id": "jna",
      "Print_Name": "Jangshung",
      "Inverted_Name": "Jangshung"
    },
    {
      "Id": "jnd",
      "Print_Name": "Jandavra",
      "Inverted_Name": "Jandavra"
    },
    {
      "Id": "jng",
      "Print_Name": "Yangman",
      "Inverted_Name": "Yangman"
    },
    {
      "Id": "jni",
      "Print_Name": "Janji",
      "Inverted_Name": "Janji"
    },
    {
      "Id": "jnj",
      "Print_Name": "Yemsa",
      "Inverted_Name": "Yemsa"
    },
    {
      "Id": "jnl",
      "Print_Name": "Rawat",
      "Inverted_Name": "Rawat"
    },
    {
      "Id": "jns",
      "Print_Name": "Jaunsari",
      "Inverted_Name": "Jaunsari"
    },
    {
      "Id": "job",
      "Print_Name": "Joba",
      "Inverted_Name": "Joba"
    },
    {
      "Id": "jod",
      "Print_Name": "Wojenaka",
      "Inverted_Name": "Wojenaka"
    },
    {
      "Id": "jog",
      "Print_Name": "Jogi",
      "Inverted_Name": "Jogi"
    },
    {
      "Id": "jor",
      "Print_Name": "Jorá",
      "Inverted_Name": "Jorá"
    },
    {
      "Id": "jos",
      "Print_Name": "Jordanian Sign Language",
      "Inverted_Name": "Jordanian Sign Language"
    },
    {
      "Id": "jow",
      "Print_Name": "Jowulu",
      "Inverted_Name": "Jowulu"
    },
    {
      "Id": "jpa",
      "Print_Name": "Jewish Palestinian Aramaic",
      "Inverted_Name": "Aramaic, Jewish Palestinian"
    },
    {
      "Id": "jpn",
      "Print_Name": "Japanese",
      "Inverted_Name": "Japanese"
    },
    {
      "Id": "jpr",
      "Print_Name": "Judeo-Persian",
      "Inverted_Name": "Judeo-Persian"
    },
    {
      "Id": "jqr",
      "Print_Name": "Jaqaru",
      "Inverted_Name": "Jaqaru"
    },
    {
      "Id": "jra",
      "Print_Name": "Jarai",
      "Inverted_Name": "Jarai"
    },
    {
      "Id": "jrb",
      "Print_Name": "Judeo-Arabic",
      "Inverted_Name": "Judeo-Arabic"
    },
    {
      "Id": "jrr",
      "Print_Name": "Jiru",
      "Inverted_Name": "Jiru"
    },
    {
      "Id": "jrt",
      "Print_Name": "Jakattoe",
      "Inverted_Name": "Jakattoe"
    },
    {
      "Id": "jru",
      "Print_Name": "Japrería",
      "Inverted_Name": "Japrería"
    },
    {
      "Id": "jsl",
      "Print_Name": "Japanese Sign Language",
      "Inverted_Name": "Japanese Sign Language"
    },
    {
      "Id": "jua",
      "Print_Name": "Júma",
      "Inverted_Name": "Júma"
    },
    {
      "Id": "jub",
      "Print_Name": "Wannu",
      "Inverted_Name": "Wannu"
    },
    {
      "Id": "juc",
      "Print_Name": "Jurchen",
      "Inverted_Name": "Jurchen"
    },
    {
      "Id": "jud",
      "Print_Name": "Worodougou",
      "Inverted_Name": "Worodougou"
    },
    {
      "Id": "juh",
      "Print_Name": "Hõne",
      "Inverted_Name": "Hõne"
    },
    {
      "Id": "jui",
      "Print_Name": "Ngadjuri",
      "Inverted_Name": "Ngadjuri"
    },
    {
      "Id": "juk",
      "Print_Name": "Wapan",
      "Inverted_Name": "Wapan"
    },
    {
      "Id": "jul",
      "Print_Name": "Jirel",
      "Inverted_Name": "Jirel"
    },
    {
      "Id": "jum",
      "Print_Name": "Jumjum",
      "Inverted_Name": "Jumjum"
    },
    {
      "Id": "jun",
      "Print_Name": "Juang",
      "Inverted_Name": "Juang"
    },
    {
      "Id": "juo",
      "Print_Name": "Jiba",
      "Inverted_Name": "Jiba"
    },
    {
      "Id": "jup",
      "Print_Name": "Hupdë",
      "Inverted_Name": "Hupdë"
    },
    {
      "Id": "jur",
      "Print_Name": "Jurúna",
      "Inverted_Name": "Jurúna"
    },
    {
      "Id": "jus",
      "Print_Name": "Jumla Sign Language",
      "Inverted_Name": "Jumla Sign Language"
    },
    {
      "Id": "jut",
      "Print_Name": "Jutish",
      "Inverted_Name": "Jutish"
    },
    {
      "Id": "juu",
      "Print_Name": "Ju",
      "Inverted_Name": "Ju"
    },
    {
      "Id": "juw",
      "Print_Name": "Wãpha",
      "Inverted_Name": "Wãpha"
    },
    {
      "Id": "juy",
      "Print_Name": "Juray",
      "Inverted_Name": "Juray"
    },
    {
      "Id": "jvd",
      "Print_Name": "Javindo",
      "Inverted_Name": "Javindo"
    },
    {
      "Id": "jvn",
      "Print_Name": "Caribbean Javanese",
      "Inverted_Name": "Javanese, Caribbean"
    },
    {
      "Id": "jwi",
      "Print_Name": "Jwira-Pepesa",
      "Inverted_Name": "Jwira-Pepesa"
    },
    {
      "Id": "jya",
      "Print_Name": "Jiarong",
      "Inverted_Name": "Jiarong"
    },
    {
      "Id": "jye",
      "Print_Name": "Judeo-Yemeni Arabic",
      "Inverted_Name": "Arabic, Judeo-Yemeni"
    },
    {
      "Id": "jyy",
      "Print_Name": "Jaya",
      "Inverted_Name": "Jaya"
    },
    {
      "Id": "kaa",
      "Print_Name": "Karakalpak",
      "Inverted_Name": "Karakalpak"
    },
    {
      "Id": "kaa",
      "Print_Name": "Kara-Kalpak",
      "Inverted_Name": "Kara-Kalpak"
    },
    {
      "Id": "kab",
      "Print_Name": "Kabyle",
      "Inverted_Name": "Kabyle"
    },
    {
      "Id": "kac",
      "Print_Name": "Jingpho",
      "Inverted_Name": "Jingpho"
    },
    {
      "Id": "kac",
      "Print_Name": "Kachin",
      "Inverted_Name": "Kachin"
    },
    {
      "Id": "kad",
      "Print_Name": "Adara",
      "Inverted_Name": "Adara"
    },
    {
      "Id": "kae",
      "Print_Name": "Ketangalan",
      "Inverted_Name": "Ketangalan"
    },
    {
      "Id": "kaf",
      "Print_Name": "Katso",
      "Inverted_Name": "Katso"
    },
    {
      "Id": "kag",
      "Print_Name": "Kajaman",
      "Inverted_Name": "Kajaman"
    },
    {
      "Id": "kah",
      "Print_Name": "Kara (Central African Republic)",
      "Inverted_Name": "Kara (Central African Republic)"
    },
    {
      "Id": "kai",
      "Print_Name": "Karekare",
      "Inverted_Name": "Karekare"
    },
    {
      "Id": "kaj",
      "Print_Name": "Jju",
      "Inverted_Name": "Jju"
    },
    {
      "Id": "kak",
      "Print_Name": "Kalanguya",
      "Inverted_Name": "Kalanguya"
    },
    {
      "Id": "kak",
      "Print_Name": "Kayapa Kallahan",
      "Inverted_Name": "Kallahan, Kayapa"
    },
    {
      "Id": "kal",
      "Print_Name": "Greenlandic",
      "Inverted_Name": "Greenlandic"
    },
    {
      "Id": "kal",
      "Print_Name": "Kalaallisut",
      "Inverted_Name": "Kalaallisut"
    },
    {
      "Id": "kam",
      "Print_Name": "Kamba (Kenya)",
      "Inverted_Name": "Kamba (Kenya)"
    },
    {
      "Id": "kan",
      "Print_Name": "Kannada",
      "Inverted_Name": "Kannada"
    },
    {
      "Id": "kao",
      "Print_Name": "Xaasongaxango",
      "Inverted_Name": "Xaasongaxango"
    },
    {
      "Id": "kap",
      "Print_Name": "Bezhta",
      "Inverted_Name": "Bezhta"
    },
    {
      "Id": "kaq",
      "Print_Name": "Capanahua",
      "Inverted_Name": "Capanahua"
    },
    {
      "Id": "kas",
      "Print_Name": "Kashmiri",
      "Inverted_Name": "Kashmiri"
    },
    {
      "Id": "kat",
      "Print_Name": "Georgian",
      "Inverted_Name": "Georgian"
    },
    {
      "Id": "kau",
      "Print_Name": "Kanuri",
      "Inverted_Name": "Kanuri"
    },
    {
      "Id": "kav",
      "Print_Name": "Katukína",
      "Inverted_Name": "Katukína"
    },
    {
      "Id": "kaw",
      "Print_Name": "Kawi",
      "Inverted_Name": "Kawi"
    },
    {
      "Id": "kax",
      "Print_Name": "Kao",
      "Inverted_Name": "Kao"
    },
    {
      "Id": "kay",
      "Print_Name": "Kamayurá",
      "Inverted_Name": "Kamayurá"
    },
    {
      "Id": "kaz",
      "Print_Name": "Kazakh",
      "Inverted_Name": "Kazakh"
    },
    {
      "Id": "kba",
      "Print_Name": "Kalarko",
      "Inverted_Name": "Kalarko"
    },
    {
      "Id": "kbb",
      "Print_Name": "Kaxuiâna",
      "Inverted_Name": "Kaxuiâna"
    },
    {
      "Id": "kbc",
      "Print_Name": "Kadiwéu",
      "Inverted_Name": "Kadiwéu"
    },
    {
      "Id": "kbd",
      "Print_Name": "Kabardian",
      "Inverted_Name": "Kabardian"
    },
    {
      "Id": "kbe",
      "Print_Name": "Kanju",
      "Inverted_Name": "Kanju"
    },
    {
      "Id": "kbg",
      "Print_Name": "Khamba",
      "Inverted_Name": "Khamba"
    },
    {
      "Id": "kbh",
      "Print_Name": "Camsá",
      "Inverted_Name": "Camsá"
    },
    {
      "Id": "kbi",
      "Print_Name": "Kaptiau",
      "Inverted_Name": "Kaptiau"
    },
    {
      "Id": "kbj",
      "Print_Name": "Kari",
      "Inverted_Name": "Kari"
    },
    {
      "Id": "kbk",
      "Print_Name": "Grass Koiari",
      "Inverted_Name": "Koiari, Grass"
    },
    {
      "Id": "kbl",
      "Print_Name": "Kanembu",
      "Inverted_Name": "Kanembu"
    },
    {
      "Id": "kbm",
      "Print_Name": "Iwal",
      "Inverted_Name": "Iwal"
    },
    {
      "Id": "kbn",
      "Print_Name": "Kare (Central African Republic)",
      "Inverted_Name": "Kare (Central African Republic)"
    },
    {
      "Id": "kbo",
      "Print_Name": "Keliko",
      "Inverted_Name": "Keliko"
    },
    {
      "Id": "kbp",
      "Print_Name": "Kabiyè",
      "Inverted_Name": "Kabiyè"
    },
    {
      "Id": "kbq",
      "Print_Name": "Kamano",
      "Inverted_Name": "Kamano"
    },
    {
      "Id": "kbr",
      "Print_Name": "Kafa",
      "Inverted_Name": "Kafa"
    },
    {
      "Id": "kbs",
      "Print_Name": "Kande",
      "Inverted_Name": "Kande"
    },
    {
      "Id": "kbt",
      "Print_Name": "Abadi",
      "Inverted_Name": "Abadi"
    },
    {
      "Id": "kbu",
      "Print_Name": "Kabutra",
      "Inverted_Name": "Kabutra"
    },
    {
      "Id": "kbv",
      "Print_Name": "Dera (Indonesia)",
      "Inverted_Name": "Dera (Indonesia)"
    },
    {
      "Id": "kbw",
      "Print_Name": "Kaiep",
      "Inverted_Name": "Kaiep"
    },
    {
      "Id": "kbx",
      "Print_Name": "Ap Ma",
      "Inverted_Name": "Ap Ma"
    },
    {
      "Id": "kby",
      "Print_Name": "Manga Kanuri",
      "Inverted_Name": "Kanuri, Manga"
    },
    {
      "Id": "kbz",
      "Print_Name": "Duhwa",
      "Inverted_Name": "Duhwa"
    },
    {
      "Id": "kca",
      "Print_Name": "Khanty",
      "Inverted_Name": "Khanty"
    },
    {
      "Id": "kcb",
      "Print_Name": "Kawacha",
      "Inverted_Name": "Kawacha"
    },
    {
      "Id": "kcc",
      "Print_Name": "Lubila",
      "Inverted_Name": "Lubila"
    },
    {
      "Id": "kcd",
      "Print_Name": "Ngkâlmpw Kanum",
      "Inverted_Name": "Kanum, Ngkâlmpw"
    },
    {
      "Id": "kce",
      "Print_Name": "Kaivi",
      "Inverted_Name": "Kaivi"
    },
    {
      "Id": "kcf",
      "Print_Name": "Ukaan",
      "Inverted_Name": "Ukaan"
    },
    {
      "Id": "kcg",
      "Print_Name": "Tyap",
      "Inverted_Name": "Tyap"
    },
    {
      "Id": "kch",
      "Print_Name": "Vono",
      "Inverted_Name": "Vono"
    },
    {
      "Id": "kci",
      "Print_Name": "Kamantan",
      "Inverted_Name": "Kamantan"
    },
    {
      "Id": "kcj",
      "Print_Name": "Kobiana",
      "Inverted_Name": "Kobiana"
    },
    {
      "Id": "kck",
      "Print_Name": "Kalanga",
      "Inverted_Name": "Kalanga"
    },
    {
      "Id": "kcl",
      "Print_Name": "Kala",
      "Inverted_Name": "Kala"
    },
    {
      "Id": "kcl",
      "Print_Name": "Kela (Papua New Guinea)",
      "Inverted_Name": "Kela (Papua New Guinea)"
    },
    {
      "Id": "kcm",
      "Print_Name": "Gula (Central African Republic)",
      "Inverted_Name": "Gula (Central African Republic)"
    },
    {
      "Id": "kcn",
      "Print_Name": "Nubi",
      "Inverted_Name": "Nubi"
    },
    {
      "Id": "kco",
      "Print_Name": "Kinalakna",
      "Inverted_Name": "Kinalakna"
    },
    {
      "Id": "kcp",
      "Print_Name": "Kanga",
      "Inverted_Name": "Kanga"
    },
    {
      "Id": "kcq",
      "Print_Name": "Kamo",
      "Inverted_Name": "Kamo"
    },
    {
      "Id": "kcr",
      "Print_Name": "Katla",
      "Inverted_Name": "Katla"
    },
    {
      "Id": "kcs",
      "Print_Name": "Koenoem",
      "Inverted_Name": "Koenoem"
    },
    {
      "Id": "kct",
      "Print_Name": "Kaian",
      "Inverted_Name": "Kaian"
    },
    {
      "Id": "kcu",
      "Print_Name": "Kami (Tanzania)",
      "Inverted_Name": "Kami (Tanzania)"
    },
    {
      "Id": "kcv",
      "Print_Name": "Kete",
      "Inverted_Name": "Kete"
    },
    {
      "Id": "kcw",
      "Print_Name": "Kabwari",
      "Inverted_Name": "Kabwari"
    },
    {
      "Id": "kcx",
      "Print_Name": "Kachama-Ganjule",
      "Inverted_Name": "Kachama-Ganjule"
    },
    {
      "Id": "kcy",
      "Print_Name": "Korandje",
      "Inverted_Name": "Korandje"
    },
    {
      "Id": "kcz",
      "Print_Name": "Konongo",
      "Inverted_Name": "Konongo"
    },
    {
      "Id": "kda",
      "Print_Name": "Worimi",
      "Inverted_Name": "Worimi"
    },
    {
      "Id": "kdc",
      "Print_Name": "Kutu",
      "Inverted_Name": "Kutu"
    },
    {
      "Id": "kdd",
      "Print_Name": "Yankunytjatjara",
      "Inverted_Name": "Yankunytjatjara"
    },
    {
      "Id": "kde",
      "Print_Name": "Makonde",
      "Inverted_Name": "Makonde"
    },
    {
      "Id": "kdf",
      "Print_Name": "Mamusi",
      "Inverted_Name": "Mamusi"
    },
    {
      "Id": "kdg",
      "Print_Name": "Seba",
      "Inverted_Name": "Seba"
    },
    {
      "Id": "kdh",
      "Print_Name": "Tem",
      "Inverted_Name": "Tem"
    },
    {
      "Id": "kdi",
      "Print_Name": "Kumam",
      "Inverted_Name": "Kumam"
    },
    {
      "Id": "kdj",
      "Print_Name": "Karamojong",
      "Inverted_Name": "Karamojong"
    },
    {
      "Id": "kdk",
      "Print_Name": "Kwényi",
      "Inverted_Name": "Kwényi"
    },
    {
      "Id": "kdk",
      "Print_Name": "Numèè",
      "Inverted_Name": "Numèè"
    },
    {
      "Id": "kdl",
      "Print_Name": "Tsikimba",
      "Inverted_Name": "Tsikimba"
    },
    {
      "Id": "kdm",
      "Print_Name": "Kagoma",
      "Inverted_Name": "Kagoma"
    },
    {
      "Id": "kdn",
      "Print_Name": "Kunda",
      "Inverted_Name": "Kunda"
    },
    {
      "Id": "kdp",
      "Print_Name": "Kaningdon-Nindem",
      "Inverted_Name": "Kaningdon-Nindem"
    },
    {
      "Id": "kdq",
      "Print_Name": "Koch",
      "Inverted_Name": "Koch"
    },
    {
      "Id": "kdr",
      "Print_Name": "Karaim",
      "Inverted_Name": "Karaim"
    },
    {
      "Id": "kdt",
      "Print_Name": "Kuy",
      "Inverted_Name": "Kuy"
    },
    {
      "Id": "kdu",
      "Print_Name": "Kadaru",
      "Inverted_Name": "Kadaru"
    },
    {
      "Id": "kdw",
      "Print_Name": "Koneraw",
      "Inverted_Name": "Koneraw"
    },
    {
      "Id": "kdx",
      "Print_Name": "Kam",
      "Inverted_Name": "Kam"
    },
    {
      "Id": "kdy",
      "Print_Name": "Keder",
      "Inverted_Name": "Keder"
    },
    {
      "Id": "kdy",
      "Print_Name": "Keijar",
      "Inverted_Name": "Keijar"
    },
    {
      "Id": "kdz",
      "Print_Name": "Kwaja",
      "Inverted_Name": "Kwaja"
    },
    {
      "Id": "kea",
      "Print_Name": "Kabuverdianu",
      "Inverted_Name": "Kabuverdianu"
    },
    {
      "Id": "keb",
      "Print_Name": "Kélé",
      "Inverted_Name": "Kélé"
    },
    {
      "Id": "kec",
      "Print_Name": "Keiga",
      "Inverted_Name": "Keiga"
    },
    {
      "Id": "ked",
      "Print_Name": "Kerewe",
      "Inverted_Name": "Kerewe"
    },
    {
      "Id": "kee",
      "Print_Name": "Eastern Keres",
      "Inverted_Name": "Keres, Eastern"
    },
    {
      "Id": "kef",
      "Print_Name": "Kpessi",
      "Inverted_Name": "Kpessi"
    },
    {
      "Id": "keg",
      "Print_Name": "Tese",
      "Inverted_Name": "Tese"
    },
    {
      "Id": "keh",
      "Print_Name": "Keak",
      "Inverted_Name": "Keak"
    },
    {
      "Id": "kei",
      "Print_Name": "Kei",
      "Inverted_Name": "Kei"
    },
    {
      "Id": "kej",
      "Print_Name": "Kadar",
      "Inverted_Name": "Kadar"
    },
    {
      "Id": "kek",
      "Print_Name": "Kekchí",
      "Inverted_Name": "Kekchí"
    },
    {
      "Id": "kel",
      "Print_Name": "Kela (Democratic Republic of Congo)",
      "Inverted_Name": "Kela (Democratic Republic of Congo)"
    },
    {
      "Id": "kem",
      "Print_Name": "Kemak",
      "Inverted_Name": "Kemak"
    },
    {
      "Id": "ken",
      "Print_Name": "Kenyang",
      "Inverted_Name": "Kenyang"
    },
    {
      "Id": "keo",
      "Print_Name": "Kakwa",
      "Inverted_Name": "Kakwa"
    },
    {
      "Id": "kep",
      "Print_Name": "Kaikadi",
      "Inverted_Name": "Kaikadi"
    },
    {
      "Id": "keq",
      "Print_Name": "Kamar",
      "Inverted_Name": "Kamar"
    },
    {
      "Id": "ker",
      "Print_Name": "Kera",
      "Inverted_Name": "Kera"
    },
    {
      "Id": "kes",
      "Print_Name": "Kugbo",
      "Inverted_Name": "Kugbo"
    },
    {
      "Id": "ket",
      "Print_Name": "Ket",
      "Inverted_Name": "Ket"
    },
    {
      "Id": "keu",
      "Print_Name": "Akebu",
      "Inverted_Name": "Akebu"
    },
    {
      "Id": "kev",
      "Print_Name": "Kanikkaran",
      "Inverted_Name": "Kanikkaran"
    },
    {
      "Id": "kew",
      "Print_Name": "West Kewa",
      "Inverted_Name": "Kewa, West"
    },
    {
      "Id": "kex",
      "Print_Name": "Kukna",
      "Inverted_Name": "Kukna"
    },
    {
      "Id": "key",
      "Print_Name": "Kupia",
      "Inverted_Name": "Kupia"
    },
    {
      "Id": "kez",
      "Print_Name": "Kukele",
      "Inverted_Name": "Kukele"
    },
    {
      "Id": "kfa",
      "Print_Name": "Kodava",
      "Inverted_Name": "Kodava"
    },
    {
      "Id": "kfb",
      "Print_Name": "Northwestern Kolami",
      "Inverted_Name": "Kolami, Northwestern"
    },
    {
      "Id": "kfc",
      "Print_Name": "Konda-Dora",
      "Inverted_Name": "Konda-Dora"
    },
    {
      "Id": "kfd",
      "Print_Name": "Korra Koraga",
      "Inverted_Name": "Koraga, Korra"
    },
    {
      "Id": "kfe",
      "Print_Name": "Kota (India)",
      "Inverted_Name": "Kota (India)"
    },
    {
      "Id": "kff",
      "Print_Name": "Koya",
      "Inverted_Name": "Koya"
    },
    {
      "Id": "kfg",
      "Print_Name": "Kudiya",
      "Inverted_Name": "Kudiya"
    },
    {
      "Id": "kfh",
      "Print_Name": "Kurichiya",
      "Inverted_Name": "Kurichiya"
    },
    {
      "Id": "kfi",
      "Print_Name": "Kannada Kurumba",
      "Inverted_Name": "Kurumba, Kannada"
    },
    {
      "Id": "kfj",
      "Print_Name": "Kemiehua",
      "Inverted_Name": "Kemiehua"
    },
    {
      "Id": "kfk",
      "Print_Name": "Kinnauri",
      "Inverted_Name": "Kinnauri"
    },
    {
      "Id": "kfl",
      "Print_Name": "Kung",
      "Inverted_Name": "Kung"
    },
    {
      "Id": "kfm",
      "Print_Name": "Khunsari",
      "Inverted_Name": "Khunsari"
    },
    {
      "Id": "kfn",
      "Print_Name": "Kuk",
      "Inverted_Name": "Kuk"
    },
    {
      "Id": "kfo",
      "Print_Name": "Koro (Côte d'Ivoire)",
      "Inverted_Name": "Koro (Côte d'Ivoire)"
    },
    {
      "Id": "kfp",
      "Print_Name": "Korwa",
      "Inverted_Name": "Korwa"
    },
    {
      "Id": "kfq",
      "Print_Name": "Korku",
      "Inverted_Name": "Korku"
    },
    {
      "Id": "kfr",
      "Print_Name": "Kachhi",
      "Inverted_Name": "Kachhi"
    },
    {
      "Id": "kfr",
      "Print_Name": "Kutchi",
      "Inverted_Name": "Kutchi"
    },
    {
      "Id": "kfs",
      "Print_Name": "Bilaspuri",
      "Inverted_Name": "Bilaspuri"
    },
    {
      "Id": "kft",
      "Print_Name": "Kanjari",
      "Inverted_Name": "Kanjari"
    },
    {
      "Id": "kfu",
      "Print_Name": "Katkari",
      "Inverted_Name": "Katkari"
    },
    {
      "Id": "kfv",
      "Print_Name": "Kurmukar",
      "Inverted_Name": "Kurmukar"
    },
    {
      "Id": "kfw",
      "Print_Name": "Kharam Naga",
      "Inverted_Name": "Naga, Kharam"
    },
    {
      "Id": "kfx",
      "Print_Name": "Kullu Pahari",
      "Inverted_Name": "Pahari, Kullu"
    },
    {
      "Id": "kfy",
      "Print_Name": "Kumaoni",
      "Inverted_Name": "Kumaoni"
    },
    {
      "Id": "kfz",
      "Print_Name": "Koromfé",
      "Inverted_Name": "Koromfé"
    },
    {
      "Id": "kga",
      "Print_Name": "Koyaga",
      "Inverted_Name": "Koyaga"
    },
    {
      "Id": "kgb",
      "Print_Name": "Kawe",
      "Inverted_Name": "Kawe"
    },
    {
      "Id": "kge",
      "Print_Name": "Komering",
      "Inverted_Name": "Komering"
    },
    {
      "Id": "kgf",
      "Print_Name": "Kube",
      "Inverted_Name": "Kube"
    },
    {
      "Id": "kgg",
      "Print_Name": "Kusunda",
      "Inverted_Name": "Kusunda"
    },
    {
      "Id": "kgi",
      "Print_Name": "Selangor Sign Language",
      "Inverted_Name": "Selangor Sign Language"
    },
    {
      "Id": "kgj",
      "Print_Name": "Gamale Kham",
      "Inverted_Name": "Kham, Gamale"
    },
    {
      "Id": "kgk",
      "Print_Name": "Kaiwá",
      "Inverted_Name": "Kaiwá"
    },
    {
      "Id": "kgl",
      "Print_Name": "Kunggari",
      "Inverted_Name": "Kunggari"
    },
    {
      "Id": "kgn",
      "Print_Name": "Karingani",
      "Inverted_Name": "Karingani"
    },
    {
      "Id": "kgo",
      "Print_Name": "Krongo",
      "Inverted_Name": "Krongo"
    },
    {
      "Id": "kgp",
      "Print_Name": "Kaingang",
      "Inverted_Name": "Kaingang"
    },
    {
      "Id": "kgq",
      "Print_Name": "Kamoro",
      "Inverted_Name": "Kamoro"
    },
    {
      "Id": "kgr",
      "Print_Name": "Abun",
      "Inverted_Name": "Abun"
    },
    {
      "Id": "kgs",
      "Print_Name": "Kumbainggar",
      "Inverted_Name": "Kumbainggar"
    },
    {
      "Id": "kgt",
      "Print_Name": "Somyev",
      "Inverted_Name": "Somyev"
    },
    {
      "Id": "kgu",
      "Print_Name": "Kobol",
      "Inverted_Name": "Kobol"
    },
    {
      "Id": "kgv",
      "Print_Name": "Karas",
      "Inverted_Name": "Karas"
    },
    {
      "Id": "kgw",
      "Print_Name": "Karon Dori",
      "Inverted_Name": "Karon Dori"
    },
    {
      "Id": "kgx",
      "Print_Name": "Kamaru",
      "Inverted_Name": "Kamaru"
    },
    {
      "Id": "kgy",
      "Print_Name": "Kyerung",
      "Inverted_Name": "Kyerung"
    },
    {
      "Id": "kha",
      "Print_Name": "Khasi",
      "Inverted_Name": "Khasi"
    },
    {
      "Id": "khb",
      "Print_Name": "Lü",
      "Inverted_Name": "Lü"
    },
    {
      "Id": "khc",
      "Print_Name": "Tukang Besi North",
      "Inverted_Name": "Tukang Besi North"
    },
    {
      "Id": "khd",
      "Print_Name": "Bädi Kanum",
      "Inverted_Name": "Kanum, Bädi"
    },
    {
      "Id": "khe",
      "Print_Name": "Korowai",
      "Inverted_Name": "Korowai"
    },
    {
      "Id": "khf",
      "Print_Name": "Khuen",
      "Inverted_Name": "Khuen"
    },
    {
      "Id": "khg",
      "Print_Name": "Khams Tibetan",
      "Inverted_Name": "Tibetan, Khams"
    },
    {
      "Id": "khh",
      "Print_Name": "Kehu",
      "Inverted_Name": "Kehu"
    },
    {
      "Id": "khj",
      "Print_Name": "Kuturmi",
      "Inverted_Name": "Kuturmi"
    },
    {
      "Id": "khk",
      "Print_Name": "Halh Mongolian",
      "Inverted_Name": "Mongolian, Halh"
    },
    {
      "Id": "khl",
      "Print_Name": "Lusi",
      "Inverted_Name": "Lusi"
    },
    {
      "Id": "khm",
      "Print_Name": "Central Khmer",
      "Inverted_Name": "Khmer, Central"
    },
    {
      "Id": "khm",
      "Print_Name": "Khmer",
      "Inverted_Name": "Khmer"
    },
    {
      "Id": "khn",
      "Print_Name": "Khandesi",
      "Inverted_Name": "Khandesi"
    },
    {
      "Id": "kho",
      "Print_Name": "Khotanese",
      "Inverted_Name": "Khotanese"
    },
    {
      "Id": "kho",
      "Print_Name": "Sakan",
      "Inverted_Name": "Sakan"
    },
    {
      "Id": "khp",
      "Print_Name": "Kapauri",
      "Inverted_Name": "Kapauri"
    },
    {
      "Id": "khp",
      "Print_Name": "Kapori",
      "Inverted_Name": "Kapori"
    },
    {
      "Id": "khq",
      "Print_Name": "Koyra Chiini Songhay",
      "Inverted_Name": "Songhay, Koyra Chiini"
    },
    {
      "Id": "khr",
      "Print_Name": "Kharia",
      "Inverted_Name": "Kharia"
    },
    {
      "Id": "khs",
      "Print_Name": "Kasua",
      "Inverted_Name": "Kasua"
    },
    {
      "Id": "kht",
      "Print_Name": "Khamti",
      "Inverted_Name": "Khamti"
    },
    {
      "Id": "khu",
      "Print_Name": "Nkhumbi",
      "Inverted_Name": "Nkhumbi"
    },
    {
      "Id": "khv",
      "Print_Name": "Khvarshi",
      "Inverted_Name": "Khvarshi"
    },
    {
      "Id": "khw",
      "Print_Name": "Khowar",
      "Inverted_Name": "Khowar"
    },
    {
      "Id": "khx",
      "Print_Name": "Kanu",
      "Inverted_Name": "Kanu"
    },
    {
      "Id": "khy",
      "Print_Name": "Kele (Democratic Republic of Congo)",
      "Inverted_Name": "Kele (Democratic Republic of Congo)"
    },
    {
      "Id": "khz",
      "Print_Name": "Keapara",
      "Inverted_Name": "Keapara"
    },
    {
      "Id": "kia",
      "Print_Name": "Kim",
      "Inverted_Name": "Kim"
    },
    {
      "Id": "kib",
      "Print_Name": "Koalib",
      "Inverted_Name": "Koalib"
    },
    {
      "Id": "kic",
      "Print_Name": "Kickapoo",
      "Inverted_Name": "Kickapoo"
    },
    {
      "Id": "kid",
      "Print_Name": "Koshin",
      "Inverted_Name": "Koshin"
    },
    {
      "Id": "kie",
      "Print_Name": "Kibet",
      "Inverted_Name": "Kibet"
    },
    {
      "Id": "kif",
      "Print_Name": "Eastern Parbate Kham",
      "Inverted_Name": "Kham, Eastern Parbate"
    },
    {
      "Id": "kig",
      "Print_Name": "Kimaama",
      "Inverted_Name": "Kimaama"
    },
    {
      "Id": "kig",
      "Print_Name": "Kimaghima",
      "Inverted_Name": "Kimaghima"
    },
    {
      "Id": "kih",
      "Print_Name": "Kilmeri",
      "Inverted_Name": "Kilmeri"
    },
    {
      "Id": "kii",
      "Print_Name": "Kitsai",
      "Inverted_Name": "Kitsai"
    },
    {
      "Id": "kij",
      "Print_Name": "Kilivila",
      "Inverted_Name": "Kilivila"
    },
    {
      "Id": "kik",
      "Print_Name": "Gikuyu",
      "Inverted_Name": "Gikuyu"
    },
    {
      "Id": "kik",
      "Print_Name": "Kikuyu",
      "Inverted_Name": "Kikuyu"
    },
    {
      "Id": "kil",
      "Print_Name": "Kariya",
      "Inverted_Name": "Kariya"
    },
    {
      "Id": "kim",
      "Print_Name": "Karagas",
      "Inverted_Name": "Karagas"
    },
    {
      "Id": "kin",
      "Print_Name": "Kinyarwanda",
      "Inverted_Name": "Kinyarwanda"
    },
    {
      "Id": "kio",
      "Print_Name": "Kiowa",
      "Inverted_Name": "Kiowa"
    },
    {
      "Id": "kip",
      "Print_Name": "Sheshi Kham",
      "Inverted_Name": "Kham, Sheshi"
    },
    {
      "Id": "kiq",
      "Print_Name": "Kosadle",
      "Inverted_Name": "Kosadle"
    },
    {
      "Id": "kiq",
      "Print_Name": "Kosare",
      "Inverted_Name": "Kosare"
    },
    {
      "Id": "kir",
      "Print_Name": "Kirghiz",
      "Inverted_Name": "Kirghiz"
    },
    {
      "Id": "kir",
      "Print_Name": "Kyrgyz",
      "Inverted_Name": "Kyrgyz"
    },
    {
      "Id": "kis",
      "Print_Name": "Kis",
      "Inverted_Name": "Kis"
    },
    {
      "Id": "kit",
      "Print_Name": "Agob",
      "Inverted_Name": "Agob"
    },
    {
      "Id": "kiu",
      "Print_Name": "Kirmanjki (individual language)",
      "Inverted_Name": "Kirmanjki (individual language)"
    },
    {
      "Id": "kiv",
      "Print_Name": "Kimbu",
      "Inverted_Name": "Kimbu"
    },
    {
      "Id": "kiw",
      "Print_Name": "Northeast Kiwai",
      "Inverted_Name": "Kiwai, Northeast"
    },
    {
      "Id": "kix",
      "Print_Name": "Khiamniungan Naga",
      "Inverted_Name": "Naga, Khiamniungan"
    },
    {
      "Id": "kiy",
      "Print_Name": "Kirikiri",
      "Inverted_Name": "Kirikiri"
    },
    {
      "Id": "kiz",
      "Print_Name": "Kisi",
      "Inverted_Name": "Kisi"
    },
    {
      "Id": "kja",
      "Print_Name": "Mlap",
      "Inverted_Name": "Mlap"
    },
    {
      "Id": "kjb",
      "Print_Name": "Kanjobal",
      "Inverted_Name": "Kanjobal"
    },
    {
      "Id": "kjb",
      "Print_Name": "Q'anjob'al",
      "Inverted_Name": "Q'anjob'al"
    },
    {
      "Id": "kjc",
      "Print_Name": "Coastal Konjo",
      "Inverted_Name": "Konjo, Coastal"
    },
    {
      "Id": "kjd",
      "Print_Name": "Southern Kiwai",
      "Inverted_Name": "Kiwai, Southern"
    },
    {
      "Id": "kje",
      "Print_Name": "Kisar",
      "Inverted_Name": "Kisar"
    },
    {
      "Id": "kjg",
      "Print_Name": "Khmu",
      "Inverted_Name": "Khmu"
    },
    {
      "Id": "kjh",
      "Print_Name": "Khakas",
      "Inverted_Name": "Khakas"
    },
    {
      "Id": "kji",
      "Print_Name": "Zabana",
      "Inverted_Name": "Zabana"
    },
    {
      "Id": "kjj",
      "Print_Name": "Khinalugh",
      "Inverted_Name": "Khinalugh"
    },
    {
      "Id": "kjk",
      "Print_Name": "Highland Konjo",
      "Inverted_Name": "Konjo, Highland"
    },
    {
      "Id": "kjl",
      "Print_Name": "Western Parbate Kham",
      "Inverted_Name": "Kham, Western Parbate"
    },
    {
      "Id": "kjm",
      "Print_Name": "Kháng",
      "Inverted_Name": "Kháng"
    },
    {
      "Id": "kjn",
      "Print_Name": "Kunjen",
      "Inverted_Name": "Kunjen"
    },
    {
      "Id": "kjo",
      "Print_Name": "Harijan Kinnauri",
      "Inverted_Name": "Kinnauri, Harijan"
    },
    {
      "Id": "kjp",
      "Print_Name": "Pwo Eastern Karen",
      "Inverted_Name": "Karen, Pwo Eastern"
    },
    {
      "Id": "kjq",
      "Print_Name": "Western Keres",
      "Inverted_Name": "Keres, Western"
    },
    {
      "Id": "kjr",
      "Print_Name": "Kurudu",
      "Inverted_Name": "Kurudu"
    },
    {
      "Id": "kjs",
      "Print_Name": "East Kewa",
      "Inverted_Name": "Kewa, East"
    },
    {
      "Id": "kjt",
      "Print_Name": "Phrae Pwo Karen",
      "Inverted_Name": "Karen, Phrae Pwo"
    },
    {
      "Id": "kju",
      "Print_Name": "Kashaya",
      "Inverted_Name": "Kashaya"
    },
    {
      "Id": "kjv",
      "Print_Name": "Kaikavian Literary Language",
      "Inverted_Name": "Kaikavian Literary Language"
    },
    {
      "Id": "kjx",
      "Print_Name": "Ramopa",
      "Inverted_Name": "Ramopa"
    },
    {
      "Id": "kjy",
      "Print_Name": "Erave",
      "Inverted_Name": "Erave"
    },
    {
      "Id": "kjz",
      "Print_Name": "Bumthangkha",
      "Inverted_Name": "Bumthangkha"
    },
    {
      "Id": "kka",
      "Print_Name": "Kakanda",
      "Inverted_Name": "Kakanda"
    },
    {
      "Id": "kkb",
      "Print_Name": "Kwerisa",
      "Inverted_Name": "Kwerisa"
    },
    {
      "Id": "kkc",
      "Print_Name": "Odoodee",
      "Inverted_Name": "Odoodee"
    },
    {
      "Id": "kkd",
      "Print_Name": "Kinuku",
      "Inverted_Name": "Kinuku"
    },
    {
      "Id": "kke",
      "Print_Name": "Kakabe",
      "Inverted_Name": "Kakabe"
    },
    {
      "Id": "kkf",
      "Print_Name": "Kalaktang Monpa",
      "Inverted_Name": "Monpa, Kalaktang"
    },
    {
      "Id": "kkg",
      "Print_Name": "Mabaka Valley Kalinga",
      "Inverted_Name": "Kalinga, Mabaka Valley"
    },
    {
      "Id": "kkh",
      "Print_Name": "Khün",
      "Inverted_Name": "Khün"
    },
    {
      "Id": "kki",
      "Print_Name": "Kagulu",
      "Inverted_Name": "Kagulu"
    },
    {
      "Id": "kkj",
      "Print_Name": "Kako",
      "Inverted_Name": "Kako"
    },
    {
      "Id": "kkk",
      "Print_Name": "Kokota",
      "Inverted_Name": "Kokota"
    },
    {
      "Id": "kkl",
      "Print_Name": "Kosarek Yale",
      "Inverted_Name": "Yale, Kosarek"
    },
    {
      "Id": "kkm",
      "Print_Name": "Kiong",
      "Inverted_Name": "Kiong"
    },
    {
      "Id": "kkn",
      "Print_Name": "Kon Keu",
      "Inverted_Name": "Kon Keu"
    },
    {
      "Id": "kko",
      "Print_Name": "Karko",
      "Inverted_Name": "Karko"
    },
    {
      "Id": "kkp",
      "Print_Name": "Gugubera",
      "Inverted_Name": "Gugubera"
    },
    {
      "Id": "kkp",
      "Print_Name": "Koko-Bera",
      "Inverted_Name": "Koko-Bera"
    },
    {
      "Id": "kkq",
      "Print_Name": "Kaeku",
      "Inverted_Name": "Kaeku"
    },
    {
      "Id": "kkr",
      "Print_Name": "Kir-Balar",
      "Inverted_Name": "Kir-Balar"
    },
    {
      "Id": "kks",
      "Print_Name": "Giiwo",
      "Inverted_Name": "Giiwo"
    },
    {
      "Id": "kkt",
      "Print_Name": "Koi",
      "Inverted_Name": "Koi"
    },
    {
      "Id": "kku",
      "Print_Name": "Tumi",
      "Inverted_Name": "Tumi"
    },
    {
      "Id": "kkv",
      "Print_Name": "Kangean",
      "Inverted_Name": "Kangean"
    },
    {
      "Id": "kkw",
      "Print_Name": "Teke-Kukuya",
      "Inverted_Name": "Teke-Kukuya"
    },
    {
      "Id": "kkx",
      "Print_Name": "Kohin",
      "Inverted_Name": "Kohin"
    },
    {
      "Id": "kky",
      "Print_Name": "Guguyimidjir",
      "Inverted_Name": "Guguyimidjir"
    },
    {
      "Id": "kky",
      "Print_Name": "Guugu Yimidhirr",
      "Inverted_Name": "Guugu Yimidhirr"
    },
    {
      "Id": "kkz",
      "Print_Name": "Kaska",
      "Inverted_Name": "Kaska"
    },
    {
      "Id": "kla",
      "Print_Name": "Klamath-Modoc",
      "Inverted_Name": "Klamath-Modoc"
    },
    {
      "Id": "klb",
      "Print_Name": "Kiliwa",
      "Inverted_Name": "Kiliwa"
    },
    {
      "Id": "klc",
      "Print_Name": "Kolbila",
      "Inverted_Name": "Kolbila"
    },
    {
      "Id": "kld",
      "Print_Name": "Gamilaraay",
      "Inverted_Name": "Gamilaraay"
    },
    {
      "Id": "kle",
      "Print_Name": "Kulung (Nepal)",
      "Inverted_Name": "Kulung (Nepal)"
    },
    {
      "Id": "klf",
      "Print_Name": "Kendeje",
      "Inverted_Name": "Kendeje"
    },
    {
      "Id": "klg",
      "Print_Name": "Tagakaulo",
      "Inverted_Name": "Tagakaulo"
    },
    {
      "Id": "klh",
      "Print_Name": "Weliki",
      "Inverted_Name": "Weliki"
    },
    {
      "Id": "kli",
      "Print_Name": "Kalumpang",
      "Inverted_Name": "Kalumpang"
    },
    {
      "Id": "klj",
      "Print_Name": "Khalaj",
      "Inverted_Name": "Khalaj"
    },
    {
      "Id": "klk",
      "Print_Name": "Kono (Nigeria)",
      "Inverted_Name": "Kono (Nigeria)"
    },
    {
      "Id": "kll",
      "Print_Name": "Kagan Kalagan",
      "Inverted_Name": "Kalagan, Kagan"
    },
    {
      "Id": "klm",
      "Print_Name": "Migum",
      "Inverted_Name": "Migum"
    },
    {
      "Id": "kln",
      "Print_Name": "Kalenjin",
      "Inverted_Name": "Kalenjin"
    },
    {
      "Id": "klo",
      "Print_Name": "Kapya",
      "Inverted_Name": "Kapya"
    },
    {
      "Id": "klp",
      "Print_Name": "Kamasa",
      "Inverted_Name": "Kamasa"
    },
    {
      "Id": "klq",
      "Print_Name": "Rumu",
      "Inverted_Name": "Rumu"
    },
    {
      "Id": "klr",
      "Print_Name": "Khaling",
      "Inverted_Name": "Khaling"
    },
    {
      "Id": "kls",
      "Print_Name": "Kalasha",
      "Inverted_Name": "Kalasha"
    },
    {
      "Id": "klt",
      "Print_Name": "Nukna",
      "Inverted_Name": "Nukna"
    },
    {
      "Id": "klu",
      "Print_Name": "Klao",
      "Inverted_Name": "Klao"
    },
    {
      "Id": "klv",
      "Print_Name": "Maskelynes",
      "Inverted_Name": "Maskelynes"
    },
    {
      "Id": "klw",
      "Print_Name": "Lindu",
      "Inverted_Name": "Lindu"
    },
    {
      "Id": "klw",
      "Print_Name": "Tado",
      "Inverted_Name": "Tado"
    },
    {
      "Id": "klx",
      "Print_Name": "Koluwawa",
      "Inverted_Name": "Koluwawa"
    },
    {
      "Id": "kly",
      "Print_Name": "Kalao",
      "Inverted_Name": "Kalao"
    },
    {
      "Id": "klz",
      "Print_Name": "Kabola",
      "Inverted_Name": "Kabola"
    },
    {
      "Id": "kma",
      "Print_Name": "Konni",
      "Inverted_Name": "Konni"
    },
    {
      "Id": "kmb",
      "Print_Name": "Kimbundu",
      "Inverted_Name": "Kimbundu"
    },
    {
      "Id": "kmc",
      "Print_Name": "Southern Dong",
      "Inverted_Name": "Dong, Southern"
    },
    {
      "Id": "kmd",
      "Print_Name": "Majukayang Kalinga",
      "Inverted_Name": "Kalinga, Majukayang"
    },
    {
      "Id": "kme",
      "Print_Name": "Bakole",
      "Inverted_Name": "Bakole"
    },
    {
      "Id": "kmf",
      "Print_Name": "Kare (Papua New Guinea)",
      "Inverted_Name": "Kare (Papua New Guinea)"
    },
    {
      "Id": "kmg",
      "Print_Name": "Kâte",
      "Inverted_Name": "Kâte"
    },
    {
      "Id": "kmh",
      "Print_Name": "Kalam",
      "Inverted_Name": "Kalam"
    },
    {
      "Id": "kmi",
      "Print_Name": "Kami (Nigeria)",
      "Inverted_Name": "Kami (Nigeria)"
    },
    {
      "Id": "kmj",
      "Print_Name": "Kumarbhag Paharia",
      "Inverted_Name": "Kumarbhag Paharia"
    },
    {
      "Id": "kmk",
      "Print_Name": "Limos Kalinga",
      "Inverted_Name": "Kalinga, Limos"
    },
    {
      "Id": "kml",
      "Print_Name": "Tanudan Kalinga",
      "Inverted_Name": "Kalinga, Tanudan"
    },
    {
      "Id": "kmm",
      "Print_Name": "Kom (India)",
      "Inverted_Name": "Kom (India)"
    },
    {
      "Id": "kmn",
      "Print_Name": "Awtuw",
      "Inverted_Name": "Awtuw"
    },
    {
      "Id": "kmo",
      "Print_Name": "Kwoma",
      "Inverted_Name": "Kwoma"
    },
    {
      "Id": "kmp",
      "Print_Name": "Gimme",
      "Inverted_Name": "Gimme"
    },
    {
      "Id": "kmq",
      "Print_Name": "Kwama",
      "Inverted_Name": "Kwama"
    },
    {
      "Id": "kmr",
      "Print_Name": "Northern Kurdish",
      "Inverted_Name": "Kurdish, Northern"
    },
    {
      "Id": "kms",
      "Print_Name": "Kamasau",
      "Inverted_Name": "Kamasau"
    },
    {
      "Id": "kmt",
      "Print_Name": "Kemtuik",
      "Inverted_Name": "Kemtuik"
    },
    {
      "Id": "kmu",
      "Print_Name": "Kanite",
      "Inverted_Name": "Kanite"
    },
    {
      "Id": "kmv",
      "Print_Name": "Karipúna Creole French",
      "Inverted_Name": "Creole French, Karipúna"
    },
    {
      "Id": "kmw",
      "Print_Name": "Komo (Democratic Republic of Congo)",
      "Inverted_Name": "Komo (Democratic Republic of Congo)"
    },
    {
      "Id": "kmx",
      "Print_Name": "Waboda",
      "Inverted_Name": "Waboda"
    },
    {
      "Id": "kmy",
      "Print_Name": "Koma",
      "Inverted_Name": "Koma"
    },
    {
      "Id": "kmz",
      "Print_Name": "Khorasani Turkish",
      "Inverted_Name": "Khorasani Turkish"
    },
    {
      "Id": "kna",
      "Print_Name": "Dera (Nigeria)",
      "Inverted_Name": "Dera (Nigeria)"
    },
    {
      "Id": "knb",
      "Print_Name": "Lubuagan Kalinga",
      "Inverted_Name": "Kalinga, Lubuagan"
    },
    {
      "Id": "knc",
      "Print_Name": "Central Kanuri",
      "Inverted_Name": "Kanuri, Central"
    },
    {
      "Id": "knd",
      "Print_Name": "Konda",
      "Inverted_Name": "Konda"
    },
    {
      "Id": "kne",
      "Print_Name": "Kankanaey",
      "Inverted_Name": "Kankanaey"
    },
    {
      "Id": "knf",
      "Print_Name": "Mankanya",
      "Inverted_Name": "Mankanya"
    },
    {
      "Id": "kng",
      "Print_Name": "Koongo",
      "Inverted_Name": "Koongo"
    },
    {
      "Id": "kni",
      "Print_Name": "Kanufi",
      "Inverted_Name": "Kanufi"
    },
    {
      "Id": "knj",
      "Print_Name": "Western Kanjobal",
      "Inverted_Name": "Kanjobal, Western"
    },
    {
      "Id": "knk",
      "Print_Name": "Kuranko",
      "Inverted_Name": "Kuranko"
    },
    {
      "Id": "knl",
      "Print_Name": "Keninjal",
      "Inverted_Name": "Keninjal"
    },
    {
      "Id": "knm",
      "Print_Name": "Kanamarí",
      "Inverted_Name": "Kanamarí"
    },
    {
      "Id": "knn",
      "Print_Name": "Konkani (individual language)",
      "Inverted_Name": "Konkani (individual language)"
    },
    {
      "Id": "kno",
      "Print_Name": "Kono (Sierra Leone)",
      "Inverted_Name": "Kono (Sierra Leone)"
    },
    {
      "Id": "knp",
      "Print_Name": "Kwanja",
      "Inverted_Name": "Kwanja"
    },
    {
      "Id": "knq",
      "Print_Name": "Kintaq",
      "Inverted_Name": "Kintaq"
    },
    {
      "Id": "knr",
      "Print_Name": "Kaningra",
      "Inverted_Name": "Kaningra"
    },
    {
      "Id": "kns",
      "Print_Name": "Kensiu",
      "Inverted_Name": "Kensiu"
    },
    {
      "Id": "knt",
      "Print_Name": "Panoan Katukína",
      "Inverted_Name": "Katukína, Panoan"
    },
    {
      "Id": "knu",
      "Print_Name": "Kono (Guinea)",
      "Inverted_Name": "Kono (Guinea)"
    },
    {
      "Id": "knv",
      "Print_Name": "Tabo",
      "Inverted_Name": "Tabo"
    },
    {
      "Id": "knw",
      "Print_Name": "Kung-Ekoka",
      "Inverted_Name": "Kung-Ekoka"
    },
    {
      "Id": "knx",
      "Print_Name": "Kendayan",
      "Inverted_Name": "Kendayan"
    },
    {
      "Id": "knx",
      "Print_Name": "Salako",
      "Inverted_Name": "Salako"
    },
    {
      "Id": "kny",
      "Print_Name": "Kanyok",
      "Inverted_Name": "Kanyok"
    },
    {
      "Id": "knz",
      "Print_Name": "Kalamsé",
      "Inverted_Name": "Kalamsé"
    },
    {
      "Id": "koa",
      "Print_Name": "Konomala",
      "Inverted_Name": "Konomala"
    },
    {
      "Id": "koc",
      "Print_Name": "Kpati",
      "Inverted_Name": "Kpati"
    },
    {
      "Id": "kod",
      "Print_Name": "Kodi",
      "Inverted_Name": "Kodi"
    },
    {
      "Id": "koe",
      "Print_Name": "Kacipo-Bale Suri",
      "Inverted_Name": "Suri, Kacipo-Bale"
    },
    {
      "Id": "kof",
      "Print_Name": "Kubi",
      "Inverted_Name": "Kubi"
    },
    {
      "Id": "kog",
      "Print_Name": "Cogui",
      "Inverted_Name": "Cogui"
    },
    {
      "Id": "kog",
      "Print_Name": "Kogi",
      "Inverted_Name": "Kogi"
    },
    {
      "Id": "koh",
      "Print_Name": "Koyo",
      "Inverted_Name": "Koyo"
    },
    {
      "Id": "koi",
      "Print_Name": "Komi-Permyak",
      "Inverted_Name": "Komi-Permyak"
    },
    {
      "Id": "kok",
      "Print_Name": "Konkani (macrolanguage)",
      "Inverted_Name": "Konkani (macrolanguage)"
    },
    {
      "Id": "kol",
      "Print_Name": "Kol (Papua New Guinea)",
      "Inverted_Name": "Kol (Papua New Guinea)"
    },
    {
      "Id": "kom",
      "Print_Name": "Komi",
      "Inverted_Name": "Komi"
    },
    {
      "Id": "kon",
      "Print_Name": "Kongo",
      "Inverted_Name": "Kongo"
    },
    {
      "Id": "koo",
      "Print_Name": "Konzo",
      "Inverted_Name": "Konzo"
    },
    {
      "Id": "kop",
      "Print_Name": "Waube",
      "Inverted_Name": "Waube"
    },
    {
      "Id": "koq",
      "Print_Name": "Kota (Gabon)",
      "Inverted_Name": "Kota (Gabon)"
    },
    {
      "Id": "kor",
      "Print_Name": "Korean",
      "Inverted_Name": "Korean"
    },
    {
      "Id": "kos",
      "Print_Name": "Kosraean",
      "Inverted_Name": "Kosraean"
    },
    {
      "Id": "kot",
      "Print_Name": "Lagwan",
      "Inverted_Name": "Lagwan"
    },
    {
      "Id": "kou",
      "Print_Name": "Koke",
      "Inverted_Name": "Koke"
    },
    {
      "Id": "kov",
      "Print_Name": "Kudu-Camo",
      "Inverted_Name": "Kudu-Camo"
    },
    {
      "Id": "kow",
      "Print_Name": "Kugama",
      "Inverted_Name": "Kugama"
    },
    {
      "Id": "koy",
      "Print_Name": "Koyukon",
      "Inverted_Name": "Koyukon"
    },
    {
      "Id": "koz",
      "Print_Name": "Korak",
      "Inverted_Name": "Korak"
    },
    {
      "Id": "kpa",
      "Print_Name": "Kutto",
      "Inverted_Name": "Kutto"
    },
    {
      "Id": "kpb",
      "Print_Name": "Mullu Kurumba",
      "Inverted_Name": "Kurumba, Mullu"
    },
    {
      "Id": "kpc",
      "Print_Name": "Curripaco",
      "Inverted_Name": "Curripaco"
    },
    {
      "Id": "kpd",
      "Print_Name": "Koba",
      "Inverted_Name": "Koba"
    },
    {
      "Id": "kpe",
      "Print_Name": "Kpelle",
      "Inverted_Name": "Kpelle"
    },
    {
      "Id": "kpf",
      "Print_Name": "Komba",
      "Inverted_Name": "Komba"
    },
    {
      "Id": "kpg",
      "Print_Name": "Kapingamarangi",
      "Inverted_Name": "Kapingamarangi"
    },
    {
      "Id": "kph",
      "Print_Name": "Kplang",
      "Inverted_Name": "Kplang"
    },
    {
      "Id": "kpi",
      "Print_Name": "Kofei",
      "Inverted_Name": "Kofei"
    },
    {
      "Id": "kpj",
      "Print_Name": "Karajá",
      "Inverted_Name": "Karajá"
    },
    {
      "Id": "kpk",
      "Print_Name": "Kpan",
      "Inverted_Name": "Kpan"
    },
    {
      "Id": "kpl",
      "Print_Name": "Kpala",
      "Inverted_Name": "Kpala"
    },
    {
      "Id": "kpm",
      "Print_Name": "Koho",
      "Inverted_Name": "Koho"
    },
    {
      "Id": "kpn",
      "Print_Name": "Kepkiriwát",
      "Inverted_Name": "Kepkiriwát"
    },
    {
      "Id": "kpo",
      "Print_Name": "Ikposo",
      "Inverted_Name": "Ikposo"
    },
    {
      "Id": "kpq",
      "Print_Name": "Korupun-Sela",
      "Inverted_Name": "Korupun-Sela"
    },
    {
      "Id": "kpr",
      "Print_Name": "Korafe-Yegha",
      "Inverted_Name": "Korafe-Yegha"
    },
    {
      "Id": "kps",
      "Print_Name": "Tehit",
      "Inverted_Name": "Tehit"
    },
    {
      "Id": "kpt",
      "Print_Name": "Karata",
      "Inverted_Name": "Karata"
    },
    {
      "Id": "kpu",
      "Print_Name": "Kafoa",
      "Inverted_Name": "Kafoa"
    },
    {
      "Id": "kpv",
      "Print_Name": "Komi-Zyrian",
      "Inverted_Name": "Komi-Zyrian"
    },
    {
      "Id": "kpw",
      "Print_Name": "Kobon",
      "Inverted_Name": "Kobon"
    },
    {
      "Id": "kpx",
      "Print_Name": "Mountain Koiali",
      "Inverted_Name": "Koiali, Mountain"
    },
    {
      "Id": "kpy",
      "Print_Name": "Koryak",
      "Inverted_Name": "Koryak"
    },
    {
      "Id": "kpz",
      "Print_Name": "Kupsabiny",
      "Inverted_Name": "Kupsabiny"
    },
    {
      "Id": "kqa",
      "Print_Name": "Mum",
      "Inverted_Name": "Mum"
    },
    {
      "Id": "kqb",
      "Print_Name": "Kovai",
      "Inverted_Name": "Kovai"
    },
    {
      "Id": "kqc",
      "Print_Name": "Doromu-Koki",
      "Inverted_Name": "Doromu-Koki"
    },
    {
      "Id": "kqd",
      "Print_Name": "Koy Sanjaq Surat",
      "Inverted_Name": "Koy Sanjaq Surat"
    },
    {
      "Id": "kqe",
      "Print_Name": "Kalagan",
      "Inverted_Name": "Kalagan"
    },
    {
      "Id": "kqf",
      "Print_Name": "Kakabai",
      "Inverted_Name": "Kakabai"
    },
    {
      "Id": "kqg",
      "Print_Name": "Khe",
      "Inverted_Name": "Khe"
    },
    {
      "Id": "kqh",
      "Print_Name": "Kisankasa",
      "Inverted_Name": "Kisankasa"
    },
    {
      "Id": "kqi",
      "Print_Name": "Koitabu",
      "Inverted_Name": "Koitabu"
    },
    {
      "Id": "kqj",
      "Print_Name": "Koromira",
      "Inverted_Name": "Koromira"
    },
    {
      "Id": "kqk",
      "Print_Name": "Kotafon Gbe",
      "Inverted_Name": "Gbe, Kotafon"
    },
    {
      "Id": "kql",
      "Print_Name": "Kyenele",
      "Inverted_Name": "Kyenele"
    },
    {
      "Id": "kqm",
      "Print_Name": "Khisa",
      "Inverted_Name": "Khisa"
    },
    {
      "Id": "kqn",
      "Print_Name": "Kaonde",
      "Inverted_Name": "Kaonde"
    },
    {
      "Id": "kqo",
      "Print_Name": "Eastern Krahn",
      "Inverted_Name": "Krahn, Eastern"
    },
    {
      "Id": "kqp",
      "Print_Name": "Kimré",
      "Inverted_Name": "Kimré"
    },
    {
      "Id": "kqq",
      "Print_Name": "Krenak",
      "Inverted_Name": "Krenak"
    },
    {
      "Id": "kqr",
      "Print_Name": "Kimaragang",
      "Inverted_Name": "Kimaragang"
    },
    {
      "Id": "kqs",
      "Print_Name": "Northern Kissi",
      "Inverted_Name": "Kissi, Northern"
    },
    {
      "Id": "kqt",
      "Print_Name": "Klias River Kadazan",
      "Inverted_Name": "Kadazan, Klias River"
    },
    {
      "Id": "kqu",
      "Print_Name": "Seroa",
      "Inverted_Name": "Seroa"
    },
    {
      "Id": "kqv",
      "Print_Name": "Okolod",
      "Inverted_Name": "Okolod"
    },
    {
      "Id": "kqw",
      "Print_Name": "Kandas",
      "Inverted_Name": "Kandas"
    },
    {
      "Id": "kqx",
      "Print_Name": "Mser",
      "Inverted_Name": "Mser"
    },
    {
      "Id": "kqy",
      "Print_Name": "Koorete",
      "Inverted_Name": "Koorete"
    },
    {
      "Id": "kqz",
      "Print_Name": "Korana",
      "Inverted_Name": "Korana"
    },
    {
      "Id": "kra",
      "Print_Name": "Kumhali",
      "Inverted_Name": "Kumhali"
    },
    {
      "Id": "krb",
      "Print_Name": "Karkin",
      "Inverted_Name": "Karkin"
    },
    {
      "Id": "krc",
      "Print_Name": "Karachay-Balkar",
      "Inverted_Name": "Karachay-Balkar"
    },
    {
      "Id": "krd",
      "Print_Name": "Kairui-Midiki",
      "Inverted_Name": "Kairui-Midiki"
    },
    {
      "Id": "kre",
      "Print_Name": "Panará",
      "Inverted_Name": "Panará"
    },
    {
      "Id": "krf",
      "Print_Name": "Koro (Vanuatu)",
      "Inverted_Name": "Koro (Vanuatu)"
    },
    {
      "Id": "krh",
      "Print_Name": "Kurama",
      "Inverted_Name": "Kurama"
    },
    {
      "Id": "kri",
      "Print_Name": "Krio",
      "Inverted_Name": "Krio"
    },
    {
      "Id": "krj",
      "Print_Name": "Kinaray-A",
      "Inverted_Name": "Kinaray-A"
    },
    {
      "Id": "krk",
      "Print_Name": "Kerek",
      "Inverted_Name": "Kerek"
    },
    {
      "Id": "krl",
      "Print_Name": "Karelian",
      "Inverted_Name": "Karelian"
    },
    {
      "Id": "krn",
      "Print_Name": "Sapo",
      "Inverted_Name": "Sapo"
    },
    {
      "Id": "krp",
      "Print_Name": "Durop",
      "Inverted_Name": "Durop"
    },
    {
      "Id": "krr",
      "Print_Name": "Krung",
      "Inverted_Name": "Krung"
    },
    {
      "Id": "krs",
      "Print_Name": "Gbaya (Sudan)",
      "Inverted_Name": "Gbaya (Sudan)"
    },
    {
      "Id": "krt",
      "Print_Name": "Tumari Kanuri",
      "Inverted_Name": "Kanuri, Tumari"
    },
    {
      "Id": "kru",
      "Print_Name": "Kurukh",
      "Inverted_Name": "Kurukh"
    },
    {
      "Id": "krv",
      "Print_Name": "Kavet",
      "Inverted_Name": "Kavet"
    },
    {
      "Id": "krw",
      "Print_Name": "Western Krahn",
      "Inverted_Name": "Krahn, Western"
    },
    {
      "Id": "krx",
      "Print_Name": "Karon",
      "Inverted_Name": "Karon"
    },
    {
      "Id": "kry",
      "Print_Name": "Kryts",
      "Inverted_Name": "Kryts"
    },
    {
      "Id": "krz",
      "Print_Name": "Sota Kanum",
      "Inverted_Name": "Kanum, Sota"
    },
    {
      "Id": "ksb",
      "Print_Name": "Shambala",
      "Inverted_Name": "Shambala"
    },
    {
      "Id": "ksc",
      "Print_Name": "Southern Kalinga",
      "Inverted_Name": "Kalinga, Southern"
    },
    {
      "Id": "ksd",
      "Print_Name": "Kuanua",
      "Inverted_Name": "Kuanua"
    },
    {
      "Id": "kse",
      "Print_Name": "Kuni",
      "Inverted_Name": "Kuni"
    },
    {
      "Id": "ksf",
      "Print_Name": "Bafia",
      "Inverted_Name": "Bafia"
    },
    {
      "Id": "ksg",
      "Print_Name": "Kusaghe",
      "Inverted_Name": "Kusaghe"
    },
    {
      "Id": "ksh",
      "Print_Name": "Kölsch",
      "Inverted_Name": "Kölsch"
    },
    {
      "Id": "ksi",
      "Print_Name": "I'saka",
      "Inverted_Name": "I'saka"
    },
    {
      "Id": "ksi",
      "Print_Name": "Krisa",
      "Inverted_Name": "Krisa"
    },
    {
      "Id": "ksj",
      "Print_Name": "Uare",
      "Inverted_Name": "Uare"
    },
    {
      "Id": "ksk",
      "Print_Name": "Kansa",
      "Inverted_Name": "Kansa"
    },
    {
      "Id": "ksl",
      "Print_Name": "Kumalu",
      "Inverted_Name": "Kumalu"
    },
    {
      "Id": "ksm",
      "Print_Name": "Kumba",
      "Inverted_Name": "Kumba"
    },
    {
      "Id": "ksn",
      "Print_Name": "Kasiguranin",
      "Inverted_Name": "Kasiguranin"
    },
    {
      "Id": "kso",
      "Print_Name": "Kofa",
      "Inverted_Name": "Kofa"
    },
    {
      "Id": "ksp",
      "Print_Name": "Kaba",
      "Inverted_Name": "Kaba"
    },
    {
      "Id": "ksq",
      "Print_Name": "Kwaami",
      "Inverted_Name": "Kwaami"
    },
    {
      "Id": "ksr",
      "Print_Name": "Borong",
      "Inverted_Name": "Borong"
    },
    {
      "Id": "kss",
      "Print_Name": "Southern Kisi",
      "Inverted_Name": "Kisi, Southern"
    },
    {
      "Id": "kst",
      "Print_Name": "Winyé",
      "Inverted_Name": "Winyé"
    },
    {
      "Id": "ksu",
      "Print_Name": "Khamyang",
      "Inverted_Name": "Khamyang"
    },
    {
      "Id": "ksv",
      "Print_Name": "Kusu",
      "Inverted_Name": "Kusu"
    },
    {
      "Id": "ksw",
      "Print_Name": "S'gaw Karen",
      "Inverted_Name": "Karen, S'gaw"
    },
    {
      "Id": "ksx",
      "Print_Name": "Kedang",
      "Inverted_Name": "Kedang"
    },
    {
      "Id": "ksy",
      "Print_Name": "Kharia Thar",
      "Inverted_Name": "Kharia Thar"
    },
    {
      "Id": "ksz",
      "Print_Name": "Kodaku",
      "Inverted_Name": "Kodaku"
    },
    {
      "Id": "kta",
      "Print_Name": "Katua",
      "Inverted_Name": "Katua"
    },
    {
      "Id": "ktb",
      "Print_Name": "Kambaata",
      "Inverted_Name": "Kambaata"
    },
    {
      "Id": "ktc",
      "Print_Name": "Kholok",
      "Inverted_Name": "Kholok"
    },
    {
      "Id": "ktd",
      "Print_Name": "Kokata",
      "Inverted_Name": "Kokata"
    },
    {
      "Id": "ktd",
      "Print_Name": "Kukatha",
      "Inverted_Name": "Kukatha"
    },
    {
      "Id": "kte",
      "Print_Name": "Nubri",
      "Inverted_Name": "Nubri"
    },
    {
      "Id": "ktf",
      "Print_Name": "Kwami",
      "Inverted_Name": "Kwami"
    },
    {
      "Id": "ktg",
      "Print_Name": "Kalkutung",
      "Inverted_Name": "Kalkutung"
    },
    {
      "Id": "kth",
      "Print_Name": "Karanga",
      "Inverted_Name": "Karanga"
    },
    {
      "Id": "kti",
      "Print_Name": "North Muyu",
      "Inverted_Name": "Muyu, North"
    },
    {
      "Id": "ktj",
      "Print_Name": "Plapo Krumen",
      "Inverted_Name": "Krumen, Plapo"
    },
    {
      "Id": "ktk",
      "Print_Name": "Kaniet",
      "Inverted_Name": "Kaniet"
    },
    {
      "Id": "ktl",
      "Print_Name": "Koroshi",
      "Inverted_Name": "Koroshi"
    },
    {
      "Id": "ktm",
      "Print_Name": "Kurti",
      "Inverted_Name": "Kurti"
    },
    {
      "Id": "ktn",
      "Print_Name": "Karitiâna",
      "Inverted_Name": "Karitiâna"
    },
    {
      "Id": "kto",
      "Print_Name": "Kuot",
      "Inverted_Name": "Kuot"
    },
    {
      "Id": "ktp",
      "Print_Name": "Kaduo",
      "Inverted_Name": "Kaduo"
    },
    {
      "Id": "ktq",
      "Print_Name": "Katabaga",
      "Inverted_Name": "Katabaga"
    },
    {
      "Id": "kts",
      "Print_Name": "South Muyu",
      "Inverted_Name": "Muyu, South"
    },
    {
      "Id": "ktt",
      "Print_Name": "Ketum",
      "Inverted_Name": "Ketum"
    },
    {
      "Id": "ktu",
      "Print_Name": "Kituba (Democratic Republic of Congo)",
      "Inverted_Name": "Kituba (Democratic Republic of Congo)"
    },
    {
      "Id": "ktv",
      "Print_Name": "Eastern Katu",
      "Inverted_Name": "Katu, Eastern"
    },
    {
      "Id": "ktw",
      "Print_Name": "Kato",
      "Inverted_Name": "Kato"
    },
    {
      "Id": "ktx",
      "Print_Name": "Kaxararí",
      "Inverted_Name": "Kaxararí"
    },
    {
      "Id": "kty",
      "Print_Name": "Kango (Bas-Uélé District)",
      "Inverted_Name": "Kango (Bas-Uélé District)"
    },
    {
      "Id": "ktz",
      "Print_Name": "Juǀʼhoan",
      "Inverted_Name": "Juǀʼhoan"
    },
    {
      "Id": "ktz",
      "Print_Name": "Juǀʼhoansi",
      "Inverted_Name": "Juǀʼhoansi"
    },
    {
      "Id": "kua",
      "Print_Name": "Kuanyama",
      "Inverted_Name": "Kuanyama"
    },
    {
      "Id": "kua",
      "Print_Name": "Kwanyama",
      "Inverted_Name": "Kwanyama"
    },
    {
      "Id": "kub",
      "Print_Name": "Kutep",
      "Inverted_Name": "Kutep"
    },
    {
      "Id": "kuc",
      "Print_Name": "Kwinsu",
      "Inverted_Name": "Kwinsu"
    },
    {
      "Id": "kud",
      "Print_Name": "'Auhelawa",
      "Inverted_Name": "'Auhelawa"
    },
    {
      "Id": "kue",
      "Print_Name": "Kuman (Papua New Guinea)",
      "Inverted_Name": "Kuman (Papua New Guinea)"
    },
    {
      "Id": "kuf",
      "Print_Name": "Western Katu",
      "Inverted_Name": "Katu, Western"
    },
    {
      "Id": "kug",
      "Print_Name": "Kupa",
      "Inverted_Name": "Kupa"
    },
    {
      "Id": "kuh",
      "Print_Name": "Kushi",
      "Inverted_Name": "Kushi"
    },
    {
      "Id": "kui",
      "Print_Name": "Kalapalo",
      "Inverted_Name": "Kalapalo"
    },
    {
      "Id": "kui",
      "Print_Name": "Kuikúro-Kalapálo",
      "Inverted_Name": "Kuikúro-Kalapálo"
    },
    {
      "Id": "kuj",
      "Print_Name": "Kuria",
      "Inverted_Name": "Kuria"
    },
    {
      "Id": "kuk",
      "Print_Name": "Kepo'",
      "Inverted_Name": "Kepo'"
    },
    {
      "Id": "kul",
      "Print_Name": "Kulere",
      "Inverted_Name": "Kulere"
    },
    {
      "Id": "kum",
      "Print_Name": "Kumyk",
      "Inverted_Name": "Kumyk"
    },
    {
      "Id": "kun",
      "Print_Name": "Kunama",
      "Inverted_Name": "Kunama"
    },
    {
      "Id": "kuo",
      "Print_Name": "Kumukio",
      "Inverted_Name": "Kumukio"
    },
    {
      "Id": "kup",
      "Print_Name": "Kunimaipa",
      "Inverted_Name": "Kunimaipa"
    },
    {
      "Id": "kuq",
      "Print_Name": "Karipuna",
      "Inverted_Name": "Karipuna"
    },
    {
      "Id": "kur",
      "Print_Name": "Kurdish",
      "Inverted_Name": "Kurdish"
    },
    {
      "Id": "kus",
      "Print_Name": "Kusaal",
      "Inverted_Name": "Kusaal"
    },
    {
      "Id": "kut",
      "Print_Name": "Kutenai",
      "Inverted_Name": "Kutenai"
    },
    {
      "Id": "kuu",
      "Print_Name": "Upper Kuskokwim",
      "Inverted_Name": "Kuskokwim, Upper"
    },
    {
      "Id": "kuv",
      "Print_Name": "Kur",
      "Inverted_Name": "Kur"
    },
    {
      "Id": "kuw",
      "Print_Name": "Kpagua",
      "Inverted_Name": "Kpagua"
    },
    {
      "Id": "kux",
      "Print_Name": "Kukatja",
      "Inverted_Name": "Kukatja"
    },
    {
      "Id": "kuy",
      "Print_Name": "Kuuku-Ya'u",
      "Inverted_Name": "Kuuku-Ya'u"
    },
    {
      "Id": "kuz",
      "Print_Name": "Kunza",
      "Inverted_Name": "Kunza"
    },
    {
      "Id": "kva",
      "Print_Name": "Bagvalal",
      "Inverted_Name": "Bagvalal"
    },
    {
      "Id": "kvb",
      "Print_Name": "Kubu",
      "Inverted_Name": "Kubu"
    },
    {
      "Id": "kvc",
      "Print_Name": "Kove",
      "Inverted_Name": "Kove"
    },
    {
      "Id": "kvd",
      "Print_Name": "Kui (Indonesia)",
      "Inverted_Name": "Kui (Indonesia)"
    },
    {
      "Id": "kve",
      "Print_Name": "Kalabakan",
      "Inverted_Name": "Kalabakan"
    },
    {
      "Id": "kvf",
      "Print_Name": "Kabalai",
      "Inverted_Name": "Kabalai"
    },
    {
      "Id": "kvg",
      "Print_Name": "Kuni-Boazi",
      "Inverted_Name": "Kuni-Boazi"
    },
    {
      "Id": "kvh",
      "Print_Name": "Komodo",
      "Inverted_Name": "Komodo"
    },
    {
      "Id": "kvi",
      "Print_Name": "Kwang",
      "Inverted_Name": "Kwang"
    },
    {
      "Id": "kvj",
      "Print_Name": "Psikye",
      "Inverted_Name": "Psikye"
    },
    {
      "Id": "kvk",
      "Print_Name": "Korean Sign Language",
      "Inverted_Name": "Korean Sign Language"
    },
    {
      "Id": "kvl",
      "Print_Name": "Kayaw",
      "Inverted_Name": "Kayaw"
    },
    {
      "Id": "kvm",
      "Print_Name": "Kendem",
      "Inverted_Name": "Kendem"
    },
    {
      "Id": "kvn",
      "Print_Name": "Border Kuna",
      "Inverted_Name": "Kuna, Border"
    },
    {
      "Id": "kvo",
      "Print_Name": "Dobel",
      "Inverted_Name": "Dobel"
    },
    {
      "Id": "kvp",
      "Print_Name": "Kompane",
      "Inverted_Name": "Kompane"
    },
    {
      "Id": "kvq",
      "Print_Name": "Geba Karen",
      "Inverted_Name": "Karen, Geba"
    },
    {
      "Id": "kvr",
      "Print_Name": "Kerinci",
      "Inverted_Name": "Kerinci"
    },
    {
      "Id": "kvt",
      "Print_Name": "Lahta",
      "Inverted_Name": "Lahta"
    },
    {
      "Id": "kvt",
      "Print_Name": "Lahta Karen",
      "Inverted_Name": "Karen, Lahta"
    },
    {
      "Id": "kvu",
      "Print_Name": "Yinbaw Karen",
      "Inverted_Name": "Karen, Yinbaw"
    },
    {
      "Id": "kvv",
      "Print_Name": "Kola",
      "Inverted_Name": "Kola"
    },
    {
      "Id": "kvw",
      "Print_Name": "Wersing",
      "Inverted_Name": "Wersing"
    },
    {
      "Id": "kvx",
      "Print_Name": "Parkari Koli",
      "Inverted_Name": "Koli, Parkari"
    },
    {
      "Id": "kvy",
      "Print_Name": "Yintale",
      "Inverted_Name": "Yintale"
    },
    {
      "Id": "kvy",
      "Print_Name": "Yintale Karen",
      "Inverted_Name": "Karen, Yintale"
    },
    {
      "Id": "kvz",
      "Print_Name": "Tsakwambo",
      "Inverted_Name": "Tsakwambo"
    },
    {
      "Id": "kvz",
      "Print_Name": "Tsaukambo",
      "Inverted_Name": "Tsaukambo"
    },
    {
      "Id": "kwa",
      "Print_Name": "Dâw",
      "Inverted_Name": "Dâw"
    },
    {
      "Id": "kwb",
      "Print_Name": "Kwa",
      "Inverted_Name": "Kwa"
    },
    {
      "Id": "kwc",
      "Print_Name": "Likwala",
      "Inverted_Name": "Likwala"
    },
    {
      "Id": "kwd",
      "Print_Name": "Kwaio",
      "Inverted_Name": "Kwaio"
    },
    {
      "Id": "kwe",
      "Print_Name": "Kwerba",
      "Inverted_Name": "Kwerba"
    },
    {
      "Id": "kwf",
      "Print_Name": "Kwara'ae",
      "Inverted_Name": "Kwara'ae"
    },
    {
      "Id": "kwg",
      "Print_Name": "Sara Kaba Deme",
      "Inverted_Name": "Sara Kaba Deme"
    },
    {
      "Id": "kwh",
      "Print_Name": "Kowiai",
      "Inverted_Name": "Kowiai"
    },
    {
      "Id": "kwi",
      "Print_Name": "Awa-Cuaiquer",
      "Inverted_Name": "Awa-Cuaiquer"
    },
    {
      "Id": "kwj",
      "Print_Name": "Kwanga",
      "Inverted_Name": "Kwanga"
    },
    {
      "Id": "kwk",
      "Print_Name": "Kwakiutl",
      "Inverted_Name": "Kwakiutl"
    },
    {
      "Id": "kwl",
      "Print_Name": "Kofyar",
      "Inverted_Name": "Kofyar"
    },
    {
      "Id": "kwm",
      "Print_Name": "Kwambi",
      "Inverted_Name": "Kwambi"
    },
    {
      "Id": "kwn",
      "Print_Name": "Kwangali",
      "Inverted_Name": "Kwangali"
    },
    {
      "Id": "kwo",
      "Print_Name": "Kwomtari",
      "Inverted_Name": "Kwomtari"
    },
    {
      "Id": "kwp",
      "Print_Name": "Kodia",
      "Inverted_Name": "Kodia"
    },
    {
      "Id": "kwr",
      "Print_Name": "Kwer",
      "Inverted_Name": "Kwer"
    },
    {
      "Id": "kws",
      "Print_Name": "Kwese",
      "Inverted_Name": "Kwese"
    },
    {
      "Id": "kwt",
      "Print_Name": "Kwesten",
      "Inverted_Name": "Kwesten"
    },
    {
      "Id": "kwu",
      "Print_Name": "Kwakum",
      "Inverted_Name": "Kwakum"
    },
    {
      "Id": "kwv",
      "Print_Name": "Sara Kaba Náà",
      "Inverted_Name": "Sara Kaba Náà"
    },
    {
      "Id": "kww",
      "Print_Name": "Kwinti",
      "Inverted_Name": "Kwinti"
    },
    {
      "Id": "kwx",
      "Print_Name": "Khirwar",
      "Inverted_Name": "Khirwar"
    },
    {
      "Id": "kwy",
      "Print_Name": "San Salvador Kongo",
      "Inverted_Name": "Kongo, San Salvador"
    },
    {
      "Id": "kwz",
      "Print_Name": "Kwadi",
      "Inverted_Name": "Kwadi"
    },
    {
      "Id": "kxa",
      "Print_Name": "Kairiru",
      "Inverted_Name": "Kairiru"
    },
    {
      "Id": "kxb",
      "Print_Name": "Krobu",
      "Inverted_Name": "Krobu"
    },
    {
      "Id": "kxc",
      "Print_Name": "Khonso",
      "Inverted_Name": "Khonso"
    },
    {
      "Id": "kxc",
      "Print_Name": "Konso",
      "Inverted_Name": "Konso"
    },
    {
      "Id": "kxd",
      "Print_Name": "Brunei",
      "Inverted_Name": "Brunei"
    },
    {
      "Id": "kxf",
      "Print_Name": "Manumanaw",
      "Inverted_Name": "Manumanaw"
    },
    {
      "Id": "kxf",
      "Print_Name": "Manumanaw Karen",
      "Inverted_Name": "Karen, Manumanaw"
    },
    {
      "Id": "kxh",
      "Print_Name": "Karo (Ethiopia)",
      "Inverted_Name": "Karo (Ethiopia)"
    },
    {
      "Id": "kxi",
      "Print_Name": "Keningau Murut",
      "Inverted_Name": "Murut, Keningau"
    },
    {
      "Id": "kxj",
      "Print_Name": "Kulfa",
      "Inverted_Name": "Kulfa"
    },
    {
      "Id": "kxk",
      "Print_Name": "Zayein Karen",
      "Inverted_Name": "Karen, Zayein"
    },
    {
      "Id": "kxm",
      "Print_Name": "Northern Khmer",
      "Inverted_Name": "Khmer, Northern"
    },
    {
      "Id": "kxn",
      "Print_Name": "Kanowit-Tanjong Melanau",
      "Inverted_Name": "Melanau, Kanowit-Tanjong"
    },
    {
      "Id": "kxo",
      "Print_Name": "Kanoé",
      "Inverted_Name": "Kanoé"
    },
    {
      "Id": "kxp",
      "Print_Name": "Wadiyara Koli",
      "Inverted_Name": "Koli, Wadiyara"
    },
    {
      "Id": "kxq",
      "Print_Name": "Smärky Kanum",
      "Inverted_Name": "Kanum, Smärky"
    },
    {
      "Id": "kxr",
      "Print_Name": "Koro (Papua New Guinea)",
      "Inverted_Name": "Koro (Papua New Guinea)"
    },
    {
      "Id": "kxs",
      "Print_Name": "Kangjia",
      "Inverted_Name": "Kangjia"
    },
    {
      "Id": "kxt",
      "Print_Name": "Koiwat",
      "Inverted_Name": "Koiwat"
    },
    {
      "Id": "kxv",
      "Print_Name": "Kuvi",
      "Inverted_Name": "Kuvi"
    },
    {
      "Id": "kxw",
      "Print_Name": "Konai",
      "Inverted_Name": "Konai"
    },
    {
      "Id": "kxx",
      "Print_Name": "Likuba",
      "Inverted_Name": "Likuba"
    },
    {
      "Id": "kxy",
      "Print_Name": "Kayong",
      "Inverted_Name": "Kayong"
    },
    {
      "Id": "kxz",
      "Print_Name": "Kerewo",
      "Inverted_Name": "Kerewo"
    },
    {
      "Id": "kya",
      "Print_Name": "Kwaya",
      "Inverted_Name": "Kwaya"
    },
    {
      "Id": "kyb",
      "Print_Name": "Butbut Kalinga",
      "Inverted_Name": "Kalinga, Butbut"
    },
    {
      "Id": "kyc",
      "Print_Name": "Kyaka",
      "Inverted_Name": "Kyaka"
    },
    {
      "Id": "kyd",
      "Print_Name": "Karey",
      "Inverted_Name": "Karey"
    },
    {
      "Id": "kye",
      "Print_Name": "Krache",
      "Inverted_Name": "Krache"
    },
    {
      "Id": "kyf",
      "Print_Name": "Kouya",
      "Inverted_Name": "Kouya"
    },
    {
      "Id": "kyg",
      "Print_Name": "Keyagana",
      "Inverted_Name": "Keyagana"
    },
    {
      "Id": "kyh",
      "Print_Name": "Karok",
      "Inverted_Name": "Karok"
    },
    {
      "Id": "kyi",
      "Print_Name": "Kiput",
      "Inverted_Name": "Kiput"
    },
    {
      "Id": "kyj",
      "Print_Name": "Karao",
      "Inverted_Name": "Karao"
    },
    {
      "Id": "kyk",
      "Print_Name": "Kamayo",
      "Inverted_Name": "Kamayo"
    },
    {
      "Id": "kyl",
      "Print_Name": "Kalapuya",
      "Inverted_Name": "Kalapuya"
    },
    {
      "Id": "kym",
      "Print_Name": "Kpatili",
      "Inverted_Name": "Kpatili"
    },
    {
      "Id": "kyn",
      "Print_Name": "Northern Binukidnon",
      "Inverted_Name": "Binukidnon, Northern"
    },
    {
      "Id": "kyo",
      "Print_Name": "Kelon",
      "Inverted_Name": "Kelon"
    },
    {
      "Id": "kyp",
      "Print_Name": "Kang",
      "Inverted_Name": "Kang"
    },
    {
      "Id": "kyq",
      "Print_Name": "Kenga",
      "Inverted_Name": "Kenga"
    },
    {
      "Id": "kyr",
      "Print_Name": "Kuruáya",
      "Inverted_Name": "Kuruáya"
    },
    {
      "Id": "kys",
      "Print_Name": "Baram Kayan",
      "Inverted_Name": "Kayan, Baram"
    },
    {
      "Id": "kyt",
      "Print_Name": "Kayagar",
      "Inverted_Name": "Kayagar"
    },
    {
      "Id": "kyu",
      "Print_Name": "Western Kayah",
      "Inverted_Name": "Kayah, Western"
    },
    {
      "Id": "kyv",
      "Print_Name": "Kayort",
      "Inverted_Name": "Kayort"
    },
    {
      "Id": "kyw",
      "Print_Name": "Kudmali",
      "Inverted_Name": "Kudmali"
    },
    {
      "Id": "kyx",
      "Print_Name": "Rapoisi",
      "Inverted_Name": "Rapoisi"
    },
    {
      "Id": "kyy",
      "Print_Name": "Kambaira",
      "Inverted_Name": "Kambaira"
    },
    {
      "Id": "kyz",
      "Print_Name": "Kayabí",
      "Inverted_Name": "Kayabí"
    },
    {
      "Id": "kza",
      "Print_Name": "Western Karaboro",
      "Inverted_Name": "Karaboro, Western"
    },
    {
      "Id": "kzb",
      "Print_Name": "Kaibobo",
      "Inverted_Name": "Kaibobo"
    },
    {
      "Id": "kzc",
      "Print_Name": "Bondoukou Kulango",
      "Inverted_Name": "Kulango, Bondoukou"
    },
    {
      "Id": "kzd",
      "Print_Name": "Kadai",
      "Inverted_Name": "Kadai"
    },
    {
      "Id": "kze",
      "Print_Name": "Kosena",
      "Inverted_Name": "Kosena"
    },
    {
      "Id": "kzf",
      "Print_Name": "Da'a Kaili",
      "Inverted_Name": "Kaili, Da'a"
    },
    {
      "Id": "kzg",
      "Print_Name": "Kikai",
      "Inverted_Name": "Kikai"
    },
    {
      "Id": "kzi",
      "Print_Name": "Kelabit",
      "Inverted_Name": "Kelabit"
    },
    {
      "Id": "kzk",
      "Print_Name": "Kazukuru",
      "Inverted_Name": "Kazukuru"
    },
    {
      "Id": "kzl",
      "Print_Name": "Kayeli",
      "Inverted_Name": "Kayeli"
    },
    {
      "Id": "kzm",
      "Print_Name": "Kais",
      "Inverted_Name": "Kais"
    },
    {
      "Id": "kzn",
      "Print_Name": "Kokola",
      "Inverted_Name": "Kokola"
    },
    {
      "Id": "kzo",
      "Print_Name": "Kaningi",
      "Inverted_Name": "Kaningi"
    },
    {
      "Id": "kzp",
      "Print_Name": "Kaidipang",
      "Inverted_Name": "Kaidipang"
    },
    {
      "Id": "kzq",
      "Print_Name": "Kaike",
      "Inverted_Name": "Kaike"
    },
    {
      "Id": "kzr",
      "Print_Name": "Karang",
      "Inverted_Name": "Karang"
    },
    {
      "Id": "kzs",
      "Print_Name": "Sugut Dusun",
      "Inverted_Name": "Dusun, Sugut"
    },
    {
      "Id": "kzu",
      "Print_Name": "Kayupulau",
      "Inverted_Name": "Kayupulau"
    },
    {
      "Id": "kzv",
      "Print_Name": "Komyandaret",
      "Inverted_Name": "Komyandaret"
    },
    {
      "Id": "kzw",
      "Print_Name": "Karirí-Xocó",
      "Inverted_Name": "Karirí-Xocó"
    },
    {
      "Id": "kzx",
      "Print_Name": "Kamarian",
      "Inverted_Name": "Kamarian"
    },
    {
      "Id": "kzy",
      "Print_Name": "Kango (Tshopo District)",
      "Inverted_Name": "Kango (Tshopo District)"
    },
    {
      "Id": "kzz",
      "Print_Name": "Kalabra",
      "Inverted_Name": "Kalabra"
    },
    {
      "Id": "laa",
      "Print_Name": "Southern Subanen",
      "Inverted_Name": "Subanen, Southern"
    },
    {
      "Id": "lab",
      "Print_Name": "Linear A",
      "Inverted_Name": "Linear A"
    },
    {
      "Id": "lac",
      "Print_Name": "Lacandon",
      "Inverted_Name": "Lacandon"
    },
    {
      "Id": "lad",
      "Print_Name": "Ladino",
      "Inverted_Name": "Ladino"
    },
    {
      "Id": "lae",
      "Print_Name": "Pattani",
      "Inverted_Name": "Pattani"
    },
    {
      "Id": "laf",
      "Print_Name": "Lafofa",
      "Inverted_Name": "Lafofa"
    },
    {
      "Id": "lag",
      "Print_Name": "Rangi",
      "Inverted_Name": "Rangi"
    },
    {
      "Id": "lah",
      "Print_Name": "Lahnda",
      "Inverted_Name": "Lahnda"
    },
    {
      "Id": "lai",
      "Print_Name": "Lambya",
      "Inverted_Name": "Lambya"
    },
    {
      "Id": "laj",
      "Print_Name": "Lango (Uganda)",
      "Inverted_Name": "Lango (Uganda)"
    },
    {
      "Id": "lal",
      "Print_Name": "Lalia",
      "Inverted_Name": "Lalia"
    },
    {
      "Id": "lam",
      "Print_Name": "Lamba",
      "Inverted_Name": "Lamba"
    },
    {
      "Id": "lan",
      "Print_Name": "Laru",
      "Inverted_Name": "Laru"
    },
    {
      "Id": "lao",
      "Print_Name": "Lao",
      "Inverted_Name": "Lao"
    },
    {
      "Id": "lap",
      "Print_Name": "Laka (Chad)",
      "Inverted_Name": "Laka (Chad)"
    },
    {
      "Id": "laq",
      "Print_Name": "Qabiao",
      "Inverted_Name": "Qabiao"
    },
    {
      "Id": "lar",
      "Print_Name": "Larteh",
      "Inverted_Name": "Larteh"
    },
    {
      "Id": "las",
      "Print_Name": "Lama (Togo)",
      "Inverted_Name": "Lama (Togo)"
    },
    {
      "Id": "lat",
      "Print_Name": "Latin",
      "Inverted_Name": "Latin"
    },
    {
      "Id": "lau",
      "Print_Name": "Laba",
      "Inverted_Name": "Laba"
    },
    {
      "Id": "lav",
      "Print_Name": "Latvian",
      "Inverted_Name": "Latvian"
    },
    {
      "Id": "law",
      "Print_Name": "Lauje",
      "Inverted_Name": "Lauje"
    },
    {
      "Id": "lax",
      "Print_Name": "Tiwa",
      "Inverted_Name": "Tiwa"
    },
    {
      "Id": "lay",
      "Print_Name": "Lama Bai",
      "Inverted_Name": "Bai, Lama"
    },
    {
      "Id": "laz",
      "Print_Name": "Aribwatsa",
      "Inverted_Name": "Aribwatsa"
    },
    {
      "Id": "lbb",
      "Print_Name": "Label",
      "Inverted_Name": "Label"
    },
    {
      "Id": "lbc",
      "Print_Name": "Lakkia",
      "Inverted_Name": "Lakkia"
    },
    {
      "Id": "lbe",
      "Print_Name": "Lak",
      "Inverted_Name": "Lak"
    },
    {
      "Id": "lbf",
      "Print_Name": "Tinani",
      "Inverted_Name": "Tinani"
    },
    {
      "Id": "lbg",
      "Print_Name": "Laopang",
      "Inverted_Name": "Laopang"
    },
    {
      "Id": "lbi",
      "Print_Name": "La'bi",
      "Inverted_Name": "La'bi"
    },
    {
      "Id": "lbj",
      "Print_Name": "Ladakhi",
      "Inverted_Name": "Ladakhi"
    },
    {
      "Id": "lbk",
      "Print_Name": "Central Bontok",
      "Inverted_Name": "Bontok, Central"
    },
    {
      "Id": "lbl",
      "Print_Name": "Libon Bikol",
      "Inverted_Name": "Bikol, Libon"
    },
    {
      "Id": "lbm",
      "Print_Name": "Lodhi",
      "Inverted_Name": "Lodhi"
    },
    {
      "Id": "lbn",
      "Print_Name": "Rmeet",
      "Inverted_Name": "Rmeet"
    },
    {
      "Id": "lbo",
      "Print_Name": "Laven",
      "Inverted_Name": "Laven"
    },
    {
      "Id": "lbq",
      "Print_Name": "Wampar",
      "Inverted_Name": "Wampar"
    },
    {
      "Id": "lbr",
      "Print_Name": "Lohorung",
      "Inverted_Name": "Lohorung"
    },
    {
      "Id": "lbs",
      "Print_Name": "Libyan Sign Language",
      "Inverted_Name": "Libyan Sign Language"
    },
    {
      "Id": "lbt",
      "Print_Name": "Lachi",
      "Inverted_Name": "Lachi"
    },
    {
      "Id": "lbu",
      "Print_Name": "Labu",
      "Inverted_Name": "Labu"
    },
    {
      "Id": "lbv",
      "Print_Name": "Lavatbura-Lamusong",
      "Inverted_Name": "Lavatbura-Lamusong"
    },
    {
      "Id": "lbw",
      "Print_Name": "Tolaki",
      "Inverted_Name": "Tolaki"
    },
    {
      "Id": "lbx",
      "Print_Name": "Lawangan",
      "Inverted_Name": "Lawangan"
    },
    {
      "Id": "lby",
      "Print_Name": "Lamalama",
      "Inverted_Name": "Lamalama"
    },
    {
      "Id": "lby",
      "Print_Name": "Lamu-Lamu",
      "Inverted_Name": "Lamu-Lamu"
    },
    {
      "Id": "lbz",
      "Print_Name": "Lardil",
      "Inverted_Name": "Lardil"
    },
    {
      "Id": "lcc",
      "Print_Name": "Legenyem",
      "Inverted_Name": "Legenyem"
    },
    {
      "Id": "lcd",
      "Print_Name": "Lola",
      "Inverted_Name": "Lola"
    },
    {
      "Id": "lce",
      "Print_Name": "Loncong",
      "Inverted_Name": "Loncong"
    },
    {
      "Id": "lce",
      "Print_Name": "Sekak",
      "Inverted_Name": "Sekak"
    },
    {
      "Id": "lcf",
      "Print_Name": "Lubu",
      "Inverted_Name": "Lubu"
    },
    {
      "Id": "lch",
      "Print_Name": "Luchazi",
      "Inverted_Name": "Luchazi"
    },
    {
      "Id": "lcl",
      "Print_Name": "Lisela",
      "Inverted_Name": "Lisela"
    },
    {
      "Id": "lcm",
      "Print_Name": "Tungag",
      "Inverted_Name": "Tungag"
    },
    {
      "Id": "lcp",
      "Print_Name": "Western Lawa",
      "Inverted_Name": "Lawa, Western"
    },
    {
      "Id": "lcq",
      "Print_Name": "Luhu",
      "Inverted_Name": "Luhu"
    },
    {
      "Id": "lcs",
      "Print_Name": "Lisabata-Nuniali",
      "Inverted_Name": "Lisabata-Nuniali"
    },
    {
      "Id": "lda",
      "Print_Name": "Kla-Dan",
      "Inverted_Name": "Kla-Dan"
    },
    {
      "Id": "ldb",
      "Print_Name": "Dũya",
      "Inverted_Name": "Dũya"
    },
    {
      "Id": "ldd",
      "Print_Name": "Luri",
      "Inverted_Name": "Luri"
    },
    {
      "Id": "ldg",
      "Print_Name": "Lenyima",
      "Inverted_Name": "Lenyima"
    },
    {
      "Id": "ldh",
      "Print_Name": "Lamja-Dengsa-Tola",
      "Inverted_Name": "Lamja-Dengsa-Tola"
    },
    {
      "Id": "ldi",
      "Print_Name": "Laari",
      "Inverted_Name": "Laari"
    },
    {
      "Id": "ldj",
      "Print_Name": "Lemoro",
      "Inverted_Name": "Lemoro"
    },
    {
      "Id": "ldk",
      "Print_Name": "Leelau",
      "Inverted_Name": "Leelau"
    },
    {
      "Id": "ldl",
      "Print_Name": "Kaan",
      "Inverted_Name": "Kaan"
    },
    {
      "Id": "ldm",
      "Print_Name": "Landoma",
      "Inverted_Name": "Landoma"
    },
    {
      "Id": "ldn",
      "Print_Name": "Láadan",
      "Inverted_Name": "Láadan"
    },
    {
      "Id": "ldo",
      "Print_Name": "Loo",
      "Inverted_Name": "Loo"
    },
    {
      "Id": "ldp",
      "Print_Name": "Tso",
      "Inverted_Name": "Tso"
    },
    {
      "Id": "ldq",
      "Print_Name": "Lufu",
      "Inverted_Name": "Lufu"
    },
    {
      "Id": "lea",
      "Print_Name": "Lega-Shabunda",
      "Inverted_Name": "Lega-Shabunda"
    },
    {
      "Id": "leb",
      "Print_Name": "Lala-Bisa",
      "Inverted_Name": "Lala-Bisa"
    },
    {
      "Id": "lec",
      "Print_Name": "Leco",
      "Inverted_Name": "Leco"
    },
    {
      "Id": "led",
      "Print_Name": "Lendu",
      "Inverted_Name": "Lendu"
    },
    {
      "Id": "lee",
      "Print_Name": "Lyélé",
      "Inverted_Name": "Lyélé"
    },
    {
      "Id": "lef",
      "Print_Name": "Lelemi",
      "Inverted_Name": "Lelemi"
    },
    {
      "Id": "leh",
      "Print_Name": "Lenje",
      "Inverted_Name": "Lenje"
    },
    {
      "Id": "lei",
      "Print_Name": "Lemio",
      "Inverted_Name": "Lemio"
    },
    {
      "Id": "lej",
      "Print_Name": "Lengola",
      "Inverted_Name": "Lengola"
    },
    {
      "Id": "lek",
      "Print_Name": "Leipon",
      "Inverted_Name": "Leipon"
    },
    {
      "Id": "lel",
      "Print_Name": "Lele (Democratic Republic of Congo)",
      "Inverted_Name": "Lele (Democratic Republic of Congo)"
    },
    {
      "Id": "lem",
      "Print_Name": "Nomaande",
      "Inverted_Name": "Nomaande"
    },
    {
      "Id": "len",
      "Print_Name": "Lenca",
      "Inverted_Name": "Lenca"
    },
    {
      "Id": "leo",
      "Print_Name": "Leti (Cameroon)",
      "Inverted_Name": "Leti (Cameroon)"
    },
    {
      "Id": "lep",
      "Print_Name": "Lepcha",
      "Inverted_Name": "Lepcha"
    },
    {
      "Id": "leq",
      "Print_Name": "Lembena",
      "Inverted_Name": "Lembena"
    },
    {
      "Id": "ler",
      "Print_Name": "Lenkau",
      "Inverted_Name": "Lenkau"
    },
    {
      "Id": "les",
      "Print_Name": "Lese",
      "Inverted_Name": "Lese"
    },
    {
      "Id": "let",
      "Print_Name": "Amio-Gelimi",
      "Inverted_Name": "Amio-Gelimi"
    },
    {
      "Id": "let",
      "Print_Name": "Lesing-Gelimi",
      "Inverted_Name": "Lesing-Gelimi"
    },
    {
      "Id": "leu",
      "Print_Name": "Kara (Papua New Guinea)",
      "Inverted_Name": "Kara (Papua New Guinea)"
    },
    {
      "Id": "lev",
      "Print_Name": "Lamma",
      "Inverted_Name": "Lamma"
    },
    {
      "Id": "lew",
      "Print_Name": "Ledo Kaili",
      "Inverted_Name": "Kaili, Ledo"
    },
    {
      "Id": "lex",
      "Print_Name": "Luang",
      "Inverted_Name": "Luang"
    },
    {
      "Id": "ley",
      "Print_Name": "Lemolang",
      "Inverted_Name": "Lemolang"
    },
    {
      "Id": "lez",
      "Print_Name": "Lezghian",
      "Inverted_Name": "Lezghian"
    },
    {
      "Id": "lfa",
      "Print_Name": "Lefa",
      "Inverted_Name": "Lefa"
    },
    {
      "Id": "lfn",
      "Print_Name": "Lingua Franca Nova",
      "Inverted_Name": "Lingua Franca Nova"
    },
    {
      "Id": "lga",
      "Print_Name": "Lungga",
      "Inverted_Name": "Lungga"
    },
    {
      "Id": "lgb",
      "Print_Name": "Laghu",
      "Inverted_Name": "Laghu"
    },
    {
      "Id": "lgg",
      "Print_Name": "Lugbara",
      "Inverted_Name": "Lugbara"
    },
    {
      "Id": "lgh",
      "Print_Name": "Laghuu",
      "Inverted_Name": "Laghuu"
    },
    {
      "Id": "lgi",
      "Print_Name": "Lengilu",
      "Inverted_Name": "Lengilu"
    },
    {
      "Id": "lgk",
      "Print_Name": "Lingarak",
      "Inverted_Name": "Lingarak"
    },
    {
      "Id": "lgk",
      "Print_Name": "Neverver",
      "Inverted_Name": "Neverver"
    },
    {
      "Id": "lgl",
      "Print_Name": "Wala",
      "Inverted_Name": "Wala"
    },
    {
      "Id": "lgm",
      "Print_Name": "Lega-Mwenga",
      "Inverted_Name": "Lega-Mwenga"
    },
    {
      "Id": "lgn",
      "Print_Name": "Opuuo",
      "Inverted_Name": "Opuuo"
    },
    {
      "Id": "lgn",
      "Print_Name": "T'apo",
      "Inverted_Name": "T'apo"
    },
    {
      "Id": "lgo",
      "Print_Name": "Lango (South Sudan)",
      "Inverted_Name": "Lango (South Sudan)"
    },
    {
      "Id": "lgq",
      "Print_Name": "Logba",
      "Inverted_Name": "Logba"
    },
    {
      "Id": "lgr",
      "Print_Name": "Lengo",
      "Inverted_Name": "Lengo"
    },
    {
      "Id": "lgs",
      "Print_Name": "Guinea-Bissau Sign Language",
      "Inverted_Name": "Guinea-Bissau Sign Language"
    },
    {
      "Id": "lgs",
      "Print_Name": "Língua Gestual Guineense",
      "Inverted_Name": "Língua Gestual Guineense"
    },
    {
      "Id": "lgt",
      "Print_Name": "Pahi",
      "Inverted_Name": "Pahi"
    },
    {
      "Id": "lgu",
      "Print_Name": "Longgu",
      "Inverted_Name": "Longgu"
    },
    {
      "Id": "lgz",
      "Print_Name": "Ligenza",
      "Inverted_Name": "Ligenza"
    },
    {
      "Id": "lha",
      "Print_Name": "Laha (Viet Nam)",
      "Inverted_Name": "Laha (Viet Nam)"
    },
    {
      "Id": "lhh",
      "Print_Name": "Laha (Indonesia)",
      "Inverted_Name": "Laha (Indonesia)"
    },
    {
      "Id": "lhi",
      "Print_Name": "Lahu Shi",
      "Inverted_Name": "Lahu Shi"
    },
    {
      "Id": "lhl",
      "Print_Name": "Lahul Lohar",
      "Inverted_Name": "Lohar, Lahul"
    },
    {
      "Id": "lhm",
      "Print_Name": "Lhomi",
      "Inverted_Name": "Lhomi"
    },
    {
      "Id": "lhn",
      "Print_Name": "Lahanan",
      "Inverted_Name": "Lahanan"
    },
    {
      "Id": "lhp",
      "Print_Name": "Lhokpu",
      "Inverted_Name": "Lhokpu"
    },
    {
      "Id": "lhs",
      "Print_Name": "Mlahsö",
      "Inverted_Name": "Mlahsö"
    },
    {
      "Id": "lht",
      "Print_Name": "Lo-Toga",
      "Inverted_Name": "Lo-Toga"
    },
    {
      "Id": "lhu",
      "Print_Name": "Lahu",
      "Inverted_Name": "Lahu"
    },
    {
      "Id": "lia",
      "Print_Name": "West-Central Limba",
      "Inverted_Name": "Limba, West-Central"
    },
    {
      "Id": "lib",
      "Print_Name": "Likum",
      "Inverted_Name": "Likum"
    },
    {
      "Id": "lic",
      "Print_Name": "Hlai",
      "Inverted_Name": "Hlai"
    },
    {
      "Id": "lid",
      "Print_Name": "Nyindrou",
      "Inverted_Name": "Nyindrou"
    },
    {
      "Id": "lie",
      "Print_Name": "Likila",
      "Inverted_Name": "Likila"
    },
    {
      "Id": "lif",
      "Print_Name": "Limbu",
      "Inverted_Name": "Limbu"
    },
    {
      "Id": "lig",
      "Print_Name": "Ligbi",
      "Inverted_Name": "Ligbi"
    },
    {
      "Id": "lih",
      "Print_Name": "Lihir",
      "Inverted_Name": "Lihir"
    },
    {
      "Id": "lij",
      "Print_Name": "Ligurian",
      "Inverted_Name": "Ligurian"
    },
    {
      "Id": "lik",
      "Print_Name": "Lika",
      "Inverted_Name": "Lika"
    },
    {
      "Id": "lil",
      "Print_Name": "Lillooet",
      "Inverted_Name": "Lillooet"
    },
    {
      "Id": "lim",
      "Print_Name": "Limburgan",
      "Inverted_Name": "Limburgan"
    },
    {
      "Id": "lim",
      "Print_Name": "Limburger",
      "Inverted_Name": "Limburger"
    },
    {
      "Id": "lim",
      "Print_Name": "Limburgish",
      "Inverted_Name": "Limburgish"
    },
    {
      "Id": "lin",
      "Print_Name": "Lingala",
      "Inverted_Name": "Lingala"
    },
    {
      "Id": "lio",
      "Print_Name": "Liki",
      "Inverted_Name": "Liki"
    },
    {
      "Id": "lip",
      "Print_Name": "Sekpele",
      "Inverted_Name": "Sekpele"
    },
    {
      "Id": "liq",
      "Print_Name": "Libido",
      "Inverted_Name": "Libido"
    },
    {
      "Id": "lir",
      "Print_Name": "Liberian English",
      "Inverted_Name": "English, Liberian"
    },
    {
      "Id": "lis",
      "Print_Name": "Lisu",
      "Inverted_Name": "Lisu"
    },
    {
      "Id": "lit",
      "Print_Name": "Lithuanian",
      "Inverted_Name": "Lithuanian"
    },
    {
      "Id": "liu",
      "Print_Name": "Logorik",
      "Inverted_Name": "Logorik"
    },
    {
      "Id": "liv",
      "Print_Name": "Liv",
      "Inverted_Name": "Liv"
    },
    {
      "Id": "liw",
      "Print_Name": "Col",
      "Inverted_Name": "Col"
    },
    {
      "Id": "lix",
      "Print_Name": "Liabuku",
      "Inverted_Name": "Liabuku"
    },
    {
      "Id": "liy",
      "Print_Name": "Banda-Bambari",
      "Inverted_Name": "Banda-Bambari"
    },
    {
      "Id": "liz",
      "Print_Name": "Libinza",
      "Inverted_Name": "Libinza"
    },
    {
      "Id": "lja",
      "Print_Name": "Golpa",
      "Inverted_Name": "Golpa"
    },
    {
      "Id": "lje",
      "Print_Name": "Rampi",
      "Inverted_Name": "Rampi"
    },
    {
      "Id": "lji",
      "Print_Name": "Laiyolo",
      "Inverted_Name": "Laiyolo"
    },
    {
      "Id": "ljl",
      "Print_Name": "Li'o",
      "Inverted_Name": "Li'o"
    },
    {
      "Id": "ljp",
      "Print_Name": "Lampung Api",
      "Inverted_Name": "Lampung Api"
    },
    {
      "Id": "ljw",
      "Print_Name": "Yirandali",
      "Inverted_Name": "Yirandali"
    },
    {
      "Id": "ljx",
      "Print_Name": "Yuru",
      "Inverted_Name": "Yuru"
    },
    {
      "Id": "lka",
      "Print_Name": "Lakalei",
      "Inverted_Name": "Lakalei"
    },
    {
      "Id": "lkb",
      "Print_Name": "Kabras",
      "Inverted_Name": "Kabras"
    },
    {
      "Id": "lkb",
      "Print_Name": "Lukabaras",
      "Inverted_Name": "Lukabaras"
    },
    {
      "Id": "lkc",
      "Print_Name": "Kucong",
      "Inverted_Name": "Kucong"
    },
    {
      "Id": "lkd",
      "Print_Name": "Lakondê",
      "Inverted_Name": "Lakondê"
    },
    {
      "Id": "lke",
      "Print_Name": "Kenyi",
      "Inverted_Name": "Kenyi"
    },
    {
      "Id": "lkh",
      "Print_Name": "Lakha",
      "Inverted_Name": "Lakha"
    },
    {
      "Id": "lki",
      "Print_Name": "Laki",
      "Inverted_Name": "Laki"
    },
    {
      "Id": "lkj",
      "Print_Name": "Remun",
      "Inverted_Name": "Remun"
    },
    {
      "Id": "lkl",
      "Print_Name": "Laeko-Libuat",
      "Inverted_Name": "Laeko-Libuat"
    },
    {
      "Id": "lkm",
      "Print_Name": "Kalaamaya",
      "Inverted_Name": "Kalaamaya"
    },
    {
      "Id": "lkn",
      "Print_Name": "Lakon",
      "Inverted_Name": "Lakon"
    },
    {
      "Id": "lkn",
      "Print_Name": "Vure",
      "Inverted_Name": "Vure"
    },
    {
      "Id": "lko",
      "Print_Name": "Khayo",
      "Inverted_Name": "Khayo"
    },
    {
      "Id": "lko",
      "Print_Name": "Olukhayo",
      "Inverted_Name": "Olukhayo"
    },
    {
      "Id": "lkr",
      "Print_Name": "Päri",
      "Inverted_Name": "Päri"
    },
    {
      "Id": "lks",
      "Print_Name": "Kisa",
      "Inverted_Name": "Kisa"
    },
    {
      "Id": "lks",
      "Print_Name": "Olushisa",
      "Inverted_Name": "Olushisa"
    },
    {
      "Id": "lkt",
      "Print_Name": "Lakota",
      "Inverted_Name": "Lakota"
    },
    {
      "Id": "lku",
      "Print_Name": "Kungkari",
      "Inverted_Name": "Kungkari"
    },
    {
      "Id": "lky",
      "Print_Name": "Lokoya",
      "Inverted_Name": "Lokoya"
    },
    {
      "Id": "lla",
      "Print_Name": "Lala-Roba",
      "Inverted_Name": "Lala-Roba"
    },
    {
      "Id": "llb",
      "Print_Name": "Lolo",
      "Inverted_Name": "Lolo"
    },
    {
      "Id": "llc",
      "Print_Name": "Lele (Guinea)",
      "Inverted_Name": "Lele (Guinea)"
    },
    {
      "Id": "lld",
      "Print_Name": "Ladin",
      "Inverted_Name": "Ladin"
    },
    {
      "Id": "lle",
      "Print_Name": "Lele (Papua New Guinea)",
      "Inverted_Name": "Lele (Papua New Guinea)"
    },
    {
      "Id": "llf",
      "Print_Name": "Hermit",
      "Inverted_Name": "Hermit"
    },
    {
      "Id": "llg",
      "Print_Name": "Lole",
      "Inverted_Name": "Lole"
    },
    {
      "Id": "llh",
      "Print_Name": "Lamu",
      "Inverted_Name": "Lamu"
    },
    {
      "Id": "lli",
      "Print_Name": "Teke-Laali",
      "Inverted_Name": "Teke-Laali"
    },
    {
      "Id": "llj",
      "Print_Name": "Ladji Ladji",
      "Inverted_Name": "Ladji Ladji"
    },
    {
      "Id": "llk",
      "Print_Name": "Lelak",
      "Inverted_Name": "Lelak"
    },
    {
      "Id": "lll",
      "Print_Name": "Lilau",
      "Inverted_Name": "Lilau"
    },
    {
      "Id": "llm",
      "Print_Name": "Lasalimu",
      "Inverted_Name": "Lasalimu"
    },
    {
      "Id": "lln",
      "Print_Name": "Lele (Chad)",
      "Inverted_Name": "Lele (Chad)"
    },
    {
      "Id": "llp",
      "Print_Name": "North Efate",
      "Inverted_Name": "Efate, North"
    },
    {
      "Id": "llq",
      "Print_Name": "Lolak",
      "Inverted_Name": "Lolak"
    },
    {
      "Id": "lls",
      "Print_Name": "Lithuanian Sign Language",
      "Inverted_Name": "Lithuanian Sign Language"
    },
    {
      "Id": "llu",
      "Print_Name": "Lau",
      "Inverted_Name": "Lau"
    },
    {
      "Id": "llx",
      "Print_Name": "Lauan",
      "Inverted_Name": "Lauan"
    },
    {
      "Id": "lma",
      "Print_Name": "East Limba",
      "Inverted_Name": "Limba, East"
    },
    {
      "Id": "lmb",
      "Print_Name": "Merei",
      "Inverted_Name": "Merei"
    },
    {
      "Id": "lmc",
      "Print_Name": "Limilngan",
      "Inverted_Name": "Limilngan"
    },
    {
      "Id": "lmd",
      "Print_Name": "Lumun",
      "Inverted_Name": "Lumun"
    },
    {
      "Id": "lme",
      "Print_Name": "Pévé",
      "Inverted_Name": "Pévé"
    },
    {
      "Id": "lmf",
      "Print_Name": "South Lembata",
      "Inverted_Name": "Lembata, South"
    },
    {
      "Id": "lmg",
      "Print_Name": "Lamogai",
      "Inverted_Name": "Lamogai"
    },
    {
      "Id": "lmh",
      "Print_Name": "Lambichhong",
      "Inverted_Name": "Lambichhong"
    },
    {
      "Id": "lmi",
      "Print_Name": "Lombi",
      "Inverted_Name": "Lombi"
    },
    {
      "Id": "lmj",
      "Print_Name": "West Lembata",
      "Inverted_Name": "Lembata, West"
    },
    {
      "Id": "lmk",
      "Print_Name": "Lamkang",
      "Inverted_Name": "Lamkang"
    },
    {
      "Id": "lml",
      "Print_Name": "Hano",
      "Inverted_Name": "Hano"
    },
    {
      "Id": "lmn",
      "Print_Name": "Lambadi",
      "Inverted_Name": "Lambadi"
    },
    {
      "Id": "lmo",
      "Print_Name": "Lombard",
      "Inverted_Name": "Lombard"
    },
    {
      "Id": "lmp",
      "Print_Name": "Limbum",
      "Inverted_Name": "Limbum"
    },
    {
      "Id": "lmq",
      "Print_Name": "Lamatuka",
      "Inverted_Name": "Lamatuka"
    },
    {
      "Id": "lmr",
      "Print_Name": "Lamalera",
      "Inverted_Name": "Lamalera"
    },
    {
      "Id": "lmu",
      "Print_Name": "Lamenu",
      "Inverted_Name": "Lamenu"
    },
    {
      "Id": "lmv",
      "Print_Name": "Lomaiviti",
      "Inverted_Name": "Lomaiviti"
    },
    {
      "Id": "lmw",
      "Print_Name": "Lake Miwok",
      "Inverted_Name": "Miwok, Lake"
    },
    {
      "Id": "lmx",
      "Print_Name": "Laimbue",
      "Inverted_Name": "Laimbue"
    },
    {
      "Id": "lmy",
      "Print_Name": "Lamboya",
      "Inverted_Name": "Lamboya"
    },
    {
      "Id": "lna",
      "Print_Name": "Langbashe",
      "Inverted_Name": "Langbashe"
    },
    {
      "Id": "lnb",
      "Print_Name": "Mbalanhu",
      "Inverted_Name": "Mbalanhu"
    },
    {
      "Id": "lnd",
      "Print_Name": "Lun Bawang",
      "Inverted_Name": "Lun Bawang"
    },
    {
      "Id": "lnd",
      "Print_Name": "Lundayeh",
      "Inverted_Name": "Lundayeh"
    },
    {
      "Id": "lng",
      "Print_Name": "Langobardic",
      "Inverted_Name": "Langobardic"
    },
    {
      "Id": "lnh",
      "Print_Name": "Lanoh",
      "Inverted_Name": "Lanoh"
    },
    {
      "Id": "lni",
      "Print_Name": "Daantanai'",
      "Inverted_Name": "Daantanai'"
    },
    {
      "Id": "lnj",
      "Print_Name": "Leningitij",
      "Inverted_Name": "Leningitij"
    },
    {
      "Id": "lnl",
      "Print_Name": "South Central Banda",
      "Inverted_Name": "Banda, South Central"
    },
    {
      "Id": "lnm",
      "Print_Name": "Langam",
      "Inverted_Name": "Langam"
    },
    {
      "Id": "lnn",
      "Print_Name": "Lorediakarkar",
      "Inverted_Name": "Lorediakarkar"
    },
    {
      "Id": "lns",
      "Print_Name": "Lamnso'",
      "Inverted_Name": "Lamnso'"
    },
    {
      "Id": "lnu",
      "Print_Name": "Longuda",
      "Inverted_Name": "Longuda"
    },
    {
      "Id": "lnw",
      "Print_Name": "Lanima",
      "Inverted_Name": "Lanima"
    },
    {
      "Id": "lnz",
      "Print_Name": "Lonzo",
      "Inverted_Name": "Lonzo"
    },
    {
      "Id": "loa",
      "Print_Name": "Loloda",
      "Inverted_Name": "Loloda"
    },
    {
      "Id": "lob",
      "Print_Name": "Lobi",
      "Inverted_Name": "Lobi"
    },
    {
      "Id": "loc",
      "Print_Name": "Inonhan",
      "Inverted_Name": "Inonhan"
    },
    {
      "Id": "loe",
      "Print_Name": "Saluan",
      "Inverted_Name": "Saluan"
    },
    {
      "Id": "lof",
      "Print_Name": "Logol",
      "Inverted_Name": "Logol"
    },
    {
      "Id": "log",
      "Print_Name": "Logo",
      "Inverted_Name": "Logo"
    },
    {
      "Id": "loh",
      "Print_Name": "Laarim",
      "Inverted_Name": "Laarim"
    },
    {
      "Id": "loh",
      "Print_Name": "Narim",
      "Inverted_Name": "Narim"
    },
    {
      "Id": "loi",
      "Print_Name": "Loma (Côte d'Ivoire)",
      "Inverted_Name": "Loma (Côte d'Ivoire)"
    },
    {
      "Id": "loj",
      "Print_Name": "Lou",
      "Inverted_Name": "Lou"
    },
    {
      "Id": "lok",
      "Print_Name": "Loko",
      "Inverted_Name": "Loko"
    },
    {
      "Id": "lol",
      "Print_Name": "Mongo",
      "Inverted_Name": "Mongo"
    },
    {
      "Id": "lom",
      "Print_Name": "Loma (Liberia)",
      "Inverted_Name": "Loma (Liberia)"
    },
    {
      "Id": "lon",
      "Print_Name": "Malawi Lomwe",
      "Inverted_Name": "Lomwe, Malawi"
    },
    {
      "Id": "loo",
      "Print_Name": "Lombo",
      "Inverted_Name": "Lombo"
    },
    {
      "Id": "lop",
      "Print_Name": "Lopa",
      "Inverted_Name": "Lopa"
    },
    {
      "Id": "loq",
      "Print_Name": "Lobala",
      "Inverted_Name": "Lobala"
    },
    {
      "Id": "lor",
      "Print_Name": "Téén",
      "Inverted_Name": "Téén"
    },
    {
      "Id": "los",
      "Print_Name": "Loniu",
      "Inverted_Name": "Loniu"
    },
    {
      "Id": "lot",
      "Print_Name": "Otuho",
      "Inverted_Name": "Otuho"
    },
    {
      "Id": "lou",
      "Print_Name": "Louisiana Creole",
      "Inverted_Name": "Creole, Louisiana"
    },
    {
      "Id": "lov",
      "Print_Name": "Lopi",
      "Inverted_Name": "Lopi"
    },
    {
      "Id": "low",
      "Print_Name": "Tampias Lobu",
      "Inverted_Name": "Lobu, Tampias"
    },
    {
      "Id": "lox",
      "Print_Name": "Loun",
      "Inverted_Name": "Loun"
    },
    {
      "Id": "loy",
      "Print_Name": "Loke",
      "Inverted_Name": "Loke"
    },
    {
      "Id": "loz",
      "Print_Name": "Lozi",
      "Inverted_Name": "Lozi"
    },
    {
      "Id": "lpa",
      "Print_Name": "Lelepa",
      "Inverted_Name": "Lelepa"
    },
    {
      "Id": "lpe",
      "Print_Name": "Lepki",
      "Inverted_Name": "Lepki"
    },
    {
      "Id": "lpn",
      "Print_Name": "Long Phuri Naga",
      "Inverted_Name": "Naga, Long Phuri"
    },
    {
      "Id": "lpo",
      "Print_Name": "Lipo",
      "Inverted_Name": "Lipo"
    },
    {
      "Id": "lpx",
      "Print_Name": "Lopit",
      "Inverted_Name": "Lopit"
    },
    {
      "Id": "lqr",
      "Print_Name": "Logir",
      "Inverted_Name": "Logir"
    },
    {
      "Id": "lra",
      "Print_Name": "Rara Bakati'",
      "Inverted_Name": "Rara Bakati'"
    },
    {
      "Id": "lrc",
      "Print_Name": "Northern Luri",
      "Inverted_Name": "Luri, Northern"
    },
    {
      "Id": "lre",
      "Print_Name": "Laurentian",
      "Inverted_Name": "Laurentian"
    },
    {
      "Id": "lrg",
      "Print_Name": "Laragia",
      "Inverted_Name": "Laragia"
    },
    {
      "Id": "lri",
      "Print_Name": "Marachi",
      "Inverted_Name": "Marachi"
    },
    {
      "Id": "lri",
      "Print_Name": "Olumarachi",
      "Inverted_Name": "Olumarachi"
    },
    {
      "Id": "lrk",
      "Print_Name": "Loarki",
      "Inverted_Name": "Loarki"
    },
    {
      "Id": "lrl",
      "Print_Name": "Lari",
      "Inverted_Name": "Lari"
    },
    {
      "Id": "lrm",
      "Print_Name": "Marama",
      "Inverted_Name": "Marama"
    },
    {
      "Id": "lrm",
      "Print_Name": "Olumarama",
      "Inverted_Name": "Olumarama"
    },
    {
      "Id": "lrn",
      "Print_Name": "Lorang",
      "Inverted_Name": "Lorang"
    },
    {
      "Id": "lro",
      "Print_Name": "Laro",
      "Inverted_Name": "Laro"
    },
    {
      "Id": "lrr",
      "Print_Name": "Southern Yamphu",
      "Inverted_Name": "Yamphu, Southern"
    },
    {
      "Id": "lrt",
      "Print_Name": "Larantuka Malay",
      "Inverted_Name": "Malay, Larantuka"
    },
    {
      "Id": "lrv",
      "Print_Name": "Larevat",
      "Inverted_Name": "Larevat"
    },
    {
      "Id": "lrz",
      "Print_Name": "Lemerig",
      "Inverted_Name": "Lemerig"
    },
    {
      "Id": "lsa",
      "Print_Name": "Lasgerdi",
      "Inverted_Name": "Lasgerdi"
    },
    {
      "Id": "lsb",
      "Print_Name": "Burundian Sign Language",
      "Inverted_Name": "Burundian Sign Language"
    },
    {
      "Id": "lsb",
      "Print_Name": "Langue des Signes Burundaise",
      "Inverted_Name": "Langue des Signes Burundaise"
    },
    {
      "Id": "lsc",
      "Print_Name": "Albarradas Sign Language",
      "Inverted_Name": "Albarradas Sign Language"
    },
    {
      "Id": "lsc",
      "Print_Name": "Lengua de señas Albarradas",
      "Inverted_Name": "Lengua de señas Albarradas"
    },
    {
      "Id": "lsd",
      "Print_Name": "Lishana Deni",
      "Inverted_Name": "Lishana Deni"
    },
    {
      "Id": "lse",
      "Print_Name": "Lusengo",
      "Inverted_Name": "Lusengo"
    },
    {
      "Id": "lsh",
      "Print_Name": "Lish",
      "Inverted_Name": "Lish"
    },
    {
      "Id": "lsi",
      "Print_Name": "Lashi",
      "Inverted_Name": "Lashi"
    },
    {
      "Id": "lsl",
      "Print_Name": "Latvian Sign Language",
      "Inverted_Name": "Latvian Sign Language"
    },
    {
      "Id": "lsm",
      "Print_Name": "Olusamia",
      "Inverted_Name": "Olusamia"
    },
    {
      "Id": "lsm",
      "Print_Name": "Saamia",
      "Inverted_Name": "Saamia"
    },
    {
      "Id": "lsn",
      "Print_Name": "Tibetan Sign Language",
      "Inverted_Name": "Tibetan Sign Language"
    },
    {
      "Id": "lso",
      "Print_Name": "Laos Sign Language",
      "Inverted_Name": "Laos Sign Language"
    },
    {
      "Id": "lsp",
      "Print_Name": "Lengua de Señas Panameñas",
      "Inverted_Name": "Lengua de Señas Panameñas"
    },
    {
      "Id": "lsp",
      "Print_Name": "Panamanian Sign Language",
      "Inverted_Name": "Panamanian Sign Language"
    },
    {
      "Id": "lsr",
      "Print_Name": "Aruop",
      "Inverted_Name": "Aruop"
    },
    {
      "Id": "lss",
      "Print_Name": "Lasi",
      "Inverted_Name": "Lasi"
    },
    {
      "Id": "lst",
      "Print_Name": "Trinidad and Tobago Sign Language",
      "Inverted_Name": "Trinidad and Tobago Sign Language"
    },
    {
      "Id": "lsv",
      "Print_Name": "Sivia Sign Language",
      "Inverted_Name": "Sivia Sign Language"
    },
    {
      "Id": "lsw",
      "Print_Name": "Lalang Siny Seselwa",
      "Inverted_Name": "Lalang Siny Seselwa"
    },
    {
      "Id": "lsw",
      "Print_Name": "Langue des Signes Seychelloise",
      "Inverted_Name": "Langue des Signes Seychelloise"
    },
    {
      "Id": "lsw",
      "Print_Name": "Seychelles Sign Language",
      "Inverted_Name": "Seychelles Sign Language"
    },
    {
      "Id": "lsy",
      "Print_Name": "Mauritian Sign Language",
      "Inverted_Name": "Mauritian Sign Language"
    },
    {
      "Id": "ltc",
      "Print_Name": "Late Middle Chinese",
      "Inverted_Name": "Chinese, Late Middle"
    },
    {
      "Id": "ltg",
      "Print_Name": "Latgalian",
      "Inverted_Name": "Latgalian"
    },
    {
      "Id": "lth",
      "Print_Name": "Thur",
      "Inverted_Name": "Thur"
    },
    {
      "Id": "lti",
      "Print_Name": "Leti (Indonesia)",
      "Inverted_Name": "Leti (Indonesia)"
    },
    {
      "Id": "ltn",
      "Print_Name": "Latundê",
      "Inverted_Name": "Latundê"
    },
    {
      "Id": "lto",
      "Print_Name": "Olutsotso",
      "Inverted_Name": "Olutsotso"
    },
    {
      "Id": "lto",
      "Print_Name": "Tsotso",
      "Inverted_Name": "Tsotso"
    },
    {
      "Id": "lts",
      "Print_Name": "Lutachoni",
      "Inverted_Name": "Lutachoni"
    },
    {
      "Id": "lts",
      "Print_Name": "Tachoni",
      "Inverted_Name": "Tachoni"
    },
    {
      "Id": "ltu",
      "Print_Name": "Latu",
      "Inverted_Name": "Latu"
    },
    {
      "Id": "ltz",
      "Print_Name": "Letzeburgesch",
      "Inverted_Name": "Letzeburgesch"
    },
    {
      "Id": "ltz",
      "Print_Name": "Luxembourgish",
      "Inverted_Name": "Luxembourgish"
    },
    {
      "Id": "lua",
      "Print_Name": "Luba-Lulua",
      "Inverted_Name": "Luba-Lulua"
    },
    {
      "Id": "lub",
      "Print_Name": "Luba-Katanga",
      "Inverted_Name": "Luba-Katanga"
    },
    {
      "Id": "luc",
      "Print_Name": "Aringa",
      "Inverted_Name": "Aringa"
    },
    {
      "Id": "lud",
      "Print_Name": "Ludian",
      "Inverted_Name": "Ludian"
    },
    {
      "Id": "lue",
      "Print_Name": "Luvale",
      "Inverted_Name": "Luvale"
    },
    {
      "Id": "luf",
      "Print_Name": "Laua",
      "Inverted_Name": "Laua"
    },
    {
      "Id": "lug",
      "Print_Name": "Ganda",
      "Inverted_Name": "Ganda"
    },
    {
      "Id": "lui",
      "Print_Name": "Luiseno",
      "Inverted_Name": "Luiseno"
    },
    {
      "Id": "luj",
      "Print_Name": "Luna",
      "Inverted_Name": "Luna"
    },
    {
      "Id": "luk",
      "Print_Name": "Lunanakha",
      "Inverted_Name": "Lunanakha"
    },
    {
      "Id": "lul",
      "Print_Name": "Olu'bo",
      "Inverted_Name": "Olu'bo"
    },
    {
      "Id": "lum",
      "Print_Name": "Luimbi",
      "Inverted_Name": "Luimbi"
    },
    {
      "Id": "lun",
      "Print_Name": "Lunda",
      "Inverted_Name": "Lunda"
    },
    {
      "Id": "luo",
      "Print_Name": "Dholuo",
      "Inverted_Name": "Dholuo"
    },
    {
      "Id": "luo",
      "Print_Name": "Luo (Kenya and Tanzania)",
      "Inverted_Name": "Luo (Kenya and Tanzania)"
    },
    {
      "Id": "lup",
      "Print_Name": "Lumbu",
      "Inverted_Name": "Lumbu"
    },
    {
      "Id": "luq",
      "Print_Name": "Lucumi",
      "Inverted_Name": "Lucumi"
    },
    {
      "Id": "lur",
      "Print_Name": "Laura",
      "Inverted_Name": "Laura"
    },
    {
      "Id": "lus",
      "Print_Name": "Lushai",
      "Inverted_Name": "Lushai"
    },
    {
      "Id": "lut",
      "Print_Name": "Lushootseed",
      "Inverted_Name": "Lushootseed"
    },
    {
      "Id": "luu",
      "Print_Name": "Lumba-Yakkha",
      "Inverted_Name": "Lumba-Yakkha"
    },
    {
      "Id": "luv",
      "Print_Name": "Luwati",
      "Inverted_Name": "Luwati"
    },
    {
      "Id": "luw",
      "Print_Name": "Luo (Cameroon)",
      "Inverted_Name": "Luo (Cameroon)"
    },
    {
      "Id": "luy",
      "Print_Name": "Luyia",
      "Inverted_Name": "Luyia"
    },
    {
      "Id": "luy",
      "Print_Name": "Oluluyia",
      "Inverted_Name": "Oluluyia"
    },
    {
      "Id": "luz",
      "Print_Name": "Southern Luri",
      "Inverted_Name": "Luri, Southern"
    },
    {
      "Id": "lva",
      "Print_Name": "Maku'a",
      "Inverted_Name": "Maku'a"
    },
    {
      "Id": "lvi",
      "Print_Name": "Lavi",
      "Inverted_Name": "Lavi"
    },
    {
      "Id": "lvk",
      "Print_Name": "Lavukaleve",
      "Inverted_Name": "Lavukaleve"
    },
    {
      "Id": "lvl",
      "Print_Name": "Lwel",
      "Inverted_Name": "Lwel"
    },
    {
      "Id": "lvs",
      "Print_Name": "Standard Latvian",
      "Inverted_Name": "Latvian, Standard"
    },
    {
      "Id": "lvu",
      "Print_Name": "Levuka",
      "Inverted_Name": "Levuka"
    },
    {
      "Id": "lwa",
      "Print_Name": "Lwalu",
      "Inverted_Name": "Lwalu"
    },
    {
      "Id": "lwe",
      "Print_Name": "Lewo Eleng",
      "Inverted_Name": "Lewo Eleng"
    },
    {
      "Id": "lwg",
      "Print_Name": "Oluwanga",
      "Inverted_Name": "Oluwanga"
    },
    {
      "Id": "lwg",
      "Print_Name": "Wanga",
      "Inverted_Name": "Wanga"
    },
    {
      "Id": "lwh",
      "Print_Name": "White Lachi",
      "Inverted_Name": "Lachi, White"
    },
    {
      "Id": "lwl",
      "Print_Name": "Eastern Lawa",
      "Inverted_Name": "Lawa, Eastern"
    },
    {
      "Id": "lwm",
      "Print_Name": "Laomian",
      "Inverted_Name": "Laomian"
    },
    {
      "Id": "lwo",
      "Print_Name": "Luwo",
      "Inverted_Name": "Luwo"
    },
    {
      "Id": "lws",
      "Print_Name": "Malawian Sign Language",
      "Inverted_Name": "Malawian Sign Language"
    },
    {
      "Id": "lwt",
      "Print_Name": "Lewotobi",
      "Inverted_Name": "Lewotobi"
    },
    {
      "Id": "lwu",
      "Print_Name": "Lawu",
      "Inverted_Name": "Lawu"
    },
    {
      "Id": "lww",
      "Print_Name": "Lewo",
      "Inverted_Name": "Lewo"
    },
    {
      "Id": "lxm",
      "Print_Name": "Lakurumau",
      "Inverted_Name": "Lakurumau"
    },
    {
      "Id": "lya",
      "Print_Name": "Layakha",
      "Inverted_Name": "Layakha"
    },
    {
      "Id": "lyg",
      "Print_Name": "Lyngngam",
      "Inverted_Name": "Lyngngam"
    },
    {
      "Id": "lyn",
      "Print_Name": "Luyana",
      "Inverted_Name": "Luyana"
    },
    {
      "Id": "lzh",
      "Print_Name": "Literary Chinese",
      "Inverted_Name": "Chinese, Literary"
    },
    {
      "Id": "lzl",
      "Print_Name": "Litzlitz",
      "Inverted_Name": "Litzlitz"
    },
    {
      "Id": "lzn",
      "Print_Name": "Leinong Naga",
      "Inverted_Name": "Naga, Leinong"
    },
    {
      "Id": "lzz",
      "Print_Name": "Laz",
      "Inverted_Name": "Laz"
    },
    {
      "Id": "maa",
      "Print_Name": "San Jerónimo Tecóatl Mazatec",
      "Inverted_Name": "Mazatec, San Jerónimo Tecóatl"
    },
    {
      "Id": "mab",
      "Print_Name": "Yutanduchi Mixtec",
      "Inverted_Name": "Mixtec, Yutanduchi"
    },
    {
      "Id": "mad",
      "Print_Name": "Madurese",
      "Inverted_Name": "Madurese"
    },
    {
      "Id": "mae",
      "Print_Name": "Bo-Rukul",
      "Inverted_Name": "Bo-Rukul"
    },
    {
      "Id": "maf",
      "Print_Name": "Mafa",
      "Inverted_Name": "Mafa"
    },
    {
      "Id": "mag",
      "Print_Name": "Magahi",
      "Inverted_Name": "Magahi"
    },
    {
      "Id": "mah",
      "Print_Name": "Marshallese",
      "Inverted_Name": "Marshallese"
    },
    {
      "Id": "mai",
      "Print_Name": "Maithili",
      "Inverted_Name": "Maithili"
    },
    {
      "Id": "maj",
      "Print_Name": "Jalapa De Díaz Mazatec",
      "Inverted_Name": "Mazatec, Jalapa De Díaz"
    },
    {
      "Id": "mak",
      "Print_Name": "Makasar",
      "Inverted_Name": "Makasar"
    },
    {
      "Id": "mal",
      "Print_Name": "Malayalam",
      "Inverted_Name": "Malayalam"
    },
    {
      "Id": "mam",
      "Print_Name": "Mam",
      "Inverted_Name": "Mam"
    },
    {
      "Id": "man",
      "Print_Name": "Manding",
      "Inverted_Name": "Manding"
    },
    {
      "Id": "man",
      "Print_Name": "Mandingo",
      "Inverted_Name": "Mandingo"
    },
    {
      "Id": "maq",
      "Print_Name": "Chiquihuitlán Mazatec",
      "Inverted_Name": "Mazatec, Chiquihuitlán"
    },
    {
      "Id": "mar",
      "Print_Name": "Marathi",
      "Inverted_Name": "Marathi"
    },
    {
      "Id": "mas",
      "Print_Name": "Masai",
      "Inverted_Name": "Masai"
    },
    {
      "Id": "mat",
      "Print_Name": "San Francisco Matlatzinca",
      "Inverted_Name": "Matlatzinca, San Francisco"
    },
    {
      "Id": "mau",
      "Print_Name": "Huautla Mazatec",
      "Inverted_Name": "Mazatec, Huautla"
    },
    {
      "Id": "mav",
      "Print_Name": "Sateré-Mawé",
      "Inverted_Name": "Sateré-Mawé"
    },
    {
      "Id": "maw",
      "Print_Name": "Mampruli",
      "Inverted_Name": "Mampruli"
    },
    {
      "Id": "max",
      "Print_Name": "North Moluccan Malay",
      "Inverted_Name": "Malay, North Moluccan"
    },
    {
      "Id": "maz",
      "Print_Name": "Central Mazahua",
      "Inverted_Name": "Mazahua, Central"
    },
    {
      "Id": "mba",
      "Print_Name": "Higaonon",
      "Inverted_Name": "Higaonon"
    },
    {
      "Id": "mbb",
      "Print_Name": "Western Bukidnon Manobo",
      "Inverted_Name": "Manobo, Western Bukidnon"
    },
    {
      "Id": "mbc",
      "Print_Name": "Macushi",
      "Inverted_Name": "Macushi"
    },
    {
      "Id": "mbd",
      "Print_Name": "Dibabawon Manobo",
      "Inverted_Name": "Manobo, Dibabawon"
    },
    {
      "Id": "mbe",
      "Print_Name": "Molale",
      "Inverted_Name": "Molale"
    },
    {
      "Id": "mbf",
      "Print_Name": "Baba Malay",
      "Inverted_Name": "Malay, Baba"
    },
    {
      "Id": "mbh",
      "Print_Name": "Mangseng",
      "Inverted_Name": "Mangseng"
    },
    {
      "Id": "mbi",
      "Print_Name": "Ilianen Manobo",
      "Inverted_Name": "Manobo, Ilianen"
    },
    {
      "Id": "mbj",
      "Print_Name": "Nadëb",
      "Inverted_Name": "Nadëb"
    },
    {
      "Id": "mbk",
      "Print_Name": "Malol",
      "Inverted_Name": "Malol"
    },
    {
      "Id": "mbl",
      "Print_Name": "Maxakalí",
      "Inverted_Name": "Maxakalí"
    },
    {
      "Id": "mbm",
      "Print_Name": "Ombamba",
      "Inverted_Name": "Ombamba"
    },
    {
      "Id": "mbn",
      "Print_Name": "Macaguán",
      "Inverted_Name": "Macaguán"
    },
    {
      "Id": "mbo",
      "Print_Name": "Mbo (Cameroon)",
      "Inverted_Name": "Mbo (Cameroon)"
    },
    {
      "Id": "mbp",
      "Print_Name": "Malayo",
      "Inverted_Name": "Malayo"
    },
    {
      "Id": "mbq",
      "Print_Name": "Maisin",
      "Inverted_Name": "Maisin"
    },
    {
      "Id": "mbr",
      "Print_Name": "Nukak Makú",
      "Inverted_Name": "Nukak Makú"
    },
    {
      "Id": "mbs",
      "Print_Name": "Sarangani Manobo",
      "Inverted_Name": "Manobo, Sarangani"
    },
    {
      "Id": "mbt",
      "Print_Name": "Matigsalug Manobo",
      "Inverted_Name": "Manobo, Matigsalug"
    },
    {
      "Id": "mbu",
      "Print_Name": "Mbula-Bwazza",
      "Inverted_Name": "Mbula-Bwazza"
    },
    {
      "Id": "mbv",
      "Print_Name": "Mbulungish",
      "Inverted_Name": "Mbulungish"
    },
    {
      "Id": "mbw",
      "Print_Name": "Maring",
      "Inverted_Name": "Maring"
    },
    {
      "Id": "mbx",
      "Print_Name": "Mari (East Sepik Province)",
      "Inverted_Name": "Mari (East Sepik Province)"
    },
    {
      "Id": "mby",
      "Print_Name": "Memoni",
      "Inverted_Name": "Memoni"
    },
    {
      "Id": "mbz",
      "Print_Name": "Amoltepec Mixtec",
      "Inverted_Name": "Mixtec, Amoltepec"
    },
    {
      "Id": "mca",
      "Print_Name": "Maca",
      "Inverted_Name": "Maca"
    },
    {
      "Id": "mcb",
      "Print_Name": "Machiguenga",
      "Inverted_Name": "Machiguenga"
    },
    {
      "Id": "mcc",
      "Print_Name": "Bitur",
      "Inverted_Name": "Bitur"
    },
    {
      "Id": "mcd",
      "Print_Name": "Sharanahua",
      "Inverted_Name": "Sharanahua"
    },
    {
      "Id": "mce",
      "Print_Name": "Itundujia Mixtec",
      "Inverted_Name": "Mixtec, Itundujia"
    },
    {
      "Id": "mcf",
      "Print_Name": "Matsés",
      "Inverted_Name": "Matsés"
    },
    {
      "Id": "mcg",
      "Print_Name": "Mapoyo",
      "Inverted_Name": "Mapoyo"
    },
    {
      "Id": "mch",
      "Print_Name": "Maquiritari",
      "Inverted_Name": "Maquiritari"
    },
    {
      "Id": "mci",
      "Print_Name": "Mese",
      "Inverted_Name": "Mese"
    },
    {
      "Id": "mcj",
      "Print_Name": "Mvanip",
      "Inverted_Name": "Mvanip"
    },
    {
      "Id": "mck",
      "Print_Name": "Mbunda",
      "Inverted_Name": "Mbunda"
    },
    {
      "Id": "mcl",
      "Print_Name": "Macaguaje",
      "Inverted_Name": "Macaguaje"
    },
    {
      "Id": "mcm",
      "Print_Name": "Malaccan Creole Portuguese",
      "Inverted_Name": "Creole Portuguese, Malaccan"
    },
    {
      "Id": "mcn",
      "Print_Name": "Masana",
      "Inverted_Name": "Masana"
    },
    {
      "Id": "mco",
      "Print_Name": "Coatlán Mixe",
      "Inverted_Name": "Mixe, Coatlán"
    },
    {
      "Id": "mcp",
      "Print_Name": "Makaa",
      "Inverted_Name": "Makaa"
    },
    {
      "Id": "mcq",
      "Print_Name": "Ese",
      "Inverted_Name": "Ese"
    },
    {
      "Id": "mcr",
      "Print_Name": "Menya",
      "Inverted_Name": "Menya"
    },
    {
      "Id": "mcs",
      "Print_Name": "Mambai",
      "Inverted_Name": "Mambai"
    },
    {
      "Id": "mct",
      "Print_Name": "Mengisa",
      "Inverted_Name": "Mengisa"
    },
    {
      "Id": "mcu",
      "Print_Name": "Cameroon Mambila",
      "Inverted_Name": "Mambila, Cameroon"
    },
    {
      "Id": "mcv",
      "Print_Name": "Minanibai",
      "Inverted_Name": "Minanibai"
    },
    {
      "Id": "mcw",
      "Print_Name": "Mawa (Chad)",
      "Inverted_Name": "Mawa (Chad)"
    },
    {
      "Id": "mcx",
      "Print_Name": "Mpiemo",
      "Inverted_Name": "Mpiemo"
    },
    {
      "Id": "mcy",
      "Print_Name": "South Watut",
      "Inverted_Name": "Watut, South"
    },
    {
      "Id": "mcz",
      "Print_Name": "Mawan",
      "Inverted_Name": "Mawan"
    },
    {
      "Id": "mda",
      "Print_Name": "Mada (Nigeria)",
      "Inverted_Name": "Mada (Nigeria)"
    },
    {
      "Id": "mdb",
      "Print_Name": "Morigi",
      "Inverted_Name": "Morigi"
    },
    {
      "Id": "mdc",
      "Print_Name": "Male (Papua New Guinea)",
      "Inverted_Name": "Male (Papua New Guinea)"
    },
    {
      "Id": "mdd",
      "Print_Name": "Mbum",
      "Inverted_Name": "Mbum"
    },
    {
      "Id": "mde",
      "Print_Name": "Maba (Chad)",
      "Inverted_Name": "Maba (Chad)"
    },
    {
      "Id": "mdf",
      "Print_Name": "Moksha",
      "Inverted_Name": "Moksha"
    },
    {
      "Id": "mdg",
      "Print_Name": "Massalat",
      "Inverted_Name": "Massalat"
    },
    {
      "Id": "mdh",
      "Print_Name": "Maguindanaon",
      "Inverted_Name": "Maguindanaon"
    },
    {
      "Id": "mdi",
      "Print_Name": "Mamvu",
      "Inverted_Name": "Mamvu"
    },
    {
      "Id": "mdj",
      "Print_Name": "Mangbetu",
      "Inverted_Name": "Mangbetu"
    },
    {
      "Id": "mdk",
      "Print_Name": "Mangbutu",
      "Inverted_Name": "Mangbutu"
    },
    {
      "Id": "mdl",
      "Print_Name": "Maltese Sign Language",
      "Inverted_Name": "Maltese Sign Language"
    },
    {
      "Id": "mdm",
      "Print_Name": "Mayogo",
      "Inverted_Name": "Mayogo"
    },
    {
      "Id": "mdn",
      "Print_Name": "Mbati",
      "Inverted_Name": "Mbati"
    },
    {
      "Id": "mdp",
      "Print_Name": "Mbala",
      "Inverted_Name": "Mbala"
    },
    {
      "Id": "mdq",
      "Print_Name": "Mbole",
      "Inverted_Name": "Mbole"
    },
    {
      "Id": "mdr",
      "Print_Name": "Mandar",
      "Inverted_Name": "Mandar"
    },
    {
      "Id": "mds",
      "Print_Name": "Maria (Papua New Guinea)",
      "Inverted_Name": "Maria (Papua New Guinea)"
    },
    {
      "Id": "mdt",
      "Print_Name": "Mbere",
      "Inverted_Name": "Mbere"
    },
    {
      "Id": "mdu",
      "Print_Name": "Mboko",
      "Inverted_Name": "Mboko"
    },
    {
      "Id": "mdv",
      "Print_Name": "Santa Lucía Monteverde Mixtec",
      "Inverted_Name": "Mixtec, Santa Lucía Monteverde"
    },
    {
      "Id": "mdw",
      "Print_Name": "Mbosi",
      "Inverted_Name": "Mbosi"
    },
    {
      "Id": "mdx",
      "Print_Name": "Dizin",
      "Inverted_Name": "Dizin"
    },
    {
      "Id": "mdy",
      "Print_Name": "Male (Ethiopia)",
      "Inverted_Name": "Male (Ethiopia)"
    },
    {
      "Id": "mdz",
      "Print_Name": "Suruí Do Pará",
      "Inverted_Name": "Suruí Do Pará"
    },
    {
      "Id": "mea",
      "Print_Name": "Menka",
      "Inverted_Name": "Menka"
    },
    {
      "Id": "meb",
      "Print_Name": "Ikobi",
      "Inverted_Name": "Ikobi"
    },
    {
      "Id": "mec",
      "Print_Name": "Marra",
      "Inverted_Name": "Marra"
    },
    {
      "Id": "med",
      "Print_Name": "Melpa",
      "Inverted_Name": "Melpa"
    },
    {
      "Id": "mee",
      "Print_Name": "Mengen",
      "Inverted_Name": "Mengen"
    },
    {
      "Id": "mef",
      "Print_Name": "Megam",
      "Inverted_Name": "Megam"
    },
    {
      "Id": "meh",
      "Print_Name": "Southwestern Tlaxiaco Mixtec",
      "Inverted_Name": "Mixtec, Southwestern Tlaxiaco"
    },
    {
      "Id": "mei",
      "Print_Name": "Midob",
      "Inverted_Name": "Midob"
    },
    {
      "Id": "mej",
      "Print_Name": "Meyah",
      "Inverted_Name": "Meyah"
    },
    {
      "Id": "mek",
      "Print_Name": "Mekeo",
      "Inverted_Name": "Mekeo"
    },
    {
      "Id": "mel",
      "Print_Name": "Central Melanau",
      "Inverted_Name": "Melanau, Central"
    },
    {
      "Id": "mem",
      "Print_Name": "Mangala",
      "Inverted_Name": "Mangala"
    },
    {
      "Id": "men",
      "Print_Name": "Mende (Sierra Leone)",
      "Inverted_Name": "Mende (Sierra Leone)"
    },
    {
      "Id": "meo",
      "Print_Name": "Kedah Malay",
      "Inverted_Name": "Malay, Kedah"
    },
    {
      "Id": "mep",
      "Print_Name": "Miriwoong",
      "Inverted_Name": "Miriwoong"
    },
    {
      "Id": "meq",
      "Print_Name": "Merey",
      "Inverted_Name": "Merey"
    },
    {
      "Id": "mer",
      "Print_Name": "Meru",
      "Inverted_Name": "Meru"
    },
    {
      "Id": "mes",
      "Print_Name": "Masmaje",
      "Inverted_Name": "Masmaje"
    },
    {
      "Id": "met",
      "Print_Name": "Mato",
      "Inverted_Name": "Mato"
    },
    {
      "Id": "meu",
      "Print_Name": "Motu",
      "Inverted_Name": "Motu"
    },
    {
      "Id": "mev",
      "Print_Name": "Mano",
      "Inverted_Name": "Mano"
    },
    {
      "Id": "mew",
      "Print_Name": "Maaka",
      "Inverted_Name": "Maaka"
    },
    {
      "Id": "mey",
      "Print_Name": "Hassaniyya",
      "Inverted_Name": "Hassaniyya"
    },
    {
      "Id": "mez",
      "Print_Name": "Menominee",
      "Inverted_Name": "Menominee"
    },
    {
      "Id": "mfa",
      "Print_Name": "Pattani Malay",
      "Inverted_Name": "Malay, Pattani"
    },
    {
      "Id": "mfb",
      "Print_Name": "Bangka",
      "Inverted_Name": "Bangka"
    },
    {
      "Id": "mfc",
      "Print_Name": "Mba",
      "Inverted_Name": "Mba"
    },
    {
      "Id": "mfd",
      "Print_Name": "Mendankwe-Nkwen",
      "Inverted_Name": "Mendankwe-Nkwen"
    },
    {
      "Id": "mfe",
      "Print_Name": "Morisyen",
      "Inverted_Name": "Morisyen"
    },
    {
      "Id": "mff",
      "Print_Name": "Naki",
      "Inverted_Name": "Naki"
    },
    {
      "Id": "mfg",
      "Print_Name": "Mogofin",
      "Inverted_Name": "Mogofin"
    },
    {
      "Id": "mfh",
      "Print_Name": "Matal",
      "Inverted_Name": "Matal"
    },
    {
      "Id": "mfi",
      "Print_Name": "Wandala",
      "Inverted_Name": "Wandala"
    },
    {
      "Id": "mfj",
      "Print_Name": "Mefele",
      "Inverted_Name": "Mefele"
    },
    {
      "Id": "mfk",
      "Print_Name": "North Mofu",
      "Inverted_Name": "Mofu, North"
    },
    {
      "Id": "mfl",
      "Print_Name": "Putai",
      "Inverted_Name": "Putai"
    },
    {
      "Id": "mfm",
      "Print_Name": "Marghi South",
      "Inverted_Name": "Marghi South"
    },
    {
      "Id": "mfn",
      "Print_Name": "Cross River Mbembe",
      "Inverted_Name": "Mbembe, Cross River"
    },
    {
      "Id": "mfo",
      "Print_Name": "Mbe",
      "Inverted_Name": "Mbe"
    },
    {
      "Id": "mfp",
      "Print_Name": "Makassar Malay",
      "Inverted_Name": "Malay, Makassar"
    },
    {
      "Id": "mfq",
      "Print_Name": "Moba",
      "Inverted_Name": "Moba"
    },
    {
      "Id": "mfr",
      "Print_Name": "Marrithiyel",
      "Inverted_Name": "Marrithiyel"
    },
    {
      "Id": "mfs",
      "Print_Name": "Mexican Sign Language",
      "Inverted_Name": "Mexican Sign Language"
    },
    {
      "Id": "mft",
      "Print_Name": "Mokerang",
      "Inverted_Name": "Mokerang"
    },
    {
      "Id": "mfu",
      "Print_Name": "Mbwela",
      "Inverted_Name": "Mbwela"
    },
    {
      "Id": "mfv",
      "Print_Name": "Mandjak",
      "Inverted_Name": "Mandjak"
    },
    {
      "Id": "mfw",
      "Print_Name": "Mulaha",
      "Inverted_Name": "Mulaha"
    },
    {
      "Id": "mfx",
      "Print_Name": "Melo",
      "Inverted_Name": "Melo"
    },
    {
      "Id": "mfy",
      "Print_Name": "Mayo",
      "Inverted_Name": "Mayo"
    },
    {
      "Id": "mfz",
      "Print_Name": "Mabaan",
      "Inverted_Name": "Mabaan"
    },
    {
      "Id": "mga",
      "Print_Name": "Middle Irish (900-1200)",
      "Inverted_Name": "Irish, Middle (900-1200)"
    },
    {
      "Id": "mgb",
      "Print_Name": "Mararit",
      "Inverted_Name": "Mararit"
    },
    {
      "Id": "mgc",
      "Print_Name": "Morokodo",
      "Inverted_Name": "Morokodo"
    },
    {
      "Id": "mgd",
      "Print_Name": "Moru",
      "Inverted_Name": "Moru"
    },
    {
      "Id": "mge",
      "Print_Name": "Mango",
      "Inverted_Name": "Mango"
    },
    {
      "Id": "mgf",
      "Print_Name": "Maklew",
      "Inverted_Name": "Maklew"
    },
    {
      "Id": "mgg",
      "Print_Name": "Mpumpong",
      "Inverted_Name": "Mpumpong"
    },
    {
      "Id": "mgh",
      "Print_Name": "Makhuwa-Meetto",
      "Inverted_Name": "Makhuwa-Meetto"
    },
    {
      "Id": "mgi",
      "Print_Name": "Lijili",
      "Inverted_Name": "Lijili"
    },
    {
      "Id": "mgj",
      "Print_Name": "Abureni",
      "Inverted_Name": "Abureni"
    },
    {
      "Id": "mgk",
      "Print_Name": "Mawes",
      "Inverted_Name": "Mawes"
    },
    {
      "Id": "mgl",
      "Print_Name": "Maleu-Kilenge",
      "Inverted_Name": "Maleu-Kilenge"
    },
    {
      "Id": "mgm",
      "Print_Name": "Mambae",
      "Inverted_Name": "Mambae"
    },
    {
      "Id": "mgn",
      "Print_Name": "Mbangi",
      "Inverted_Name": "Mbangi"
    },
    {
      "Id": "mgo",
      "Print_Name": "Meta'",
      "Inverted_Name": "Meta'"
    },
    {
      "Id": "mgp",
      "Print_Name": "Eastern Magar",
      "Inverted_Name": "Magar, Eastern"
    },
    {
      "Id": "mgq",
      "Print_Name": "Malila",
      "Inverted_Name": "Malila"
    },
    {
      "Id": "mgr",
      "Print_Name": "Mambwe-Lungu",
      "Inverted_Name": "Mambwe-Lungu"
    },
    {
      "Id": "mgs",
      "Print_Name": "Manda (Tanzania)",
      "Inverted_Name": "Manda (Tanzania)"
    },
    {
      "Id": "mgt",
      "Print_Name": "Mongol",
      "Inverted_Name": "Mongol"
    },
    {
      "Id": "mgu",
      "Print_Name": "Mailu",
      "Inverted_Name": "Mailu"
    },
    {
      "Id": "mgv",
      "Print_Name": "Matengo",
      "Inverted_Name": "Matengo"
    },
    {
      "Id": "mgw",
      "Print_Name": "Matumbi",
      "Inverted_Name": "Matumbi"
    },
    {
      "Id": "mgy",
      "Print_Name": "Mbunga",
      "Inverted_Name": "Mbunga"
    },
    {
      "Id": "mgz",
      "Print_Name": "Mbugwe",
      "Inverted_Name": "Mbugwe"
    },
    {
      "Id": "mha",
      "Print_Name": "Manda (India)",
      "Inverted_Name": "Manda (India)"
    },
    {
      "Id": "mhb",
      "Print_Name": "Mahongwe",
      "Inverted_Name": "Mahongwe"
    },
    {
      "Id": "mhc",
      "Print_Name": "Mocho",
      "Inverted_Name": "Mocho"
    },
    {
      "Id": "mhd",
      "Print_Name": "Mbugu",
      "Inverted_Name": "Mbugu"
    },
    {
      "Id": "mhe",
      "Print_Name": "Besisi",
      "Inverted_Name": "Besisi"
    },
    {
      "Id": "mhe",
      "Print_Name": "Mah Meri",
      "Inverted_Name": "Mah Meri"
    },
    {
      "Id": "mhf",
      "Print_Name": "Mamaa",
      "Inverted_Name": "Mamaa"
    },
    {
      "Id": "mhg",
      "Print_Name": "Margu",
      "Inverted_Name": "Margu"
    },
    {
      "Id": "mhi",
      "Print_Name": "Ma'di",
      "Inverted_Name": "Ma'di"
    },
    {
      "Id": "mhj",
      "Print_Name": "Mogholi",
      "Inverted_Name": "Mogholi"
    },
    {
      "Id": "mhk",
      "Print_Name": "Mungaka",
      "Inverted_Name": "Mungaka"
    },
    {
      "Id": "mhl",
      "Print_Name": "Mauwake",
      "Inverted_Name": "Mauwake"
    },
    {
      "Id": "mhm",
      "Print_Name": "Makhuwa-Moniga",
      "Inverted_Name": "Makhuwa-Moniga"
    },
    {
      "Id": "mhn",
      "Print_Name": "Mócheno",
      "Inverted_Name": "Mócheno"
    },
    {
      "Id": "mho",
      "Print_Name": "Mashi (Zambia)",
      "Inverted_Name": "Mashi (Zambia)"
    },
    {
      "Id": "mhp",
      "Print_Name": "Balinese Malay",
      "Inverted_Name": "Malay, Balinese"
    },
    {
      "Id": "mhq",
      "Print_Name": "Mandan",
      "Inverted_Name": "Mandan"
    },
    {
      "Id": "mhr",
      "Print_Name": "Eastern Mari",
      "Inverted_Name": "Mari, Eastern"
    },
    {
      "Id": "mhs",
      "Print_Name": "Buru (Indonesia)",
      "Inverted_Name": "Buru (Indonesia)"
    },
    {
      "Id": "mht",
      "Print_Name": "Mandahuaca",
      "Inverted_Name": "Mandahuaca"
    },
    {
      "Id": "mhu",
      "Print_Name": "Darang Deng",
      "Inverted_Name": "Deng, Darang"
    },
    {
      "Id": "mhu",
      "Print_Name": "Digaro-Mishmi",
      "Inverted_Name": "Digaro-Mishmi"
    },
    {
      "Id": "mhw",
      "Print_Name": "Mbukushu",
      "Inverted_Name": "Mbukushu"
    },
    {
      "Id": "mhx",
      "Print_Name": "Lhaovo",
      "Inverted_Name": "Lhaovo"
    },
    {
      "Id": "mhx",
      "Print_Name": "Maru",
      "Inverted_Name": "Maru"
    },
    {
      "Id": "mhy",
      "Print_Name": "Ma'anyan",
      "Inverted_Name": "Ma'anyan"
    },
    {
      "Id": "mhz",
      "Print_Name": "Mor (Mor Islands)",
      "Inverted_Name": "Mor (Mor Islands)"
    },
    {
      "Id": "mia",
      "Print_Name": "Miami",
      "Inverted_Name": "Miami"
    },
    {
      "Id": "mib",
      "Print_Name": "Atatláhuca Mixtec",
      "Inverted_Name": "Mixtec, Atatláhuca"
    },
    {
      "Id": "mic",
      "Print_Name": "Micmac",
      "Inverted_Name": "Micmac"
    },
    {
      "Id": "mic",
      "Print_Name": "Mi'kmaq",
      "Inverted_Name": "Mi'kmaq"
    },
    {
      "Id": "mid",
      "Print_Name": "Mandaic",
      "Inverted_Name": "Mandaic"
    },
    {
      "Id": "mie",
      "Print_Name": "Ocotepec Mixtec",
      "Inverted_Name": "Mixtec, Ocotepec"
    },
    {
      "Id": "mif",
      "Print_Name": "Mofu-Gudur",
      "Inverted_Name": "Mofu-Gudur"
    },
    {
      "Id": "mig",
      "Print_Name": "San Miguel El Grande Mixtec",
      "Inverted_Name": "Mixtec, San Miguel El Grande"
    },
    {
      "Id": "mih",
      "Print_Name": "Chayuco Mixtec",
      "Inverted_Name": "Mixtec, Chayuco"
    },
    {
      "Id": "mii",
      "Print_Name": "Chigmecatitlán Mixtec",
      "Inverted_Name": "Mixtec, Chigmecatitlán"
    },
    {
      "Id": "mij",
      "Print_Name": "Abar",
      "Inverted_Name": "Abar"
    },
    {
      "Id": "mij",
      "Print_Name": "Mungbam",
      "Inverted_Name": "Mungbam"
    },
    {
      "Id": "mik",
      "Print_Name": "Mikasuki",
      "Inverted_Name": "Mikasuki"
    },
    {
      "Id": "mil",
      "Print_Name": "Peñoles Mixtec",
      "Inverted_Name": "Mixtec, Peñoles"
    },
    {
      "Id": "mim",
      "Print_Name": "Alacatlatzala Mixtec",
      "Inverted_Name": "Mixtec, Alacatlatzala"
    },
    {
      "Id": "min",
      "Print_Name": "Minangkabau",
      "Inverted_Name": "Minangkabau"
    },
    {
      "Id": "mio",
      "Print_Name": "Pinotepa Nacional Mixtec",
      "Inverted_Name": "Mixtec, Pinotepa Nacional"
    },
    {
      "Id": "mip",
      "Print_Name": "Apasco-Apoala Mixtec",
      "Inverted_Name": "Mixtec, Apasco-Apoala"
    },
    {
      "Id": "miq",
      "Print_Name": "Mískito",
      "Inverted_Name": "Mískito"
    },
    {
      "Id": "mir",
      "Print_Name": "Isthmus Mixe",
      "Inverted_Name": "Mixe, Isthmus"
    },
    {
      "Id": "mis",
      "Print_Name": "Uncoded languages",
      "Inverted_Name": "Uncoded languages"
    },
    {
      "Id": "mit",
      "Print_Name": "Southern Puebla Mixtec",
      "Inverted_Name": "Mixtec, Southern Puebla"
    },
    {
      "Id": "miu",
      "Print_Name": "Cacaloxtepec Mixtec",
      "Inverted_Name": "Mixtec, Cacaloxtepec"
    },
    {
      "Id": "miw",
      "Print_Name": "Akoye",
      "Inverted_Name": "Akoye"
    },
    {
      "Id": "mix",
      "Print_Name": "Mixtepec Mixtec",
      "Inverted_Name": "Mixtec, Mixtepec"
    },
    {
      "Id": "miy",
      "Print_Name": "Ayutla Mixtec",
      "Inverted_Name": "Mixtec, Ayutla"
    },
    {
      "Id": "miz",
      "Print_Name": "Coatzospan Mixtec",
      "Inverted_Name": "Mixtec, Coatzospan"
    },
    {
      "Id": "mjb",
      "Print_Name": "Makalero",
      "Inverted_Name": "Makalero"
    },
    {
      "Id": "mjc",
      "Print_Name": "San Juan Colorado Mixtec",
      "Inverted_Name": "Mixtec, San Juan Colorado"
    },
    {
      "Id": "mjd",
      "Print_Name": "Northwest Maidu",
      "Inverted_Name": "Maidu, Northwest"
    },
    {
      "Id": "mje",
      "Print_Name": "Muskum",
      "Inverted_Name": "Muskum"
    },
    {
      "Id": "mjg",
      "Print_Name": "Tu",
      "Inverted_Name": "Tu"
    },
    {
      "Id": "mjh",
      "Print_Name": "Mwera (Nyasa)",
      "Inverted_Name": "Mwera (Nyasa)"
    },
    {
      "Id": "mji",
      "Print_Name": "Kim Mun",
      "Inverted_Name": "Kim Mun"
    },
    {
      "Id": "mjj",
      "Print_Name": "Mawak",
      "Inverted_Name": "Mawak"
    },
    {
      "Id": "mjk",
      "Print_Name": "Matukar",
      "Inverted_Name": "Matukar"
    },
    {
      "Id": "mjl",
      "Print_Name": "Mandeali",
      "Inverted_Name": "Mandeali"
    },
    {
      "Id": "mjm",
      "Print_Name": "Medebur",
      "Inverted_Name": "Medebur"
    },
    {
      "Id": "mjn",
      "Print_Name": "Ma (Papua New Guinea)",
      "Inverted_Name": "Ma (Papua New Guinea)"
    },
    {
      "Id": "mjo",
      "Print_Name": "Malankuravan",
      "Inverted_Name": "Malankuravan"
    },
    {
      "Id": "mjp",
      "Print_Name": "Malapandaram",
      "Inverted_Name": "Malapandaram"
    },
    {
      "Id": "mjq",
      "Print_Name": "Malaryan",
      "Inverted_Name": "Malaryan"
    },
    {
      "Id": "mjr",
      "Print_Name": "Malavedan",
      "Inverted_Name": "Malavedan"
    },
    {
      "Id": "mjs",
      "Print_Name": "Miship",
      "Inverted_Name": "Miship"
    },
    {
      "Id": "mjt",
      "Print_Name": "Sauria Paharia",
      "Inverted_Name": "Sauria Paharia"
    },
    {
      "Id": "mju",
      "Print_Name": "Manna-Dora",
      "Inverted_Name": "Manna-Dora"
    },
    {
      "Id": "mjv",
      "Print_Name": "Mannan",
      "Inverted_Name": "Mannan"
    },
    {
      "Id": "mjw",
      "Print_Name": "Karbi",
      "Inverted_Name": "Karbi"
    },
    {
      "Id": "mjx",
      "Print_Name": "Mahali",
      "Inverted_Name": "Mahali"
    },
    {
      "Id": "mjy",
      "Print_Name": "Mahican",
      "Inverted_Name": "Mahican"
    },
    {
      "Id": "mjz",
      "Print_Name": "Majhi",
      "Inverted_Name": "Majhi"
    },
    {
      "Id": "mka",
      "Print_Name": "Mbre",
      "Inverted_Name": "Mbre"
    },
    {
      "Id": "mkb",
      "Print_Name": "Mal Paharia",
      "Inverted_Name": "Mal Paharia"
    },
    {
      "Id": "mkc",
      "Print_Name": "Siliput",
      "Inverted_Name": "Siliput"
    },
    {
      "Id": "mkd",
      "Print_Name": "Macedonian",
      "Inverted_Name": "Macedonian"
    },
    {
      "Id": "mke",
      "Print_Name": "Mawchi",
      "Inverted_Name": "Mawchi"
    },
    {
      "Id": "mkf",
      "Print_Name": "Miya",
      "Inverted_Name": "Miya"
    },
    {
      "Id": "mkg",
      "Print_Name": "Mak (China)",
      "Inverted_Name": "Mak (China)"
    },
    {
      "Id": "mki",
      "Print_Name": "Dhatki",
      "Inverted_Name": "Dhatki"
    },
    {
      "Id": "mkj",
      "Print_Name": "Mokilese",
      "Inverted_Name": "Mokilese"
    },
    {
      "Id": "mkk",
      "Print_Name": "Byep",
      "Inverted_Name": "Byep"
    },
    {
      "Id": "mkl",
      "Print_Name": "Mokole",
      "Inverted_Name": "Mokole"
    },
    {
      "Id": "mkm",
      "Print_Name": "Moklen",
      "Inverted_Name": "Moklen"
    },
    {
      "Id": "mkn",
      "Print_Name": "Kupang Malay",
      "Inverted_Name": "Malay, Kupang"
    },
    {
      "Id": "mko",
      "Print_Name": "Mingang Doso",
      "Inverted_Name": "Mingang Doso"
    },
    {
      "Id": "mkp",
      "Print_Name": "Moikodi",
      "Inverted_Name": "Moikodi"
    },
    {
      "Id": "mkq",
      "Print_Name": "Bay Miwok",
      "Inverted_Name": "Miwok, Bay"
    },
    {
      "Id": "mkr",
      "Print_Name": "Malas",
      "Inverted_Name": "Malas"
    },
    {
      "Id": "mks",
      "Print_Name": "Silacayoapan Mixtec",
      "Inverted_Name": "Mixtec, Silacayoapan"
    },
    {
      "Id": "mkt",
      "Print_Name": "Vamale",
      "Inverted_Name": "Vamale"
    },
    {
      "Id": "mku",
      "Print_Name": "Konyanka Maninka",
      "Inverted_Name": "Maninka, Konyanka"
    },
    {
      "Id": "mkv",
      "Print_Name": "Mafea",
      "Inverted_Name": "Mafea"
    },
    {
      "Id": "mkw",
      "Print_Name": "Kituba (Congo)",
      "Inverted_Name": "Kituba (Congo)"
    },
    {
      "Id": "mkx",
      "Print_Name": "Kinamiging Manobo",
      "Inverted_Name": "Manobo, Kinamiging"
    },
    {
      "Id": "mky",
      "Print_Name": "East Makian",
      "Inverted_Name": "Makian, East"
    },
    {
      "Id": "mkz",
      "Print_Name": "Makasae",
      "Inverted_Name": "Makasae"
    },
    {
      "Id": "mla",
      "Print_Name": "Malo",
      "Inverted_Name": "Malo"
    },
    {
      "Id": "mlb",
      "Print_Name": "Mbule",
      "Inverted_Name": "Mbule"
    },
    {
      "Id": "mlc",
      "Print_Name": "Cao Lan",
      "Inverted_Name": "Cao Lan"
    },
    {
      "Id": "mle",
      "Print_Name": "Manambu",
      "Inverted_Name": "Manambu"
    },
    {
      "Id": "mlf",
      "Print_Name": "Mal",
      "Inverted_Name": "Mal"
    },
    {
      "Id": "mlg",
      "Print_Name": "Malagasy",
      "Inverted_Name": "Malagasy"
    },
    {
      "Id": "mlh",
      "Print_Name": "Mape",
      "Inverted_Name": "Mape"
    },
    {
      "Id": "mli",
      "Print_Name": "Malimpung",
      "Inverted_Name": "Malimpung"
    },
    {
      "Id": "mlj",
      "Print_Name": "Miltu",
      "Inverted_Name": "Miltu"
    },
    {
      "Id": "mlk",
      "Print_Name": "Ilwana",
      "Inverted_Name": "Ilwana"
    },
    {
      "Id": "mlk",
      "Print_Name": "Kiwilwana",
      "Inverted_Name": "Kiwilwana"
    },
    {
      "Id": "mll",
      "Print_Name": "Malua Bay",
      "Inverted_Name": "Malua Bay"
    },
    {
      "Id": "mlm",
      "Print_Name": "Mulam",
      "Inverted_Name": "Mulam"
    },
    {
      "Id": "mln",
      "Print_Name": "Malango",
      "Inverted_Name": "Malango"
    },
    {
      "Id": "mlo",
      "Print_Name": "Mlomp",
      "Inverted_Name": "Mlomp"
    },
    {
      "Id": "mlp",
      "Print_Name": "Bargam",
      "Inverted_Name": "Bargam"
    },
    {
      "Id": "mlq",
      "Print_Name": "Western Maninkakan",
      "Inverted_Name": "Maninkakan, Western"
    },
    {
      "Id": "mlr",
      "Print_Name": "Vame",
      "Inverted_Name": "Vame"
    },
    {
      "Id": "mls",
      "Print_Name": "Masalit",
      "Inverted_Name": "Masalit"
    },
    {
      "Id": "mlt",
      "Print_Name": "Maltese",
      "Inverted_Name": "Maltese"
    },
    {
      "Id": "mlu",
      "Print_Name": "To'abaita",
      "Inverted_Name": "To'abaita"
    },
    {
      "Id": "mlv",
      "Print_Name": "Motlav",
      "Inverted_Name": "Motlav"
    },
    {
      "Id": "mlv",
      "Print_Name": "Mwotlap",
      "Inverted_Name": "Mwotlap"
    },
    {
      "Id": "mlw",
      "Print_Name": "Moloko",
      "Inverted_Name": "Moloko"
    },
    {
      "Id": "mlx",
      "Print_Name": "Malfaxal",
      "Inverted_Name": "Malfaxal"
    },
    {
      "Id": "mlx",
      "Print_Name": "Naha'ai",
      "Inverted_Name": "Naha'ai"
    },
    {
      "Id": "mlz",
      "Print_Name": "Malaynon",
      "Inverted_Name": "Malaynon"
    },
    {
      "Id": "mma",
      "Print_Name": "Mama",
      "Inverted_Name": "Mama"
    },
    {
      "Id": "mmb",
      "Print_Name": "Momina",
      "Inverted_Name": "Momina"
    },
    {
      "Id": "mmc",
      "Print_Name": "Michoacán Mazahua",
      "Inverted_Name": "Mazahua, Michoacán"
    },
    {
      "Id": "mmd",
      "Print_Name": "Maonan",
      "Inverted_Name": "Maonan"
    },
    {
      "Id": "mme",
      "Print_Name": "Mae",
      "Inverted_Name": "Mae"
    },
    {
      "Id": "mmf",
      "Print_Name": "Mundat",
      "Inverted_Name": "Mundat"
    },
    {
      "Id": "mmg",
      "Print_Name": "North Ambrym",
      "Inverted_Name": "Ambrym, North"
    },
    {
      "Id": "mmh",
      "Print_Name": "Mehináku",
      "Inverted_Name": "Mehináku"
    },
    {
      "Id": "mmi",
      "Print_Name": "Musar",
      "Inverted_Name": "Musar"
    },
    {
      "Id": "mmj",
      "Print_Name": "Majhwar",
      "Inverted_Name": "Majhwar"
    },
    {
      "Id": "mmk",
      "Print_Name": "Mukha-Dora",
      "Inverted_Name": "Mukha-Dora"
    },
    {
      "Id": "mml",
      "Print_Name": "Man Met",
      "Inverted_Name": "Man Met"
    },
    {
      "Id": "mmm",
      "Print_Name": "Maii",
      "Inverted_Name": "Maii"
    },
    {
      "Id": "mmn",
      "Print_Name": "Mamanwa",
      "Inverted_Name": "Mamanwa"
    },
    {
      "Id": "mmo",
      "Print_Name": "Mangga Buang",
      "Inverted_Name": "Buang, Mangga"
    },
    {
      "Id": "mmp",
      "Print_Name": "Siawi",
      "Inverted_Name": "Siawi"
    },
    {
      "Id": "mmq",
      "Print_Name": "Musak",
      "Inverted_Name": "Musak"
    },
    {
      "Id": "mmr",
      "Print_Name": "Western Xiangxi Miao",
      "Inverted_Name": "Miao, Western Xiangxi"
    },
    {
      "Id": "mmt",
      "Print_Name": "Malalamai",
      "Inverted_Name": "Malalamai"
    },
    {
      "Id": "mmu",
      "Print_Name": "Mmaala",
      "Inverted_Name": "Mmaala"
    },
    {
      "Id": "mmv",
      "Print_Name": "Miriti",
      "Inverted_Name": "Miriti"
    },
    {
      "Id": "mmw",
      "Print_Name": "Emae",
      "Inverted_Name": "Emae"
    },
    {
      "Id": "mmx",
      "Print_Name": "Madak",
      "Inverted_Name": "Madak"
    },
    {
      "Id": "mmy",
      "Print_Name": "Migaama",
      "Inverted_Name": "Migaama"
    },
    {
      "Id": "mmz",
      "Print_Name": "Mabaale",
      "Inverted_Name": "Mabaale"
    },
    {
      "Id": "mna",
      "Print_Name": "Mbula",
      "Inverted_Name": "Mbula"
    },
    {
      "Id": "mnb",
      "Print_Name": "Muna",
      "Inverted_Name": "Muna"
    },
    {
      "Id": "mnc",
      "Print_Name": "Manchu",
      "Inverted_Name": "Manchu"
    },
    {
      "Id": "mnd",
      "Print_Name": "Mondé",
      "Inverted_Name": "Mondé"
    },
    {
      "Id": "mne",
      "Print_Name": "Naba",
      "Inverted_Name": "Naba"
    },
    {
      "Id": "mnf",
      "Print_Name": "Mundani",
      "Inverted_Name": "Mundani"
    },
    {
      "Id": "mng",
      "Print_Name": "Eastern Mnong",
      "Inverted_Name": "Mnong, Eastern"
    },
    {
      "Id": "mnh",
      "Print_Name": "Mono (Democratic Republic of Congo)",
      "Inverted_Name": "Mono (Democratic Republic of Congo)"
    },
    {
      "Id": "mni",
      "Print_Name": "Manipuri",
      "Inverted_Name": "Manipuri"
    },
    {
      "Id": "mnj",
      "Print_Name": "Munji",
      "Inverted_Name": "Munji"
    },
    {
      "Id": "mnk",
      "Print_Name": "Mandinka",
      "Inverted_Name": "Mandinka"
    },
    {
      "Id": "mnl",
      "Print_Name": "Tiale",
      "Inverted_Name": "Tiale"
    },
    {
      "Id": "mnm",
      "Print_Name": "Mapena",
      "Inverted_Name": "Mapena"
    },
    {
      "Id": "mnn",
      "Print_Name": "Southern Mnong",
      "Inverted_Name": "Mnong, Southern"
    },
    {
      "Id": "mnp",
      "Print_Name": "Min Bei Chinese",
      "Inverted_Name": "Chinese, Min Bei"
    },
    {
      "Id": "mnq",
      "Print_Name": "Minriq",
      "Inverted_Name": "Minriq"
    },
    {
      "Id": "mnr",
      "Print_Name": "Mono (USA)",
      "Inverted_Name": "Mono (USA)"
    },
    {
      "Id": "mns",
      "Print_Name": "Mansi",
      "Inverted_Name": "Mansi"
    },
    {
      "Id": "mnu",
      "Print_Name": "Mer",
      "Inverted_Name": "Mer"
    },
    {
      "Id": "mnv",
      "Print_Name": "Rennell-Bellona",
      "Inverted_Name": "Rennell-Bellona"
    },
    {
      "Id": "mnw",
      "Print_Name": "Mon",
      "Inverted_Name": "Mon"
    },
    {
      "Id": "mnx",
      "Print_Name": "Manikion",
      "Inverted_Name": "Manikion"
    },
    {
      "Id": "mny",
      "Print_Name": "Manyawa",
      "Inverted_Name": "Manyawa"
    },
    {
      "Id": "mnz",
      "Print_Name": "Moni",
      "Inverted_Name": "Moni"
    },
    {
      "Id": "moa",
      "Print_Name": "Mwan",
      "Inverted_Name": "Mwan"
    },
    {
      "Id": "moc",
      "Print_Name": "Mocoví",
      "Inverted_Name": "Mocoví"
    },
    {
      "Id": "mod",
      "Print_Name": "Mobilian",
      "Inverted_Name": "Mobilian"
    },
    {
      "Id": "moe",
      "Print_Name": "Innu",
      "Inverted_Name": "Innu"
    },
    {
      "Id": "moe",
      "Print_Name": "Montagnais",
      "Inverted_Name": "Montagnais"
    },
    {
      "Id": "mog",
      "Print_Name": "Mongondow",
      "Inverted_Name": "Mongondow"
    },
    {
      "Id": "moh",
      "Print_Name": "Mohawk",
      "Inverted_Name": "Mohawk"
    },
    {
      "Id": "moi",
      "Print_Name": "Mboi",
      "Inverted_Name": "Mboi"
    },
    {
      "Id": "moj",
      "Print_Name": "Monzombo",
      "Inverted_Name": "Monzombo"
    },
    {
      "Id": "mok",
      "Print_Name": "Morori",
      "Inverted_Name": "Morori"
    },
    {
      "Id": "mom",
      "Print_Name": "Mangue",
      "Inverted_Name": "Mangue"
    },
    {
      "Id": "mon",
      "Print_Name": "Mongolian",
      "Inverted_Name": "Mongolian"
    },
    {
      "Id": "moo",
      "Print_Name": "Monom",
      "Inverted_Name": "Monom"
    },
    {
      "Id": "mop",
      "Print_Name": "Mopán Maya",
      "Inverted_Name": "Mopán Maya"
    },
    {
      "Id": "moq",
      "Print_Name": "Mor (Bomberai Peninsula)",
      "Inverted_Name": "Mor (Bomberai Peninsula)"
    },
    {
      "Id": "mor",
      "Print_Name": "Moro",
      "Inverted_Name": "Moro"
    },
    {
      "Id": "mos",
      "Print_Name": "Mossi",
      "Inverted_Name": "Mossi"
    },
    {
      "Id": "mot",
      "Print_Name": "Barí",
      "Inverted_Name": "Barí"
    },
    {
      "Id": "mou",
      "Print_Name": "Mogum",
      "Inverted_Name": "Mogum"
    },
    {
      "Id": "mov",
      "Print_Name": "Mohave",
      "Inverted_Name": "Mohave"
    },
    {
      "Id": "mow",
      "Print_Name": "Moi (Congo)",
      "Inverted_Name": "Moi (Congo)"
    },
    {
      "Id": "mox",
      "Print_Name": "Molima",
      "Inverted_Name": "Molima"
    },
    {
      "Id": "moy",
      "Print_Name": "Shekkacho",
      "Inverted_Name": "Shekkacho"
    },
    {
      "Id": "moz",
      "Print_Name": "Gergiko",
      "Inverted_Name": "Gergiko"
    },
    {
      "Id": "moz",
      "Print_Name": "Mukulu",
      "Inverted_Name": "Mukulu"
    },
    {
      "Id": "mpa",
      "Print_Name": "Mpoto",
      "Inverted_Name": "Mpoto"
    },
    {
      "Id": "mpb",
      "Print_Name": "Malak Malak",
      "Inverted_Name": "Malak Malak"
    },
    {
      "Id": "mpb",
      "Print_Name": "Mullukmulluk",
      "Inverted_Name": "Mullukmulluk"
    },
    {
      "Id": "mpc",
      "Print_Name": "Mangarrayi",
      "Inverted_Name": "Mangarrayi"
    },
    {
      "Id": "mpd",
      "Print_Name": "Machinere",
      "Inverted_Name": "Machinere"
    },
    {
      "Id": "mpe",
      "Print_Name": "Majang",
      "Inverted_Name": "Majang"
    },
    {
      "Id": "mpg",
      "Print_Name": "Marba",
      "Inverted_Name": "Marba"
    },
    {
      "Id": "mph",
      "Print_Name": "Maung",
      "Inverted_Name": "Maung"
    },
    {
      "Id": "mpi",
      "Print_Name": "Mpade",
      "Inverted_Name": "Mpade"
    },
    {
      "Id": "mpj",
      "Print_Name": "Martu Wangka",
      "Inverted_Name": "Martu Wangka"
    },
    {
      "Id": "mpj",
      "Print_Name": "Wangkajunga",
      "Inverted_Name": "Wangkajunga"
    },
    {
      "Id": "mpk",
      "Print_Name": "Mbara (Chad)",
      "Inverted_Name": "Mbara (Chad)"
    },
    {
      "Id": "mpl",
      "Print_Name": "Middle Watut",
      "Inverted_Name": "Watut, Middle"
    },
    {
      "Id": "mpm",
      "Print_Name": "Yosondúa Mixtec",
      "Inverted_Name": "Mixtec, Yosondúa"
    },
    {
      "Id": "mpn",
      "Print_Name": "Mindiri",
      "Inverted_Name": "Mindiri"
    },
    {
      "Id": "mpo",
      "Print_Name": "Miu",
      "Inverted_Name": "Miu"
    },
    {
      "Id": "mpp",
      "Print_Name": "Migabac",
      "Inverted_Name": "Migabac"
    },
    {
      "Id": "mpq",
      "Print_Name": "Matís",
      "Inverted_Name": "Matís"
    },
    {
      "Id": "mpr",
      "Print_Name": "Vangunu",
      "Inverted_Name": "Vangunu"
    },
    {
      "Id": "mps",
      "Print_Name": "Dadibi",
      "Inverted_Name": "Dadibi"
    },
    {
      "Id": "mpt",
      "Print_Name": "Mian",
      "Inverted_Name": "Mian"
    },
    {
      "Id": "mpu",
      "Print_Name": "Makuráp",
      "Inverted_Name": "Makuráp"
    },
    {
      "Id": "mpv",
      "Print_Name": "Mungkip",
      "Inverted_Name": "Mungkip"
    },
    {
      "Id": "mpw",
      "Print_Name": "Mapidian",
      "Inverted_Name": "Mapidian"
    },
    {
      "Id": "mpx",
      "Print_Name": "Misima-Panaeati",
      "Inverted_Name": "Misima-Panaeati"
    },
    {
      "Id": "mpy",
      "Print_Name": "Mapia",
      "Inverted_Name": "Mapia"
    },
    {
      "Id": "mpz",
      "Print_Name": "Mpi",
      "Inverted_Name": "Mpi"
    },
    {
      "Id": "mqa",
      "Print_Name": "Maba (Indonesia)",
      "Inverted_Name": "Maba (Indonesia)"
    },
    {
      "Id": "mqb",
      "Print_Name": "Mbuko",
      "Inverted_Name": "Mbuko"
    },
    {
      "Id": "mqc",
      "Print_Name": "Mangole",
      "Inverted_Name": "Mangole"
    },
    {
      "Id": "mqe",
      "Print_Name": "Matepi",
      "Inverted_Name": "Matepi"
    },
    {
      "Id": "mqf",
      "Print_Name": "Momuna",
      "Inverted_Name": "Momuna"
    },
    {
      "Id": "mqg",
      "Print_Name": "Kota Bangun Kutai Malay",
      "Inverted_Name": "Malay, Kota Bangun Kutai"
    },
    {
      "Id": "mqh",
      "Print_Name": "Tlazoyaltepec Mixtec",
      "Inverted_Name": "Mixtec, Tlazoyaltepec"
    },
    {
      "Id": "mqi",
      "Print_Name": "Mariri",
      "Inverted_Name": "Mariri"
    },
    {
      "Id": "mqj",
      "Print_Name": "Mamasa",
      "Inverted_Name": "Mamasa"
    },
    {
      "Id": "mqk",
      "Print_Name": "Rajah Kabunsuwan Manobo",
      "Inverted_Name": "Manobo, Rajah Kabunsuwan"
    },
    {
      "Id": "mql",
      "Print_Name": "Mbelime",
      "Inverted_Name": "Mbelime"
    },
    {
      "Id": "mqm",
      "Print_Name": "South Marquesan",
      "Inverted_Name": "Marquesan, South"
    },
    {
      "Id": "mqn",
      "Print_Name": "Moronene",
      "Inverted_Name": "Moronene"
    },
    {
      "Id": "mqo",
      "Print_Name": "Modole",
      "Inverted_Name": "Modole"
    },
    {
      "Id": "mqp",
      "Print_Name": "Manipa",
      "Inverted_Name": "Manipa"
    },
    {
      "Id": "mqq",
      "Print_Name": "Minokok",
      "Inverted_Name": "Minokok"
    },
    {
      "Id": "mqr",
      "Print_Name": "Mander",
      "Inverted_Name": "Mander"
    },
    {
      "Id": "mqs",
      "Print_Name": "West Makian",
      "Inverted_Name": "Makian, West"
    },
    {
      "Id": "mqt",
      "Print_Name": "Mok",
      "Inverted_Name": "Mok"
    },
    {
      "Id": "mqu",
      "Print_Name": "Mandari",
      "Inverted_Name": "Mandari"
    },
    {
      "Id": "mqv",
      "Print_Name": "Mosimo",
      "Inverted_Name": "Mosimo"
    },
    {
      "Id": "mqw",
      "Print_Name": "Murupi",
      "Inverted_Name": "Murupi"
    },
    {
      "Id": "mqx",
      "Print_Name": "Mamuju",
      "Inverted_Name": "Mamuju"
    },
    {
      "Id": "mqy",
      "Print_Name": "Manggarai",
      "Inverted_Name": "Manggarai"
    },
    {
      "Id": "mqz",
      "Print_Name": "Pano",
      "Inverted_Name": "Pano"
    },
    {
      "Id": "mra",
      "Print_Name": "Mlabri",
      "Inverted_Name": "Mlabri"
    },
    {
      "Id": "mrb",
      "Print_Name": "Marino",
      "Inverted_Name": "Marino"
    },
    {
      "Id": "mrc",
      "Print_Name": "Maricopa",
      "Inverted_Name": "Maricopa"
    },
    {
      "Id": "mrd",
      "Print_Name": "Western Magar",
      "Inverted_Name": "Magar, Western"
    },
    {
      "Id": "mre",
      "Print_Name": "Martha's Vineyard Sign Language",
      "Inverted_Name": "Martha's Vineyard Sign Language"
    },
    {
      "Id": "mrf",
      "Print_Name": "Elseng",
      "Inverted_Name": "Elseng"
    },
    {
      "Id": "mrg",
      "Print_Name": "Mising",
      "Inverted_Name": "Mising"
    },
    {
      "Id": "mrh",
      "Print_Name": "Mara Chin",
      "Inverted_Name": "Chin, Mara"
    },
    {
      "Id": "mri",
      "Print_Name": "Maori",
      "Inverted_Name": "Maori"
    },
    {
      "Id": "mrj",
      "Print_Name": "Western Mari",
      "Inverted_Name": "Mari, Western"
    },
    {
      "Id": "mrk",
      "Print_Name": "Hmwaveke",
      "Inverted_Name": "Hmwaveke"
    },
    {
      "Id": "mrl",
      "Print_Name": "Mortlockese",
      "Inverted_Name": "Mortlockese"
    },
    {
      "Id": "mrm",
      "Print_Name": "Merlav",
      "Inverted_Name": "Merlav"
    },
    {
      "Id": "mrm",
      "Print_Name": "Mwerlap",
      "Inverted_Name": "Mwerlap"
    },
    {
      "Id": "mrn",
      "Print_Name": "Cheke Holo",
      "Inverted_Name": "Cheke Holo"
    },
    {
      "Id": "mro",
      "Print_Name": "Mru",
      "Inverted_Name": "Mru"
    },
    {
      "Id": "mrp",
      "Print_Name": "Morouas",
      "Inverted_Name": "Morouas"
    },
    {
      "Id": "mrq",
      "Print_Name": "North Marquesan",
      "Inverted_Name": "Marquesan, North"
    },
    {
      "Id": "mrr",
      "Print_Name": "Maria (India)",
      "Inverted_Name": "Maria (India)"
    },
    {
      "Id": "mrs",
      "Print_Name": "Maragus",
      "Inverted_Name": "Maragus"
    },
    {
      "Id": "mrt",
      "Print_Name": "Marghi Central",
      "Inverted_Name": "Marghi Central"
    },
    {
      "Id": "mru",
      "Print_Name": "Mono (Cameroon)",
      "Inverted_Name": "Mono (Cameroon)"
    },
    {
      "Id": "mrv",
      "Print_Name": "Mangareva",
      "Inverted_Name": "Mangareva"
    },
    {
      "Id": "mrw",
      "Print_Name": "Maranao",
      "Inverted_Name": "Maranao"
    },
    {
      "Id": "mrx",
      "Print_Name": "Dineor",
      "Inverted_Name": "Dineor"
    },
    {
      "Id": "mrx",
      "Print_Name": "Maremgi",
      "Inverted_Name": "Maremgi"
    },
    {
      "Id": "mry",
      "Print_Name": "Mandaya",
      "Inverted_Name": "Mandaya"
    },
    {
      "Id": "mrz",
      "Print_Name": "Marind",
      "Inverted_Name": "Marind"
    },
    {
      "Id": "msa",
      "Print_Name": "Malay (macrolanguage)",
      "Inverted_Name": "Malay (macrolanguage)"
    },
    {
      "Id": "msb",
      "Print_Name": "Masbatenyo",
      "Inverted_Name": "Masbatenyo"
    },
    {
      "Id": "msc",
      "Print_Name": "Sankaran Maninka",
      "Inverted_Name": "Maninka, Sankaran"
    },
    {
      "Id": "msd",
      "Print_Name": "Yucatec Maya Sign Language",
      "Inverted_Name": "Yucatec Maya Sign Language"
    },
    {
      "Id": "mse",
      "Print_Name": "Musey",
      "Inverted_Name": "Musey"
    },
    {
      "Id": "msf",
      "Print_Name": "Mekwei",
      "Inverted_Name": "Mekwei"
    },
    {
      "Id": "msg",
      "Print_Name": "Moraid",
      "Inverted_Name": "Moraid"
    },
    {
      "Id": "msh",
      "Print_Name": "Masikoro Malagasy",
      "Inverted_Name": "Malagasy, Masikoro"
    },
    {
      "Id": "msi",
      "Print_Name": "Sabah Malay",
      "Inverted_Name": "Malay, Sabah"
    },
    {
      "Id": "msj",
      "Print_Name": "Ma (Democratic Republic of Congo)",
      "Inverted_Name": "Ma (Democratic Republic of Congo)"
    },
    {
      "Id": "msk",
      "Print_Name": "Mansaka",
      "Inverted_Name": "Mansaka"
    },
    {
      "Id": "msl",
      "Print_Name": "Molof",
      "Inverted_Name": "Molof"
    },
    {
      "Id": "msl",
      "Print_Name": "Poule",
      "Inverted_Name": "Poule"
    },
    {
      "Id": "msm",
      "Print_Name": "Agusan Manobo",
      "Inverted_Name": "Manobo, Agusan"
    },
    {
      "Id": "msn",
      "Print_Name": "Vurës",
      "Inverted_Name": "Vurës"
    },
    {
      "Id": "mso",
      "Print_Name": "Mombum",
      "Inverted_Name": "Mombum"
    },
    {
      "Id": "msp",
      "Print_Name": "Maritsauá",
      "Inverted_Name": "Maritsauá"
    },
    {
      "Id": "msq",
      "Print_Name": "Caac",
      "Inverted_Name": "Caac"
    },
    {
      "Id": "msr",
      "Print_Name": "Mongolian Sign Language",
      "Inverted_Name": "Mongolian Sign Language"
    },
    {
      "Id": "mss",
      "Print_Name": "West Masela",
      "Inverted_Name": "Masela, West"
    },
    {
      "Id": "msu",
      "Print_Name": "Musom",
      "Inverted_Name": "Musom"
    },
    {
      "Id": "msv",
      "Print_Name": "Maslam",
      "Inverted_Name": "Maslam"
    },
    {
      "Id": "msw",
      "Print_Name": "Mansoanka",
      "Inverted_Name": "Mansoanka"
    },
    {
      "Id": "msx",
      "Print_Name": "Moresada",
      "Inverted_Name": "Moresada"
    },
    {
      "Id": "msy",
      "Print_Name": "Aruamu",
      "Inverted_Name": "Aruamu"
    },
    {
      "Id": "msz",
      "Print_Name": "Momare",
      "Inverted_Name": "Momare"
    },
    {
      "Id": "mta",
      "Print_Name": "Cotabato Manobo",
      "Inverted_Name": "Manobo, Cotabato"
    },
    {
      "Id": "mtb",
      "Print_Name": "Anyin Morofo",
      "Inverted_Name": "Anyin Morofo"
    },
    {
      "Id": "mtc",
      "Print_Name": "Munit",
      "Inverted_Name": "Munit"
    },
    {
      "Id": "mtd",
      "Print_Name": "Mualang",
      "Inverted_Name": "Mualang"
    },
    {
      "Id": "mte",
      "Print_Name": "Mono (Solomon Islands)",
      "Inverted_Name": "Mono (Solomon Islands)"
    },
    {
      "Id": "mtf",
      "Print_Name": "Murik (Papua New Guinea)",
      "Inverted_Name": "Murik (Papua New Guinea)"
    },
    {
      "Id": "mtg",
      "Print_Name": "Una",
      "Inverted_Name": "Una"
    },
    {
      "Id": "mth",
      "Print_Name": "Munggui",
      "Inverted_Name": "Munggui"
    },
    {
      "Id": "mti",
      "Print_Name": "Maiwa (Papua New Guinea)",
      "Inverted_Name": "Maiwa (Papua New Guinea)"
    },
    {
      "Id": "mtj",
      "Print_Name": "Moskona",
      "Inverted_Name": "Moskona"
    },
    {
      "Id": "mtk",
      "Print_Name": "Mbe'",
      "Inverted_Name": "Mbe'"
    },
    {
      "Id": "mtl",
      "Print_Name": "Montol",
      "Inverted_Name": "Montol"
    },
    {
      "Id": "mtm",
      "Print_Name": "Mator",
      "Inverted_Name": "Mator"
    },
    {
      "Id": "mtn",
      "Print_Name": "Matagalpa",
      "Inverted_Name": "Matagalpa"
    },
    {
      "Id": "mto",
      "Print_Name": "Totontepec Mixe",
      "Inverted_Name": "Mixe, Totontepec"
    },
    {
      "Id": "mtp",
      "Print_Name": "Wichí Lhamtés Nocten",
      "Inverted_Name": "Wichí Lhamtés Nocten"
    },
    {
      "Id": "mtq",
      "Print_Name": "Muong",
      "Inverted_Name": "Muong"
    },
    {
      "Id": "mtr",
      "Print_Name": "Mewari",
      "Inverted_Name": "Mewari"
    },
    {
      "Id": "mts",
      "Print_Name": "Yora",
      "Inverted_Name": "Yora"
    },
    {
      "Id": "mtt",
      "Print_Name": "Mota",
      "Inverted_Name": "Mota"
    },
    {
      "Id": "mtu",
      "Print_Name": "Tututepec Mixtec",
      "Inverted_Name": "Mixtec, Tututepec"
    },
    {
      "Id": "mtv",
      "Print_Name": "Asaro'o",
      "Inverted_Name": "Asaro'o"
    },
    {
      "Id": "mtw",
      "Print_Name": "Southern Binukidnon",
      "Inverted_Name": "Binukidnon, Southern"
    },
    {
      "Id": "mtx",
      "Print_Name": "Tidaá Mixtec",
      "Inverted_Name": "Mixtec, Tidaá"
    },
    {
      "Id": "mty",
      "Print_Name": "Nabi",
      "Inverted_Name": "Nabi"
    },
    {
      "Id": "mua",
      "Print_Name": "Mundang",
      "Inverted_Name": "Mundang"
    },
    {
      "Id": "mub",
      "Print_Name": "Mubi",
      "Inverted_Name": "Mubi"
    },
    {
      "Id": "muc",
      "Print_Name": "Ajumbu",
      "Inverted_Name": "Ajumbu"
    },
    {
      "Id": "mud",
      "Print_Name": "Mednyj Aleut",
      "Inverted_Name": "Aleut, Mednyj"
    },
    {
      "Id": "mue",
      "Print_Name": "Media Lengua",
      "Inverted_Name": "Media Lengua"
    },
    {
      "Id": "mug",
      "Print_Name": "Musgu",
      "Inverted_Name": "Musgu"
    },
    {
      "Id": "muh",
      "Print_Name": "Mündü",
      "Inverted_Name": "Mündü"
    },
    {
      "Id": "mui",
      "Print_Name": "Musi",
      "Inverted_Name": "Musi"
    },
    {
      "Id": "muj",
      "Print_Name": "Mabire",
      "Inverted_Name": "Mabire"
    },
    {
      "Id": "muk",
      "Print_Name": "Mugom",
      "Inverted_Name": "Mugom"
    },
    {
      "Id": "mul",
      "Print_Name": "Multiple languages",
      "Inverted_Name": "Multiple languages"
    },
    {
      "Id": "mum",
      "Print_Name": "Maiwala",
      "Inverted_Name": "Maiwala"
    },
    {
      "Id": "muo",
      "Print_Name": "Nyong",
      "Inverted_Name": "Nyong"
    },
    {
      "Id": "mup",
      "Print_Name": "Malvi",
      "Inverted_Name": "Malvi"
    },
    {
      "Id": "muq",
      "Print_Name": "Eastern Xiangxi Miao",
      "Inverted_Name": "Miao, Eastern Xiangxi"
    },
    {
      "Id": "mur",
      "Print_Name": "Murle",
      "Inverted_Name": "Murle"
    },
    {
      "Id": "mus",
      "Print_Name": "Creek",
      "Inverted_Name": "Creek"
    },
    {
      "Id": "mut",
      "Print_Name": "Western Muria",
      "Inverted_Name": "Muria, Western"
    },
    {
      "Id": "muu",
      "Print_Name": "Yaaku",
      "Inverted_Name": "Yaaku"
    },
    {
      "Id": "muv",
      "Print_Name": "Muthuvan",
      "Inverted_Name": "Muthuvan"
    },
    {
      "Id": "mux",
      "Print_Name": "Bo-Ung",
      "Inverted_Name": "Bo-Ung"
    },
    {
      "Id": "muy",
      "Print_Name": "Muyang",
      "Inverted_Name": "Muyang"
    },
    {
      "Id": "muz",
      "Print_Name": "Mursi",
      "Inverted_Name": "Mursi"
    },
    {
      "Id": "mva",
      "Print_Name": "Manam",
      "Inverted_Name": "Manam"
    },
    {
      "Id": "mvb",
      "Print_Name": "Mattole",
      "Inverted_Name": "Mattole"
    },
    {
      "Id": "mvd",
      "Print_Name": "Mamboru",
      "Inverted_Name": "Mamboru"
    },
    {
      "Id": "mve",
      "Print_Name": "Marwari (Pakistan)",
      "Inverted_Name": "Marwari (Pakistan)"
    },
    {
      "Id": "mvf",
      "Print_Name": "Peripheral Mongolian",
      "Inverted_Name": "Mongolian, Peripheral"
    },
    {
      "Id": "mvg",
      "Print_Name": "Yucuañe Mixtec",
      "Inverted_Name": "Mixtec, Yucuañe"
    },
    {
      "Id": "mvh",
      "Print_Name": "Mulgi",
      "Inverted_Name": "Mulgi"
    },
    {
      "Id": "mvi",
      "Print_Name": "Miyako",
      "Inverted_Name": "Miyako"
    },
    {
      "Id": "mvk",
      "Print_Name": "Mekmek",
      "Inverted_Name": "Mekmek"
    },
    {
      "Id": "mvl",
      "Print_Name": "Mbara (Australia)",
      "Inverted_Name": "Mbara (Australia)"
    },
    {
      "Id": "mvn",
      "Print_Name": "Minaveha",
      "Inverted_Name": "Minaveha"
    },
    {
      "Id": "mvo",
      "Print_Name": "Marovo",
      "Inverted_Name": "Marovo"
    },
    {
      "Id": "mvp",
      "Print_Name": "Duri",
      "Inverted_Name": "Duri"
    },
    {
      "Id": "mvq",
      "Print_Name": "Moere",
      "Inverted_Name": "Moere"
    },
    {
      "Id": "mvr",
      "Print_Name": "Marau",
      "Inverted_Name": "Marau"
    },
    {
      "Id": "mvs",
      "Print_Name": "Massep",
      "Inverted_Name": "Massep"
    },
    {
      "Id": "mvt",
      "Print_Name": "Mpotovoro",
      "Inverted_Name": "Mpotovoro"
    },
    {
      "Id": "mvu",
      "Print_Name": "Marfa",
      "Inverted_Name": "Marfa"
    },
    {
      "Id": "mvv",
      "Print_Name": "Tagal Murut",
      "Inverted_Name": "Murut, Tagal"
    },
    {
      "Id": "mvw",
      "Print_Name": "Machinga",
      "Inverted_Name": "Machinga"
    },
    {
      "Id": "mvx",
      "Print_Name": "Meoswar",
      "Inverted_Name": "Meoswar"
    },
    {
      "Id": "mvy",
      "Print_Name": "Indus Kohistani",
      "Inverted_Name": "Kohistani, Indus"
    },
    {
      "Id": "mvz",
      "Print_Name": "Mesqan",
      "Inverted_Name": "Mesqan"
    },
    {
      "Id": "mwa",
      "Print_Name": "Mwatebu",
      "Inverted_Name": "Mwatebu"
    },
    {
      "Id": "mwb",
      "Print_Name": "Juwal",
      "Inverted_Name": "Juwal"
    },
    {
      "Id": "mwc",
      "Print_Name": "Are",
      "Inverted_Name": "Are"
    },
    {
      "Id": "mwe",
      "Print_Name": "Mwera (Chimwera)",
      "Inverted_Name": "Mwera (Chimwera)"
    },
    {
      "Id": "mwf",
      "Print_Name": "Murrinh-Patha",
      "Inverted_Name": "Murrinh-Patha"
    },
    {
      "Id": "mwg",
      "Print_Name": "Aiklep",
      "Inverted_Name": "Aiklep"
    },
    {
      "Id": "mwh",
      "Print_Name": "Mouk-Aria",
      "Inverted_Name": "Mouk-Aria"
    },
    {
      "Id": "mwi",
      "Print_Name": "Labo",
      "Inverted_Name": "Labo"
    },
    {
      "Id": "mwi",
      "Print_Name": "Ninde",
      "Inverted_Name": "Ninde"
    },
    {
      "Id": "mwk",
      "Print_Name": "Kita Maninkakan",
      "Inverted_Name": "Maninkakan, Kita"
    },
    {
      "Id": "mwl",
      "Print_Name": "Mirandese",
      "Inverted_Name": "Mirandese"
    },
    {
      "Id": "mwm",
      "Print_Name": "Sar",
      "Inverted_Name": "Sar"
    },
    {
      "Id": "mwn",
      "Print_Name": "Nyamwanga",
      "Inverted_Name": "Nyamwanga"
    },
    {
      "Id": "mwo",
      "Print_Name": "Central Maewo",
      "Inverted_Name": "Maewo, Central"
    },
    {
      "Id": "mwp",
      "Print_Name": "Kala Lagaw Ya",
      "Inverted_Name": "Kala Lagaw Ya"
    },
    {
      "Id": "mwq",
      "Print_Name": "Mün Chin",
      "Inverted_Name": "Chin, Mün"
    },
    {
      "Id": "mwr",
      "Print_Name": "Marwari",
      "Inverted_Name": "Marwari"
    },
    {
      "Id": "mws",
      "Print_Name": "Mwimbi-Muthambi",
      "Inverted_Name": "Mwimbi-Muthambi"
    },
    {
      "Id": "mwt",
      "Print_Name": "Moken",
      "Inverted_Name": "Moken"
    },
    {
      "Id": "mwu",
      "Print_Name": "Mittu",
      "Inverted_Name": "Mittu"
    },
    {
      "Id": "mwv",
      "Print_Name": "Mentawai",
      "Inverted_Name": "Mentawai"
    },
    {
      "Id": "mww",
      "Print_Name": "Hmong Daw",
      "Inverted_Name": "Hmong Daw"
    },
    {
      "Id": "mwz",
      "Print_Name": "Moingi",
      "Inverted_Name": "Moingi"
    },
    {
      "Id": "mxa",
      "Print_Name": "Northwest Oaxaca Mixtec",
      "Inverted_Name": "Mixtec, Northwest Oaxaca"
    },
    {
      "Id": "mxb",
      "Print_Name": "Tezoatlán Mixtec",
      "Inverted_Name": "Mixtec, Tezoatlán"
    },
    {
      "Id": "mxc",
      "Print_Name": "Manyika",
      "Inverted_Name": "Manyika"
    },
    {
      "Id": "mxd",
      "Print_Name": "Modang",
      "Inverted_Name": "Modang"
    },
    {
      "Id": "mxe",
      "Print_Name": "Mele-Fila",
      "Inverted_Name": "Mele-Fila"
    },
    {
      "Id": "mxf",
      "Print_Name": "Malgbe",
      "Inverted_Name": "Malgbe"
    },
    {
      "Id": "mxg",
      "Print_Name": "Mbangala",
      "Inverted_Name": "Mbangala"
    },
    {
      "Id": "mxh",
      "Print_Name": "Mvuba",
      "Inverted_Name": "Mvuba"
    },
    {
      "Id": "mxi",
      "Print_Name": "Mozarabic",
      "Inverted_Name": "Mozarabic"
    },
    {
      "Id": "mxj",
      "Print_Name": "Geman Deng",
      "Inverted_Name": "Deng, Geman"
    },
    {
      "Id": "mxj",
      "Print_Name": "Miju-Mishmi",
      "Inverted_Name": "Miju-Mishmi"
    },
    {
      "Id": "mxk",
      "Print_Name": "Monumbo",
      "Inverted_Name": "Monumbo"
    },
    {
      "Id": "mxl",
      "Print_Name": "Maxi Gbe",
      "Inverted_Name": "Gbe, Maxi"
    },
    {
      "Id": "mxm",
      "Print_Name": "Meramera",
      "Inverted_Name": "Meramera"
    },
    {
      "Id": "mxn",
      "Print_Name": "Moi (Indonesia)",
      "Inverted_Name": "Moi (Indonesia)"
    },
    {
      "Id": "mxo",
      "Print_Name": "Mbowe",
      "Inverted_Name": "Mbowe"
    },
    {
      "Id": "mxp",
      "Print_Name": "Tlahuitoltepec Mixe",
      "Inverted_Name": "Mixe, Tlahuitoltepec"
    },
    {
      "Id": "mxq",
      "Print_Name": "Juquila Mixe",
      "Inverted_Name": "Mixe, Juquila"
    },
    {
      "Id": "mxr",
      "Print_Name": "Murik (Malaysia)",
      "Inverted_Name": "Murik (Malaysia)"
    },
    {
      "Id": "mxs",
      "Print_Name": "Huitepec Mixtec",
      "Inverted_Name": "Mixtec, Huitepec"
    },
    {
      "Id": "mxt",
      "Print_Name": "Jamiltepec Mixtec",
      "Inverted_Name": "Mixtec, Jamiltepec"
    },
    {
      "Id": "mxu",
      "Print_Name": "Mada (Cameroon)",
      "Inverted_Name": "Mada (Cameroon)"
    },
    {
      "Id": "mxv",
      "Print_Name": "Metlatónoc Mixtec",
      "Inverted_Name": "Mixtec, Metlatónoc"
    },
    {
      "Id": "mxw",
      "Print_Name": "Namo",
      "Inverted_Name": "Namo"
    },
    {
      "Id": "mxx",
      "Print_Name": "Mahou",
      "Inverted_Name": "Mahou"
    },
    {
      "Id": "mxx",
      "Print_Name": "Mawukakan",
      "Inverted_Name": "Mawukakan"
    },
    {
      "Id": "mxy",
      "Print_Name": "Southeastern Nochixtlán Mixtec",
      "Inverted_Name": "Mixtec, Southeastern Nochixtlán"
    },
    {
      "Id": "mxz",
      "Print_Name": "Central Masela",
      "Inverted_Name": "Masela, Central"
    },
    {
      "Id": "mya",
      "Print_Name": "Burmese",
      "Inverted_Name": "Burmese"
    },
    {
      "Id": "myb",
      "Print_Name": "Mbay",
      "Inverted_Name": "Mbay"
    },
    {
      "Id": "myc",
      "Print_Name": "Mayeka",
      "Inverted_Name": "Mayeka"
    },
    {
      "Id": "mye",
      "Print_Name": "Myene",
      "Inverted_Name": "Myene"
    },
    {
      "Id": "myf",
      "Print_Name": "Bambassi",
      "Inverted_Name": "Bambassi"
    },
    {
      "Id": "myg",
      "Print_Name": "Manta",
      "Inverted_Name": "Manta"
    },
    {
      "Id": "myh",
      "Print_Name": "Makah",
      "Inverted_Name": "Makah"
    },
    {
      "Id": "myj",
      "Print_Name": "Mangayat",
      "Inverted_Name": "Mangayat"
    },
    {
      "Id": "myk",
      "Print_Name": "Mamara Senoufo",
      "Inverted_Name": "Senoufo, Mamara"
    },
    {
      "Id": "myl",
      "Print_Name": "Moma",
      "Inverted_Name": "Moma"
    },
    {
      "Id": "mym",
      "Print_Name": "Me'en",
      "Inverted_Name": "Me'en"
    },
    {
      "Id": "myo",
      "Print_Name": "Anfillo",
      "Inverted_Name": "Anfillo"
    },
    {
      "Id": "myp",
      "Print_Name": "Pirahã",
      "Inverted_Name": "Pirahã"
    },
    {
      "Id": "myr",
      "Print_Name": "Muniche",
      "Inverted_Name": "Muniche"
    },
    {
      "Id": "mys",
      "Print_Name": "Mesmes",
      "Inverted_Name": "Mesmes"
    },
    {
      "Id": "myu",
      "Print_Name": "Mundurukú",
      "Inverted_Name": "Mundurukú"
    },
    {
      "Id": "myv",
      "Print_Name": "Erzya",
      "Inverted_Name": "Erzya"
    },
    {
      "Id": "myw",
      "Print_Name": "Muyuw",
      "Inverted_Name": "Muyuw"
    },
    {
      "Id": "myx",
      "Print_Name": "Masaaba",
      "Inverted_Name": "Masaaba"
    },
    {
      "Id": "myy",
      "Print_Name": "Macuna",
      "Inverted_Name": "Macuna"
    },
    {
      "Id": "myz",
      "Print_Name": "Classical Mandaic",
      "Inverted_Name": "Mandaic, Classical"
    },
    {
      "Id": "mza",
      "Print_Name": "Santa María Zacatepec Mixtec",
      "Inverted_Name": "Mixtec, Santa María Zacatepec"
    },
    {
      "Id": "mzb",
      "Print_Name": "Tumzabt",
      "Inverted_Name": "Tumzabt"
    },
    {
      "Id": "mzc",
      "Print_Name": "Madagascar Sign Language",
      "Inverted_Name": "Madagascar Sign Language"
    },
    {
      "Id": "mzd",
      "Print_Name": "Malimba",
      "Inverted_Name": "Malimba"
    },
    {
      "Id": "mze",
      "Print_Name": "Morawa",
      "Inverted_Name": "Morawa"
    },
    {
      "Id": "mzg",
      "Print_Name": "Monastic Sign Language",
      "Inverted_Name": "Monastic Sign Language"
    },
    {
      "Id": "mzh",
      "Print_Name": "Wichí Lhamtés Güisnay",
      "Inverted_Name": "Wichí Lhamtés Güisnay"
    },
    {
      "Id": "mzi",
      "Print_Name": "Ixcatlán Mazatec",
      "Inverted_Name": "Mazatec, Ixcatlán"
    },
    {
      "Id": "mzj",
      "Print_Name": "Manya",
      "Inverted_Name": "Manya"
    },
    {
      "Id": "mzk",
      "Print_Name": "Nigeria Mambila",
      "Inverted_Name": "Mambila, Nigeria"
    },
    {
      "Id": "mzl",
      "Print_Name": "Mazatlán Mixe",
      "Inverted_Name": "Mixe, Mazatlán"
    },
    {
      "Id": "mzm",
      "Print_Name": "Mumuye",
      "Inverted_Name": "Mumuye"
    },
    {
      "Id": "mzn",
      "Print_Name": "Mazanderani",
      "Inverted_Name": "Mazanderani"
    },
    {
      "Id": "mzo",
      "Print_Name": "Matipuhy",
      "Inverted_Name": "Matipuhy"
    },
    {
      "Id": "mzp",
      "Print_Name": "Movima",
      "Inverted_Name": "Movima"
    },
    {
      "Id": "mzq",
      "Print_Name": "Mori Atas",
      "Inverted_Name": "Mori Atas"
    },
    {
      "Id": "mzr",
      "Print_Name": "Marúbo",
      "Inverted_Name": "Marúbo"
    },
    {
      "Id": "mzs",
      "Print_Name": "Macanese",
      "Inverted_Name": "Macanese"
    },
    {
      "Id": "mzt",
      "Print_Name": "Mintil",
      "Inverted_Name": "Mintil"
    },
    {
      "Id": "mzu",
      "Print_Name": "Inapang",
      "Inverted_Name": "Inapang"
    },
    {
      "Id": "mzv",
      "Print_Name": "Manza",
      "Inverted_Name": "Manza"
    },
    {
      "Id": "mzw",
      "Print_Name": "Deg",
      "Inverted_Name": "Deg"
    },
    {
      "Id": "mzx",
      "Print_Name": "Mawayana",
      "Inverted_Name": "Mawayana"
    },
    {
      "Id": "mzy",
      "Print_Name": "Mozambican Sign Language",
      "Inverted_Name": "Mozambican Sign Language"
    },
    {
      "Id": "mzz",
      "Print_Name": "Maiadomu",
      "Inverted_Name": "Maiadomu"
    },
    {
      "Id": "naa",
      "Print_Name": "Namla",
      "Inverted_Name": "Namla"
    },
    {
      "Id": "nab",
      "Print_Name": "Southern Nambikuára",
      "Inverted_Name": "Nambikuára, Southern"
    },
    {
      "Id": "nac",
      "Print_Name": "Narak",
      "Inverted_Name": "Narak"
    },
    {
      "Id": "nae",
      "Print_Name": "Naka'ela",
      "Inverted_Name": "Naka'ela"
    },
    {
      "Id": "naf",
      "Print_Name": "Nabak",
      "Inverted_Name": "Nabak"
    },
    {
      "Id": "nag",
      "Print_Name": "Naga Pidgin",
      "Inverted_Name": "Naga Pidgin"
    },
    {
      "Id": "naj",
      "Print_Name": "Nalu",
      "Inverted_Name": "Nalu"
    },
    {
      "Id": "nak",
      "Print_Name": "Nakanai",
      "Inverted_Name": "Nakanai"
    },
    {
      "Id": "nal",
      "Print_Name": "Nalik",
      "Inverted_Name": "Nalik"
    },
    {
      "Id": "nam",
      "Print_Name": "Ngan'gityemerri",
      "Inverted_Name": "Ngan'gityemerri"
    },
    {
      "Id": "nan",
      "Print_Name": "Min Nan Chinese",
      "Inverted_Name": "Chinese, Min Nan"
    },
    {
      "Id": "nao",
      "Print_Name": "Naaba",
      "Inverted_Name": "Naaba"
    },
    {
      "Id": "nap",
      "Print_Name": "Neapolitan",
      "Inverted_Name": "Neapolitan"
    },
    {
      "Id": "naq",
      "Print_Name": "Khoekhoe",
      "Inverted_Name": "Khoekhoe"
    },
    {
      "Id": "naq",
      "Print_Name": "Nama (Namibia)",
      "Inverted_Name": "Nama (Namibia)"
    },
    {
      "Id": "nar",
      "Print_Name": "Iguta",
      "Inverted_Name": "Iguta"
    },
    {
      "Id": "nas",
      "Print_Name": "Naasioi",
      "Inverted_Name": "Naasioi"
    },
    {
      "Id": "nat",
      "Print_Name": "Ca̱hungwa̱rya̱",
      "Inverted_Name": "Ca̱hungwa̱rya̱"
    },
    {
      "Id": "nat",
      "Print_Name": "Hungworo",
      "Inverted_Name": "Hungworo"
    },
    {
      "Id": "nau",
      "Print_Name": "Nauru",
      "Inverted_Name": "Nauru"
    },
    {
      "Id": "nav",
      "Print_Name": "Navaho",
      "Inverted_Name": "Navaho"
    },
    {
      "Id": "nav",
      "Print_Name": "Navajo",
      "Inverted_Name": "Navajo"
    },
    {
      "Id": "naw",
      "Print_Name": "Nawuri",
      "Inverted_Name": "Nawuri"
    },
    {
      "Id": "nax",
      "Print_Name": "Nakwi",
      "Inverted_Name": "Nakwi"
    },
    {
      "Id": "nay",
      "Print_Name": "Ngarrindjeri",
      "Inverted_Name": "Ngarrindjeri"
    },
    {
      "Id": "naz",
      "Print_Name": "Coatepec Nahuatl",
      "Inverted_Name": "Nahuatl, Coatepec"
    },
    {
      "Id": "nba",
      "Print_Name": "Nyemba",
      "Inverted_Name": "Nyemba"
    },
    {
      "Id": "nbb",
      "Print_Name": "Ndoe",
      "Inverted_Name": "Ndoe"
    },
    {
      "Id": "nbc",
      "Print_Name": "Chang Naga",
      "Inverted_Name": "Naga, Chang"
    },
    {
      "Id": "nbd",
      "Print_Name": "Ngbinda",
      "Inverted_Name": "Ngbinda"
    },
    {
      "Id": "nbe",
      "Print_Name": "Konyak Naga",
      "Inverted_Name": "Naga, Konyak"
    },
    {
      "Id": "nbg",
      "Print_Name": "Nagarchal",
      "Inverted_Name": "Nagarchal"
    },
    {
      "Id": "nbh",
      "Print_Name": "Ngamo",
      "Inverted_Name": "Ngamo"
    },
    {
      "Id": "nbi",
      "Print_Name": "Mao Naga",
      "Inverted_Name": "Naga, Mao"
    },
    {
      "Id": "nbj",
      "Print_Name": "Ngarinyman",
      "Inverted_Name": "Ngarinyman"
    },
    {
      "Id": "nbk",
      "Print_Name": "Nake",
      "Inverted_Name": "Nake"
    },
    {
      "Id": "nbl",
      "Print_Name": "South Ndebele",
      "Inverted_Name": "Ndebele, South"
    },
    {
      "Id": "nbm",
      "Print_Name": "Ngbaka Ma'bo",
      "Inverted_Name": "Ngbaka Ma'bo"
    },
    {
      "Id": "nbn",
      "Print_Name": "Kuri",
      "Inverted_Name": "Kuri"
    },
    {
      "Id": "nbo",
      "Print_Name": "Nkukoli",
      "Inverted_Name": "Nkukoli"
    },
    {
      "Id": "nbp",
      "Print_Name": "Nnam",
      "Inverted_Name": "Nnam"
    },
    {
      "Id": "nbq",
      "Print_Name": "Nggem",
      "Inverted_Name": "Nggem"
    },
    {
      "Id": "nbr",
      "Print_Name": "Numana",
      "Inverted_Name": "Numana"
    },
    {
      "Id": "nbs",
      "Print_Name": "Namibian Sign Language",
      "Inverted_Name": "Namibian Sign Language"
    },
    {
      "Id": "nbt",
      "Print_Name": "Na",
      "Inverted_Name": "Na"
    },
    {
      "Id": "nbu",
      "Print_Name": "Rongmei Naga",
      "Inverted_Name": "Naga, Rongmei"
    },
    {
      "Id": "nbv",
      "Print_Name": "Ngamambo",
      "Inverted_Name": "Ngamambo"
    },
    {
      "Id": "nbw",
      "Print_Name": "Southern Ngbandi",
      "Inverted_Name": "Ngbandi, Southern"
    },
    {
      "Id": "nby",
      "Print_Name": "Ningera",
      "Inverted_Name": "Ningera"
    },
    {
      "Id": "nca",
      "Print_Name": "Iyo",
      "Inverted_Name": "Iyo"
    },
    {
      "Id": "ncb",
      "Print_Name": "Central Nicobarese",
      "Inverted_Name": "Nicobarese, Central"
    },
    {
      "Id": "ncc",
      "Print_Name": "Ponam",
      "Inverted_Name": "Ponam"
    },
    {
      "Id": "ncd",
      "Print_Name": "Nachering",
      "Inverted_Name": "Nachering"
    },
    {
      "Id": "nce",
      "Print_Name": "Yale",
      "Inverted_Name": "Yale"
    },
    {
      "Id": "ncf",
      "Print_Name": "Notsi",
      "Inverted_Name": "Notsi"
    },
    {
      "Id": "ncg",
      "Print_Name": "Nisga'a",
      "Inverted_Name": "Nisga'a"
    },
    {
      "Id": "nch",
      "Print_Name": "Central Huasteca Nahuatl",
      "Inverted_Name": "Nahuatl, Central Huasteca"
    },
    {
      "Id": "nci",
      "Print_Name": "Classical Nahuatl",
      "Inverted_Name": "Nahuatl, Classical"
    },
    {
      "Id": "ncj",
      "Print_Name": "Northern Puebla Nahuatl",
      "Inverted_Name": "Nahuatl, Northern Puebla"
    },
    {
      "Id": "nck",
      "Print_Name": "Na-kara",
      "Inverted_Name": "Na-kara"
    },
    {
      "Id": "ncl",
      "Print_Name": "Michoacán Nahuatl",
      "Inverted_Name": "Nahuatl, Michoacán"
    },
    {
      "Id": "ncm",
      "Print_Name": "Nambo",
      "Inverted_Name": "Nambo"
    },
    {
      "Id": "ncn",
      "Print_Name": "Nauna",
      "Inverted_Name": "Nauna"
    },
    {
      "Id": "nco",
      "Print_Name": "Sibe",
      "Inverted_Name": "Sibe"
    },
    {
      "Id": "ncq",
      "Print_Name": "Northern Katang",
      "Inverted_Name": "Katang, Northern"
    },
    {
      "Id": "ncr",
      "Print_Name": "Ncane",
      "Inverted_Name": "Ncane"
    },
    {
      "Id": "ncs",
      "Print_Name": "Nicaraguan Sign Language",
      "Inverted_Name": "Nicaraguan Sign Language"
    },
    {
      "Id": "nct",
      "Print_Name": "Chothe Naga",
      "Inverted_Name": "Naga, Chothe"
    },
    {
      "Id": "ncu",
      "Print_Name": "Chumburung",
      "Inverted_Name": "Chumburung"
    },
    {
      "Id": "ncx",
      "Print_Name": "Central Puebla Nahuatl",
      "Inverted_Name": "Nahuatl, Central Puebla"
    },
    {
      "Id": "ncz",
      "Print_Name": "Natchez",
      "Inverted_Name": "Natchez"
    },
    {
      "Id": "nda",
      "Print_Name": "Ndasa",
      "Inverted_Name": "Ndasa"
    },
    {
      "Id": "ndb",
      "Print_Name": "Kenswei Nsei",
      "Inverted_Name": "Kenswei Nsei"
    },
    {
      "Id": "ndc",
      "Print_Name": "Ndau",
      "Inverted_Name": "Ndau"
    },
    {
      "Id": "ndd",
      "Print_Name": "Nde-Nsele-Nta",
      "Inverted_Name": "Nde-Nsele-Nta"
    },
    {
      "Id": "nde",
      "Print_Name": "North Ndebele",
      "Inverted_Name": "Ndebele, North"
    },
    {
      "Id": "ndf",
      "Print_Name": "Nadruvian",
      "Inverted_Name": "Nadruvian"
    },
    {
      "Id": "ndg",
      "Print_Name": "Ndengereko",
      "Inverted_Name": "Ndengereko"
    },
    {
      "Id": "ndh",
      "Print_Name": "Ndali",
      "Inverted_Name": "Ndali"
    },
    {
      "Id": "ndi",
      "Print_Name": "Samba Leko",
      "Inverted_Name": "Samba Leko"
    },
    {
      "Id": "ndj",
      "Print_Name": "Ndamba",
      "Inverted_Name": "Ndamba"
    },
    {
      "Id": "ndk",
      "Print_Name": "Ndaka",
      "Inverted_Name": "Ndaka"
    },
    {
      "Id": "ndl",
      "Print_Name": "Ndolo",
      "Inverted_Name": "Ndolo"
    },
    {
      "Id": "ndm",
      "Print_Name": "Ndam",
      "Inverted_Name": "Ndam"
    },
    {
      "Id": "ndn",
      "Print_Name": "Ngundi",
      "Inverted_Name": "Ngundi"
    },
    {
      "Id": "ndo",
      "Print_Name": "Ndonga",
      "Inverted_Name": "Ndonga"
    },
    {
      "Id": "ndp",
      "Print_Name": "Ndo",
      "Inverted_Name": "Ndo"
    },
    {
      "Id": "ndq",
      "Print_Name": "Ndombe",
      "Inverted_Name": "Ndombe"
    },
    {
      "Id": "ndr",
      "Print_Name": "Ndoola",
      "Inverted_Name": "Ndoola"
    },
    {
      "Id": "nds",
      "Print_Name": "Low German",
      "Inverted_Name": "German, Low"
    },
    {
      "Id": "nds",
      "Print_Name": "Low Saxon",
      "Inverted_Name": "Saxon, Low"
    },
    {
      "Id": "ndt",
      "Print_Name": "Ndunga",
      "Inverted_Name": "Ndunga"
    },
    {
      "Id": "ndu",
      "Print_Name": "Dugun",
      "Inverted_Name": "Dugun"
    },
    {
      "Id": "ndv",
      "Print_Name": "Ndut",
      "Inverted_Name": "Ndut"
    },
    {
      "Id": "ndw",
      "Print_Name": "Ndobo",
      "Inverted_Name": "Ndobo"
    },
    {
      "Id": "ndx",
      "Print_Name": "Nduga",
      "Inverted_Name": "Nduga"
    },
    {
      "Id": "ndy",
      "Print_Name": "Lutos",
      "Inverted_Name": "Lutos"
    },
    {
      "Id": "ndz",
      "Print_Name": "Ndogo",
      "Inverted_Name": "Ndogo"
    },
    {
      "Id": "nea",
      "Print_Name": "Eastern Ngad'a",
      "Inverted_Name": "Ngad'a, Eastern"
    },
    {
      "Id": "neb",
      "Print_Name": "Toura (Côte d'Ivoire)",
      "Inverted_Name": "Toura (Côte d'Ivoire)"
    },
    {
      "Id": "nec",
      "Print_Name": "Nedebang",
      "Inverted_Name": "Nedebang"
    },
    {
      "Id": "ned",
      "Print_Name": "Nde-Gbite",
      "Inverted_Name": "Nde-Gbite"
    },
    {
      "Id": "nee",
      "Print_Name": "Nêlêmwa-Nixumwak",
      "Inverted_Name": "Nêlêmwa-Nixumwak"
    },
    {
      "Id": "nef",
      "Print_Name": "Nefamese",
      "Inverted_Name": "Nefamese"
    },
    {
      "Id": "neg",
      "Print_Name": "Negidal",
      "Inverted_Name": "Negidal"
    },
    {
      "Id": "neh",
      "Print_Name": "Nyenkha",
      "Inverted_Name": "Nyenkha"
    },
    {
      "Id": "nei",
      "Print_Name": "Neo-Hittite",
      "Inverted_Name": "Hittite, Neo-"
    },
    {
      "Id": "nej",
      "Print_Name": "Neko",
      "Inverted_Name": "Neko"
    },
    {
      "Id": "nek",
      "Print_Name": "Neku",
      "Inverted_Name": "Neku"
    },
    {
      "Id": "nem",
      "Print_Name": "Nemi",
      "Inverted_Name": "Nemi"
    },
    {
      "Id": "nen",
      "Print_Name": "Nengone",
      "Inverted_Name": "Nengone"
    },
    {
      "Id": "neo",
      "Print_Name": "Ná-Meo",
      "Inverted_Name": "Ná-Meo"
    },
    {
      "Id": "nep",
      "Print_Name": "Nepali (macrolanguage)",
      "Inverted_Name": "Nepali (macrolanguage)"
    },
    {
      "Id": "neq",
      "Print_Name": "North Central Mixe",
      "Inverted_Name": "Mixe, North Central"
    },
    {
      "Id": "ner",
      "Print_Name": "Yahadian",
      "Inverted_Name": "Yahadian"
    },
    {
      "Id": "nes",
      "Print_Name": "Bhoti Kinnauri",
      "Inverted_Name": "Kinnauri, Bhoti"
    },
    {
      "Id": "net",
      "Print_Name": "Nete",
      "Inverted_Name": "Nete"
    },
    {
      "Id": "neu",
      "Print_Name": "Neo",
      "Inverted_Name": "Neo"
    },
    {
      "Id": "nev",
      "Print_Name": "Nyaheun",
      "Inverted_Name": "Nyaheun"
    },
    {
      "Id": "new",
      "Print_Name": "Nepal Bhasa",
      "Inverted_Name": "Bhasa, Nepal"
    },
    {
      "Id": "new",
      "Print_Name": "Newari",
      "Inverted_Name": "Newari"
    },
    {
      "Id": "nex",
      "Print_Name": "Neme",
      "Inverted_Name": "Neme"
    },
    {
      "Id": "ney",
      "Print_Name": "Neyo",
      "Inverted_Name": "Neyo"
    },
    {
      "Id": "nez",
      "Print_Name": "Nez Perce",
      "Inverted_Name": "Nez Perce"
    },
    {
      "Id": "nfa",
      "Print_Name": "Dhao",
      "Inverted_Name": "Dhao"
    },
    {
      "Id": "nfd",
      "Print_Name": "Ahwai",
      "Inverted_Name": "Ahwai"
    },
    {
      "Id": "nfl",
      "Print_Name": "Äiwoo",
      "Inverted_Name": "Äiwoo"
    },
    {
      "Id": "nfl",
      "Print_Name": "Ayiwo",
      "Inverted_Name": "Ayiwo"
    },
    {
      "Id": "nfr",
      "Print_Name": "Nafaanra",
      "Inverted_Name": "Nafaanra"
    },
    {
      "Id": "nfu",
      "Print_Name": "Mfumte",
      "Inverted_Name": "Mfumte"
    },
    {
      "Id": "nga",
      "Print_Name": "Ngbaka",
      "Inverted_Name": "Ngbaka"
    },
    {
      "Id": "ngb",
      "Print_Name": "Northern Ngbandi",
      "Inverted_Name": "Ngbandi, Northern"
    },
    {
      "Id": "ngc",
      "Print_Name": "Ngombe (Democratic Republic of Congo)",
      "Inverted_Name": "Ngombe (Democratic Republic of Congo)"
    },
    {
      "Id": "ngd",
      "Print_Name": "Ngando (Central African Republic)",
      "Inverted_Name": "Ngando (Central African Republic)"
    },
    {
      "Id": "nge",
      "Print_Name": "Ngemba",
      "Inverted_Name": "Ngemba"
    },
    {
      "Id": "ngg",
      "Print_Name": "Ngbaka Manza",
      "Inverted_Name": "Ngbaka Manza"
    },
    {
      "Id": "ngh",
      "Print_Name": "Nǁng",
      "Inverted_Name": "Nǁng"
    },
    {
      "Id": "ngi",
      "Print_Name": "Ngizim",
      "Inverted_Name": "Ngizim"
    },
    {
      "Id": "ngj",
      "Print_Name": "Ngie",
      "Inverted_Name": "Ngie"
    },
    {
      "Id": "ngk",
      "Print_Name": "Dalabon",
      "Inverted_Name": "Dalabon"
    },
    {
      "Id": "ngl",
      "Print_Name": "Lomwe",
      "Inverted_Name": "Lomwe"
    },
    {
      "Id": "ngm",
      "Print_Name": "Ngatik Men's Creole",
      "Inverted_Name": "Ngatik Men's Creole"
    },
    {
      "Id": "ngn",
      "Print_Name": "Ngwo",
      "Inverted_Name": "Ngwo"
    },
    {
      "Id": "ngp",
      "Print_Name": "Ngulu",
      "Inverted_Name": "Ngulu"
    },
    {
      "Id": "ngq",
      "Print_Name": "Ngoreme",
      "Inverted_Name": "Ngoreme"
    },
    {
      "Id": "ngq",
      "Print_Name": "Ngurimi",
      "Inverted_Name": "Ngurimi"
    },
    {
      "Id": "ngr",
      "Print_Name": "Engdewu",
      "Inverted_Name": "Engdewu"
    },
    {
      "Id": "ngs",
      "Print_Name": "Gvoko",
      "Inverted_Name": "Gvoko"
    },
    {
      "Id": "ngt",
      "Print_Name": "Kriang",
      "Inverted_Name": "Kriang"
    },
    {
      "Id": "ngt",
      "Print_Name": "Ngeq",
      "Inverted_Name": "Ngeq"
    },
    {
      "Id": "ngu",
      "Print_Name": "Guerrero Nahuatl",
      "Inverted_Name": "Nahuatl, Guerrero"
    },
    {
      "Id": "ngv",
      "Print_Name": "Nagumi",
      "Inverted_Name": "Nagumi"
    },
    {
      "Id": "ngw",
      "Print_Name": "Ngwaba",
      "Inverted_Name": "Ngwaba"
    },
    {
      "Id": "ngx",
      "Print_Name": "Nggwahyi",
      "Inverted_Name": "Nggwahyi"
    },
    {
      "Id": "ngy",
      "Print_Name": "Tibea",
      "Inverted_Name": "Tibea"
    },
    {
      "Id": "ngz",
      "Print_Name": "Ngungwel",
      "Inverted_Name": "Ngungwel"
    },
    {
      "Id": "nha",
      "Print_Name": "Nhanda",
      "Inverted_Name": "Nhanda"
    },
    {
      "Id": "nhb",
      "Print_Name": "Beng",
      "Inverted_Name": "Beng"
    },
    {
      "Id": "nhc",
      "Print_Name": "Tabasco Nahuatl",
      "Inverted_Name": "Nahuatl, Tabasco"
    },
    {
      "Id": "nhd",
      "Print_Name": "Ava Guaraní",
      "Inverted_Name": "Guaraní, Ava"
    },
    {
      "Id": "nhd",
      "Print_Name": "Chiripá",
      "Inverted_Name": "Chiripá"
    },
    {
      "Id": "nhe",
      "Print_Name": "Eastern Huasteca Nahuatl",
      "Inverted_Name": "Nahuatl, Eastern Huasteca"
    },
    {
      "Id": "nhf",
      "Print_Name": "Nhuwala",
      "Inverted_Name": "Nhuwala"
    },
    {
      "Id": "nhg",
      "Print_Name": "Tetelcingo Nahuatl",
      "Inverted_Name": "Nahuatl, Tetelcingo"
    },
    {
      "Id": "nhh",
      "Print_Name": "Nahari",
      "Inverted_Name": "Nahari"
    },
    {
      "Id": "nhi",
      "Print_Name": "Zacatlán-Ahuacatlán-Tepetzintla Nahuatl",
      "Inverted_Name": "Nahuatl, Zacatlán-Ahuacatlán-Tepetzintla"
    },
    {
      "Id": "nhk",
      "Print_Name": "Isthmus-Cosoleacaque Nahuatl",
      "Inverted_Name": "Nahuatl, Isthmus-Cosoleacaque"
    },
    {
      "Id": "nhm",
      "Print_Name": "Morelos Nahuatl",
      "Inverted_Name": "Nahuatl, Morelos"
    },
    {
      "Id": "nhn",
      "Print_Name": "Central Nahuatl",
      "Inverted_Name": "Nahuatl, Central"
    },
    {
      "Id": "nho",
      "Print_Name": "Takuu",
      "Inverted_Name": "Takuu"
    },
    {
      "Id": "nhp",
      "Print_Name": "Isthmus-Pajapan Nahuatl",
      "Inverted_Name": "Nahuatl, Isthmus-Pajapan"
    },
    {
      "Id": "nhq",
      "Print_Name": "Huaxcaleca Nahuatl",
      "Inverted_Name": "Nahuatl, Huaxcaleca"
    },
    {
      "Id": "nhr",
      "Print_Name": "Naro",
      "Inverted_Name": "Naro"
    },
    {
      "Id": "nht",
      "Print_Name": "Ometepec Nahuatl",
      "Inverted_Name": "Nahuatl, Ometepec"
    },
    {
      "Id": "nhu",
      "Print_Name": "Noone",
      "Inverted_Name": "Noone"
    },
    {
      "Id": "nhv",
      "Print_Name": "Temascaltepec Nahuatl",
      "Inverted_Name": "Nahuatl, Temascaltepec"
    },
    {
      "Id": "nhw",
      "Print_Name": "Western Huasteca Nahuatl",
      "Inverted_Name": "Nahuatl, Western Huasteca"
    },
    {
      "Id": "nhx",
      "Print_Name": "Isthmus-Mecayapan Nahuatl",
      "Inverted_Name": "Nahuatl, Isthmus-Mecayapan"
    },
    {
      "Id": "nhy",
      "Print_Name": "Northern Oaxaca Nahuatl",
      "Inverted_Name": "Nahuatl, Northern Oaxaca"
    },
    {
      "Id": "nhz",
      "Print_Name": "Santa María La Alta Nahuatl",
      "Inverted_Name": "Nahuatl, Santa María La Alta"
    },
    {
      "Id": "nia",
      "Print_Name": "Nias",
      "Inverted_Name": "Nias"
    },
    {
      "Id": "nib",
      "Print_Name": "Nakame",
      "Inverted_Name": "Nakame"
    },
    {
      "Id": "nid",
      "Print_Name": "Ngandi",
      "Inverted_Name": "Ngandi"
    },
    {
      "Id": "nie",
      "Print_Name": "Niellim",
      "Inverted_Name": "Niellim"
    },
    {
      "Id": "nif",
      "Print_Name": "Nek",
      "Inverted_Name": "Nek"
    },
    {
      "Id": "nig",
      "Print_Name": "Ngalakgan",
      "Inverted_Name": "Ngalakgan"
    },
    {
      "Id": "nih",
      "Print_Name": "Nyiha (Tanzania)",
      "Inverted_Name": "Nyiha (Tanzania)"
    },
    {
      "Id": "nii",
      "Print_Name": "Nii",
      "Inverted_Name": "Nii"
    },
    {
      "Id": "nij",
      "Print_Name": "Ngaju",
      "Inverted_Name": "Ngaju"
    },
    {
      "Id": "nik",
      "Print_Name": "Southern Nicobarese",
      "Inverted_Name": "Nicobarese, Southern"
    },
    {
      "Id": "nil",
      "Print_Name": "Nila",
      "Inverted_Name": "Nila"
    },
    {
      "Id": "nim",
      "Print_Name": "Nilamba",
      "Inverted_Name": "Nilamba"
    },
    {
      "Id": "nin",
      "Print_Name": "Ninzo",
      "Inverted_Name": "Ninzo"
    },
    {
      "Id": "nio",
      "Print_Name": "Nganasan",
      "Inverted_Name": "Nganasan"
    },
    {
      "Id": "niq",
      "Print_Name": "Nandi",
      "Inverted_Name": "Nandi"
    },
    {
      "Id": "nir",
      "Print_Name": "Nimboran",
      "Inverted_Name": "Nimboran"
    },
    {
      "Id": "nis",
      "Print_Name": "Nimi",
      "Inverted_Name": "Nimi"
    },
    {
      "Id": "nit",
      "Print_Name": "Southeastern Kolami",
      "Inverted_Name": "Kolami, Southeastern"
    },
    {
      "Id": "niu",
      "Print_Name": "Niuean",
      "Inverted_Name": "Niuean"
    },
    {
      "Id": "niv",
      "Print_Name": "Gilyak",
      "Inverted_Name": "Gilyak"
    },
    {
      "Id": "niw",
      "Print_Name": "Nimo",
      "Inverted_Name": "Nimo"
    },
    {
      "Id": "nix",
      "Print_Name": "Hema",
      "Inverted_Name": "Hema"
    },
    {
      "Id": "niy",
      "Print_Name": "Ngiti",
      "Inverted_Name": "Ngiti"
    },
    {
      "Id": "niz",
      "Print_Name": "Ningil",
      "Inverted_Name": "Ningil"
    },
    {
      "Id": "nja",
      "Print_Name": "Nzanyi",
      "Inverted_Name": "Nzanyi"
    },
    {
      "Id": "njb",
      "Print_Name": "Nocte Naga",
      "Inverted_Name": "Naga, Nocte"
    },
    {
      "Id": "njd",
      "Print_Name": "Ndonde Hamba",
      "Inverted_Name": "Ndonde Hamba"
    },
    {
      "Id": "njh",
      "Print_Name": "Lotha Naga",
      "Inverted_Name": "Naga, Lotha"
    },
    {
      "Id": "nji",
      "Print_Name": "Gudanji",
      "Inverted_Name": "Gudanji"
    },
    {
      "Id": "njj",
      "Print_Name": "Njen",
      "Inverted_Name": "Njen"
    },
    {
      "Id": "njl",
      "Print_Name": "Njalgulgule",
      "Inverted_Name": "Njalgulgule"
    },
    {
      "Id": "njm",
      "Print_Name": "Angami Naga",
      "Inverted_Name": "Naga, Angami"
    },
    {
      "Id": "njn",
      "Print_Name": "Liangmai Naga",
      "Inverted_Name": "Naga, Liangmai"
    },
    {
      "Id": "njo",
      "Print_Name": "Ao Naga",
      "Inverted_Name": "Naga, Ao"
    },
    {
      "Id": "njr",
      "Print_Name": "Njerep",
      "Inverted_Name": "Njerep"
    },
    {
      "Id": "njs",
      "Print_Name": "Nisa",
      "Inverted_Name": "Nisa"
    },
    {
      "Id": "njt",
      "Print_Name": "Ndyuka-Trio Pidgin",
      "Inverted_Name": "Ndyuka-Trio Pidgin"
    },
    {
      "Id": "nju",
      "Print_Name": "Ngadjunmaya",
      "Inverted_Name": "Ngadjunmaya"
    },
    {
      "Id": "njx",
      "Print_Name": "Kunyi",
      "Inverted_Name": "Kunyi"
    },
    {
      "Id": "njy",
      "Print_Name": "Njyem",
      "Inverted_Name": "Njyem"
    },
    {
      "Id": "njz",
      "Print_Name": "Nyishi",
      "Inverted_Name": "Nyishi"
    },
    {
      "Id": "nka",
      "Print_Name": "Nkoya",
      "Inverted_Name": "Nkoya"
    },
    {
      "Id": "nkb",
      "Print_Name": "Khoibu Naga",
      "Inverted_Name": "Naga, Khoibu"
    },
    {
      "Id": "nkc",
      "Print_Name": "Nkongho",
      "Inverted_Name": "Nkongho"
    },
    {
      "Id": "nkd",
      "Print_Name": "Koireng",
      "Inverted_Name": "Koireng"
    },
    {
      "Id": "nke",
      "Print_Name": "Duke",
      "Inverted_Name": "Duke"
    },
    {
      "Id": "nkf",
      "Print_Name": "Inpui Naga",
      "Inverted_Name": "Naga, Inpui"
    },
    {
      "Id": "nkg",
      "Print_Name": "Nekgini",
      "Inverted_Name": "Nekgini"
    },
    {
      "Id": "nkh",
      "Print_Name": "Khezha Naga",
      "Inverted_Name": "Naga, Khezha"
    },
    {
      "Id": "nki",
      "Print_Name": "Thangal Naga",
      "Inverted_Name": "Naga, Thangal"
    },
    {
      "Id": "nkj",
      "Print_Name": "Nakai",
      "Inverted_Name": "Nakai"
    },
    {
      "Id": "nkk",
      "Print_Name": "Nokuku",
      "Inverted_Name": "Nokuku"
    },
    {
      "Id": "nkm",
      "Print_Name": "Namat",
      "Inverted_Name": "Namat"
    },
    {
      "Id": "nkn",
      "Print_Name": "Nkangala",
      "Inverted_Name": "Nkangala"
    },
    {
      "Id": "nko",
      "Print_Name": "Nkonya",
      "Inverted_Name": "Nkonya"
    },
    {
      "Id": "nkp",
      "Print_Name": "Niuatoputapu",
      "Inverted_Name": "Niuatoputapu"
    },
    {
      "Id": "nkq",
      "Print_Name": "Nkami",
      "Inverted_Name": "Nkami"
    },
    {
      "Id": "nkr",
      "Print_Name": "Nukuoro",
      "Inverted_Name": "Nukuoro"
    },
    {
      "Id": "nks",
      "Print_Name": "North Asmat",
      "Inverted_Name": "Asmat, North"
    },
    {
      "Id": "nkt",
      "Print_Name": "Nyika (Tanzania)",
      "Inverted_Name": "Nyika (Tanzania)"
    },
    {
      "Id": "nku",
      "Print_Name": "Bouna Kulango",
      "Inverted_Name": "Kulango, Bouna"
    },
    {
      "Id": "nkv",
      "Print_Name": "Nyika (Malawi and Zambia)",
      "Inverted_Name": "Nyika (Malawi and Zambia)"
    },
    {
      "Id": "nkw",
      "Print_Name": "Nkutu",
      "Inverted_Name": "Nkutu"
    },
    {
      "Id": "nkx",
      "Print_Name": "Nkoroo",
      "Inverted_Name": "Nkoroo"
    },
    {
      "Id": "nkz",
      "Print_Name": "Nkari",
      "Inverted_Name": "Nkari"
    },
    {
      "Id": "nla",
      "Print_Name": "Ngombale",
      "Inverted_Name": "Ngombale"
    },
    {
      "Id": "nlc",
      "Print_Name": "Nalca",
      "Inverted_Name": "Nalca"
    },
    {
      "Id": "nld",
      "Print_Name": "Dutch",
      "Inverted_Name": "Dutch"
    },
    {
      "Id": "nld",
      "Print_Name": "Flemish",
      "Inverted_Name": "Flemish"
    },
    {
      "Id": "nle",
      "Print_Name": "East Nyala",
      "Inverted_Name": "Nyala, East"
    },
    {
      "Id": "nlg",
      "Print_Name": "Gela",
      "Inverted_Name": "Gela"
    },
    {
      "Id": "nli",
      "Print_Name": "Grangali",
      "Inverted_Name": "Grangali"
    },
    {
      "Id": "nlj",
      "Print_Name": "Nyali",
      "Inverted_Name": "Nyali"
    },
    {
      "Id": "nlk",
      "Print_Name": "Ninia Yali",
      "Inverted_Name": "Yali, Ninia"
    },
    {
      "Id": "nll",
      "Print_Name": "Nihali",
      "Inverted_Name": "Nihali"
    },
    {
      "Id": "nlm",
      "Print_Name": "Mankiyali",
      "Inverted_Name": "Mankiyali"
    },
    {
      "Id": "nlo",
      "Print_Name": "Ngul",
      "Inverted_Name": "Ngul"
    },
    {
      "Id": "nlq",
      "Print_Name": "Lao Naga",
      "Inverted_Name": "Naga, Lao"
    },
    {
      "Id": "nlu",
      "Print_Name": "Nchumbulu",
      "Inverted_Name": "Nchumbulu"
    },
    {
      "Id": "nlv",
      "Print_Name": "Orizaba Nahuatl",
      "Inverted_Name": "Nahuatl, Orizaba"
    },
    {
      "Id": "nlw",
      "Print_Name": "Walangama",
      "Inverted_Name": "Walangama"
    },
    {
      "Id": "nlx",
      "Print_Name": "Nahali",
      "Inverted_Name": "Nahali"
    },
    {
      "Id": "nly",
      "Print_Name": "Nyamal",
      "Inverted_Name": "Nyamal"
    },
    {
      "Id": "nlz",
      "Print_Name": "Nalögo",
      "Inverted_Name": "Nalögo"
    },
    {
      "Id": "nma",
      "Print_Name": "Maram Naga",
      "Inverted_Name": "Naga, Maram"
    },
    {
      "Id": "nmb",
      "Print_Name": "Big Nambas",
      "Inverted_Name": "Nambas, Big"
    },
    {
      "Id": "nmb",
      "Print_Name": "V'ënen Taut",
      "Inverted_Name": "V'ënen Taut"
    },
    {
      "Id": "nmc",
      "Print_Name": "Ngam",
      "Inverted_Name": "Ngam"
    },
    {
      "Id": "nmd",
      "Print_Name": "Ndumu",
      "Inverted_Name": "Ndumu"
    },
    {
      "Id": "nme",
      "Print_Name": "Mzieme Naga",
      "Inverted_Name": "Naga, Mzieme"
    },
    {
      "Id": "nmf",
      "Print_Name": "Tangkhul Naga (India)",
      "Inverted_Name": "Naga, Tangkhul (India)"
    },
    {
      "Id": "nmg",
      "Print_Name": "Kwasio",
      "Inverted_Name": "Kwasio"
    },
    {
      "Id": "nmh",
      "Print_Name": "Monsang Naga",
      "Inverted_Name": "Naga, Monsang"
    },
    {
      "Id": "nmi",
      "Print_Name": "Nyam",
      "Inverted_Name": "Nyam"
    },
    {
      "Id": "nmj",
      "Print_Name": "Ngombe (Central African Republic)",
      "Inverted_Name": "Ngombe (Central African Republic)"
    },
    {
      "Id": "nmk",
      "Print_Name": "Namakura",
      "Inverted_Name": "Namakura"
    },
    {
      "Id": "nml",
      "Print_Name": "Ndemli",
      "Inverted_Name": "Ndemli"
    },
    {
      "Id": "nmm",
      "Print_Name": "Manangba",
      "Inverted_Name": "Manangba"
    },
    {
      "Id": "nmn",
      "Print_Name": "ǃXóõ",
      "Inverted_Name": "ǃXóõ"
    },
    {
      "Id": "nmo",
      "Print_Name": "Moyon Naga",
      "Inverted_Name": "Naga, Moyon"
    },
    {
      "Id": "nmp",
      "Print_Name": "Nimanbur",
      "Inverted_Name": "Nimanbur"
    },
    {
      "Id": "nmq",
      "Print_Name": "Nambya",
      "Inverted_Name": "Nambya"
    },
    {
      "Id": "nmr",
      "Print_Name": "Nimbari",
      "Inverted_Name": "Nimbari"
    },
    {
      "Id": "nms",
      "Print_Name": "Letemboi",
      "Inverted_Name": "Letemboi"
    },
    {
      "Id": "nmt",
      "Print_Name": "Namonuito",
      "Inverted_Name": "Namonuito"
    },
    {
      "Id": "nmu",
      "Print_Name": "Northeast Maidu",
      "Inverted_Name": "Maidu, Northeast"
    },
    {
      "Id": "nmv",
      "Print_Name": "Ngamini",
      "Inverted_Name": "Ngamini"
    },
    {
      "Id": "nmw",
      "Print_Name": "Nimoa",
      "Inverted_Name": "Nimoa"
    },
    {
      "Id": "nmw",
      "Print_Name": "Rifao",
      "Inverted_Name": "Rifao"
    },
    {
      "Id": "nmx",
      "Print_Name": "Nama (Papua New Guinea)",
      "Inverted_Name": "Nama (Papua New Guinea)"
    },
    {
      "Id": "nmy",
      "Print_Name": "Namuyi",
      "Inverted_Name": "Namuyi"
    },
    {
      "Id": "nmz",
      "Print_Name": "Nawdm",
      "Inverted_Name": "Nawdm"
    },
    {
      "Id": "nna",
      "Print_Name": "Nyangumarta",
      "Inverted_Name": "Nyangumarta"
    },
    {
      "Id": "nnb",
      "Print_Name": "Nande",
      "Inverted_Name": "Nande"
    },
    {
      "Id": "nnc",
      "Print_Name": "Nancere",
      "Inverted_Name": "Nancere"
    },
    {
      "Id": "nnd",
      "Print_Name": "West Ambae",
      "Inverted_Name": "Ambae, West"
    },
    {
      "Id": "nne",
      "Print_Name": "Ngandyera",
      "Inverted_Name": "Ngandyera"
    },
    {
      "Id": "nnf",
      "Print_Name": "Ngaing",
      "Inverted_Name": "Ngaing"
    },
    {
      "Id": "nng",
      "Print_Name": "Maring Naga",
      "Inverted_Name": "Naga, Maring"
    },
    {
      "Id": "nnh",
      "Print_Name": "Ngiemboon",
      "Inverted_Name": "Ngiemboon"
    },
    {
      "Id": "nni",
      "Print_Name": "North Nuaulu",
      "Inverted_Name": "Nuaulu, North"
    },
    {
      "Id": "nnj",
      "Print_Name": "Nyangatom",
      "Inverted_Name": "Nyangatom"
    },
    {
      "Id": "nnk",
      "Print_Name": "Nankina",
      "Inverted_Name": "Nankina"
    },
    {
      "Id": "nnl",
      "Print_Name": "Northern Rengma Naga",
      "Inverted_Name": "Naga, Northern Rengma"
    },
    {
      "Id": "nnm",
      "Print_Name": "Namia",
      "Inverted_Name": "Namia"
    },
    {
      "Id": "nnn",
      "Print_Name": "Ngete",
      "Inverted_Name": "Ngete"
    },
    {
      "Id": "nno",
      "Print_Name": "Norwegian Nynorsk",
      "Inverted_Name": "Norwegian Nynorsk"
    },
    {
      "Id": "nnp",
      "Print_Name": "Wancho Naga",
      "Inverted_Name": "Naga, Wancho"
    },
    {
      "Id": "nnq",
      "Print_Name": "Ngindo",
      "Inverted_Name": "Ngindo"
    },
    {
      "Id": "nnr",
      "Print_Name": "Narungga",
      "Inverted_Name": "Narungga"
    },
    {
      "Id": "nnt",
      "Print_Name": "Nanticoke",
      "Inverted_Name": "Nanticoke"
    },
    {
      "Id": "nnu",
      "Print_Name": "Dwang",
      "Inverted_Name": "Dwang"
    },
    {
      "Id": "nnv",
      "Print_Name": "Nugunu (Australia)",
      "Inverted_Name": "Nugunu (Australia)"
    },
    {
      "Id": "nnw",
      "Print_Name": "Southern Nuni",
      "Inverted_Name": "Nuni, Southern"
    },
    {
      "Id": "nny",
      "Print_Name": "Nyangga",
      "Inverted_Name": "Nyangga"
    },
    {
      "Id": "nnz",
      "Print_Name": "Nda'nda'",
      "Inverted_Name": "Nda'nda'"
    },
    {
      "Id": "noa",
      "Print_Name": "Woun Meu",
      "Inverted_Name": "Woun Meu"
    },
    {
      "Id": "nob",
      "Print_Name": "Norwegian Bokmål",
      "Inverted_Name": "Norwegian Bokmål"
    },
    {
      "Id": "noc",
      "Print_Name": "Nuk",
      "Inverted_Name": "Nuk"
    },
    {
      "Id": "nod",
      "Print_Name": "Northern Thai",
      "Inverted_Name": "Thai, Northern"
    },
    {
      "Id": "noe",
      "Print_Name": "Nimadi",
      "Inverted_Name": "Nimadi"
    },
    {
      "Id": "nof",
      "Print_Name": "Nomane",
      "Inverted_Name": "Nomane"
    },
    {
      "Id": "nog",
      "Print_Name": "Nogai",
      "Inverted_Name": "Nogai"
    },
    {
      "Id": "noh",
      "Print_Name": "Nomu",
      "Inverted_Name": "Nomu"
    },
    {
      "Id": "noi",
      "Print_Name": "Noiri",
      "Inverted_Name": "Noiri"
    },
    {
      "Id": "noj",
      "Print_Name": "Nonuya",
      "Inverted_Name": "Nonuya"
    },
    {
      "Id": "nok",
      "Print_Name": "Nooksack",
      "Inverted_Name": "Nooksack"
    },
    {
      "Id": "nol",
      "Print_Name": "Nomlaki",
      "Inverted_Name": "Nomlaki"
    },
    {
      "Id": "non",
      "Print_Name": "Old Norse",
      "Inverted_Name": "Norse, Old"
    },
    {
      "Id": "nop",
      "Print_Name": "Numanggang",
      "Inverted_Name": "Numanggang"
    },
    {
      "Id": "noq",
      "Print_Name": "Ngongo",
      "Inverted_Name": "Ngongo"
    },
    {
      "Id": "nor",
      "Print_Name": "Norwegian",
      "Inverted_Name": "Norwegian"
    },
    {
      "Id": "nos",
      "Print_Name": "Eastern Nisu",
      "Inverted_Name": "Nisu, Eastern"
    },
    {
      "Id": "not",
      "Print_Name": "Nomatsiguenga",
      "Inverted_Name": "Nomatsiguenga"
    },
    {
      "Id": "nou",
      "Print_Name": "Ewage-Notu",
      "Inverted_Name": "Ewage-Notu"
    },
    {
      "Id": "nov",
      "Print_Name": "Novial",
      "Inverted_Name": "Novial"
    },
    {
      "Id": "now",
      "Print_Name": "Nyambo",
      "Inverted_Name": "Nyambo"
    },
    {
      "Id": "noy",
      "Print_Name": "Noy",
      "Inverted_Name": "Noy"
    },
    {
      "Id": "noz",
      "Print_Name": "Nayi",
      "Inverted_Name": "Nayi"
    },
    {
      "Id": "npa",
      "Print_Name": "Nar Phu",
      "Inverted_Name": "Nar Phu"
    },
    {
      "Id": "npb",
      "Print_Name": "Nupbikha",
      "Inverted_Name": "Nupbikha"
    },
    {
      "Id": "npg",
      "Print_Name": "Ponyo-Gongwang Naga",
      "Inverted_Name": "Naga, Ponyo-Gongwang"
    },
    {
      "Id": "nph",
      "Print_Name": "Phom Naga",
      "Inverted_Name": "Naga, Phom"
    },
    {
      "Id": "npi",
      "Print_Name": "Nepali (individual language)",
      "Inverted_Name": "Nepali (individual language)"
    },
    {
      "Id": "npl",
      "Print_Name": "Southeastern Puebla Nahuatl",
      "Inverted_Name": "Nahuatl, Southeastern Puebla"
    },
    {
      "Id": "npn",
      "Print_Name": "Mondropolon",
      "Inverted_Name": "Mondropolon"
    },
    {
      "Id": "npo",
      "Print_Name": "Pochuri Naga",
      "Inverted_Name": "Naga, Pochuri"
    },
    {
      "Id": "nps",
      "Print_Name": "Nipsan",
      "Inverted_Name": "Nipsan"
    },
    {
      "Id": "npu",
      "Print_Name": "Puimei Naga",
      "Inverted_Name": "Naga, Puimei"
    },
    {
      "Id": "npx",
      "Print_Name": "Noipx",
      "Inverted_Name": "Noipx"
    },
    {
      "Id": "npy",
      "Print_Name": "Napu",
      "Inverted_Name": "Napu"
    },
    {
      "Id": "nqg",
      "Print_Name": "Southern Nago",
      "Inverted_Name": "Nago, Southern"
    },
    {
      "Id": "nqk",
      "Print_Name": "Kura Ede Nago",
      "Inverted_Name": "Ede Nago, Kura"
    },
    {
      "Id": "nql",
      "Print_Name": "Ngendelengo",
      "Inverted_Name": "Ngendelengo"
    },
    {
      "Id": "nqm",
      "Print_Name": "Ndom",
      "Inverted_Name": "Ndom"
    },
    {
      "Id": "nqn",
      "Print_Name": "Nen",
      "Inverted_Name": "Nen"
    },
    {
      "Id": "nqo",
      "Print_Name": "N'Ko",
      "Inverted_Name": "N'Ko"
    },
    {
      "Id": "nqq",
      "Print_Name": "Kyan-Karyaw Naga",
      "Inverted_Name": "Naga, Kyan-Karyaw"
    },
    {
      "Id": "nqt",
      "Print_Name": "Nteng",
      "Inverted_Name": "Nteng"
    },
    {
      "Id": "nqy",
      "Print_Name": "Akyaung Ari Naga",
      "Inverted_Name": "Naga, Akyaung Ari"
    },
    {
      "Id": "nra",
      "Print_Name": "Ngom",
      "Inverted_Name": "Ngom"
    },
    {
      "Id": "nrb",
      "Print_Name": "Nara",
      "Inverted_Name": "Nara"
    },
    {
      "Id": "nrc",
      "Print_Name": "Noric",
      "Inverted_Name": "Noric"
    },
    {
      "Id": "nre",
      "Print_Name": "Southern Rengma Naga",
      "Inverted_Name": "Naga, Southern Rengma"
    },
    {
      "Id": "nrf",
      "Print_Name": "Guernésiais",
      "Inverted_Name": "Guernésiais"
    },
    {
      "Id": "nrf",
      "Print_Name": "Jèrriais",
      "Inverted_Name": "Jèrriais"
    },
    {
      "Id": "nrg",
      "Print_Name": "Narango",
      "Inverted_Name": "Narango"
    },
    {
      "Id": "nri",
      "Print_Name": "Chokri Naga",
      "Inverted_Name": "Naga, Chokri"
    },
    {
      "Id": "nrk",
      "Print_Name": "Ngarla",
      "Inverted_Name": "Ngarla"
    },
    {
      "Id": "nrl",
      "Print_Name": "Ngarluma",
      "Inverted_Name": "Ngarluma"
    },
    {
      "Id": "nrm",
      "Print_Name": "Narom",
      "Inverted_Name": "Narom"
    },
    {
      "Id": "nrn",
      "Print_Name": "Norn",
      "Inverted_Name": "Norn"
    },
    {
      "Id": "nrp",
      "Print_Name": "North Picene",
      "Inverted_Name": "Picene, North"
    },
    {
      "Id": "nrr",
      "Print_Name": "Nora",
      "Inverted_Name": "Nora"
    },
    {
      "Id": "nrr",
      "Print_Name": "Norra",
      "Inverted_Name": "Norra"
    },
    {
      "Id": "nrt",
      "Print_Name": "Northern Kalapuya",
      "Inverted_Name": "Kalapuya, Northern"
    },
    {
      "Id": "nru",
      "Print_Name": "Narua",
      "Inverted_Name": "Narua"
    },
    {
      "Id": "nrx",
      "Print_Name": "Ngurmbur",
      "Inverted_Name": "Ngurmbur"
    },
    {
      "Id": "nrz",
      "Print_Name": "Lala",
      "Inverted_Name": "Lala"
    },
    {
      "Id": "nsa",
      "Print_Name": "Sangtam Naga",
      "Inverted_Name": "Naga, Sangtam"
    },
    {
      "Id": "nsb",
      "Print_Name": "Lower Nossob",
      "Inverted_Name": "Lower Nossob"
    },
    {
      "Id": "nsc",
      "Print_Name": "Nshi",
      "Inverted_Name": "Nshi"
    },
    {
      "Id": "nsd",
      "Print_Name": "Southern Nisu",
      "Inverted_Name": "Nisu, Southern"
    },
    {
      "Id": "nse",
      "Print_Name": "Nsenga",
      "Inverted_Name": "Nsenga"
    },
    {
      "Id": "nsf",
      "Print_Name": "Northwestern Nisu",
      "Inverted_Name": "Nisu, Northwestern"
    },
    {
      "Id": "nsg",
      "Print_Name": "Ngasa",
      "Inverted_Name": "Ngasa"
    },
    {
      "Id": "nsh",
      "Print_Name": "Ngoshie",
      "Inverted_Name": "Ngoshie"
    },
    {
      "Id": "nsi",
      "Print_Name": "Nigerian Sign Language",
      "Inverted_Name": "Nigerian Sign Language"
    },
    {
      "Id": "nsk",
      "Print_Name": "Naskapi",
      "Inverted_Name": "Naskapi"
    },
    {
      "Id": "nsl",
      "Print_Name": "Norwegian Sign Language",
      "Inverted_Name": "Norwegian Sign Language"
    },
    {
      "Id": "nsm",
      "Print_Name": "Sumi Naga",
      "Inverted_Name": "Naga, Sumi"
    },
    {
      "Id": "nsn",
      "Print_Name": "Nehan",
      "Inverted_Name": "Nehan"
    },
    {
      "Id": "nso",
      "Print_Name": "Northern Sotho",
      "Inverted_Name": "Sotho, Northern"
    },
    {
      "Id": "nso",
      "Print_Name": "Pedi",
      "Inverted_Name": "Pedi"
    },
    {
      "Id": "nso",
      "Print_Name": "Sepedi",
      "Inverted_Name": "Sepedi"
    },
    {
      "Id": "nsp",
      "Print_Name": "Nepalese Sign Language",
      "Inverted_Name": "Nepalese Sign Language"
    },
    {
      "Id": "nsq",
      "Print_Name": "Northern Sierra Miwok",
      "Inverted_Name": "Miwok, Northern Sierra"
    },
    {
      "Id": "nsr",
      "Print_Name": "Maritime Sign Language",
      "Inverted_Name": "Maritime Sign Language"
    },
    {
      "Id": "nss",
      "Print_Name": "Nali",
      "Inverted_Name": "Nali"
    },
    {
      "Id": "nst",
      "Print_Name": "Tase Naga",
      "Inverted_Name": "Naga, Tase"
    },
    {
      "Id": "nsu",
      "Print_Name": "Sierra Negra Nahuatl",
      "Inverted_Name": "Nahuatl, Sierra Negra"
    },
    {
      "Id": "nsv",
      "Print_Name": "Southwestern Nisu",
      "Inverted_Name": "Nisu, Southwestern"
    },
    {
      "Id": "nsw",
      "Print_Name": "Navut",
      "Inverted_Name": "Navut"
    },
    {
      "Id": "nsx",
      "Print_Name": "Nsongo",
      "Inverted_Name": "Nsongo"
    },
    {
      "Id": "nsy",
      "Print_Name": "Nasal",
      "Inverted_Name": "Nasal"
    },
    {
      "Id": "nsz",
      "Print_Name": "Nisenan",
      "Inverted_Name": "Nisenan"
    },
    {
      "Id": "ntd",
      "Print_Name": "Northern Tidung",
      "Inverted_Name": "Tidung, Northern"
    },
    {
      "Id": "nte",
      "Print_Name": "Nathembo",
      "Inverted_Name": "Nathembo"
    },
    {
      "Id": "ntg",
      "Print_Name": "Ngantangarra",
      "Inverted_Name": "Ngantangarra"
    },
    {
      "Id": "nti",
      "Print_Name": "Natioro",
      "Inverted_Name": "Natioro"
    },
    {
      "Id": "ntj",
      "Print_Name": "Ngaanyatjarra",
      "Inverted_Name": "Ngaanyatjarra"
    },
    {
      "Id": "ntk",
      "Print_Name": "Ikoma-Nata-Isenye",
      "Inverted_Name": "Ikoma-Nata-Isenye"
    },
    {
      "Id": "ntm",
      "Print_Name": "Nateni",
      "Inverted_Name": "Nateni"
    },
    {
      "Id": "nto",
      "Print_Name": "Ntomba",
      "Inverted_Name": "Ntomba"
    },
    {
      "Id": "ntp",
      "Print_Name": "Northern Tepehuan",
      "Inverted_Name": "Tepehuan, Northern"
    },
    {
      "Id": "ntr",
      "Print_Name": "Delo",
      "Inverted_Name": "Delo"
    },
    {
      "Id": "ntu",
      "Print_Name": "Natügu",
      "Inverted_Name": "Natügu"
    },
    {
      "Id": "ntw",
      "Print_Name": "Nottoway",
      "Inverted_Name": "Nottoway"
    },
    {
      "Id": "ntx",
      "Print_Name": "Tangkhul Naga (Myanmar)",
      "Inverted_Name": "Naga, Tangkhul (Myanmar)"
    },
    {
      "Id": "nty",
      "Print_Name": "Mantsi",
      "Inverted_Name": "Mantsi"
    },
    {
      "Id": "ntz",
      "Print_Name": "Natanzi",
      "Inverted_Name": "Natanzi"
    },
    {
      "Id": "nua",
      "Print_Name": "Yuanga",
      "Inverted_Name": "Yuanga"
    },
    {
      "Id": "nuc",
      "Print_Name": "Nukuini",
      "Inverted_Name": "Nukuini"
    },
    {
      "Id": "nud",
      "Print_Name": "Ngala",
      "Inverted_Name": "Ngala"
    },
    {
      "Id": "nue",
      "Print_Name": "Ngundu",
      "Inverted_Name": "Ngundu"
    },
    {
      "Id": "nuf",
      "Print_Name": "Nusu",
      "Inverted_Name": "Nusu"
    },
    {
      "Id": "nug",
      "Print_Name": "Nungali",
      "Inverted_Name": "Nungali"
    },
    {
      "Id": "nuh",
      "Print_Name": "Ndunda",
      "Inverted_Name": "Ndunda"
    },
    {
      "Id": "nui",
      "Print_Name": "Ngumbi",
      "Inverted_Name": "Ngumbi"
    },
    {
      "Id": "nuj",
      "Print_Name": "Nyole",
      "Inverted_Name": "Nyole"
    },
    {
      "Id": "nuk",
      "Print_Name": "Nuuchahnulth",
      "Inverted_Name": "Nuuchahnulth"
    },
    {
      "Id": "nuk",
      "Print_Name": "Nuu-chah-nulth",
      "Inverted_Name": "Nuu-chah-nulth"
    },
    {
      "Id": "nul",
      "Print_Name": "Nusa Laut",
      "Inverted_Name": "Nusa Laut"
    },
    {
      "Id": "num",
      "Print_Name": "Niuafo'ou",
      "Inverted_Name": "Niuafo'ou"
    },
    {
      "Id": "nun",
      "Print_Name": "Anong",
      "Inverted_Name": "Anong"
    },
    {
      "Id": "nuo",
      "Print_Name": "Nguôn",
      "Inverted_Name": "Nguôn"
    },
    {
      "Id": "nup",
      "Print_Name": "Nupe-Nupe-Tako",
      "Inverted_Name": "Nupe-Nupe-Tako"
    },
    {
      "Id": "nuq",
      "Print_Name": "Nukumanu",
      "Inverted_Name": "Nukumanu"
    },
    {
      "Id": "nur",
      "Print_Name": "Nukuria",
      "Inverted_Name": "Nukuria"
    },
    {
      "Id": "nus",
      "Print_Name": "Nuer",
      "Inverted_Name": "Nuer"
    },
    {
      "Id": "nut",
      "Print_Name": "Nung (Viet Nam)",
      "Inverted_Name": "Nung (Viet Nam)"
    },
    {
      "Id": "nuu",
      "Print_Name": "Ngbundu",
      "Inverted_Name": "Ngbundu"
    },
    {
      "Id": "nuv",
      "Print_Name": "Northern Nuni",
      "Inverted_Name": "Nuni, Northern"
    },
    {
      "Id": "nuw",
      "Print_Name": "Nguluwan",
      "Inverted_Name": "Nguluwan"
    },
    {
      "Id": "nux",
      "Print_Name": "Mehek",
      "Inverted_Name": "Mehek"
    },
    {
      "Id": "nuy",
      "Print_Name": "Nunggubuyu",
      "Inverted_Name": "Nunggubuyu"
    },
    {
      "Id": "nuz",
      "Print_Name": "Tlamacazapa Nahuatl",
      "Inverted_Name": "Nahuatl, Tlamacazapa"
    },
    {
      "Id": "nvh",
      "Print_Name": "Nasarian",
      "Inverted_Name": "Nasarian"
    },
    {
      "Id": "nvm",
      "Print_Name": "Namiae",
      "Inverted_Name": "Namiae"
    },
    {
      "Id": "nvo",
      "Print_Name": "Nyokon",
      "Inverted_Name": "Nyokon"
    },
    {
      "Id": "nwa",
      "Print_Name": "Nawathinehena",
      "Inverted_Name": "Nawathinehena"
    },
    {
      "Id": "nwb",
      "Print_Name": "Nyabwa",
      "Inverted_Name": "Nyabwa"
    },
    {
      "Id": "nwc",
      "Print_Name": "Classical Nepal Bhasa",
      "Inverted_Name": "Nepal Bhasa, Classical"
    },
    {
      "Id": "nwc",
      "Print_Name": "Classical Newari",
      "Inverted_Name": "Newari, Classical"
    },
    {
      "Id": "nwc",
      "Print_Name": "Old Newari",
      "Inverted_Name": "Newari, Old"
    },
    {
      "Id": "nwe",
      "Print_Name": "Ngwe",
      "Inverted_Name": "Ngwe"
    },
    {
      "Id": "nwg",
      "Print_Name": "Ngayawung",
      "Inverted_Name": "Ngayawung"
    },
    {
      "Id": "nwi",
      "Print_Name": "Southwest Tanna",
      "Inverted_Name": "Tanna, Southwest"
    },
    {
      "Id": "nwm",
      "Print_Name": "Nyamusa-Molo",
      "Inverted_Name": "Nyamusa-Molo"
    },
    {
      "Id": "nwo",
      "Print_Name": "Nauo",
      "Inverted_Name": "Nauo"
    },
    {
      "Id": "nwr",
      "Print_Name": "Nawaru",
      "Inverted_Name": "Nawaru"
    },
    {
      "Id": "nww",
      "Print_Name": "Ndwewe",
      "Inverted_Name": "Ndwewe"
    },
    {
      "Id": "nwx",
      "Print_Name": "Middle Newar",
      "Inverted_Name": "Newar, Middle"
    },
    {
      "Id": "nwy",
      "Print_Name": "Nottoway-Meherrin",
      "Inverted_Name": "Nottoway-Meherrin"
    },
    {
      "Id": "nxa",
      "Print_Name": "Nauete",
      "Inverted_Name": "Nauete"
    },
    {
      "Id": "nxd",
      "Print_Name": "Ngando (Democratic Republic of Congo)",
      "Inverted_Name": "Ngando (Democratic Republic of Congo)"
    },
    {
      "Id": "nxe",
      "Print_Name": "Nage",
      "Inverted_Name": "Nage"
    },
    {
      "Id": "nxg",
      "Print_Name": "Ngad'a",
      "Inverted_Name": "Ngad'a"
    },
    {
      "Id": "nxi",
      "Print_Name": "Nindi",
      "Inverted_Name": "Nindi"
    },
    {
      "Id": "nxk",
      "Print_Name": "Koki Naga",
      "Inverted_Name": "Naga, Koki"
    },
    {
      "Id": "nxl",
      "Print_Name": "South Nuaulu",
      "Inverted_Name": "Nuaulu, South"
    },
    {
      "Id": "nxm",
      "Print_Name": "Numidian",
      "Inverted_Name": "Numidian"
    },
    {
      "Id": "nxn",
      "Print_Name": "Ngawun",
      "Inverted_Name": "Ngawun"
    },
    {
      "Id": "nxo",
      "Print_Name": "Ndambomo",
      "Inverted_Name": "Ndambomo"
    },
    {
      "Id": "nxq",
      "Print_Name": "Naxi",
      "Inverted_Name": "Naxi"
    },
    {
      "Id": "nxr",
      "Print_Name": "Ninggerum",
      "Inverted_Name": "Ninggerum"
    },
    {
      "Id": "nxx",
      "Print_Name": "Nafri",
      "Inverted_Name": "Nafri"
    },
    {
      "Id": "nya",
      "Print_Name": "Chewa",
      "Inverted_Name": "Chewa"
    },
    {
      "Id": "nya",
      "Print_Name": "Chichewa",
      "Inverted_Name": "Chichewa"
    },
    {
      "Id": "nya",
      "Print_Name": "Nyanja",
      "Inverted_Name": "Nyanja"
    },
    {
      "Id": "nyb",
      "Print_Name": "Nyangbo",
      "Inverted_Name": "Nyangbo"
    },
    {
      "Id": "nyc",
      "Print_Name": "Nyanga-li",
      "Inverted_Name": "Nyanga-li"
    },
    {
      "Id": "nyd",
      "Print_Name": "Nyore",
      "Inverted_Name": "Nyore"
    },
    {
      "Id": "nyd",
      "Print_Name": "Olunyole",
      "Inverted_Name": "Olunyole"
    },
    {
      "Id": "nye",
      "Print_Name": "Nyengo",
      "Inverted_Name": "Nyengo"
    },
    {
      "Id": "nyf",
      "Print_Name": "Giryama",
      "Inverted_Name": "Giryama"
    },
    {
      "Id": "nyf",
      "Print_Name": "Kigiryama",
      "Inverted_Name": "Kigiryama"
    },
    {
      "Id": "nyg",
      "Print_Name": "Nyindu",
      "Inverted_Name": "Nyindu"
    },
    {
      "Id": "nyh",
      "Print_Name": "Nyikina",
      "Inverted_Name": "Nyikina"
    },
    {
      "Id": "nyi",
      "Print_Name": "Ama (Sudan)",
      "Inverted_Name": "Ama (Sudan)"
    },
    {
      "Id": "nyj",
      "Print_Name": "Nyanga",
      "Inverted_Name": "Nyanga"
    },
    {
      "Id": "nyk",
      "Print_Name": "Nyaneka",
      "Inverted_Name": "Nyaneka"
    },
    {
      "Id": "nyl",
      "Print_Name": "Nyeu",
      "Inverted_Name": "Nyeu"
    },
    {
      "Id": "nym",
      "Print_Name": "Nyamwezi",
      "Inverted_Name": "Nyamwezi"
    },
    {
      "Id": "nyn",
      "Print_Name": "Nyankole",
      "Inverted_Name": "Nyankole"
    },
    {
      "Id": "nyo",
      "Print_Name": "Nyoro",
      "Inverted_Name": "Nyoro"
    },
    {
      "Id": "nyp",
      "Print_Name": "Nyang'i",
      "Inverted_Name": "Nyang'i"
    },
    {
      "Id": "nyq",
      "Print_Name": "Nayini",
      "Inverted_Name": "Nayini"
    },
    {
      "Id": "nyr",
      "Print_Name": "Nyiha (Malawi)",
      "Inverted_Name": "Nyiha (Malawi)"
    },
    {
      "Id": "nys",
      "Print_Name": "Nyungar",
      "Inverted_Name": "Nyungar"
    },
    {
      "Id": "nyt",
      "Print_Name": "Nyawaygi",
      "Inverted_Name": "Nyawaygi"
    },
    {
      "Id": "nyu",
      "Print_Name": "Nyungwe",
      "Inverted_Name": "Nyungwe"
    },
    {
      "Id": "nyv",
      "Print_Name": "Nyulnyul",
      "Inverted_Name": "Nyulnyul"
    },
    {
      "Id": "nyw",
      "Print_Name": "Nyaw",
      "Inverted_Name": "Nyaw"
    },
    {
      "Id": "nyx",
      "Print_Name": "Nganyaywana",
      "Inverted_Name": "Nganyaywana"
    },
    {
      "Id": "nyy",
      "Print_Name": "Nyakyusa-Ngonde",
      "Inverted_Name": "Nyakyusa-Ngonde"
    },
    {
      "Id": "nza",
      "Print_Name": "Tigon Mbembe",
      "Inverted_Name": "Mbembe, Tigon"
    },
    {
      "Id": "nzb",
      "Print_Name": "Njebi",
      "Inverted_Name": "Njebi"
    },
    {
      "Id": "nzd",
      "Print_Name": "Nzadi",
      "Inverted_Name": "Nzadi"
    },
    {
      "Id": "nzi",
      "Print_Name": "Nzima",
      "Inverted_Name": "Nzima"
    },
    {
      "Id": "nzk",
      "Print_Name": "Nzakara",
      "Inverted_Name": "Nzakara"
    },
    {
      "Id": "nzm",
      "Print_Name": "Zeme Naga",
      "Inverted_Name": "Naga, Zeme"
    },
    {
      "Id": "nzr",
      "Print_Name": "Dir-Nyamzak-Mbarimi",
      "Inverted_Name": "Dir-Nyamzak-Mbarimi"
    },
    {
      "Id": "nzs",
      "Print_Name": "New Zealand Sign Language",
      "Inverted_Name": "New Zealand Sign Language"
    },
    {
      "Id": "nzu",
      "Print_Name": "Teke-Nzikou",
      "Inverted_Name": "Teke-Nzikou"
    },
    {
      "Id": "nzy",
      "Print_Name": "Nzakambay",
      "Inverted_Name": "Nzakambay"
    },
    {
      "Id": "nzz",
      "Print_Name": "Nanga Dama Dogon",
      "Inverted_Name": "Dogon, Nanga Dama"
    },
    {
      "Id": "oaa",
      "Print_Name": "Orok",
      "Inverted_Name": "Orok"
    },
    {
      "Id": "oac",
      "Print_Name": "Oroch",
      "Inverted_Name": "Oroch"
    },
    {
      "Id": "oar",
      "Print_Name": "Ancient Aramaic (up to 700 BCE)",
      "Inverted_Name": "Aramaic, Ancient (up to 700 BCE)"
    },
    {
      "Id": "oar",
      "Print_Name": "Old Aramaic (up to 700 BCE)",
      "Inverted_Name": "Aramaic, Old (up to 700 BCE)"
    },
    {
      "Id": "oav",
      "Print_Name": "Old Avar",
      "Inverted_Name": "Avar, Old"
    },
    {
      "Id": "obi",
      "Print_Name": "Obispeño",
      "Inverted_Name": "Obispeño"
    },
    {
      "Id": "obk",
      "Print_Name": "Southern Bontok",
      "Inverted_Name": "Bontok, Southern"
    },
    {
      "Id": "obl",
      "Print_Name": "Oblo",
      "Inverted_Name": "Oblo"
    },
    {
      "Id": "obm",
      "Print_Name": "Moabite",
      "Inverted_Name": "Moabite"
    },
    {
      "Id": "obo",
      "Print_Name": "Obo Manobo",
      "Inverted_Name": "Manobo, Obo"
    },
    {
      "Id": "obr",
      "Print_Name": "Old Burmese",
      "Inverted_Name": "Burmese, Old"
    },
    {
      "Id": "obt",
      "Print_Name": "Old Breton",
      "Inverted_Name": "Breton, Old"
    },
    {
      "Id": "obu",
      "Print_Name": "Obulom",
      "Inverted_Name": "Obulom"
    },
    {
      "Id": "oca",
      "Print_Name": "Ocaina",
      "Inverted_Name": "Ocaina"
    },
    {
      "Id": "och",
      "Print_Name": "Old Chinese",
      "Inverted_Name": "Chinese, Old"
    },
    {
      "Id": "oci",
      "Print_Name": "Occitan (post 1500)",
      "Inverted_Name": "Occitan (post 1500)"
    },
    {
      "Id": "ocm",
      "Print_Name": "Old Cham",
      "Inverted_Name": "Cham, Old"
    },
    {
      "Id": "oco",
      "Print_Name": "Old Cornish",
      "Inverted_Name": "Cornish, Old"
    },
    {
      "Id": "ocu",
      "Print_Name": "Atzingo Matlatzinca",
      "Inverted_Name": "Matlatzinca, Atzingo"
    },
    {
      "Id": "oda",
      "Print_Name": "Odut",
      "Inverted_Name": "Odut"
    },
    {
      "Id": "odk",
      "Print_Name": "Od",
      "Inverted_Name": "Od"
    },
    {
      "Id": "odt",
      "Print_Name": "Old Dutch",
      "Inverted_Name": "Dutch, Old"
    },
    {
      "Id": "odu",
      "Print_Name": "Odual",
      "Inverted_Name": "Odual"
    },
    {
      "Id": "ofo",
      "Print_Name": "Ofo",
      "Inverted_Name": "Ofo"
    },
    {
      "Id": "ofs",
      "Print_Name": "Old Frisian",
      "Inverted_Name": "Frisian, Old"
    },
    {
      "Id": "ofu",
      "Print_Name": "Efutop",
      "Inverted_Name": "Efutop"
    },
    {
      "Id": "ogb",
      "Print_Name": "Ogbia",
      "Inverted_Name": "Ogbia"
    },
    {
      "Id": "ogc",
      "Print_Name": "Ogbah",
      "Inverted_Name": "Ogbah"
    },
    {
      "Id": "oge",
      "Print_Name": "Old Georgian",
      "Inverted_Name": "Georgian, Old"
    },
    {
      "Id": "ogg",
      "Print_Name": "Ogbogolo",
      "Inverted_Name": "Ogbogolo"
    },
    {
      "Id": "ogo",
      "Print_Name": "Khana",
      "Inverted_Name": "Khana"
    },
    {
      "Id": "ogu",
      "Print_Name": "Ogbronuagum",
      "Inverted_Name": "Ogbronuagum"
    },
    {
      "Id": "oht",
      "Print_Name": "Old Hittite",
      "Inverted_Name": "Hittite, Old"
    },
    {
      "Id": "ohu",
      "Print_Name": "Old Hungarian",
      "Inverted_Name": "Hungarian, Old"
    },
    {
      "Id": "oia",
      "Print_Name": "Oirata",
      "Inverted_Name": "Oirata"
    },
    {
      "Id": "oie",
      "Print_Name": "Okolie",
      "Inverted_Name": "Okolie"
    },
    {
      "Id": "oin",
      "Print_Name": "Inebu One",
      "Inverted_Name": "One, Inebu"
    },
    {
      "Id": "ojb",
      "Print_Name": "Northwestern Ojibwa",
      "Inverted_Name": "Ojibwa, Northwestern"
    },
    {
      "Id": "ojc",
      "Print_Name": "Central Ojibwa",
      "Inverted_Name": "Ojibwa, Central"
    },
    {
      "Id": "ojg",
      "Print_Name": "Eastern Ojibwa",
      "Inverted_Name": "Ojibwa, Eastern"
    },
    {
      "Id": "oji",
      "Print_Name": "Ojibwa",
      "Inverted_Name": "Ojibwa"
    },
    {
      "Id": "ojp",
      "Print_Name": "Old Japanese",
      "Inverted_Name": "Japanese, Old"
    },
    {
      "Id": "ojs",
      "Print_Name": "Severn Ojibwa",
      "Inverted_Name": "Ojibwa, Severn"
    },
    {
      "Id": "ojv",
      "Print_Name": "Ontong Java",
      "Inverted_Name": "Ontong Java"
    },
    {
      "Id": "ojw",
      "Print_Name": "Western Ojibwa",
      "Inverted_Name": "Ojibwa, Western"
    },
    {
      "Id": "oka",
      "Print_Name": "Okanagan",
      "Inverted_Name": "Okanagan"
    },
    {
      "Id": "okb",
      "Print_Name": "Okobo",
      "Inverted_Name": "Okobo"
    },
    {
      "Id": "okc",
      "Print_Name": "Kobo",
      "Inverted_Name": "Kobo"
    },
    {
      "Id": "okd",
      "Print_Name": "Okodia",
      "Inverted_Name": "Okodia"
    },
    {
      "Id": "oke",
      "Print_Name": "Okpe (Southwestern Edo)",
      "Inverted_Name": "Okpe (Southwestern Edo)"
    },
    {
      "Id": "okg",
      "Print_Name": "Koko Babangk",
      "Inverted_Name": "Koko Babangk"
    },
    {
      "Id": "okh",
      "Print_Name": "Koresh-e Rostam",
      "Inverted_Name": "Koresh-e Rostam"
    },
    {
      "Id": "oki",
      "Print_Name": "Okiek",
      "Inverted_Name": "Okiek"
    },
    {
      "Id": "okj",
      "Print_Name": "Oko-Juwoi",
      "Inverted_Name": "Oko-Juwoi"
    },
    {
      "Id": "okk",
      "Print_Name": "Kwamtim One",
      "Inverted_Name": "One, Kwamtim"
    },
    {
      "Id": "okl",
      "Print_Name": "Old Kentish Sign Language",
      "Inverted_Name": "Kentish Sign Language, Old"
    },
    {
      "Id": "okm",
      "Print_Name": "Middle Korean (10th-16th cent.)",
      "Inverted_Name": "Korean, Middle (10th-16th cent.)"
    },
    {
      "Id": "okn",
      "Print_Name": "Oki-No-Erabu",
      "Inverted_Name": "Oki-No-Erabu"
    },
    {
      "Id": "oko",
      "Print_Name": "Old Korean (3rd-9th cent.)",
      "Inverted_Name": "Korean, Old (3rd-9th cent.)"
    },
    {
      "Id": "okr",
      "Print_Name": "Kirike",
      "Inverted_Name": "Kirike"
    },
    {
      "Id": "oks",
      "Print_Name": "Oko-Eni-Osayen",
      "Inverted_Name": "Oko-Eni-Osayen"
    },
    {
      "Id": "oku",
      "Print_Name": "Oku",
      "Inverted_Name": "Oku"
    },
    {
      "Id": "okv",
      "Print_Name": "Orokaiva",
      "Inverted_Name": "Orokaiva"
    },
    {
      "Id": "okx",
      "Print_Name": "Okpe (Northwestern Edo)",
      "Inverted_Name": "Okpe (Northwestern Edo)"
    },
    {
      "Id": "okz",
      "Print_Name": "Old Khmer",
      "Inverted_Name": "Khmer, Old"
    },
    {
      "Id": "ola",
      "Print_Name": "Walungge",
      "Inverted_Name": "Walungge"
    },
    {
      "Id": "old",
      "Print_Name": "Mochi",
      "Inverted_Name": "Mochi"
    },
    {
      "Id": "ole",
      "Print_Name": "Olekha",
      "Inverted_Name": "Olekha"
    },
    {
      "Id": "olk",
      "Print_Name": "Olkol",
      "Inverted_Name": "Olkol"
    },
    {
      "Id": "olm",
      "Print_Name": "Oloma",
      "Inverted_Name": "Oloma"
    },
    {
      "Id": "olo",
      "Print_Name": "Livvi",
      "Inverted_Name": "Livvi"
    },
    {
      "Id": "olr",
      "Print_Name": "Olrat",
      "Inverted_Name": "Olrat"
    },
    {
      "Id": "olt",
      "Print_Name": "Old Lithuanian",
      "Inverted_Name": "Lithuanian, Old"
    },
    {
      "Id": "olu",
      "Print_Name": "Kuvale",
      "Inverted_Name": "Kuvale"
    },
    {
      "Id": "oma",
      "Print_Name": "Omaha-Ponca",
      "Inverted_Name": "Omaha-Ponca"
    },
    {
      "Id": "omb",
      "Print_Name": "East Ambae",
      "Inverted_Name": "Ambae, East"
    },
    {
      "Id": "omc",
      "Print_Name": "Mochica",
      "Inverted_Name": "Mochica"
    },
    {
      "Id": "omg",
      "Print_Name": "Omagua",
      "Inverted_Name": "Omagua"
    },
    {
      "Id": "omi",
      "Print_Name": "Omi",
      "Inverted_Name": "Omi"
    },
    {
      "Id": "omk",
      "Print_Name": "Omok",
      "Inverted_Name": "Omok"
    },
    {
      "Id": "oml",
      "Print_Name": "Ombo",
      "Inverted_Name": "Ombo"
    },
    {
      "Id": "omn",
      "Print_Name": "Minoan",
      "Inverted_Name": "Minoan"
    },
    {
      "Id": "omo",
      "Print_Name": "Utarmbung",
      "Inverted_Name": "Utarmbung"
    },
    {
      "Id": "omp",
      "Print_Name": "Old Manipuri",
      "Inverted_Name": "Manipuri, Old"
    },
    {
      "Id": "omr",
      "Print_Name": "Old Marathi",
      "Inverted_Name": "Marathi, Old"
    },
    {
      "Id": "omt",
      "Print_Name": "Omotik",
      "Inverted_Name": "Omotik"
    },
    {
      "Id": "omu",
      "Print_Name": "Omurano",
      "Inverted_Name": "Omurano"
    },
    {
      "Id": "omw",
      "Print_Name": "South Tairora",
      "Inverted_Name": "Tairora, South"
    },
    {
      "Id": "omx",
      "Print_Name": "Old Mon",
      "Inverted_Name": "Mon, Old"
    },
    {
      "Id": "omy",
      "Print_Name": "Old Malay",
      "Inverted_Name": "Malay, Old"
    },
    {
      "Id": "ona",
      "Print_Name": "Ona",
      "Inverted_Name": "Ona"
    },
    {
      "Id": "onb",
      "Print_Name": "Lingao",
      "Inverted_Name": "Lingao"
    },
    {
      "Id": "one",
      "Print_Name": "Oneida",
      "Inverted_Name": "Oneida"
    },
    {
      "Id": "ong",
      "Print_Name": "Olo",
      "Inverted_Name": "Olo"
    },
    {
      "Id": "oni",
      "Print_Name": "Onin",
      "Inverted_Name": "Onin"
    },
    {
      "Id": "onj",
      "Print_Name": "Onjob",
      "Inverted_Name": "Onjob"
    },
    {
      "Id": "onk",
      "Print_Name": "Kabore One",
      "Inverted_Name": "One, Kabore"
    },
    {
      "Id": "onn",
      "Print_Name": "Onobasulu",
      "Inverted_Name": "Onobasulu"
    },
    {
      "Id": "ono",
      "Print_Name": "Onondaga",
      "Inverted_Name": "Onondaga"
    },
    {
      "Id": "onp",
      "Print_Name": "Sartang",
      "Inverted_Name": "Sartang"
    },
    {
      "Id": "onr",
      "Print_Name": "Northern One",
      "Inverted_Name": "One, Northern"
    },
    {
      "Id": "ons",
      "Print_Name": "Ono",
      "Inverted_Name": "Ono"
    },
    {
      "Id": "ont",
      "Print_Name": "Ontenu",
      "Inverted_Name": "Ontenu"
    },
    {
      "Id": "onu",
      "Print_Name": "Unua",
      "Inverted_Name": "Unua"
    },
    {
      "Id": "onw",
      "Print_Name": "Old Nubian",
      "Inverted_Name": "Nubian, Old"
    },
    {
      "Id": "onx",
      "Print_Name": "Onin Based Pidgin",
      "Inverted_Name": "Onin Based Pidgin"
    },
    {
      "Id": "ood",
      "Print_Name": "Tohono O'odham",
      "Inverted_Name": "Tohono O'odham"
    },
    {
      "Id": "oog",
      "Print_Name": "Ong",
      "Inverted_Name": "Ong"
    },
    {
      "Id": "oon",
      "Print_Name": "Önge",
      "Inverted_Name": "Önge"
    },
    {
      "Id": "oor",
      "Print_Name": "Oorlams",
      "Inverted_Name": "Oorlams"
    },
    {
      "Id": "oos",
      "Print_Name": "Old Ossetic",
      "Inverted_Name": "Ossetic, Old"
    },
    {
      "Id": "opa",
      "Print_Name": "Okpamheri",
      "Inverted_Name": "Okpamheri"
    },
    {
      "Id": "opk",
      "Print_Name": "Kopkaka",
      "Inverted_Name": "Kopkaka"
    },
    {
      "Id": "opm",
      "Print_Name": "Oksapmin",
      "Inverted_Name": "Oksapmin"
    },
    {
      "Id": "opo",
      "Print_Name": "Opao",
      "Inverted_Name": "Opao"
    },
    {
      "Id": "opt",
      "Print_Name": "Opata",
      "Inverted_Name": "Opata"
    },
    {
      "Id": "opy",
      "Print_Name": "Ofayé",
      "Inverted_Name": "Ofayé"
    },
    {
      "Id": "ora",
      "Print_Name": "Oroha",
      "Inverted_Name": "Oroha"
    },
    {
      "Id": "orc",
      "Print_Name": "Orma",
      "Inverted_Name": "Orma"
    },
    {
      "Id": "ore",
      "Print_Name": "Orejón",
      "Inverted_Name": "Orejón"
    },
    {
      "Id": "org",
      "Print_Name": "Oring",
      "Inverted_Name": "Oring"
    },
    {
      "Id": "orh",
      "Print_Name": "Oroqen",
      "Inverted_Name": "Oroqen"
    },
    {
      "Id": "ori",
      "Print_Name": "Oriya (macrolanguage)",
      "Inverted_Name": "Oriya (macrolanguage)"
    },
    {
      "Id": "orm",
      "Print_Name": "Oromo",
      "Inverted_Name": "Oromo"
    },
    {
      "Id": "orn",
      "Print_Name": "Orang Kanaq",
      "Inverted_Name": "Orang Kanaq"
    },
    {
      "Id": "oro",
      "Print_Name": "Orokolo",
      "Inverted_Name": "Orokolo"
    },
    {
      "Id": "orr",
      "Print_Name": "Oruma",
      "Inverted_Name": "Oruma"
    },
    {
      "Id": "ors",
      "Print_Name": "Orang Seletar",
      "Inverted_Name": "Orang Seletar"
    },
    {
      "Id": "ort",
      "Print_Name": "Adivasi Oriya",
      "Inverted_Name": "Oriya, Adivasi"
    },
    {
      "Id": "oru",
      "Print_Name": "Ormuri",
      "Inverted_Name": "Ormuri"
    },
    {
      "Id": "orv",
      "Print_Name": "Old Russian",
      "Inverted_Name": "Russian, Old"
    },
    {
      "Id": "orw",
      "Print_Name": "Oro Win",
      "Inverted_Name": "Oro Win"
    },
    {
      "Id": "orx",
      "Print_Name": "Oro",
      "Inverted_Name": "Oro"
    },
    {
      "Id": "ory",
      "Print_Name": "Odia",
      "Inverted_Name": "Odia"
    },
    {
      "Id": "ory",
      "Print_Name": "Oriya (individual language)",
      "Inverted_Name": "Oriya (individual language)"
    },
    {
      "Id": "orz",
      "Print_Name": "Ormu",
      "Inverted_Name": "Ormu"
    },
    {
      "Id": "osa",
      "Print_Name": "Osage",
      "Inverted_Name": "Osage"
    },
    {
      "Id": "osc",
      "Print_Name": "Oscan",
      "Inverted_Name": "Oscan"
    },
    {
      "Id": "osi",
      "Print_Name": "Osing",
      "Inverted_Name": "Osing"
    },
    {
      "Id": "osn",
      "Print_Name": "Old Sundanese",
      "Inverted_Name": "Sundanese, Old"
    },
    {
      "Id": "oso",
      "Print_Name": "Ososo",
      "Inverted_Name": "Ososo"
    },
    {
      "Id": "osp",
      "Print_Name": "Old Spanish",
      "Inverted_Name": "Spanish, Old"
    },
    {
      "Id": "oss",
      "Print_Name": "Ossetian",
      "Inverted_Name": "Ossetian"
    },
    {
      "Id": "oss",
      "Print_Name": "Ossetic",
      "Inverted_Name": "Ossetic"
    },
    {
      "Id": "ost",
      "Print_Name": "Osatu",
      "Inverted_Name": "Osatu"
    },
    {
      "Id": "osu",
      "Print_Name": "Southern One",
      "Inverted_Name": "One, Southern"
    },
    {
      "Id": "osx",
      "Print_Name": "Old Saxon",
      "Inverted_Name": "Saxon, Old"
    },
    {
      "Id": "ota",
      "Print_Name": "Ottoman Turkish (1500-1928)",
      "Inverted_Name": "Turkish, Ottoman (1500-1928)"
    },
    {
      "Id": "otb",
      "Print_Name": "Old Tibetan",
      "Inverted_Name": "Tibetan, Old"
    },
    {
      "Id": "otd",
      "Print_Name": "Ot Danum",
      "Inverted_Name": "Ot Danum"
    },
    {
      "Id": "ote",
      "Print_Name": "Mezquital Otomi",
      "Inverted_Name": "Otomi, Mezquital"
    },
    {
      "Id": "oti",
      "Print_Name": "Oti",
      "Inverted_Name": "Oti"
    },
    {
      "Id": "otk",
      "Print_Name": "Old Turkish",
      "Inverted_Name": "Turkish, Old"
    },
    {
      "Id": "otl",
      "Print_Name": "Tilapa Otomi",
      "Inverted_Name": "Otomi, Tilapa"
    },
    {
      "Id": "otm",
      "Print_Name": "Eastern Highland Otomi",
      "Inverted_Name": "Otomi, Eastern Highland"
    },
    {
      "Id": "otn",
      "Print_Name": "Tenango Otomi",
      "Inverted_Name": "Otomi, Tenango"
    },
    {
      "Id": "otq",
      "Print_Name": "Querétaro Otomi",
      "Inverted_Name": "Otomi, Querétaro"
    },
    {
      "Id": "otr",
      "Print_Name": "Otoro",
      "Inverted_Name": "Otoro"
    },
    {
      "Id": "ots",
      "Print_Name": "Estado de México Otomi",
      "Inverted_Name": "Otomi, Estado de México"
    },
    {
      "Id": "ott",
      "Print_Name": "Temoaya Otomi",
      "Inverted_Name": "Otomi, Temoaya"
    },
    {
      "Id": "otu",
      "Print_Name": "Otuke",
      "Inverted_Name": "Otuke"
    },
    {
      "Id": "otw",
      "Print_Name": "Ottawa",
      "Inverted_Name": "Ottawa"
    },
    {
      "Id": "otx",
      "Print_Name": "Texcatepec Otomi",
      "Inverted_Name": "Otomi, Texcatepec"
    },
    {
      "Id": "oty",
      "Print_Name": "Old Tamil",
      "Inverted_Name": "Tamil, Old"
    },
    {
      "Id": "otz",
      "Print_Name": "Ixtenco Otomi",
      "Inverted_Name": "Otomi, Ixtenco"
    },
    {
      "Id": "oua",
      "Print_Name": "Tagargrent",
      "Inverted_Name": "Tagargrent"
    },
    {
      "Id": "oub",
      "Print_Name": "Glio-Oubi",
      "Inverted_Name": "Glio-Oubi"
    },
    {
      "Id": "oue",
      "Print_Name": "Oune",
      "Inverted_Name": "Oune"
    },
    {
      "Id": "oui",
      "Print_Name": "Old Uighur",
      "Inverted_Name": "Uighur, Old"
    },
    {
      "Id": "oum",
      "Print_Name": "Ouma",
      "Inverted_Name": "Ouma"
    },
    {
      "Id": "ovd",
      "Print_Name": "Elfdalian",
      "Inverted_Name": "Elfdalian"
    },
    {
      "Id": "ovd",
      "Print_Name": "Övdalian",
      "Inverted_Name": "Övdalian"
    },
    {
      "Id": "owi",
      "Print_Name": "Owiniga",
      "Inverted_Name": "Owiniga"
    },
    {
      "Id": "owl",
      "Print_Name": "Old Welsh",
      "Inverted_Name": "Welsh, Old"
    },
    {
      "Id": "oyb",
      "Print_Name": "Oy",
      "Inverted_Name": "Oy"
    },
    {
      "Id": "oyd",
      "Print_Name": "Oyda",
      "Inverted_Name": "Oyda"
    },
    {
      "Id": "oym",
      "Print_Name": "Wayampi",
      "Inverted_Name": "Wayampi"
    },
    {
      "Id": "oyy",
      "Print_Name": "Oya'oya",
      "Inverted_Name": "Oya'oya"
    },
    {
      "Id": "ozm",
      "Print_Name": "Koonzime",
      "Inverted_Name": "Koonzime"
    },
    {
      "Id": "pab",
      "Print_Name": "Parecís",
      "Inverted_Name": "Parecís"
    },
    {
      "Id": "pac",
      "Print_Name": "Pacoh",
      "Inverted_Name": "Pacoh"
    },
    {
      "Id": "pad",
      "Print_Name": "Paumarí",
      "Inverted_Name": "Paumarí"
    },
    {
      "Id": "pae",
      "Print_Name": "Pagibete",
      "Inverted_Name": "Pagibete"
    },
    {
      "Id": "paf",
      "Print_Name": "Paranawát",
      "Inverted_Name": "Paranawát"
    },
    {
      "Id": "pag",
      "Print_Name": "Pangasinan",
      "Inverted_Name": "Pangasinan"
    },
    {
      "Id": "pah",
      "Print_Name": "Tenharim",
      "Inverted_Name": "Tenharim"
    },
    {
      "Id": "pai",
      "Print_Name": "Pe",
      "Inverted_Name": "Pe"
    },
    {
      "Id": "pak",
      "Print_Name": "Parakanã",
      "Inverted_Name": "Parakanã"
    },
    {
      "Id": "pal",
      "Print_Name": "Pahlavi",
      "Inverted_Name": "Pahlavi"
    },
    {
      "Id": "pam",
      "Print_Name": "Kapampangan",
      "Inverted_Name": "Kapampangan"
    },
    {
      "Id": "pam",
      "Print_Name": "Pampanga",
      "Inverted_Name": "Pampanga"
    },
    {
      "Id": "pan",
      "Print_Name": "Panjabi",
      "Inverted_Name": "Panjabi"
    },
    {
      "Id": "pan",
      "Print_Name": "Punjabi",
      "Inverted_Name": "Punjabi"
    },
    {
      "Id": "pao",
      "Print_Name": "Northern Paiute",
      "Inverted_Name": "Paiute, Northern"
    },
    {
      "Id": "pap",
      "Print_Name": "Papiamento",
      "Inverted_Name": "Papiamento"
    },
    {
      "Id": "paq",
      "Print_Name": "Parya",
      "Inverted_Name": "Parya"
    },
    {
      "Id": "par",
      "Print_Name": "Panamint",
      "Inverted_Name": "Panamint"
    },
    {
      "Id": "par",
      "Print_Name": "Timbisha",
      "Inverted_Name": "Timbisha"
    },
    {
      "Id": "pas",
      "Print_Name": "Papasena",
      "Inverted_Name": "Papasena"
    },
    {
      "Id": "pau",
      "Print_Name": "Palauan",
      "Inverted_Name": "Palauan"
    },
    {
      "Id": "pav",
      "Print_Name": "Pakaásnovos",
      "Inverted_Name": "Pakaásnovos"
    },
    {
      "Id": "paw",
      "Print_Name": "Pawnee",
      "Inverted_Name": "Pawnee"
    },
    {
      "Id": "pax",
      "Print_Name": "Pankararé",
      "Inverted_Name": "Pankararé"
    },
    {
      "Id": "pay",
      "Print_Name": "Pech",
      "Inverted_Name": "Pech"
    },
    {
      "Id": "paz",
      "Print_Name": "Pankararú",
      "Inverted_Name": "Pankararú"
    },
    {
      "Id": "pbb",
      "Print_Name": "Páez",
      "Inverted_Name": "Páez"
    },
    {
      "Id": "pbc",
      "Print_Name": "Patamona",
      "Inverted_Name": "Patamona"
    },
    {
      "Id": "pbe",
      "Print_Name": "Mezontla Popoloca",
      "Inverted_Name": "Popoloca, Mezontla"
    },
    {
      "Id": "pbf",
      "Print_Name": "Coyotepec Popoloca",
      "Inverted_Name": "Popoloca, Coyotepec"
    },
    {
      "Id": "pbg",
      "Print_Name": "Paraujano",
      "Inverted_Name": "Paraujano"
    },
    {
      "Id": "pbh",
      "Print_Name": "E'ñapa Woromaipu",
      "Inverted_Name": "E'ñapa Woromaipu"
    },
    {
      "Id": "pbi",
      "Print_Name": "Parkwa",
      "Inverted_Name": "Parkwa"
    },
    {
      "Id": "pbl",
      "Print_Name": "Mak (Nigeria)",
      "Inverted_Name": "Mak (Nigeria)"
    },
    {
      "Id": "pbm",
      "Print_Name": "Puebla Mazatec",
      "Inverted_Name": "Mazatec, Puebla"
    },
    {
      "Id": "pbn",
      "Print_Name": "Kpasam",
      "Inverted_Name": "Kpasam"
    },
    {
      "Id": "pbo",
      "Print_Name": "Papel",
      "Inverted_Name": "Papel"
    },
    {
      "Id": "pbp",
      "Print_Name": "Badyara",
      "Inverted_Name": "Badyara"
    },
    {
      "Id": "pbr",
      "Print_Name": "Pangwa",
      "Inverted_Name": "Pangwa"
    },
    {
      "Id": "pbs",
      "Print_Name": "Central Pame",
      "Inverted_Name": "Pame, Central"
    },
    {
      "Id": "pbt",
      "Print_Name": "Southern Pashto",
      "Inverted_Name": "Pashto, Southern"
    },
    {
      "Id": "pbu",
      "Print_Name": "Northern Pashto",
      "Inverted_Name": "Pashto, Northern"
    },
    {
      "Id": "pbv",
      "Print_Name": "Pnar",
      "Inverted_Name": "Pnar"
    },
    {
      "Id": "pby",
      "Print_Name": "Pyu (Papua New Guinea)",
      "Inverted_Name": "Pyu (Papua New Guinea)"
    },
    {
      "Id": "pca",
      "Print_Name": "Santa Inés Ahuatempan Popoloca",
      "Inverted_Name": "Popoloca, Santa Inés Ahuatempan"
    },
    {
      "Id": "pcb",
      "Print_Name": "Pear",
      "Inverted_Name": "Pear"
    },
    {
      "Id": "pcc",
      "Print_Name": "Bouyei",
      "Inverted_Name": "Bouyei"
    },
    {
      "Id": "pcd",
      "Print_Name": "Picard",
      "Inverted_Name": "Picard"
    },
    {
      "Id": "pce",
      "Print_Name": "Ruching Palaung",
      "Inverted_Name": "Palaung, Ruching"
    },
    {
      "Id": "pcf",
      "Print_Name": "Paliyan",
      "Inverted_Name": "Paliyan"
    },
    {
      "Id": "pcg",
      "Print_Name": "Paniya",
      "Inverted_Name": "Paniya"
    },
    {
      "Id": "pch",
      "Print_Name": "Pardhan",
      "Inverted_Name": "Pardhan"
    },
    {
      "Id": "pci",
      "Print_Name": "Duruwa",
      "Inverted_Name": "Duruwa"
    },
    {
      "Id": "pcj",
      "Print_Name": "Parenga",
      "Inverted_Name": "Parenga"
    },
    {
      "Id": "pck",
      "Print_Name": "Paite Chin",
      "Inverted_Name": "Chin, Paite"
    },
    {
      "Id": "pcl",
      "Print_Name": "Pardhi",
      "Inverted_Name": "Pardhi"
    },
    {
      "Id": "pcm",
      "Print_Name": "Nigerian Pidgin",
      "Inverted_Name": "Pidgin, Nigerian"
    },
    {
      "Id": "pcn",
      "Print_Name": "Piti",
      "Inverted_Name": "Piti"
    },
    {
      "Id": "pcp",
      "Print_Name": "Pacahuara",
      "Inverted_Name": "Pacahuara"
    },
    {
      "Id": "pcw",
      "Print_Name": "Pyapun",
      "Inverted_Name": "Pyapun"
    },
    {
      "Id": "pda",
      "Print_Name": "Anam",
      "Inverted_Name": "Anam"
    },
    {
      "Id": "pdc",
      "Print_Name": "Pennsylvania German",
      "Inverted_Name": "German, Pennsylvania"
    },
    {
      "Id": "pdi",
      "Print_Name": "Pa Di",
      "Inverted_Name": "Pa Di"
    },
    {
      "Id": "pdn",
      "Print_Name": "Fedan",
      "Inverted_Name": "Fedan"
    },
    {
      "Id": "pdn",
      "Print_Name": "Podena",
      "Inverted_Name": "Podena"
    },
    {
      "Id": "pdo",
      "Print_Name": "Padoe",
      "Inverted_Name": "Padoe"
    },
    {
      "Id": "pdt",
      "Print_Name": "Plautdietsch",
      "Inverted_Name": "Plautdietsch"
    },
    {
      "Id": "pdu",
      "Print_Name": "Kayan",
      "Inverted_Name": "Kayan"
    },
    {
      "Id": "pea",
      "Print_Name": "Peranakan Indonesian",
      "Inverted_Name": "Indonesian, Peranakan"
    },
    {
      "Id": "peb",
      "Print_Name": "Eastern Pomo",
      "Inverted_Name": "Pomo, Eastern"
    },
    {
      "Id": "ped",
      "Print_Name": "Mala (Papua New Guinea)",
      "Inverted_Name": "Mala (Papua New Guinea)"
    },
    {
      "Id": "pee",
      "Print_Name": "Taje",
      "Inverted_Name": "Taje"
    },
    {
      "Id": "pef",
      "Print_Name": "Northeastern Pomo",
      "Inverted_Name": "Pomo, Northeastern"
    },
    {
      "Id": "peg",
      "Print_Name": "Pengo",
      "Inverted_Name": "Pengo"
    },
    {
      "Id": "peh",
      "Print_Name": "Bonan",
      "Inverted_Name": "Bonan"
    },
    {
      "Id": "pei",
      "Print_Name": "Chichimeca-Jonaz",
      "Inverted_Name": "Chichimeca-Jonaz"
    },
    {
      "Id": "pej",
      "Print_Name": "Northern Pomo",
      "Inverted_Name": "Pomo, Northern"
    },
    {
      "Id": "pek",
      "Print_Name": "Penchal",
      "Inverted_Name": "Penchal"
    },
    {
      "Id": "pel",
      "Print_Name": "Pekal",
      "Inverted_Name": "Pekal"
    },
    {
      "Id": "pem",
      "Print_Name": "Phende",
      "Inverted_Name": "Phende"
    },
    {
      "Id": "peo",
      "Print_Name": "Old Persian (ca. 600-400 B.C.)",
      "Inverted_Name": "Persian, Old (ca. 600-400 B.C.)"
    },
    {
      "Id": "pep",
      "Print_Name": "Kunja",
      "Inverted_Name": "Kunja"
    },
    {
      "Id": "peq",
      "Print_Name": "Southern Pomo",
      "Inverted_Name": "Pomo, Southern"
    },
    {
      "Id": "pes",
      "Print_Name": "Iranian Persian",
      "Inverted_Name": "Persian, Iranian"
    },
    {
      "Id": "pev",
      "Print_Name": "Pémono",
      "Inverted_Name": "Pémono"
    },
    {
      "Id": "pex",
      "Print_Name": "Petats",
      "Inverted_Name": "Petats"
    },
    {
      "Id": "pey",
      "Print_Name": "Petjo",
      "Inverted_Name": "Petjo"
    },
    {
      "Id": "pez",
      "Print_Name": "Eastern Penan",
      "Inverted_Name": "Penan, Eastern"
    },
    {
      "Id": "pfa",
      "Print_Name": "Pááfang",
      "Inverted_Name": "Pááfang"
    },
    {
      "Id": "pfe",
      "Print_Name": "Pere",
      "Inverted_Name": "Pere"
    },
    {
      "Id": "pfl",
      "Print_Name": "Pfaelzisch",
      "Inverted_Name": "Pfaelzisch"
    },
    {
      "Id": "pga",
      "Print_Name": "Sudanese Creole Arabic",
      "Inverted_Name": "Creole Arabic, Sudanese"
    },
    {
      "Id": "pgd",
      "Print_Name": "Gāndhārī",
      "Inverted_Name": "Gāndhārī"
    },
    {
      "Id": "pgg",
      "Print_Name": "Pangwali",
      "Inverted_Name": "Pangwali"
    },
    {
      "Id": "pgi",
      "Print_Name": "Pagi",
      "Inverted_Name": "Pagi"
    },
    {
      "Id": "pgk",
      "Print_Name": "Rerep",
      "Inverted_Name": "Rerep"
    },
    {
      "Id": "pgl",
      "Print_Name": "Primitive Irish",
      "Inverted_Name": "Irish, Primitive"
    },
    {
      "Id": "pgn",
      "Print_Name": "Paelignian",
      "Inverted_Name": "Paelignian"
    },
    {
      "Id": "pgs",
      "Print_Name": "Pangseng",
      "Inverted_Name": "Pangseng"
    },
    {
      "Id": "pgu",
      "Print_Name": "Pagu",
      "Inverted_Name": "Pagu"
    },
    {
      "Id": "pgz",
      "Print_Name": "Papua New Guinean Sign Language",
      "Inverted_Name": "Papua New Guinean Sign Language"
    },
    {
      "Id": "pha",
      "Print_Name": "Pa-Hng",
      "Inverted_Name": "Pa-Hng"
    },
    {
      "Id": "phd",
      "Print_Name": "Phudagi",
      "Inverted_Name": "Phudagi"
    },
    {
      "Id": "phg",
      "Print_Name": "Phuong",
      "Inverted_Name": "Phuong"
    },
    {
      "Id": "phh",
      "Print_Name": "Phukha",
      "Inverted_Name": "Phukha"
    },
    {
      "Id": "phj",
      "Print_Name": "Pahari",
      "Inverted_Name": "Pahari"
    },
    {
      "Id": "phk",
      "Print_Name": "Phake",
      "Inverted_Name": "Phake"
    },
    {
      "Id": "phl",
      "Print_Name": "Palula",
      "Inverted_Name": "Palula"
    },
    {
      "Id": "phl",
      "Print_Name": "Phalura",
      "Inverted_Name": "Phalura"
    },
    {
      "Id": "phm",
      "Print_Name": "Phimbi",
      "Inverted_Name": "Phimbi"
    },
    {
      "Id": "phn",
      "Print_Name": "Phoenician",
      "Inverted_Name": "Phoenician"
    },
    {
      "Id": "pho",
      "Print_Name": "Phunoi",
      "Inverted_Name": "Phunoi"
    },
    {
      "Id": "phq",
      "Print_Name": "Phana'",
      "Inverted_Name": "Phana'"
    },
    {
      "Id": "phr",
      "Print_Name": "Pahari-Potwari",
      "Inverted_Name": "Pahari-Potwari"
    },
    {
      "Id": "pht",
      "Print_Name": "Phu Thai",
      "Inverted_Name": "Phu Thai"
    },
    {
      "Id": "phu",
      "Print_Name": "Phuan",
      "Inverted_Name": "Phuan"
    },
    {
      "Id": "phv",
      "Print_Name": "Pahlavani",
      "Inverted_Name": "Pahlavani"
    },
    {
      "Id": "phw",
      "Print_Name": "Phangduwali",
      "Inverted_Name": "Phangduwali"
    },
    {
      "Id": "pia",
      "Print_Name": "Pima Bajo",
      "Inverted_Name": "Pima Bajo"
    },
    {
      "Id": "pib",
      "Print_Name": "Yine",
      "Inverted_Name": "Yine"
    },
    {
      "Id": "pic",
      "Print_Name": "Pinji",
      "Inverted_Name": "Pinji"
    },
    {
      "Id": "pid",
      "Print_Name": "Piaroa",
      "Inverted_Name": "Piaroa"
    },
    {
      "Id": "pie",
      "Print_Name": "Piro",
      "Inverted_Name": "Piro"
    },
    {
      "Id": "pif",
      "Print_Name": "Pingelapese",
      "Inverted_Name": "Pingelapese"
    },
    {
      "Id": "pig",
      "Print_Name": "Pisabo",
      "Inverted_Name": "Pisabo"
    },
    {
      "Id": "pih",
      "Print_Name": "Pitcairn-Norfolk",
      "Inverted_Name": "Pitcairn-Norfolk"
    },
    {
      "Id": "pij",
      "Print_Name": "Pijao",
      "Inverted_Name": "Pijao"
    },
    {
      "Id": "pil",
      "Print_Name": "Yom",
      "Inverted_Name": "Yom"
    },
    {
      "Id": "pim",
      "Print_Name": "Powhatan",
      "Inverted_Name": "Powhatan"
    },
    {
      "Id": "pin",
      "Print_Name": "Piame",
      "Inverted_Name": "Piame"
    },
    {
      "Id": "pio",
      "Print_Name": "Piapoco",
      "Inverted_Name": "Piapoco"
    },
    {
      "Id": "pip",
      "Print_Name": "Pero",
      "Inverted_Name": "Pero"
    },
    {
      "Id": "pir",
      "Print_Name": "Piratapuyo",
      "Inverted_Name": "Piratapuyo"
    },
    {
      "Id": "pis",
      "Print_Name": "Pijin",
      "Inverted_Name": "Pijin"
    },
    {
      "Id": "pit",
      "Print_Name": "Pitta Pitta",
      "Inverted_Name": "Pitta Pitta"
    },
    {
      "Id": "piu",
      "Print_Name": "Pintupi-Luritja",
      "Inverted_Name": "Pintupi-Luritja"
    },
    {
      "Id": "piv",
      "Print_Name": "Pileni",
      "Inverted_Name": "Pileni"
    },
    {
      "Id": "piv",
      "Print_Name": "Vaeakau-Taumako",
      "Inverted_Name": "Vaeakau-Taumako"
    },
    {
      "Id": "piw",
      "Print_Name": "Pimbwe",
      "Inverted_Name": "Pimbwe"
    },
    {
      "Id": "pix",
      "Print_Name": "Piu",
      "Inverted_Name": "Piu"
    },
    {
      "Id": "piy",
      "Print_Name": "Piya-Kwonci",
      "Inverted_Name": "Piya-Kwonci"
    },
    {
      "Id": "piz",
      "Print_Name": "Pije",
      "Inverted_Name": "Pije"
    },
    {
      "Id": "pjt",
      "Print_Name": "Pitjantjatjara",
      "Inverted_Name": "Pitjantjatjara"
    },
    {
      "Id": "pka",
      "Print_Name": "Ardhamāgadhī Prākrit",
      "Inverted_Name": "Prākrit, Ardhamāgadhī"
    },
    {
      "Id": "pkb",
      "Print_Name": "Kipfokomo",
      "Inverted_Name": "Kipfokomo"
    },
    {
      "Id": "pkb",
      "Print_Name": "Pokomo",
      "Inverted_Name": "Pokomo"
    },
    {
      "Id": "pkc",
      "Print_Name": "Paekche",
      "Inverted_Name": "Paekche"
    },
    {
      "Id": "pkg",
      "Print_Name": "Pak-Tong",
      "Inverted_Name": "Pak-Tong"
    },
    {
      "Id": "pkh",
      "Print_Name": "Pankhu",
      "Inverted_Name": "Pankhu"
    },
    {
      "Id": "pkn",
      "Print_Name": "Pakanha",
      "Inverted_Name": "Pakanha"
    },
    {
      "Id": "pko",
      "Print_Name": "Pökoot",
      "Inverted_Name": "Pökoot"
    },
    {
      "Id": "pkp",
      "Print_Name": "Pukapuka",
      "Inverted_Name": "Pukapuka"
    },
    {
      "Id": "pkr",
      "Print_Name": "Attapady Kurumba",
      "Inverted_Name": "Kurumba, Attapady"
    },
    {
      "Id": "pks",
      "Print_Name": "Pakistan Sign Language",
      "Inverted_Name": "Pakistan Sign Language"
    },
    {
      "Id": "pkt",
      "Print_Name": "Maleng",
      "Inverted_Name": "Maleng"
    },
    {
      "Id": "pku",
      "Print_Name": "Paku",
      "Inverted_Name": "Paku"
    },
    {
      "Id": "pla",
      "Print_Name": "Miani",
      "Inverted_Name": "Miani"
    },
    {
      "Id": "plb",
      "Print_Name": "Polonombauk",
      "Inverted_Name": "Polonombauk"
    },
    {
      "Id": "plc",
      "Print_Name": "Central Palawano",
      "Inverted_Name": "Palawano, Central"
    },
    {
      "Id": "pld",
      "Print_Name": "Polari",
      "Inverted_Name": "Polari"
    },
    {
      "Id": "ple",
      "Print_Name": "Palu'e",
      "Inverted_Name": "Palu'e"
    },
    {
      "Id": "plg",
      "Print_Name": "Pilagá",
      "Inverted_Name": "Pilagá"
    },
    {
      "Id": "plh",
      "Print_Name": "Paulohi",
      "Inverted_Name": "Paulohi"
    },
    {
      "Id": "pli",
      "Print_Name": "Pali",
      "Inverted_Name": "Pali"
    },
    {
      "Id": "plk",
      "Print_Name": "Kohistani Shina",
      "Inverted_Name": "Shina, Kohistani"
    },
    {
      "Id": "pll",
      "Print_Name": "Shwe Palaung",
      "Inverted_Name": "Palaung, Shwe"
    },
    {
      "Id": "pln",
      "Print_Name": "Palenquero",
      "Inverted_Name": "Palenquero"
    },
    {
      "Id": "plo",
      "Print_Name": "Oluta Popoluca",
      "Inverted_Name": "Popoluca, Oluta"
    },
    {
      "Id": "plq",
      "Print_Name": "Palaic",
      "Inverted_Name": "Palaic"
    },
    {
      "Id": "plr",
      "Print_Name": "Palaka Senoufo",
      "Inverted_Name": "Senoufo, Palaka"
    },
    {
      "Id": "pls",
      "Print_Name": "San Marcos Tlacoyalco Popoloca",
      "Inverted_Name": "Popoloca, San Marcos Tlacoyalco"
    },
    {
      "Id": "pls",
      "Print_Name": "San Marcos Tlalcoyalco Popoloca",
      "Inverted_Name": "Popoloca, San Marcos Tlalcoyalco"
    },
    {
      "Id": "plt",
      "Print_Name": "Plateau Malagasy",
      "Inverted_Name": "Malagasy, Plateau"
    },
    {
      "Id": "plu",
      "Print_Name": "Palikúr",
      "Inverted_Name": "Palikúr"
    },
    {
      "Id": "plv",
      "Print_Name": "Southwest Palawano",
      "Inverted_Name": "Palawano, Southwest"
    },
    {
      "Id": "plw",
      "Print_Name": "Brooke's Point Palawano",
      "Inverted_Name": "Palawano, Brooke's Point"
    },
    {
      "Id": "ply",
      "Print_Name": "Bolyu",
      "Inverted_Name": "Bolyu"
    },
    {
      "Id": "plz",
      "Print_Name": "Paluan",
      "Inverted_Name": "Paluan"
    },
    {
      "Id": "pma",
      "Print_Name": "Paama",
      "Inverted_Name": "Paama"
    },
    {
      "Id": "pmb",
      "Print_Name": "Pambia",
      "Inverted_Name": "Pambia"
    },
    {
      "Id": "pmd",
      "Print_Name": "Pallanganmiddang",
      "Inverted_Name": "Pallanganmiddang"
    },
    {
      "Id": "pme",
      "Print_Name": "Pwaamei",
      "Inverted_Name": "Pwaamei"
    },
    {
      "Id": "pmf",
      "Print_Name": "Pamona",
      "Inverted_Name": "Pamona"
    },
    {
      "Id": "pmh",
      "Print_Name": "Māhārāṣṭri Prākrit",
      "Inverted_Name": "Prākrit, Māhārāṣṭri"
    },
    {
      "Id": "pmi",
      "Print_Name": "Northern Pumi",
      "Inverted_Name": "Pumi, Northern"
    },
    {
      "Id": "pmj",
      "Print_Name": "Southern Pumi",
      "Inverted_Name": "Pumi, Southern"
    },
    {
      "Id": "pml",
      "Print_Name": "Lingua Franca",
      "Inverted_Name": "Lingua Franca"
    },
    {
      "Id": "pmm",
      "Print_Name": "Pomo",
      "Inverted_Name": "Pomo"
    },
    {
      "Id": "pmn",
      "Print_Name": "Pam",
      "Inverted_Name": "Pam"
    },
    {
      "Id": "pmo",
      "Print_Name": "Pom",
      "Inverted_Name": "Pom"
    },
    {
      "Id": "pmq",
      "Print_Name": "Northern Pame",
      "Inverted_Name": "Pame, Northern"
    },
    {
      "Id": "pmr",
      "Print_Name": "Paynamar",
      "Inverted_Name": "Paynamar"
    },
    {
      "Id": "pms",
      "Print_Name": "Piemontese",
      "Inverted_Name": "Piemontese"
    },
    {
      "Id": "pmt",
      "Print_Name": "Tuamotuan",
      "Inverted_Name": "Tuamotuan"
    },
    {
      "Id": "pmw",
      "Print_Name": "Plains Miwok",
      "Inverted_Name": "Miwok, Plains"
    },
    {
      "Id": "pmx",
      "Print_Name": "Poumei Naga",
      "Inverted_Name": "Naga, Poumei"
    },
    {
      "Id": "pmy",
      "Print_Name": "Papuan Malay",
      "Inverted_Name": "Malay, Papuan"
    },
    {
      "Id": "pmz",
      "Print_Name": "Southern Pame",
      "Inverted_Name": "Pame, Southern"
    },
    {
      "Id": "pna",
      "Print_Name": "Punan Bah-Biau",
      "Inverted_Name": "Punan Bah-Biau"
    },
    {
      "Id": "pnb",
      "Print_Name": "Western Panjabi",
      "Inverted_Name": "Panjabi, Western"
    },
    {
      "Id": "pnc",
      "Print_Name": "Pannei",
      "Inverted_Name": "Pannei"
    },
    {
      "Id": "pnd",
      "Print_Name": "Mpinda",
      "Inverted_Name": "Mpinda"
    },
    {
      "Id": "pne",
      "Print_Name": "Western Penan",
      "Inverted_Name": "Penan, Western"
    },
    {
      "Id": "png",
      "Print_Name": "Pangu",
      "Inverted_Name": "Pangu"
    },
    {
      "Id": "png",
      "Print_Name": "Pongu",
      "Inverted_Name": "Pongu"
    },
    {
      "Id": "pnh",
      "Print_Name": "Penrhyn",
      "Inverted_Name": "Penrhyn"
    },
    {
      "Id": "pni",
      "Print_Name": "Aoheng",
      "Inverted_Name": "Aoheng"
    },
    {
      "Id": "pnj",
      "Print_Name": "Pinjarup",
      "Inverted_Name": "Pinjarup"
    },
    {
      "Id": "pnk",
      "Print_Name": "Paunaka",
      "Inverted_Name": "Paunaka"
    },
    {
      "Id": "pnl",
      "Print_Name": "Paleni",
      "Inverted_Name": "Paleni"
    },
    {
      "Id": "pnm",
      "Print_Name": "Punan Batu 1",
      "Inverted_Name": "Punan Batu 1"
    },
    {
      "Id": "pnn",
      "Print_Name": "Pinai-Hagahai",
      "Inverted_Name": "Pinai-Hagahai"
    },
    {
      "Id": "pno",
      "Print_Name": "Panobo",
      "Inverted_Name": "Panobo"
    },
    {
      "Id": "pnp",
      "Print_Name": "Pancana",
      "Inverted_Name": "Pancana"
    },
    {
      "Id": "pnq",
      "Print_Name": "Pana (Burkina Faso)",
      "Inverted_Name": "Pana (Burkina Faso)"
    },
    {
      "Id": "pnr",
      "Print_Name": "Panim",
      "Inverted_Name": "Panim"
    },
    {
      "Id": "pns",
      "Print_Name": "Ponosakan",
      "Inverted_Name": "Ponosakan"
    },
    {
      "Id": "pnt",
      "Print_Name": "Pontic",
      "Inverted_Name": "Pontic"
    },
    {
      "Id": "pnu",
      "Print_Name": "Jiongnai Bunu",
      "Inverted_Name": "Bunu, Jiongnai"
    },
    {
      "Id": "pnv",
      "Print_Name": "Pinigura",
      "Inverted_Name": "Pinigura"
    },
    {
      "Id": "pnw",
      "Print_Name": "Banyjima",
      "Inverted_Name": "Banyjima"
    },
    {
      "Id": "pnw",
      "Print_Name": "Panytyima",
      "Inverted_Name": "Panytyima"
    },
    {
      "Id": "pnx",
      "Print_Name": "Phong-Kniang",
      "Inverted_Name": "Phong-Kniang"
    },
    {
      "Id": "pny",
      "Print_Name": "Pinyin",
      "Inverted_Name": "Pinyin"
    },
    {
      "Id": "pnz",
      "Print_Name": "Pana (Central African Republic)",
      "Inverted_Name": "Pana (Central African Republic)"
    },
    {
      "Id": "poc",
      "Print_Name": "Poqomam",
      "Inverted_Name": "Poqomam"
    },
    {
      "Id": "poe",
      "Print_Name": "San Juan Atzingo Popoloca",
      "Inverted_Name": "Popoloca, San Juan Atzingo"
    },
    {
      "Id": "pof",
      "Print_Name": "Poke",
      "Inverted_Name": "Poke"
    },
    {
      "Id": "pog",
      "Print_Name": "Potiguára",
      "Inverted_Name": "Potiguára"
    },
    {
      "Id": "poh",
      "Print_Name": "Poqomchi'",
      "Inverted_Name": "Poqomchi'"
    },
    {
      "Id": "poi",
      "Print_Name": "Highland Popoluca",
      "Inverted_Name": "Popoluca, Highland"
    },
    {
      "Id": "pok",
      "Print_Name": "Pokangá",
      "Inverted_Name": "Pokangá"
    },
    {
      "Id": "pol",
      "Print_Name": "Polish",
      "Inverted_Name": "Polish"
    },
    {
      "Id": "pom",
      "Print_Name": "Southeastern Pomo",
      "Inverted_Name": "Pomo, Southeastern"
    },
    {
      "Id": "pon",
      "Print_Name": "Pohnpeian",
      "Inverted_Name": "Pohnpeian"
    },
    {
      "Id": "poo",
      "Print_Name": "Central Pomo",
      "Inverted_Name": "Pomo, Central"
    },
    {
      "Id": "pop",
      "Print_Name": "Pwapwâ",
      "Inverted_Name": "Pwapwâ"
    },
    {
      "Id": "poq",
      "Print_Name": "Texistepec Popoluca",
      "Inverted_Name": "Popoluca, Texistepec"
    },
    {
      "Id": "por",
      "Print_Name": "Portuguese",
      "Inverted_Name": "Portuguese"
    },
    {
      "Id": "pos",
      "Print_Name": "Sayula Popoluca",
      "Inverted_Name": "Popoluca, Sayula"
    },
    {
      "Id": "pot",
      "Print_Name": "Potawatomi",
      "Inverted_Name": "Potawatomi"
    },
    {
      "Id": "pov",
      "Print_Name": "Upper Guinea Crioulo",
      "Inverted_Name": "Crioulo, Upper Guinea"
    },
    {
      "Id": "pow",
      "Print_Name": "San Felipe Otlaltepec Popoloca",
      "Inverted_Name": "Popoloca, San Felipe Otlaltepec"
    },
    {
      "Id": "pox",
      "Print_Name": "Polabian",
      "Inverted_Name": "Polabian"
    },
    {
      "Id": "poy",
      "Print_Name": "Pogolo",
      "Inverted_Name": "Pogolo"
    },
    {
      "Id": "ppe",
      "Print_Name": "Papi",
      "Inverted_Name": "Papi"
    },
    {
      "Id": "ppi",
      "Print_Name": "Paipai",
      "Inverted_Name": "Paipai"
    },
    {
      "Id": "ppk",
      "Print_Name": "Uma",
      "Inverted_Name": "Uma"
    },
    {
      "Id": "ppl",
      "Print_Name": "Nicarao",
      "Inverted_Name": "Nicarao"
    },
    {
      "Id": "ppl",
      "Print_Name": "Pipil",
      "Inverted_Name": "Pipil"
    },
    {
      "Id": "ppm",
      "Print_Name": "Papuma",
      "Inverted_Name": "Papuma"
    },
    {
      "Id": "ppn",
      "Print_Name": "Papapana",
      "Inverted_Name": "Papapana"
    },
    {
      "Id": "ppo",
      "Print_Name": "Folopa",
      "Inverted_Name": "Folopa"
    },
    {
      "Id": "ppp",
      "Print_Name": "Pelende",
      "Inverted_Name": "Pelende"
    },
    {
      "Id": "ppq",
      "Print_Name": "Pei",
      "Inverted_Name": "Pei"
    },
    {
      "Id": "pps",
      "Print_Name": "San Luís Temalacayuca Popoloca",
      "Inverted_Name": "Popoloca, San Luís Temalacayuca"
    },
    {
      "Id": "ppt",
      "Print_Name": "Pare",
      "Inverted_Name": "Pare"
    },
    {
      "Id": "ppu",
      "Print_Name": "Papora",
      "Inverted_Name": "Papora"
    },
    {
      "Id": "pqa",
      "Print_Name": "Pa'a",
      "Inverted_Name": "Pa'a"
    },
    {
      "Id": "pqm",
      "Print_Name": "Malecite-Passamaquoddy",
      "Inverted_Name": "Malecite-Passamaquoddy"
    },
    {
      "Id": "prc",
      "Print_Name": "Parachi",
      "Inverted_Name": "Parachi"
    },
    {
      "Id": "prd",
      "Print_Name": "Parsi-Dari",
      "Inverted_Name": "Parsi-Dari"
    },
    {
      "Id": "pre",
      "Print_Name": "Principense",
      "Inverted_Name": "Principense"
    },
    {
      "Id": "prf",
      "Print_Name": "Paranan",
      "Inverted_Name": "Paranan"
    },
    {
      "Id": "prg",
      "Print_Name": "Prussian",
      "Inverted_Name": "Prussian"
    },
    {
      "Id": "prh",
      "Print_Name": "Porohanon",
      "Inverted_Name": "Porohanon"
    },
    {
      "Id": "pri",
      "Print_Name": "Paicî",
      "Inverted_Name": "Paicî"
    },
    {
      "Id": "prk",
      "Print_Name": "Parauk",
      "Inverted_Name": "Parauk"
    },
    {
      "Id": "prl",
      "Print_Name": "Peruvian Sign Language",
      "Inverted_Name": "Peruvian Sign Language"
    },
    {
      "Id": "prm",
      "Print_Name": "Kibiri",
      "Inverted_Name": "Kibiri"
    },
    {
      "Id": "prn",
      "Print_Name": "Prasuni",
      "Inverted_Name": "Prasuni"
    },
    {
      "Id": "pro",
      "Print_Name": "Old Occitan (to 1500)",
      "Inverted_Name": "Occitan, Old (to 1500)"
    },
    {
      "Id": "pro",
      "Print_Name": "Old Provençal (to 1500)",
      "Inverted_Name": "Provençal, Old (to 1500)"
    },
    {
      "Id": "prq",
      "Print_Name": "Ashéninka Perené",
      "Inverted_Name": "Ashéninka Perené"
    },
    {
      "Id": "prr",
      "Print_Name": "Puri",
      "Inverted_Name": "Puri"
    },
    {
      "Id": "prs",
      "Print_Name": "Afghan Persian",
      "Inverted_Name": "Persian, Afghan"
    },
    {
      "Id": "prs",
      "Print_Name": "Dari",
      "Inverted_Name": "Dari"
    },
    {
      "Id": "prt",
      "Print_Name": "Phai",
      "Inverted_Name": "Phai"
    },
    {
      "Id": "pru",
      "Print_Name": "Puragi",
      "Inverted_Name": "Puragi"
    },
    {
      "Id": "prw",
      "Print_Name": "Parawen",
      "Inverted_Name": "Parawen"
    },
    {
      "Id": "prx",
      "Print_Name": "Purik",
      "Inverted_Name": "Purik"
    },
    {
      "Id": "prz",
      "Print_Name": "Providencia Sign Language",
      "Inverted_Name": "Providencia Sign Language"
    },
    {
      "Id": "psa",
      "Print_Name": "Asue Awyu",
      "Inverted_Name": "Awyu, Asue"
    },
    {
      "Id": "psc",
      "Print_Name": "Iranian Sign Language",
      "Inverted_Name": "Iranian Sign Language"
    },
    {
      "Id": "psc",
      "Print_Name": "Persian Sign Language",
      "Inverted_Name": "Persian Sign Language"
    },
    {
      "Id": "psd",
      "Print_Name": "Plains Indian Sign Language",
      "Inverted_Name": "Plains Indian Sign Language"
    },
    {
      "Id": "pse",
      "Print_Name": "Central Malay",
      "Inverted_Name": "Malay, Central"
    },
    {
      "Id": "psg",
      "Print_Name": "Penang Sign Language",
      "Inverted_Name": "Penang Sign Language"
    },
    {
      "Id": "psh",
      "Print_Name": "Southwest Pashai",
      "Inverted_Name": "Pashai, Southwest"
    },
    {
      "Id": "psh",
      "Print_Name": "Southwest Pashayi",
      "Inverted_Name": "Pashayi, Southwest"
    },
    {
      "Id": "psi",
      "Print_Name": "Southeast Pashai",
      "Inverted_Name": "Pashai, Southeast"
    },
    {
      "Id": "psi",
      "Print_Name": "Southeast Pashayi",
      "Inverted_Name": "Pashayi, Southeast"
    },
    {
      "Id": "psl",
      "Print_Name": "Puerto Rican Sign Language",
      "Inverted_Name": "Puerto Rican Sign Language"
    },
    {
      "Id": "psm",
      "Print_Name": "Pauserna",
      "Inverted_Name": "Pauserna"
    },
    {
      "Id": "psn",
      "Print_Name": "Panasuan",
      "Inverted_Name": "Panasuan"
    },
    {
      "Id": "pso",
      "Print_Name": "Polish Sign Language",
      "Inverted_Name": "Polish Sign Language"
    },
    {
      "Id": "psp",
      "Print_Name": "Philippine Sign Language",
      "Inverted_Name": "Philippine Sign Language"
    },
    {
      "Id": "psq",
      "Print_Name": "Pasi",
      "Inverted_Name": "Pasi"
    },
    {
      "Id": "psr",
      "Print_Name": "Portuguese Sign Language",
      "Inverted_Name": "Portuguese Sign Language"
    },
    {
      "Id": "pss",
      "Print_Name": "Kaulong",
      "Inverted_Name": "Kaulong"
    },
    {
      "Id": "pst",
      "Print_Name": "Central Pashto",
      "Inverted_Name": "Pashto, Central"
    },
    {
      "Id": "psu",
      "Print_Name": "Sauraseni Prākrit",
      "Inverted_Name": "Prākrit, Sauraseni"
    },
    {
      "Id": "psw",
      "Print_Name": "Port Sandwich",
      "Inverted_Name": "Port Sandwich"
    },
    {
      "Id": "psy",
      "Print_Name": "Piscataway",
      "Inverted_Name": "Piscataway"
    },
    {
      "Id": "pta",
      "Print_Name": "Pai Tavytera",
      "Inverted_Name": "Pai Tavytera"
    },
    {
      "Id": "pth",
      "Print_Name": "Pataxó Hã-Ha-Hãe",
      "Inverted_Name": "Pataxó Hã-Ha-Hãe"
    },
    {
      "Id": "pti",
      "Print_Name": "Pindiini",
      "Inverted_Name": "Pindiini"
    },
    {
      "Id": "pti",
      "Print_Name": "Wangkatha",
      "Inverted_Name": "Wangkatha"
    },
    {
      "Id": "ptn",
      "Print_Name": "Patani",
      "Inverted_Name": "Patani"
    },
    {
      "Id": "pto",
      "Print_Name": "Zo'é",
      "Inverted_Name": "Zo'é"
    },
    {
      "Id": "ptp",
      "Print_Name": "Patep",
      "Inverted_Name": "Patep"
    },
    {
      "Id": "ptq",
      "Print_Name": "Pattapu",
      "Inverted_Name": "Pattapu"
    },
    {
      "Id": "ptr",
      "Print_Name": "Piamatsina",
      "Inverted_Name": "Piamatsina"
    },
    {
      "Id": "ptt",
      "Print_Name": "Enrekang",
      "Inverted_Name": "Enrekang"
    },
    {
      "Id": "ptu",
      "Print_Name": "Bambam",
      "Inverted_Name": "Bambam"
    },
    {
      "Id": "ptv",
      "Print_Name": "Port Vato",
      "Inverted_Name": "Port Vato"
    },
    {
      "Id": "ptw",
      "Print_Name": "Pentlatch",
      "Inverted_Name": "Pentlatch"
    },
    {
      "Id": "pty",
      "Print_Name": "Pathiya",
      "Inverted_Name": "Pathiya"
    },
    {
      "Id": "pua",
      "Print_Name": "Western Highland Purepecha",
      "Inverted_Name": "Purepecha, Western Highland"
    },
    {
      "Id": "pub",
      "Print_Name": "Purum",
      "Inverted_Name": "Purum"
    },
    {
      "Id": "puc",
      "Print_Name": "Punan Merap",
      "Inverted_Name": "Punan Merap"
    },
    {
      "Id": "pud",
      "Print_Name": "Punan Aput",
      "Inverted_Name": "Punan Aput"
    },
    {
      "Id": "pue",
      "Print_Name": "Puelche",
      "Inverted_Name": "Puelche"
    },
    {
      "Id": "puf",
      "Print_Name": "Punan Merah",
      "Inverted_Name": "Punan Merah"
    },
    {
      "Id": "pug",
      "Print_Name": "Phuie",
      "Inverted_Name": "Phuie"
    },
    {
      "Id": "pui",
      "Print_Name": "Puinave",
      "Inverted_Name": "Puinave"
    },
    {
      "Id": "puj",
      "Print_Name": "Punan Tubu",
      "Inverted_Name": "Punan Tubu"
    },
    {
      "Id": "pum",
      "Print_Name": "Puma",
      "Inverted_Name": "Puma"
    },
    {
      "Id": "puo",
      "Print_Name": "Puoc",
      "Inverted_Name": "Puoc"
    },
    {
      "Id": "pup",
      "Print_Name": "Pulabu",
      "Inverted_Name": "Pulabu"
    },
    {
      "Id": "puq",
      "Print_Name": "Puquina",
      "Inverted_Name": "Puquina"
    },
    {
      "Id": "pur",
      "Print_Name": "Puruborá",
      "Inverted_Name": "Puruborá"
    },
    {
      "Id": "pus",
      "Print_Name": "Pashto",
      "Inverted_Name": "Pashto"
    },
    {
      "Id": "pus",
      "Print_Name": "Pushto",
      "Inverted_Name": "Pushto"
    },
    {
      "Id": "put",
      "Print_Name": "Putoh",
      "Inverted_Name": "Putoh"
    },
    {
      "Id": "puu",
      "Print_Name": "Punu",
      "Inverted_Name": "Punu"
    },
    {
      "Id": "puw",
      "Print_Name": "Puluwatese",
      "Inverted_Name": "Puluwatese"
    },
    {
      "Id": "pux",
      "Print_Name": "Puare",
      "Inverted_Name": "Puare"
    },
    {
      "Id": "puy",
      "Print_Name": "Purisimeño",
      "Inverted_Name": "Purisimeño"
    },
    {
      "Id": "pwa",
      "Print_Name": "Pawaia",
      "Inverted_Name": "Pawaia"
    },
    {
      "Id": "pwb",
      "Print_Name": "Panawa",
      "Inverted_Name": "Panawa"
    },
    {
      "Id": "pwg",
      "Print_Name": "Gapapaiwa",
      "Inverted_Name": "Gapapaiwa"
    },
    {
      "Id": "pwi",
      "Print_Name": "Patwin",
      "Inverted_Name": "Patwin"
    },
    {
      "Id": "pwm",
      "Print_Name": "Molbog",
      "Inverted_Name": "Molbog"
    },
    {
      "Id": "pwn",
      "Print_Name": "Paiwan",
      "Inverted_Name": "Paiwan"
    },
    {
      "Id": "pwo",
      "Print_Name": "Pwo Western Karen",
      "Inverted_Name": "Karen, Pwo Western"
    },
    {
      "Id": "pwr",
      "Print_Name": "Powari",
      "Inverted_Name": "Powari"
    },
    {
      "Id": "pww",
      "Print_Name": "Pwo Northern Karen",
      "Inverted_Name": "Karen, Pwo Northern"
    },
    {
      "Id": "pxm",
      "Print_Name": "Quetzaltepec Mixe",
      "Inverted_Name": "Mixe, Quetzaltepec"
    },
    {
      "Id": "pye",
      "Print_Name": "Pye Krumen",
      "Inverted_Name": "Krumen, Pye"
    },
    {
      "Id": "pym",
      "Print_Name": "Fyam",
      "Inverted_Name": "Fyam"
    },
    {
      "Id": "pyn",
      "Print_Name": "Poyanáwa",
      "Inverted_Name": "Poyanáwa"
    },
    {
      "Id": "pys",
      "Print_Name": "Lengua de Señas del Paraguay",
      "Inverted_Name": "Lengua de Señas del Paraguay"
    },
    {
      "Id": "pys",
      "Print_Name": "Paraguayan Sign Language",
      "Inverted_Name": "Paraguayan Sign Language"
    },
    {
      "Id": "pyu",
      "Print_Name": "Puyuma",
      "Inverted_Name": "Puyuma"
    },
    {
      "Id": "pyx",
      "Print_Name": "Pyu (Myanmar)",
      "Inverted_Name": "Pyu (Myanmar)"
    },
    {
      "Id": "pyy",
      "Print_Name": "Pyen",
      "Inverted_Name": "Pyen"
    },
    {
      "Id": "pze",
      "Print_Name": "Pesse",
      "Inverted_Name": "Pesse"
    },
    {
      "Id": "pzh",
      "Print_Name": "Pazeh",
      "Inverted_Name": "Pazeh"
    },
    {
      "Id": "pzn",
      "Print_Name": "Jejara Naga",
      "Inverted_Name": "Jejara Naga"
    },
    {
      "Id": "pzn",
      "Print_Name": "Para Naga",
      "Inverted_Name": "Naga, Para"
    },
    {
      "Id": "qua",
      "Print_Name": "Quapaw",
      "Inverted_Name": "Quapaw"
    },
    {
      "Id": "qub",
      "Print_Name": "Huallaga Huánuco Quechua",
      "Inverted_Name": "Quechua, Huallaga Huánuco"
    },
    {
      "Id": "quc",
      "Print_Name": "K'iche'",
      "Inverted_Name": "K'iche'"
    },
    {
      "Id": "quc",
      "Print_Name": "Quiché",
      "Inverted_Name": "Quiché"
    },
    {
      "Id": "qud",
      "Print_Name": "Calderón Highland Quichua",
      "Inverted_Name": "Quichua, Calderón Highland"
    },
    {
      "Id": "que",
      "Print_Name": "Quechua",
      "Inverted_Name": "Quechua"
    },
    {
      "Id": "quf",
      "Print_Name": "Lambayeque Quechua",
      "Inverted_Name": "Quechua, Lambayeque"
    },
    {
      "Id": "qug",
      "Print_Name": "Chimborazo Highland Quichua",
      "Inverted_Name": "Quichua, Chimborazo Highland"
    },
    {
      "Id": "quh",
      "Print_Name": "South Bolivian Quechua",
      "Inverted_Name": "Quechua, South Bolivian"
    },
    {
      "Id": "qui",
      "Print_Name": "Quileute",
      "Inverted_Name": "Quileute"
    },
    {
      "Id": "quk",
      "Print_Name": "Chachapoyas Quechua",
      "Inverted_Name": "Quechua, Chachapoyas"
    },
    {
      "Id": "qul",
      "Print_Name": "North Bolivian Quechua",
      "Inverted_Name": "Quechua, North Bolivian"
    },
    {
      "Id": "qum",
      "Print_Name": "Sipacapense",
      "Inverted_Name": "Sipacapense"
    },
    {
      "Id": "qun",
      "Print_Name": "Quinault",
      "Inverted_Name": "Quinault"
    },
    {
      "Id": "qup",
      "Print_Name": "Southern Pastaza Quechua",
      "Inverted_Name": "Quechua, Southern Pastaza"
    },
    {
      "Id": "quq",
      "Print_Name": "Quinqui",
      "Inverted_Name": "Quinqui"
    },
    {
      "Id": "qur",
      "Print_Name": "Yanahuanca Pasco Quechua",
      "Inverted_Name": "Quechua, Yanahuanca Pasco"
    },
    {
      "Id": "qus",
      "Print_Name": "Santiago del Estero Quichua",
      "Inverted_Name": "Quichua, Santiago del Estero"
    },
    {
      "Id": "quv",
      "Print_Name": "Sacapulteco",
      "Inverted_Name": "Sacapulteco"
    },
    {
      "Id": "quw",
      "Print_Name": "Tena Lowland Quichua",
      "Inverted_Name": "Quichua, Tena Lowland"
    },
    {
      "Id": "qux",
      "Print_Name": "Yauyos Quechua",
      "Inverted_Name": "Quechua, Yauyos"
    },
    {
      "Id": "quy",
      "Print_Name": "Ayacucho Quechua",
      "Inverted_Name": "Quechua, Ayacucho"
    },
    {
      "Id": "quz",
      "Print_Name": "Cusco Quechua",
      "Inverted_Name": "Quechua, Cusco"
    },
    {
      "Id": "qva",
      "Print_Name": "Ambo-Pasco Quechua",
      "Inverted_Name": "Quechua, Ambo-Pasco"
    },
    {
      "Id": "qvc",
      "Print_Name": "Cajamarca Quechua",
      "Inverted_Name": "Quechua, Cajamarca"
    },
    {
      "Id": "qve",
      "Print_Name": "Eastern Apurímac Quechua",
      "Inverted_Name": "Quechua, Eastern Apurímac"
    },
    {
      "Id": "qvh",
      "Print_Name": "Huamalíes-Dos de Mayo Huánuco Quechua",
      "Inverted_Name": "Quechua, Huamalíes-Dos de Mayo Huánuco"
    },
    {
      "Id": "qvi",
      "Print_Name": "Imbabura Highland Quichua",
      "Inverted_Name": "Quichua, Imbabura Highland"
    },
    {
      "Id": "qvj",
      "Print_Name": "Loja Highland Quichua",
      "Inverted_Name": "Quichua, Loja Highland"
    },
    {
      "Id": "qvl",
      "Print_Name": "Cajatambo North Lima Quechua",
      "Inverted_Name": "Quechua, Cajatambo North Lima"
    },
    {
      "Id": "qvm",
      "Print_Name": "Margos-Yarowilca-Lauricocha Quechua",
      "Inverted_Name": "Quechua, Margos-Yarowilca-Lauricocha"
    },
    {
      "Id": "qvn",
      "Print_Name": "North Junín Quechua",
      "Inverted_Name": "Quechua, North Junín"
    },
    {
      "Id": "qvo",
      "Print_Name": "Napo Lowland Quechua",
      "Inverted_Name": "Quechua, Napo Lowland"
    },
    {
      "Id": "qvp",
      "Print_Name": "Pacaraos Quechua",
      "Inverted_Name": "Quechua, Pacaraos"
    },
    {
      "Id": "qvs",
      "Print_Name": "San Martín Quechua",
      "Inverted_Name": "Quechua, San Martín"
    },
    {
      "Id": "qvw",
      "Print_Name": "Huaylla Wanca Quechua",
      "Inverted_Name": "Quechua, Huaylla Wanca"
    },
    {
      "Id": "qvy",
      "Print_Name": "Queyu",
      "Inverted_Name": "Queyu"
    },
    {
      "Id": "qvz",
      "Print_Name": "Northern Pastaza Quichua",
      "Inverted_Name": "Quichua, Northern Pastaza"
    },
    {
      "Id": "qwa",
      "Print_Name": "Corongo Ancash Quechua",
      "Inverted_Name": "Quechua, Corongo Ancash"
    },
    {
      "Id": "qwc",
      "Print_Name": "Classical Quechua",
      "Inverted_Name": "Quechua, Classical"
    },
    {
      "Id": "qwh",
      "Print_Name": "Huaylas Ancash Quechua",
      "Inverted_Name": "Quechua, Huaylas Ancash"
    },
    {
      "Id": "qwm",
      "Print_Name": "Kuman (Russia)",
      "Inverted_Name": "Kuman (Russia)"
    },
    {
      "Id": "qws",
      "Print_Name": "Sihuas Ancash Quechua",
      "Inverted_Name": "Quechua, Sihuas Ancash"
    },
    {
      "Id": "qwt",
      "Print_Name": "Kwalhioqua-Tlatskanai",
      "Inverted_Name": "Kwalhioqua-Tlatskanai"
    },
    {
      "Id": "qxa",
      "Print_Name": "Chiquián Ancash Quechua",
      "Inverted_Name": "Quechua, Chiquián Ancash"
    },
    {
      "Id": "qxc",
      "Print_Name": "Chincha Quechua",
      "Inverted_Name": "Quechua, Chincha"
    },
    {
      "Id": "qxh",
      "Print_Name": "Panao Huánuco Quechua",
      "Inverted_Name": "Quechua, Panao Huánuco"
    },
    {
      "Id": "qxl",
      "Print_Name": "Salasaca Highland Quichua",
      "Inverted_Name": "Quichua, Salasaca Highland"
    },
    {
      "Id": "qxn",
      "Print_Name": "Northern Conchucos Ancash Quechua",
      "Inverted_Name": "Quechua, Northern Conchucos Ancash"
    },
    {
      "Id": "qxo",
      "Print_Name": "Southern Conchucos Ancash Quechua",
      "Inverted_Name": "Quechua, Southern Conchucos Ancash"
    },
    {
      "Id": "qxp",
      "Print_Name": "Puno Quechua",
      "Inverted_Name": "Quechua, Puno"
    },
    {
      "Id": "qxq",
      "Print_Name": "Qashqa'i",
      "Inverted_Name": "Qashqa'i"
    },
    {
      "Id": "qxr",
      "Print_Name": "Cañar Highland Quichua",
      "Inverted_Name": "Quichua, Cañar Highland"
    },
    {
      "Id": "qxs",
      "Print_Name": "Southern Qiang",
      "Inverted_Name": "Qiang, Southern"
    },
    {
      "Id": "qxt",
      "Print_Name": "Santa Ana de Tusi Pasco Quechua",
      "Inverted_Name": "Quechua, Santa Ana de Tusi Pasco"
    },
    {
      "Id": "qxu",
      "Print_Name": "Arequipa-La Unión Quechua",
      "Inverted_Name": "Quechua, Arequipa-La Unión"
    },
    {
      "Id": "qxw",
      "Print_Name": "Jauja Wanca Quechua",
      "Inverted_Name": "Quechua, Jauja Wanca"
    },
    {
      "Id": "qya",
      "Print_Name": "Quenya",
      "Inverted_Name": "Quenya"
    },
    {
      "Id": "qyp",
      "Print_Name": "Quiripi",
      "Inverted_Name": "Quiripi"
    },
    {
      "Id": "raa",
      "Print_Name": "Dungmali",
      "Inverted_Name": "Dungmali"
    },
    {
      "Id": "rab",
      "Print_Name": "Camling",
      "Inverted_Name": "Camling"
    },
    {
      "Id": "rac",
      "Print_Name": "Rasawa",
      "Inverted_Name": "Rasawa"
    },
    {
      "Id": "rad",
      "Print_Name": "Rade",
      "Inverted_Name": "Rade"
    },
    {
      "Id": "raf",
      "Print_Name": "Western Meohang",
      "Inverted_Name": "Meohang, Western"
    },
    {
      "Id": "rag",
      "Print_Name": "Logooli",
      "Inverted_Name": "Logooli"
    },
    {
      "Id": "rag",
      "Print_Name": "Lulogooli",
      "Inverted_Name": "Lulogooli"
    },
    {
      "Id": "rah",
      "Print_Name": "Rabha",
      "Inverted_Name": "Rabha"
    },
    {
      "Id": "rai",
      "Print_Name": "Ramoaaina",
      "Inverted_Name": "Ramoaaina"
    },
    {
      "Id": "raj",
      "Print_Name": "Rajasthani",
      "Inverted_Name": "Rajasthani"
    },
    {
      "Id": "rak",
      "Print_Name": "Tulu-Bohuai",
      "Inverted_Name": "Tulu-Bohuai"
    },
    {
      "Id": "ral",
      "Print_Name": "Ralte",
      "Inverted_Name": "Ralte"
    },
    {
      "Id": "ram",
      "Print_Name": "Canela",
      "Inverted_Name": "Canela"
    },
    {
      "Id": "ran",
      "Print_Name": "Riantana",
      "Inverted_Name": "Riantana"
    },
    {
      "Id": "rao",
      "Print_Name": "Rao",
      "Inverted_Name": "Rao"
    },
    {
      "Id": "rap",
      "Print_Name": "Rapanui",
      "Inverted_Name": "Rapanui"
    },
    {
      "Id": "raq",
      "Print_Name": "Saam",
      "Inverted_Name": "Saam"
    },
    {
      "Id": "rar",
      "Print_Name": "Cook Islands Maori",
      "Inverted_Name": "Maori, Cook Islands"
    },
    {
      "Id": "rar",
      "Print_Name": "Rarotongan",
      "Inverted_Name": "Rarotongan"
    },
    {
      "Id": "ras",
      "Print_Name": "Tegali",
      "Inverted_Name": "Tegali"
    },
    {
      "Id": "rat",
      "Print_Name": "Razajerdi",
      "Inverted_Name": "Razajerdi"
    },
    {
      "Id": "rau",
      "Print_Name": "Raute",
      "Inverted_Name": "Raute"
    },
    {
      "Id": "rav",
      "Print_Name": "Sampang",
      "Inverted_Name": "Sampang"
    },
    {
      "Id": "raw",
      "Print_Name": "Rawang",
      "Inverted_Name": "Rawang"
    },
    {
      "Id": "rax",
      "Print_Name": "Rang",
      "Inverted_Name": "Rang"
    },
    {
      "Id": "ray",
      "Print_Name": "Rapa",
      "Inverted_Name": "Rapa"
    },
    {
      "Id": "raz",
      "Print_Name": "Rahambuu",
      "Inverted_Name": "Rahambuu"
    },
    {
      "Id": "rbb",
      "Print_Name": "Rumai Palaung",
      "Inverted_Name": "Palaung, Rumai"
    },
    {
      "Id": "rbk",
      "Print_Name": "Northern Bontok",
      "Inverted_Name": "Bontok, Northern"
    },
    {
      "Id": "rbl",
      "Print_Name": "Miraya Bikol",
      "Inverted_Name": "Bikol, Miraya"
    },
    {
      "Id": "rbp",
      "Print_Name": "Barababaraba",
      "Inverted_Name": "Barababaraba"
    },
    {
      "Id": "rcf",
      "Print_Name": "Réunion Creole French",
      "Inverted_Name": "Creole French, Réunion"
    },
    {
      "Id": "rdb",
      "Print_Name": "Rudbari",
      "Inverted_Name": "Rudbari"
    },
    {
      "Id": "rea",
      "Print_Name": "Rerau",
      "Inverted_Name": "Rerau"
    },
    {
      "Id": "reb",
      "Print_Name": "Rembong",
      "Inverted_Name": "Rembong"
    },
    {
      "Id": "ree",
      "Print_Name": "Rejang Kayan",
      "Inverted_Name": "Kayan, Rejang"
    },
    {
      "Id": "reg",
      "Print_Name": "Kara (Tanzania)",
      "Inverted_Name": "Kara (Tanzania)"
    },
    {
      "Id": "rei",
      "Print_Name": "Reli",
      "Inverted_Name": "Reli"
    },
    {
      "Id": "rej",
      "Print_Name": "Rejang",
      "Inverted_Name": "Rejang"
    },
    {
      "Id": "rel",
      "Print_Name": "Rendille",
      "Inverted_Name": "Rendille"
    },
    {
      "Id": "rem",
      "Print_Name": "Remo",
      "Inverted_Name": "Remo"
    },
    {
      "Id": "ren",
      "Print_Name": "Rengao",
      "Inverted_Name": "Rengao"
    },
    {
      "Id": "rer",
      "Print_Name": "Rer Bare",
      "Inverted_Name": "Rer Bare"
    },
    {
      "Id": "res",
      "Print_Name": "Reshe",
      "Inverted_Name": "Reshe"
    },
    {
      "Id": "ret",
      "Print_Name": "Retta",
      "Inverted_Name": "Retta"
    },
    {
      "Id": "rey",
      "Print_Name": "Reyesano",
      "Inverted_Name": "Reyesano"
    },
    {
      "Id": "rga",
      "Print_Name": "Roria",
      "Inverted_Name": "Roria"
    },
    {
      "Id": "rge",
      "Print_Name": "Romano-Greek",
      "Inverted_Name": "Romano-Greek"
    },
    {
      "Id": "rgk",
      "Print_Name": "Rangkas",
      "Inverted_Name": "Rangkas"
    },
    {
      "Id": "rgn",
      "Print_Name": "Romagnol",
      "Inverted_Name": "Romagnol"
    },
    {
      "Id": "rgr",
      "Print_Name": "Resígaro",
      "Inverted_Name": "Resígaro"
    },
    {
      "Id": "rgs",
      "Print_Name": "Southern Roglai",
      "Inverted_Name": "Roglai, Southern"
    },
    {
      "Id": "rgu",
      "Print_Name": "Ringgou",
      "Inverted_Name": "Ringgou"
    },
    {
      "Id": "rhg",
      "Print_Name": "Rohingya",
      "Inverted_Name": "Rohingya"
    },
    {
      "Id": "rhp",
      "Print_Name": "Yahang",
      "Inverted_Name": "Yahang"
    },
    {
      "Id": "ria",
      "Print_Name": "Riang (India)",
      "Inverted_Name": "Riang (India)"
    },
    {
      "Id": "rib",
      "Print_Name": "Bribri Sign Language",
      "Inverted_Name": "Bribri Sign Language"
    },
    {
      "Id": "rif",
      "Print_Name": "Tarifit",
      "Inverted_Name": "Tarifit"
    },
    {
      "Id": "ril",
      "Print_Name": "Riang (Myanmar)",
      "Inverted_Name": "Riang (Myanmar)"
    },
    {
      "Id": "ril",
      "Print_Name": "Riang Lang",
      "Inverted_Name": "Riang Lang"
    },
    {
      "Id": "rim",
      "Print_Name": "Nyaturu",
      "Inverted_Name": "Nyaturu"
    },
    {
      "Id": "rin",
      "Print_Name": "Nungu",
      "Inverted_Name": "Nungu"
    },
    {
      "Id": "rir",
      "Print_Name": "Ribun",
      "Inverted_Name": "Ribun"
    },
    {
      "Id": "rit",
      "Print_Name": "Ritharrngu",
      "Inverted_Name": "Ritharrngu"
    },
    {
      "Id": "riu",
      "Print_Name": "Riung",
      "Inverted_Name": "Riung"
    },
    {
      "Id": "rjg",
      "Print_Name": "Rajong",
      "Inverted_Name": "Rajong"
    },
    {
      "Id": "rji",
      "Print_Name": "Raji",
      "Inverted_Name": "Raji"
    },
    {
      "Id": "rjs",
      "Print_Name": "Rajbanshi",
      "Inverted_Name": "Rajbanshi"
    },
    {
      "Id": "rka",
      "Print_Name": "Kraol",
      "Inverted_Name": "Kraol"
    },
    {
      "Id": "rkb",
      "Print_Name": "Rikbaktsa",
      "Inverted_Name": "Rikbaktsa"
    },
    {
      "Id": "rkh",
      "Print_Name": "Rakahanga-Manihiki",
      "Inverted_Name": "Rakahanga-Manihiki"
    },
    {
      "Id": "rki",
      "Print_Name": "Rakhine",
      "Inverted_Name": "Rakhine"
    },
    {
      "Id": "rkm",
      "Print_Name": "Marka",
      "Inverted_Name": "Marka"
    },
    {
      "Id": "rkt",
      "Print_Name": "Kamta",
      "Inverted_Name": "Kamta"
    },
    {
      "Id": "rkt",
      "Print_Name": "Rangpuri",
      "Inverted_Name": "Rangpuri"
    },
    {
      "Id": "rkw",
      "Print_Name": "Arakwal",
      "Inverted_Name": "Arakwal"
    },
    {
      "Id": "rma",
      "Print_Name": "Rama",
      "Inverted_Name": "Rama"
    },
    {
      "Id": "rmb",
      "Print_Name": "Rembarrnga",
      "Inverted_Name": "Rembarrnga"
    },
    {
      "Id": "rmc",
      "Print_Name": "Carpathian Romani",
      "Inverted_Name": "Romani, Carpathian"
    },
    {
      "Id": "rmd",
      "Print_Name": "Traveller Danish",
      "Inverted_Name": "Danish, Traveller"
    },
    {
      "Id": "rme",
      "Print_Name": "Angloromani",
      "Inverted_Name": "Angloromani"
    },
    {
      "Id": "rmf",
      "Print_Name": "Kalo Finnish Romani",
      "Inverted_Name": "Romani, Kalo Finnish"
    },
    {
      "Id": "rmg",
      "Print_Name": "Traveller Norwegian",
      "Inverted_Name": "Norwegian, Traveller"
    },
    {
      "Id": "rmh",
      "Print_Name": "Murkim",
      "Inverted_Name": "Murkim"
    },
    {
      "Id": "rmi",
      "Print_Name": "Lomavren",
      "Inverted_Name": "Lomavren"
    },
    {
      "Id": "rmk",
      "Print_Name": "Romkun",
      "Inverted_Name": "Romkun"
    },
    {
      "Id": "rml",
      "Print_Name": "Baltic Romani",
      "Inverted_Name": "Romani, Baltic"
    },
    {
      "Id": "rmm",
      "Print_Name": "Roma",
      "Inverted_Name": "Roma"
    },
    {
      "Id": "rmn",
      "Print_Name": "Balkan Romani",
      "Inverted_Name": "Romani, Balkan"
    },
    {
      "Id": "rmo",
      "Print_Name": "Sinte Romani",
      "Inverted_Name": "Romani, Sinte"
    },
    {
      "Id": "rmp",
      "Print_Name": "Rempi",
      "Inverted_Name": "Rempi"
    },
    {
      "Id": "rmq",
      "Print_Name": "Caló",
      "Inverted_Name": "Caló"
    },
    {
      "Id": "rms",
      "Print_Name": "Romanian Sign Language",
      "Inverted_Name": "Romanian Sign Language"
    },
    {
      "Id": "rmt",
      "Print_Name": "Domari",
      "Inverted_Name": "Domari"
    },
    {
      "Id": "rmu",
      "Print_Name": "Tavringer Romani",
      "Inverted_Name": "Romani, Tavringer"
    },
    {
      "Id": "rmv",
      "Print_Name": "Romanova",
      "Inverted_Name": "Romanova"
    },
    {
      "Id": "rmw",
      "Print_Name": "Welsh Romani",
      "Inverted_Name": "Romani, Welsh"
    },
    {
      "Id": "rmx",
      "Print_Name": "Romam",
      "Inverted_Name": "Romam"
    },
    {
      "Id": "rmy",
      "Print_Name": "Vlax Romani",
      "Inverted_Name": "Romani, Vlax"
    },
    {
      "Id": "rmz",
      "Print_Name": "Marma",
      "Inverted_Name": "Marma"
    },
    {
      "Id": "rnb",
      "Print_Name": "Brunca Sign Language",
      "Inverted_Name": "Brunca Sign Language"
    },
    {
      "Id": "rnd",
      "Print_Name": "Ruund",
      "Inverted_Name": "Ruund"
    },
    {
      "Id": "rng",
      "Print_Name": "Ronga",
      "Inverted_Name": "Ronga"
    },
    {
      "Id": "rnl",
      "Print_Name": "Ranglong",
      "Inverted_Name": "Ranglong"
    },
    {
      "Id": "rnn",
      "Print_Name": "Roon",
      "Inverted_Name": "Roon"
    },
    {
      "Id": "rnp",
      "Print_Name": "Rongpo",
      "Inverted_Name": "Rongpo"
    },
    {
      "Id": "rnr",
      "Print_Name": "Nari Nari",
      "Inverted_Name": "Nari Nari"
    },
    {
      "Id": "rnw",
      "Print_Name": "Rungwa",
      "Inverted_Name": "Rungwa"
    },
    {
      "Id": "rob",
      "Print_Name": "Tae'",
      "Inverted_Name": "Tae'"
    },
    {
      "Id": "roc",
      "Print_Name": "Cacgia Roglai",
      "Inverted_Name": "Roglai, Cacgia"
    },
    {
      "Id": "rod",
      "Print_Name": "Rogo",
      "Inverted_Name": "Rogo"
    },
    {
      "Id": "roe",
      "Print_Name": "Ronji",
      "Inverted_Name": "Ronji"
    },
    {
      "Id": "rof",
      "Print_Name": "Rombo",
      "Inverted_Name": "Rombo"
    },
    {
      "Id": "rog",
      "Print_Name": "Northern Roglai",
      "Inverted_Name": "Roglai, Northern"
    },
    {
      "Id": "roh",
      "Print_Name": "Romansh",
      "Inverted_Name": "Romansh"
    },
    {
      "Id": "rol",
      "Print_Name": "Romblomanon",
      "Inverted_Name": "Romblomanon"
    },
    {
      "Id": "rom",
      "Print_Name": "Romany",
      "Inverted_Name": "Romany"
    },
    {
      "Id": "ron",
      "Print_Name": "Moldavian",
      "Inverted_Name": "Moldavian"
    },
    {
      "Id": "ron",
      "Print_Name": "Moldovan",
      "Inverted_Name": "Moldovan"
    },
    {
      "Id": "ron",
      "Print_Name": "Romanian",
      "Inverted_Name": "Romanian"
    },
    {
      "Id": "roo",
      "Print_Name": "Rotokas",
      "Inverted_Name": "Rotokas"
    },
    {
      "Id": "rop",
      "Print_Name": "Kriol",
      "Inverted_Name": "Kriol"
    },
    {
      "Id": "ror",
      "Print_Name": "Rongga",
      "Inverted_Name": "Rongga"
    },
    {
      "Id": "rou",
      "Print_Name": "Runga",
      "Inverted_Name": "Runga"
    },
    {
      "Id": "row",
      "Print_Name": "Dela-Oenale",
      "Inverted_Name": "Dela-Oenale"
    },
    {
      "Id": "rpn",
      "Print_Name": "Repanbitip",
      "Inverted_Name": "Repanbitip"
    },
    {
      "Id": "rpt",
      "Print_Name": "Rapting",
      "Inverted_Name": "Rapting"
    },
    {
      "Id": "rri",
      "Print_Name": "Ririo",
      "Inverted_Name": "Ririo"
    },
    {
      "Id": "rro",
      "Print_Name": "Waima",
      "Inverted_Name": "Waima"
    },
    {
      "Id": "rrt",
      "Print_Name": "Arritinngithigh",
      "Inverted_Name": "Arritinngithigh"
    },
    {
      "Id": "rsb",
      "Print_Name": "Romano-Serbian",
      "Inverted_Name": "Romano-Serbian"
    },
    {
      "Id": "rsk",
      "Print_Name": "Rusnak",
      "Inverted_Name": "Rusnak"
    },
    {
      "Id": "rsk",
      "Print_Name": "Ruthenian",
      "Inverted_Name": "Ruthenian"
    },
    {
      "Id": "rsl",
      "Print_Name": "Russian Sign Language",
      "Inverted_Name": "Russian Sign Language"
    },
    {
      "Id": "rsm",
      "Print_Name": "Miriwoong Sign Language",
      "Inverted_Name": "Miriwoong Sign Language"
    },
    {
      "Id": "rsn",
      "Print_Name": "Rwandan Sign Language",
      "Inverted_Name": "Rwandan Sign Language"
    },
    {
      "Id": "rsw",
      "Print_Name": "Rishiwa",
      "Inverted_Name": "Rishiwa"
    },
    {
      "Id": "rtc",
      "Print_Name": "Rungtu Chin",
      "Inverted_Name": "Chin, Rungtu"
    },
    {
      "Id": "rth",
      "Print_Name": "Ratahan",
      "Inverted_Name": "Ratahan"
    },
    {
      "Id": "rtm",
      "Print_Name": "Rotuman",
      "Inverted_Name": "Rotuman"
    },
    {
      "Id": "rts",
      "Print_Name": "Yurats",
      "Inverted_Name": "Yurats"
    },
    {
      "Id": "rtw",
      "Print_Name": "Rathawi",
      "Inverted_Name": "Rathawi"
    },
    {
      "Id": "rub",
      "Print_Name": "Gungu",
      "Inverted_Name": "Gungu"
    },
    {
      "Id": "ruc",
      "Print_Name": "Ruuli",
      "Inverted_Name": "Ruuli"
    },
    {
      "Id": "rue",
      "Print_Name": "Rusyn",
      "Inverted_Name": "Rusyn"
    },
    {
      "Id": "ruf",
      "Print_Name": "Luguru",
      "Inverted_Name": "Luguru"
    },
    {
      "Id": "rug",
      "Print_Name": "Roviana",
      "Inverted_Name": "Roviana"
    },
    {
      "Id": "ruh",
      "Print_Name": "Ruga",
      "Inverted_Name": "Ruga"
    },
    {
      "Id": "rui",
      "Print_Name": "Rufiji",
      "Inverted_Name": "Rufiji"
    },
    {
      "Id": "ruk",
      "Print_Name": "Che",
      "Inverted_Name": "Che"
    },
    {
      "Id": "run",
      "Print_Name": "Rundi",
      "Inverted_Name": "Rundi"
    },
    {
      "Id": "ruo",
      "Print_Name": "Istro Romanian",
      "Inverted_Name": "Romanian, Istro"
    },
    {
      "Id": "rup",
      "Print_Name": "Aromanian",
      "Inverted_Name": "Aromanian"
    },
    {
      "Id": "rup",
      "Print_Name": "Arumanian",
      "Inverted_Name": "Arumanian"
    },
    {
      "Id": "rup",
      "Print_Name": "Macedo-Romanian",
      "Inverted_Name": "Romanian, Macedo-"
    },
    {
      "Id": "ruq",
      "Print_Name": "Megleno Romanian",
      "Inverted_Name": "Romanian, Megleno"
    },
    {
      "Id": "rus",
      "Print_Name": "Russian",
      "Inverted_Name": "Russian"
    },
    {
      "Id": "rut",
      "Print_Name": "Rutul",
      "Inverted_Name": "Rutul"
    },
    {
      "Id": "ruu",
      "Print_Name": "Lanas Lobu",
      "Inverted_Name": "Lobu, Lanas"
    },
    {
      "Id": "ruy",
      "Print_Name": "Mala (Nigeria)",
      "Inverted_Name": "Mala (Nigeria)"
    },
    {
      "Id": "ruz",
      "Print_Name": "Ruma",
      "Inverted_Name": "Ruma"
    },
    {
      "Id": "rwa",
      "Print_Name": "Rawo",
      "Inverted_Name": "Rawo"
    },
    {
      "Id": "rwk",
      "Print_Name": "Rwa",
      "Inverted_Name": "Rwa"
    },
    {
      "Id": "rwl",
      "Print_Name": "Ruwila",
      "Inverted_Name": "Ruwila"
    },
    {
      "Id": "rwm",
      "Print_Name": "Amba (Uganda)",
      "Inverted_Name": "Amba (Uganda)"
    },
    {
      "Id": "rwo",
      "Print_Name": "Rawa",
      "Inverted_Name": "Rawa"
    },
    {
      "Id": "rwr",
      "Print_Name": "Marwari (India)",
      "Inverted_Name": "Marwari (India)"
    },
    {
      "Id": "rxd",
      "Print_Name": "Ngardi",
      "Inverted_Name": "Ngardi"
    },
    {
      "Id": "rxw",
      "Print_Name": "Garuwali",
      "Inverted_Name": "Garuwali"
    },
    {
      "Id": "rxw",
      "Print_Name": "Karuwali",
      "Inverted_Name": "Karuwali"
    },
    {
      "Id": "ryn",
      "Print_Name": "Northern Amami-Oshima",
      "Inverted_Name": "Amami-Oshima, Northern"
    },
    {
      "Id": "rys",
      "Print_Name": "Yaeyama",
      "Inverted_Name": "Yaeyama"
    },
    {
      "Id": "ryu",
      "Print_Name": "Central Okinawan",
      "Inverted_Name": "Okinawan, Central"
    },
    {
      "Id": "rzh",
      "Print_Name": "Rāziḥī",
      "Inverted_Name": "Rāziḥī"
    },
    {
      "Id": "saa",
      "Print_Name": "Saba",
      "Inverted_Name": "Saba"
    },
    {
      "Id": "sab",
      "Print_Name": "Buglere",
      "Inverted_Name": "Buglere"
    },
    {
      "Id": "sac",
      "Print_Name": "Meskwaki",
      "Inverted_Name": "Meskwaki"
    },
    {
      "Id": "sad",
      "Print_Name": "Sandawe",
      "Inverted_Name": "Sandawe"
    },
    {
      "Id": "sae",
      "Print_Name": "Sabanê",
      "Inverted_Name": "Sabanê"
    },
    {
      "Id": "saf",
      "Print_Name": "Safaliba",
      "Inverted_Name": "Safaliba"
    },
    {
      "Id": "sag",
      "Print_Name": "Sango",
      "Inverted_Name": "Sango"
    },
    {
      "Id": "sah",
      "Print_Name": "Yakut",
      "Inverted_Name": "Yakut"
    },
    {
      "Id": "saj",
      "Print_Name": "Sahu",
      "Inverted_Name": "Sahu"
    },
    {
      "Id": "sak",
      "Print_Name": "Sake",
      "Inverted_Name": "Sake"
    },
    {
      "Id": "sam",
      "Print_Name": "Samaritan Aramaic",
      "Inverted_Name": "Aramaic, Samaritan"
    },
    {
      "Id": "san",
      "Print_Name": "Sanskrit",
      "Inverted_Name": "Sanskrit"
    },
    {
      "Id": "sao",
      "Print_Name": "Sause",
      "Inverted_Name": "Sause"
    },
    {
      "Id": "saq",
      "Print_Name": "Samburu",
      "Inverted_Name": "Samburu"
    },
    {
      "Id": "sar",
      "Print_Name": "Saraveca",
      "Inverted_Name": "Saraveca"
    },
    {
      "Id": "sas",
      "Print_Name": "Sasak",
      "Inverted_Name": "Sasak"
    },
    {
      "Id": "sat",
      "Print_Name": "Santali",
      "Inverted_Name": "Santali"
    },
    {
      "Id": "sau",
      "Print_Name": "Saleman",
      "Inverted_Name": "Saleman"
    },
    {
      "Id": "sav",
      "Print_Name": "Saafi-Saafi",
      "Inverted_Name": "Saafi-Saafi"
    },
    {
      "Id": "saw",
      "Print_Name": "Sawi",
      "Inverted_Name": "Sawi"
    },
    {
      "Id": "sax",
      "Print_Name": "Sa",
      "Inverted_Name": "Sa"
    },
    {
      "Id": "say",
      "Print_Name": "Saya",
      "Inverted_Name": "Saya"
    },
    {
      "Id": "saz",
      "Print_Name": "Saurashtra",
      "Inverted_Name": "Saurashtra"
    },
    {
      "Id": "sba",
      "Print_Name": "Ngambay",
      "Inverted_Name": "Ngambay"
    },
    {
      "Id": "sbb",
      "Print_Name": "Simbo",
      "Inverted_Name": "Simbo"
    },
    {
      "Id": "sbc",
      "Print_Name": "Kele (Papua New Guinea)",
      "Inverted_Name": "Kele (Papua New Guinea)"
    },
    {
      "Id": "sbd",
      "Print_Name": "Southern Samo",
      "Inverted_Name": "Samo, Southern"
    },
    {
      "Id": "sbe",
      "Print_Name": "Saliba",
      "Inverted_Name": "Saliba"
    },
    {
      "Id": "sbf",
      "Print_Name": "Chabu",
      "Inverted_Name": "Chabu"
    },
    {
      "Id": "sbf",
      "Print_Name": "Shabo",
      "Inverted_Name": "Shabo"
    },
    {
      "Id": "sbg",
      "Print_Name": "Seget",
      "Inverted_Name": "Seget"
    },
    {
      "Id": "sbh",
      "Print_Name": "Sori-Harengan",
      "Inverted_Name": "Sori-Harengan"
    },
    {
      "Id": "sbi",
      "Print_Name": "Seti",
      "Inverted_Name": "Seti"
    },
    {
      "Id": "sbj",
      "Print_Name": "Surbakhal",
      "Inverted_Name": "Surbakhal"
    },
    {
      "Id": "sbk",
      "Print_Name": "Safwa",
      "Inverted_Name": "Safwa"
    },
    {
      "Id": "sbl",
      "Print_Name": "Botolan Sambal",
      "Inverted_Name": "Sambal, Botolan"
    },
    {
      "Id": "sbm",
      "Print_Name": "Sagala",
      "Inverted_Name": "Sagala"
    },
    {
      "Id": "sbn",
      "Print_Name": "Sindhi Bhil",
      "Inverted_Name": "Bhil, Sindhi"
    },
    {
      "Id": "sbo",
      "Print_Name": "Sabüm",
      "Inverted_Name": "Sabüm"
    },
    {
      "Id": "sbp",
      "Print_Name": "Sangu (Tanzania)",
      "Inverted_Name": "Sangu (Tanzania)"
    },
    {
      "Id": "sbq",
      "Print_Name": "Sileibi",
      "Inverted_Name": "Sileibi"
    },
    {
      "Id": "sbr",
      "Print_Name": "Sembakung Murut",
      "Inverted_Name": "Sembakung Murut"
    },
    {
      "Id": "sbs",
      "Print_Name": "Subiya",
      "Inverted_Name": "Subiya"
    },
    {
      "Id": "sbt",
      "Print_Name": "Kimki",
      "Inverted_Name": "Kimki"
    },
    {
      "Id": "sbu",
      "Print_Name": "Stod Bhoti",
      "Inverted_Name": "Bhoti, Stod"
    },
    {
      "Id": "sbv",
      "Print_Name": "Sabine",
      "Inverted_Name": "Sabine"
    },
    {
      "Id": "sbw",
      "Print_Name": "Simba",
      "Inverted_Name": "Simba"
    },
    {
      "Id": "sbx",
      "Print_Name": "Seberuang",
      "Inverted_Name": "Seberuang"
    },
    {
      "Id": "sby",
      "Print_Name": "Soli",
      "Inverted_Name": "Soli"
    },
    {
      "Id": "sbz",
      "Print_Name": "Sara Kaba",
      "Inverted_Name": "Sara Kaba"
    },
    {
      "Id": "scb",
      "Print_Name": "Chut",
      "Inverted_Name": "Chut"
    },
    {
      "Id": "sce",
      "Print_Name": "Dongxiang",
      "Inverted_Name": "Dongxiang"
    },
    {
      "Id": "scf",
      "Print_Name": "San Miguel Creole French",
      "Inverted_Name": "Creole French, San Miguel"
    },
    {
      "Id": "scg",
      "Print_Name": "Sanggau",
      "Inverted_Name": "Sanggau"
    },
    {
      "Id": "sch",
      "Print_Name": "Sakachep",
      "Inverted_Name": "Sakachep"
    },
    {
      "Id": "sci",
      "Print_Name": "Sri Lankan Creole Malay",
      "Inverted_Name": "Creole Malay, Sri Lankan"
    },
    {
      "Id": "sck",
      "Print_Name": "Sadri",
      "Inverted_Name": "Sadri"
    },
    {
      "Id": "scl",
      "Print_Name": "Shina",
      "Inverted_Name": "Shina"
    },
    {
      "Id": "scn",
      "Print_Name": "Sicilian",
      "Inverted_Name": "Sicilian"
    },
    {
      "Id": "sco",
      "Print_Name": "Scots",
      "Inverted_Name": "Scots"
    },
    {
      "Id": "scp",
      "Print_Name": "Helambu Sherpa",
      "Inverted_Name": "Helambu Sherpa"
    },
    {
      "Id": "scp",
      "Print_Name": "Hyolmo",
      "Inverted_Name": "Hyolmo"
    },
    {
      "Id": "scq",
      "Print_Name": "Sa'och",
      "Inverted_Name": "Sa'och"
    },
    {
      "Id": "scs",
      "Print_Name": "North Slavey",
      "Inverted_Name": "Slavey, North"
    },
    {
      "Id": "sct",
      "Print_Name": "Southern Katang",
      "Inverted_Name": "Katang, Southern"
    },
    {
      "Id": "scu",
      "Print_Name": "Shumcho",
      "Inverted_Name": "Shumcho"
    },
    {
      "Id": "scv",
      "Print_Name": "Sheni",
      "Inverted_Name": "Sheni"
    },
    {
      "Id": "scw",
      "Print_Name": "Sha",
      "Inverted_Name": "Sha"
    },
    {
      "Id": "scx",
      "Print_Name": "Sicel",
      "Inverted_Name": "Sicel"
    },
    {
      "Id": "sda",
      "Print_Name": "Toraja-Sa'dan",
      "Inverted_Name": "Toraja-Sa'dan"
    },
    {
      "Id": "sdb",
      "Print_Name": "Shabak",
      "Inverted_Name": "Shabak"
    },
    {
      "Id": "sdc",
      "Print_Name": "Sassarese Sardinian",
      "Inverted_Name": "Sardinian, Sassarese"
    },
    {
      "Id": "sde",
      "Print_Name": "Surubu",
      "Inverted_Name": "Surubu"
    },
    {
      "Id": "sdf",
      "Print_Name": "Sarli",
      "Inverted_Name": "Sarli"
    },
    {
      "Id": "sdg",
      "Print_Name": "Savi",
      "Inverted_Name": "Savi"
    },
    {
      "Id": "sdh",
      "Print_Name": "Southern Kurdish",
      "Inverted_Name": "Kurdish, Southern"
    },
    {
      "Id": "sdj",
      "Print_Name": "Suundi",
      "Inverted_Name": "Suundi"
    },
    {
      "Id": "sdk",
      "Print_Name": "Sos Kundi",
      "Inverted_Name": "Sos Kundi"
    },
    {
      "Id": "sdl",
      "Print_Name": "Saudi Arabian Sign Language",
      "Inverted_Name": "Saudi Arabian Sign Language"
    },
    {
      "Id": "sdn",
      "Print_Name": "Gallurese Sardinian",
      "Inverted_Name": "Sardinian, Gallurese"
    },
    {
      "Id": "sdo",
      "Print_Name": "Bukar-Sadung Bidayuh",
      "Inverted_Name": "Bidayuh, Bukar-Sadung"
    },
    {
      "Id": "sdp",
      "Print_Name": "Sherdukpen",
      "Inverted_Name": "Sherdukpen"
    },
    {
      "Id": "sdq",
      "Print_Name": "Semandang",
      "Inverted_Name": "Semandang"
    },
    {
      "Id": "sdr",
      "Print_Name": "Oraon Sadri",
      "Inverted_Name": "Sadri, Oraon"
    },
    {
      "Id": "sds",
      "Print_Name": "Sened",
      "Inverted_Name": "Sened"
    },
    {
      "Id": "sdt",
      "Print_Name": "Shuadit",
      "Inverted_Name": "Shuadit"
    },
    {
      "Id": "sdu",
      "Print_Name": "Sarudu",
      "Inverted_Name": "Sarudu"
    },
    {
      "Id": "sdx",
      "Print_Name": "Sibu Melanau",
      "Inverted_Name": "Melanau, Sibu"
    },
    {
      "Id": "sdz",
      "Print_Name": "Sallands",
      "Inverted_Name": "Sallands"
    },
    {
      "Id": "sea",
      "Print_Name": "Semai",
      "Inverted_Name": "Semai"
    },
    {
      "Id": "seb",
      "Print_Name": "Shempire Senoufo",
      "Inverted_Name": "Senoufo, Shempire"
    },
    {
      "Id": "sec",
      "Print_Name": "Sechelt",
      "Inverted_Name": "Sechelt"
    },
    {
      "Id": "sed",
      "Print_Name": "Sedang",
      "Inverted_Name": "Sedang"
    },
    {
      "Id": "see",
      "Print_Name": "Seneca",
      "Inverted_Name": "Seneca"
    },
    {
      "Id": "sef",
      "Print_Name": "Cebaara Senoufo",
      "Inverted_Name": "Senoufo, Cebaara"
    },
    {
      "Id": "seg",
      "Print_Name": "Segeju",
      "Inverted_Name": "Segeju"
    },
    {
      "Id": "seh",
      "Print_Name": "Sena",
      "Inverted_Name": "Sena"
    },
    {
      "Id": "sei",
      "Print_Name": "Seri",
      "Inverted_Name": "Seri"
    },
    {
      "Id": "sej",
      "Print_Name": "Sene",
      "Inverted_Name": "Sene"
    },
    {
      "Id": "sek",
      "Print_Name": "Sekani",
      "Inverted_Name": "Sekani"
    },
    {
      "Id": "sel",
      "Print_Name": "Selkup",
      "Inverted_Name": "Selkup"
    },
    {
      "Id": "sen",
      "Print_Name": "Nanerigé Sénoufo",
      "Inverted_Name": "Sénoufo, Nanerigé"
    },
    {
      "Id": "seo",
      "Print_Name": "Suarmin",
      "Inverted_Name": "Suarmin"
    },
    {
      "Id": "sep",
      "Print_Name": "Sìcìté Sénoufo",
      "Inverted_Name": "Sénoufo, Sìcìté"
    },
    {
      "Id": "seq",
      "Print_Name": "Senara Sénoufo",
      "Inverted_Name": "Sénoufo, Senara"
    },
    {
      "Id": "ser",
      "Print_Name": "Serrano",
      "Inverted_Name": "Serrano"
    },
    {
      "Id": "ses",
      "Print_Name": "Koyraboro Senni Songhai",
      "Inverted_Name": "Songhai, Koyraboro Senni"
    },
    {
      "Id": "set",
      "Print_Name": "Sentani",
      "Inverted_Name": "Sentani"
    },
    {
      "Id": "seu",
      "Print_Name": "Serui-Laut",
      "Inverted_Name": "Serui-Laut"
    },
    {
      "Id": "sev",
      "Print_Name": "Nyarafolo Senoufo",
      "Inverted_Name": "Senoufo, Nyarafolo"
    },
    {
      "Id": "sew",
      "Print_Name": "Sewa Bay",
      "Inverted_Name": "Sewa Bay"
    },
    {
      "Id": "sey",
      "Print_Name": "Secoya",
      "Inverted_Name": "Secoya"
    },
    {
      "Id": "sez",
      "Print_Name": "Senthang Chin",
      "Inverted_Name": "Chin, Senthang"
    },
    {
      "Id": "sfb",
      "Print_Name": "French Belgian Sign Language",
      "Inverted_Name": "French Belgian Sign Language"
    },
    {
      "Id": "sfb",
      "Print_Name": "Langue des signes de Belgique Francophone",
      "Inverted_Name": "Langue des signes de Belgique Francophone"
    },
    {
      "Id": "sfe",
      "Print_Name": "Eastern Subanen",
      "Inverted_Name": "Subanen, Eastern"
    },
    {
      "Id": "sfm",
      "Print_Name": "Small Flowery Miao",
      "Inverted_Name": "Miao, Small Flowery"
    },
    {
      "Id": "sfs",
      "Print_Name": "South African Sign Language",
      "Inverted_Name": "South African Sign Language"
    },
    {
      "Id": "sfw",
      "Print_Name": "Sehwi",
      "Inverted_Name": "Sehwi"
    },
    {
      "Id": "sga",
      "Print_Name": "Old Irish (to 900)",
      "Inverted_Name": "Irish, Old (to 900)"
    },
    {
      "Id": "sgb",
      "Print_Name": "Mag-antsi Ayta",
      "Inverted_Name": "Ayta, Mag-antsi"
    },
    {
      "Id": "sgc",
      "Print_Name": "Kipsigis",
      "Inverted_Name": "Kipsigis"
    },
    {
      "Id": "sgd",
      "Print_Name": "Surigaonon",
      "Inverted_Name": "Surigaonon"
    },
    {
      "Id": "sge",
      "Print_Name": "Segai",
      "Inverted_Name": "Segai"
    },
    {
      "Id": "sgg",
      "Print_Name": "Swiss-German Sign Language",
      "Inverted_Name": "Swiss-German Sign Language"
    },
    {
      "Id": "sgh",
      "Print_Name": "Shughni",
      "Inverted_Name": "Shughni"
    },
    {
      "Id": "sgi",
      "Print_Name": "Suga",
      "Inverted_Name": "Suga"
    },
    {
      "Id": "sgj",
      "Print_Name": "Surgujia",
      "Inverted_Name": "Surgujia"
    },
    {
      "Id": "sgk",
      "Print_Name": "Sangkong",
      "Inverted_Name": "Sangkong"
    },
    {
      "Id": "sgm",
      "Print_Name": "Singa",
      "Inverted_Name": "Singa"
    },
    {
      "Id": "sgp",
      "Print_Name": "Singpho",
      "Inverted_Name": "Singpho"
    },
    {
      "Id": "sgr",
      "Print_Name": "Sangisari",
      "Inverted_Name": "Sangisari"
    },
    {
      "Id": "sgs",
      "Print_Name": "Samogitian",
      "Inverted_Name": "Samogitian"
    },
    {
      "Id": "sgt",
      "Print_Name": "Brokpake",
      "Inverted_Name": "Brokpake"
    },
    {
      "Id": "sgu",
      "Print_Name": "Salas",
      "Inverted_Name": "Salas"
    },
    {
      "Id": "sgw",
      "Print_Name": "Sebat Bet Gurage",
      "Inverted_Name": "Sebat Bet Gurage"
    },
    {
      "Id": "sgx",
      "Print_Name": "Sierra Leone Sign Language",
      "Inverted_Name": "Sierra Leone Sign Language"
    },
    {
      "Id": "sgy",
      "Print_Name": "Sanglechi",
      "Inverted_Name": "Sanglechi"
    },
    {
      "Id": "sgz",
      "Print_Name": "Sursurunga",
      "Inverted_Name": "Sursurunga"
    },
    {
      "Id": "sha",
      "Print_Name": "Shall-Zwall",
      "Inverted_Name": "Shall-Zwall"
    },
    {
      "Id": "shb",
      "Print_Name": "Ninam",
      "Inverted_Name": "Ninam"
    },
    {
      "Id": "shc",
      "Print_Name": "Sonde",
      "Inverted_Name": "Sonde"
    },
    {
      "Id": "shd",
      "Print_Name": "Kundal Shahi",
      "Inverted_Name": "Kundal Shahi"
    },
    {
      "Id": "she",
      "Print_Name": "Sheko",
      "Inverted_Name": "Sheko"
    },
    {
      "Id": "shg",
      "Print_Name": "Shua",
      "Inverted_Name": "Shua"
    },
    {
      "Id": "shh",
      "Print_Name": "Shoshoni",
      "Inverted_Name": "Shoshoni"
    },
    {
      "Id": "shi",
      "Print_Name": "Tachelhit",
      "Inverted_Name": "Tachelhit"
    },
    {
      "Id": "shj",
      "Print_Name": "Shatt",
      "Inverted_Name": "Shatt"
    },
    {
      "Id": "shk",
      "Print_Name": "Shilluk",
      "Inverted_Name": "Shilluk"
    },
    {
      "Id": "shl",
      "Print_Name": "Shendu",
      "Inverted_Name": "Shendu"
    },
    {
      "Id": "shm",
      "Print_Name": "Shahrudi",
      "Inverted_Name": "Shahrudi"
    },
    {
      "Id": "shn",
      "Print_Name": "Shan",
      "Inverted_Name": "Shan"
    },
    {
      "Id": "sho",
      "Print_Name": "Shanga",
      "Inverted_Name": "Shanga"
    },
    {
      "Id": "shp",
      "Print_Name": "Shipibo-Conibo",
      "Inverted_Name": "Shipibo-Conibo"
    },
    {
      "Id": "shq",
      "Print_Name": "Sala",
      "Inverted_Name": "Sala"
    },
    {
      "Id": "shr",
      "Print_Name": "Shi",
      "Inverted_Name": "Shi"
    },
    {
      "Id": "shs",
      "Print_Name": "Shuswap",
      "Inverted_Name": "Shuswap"
    },
    {
      "Id": "sht",
      "Print_Name": "Shasta",
      "Inverted_Name": "Shasta"
    },
    {
      "Id": "shu",
      "Print_Name": "Chadian Arabic",
      "Inverted_Name": "Arabic, Chadian"
    },
    {
      "Id": "shv",
      "Print_Name": "Shehri",
      "Inverted_Name": "Shehri"
    },
    {
      "Id": "shw",
      "Print_Name": "Shwai",
      "Inverted_Name": "Shwai"
    },
    {
      "Id": "shx",
      "Print_Name": "She",
      "Inverted_Name": "She"
    },
    {
      "Id": "shy",
      "Print_Name": "Tachawit",
      "Inverted_Name": "Tachawit"
    },
    {
      "Id": "shz",
      "Print_Name": "Syenara Senoufo",
      "Inverted_Name": "Senoufo, Syenara"
    },
    {
      "Id": "sia",
      "Print_Name": "Akkala Sami",
      "Inverted_Name": "Sami, Akkala"
    },
    {
      "Id": "sib",
      "Print_Name": "Sebop",
      "Inverted_Name": "Sebop"
    },
    {
      "Id": "sid",
      "Print_Name": "Sidamo",
      "Inverted_Name": "Sidamo"
    },
    {
      "Id": "sie",
      "Print_Name": "Simaa",
      "Inverted_Name": "Simaa"
    },
    {
      "Id": "sif",
      "Print_Name": "Siamou",
      "Inverted_Name": "Siamou"
    },
    {
      "Id": "sig",
      "Print_Name": "Paasaal",
      "Inverted_Name": "Paasaal"
    },
    {
      "Id": "sih",
      "Print_Name": "Sîshëë",
      "Inverted_Name": "Sîshëë"
    },
    {
      "Id": "sih",
      "Print_Name": "Zire",
      "Inverted_Name": "Zire"
    },
    {
      "Id": "sii",
      "Print_Name": "Shom Peng",
      "Inverted_Name": "Shom Peng"
    },
    {
      "Id": "sij",
      "Print_Name": "Numbami",
      "Inverted_Name": "Numbami"
    },
    {
      "Id": "sik",
      "Print_Name": "Sikiana",
      "Inverted_Name": "Sikiana"
    },
    {
      "Id": "sil",
      "Print_Name": "Tumulung Sisaala",
      "Inverted_Name": "Sisaala, Tumulung"
    },
    {
      "Id": "sim",
      "Print_Name": "Mende (Papua New Guinea)",
      "Inverted_Name": "Mende (Papua New Guinea)"
    },
    {
      "Id": "sin",
      "Print_Name": "Sinhala",
      "Inverted_Name": "Sinhala"
    },
    {
      "Id": "sin",
      "Print_Name": "Sinhalese",
      "Inverted_Name": "Sinhalese"
    },
    {
      "Id": "sip",
      "Print_Name": "Sikkimese",
      "Inverted_Name": "Sikkimese"
    },
    {
      "Id": "siq",
      "Print_Name": "Sonia",
      "Inverted_Name": "Sonia"
    },
    {
      "Id": "sir",
      "Print_Name": "Siri",
      "Inverted_Name": "Siri"
    },
    {
      "Id": "sis",
      "Print_Name": "Siuslaw",
      "Inverted_Name": "Siuslaw"
    },
    {
      "Id": "siu",
      "Print_Name": "Sinagen",
      "Inverted_Name": "Sinagen"
    },
    {
      "Id": "siv",
      "Print_Name": "Sumariup",
      "Inverted_Name": "Sumariup"
    },
    {
      "Id": "siw",
      "Print_Name": "Siwai",
      "Inverted_Name": "Siwai"
    },
    {
      "Id": "six",
      "Print_Name": "Sumau",
      "Inverted_Name": "Sumau"
    },
    {
      "Id": "siy",
      "Print_Name": "Sivandi",
      "Inverted_Name": "Sivandi"
    },
    {
      "Id": "siz",
      "Print_Name": "Siwi",
      "Inverted_Name": "Siwi"
    },
    {
      "Id": "sja",
      "Print_Name": "Epena",
      "Inverted_Name": "Epena"
    },
    {
      "Id": "sjb",
      "Print_Name": "Sajau Basap",
      "Inverted_Name": "Sajau Basap"
    },
    {
      "Id": "sjd",
      "Print_Name": "Kildin Sami",
      "Inverted_Name": "Sami, Kildin"
    },
    {
      "Id": "sje",
      "Print_Name": "Pite Sami",
      "Inverted_Name": "Sami, Pite"
    },
    {
      "Id": "sjg",
      "Print_Name": "Assangori",
      "Inverted_Name": "Assangori"
    },
    {
      "Id": "sjk",
      "Print_Name": "Kemi Sami",
      "Inverted_Name": "Sami, Kemi"
    },
    {
      "Id": "sjl",
      "Print_Name": "Miji",
      "Inverted_Name": "Miji"
    },
    {
      "Id": "sjl",
      "Print_Name": "Sajalong",
      "Inverted_Name": "Sajalong"
    },
    {
      "Id": "sjm",
      "Print_Name": "Mapun",
      "Inverted_Name": "Mapun"
    },
    {
      "Id": "sjn",
      "Print_Name": "Sindarin",
      "Inverted_Name": "Sindarin"
    },
    {
      "Id": "sjo",
      "Print_Name": "Xibe",
      "Inverted_Name": "Xibe"
    },
    {
      "Id": "sjp",
      "Print_Name": "Surjapuri",
      "Inverted_Name": "Surjapuri"
    },
    {
      "Id": "sjr",
      "Print_Name": "Siar-Lak",
      "Inverted_Name": "Siar-Lak"
    },
    {
      "Id": "sjs",
      "Print_Name": "Senhaja De Srair",
      "Inverted_Name": "Senhaja De Srair"
    },
    {
      "Id": "sjt",
      "Print_Name": "Ter Sami",
      "Inverted_Name": "Sami, Ter"
    },
    {
      "Id": "sju",
      "Print_Name": "Ume Sami",
      "Inverted_Name": "Sami, Ume"
    },
    {
      "Id": "sjw",
      "Print_Name": "Shawnee",
      "Inverted_Name": "Shawnee"
    },
    {
      "Id": "ska",
      "Print_Name": "Skagit",
      "Inverted_Name": "Skagit"
    },
    {
      "Id": "skb",
      "Print_Name": "Saek",
      "Inverted_Name": "Saek"
    },
    {
      "Id": "skc",
      "Print_Name": "Ma Manda",
      "Inverted_Name": "Ma Manda"
    },
    {
      "Id": "skd",
      "Print_Name": "Southern Sierra Miwok",
      "Inverted_Name": "Miwok, Southern Sierra"
    },
    {
      "Id": "ske",
      "Print_Name": "Seke (Vanuatu)",
      "Inverted_Name": "Seke (Vanuatu)"
    },
    {
      "Id": "skf",
      "Print_Name": "Sakirabiá",
      "Inverted_Name": "Sakirabiá"
    },
    {
      "Id": "skg",
      "Print_Name": "Sakalava Malagasy",
      "Inverted_Name": "Malagasy, Sakalava"
    },
    {
      "Id": "skh",
      "Print_Name": "Sikule",
      "Inverted_Name": "Sikule"
    },
    {
      "Id": "ski",
      "Print_Name": "Sika",
      "Inverted_Name": "Sika"
    },
    {
      "Id": "skj",
      "Print_Name": "Seke (Nepal)",
      "Inverted_Name": "Seke (Nepal)"
    },
    {
      "Id": "skm",
      "Print_Name": "Kutong",
      "Inverted_Name": "Kutong"
    },
    {
      "Id": "skn",
      "Print_Name": "Kolibugan Subanon",
      "Inverted_Name": "Subanon, Kolibugan"
    },
    {
      "Id": "sko",
      "Print_Name": "Seko Tengah",
      "Inverted_Name": "Seko Tengah"
    },
    {
      "Id": "skp",
      "Print_Name": "Sekapan",
      "Inverted_Name": "Sekapan"
    },
    {
      "Id": "skq",
      "Print_Name": "Sininkere",
      "Inverted_Name": "Sininkere"
    },
    {
      "Id": "skr",
      "Print_Name": "Saraiki",
      "Inverted_Name": "Saraiki"
    },
    {
      "Id": "skr",
      "Print_Name": "Seraiki",
      "Inverted_Name": "Seraiki"
    },
    {
      "Id": "sks",
      "Print_Name": "Maia",
      "Inverted_Name": "Maia"
    },
    {
      "Id": "skt",
      "Print_Name": "Sakata",
      "Inverted_Name": "Sakata"
    },
    {
      "Id": "sku",
      "Print_Name": "Sakao",
      "Inverted_Name": "Sakao"
    },
    {
      "Id": "skv",
      "Print_Name": "Skou",
      "Inverted_Name": "Skou"
    },
    {
      "Id": "skw",
      "Print_Name": "Skepi Creole Dutch",
      "Inverted_Name": "Creole Dutch, Skepi"
    },
    {
      "Id": "skx",
      "Print_Name": "Seko Padang",
      "Inverted_Name": "Seko Padang"
    },
    {
      "Id": "sky",
      "Print_Name": "Sikaiana",
      "Inverted_Name": "Sikaiana"
    },
    {
      "Id": "skz",
      "Print_Name": "Sekar",
      "Inverted_Name": "Sekar"
    },
    {
      "Id": "slc",
      "Print_Name": "Sáliba",
      "Inverted_Name": "Sáliba"
    },
    {
      "Id": "sld",
      "Print_Name": "Sissala",
      "Inverted_Name": "Sissala"
    },
    {
      "Id": "sle",
      "Print_Name": "Sholaga",
      "Inverted_Name": "Sholaga"
    },
    {
      "Id": "slf",
      "Print_Name": "Swiss-Italian Sign Language",
      "Inverted_Name": "Swiss-Italian Sign Language"
    },
    {
      "Id": "slg",
      "Print_Name": "Selungai Murut",
      "Inverted_Name": "Selungai Murut"
    },
    {
      "Id": "slh",
      "Print_Name": "Southern Puget Sound Salish",
      "Inverted_Name": "Salish, Southern Puget Sound"
    },
    {
      "Id": "sli",
      "Print_Name": "Lower Silesian",
      "Inverted_Name": "Silesian, Lower"
    },
    {
      "Id": "slj",
      "Print_Name": "Salumá",
      "Inverted_Name": "Salumá"
    },
    {
      "Id": "slk",
      "Print_Name": "Slovak",
      "Inverted_Name": "Slovak"
    },
    {
      "Id": "sll",
      "Print_Name": "Salt-Yui",
      "Inverted_Name": "Salt-Yui"
    },
    {
      "Id": "slm",
      "Print_Name": "Pangutaran Sama",
      "Inverted_Name": "Sama, Pangutaran"
    },
    {
      "Id": "sln",
      "Print_Name": "Salinan",
      "Inverted_Name": "Salinan"
    },
    {
      "Id": "slp",
      "Print_Name": "Lamaholot",
      "Inverted_Name": "Lamaholot"
    },
    {
      "Id": "slr",
      "Print_Name": "Salar",
      "Inverted_Name": "Salar"
    },
    {
      "Id": "sls",
      "Print_Name": "Singapore Sign Language",
      "Inverted_Name": "Singapore Sign Language"
    },
    {
      "Id": "slt",
      "Print_Name": "Sila",
      "Inverted_Name": "Sila"
    },
    {
      "Id": "slu",
      "Print_Name": "Selaru",
      "Inverted_Name": "Selaru"
    },
    {
      "Id": "slv",
      "Print_Name": "Slovenian",
      "Inverted_Name": "Slovenian"
    },
    {
      "Id": "slw",
      "Print_Name": "Sialum",
      "Inverted_Name": "Sialum"
    },
    {
      "Id": "slx",
      "Print_Name": "Salampasu",
      "Inverted_Name": "Salampasu"
    },
    {
      "Id": "sly",
      "Print_Name": "Selayar",
      "Inverted_Name": "Selayar"
    },
    {
      "Id": "slz",
      "Print_Name": "Ma'ya",
      "Inverted_Name": "Ma'ya"
    },
    {
      "Id": "sma",
      "Print_Name": "Southern Sami",
      "Inverted_Name": "Sami, Southern"
    },
    {
      "Id": "smb",
      "Print_Name": "Simbari",
      "Inverted_Name": "Simbari"
    },
    {
      "Id": "smc",
      "Print_Name": "Som",
      "Inverted_Name": "Som"
    },
    {
      "Id": "sme",
      "Print_Name": "Northern Sami",
      "Inverted_Name": "Sami, Northern"
    },
    {
      "Id": "smf",
      "Print_Name": "Auwe",
      "Inverted_Name": "Auwe"
    },
    {
      "Id": "smg",
      "Print_Name": "Simbali",
      "Inverted_Name": "Simbali"
    },
    {
      "Id": "smh",
      "Print_Name": "Samei",
      "Inverted_Name": "Samei"
    },
    {
      "Id": "smj",
      "Print_Name": "Lule Sami",
      "Inverted_Name": "Lule Sami"
    },
    {
      "Id": "smk",
      "Print_Name": "Bolinao",
      "Inverted_Name": "Bolinao"
    },
    {
      "Id": "sml",
      "Print_Name": "Central Sama",
      "Inverted_Name": "Sama, Central"
    },
    {
      "Id": "smm",
      "Print_Name": "Musasa",
      "Inverted_Name": "Musasa"
    },
    {
      "Id": "smn",
      "Print_Name": "Inari Sami",
      "Inverted_Name": "Sami, Inari"
    },
    {
      "Id": "smo",
      "Print_Name": "Samoan",
      "Inverted_Name": "Samoan"
    },
    {
      "Id": "smp",
      "Print_Name": "Samaritan",
      "Inverted_Name": "Samaritan"
    },
    {
      "Id": "smq",
      "Print_Name": "Samo",
      "Inverted_Name": "Samo"
    },
    {
      "Id": "smr",
      "Print_Name": "Simeulue",
      "Inverted_Name": "Simeulue"
    },
    {
      "Id": "sms",
      "Print_Name": "Skolt Sami",
      "Inverted_Name": "Sami, Skolt"
    },
    {
      "Id": "smt",
      "Print_Name": "Simte",
      "Inverted_Name": "Simte"
    },
    {
      "Id": "smu",
      "Print_Name": "Somray",
      "Inverted_Name": "Somray"
    },
    {
      "Id": "smv",
      "Print_Name": "Samvedi",
      "Inverted_Name": "Samvedi"
    },
    {
      "Id": "smw",
      "Print_Name": "Sumbawa",
      "Inverted_Name": "Sumbawa"
    },
    {
      "Id": "smx",
      "Print_Name": "Samba",
      "Inverted_Name": "Samba"
    },
    {
      "Id": "smy",
      "Print_Name": "Semnani",
      "Inverted_Name": "Semnani"
    },
    {
      "Id": "smz",
      "Print_Name": "Simeku",
      "Inverted_Name": "Simeku"
    },
    {
      "Id": "sna",
      "Print_Name": "Shona",
      "Inverted_Name": "Shona"
    },
    {
      "Id": "snc",
      "Print_Name": "Sinaugoro",
      "Inverted_Name": "Sinaugoro"
    },
    {
      "Id": "snd",
      "Print_Name": "Sindhi",
      "Inverted_Name": "Sindhi"
    },
    {
      "Id": "sne",
      "Print_Name": "Bau Bidayuh",
      "Inverted_Name": "Bidayuh, Bau"
    },
    {
      "Id": "snf",
      "Print_Name": "Noon",
      "Inverted_Name": "Noon"
    },
    {
      "Id": "sng",
      "Print_Name": "Sanga (Democratic Republic of Congo)",
      "Inverted_Name": "Sanga (Democratic Republic of Congo)"
    },
    {
      "Id": "sni",
      "Print_Name": "Sensi",
      "Inverted_Name": "Sensi"
    },
    {
      "Id": "snj",
      "Print_Name": "Riverain Sango",
      "Inverted_Name": "Sango, Riverain"
    },
    {
      "Id": "snk",
      "Print_Name": "Soninke",
      "Inverted_Name": "Soninke"
    },
    {
      "Id": "snl",
      "Print_Name": "Sangil",
      "Inverted_Name": "Sangil"
    },
    {
      "Id": "snm",
      "Print_Name": "Southern Ma'di",
      "Inverted_Name": "Ma'di, Southern"
    },
    {
      "Id": "snn",
      "Print_Name": "Siona",
      "Inverted_Name": "Siona"
    },
    {
      "Id": "sno",
      "Print_Name": "Snohomish",
      "Inverted_Name": "Snohomish"
    },
    {
      "Id": "snp",
      "Print_Name": "Siane",
      "Inverted_Name": "Siane"
    },
    {
      "Id": "snq",
      "Print_Name": "Sangu (Gabon)",
      "Inverted_Name": "Sangu (Gabon)"
    },
    {
      "Id": "snr",
      "Print_Name": "Sihan",
      "Inverted_Name": "Sihan"
    },
    {
      "Id": "sns",
      "Print_Name": "Nahavaq",
      "Inverted_Name": "Nahavaq"
    },
    {
      "Id": "sns",
      "Print_Name": "South West Bay",
      "Inverted_Name": "South West Bay"
    },
    {
      "Id": "snu",
      "Print_Name": "Senggi",
      "Inverted_Name": "Senggi"
    },
    {
      "Id": "snu",
      "Print_Name": "Viid",
      "Inverted_Name": "Viid"
    },
    {
      "Id": "snv",
      "Print_Name": "Sa'ban",
      "Inverted_Name": "Sa'ban"
    },
    {
      "Id": "snw",
      "Print_Name": "Selee",
      "Inverted_Name": "Selee"
    },
    {
      "Id": "snx",
      "Print_Name": "Sam",
      "Inverted_Name": "Sam"
    },
    {
      "Id": "sny",
      "Print_Name": "Saniyo-Hiyewe",
      "Inverted_Name": "Saniyo-Hiyewe"
    },
    {
      "Id": "snz",
      "Print_Name": "Kou",
      "Inverted_Name": "Kou"
    },
    {
      "Id": "soa",
      "Print_Name": "Thai Song",
      "Inverted_Name": "Thai Song"
    },
    {
      "Id": "sob",
      "Print_Name": "Sobei",
      "Inverted_Name": "Sobei"
    },
    {
      "Id": "soc",
      "Print_Name": "So (Democratic Republic of Congo)",
      "Inverted_Name": "So (Democratic Republic of Congo)"
    },
    {
      "Id": "sod",
      "Print_Name": "Songoora",
      "Inverted_Name": "Songoora"
    },
    {
      "Id": "soe",
      "Print_Name": "Songomeno",
      "Inverted_Name": "Songomeno"
    },
    {
      "Id": "sog",
      "Print_Name": "Sogdian",
      "Inverted_Name": "Sogdian"
    },
    {
      "Id": "soh",
      "Print_Name": "Aka",
      "Inverted_Name": "Aka"
    },
    {
      "Id": "soi",
      "Print_Name": "Sonha",
      "Inverted_Name": "Sonha"
    },
    {
      "Id": "soj",
      "Print_Name": "Soi",
      "Inverted_Name": "Soi"
    },
    {
      "Id": "sok",
      "Print_Name": "Sokoro",
      "Inverted_Name": "Sokoro"
    },
    {
      "Id": "sol",
      "Print_Name": "Solos",
      "Inverted_Name": "Solos"
    },
    {
      "Id": "som",
      "Print_Name": "Somali",
      "Inverted_Name": "Somali"
    },
    {
      "Id": "soo",
      "Print_Name": "Songo",
      "Inverted_Name": "Songo"
    },
    {
      "Id": "sop",
      "Print_Name": "Songe",
      "Inverted_Name": "Songe"
    },
    {
      "Id": "soq",
      "Print_Name": "Kanasi",
      "Inverted_Name": "Kanasi"
    },
    {
      "Id": "sor",
      "Print_Name": "Somrai",
      "Inverted_Name": "Somrai"
    },
    {
      "Id": "sos",
      "Print_Name": "Seeku",
      "Inverted_Name": "Seeku"
    },
    {
      "Id": "sot",
      "Print_Name": "Southern Sotho",
      "Inverted_Name": "Sotho, Southern"
    },
    {
      "Id": "sou",
      "Print_Name": "Southern Thai",
      "Inverted_Name": "Thai, Southern"
    },
    {
      "Id": "sov",
      "Print_Name": "Sonsorol",
      "Inverted_Name": "Sonsorol"
    },
    {
      "Id": "sow",
      "Print_Name": "Sowanda",
      "Inverted_Name": "Sowanda"
    },
    {
      "Id": "sox",
      "Print_Name": "Swo",
      "Inverted_Name": "Swo"
    },
    {
      "Id": "soy",
      "Print_Name": "Miyobe",
      "Inverted_Name": "Miyobe"
    },
    {
      "Id": "soz",
      "Print_Name": "Temi",
      "Inverted_Name": "Temi"
    },
    {
      "Id": "spa",
      "Print_Name": "Castilian",
      "Inverted_Name": "Castilian"
    },
    {
      "Id": "spa",
      "Print_Name": "Spanish",
      "Inverted_Name": "Spanish"
    },
    {
      "Id": "spb",
      "Print_Name": "Sepa (Indonesia)",
      "Inverted_Name": "Sepa (Indonesia)"
    },
    {
      "Id": "spc",
      "Print_Name": "Sapé",
      "Inverted_Name": "Sapé"
    },
    {
      "Id": "spd",
      "Print_Name": "Saep",
      "Inverted_Name": "Saep"
    },
    {
      "Id": "spe",
      "Print_Name": "Sepa (Papua New Guinea)",
      "Inverted_Name": "Sepa (Papua New Guinea)"
    },
    {
      "Id": "spg",
      "Print_Name": "Sian",
      "Inverted_Name": "Sian"
    },
    {
      "Id": "spi",
      "Print_Name": "Saponi",
      "Inverted_Name": "Saponi"
    },
    {
      "Id": "spk",
      "Print_Name": "Sengo",
      "Inverted_Name": "Sengo"
    },
    {
      "Id": "spl",
      "Print_Name": "Selepet",
      "Inverted_Name": "Selepet"
    },
    {
      "Id": "spm",
      "Print_Name": "Akukem",
      "Inverted_Name": "Akukem"
    },
    {
      "Id": "spn",
      "Print_Name": "Sanapaná",
      "Inverted_Name": "Sanapaná"
    },
    {
      "Id": "spo",
      "Print_Name": "Spokane",
      "Inverted_Name": "Spokane"
    },
    {
      "Id": "spp",
      "Print_Name": "Supyire Senoufo",
      "Inverted_Name": "Senoufo, Supyire"
    },
    {
      "Id": "spq",
      "Print_Name": "Loreto-Ucayali Spanish",
      "Inverted_Name": "Spanish, Loreto-Ucayali"
    },
    {
      "Id": "spr",
      "Print_Name": "Saparua",
      "Inverted_Name": "Saparua"
    },
    {
      "Id": "sps",
      "Print_Name": "Saposa",
      "Inverted_Name": "Saposa"
    },
    {
      "Id": "spt",
      "Print_Name": "Spiti Bhoti",
      "Inverted_Name": "Bhoti, Spiti"
    },
    {
      "Id": "spu",
      "Print_Name": "Sapuan",
      "Inverted_Name": "Sapuan"
    },
    {
      "Id": "spv",
      "Print_Name": "Kosli",
      "Inverted_Name": "Kosli"
    },
    {
      "Id": "spv",
      "Print_Name": "Sambalpuri",
      "Inverted_Name": "Sambalpuri"
    },
    {
      "Id": "spx",
      "Print_Name": "South Picene",
      "Inverted_Name": "Picene, South"
    },
    {
      "Id": "spy",
      "Print_Name": "Sabaot",
      "Inverted_Name": "Sabaot"
    },
    {
      "Id": "sqa",
      "Print_Name": "Shama-Sambuga",
      "Inverted_Name": "Shama-Sambuga"
    },
    {
      "Id": "sqh",
      "Print_Name": "Shau",
      "Inverted_Name": "Shau"
    },
    {
      "Id": "sqi",
      "Print_Name": "Albanian",
      "Inverted_Name": "Albanian"
    },
    {
      "Id": "sqk",
      "Print_Name": "Albanian Sign Language",
      "Inverted_Name": "Albanian Sign Language"
    },
    {
      "Id": "sqm",
      "Print_Name": "Suma",
      "Inverted_Name": "Suma"
    },
    {
      "Id": "sqn",
      "Print_Name": "Susquehannock",
      "Inverted_Name": "Susquehannock"
    },
    {
      "Id": "sqo",
      "Print_Name": "Sorkhei",
      "Inverted_Name": "Sorkhei"
    },
    {
      "Id": "sqq",
      "Print_Name": "Sou",
      "Inverted_Name": "Sou"
    },
    {
      "Id": "sqr",
      "Print_Name": "Siculo Arabic",
      "Inverted_Name": "Arabic, Siculo"
    },
    {
      "Id": "sqs",
      "Print_Name": "Sri Lankan Sign Language",
      "Inverted_Name": "Sri Lankan Sign Language"
    },
    {
      "Id": "sqt",
      "Print_Name": "Soqotri",
      "Inverted_Name": "Soqotri"
    },
    {
      "Id": "squ",
      "Print_Name": "Squamish",
      "Inverted_Name": "Squamish"
    },
    {
      "Id": "sqx",
      "Print_Name": "Kufr Qassem Sign Language (KQSL)",
      "Inverted_Name": "Kufr Qassem Sign Language (KQSL)"
    },
    {
      "Id": "sra",
      "Print_Name": "Saruga",
      "Inverted_Name": "Saruga"
    },
    {
      "Id": "srb",
      "Print_Name": "Sora",
      "Inverted_Name": "Sora"
    },
    {
      "Id": "src",
      "Print_Name": "Logudorese Sardinian",
      "Inverted_Name": "Sardinian, Logudorese"
    },
    {
      "Id": "srd",
      "Print_Name": "Sardinian",
      "Inverted_Name": "Sardinian"
    },
    {
      "Id": "sre",
      "Print_Name": "Sara",
      "Inverted_Name": "Sara"
    },
    {
      "Id": "srf",
      "Print_Name": "Nafi",
      "Inverted_Name": "Nafi"
    },
    {
      "Id": "srg",
      "Print_Name": "Sulod",
      "Inverted_Name": "Sulod"
    },
    {
      "Id": "srh",
      "Print_Name": "Sarikoli",
      "Inverted_Name": "Sarikoli"
    },
    {
      "Id": "sri",
      "Print_Name": "Siriano",
      "Inverted_Name": "Siriano"
    },
    {
      "Id": "srk",
      "Print_Name": "Serudung Murut",
      "Inverted_Name": "Serudung Murut"
    },
    {
      "Id": "srl",
      "Print_Name": "Isirawa",
      "Inverted_Name": "Isirawa"
    },
    {
      "Id": "srm",
      "Print_Name": "Saramaccan",
      "Inverted_Name": "Saramaccan"
    },
    {
      "Id": "srn",
      "Print_Name": "Sranan Tongo",
      "Inverted_Name": "Sranan Tongo"
    },
    {
      "Id": "sro",
      "Print_Name": "Campidanese Sardinian",
      "Inverted_Name": "Sardinian, Campidanese"
    },
    {
      "Id": "srp",
      "Print_Name": "Serbian",
      "Inverted_Name": "Serbian"
    },
    {
      "Id": "srq",
      "Print_Name": "Sirionó",
      "Inverted_Name": "Sirionó"
    },
    {
      "Id": "srr",
      "Print_Name": "Serer",
      "Inverted_Name": "Serer"
    },
    {
      "Id": "srs",
      "Print_Name": "Sarsi",
      "Inverted_Name": "Sarsi"
    },
    {
      "Id": "srt",
      "Print_Name": "Sauri",
      "Inverted_Name": "Sauri"
    },
    {
      "Id": "sru",
      "Print_Name": "Suruí",
      "Inverted_Name": "Suruí"
    },
    {
      "Id": "srv",
      "Print_Name": "Southern Sorsoganon",
      "Inverted_Name": "Sorsoganon, Southern"
    },
    {
      "Id": "srw",
      "Print_Name": "Serua",
      "Inverted_Name": "Serua"
    },
    {
      "Id": "srx",
      "Print_Name": "Sirmauri",
      "Inverted_Name": "Sirmauri"
    },
    {
      "Id": "sry",
      "Print_Name": "Sera",
      "Inverted_Name": "Sera"
    },
    {
      "Id": "srz",
      "Print_Name": "Shahmirzadi",
      "Inverted_Name": "Shahmirzadi"
    },
    {
      "Id": "ssb",
      "Print_Name": "Southern Sama",
      "Inverted_Name": "Sama, Southern"
    },
    {
      "Id": "ssc",
      "Print_Name": "Suba-Simbiti",
      "Inverted_Name": "Suba-Simbiti"
    },
    {
      "Id": "ssd",
      "Print_Name": "Siroi",
      "Inverted_Name": "Siroi"
    },
    {
      "Id": "sse",
      "Print_Name": "Balangingi",
      "Inverted_Name": "Balangingi"
    },
    {
      "Id": "sse",
      "Print_Name": "Bangingih Sama",
      "Inverted_Name": "Sama, Bangingih"
    },
    {
      "Id": "ssf",
      "Print_Name": "Thao",
      "Inverted_Name": "Thao"
    },
    {
      "Id": "ssg",
      "Print_Name": "Seimat",
      "Inverted_Name": "Seimat"
    },
    {
      "Id": "ssh",
      "Print_Name": "Shihhi Arabic",
      "Inverted_Name": "Arabic, Shihhi"
    },
    {
      "Id": "ssi",
      "Print_Name": "Sansi",
      "Inverted_Name": "Sansi"
    },
    {
      "Id": "ssj",
      "Print_Name": "Sausi",
      "Inverted_Name": "Sausi"
    },
    {
      "Id": "ssk",
      "Print_Name": "Sunam",
      "Inverted_Name": "Sunam"
    },
    {
      "Id": "ssl",
      "Print_Name": "Western Sisaala",
      "Inverted_Name": "Sisaala, Western"
    },
    {
      "Id": "ssm",
      "Print_Name": "Semnam",
      "Inverted_Name": "Semnam"
    },
    {
      "Id": "ssn",
      "Print_Name": "Waata",
      "Inverted_Name": "Waata"
    },
    {
      "Id": "sso",
      "Print_Name": "Sissano",
      "Inverted_Name": "Sissano"
    },
    {
      "Id": "ssp",
      "Print_Name": "Spanish Sign Language",
      "Inverted_Name": "Spanish Sign Language"
    },
    {
      "Id": "ssq",
      "Print_Name": "So'a",
      "Inverted_Name": "So'a"
    },
    {
      "Id": "ssr",
      "Print_Name": "Swiss-French Sign Language",
      "Inverted_Name": "Swiss-French Sign Language"
    },
    {
      "Id": "sss",
      "Print_Name": "Sô",
      "Inverted_Name": "Sô"
    },
    {
      "Id": "sst",
      "Print_Name": "Sinasina",
      "Inverted_Name": "Sinasina"
    },
    {
      "Id": "ssu",
      "Print_Name": "Susuami",
      "Inverted_Name": "Susuami"
    },
    {
      "Id": "ssv",
      "Print_Name": "Shark Bay",
      "Inverted_Name": "Shark Bay"
    },
    {
      "Id": "ssw",
      "Print_Name": "Swati",
      "Inverted_Name": "Swati"
    },
    {
      "Id": "ssx",
      "Print_Name": "Samberigi",
      "Inverted_Name": "Samberigi"
    },
    {
      "Id": "ssy",
      "Print_Name": "Saho",
      "Inverted_Name": "Saho"
    },
    {
      "Id": "ssz",
      "Print_Name": "Sengseng",
      "Inverted_Name": "Sengseng"
    },
    {
      "Id": "sta",
      "Print_Name": "Settla",
      "Inverted_Name": "Settla"
    },
    {
      "Id": "stb",
      "Print_Name": "Northern Subanen",
      "Inverted_Name": "Subanen, Northern"
    },
    {
      "Id": "std",
      "Print_Name": "Sentinel",
      "Inverted_Name": "Sentinel"
    },
    {
      "Id": "ste",
      "Print_Name": "Liana-Seti",
      "Inverted_Name": "Liana-Seti"
    },
    {
      "Id": "stf",
      "Print_Name": "Seta",
      "Inverted_Name": "Seta"
    },
    {
      "Id": "stg",
      "Print_Name": "Trieng",
      "Inverted_Name": "Trieng"
    },
    {
      "Id": "sth",
      "Print_Name": "Shelta",
      "Inverted_Name": "Shelta"
    },
    {
      "Id": "sti",
      "Print_Name": "Bulo Stieng",
      "Inverted_Name": "Stieng, Bulo"
    },
    {
      "Id": "stj",
      "Print_Name": "Matya Samo",
      "Inverted_Name": "Samo, Matya"
    },
    {
      "Id": "stk",
      "Print_Name": "Arammba",
      "Inverted_Name": "Arammba"
    },
    {
      "Id": "stl",
      "Print_Name": "Stellingwerfs",
      "Inverted_Name": "Stellingwerfs"
    },
    {
      "Id": "stm",
      "Print_Name": "Setaman",
      "Inverted_Name": "Setaman"
    },
    {
      "Id": "stn",
      "Print_Name": "Owa",
      "Inverted_Name": "Owa"
    },
    {
      "Id": "sto",
      "Print_Name": "Stoney",
      "Inverted_Name": "Stoney"
    },
    {
      "Id": "stp",
      "Print_Name": "Southeastern Tepehuan",
      "Inverted_Name": "Tepehuan, Southeastern"
    },
    {
      "Id": "stq",
      "Print_Name": "Saterfriesisch",
      "Inverted_Name": "Saterfriesisch"
    },
    {
      "Id": "str",
      "Print_Name": "Straits Salish",
      "Inverted_Name": "Salish, Straits"
    },
    {
      "Id": "sts",
      "Print_Name": "Shumashti",
      "Inverted_Name": "Shumashti"
    },
    {
      "Id": "stt",
      "Print_Name": "Budeh Stieng",
      "Inverted_Name": "Stieng, Budeh"
    },
    {
      "Id": "stu",
      "Print_Name": "Samtao",
      "Inverted_Name": "Samtao"
    },
    {
      "Id": "stv",
      "Print_Name": "Silt'e",
      "Inverted_Name": "Silt'e"
    },
    {
      "Id": "stw",
      "Print_Name": "Satawalese",
      "Inverted_Name": "Satawalese"
    },
    {
      "Id": "sty",
      "Print_Name": "Siberian Tatar",
      "Inverted_Name": "Tatar, Siberian"
    },
    {
      "Id": "sua",
      "Print_Name": "Sulka",
      "Inverted_Name": "Sulka"
    },
    {
      "Id": "sub",
      "Print_Name": "Suku",
      "Inverted_Name": "Suku"
    },
    {
      "Id": "suc",
      "Print_Name": "Western Subanon",
      "Inverted_Name": "Subanon, Western"
    },
    {
      "Id": "sue",
      "Print_Name": "Suena",
      "Inverted_Name": "Suena"
    },
    {
      "Id": "sug",
      "Print_Name": "Suganga",
      "Inverted_Name": "Suganga"
    },
    {
      "Id": "sui",
      "Print_Name": "Suki",
      "Inverted_Name": "Suki"
    },
    {
      "Id": "suj",
      "Print_Name": "Shubi",
      "Inverted_Name": "Shubi"
    },
    {
      "Id": "suk",
      "Print_Name": "Sukuma",
      "Inverted_Name": "Sukuma"
    },
    {
      "Id": "sun",
      "Print_Name": "Sundanese",
      "Inverted_Name": "Sundanese"
    },
    {
      "Id": "suo",
      "Print_Name": "Bouni",
      "Inverted_Name": "Bouni"
    },
    {
      "Id": "suq",
      "Print_Name": "Suri",
      "Inverted_Name": "Suri"
    },
    {
      "Id": "suq",
      "Print_Name": "Tirmaga-Chai Suri",
      "Inverted_Name": "Suri, Tirmaga-Chai"
    },
    {
      "Id": "sur",
      "Print_Name": "Mwaghavul",
      "Inverted_Name": "Mwaghavul"
    },
    {
      "Id": "sus",
      "Print_Name": "Susu",
      "Inverted_Name": "Susu"
    },
    {
      "Id": "sut",
      "Print_Name": "Subtiaba",
      "Inverted_Name": "Subtiaba"
    },
    {
      "Id": "suv",
      "Print_Name": "Puroik",
      "Inverted_Name": "Puroik"
    },
    {
      "Id": "suw",
      "Print_Name": "Sumbwa",
      "Inverted_Name": "Sumbwa"
    },
    {
      "Id": "sux",
      "Print_Name": "Sumerian",
      "Inverted_Name": "Sumerian"
    },
    {
      "Id": "suy",
      "Print_Name": "Suyá",
      "Inverted_Name": "Suyá"
    },
    {
      "Id": "suz",
      "Print_Name": "Sunwar",
      "Inverted_Name": "Sunwar"
    },
    {
      "Id": "sva",
      "Print_Name": "Svan",
      "Inverted_Name": "Svan"
    },
    {
      "Id": "svb",
      "Print_Name": "Ulau-Suain",
      "Inverted_Name": "Ulau-Suain"
    },
    {
      "Id": "svc",
      "Print_Name": "Vincentian Creole English",
      "Inverted_Name": "Creole English, Vincentian"
    },
    {
      "Id": "sve",
      "Print_Name": "Serili",
      "Inverted_Name": "Serili"
    },
    {
      "Id": "svk",
      "Print_Name": "Slovakian Sign Language",
      "Inverted_Name": "Slovakian Sign Language"
    },
    {
      "Id": "svm",
      "Print_Name": "Slavomolisano",
      "Inverted_Name": "Slavomolisano"
    },
    {
      "Id": "svs",
      "Print_Name": "Savosavo",
      "Inverted_Name": "Savosavo"
    },
    {
      "Id": "svx",
      "Print_Name": "Skalvian",
      "Inverted_Name": "Skalvian"
    },
    {
      "Id": "swa",
      "Print_Name": "Swahili (macrolanguage)",
      "Inverted_Name": "Swahili (macrolanguage)"
    },
    {
      "Id": "swb",
      "Print_Name": "Maore Comorian",
      "Inverted_Name": "Comorian, Maore"
    },
    {
      "Id": "swc",
      "Print_Name": "Congo Swahili",
      "Inverted_Name": "Swahili, Congo"
    },
    {
      "Id": "swe",
      "Print_Name": "Swedish",
      "Inverted_Name": "Swedish"
    },
    {
      "Id": "swf",
      "Print_Name": "Sere",
      "Inverted_Name": "Sere"
    },
    {
      "Id": "swg",
      "Print_Name": "Swabian",
      "Inverted_Name": "Swabian"
    },
    {
      "Id": "swh",
      "Print_Name": "Kiswahili",
      "Inverted_Name": "Kiswahili"
    },
    {
      "Id": "swh",
      "Print_Name": "Swahili (individual language)",
      "Inverted_Name": "Swahili (individual language)"
    },
    {
      "Id": "swi",
      "Print_Name": "Sui",
      "Inverted_Name": "Sui"
    },
    {
      "Id": "swj",
      "Print_Name": "Sira",
      "Inverted_Name": "Sira"
    },
    {
      "Id": "swk",
      "Print_Name": "Malawi Sena",
      "Inverted_Name": "Sena, Malawi"
    },
    {
      "Id": "swl",
      "Print_Name": "Swedish Sign Language",
      "Inverted_Name": "Swedish Sign Language"
    },
    {
      "Id": "swm",
      "Print_Name": "Samosa",
      "Inverted_Name": "Samosa"
    },
    {
      "Id": "swn",
      "Print_Name": "Sawknah",
      "Inverted_Name": "Sawknah"
    },
    {
      "Id": "swo",
      "Print_Name": "Shanenawa",
      "Inverted_Name": "Shanenawa"
    },
    {
      "Id": "swp",
      "Print_Name": "Suau",
      "Inverted_Name": "Suau"
    },
    {
      "Id": "swq",
      "Print_Name": "Sharwa",
      "Inverted_Name": "Sharwa"
    },
    {
      "Id": "swr",
      "Print_Name": "Saweru",
      "Inverted_Name": "Saweru"
    },
    {
      "Id": "sws",
      "Print_Name": "Seluwasan",
      "Inverted_Name": "Seluwasan"
    },
    {
      "Id": "swt",
      "Print_Name": "Sawila",
      "Inverted_Name": "Sawila"
    },
    {
      "Id": "swu",
      "Print_Name": "Suwawa",
      "Inverted_Name": "Suwawa"
    },
    {
      "Id": "swv",
      "Print_Name": "Shekhawati",
      "Inverted_Name": "Shekhawati"
    },
    {
      "Id": "sww",
      "Print_Name": "Sowa",
      "Inverted_Name": "Sowa"
    },
    {
      "Id": "swx",
      "Print_Name": "Suruahá",
      "Inverted_Name": "Suruahá"
    },
    {
      "Id": "swy",
      "Print_Name": "Sarua",
      "Inverted_Name": "Sarua"
    },
    {
      "Id": "sxb",
      "Print_Name": "Suba",
      "Inverted_Name": "Suba"
    },
    {
      "Id": "sxc",
      "Print_Name": "Sicanian",
      "Inverted_Name": "Sicanian"
    },
    {
      "Id": "sxe",
      "Print_Name": "Sighu",
      "Inverted_Name": "Sighu"
    },
    {
      "Id": "sxg",
      "Print_Name": "Shixing",
      "Inverted_Name": "Shixing"
    },
    {
      "Id": "sxg",
      "Print_Name": "Shuhi",
      "Inverted_Name": "Shuhi"
    },
    {
      "Id": "sxk",
      "Print_Name": "Southern Kalapuya",
      "Inverted_Name": "Kalapuya, Southern"
    },
    {
      "Id": "sxl",
      "Print_Name": "Selian",
      "Inverted_Name": "Selian"
    },
    {
      "Id": "sxm",
      "Print_Name": "Samre",
      "Inverted_Name": "Samre"
    },
    {
      "Id": "sxn",
      "Print_Name": "Sangir",
      "Inverted_Name": "Sangir"
    },
    {
      "Id": "sxo",
      "Print_Name": "Sorothaptic",
      "Inverted_Name": "Sorothaptic"
    },
    {
      "Id": "sxr",
      "Print_Name": "Saaroa",
      "Inverted_Name": "Saaroa"
    },
    {
      "Id": "sxs",
      "Print_Name": "Sasaru",
      "Inverted_Name": "Sasaru"
    },
    {
      "Id": "sxu",
      "Print_Name": "Upper Saxon",
      "Inverted_Name": "Saxon, Upper"
    },
    {
      "Id": "sxw",
      "Print_Name": "Saxwe Gbe",
      "Inverted_Name": "Gbe, Saxwe"
    },
    {
      "Id": "sya",
      "Print_Name": "Siang",
      "Inverted_Name": "Siang"
    },
    {
      "Id": "syb",
      "Print_Name": "Central Subanen",
      "Inverted_Name": "Subanen, Central"
    },
    {
      "Id": "syc",
      "Print_Name": "Classical Syriac",
      "Inverted_Name": "Syriac, Classical"
    },
    {
      "Id": "syi",
      "Print_Name": "Seki",
      "Inverted_Name": "Seki"
    },
    {
      "Id": "syk",
      "Print_Name": "Sukur",
      "Inverted_Name": "Sukur"
    },
    {
      "Id": "syl",
      "Print_Name": "Sylheti",
      "Inverted_Name": "Sylheti"
    },
    {
      "Id": "sym",
      "Print_Name": "Maya Samo",
      "Inverted_Name": "Samo, Maya"
    },
    {
      "Id": "syn",
      "Print_Name": "Senaya",
      "Inverted_Name": "Senaya"
    },
    {
      "Id": "syo",
      "Print_Name": "Suoy",
      "Inverted_Name": "Suoy"
    },
    {
      "Id": "syr",
      "Print_Name": "Syriac",
      "Inverted_Name": "Syriac"
    },
    {
      "Id": "sys",
      "Print_Name": "Sinyar",
      "Inverted_Name": "Sinyar"
    },
    {
      "Id": "syw",
      "Print_Name": "Kagate",
      "Inverted_Name": "Kagate"
    },
    {
      "Id": "syx",
      "Print_Name": "Samay",
      "Inverted_Name": "Samay"
    },
    {
      "Id": "syy",
      "Print_Name": "Al-Sayyid Bedouin Sign Language",
      "Inverted_Name": "Al-Sayyid Bedouin Sign Language"
    },
    {
      "Id": "sza",
      "Print_Name": "Semelai",
      "Inverted_Name": "Semelai"
    },
    {
      "Id": "szb",
      "Print_Name": "Ngalum",
      "Inverted_Name": "Ngalum"
    },
    {
      "Id": "szc",
      "Print_Name": "Semaq Beri",
      "Inverted_Name": "Semaq Beri"
    },
    {
      "Id": "sze",
      "Print_Name": "Seze",
      "Inverted_Name": "Seze"
    },
    {
      "Id": "szg",
      "Print_Name": "Sengele",
      "Inverted_Name": "Sengele"
    },
    {
      "Id": "szl",
      "Print_Name": "Silesian",
      "Inverted_Name": "Silesian"
    },
    {
      "Id": "szn",
      "Print_Name": "Sula",
      "Inverted_Name": "Sula"
    },
    {
      "Id": "szp",
      "Print_Name": "Suabo",
      "Inverted_Name": "Suabo"
    },
    {
      "Id": "szs",
      "Print_Name": "Solomon Islands Sign Language",
      "Inverted_Name": "Solomon Islands Sign Language"
    },
    {
      "Id": "szv",
      "Print_Name": "Isu (Fako Division)",
      "Inverted_Name": "Isu (Fako Division)"
    },
    {
      "Id": "szw",
      "Print_Name": "Sawai",
      "Inverted_Name": "Sawai"
    },
    {
      "Id": "szy",
      "Print_Name": "Sakizaya",
      "Inverted_Name": "Sakizaya"
    },
    {
      "Id": "taa",
      "Print_Name": "Lower Tanana",
      "Inverted_Name": "Tanana, Lower"
    },
    {
      "Id": "tab",
      "Print_Name": "Tabassaran",
      "Inverted_Name": "Tabassaran"
    },
    {
      "Id": "tac",
      "Print_Name": "Lowland Tarahumara",
      "Inverted_Name": "Tarahumara, Lowland"
    },
    {
      "Id": "tad",
      "Print_Name": "Tause",
      "Inverted_Name": "Tause"
    },
    {
      "Id": "tae",
      "Print_Name": "Tariana",
      "Inverted_Name": "Tariana"
    },
    {
      "Id": "taf",
      "Print_Name": "Tapirapé",
      "Inverted_Name": "Tapirapé"
    },
    {
      "Id": "tag",
      "Print_Name": "Tagoi",
      "Inverted_Name": "Tagoi"
    },
    {
      "Id": "tah",
      "Print_Name": "Tahitian",
      "Inverted_Name": "Tahitian"
    },
    {
      "Id": "taj",
      "Print_Name": "Eastern Tamang",
      "Inverted_Name": "Tamang, Eastern"
    },
    {
      "Id": "tak",
      "Print_Name": "Tala",
      "Inverted_Name": "Tala"
    },
    {
      "Id": "tal",
      "Print_Name": "Tal",
      "Inverted_Name": "Tal"
    },
    {
      "Id": "tam",
      "Print_Name": "Tamil",
      "Inverted_Name": "Tamil"
    },
    {
      "Id": "tan",
      "Print_Name": "Tangale",
      "Inverted_Name": "Tangale"
    },
    {
      "Id": "tao",
      "Print_Name": "Yami",
      "Inverted_Name": "Yami"
    },
    {
      "Id": "tap",
      "Print_Name": "Taabwa",
      "Inverted_Name": "Taabwa"
    },
    {
      "Id": "taq",
      "Print_Name": "Tamasheq",
      "Inverted_Name": "Tamasheq"
    },
    {
      "Id": "tar",
      "Print_Name": "Central Tarahumara",
      "Inverted_Name": "Tarahumara, Central"
    },
    {
      "Id": "tas",
      "Print_Name": "Tay Boi",
      "Inverted_Name": "Tay Boi"
    },
    {
      "Id": "tat",
      "Print_Name": "Tatar",
      "Inverted_Name": "Tatar"
    },
    {
      "Id": "tau",
      "Print_Name": "Upper Tanana",
      "Inverted_Name": "Tanana, Upper"
    },
    {
      "Id": "tav",
      "Print_Name": "Tatuyo",
      "Inverted_Name": "Tatuyo"
    },
    {
      "Id": "taw",
      "Print_Name": "Tai",
      "Inverted_Name": "Tai"
    },
    {
      "Id": "tax",
      "Print_Name": "Tamki",
      "Inverted_Name": "Tamki"
    },
    {
      "Id": "tay",
      "Print_Name": "Atayal",
      "Inverted_Name": "Atayal"
    },
    {
      "Id": "taz",
      "Print_Name": "Tocho",
      "Inverted_Name": "Tocho"
    },
    {
      "Id": "tba",
      "Print_Name": "Aikanã",
      "Inverted_Name": "Aikanã"
    },
    {
      "Id": "tbc",
      "Print_Name": "Takia",
      "Inverted_Name": "Takia"
    },
    {
      "Id": "tbd",
      "Print_Name": "Kaki Ae",
      "Inverted_Name": "Kaki Ae"
    },
    {
      "Id": "tbe",
      "Print_Name": "Tanimbili",
      "Inverted_Name": "Tanimbili"
    },
    {
      "Id": "tbf",
      "Print_Name": "Mandara",
      "Inverted_Name": "Mandara"
    },
    {
      "Id": "tbg",
      "Print_Name": "North Tairora",
      "Inverted_Name": "Tairora, North"
    },
    {
      "Id": "tbh",
      "Print_Name": "Dharawal",
      "Inverted_Name": "Dharawal"
    },
    {
      "Id": "tbh",
      "Print_Name": "Thurawal",
      "Inverted_Name": "Thurawal"
    },
    {
      "Id": "tbi",
      "Print_Name": "Gaam",
      "Inverted_Name": "Gaam"
    },
    {
      "Id": "tbj",
      "Print_Name": "Tiang",
      "Inverted_Name": "Tiang"
    },
    {
      "Id": "tbk",
      "Print_Name": "Calamian Tagbanwa",
      "Inverted_Name": "Tagbanwa, Calamian"
    },
    {
      "Id": "tbl",
      "Print_Name": "Tboli",
      "Inverted_Name": "Tboli"
    },
    {
      "Id": "tbm",
      "Print_Name": "Tagbu",
      "Inverted_Name": "Tagbu"
    },
    {
      "Id": "tbn",
      "Print_Name": "Barro Negro Tunebo",
      "Inverted_Name": "Tunebo, Barro Negro"
    },
    {
      "Id": "tbo",
      "Print_Name": "Tawala",
      "Inverted_Name": "Tawala"
    },
    {
      "Id": "tbp",
      "Print_Name": "Diebroud",
      "Inverted_Name": "Diebroud"
    },
    {
      "Id": "tbp",
      "Print_Name": "Taworta",
      "Inverted_Name": "Taworta"
    },
    {
      "Id": "tbr",
      "Print_Name": "Tumtum",
      "Inverted_Name": "Tumtum"
    },
    {
      "Id": "tbs",
      "Print_Name": "Tanguat",
      "Inverted_Name": "Tanguat"
    },
    {
      "Id": "tbt",
      "Print_Name": "Tembo (Kitembo)",
      "Inverted_Name": "Tembo (Kitembo)"
    },
    {
      "Id": "tbu",
      "Print_Name": "Tubar",
      "Inverted_Name": "Tubar"
    },
    {
      "Id": "tbv",
      "Print_Name": "Tobo",
      "Inverted_Name": "Tobo"
    },
    {
      "Id": "tbw",
      "Print_Name": "Tagbanwa",
      "Inverted_Name": "Tagbanwa"
    },
    {
      "Id": "tbx",
      "Print_Name": "Kapin",
      "Inverted_Name": "Kapin"
    },
    {
      "Id": "tby",
      "Print_Name": "Tabaru",
      "Inverted_Name": "Tabaru"
    },
    {
      "Id": "tbz",
      "Print_Name": "Ditammari",
      "Inverted_Name": "Ditammari"
    },
    {
      "Id": "tca",
      "Print_Name": "Ticuna",
      "Inverted_Name": "Ticuna"
    },
    {
      "Id": "tcb",
      "Print_Name": "Tanacross",
      "Inverted_Name": "Tanacross"
    },
    {
      "Id": "tcc",
      "Print_Name": "Datooga",
      "Inverted_Name": "Datooga"
    },
    {
      "Id": "tcd",
      "Print_Name": "Tafi",
      "Inverted_Name": "Tafi"
    },
    {
      "Id": "tce",
      "Print_Name": "Southern Tutchone",
      "Inverted_Name": "Tutchone, Southern"
    },
    {
      "Id": "tcf",
      "Print_Name": "Malinaltepec Me'phaa",
      "Inverted_Name": "Me'phaa, Malinaltepec"
    },
    {
      "Id": "tcf",
      "Print_Name": "Malinaltepec Tlapanec",
      "Inverted_Name": "Tlapanec, Malinaltepec"
    },
    {
      "Id": "tcg",
      "Print_Name": "Tamagario",
      "Inverted_Name": "Tamagario"
    },
    {
      "Id": "tch",
      "Print_Name": "Turks And Caicos Creole English",
      "Inverted_Name": "Creole English, Turks And Caicos"
    },
    {
      "Id": "tci",
      "Print_Name": "Wára",
      "Inverted_Name": "Wára"
    },
    {
      "Id": "tck",
      "Print_Name": "Tchitchege",
      "Inverted_Name": "Tchitchege"
    },
    {
      "Id": "tcl",
      "Print_Name": "Taman (Myanmar)",
      "Inverted_Name": "Taman (Myanmar)"
    },
    {
      "Id": "tcm",
      "Print_Name": "Tanahmerah",
      "Inverted_Name": "Tanahmerah"
    },
    {
      "Id": "tcn",
      "Print_Name": "Tichurong",
      "Inverted_Name": "Tichurong"
    },
    {
      "Id": "tco",
      "Print_Name": "Taungyo",
      "Inverted_Name": "Taungyo"
    },
    {
      "Id": "tcp",
      "Print_Name": "Tawr Chin",
      "Inverted_Name": "Chin, Tawr"
    },
    {
      "Id": "tcq",
      "Print_Name": "Kaiy",
      "Inverted_Name": "Kaiy"
    },
    {
      "Id": "tcs",
      "Print_Name": "Torres Strait Creole",
      "Inverted_Name": "Creole, Torres Strait"
    },
    {
      "Id": "tcs",
      "Print_Name": "Yumplatok",
      "Inverted_Name": "Yumplatok"
    },
    {
      "Id": "tct",
      "Print_Name": "T'en",
      "Inverted_Name": "T'en"
    },
    {
      "Id": "tcu",
      "Print_Name": "Southeastern Tarahumara",
      "Inverted_Name": "Tarahumara, Southeastern"
    },
    {
      "Id": "tcw",
      "Print_Name": "Tecpatlán Totonac",
      "Inverted_Name": "Totonac, Tecpatlán"
    },
    {
      "Id": "tcx",
      "Print_Name": "Toda",
      "Inverted_Name": "Toda"
    },
    {
      "Id": "tcy",
      "Print_Name": "Tulu",
      "Inverted_Name": "Tulu"
    },
    {
      "Id": "tcz",
      "Print_Name": "Thado Chin",
      "Inverted_Name": "Chin, Thado"
    },
    {
      "Id": "tda",
      "Print_Name": "Tagdal",
      "Inverted_Name": "Tagdal"
    },
    {
      "Id": "tdb",
      "Print_Name": "Panchpargania",
      "Inverted_Name": "Panchpargania"
    },
    {
      "Id": "tdc",
      "Print_Name": "Emberá-Tadó",
      "Inverted_Name": "Emberá-Tadó"
    },
    {
      "Id": "tdd",
      "Print_Name": "Tai Nüa",
      "Inverted_Name": "Tai Nüa"
    },
    {
      "Id": "tde",
      "Print_Name": "Tiranige Diga Dogon",
      "Inverted_Name": "Dogon, Tiranige Diga"
    },
    {
      "Id": "tdf",
      "Print_Name": "Talieng",
      "Inverted_Name": "Talieng"
    },
    {
      "Id": "tdg",
      "Print_Name": "Western Tamang",
      "Inverted_Name": "Tamang, Western"
    },
    {
      "Id": "tdh",
      "Print_Name": "Thulung",
      "Inverted_Name": "Thulung"
    },
    {
      "Id": "tdi",
      "Print_Name": "Tomadino",
      "Inverted_Name": "Tomadino"
    },
    {
      "Id": "tdj",
      "Print_Name": "Tajio",
      "Inverted_Name": "Tajio"
    },
    {
      "Id": "tdk",
      "Print_Name": "Tambas",
      "Inverted_Name": "Tambas"
    },
    {
      "Id": "tdl",
      "Print_Name": "Sur",
      "Inverted_Name": "Sur"
    },
    {
      "Id": "tdm",
      "Print_Name": "Taruma",
      "Inverted_Name": "Taruma"
    },
    {
      "Id": "tdn",
      "Print_Name": "Tondano",
      "Inverted_Name": "Tondano"
    },
    {
      "Id": "tdo",
      "Print_Name": "Teme",
      "Inverted_Name": "Teme"
    },
    {
      "Id": "tdq",
      "Print_Name": "Tita",
      "Inverted_Name": "Tita"
    },
    {
      "Id": "tdr",
      "Print_Name": "Todrah",
      "Inverted_Name": "Todrah"
    },
    {
      "Id": "tds",
      "Print_Name": "Doutai",
      "Inverted_Name": "Doutai"
    },
    {
      "Id": "tdt",
      "Print_Name": "Tetun Dili",
      "Inverted_Name": "Tetun Dili"
    },
    {
      "Id": "tdv",
      "Print_Name": "Toro",
      "Inverted_Name": "Toro"
    },
    {
      "Id": "tdx",
      "Print_Name": "Tandroy-Mahafaly Malagasy",
      "Inverted_Name": "Malagasy, Tandroy-Mahafaly"
    },
    {
      "Id": "tdy",
      "Print_Name": "Tadyawan",
      "Inverted_Name": "Tadyawan"
    },
    {
      "Id": "tea",
      "Print_Name": "Temiar",
      "Inverted_Name": "Temiar"
    },
    {
      "Id": "teb",
      "Print_Name": "Tetete",
      "Inverted_Name": "Tetete"
    },
    {
      "Id": "tec",
      "Print_Name": "Terik",
      "Inverted_Name": "Terik"
    },
    {
      "Id": "ted",
      "Print_Name": "Tepo Krumen",
      "Inverted_Name": "Krumen, Tepo"
    },
    {
      "Id": "tee",
      "Print_Name": "Huehuetla Tepehua",
      "Inverted_Name": "Tepehua, Huehuetla"
    },
    {
      "Id": "tef",
      "Print_Name": "Teressa",
      "Inverted_Name": "Teressa"
    },
    {
      "Id": "teg",
      "Print_Name": "Teke-Tege",
      "Inverted_Name": "Teke-Tege"
    },
    {
      "Id": "teh",
      "Print_Name": "Tehuelche",
      "Inverted_Name": "Tehuelche"
    },
    {
      "Id": "tei",
      "Print_Name": "Torricelli",
      "Inverted_Name": "Torricelli"
    },
    {
      "Id": "tek",
      "Print_Name": "Ibali Teke",
      "Inverted_Name": "Teke, Ibali"
    },
    {
      "Id": "tel",
      "Print_Name": "Telugu",
      "Inverted_Name": "Telugu"
    },
    {
      "Id": "tem",
      "Print_Name": "Timne",
      "Inverted_Name": "Timne"
    },
    {
      "Id": "ten",
      "Print_Name": "Tama (Colombia)",
      "Inverted_Name": "Tama (Colombia)"
    },
    {
      "Id": "teo",
      "Print_Name": "Teso",
      "Inverted_Name": "Teso"
    },
    {
      "Id": "tep",
      "Print_Name": "Tepecano",
      "Inverted_Name": "Tepecano"
    },
    {
      "Id": "teq",
      "Print_Name": "Temein",
      "Inverted_Name": "Temein"
    },
    {
      "Id": "ter",
      "Print_Name": "Tereno",
      "Inverted_Name": "Tereno"
    },
    {
      "Id": "tes",
      "Print_Name": "Tengger",
      "Inverted_Name": "Tengger"
    },
    {
      "Id": "tet",
      "Print_Name": "Tetum",
      "Inverted_Name": "Tetum"
    },
    {
      "Id": "teu",
      "Print_Name": "Soo",
      "Inverted_Name": "Soo"
    },
    {
      "Id": "tev",
      "Print_Name": "Teor",
      "Inverted_Name": "Teor"
    },
    {
      "Id": "tew",
      "Print_Name": "Tewa (USA)",
      "Inverted_Name": "Tewa (USA)"
    },
    {
      "Id": "tex",
      "Print_Name": "Tennet",
      "Inverted_Name": "Tennet"
    },
    {
      "Id": "tey",
      "Print_Name": "Tulishi",
      "Inverted_Name": "Tulishi"
    },
    {
      "Id": "tez",
      "Print_Name": "Tetserret",
      "Inverted_Name": "Tetserret"
    },
    {
      "Id": "tfi",
      "Print_Name": "Tofin Gbe",
      "Inverted_Name": "Gbe, Tofin"
    },
    {
      "Id": "tfn",
      "Print_Name": "Tanaina",
      "Inverted_Name": "Tanaina"
    },
    {
      "Id": "tfo",
      "Print_Name": "Tefaro",
      "Inverted_Name": "Tefaro"
    },
    {
      "Id": "tfr",
      "Print_Name": "Teribe",
      "Inverted_Name": "Teribe"
    },
    {
      "Id": "tft",
      "Print_Name": "Ternate",
      "Inverted_Name": "Ternate"
    },
    {
      "Id": "tga",
      "Print_Name": "Sagalla",
      "Inverted_Name": "Sagalla"
    },
    {
      "Id": "tgb",
      "Print_Name": "Tobilung",
      "Inverted_Name": "Tobilung"
    },
    {
      "Id": "tgc",
      "Print_Name": "Tigak",
      "Inverted_Name": "Tigak"
    },
    {
      "Id": "tgd",
      "Print_Name": "Ciwogai",
      "Inverted_Name": "Ciwogai"
    },
    {
      "Id": "tge",
      "Print_Name": "Eastern Gorkha Tamang",
      "Inverted_Name": "Tamang, Eastern Gorkha"
    },
    {
      "Id": "tgf",
      "Print_Name": "Chalikha",
      "Inverted_Name": "Chalikha"
    },
    {
      "Id": "tgh",
      "Print_Name": "Tobagonian Creole English",
      "Inverted_Name": "Creole English, Tobagonian"
    },
    {
      "Id": "tgi",
      "Print_Name": "Lawunuia",
      "Inverted_Name": "Lawunuia"
    },
    {
      "Id": "tgj",
      "Print_Name": "Tagin",
      "Inverted_Name": "Tagin"
    },
    {
      "Id": "tgk",
      "Print_Name": "Tajik",
      "Inverted_Name": "Tajik"
    },
    {
      "Id": "tgl",
      "Print_Name": "Tagalog",
      "Inverted_Name": "Tagalog"
    },
    {
      "Id": "tgn",
      "Print_Name": "Tandaganon",
      "Inverted_Name": "Tandaganon"
    },
    {
      "Id": "tgo",
      "Print_Name": "Sudest",
      "Inverted_Name": "Sudest"
    },
    {
      "Id": "tgp",
      "Print_Name": "Tangoa",
      "Inverted_Name": "Tangoa"
    },
    {
      "Id": "tgq",
      "Print_Name": "Tring",
      "Inverted_Name": "Tring"
    },
    {
      "Id": "tgr",
      "Print_Name": "Tareng",
      "Inverted_Name": "Tareng"
    },
    {
      "Id": "tgs",
      "Print_Name": "Nume",
      "Inverted_Name": "Nume"
    },
    {
      "Id": "tgt",
      "Print_Name": "Central Tagbanwa",
      "Inverted_Name": "Tagbanwa, Central"
    },
    {
      "Id": "tgu",
      "Print_Name": "Tanggu",
      "Inverted_Name": "Tanggu"
    },
    {
      "Id": "tgv",
      "Print_Name": "Tingui-Boto",
      "Inverted_Name": "Tingui-Boto"
    },
    {
      "Id": "tgw",
      "Print_Name": "Tagwana Senoufo",
      "Inverted_Name": "Senoufo, Tagwana"
    },
    {
      "Id": "tgx",
      "Print_Name": "Tagish",
      "Inverted_Name": "Tagish"
    },
    {
      "Id": "tgy",
      "Print_Name": "Togoyo",
      "Inverted_Name": "Togoyo"
    },
    {
      "Id": "tgz",
      "Print_Name": "Tagalaka",
      "Inverted_Name": "Tagalaka"
    },
    {
      "Id": "tha",
      "Print_Name": "Thai",
      "Inverted_Name": "Thai"
    },
    {
      "Id": "thd",
      "Print_Name": "Kuuk Thaayorre",
      "Inverted_Name": "Kuuk Thaayorre"
    },
    {
      "Id": "thd",
      "Print_Name": "Thayore",
      "Inverted_Name": "Thayore"
    },
    {
      "Id": "the",
      "Print_Name": "Chitwania Tharu",
      "Inverted_Name": "Tharu, Chitwania"
    },
    {
      "Id": "thf",
      "Print_Name": "Thangmi",
      "Inverted_Name": "Thangmi"
    },
    {
      "Id": "thh",
      "Print_Name": "Northern Tarahumara",
      "Inverted_Name": "Tarahumara, Northern"
    },
    {
      "Id": "thi",
      "Print_Name": "Tai Long",
      "Inverted_Name": "Tai Long"
    },
    {
      "Id": "thk",
      "Print_Name": "Kitharaka",
      "Inverted_Name": "Kitharaka"
    },
    {
      "Id": "thk",
      "Print_Name": "Tharaka",
      "Inverted_Name": "Tharaka"
    },
    {
      "Id": "thl",
      "Print_Name": "Dangaura Tharu",
      "Inverted_Name": "Tharu, Dangaura"
    },
    {
      "Id": "thm",
      "Print_Name": "Aheu",
      "Inverted_Name": "Aheu"
    },
    {
      "Id": "thn",
      "Print_Name": "Thachanadan",
      "Inverted_Name": "Thachanadan"
    },
    {
      "Id": "thp",
      "Print_Name": "Thompson",
      "Inverted_Name": "Thompson"
    },
    {
      "Id": "thq",
      "Print_Name": "Kochila Tharu",
      "Inverted_Name": "Tharu, Kochila"
    },
    {
      "Id": "thr",
      "Print_Name": "Rana Tharu",
      "Inverted_Name": "Tharu, Rana"
    },
    {
      "Id": "ths",
      "Print_Name": "Thakali",
      "Inverted_Name": "Thakali"
    },
    {
      "Id": "tht",
      "Print_Name": "Tahltan",
      "Inverted_Name": "Tahltan"
    },
    {
      "Id": "thu",
      "Print_Name": "Thuri",
      "Inverted_Name": "Thuri"
    },
    {
      "Id": "thv",
      "Print_Name": "Tahaggart Tamahaq",
      "Inverted_Name": "Tamahaq, Tahaggart"
    },
    {
      "Id": "thy",
      "Print_Name": "Tha",
      "Inverted_Name": "Tha"
    },
    {
      "Id": "thz",
      "Print_Name": "Tayart Tamajeq",
      "Inverted_Name": "Tamajeq, Tayart"
    },
    {
      "Id": "tia",
      "Print_Name": "Tidikelt Tamazight",
      "Inverted_Name": "Tamazight, Tidikelt"
    },
    {
      "Id": "tic",
      "Print_Name": "Tira",
      "Inverted_Name": "Tira"
    },
    {
      "Id": "tif",
      "Print_Name": "Tifal",
      "Inverted_Name": "Tifal"
    },
    {
      "Id": "tig",
      "Print_Name": "Tigre",
      "Inverted_Name": "Tigre"
    },
    {
      "Id": "tih",
      "Print_Name": "Timugon Murut",
      "Inverted_Name": "Murut, Timugon"
    },
    {
      "Id": "tii",
      "Print_Name": "Tiene",
      "Inverted_Name": "Tiene"
    },
    {
      "Id": "tij",
      "Print_Name": "Tilung",
      "Inverted_Name": "Tilung"
    },
    {
      "Id": "tik",
      "Print_Name": "Tikar",
      "Inverted_Name": "Tikar"
    },
    {
      "Id": "til",
      "Print_Name": "Tillamook",
      "Inverted_Name": "Tillamook"
    },
    {
      "Id": "tim",
      "Print_Name": "Timbe",
      "Inverted_Name": "Timbe"
    },
    {
      "Id": "tin",
      "Print_Name": "Tindi",
      "Inverted_Name": "Tindi"
    },
    {
      "Id": "tio",
      "Print_Name": "Teop",
      "Inverted_Name": "Teop"
    },
    {
      "Id": "tip",
      "Print_Name": "Trimuris",
      "Inverted_Name": "Trimuris"
    },
    {
      "Id": "tiq",
      "Print_Name": "Tiéfo",
      "Inverted_Name": "Tiéfo"
    },
    {
      "Id": "tir",
      "Print_Name": "Tigrinya",
      "Inverted_Name": "Tigrinya"
    },
    {
      "Id": "tis",
      "Print_Name": "Masadiit Itneg",
      "Inverted_Name": "Itneg, Masadiit"
    },
    {
      "Id": "tit",
      "Print_Name": "Tinigua",
      "Inverted_Name": "Tinigua"
    },
    {
      "Id": "tiu",
      "Print_Name": "Adasen",
      "Inverted_Name": "Adasen"
    },
    {
      "Id": "tiv",
      "Print_Name": "Tiv",
      "Inverted_Name": "Tiv"
    },
    {
      "Id": "tiw",
      "Print_Name": "Tiwi",
      "Inverted_Name": "Tiwi"
    },
    {
      "Id": "tix",
      "Print_Name": "Southern Tiwa",
      "Inverted_Name": "Tiwa, Southern"
    },
    {
      "Id": "tiy",
      "Print_Name": "Tiruray",
      "Inverted_Name": "Tiruray"
    },
    {
      "Id": "tiz",
      "Print_Name": "Tai Hongjin",
      "Inverted_Name": "Tai Hongjin"
    },
    {
      "Id": "tja",
      "Print_Name": "Tajuasohn",
      "Inverted_Name": "Tajuasohn"
    },
    {
      "Id": "tjg",
      "Print_Name": "Tunjung",
      "Inverted_Name": "Tunjung"
    },
    {
      "Id": "tji",
      "Print_Name": "Northern Tujia",
      "Inverted_Name": "Tujia, Northern"
    },
    {
      "Id": "tjj",
      "Print_Name": "Tjungundji",
      "Inverted_Name": "Tjungundji"
    },
    {
      "Id": "tjl",
      "Print_Name": "Tai Laing",
      "Inverted_Name": "Tai Laing"
    },
    {
      "Id": "tjm",
      "Print_Name": "Timucua",
      "Inverted_Name": "Timucua"
    },
    {
      "Id": "tjn",
      "Print_Name": "Tonjon",
      "Inverted_Name": "Tonjon"
    },
    {
      "Id": "tjo",
      "Print_Name": "Temacine Tamazight",
      "Inverted_Name": "Tamazight, Temacine"
    },
    {
      "Id": "tjp",
      "Print_Name": "Tjupany",
      "Inverted_Name": "Tjupany"
    },
    {
      "Id": "tjs",
      "Print_Name": "Southern Tujia",
      "Inverted_Name": "Tujia, Southern"
    },
    {
      "Id": "tju",
      "Print_Name": "Tjurruru",
      "Inverted_Name": "Tjurruru"
    },
    {
      "Id": "tjw",
      "Print_Name": "Djabwurrung",
      "Inverted_Name": "Djabwurrung"
    },
    {
      "Id": "tka",
      "Print_Name": "Truká",
      "Inverted_Name": "Truká"
    },
    {
      "Id": "tkb",
      "Print_Name": "Buksa",
      "Inverted_Name": "Buksa"
    },
    {
      "Id": "tkd",
      "Print_Name": "Tukudede",
      "Inverted_Name": "Tukudede"
    },
    {
      "Id": "tke",
      "Print_Name": "Takwane",
      "Inverted_Name": "Takwane"
    },
    {
      "Id": "tkf",
      "Print_Name": "Tukumanféd",
      "Inverted_Name": "Tukumanféd"
    },
    {
      "Id": "tkg",
      "Print_Name": "Tesaka Malagasy",
      "Inverted_Name": "Malagasy, Tesaka"
    },
    {
      "Id": "tkl",
      "Print_Name": "Tokelau",
      "Inverted_Name": "Tokelau"
    },
    {
      "Id": "tkm",
      "Print_Name": "Takelma",
      "Inverted_Name": "Takelma"
    },
    {
      "Id": "tkn",
      "Print_Name": "Toku-No-Shima",
      "Inverted_Name": "Toku-No-Shima"
    },
    {
      "Id": "tkp",
      "Print_Name": "Tikopia",
      "Inverted_Name": "Tikopia"
    },
    {
      "Id": "tkq",
      "Print_Name": "Tee",
      "Inverted_Name": "Tee"
    },
    {
      "Id": "tkr",
      "Print_Name": "Tsakhur",
      "Inverted_Name": "Tsakhur"
    },
    {
      "Id": "tks",
      "Print_Name": "Takestani",
      "Inverted_Name": "Takestani"
    },
    {
      "Id": "tkt",
      "Print_Name": "Kathoriya Tharu",
      "Inverted_Name": "Tharu, Kathoriya"
    },
    {
      "Id": "tku",
      "Print_Name": "Upper Necaxa Totonac",
      "Inverted_Name": "Totonac, Upper Necaxa"
    },
    {
      "Id": "tkv",
      "Print_Name": "Mur Pano",
      "Inverted_Name": "Mur Pano"
    },
    {
      "Id": "tkw",
      "Print_Name": "Teanu",
      "Inverted_Name": "Teanu"
    },
    {
      "Id": "tkx",
      "Print_Name": "Tangko",
      "Inverted_Name": "Tangko"
    },
    {
      "Id": "tkz",
      "Print_Name": "Takua",
      "Inverted_Name": "Takua"
    },
    {
      "Id": "tla",
      "Print_Name": "Southwestern Tepehuan",
      "Inverted_Name": "Tepehuan, Southwestern"
    },
    {
      "Id": "tlb",
      "Print_Name": "Tobelo",
      "Inverted_Name": "Tobelo"
    },
    {
      "Id": "tlc",
      "Print_Name": "Yecuatla Totonac",
      "Inverted_Name": "Totonac, Yecuatla"
    },
    {
      "Id": "tld",
      "Print_Name": "Talaud",
      "Inverted_Name": "Talaud"
    },
    {
      "Id": "tlf",
      "Print_Name": "Telefol",
      "Inverted_Name": "Telefol"
    },
    {
      "Id": "tlg",
      "Print_Name": "Tofanma",
      "Inverted_Name": "Tofanma"
    },
    {
      "Id": "tlh",
      "Print_Name": "Klingon",
      "Inverted_Name": "Klingon"
    },
    {
      "Id": "tlh",
      "Print_Name": "tlhIngan Hol",
      "Inverted_Name": "tlhIngan Hol"
    },
    {
      "Id": "tli",
      "Print_Name": "Tlingit",
      "Inverted_Name": "Tlingit"
    },
    {
      "Id": "tlj",
      "Print_Name": "Talinga-Bwisi",
      "Inverted_Name": "Talinga-Bwisi"
    },
    {
      "Id": "tlk",
      "Print_Name": "Taloki",
      "Inverted_Name": "Taloki"
    },
    {
      "Id": "tll",
      "Print_Name": "Tetela",
      "Inverted_Name": "Tetela"
    },
    {
      "Id": "tlm",
      "Print_Name": "Tolomako",
      "Inverted_Name": "Tolomako"
    },
    {
      "Id": "tln",
      "Print_Name": "Talondo'",
      "Inverted_Name": "Talondo'"
    },
    {
      "Id": "tlo",
      "Print_Name": "Talodi",
      "Inverted_Name": "Talodi"
    },
    {
      "Id": "tlp",
      "Print_Name": "Filomena Mata-Coahuitlán Totonac",
      "Inverted_Name": "Totonac, Filomena Mata-Coahuitlán"
    },
    {
      "Id": "tlq",
      "Print_Name": "Tai Loi",
      "Inverted_Name": "Tai Loi"
    },
    {
      "Id": "tlr",
      "Print_Name": "Talise",
      "Inverted_Name": "Talise"
    },
    {
      "Id": "tls",
      "Print_Name": "Tambotalo",
      "Inverted_Name": "Tambotalo"
    },
    {
      "Id": "tlt",
      "Print_Name": "Sou Nama",
      "Inverted_Name": "Sou Nama"
    },
    {
      "Id": "tlt",
      "Print_Name": "Teluti",
      "Inverted_Name": "Teluti"
    },
    {
      "Id": "tlu",
      "Print_Name": "Tulehu",
      "Inverted_Name": "Tulehu"
    },
    {
      "Id": "tlv",
      "Print_Name": "Taliabu",
      "Inverted_Name": "Taliabu"
    },
    {
      "Id": "tlx",
      "Print_Name": "Khehek",
      "Inverted_Name": "Khehek"
    },
    {
      "Id": "tly",
      "Print_Name": "Talysh",
      "Inverted_Name": "Talysh"
    },
    {
      "Id": "tma",
      "Print_Name": "Tama (Chad)",
      "Inverted_Name": "Tama (Chad)"
    },
    {
      "Id": "tmb",
      "Print_Name": "Avava",
      "Inverted_Name": "Avava"
    },
    {
      "Id": "tmb",
      "Print_Name": "Katbol",
      "Inverted_Name": "Katbol"
    },
    {
      "Id": "tmc",
      "Print_Name": "Tumak",
      "Inverted_Name": "Tumak"
    },
    {
      "Id": "tmd",
      "Print_Name": "Haruai",
      "Inverted_Name": "Haruai"
    },
    {
      "Id": "tme",
      "Print_Name": "Tremembé",
      "Inverted_Name": "Tremembé"
    },
    {
      "Id": "tmf",
      "Print_Name": "Toba-Maskoy",
      "Inverted_Name": "Toba-Maskoy"
    },
    {
      "Id": "tmg",
      "Print_Name": "Ternateño",
      "Inverted_Name": "Ternateño"
    },
    {
      "Id": "tmh",
      "Print_Name": "Tamashek",
      "Inverted_Name": "Tamashek"
    },
    {
      "Id": "tmi",
      "Print_Name": "Tutuba",
      "Inverted_Name": "Tutuba"
    },
    {
      "Id": "tmj",
      "Print_Name": "Samarokena",
      "Inverted_Name": "Samarokena"
    },
    {
      "Id": "tml",
      "Print_Name": "Tamnim Citak",
      "Inverted_Name": "Citak, Tamnim"
    },
    {
      "Id": "tmm",
      "Print_Name": "Tai Thanh",
      "Inverted_Name": "Tai Thanh"
    },
    {
      "Id": "tmn",
      "Print_Name": "Taman (Indonesia)",
      "Inverted_Name": "Taman (Indonesia)"
    },
    {
      "Id": "tmo",
      "Print_Name": "Temoq",
      "Inverted_Name": "Temoq"
    },
    {
      "Id": "tmq",
      "Print_Name": "Tumleo",
      "Inverted_Name": "Tumleo"
    },
    {
      "Id": "tmr",
      "Print_Name": "Jewish Babylonian Aramaic (ca. 200-1200 CE)",
      "Inverted_Name": "Aramaic, Jewish Babylonian (ca. 200-1200 CE)"
    },
    {
      "Id": "tms",
      "Print_Name": "Tima",
      "Inverted_Name": "Tima"
    },
    {
      "Id": "tmt",
      "Print_Name": "Tasmate",
      "Inverted_Name": "Tasmate"
    },
    {
      "Id": "tmu",
      "Print_Name": "Iau",
      "Inverted_Name": "Iau"
    },
    {
      "Id": "tmv",
      "Print_Name": "Tembo (Motembo)",
      "Inverted_Name": "Tembo (Motembo)"
    },
    {
      "Id": "tmw",
      "Print_Name": "Temuan",
      "Inverted_Name": "Temuan"
    },
    {
      "Id": "tmy",
      "Print_Name": "Tami",
      "Inverted_Name": "Tami"
    },
    {
      "Id": "tmz",
      "Print_Name": "Tamanaku",
      "Inverted_Name": "Tamanaku"
    },
    {
      "Id": "tna",
      "Print_Name": "Tacana",
      "Inverted_Name": "Tacana"
    },
    {
      "Id": "tnb",
      "Print_Name": "Western Tunebo",
      "Inverted_Name": "Tunebo, Western"
    },
    {
      "Id": "tnc",
      "Print_Name": "Tanimuca-Retuarã",
      "Inverted_Name": "Tanimuca-Retuarã"
    },
    {
      "Id": "tnd",
      "Print_Name": "Angosturas Tunebo",
      "Inverted_Name": "Tunebo, Angosturas"
    },
    {
      "Id": "tng",
      "Print_Name": "Tobanga",
      "Inverted_Name": "Tobanga"
    },
    {
      "Id": "tnh",
      "Print_Name": "Maiani",
      "Inverted_Name": "Maiani"
    },
    {
      "Id": "tni",
      "Print_Name": "Tandia",
      "Inverted_Name": "Tandia"
    },
    {
      "Id": "tnk",
      "Print_Name": "Kwamera",
      "Inverted_Name": "Kwamera"
    },
    {
      "Id": "tnl",
      "Print_Name": "Lenakel",
      "Inverted_Name": "Lenakel"
    },
    {
      "Id": "tnm",
      "Print_Name": "Tabla",
      "Inverted_Name": "Tabla"
    },
    {
      "Id": "tnn",
      "Print_Name": "North Tanna",
      "Inverted_Name": "Tanna, North"
    },
    {
      "Id": "tno",
      "Print_Name": "Toromono",
      "Inverted_Name": "Toromono"
    },
    {
      "Id": "tnp",
      "Print_Name": "Whitesands",
      "Inverted_Name": "Whitesands"
    },
    {
      "Id": "tnq",
      "Print_Name": "Taino",
      "Inverted_Name": "Taino"
    },
    {
      "Id": "tnr",
      "Print_Name": "Ménik",
      "Inverted_Name": "Ménik"
    },
    {
      "Id": "tns",
      "Print_Name": "Tenis",
      "Inverted_Name": "Tenis"
    },
    {
      "Id": "tnt",
      "Print_Name": "Tontemboan",
      "Inverted_Name": "Tontemboan"
    },
    {
      "Id": "tnu",
      "Print_Name": "Tay Khang",
      "Inverted_Name": "Tay Khang"
    },
    {
      "Id": "tnv",
      "Print_Name": "Tangchangya",
      "Inverted_Name": "Tangchangya"
    },
    {
      "Id": "tnw",
      "Print_Name": "Tonsawang",
      "Inverted_Name": "Tonsawang"
    },
    {
      "Id": "tnx",
      "Print_Name": "Tanema",
      "Inverted_Name": "Tanema"
    },
    {
      "Id": "tny",
      "Print_Name": "Tongwe",
      "Inverted_Name": "Tongwe"
    },
    {
      "Id": "tnz",
      "Print_Name": "Ten'edn",
      "Inverted_Name": "Ten'edn"
    },
    {
      "Id": "tob",
      "Print_Name": "Toba",
      "Inverted_Name": "Toba"
    },
    {
      "Id": "toc",
      "Print_Name": "Coyutla Totonac",
      "Inverted_Name": "Totonac, Coyutla"
    },
    {
      "Id": "tod",
      "Print_Name": "Toma",
      "Inverted_Name": "Toma"
    },
    {
      "Id": "tof",
      "Print_Name": "Gizrra",
      "Inverted_Name": "Gizrra"
    },
    {
      "Id": "tog",
      "Print_Name": "Tonga (Nyasa)",
      "Inverted_Name": "Tonga (Nyasa)"
    },
    {
      "Id": "toh",
      "Print_Name": "Gitonga",
      "Inverted_Name": "Gitonga"
    },
    {
      "Id": "toi",
      "Print_Name": "Tonga (Zambia)",
      "Inverted_Name": "Tonga (Zambia)"
    },
    {
      "Id": "toj",
      "Print_Name": "Tojolabal",
      "Inverted_Name": "Tojolabal"
    },
    {
      "Id": "tok",
      "Print_Name": "Toki Pona",
      "Inverted_Name": "Toki Pona"
    },
    {
      "Id": "tol",
      "Print_Name": "Tolowa",
      "Inverted_Name": "Tolowa"
    },
    {
      "Id": "tom",
      "Print_Name": "Tombulu",
      "Inverted_Name": "Tombulu"
    },
    {
      "Id": "ton",
      "Print_Name": "Tonga (Tonga Islands)",
      "Inverted_Name": "Tonga (Tonga Islands)"
    },
    {
      "Id": "too",
      "Print_Name": "Xicotepec De Juárez Totonac",
      "Inverted_Name": "Totonac, Xicotepec De Juárez"
    },
    {
      "Id": "top",
      "Print_Name": "Papantla Totonac",
      "Inverted_Name": "Totonac, Papantla"
    },
    {
      "Id": "toq",
      "Print_Name": "Toposa",
      "Inverted_Name": "Toposa"
    },
    {
      "Id": "tor",
      "Print_Name": "Togbo-Vara Banda",
      "Inverted_Name": "Banda, Togbo-Vara"
    },
    {
      "Id": "tos",
      "Print_Name": "Highland Totonac",
      "Inverted_Name": "Totonac, Highland"
    },
    {
      "Id": "tou",
      "Print_Name": "Tho",
      "Inverted_Name": "Tho"
    },
    {
      "Id": "tov",
      "Print_Name": "Upper Taromi",
      "Inverted_Name": "Taromi, Upper"
    },
    {
      "Id": "tow",
      "Print_Name": "Jemez",
      "Inverted_Name": "Jemez"
    },
    {
      "Id": "tox",
      "Print_Name": "Tobian",
      "Inverted_Name": "Tobian"
    },
    {
      "Id": "toy",
      "Print_Name": "Topoiyo",
      "Inverted_Name": "Topoiyo"
    },
    {
      "Id": "toz",
      "Print_Name": "To",
      "Inverted_Name": "To"
    },
    {
      "Id": "tpa",
      "Print_Name": "Taupota",
      "Inverted_Name": "Taupota"
    },
    {
      "Id": "tpc",
      "Print_Name": "Azoyú Me'phaa",
      "Inverted_Name": "Me'phaa, Azoyú"
    },
    {
      "Id": "tpc",
      "Print_Name": "Azoyú Tlapanec",
      "Inverted_Name": "Tlapanec, Azoyú"
    },
    {
      "Id": "tpe",
      "Print_Name": "Tippera",
      "Inverted_Name": "Tippera"
    },
    {
      "Id": "tpf",
      "Print_Name": "Tarpia",
      "Inverted_Name": "Tarpia"
    },
    {
      "Id": "tpg",
      "Print_Name": "Kula",
      "Inverted_Name": "Kula"
    },
    {
      "Id": "tpi",
      "Print_Name": "Tok Pisin",
      "Inverted_Name": "Tok Pisin"
    },
    {
      "Id": "tpj",
      "Print_Name": "Tapieté",
      "Inverted_Name": "Tapieté"
    },
    {
      "Id": "tpk",
      "Print_Name": "Tupinikin",
      "Inverted_Name": "Tupinikin"
    },
    {
      "Id": "tpl",
      "Print_Name": "Tlacoapa Me'phaa",
      "Inverted_Name": "Me'phaa, Tlacoapa"
    },
    {
      "Id": "tpl",
      "Print_Name": "Tlacoapa Tlapanec",
      "Inverted_Name": "Tlapanec, Tlacoapa"
    },
    {
      "Id": "tpm",
      "Print_Name": "Tampulma",
      "Inverted_Name": "Tampulma"
    },
    {
      "Id": "tpn",
      "Print_Name": "Tupinambá",
      "Inverted_Name": "Tupinambá"
    },
    {
      "Id": "tpo",
      "Print_Name": "Tai Pao",
      "Inverted_Name": "Tai Pao"
    },
    {
      "Id": "tpp",
      "Print_Name": "Pisaflores Tepehua",
      "Inverted_Name": "Tepehua, Pisaflores"
    },
    {
      "Id": "tpq",
      "Print_Name": "Tukpa",
      "Inverted_Name": "Tukpa"
    },
    {
      "Id": "tpr",
      "Print_Name": "Tuparí",
      "Inverted_Name": "Tuparí"
    },
    {
      "Id": "tpt",
      "Print_Name": "Tlachichilco Tepehua",
      "Inverted_Name": "Tepehua, Tlachichilco"
    },
    {
      "Id": "tpu",
      "Print_Name": "Tampuan",
      "Inverted_Name": "Tampuan"
    },
    {
      "Id": "tpv",
      "Print_Name": "Tanapag",
      "Inverted_Name": "Tanapag"
    },
    {
      "Id": "tpx",
      "Print_Name": "Acatepec Me'phaa",
      "Inverted_Name": "Me'phaa, Acatepec"
    },
    {
      "Id": "tpx",
      "Print_Name": "Acatepec Tlapanec",
      "Inverted_Name": "Tlapanec, Acatepec"
    },
    {
      "Id": "tpy",
      "Print_Name": "Trumai",
      "Inverted_Name": "Trumai"
    },
    {
      "Id": "tpz",
      "Print_Name": "Tinputz",
      "Inverted_Name": "Tinputz"
    },
    {
      "Id": "tqb",
      "Print_Name": "Tembé",
      "Inverted_Name": "Tembé"
    },
    {
      "Id": "tql",
      "Print_Name": "Lehali",
      "Inverted_Name": "Lehali"
    },
    {
      "Id": "tqm",
      "Print_Name": "Turumsa",
      "Inverted_Name": "Turumsa"
    },
    {
      "Id": "tqn",
      "Print_Name": "Tenino",
      "Inverted_Name": "Tenino"
    },
    {
      "Id": "tqo",
      "Print_Name": "Toaripi",
      "Inverted_Name": "Toaripi"
    },
    {
      "Id": "tqp",
      "Print_Name": "Tomoip",
      "Inverted_Name": "Tomoip"
    },
    {
      "Id": "tqq",
      "Print_Name": "Tunni",
      "Inverted_Name": "Tunni"
    },
    {
      "Id": "tqr",
      "Print_Name": "Torona",
      "Inverted_Name": "Torona"
    },
    {
      "Id": "tqt",
      "Print_Name": "Western Totonac",
      "Inverted_Name": "Totonac, Western"
    },
    {
      "Id": "tqu",
      "Print_Name": "Touo",
      "Inverted_Name": "Touo"
    },
    {
      "Id": "tqw",
      "Print_Name": "Tonkawa",
      "Inverted_Name": "Tonkawa"
    },
    {
      "Id": "tra",
      "Print_Name": "Tirahi",
      "Inverted_Name": "Tirahi"
    },
    {
      "Id": "trb",
      "Print_Name": "Terebu",
      "Inverted_Name": "Terebu"
    },
    {
      "Id": "trc",
      "Print_Name": "Copala Triqui",
      "Inverted_Name": "Triqui, Copala"
    },
    {
      "Id": "trd",
      "Print_Name": "Turi",
      "Inverted_Name": "Turi"
    },
    {
      "Id": "tre",
      "Print_Name": "East Tarangan",
      "Inverted_Name": "Tarangan, East"
    },
    {
      "Id": "trf",
      "Print_Name": "Trinidadian Creole English",
      "Inverted_Name": "Creole English, Trinidadian"
    },
    {
      "Id": "trg",
      "Print_Name": "Lishán Didán",
      "Inverted_Name": "Lishán Didán"
    },
    {
      "Id": "trh",
      "Print_Name": "Turaka",
      "Inverted_Name": "Turaka"
    },
    {
      "Id": "tri",
      "Print_Name": "Trió",
      "Inverted_Name": "Trió"
    },
    {
      "Id": "trj",
      "Print_Name": "Toram",
      "Inverted_Name": "Toram"
    },
    {
      "Id": "trl",
      "Print_Name": "Traveller Scottish",
      "Inverted_Name": "Scottish, Traveller"
    },
    {
      "Id": "trm",
      "Print_Name": "Tregami",
      "Inverted_Name": "Tregami"
    },
    {
      "Id": "trn",
      "Print_Name": "Trinitario",
      "Inverted_Name": "Trinitario"
    },
    {
      "Id": "tro",
      "Print_Name": "Tarao Naga",
      "Inverted_Name": "Naga, Tarao"
    },
    {
      "Id": "trp",
      "Print_Name": "Kok Borok",
      "Inverted_Name": "Kok Borok"
    },
    {
      "Id": "trq",
      "Print_Name": "San Martín Itunyoso Triqui",
      "Inverted_Name": "Triqui, San Martín Itunyoso"
    },
    {
      "Id": "trr",
      "Print_Name": "Taushiro",
      "Inverted_Name": "Taushiro"
    },
    {
      "Id": "trs",
      "Print_Name": "Chicahuaxtla Triqui",
      "Inverted_Name": "Triqui, Chicahuaxtla"
    },
    {
      "Id": "trt",
      "Print_Name": "Tunggare",
      "Inverted_Name": "Tunggare"
    },
    {
      "Id": "tru",
      "Print_Name": "Surayt",
      "Inverted_Name": "Surayt"
    },
    {
      "Id": "tru",
      "Print_Name": "Turoyo",
      "Inverted_Name": "Turoyo"
    },
    {
      "Id": "trv",
      "Print_Name": "Sediq",
      "Inverted_Name": "Sediq"
    },
    {
      "Id": "trv",
      "Print_Name": "Seediq",
      "Inverted_Name": "Seediq"
    },
    {
      "Id": "trv",
      "Print_Name": "Taroko",
      "Inverted_Name": "Taroko"
    },
    {
      "Id": "trw",
      "Print_Name": "Torwali",
      "Inverted_Name": "Torwali"
    },
    {
      "Id": "trx",
      "Print_Name": "Tringgus-Sembaan Bidayuh",
      "Inverted_Name": "Bidayuh, Tringgus-Sembaan"
    },
    {
      "Id": "try",
      "Print_Name": "Turung",
      "Inverted_Name": "Turung"
    },
    {
      "Id": "trz",
      "Print_Name": "Torá",
      "Inverted_Name": "Torá"
    },
    {
      "Id": "tsa",
      "Print_Name": "Tsaangi",
      "Inverted_Name": "Tsaangi"
    },
    {
      "Id": "tsb",
      "Print_Name": "Tsamai",
      "Inverted_Name": "Tsamai"
    },
    {
      "Id": "tsc",
      "Print_Name": "Tswa",
      "Inverted_Name": "Tswa"
    },
    {
      "Id": "tsd",
      "Print_Name": "Tsakonian",
      "Inverted_Name": "Tsakonian"
    },
    {
      "Id": "tse",
      "Print_Name": "Tunisian Sign Language",
      "Inverted_Name": "Tunisian Sign Language"
    },
    {
      "Id": "tsg",
      "Print_Name": "Tausug",
      "Inverted_Name": "Tausug"
    },
    {
      "Id": "tsh",
      "Print_Name": "Tsuvan",
      "Inverted_Name": "Tsuvan"
    },
    {
      "Id": "tsi",
      "Print_Name": "Tsimshian",
      "Inverted_Name": "Tsimshian"
    },
    {
      "Id": "tsj",
      "Print_Name": "Tshangla",
      "Inverted_Name": "Tshangla"
    },
    {
      "Id": "tsk",
      "Print_Name": "Tseku",
      "Inverted_Name": "Tseku"
    },
    {
      "Id": "tsl",
      "Print_Name": "Ts'ün-Lao",
      "Inverted_Name": "Ts'ün-Lao"
    },
    {
      "Id": "tsm",
      "Print_Name": "Türk İşaret Dili",
      "Inverted_Name": "Türk İşaret Dili"
    },
    {
      "Id": "tsm",
      "Print_Name": "Turkish Sign Language",
      "Inverted_Name": "Turkish Sign Language"
    },
    {
      "Id": "tsn",
      "Print_Name": "Tswana",
      "Inverted_Name": "Tswana"
    },
    {
      "Id": "tso",
      "Print_Name": "Tsonga",
      "Inverted_Name": "Tsonga"
    },
    {
      "Id": "tsp",
      "Print_Name": "Northern Toussian",
      "Inverted_Name": "Toussian, Northern"
    },
    {
      "Id": "tsq",
      "Print_Name": "Thai Sign Language",
      "Inverted_Name": "Thai Sign Language"
    },
    {
      "Id": "tsr",
      "Print_Name": "Akei",
      "Inverted_Name": "Akei"
    },
    {
      "Id": "tss",
      "Print_Name": "Taiwan Sign Language",
      "Inverted_Name": "Taiwan Sign Language"
    },
    {
      "Id": "tst",
      "Print_Name": "Tondi Songway Kiini",
      "Inverted_Name": "Songway Kiini, Tondi"
    },
    {
      "Id": "tsu",
      "Print_Name": "Tsou",
      "Inverted_Name": "Tsou"
    },
    {
      "Id": "tsv",
      "Print_Name": "Tsogo",
      "Inverted_Name": "Tsogo"
    },
    {
      "Id": "tsw",
      "Print_Name": "Tsishingini",
      "Inverted_Name": "Tsishingini"
    },
    {
      "Id": "tsx",
      "Print_Name": "Mubami",
      "Inverted_Name": "Mubami"
    },
    {
      "Id": "tsy",
      "Print_Name": "Tebul Sign Language",
      "Inverted_Name": "Tebul Sign Language"
    },
    {
      "Id": "tsz",
      "Print_Name": "Purepecha",
      "Inverted_Name": "Purepecha"
    },
    {
      "Id": "tta",
      "Print_Name": "Tutelo",
      "Inverted_Name": "Tutelo"
    },
    {
      "Id": "ttb",
      "Print_Name": "Gaa",
      "Inverted_Name": "Gaa"
    },
    {
      "Id": "ttc",
      "Print_Name": "Tektiteko",
      "Inverted_Name": "Tektiteko"
    },
    {
      "Id": "ttd",
      "Print_Name": "Tauade",
      "Inverted_Name": "Tauade"
    },
    {
      "Id": "tte",
      "Print_Name": "Bwanabwana",
      "Inverted_Name": "Bwanabwana"
    },
    {
      "Id": "ttf",
      "Print_Name": "Tuotomb",
      "Inverted_Name": "Tuotomb"
    },
    {
      "Id": "ttg",
      "Print_Name": "Tutong",
      "Inverted_Name": "Tutong"
    },
    {
      "Id": "tth",
      "Print_Name": "Upper Ta'oih",
      "Inverted_Name": "Ta'oih, Upper"
    },
    {
      "Id": "tti",
      "Print_Name": "Tobati",
      "Inverted_Name": "Tobati"
    },
    {
      "Id": "ttj",
      "Print_Name": "Tooro",
      "Inverted_Name": "Tooro"
    },
    {
      "Id": "ttk",
      "Print_Name": "Totoro",
      "Inverted_Name": "Totoro"
    },
    {
      "Id": "ttl",
      "Print_Name": "Totela",
      "Inverted_Name": "Totela"
    },
    {
      "Id": "ttm",
      "Print_Name": "Northern Tutchone",
      "Inverted_Name": "Tutchone, Northern"
    },
    {
      "Id": "ttn",
      "Print_Name": "Towei",
      "Inverted_Name": "Towei"
    },
    {
      "Id": "tto",
      "Print_Name": "Lower Ta'oih",
      "Inverted_Name": "Ta'oih, Lower"
    },
    {
      "Id": "ttp",
      "Print_Name": "Tombelala",
      "Inverted_Name": "Tombelala"
    },
    {
      "Id": "ttq",
      "Print_Name": "Tawallammat Tamajaq",
      "Inverted_Name": "Tamajaq, Tawallammat"
    },
    {
      "Id": "ttr",
      "Print_Name": "Tera",
      "Inverted_Name": "Tera"
    },
    {
      "Id": "tts",
      "Print_Name": "Northeastern Thai",
      "Inverted_Name": "Thai, Northeastern"
    },
    {
      "Id": "ttt",
      "Print_Name": "Muslim Tat",
      "Inverted_Name": "Tat, Muslim"
    },
    {
      "Id": "ttu",
      "Print_Name": "Torau",
      "Inverted_Name": "Torau"
    },
    {
      "Id": "ttv",
      "Print_Name": "Titan",
      "Inverted_Name": "Titan"
    },
    {
      "Id": "ttw",
      "Print_Name": "Long Wat",
      "Inverted_Name": "Long Wat"
    },
    {
      "Id": "tty",
      "Print_Name": "Sikaritai",
      "Inverted_Name": "Sikaritai"
    },
    {
      "Id": "ttz",
      "Print_Name": "Tsum",
      "Inverted_Name": "Tsum"
    },
    {
      "Id": "tua",
      "Print_Name": "Wiarumus",
      "Inverted_Name": "Wiarumus"
    },
    {
      "Id": "tub",
      "Print_Name": "Tübatulabal",
      "Inverted_Name": "Tübatulabal"
    },
    {
      "Id": "tuc",
      "Print_Name": "Mutu",
      "Inverted_Name": "Mutu"
    },
    {
      "Id": "tud",
      "Print_Name": "Tuxá",
      "Inverted_Name": "Tuxá"
    },
    {
      "Id": "tue",
      "Print_Name": "Tuyuca",
      "Inverted_Name": "Tuyuca"
    },
    {
      "Id": "tuf",
      "Print_Name": "Central Tunebo",
      "Inverted_Name": "Tunebo, Central"
    },
    {
      "Id": "tug",
      "Print_Name": "Tunia",
      "Inverted_Name": "Tunia"
    },
    {
      "Id": "tuh",
      "Print_Name": "Taulil",
      "Inverted_Name": "Taulil"
    },
    {
      "Id": "tui",
      "Print_Name": "Tupuri",
      "Inverted_Name": "Tupuri"
    },
    {
      "Id": "tuj",
      "Print_Name": "Tugutil",
      "Inverted_Name": "Tugutil"
    },
    {
      "Id": "tuk",
      "Print_Name": "Turkmen",
      "Inverted_Name": "Turkmen"
    },
    {
      "Id": "tul",
      "Print_Name": "Tula",
      "Inverted_Name": "Tula"
    },
    {
      "Id": "tum",
      "Print_Name": "Tumbuka",
      "Inverted_Name": "Tumbuka"
    },
    {
      "Id": "tun",
      "Print_Name": "Tunica",
      "Inverted_Name": "Tunica"
    },
    {
      "Id": "tuo",
      "Print_Name": "Tucano",
      "Inverted_Name": "Tucano"
    },
    {
      "Id": "tuq",
      "Print_Name": "Tedaga",
      "Inverted_Name": "Tedaga"
    },
    {
      "Id": "tur",
      "Print_Name": "Turkish",
      "Inverted_Name": "Turkish"
    },
    {
      "Id": "tus",
      "Print_Name": "Tuscarora",
      "Inverted_Name": "Tuscarora"
    },
    {
      "Id": "tuu",
      "Print_Name": "Tututni",
      "Inverted_Name": "Tututni"
    },
    {
      "Id": "tuv",
      "Print_Name": "Turkana",
      "Inverted_Name": "Turkana"
    },
    {
      "Id": "tux",
      "Print_Name": "Tuxináwa",
      "Inverted_Name": "Tuxináwa"
    },
    {
      "Id": "tuy",
      "Print_Name": "Tugen",
      "Inverted_Name": "Tugen"
    },
    {
      "Id": "tuz",
      "Print_Name": "Turka",
      "Inverted_Name": "Turka"
    },
    {
      "Id": "tva",
      "Print_Name": "Vaghua",
      "Inverted_Name": "Vaghua"
    },
    {
      "Id": "tvd",
      "Print_Name": "Tsuvadi",
      "Inverted_Name": "Tsuvadi"
    },
    {
      "Id": "tve",
      "Print_Name": "Te'un",
      "Inverted_Name": "Te'un"
    },
    {
      "Id": "tvi",
      "Print_Name": "Tulai",
      "Inverted_Name": "Tulai"
    },
    {
      "Id": "tvk",
      "Print_Name": "Southeast Ambrym",
      "Inverted_Name": "Ambrym, Southeast"
    },
    {
      "Id": "tvl",
      "Print_Name": "Tuvalu",
      "Inverted_Name": "Tuvalu"
    },
    {
      "Id": "tvm",
      "Print_Name": "Tela-Masbuar",
      "Inverted_Name": "Tela-Masbuar"
    },
    {
      "Id": "tvn",
      "Print_Name": "Tavoyan",
      "Inverted_Name": "Tavoyan"
    },
    {
      "Id": "tvo",
      "Print_Name": "Tidore",
      "Inverted_Name": "Tidore"
    },
    {
      "Id": "tvs",
      "Print_Name": "Taveta",
      "Inverted_Name": "Taveta"
    },
    {
      "Id": "tvt",
      "Print_Name": "Tutsa Naga",
      "Inverted_Name": "Naga, Tutsa"
    },
    {
      "Id": "tvu",
      "Print_Name": "Tunen",
      "Inverted_Name": "Tunen"
    },
    {
      "Id": "tvw",
      "Print_Name": "Sedoa",
      "Inverted_Name": "Sedoa"
    },
    {
      "Id": "tvx",
      "Print_Name": "Taivoan",
      "Inverted_Name": "Taivoan"
    },
    {
      "Id": "tvy",
      "Print_Name": "Timor Pidgin",
      "Inverted_Name": "Pidgin, Timor"
    },
    {
      "Id": "twa",
      "Print_Name": "Twana",
      "Inverted_Name": "Twana"
    },
    {
      "Id": "twb",
      "Print_Name": "Western Tawbuid",
      "Inverted_Name": "Tawbuid, Western"
    },
    {
      "Id": "twc",
      "Print_Name": "Teshenawa",
      "Inverted_Name": "Teshenawa"
    },
    {
      "Id": "twd",
      "Print_Name": "Twents",
      "Inverted_Name": "Twents"
    },
    {
      "Id": "twe",
      "Print_Name": "Tewa (Indonesia)",
      "Inverted_Name": "Tewa (Indonesia)"
    },
    {
      "Id": "twf",
      "Print_Name": "Northern Tiwa",
      "Inverted_Name": "Tiwa, Northern"
    },
    {
      "Id": "twg",
      "Print_Name": "Tereweng",
      "Inverted_Name": "Tereweng"
    },
    {
      "Id": "twh",
      "Print_Name": "Tai Dón",
      "Inverted_Name": "Tai Dón"
    },
    {
      "Id": "twi",
      "Print_Name": "Twi",
      "Inverted_Name": "Twi"
    },
    {
      "Id": "twl",
      "Print_Name": "Tawara",
      "Inverted_Name": "Tawara"
    },
    {
      "Id": "twm",
      "Print_Name": "Tawang Monpa",
      "Inverted_Name": "Monpa, Tawang"
    },
    {
      "Id": "twn",
      "Print_Name": "Twendi",
      "Inverted_Name": "Twendi"
    },
    {
      "Id": "two",
      "Print_Name": "Tswapong",
      "Inverted_Name": "Tswapong"
    },
    {
      "Id": "twp",
      "Print_Name": "Ere",
      "Inverted_Name": "Ere"
    },
    {
      "Id": "twq",
      "Print_Name": "Tasawaq",
      "Inverted_Name": "Tasawaq"
    },
    {
      "Id": "twr",
      "Print_Name": "Southwestern Tarahumara",
      "Inverted_Name": "Tarahumara, Southwestern"
    },
    {
      "Id": "twt",
      "Print_Name": "Turiwára",
      "Inverted_Name": "Turiwára"
    },
    {
      "Id": "twu",
      "Print_Name": "Termanu",
      "Inverted_Name": "Termanu"
    },
    {
      "Id": "tww",
      "Print_Name": "Tuwari",
      "Inverted_Name": "Tuwari"
    },
    {
      "Id": "twx",
      "Print_Name": "Tewe",
      "Inverted_Name": "Tewe"
    },
    {
      "Id": "twy",
      "Print_Name": "Tawoyan",
      "Inverted_Name": "Tawoyan"
    },
    {
      "Id": "txa",
      "Print_Name": "Tombonuo",
      "Inverted_Name": "Tombonuo"
    },
    {
      "Id": "txb",
      "Print_Name": "Tokharian B",
      "Inverted_Name": "Tokharian B"
    },
    {
      "Id": "txc",
      "Print_Name": "Tsetsaut",
      "Inverted_Name": "Tsetsaut"
    },
    {
      "Id": "txe",
      "Print_Name": "Totoli",
      "Inverted_Name": "Totoli"
    },
    {
      "Id": "txg",
      "Print_Name": "Tangut",
      "Inverted_Name": "Tangut"
    },
    {
      "Id": "txh",
      "Print_Name": "Thracian",
      "Inverted_Name": "Thracian"
    },
    {
      "Id": "txi",
      "Print_Name": "Ikpeng",
      "Inverted_Name": "Ikpeng"
    },
    {
      "Id": "txj",
      "Print_Name": "Tarjumo",
      "Inverted_Name": "Tarjumo"
    },
    {
      "Id": "txm",
      "Print_Name": "Tomini",
      "Inverted_Name": "Tomini"
    },
    {
      "Id": "txn",
      "Print_Name": "West Tarangan",
      "Inverted_Name": "Tarangan, West"
    },
    {
      "Id": "txo",
      "Print_Name": "Toto",
      "Inverted_Name": "Toto"
    },
    {
      "Id": "txq",
      "Print_Name": "Tii",
      "Inverted_Name": "Tii"
    },
    {
      "Id": "txr",
      "Print_Name": "Tartessian",
      "Inverted_Name": "Tartessian"
    },
    {
      "Id": "txs",
      "Print_Name": "Tonsea",
      "Inverted_Name": "Tonsea"
    },
    {
      "Id": "txt",
      "Print_Name": "Citak",
      "Inverted_Name": "Citak"
    },
    {
      "Id": "txu",
      "Print_Name": "Kayapó",
      "Inverted_Name": "Kayapó"
    },
    {
      "Id": "txx",
      "Print_Name": "Tatana",
      "Inverted_Name": "Tatana"
    },
    {
      "Id": "txy",
      "Print_Name": "Tanosy Malagasy",
      "Inverted_Name": "Malagasy, Tanosy"
    },
    {
      "Id": "tya",
      "Print_Name": "Tauya",
      "Inverted_Name": "Tauya"
    },
    {
      "Id": "tye",
      "Print_Name": "Kyanga",
      "Inverted_Name": "Kyanga"
    },
    {
      "Id": "tyh",
      "Print_Name": "O'du",
      "Inverted_Name": "O'du"
    },
    {
      "Id": "tyi",
      "Print_Name": "Teke-Tsaayi",
      "Inverted_Name": "Teke-Tsaayi"
    },
    {
      "Id": "tyj",
      "Print_Name": "Tai Do",
      "Inverted_Name": "Tai Do"
    },
    {
      "Id": "tyj",
      "Print_Name": "Tai Yo",
      "Inverted_Name": "Tai Yo"
    },
    {
      "Id": "tyl",
      "Print_Name": "Thu Lao",
      "Inverted_Name": "Thu Lao"
    },
    {
      "Id": "tyn",
      "Print_Name": "Kombai",
      "Inverted_Name": "Kombai"
    },
    {
      "Id": "typ",
      "Print_Name": "Thaypan",
      "Inverted_Name": "Thaypan"
    },
    {
      "Id": "tyr",
      "Print_Name": "Tai Daeng",
      "Inverted_Name": "Tai Daeng"
    },
    {
      "Id": "tys",
      "Print_Name": "Tày Sa Pa",
      "Inverted_Name": "Tày Sa Pa"
    },
    {
      "Id": "tyt",
      "Print_Name": "Tày Tac",
      "Inverted_Name": "Tày Tac"
    },
    {
      "Id": "tyu",
      "Print_Name": "Kua",
      "Inverted_Name": "Kua"
    },
    {
      "Id": "tyv",
      "Print_Name": "Tuvinian",
      "Inverted_Name": "Tuvinian"
    },
    {
      "Id": "tyx",
      "Print_Name": "Teke-Tyee",
      "Inverted_Name": "Teke-Tyee"
    },
    {
      "Id": "tyy",
      "Print_Name": "Tiyaa",
      "Inverted_Name": "Tiyaa"
    },
    {
      "Id": "tyz",
      "Print_Name": "Tày",
      "Inverted_Name": "Tày"
    },
    {
      "Id": "tza",
      "Print_Name": "Tanzanian Sign Language",
      "Inverted_Name": "Tanzanian Sign Language"
    },
    {
      "Id": "tzh",
      "Print_Name": "Tzeltal",
      "Inverted_Name": "Tzeltal"
    },
    {
      "Id": "tzj",
      "Print_Name": "Tz'utujil",
      "Inverted_Name": "Tz'utujil"
    },
    {
      "Id": "tzl",
      "Print_Name": "Talossan",
      "Inverted_Name": "Talossan"
    },
    {
      "Id": "tzm",
      "Print_Name": "Central Atlas Tamazight",
      "Inverted_Name": "Tamazight, Central Atlas"
    },
    {
      "Id": "tzn",
      "Print_Name": "Tugun",
      "Inverted_Name": "Tugun"
    },
    {
      "Id": "tzo",
      "Print_Name": "Tzotzil",
      "Inverted_Name": "Tzotzil"
    },
    {
      "Id": "tzx",
      "Print_Name": "Tabriak",
      "Inverted_Name": "Tabriak"
    },
    {
      "Id": "uam",
      "Print_Name": "Uamué",
      "Inverted_Name": "Uamué"
    },
    {
      "Id": "uan",
      "Print_Name": "Kuan",
      "Inverted_Name": "Kuan"
    },
    {
      "Id": "uar",
      "Print_Name": "Tairuma",
      "Inverted_Name": "Tairuma"
    },
    {
      "Id": "uba",
      "Print_Name": "Ubang",
      "Inverted_Name": "Ubang"
    },
    {
      "Id": "ubi",
      "Print_Name": "Ubi",
      "Inverted_Name": "Ubi"
    },
    {
      "Id": "ubl",
      "Print_Name": "Buhi'non Bikol",
      "Inverted_Name": "Bikol, Buhi'non"
    },
    {
      "Id": "ubr",
      "Print_Name": "Ubir",
      "Inverted_Name": "Ubir"
    },
    {
      "Id": "ubu",
      "Print_Name": "Umbu-Ungu",
      "Inverted_Name": "Umbu-Ungu"
    },
    {
      "Id": "uby",
      "Print_Name": "Ubykh",
      "Inverted_Name": "Ubykh"
    },
    {
      "Id": "uda",
      "Print_Name": "Uda",
      "Inverted_Name": "Uda"
    },
    {
      "Id": "ude",
      "Print_Name": "Udihe",
      "Inverted_Name": "Udihe"
    },
    {
      "Id": "udg",
      "Print_Name": "Muduga",
      "Inverted_Name": "Muduga"
    },
    {
      "Id": "udi",
      "Print_Name": "Udi",
      "Inverted_Name": "Udi"
    },
    {
      "Id": "udj",
      "Print_Name": "Ujir",
      "Inverted_Name": "Ujir"
    },
    {
      "Id": "udl",
      "Print_Name": "Wuzlam",
      "Inverted_Name": "Wuzlam"
    },
    {
      "Id": "udm",
      "Print_Name": "Udmurt",
      "Inverted_Name": "Udmurt"
    },
    {
      "Id": "udu",
      "Print_Name": "Uduk",
      "Inverted_Name": "Uduk"
    },
    {
      "Id": "ues",
      "Print_Name": "Kioko",
      "Inverted_Name": "Kioko"
    },
    {
      "Id": "ufi",
      "Print_Name": "Ufim",
      "Inverted_Name": "Ufim"
    },
    {
      "Id": "uga",
      "Print_Name": "Ugaritic",
      "Inverted_Name": "Ugaritic"
    },
    {
      "Id": "ugb",
      "Print_Name": "Kuku-Ugbanh",
      "Inverted_Name": "Kuku-Ugbanh"
    },
    {
      "Id": "uge",
      "Print_Name": "Ughele",
      "Inverted_Name": "Ughele"
    },
    {
      "Id": "ugh",
      "Print_Name": "Kubachi",
      "Inverted_Name": "Kubachi"
    },
    {
      "Id": "ugn",
      "Print_Name": "Ugandan Sign Language",
      "Inverted_Name": "Ugandan Sign Language"
    },
    {
      "Id": "ugo",
      "Print_Name": "Ugong",
      "Inverted_Name": "Ugong"
    },
    {
      "Id": "ugy",
      "Print_Name": "Uruguayan Sign Language",
      "Inverted_Name": "Uruguayan Sign Language"
    },
    {
      "Id": "uha",
      "Print_Name": "Uhami",
      "Inverted_Name": "Uhami"
    },
    {
      "Id": "uhn",
      "Print_Name": "Damal",
      "Inverted_Name": "Damal"
    },
    {
      "Id": "uig",
      "Print_Name": "Uighur",
      "Inverted_Name": "Uighur"
    },
    {
      "Id": "uig",
      "Print_Name": "Uyghur",
      "Inverted_Name": "Uyghur"
    },
    {
      "Id": "uis",
      "Print_Name": "Uisai",
      "Inverted_Name": "Uisai"
    },
    {
      "Id": "uiv",
      "Print_Name": "Iyive",
      "Inverted_Name": "Iyive"
    },
    {
      "Id": "uji",
      "Print_Name": "Tanjijili",
      "Inverted_Name": "Tanjijili"
    },
    {
      "Id": "uka",
      "Print_Name": "Kaburi",
      "Inverted_Name": "Kaburi"
    },
    {
      "Id": "ukg",
      "Print_Name": "Ukuriguma",
      "Inverted_Name": "Ukuriguma"
    },
    {
      "Id": "ukh",
      "Print_Name": "Ukhwejo",
      "Inverted_Name": "Ukhwejo"
    },
    {
      "Id": "uki",
      "Print_Name": "Kui (India)",
      "Inverted_Name": "Kui (India)"
    },
    {
      "Id": "ukk",
      "Print_Name": "Muak Sa-aak",
      "Inverted_Name": "Muak Sa-aak"
    },
    {
      "Id": "ukl",
      "Print_Name": "Ukrainian Sign Language",
      "Inverted_Name": "Ukrainian Sign Language"
    },
    {
      "Id": "ukp",
      "Print_Name": "Ukpe-Bayobiri",
      "Inverted_Name": "Ukpe-Bayobiri"
    },
    {
      "Id": "ukq",
      "Print_Name": "Ukwa",
      "Inverted_Name": "Ukwa"
    },
    {
      "Id": "ukr",
      "Print_Name": "Ukrainian",
      "Inverted_Name": "Ukrainian"
    },
    {
      "Id": "uks",
      "Print_Name": "Kaapor Sign Language",
      "Inverted_Name": "Kaapor Sign Language"
    },
    {
      "Id": "uks",
      "Print_Name": "Urubú-Kaapor Sign Language",
      "Inverted_Name": "Urubú-Kaapor Sign Language"
    },
    {
      "Id": "uku",
      "Print_Name": "Ukue",
      "Inverted_Name": "Ukue"
    },
    {
      "Id": "ukv",
      "Print_Name": "Kuku",
      "Inverted_Name": "Kuku"
    },
    {
      "Id": "ukw",
      "Print_Name": "Ukwuani-Aboh-Ndoni",
      "Inverted_Name": "Ukwuani-Aboh-Ndoni"
    },
    {
      "Id": "uky",
      "Print_Name": "Kuuk-Yak",
      "Inverted_Name": "Kuuk-Yak"
    },
    {
      "Id": "ula",
      "Print_Name": "Fungwa",
      "Inverted_Name": "Fungwa"
    },
    {
      "Id": "ulb",
      "Print_Name": "Ulukwumi",
      "Inverted_Name": "Ulukwumi"
    },
    {
      "Id": "ulc",
      "Print_Name": "Ulch",
      "Inverted_Name": "Ulch"
    },
    {
      "Id": "ule",
      "Print_Name": "Lule",
      "Inverted_Name": "Lule"
    },
    {
      "Id": "ulf",
      "Print_Name": "Afra",
      "Inverted_Name": "Afra"
    },
    {
      "Id": "ulf",
      "Print_Name": "Usku",
      "Inverted_Name": "Usku"
    },
    {
      "Id": "uli",
      "Print_Name": "Ulithian",
      "Inverted_Name": "Ulithian"
    },
    {
      "Id": "ulk",
      "Print_Name": "Meriam Mir",
      "Inverted_Name": "Meriam Mir"
    },
    {
      "Id": "ull",
      "Print_Name": "Ullatan",
      "Inverted_Name": "Ullatan"
    },
    {
      "Id": "ulm",
      "Print_Name": "Ulumanda'",
      "Inverted_Name": "Ulumanda'"
    },
    {
      "Id": "uln",
      "Print_Name": "Unserdeutsch",
      "Inverted_Name": "Unserdeutsch"
    },
    {
      "Id": "ulu",
      "Print_Name": "Uma' Lung",
      "Inverted_Name": "Uma' Lung"
    },
    {
      "Id": "ulw",
      "Print_Name": "Ulwa",
      "Inverted_Name": "Ulwa"
    },
    {
      "Id": "uly",
      "Print_Name": "Buli",
      "Inverted_Name": "Buli"
    },
    {
      "Id": "uma",
      "Print_Name": "Umatilla",
      "Inverted_Name": "Umatilla"
    },
    {
      "Id": "umb",
      "Print_Name": "Umbundu",
      "Inverted_Name": "Umbundu"
    },
    {
      "Id": "umc",
      "Print_Name": "Marrucinian",
      "Inverted_Name": "Marrucinian"
    },
    {
      "Id": "umd",
      "Print_Name": "Umbindhamu",
      "Inverted_Name": "Umbindhamu"
    },
    {
      "Id": "umg",
      "Print_Name": "Morrobalama",
      "Inverted_Name": "Morrobalama"
    },
    {
      "Id": "umg",
      "Print_Name": "Umbuygamu",
      "Inverted_Name": "Umbuygamu"
    },
    {
      "Id": "umi",
      "Print_Name": "Ukit",
      "Inverted_Name": "Ukit"
    },
    {
      "Id": "umm",
      "Print_Name": "Umon",
      "Inverted_Name": "Umon"
    },
    {
      "Id": "umn",
      "Print_Name": "Makyan Naga",
      "Inverted_Name": "Naga, Makyan"
    },
    {
      "Id": "umo",
      "Print_Name": "Umotína",
      "Inverted_Name": "Umotína"
    },
    {
      "Id": "ump",
      "Print_Name": "Umpila",
      "Inverted_Name": "Umpila"
    },
    {
      "Id": "umr",
      "Print_Name": "Umbugarla",
      "Inverted_Name": "Umbugarla"
    },
    {
      "Id": "ums",
      "Print_Name": "Pendau",
      "Inverted_Name": "Pendau"
    },
    {
      "Id": "umu",
      "Print_Name": "Munsee",
      "Inverted_Name": "Munsee"
    },
    {
      "Id": "una",
      "Print_Name": "North Watut",
      "Inverted_Name": "Watut, North"
    },
    {
      "Id": "und",
      "Print_Name": "Undetermined",
      "Inverted_Name": "Undetermined"
    },
    {
      "Id": "une",
      "Print_Name": "Uneme",
      "Inverted_Name": "Uneme"
    },
    {
      "Id": "ung",
      "Print_Name": "Ngarinyin",
      "Inverted_Name": "Ngarinyin"
    },
    {
      "Id": "uni",
      "Print_Name": "Uni",
      "Inverted_Name": "Uni"
    },
    {
      "Id": "unk",
      "Print_Name": "Enawené-Nawé",
      "Inverted_Name": "Enawené-Nawé"
    },
    {
      "Id": "unm",
      "Print_Name": "Unami",
      "Inverted_Name": "Unami"
    },
    {
      "Id": "unn",
      "Print_Name": "Kurnai",
      "Inverted_Name": "Kurnai"
    },
    {
      "Id": "unr",
      "Print_Name": "Mundari",
      "Inverted_Name": "Mundari"
    },
    {
      "Id": "unu",
      "Print_Name": "Unubahe",
      "Inverted_Name": "Unubahe"
    },
    {
      "Id": "unx",
      "Print_Name": "Munda",
      "Inverted_Name": "Munda"
    },
    {
      "Id": "unz",
      "Print_Name": "Unde Kaili",
      "Inverted_Name": "Kaili, Unde"
    },
    {
      "Id": "uon",
      "Print_Name": "Kulon",
      "Inverted_Name": "Kulon"
    },
    {
      "Id": "upi",
      "Print_Name": "Umeda",
      "Inverted_Name": "Umeda"
    },
    {
      "Id": "upv",
      "Print_Name": "Uripiv-Wala-Rano-Atchin",
      "Inverted_Name": "Uripiv-Wala-Rano-Atchin"
    },
    {
      "Id": "ura",
      "Print_Name": "Urarina",
      "Inverted_Name": "Urarina"
    },
    {
      "Id": "urb",
      "Print_Name": "Kaapor",
      "Inverted_Name": "Kaapor"
    },
    {
      "Id": "urb",
      "Print_Name": "Urubú-Kaapor",
      "Inverted_Name": "Urubú-Kaapor"
    },
    {
      "Id": "urc",
      "Print_Name": "Urningangg",
      "Inverted_Name": "Urningangg"
    },
    {
      "Id": "urd",
      "Print_Name": "Urdu",
      "Inverted_Name": "Urdu"
    },
    {
      "Id": "ure",
      "Print_Name": "Uru",
      "Inverted_Name": "Uru"
    },
    {
      "Id": "urf",
      "Print_Name": "Uradhi",
      "Inverted_Name": "Uradhi"
    },
    {
      "Id": "urg",
      "Print_Name": "Urigina",
      "Inverted_Name": "Urigina"
    },
    {
      "Id": "urh",
      "Print_Name": "Urhobo",
      "Inverted_Name": "Urhobo"
    },
    {
      "Id": "uri",
      "Print_Name": "Urim",
      "Inverted_Name": "Urim"
    },
    {
      "Id": "urk",
      "Print_Name": "Urak Lawoi'",
      "Inverted_Name": "Urak Lawoi'"
    },
    {
      "Id": "url",
      "Print_Name": "Urali",
      "Inverted_Name": "Urali"
    },
    {
      "Id": "urm",
      "Print_Name": "Urapmin",
      "Inverted_Name": "Urapmin"
    },
    {
      "Id": "urn",
      "Print_Name": "Uruangnirin",
      "Inverted_Name": "Uruangnirin"
    },
    {
      "Id": "uro",
      "Print_Name": "Ura (Papua New Guinea)",
      "Inverted_Name": "Ura (Papua New Guinea)"
    },
    {
      "Id": "urp",
      "Print_Name": "Uru-Pa-In",
      "Inverted_Name": "Uru-Pa-In"
    },
    {
      "Id": "urr",
      "Print_Name": "Lehalurup",
      "Inverted_Name": "Lehalurup"
    },
    {
      "Id": "urr",
      "Print_Name": "Löyöp",
      "Inverted_Name": "Löyöp"
    },
    {
      "Id": "urt",
      "Print_Name": "Urat",
      "Inverted_Name": "Urat"
    },
    {
      "Id": "uru",
      "Print_Name": "Urumi",
      "Inverted_Name": "Urumi"
    },
    {
      "Id": "urv",
      "Print_Name": "Uruava",
      "Inverted_Name": "Uruava"
    },
    {
      "Id": "urw",
      "Print_Name": "Sop",
      "Inverted_Name": "Sop"
    },
    {
      "Id": "urx",
      "Print_Name": "Urimo",
      "Inverted_Name": "Urimo"
    },
    {
      "Id": "ury",
      "Print_Name": "Orya",
      "Inverted_Name": "Orya"
    },
    {
      "Id": "urz",
      "Print_Name": "Uru-Eu-Wau-Wau",
      "Inverted_Name": "Uru-Eu-Wau-Wau"
    },
    {
      "Id": "usa",
      "Print_Name": "Usarufa",
      "Inverted_Name": "Usarufa"
    },
    {
      "Id": "ush",
      "Print_Name": "Ushojo",
      "Inverted_Name": "Ushojo"
    },
    {
      "Id": "usi",
      "Print_Name": "Usui",
      "Inverted_Name": "Usui"
    },
    {
      "Id": "usk",
      "Print_Name": "Usaghade",
      "Inverted_Name": "Usaghade"
    },
    {
      "Id": "usp",
      "Print_Name": "Uspanteco",
      "Inverted_Name": "Uspanteco"
    },
    {
      "Id": "uss",
      "Print_Name": "us-Saare",
      "Inverted_Name": "us-Saare"
    },
    {
      "Id": "usu",
      "Print_Name": "Uya",
      "Inverted_Name": "Uya"
    },
    {
      "Id": "uta",
      "Print_Name": "Otank",
      "Inverted_Name": "Otank"
    },
    {
      "Id": "ute",
      "Print_Name": "Ute-Southern Paiute",
      "Inverted_Name": "Ute-Southern Paiute"
    },
    {
      "Id": "uth",
      "Print_Name": "ut-Hun",
      "Inverted_Name": "ut-Hun"
    },
    {
      "Id": "utp",
      "Print_Name": "Amba (Solomon Islands)",
      "Inverted_Name": "Amba (Solomon Islands)"
    },
    {
      "Id": "utr",
      "Print_Name": "Etulo",
      "Inverted_Name": "Etulo"
    },
    {
      "Id": "utu",
      "Print_Name": "Utu",
      "Inverted_Name": "Utu"
    },
    {
      "Id": "uum",
      "Print_Name": "Urum",
      "Inverted_Name": "Urum"
    },
    {
      "Id": "uur",
      "Print_Name": "Ura (Vanuatu)",
      "Inverted_Name": "Ura (Vanuatu)"
    },
    {
      "Id": "uuu",
      "Print_Name": "U",
      "Inverted_Name": "U"
    },
    {
      "Id": "uve",
      "Print_Name": "Fagauvea",
      "Inverted_Name": "Fagauvea"
    },
    {
      "Id": "uve",
      "Print_Name": "West Uvean",
      "Inverted_Name": "Uvean, West"
    },
    {
      "Id": "uvh",
      "Print_Name": "Uri",
      "Inverted_Name": "Uri"
    },
    {
      "Id": "uvl",
      "Print_Name": "Lote",
      "Inverted_Name": "Lote"
    },
    {
      "Id": "uwa",
      "Print_Name": "Kuku-Uwanh",
      "Inverted_Name": "Kuku-Uwanh"
    },
    {
      "Id": "uya",
      "Print_Name": "Doko-Uyanga",
      "Inverted_Name": "Doko-Uyanga"
    },
    {
      "Id": "uzb",
      "Print_Name": "Uzbek",
      "Inverted_Name": "Uzbek"
    },
    {
      "Id": "uzn",
      "Print_Name": "Northern Uzbek",
      "Inverted_Name": "Uzbek, Northern"
    },
    {
      "Id": "uzs",
      "Print_Name": "Southern Uzbek",
      "Inverted_Name": "Uzbek, Southern"
    },
    {
      "Id": "vaa",
      "Print_Name": "Vaagri Booli",
      "Inverted_Name": "Vaagri Booli"
    },
    {
      "Id": "vae",
      "Print_Name": "Vale",
      "Inverted_Name": "Vale"
    },
    {
      "Id": "vaf",
      "Print_Name": "Vafsi",
      "Inverted_Name": "Vafsi"
    },
    {
      "Id": "vag",
      "Print_Name": "Vagla",
      "Inverted_Name": "Vagla"
    },
    {
      "Id": "vah",
      "Print_Name": "Varhadi-Nagpuri",
      "Inverted_Name": "Varhadi-Nagpuri"
    },
    {
      "Id": "vai",
      "Print_Name": "Vai",
      "Inverted_Name": "Vai"
    },
    {
      "Id": "vaj",
      "Print_Name": "Northwestern ǃKung",
      "Inverted_Name": "ǃKung, Northwestern"
    },
    {
      "Id": "vaj",
      "Print_Name": "Sekele",
      "Inverted_Name": "Sekele"
    },
    {
      "Id": "vaj",
      "Print_Name": "Vasekele",
      "Inverted_Name": "Vasekele"
    },
    {
      "Id": "val",
      "Print_Name": "Vehes",
      "Inverted_Name": "Vehes"
    },
    {
      "Id": "vam",
      "Print_Name": "Vanimo",
      "Inverted_Name": "Vanimo"
    },
    {
      "Id": "van",
      "Print_Name": "Valman",
      "Inverted_Name": "Valman"
    },
    {
      "Id": "vao",
      "Print_Name": "Vao",
      "Inverted_Name": "Vao"
    },
    {
      "Id": "vap",
      "Print_Name": "Vaiphei",
      "Inverted_Name": "Vaiphei"
    },
    {
      "Id": "var",
      "Print_Name": "Huarijio",
      "Inverted_Name": "Huarijio"
    },
    {
      "Id": "vas",
      "Print_Name": "Vasavi",
      "Inverted_Name": "Vasavi"
    },
    {
      "Id": "vau",
      "Print_Name": "Vanuma",
      "Inverted_Name": "Vanuma"
    },
    {
      "Id": "vav",
      "Print_Name": "Varli",
      "Inverted_Name": "Varli"
    },
    {
      "Id": "vay",
      "Print_Name": "Wayu",
      "Inverted_Name": "Wayu"
    },
    {
      "Id": "vbb",
      "Print_Name": "Southeast Babar",
      "Inverted_Name": "Babar, Southeast"
    },
    {
      "Id": "vbk",
      "Print_Name": "Southwestern Bontok",
      "Inverted_Name": "Bontok, Southwestern"
    },
    {
      "Id": "vec",
      "Print_Name": "Venetian",
      "Inverted_Name": "Venetian"
    },
    {
      "Id": "ved",
      "Print_Name": "Veddah",
      "Inverted_Name": "Veddah"
    },
    {
      "Id": "vel",
      "Print_Name": "Veluws",
      "Inverted_Name": "Veluws"
    },
    {
      "Id": "vem",
      "Print_Name": "Vemgo-Mabas",
      "Inverted_Name": "Vemgo-Mabas"
    },
    {
      "Id": "ven",
      "Print_Name": "Venda",
      "Inverted_Name": "Venda"
    },
    {
      "Id": "veo",
      "Print_Name": "Ventureño",
      "Inverted_Name": "Ventureño"
    },
    {
      "Id": "vep",
      "Print_Name": "Veps",
      "Inverted_Name": "Veps"
    },
    {
      "Id": "ver",
      "Print_Name": "Mom Jango",
      "Inverted_Name": "Mom Jango"
    },
    {
      "Id": "vgr",
      "Print_Name": "Vaghri",
      "Inverted_Name": "Vaghri"
    },
    {
      "Id": "vgt",
      "Print_Name": "Flemish Sign Language",
      "Inverted_Name": "Flemish Sign Language"
    },
    {
      "Id": "vgt",
      "Print_Name": "Vlaamse Gebarentaal",
      "Inverted_Name": "Vlaamse Gebarentaal"
    },
    {
      "Id": "vic",
      "Print_Name": "Virgin Islands Creole English",
      "Inverted_Name": "Creole English, Virgin Islands"
    },
    {
      "Id": "vid",
      "Print_Name": "Vidunda",
      "Inverted_Name": "Vidunda"
    },
    {
      "Id": "vie",
      "Print_Name": "Vietnamese",
      "Inverted_Name": "Vietnamese"
    },
    {
      "Id": "vif",
      "Print_Name": "Vili",
      "Inverted_Name": "Vili"
    },
    {
      "Id": "vig",
      "Print_Name": "Viemo",
      "Inverted_Name": "Viemo"
    },
    {
      "Id": "vil",
      "Print_Name": "Vilela",
      "Inverted_Name": "Vilela"
    },
    {
      "Id": "vin",
      "Print_Name": "Vinza",
      "Inverted_Name": "Vinza"
    },
    {
      "Id": "vis",
      "Print_Name": "Vishavan",
      "Inverted_Name": "Vishavan"
    },
    {
      "Id": "vit",
      "Print_Name": "Viti",
      "Inverted_Name": "Viti"
    },
    {
      "Id": "viv",
      "Print_Name": "Iduna",
      "Inverted_Name": "Iduna"
    },
    {
      "Id": "vjk",
      "Print_Name": "Bajjika",
      "Inverted_Name": "Bajjika"
    },
    {
      "Id": "vka",
      "Print_Name": "Kariyarra",
      "Inverted_Name": "Kariyarra"
    },
    {
      "Id": "vkj",
      "Print_Name": "Kujarge",
      "Inverted_Name": "Kujarge"
    },
    {
      "Id": "vkk",
      "Print_Name": "Kaur",
      "Inverted_Name": "Kaur"
    },
    {
      "Id": "vkl",
      "Print_Name": "Kulisusu",
      "Inverted_Name": "Kulisusu"
    },
    {
      "Id": "vkm",
      "Print_Name": "Kamakan",
      "Inverted_Name": "Kamakan"
    },
    {
      "Id": "vkn",
      "Print_Name": "Koro Nulu",
      "Inverted_Name": "Koro Nulu"
    },
    {
      "Id": "vko",
      "Print_Name": "Kodeoha",
      "Inverted_Name": "Kodeoha"
    },
    {
      "Id": "vkp",
      "Print_Name": "Korlai Creole Portuguese",
      "Inverted_Name": "Creole Portuguese, Korlai"
    },
    {
      "Id": "vkt",
      "Print_Name": "Tenggarong Kutai Malay",
      "Inverted_Name": "Malay, Tenggarong Kutai"
    },
    {
      "Id": "vku",
      "Print_Name": "Kurrama",
      "Inverted_Name": "Kurrama"
    },
    {
      "Id": "vkz",
      "Print_Name": "Koro Zuba",
      "Inverted_Name": "Koro Zuba"
    },
    {
      "Id": "vlp",
      "Print_Name": "Valpei",
      "Inverted_Name": "Valpei"
    },
    {
      "Id": "vls",
      "Print_Name": "Vlaams",
      "Inverted_Name": "Vlaams"
    },
    {
      "Id": "vma",
      "Print_Name": "Martuyhunira",
      "Inverted_Name": "Martuyhunira"
    },
    {
      "Id": "vmb",
      "Print_Name": "Barbaram",
      "Inverted_Name": "Barbaram"
    },
    {
      "Id": "vmc",
      "Print_Name": "Juxtlahuaca Mixtec",
      "Inverted_Name": "Mixtec, Juxtlahuaca"
    },
    {
      "Id": "vmd",
      "Print_Name": "Mudu Koraga",
      "Inverted_Name": "Koraga, Mudu"
    },
    {
      "Id": "vme",
      "Print_Name": "East Masela",
      "Inverted_Name": "Masela, East"
    },
    {
      "Id": "vmf",
      "Print_Name": "Mainfränkisch",
      "Inverted_Name": "Mainfränkisch"
    },
    {
      "Id": "vmg",
      "Print_Name": "Lungalunga",
      "Inverted_Name": "Lungalunga"
    },
    {
      "Id": "vmh",
      "Print_Name": "Maraghei",
      "Inverted_Name": "Maraghei"
    },
    {
      "Id": "vmi",
      "Print_Name": "Miwa",
      "Inverted_Name": "Miwa"
    },
    {
      "Id": "vmj",
      "Print_Name": "Ixtayutla Mixtec",
      "Inverted_Name": "Mixtec, Ixtayutla"
    },
    {
      "Id": "vmk",
      "Print_Name": "Makhuwa-Shirima",
      "Inverted_Name": "Makhuwa-Shirima"
    },
    {
      "Id": "vml",
      "Print_Name": "Malgana",
      "Inverted_Name": "Malgana"
    },
    {
      "Id": "vmm",
      "Print_Name": "Mitlatongo Mixtec",
      "Inverted_Name": "Mixtec, Mitlatongo"
    },
    {
      "Id": "vmp",
      "Print_Name": "Soyaltepec Mazatec",
      "Inverted_Name": "Mazatec, Soyaltepec"
    },
    {
      "Id": "vmq",
      "Print_Name": "Soyaltepec Mixtec",
      "Inverted_Name": "Mixtec, Soyaltepec"
    },
    {
      "Id": "vmr",
      "Print_Name": "Marenje",
      "Inverted_Name": "Marenje"
    },
    {
      "Id": "vms",
      "Print_Name": "Moksela",
      "Inverted_Name": "Moksela"
    },
    {
      "Id": "vmu",
      "Print_Name": "Muluridyi",
      "Inverted_Name": "Muluridyi"
    },
    {
      "Id": "vmv",
      "Print_Name": "Valley Maidu",
      "Inverted_Name": "Maidu, Valley"
    },
    {
      "Id": "vmw",
      "Print_Name": "Makhuwa",
      "Inverted_Name": "Makhuwa"
    },
    {
      "Id": "vmx",
      "Print_Name": "Tamazola Mixtec",
      "Inverted_Name": "Mixtec, Tamazola"
    },
    {
      "Id": "vmy",
      "Print_Name": "Ayautla Mazatec",
      "Inverted_Name": "Mazatec, Ayautla"
    },
    {
      "Id": "vmz",
      "Print_Name": "Mazatlán Mazatec",
      "Inverted_Name": "Mazatec, Mazatlán"
    },
    {
      "Id": "vnk",
      "Print_Name": "Lovono",
      "Inverted_Name": "Lovono"
    },
    {
      "Id": "vnk",
      "Print_Name": "Vano",
      "Inverted_Name": "Vano"
    },
    {
      "Id": "vnm",
      "Print_Name": "Neve'ei",
      "Inverted_Name": "Neve'ei"
    },
    {
      "Id": "vnm",
      "Print_Name": "Vinmavis",
      "Inverted_Name": "Vinmavis"
    },
    {
      "Id": "vnp",
      "Print_Name": "Vunapu",
      "Inverted_Name": "Vunapu"
    },
    {
      "Id": "vol",
      "Print_Name": "Volapük",
      "Inverted_Name": "Volapük"
    },
    {
      "Id": "vor",
      "Print_Name": "Voro",
      "Inverted_Name": "Voro"
    },
    {
      "Id": "vot",
      "Print_Name": "Votic",
      "Inverted_Name": "Votic"
    },
    {
      "Id": "vra",
      "Print_Name": "Vera'a",
      "Inverted_Name": "Vera'a"
    },
    {
      "Id": "vro",
      "Print_Name": "Võro",
      "Inverted_Name": "Võro"
    },
    {
      "Id": "vrs",
      "Print_Name": "Varisi",
      "Inverted_Name": "Varisi"
    },
    {
      "Id": "vrt",
      "Print_Name": "Banam Bay",
      "Inverted_Name": "Banam Bay"
    },
    {
      "Id": "vrt",
      "Print_Name": "Burmbar",
      "Inverted_Name": "Burmbar"
    },
    {
      "Id": "vsi",
      "Print_Name": "Moldova Sign Language",
      "Inverted_Name": "Moldova Sign Language"
    },
    {
      "Id": "vsl",
      "Print_Name": "Venezuelan Sign Language",
      "Inverted_Name": "Venezuelan Sign Language"
    },
    {
      "Id": "vsv",
      "Print_Name": "Llengua de signes valenciana",
      "Inverted_Name": "Llengua de signes valenciana"
    },
    {
      "Id": "vsv",
      "Print_Name": "Valencian Sign Language",
      "Inverted_Name": "Valencian Sign Language"
    },
    {
      "Id": "vto",
      "Print_Name": "Vitou",
      "Inverted_Name": "Vitou"
    },
    {
      "Id": "vum",
      "Print_Name": "Vumbu",
      "Inverted_Name": "Vumbu"
    },
    {
      "Id": "vun",
      "Print_Name": "Vunjo",
      "Inverted_Name": "Vunjo"
    },
    {
      "Id": "vut",
      "Print_Name": "Vute",
      "Inverted_Name": "Vute"
    },
    {
      "Id": "vwa",
      "Print_Name": "Awa (China)",
      "Inverted_Name": "Awa (China)"
    },
    {
      "Id": "waa",
      "Print_Name": "Walla Walla",
      "Inverted_Name": "Walla Walla"
    },
    {
      "Id": "wab",
      "Print_Name": "Wab",
      "Inverted_Name": "Wab"
    },
    {
      "Id": "wac",
      "Print_Name": "Wasco-Wishram",
      "Inverted_Name": "Wasco-Wishram"
    },
    {
      "Id": "wad",
      "Print_Name": "Wamesa",
      "Inverted_Name": "Wamesa"
    },
    {
      "Id": "wad",
      "Print_Name": "Wondama",
      "Inverted_Name": "Wondama"
    },
    {
      "Id": "wae",
      "Print_Name": "Walser",
      "Inverted_Name": "Walser"
    },
    {
      "Id": "waf",
      "Print_Name": "Wakoná",
      "Inverted_Name": "Wakoná"
    },
    {
      "Id": "wag",
      "Print_Name": "Wa'ema",
      "Inverted_Name": "Wa'ema"
    },
    {
      "Id": "wah",
      "Print_Name": "Watubela",
      "Inverted_Name": "Watubela"
    },
    {
      "Id": "wai",
      "Print_Name": "Wares",
      "Inverted_Name": "Wares"
    },
    {
      "Id": "waj",
      "Print_Name": "Waffa",
      "Inverted_Name": "Waffa"
    },
    {
      "Id": "wal",
      "Print_Name": "Wolaitta",
      "Inverted_Name": "Wolaitta"
    },
    {
      "Id": "wal",
      "Print_Name": "Wolaytta",
      "Inverted_Name": "Wolaytta"
    },
    {
      "Id": "wam",
      "Print_Name": "Wampanoag",
      "Inverted_Name": "Wampanoag"
    },
    {
      "Id": "wan",
      "Print_Name": "Wan",
      "Inverted_Name": "Wan"
    },
    {
      "Id": "wao",
      "Print_Name": "Wappo",
      "Inverted_Name": "Wappo"
    },
    {
      "Id": "wap",
      "Print_Name": "Wapishana",
      "Inverted_Name": "Wapishana"
    },
    {
      "Id": "waq",
      "Print_Name": "Wagiman",
      "Inverted_Name": "Wagiman"
    },
    {
      "Id": "war",
      "Print_Name": "Waray (Philippines)",
      "Inverted_Name": "Waray (Philippines)"
    },
    {
      "Id": "was",
      "Print_Name": "Washo",
      "Inverted_Name": "Washo"
    },
    {
      "Id": "wat",
      "Print_Name": "Kaninuwa",
      "Inverted_Name": "Kaninuwa"
    },
    {
      "Id": "wau",
      "Print_Name": "Waurá",
      "Inverted_Name": "Waurá"
    },
    {
      "Id": "wav",
      "Print_Name": "Waka",
      "Inverted_Name": "Waka"
    },
    {
      "Id": "waw",
      "Print_Name": "Waiwai",
      "Inverted_Name": "Waiwai"
    },
    {
      "Id": "wax",
      "Print_Name": "Marangis",
      "Inverted_Name": "Marangis"
    },
    {
      "Id": "wax",
      "Print_Name": "Watam",
      "Inverted_Name": "Watam"
    },
    {
      "Id": "way",
      "Print_Name": "Wayana",
      "Inverted_Name": "Wayana"
    },
    {
      "Id": "waz",
      "Print_Name": "Wampur",
      "Inverted_Name": "Wampur"
    },
    {
      "Id": "wba",
      "Print_Name": "Warao",
      "Inverted_Name": "Warao"
    },
    {
      "Id": "wbb",
      "Print_Name": "Wabo",
      "Inverted_Name": "Wabo"
    },
    {
      "Id": "wbe",
      "Print_Name": "Waritai",
      "Inverted_Name": "Waritai"
    },
    {
      "Id": "wbf",
      "Print_Name": "Wara",
      "Inverted_Name": "Wara"
    },
    {
      "Id": "wbh",
      "Print_Name": "Wanda",
      "Inverted_Name": "Wanda"
    },
    {
      "Id": "wbi",
      "Print_Name": "Vwanji",
      "Inverted_Name": "Vwanji"
    },
    {
      "Id": "wbj",
      "Print_Name": "Alagwa",
      "Inverted_Name": "Alagwa"
    },
    {
      "Id": "wbk",
      "Print_Name": "Waigali",
      "Inverted_Name": "Waigali"
    },
    {
      "Id": "wbl",
      "Print_Name": "Wakhi",
      "Inverted_Name": "Wakhi"
    },
    {
      "Id": "wbm",
      "Print_Name": "Wa",
      "Inverted_Name": "Wa"
    },
    {
      "Id": "wbp",
      "Print_Name": "Warlpiri",
      "Inverted_Name": "Warlpiri"
    },
    {
      "Id": "wbq",
      "Print_Name": "Waddar",
      "Inverted_Name": "Waddar"
    },
    {
      "Id": "wbr",
      "Print_Name": "Wagdi",
      "Inverted_Name": "Wagdi"
    },
    {
      "Id": "wbs",
      "Print_Name": "West Bengal Sign Language",
      "Inverted_Name": "West Bengal Sign Language"
    },
    {
      "Id": "wbt",
      "Print_Name": "Warnman",
      "Inverted_Name": "Warnman"
    },
    {
      "Id": "wbv",
      "Print_Name": "Wajarri",
      "Inverted_Name": "Wajarri"
    },
    {
      "Id": "wbw",
      "Print_Name": "Woi",
      "Inverted_Name": "Woi"
    },
    {
      "Id": "wca",
      "Print_Name": "Yanomámi",
      "Inverted_Name": "Yanomámi"
    },
    {
      "Id": "wci",
      "Print_Name": "Waci Gbe",
      "Inverted_Name": "Gbe, Waci"
    },
    {
      "Id": "wdd",
      "Print_Name": "Wandji",
      "Inverted_Name": "Wandji"
    },
    {
      "Id": "wdg",
      "Print_Name": "Wadaginam",
      "Inverted_Name": "Wadaginam"
    },
    {
      "Id": "wdj",
      "Print_Name": "Wadjiginy",
      "Inverted_Name": "Wadjiginy"
    },
    {
      "Id": "wdk",
      "Print_Name": "Wadikali",
      "Inverted_Name": "Wadikali"
    },
    {
      "Id": "wdt",
      "Print_Name": "Wendat",
      "Inverted_Name": "Wendat"
    },
    {
      "Id": "wdt",
      "Print_Name": "Wyandot",
      "Inverted_Name": "Wyandot"
    },
    {
      "Id": "wdu",
      "Print_Name": "Wadjigu",
      "Inverted_Name": "Wadjigu"
    },
    {
      "Id": "wdy",
      "Print_Name": "Wadjabangayi",
      "Inverted_Name": "Wadjabangayi"
    },
    {
      "Id": "wea",
      "Print_Name": "Wewaw",
      "Inverted_Name": "Wewaw"
    },
    {
      "Id": "wec",
      "Print_Name": "Wè Western",
      "Inverted_Name": "Wè Western"
    },
    {
      "Id": "wed",
      "Print_Name": "Wedau",
      "Inverted_Name": "Wedau"
    },
    {
      "Id": "weg",
      "Print_Name": "Wergaia",
      "Inverted_Name": "Wergaia"
    },
    {
      "Id": "weh",
      "Print_Name": "Weh",
      "Inverted_Name": "Weh"
    },
    {
      "Id": "wei",
      "Print_Name": "Kiunum",
      "Inverted_Name": "Kiunum"
    },
    {
      "Id": "wem",
      "Print_Name": "Weme Gbe",
      "Inverted_Name": "Gbe, Weme"
    },
    {
      "Id": "weo",
      "Print_Name": "Wemale",
      "Inverted_Name": "Wemale"
    },
    {
      "Id": "wep",
      "Print_Name": "Westphalien",
      "Inverted_Name": "Westphalien"
    },
    {
      "Id": "wer",
      "Print_Name": "Weri",
      "Inverted_Name": "Weri"
    },
    {
      "Id": "wes",
      "Print_Name": "Cameroon Pidgin",
      "Inverted_Name": "Pidgin, Cameroon"
    },
    {
      "Id": "wet",
      "Print_Name": "Perai",
      "Inverted_Name": "Perai"
    },
    {
      "Id": "weu",
      "Print_Name": "Rawngtu Chin",
      "Inverted_Name": "Chin, Rawngtu"
    },
    {
      "Id": "wew",
      "Print_Name": "Wejewa",
      "Inverted_Name": "Wejewa"
    },
    {
      "Id": "wfg",
      "Print_Name": "Yafi",
      "Inverted_Name": "Yafi"
    },
    {
      "Id": "wfg",
      "Print_Name": "Zorop",
      "Inverted_Name": "Zorop"
    },
    {
      "Id": "wga",
      "Print_Name": "Wagaya",
      "Inverted_Name": "Wagaya"
    },
    {
      "Id": "wgb",
      "Print_Name": "Wagawaga",
      "Inverted_Name": "Wagawaga"
    },
    {
      "Id": "wgg",
      "Print_Name": "Wangganguru",
      "Inverted_Name": "Wangganguru"
    },
    {
      "Id": "wgg",
      "Print_Name": "Wangkangurru",
      "Inverted_Name": "Wangkangurru"
    },
    {
      "Id": "wgi",
      "Print_Name": "Wahgi",
      "Inverted_Name": "Wahgi"
    },
    {
      "Id": "wgo",
      "Print_Name": "Waigeo",
      "Inverted_Name": "Waigeo"
    },
    {
      "Id": "wgu",
      "Print_Name": "Wirangu",
      "Inverted_Name": "Wirangu"
    },
    {
      "Id": "wgy",
      "Print_Name": "Warrgamay",
      "Inverted_Name": "Warrgamay"
    },
    {
      "Id": "wha",
      "Print_Name": "Manusela",
      "Inverted_Name": "Manusela"
    },
    {
      "Id": "wha",
      "Print_Name": "Sou Upaa",
      "Inverted_Name": "Sou Upaa"
    },
    {
      "Id": "whg",
      "Print_Name": "North Wahgi",
      "Inverted_Name": "Wahgi, North"
    },
    {
      "Id": "whk",
      "Print_Name": "Wahau Kenyah",
      "Inverted_Name": "Kenyah, Wahau"
    },
    {
      "Id": "whu",
      "Print_Name": "Wahau Kayan",
      "Inverted_Name": "Kayan, Wahau"
    },
    {
      "Id": "wib",
      "Print_Name": "Southern Toussian",
      "Inverted_Name": "Toussian, Southern"
    },
    {
      "Id": "wic",
      "Print_Name": "Wichita",
      "Inverted_Name": "Wichita"
    },
    {
      "Id": "wie",
      "Print_Name": "Wik-Epa",
      "Inverted_Name": "Wik-Epa"
    },
    {
      "Id": "wif",
      "Print_Name": "Wik-Keyangan",
      "Inverted_Name": "Wik-Keyangan"
    },
    {
      "Id": "wig",
      "Print_Name": "Wik Ngathan",
      "Inverted_Name": "Wik Ngathan"
    },
    {
      "Id": "wih",
      "Print_Name": "Wik-Me'anha",
      "Inverted_Name": "Wik-Me'anha"
    },
    {
      "Id": "wii",
      "Print_Name": "Minidien",
      "Inverted_Name": "Minidien"
    },
    {
      "Id": "wij",
      "Print_Name": "Wik-Iiyanh",
      "Inverted_Name": "Wik-Iiyanh"
    },
    {
      "Id": "wik",
      "Print_Name": "Wikalkan",
      "Inverted_Name": "Wikalkan"
    },
    {
      "Id": "wil",
      "Print_Name": "Wilawila",
      "Inverted_Name": "Wilawila"
    },
    {
      "Id": "wim",
      "Print_Name": "Wik-Mungkan",
      "Inverted_Name": "Wik-Mungkan"
    },
    {
      "Id": "win",
      "Print_Name": "Ho-Chunk",
      "Inverted_Name": "Ho-Chunk"
    },
    {
      "Id": "wir",
      "Print_Name": "Wiraféd",
      "Inverted_Name": "Wiraféd"
    },
    {
      "Id": "wiu",
      "Print_Name": "Wiru",
      "Inverted_Name": "Wiru"
    },
    {
      "Id": "wiv",
      "Print_Name": "Vitu",
      "Inverted_Name": "Vitu"
    },
    {
      "Id": "wiy",
      "Print_Name": "Wiyot",
      "Inverted_Name": "Wiyot"
    },
    {
      "Id": "wja",
      "Print_Name": "Waja",
      "Inverted_Name": "Waja"
    },
    {
      "Id": "wji",
      "Print_Name": "Warji",
      "Inverted_Name": "Warji"
    },
    {
      "Id": "wka",
      "Print_Name": "Kw'adza",
      "Inverted_Name": "Kw'adza"
    },
    {
      "Id": "wkb",
      "Print_Name": "Kumbaran",
      "Inverted_Name": "Kumbaran"
    },
    {
      "Id": "wkd",
      "Print_Name": "Mo",
      "Inverted_Name": "Mo"
    },
    {
      "Id": "wkd",
      "Print_Name": "Wakde",
      "Inverted_Name": "Wakde"
    },
    {
      "Id": "wkl",
      "Print_Name": "Kalanadi",
      "Inverted_Name": "Kalanadi"
    },
    {
      "Id": "wkr",
      "Print_Name": "Keerray-Woorroong",
      "Inverted_Name": "Keerray-Woorroong"
    },
    {
      "Id": "wku",
      "Print_Name": "Kunduvadi",
      "Inverted_Name": "Kunduvadi"
    },
    {
      "Id": "wkw",
      "Print_Name": "Wakawaka",
      "Inverted_Name": "Wakawaka"
    },
    {
      "Id": "wky",
      "Print_Name": "Wangkayutyuru",
      "Inverted_Name": "Wangkayutyuru"
    },
    {
      "Id": "wla",
      "Print_Name": "Walio",
      "Inverted_Name": "Walio"
    },
    {
      "Id": "wlc",
      "Print_Name": "Mwali Comorian",
      "Inverted_Name": "Comorian, Mwali"
    },
    {
      "Id": "wle",
      "Print_Name": "Wolane",
      "Inverted_Name": "Wolane"
    },
    {
      "Id": "wlg",
      "Print_Name": "Kunbarlang",
      "Inverted_Name": "Kunbarlang"
    },
    {
      "Id": "wlh",
      "Print_Name": "Welaun",
      "Inverted_Name": "Welaun"
    },
    {
      "Id": "wli",
      "Print_Name": "Waioli",
      "Inverted_Name": "Waioli"
    },
    {
      "Id": "wlk",
      "Print_Name": "Wailaki",
      "Inverted_Name": "Wailaki"
    },
    {
      "Id": "wll",
      "Print_Name": "Wali (Sudan)",
      "Inverted_Name": "Wali (Sudan)"
    },
    {
      "Id": "wlm",
      "Print_Name": "Middle Welsh",
      "Inverted_Name": "Welsh, Middle"
    },
    {
      "Id": "wln",
      "Print_Name": "Walloon",
      "Inverted_Name": "Walloon"
    },
    {
      "Id": "wlo",
      "Print_Name": "Wolio",
      "Inverted_Name": "Wolio"
    },
    {
      "Id": "wlr",
      "Print_Name": "Wailapa",
      "Inverted_Name": "Wailapa"
    },
    {
      "Id": "wls",
      "Print_Name": "Wallisian",
      "Inverted_Name": "Wallisian"
    },
    {
      "Id": "wlu",
      "Print_Name": "Wuliwuli",
      "Inverted_Name": "Wuliwuli"
    },
    {
      "Id": "wlv",
      "Print_Name": "Wichí Lhamtés Vejoz",
      "Inverted_Name": "Wichí Lhamtés Vejoz"
    },
    {
      "Id": "wlw",
      "Print_Name": "Walak",
      "Inverted_Name": "Walak"
    },
    {
      "Id": "wlx",
      "Print_Name": "Wali (Ghana)",
      "Inverted_Name": "Wali (Ghana)"
    },
    {
      "Id": "wly",
      "Print_Name": "Waling",
      "Inverted_Name": "Waling"
    },
    {
      "Id": "wma",
      "Print_Name": "Mawa (Nigeria)",
      "Inverted_Name": "Mawa (Nigeria)"
    },
    {
      "Id": "wmb",
      "Print_Name": "Wambaya",
      "Inverted_Name": "Wambaya"
    },
    {
      "Id": "wmc",
      "Print_Name": "Wamas",
      "Inverted_Name": "Wamas"
    },
    {
      "Id": "wmd",
      "Print_Name": "Mamaindé",
      "Inverted_Name": "Mamaindé"
    },
    {
      "Id": "wme",
      "Print_Name": "Wambule",
      "Inverted_Name": "Wambule"
    },
    {
      "Id": "wmg",
      "Print_Name": "Western Minyag",
      "Inverted_Name": "Minyag, Western"
    },
    {
      "Id": "wmh",
      "Print_Name": "Waima'a",
      "Inverted_Name": "Waima'a"
    },
    {
      "Id": "wmi",
      "Print_Name": "Wamin",
      "Inverted_Name": "Wamin"
    },
    {
      "Id": "wmm",
      "Print_Name": "Maiwa (Indonesia)",
      "Inverted_Name": "Maiwa (Indonesia)"
    },
    {
      "Id": "wmn",
      "Print_Name": "Waamwang",
      "Inverted_Name": "Waamwang"
    },
    {
      "Id": "wmo",
      "Print_Name": "Wom (Papua New Guinea)",
      "Inverted_Name": "Wom (Papua New Guinea)"
    },
    {
      "Id": "wms",
      "Print_Name": "Wambon",
      "Inverted_Name": "Wambon"
    },
    {
      "Id": "wmt",
      "Print_Name": "Walmajarri",
      "Inverted_Name": "Walmajarri"
    },
    {
      "Id": "wmw",
      "Print_Name": "Mwani",
      "Inverted_Name": "Mwani"
    },
    {
      "Id": "wmx",
      "Print_Name": "Womo",
      "Inverted_Name": "Womo"
    },
    {
      "Id": "wnb",
      "Print_Name": "Mokati",
      "Inverted_Name": "Mokati"
    },
    {
      "Id": "wnc",
      "Print_Name": "Wantoat",
      "Inverted_Name": "Wantoat"
    },
    {
      "Id": "wnd",
      "Print_Name": "Wandarang",
      "Inverted_Name": "Wandarang"
    },
    {
      "Id": "wne",
      "Print_Name": "Waneci",
      "Inverted_Name": "Waneci"
    },
    {
      "Id": "wng",
      "Print_Name": "Wanggom",
      "Inverted_Name": "Wanggom"
    },
    {
      "Id": "wni",
      "Print_Name": "Ndzwani Comorian",
      "Inverted_Name": "Comorian, Ndzwani"
    },
    {
      "Id": "wnk",
      "Print_Name": "Wanukaka",
      "Inverted_Name": "Wanukaka"
    },
    {
      "Id": "wnm",
      "Print_Name": "Wanggamala",
      "Inverted_Name": "Wanggamala"
    },
    {
      "Id": "wnn",
      "Print_Name": "Wunumara",
      "Inverted_Name": "Wunumara"
    },
    {
      "Id": "wno",
      "Print_Name": "Wano",
      "Inverted_Name": "Wano"
    },
    {
      "Id": "wnp",
      "Print_Name": "Wanap",
      "Inverted_Name": "Wanap"
    },
    {
      "Id": "wnu",
      "Print_Name": "Usan",
      "Inverted_Name": "Usan"
    },
    {
      "Id": "wnw",
      "Print_Name": "Wintu",
      "Inverted_Name": "Wintu"
    },
    {
      "Id": "wny",
      "Print_Name": "Waanyi",
      "Inverted_Name": "Waanyi"
    },
    {
      "Id": "wny",
      "Print_Name": "Wanyi",
      "Inverted_Name": "Wanyi"
    },
    {
      "Id": "woa",
      "Print_Name": "Kuwema",
      "Inverted_Name": "Kuwema"
    },
    {
      "Id": "woa",
      "Print_Name": "Tyaraity",
      "Inverted_Name": "Tyaraity"
    },
    {
      "Id": "wob",
      "Print_Name": "Wè Northern",
      "Inverted_Name": "Wè Northern"
    },
    {
      "Id": "woc",
      "Print_Name": "Wogeo",
      "Inverted_Name": "Wogeo"
    },
    {
      "Id": "wod",
      "Print_Name": "Wolani",
      "Inverted_Name": "Wolani"
    },
    {
      "Id": "woe",
      "Print_Name": "Woleaian",
      "Inverted_Name": "Woleaian"
    },
    {
      "Id": "wof",
      "Print_Name": "Gambian Wolof",
      "Inverted_Name": "Wolof, Gambian"
    },
    {
      "Id": "wog",
      "Print_Name": "Wogamusin",
      "Inverted_Name": "Wogamusin"
    },
    {
      "Id": "woi",
      "Print_Name": "Kamang",
      "Inverted_Name": "Kamang"
    },
    {
      "Id": "wok",
      "Print_Name": "Longto",
      "Inverted_Name": "Longto"
    },
    {
      "Id": "wol",
      "Print_Name": "Wolof",
      "Inverted_Name": "Wolof"
    },
    {
      "Id": "wom",
      "Print_Name": "Wom (Nigeria)",
      "Inverted_Name": "Wom (Nigeria)"
    },
    {
      "Id": "won",
      "Print_Name": "Wongo",
      "Inverted_Name": "Wongo"
    },
    {
      "Id": "woo",
      "Print_Name": "Manombai",
      "Inverted_Name": "Manombai"
    },
    {
      "Id": "wor",
      "Print_Name": "Woria",
      "Inverted_Name": "Woria"
    },
    {
      "Id": "wos",
      "Print_Name": "Hanga Hundi",
      "Inverted_Name": "Hanga Hundi"
    },
    {
      "Id": "wow",
      "Print_Name": "Wawonii",
      "Inverted_Name": "Wawonii"
    },
    {
      "Id": "woy",
      "Print_Name": "Weyto",
      "Inverted_Name": "Weyto"
    },
    {
      "Id": "wpc",
      "Print_Name": "Maco",
      "Inverted_Name": "Maco"
    },
    {
      "Id": "wrb",
      "Print_Name": "Waluwarra",
      "Inverted_Name": "Waluwarra"
    },
    {
      "Id": "wrb",
      "Print_Name": "Warluwara",
      "Inverted_Name": "Warluwara"
    },
    {
      "Id": "wrg",
      "Print_Name": "Gudjal",
      "Inverted_Name": "Gudjal"
    },
    {
      "Id": "wrg",
      "Print_Name": "Warungu",
      "Inverted_Name": "Warungu"
    },
    {
      "Id": "wrh",
      "Print_Name": "Wiradjuri",
      "Inverted_Name": "Wiradjuri"
    },
    {
      "Id": "wri",
      "Print_Name": "Wariyangga",
      "Inverted_Name": "Wariyangga"
    },
    {
      "Id": "wrk",
      "Print_Name": "Garrwa",
      "Inverted_Name": "Garrwa"
    },
    {
      "Id": "wrl",
      "Print_Name": "Warlmanpa",
      "Inverted_Name": "Warlmanpa"
    },
    {
      "Id": "wrm",
      "Print_Name": "Warumungu",
      "Inverted_Name": "Warumungu"
    },
    {
      "Id": "wrn",
      "Print_Name": "Warnang",
      "Inverted_Name": "Warnang"
    },
    {
      "Id": "wro",
      "Print_Name": "Worrorra",
      "Inverted_Name": "Worrorra"
    },
    {
      "Id": "wrp",
      "Print_Name": "Waropen",
      "Inverted_Name": "Waropen"
    },
    {
      "Id": "wrr",
      "Print_Name": "Wardaman",
      "Inverted_Name": "Wardaman"
    },
    {
      "Id": "wrs",
      "Print_Name": "Waris",
      "Inverted_Name": "Waris"
    },
    {
      "Id": "wru",
      "Print_Name": "Waru",
      "Inverted_Name": "Waru"
    },
    {
      "Id": "wrv",
      "Print_Name": "Waruna",
      "Inverted_Name": "Waruna"
    },
    {
      "Id": "wrw",
      "Print_Name": "Gugu Warra",
      "Inverted_Name": "Gugu Warra"
    },
    {
      "Id": "wrx",
      "Print_Name": "Wae Rana",
      "Inverted_Name": "Wae Rana"
    },
    {
      "Id": "wry",
      "Print_Name": "Merwari",
      "Inverted_Name": "Merwari"
    },
    {
      "Id": "wrz",
      "Print_Name": "Waray (Australia)",
      "Inverted_Name": "Waray (Australia)"
    },
    {
      "Id": "wsa",
      "Print_Name": "Warembori",
      "Inverted_Name": "Warembori"
    },
    {
      "Id": "wsg",
      "Print_Name": "Adilabad Gondi",
      "Inverted_Name": "Gondi, Adilabad"
    },
    {
      "Id": "wsi",
      "Print_Name": "Wusi",
      "Inverted_Name": "Wusi"
    },
    {
      "Id": "wsk",
      "Print_Name": "Waskia",
      "Inverted_Name": "Waskia"
    },
    {
      "Id": "wsr",
      "Print_Name": "Owenia",
      "Inverted_Name": "Owenia"
    },
    {
      "Id": "wss",
      "Print_Name": "Wasa",
      "Inverted_Name": "Wasa"
    },
    {
      "Id": "wsu",
      "Print_Name": "Wasu",
      "Inverted_Name": "Wasu"
    },
    {
      "Id": "wsv",
      "Print_Name": "Wotapuri-Katarqalai",
      "Inverted_Name": "Wotapuri-Katarqalai"
    },
    {
      "Id": "wtb",
      "Print_Name": "Matambwe",
      "Inverted_Name": "Matambwe"
    },
    {
      "Id": "wtf",
      "Print_Name": "Watiwa",
      "Inverted_Name": "Watiwa"
    },
    {
      "Id": "wth",
      "Print_Name": "Wathawurrung",
      "Inverted_Name": "Wathawurrung"
    },
    {
      "Id": "wti",
      "Print_Name": "Berta",
      "Inverted_Name": "Berta"
    },
    {
      "Id": "wtk",
      "Print_Name": "Watakataui",
      "Inverted_Name": "Watakataui"
    },
    {
      "Id": "wtm",
      "Print_Name": "Mewati",
      "Inverted_Name": "Mewati"
    },
    {
      "Id": "wtw",
      "Print_Name": "Wotu",
      "Inverted_Name": "Wotu"
    },
    {
      "Id": "wua",
      "Print_Name": "Wikngenchera",
      "Inverted_Name": "Wikngenchera"
    },
    {
      "Id": "wub",
      "Print_Name": "Wunambal",
      "Inverted_Name": "Wunambal"
    },
    {
      "Id": "wud",
      "Print_Name": "Wudu",
      "Inverted_Name": "Wudu"
    },
    {
      "Id": "wuh",
      "Print_Name": "Wutunhua",
      "Inverted_Name": "Wutunhua"
    },
    {
      "Id": "wul",
      "Print_Name": "Silimo",
      "Inverted_Name": "Silimo"
    },
    {
      "Id": "wum",
      "Print_Name": "Wumbvu",
      "Inverted_Name": "Wumbvu"
    },
    {
      "Id": "wun",
      "Print_Name": "Bungu",
      "Inverted_Name": "Bungu"
    },
    {
      "Id": "wur",
      "Print_Name": "Wurrugu",
      "Inverted_Name": "Wurrugu"
    },
    {
      "Id": "wut",
      "Print_Name": "Wutung",
      "Inverted_Name": "Wutung"
    },
    {
      "Id": "wuu",
      "Print_Name": "Wu Chinese",
      "Inverted_Name": "Chinese, Wu"
    },
    {
      "Id": "wuv",
      "Print_Name": "Wuvulu-Aua",
      "Inverted_Name": "Wuvulu-Aua"
    },
    {
      "Id": "wux",
      "Print_Name": "Wulna",
      "Inverted_Name": "Wulna"
    },
    {
      "Id": "wuy",
      "Print_Name": "Wauyai",
      "Inverted_Name": "Wauyai"
    },
    {
      "Id": "wwa",
      "Print_Name": "Waama",
      "Inverted_Name": "Waama"
    },
    {
      "Id": "wwb",
      "Print_Name": "Wakabunga",
      "Inverted_Name": "Wakabunga"
    },
    {
      "Id": "wwo",
      "Print_Name": "Dorig",
      "Inverted_Name": "Dorig"
    },
    {
      "Id": "wwo",
      "Print_Name": "Wetamut",
      "Inverted_Name": "Wetamut"
    },
    {
      "Id": "wwr",
      "Print_Name": "Warrwa",
      "Inverted_Name": "Warrwa"
    },
    {
      "Id": "www",
      "Print_Name": "Wawa",
      "Inverted_Name": "Wawa"
    },
    {
      "Id": "wxa",
      "Print_Name": "Waxianghua",
      "Inverted_Name": "Waxianghua"
    },
    {
      "Id": "wxw",
      "Print_Name": "Wardandi",
      "Inverted_Name": "Wardandi"
    },
    {
      "Id": "wyb",
      "Print_Name": "Wangaaybuwan-Ngiyambaa",
      "Inverted_Name": "Wangaaybuwan-Ngiyambaa"
    },
    {
      "Id": "wyi",
      "Print_Name": "Woiwurrung",
      "Inverted_Name": "Woiwurrung"
    },
    {
      "Id": "wym",
      "Print_Name": "Wymysorys",
      "Inverted_Name": "Wymysorys"
    },
    {
      "Id": "wyn",
      "Print_Name": "Wyandot",
      "Inverted_Name": "Wyandot"
    },
    {
      "Id": "wyr",
      "Print_Name": "Wayoró",
      "Inverted_Name": "Wayoró"
    },
    {
      "Id": "wyy",
      "Print_Name": "Western Fijian",
      "Inverted_Name": "Fijian, Western"
    },
    {
      "Id": "xaa",
      "Print_Name": "Andalusian Arabic",
      "Inverted_Name": "Arabic, Andalusian"
    },
    {
      "Id": "xab",
      "Print_Name": "Sambe",
      "Inverted_Name": "Sambe"
    },
    {
      "Id": "xac",
      "Print_Name": "Kachari",
      "Inverted_Name": "Kachari"
    },
    {
      "Id": "xad",
      "Print_Name": "Adai",
      "Inverted_Name": "Adai"
    },
    {
      "Id": "xae",
      "Print_Name": "Aequian",
      "Inverted_Name": "Aequian"
    },
    {
      "Id": "xag",
      "Print_Name": "Aghwan",
      "Inverted_Name": "Aghwan"
    },
    {
      "Id": "xai",
      "Print_Name": "Kaimbé",
      "Inverted_Name": "Kaimbé"
    },
    {
      "Id": "xaj",
      "Print_Name": "Ararandewára",
      "Inverted_Name": "Ararandewára"
    },
    {
      "Id": "xak",
      "Print_Name": "Máku",
      "Inverted_Name": "Máku"
    },
    {
      "Id": "xal",
      "Print_Name": "Kalmyk",
      "Inverted_Name": "Kalmyk"
    },
    {
      "Id": "xal",
      "Print_Name": "Oirat",
      "Inverted_Name": "Oirat"
    },
    {
      "Id": "xam",
      "Print_Name": "ǀXam",
      "Inverted_Name": "ǀXam"
    },
    {
      "Id": "xan",
      "Print_Name": "Xamtanga",
      "Inverted_Name": "Xamtanga"
    },
    {
      "Id": "xao",
      "Print_Name": "Khao",
      "Inverted_Name": "Khao"
    },
    {
      "Id": "xap",
      "Print_Name": "Apalachee",
      "Inverted_Name": "Apalachee"
    },
    {
      "Id": "xaq",
      "Print_Name": "Aquitanian",
      "Inverted_Name": "Aquitanian"
    },
    {
      "Id": "xar",
      "Print_Name": "Karami",
      "Inverted_Name": "Karami"
    },
    {
      "Id": "xas",
      "Print_Name": "Kamas",
      "Inverted_Name": "Kamas"
    },
    {
      "Id": "xat",
      "Print_Name": "Katawixi",
      "Inverted_Name": "Katawixi"
    },
    {
      "Id": "xau",
      "Print_Name": "Kauwera",
      "Inverted_Name": "Kauwera"
    },
    {
      "Id": "xav",
      "Print_Name": "Xavánte",
      "Inverted_Name": "Xavánte"
    },
    {
      "Id": "xaw",
      "Print_Name": "Kawaiisu",
      "Inverted_Name": "Kawaiisu"
    },
    {
      "Id": "xay",
      "Print_Name": "Kayan Mahakam",
      "Inverted_Name": "Kayan Mahakam"
    },
    {
      "Id": "xbb",
      "Print_Name": "Lower Burdekin",
      "Inverted_Name": "Burdekin, Lower"
    },
    {
      "Id": "xbc",
      "Print_Name": "Bactrian",
      "Inverted_Name": "Bactrian"
    },
    {
      "Id": "xbd",
      "Print_Name": "Bindal",
      "Inverted_Name": "Bindal"
    },
    {
      "Id": "xbe",
      "Print_Name": "Bigambal",
      "Inverted_Name": "Bigambal"
    },
    {
      "Id": "xbg",
      "Print_Name": "Bunganditj",
      "Inverted_Name": "Bunganditj"
    },
    {
      "Id": "xbi",
      "Print_Name": "Kombio",
      "Inverted_Name": "Kombio"
    },
    {
      "Id": "xbj",
      "Print_Name": "Birrpayi",
      "Inverted_Name": "Birrpayi"
    },
    {
      "Id": "xbm",
      "Print_Name": "Middle Breton",
      "Inverted_Name": "Breton, Middle"
    },
    {
      "Id": "xbn",
      "Print_Name": "Kenaboi",
      "Inverted_Name": "Kenaboi"
    },
    {
      "Id": "xbo",
      "Print_Name": "Bolgarian",
      "Inverted_Name": "Bolgarian"
    },
    {
      "Id": "xbp",
      "Print_Name": "Bibbulman",
      "Inverted_Name": "Bibbulman"
    },
    {
      "Id": "xbr",
      "Print_Name": "Kambera",
      "Inverted_Name": "Kambera"
    },
    {
      "Id": "xbw",
      "Print_Name": "Kambiwá",
      "Inverted_Name": "Kambiwá"
    },
    {
      "Id": "xby",
      "Print_Name": "Batjala",
      "Inverted_Name": "Batjala"
    },
    {
      "Id": "xby",
      "Print_Name": "Batyala",
      "Inverted_Name": "Batyala"
    },
    {
      "Id": "xcb",
      "Print_Name": "Cumbric",
      "Inverted_Name": "Cumbric"
    },
    {
      "Id": "xcc",
      "Print_Name": "Camunic",
      "Inverted_Name": "Camunic"
    },
    {
      "Id": "xce",
      "Print_Name": "Celtiberian",
      "Inverted_Name": "Celtiberian"
    },
    {
      "Id": "xcg",
      "Print_Name": "Cisalpine Gaulish",
      "Inverted_Name": "Gaulish, Cisalpine"
    },
    {
      "Id": "xch",
      "Print_Name": "Chemakum",
      "Inverted_Name": "Chemakum"
    },
    {
      "Id": "xch",
      "Print_Name": "Chimakum",
      "Inverted_Name": "Chimakum"
    },
    {
      "Id": "xcl",
      "Print_Name": "Classical Armenian",
      "Inverted_Name": "Armenian, Classical"
    },
    {
      "Id": "xcm",
      "Print_Name": "Comecrudo",
      "Inverted_Name": "Comecrudo"
    },
    {
      "Id": "xcn",
      "Print_Name": "Cotoname",
      "Inverted_Name": "Cotoname"
    },
    {
      "Id": "xco",
      "Print_Name": "Chorasmian",
      "Inverted_Name": "Chorasmian"
    },
    {
      "Id": "xcr",
      "Print_Name": "Carian",
      "Inverted_Name": "Carian"
    },
    {
      "Id": "xct",
      "Print_Name": "Classical Tibetan",
      "Inverted_Name": "Tibetan, Classical"
    },
    {
      "Id": "xcu",
      "Print_Name": "Curonian",
      "Inverted_Name": "Curonian"
    },
    {
      "Id": "xcv",
      "Print_Name": "Chuvantsy",
      "Inverted_Name": "Chuvantsy"
    },
    {
      "Id": "xcw",
      "Print_Name": "Coahuilteco",
      "Inverted_Name": "Coahuilteco"
    },
    {
      "Id": "xcy",
      "Print_Name": "Cayuse",
      "Inverted_Name": "Cayuse"
    },
    {
      "Id": "xda",
      "Print_Name": "Darkinyung",
      "Inverted_Name": "Darkinyung"
    },
    {
      "Id": "xdc",
      "Print_Name": "Dacian",
      "Inverted_Name": "Dacian"
    },
    {
      "Id": "xdk",
      "Print_Name": "Dharuk",
      "Inverted_Name": "Dharuk"
    },
    {
      "Id": "xdm",
      "Print_Name": "Edomite",
      "Inverted_Name": "Edomite"
    },
    {
      "Id": "xdo",
      "Print_Name": "Kwandu",
      "Inverted_Name": "Kwandu"
    },
    {
      "Id": "xdq",
      "Print_Name": "Kaitag",
      "Inverted_Name": "Kaitag"
    },
    {
      "Id": "xdy",
      "Print_Name": "Malayic Dayak",
      "Inverted_Name": "Dayak, Malayic"
    },
    {
      "Id": "xeb",
      "Print_Name": "Eblan",
      "Inverted_Name": "Eblan"
    },
    {
      "Id": "xed",
      "Print_Name": "Hdi",
      "Inverted_Name": "Hdi"
    },
    {
      "Id": "xeg",
      "Print_Name": "ǁXegwi",
      "Inverted_Name": "ǁXegwi"
    },
    {
      "Id": "xel",
      "Print_Name": "Kelo",
      "Inverted_Name": "Kelo"
    },
    {
      "Id": "xem",
      "Print_Name": "Kembayan",
      "Inverted_Name": "Kembayan"
    },
    {
      "Id": "xep",
      "Print_Name": "Epi-Olmec",
      "Inverted_Name": "Epi-Olmec"
    },
    {
      "Id": "xer",
      "Print_Name": "Xerénte",
      "Inverted_Name": "Xerénte"
    },
    {
      "Id": "xes",
      "Print_Name": "Kesawai",
      "Inverted_Name": "Kesawai"
    },
    {
      "Id": "xet",
      "Print_Name": "Xetá",
      "Inverted_Name": "Xetá"
    },
    {
      "Id": "xeu",
      "Print_Name": "Keoru-Ahia",
      "Inverted_Name": "Keoru-Ahia"
    },
    {
      "Id": "xfa",
      "Print_Name": "Faliscan",
      "Inverted_Name": "Faliscan"
    },
    {
      "Id": "xga",
      "Print_Name": "Galatian",
      "Inverted_Name": "Galatian"
    },
    {
      "Id": "xgb",
      "Print_Name": "Gbin",
      "Inverted_Name": "Gbin"
    },
    {
      "Id": "xgd",
      "Print_Name": "Gudang",
      "Inverted_Name": "Gudang"
    },
    {
      "Id": "xgf",
      "Print_Name": "Gabrielino-Fernandeño",
      "Inverted_Name": "Gabrielino-Fernandeño"
    },
    {
      "Id": "xgg",
      "Print_Name": "Goreng",
      "Inverted_Name": "Goreng"
    },
    {
      "Id": "xgi",
      "Print_Name": "Garingbal",
      "Inverted_Name": "Garingbal"
    },
    {
      "Id": "xgl",
      "Print_Name": "Galindan",
      "Inverted_Name": "Galindan"
    },
    {
      "Id": "xgm",
      "Print_Name": "Dharumbal",
      "Inverted_Name": "Dharumbal"
    },
    {
      "Id": "xgm",
      "Print_Name": "Guwinmal",
      "Inverted_Name": "Guwinmal"
    },
    {
      "Id": "xgr",
      "Print_Name": "Garza",
      "Inverted_Name": "Garza"
    },
    {
      "Id": "xgu",
      "Print_Name": "Unggumi",
      "Inverted_Name": "Unggumi"
    },
    {
      "Id": "xgw",
      "Print_Name": "Guwa",
      "Inverted_Name": "Guwa"
    },
    {
      "Id": "xha",
      "Print_Name": "Harami",
      "Inverted_Name": "Harami"
    },
    {
      "Id": "xhc",
      "Print_Name": "Hunnic",
      "Inverted_Name": "Hunnic"
    },
    {
      "Id": "xhd",
      "Print_Name": "Hadrami",
      "Inverted_Name": "Hadrami"
    },
    {
      "Id": "xhe",
      "Print_Name": "Khetrani",
      "Inverted_Name": "Khetrani"
    },
    {
      "Id": "xhm",
      "Print_Name": "Middle Khmer (1400 to 1850 CE)",
      "Inverted_Name": "Khmer, Middle (1400 to 1850 CE)"
    },
    {
      "Id": "xho",
      "Print_Name": "Xhosa",
      "Inverted_Name": "Xhosa"
    },
    {
      "Id": "xhr",
      "Print_Name": "Hernican",
      "Inverted_Name": "Hernican"
    },
    {
      "Id": "xht",
      "Print_Name": "Hattic",
      "Inverted_Name": "Hattic"
    },
    {
      "Id": "xhu",
      "Print_Name": "Hurrian",
      "Inverted_Name": "Hurrian"
    },
    {
      "Id": "xhv",
      "Print_Name": "Khua",
      "Inverted_Name": "Khua"
    },
    {
      "Id": "xib",
      "Print_Name": "Iberian",
      "Inverted_Name": "Iberian"
    },
    {
      "Id": "xii",
      "Print_Name": "Xiri",
      "Inverted_Name": "Xiri"
    },
    {
      "Id": "xil",
      "Print_Name": "Illyrian",
      "Inverted_Name": "Illyrian"
    },
    {
      "Id": "xin",
      "Print_Name": "Xinca",
      "Inverted_Name": "Xinca"
    },
    {
      "Id": "xir",
      "Print_Name": "Xiriâna",
      "Inverted_Name": "Xiriâna"
    },
    {
      "Id": "xis",
      "Print_Name": "Kisan",
      "Inverted_Name": "Kisan"
    },
    {
      "Id": "xiv",
      "Print_Name": "Indus Valley Language",
      "Inverted_Name": "Indus Valley Language"
    },
    {
      "Id": "xiy",
      "Print_Name": "Xipaya",
      "Inverted_Name": "Xipaya"
    },
    {
      "Id": "xjb",
      "Print_Name": "Minjungbal",
      "Inverted_Name": "Minjungbal"
    },
    {
      "Id": "xjt",
      "Print_Name": "Jaitmatang",
      "Inverted_Name": "Jaitmatang"
    },
    {
      "Id": "xka",
      "Print_Name": "Kalkoti",
      "Inverted_Name": "Kalkoti"
    },
    {
      "Id": "xkb",
      "Print_Name": "Northern Nago",
      "Inverted_Name": "Nago, Northern"
    },
    {
      "Id": "xkc",
      "Print_Name": "Kho'ini",
      "Inverted_Name": "Kho'ini"
    },
    {
      "Id": "xkd",
      "Print_Name": "Mendalam Kayan",
      "Inverted_Name": "Kayan, Mendalam"
    },
    {
      "Id": "xke",
      "Print_Name": "Kereho",
      "Inverted_Name": "Kereho"
    },
    {
      "Id": "xkf",
      "Print_Name": "Khengkha",
      "Inverted_Name": "Khengkha"
    },
    {
      "Id": "xkg",
      "Print_Name": "Kagoro",
      "Inverted_Name": "Kagoro"
    },
    {
      "Id": "xki",
      "Print_Name": "Kenyan Sign Language",
      "Inverted_Name": "Kenyan Sign Language"
    },
    {
      "Id": "xkj",
      "Print_Name": "Kajali",
      "Inverted_Name": "Kajali"
    },
    {
      "Id": "xkk",
      "Print_Name": "Kachok",
      "Inverted_Name": "Kachok"
    },
    {
      "Id": "xkk",
      "Print_Name": "Kaco'",
      "Inverted_Name": "Kaco'"
    },
    {
      "Id": "xkl",
      "Print_Name": "Mainstream Kenyah",
      "Inverted_Name": "Mainstream Kenyah"
    },
    {
      "Id": "xkn",
      "Print_Name": "Kayan River Kayan",
      "Inverted_Name": "Kayan, Kayan River"
    },
    {
      "Id": "xko",
      "Print_Name": "Kiorr",
      "Inverted_Name": "Kiorr"
    },
    {
      "Id": "xkp",
      "Print_Name": "Kabatei",
      "Inverted_Name": "Kabatei"
    },
    {
      "Id": "xkq",
      "Print_Name": "Koroni",
      "Inverted_Name": "Koroni"
    },
    {
      "Id": "xkr",
      "Print_Name": "Xakriabá",
      "Inverted_Name": "Xakriabá"
    },
    {
      "Id": "xks",
      "Print_Name": "Kumbewaha",
      "Inverted_Name": "Kumbewaha"
    },
    {
      "Id": "xkt",
      "Print_Name": "Kantosi",
      "Inverted_Name": "Kantosi"
    },
    {
      "Id": "xku",
      "Print_Name": "Kaamba",
      "Inverted_Name": "Kaamba"
    },
    {
      "Id": "xkv",
      "Print_Name": "Kgalagadi",
      "Inverted_Name": "Kgalagadi"
    },
    {
      "Id": "xkw",
      "Print_Name": "Kembra",
      "Inverted_Name": "Kembra"
    },
    {
      "Id": "xkx",
      "Print_Name": "Karore",
      "Inverted_Name": "Karore"
    },
    {
      "Id": "xky",
      "Print_Name": "Uma' Lasan",
      "Inverted_Name": "Uma' Lasan"
    },
    {
      "Id": "xkz",
      "Print_Name": "Kurtokha",
      "Inverted_Name": "Kurtokha"
    },
    {
      "Id": "xla",
      "Print_Name": "Kamula",
      "Inverted_Name": "Kamula"
    },
    {
      "Id": "xlb",
      "Print_Name": "Loup B",
      "Inverted_Name": "Loup B"
    },
    {
      "Id": "xlc",
      "Print_Name": "Lycian",
      "Inverted_Name": "Lycian"
    },
    {
      "Id": "xld",
      "Print_Name": "Lydian",
      "Inverted_Name": "Lydian"
    },
    {
      "Id": "xle",
      "Print_Name": "Lemnian",
      "Inverted_Name": "Lemnian"
    },
    {
      "Id": "xlg",
      "Print_Name": "Ligurian (Ancient)",
      "Inverted_Name": "Ligurian (Ancient)"
    },
    {
      "Id": "xli",
      "Print_Name": "Liburnian",
      "Inverted_Name": "Liburnian"
    },
    {
      "Id": "xln",
      "Print_Name": "Alanic",
      "Inverted_Name": "Alanic"
    },
    {
      "Id": "xlo",
      "Print_Name": "Loup A",
      "Inverted_Name": "Loup A"
    },
    {
      "Id": "xlp",
      "Print_Name": "Lepontic",
      "Inverted_Name": "Lepontic"
    },
    {
      "Id": "xls",
      "Print_Name": "Lusitanian",
      "Inverted_Name": "Lusitanian"
    },
    {
      "Id": "xlu",
      "Print_Name": "Cuneiform Luwian",
      "Inverted_Name": "Luwian, Cuneiform"
    },
    {
      "Id": "xly",
      "Print_Name": "Elymian",
      "Inverted_Name": "Elymian"
    },
    {
      "Id": "xma",
      "Print_Name": "Mushungulu",
      "Inverted_Name": "Mushungulu"
    },
    {
      "Id": "xmb",
      "Print_Name": "Mbonga",
      "Inverted_Name": "Mbonga"
    },
    {
      "Id": "xmc",
      "Print_Name": "Makhuwa-Marrevone",
      "Inverted_Name": "Makhuwa-Marrevone"
    },
    {
      "Id": "xmd",
      "Print_Name": "Mbudum",
      "Inverted_Name": "Mbudum"
    },
    {
      "Id": "xme",
      "Print_Name": "Median",
      "Inverted_Name": "Median"
    },
    {
      "Id": "xmf",
      "Print_Name": "Mingrelian",
      "Inverted_Name": "Mingrelian"
    },
    {
      "Id": "xmg",
      "Print_Name": "Mengaka",
      "Inverted_Name": "Mengaka"
    },
    {
      "Id": "xmh",
      "Print_Name": "Kugu-Muminh",
      "Inverted_Name": "Kugu-Muminh"
    },
    {
      "Id": "xmj",
      "Print_Name": "Majera",
      "Inverted_Name": "Majera"
    },
    {
      "Id": "xmk",
      "Print_Name": "Ancient Macedonian",
      "Inverted_Name": "Macedonian, Ancient"
    },
    {
      "Id": "xml",
      "Print_Name": "Malaysian Sign Language",
      "Inverted_Name": "Malaysian Sign Language"
    },
    {
      "Id": "xmm",
      "Print_Name": "Manado Malay",
      "Inverted_Name": "Malay, Manado"
    },
    {
      "Id": "xmn",
      "Print_Name": "Manichaean Middle Persian",
      "Inverted_Name": "Persian, Manichaean Middle"
    },
    {
      "Id": "xmo",
      "Print_Name": "Morerebi",
      "Inverted_Name": "Morerebi"
    },
    {
      "Id": "xmp",
      "Print_Name": "Kuku-Mu'inh",
      "Inverted_Name": "Kuku-Mu'inh"
    },
    {
      "Id": "xmq",
      "Print_Name": "Kuku-Mangk",
      "Inverted_Name": "Kuku-Mangk"
    },
    {
      "Id": "xmr",
      "Print_Name": "Meroitic",
      "Inverted_Name": "Meroitic"
    },
    {
      "Id": "xms",
      "Print_Name": "Moroccan Sign Language",
      "Inverted_Name": "Moroccan Sign Language"
    },
    {
      "Id": "xmt",
      "Print_Name": "Matbat",
      "Inverted_Name": "Matbat"
    },
    {
      "Id": "xmu",
      "Print_Name": "Kamu",
      "Inverted_Name": "Kamu"
    },
    {
      "Id": "xmv",
      "Print_Name": "Antankarana Malagasy",
      "Inverted_Name": "Malagasy, Antankarana"
    },
    {
      "Id": "xmv",
      "Print_Name": "Tankarana Malagasy",
      "Inverted_Name": "Malagasy, Tankarana"
    },
    {
      "Id": "xmw",
      "Print_Name": "Tsimihety Malagasy",
      "Inverted_Name": "Malagasy, Tsimihety"
    },
    {
      "Id": "xmx",
      "Print_Name": "Maden",
      "Inverted_Name": "Maden"
    },
    {
      "Id": "xmx",
      "Print_Name": "Salawati",
      "Inverted_Name": "Salawati"
    },
    {
      "Id": "xmy",
      "Print_Name": "Mayaguduna",
      "Inverted_Name": "Mayaguduna"
    },
    {
      "Id": "xmz",
      "Print_Name": "Mori Bawah",
      "Inverted_Name": "Mori Bawah"
    },
    {
      "Id": "xna",
      "Print_Name": "Ancient North Arabian",
      "Inverted_Name": "North Arabian, Ancient"
    },
    {
      "Id": "xnb",
      "Print_Name": "Kanakanabu",
      "Inverted_Name": "Kanakanabu"
    },
    {
      "Id": "xng",
      "Print_Name": "Middle Mongolian",
      "Inverted_Name": "Mongolian, Middle"
    },
    {
      "Id": "xnh",
      "Print_Name": "Kuanhua",
      "Inverted_Name": "Kuanhua"
    },
    {
      "Id": "xni",
      "Print_Name": "Ngarigu",
      "Inverted_Name": "Ngarigu"
    },
    {
      "Id": "xnj",
      "Print_Name": "Ngoni (Tanzania)",
      "Inverted_Name": "Ngoni (Tanzania)"
    },
    {
      "Id": "xnk",
      "Print_Name": "Nganakarti",
      "Inverted_Name": "Nganakarti"
    },
    {
      "Id": "xnm",
      "Print_Name": "Ngumbarl",
      "Inverted_Name": "Ngumbarl"
    },
    {
      "Id": "xnn",
      "Print_Name": "Northern Kankanay",
      "Inverted_Name": "Kankanay, Northern"
    },
    {
      "Id": "xno",
      "Print_Name": "Anglo-Norman",
      "Inverted_Name": "Anglo-Norman"
    },
    {
      "Id": "xnq",
      "Print_Name": "Ngoni (Mozambique)",
      "Inverted_Name": "Ngoni (Mozambique)"
    },
    {
      "Id": "xnr",
      "Print_Name": "Kangri",
      "Inverted_Name": "Kangri"
    },
    {
      "Id": "xns",
      "Print_Name": "Kanashi",
      "Inverted_Name": "Kanashi"
    },
    {
      "Id": "xnt",
      "Print_Name": "Narragansett",
      "Inverted_Name": "Narragansett"
    },
    {
      "Id": "xnu",
      "Print_Name": "Nukunul",
      "Inverted_Name": "Nukunul"
    },
    {
      "Id": "xny",
      "Print_Name": "Nyiyaparli",
      "Inverted_Name": "Nyiyaparli"
    },
    {
      "Id": "xnz",
      "Print_Name": "Kenzi",
      "Inverted_Name": "Kenzi"
    },
    {
      "Id": "xnz",
      "Print_Name": "Mattoki",
      "Inverted_Name": "Mattoki"
    },
    {
      "Id": "xoc",
      "Print_Name": "O'chi'chi'",
      "Inverted_Name": "O'chi'chi'"
    },
    {
      "Id": "xod",
      "Print_Name": "Kokoda",
      "Inverted_Name": "Kokoda"
    },
    {
      "Id": "xog",
      "Print_Name": "Soga",
      "Inverted_Name": "Soga"
    },
    {
      "Id": "xoi",
      "Print_Name": "Kominimung",
      "Inverted_Name": "Kominimung"
    },
    {
      "Id": "xok",
      "Print_Name": "Xokleng",
      "Inverted_Name": "Xokleng"
    },
    {
      "Id": "xom",
      "Print_Name": "Komo (Sudan)",
      "Inverted_Name": "Komo (Sudan)"
    },
    {
      "Id": "xon",
      "Print_Name": "Konkomba",
      "Inverted_Name": "Konkomba"
    },
    {
      "Id": "xoo",
      "Print_Name": "Xukurú",
      "Inverted_Name": "Xukurú"
    },
    {
      "Id": "xop",
      "Print_Name": "Kopar",
      "Inverted_Name": "Kopar"
    },
    {
      "Id": "xor",
      "Print_Name": "Korubo",
      "Inverted_Name": "Korubo"
    },
    {
      "Id": "xow",
      "Print_Name": "Kowaki",
      "Inverted_Name": "Kowaki"
    },
    {
      "Id": "xpa",
      "Print_Name": "Pirriya",
      "Inverted_Name": "Pirriya"
    },
    {
      "Id": "xpb",
      "Print_Name": "Northeastern Tasmanian",
      "Inverted_Name": "Tasmanian, Northeastern"
    },
    {
      "Id": "xpb",
      "Print_Name": "Pyemmairrener",
      "Inverted_Name": "Pyemmairrener"
    },
    {
      "Id": "xpc",
      "Print_Name": "Pecheneg",
      "Inverted_Name": "Pecheneg"
    },
    {
      "Id": "xpd",
      "Print_Name": "Oyster Bay Tasmanian",
      "Inverted_Name": "Tasmanian, Oyster Bay"
    },
    {
      "Id": "xpe",
      "Print_Name": "Liberia Kpelle",
      "Inverted_Name": "Kpelle, Liberia"
    },
    {
      "Id": "xpf",
      "Print_Name": "Nuenonne",
      "Inverted_Name": "Nuenonne"
    },
    {
      "Id": "xpf",
      "Print_Name": "Southeast Tasmanian",
      "Inverted_Name": "Tasmanian, Southeast"
    },
    {
      "Id": "xpg",
      "Print_Name": "Phrygian",
      "Inverted_Name": "Phrygian"
    },
    {
      "Id": "xph",
      "Print_Name": "North Midlands Tasmanian",
      "Inverted_Name": "Tasmanian, North Midlands"
    },
    {
      "Id": "xph",
      "Print_Name": "Tyerrenoterpanner",
      "Inverted_Name": "Tyerrenoterpanner"
    },
    {
      "Id": "xpi",
      "Print_Name": "Pictish",
      "Inverted_Name": "Pictish"
    },
    {
      "Id": "xpj",
      "Print_Name": "Mpalitjanh",
      "Inverted_Name": "Mpalitjanh"
    },
    {
      "Id": "xpk",
      "Print_Name": "Kulina Pano",
      "Inverted_Name": "Pano, Kulina"
    },
    {
      "Id": "xpl",
      "Print_Name": "Port Sorell Tasmanian",
      "Inverted_Name": "Tasmanian, Port Sorell"
    },
    {
      "Id": "xpm",
      "Print_Name": "Pumpokol",
      "Inverted_Name": "Pumpokol"
    },
    {
      "Id": "xpn",
      "Print_Name": "Kapinawá",
      "Inverted_Name": "Kapinawá"
    },
    {
      "Id": "xpo",
      "Print_Name": "Pochutec",
      "Inverted_Name": "Pochutec"
    },
    {
      "Id": "xpp",
      "Print_Name": "Puyo-Paekche",
      "Inverted_Name": "Puyo-Paekche"
    },
    {
      "Id": "xpq",
      "Print_Name": "Mohegan-Pequot",
      "Inverted_Name": "Mohegan-Pequot"
    },
    {
      "Id": "xpr",
      "Print_Name": "Parthian",
      "Inverted_Name": "Parthian"
    },
    {
      "Id": "xps",
      "Print_Name": "Pisidian",
      "Inverted_Name": "Pisidian"
    },
    {
      "Id": "xpt",
      "Print_Name": "Punthamara",
      "Inverted_Name": "Punthamara"
    },
    {
      "Id": "xpu",
      "Print_Name": "Punic",
      "Inverted_Name": "Punic"
    },
    {
      "Id": "xpv",
      "Print_Name": "Northern Tasmanian",
      "Inverted_Name": "Tasmanian, Northern"
    },
    {
      "Id": "xpv",
      "Print_Name": "Tommeginne",
      "Inverted_Name": "Tommeginne"
    },
    {
      "Id": "xpw",
      "Print_Name": "Northwestern Tasmanian",
      "Inverted_Name": "Tasmanian, Northwestern"
    },
    {
      "Id": "xpw",
      "Print_Name": "Peerapper",
      "Inverted_Name": "Peerapper"
    },
    {
      "Id": "xpx",
      "Print_Name": "Southwestern Tasmanian",
      "Inverted_Name": "Tasmanian, Southwestern"
    },
    {
      "Id": "xpx",
      "Print_Name": "Toogee",
      "Inverted_Name": "Toogee"
    },
    {
      "Id": "xpy",
      "Print_Name": "Puyo",
      "Inverted_Name": "Puyo"
    },
    {
      "Id": "xpz",
      "Print_Name": "Bruny Island Tasmanian",
      "Inverted_Name": "Tasmanian, Bruny Island"
    },
    {
      "Id": "xqa",
      "Print_Name": "Karakhanid",
      "Inverted_Name": "Karakhanid"
    },
    {
      "Id": "xqt",
      "Print_Name": "Qatabanian",
      "Inverted_Name": "Qatabanian"
    },
    {
      "Id": "xra",
      "Print_Name": "Krahô",
      "Inverted_Name": "Krahô"
    },
    {
      "Id": "xrb",
      "Print_Name": "Eastern Karaboro",
      "Inverted_Name": "Karaboro, Eastern"
    },
    {
      "Id": "xrd",
      "Print_Name": "Gundungurra",
      "Inverted_Name": "Gundungurra"
    },
    {
      "Id": "xre",
      "Print_Name": "Kreye",
      "Inverted_Name": "Kreye"
    },
    {
      "Id": "xrg",
      "Print_Name": "Minang",
      "Inverted_Name": "Minang"
    },
    {
      "Id": "xri",
      "Print_Name": "Krikati-Timbira",
      "Inverted_Name": "Krikati-Timbira"
    },
    {
      "Id": "xrm",
      "Print_Name": "Armazic",
      "Inverted_Name": "Armazic"
    },
    {
      "Id": "xrn",
      "Print_Name": "Arin",
      "Inverted_Name": "Arin"
    },
    {
      "Id": "xrr",
      "Print_Name": "Raetic",
      "Inverted_Name": "Raetic"
    },
    {
      "Id": "xrt",
      "Print_Name": "Aranama-Tamique",
      "Inverted_Name": "Aranama-Tamique"
    },
    {
      "Id": "xru",
      "Print_Name": "Marriammu",
      "Inverted_Name": "Marriammu"
    },
    {
      "Id": "xrw",
      "Print_Name": "Karawa",
      "Inverted_Name": "Karawa"
    },
    {
      "Id": "xsa",
      "Print_Name": "Sabaean",
      "Inverted_Name": "Sabaean"
    },
    {
      "Id": "xsb",
      "Print_Name": "Sambal",
      "Inverted_Name": "Sambal"
    },
    {
      "Id": "xsc",
      "Print_Name": "Scythian",
      "Inverted_Name": "Scythian"
    },
    {
      "Id": "xsd",
      "Print_Name": "Sidetic",
      "Inverted_Name": "Sidetic"
    },
    {
      "Id": "xse",
      "Print_Name": "Sempan",
      "Inverted_Name": "Sempan"
    },
    {
      "Id": "xsh",
      "Print_Name": "Shamang",
      "Inverted_Name": "Shamang"
    },
    {
      "Id": "xsi",
      "Print_Name": "Sio",
      "Inverted_Name": "Sio"
    },
    {
      "Id": "xsj",
      "Print_Name": "Subi",
      "Inverted_Name": "Subi"
    },
    {
      "Id": "xsl",
      "Print_Name": "South Slavey",
      "Inverted_Name": "Slavey, South"
    },
    {
      "Id": "xsm",
      "Print_Name": "Kasem",
      "Inverted_Name": "Kasem"
    },
    {
      "Id": "xsn",
      "Print_Name": "Sanga (Nigeria)",
      "Inverted_Name": "Sanga (Nigeria)"
    },
    {
      "Id": "xso",
      "Print_Name": "Solano",
      "Inverted_Name": "Solano"
    },
    {
      "Id": "xsp",
      "Print_Name": "Silopi",
      "Inverted_Name": "Silopi"
    },
    {
      "Id": "xsq",
      "Print_Name": "Makhuwa-Saka",
      "Inverted_Name": "Makhuwa-Saka"
    },
    {
      "Id": "xsr",
      "Print_Name": "Sherpa",
      "Inverted_Name": "Sherpa"
    },
    {
      "Id": "xsu",
      "Print_Name": "Sanumá",
      "Inverted_Name": "Sanumá"
    },
    {
      "Id": "xsv",
      "Print_Name": "Sudovian",
      "Inverted_Name": "Sudovian"
    },
    {
      "Id": "xsy",
      "Print_Name": "Saisiyat",
      "Inverted_Name": "Saisiyat"
    },
    {
      "Id": "xta",
      "Print_Name": "Alcozauca Mixtec",
      "Inverted_Name": "Mixtec, Alcozauca"
    },
    {
      "Id": "xtb",
      "Print_Name": "Chazumba Mixtec",
      "Inverted_Name": "Mixtec, Chazumba"
    },
    {
      "Id": "xtc",
      "Print_Name": "Katcha-Kadugli-Miri",
      "Inverted_Name": "Katcha-Kadugli-Miri"
    },
    {
      "Id": "xtd",
      "Print_Name": "Diuxi-Tilantongo Mixtec",
      "Inverted_Name": "Mixtec, Diuxi-Tilantongo"
    },
    {
      "Id": "xte",
      "Print_Name": "Ketengban",
      "Inverted_Name": "Ketengban"
    },
    {
      "Id": "xtg",
      "Print_Name": "Transalpine Gaulish",
      "Inverted_Name": "Gaulish, Transalpine"
    },
    {
      "Id": "xth",
      "Print_Name": "Yitha Yitha",
      "Inverted_Name": "Yitha Yitha"
    },
    {
      "Id": "xti",
      "Print_Name": "Sinicahua Mixtec",
      "Inverted_Name": "Mixtec, Sinicahua"
    },
    {
      "Id": "xtj",
      "Print_Name": "San Juan Teita Mixtec",
      "Inverted_Name": "Mixtec, San Juan Teita"
    },
    {
      "Id": "xtl",
      "Print_Name": "Tijaltepec Mixtec",
      "Inverted_Name": "Mixtec, Tijaltepec"
    },
    {
      "Id": "xtm",
      "Print_Name": "Magdalena Peñasco Mixtec",
      "Inverted_Name": "Mixtec, Magdalena Peñasco"
    },
    {
      "Id": "xtn",
      "Print_Name": "Northern Tlaxiaco Mixtec",
      "Inverted_Name": "Mixtec, Northern Tlaxiaco"
    },
    {
      "Id": "xto",
      "Print_Name": "Tokharian A",
      "Inverted_Name": "Tokharian A"
    },
    {
      "Id": "xtp",
      "Print_Name": "San Miguel Piedras Mixtec",
      "Inverted_Name": "Mixtec, San Miguel Piedras"
    },
    {
      "Id": "xtq",
      "Print_Name": "Tumshuqese",
      "Inverted_Name": "Tumshuqese"
    },
    {
      "Id": "xtr",
      "Print_Name": "Early Tripuri",
      "Inverted_Name": "Tripuri, Early"
    },
    {
      "Id": "xts",
      "Print_Name": "Sindihui Mixtec",
      "Inverted_Name": "Mixtec, Sindihui"
    },
    {
      "Id": "xtt",
      "Print_Name": "Tacahua Mixtec",
      "Inverted_Name": "Mixtec, Tacahua"
    },
    {
      "Id": "xtu",
      "Print_Name": "Cuyamecalco Mixtec",
      "Inverted_Name": "Mixtec, Cuyamecalco"
    },
    {
      "Id": "xtv",
      "Print_Name": "Thawa",
      "Inverted_Name": "Thawa"
    },
    {
      "Id": "xtw",
      "Print_Name": "Tawandê",
      "Inverted_Name": "Tawandê"
    },
    {
      "Id": "xty",
      "Print_Name": "Yoloxochitl Mixtec",
      "Inverted_Name": "Mixtec, Yoloxochitl"
    },
    {
      "Id": "xua",
      "Print_Name": "Alu Kurumba",
      "Inverted_Name": "Kurumba, Alu"
    },
    {
      "Id": "xub",
      "Print_Name": "Betta Kurumba",
      "Inverted_Name": "Kurumba, Betta"
    },
    {
      "Id": "xud",
      "Print_Name": "Umiida",
      "Inverted_Name": "Umiida"
    },
    {
      "Id": "xug",
      "Print_Name": "Kunigami",
      "Inverted_Name": "Kunigami"
    },
    {
      "Id": "xuj",
      "Print_Name": "Jennu Kurumba",
      "Inverted_Name": "Kurumba, Jennu"
    },
    {
      "Id": "xul",
      "Print_Name": "Ngunawal",
      "Inverted_Name": "Ngunawal"
    },
    {
      "Id": "xul",
      "Print_Name": "Nunukul",
      "Inverted_Name": "Nunukul"
    },
    {
      "Id": "xum",
      "Print_Name": "Umbrian",
      "Inverted_Name": "Umbrian"
    },
    {
      "Id": "xun",
      "Print_Name": "Unggaranggu",
      "Inverted_Name": "Unggaranggu"
    },
    {
      "Id": "xuo",
      "Print_Name": "Kuo",
      "Inverted_Name": "Kuo"
    },
    {
      "Id": "xup",
      "Print_Name": "Upper Umpqua",
      "Inverted_Name": "Umpqua, Upper"
    },
    {
      "Id": "xur",
      "Print_Name": "Urartian",
      "Inverted_Name": "Urartian"
    },
    {
      "Id": "xut",
      "Print_Name": "Kuthant",
      "Inverted_Name": "Kuthant"
    },
    {
      "Id": "xuu",
      "Print_Name": "Khwedam",
      "Inverted_Name": "Khwedam"
    },
    {
      "Id": "xuu",
      "Print_Name": "Kxoe",
      "Inverted_Name": "Kxoe"
    },
    {
      "Id": "xve",
      "Print_Name": "Venetic",
      "Inverted_Name": "Venetic"
    },
    {
      "Id": "xvi",
      "Print_Name": "Kamviri",
      "Inverted_Name": "Kamviri"
    },
    {
      "Id": "xvn",
      "Print_Name": "Vandalic",
      "Inverted_Name": "Vandalic"
    },
    {
      "Id": "xvo",
      "Print_Name": "Volscian",
      "Inverted_Name": "Volscian"
    },
    {
      "Id": "xvs",
      "Print_Name": "Vestinian",
      "Inverted_Name": "Vestinian"
    },
    {
      "Id": "xwa",
      "Print_Name": "Kwaza",
      "Inverted_Name": "Kwaza"
    },
    {
      "Id": "xwc",
      "Print_Name": "Woccon",
      "Inverted_Name": "Woccon"
    },
    {
      "Id": "xwd",
      "Print_Name": "Wadi Wadi",
      "Inverted_Name": "Wadi Wadi"
    },
    {
      "Id": "xwe",
      "Print_Name": "Xwela Gbe",
      "Inverted_Name": "Gbe, Xwela"
    },
    {
      "Id": "xwg",
      "Print_Name": "Kwegu",
      "Inverted_Name": "Kwegu"
    },
    {
      "Id": "xwj",
      "Print_Name": "Wajuk",
      "Inverted_Name": "Wajuk"
    },
    {
      "Id": "xwk",
      "Print_Name": "Wangkumara",
      "Inverted_Name": "Wangkumara"
    },
    {
      "Id": "xwl",
      "Print_Name": "Western Xwla Gbe",
      "Inverted_Name": "Gbe, Western Xwla"
    },
    {
      "Id": "xwo",
      "Print_Name": "Written Oirat",
      "Inverted_Name": "Oirat, Written"
    },
    {
      "Id": "xwr",
      "Print_Name": "Kwerba Mamberamo",
      "Inverted_Name": "Kwerba Mamberamo"
    },
    {
      "Id": "xwt",
      "Print_Name": "Wotjobaluk",
      "Inverted_Name": "Wotjobaluk"
    },
    {
      "Id": "xww",
      "Print_Name": "Wemba Wemba",
      "Inverted_Name": "Wemba Wemba"
    },
    {
      "Id": "xxb",
      "Print_Name": "Boro (Ghana)",
      "Inverted_Name": "Boro (Ghana)"
    },
    {
      "Id": "xxk",
      "Print_Name": "Ke'o",
      "Inverted_Name": "Ke'o"
    },
    {
      "Id": "xxm",
      "Print_Name": "Minkin",
      "Inverted_Name": "Minkin"
    },
    {
      "Id": "xxr",
      "Print_Name": "Koropó",
      "Inverted_Name": "Koropó"
    },
    {
      "Id": "xxt",
      "Print_Name": "Tambora",
      "Inverted_Name": "Tambora"
    },
    {
      "Id": "xya",
      "Print_Name": "Yaygir",
      "Inverted_Name": "Yaygir"
    },
    {
      "Id": "xyb",
      "Print_Name": "Yandjibara",
      "Inverted_Name": "Yandjibara"
    },
    {
      "Id": "xyj",
      "Print_Name": "Mayi-Yapi",
      "Inverted_Name": "Mayi-Yapi"
    },
    {
      "Id": "xyk",
      "Print_Name": "Mayi-Kulan",
      "Inverted_Name": "Mayi-Kulan"
    },
    {
      "Id": "xyl",
      "Print_Name": "Yalakalore",
      "Inverted_Name": "Yalakalore"
    },
    {
      "Id": "xyt",
      "Print_Name": "Mayi-Thakurti",
      "Inverted_Name": "Mayi-Thakurti"
    },
    {
      "Id": "xyy",
      "Print_Name": "Yorta Yorta",
      "Inverted_Name": "Yorta Yorta"
    },
    {
      "Id": "xzh",
      "Print_Name": "Zhang-Zhung",
      "Inverted_Name": "Zhang-Zhung"
    },
    {
      "Id": "xzm",
      "Print_Name": "Zemgalian",
      "Inverted_Name": "Zemgalian"
    },
    {
      "Id": "xzp",
      "Print_Name": "Ancient Zapotec",
      "Inverted_Name": "Zapotec, Ancient"
    },
    {
      "Id": "yaa",
      "Print_Name": "Yaminahua",
      "Inverted_Name": "Yaminahua"
    },
    {
      "Id": "yab",
      "Print_Name": "Yuhup",
      "Inverted_Name": "Yuhup"
    },
    {
      "Id": "yac",
      "Print_Name": "Pass Valley Yali",
      "Inverted_Name": "Yali, Pass Valley"
    },
    {
      "Id": "yad",
      "Print_Name": "Yagua",
      "Inverted_Name": "Yagua"
    },
    {
      "Id": "yae",
      "Print_Name": "Pumé",
      "Inverted_Name": "Pumé"
    },
    {
      "Id": "yaf",
      "Print_Name": "Yaka (Democratic Republic of Congo)",
      "Inverted_Name": "Yaka (Democratic Republic of Congo)"
    },
    {
      "Id": "yag",
      "Print_Name": "Yámana",
      "Inverted_Name": "Yámana"
    },
    {
      "Id": "yah",
      "Print_Name": "Yazgulyam",
      "Inverted_Name": "Yazgulyam"
    },
    {
      "Id": "yai",
      "Print_Name": "Yagnobi",
      "Inverted_Name": "Yagnobi"
    },
    {
      "Id": "yaj",
      "Print_Name": "Banda-Yangere",
      "Inverted_Name": "Banda-Yangere"
    },
    {
      "Id": "yak",
      "Print_Name": "Yakama",
      "Inverted_Name": "Yakama"
    },
    {
      "Id": "yal",
      "Print_Name": "Yalunka",
      "Inverted_Name": "Yalunka"
    },
    {
      "Id": "yam",
      "Print_Name": "Yamba",
      "Inverted_Name": "Yamba"
    },
    {
      "Id": "yan",
      "Print_Name": "Mayangna",
      "Inverted_Name": "Mayangna"
    },
    {
      "Id": "yao",
      "Print_Name": "Yao",
      "Inverted_Name": "Yao"
    },
    {
      "Id": "yap",
      "Print_Name": "Yapese",
      "Inverted_Name": "Yapese"
    },
    {
      "Id": "yaq",
      "Print_Name": "Yaqui",
      "Inverted_Name": "Yaqui"
    },
    {
      "Id": "yar",
      "Print_Name": "Yabarana",
      "Inverted_Name": "Yabarana"
    },
    {
      "Id": "yas",
      "Print_Name": "Nugunu (Cameroon)",
      "Inverted_Name": "Nugunu (Cameroon)"
    },
    {
      "Id": "yat",
      "Print_Name": "Yambeta",
      "Inverted_Name": "Yambeta"
    },
    {
      "Id": "yau",
      "Print_Name": "Yuwana",
      "Inverted_Name": "Yuwana"
    },
    {
      "Id": "yav",
      "Print_Name": "Yangben",
      "Inverted_Name": "Yangben"
    },
    {
      "Id": "yaw",
      "Print_Name": "Yawalapití",
      "Inverted_Name": "Yawalapití"
    },
    {
      "Id": "yax",
      "Print_Name": "Yauma",
      "Inverted_Name": "Yauma"
    },
    {
      "Id": "yay",
      "Print_Name": "Agwagwune",
      "Inverted_Name": "Agwagwune"
    },
    {
      "Id": "yaz",
      "Print_Name": "Lokaa",
      "Inverted_Name": "Lokaa"
    },
    {
      "Id": "yba",
      "Print_Name": "Yala",
      "Inverted_Name": "Yala"
    },
    {
      "Id": "ybb",
      "Print_Name": "Yemba",
      "Inverted_Name": "Yemba"
    },
    {
      "Id": "ybe",
      "Print_Name": "West Yugur",
      "Inverted_Name": "Yugur, West"
    },
    {
      "Id": "ybh",
      "Print_Name": "Yakha",
      "Inverted_Name": "Yakha"
    },
    {
      "Id": "ybi",
      "Print_Name": "Yamphu",
      "Inverted_Name": "Yamphu"
    },
    {
      "Id": "ybj",
      "Print_Name": "Hasha",
      "Inverted_Name": "Hasha"
    },
    {
      "Id": "ybk",
      "Print_Name": "Bokha",
      "Inverted_Name": "Bokha"
    },
    {
      "Id": "ybl",
      "Print_Name": "Yukuben",
      "Inverted_Name": "Yukuben"
    },
    {
      "Id": "ybm",
      "Print_Name": "Yaben",
      "Inverted_Name": "Yaben"
    },
    {
      "Id": "ybn",
      "Print_Name": "Yabaâna",
      "Inverted_Name": "Yabaâna"
    },
    {
      "Id": "ybo",
      "Print_Name": "Yabong",
      "Inverted_Name": "Yabong"
    },
    {
      "Id": "ybx",
      "Print_Name": "Yawiyo",
      "Inverted_Name": "Yawiyo"
    },
    {
      "Id": "yby",
      "Print_Name": "Yaweyuha",
      "Inverted_Name": "Yaweyuha"
    },
    {
      "Id": "ych",
      "Print_Name": "Chesu",
      "Inverted_Name": "Chesu"
    },
    {
      "Id": "ycl",
      "Print_Name": "Lolopo",
      "Inverted_Name": "Lolopo"
    },
    {
      "Id": "ycn",
      "Print_Name": "Yucuna",
      "Inverted_Name": "Yucuna"
    },
    {
      "Id": "ycp",
      "Print_Name": "Chepya",
      "Inverted_Name": "Chepya"
    },
    {
      "Id": "ycr",
      "Print_Name": "Yilan Creole",
      "Inverted_Name": "Yilan Creole"
    },
    {
      "Id": "yda",
      "Print_Name": "Yanda",
      "Inverted_Name": "Yanda"
    },
    {
      "Id": "ydd",
      "Print_Name": "Eastern Yiddish",
      "Inverted_Name": "Yiddish, Eastern"
    },
    {
      "Id": "yde",
      "Print_Name": "Yangum Dey",
      "Inverted_Name": "Yangum Dey"
    },
    {
      "Id": "ydg",
      "Print_Name": "Yidgha",
      "Inverted_Name": "Yidgha"
    },
    {
      "Id": "ydk",
      "Print_Name": "Yoidik",
      "Inverted_Name": "Yoidik"
    },
    {
      "Id": "yea",
      "Print_Name": "Ravula",
      "Inverted_Name": "Ravula"
    },
    {
      "Id": "yec",
      "Print_Name": "Yeniche",
      "Inverted_Name": "Yeniche"
    },
    {
      "Id": "yee",
      "Print_Name": "Yimas",
      "Inverted_Name": "Yimas"
    },
    {
      "Id": "yei",
      "Print_Name": "Yeni",
      "Inverted_Name": "Yeni"
    },
    {
      "Id": "yej",
      "Print_Name": "Yevanic",
      "Inverted_Name": "Yevanic"
    },
    {
      "Id": "yel",
      "Print_Name": "Yela",
      "Inverted_Name": "Yela"
    },
    {
      "Id": "yer",
      "Print_Name": "Tarok",
      "Inverted_Name": "Tarok"
    },
    {
      "Id": "yes",
      "Print_Name": "Nyankpa",
      "Inverted_Name": "Nyankpa"
    },
    {
      "Id": "yet",
      "Print_Name": "Yetfa",
      "Inverted_Name": "Yetfa"
    },
    {
      "Id": "yeu",
      "Print_Name": "Yerukula",
      "Inverted_Name": "Yerukula"
    },
    {
      "Id": "yev",
      "Print_Name": "Yapunda",
      "Inverted_Name": "Yapunda"
    },
    {
      "Id": "yey",
      "Print_Name": "Yeyi",
      "Inverted_Name": "Yeyi"
    },
    {
      "Id": "yga",
      "Print_Name": "Malyangapa",
      "Inverted_Name": "Malyangapa"
    },
    {
      "Id": "ygi",
      "Print_Name": "Yiningayi",
      "Inverted_Name": "Yiningayi"
    },
    {
      "Id": "ygl",
      "Print_Name": "Yangum Gel",
      "Inverted_Name": "Yangum Gel"
    },
    {
      "Id": "ygm",
      "Print_Name": "Yagomi",
      "Inverted_Name": "Yagomi"
    },
    {
      "Id": "ygp",
      "Print_Name": "Gepo",
      "Inverted_Name": "Gepo"
    },
    {
      "Id": "ygr",
      "Print_Name": "Yagaria",
      "Inverted_Name": "Yagaria"
    },
    {
      "Id": "ygs",
      "Print_Name": "Yolŋu Sign Language",
      "Inverted_Name": "Yolŋu Sign Language"
    },
    {
      "Id": "ygu",
      "Print_Name": "Yugul",
      "Inverted_Name": "Yugul"
    },
    {
      "Id": "ygw",
      "Print_Name": "Yagwoia",
      "Inverted_Name": "Yagwoia"
    },
    {
      "Id": "yha",
      "Print_Name": "Baha Buyang",
      "Inverted_Name": "Buyang, Baha"
    },
    {
      "Id": "yhd",
      "Print_Name": "Judeo-Iraqi Arabic",
      "Inverted_Name": "Arabic, Judeo-Iraqi"
    },
    {
      "Id": "yhl",
      "Print_Name": "Hlepho Phowa",
      "Inverted_Name": "Phowa, Hlepho"
    },
    {
      "Id": "yhs",
      "Print_Name": "Yan-nhaŋu Sign Language",
      "Inverted_Name": "Yan-nhaŋu Sign Language"
    },
    {
      "Id": "yia",
      "Print_Name": "Yinggarda",
      "Inverted_Name": "Yinggarda"
    },
    {
      "Id": "yid",
      "Print_Name": "Yiddish",
      "Inverted_Name": "Yiddish"
    },
    {
      "Id": "yif",
      "Print_Name": "Ache",
      "Inverted_Name": "Ache"
    },
    {
      "Id": "yig",
      "Print_Name": "Wusa Nasu",
      "Inverted_Name": "Nasu, Wusa"
    },
    {
      "Id": "yih",
      "Print_Name": "Western Yiddish",
      "Inverted_Name": "Yiddish, Western"
    },
    {
      "Id": "yii",
      "Print_Name": "Yidiny",
      "Inverted_Name": "Yidiny"
    },
    {
      "Id": "yij",
      "Print_Name": "Yindjibarndi",
      "Inverted_Name": "Yindjibarndi"
    },
    {
      "Id": "yik",
      "Print_Name": "Dongshanba Lalo",
      "Inverted_Name": "Lalo, Dongshanba"
    },
    {
      "Id": "yil",
      "Print_Name": "Yindjilandji",
      "Inverted_Name": "Yindjilandji"
    },
    {
      "Id": "yim",
      "Print_Name": "Yimchungru Naga",
      "Inverted_Name": "Naga, Yimchungru"
    },
    {
      "Id": "yin",
      "Print_Name": "Riang Lai",
      "Inverted_Name": "Riang Lai"
    },
    {
      "Id": "yin",
      "Print_Name": "Yinchia",
      "Inverted_Name": "Yinchia"
    },
    {
      "Id": "yip",
      "Print_Name": "Pholo",
      "Inverted_Name": "Pholo"
    },
    {
      "Id": "yiq",
      "Print_Name": "Miqie",
      "Inverted_Name": "Miqie"
    },
    {
      "Id": "yir",
      "Print_Name": "North Awyu",
      "Inverted_Name": "Awyu, North"
    },
    {
      "Id": "yis",
      "Print_Name": "Yis",
      "Inverted_Name": "Yis"
    },
    {
      "Id": "yit",
      "Print_Name": "Eastern Lalu",
      "Inverted_Name": "Lalu, Eastern"
    },
    {
      "Id": "yiu",
      "Print_Name": "Awu",
      "Inverted_Name": "Awu"
    },
    {
      "Id": "yiv",
      "Print_Name": "Northern Nisu",
      "Inverted_Name": "Nisu, Northern"
    },
    {
      "Id": "yix",
      "Print_Name": "Axi Yi",
      "Inverted_Name": "Yi, Axi"
    },
    {
      "Id": "yiz",
      "Print_Name": "Azhe",
      "Inverted_Name": "Azhe"
    },
    {
      "Id": "yka",
      "Print_Name": "Yakan",
      "Inverted_Name": "Yakan"
    },
    {
      "Id": "ykg",
      "Print_Name": "Northern Yukaghir",
      "Inverted_Name": "Yukaghir, Northern"
    },
    {
      "Id": "ykh",
      "Print_Name": "Khamnigan Mongol",
      "Inverted_Name": "Khamnigan Mongol"
    },
    {
      "Id": "yki",
      "Print_Name": "Yoke",
      "Inverted_Name": "Yoke"
    },
    {
      "Id": "ykk",
      "Print_Name": "Yakaikeke",
      "Inverted_Name": "Yakaikeke"
    },
    {
      "Id": "ykl",
      "Print_Name": "Khlula",
      "Inverted_Name": "Khlula"
    },
    {
      "Id": "ykm",
      "Print_Name": "Kap",
      "Inverted_Name": "Kap"
    },
    {
      "Id": "ykn",
      "Print_Name": "Kua-nsi",
      "Inverted_Name": "Kua-nsi"
    },
    {
      "Id": "yko",
      "Print_Name": "Yasa",
      "Inverted_Name": "Yasa"
    },
    {
      "Id": "ykr",
      "Print_Name": "Yekora",
      "Inverted_Name": "Yekora"
    },
    {
      "Id": "ykt",
      "Print_Name": "Kathu",
      "Inverted_Name": "Kathu"
    },
    {
      "Id": "yku",
      "Print_Name": "Kuamasi",
      "Inverted_Name": "Kuamasi"
    },
    {
      "Id": "yky",
      "Print_Name": "Yakoma",
      "Inverted_Name": "Yakoma"
    },
    {
      "Id": "yla",
      "Print_Name": "Yaul",
      "Inverted_Name": "Yaul"
    },
    {
      "Id": "ylb",
      "Print_Name": "Yaleba",
      "Inverted_Name": "Yaleba"
    },
    {
      "Id": "yle",
      "Print_Name": "Yele",
      "Inverted_Name": "Yele"
    },
    {
      "Id": "ylg",
      "Print_Name": "Yelogu",
      "Inverted_Name": "Yelogu"
    },
    {
      "Id": "yli",
      "Print_Name": "Angguruk Yali",
      "Inverted_Name": "Yali, Angguruk"
    },
    {
      "Id": "yll",
      "Print_Name": "Yil",
      "Inverted_Name": "Yil"
    },
    {
      "Id": "ylm",
      "Print_Name": "Limi",
      "Inverted_Name": "Limi"
    },
    {
      "Id": "yln",
      "Print_Name": "Langnian Buyang",
      "Inverted_Name": "Buyang, Langnian"
    },
    {
      "Id": "ylo",
      "Print_Name": "Naluo Yi",
      "Inverted_Name": "Yi, Naluo"
    },
    {
      "Id": "ylr",
      "Print_Name": "Yalarnnga",
      "Inverted_Name": "Yalarnnga"
    },
    {
      "Id": "ylu",
      "Print_Name": "Aribwaung",
      "Inverted_Name": "Aribwaung"
    },
    {
      "Id": "yly",
      "Print_Name": "Nyâlayu",
      "Inverted_Name": "Nyâlayu"
    },
    {
      "Id": "yly",
      "Print_Name": "Nyelâyu",
      "Inverted_Name": "Nyelâyu"
    },
    {
      "Id": "ymb",
      "Print_Name": "Yambes",
      "Inverted_Name": "Yambes"
    },
    {
      "Id": "ymc",
      "Print_Name": "Southern Muji",
      "Inverted_Name": "Muji, Southern"
    },
    {
      "Id": "ymd",
      "Print_Name": "Muda",
      "Inverted_Name": "Muda"
    },
    {
      "Id": "yme",
      "Print_Name": "Yameo",
      "Inverted_Name": "Yameo"
    },
    {
      "Id": "ymg",
      "Print_Name": "Yamongeri",
      "Inverted_Name": "Yamongeri"
    },
    {
      "Id": "ymh",
      "Print_Name": "Mili",
      "Inverted_Name": "Mili"
    },
    {
      "Id": "ymi",
      "Print_Name": "Moji",
      "Inverted_Name": "Moji"
    },
    {
      "Id": "ymk",
      "Print_Name": "Makwe",
      "Inverted_Name": "Makwe"
    },
    {
      "Id": "yml",
      "Print_Name": "Iamalele",
      "Inverted_Name": "Iamalele"
    },
    {
      "Id": "ymm",
      "Print_Name": "Maay",
      "Inverted_Name": "Maay"
    },
    {
      "Id": "ymn",
      "Print_Name": "Sunum",
      "Inverted_Name": "Sunum"
    },
    {
      "Id": "ymn",
      "Print_Name": "Yamna",
      "Inverted_Name": "Yamna"
    },
    {
      "Id": "ymo",
      "Print_Name": "Yangum Mon",
      "Inverted_Name": "Yangum Mon"
    },
    {
      "Id": "ymp",
      "Print_Name": "Yamap",
      "Inverted_Name": "Yamap"
    },
    {
      "Id": "ymq",
      "Print_Name": "Qila Muji",
      "Inverted_Name": "Muji, Qila"
    },
    {
      "Id": "ymr",
      "Print_Name": "Malasar",
      "Inverted_Name": "Malasar"
    },
    {
      "Id": "yms",
      "Print_Name": "Mysian",
      "Inverted_Name": "Mysian"
    },
    {
      "Id": "ymx",
      "Print_Name": "Northern Muji",
      "Inverted_Name": "Muji, Northern"
    },
    {
      "Id": "ymz",
      "Print_Name": "Muzi",
      "Inverted_Name": "Muzi"
    },
    {
      "Id": "yna",
      "Print_Name": "Aluo",
      "Inverted_Name": "Aluo"
    },
    {
      "Id": "ynd",
      "Print_Name": "Yandruwandha",
      "Inverted_Name": "Yandruwandha"
    },
    {
      "Id": "yne",
      "Print_Name": "Lang'e",
      "Inverted_Name": "Lang'e"
    },
    {
      "Id": "yng",
      "Print_Name": "Yango",
      "Inverted_Name": "Yango"
    },
    {
      "Id": "ynk",
      "Print_Name": "Naukan Yupik",
      "Inverted_Name": "Yupik, Naukan"
    },
    {
      "Id": "ynl",
      "Print_Name": "Yangulam",
      "Inverted_Name": "Yangulam"
    },
    {
      "Id": "ynn",
      "Print_Name": "Yana",
      "Inverted_Name": "Yana"
    },
    {
      "Id": "yno",
      "Print_Name": "Yong",
      "Inverted_Name": "Yong"
    },
    {
      "Id": "ynq",
      "Print_Name": "Yendang",
      "Inverted_Name": "Yendang"
    },
    {
      "Id": "yns",
      "Print_Name": "Yansi",
      "Inverted_Name": "Yansi"
    },
    {
      "Id": "ynu",
      "Print_Name": "Yahuna",
      "Inverted_Name": "Yahuna"
    },
    {
      "Id": "yob",
      "Print_Name": "Yoba",
      "Inverted_Name": "Yoba"
    },
    {
      "Id": "yog",
      "Print_Name": "Yogad",
      "Inverted_Name": "Yogad"
    },
    {
      "Id": "yoi",
      "Print_Name": "Yonaguni",
      "Inverted_Name": "Yonaguni"
    },
    {
      "Id": "yok",
      "Print_Name": "Yokuts",
      "Inverted_Name": "Yokuts"
    },
    {
      "Id": "yol",
      "Print_Name": "Yola",
      "Inverted_Name": "Yola"
    },
    {
      "Id": "yom",
      "Print_Name": "Yombe",
      "Inverted_Name": "Yombe"
    },
    {
      "Id": "yon",
      "Print_Name": "Yongkom",
      "Inverted_Name": "Yongkom"
    },
    {
      "Id": "yor",
      "Print_Name": "Yoruba",
      "Inverted_Name": "Yoruba"
    },
    {
      "Id": "yot",
      "Print_Name": "Yotti",
      "Inverted_Name": "Yotti"
    },
    {
      "Id": "yox",
      "Print_Name": "Yoron",
      "Inverted_Name": "Yoron"
    },
    {
      "Id": "yoy",
      "Print_Name": "Yoy",
      "Inverted_Name": "Yoy"
    },
    {
      "Id": "ypa",
      "Print_Name": "Phala",
      "Inverted_Name": "Phala"
    },
    {
      "Id": "ypb",
      "Print_Name": "Labo Phowa",
      "Inverted_Name": "Phowa, Labo"
    },
    {
      "Id": "ypg",
      "Print_Name": "Phola",
      "Inverted_Name": "Phola"
    },
    {
      "Id": "yph",
      "Print_Name": "Phupha",
      "Inverted_Name": "Phupha"
    },
    {
      "Id": "ypm",
      "Print_Name": "Phuma",
      "Inverted_Name": "Phuma"
    },
    {
      "Id": "ypn",
      "Print_Name": "Ani Phowa",
      "Inverted_Name": "Phowa, Ani"
    },
    {
      "Id": "ypo",
      "Print_Name": "Alo Phola",
      "Inverted_Name": "Phola, Alo"
    },
    {
      "Id": "ypp",
      "Print_Name": "Phupa",
      "Inverted_Name": "Phupa"
    },
    {
      "Id": "ypz",
      "Print_Name": "Phuza",
      "Inverted_Name": "Phuza"
    },
    {
      "Id": "yra",
      "Print_Name": "Yerakai",
      "Inverted_Name": "Yerakai"
    },
    {
      "Id": "yrb",
      "Print_Name": "Yareba",
      "Inverted_Name": "Yareba"
    },
    {
      "Id": "yre",
      "Print_Name": "Yaouré",
      "Inverted_Name": "Yaouré"
    },
    {
      "Id": "yrk",
      "Print_Name": "Nenets",
      "Inverted_Name": "Nenets"
    },
    {
      "Id": "yrl",
      "Print_Name": "Nhengatu",
      "Inverted_Name": "Nhengatu"
    },
    {
      "Id": "yrm",
      "Print_Name": "Yirrk-Mel",
      "Inverted_Name": "Yirrk-Mel"
    },
    {
      "Id": "yrn",
      "Print_Name": "Yerong",
      "Inverted_Name": "Yerong"
    },
    {
      "Id": "yro",
      "Print_Name": "Yaroamë",
      "Inverted_Name": "Yaroamë"
    },
    {
      "Id": "yrs",
      "Print_Name": "Yarsun",
      "Inverted_Name": "Yarsun"
    },
    {
      "Id": "yrw",
      "Print_Name": "Yarawata",
      "Inverted_Name": "Yarawata"
    },
    {
      "Id": "yry",
      "Print_Name": "Yarluyandi",
      "Inverted_Name": "Yarluyandi"
    },
    {
      "Id": "ysc",
      "Print_Name": "Yassic",
      "Inverted_Name": "Yassic"
    },
    {
      "Id": "ysd",
      "Print_Name": "Samatao",
      "Inverted_Name": "Samatao"
    },
    {
      "Id": "ysg",
      "Print_Name": "Sonaga",
      "Inverted_Name": "Sonaga"
    },
    {
      "Id": "ysl",
      "Print_Name": "Yugoslavian Sign Language",
      "Inverted_Name": "Yugoslavian Sign Language"
    },
    {
      "Id": "ysm",
      "Print_Name": "Myanmar Sign Language",
      "Inverted_Name": "Myanmar Sign Language"
    },
    {
      "Id": "ysn",
      "Print_Name": "Sani",
      "Inverted_Name": "Sani"
    },
    {
      "Id": "yso",
      "Print_Name": "Nisi (China)",
      "Inverted_Name": "Nisi (China)"
    },
    {
      "Id": "ysp",
      "Print_Name": "Southern Lolopo",
      "Inverted_Name": "Lolopo, Southern"
    },
    {
      "Id": "ysr",
      "Print_Name": "Sirenik Yupik",
      "Inverted_Name": "Yupik, Sirenik"
    },
    {
      "Id": "yss",
      "Print_Name": "Yessan-Mayo",
      "Inverted_Name": "Yessan-Mayo"
    },
    {
      "Id": "ysy",
      "Print_Name": "Sanie",
      "Inverted_Name": "Sanie"
    },
    {
      "Id": "yta",
      "Print_Name": "Talu",
      "Inverted_Name": "Talu"
    },
    {
      "Id": "ytl",
      "Print_Name": "Tanglang",
      "Inverted_Name": "Tanglang"
    },
    {
      "Id": "ytp",
      "Print_Name": "Thopho",
      "Inverted_Name": "Thopho"
    },
    {
      "Id": "ytw",
      "Print_Name": "Yout Wam",
      "Inverted_Name": "Yout Wam"
    },
    {
      "Id": "yty",
      "Print_Name": "Yatay",
      "Inverted_Name": "Yatay"
    },
    {
      "Id": "yua",
      "Print_Name": "Yucatec Maya",
      "Inverted_Name": "Maya, Yucatec"
    },
    {
      "Id": "yua",
      "Print_Name": "Yucateco",
      "Inverted_Name": "Yucateco"
    },
    {
      "Id": "yub",
      "Print_Name": "Yugambal",
      "Inverted_Name": "Yugambal"
    },
    {
      "Id": "yuc",
      "Print_Name": "Yuchi",
      "Inverted_Name": "Yuchi"
    },
    {
      "Id": "yud",
      "Print_Name": "Judeo-Tripolitanian Arabic",
      "Inverted_Name": "Arabic, Judeo-Tripolitanian"
    },
    {
      "Id": "yue",
      "Print_Name": "Yue Chinese",
      "Inverted_Name": "Chinese, Yue"
    },
    {
      "Id": "yuf",
      "Print_Name": "Havasupai-Walapai-Yavapai",
      "Inverted_Name": "Havasupai-Walapai-Yavapai"
    },
    {
      "Id": "yug",
      "Print_Name": "Yug",
      "Inverted_Name": "Yug"
    },
    {
      "Id": "yui",
      "Print_Name": "Yurutí",
      "Inverted_Name": "Yurutí"
    },
    {
      "Id": "yuj",
      "Print_Name": "Karkar-Yuri",
      "Inverted_Name": "Karkar-Yuri"
    },
    {
      "Id": "yuk",
      "Print_Name": "Yuki",
      "Inverted_Name": "Yuki"
    },
    {
      "Id": "yul",
      "Print_Name": "Yulu",
      "Inverted_Name": "Yulu"
    },
    {
      "Id": "yum",
      "Print_Name": "Quechan",
      "Inverted_Name": "Quechan"
    },
    {
      "Id": "yun",
      "Print_Name": "Bena (Nigeria)",
      "Inverted_Name": "Bena (Nigeria)"
    },
    {
      "Id": "yup",
      "Print_Name": "Yukpa",
      "Inverted_Name": "Yukpa"
    },
    {
      "Id": "yuq",
      "Print_Name": "Yuqui",
      "Inverted_Name": "Yuqui"
    },
    {
      "Id": "yur",
      "Print_Name": "Yurok",
      "Inverted_Name": "Yurok"
    },
    {
      "Id": "yut",
      "Print_Name": "Yopno",
      "Inverted_Name": "Yopno"
    },
    {
      "Id": "yuw",
      "Print_Name": "Yau (Morobe Province)",
      "Inverted_Name": "Yau (Morobe Province)"
    },
    {
      "Id": "yux",
      "Print_Name": "Southern Yukaghir",
      "Inverted_Name": "Yukaghir, Southern"
    },
    {
      "Id": "yuy",
      "Print_Name": "East Yugur",
      "Inverted_Name": "Yugur, East"
    },
    {
      "Id": "yuz",
      "Print_Name": "Yuracare",
      "Inverted_Name": "Yuracare"
    },
    {
      "Id": "yva",
      "Print_Name": "Yawa",
      "Inverted_Name": "Yawa"
    },
    {
      "Id": "yvt",
      "Print_Name": "Yavitero",
      "Inverted_Name": "Yavitero"
    },
    {
      "Id": "ywa",
      "Print_Name": "Kalou",
      "Inverted_Name": "Kalou"
    },
    {
      "Id": "ywg",
      "Print_Name": "Yinhawangka",
      "Inverted_Name": "Yinhawangka"
    },
    {
      "Id": "ywl",
      "Print_Name": "Western Lalu",
      "Inverted_Name": "Lalu, Western"
    },
    {
      "Id": "ywn",
      "Print_Name": "Yawanawa",
      "Inverted_Name": "Yawanawa"
    },
    {
      "Id": "ywq",
      "Print_Name": "Wuding-Luquan Yi",
      "Inverted_Name": "Yi, Wuding-Luquan"
    },
    {
      "Id": "ywr",
      "Print_Name": "Yawuru",
      "Inverted_Name": "Yawuru"
    },
    {
      "Id": "ywt",
      "Print_Name": "Central Lalo",
      "Inverted_Name": "Lalo, Central"
    },
    {
      "Id": "ywt",
      "Print_Name": "Xishanba Lalo",
      "Inverted_Name": "Lalo, Xishanba"
    },
    {
      "Id": "ywu",
      "Print_Name": "Wumeng Nasu",
      "Inverted_Name": "Nasu, Wumeng"
    },
    {
      "Id": "yww",
      "Print_Name": "Yawarawarga",
      "Inverted_Name": "Yawarawarga"
    },
    {
      "Id": "yxa",
      "Print_Name": "Mayawali",
      "Inverted_Name": "Mayawali"
    },
    {
      "Id": "yxg",
      "Print_Name": "Yagara",
      "Inverted_Name": "Yagara"
    },
    {
      "Id": "yxl",
      "Print_Name": "Yardliyawarra",
      "Inverted_Name": "Yardliyawarra"
    },
    {
      "Id": "yxm",
      "Print_Name": "Yinwum",
      "Inverted_Name": "Yinwum"
    },
    {
      "Id": "yxu",
      "Print_Name": "Yuyu",
      "Inverted_Name": "Yuyu"
    },
    {
      "Id": "yxy",
      "Print_Name": "Yabula Yabula",
      "Inverted_Name": "Yabula Yabula"
    },
    {
      "Id": "yyr",
      "Print_Name": "Yir Yoront",
      "Inverted_Name": "Yir Yoront"
    },
    {
      "Id": "yyu",
      "Print_Name": "Yau (Sandaun Province)",
      "Inverted_Name": "Yau (Sandaun Province)"
    },
    {
      "Id": "yyz",
      "Print_Name": "Ayizi",
      "Inverted_Name": "Ayizi"
    },
    {
      "Id": "yzg",
      "Print_Name": "E'ma Buyang",
      "Inverted_Name": "Buyang, E'ma"
    },
    {
      "Id": "yzk",
      "Print_Name": "Zokhuo",
      "Inverted_Name": "Zokhuo"
    },
    {
      "Id": "zaa",
      "Print_Name": "Sierra de Juárez Zapotec",
      "Inverted_Name": "Zapotec, Sierra de Juárez"
    },
    {
      "Id": "zab",
      "Print_Name": "San Juan Guelavía Zapotec",
      "Inverted_Name": "Zapotec, San Juan Guelavía"
    },
    {
      "Id": "zab",
      "Print_Name": "Western Tlacolula Valley Zapotec",
      "Inverted_Name": "Zapotec, Western Tlacolula Valley"
    },
    {
      "Id": "zac",
      "Print_Name": "Ocotlán Zapotec",
      "Inverted_Name": "Zapotec, Ocotlán"
    },
    {
      "Id": "zad",
      "Print_Name": "Cajonos Zapotec",
      "Inverted_Name": "Zapotec, Cajonos"
    },
    {
      "Id": "zae",
      "Print_Name": "Yareni Zapotec",
      "Inverted_Name": "Zapotec, Yareni"
    },
    {
      "Id": "zaf",
      "Print_Name": "Ayoquesco Zapotec",
      "Inverted_Name": "Zapotec, Ayoquesco"
    },
    {
      "Id": "zag",
      "Print_Name": "Zaghawa",
      "Inverted_Name": "Zaghawa"
    },
    {
      "Id": "zah",
      "Print_Name": "Zangwal",
      "Inverted_Name": "Zangwal"
    },
    {
      "Id": "zai",
      "Print_Name": "Isthmus Zapotec",
      "Inverted_Name": "Zapotec, Isthmus"
    },
    {
      "Id": "zaj",
      "Print_Name": "Zaramo",
      "Inverted_Name": "Zaramo"
    },
    {
      "Id": "zak",
      "Print_Name": "Zanaki",
      "Inverted_Name": "Zanaki"
    },
    {
      "Id": "zal",
      "Print_Name": "Zauzou",
      "Inverted_Name": "Zauzou"
    },
    {
      "Id": "zam",
      "Print_Name": "Miahuatlán Zapotec",
      "Inverted_Name": "Zapotec, Miahuatlán"
    },
    {
      "Id": "zao",
      "Print_Name": "Ozolotepec Zapotec",
      "Inverted_Name": "Zapotec, Ozolotepec"
    },
    {
      "Id": "zap",
      "Print_Name": "Zapotec",
      "Inverted_Name": "Zapotec"
    },
    {
      "Id": "zaq",
      "Print_Name": "Aloápam Zapotec",
      "Inverted_Name": "Zapotec, Aloápam"
    },
    {
      "Id": "zar",
      "Print_Name": "Rincón Zapotec",
      "Inverted_Name": "Zapotec, Rincón"
    },
    {
      "Id": "zas",
      "Print_Name": "Santo Domingo Albarradas Zapotec",
      "Inverted_Name": "Zapotec, Santo Domingo Albarradas"
    },
    {
      "Id": "zat",
      "Print_Name": "Tabaa Zapotec",
      "Inverted_Name": "Zapotec, Tabaa"
    },
    {
      "Id": "zau",
      "Print_Name": "Zangskari",
      "Inverted_Name": "Zangskari"
    },
    {
      "Id": "zav",
      "Print_Name": "Yatzachi Zapotec",
      "Inverted_Name": "Zapotec, Yatzachi"
    },
    {
      "Id": "zaw",
      "Print_Name": "Mitla Zapotec",
      "Inverted_Name": "Zapotec, Mitla"
    },
    {
      "Id": "zax",
      "Print_Name": "Xadani Zapotec",
      "Inverted_Name": "Zapotec, Xadani"
    },
    {
      "Id": "zay",
      "Print_Name": "Zaysete",
      "Inverted_Name": "Zaysete"
    },
    {
      "Id": "zay",
      "Print_Name": "Zayse-Zergulla",
      "Inverted_Name": "Zayse-Zergulla"
    },
    {
      "Id": "zaz",
      "Print_Name": "Zari",
      "Inverted_Name": "Zari"
    },
    {
      "Id": "zba",
      "Print_Name": "Balaibalan",
      "Inverted_Name": "Balaibalan"
    },
    {
      "Id": "zbc",
      "Print_Name": "Central Berawan",
      "Inverted_Name": "Berawan, Central"
    },
    {
      "Id": "zbe",
      "Print_Name": "East Berawan",
      "Inverted_Name": "Berawan, East"
    },
    {
      "Id": "zbl",
      "Print_Name": "Bliss",
      "Inverted_Name": "Bliss"
    },
    {
      "Id": "zbl",
      "Print_Name": "Blissymbolics",
      "Inverted_Name": "Blissymbolics"
    },
    {
      "Id": "zbl",
      "Print_Name": "Blissymbols",
      "Inverted_Name": "Blissymbols"
    },
    {
      "Id": "zbt",
      "Print_Name": "Batui",
      "Inverted_Name": "Batui"
    },
    {
      "Id": "zbu",
      "Print_Name": "Bu (Bauchi State)",
      "Inverted_Name": "Bu (Bauchi State)"
    },
    {
      "Id": "zbw",
      "Print_Name": "West Berawan",
      "Inverted_Name": "Berawan, West"
    },
    {
      "Id": "zca",
      "Print_Name": "Coatecas Altas Zapotec",
      "Inverted_Name": "Zapotec, Coatecas Altas"
    },
    {
      "Id": "zcd",
      "Print_Name": "Las Delicias Zapotec",
      "Inverted_Name": "Zapotec, Las Delicias"
    },
    {
      "Id": "zch",
      "Print_Name": "Central Hongshuihe Zhuang",
      "Inverted_Name": "Zhuang, Central Hongshuihe"
    },
    {
      "Id": "zdj",
      "Print_Name": "Ngazidja Comorian",
      "Inverted_Name": "Comorian, Ngazidja"
    },
    {
      "Id": "zea",
      "Print_Name": "Zeeuws",
      "Inverted_Name": "Zeeuws"
    },
    {
      "Id": "zeg",
      "Print_Name": "Zenag",
      "Inverted_Name": "Zenag"
    },
    {
      "Id": "zeh",
      "Print_Name": "Eastern Hongshuihe Zhuang",
      "Inverted_Name": "Zhuang, Eastern Hongshuihe"
    },
    {
      "Id": "zem",
      "Print_Name": "Zeem",
      "Inverted_Name": "Zeem"
    },
    {
      "Id": "zen",
      "Print_Name": "Zenaga",
      "Inverted_Name": "Zenaga"
    },
    {
      "Id": "zga",
      "Print_Name": "Kinga",
      "Inverted_Name": "Kinga"
    },
    {
      "Id": "zgb",
      "Print_Name": "Guibei Zhuang",
      "Inverted_Name": "Zhuang, Guibei"
    },
    {
      "Id": "zgh",
      "Print_Name": "Standard Moroccan Tamazight",
      "Inverted_Name": "Tamazight, Standard Moroccan"
    },
    {
      "Id": "zgm",
      "Print_Name": "Minz Zhuang",
      "Inverted_Name": "Zhuang, Minz"
    },
    {
      "Id": "zgn",
      "Print_Name": "Guibian Zhuang",
      "Inverted_Name": "Zhuang, Guibian"
    },
    {
      "Id": "zgr",
      "Print_Name": "Magori",
      "Inverted_Name": "Magori"
    },
    {
      "Id": "zha",
      "Print_Name": "Chuang",
      "Inverted_Name": "Chuang"
    },
    {
      "Id": "zha",
      "Print_Name": "Zhuang",
      "Inverted_Name": "Zhuang"
    },
    {
      "Id": "zhb",
      "Print_Name": "Zhaba",
      "Inverted_Name": "Zhaba"
    },
    {
      "Id": "zhd",
      "Print_Name": "Dai Zhuang",
      "Inverted_Name": "Zhuang, Dai"
    },
    {
      "Id": "zhi",
      "Print_Name": "Zhire",
      "Inverted_Name": "Zhire"
    },
    {
      "Id": "zhn",
      "Print_Name": "Nong Zhuang",
      "Inverted_Name": "Zhuang, Nong"
    },
    {
      "Id": "zho",
      "Print_Name": "Chinese",
      "Inverted_Name": "Chinese"
    },
    {
      "Id": "zhw",
      "Print_Name": "Zhoa",
      "Inverted_Name": "Zhoa"
    },
    {
      "Id": "zia",
      "Print_Name": "Zia",
      "Inverted_Name": "Zia"
    },
    {
      "Id": "zib",
      "Print_Name": "Zimbabwe Sign Language",
      "Inverted_Name": "Zimbabwe Sign Language"
    },
    {
      "Id": "zik",
      "Print_Name": "Zimakani",
      "Inverted_Name": "Zimakani"
    },
    {
      "Id": "zil",
      "Print_Name": "Zialo",
      "Inverted_Name": "Zialo"
    },
    {
      "Id": "zim",
      "Print_Name": "Mesme",
      "Inverted_Name": "Mesme"
    },
    {
      "Id": "zin",
      "Print_Name": "Zinza",
      "Inverted_Name": "Zinza"
    },
    {
      "Id": "ziw",
      "Print_Name": "Zigula",
      "Inverted_Name": "Zigula"
    },
    {
      "Id": "ziz",
      "Print_Name": "Zizilivakan",
      "Inverted_Name": "Zizilivakan"
    },
    {
      "Id": "zka",
      "Print_Name": "Kaimbulawa",
      "Inverted_Name": "Kaimbulawa"
    },
    {
      "Id": "zkd",
      "Print_Name": "Kadu",
      "Inverted_Name": "Kadu"
    },
    {
      "Id": "zkg",
      "Print_Name": "Koguryo",
      "Inverted_Name": "Koguryo"
    },
    {
      "Id": "zkh",
      "Print_Name": "Khorezmian",
      "Inverted_Name": "Khorezmian"
    },
    {
      "Id": "zkk",
      "Print_Name": "Karankawa",
      "Inverted_Name": "Karankawa"
    },
    {
      "Id": "zkn",
      "Print_Name": "Kanan",
      "Inverted_Name": "Kanan"
    },
    {
      "Id": "zko",
      "Print_Name": "Kott",
      "Inverted_Name": "Kott"
    },
    {
      "Id": "zkp",
      "Print_Name": "São Paulo Kaingáng",
      "Inverted_Name": "Kaingáng, São Paulo"
    },
    {
      "Id": "zkr",
      "Print_Name": "Zakhring",
      "Inverted_Name": "Zakhring"
    },
    {
      "Id": "zkt",
      "Print_Name": "Kitan",
      "Inverted_Name": "Kitan"
    },
    {
      "Id": "zku",
      "Print_Name": "Kaurna",
      "Inverted_Name": "Kaurna"
    },
    {
      "Id": "zkv",
      "Print_Name": "Krevinian",
      "Inverted_Name": "Krevinian"
    },
    {
      "Id": "zkz",
      "Print_Name": "Khazar",
      "Inverted_Name": "Khazar"
    },
    {
      "Id": "zla",
      "Print_Name": "Zula",
      "Inverted_Name": "Zula"
    },
    {
      "Id": "zlj",
      "Print_Name": "Liujiang Zhuang",
      "Inverted_Name": "Zhuang, Liujiang"
    },
    {
      "Id": "zlm",
      "Print_Name": "Malay (individual language)",
      "Inverted_Name": "Malay (individual language)"
    },
    {
      "Id": "zln",
      "Print_Name": "Lianshan Zhuang",
      "Inverted_Name": "Zhuang, Lianshan"
    },
    {
      "Id": "zlq",
      "Print_Name": "Liuqian Zhuang",
      "Inverted_Name": "Zhuang, Liuqian"
    },
    {
      "Id": "zlu",
      "Print_Name": "Zul",
      "Inverted_Name": "Zul"
    },
    {
      "Id": "zma",
      "Print_Name": "Manda (Australia)",
      "Inverted_Name": "Manda (Australia)"
    },
    {
      "Id": "zmb",
      "Print_Name": "Zimba",
      "Inverted_Name": "Zimba"
    },
    {
      "Id": "zmc",
      "Print_Name": "Margany",
      "Inverted_Name": "Margany"
    },
    {
      "Id": "zmd",
      "Print_Name": "Maridan",
      "Inverted_Name": "Maridan"
    },
    {
      "Id": "zme",
      "Print_Name": "Mangerr",
      "Inverted_Name": "Mangerr"
    },
    {
      "Id": "zmf",
      "Print_Name": "Mfinu",
      "Inverted_Name": "Mfinu"
    },
    {
      "Id": "zmg",
      "Print_Name": "Marti Ke",
      "Inverted_Name": "Marti Ke"
    },
    {
      "Id": "zmh",
      "Print_Name": "Makolkol",
      "Inverted_Name": "Makolkol"
    },
    {
      "Id": "zmi",
      "Print_Name": "Negeri Sembilan Malay",
      "Inverted_Name": "Negeri Sembilan Malay"
    },
    {
      "Id": "zmj",
      "Print_Name": "Maridjabin",
      "Inverted_Name": "Maridjabin"
    },
    {
      "Id": "zmk",
      "Print_Name": "Mandandanyi",
      "Inverted_Name": "Mandandanyi"
    },
    {
      "Id": "zml",
      "Print_Name": "Matngala",
      "Inverted_Name": "Matngala"
    },
    {
      "Id": "zmm",
      "Print_Name": "Marimanindji",
      "Inverted_Name": "Marimanindji"
    },
    {
      "Id": "zmm",
      "Print_Name": "Marramaninyshi",
      "Inverted_Name": "Marramaninyshi"
    },
    {
      "Id": "zmn",
      "Print_Name": "Mbangwe",
      "Inverted_Name": "Mbangwe"
    },
    {
      "Id": "zmo",
      "Print_Name": "Molo",
      "Inverted_Name": "Molo"
    },
    {
      "Id": "zmp",
      "Print_Name": "Mpuono",
      "Inverted_Name": "Mpuono"
    },
    {
      "Id": "zmq",
      "Print_Name": "Mituku",
      "Inverted_Name": "Mituku"
    },
    {
      "Id": "zmr",
      "Print_Name": "Maranunggu",
      "Inverted_Name": "Maranunggu"
    },
    {
      "Id": "zms",
      "Print_Name": "Mbesa",
      "Inverted_Name": "Mbesa"
    },
    {
      "Id": "zmt",
      "Print_Name": "Maringarr",
      "Inverted_Name": "Maringarr"
    },
    {
      "Id": "zmu",
      "Print_Name": "Muruwari",
      "Inverted_Name": "Muruwari"
    },
    {
      "Id": "zmv",
      "Print_Name": "Mbariman-Gudhinma",
      "Inverted_Name": "Mbariman-Gudhinma"
    },
    {
      "Id": "zmw",
      "Print_Name": "Mbo (Democratic Republic of Congo)",
      "Inverted_Name": "Mbo (Democratic Republic of Congo)"
    },
    {
      "Id": "zmx",
      "Print_Name": "Bomitaba",
      "Inverted_Name": "Bomitaba"
    },
    {
      "Id": "zmy",
      "Print_Name": "Mariyedi",
      "Inverted_Name": "Mariyedi"
    },
    {
      "Id": "zmz",
      "Print_Name": "Mbandja",
      "Inverted_Name": "Mbandja"
    },
    {
      "Id": "zna",
      "Print_Name": "Zan Gula",
      "Inverted_Name": "Zan Gula"
    },
    {
      "Id": "zne",
      "Print_Name": "Zande (individual language)",
      "Inverted_Name": "Zande (individual language)"
    },
    {
      "Id": "zng",
      "Print_Name": "Mang",
      "Inverted_Name": "Mang"
    },
    {
      "Id": "znk",
      "Print_Name": "Manangkari",
      "Inverted_Name": "Manangkari"
    },
    {
      "Id": "zns",
      "Print_Name": "Mangas",
      "Inverted_Name": "Mangas"
    },
    {
      "Id": "zoc",
      "Print_Name": "Copainalá Zoque",
      "Inverted_Name": "Zoque, Copainalá"
    },
    {
      "Id": "zoh",
      "Print_Name": "Chimalapa Zoque",
      "Inverted_Name": "Zoque, Chimalapa"
    },
    {
      "Id": "zom",
      "Print_Name": "Zou",
      "Inverted_Name": "Zou"
    },
    {
      "Id": "zoo",
      "Print_Name": "Asunción Mixtepec Zapotec",
      "Inverted_Name": "Zapotec, Asunción Mixtepec"
    },
    {
      "Id": "zoq",
      "Print_Name": "Tabasco Zoque",
      "Inverted_Name": "Zoque, Tabasco"
    },
    {
      "Id": "zor",
      "Print_Name": "Rayón Zoque",
      "Inverted_Name": "Zoque, Rayón"
    },
    {
      "Id": "zos",
      "Print_Name": "Francisco León Zoque",
      "Inverted_Name": "Zoque, Francisco León"
    },
    {
      "Id": "zpa",
      "Print_Name": "Lachiguiri Zapotec",
      "Inverted_Name": "Zapotec, Lachiguiri"
    },
    {
      "Id": "zpb",
      "Print_Name": "Yautepec Zapotec",
      "Inverted_Name": "Zapotec, Yautepec"
    },
    {
      "Id": "zpc",
      "Print_Name": "Choapan Zapotec",
      "Inverted_Name": "Zapotec, Choapan"
    },
    {
      "Id": "zpd",
      "Print_Name": "Southeastern Ixtlán Zapotec",
      "Inverted_Name": "Zapotec, Southeastern Ixtlán"
    },
    {
      "Id": "zpe",
      "Print_Name": "Petapa Zapotec",
      "Inverted_Name": "Zapotec, Petapa"
    },
    {
      "Id": "zpf",
      "Print_Name": "San Pedro Quiatoni Zapotec",
      "Inverted_Name": "Zapotec, San Pedro Quiatoni"
    },
    {
      "Id": "zpg",
      "Print_Name": "Guevea De Humboldt Zapotec",
      "Inverted_Name": "Zapotec, Guevea De Humboldt"
    },
    {
      "Id": "zph",
      "Print_Name": "Totomachapan Zapotec",
      "Inverted_Name": "Zapotec, Totomachapan"
    },
    {
      "Id": "zpi",
      "Print_Name": "Santa María Quiegolani Zapotec",
      "Inverted_Name": "Zapotec, Santa María Quiegolani"
    },
    {
      "Id": "zpj",
      "Print_Name": "Quiavicuzas Zapotec",
      "Inverted_Name": "Zapotec, Quiavicuzas"
    },
    {
      "Id": "zpk",
      "Print_Name": "Tlacolulita Zapotec",
      "Inverted_Name": "Zapotec, Tlacolulita"
    },
    {
      "Id": "zpl",
      "Print_Name": "Lachixío Zapotec",
      "Inverted_Name": "Zapotec, Lachixío"
    },
    {
      "Id": "zpm",
      "Print_Name": "Mixtepec Zapotec",
      "Inverted_Name": "Zapotec, Mixtepec"
    },
    {
      "Id": "zpn",
      "Print_Name": "Santa Inés Yatzechi Zapotec",
      "Inverted_Name": "Zapotec, Santa Inés Yatzechi"
    },
    {
      "Id": "zpo",
      "Print_Name": "Amatlán Zapotec",
      "Inverted_Name": "Zapotec, Amatlán"
    },
    {
      "Id": "zpp",
      "Print_Name": "El Alto Zapotec",
      "Inverted_Name": "Zapotec, El Alto"
    },
    {
      "Id": "zpq",
      "Print_Name": "Zoogocho Zapotec",
      "Inverted_Name": "Zapotec, Zoogocho"
    },
    {
      "Id": "zpr",
      "Print_Name": "Santiago Xanica Zapotec",
      "Inverted_Name": "Zapotec, Santiago Xanica"
    },
    {
      "Id": "zps",
      "Print_Name": "Coatlán Zapotec",
      "Inverted_Name": "Zapotec, Coatlán"
    },
    {
      "Id": "zpt",
      "Print_Name": "San Vicente Coatlán Zapotec",
      "Inverted_Name": "Zapotec, San Vicente Coatlán"
    },
    {
      "Id": "zpu",
      "Print_Name": "Yalálag Zapotec",
      "Inverted_Name": "Zapotec, Yalálag"
    },
    {
      "Id": "zpv",
      "Print_Name": "Chichicapan Zapotec",
      "Inverted_Name": "Zapotec, Chichicapan"
    },
    {
      "Id": "zpw",
      "Print_Name": "Zaniza Zapotec",
      "Inverted_Name": "Zapotec, Zaniza"
    },
    {
      "Id": "zpx",
      "Print_Name": "San Baltazar Loxicha Zapotec",
      "Inverted_Name": "Zapotec, San Baltazar Loxicha"
    },
    {
      "Id": "zpy",
      "Print_Name": "Mazaltepec Zapotec",
      "Inverted_Name": "Zapotec, Mazaltepec"
    },
    {
      "Id": "zpz",
      "Print_Name": "Texmelucan Zapotec",
      "Inverted_Name": "Zapotec, Texmelucan"
    },
    {
      "Id": "zqe",
      "Print_Name": "Qiubei Zhuang",
      "Inverted_Name": "Zhuang, Qiubei"
    },
    {
      "Id": "zra",
      "Print_Name": "Kara (Korea)",
      "Inverted_Name": "Kara (Korea)"
    },
    {
      "Id": "zrg",
      "Print_Name": "Mirgan",
      "Inverted_Name": "Mirgan"
    },
    {
      "Id": "zrn",
      "Print_Name": "Zerenkel",
      "Inverted_Name": "Zerenkel"
    },
    {
      "Id": "zro",
      "Print_Name": "Záparo",
      "Inverted_Name": "Záparo"
    },
    {
      "Id": "zrp",
      "Print_Name": "Zarphatic",
      "Inverted_Name": "Zarphatic"
    },
    {
      "Id": "zrs",
      "Print_Name": "Mairasi",
      "Inverted_Name": "Mairasi"
    },
    {
      "Id": "zsa",
      "Print_Name": "Sarasira",
      "Inverted_Name": "Sarasira"
    },
    {
      "Id": "zsk",
      "Print_Name": "Kaskean",
      "Inverted_Name": "Kaskean"
    },
    {
      "Id": "zsl",
      "Print_Name": "Zambian Sign Language",
      "Inverted_Name": "Zambian Sign Language"
    },
    {
      "Id": "zsm",
      "Print_Name": "Standard Malay",
      "Inverted_Name": "Malay, Standard"
    },
    {
      "Id": "zsr",
      "Print_Name": "Southern Rincon Zapotec",
      "Inverted_Name": "Zapotec, Southern Rincon"
    },
    {
      "Id": "zsu",
      "Print_Name": "Sukurum",
      "Inverted_Name": "Sukurum"
    },
    {
      "Id": "zte",
      "Print_Name": "Elotepec Zapotec",
      "Inverted_Name": "Zapotec, Elotepec"
    },
    {
      "Id": "ztg",
      "Print_Name": "Xanaguía Zapotec",
      "Inverted_Name": "Zapotec, Xanaguía"
    },
    {
      "Id": "ztl",
      "Print_Name": "Lapaguía-Guivini Zapotec",
      "Inverted_Name": "Zapotec, Lapaguía-Guivini"
    },
    {
      "Id": "ztm",
      "Print_Name": "San Agustín Mixtepec Zapotec",
      "Inverted_Name": "Zapotec, San Agustín Mixtepec"
    },
    {
      "Id": "ztn",
      "Print_Name": "Santa Catarina Albarradas Zapotec",
      "Inverted_Name": "Zapotec, Santa Catarina Albarradas"
    },
    {
      "Id": "ztp",
      "Print_Name": "Loxicha Zapotec",
      "Inverted_Name": "Zapotec, Loxicha"
    },
    {
      "Id": "ztq",
      "Print_Name": "Quioquitani-Quierí Zapotec",
      "Inverted_Name": "Zapotec, Quioquitani-Quierí"
    },
    {
      "Id": "zts",
      "Print_Name": "Tilquiapan Zapotec",
      "Inverted_Name": "Zapotec, Tilquiapan"
    },
    {
      "Id": "ztt",
      "Print_Name": "Tejalapan Zapotec",
      "Inverted_Name": "Zapotec, Tejalapan"
    },
    {
      "Id": "ztu",
      "Print_Name": "Güilá Zapotec",
      "Inverted_Name": "Zapotec, Güilá"
    },
    {
      "Id": "ztx",
      "Print_Name": "Zaachila Zapotec",
      "Inverted_Name": "Zapotec, Zaachila"
    },
    {
      "Id": "zty",
      "Print_Name": "Yatee Zapotec",
      "Inverted_Name": "Zapotec, Yatee"
    },
    {
      "Id": "zuh",
      "Print_Name": "Tokano",
      "Inverted_Name": "Tokano"
    },
    {
      "Id": "zul",
      "Print_Name": "Zulu",
      "Inverted_Name": "Zulu"
    },
    {
      "Id": "zum",
      "Print_Name": "Kumzari",
      "Inverted_Name": "Kumzari"
    },
    {
      "Id": "zun",
      "Print_Name": "Zuni",
      "Inverted_Name": "Zuni"
    },
    {
      "Id": "zuy",
      "Print_Name": "Zumaya",
      "Inverted_Name": "Zumaya"
    },
    {
      "Id": "zwa",
      "Print_Name": "Zay",
      "Inverted_Name": "Zay"
    },
    {
      "Id": "zxx",
      "Print_Name": "No linguistic content",
      "Inverted_Name": "No linguistic content"
    },
    {
      "Id": "zxx",
      "Print_Name": "Not applicable",
      "Inverted_Name": "Not applicable"
    },
    {
      "Id": "zyb",
      "Print_Name": "Yongbei Zhuang",
      "Inverted_Name": "Zhuang, Yongbei"
    },
    {
      "Id": "zyg",
      "Print_Name": "Yang Zhuang",
      "Inverted_Name": "Zhuang, Yang"
    },
    {
      "Id": "zyj",
      "Print_Name": "Youjiang Zhuang",
      "Inverted_Name": "Zhuang, Youjiang"
    },
    {
      "Id": "zyn",
      "Print_Name": "Yongnan Zhuang",
      "Inverted_Name": "Zhuang, Yongnan"
    },
    {
      "Id": "zyp",
      "Print_Name": "Zyphe Chin",
      "Inverted_Name": "Chin, Zyphe"
    },
    {
      "Id": "zza",
      "Print_Name": "Dimili",
      "Inverted_Name": "Dimili"
    },
    {
      "Id": "zza",
      "Print_Name": "Dimli (macrolanguage)",
      "Inverted_Name": "Dimli (macrolanguage)"
    },
    {
      "Id": "zza",
      "Print_Name": "Kirdki",
      "Inverted_Name": "Kirdki"
    },
    {
      "Id": "zza",
      "Print_Name": "Kirmanjki (macrolanguage)",
      "Inverted_Name": "Kirmanjki (macrolanguage)"
    },
    {
      "Id": "zza",
      "Print_Name": "Zaza",
      "Inverted_Name": "Zaza"
    },
    {
      "Id": "zza",
      "Print_Name": "Zazaki",
      "Inverted_Name": "Zazaki"
    },
    {
      "Id": "zzj",
      "Print_Name": "Zuojiang Zhuang",
      "Inverted_Name": "Zhuang, Zuojiang"
    }
  ]
}
const input=process.argv[2];
const lang_code=franc(input);
console.log(lang_code);
if(lang_code=='und'){
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE TEXT"));
}else{
codes.lang_c.forEach((blk)=>{
    if(blk.Id==lang_code)
    console.log(`Matched language is ${blk.Print_Name}`);
})
}