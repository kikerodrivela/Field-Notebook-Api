const productos = [
  {
    "id": 1,
    "registrynumber": 11179,
    "tradename": "microthiol special disperss",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 2,
    "registrynumber": 11231,
    "tradename": "cobre nordox 50",
    "headline": "comercial química massó, s.a.",
    "madeby": "oxido cuproso 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 3,
    "registrynumber": 11312,
    "tradename": "deccosol-mf",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "2-fenilfenol 13% (expr. en opp) [sl] p/v"
  },
  {
    "id": 4,
    "registrynumber": 11412,
    "tradename": "sp4ok",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 5,
    "registrynumber": 11420,
    "tradename": "microtox",
    "headline": "field protection, s.l.",
    "madeby": "azufre 80% [wp] p/p"
  },
  {
    "id": 6,
    "registrynumber": 11485,
    "tradename": "ever transparente",
    "headline": "total españa, s.a.u.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 7,
    "registrynumber": 11530,
    "tradename": "nufo-z",
    "headline": "indofil industries (netherlands) b.v.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 8,
    "registrynumber": 11533,
    "tradename": "banvel-d",
    "headline": "syngenta españa, s.a.",
    "madeby": "dicamba 48% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 9,
    "registrynumber": 11565,
    "tradename": "quilan",
    "headline": "gowan crop protection ltd.",
    "madeby": "benfluralina 18% [ec] p/v"
  },
  {
    "id": 10,
    "registrynumber": 11571,
    "tradename": "venzar",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "lenacilo 80% [wp] p/p"
  },
  {
    "id": 11,
    "registrynumber": 11572,
    "tradename": "vydate 10 g",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "oxamilo 10% [gr] p/p"
  },
  {
    "id": 12,
    "registrynumber": 11582,
    "tradename": "beltasur-500",
    "headline": "probelte s.a.u.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 13,
    "registrynumber": 11780,
    "tradename": "captana",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "captan 80% [wg] p/p"
  },
  {
    "id": 14,
    "registrynumber": 11797,
    "tradename": "caldo bordeles mac 80",
    "headline": "iqv agro españa, s.l.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 15,
    "registrynumber": 11807,
    "tradename": "fulmit oleo l.e",
    "headline": "kenogard, s.a.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 16,
    "registrynumber": 11821,
    "tradename": "fulmit",
    "headline": "kenogard, s.a.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 17,
    "registrynumber": 11826,
    "tradename": "aphox",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "pirimicarb 50% [wg] p/p"
  },
  {
    "id": 18,
    "registrynumber": 11837,
    "tradename": "captagrex 80",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "captan 80% [wg] p/p"
  },
  {
    "id": 19,
    "registrynumber": 11854,
    "tradename": "ditiver c pm",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 20,
    "registrynumber": 11952,
    "tradename": "azufre famolins",
    "headline": "julio cabrero y cia, s.l.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 21,
    "registrynumber": 12033,
    "tradename": "volck verano",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "aceite de parafina 65,4% [ew] p/v"
  },
  {
    "id": 22,
    "registrynumber": 12070,
    "tradename": "sanagricola wp",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 23,
    "registrynumber": 12180,
    "tradename": "capteran 50",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "captan 47,5% [sc] p/v"
  },
  {
    "id": 24,
    "registrynumber": 12240,
    "tradename": "actellic 50-e",
    "headline": "syngenta españa, s.a.",
    "madeby": "metil pirimifos 50% [ec] p/v"
  },
  {
    "id": 25,
    "registrynumber": 12276,
    "tradename": "agral",
    "headline": "syngenta españa, s.a.",
    "madeby": "mojante no ionico 20% [sl] p/v"
  },
  {
    "id": 26,
    "registrynumber": 12281,
    "tradename": "cobre key",
    "headline": "industrial quimica key, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 27,
    "registrynumber": 12308,
    "tradename": "cuprebel",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 28,
    "registrynumber": 12309,
    "tradename": "ditiver m-80",
    "headline": "indofil industries (netherlands) b.v.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 29,
    "registrynumber": 12350,
    "tradename": "supramin 20",
    "headline": "gowan crop protection ltd.",
    "madeby": "fosmet 20% [ec] p/v"
  },
  {
    "id": 30,
    "registrynumber": 12352,
    "tradename": "aspid 50 wp",
    "headline": "gowan crop protection ltd.",
    "madeby": "fosmet 50% [wp] p/p"
  },
  {
    "id": 31,
    "registrynumber": 12453,
    "tradename": "azufre micronizado p-300/100",
    "headline": "azufrera y fertilizantes pallarès s.a.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 32,
    "registrynumber": 12455,
    "tradename": "azufre micronizado p-300/80",
    "headline": "azufrera y fertilizantes pallarès s.a.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 33,
    "registrynumber": 12464,
    "tradename": "azufre molido p-100/100",
    "headline": "azufrera y fertilizantes pallarès s.a.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 34,
    "registrynumber": 12465,
    "tradename": "azumo-n",
    "headline": "azufrera y fertilizantes pallarès s.a.",
    "madeby": "azufre 80% [wp] p/p"
  },
  {
    "id": 35,
    "registrynumber": 12466,
    "tradename": "azufre sublimado flor pallares",
    "headline": "azufrera y fertilizantes pallarès s.a.",
    "madeby": "azufre 99% [dp] p/p"
  },
  {
    "id": 36,
    "registrynumber": 12469,
    "tradename": "metenal",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 37,
    "registrynumber": 12470,
    "tradename": "metalixon",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metaldehido 5% [gb] p/p"
  },
  {
    "id": 38,
    "registrynumber": 12507,
    "tradename": "afrocobre m",
    "headline": "alintra, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 39,
    "registrynumber": 12534,
    "tradename": "belpron especial fluido-90",
    "headline": "probelte s.a.u.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 40,
    "registrynumber": 12562,
    "tradename": "azufre sublimado flor",
    "headline": "field protection, s.l.",
    "madeby": "azufre 99% [dp] p/p"
  },
  {
    "id": 41,
    "registrynumber": 12569,
    "tradename": "cuperval",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 42,
    "registrynumber": 12605,
    "tradename": "cobreluq-50",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 43,
    "registrynumber": 12612,
    "tradename": "curenox 50 blue",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 44,
    "registrynumber": 12677,
    "tradename": "iqv oxicloruro 50",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 45,
    "registrynumber": 12741,
    "tradename": "citrashine conserv. imz-d",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "imazalil 0,3% [ew] p/v"
  },
  {
    "id": 46,
    "registrynumber": 12752,
    "tradename": "citrashine-n-imz-doble",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "imazalil 0,3% [ew] p/v"
  },
  {
    "id": 47,
    "registrynumber": 12764,
    "tradename": "manzate dp 80",
    "headline": "upl iberia, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 48,
    "registrynumber": 12796,
    "tradename": "mojante oro",
    "headline": "quimicas oro, s.a.",
    "madeby": "dodecilbenceno sulfonato amonico (ddsa) 20% [ec] p/v"
  },
  {
    "id": 49,
    "registrynumber": 12797,
    "tradename": "oil-oro",
    "headline": "quimicas oro, s.a.",
    "madeby": "aceite de parafina 83% [ec] p/v"
  },
  {
    "id": 50,
    "registrynumber": 12812,
    "tradename": "babosil granulado",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 51,
    "registrynumber": 12864,
    "tradename": "caldo bordeles",
    "headline": "iqv italia s.r.l.",
    "madeby": "sulfato cuprocalcico 20% [wp] p/p"
  },
  {
    "id": 52,
    "registrynumber": 12901,
    "tradename": "thiovit jet",
    "headline": "syngenta españa, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 53,
    "registrynumber": 12965,
    "tradename": "covicampo-50",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 54,
    "registrynumber": 12968,
    "tradename": "adrex",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "alquil poliglicol 20% (eter) [sl] p/v"
  },
  {
    "id": 55,
    "registrynumber": 13037,
    "tradename": "limagram",
    "headline": "sipcam inagra, s.a.",
    "madeby": "metaldehido 3% (adicionado de colorante) [rb] p/p"
  },
  {
    "id": 56,
    "registrynumber": 13073,
    "tradename": "benoil naranjos",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "aceite de parafina 65,4% [ew] p/v"
  },
  {
    "id": 57,
    "registrynumber": 13074,
    "tradename": "volck miscible",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "aceite de parafina 83% [ec] p/v"
  },
  {
    "id": 58,
    "registrynumber": 13087,
    "tradename": "coxidante",
    "headline": "probelte s.a.u.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 59,
    "registrynumber": 13090,
    "tradename": "belpron especial fluido 80",
    "headline": "probelte s.a.u.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 60,
    "registrynumber": 13094,
    "tradename": "britex-f",
    "headline": "cia. iberica brogdex, s. a.",
    "madeby": "ceras 18% + 2-fenilfenol 0,65% (expr. en opp) [ew] p/v"
  },
  {
    "id": 61,
    "registrynumber": 13115,
    "tradename": "phostoxin pellet",
    "headline": "detia freyberg gmbh",
    "madeby": "fosfuro de aluminio 56% [ge] p/p"
  },
  {
    "id": 62,
    "registrynumber": 13116,
    "tradename": "phostoxin bag",
    "headline": "detia freyberg gmbh",
    "madeby": "fosfuro de aluminio 57% [ge] p/p"
  },
  {
    "id": 63,
    "registrynumber": 13117,
    "tradename": "spersul",
    "headline": "syngenta españa, s.a.",
    "madeby": "azufre 80% [wp] p/p"
  },
  {
    "id": 64,
    "registrynumber": 13138,
    "tradename": "curenox-50",
    "headline": "iqv agro españa, s.l.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 65,
    "registrynumber": 13141,
    "tradename": "belproil-a",
    "headline": "probelte s.a.u.",
    "madeby": "aceite de parafina 83% [ec] p/v"
  },
  {
    "id": 66,
    "registrynumber": 13146,
    "tradename": "belpron c-50",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "captan 47,5% [sc] p/v"
  },
  {
    "id": 67,
    "registrynumber": 13174,
    "tradename": "caraquim",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 68,
    "registrynumber": 13181,
    "tradename": "metakey",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 69,
    "registrynumber": 13188,
    "tradename": "merpan 80 wg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "captan 80% [wg] p/p"
  },
  {
    "id": 70,
    "registrynumber": 13248,
    "tradename": "arges",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 75% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 71,
    "registrynumber": 13261,
    "tradename": "nimrod quattro",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "bupirimato 25% [ec] p/v"
  },
  {
    "id": 72,
    "registrynumber": 13299,
    "tradename": "ethrel 48",
    "headline": "bayer cropscience, s.l.",
    "madeby": "etefon 48% [sl] p/v"
  },
  {
    "id": 73,
    "registrynumber": 13325,
    "tradename": "azufre 98,5",
    "headline": "field protection, s.l.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 74,
    "registrynumber": 13342,
    "tradename": "cuproxi",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 75,
    "registrynumber": 13348,
    "tradename": "nu- film 17",
    "headline": "agrichem, s.a.",
    "madeby": "dimenteno 96% [ec] p/v"
  },
  {
    "id": 76,
    "registrynumber": 13349,
    "tradename": "maximix",
    "headline": "agrichem, s.a.",
    "madeby": "polimenteno 96% [ec] p/v"
  },
  {
    "id": 77,
    "registrynumber": 13353,
    "tradename": "tricuproxi mz",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 20% + oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 78,
    "registrynumber": 13487,
    "tradename": "citrosol a-imad-2",
    "headline": "productos citrosol s.a.",
    "madeby": "imazalil 0,2% [ew] p/v"
  },
  {
    "id": 79,
    "registrynumber": 13557,
    "tradename": "oviphyt",
    "headline": "comptoir commercial des lubrificants ccl",
    "madeby": "aceite de parafina 81,7% [ec] p/v"
  },
  {
    "id": 80,
    "registrynumber": 13568,
    "tradename": "guzan",
    "headline": "brandt europe, s.l.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 81,
    "registrynumber": 13599,
    "tradename": "procer m-40",
    "headline": "probelte s.a.u.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 82,
    "registrynumber": 13659,
    "tradename": "agroaceite",
    "headline": "life scientific spain s.l.u.",
    "madeby": "aceite de parafina 83% [ec] p/v"
  },
  {
    "id": 83,
    "registrynumber": 13688,
    "tradename": "deltaplan",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 84,
    "registrynumber": 13760,
    "tradename": "elogium",
    "headline": "sipcam inagra, s.a.",
    "madeby": "alquil poliglicol 20% (eter) [sl] p/v"
  },
  {
    "id": 85,
    "registrynumber": 13789,
    "tradename": "dithane m 45",
    "headline": "indofil industries (netherlands) b.v.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 86,
    "registrynumber": 13792,
    "tradename": "curatio",
    "headline": "biofa ag",
    "madeby": "polisulfuro de calcio 38% [dc] p/v"
  },
  {
    "id": 87,
    "registrynumber": 13847,
    "tradename": "ivenol massó",
    "headline": "comercial química massó, s.a.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 88,
    "registrynumber": 13848,
    "tradename": "blafil",
    "headline": "comercial química massó, s.a.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 89,
    "registrynumber": 13944,
    "tradename": "belpron f-50",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 50% [sc] p/v"
  },
  {
    "id": 90,
    "registrynumber": 13950,
    "tradename": "mcpa dimetilamina 40",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal amina) [sl] p/v"
  },
  {
    "id": 91,
    "registrynumber": 13964,
    "tradename": "caldo bordeles valles blue",
    "headline": "iqv agro españa, s.l.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 92,
    "registrynumber": 14015,
    "tradename": "cargoluq",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 93,
    "registrynumber": 14113,
    "tradename": "captazel wg",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "captan 80% [wg] p/p"
  },
  {
    "id": 94,
    "registrynumber": 14129,
    "tradename": "herbicruz lino 400 ls",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal amina) [sl] p/v"
  },
  {
    "id": 95,
    "registrynumber": 14132,
    "tradename": "diconox",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 96,
    "registrynumber": 14331,
    "tradename": "folperan",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 50% [sc] p/v"
  },
  {
    "id": 97,
    "registrynumber": 14347,
    "tradename": "u-46 m fluid 40",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal amina) [sl] p/v"
  },
  {
    "id": 98,
    "registrynumber": 14372,
    "tradename": "mojante adherente",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "alcohol polivinilico 30% + dodecilbenceno sulfonato amonico (ddsa) 20% [ec] p/v"
  },
  {
    "id": 99,
    "registrynumber": 14411,
    "tradename": "limagram-i",
    "headline": "sipcam inagra, s.a.",
    "madeby": "metaldehido 3% (adicionado de colorante) [rb] p/p"
  },
  {
    "id": 100,
    "registrynumber": 14413,
    "tradename": "hermenon extra",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 50% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 101,
    "registrynumber": 14470,
    "tradename": "cargol-mat",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 102,
    "registrynumber": 14527,
    "tradename": "rass 40 sl",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 103,
    "registrynumber": 14534,
    "tradename": "zz-cuprocol",
    "headline": "syngenta españa, s.a.",
    "madeby": "oxicloruro de cobre 70% (expr. en cu) [sc] p/v"
  },
  {
    "id": 104,
    "registrynumber": 14578,
    "tradename": "clorturex flo",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clortoluron 50% [sc] p/v"
  },
  {
    "id": 105,
    "registrynumber": 14594,
    "tradename": "u-46 sp fluid",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 106,
    "registrynumber": 14612,
    "tradename": "oxicoop 50",
    "headline": "iqv agro españa, s.l.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 107,
    "registrynumber": 14617,
    "tradename": "corben",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 108,
    "registrynumber": 14620,
    "tradename": "agroaceite blanco",
    "headline": "life scientific spain s.l.u.",
    "madeby": "aceite de parafina 65,4% [ew] p/v"
  },
  {
    "id": 109,
    "registrynumber": 14634,
    "tradename": "proteinas hidrolizadas life",
    "headline": "spachem, s.l.",
    "madeby": "proteínas hidrolizadas 30% [sl] p/v"
  },
  {
    "id": 110,
    "registrynumber": 14754,
    "tradename": "belpron 98,5",
    "headline": "probelte s.a.u.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 111,
    "registrynumber": 14765,
    "tradename": "terrazole",
    "headline": "arysta lifescience registrations great britain ltd.",
    "madeby": "etridiazol 48% [ec] p/v"
  },
  {
    "id": 112,
    "registrynumber": 14769,
    "tradename": "vapor-gard",
    "headline": "agrichem, s.a.",
    "madeby": "dimenteno 96% [ec] p/v"
  },
  {
    "id": 113,
    "registrynumber": 14823,
    "tradename": "cupertine super",
    "headline": "iqv agro españa, s.l.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 114,
    "registrynumber": 14826,
    "tradename": "frut hormon concentrado",
    "headline": "l. gobbi s.r.l.",
    "madeby": "ana 8,4% [sl] p/v"
  },
  {
    "id": 115,
    "registrynumber": 14904,
    "tradename": "malvin 80 wg",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "captan 80% [wg] p/p"
  },
  {
    "id": 116,
    "registrynumber": 14923,
    "tradename": "royal mh no brotes",
    "headline": "arysta lifescience registrations great britain ltd.",
    "madeby": "hidrazida maleica 18,65% [sl] p/v"
  },
  {
    "id": 117,
    "registrynumber": 14945,
    "tradename": "ahm/mcpa dma70",
    "headline": "nufarm uk limited (wyke-uk)",
    "madeby": "mcpa 75% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 118,
    "registrynumber": 14952,
    "tradename": "giberkey",
    "headline": "aifar s.p.a.",
    "madeby": "acido giberelico 10% (1 g/tableta) [st] p/p"
  },
  {
    "id": 119,
    "registrynumber": 14954,
    "tradename": "agrosul micronizado",
    "headline": "life scientific spain s.l.u.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 120,
    "registrynumber": 14962,
    "tradename": "emecepea 40 k",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 121,
    "registrynumber": 14976,
    "tradename": "agrosul oxidante",
    "headline": "life scientific spain s.l.u.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 122,
    "registrynumber": 15002,
    "tradename": "mojante lainco",
    "headline": "lainco, s.a.",
    "madeby": "mojante no ionico 20% [sl] p/v"
  },
  {
    "id": 123,
    "registrynumber": 15027,
    "tradename": "afrosan mz-8",
    "headline": "industrias afrasa, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 124,
    "registrynumber": 15041,
    "tradename": "foamex",
    "headline": "cia. iberica brogdex, s. a.",
    "madeby": "2-fenilfenol 13% (expr. en opp) [sl] p/v"
  },
  {
    "id": 125,
    "registrynumber": 15049,
    "tradename": "previcur n",
    "headline": "bayer cropscience, s.l.",
    "madeby": "propamocarb 60,5% (clorhidrato) [sl] p/v"
  },
  {
    "id": 126,
    "registrynumber": 15093,
    "tradename": "ahm/mcpa k40",
    "headline": "nufarm uk limited (wyke-uk)",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 127,
    "registrynumber": 15118,
    "tradename": "herbidens",
    "headline": "nufarm uk limited (wyke-uk)",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 128,
    "registrynumber": 15139,
    "tradename": "semefil tab",
    "headline": "nufarm españa, s.a.",
    "madeby": "acido giberelico 20% [st] p/p"
  },
  {
    "id": 129,
    "registrynumber": 15150,
    "tradename": "pix",
    "headline": "basf española s.l.u.",
    "madeby": "mepicuat 3,8% (cloruro) [sl] p/v"
  },
  {
    "id": 130,
    "registrynumber": 15173,
    "tradename": "citrol-ina",
    "headline": "sipcam iberia s.l.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 131,
    "registrynumber": 15188,
    "tradename": "multi-us",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "cera montana 20% [ew] p/v"
  },
  {
    "id": 132,
    "registrynumber": 15228,
    "tradename": "giber fruit liquido",
    "headline": "nufarm españa, s.a.",
    "madeby": "acido giberelico 2% [sl] p/v"
  },
  {
    "id": 133,
    "registrynumber": 15292,
    "tradename": "quimazufre 80 wg",
    "headline": "agrostulln gmbh",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 134,
    "registrynumber": 15306,
    "tradename": "rimitrap",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "goma sintetica 100% (placa de plástico engomada) [xx] p/p"
  },
  {
    "id": 135,
    "registrynumber": 15314,
    "tradename": "cuprafor 50",
    "headline": "alintra, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 136,
    "registrynumber": 15319,
    "tradename": "citrosol a imad 3",
    "headline": "productos citrosol s.a.",
    "madeby": "imazalil 0,3% [ew] p/v"
  },
  {
    "id": 137,
    "registrynumber": 15325,
    "tradename": "sencor liquid",
    "headline": "bayer cropscience, s.l.",
    "madeby": "metribuzina 60% [sc] p/v"
  },
  {
    "id": 138,
    "registrynumber": 15363,
    "tradename": "nufozebe",
    "headline": "upl iberia, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 139,
    "registrynumber": 15387,
    "tradename": "vydate 10 l",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "oxamilo 10% [sl] p/v"
  },
  {
    "id": 140,
    "registrynumber": 15432,
    "tradename": "mcpa 40 valles",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 141,
    "registrynumber": 15442,
    "tradename": "clortoluron 50 an",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clortoluron 50% [sc] p/v"
  },
  {
    "id": 142,
    "registrynumber": 15454,
    "tradename": "cottonex 50 sc",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "fluometuron 50% [sc] p/v"
  },
  {
    "id": 143,
    "registrynumber": 15457,
    "tradename": "deccozil s-7,5",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "imazalil 7,5% (sulfato) [sl] p/v"
  },
  {
    "id": 144,
    "registrynumber": 15465,
    "tradename": "b nine",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "daminozida 85% [sg] p/p"
  },
  {
    "id": 145,
    "registrynumber": 15500,
    "tradename": "crecegen minor",
    "headline": "nufarm españa, s.a.",
    "madeby": "acido giberelico 10% [st] p/p"
  },
  {
    "id": 146,
    "registrynumber": 15524,
    "tradename": "agrocobre 50 wp azul",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 147,
    "registrynumber": 15543,
    "tradename": "oxicoop 50 azul premium",
    "headline": "iqv agro españa, s.l.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 148,
    "registrynumber": 15544,
    "tradename": "semefil",
    "headline": "nufarm españa, s.a.",
    "madeby": "acido giberelico 10% [st] p/p"
  },
  {
    "id": 149,
    "registrynumber": 15582,
    "tradename": "lontrel super",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "clopiralida 42,5% (sal amina) [sl] p/v"
  },
  {
    "id": 150,
    "registrynumber": 15608,
    "tradename": "foamer",
    "headline": "fomesa fruitech s.l.",
    "madeby": "2-fenilfenol 13% (expr. en opp) [sl] p/v"
  },
  {
    "id": 151,
    "registrynumber": 15650,
    "tradename": "waterwax-2p",
    "headline": "fomesa fruitech s.l.",
    "madeby": "2-fenilfenol 0,25% [ew] p/v"
  },
  {
    "id": 152,
    "registrynumber": 15715,
    "tradename": "semefil 20 sl",
    "headline": "nufarm españa, s.a.",
    "madeby": "acido giberelico 2% [sl] p/v"
  },
  {
    "id": 153,
    "registrynumber": 15757,
    "tradename": "laikuaj",
    "headline": "aifar s.p.a.",
    "madeby": "acido giberelico 2% [sl] p/v"
  },
  {
    "id": 154,
    "registrynumber": 15796,
    "tradename": "clemenfol",
    "headline": "nufarm españa, s.a.",
    "madeby": "acido giberelico 2% [sl] p/v"
  },
  {
    "id": 155,
    "registrynumber": 15814,
    "tradename": "fusilade max",
    "headline": "nufarm españa, s.a.",
    "madeby": "fluazifop-p-butil 12,5% [ec] p/v"
  },
  {
    "id": 156,
    "registrynumber": 15834,
    "tradename": "waterwax 3i",
    "headline": "fomesa fruitech s.l.",
    "madeby": "imazalil 0,3% [ew] p/v"
  },
  {
    "id": 157,
    "registrynumber": 15836,
    "tradename": "waterwax 2i",
    "headline": "fomesa fruitech s.l.",
    "madeby": "imazalil 0,2% [ew] p/v"
  },
  {
    "id": 158,
    "registrynumber": 15843,
    "tradename": "clar-frut",
    "headline": "nufarm españa, s.a.",
    "madeby": "ana 1% [sp] p/p"
  },
  {
    "id": 159,
    "registrynumber": 15903,
    "tradename": "phostoxin tablet",
    "headline": "detia freyberg gmbh",
    "madeby": "fosfuro de aluminio 56% [ge] p/p"
  },
  {
    "id": 160,
    "registrynumber": 15905,
    "tradename": "policar mz",
    "headline": "upl iberia, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 161,
    "registrynumber": 15907,
    "tradename": "aliette wg",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 162,
    "registrynumber": 15930,
    "tradename": "oromanzi",
    "headline": "quimicas oro, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 163,
    "registrynumber": 15954,
    "tradename": "foltene",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 50% [sc] p/v"
  },
  {
    "id": 164,
    "registrynumber": 15960,
    "tradename": "cuprochem-m",
    "headline": "biogroot, s.a.u",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 165,
    "registrynumber": 15961,
    "tradename": "belpron",
    "headline": "indofil industries (netherlands) b.v.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 166,
    "registrynumber": 15996,
    "tradename": "orthocide",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "captan 80% [wg] p/p"
  },
  {
    "id": 167,
    "registrynumber": 16071,
    "tradename": "citrol",
    "headline": "denagro, s.l.u.",
    "madeby": "aceite de parafina 65,4% [ew] p/v"
  },
  {
    "id": 168,
    "registrynumber": 16092,
    "tradename": "freshstart clean op",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "2-fenilfenol 13% (expr. en opp) [sl] p/v"
  },
  {
    "id": 169,
    "registrynumber": 16102,
    "tradename": "arabelex l",
    "headline": "aifar s.p.a.",
    "madeby": "acido giberelico 2% [sl] p/v"
  },
  {
    "id": 170,
    "registrynumber": 16103,
    "tradename": "fruitel",
    "headline": "bayer cropscience, s.l.",
    "madeby": "etefon 48% [sl] p/v"
  },
  {
    "id": 171,
    "registrynumber": 16124,
    "tradename": "brillaqua-2iz",
    "headline": "fomesa fruitech s.l.",
    "madeby": "imazalil 0,2% [ew] p/v"
  },
  {
    "id": 172,
    "registrynumber": 16170,
    "tradename": "clerthin",
    "headline": "nufarm españa, s.a.",
    "madeby": "ana amida 8,2% [wp] p/p"
  },
  {
    "id": 173,
    "registrynumber": 16178,
    "tradename": "azufre micronizado agrofit",
    "headline": "life scientific spain s.l.u.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 174,
    "registrynumber": 16192,
    "tradename": "ovipron",
    "headline": "formuladores agroquimicos extremeños, s.l.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 175,
    "registrynumber": 16232,
    "tradename": "citrashine n-imz",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "imazalil 0,2% [ew] p/v"
  },
  {
    "id": 176,
    "registrynumber": 16233,
    "tradename": "citrashine n-pe",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "2-fenilfenol 0,25% [ew] p/v"
  },
  {
    "id": 177,
    "registrynumber": 16245,
    "tradename": "mojante agrofit",
    "headline": "life scientific spain s.l.u.",
    "madeby": "alquil poliglicol 20% (eter) [sl] p/v"
  },
  {
    "id": 178,
    "registrynumber": 16246,
    "tradename": "aceite emulsionable agrofit",
    "headline": "life scientific spain s.l.u.",
    "madeby": "aceite de parafina 65,4% [ew] p/v"
  },
  {
    "id": 179,
    "registrynumber": 16252,
    "tradename": "spasor plus",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 36% (sal potásica) [sl] p/v"
  },
  {
    "id": 180,
    "registrynumber": 16259,
    "tradename": "azufre micronizado 80",
    "headline": "field protection, s.l.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 181,
    "registrynumber": 16275,
    "tradename": "bordo coop azul",
    "headline": "iqv agro españa, s.l.",
    "madeby": "sulfato cuprocalcico 20% [wp] p/p"
  },
  {
    "id": 182,
    "registrynumber": 16285,
    "tradename": "humectol",
    "headline": "industrias afrasa, s.a.",
    "madeby": "mojante no ionico 20% [sl] p/v"
  },
  {
    "id": 183,
    "registrynumber": 16316,
    "tradename": "giberkey liquido",
    "headline": "aifar s.p.a.",
    "madeby": "acido giberelico 2% [sl] p/v"
  },
  {
    "id": 184,
    "registrynumber": 16331,
    "tradename": "phostoxin-mg placas",
    "headline": "detia freyberg gmbh",
    "madeby": "fosfuro de magnesio 56% (117 g/tableta) [ft] p/p"
  },
  {
    "id": 185,
    "registrynumber": 16356,
    "tradename": "heliosufre",
    "headline": "action pin",
    "madeby": "azufre 72% [sc] p/v"
  },
  {
    "id": 186,
    "registrynumber": 16394,
    "tradename": "fengib",
    "headline": "l. gobbi s.r.l.",
    "madeby": "acido giberelico 0,5% + mcpa 1% (ester tioetilico) [ec] p/v"
  },
  {
    "id": 187,
    "registrynumber": 16395,
    "tradename": "inacop l",
    "headline": "sipcam iberia s.l.",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 188,
    "registrynumber": 16412,
    "tradename": "oxicloruro de cobre 50% p.m.",
    "headline": "iqv agro españa, s.l.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 189,
    "registrynumber": 16414,
    "tradename": "rizolex",
    "headline": "kenogard, s.a.",
    "madeby": "metil tolclofos 50% [wp] p/p"
  },
  {
    "id": 190,
    "registrynumber": 16417,
    "tradename": "mavrik",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "tau-fluvalinato 24% [ew] p/v"
  },
  {
    "id": 191,
    "registrynumber": 16419,
    "tradename": "sufrevit",
    "headline": "sipcam iberia s.l.",
    "madeby": "azufre 80% [sc] p/v"
  },
  {
    "id": 192,
    "registrynumber": 16435,
    "tradename": "bordo coop",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 193,
    "registrynumber": 16436,
    "tradename": "cobreline",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 194,
    "registrynumber": 16586,
    "tradename": "riozeb wp",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 195,
    "registrynumber": 16587,
    "tradename": "riozeb cobre",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 8% + sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 196,
    "registrynumber": 16633,
    "tradename": "topas 10 ec",
    "headline": "syngenta españa, s.a.",
    "madeby": "penconazol 10% [ec] p/v"
  },
  {
    "id": 197,
    "registrynumber": 16636,
    "tradename": "foncar 80 pm",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 198,
    "registrynumber": 16647,
    "tradename": "devrinol 45-f",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "napropamida 45% [sc] p/v"
  },
  {
    "id": 199,
    "registrynumber": 16678,
    "tradename": "curzate-m",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "cimoxanilo 4% + mancozeb 40% [wp] p/p"
  },
  {
    "id": 200,
    "registrynumber": 16681,
    "tradename": "micene-l",
    "headline": "sipcam inagra, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 201,
    "registrynumber": 16714,
    "tradename": "dorado p",
    "headline": "syngenta españa, s.a.",
    "madeby": "penconazol 10% [ec] p/v"
  },
  {
    "id": 202,
    "registrynumber": 16741,
    "tradename": "erturon",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "clortoluron 50% [sc] p/v"
  },
  {
    "id": 203,
    "registrynumber": 16784,
    "tradename": "vertimec",
    "headline": "syngenta españa, s.a.",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 204,
    "registrynumber": 16786,
    "tradename": "k-obiol ulv6",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 0,6% ( ) [ul] p/v"
  },
  {
    "id": 205,
    "registrynumber": 16844,
    "tradename": "primmasim",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 206,
    "registrynumber": 16855,
    "tradename": "impact",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "flutriafol 12,5% [sc] p/v"
  },
  {
    "id": 207,
    "registrynumber": 16872,
    "tradename": "microcrops flow",
    "headline": "field protection, s.l.",
    "madeby": "azufre 80% [sc] p/v"
  },
  {
    "id": 208,
    "registrynumber": 16884,
    "tradename": "azufril micro",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "azufre 80% [wp] p/p"
  },
  {
    "id": 209,
    "registrynumber": 16896,
    "tradename": "nurelle-10",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 210,
    "registrynumber": 16908,
    "tradename": "butisan s",
    "headline": "basf española s.l.u.",
    "madeby": "metazacloro 50% [sc] p/v"
  },
  {
    "id": 211,
    "registrynumber": 16931,
    "tradename": "macuprax",
    "headline": "comercial química massó, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 212,
    "registrynumber": 16948,
    "tradename": "roundup ultra plus",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 36% (sal potásica) [sl] p/v"
  },
  {
    "id": 213,
    "registrynumber": 16979,
    "tradename": "phostoxin-mg bolas",
    "headline": "detia freyberg gmbh",
    "madeby": "fosfuro de magnesio 66% (3 g/tableta) [ft] p/p"
  },
  {
    "id": 214,
    "registrynumber": 17021,
    "tradename": "acaristop",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clofentezin 50% [sc] p/v"
  },
  {
    "id": 215,
    "registrynumber": 17031,
    "tradename": "thiormon-10",
    "headline": "aifar s.p.a.",
    "madeby": "acido giberelico 10% (1 g/tableta) [st] p/p"
  },
  {
    "id": 216,
    "registrynumber": 17040,
    "tradename": "fosdan 20-e",
    "headline": "gowan crop protection ltd.",
    "madeby": "fosmet 20% [ec] p/v"
  },
  {
    "id": 217,
    "registrynumber": 17041,
    "tradename": "fosdan 50 pm",
    "headline": "gowan crop protection ltd.",
    "madeby": "fosmet 50% [wp] p/p"
  },
  {
    "id": 218,
    "registrynumber": 17091,
    "tradename": "lamdex extra",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "lambda cihalotrin 2,5% [wg] p/p"
  },
  {
    "id": 219,
    "registrynumber": 17100,
    "tradename": "sherpa 100 ec",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 220,
    "registrynumber": 17118,
    "tradename": "atila",
    "headline": "industrias afrasa, s.a.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 221,
    "registrynumber": 17131,
    "tradename": "cupertine folpet",
    "headline": "iqv agro españa, s.l.",
    "madeby": "folpet 10% + sulfato cuprocalcico 20% (expr. en cu ) [wp] p/p"
  },
  {
    "id": 222,
    "registrynumber": 17158,
    "tradename": "azupec flow",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "azufre 80% [sc] p/v"
  },
  {
    "id": 223,
    "registrynumber": 17195,
    "tradename": "cekuoil-v83",
    "headline": "upl iberia, s.a.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 224,
    "registrynumber": 17200,
    "tradename": "folplan",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "folpet 50% [wp] p/p"
  },
  {
    "id": 225,
    "registrynumber": 17223,
    "tradename": "caldo bordeles rsr",
    "headline": "upl iberia, s.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 226,
    "registrynumber": 17226,
    "tradename": "mcpa 40 k sal",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 227,
    "registrynumber": 17232,
    "tradename": "u-46 dma fluid",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 50% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 228,
    "registrynumber": 17290,
    "tradename": "clorocarb-l",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "captan 47,5% [sc] p/v"
  },
  {
    "id": 229,
    "registrynumber": 17337,
    "tradename": "insegar",
    "headline": "syngenta españa, s.a.",
    "madeby": "fenoxicarb 25% [wg] p/p"
  },
  {
    "id": 230,
    "registrynumber": 17354,
    "tradename": "urotan",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clortoluron 50% [sc] p/v"
  },
  {
    "id": 231,
    "registrynumber": 17410,
    "tradename": "roundup xxi",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 36% (sal isopropilamina) [ul] p/v"
  },
  {
    "id": 232,
    "registrynumber": 17457,
    "tradename": "cupraver 38",
    "headline": "nutesca s.l. (jaén)",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 233,
    "registrynumber": 17502,
    "tradename": "lebron",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "teflutrin 0,5% [gr] p/p"
  },
  {
    "id": 234,
    "registrynumber": 17547,
    "tradename": "sporgon",
    "headline": "basf española s.l.u.",
    "madeby": "procloraz 46% [wp] p/p"
  },
  {
    "id": 235,
    "registrynumber": 17571,
    "tradename": "royal mh-30",
    "headline": "arysta lifescience registrations great britain ltd.",
    "madeby": "hidrazida maleica 18,65% [sl] p/v"
  },
  {
    "id": 236,
    "registrynumber": 17682,
    "tradename": "fecundal 500 ec",
    "headline": "janssen pmp n.v.",
    "madeby": "imazalil 50% [ec] p/v"
  },
  {
    "id": 237,
    "registrynumber": 17705,
    "tradename": "etifix",
    "headline": "nufarm españa, s.a.",
    "madeby": "ana 1% [sp] p/p"
  },
  {
    "id": 238,
    "registrynumber": 17817,
    "tradename": "cyperplan 10 ec",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 239,
    "registrynumber": 17845,
    "tradename": "kerb flo",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "propizamida 40% [sc] p/v"
  },
  {
    "id": 240,
    "registrynumber": 17856,
    "tradename": "starane-20",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "fluroxipir 20% [ec] p/v"
  },
  {
    "id": 241,
    "registrynumber": 17894,
    "tradename": "coteran-fw",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "fluometuron 50% [sc] p/v"
  },
  {
    "id": 242,
    "registrynumber": 17992,
    "tradename": "fulminal-12",
    "headline": "probelte s.a.u.",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 243,
    "registrynumber": 18022,
    "tradename": "tri-base flow",
    "headline": "nufarm españa, s.a.",
    "madeby": "sulfato tribasico de cobre 19% (expr. en cu) [sc] p/v"
  },
  {
    "id": 244,
    "registrynumber": 18025,
    "tradename": "kontar",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 245,
    "registrynumber": 18087,
    "tradename": "auros",
    "headline": "syngenta españa, s.a.",
    "madeby": "prosulfocarb 80% [ec] p/v"
  },
  {
    "id": 246,
    "registrynumber": 18099,
    "tradename": "spasor plus n",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 247,
    "registrynumber": 18102,
    "tradename": "imidan le",
    "headline": "gowan crop protection ltd.",
    "madeby": "fosmet 20% [ec] p/v"
  },
  {
    "id": 248,
    "registrynumber": 18103,
    "tradename": "imidan wp",
    "headline": "gowan crop protection ltd.",
    "madeby": "fosmet 50% [wp] p/p"
  },
  {
    "id": 249,
    "registrynumber": 18135,
    "tradename": "fecundal s-7,5",
    "headline": "janssen pmp n.v.",
    "madeby": "imazalil 7,5% (sulfato) [sl] p/v"
  },
  {
    "id": 250,
    "registrynumber": 18173,
    "tradename": "ortho phaltan flow",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 50% [sc] p/v"
  },
  {
    "id": 251,
    "registrynumber": 18188,
    "tradename": "capteran flow",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "captan 47,5% [sc] p/v"
  },
  {
    "id": 252,
    "registrynumber": 18195,
    "tradename": "antiespumante lainco",
    "headline": "lainco, s.a.",
    "madeby": "polixilosano dimetilico 35% [ec] p/v"
  },
  {
    "id": 253,
    "registrynumber": 18196,
    "tradename": "vondozeb-d 80 pm",
    "headline": "upl iberia, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 254,
    "registrynumber": 18210,
    "tradename": "promalin",
    "headline": "kenogard, s.a.",
    "madeby": "6-benziladenina 1,9% + giberelinas ga4/ga7 1,9% [sl] p/v"
  },
  {
    "id": 255,
    "registrynumber": 18216,
    "tradename": "sumicidin supra",
    "headline": "sumitomo chemical agro europe s.a.s.",
    "madeby": "esfenvalerato 2,5% [ec] p/v"
  },
  {
    "id": 256,
    "registrynumber": 18220,
    "tradename": "londax 6o df",
    "headline": "upl iberia, s.a.",
    "madeby": "bensulfuron-metil 60% [wg] p/p"
  },
  {
    "id": 257,
    "registrynumber": 18238,
    "tradename": "tempo flow",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 50% [sc] p/v"
  },
  {
    "id": 258,
    "registrynumber": 18258,
    "tradename": "galery",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "isoxaben 12,5% [sc] p/v"
  },
  {
    "id": 259,
    "registrynumber": 18285,
    "tradename": "sumipower 2,5 ec",
    "headline": "kenogard, s.a.",
    "madeby": "esfenvalerato 2,5% [ec] p/v"
  },
  {
    "id": 260,
    "registrynumber": 18315,
    "tradename": "sulfapron-l",
    "headline": "probelte s.a.u.",
    "madeby": "azufre 72% [sc] p/v"
  },
  {
    "id": 261,
    "registrynumber": 18316,
    "tradename": "cibelte 10 le",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 262,
    "registrynumber": 18332,
    "tradename": "dithane dg-neotec",
    "headline": "indofil industries (netherlands) b.v.",
    "madeby": "mancozeb 75% [wg] p/p"
  },
  {
    "id": 263,
    "registrynumber": 18333,
    "tradename": "cepsul 90",
    "headline": "cepsa (cia. española petroleos), s.a.",
    "madeby": "azufre 90% [dp] p/p"
  },
  {
    "id": 264,
    "registrynumber": 18334,
    "tradename": "azufega oxidante",
    "headline": "productos a.j.f., s.l.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 265,
    "registrynumber": 18335,
    "tradename": "cepsul 80",
    "headline": "cepsa (cia. española petroleos), s.a.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 266,
    "registrynumber": 18336,
    "tradename": "cepsul mojable",
    "headline": "cepsa (cia. española petroleos), s.a.",
    "madeby": "azufre 80% [wp] p/p"
  },
  {
    "id": 267,
    "registrynumber": 18352,
    "tradename": "polyram df",
    "headline": "basf española s.l.u.",
    "madeby": "metiram 70% [wg] p/p"
  },
  {
    "id": 268,
    "registrynumber": 18362,
    "tradename": "britex i",
    "headline": "cia. iberica brogdex, s. a.",
    "madeby": "imazalil 0,2% [ew] p/v"
  },
  {
    "id": 269,
    "registrynumber": 18370,
    "tradename": "afripron la",
    "headline": "biogroot, s.a.u",
    "madeby": "azufre 72% [sc] p/v"
  },
  {
    "id": 270,
    "registrynumber": 18375,
    "tradename": "aviso df",
    "headline": "basf española s.l.u.",
    "madeby": "cimoxanilo 4,8% + metiram 64% [wg] p/p"
  },
  {
    "id": 271,
    "registrynumber": 18393,
    "tradename": "nayades 380",
    "headline": "caf karyon s.l.",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 272,
    "registrynumber": 18406,
    "tradename": "sanagricola 500 wg",
    "headline": "iqv agro españa, s.l.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wg] p/p"
  },
  {
    "id": 273,
    "registrynumber": 18412,
    "tradename": "riozeb",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 274,
    "registrynumber": 18420,
    "tradename": "esteron-60",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "2,4-d acido 60% (2-etil-hexil ester) [ec] p/v"
  },
  {
    "id": 275,
    "registrynumber": 18422,
    "tradename": "cepsul especial",
    "headline": "cepsa (cia. española petroleos), s.a.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 276,
    "registrynumber": 18427,
    "tradename": "trebon",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "etofenprox 28,75% [ec] p/v"
  },
  {
    "id": 277,
    "registrynumber": 18451,
    "tradename": "cepsul oxidante",
    "headline": "cepsa (cia. española petroleos), s.a.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 278,
    "registrynumber": 18489,
    "tradename": "cupra",
    "headline": "lainco, s.a.",
    "madeby": "oxicloruro de cobre 52% (expr. en cu) [sc] p/v"
  },
  {
    "id": 279,
    "registrynumber": 18490,
    "tradename": "quorum",
    "headline": "iqv agro españa, s.l.",
    "madeby": "oxicloruro de cobre 70% [sc] p/v"
  },
  {
    "id": 280,
    "registrynumber": 18498,
    "tradename": "klartan 24 af",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "tau-fluvalinato 24% [ew] p/v"
  },
  {
    "id": 281,
    "registrynumber": 18502,
    "tradename": "moncut 50 wp",
    "headline": "comercial química massó, s.a.",
    "madeby": "flutolanil 50% [wp] p/p"
  },
  {
    "id": 282,
    "registrynumber": 18537,
    "tradename": "citrocil",
    "headline": "productos citrosol s.a.",
    "madeby": "imazalil 7,5% (sulfato) + 2- fenilfenol 10% [ec] p/v"
  },
  {
    "id": 283,
    "registrynumber": 18540,
    "tradename": "zatest",
    "headline": "industrial quimica key, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 284,
    "registrynumber": 18554,
    "tradename": "saditrina ulv micro",
    "headline": "formuladores agroquimicos extremeños, s.l.",
    "madeby": "cipermetrin 0,35% [ul] p/v"
  },
  {
    "id": 285,
    "registrynumber": 18595,
    "tradename": "duplosan super",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 16% (sal amina) + mecoprop-p 13% (sal amina) + diclorprop-p 31% [sl] p/v"
  },
  {
    "id": 286,
    "registrynumber": 18604,
    "tradename": "selene",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 287,
    "registrynumber": 18632,
    "tradename": "vondozeb gd",
    "headline": "upl iberia, s.a.",
    "madeby": "mancozeb 75% [wg] p/p"
  },
  {
    "id": 288,
    "registrynumber": 18640,
    "tradename": "folicur 25 ew",
    "headline": "bayer cropscience, s.l.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 289,
    "registrynumber": 18670,
    "tradename": "eminent",
    "headline": "isagro s.p.a.",
    "madeby": "tetraconazol 10% [ec] p/v"
  },
  {
    "id": 290,
    "registrynumber": 18671,
    "tradename": "saditrina e. super",
    "headline": "formuladores agroquimicos extremeños, s.l.",
    "madeby": "cipermetrin 0,5% [dp] p/p"
  },
  {
    "id": 291,
    "registrynumber": 18672,
    "tradename": "saditrina e",
    "headline": "formuladores agroquimicos extremeños, s.l.",
    "madeby": "cipermetrin 0,033% [dp] p/p"
  },
  {
    "id": 292,
    "registrynumber": 18682,
    "tradename": "foray 48 b",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa abts-351) 13,9% (10.600 clu/mg) [sc] p/v"
  },
  {
    "id": 293,
    "registrynumber": 18693,
    "tradename": "herpan-40",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal amina) [sl] p/v"
  },
  {
    "id": 294,
    "registrynumber": 18720,
    "tradename": "cipert 10 le",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 295,
    "registrynumber": 18735,
    "tradename": "biopower",
    "headline": "bayer cropscience, s.l.",
    "madeby": "alquiletersulfato-sodico 27,65% [sl] p/v"
  },
  {
    "id": 296,
    "registrynumber": 18748,
    "tradename": "cekumetrin 10 ec",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 297,
    "registrynumber": 18760,
    "tradename": "dicarzol",
    "headline": "gowan crop protection ltd.",
    "madeby": "formetanato 50% [sp] p/p"
  },
  {
    "id": 298,
    "registrynumber": 18766,
    "tradename": "lexor-25",
    "headline": "syngenta españa, s.a.",
    "madeby": "difenoconazol 25% [ec] p/v"
  },
  {
    "id": 299,
    "registrynumber": 18767,
    "tradename": "score 25 ec",
    "headline": "syngenta españa, s.a.",
    "madeby": "difenoconazol 25% [ec] p/v"
  },
  {
    "id": 300,
    "registrynumber": 18795,
    "tradename": "fesil wg",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 301,
    "registrynumber": 18840,
    "tradename": "alcocobre-50",
    "headline": "iqv italia s.r.l.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 302,
    "registrynumber": 18859,
    "tradename": "linoxone-n",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 303,
    "registrynumber": 18874,
    "tradename": "rokenyl 50",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "isoxaben 50% [sc] p/v"
  },
  {
    "id": 304,
    "registrynumber": 18877,
    "tradename": "select",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "cletodim 24% [ec] p/v"
  },
  {
    "id": 305,
    "registrynumber": 18885,
    "tradename": "quickphos-t",
    "headline": "upl iberia, s.a.",
    "madeby": "fosfuro de aluminio 56% (3 g/tableta) [ge] p/p"
  },
  {
    "id": 306,
    "registrynumber": 18915,
    "tradename": "fruitgard 80 al",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 307,
    "registrynumber": 18919,
    "tradename": "ossirame 38 sc",
    "headline": "manica cobre s.l.",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 308,
    "registrynumber": 18926,
    "tradename": "clementgros plus",
    "headline": "nufarm españa, s.a.",
    "madeby": "diclorprop-p 2,5% (ester 2-etilhexil) [ec] p/v"
  },
  {
    "id": 309,
    "registrynumber": 18939,
    "tradename": "focus ultra",
    "headline": "basf española s.l.u.",
    "madeby": "cicloxidim 10% [ec] p/v"
  },
  {
    "id": 310,
    "registrynumber": 18978,
    "tradename": "cupertine m",
    "headline": "iqv agro españa, s.l.",
    "madeby": "mancozeb 8% + sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 311,
    "registrynumber": 18984,
    "tradename": "mikal-plus",
    "headline": "bayer cropscience, s.l.",
    "madeby": "cimoxanilo 4% + folpet 25% + fosetil-al 50% [wg] p/p"
  },
  {
    "id": 312,
    "registrynumber": 18992,
    "tradename": "kumulus df",
    "headline": "basf española s.l.u.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 313,
    "registrynumber": 19005,
    "tradename": "caldo bordeles iqv",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "sulfato cuprocalcico 20% [wp] p/p"
  },
  {
    "id": 314,
    "registrynumber": 19029,
    "tradename": "mancotan 80 pm",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 315,
    "registrynumber": 19032,
    "tradename": "cekutoluron 50 flow",
    "headline": "nufarm españa, s.a.",
    "madeby": "clortoluron 50% [sc] p/v"
  },
  {
    "id": 316,
    "registrynumber": 19064,
    "tradename": "bordo micro",
    "headline": "iqv agro españa, s.l.",
    "madeby": "sulfato cuprocalcico 20% (expr.en cu) [wg] p/p"
  },
  {
    "id": 317,
    "registrynumber": 19124,
    "tradename": "flordimex",
    "headline": "bayer cropscience, s.l.",
    "madeby": "etefon 48% [sl] p/v"
  },
  {
    "id": 318,
    "registrynumber": 19131,
    "tradename": "challenge",
    "headline": "bayer cropscience, s.l.",
    "madeby": "aclonifen 60% [sc] p/v"
  },
  {
    "id": 319,
    "registrynumber": 19140,
    "tradename": "agil",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "propaquizafop 10% [ec] p/v"
  },
  {
    "id": 320,
    "registrynumber": 19154,
    "tradename": "master d",
    "headline": "nissan chemical europe s.a.s.",
    "madeby": "quizalofop-p-etil 5% [ec] p/v"
  },
  {
    "id": 321,
    "registrynumber": 19156,
    "tradename": "sonora",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "procloraz 45% [ec] p/v"
  },
  {
    "id": 322,
    "registrynumber": 19158,
    "tradename": "foray 76b",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa abts-351) 20,65% (16,7 millones de clu/g) [sc] p/v"
  },
  {
    "id": 323,
    "registrynumber": 19159,
    "tradename": "delfin",
    "headline": "mitsui agriscience international s.a./n.v.",
    "madeby": "bacillus thuringiensis kurstaki 32% (kurstaki 30.36, cepa sa-11; 32 mill. de u.i./g) (esp) [wg] p/p"
  },
  {
    "id": 324,
    "registrynumber": 19161,
    "tradename": "cubelte",
    "headline": "probelte s.a.u.",
    "madeby": "oxicloruro de cobre 52% (expr. en cu) [sc] p/v"
  },
  {
    "id": 325,
    "registrynumber": 19186,
    "tradename": "titus",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "rimsulfuron 25% [wg] p/p"
  },
  {
    "id": 326,
    "registrynumber": 19207,
    "tradename": "tomcato",
    "headline": "probelte s.a.u.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 327,
    "registrynumber": 19226,
    "tradename": "gnatrol sc",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis israelensis 12,3% cepa am65-52 (1,2 millones de u.l/g) [sc] p/v"
  },
  {
    "id": 328,
    "registrynumber": 19232,
    "tradename": "cuproxi flo",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "oxicloruro de cobre 52% (expr. en cu) [sc] p/v"
  },
  {
    "id": 329,
    "registrynumber": 19241,
    "tradename": "flash um",
    "headline": "sipcam inagra, s.a.",
    "madeby": "fenpiroximato 5,12% [sc] p/v"
  },
  {
    "id": 330,
    "registrynumber": 19254,
    "tradename": "magister-10",
    "headline": "gowan comércio internacional e servicios ltd.",
    "madeby": "fenazaquin 10% [ec] p/v"
  },
  {
    "id": 331,
    "registrynumber": 19255,
    "tradename": "magister flow",
    "headline": "gowan crop protection ltd.",
    "madeby": "fenazaquin 20% [sc] p/v"
  },
  {
    "id": 332,
    "registrynumber": 19257,
    "tradename": "hf-calibra",
    "headline": "sipcam inagra, s.a.",
    "madeby": "mcpa 2% (ester tioetilico [sl] p/v"
  },
  {
    "id": 333,
    "registrynumber": 19272,
    "tradename": "cuprodithane",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "mancozeb 8% + sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 334,
    "registrynumber": 19277,
    "tradename": "labijardin cargol",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 335,
    "registrynumber": 19285,
    "tradename": "sanagricola-m",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 336,
    "registrynumber": 19292,
    "tradename": "cythrin 100 ec",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 337,
    "registrynumber": 19304,
    "tradename": "tanke",
    "headline": "industrias afrasa, s.a.",
    "madeby": "fenmedifam 16% [ec] p/v"
  },
  {
    "id": 338,
    "registrynumber": 19329,
    "tradename": "chlortosint linz",
    "headline": "nufarm españa, s.a.",
    "madeby": "clortoluron 50% [sc] p/v"
  },
  {
    "id": 339,
    "registrynumber": 19411,
    "tradename": "forum",
    "headline": "basf española s.l.u.",
    "madeby": "dimetomorf 15% [dc] p/v"
  },
  {
    "id": 340,
    "registrynumber": 19414,
    "tradename": "elite-m",
    "headline": "isk biosciences europe n.v.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 341,
    "registrynumber": 19418,
    "tradename": "buggy bax",
    "headline": "sipcam inagra, s.a.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 342,
    "registrynumber": 19424,
    "tradename": "chlortosint",
    "headline": "nufarm españa, s.a.",
    "madeby": "clortoluron 50% [sc] p/v"
  },
  {
    "id": 343,
    "registrynumber": 19425,
    "tradename": "cuproxat 34,5",
    "headline": "nufarm españa, s.a.",
    "madeby": "sulfato tribasico de cobre 19% (expr. en cu) [sc] p/v"
  },
  {
    "id": 344,
    "registrynumber": 19430,
    "tradename": "turex",
    "headline": "mitsui agriscience international s.a./n.v.",
    "madeby": "bacillus thuringiensis aizawai (cepa gc-91) 50 % (3,05 x 10^13 esporas/kg) (wp) p/p"
  },
  {
    "id": 345,
    "registrynumber": 19454,
    "tradename": "bond",
    "headline": "de sangosse s.a.s.",
    "madeby": "latex sintetico 45,45% + mojante no ionico 10,1% [ec] p/v"
  },
  {
    "id": 346,
    "registrynumber": 19497,
    "tradename": "codimur-m",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 347,
    "registrynumber": 19520,
    "tradename": "herbimur mcpa",
    "headline": "nufarm uk limited (wyke-uk)",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 348,
    "registrynumber": 19522,
    "tradename": "caldo bordeles quimur",
    "headline": "iqv agro españa, s.l.",
    "madeby": "sulfato cuprocalcico 20% [wp] p/p"
  },
  {
    "id": 349,
    "registrynumber": 19525,
    "tradename": "covinex forte mz",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "mancozeb 15% + oxicloruro de cobre 10% (expr. en cu) + sulfato cuprocalcico 10% [wp] p/p"
  },
  {
    "id": 350,
    "registrynumber": 19529,
    "tradename": "azufre quimur pm",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 351,
    "registrynumber": 19534,
    "tradename": "famolins 80%",
    "headline": "julio cabrero y cia, s.l.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 352,
    "registrynumber": 19548,
    "tradename": "topik 24 ec",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clodinafop-propargil 24% [ec] p/v"
  },
  {
    "id": 353,
    "registrynumber": 19549,
    "tradename": "accresto",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clodinafop-propargil 24% [ec] p/v"
  },
  {
    "id": 354,
    "registrynumber": 19553,
    "tradename": "manefor zn 75 wg",
    "headline": "indofil industries (netherlands) b.v.",
    "madeby": "mancozeb 75% [wg] p/p"
  },
  {
    "id": 355,
    "registrynumber": 19574,
    "tradename": "citrosol 500",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "imazalil 50% [ec] p/v"
  },
  {
    "id": 356,
    "registrynumber": 19580,
    "tradename": "betosip se",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fenmedifam 16% [se] p/v"
  },
  {
    "id": 357,
    "registrynumber": 19588,
    "tradename": "shirudo",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "tebufenpirad 20% [wp] p/p"
  },
  {
    "id": 358,
    "registrynumber": 19603,
    "tradename": "scala",
    "headline": "basf española s.l.u.",
    "madeby": "pirimetanil 40% [sc] p/v"
  },
  {
    "id": 359,
    "registrynumber": 19613,
    "tradename": "rizolex 50 wp",
    "headline": "kenogard, s.a.",
    "madeby": "metil tolclofos 50% [wp] p/p"
  },
  {
    "id": 360,
    "registrynumber": 19616,
    "tradename": "poltiglia 20 wp",
    "headline": "manica, spa",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 361,
    "registrynumber": 19618,
    "tradename": "ralbi-10",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 362,
    "registrynumber": 19631,
    "tradename": "agrobordeles azul",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "sulfato cuprocalcico 20% [wp] p/p"
  },
  {
    "id": 363,
    "registrynumber": 19636,
    "tradename": "quimurel 40",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "clormequat 40% [sl] p/v"
  },
  {
    "id": 364,
    "registrynumber": 19658,
    "tradename": "zarpa",
    "headline": "basf española s.l.u.",
    "madeby": "diflufenican 4% + glifosato 16% (sal isopropilamina) [sc] p/v"
  },
  {
    "id": 365,
    "registrynumber": 19660,
    "tradename": "azatin",
    "headline": "sipcam inagra, s.a.",
    "madeby": "azadiractin 2,6% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 366,
    "registrynumber": 19675,
    "tradename": "juvinal 10 ec",
    "headline": "kenogard, s.a.",
    "madeby": "piriproxifen 10% [ec] p/v"
  },
  {
    "id": 367,
    "registrynumber": 19684,
    "tradename": "maxim",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "triclopir 10% (1 g/tableta) [tb] p/p"
  },
  {
    "id": 368,
    "registrynumber": 19692,
    "tradename": "xentari gd",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis aizawai (cepa abts-1857, 540 g/kg) 54% (15 millones de clu/g) [wg] p/p"
  },
  {
    "id": 369,
    "registrynumber": 19709,
    "tradename": "funguran-oh 50 pm",
    "headline": "spiess-urania chemicals gmbh",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 370,
    "registrynumber": 19729,
    "tradename": "manzivex",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 371,
    "registrynumber": 19732,
    "tradename": "agromojante",
    "headline": "life scientific spain s.l.u.",
    "madeby": "alquil poliglicol 20% (eter) [sl] p/v"
  },
  {
    "id": 372,
    "registrynumber": 19741,
    "tradename": "delan-wg",
    "headline": "basf española s.l.u.",
    "madeby": "ditianona 70% [wg] p/p"
  },
  {
    "id": 373,
    "registrynumber": 19745,
    "tradename": "armetil 50",
    "headline": "iqv agro españa, s.l.",
    "madeby": "folpet 40% + metalaxil 10% [wp] p/p"
  },
  {
    "id": 374,
    "registrynumber": 19764,
    "tradename": "atominal 10 ec",
    "headline": "sumitomo chemical agro europe s.a.s.",
    "madeby": "piriproxifen 10% [ec] p/v"
  },
  {
    "id": 375,
    "registrynumber": 19766,
    "tradename": "harpo-z",
    "headline": "bayer cropscience, s.l.",
    "madeby": "clortoluron 40% + diflufenican 2,5% [sc] p/v"
  },
  {
    "id": 376,
    "registrynumber": 19797,
    "tradename": "octagon",
    "headline": "basf española s.l.u.",
    "madeby": "procloraz 45% [ew] p/v"
  },
  {
    "id": 377,
    "registrynumber": 19811,
    "tradename": "quant lb",
    "headline": "basf española s.l.u.",
    "madeby": "e/z-7,9-dodecadienil acetato 8,5% [vp] p/p"
  },
  {
    "id": 378,
    "registrynumber": 19812,
    "tradename": "u-46 d ester iso",
    "headline": "nufarm españa, s.a.",
    "madeby": "2,4-d acido 60% (2-etil-hexil ester) [ec] p/v"
  },
  {
    "id": 379,
    "registrynumber": 19827,
    "tradename": "armetil m",
    "headline": "iqv agro españa, s.l.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 380,
    "registrynumber": 19840,
    "tradename": "agrocer",
    "headline": "nufarm uk limited (wyke-uk)",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 381,
    "registrynumber": 19848,
    "tradename": "cordalene",
    "headline": "agrichem, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (eg 2348) 18,3% (24x106 u.i./g) [sc] p/v"
  },
  {
    "id": 382,
    "registrynumber": 19856,
    "tradename": "bactur 2x",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa abts-351, 640 g/kg) 64 % (32 millones de clu/g) [wp] p/p"
  },
  {
    "id": 383,
    "registrynumber": 19884,
    "tradename": "insecticida vac",
    "headline": "agesa iberica, s.l.",
    "madeby": "piretrinas 0,12% [ae] p/p"
  },
  {
    "id": 384,
    "registrynumber": 19898,
    "tradename": "armetil cobre",
    "headline": "iqv agro españa, s.l.",
    "madeby": "metalaxil 8% + oxicloruro de cobre 40% (expr. en cu) [wp] p/p"
  },
  {
    "id": 385,
    "registrynumber": 19910,
    "tradename": "oximur 50 pm",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "oxido cuproso 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 386,
    "registrynumber": 19917,
    "tradename": "sumicidin extra 5 ew",
    "headline": "sumitomo chemical agro europe s.a.s.",
    "madeby": "esfenvalerato 5% [ew] p/v"
  },
  {
    "id": 387,
    "registrynumber": 19934,
    "tradename": "asana",
    "headline": "kenogard, s.a.",
    "madeby": "esfenvalerato 5% [ec] p/v"
  },
  {
    "id": 388,
    "registrynumber": 19937,
    "tradename": "fl-80 fuerte",
    "headline": "lainco, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 389,
    "registrynumber": 19947,
    "tradename": "garlon-gs",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "fluroxipir 3% (ester metilheptil) + triclopir 9% (ester butoxietílico) [ec] p/v"
  },
  {
    "id": 390,
    "registrynumber": 19963,
    "tradename": "debut",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "metil triflusulfuron 50% [wg] p/p"
  },
  {
    "id": 391,
    "registrynumber": 19965,
    "tradename": "acierto 70 sc",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metamitrona 70% [sc] p/v"
  },
  {
    "id": 392,
    "registrynumber": 19971,
    "tradename": "milraz mz",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "cimoxanilo 4% + mancozeb 40% [wp] p/p"
  },
  {
    "id": 393,
    "registrynumber": 19972,
    "tradename": "avtar 75 nt",
    "headline": "indofil industries (netherlands) b.v.",
    "madeby": "mancozeb 75% [wg] p/p"
  },
  {
    "id": 394,
    "registrynumber": 19984,
    "tradename": "mimic",
    "headline": "nisso chemical europe gmbh",
    "madeby": "tebufenocida 24% [sc] p/v"
  },
  {
    "id": 395,
    "registrynumber": 19990,
    "tradename": "kualai",
    "headline": "lainco, s.a.",
    "madeby": "azufre 80% [wp] p/p"
  },
  {
    "id": 396,
    "registrynumber": 19993,
    "tradename": "citrosol 7,5 ls",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "imazalil 7,5% (sulfato) [sl] p/v"
  },
  {
    "id": 397,
    "registrynumber": 19994,
    "tradename": "folpan 80 wdg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 80% [wg] p/p"
  },
  {
    "id": 398,
    "registrynumber": 19995,
    "tradename": "merpan 80 wdg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "captan 80% [wg] p/p"
  },
  {
    "id": 399,
    "registrynumber": 20006,
    "tradename": "celest formula m",
    "headline": "syngenta españa, s.a.",
    "madeby": "fludioxonil 2,5% [fs] p/v"
  },
  {
    "id": 400,
    "registrynumber": 20008,
    "tradename": "laikenia",
    "headline": "lainco, s.a.",
    "madeby": "cimoxanilo 4% + mancozeb 40% [wp] p/p"
  },
  {
    "id": 401,
    "registrynumber": 20009,
    "tradename": "branda",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 402,
    "registrynumber": 20010,
    "tradename": "carpovirusina",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "granulovirus de cydia pomonella (aislado mexicano) 90,9% (1x10e13 gránulos/l) [sc] p/v"
  },
  {
    "id": 403,
    "registrynumber": 20032,
    "tradename": "fosbel 80 pm",
    "headline": "probelte s.a.u.",
    "madeby": "fosetil-al 80% [wp] p/p"
  },
  {
    "id": 404,
    "registrynumber": 20034,
    "tradename": "cuprodithane m",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 405,
    "registrynumber": 20036,
    "tradename": "citrole",
    "headline": "total españa, s.a.u.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 406,
    "registrynumber": 20048,
    "tradename": "covicampo bordeles",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 407,
    "registrynumber": 20060,
    "tradename": "caldo bordeles key",
    "headline": "iqv agro españa, s.l.",
    "madeby": "sulfato cuprocalcico 20% [wp] p/p"
  },
  {
    "id": 408,
    "registrynumber": 20105,
    "tradename": "bouillie mop 20",
    "headline": "iqv italia s.r.l.",
    "madeby": "sulfato cuprocalcico 20% [wp] p/p"
  },
  {
    "id": 409,
    "registrynumber": 20111,
    "tradename": "naturalis",
    "headline": "cbc iberia s.a.u.",
    "madeby": "beauveria bassiana (cepa atcc 74040) 2.3% (2,3x10e7 esporas viables/ml) [od] p/v"
  },
  {
    "id": 410,
    "registrynumber": 21009,
    "tradename": "sumifive plus",
    "headline": "kenogard, s.a.",
    "madeby": "esfenvalerato 5% [ew] p/v"
  },
  {
    "id": 411,
    "registrynumber": 21015,
    "tradename": "manzinol",
    "headline": "mafa productos s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 412,
    "registrynumber": 21034,
    "tradename": "deccozil-50",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "imazalil 50% [ec] p/v"
  },
  {
    "id": 413,
    "registrynumber": 21039,
    "tradename": "mancozeb 80",
    "headline": "lerida union quimica, s.a. (luqsa)",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 414,
    "registrynumber": 21056,
    "tradename": "geoda",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa abts-351, 640 g/kg) 64 % (32 millones de clu/g) [wp] p/p"
  },
  {
    "id": 415,
    "registrynumber": 21082,
    "tradename": "actiseal i 22.5",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "imazalil 22,5% [ec] p/v"
  },
  {
    "id": 416,
    "registrynumber": 21086,
    "tradename": "actiseal op 13",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "2-fenilfenol 13% (expr. en opp) [sl] p/v"
  },
  {
    "id": 417,
    "registrynumber": 21087,
    "tradename": "teycer original op",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "ceras 18% + 2-fenilfenol 0,25% [ew] p/v"
  },
  {
    "id": 418,
    "registrynumber": 21090,
    "tradename": "teycer original i2",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "imazalil 0,2% [ew] p/v"
  },
  {
    "id": 419,
    "registrynumber": 21109,
    "tradename": "azufega 80 pm",
    "headline": "productos a.j.f., s.l.",
    "madeby": "azufre 80% [wp] p/p"
  },
  {
    "id": 420,
    "registrynumber": 21110,
    "tradename": "azufega 80 p",
    "headline": "productos a.j.f., s.l.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 421,
    "registrynumber": 21111,
    "tradename": "azufega 80 la",
    "headline": "productos a.j.f., s.l.",
    "madeby": "azufre 80% [sc] p/v"
  },
  {
    "id": 422,
    "registrynumber": 21115,
    "tradename": "azufega",
    "headline": "productos a.j.f., s.l.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 423,
    "registrynumber": 21141,
    "tradename": "sportak e",
    "headline": "basf española s.l.u.",
    "madeby": "procloraz 45% [ew] p/v"
  },
  {
    "id": 424,
    "registrynumber": 21213,
    "tradename": "britex i -3",
    "headline": "cia. iberica brogdex, s. a.",
    "madeby": "imazalil 0,3% [ew] p/v"
  },
  {
    "id": 425,
    "registrynumber": 21247,
    "tradename": "mansar 80 pm",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 426,
    "registrynumber": 21280,
    "tradename": "upala 10",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 427,
    "registrynumber": 21285,
    "tradename": "cobre lainco",
    "headline": "lainco, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 428,
    "registrynumber": 21286,
    "tradename": "caldo lainco",
    "headline": "iqv italia s.r.l.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 429,
    "registrynumber": 21291,
    "tradename": "topas 200 ew",
    "headline": "syngenta españa, s.a.",
    "madeby": "penconazol 20% [ew] p/v"
  },
  {
    "id": 430,
    "registrynumber": 21329,
    "tradename": "farmacop 50 pm",
    "headline": "alintra, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 431,
    "registrynumber": 21352,
    "tradename": "cuprochem 50 pm",
    "headline": "biogroot, s.a.u",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 432,
    "registrynumber": 21381,
    "tradename": "bermectine",
    "headline": "probelte s.a.u.",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 433,
    "registrynumber": 21396,
    "tradename": "proplant",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "propamocarb 60,5% [sl] p/v"
  },
  {
    "id": 434,
    "registrynumber": 21450,
    "tradename": "folicur 25 wg",
    "headline": "bayer cropscience, s.l.",
    "madeby": "tebuconazol 25% [wg] p/p"
  },
  {
    "id": 435,
    "registrynumber": 21470,
    "tradename": "giberlin 1 ts",
    "headline": "aifar s.p.a.",
    "madeby": "acido giberelico 10% (1 g/tableta) [st] p/p"
  },
  {
    "id": 436,
    "registrynumber": 21491,
    "tradename": "karda",
    "headline": "lainco, s.a.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 437,
    "registrynumber": 21494,
    "tradename": "micene plus",
    "headline": "sipcam inagra, s.a.",
    "madeby": "cimoxanilo 4% + mancozeb 40% [wp] p/p"
  },
  {
    "id": 438,
    "registrynumber": 21506,
    "tradename": "codimur-f",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "folpet 30% + oxicloruro de cobre 16% (expr. en cu ) [wp] p/p"
  },
  {
    "id": 439,
    "registrynumber": 21565,
    "tradename": "cuprotec",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 440,
    "registrynumber": 21579,
    "tradename": "mcpa sal potasica",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 441,
    "registrynumber": 21601,
    "tradename": "mancofit wp",
    "headline": "indofil industries (netherlands) b.v.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 442,
    "registrynumber": 21603,
    "tradename": "stroby wg",
    "headline": "basf española s.l.u.",
    "madeby": "kresoxim-metil 50% [wg] p/p"
  },
  {
    "id": 443,
    "registrynumber": 21614,
    "tradename": "rufast avance",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "acrinatrin 7,5% [ew] p/v"
  },
  {
    "id": 444,
    "registrynumber": 21618,
    "tradename": "inacop plus",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 445,
    "registrynumber": 21629,
    "tradename": "cypermor 20 pm",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 20% [wp] p/p"
  },
  {
    "id": 446,
    "registrynumber": 21630,
    "tradename": "cuprocaffaro",
    "headline": "isagro s.p.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 447,
    "registrynumber": 21633,
    "tradename": "cuproflow nc",
    "headline": "isagro s.p.a.",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 448,
    "registrynumber": 21648,
    "tradename": "cimoxpron-m",
    "headline": "probelte s.a.u.",
    "madeby": "cimoxanilo 4% + mancozeb 40% [wp] p/p"
  },
  {
    "id": 449,
    "registrynumber": 21649,
    "tradename": "bordeaux caffaro 20 blue",
    "headline": "isagro s.p.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 450,
    "registrynumber": 21650,
    "tradename": "alfil",
    "headline": "industrias afrasa, s.a.",
    "madeby": "fosetil-al 80% [wp] p/p"
  },
  {
    "id": 451,
    "registrynumber": 21668,
    "tradename": "cuprocaffaro blue",
    "headline": "isagro s.p.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 452,
    "registrynumber": 21670,
    "tradename": "cuproflow",
    "headline": "isagro s.p.a.",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 453,
    "registrynumber": 21673,
    "tradename": "codacide",
    "headline": "microcide, ltd.",
    "madeby": "aceite de colza 95% [ec] p/p"
  },
  {
    "id": 454,
    "registrynumber": 21679,
    "tradename": "draco",
    "headline": "iqv agro españa, s.l.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 455,
    "registrynumber": 21683,
    "tradename": "confirm 240 lv",
    "headline": "nisso chemical europe gmbh",
    "madeby": "tebufenocida 24,7% [sc] p/v"
  },
  {
    "id": 456,
    "registrynumber": 21714,
    "tradename": "switch",
    "headline": "syngenta españa s.a.",
    "madeby": "ciprodinil 37,5% + fludioxonil 25% [wg] p/p"
  },
  {
    "id": 457,
    "registrynumber": 21716,
    "tradename": "cabor",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "sulfato cuprocalcico 20% [wp] p/p"
  },
  {
    "id": 458,
    "registrynumber": 21719,
    "tradename": "traxi",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 459,
    "registrynumber": 21729,
    "tradename": "bormix blue",
    "headline": "alintra, s.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 460,
    "registrynumber": 21739,
    "tradename": "spyrale",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "difenoconazol 10% + fenpropidin 37,5% [ec] p/v"
  },
  {
    "id": 461,
    "registrynumber": 21740,
    "tradename": "gastoxin-b",
    "headline": "detia freyberg gmbh",
    "madeby": "fosfuro de aluminio 56% [ge] p/p"
  },
  {
    "id": 462,
    "registrynumber": 21745,
    "tradename": "gastoxin -s",
    "headline": "delicia freyberg gmbh",
    "madeby": "fosfuro de aluminio 57% [ge] p/p"
  },
  {
    "id": 463,
    "registrynumber": 21748,
    "tradename": "sponsor mz",
    "headline": "alintra, s.a.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 464,
    "registrynumber": 21752,
    "tradename": "talman combi",
    "headline": "alintra, s.a.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 465,
    "registrynumber": 21809,
    "tradename": "quadris",
    "headline": "syngenta españa, s.a.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 466,
    "registrynumber": 21811,
    "tradename": "orytis",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "acrinatrin 7,5% [ew] p/v"
  },
  {
    "id": 467,
    "registrynumber": 21820,
    "tradename": "mytu 80",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "captan 80% [wg] p/p"
  },
  {
    "id": 468,
    "registrynumber": 21821,
    "tradename": "folpec 50",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "folpet 50% [wp] p/p"
  },
  {
    "id": 469,
    "registrynumber": 21829,
    "tradename": "coral",
    "headline": "comercial química massó, s.a.",
    "madeby": "oxido cuproso 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 470,
    "registrynumber": 21850,
    "tradename": "stock ls",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "imazalil 7,5% (sulfato) [sl] p/v"
  },
  {
    "id": 471,
    "registrynumber": 21854,
    "tradename": "apache",
    "headline": "industrias afrasa, s.a.",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 472,
    "registrynumber": 21866,
    "tradename": "mevaxil combi",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "folpet 40% + metalaxil 10% [wp] p/p"
  },
  {
    "id": 473,
    "registrynumber": 21870,
    "tradename": "vimar m",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 474,
    "registrynumber": 21874,
    "tradename": "hidróxido 50wp vallés",
    "headline": "iqv agro españa, s.l.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 475,
    "registrynumber": 21879,
    "tradename": "primma mix 60",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 50% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 476,
    "registrynumber": 21909,
    "tradename": "gulliver",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "azimsulfuron 50% [wg] p/p"
  },
  {
    "id": 477,
    "registrynumber": 21914,
    "tradename": "folplan flow",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "folpet 50% [sc] p/v"
  },
  {
    "id": 478,
    "registrynumber": 21940,
    "tradename": "mirage",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "procloraz 45% [ec] p/v"
  },
  {
    "id": 479,
    "registrynumber": 21943,
    "tradename": "galigan 24 le",
    "headline": "nufarm españa, s.a.",
    "madeby": "oxifluorfen 24% [ec] p/v"
  },
  {
    "id": 480,
    "registrynumber": 21946,
    "tradename": "antak-68.5",
    "headline": "pamena, s.l.",
    "madeby": "alcohol graso (1-decanol) 68.5% [ec] p/v"
  },
  {
    "id": 481,
    "registrynumber": 21962,
    "tradename": "sponsor combi",
    "headline": "iqv italia s.r.l.",
    "madeby": "folpet 40% + metalaxil 10% [wp] p/p"
  },
  {
    "id": 482,
    "registrynumber": 21979,
    "tradename": "metix",
    "headline": "alintra, s.a.",
    "madeby": "folpet 40% + metalaxil 10% [wp] p/p"
  },
  {
    "id": 483,
    "registrynumber": 21980,
    "tradename": "maxil",
    "headline": "alintra, s.a.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 484,
    "registrynumber": 21990,
    "tradename": "terafit",
    "headline": "isk biosciences europe n.v.",
    "madeby": "flazasulfuron 25% [wg] p/p"
  },
  {
    "id": 485,
    "registrynumber": 22000,
    "tradename": "ortiva",
    "headline": "syngenta españa, s.a.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 486,
    "registrynumber": 22002,
    "tradename": "kdos",
    "headline": "spiess-urania chemicals gmbh",
    "madeby": "hidroxido cuprico 35% (expr. en cu) [wg] p/p"
  },
  {
    "id": 487,
    "registrynumber": 22004,
    "tradename": "nemathorin 10 g",
    "headline": "isk biosciences europe n.v.",
    "madeby": "fostiazato 10% [gr] p/p"
  },
  {
    "id": 488,
    "registrynumber": 22008,
    "tradename": "dividend formula m",
    "headline": "syngenta españa, s.a.",
    "madeby": "difenoconazol 3% [fs] p/v"
  },
  {
    "id": 489,
    "registrynumber": 22027,
    "tradename": "dash hc",
    "headline": "basf española s.l.u.",
    "madeby": "metil oleato/metil palmitato 34,8% [ec] p/v"
  },
  {
    "id": 490,
    "registrynumber": 22051,
    "tradename": "premis",
    "headline": "basf española s.l.u.",
    "madeby": "triticonazol 2,5% [fs] p/v"
  },
  {
    "id": 491,
    "registrynumber": 22059,
    "tradename": "azupec micro",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "azufre 80% [wp] p/p"
  },
  {
    "id": 492,
    "registrynumber": 22060,
    "tradename": "costar",
    "headline": "mitsui agriscience international s.a./n.v.",
    "madeby": "bacillus thuringiensis kurstaki (cepa sa-12) 18% ((8,5 x 10^12 ufc/kg)) [wg] p/p"
  },
  {
    "id": 493,
    "registrynumber": 22061,
    "tradename": "tornado",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metamitrona 70% [sc] p/v"
  },
  {
    "id": 494,
    "registrynumber": 22065,
    "tradename": "eclipse 70 wg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metribuzina 70% [wg] p/p"
  },
  {
    "id": 495,
    "registrynumber": 22069,
    "tradename": "droxicuper-50",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 496,
    "registrynumber": 22097,
    "tradename": "fersex chs difusores",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "z-11-hexadecenal 7,48% (0,326 g/difusor) + z-9-hexadecenal 0,78% (0,034 g/difusor) + z-13-octadecenal 0,92% (0,04 g/difusor) [vp] p/p"
  },
  {
    "id": 497,
    "registrynumber": 22098,
    "tradename": "trago 60",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "2,4-d acido 60% (2-etil-hexil ester) [ec] p/v"
  },
  {
    "id": 498,
    "registrynumber": 22102,
    "tradename": "cartec",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 499,
    "registrynumber": 22112,
    "tradename": "dribbling 24 ec",
    "headline": "nufarm españa, s.a.",
    "madeby": "oxifluorfen 24% [ec] p/v"
  },
  {
    "id": 500,
    "registrynumber": 22118,
    "tradename": "telxiope 100",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 501,
    "registrynumber": 22125,
    "tradename": "aura",
    "headline": "basf española s.l.u.",
    "madeby": "profoxidim 20% [ec] p/v"
  },
  {
    "id": 502,
    "registrynumber": 22126,
    "tradename": "dual gold",
    "headline": "syngenta españa, s.a.",
    "madeby": "s-metolacloro 96% [ec] p/v"
  },
  {
    "id": 503,
    "registrynumber": 22130,
    "tradename": "teldor",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fenhexamida 50% [wg] p/p"
  },
  {
    "id": 504,
    "registrynumber": 22145,
    "tradename": "nikos",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "florasulam 5% [sc] p/v"
  },
  {
    "id": 505,
    "registrynumber": 22151,
    "tradename": "ridomil gold sl",
    "headline": "syngenta españa, s.a.",
    "madeby": "metalaxil-m 46,5% [sl] p/v"
  },
  {
    "id": 506,
    "registrynumber": 22166,
    "tradename": "adina",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "azadiractin 1% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 507,
    "registrynumber": 22174,
    "tradename": "cobre key doble",
    "headline": "industrial quimica key, s.a.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 508,
    "registrynumber": 22177,
    "tradename": "metaman fae pm",
    "headline": "formuladores agroquimicos extremeños, s.l.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 509,
    "registrynumber": 22187,
    "tradename": "poly-10",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 510,
    "registrynumber": 22192,
    "tradename": "herbicruz mcpa 40",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 40% (sal potásica) [sl] p/v"
  },
  {
    "id": 511,
    "registrynumber": 22198,
    "tradename": "equation pro",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "cimoxanilo 30% + famoxadona 22,5% [wg] p/p"
  },
  {
    "id": 512,
    "registrynumber": 22199,
    "tradename": "primextra liquido gold",
    "headline": "syngenta españa, s.a.",
    "madeby": "terbutilazina 18,75% + s-metolacloro 31,25% [se] p/v"
  },
  {
    "id": 513,
    "registrynumber": 22209,
    "tradename": "drycop 50 df",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wg] p/p"
  },
  {
    "id": 514,
    "registrynumber": 22212,
    "tradename": "cosavet df",
    "headline": "sulphur mills ltd.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 515,
    "registrynumber": 22218,
    "tradename": "laser",
    "headline": "industrias afrasa, s.a.",
    "madeby": "oxifluorfen 24% [ec] p/v"
  },
  {
    "id": 516,
    "registrynumber": 22221,
    "tradename": "betanal neotec",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fenmedifam 16% [se] p/v"
  },
  {
    "id": 517,
    "registrynumber": 22225,
    "tradename": "centurion plus",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "cletodim 12% [ec] p/v"
  },
  {
    "id": 518,
    "registrynumber": 22238,
    "tradename": "novagib",
    "headline": "fine agrochemicals ltd.",
    "madeby": "giberelinas ga4/ga7 1% [sl] p/v"
  },
  {
    "id": 519,
    "registrynumber": 22263,
    "tradename": "herbicruz lino 600",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 50% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 520,
    "registrynumber": 22270,
    "tradename": "biocebo",
    "headline": "bioiberica, s.a.u.",
    "madeby": "proteínas hidrolizadas 30% [sl] p/v"
  },
  {
    "id": 521,
    "registrynumber": 22276,
    "tradename": "pledge",
    "headline": "kenogard, s.a.",
    "madeby": "flumioxazina 50% [wp] p/p"
  },
  {
    "id": 522,
    "registrynumber": 22287,
    "tradename": "cuper 50",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 523,
    "registrynumber": 22310,
    "tradename": "frupica",
    "headline": "sipcam inagra, s.a.",
    "madeby": "mepanipirim 50% [wp] p/p"
  },
  {
    "id": 524,
    "registrynumber": 22312,
    "tradename": "glyfos progress",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 525,
    "registrynumber": 22319,
    "tradename": "agroil",
    "headline": "sipcam iberia s.l.",
    "madeby": "aceite de parafina 83% [ec] p/v"
  },
  {
    "id": 526,
    "registrynumber": 22326,
    "tradename": "hydrocop 50 wp",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 527,
    "registrynumber": 22338,
    "tradename": "flint",
    "headline": "bayer cropscience, s.l.",
    "madeby": "trifloxistrobin 50% [wg] p/p"
  },
  {
    "id": 528,
    "registrynumber": 22353,
    "tradename": "samson",
    "headline": "isk biosciences europe n.v.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 529,
    "registrynumber": 22393,
    "tradename": "mancopec",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 530,
    "registrynumber": 22398,
    "tradename": "karate zeon",
    "headline": "syngenta españa, s.a.",
    "madeby": "lambda cihalotrin 10% [cs] p/v"
  },
  {
    "id": 531,
    "registrynumber": 22402,
    "tradename": "covicampo 50 sc",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 532,
    "registrynumber": 22405,
    "tradename": "carmort",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 533,
    "registrynumber": 22416,
    "tradename": "faro",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 534,
    "registrynumber": 22421,
    "tradename": "fosbel-plus",
    "headline": "probelte s.a.u.",
    "madeby": "fosetil-al 35% + mancozeb 35% [wp] p/p"
  },
  {
    "id": 535,
    "registrynumber": 22422,
    "tradename": "fosbel extra",
    "headline": "probelte s.a.u.",
    "madeby": "cimoxanilo 4% + folpet 25% + fosetil-al 50% [wp] p/p"
  },
  {
    "id": 536,
    "registrynumber": 22423,
    "tradename": "belthirul",
    "headline": "probelte s.a.u.",
    "madeby": "bacillus thuringiensis kurstaki (cepa pb-54) 32% (32 mill. de u.i./g) [wp] p/p"
  },
  {
    "id": 537,
    "registrynumber": 22468,
    "tradename": "metaxicol",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "metalaxil 8% + oxicloruro de cobre 40% (expr. en cu) [wp] p/p"
  },
  {
    "id": 538,
    "registrynumber": 22478,
    "tradename": "goltix 700 sc",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metamitrona 70% [sc] p/v"
  },
  {
    "id": 539,
    "registrynumber": 22487,
    "tradename": "duett m",
    "headline": "upl iberia, s.a.",
    "madeby": "mancozeb 46,5% + cimoxanilo 4% [wp] p/p"
  },
  {
    "id": 540,
    "registrynumber": 22501,
    "tradename": "nervure super",
    "headline": "nissan chemical europe s.a.s.",
    "madeby": "quizalofop-p-etil 10% [ec] p/v"
  },
  {
    "id": 541,
    "registrynumber": 22508,
    "tradename": "manizeb",
    "headline": "manica cobre s.l.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 542,
    "registrynumber": 22513,
    "tradename": "agritone l",
    "headline": "nufarm españa, s.a.",
    "madeby": "ana 0,675% + ana amida 1,8% [sl] p/v"
  },
  {
    "id": 543,
    "registrynumber": 22526,
    "tradename": "melody combi wg",
    "headline": "bayer cropscience, s.l.",
    "madeby": "folpet 56,3% + iprovalicarb 9% [wg] p/p"
  },
  {
    "id": 544,
    "registrynumber": 22529,
    "tradename": "mito 70 gm",
    "headline": "upl iberia, s.a.",
    "madeby": "metamitrona 70% [wg] p/p"
  },
  {
    "id": 545,
    "registrynumber": 22531,
    "tradename": "cliophar 425 sl",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "clopiralida 42,5% (sal amina) [sl] p/v"
  },
  {
    "id": 546,
    "registrynumber": 22537,
    "tradename": "sofrex",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 547,
    "registrynumber": 22541,
    "tradename": "agritone",
    "headline": "nufarm españa, s.a.",
    "madeby": "ana 0,43% + ana amida 1,18% [wp] p/p"
  },
  {
    "id": 548,
    "registrynumber": 22542,
    "tradename": "magma",
    "headline": "industrias afrasa, s.a.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 549,
    "registrynumber": 22547,
    "tradename": "vamectin 1,8 ec",
    "headline": "syngenta españa, s.a.",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 550,
    "registrynumber": 22560,
    "tradename": "cobre nordox 75 wg",
    "headline": "comercial química massó, s.a.",
    "madeby": "oxido cuproso 75% (expr. en cu) [wg] p/p"
  },
  {
    "id": 551,
    "registrynumber": 22563,
    "tradename": "systhane star",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "miclobutanil 20% [ew] p/v"
  },
  {
    "id": 552,
    "registrynumber": 22598,
    "tradename": "bion 50 wg",
    "headline": "syngenta españa, s.a.",
    "madeby": "acibenzolar-s-metil 50% [wg] p/p"
  },
  {
    "id": 553,
    "registrynumber": 22599,
    "tradename": "ikebana fungicida total",
    "headline": "iqv italia s.r.l.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 554,
    "registrynumber": 22600,
    "tradename": "fung-cid orto espuma",
    "headline": "productos citrosol s.a.",
    "madeby": "2-fenilfenol 13% (expr. en opp) [sl] p/v"
  },
  {
    "id": 555,
    "registrynumber": 22610,
    "tradename": "fl 80 fuerte wg",
    "headline": "lainco, s.a.",
    "madeby": "mancozeb 75% [wg] p/p"
  },
  {
    "id": 556,
    "registrynumber": 22622,
    "tradename": "caiman",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 557,
    "registrynumber": 22637,
    "tradename": "claro ec",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "diclofop 36% (ester metílico) [ec] p/v"
  },
  {
    "id": 558,
    "registrynumber": 22646,
    "tradename": "command cs",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "clomazona 36% [cs] p/v"
  },
  {
    "id": 559,
    "registrynumber": 22648,
    "tradename": "botanigard",
    "headline": "certis europe b.v. (utrecht)",
    "madeby": "beauveria bassiana (cepa gha) 10,7% (2,26x10e13 conidias/l) [od] p/v"
  },
  {
    "id": 560,
    "registrynumber": 22649,
    "tradename": "spidermec",
    "headline": "syngenta españa, s.a.",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 561,
    "registrynumber": 22669,
    "tradename": "luqmullant",
    "headline": "lerida union quimica, s.a. (luqsa)",
    "madeby": "mojante no ionico 20% [sl] p/v"
  },
  {
    "id": 562,
    "registrynumber": 22693,
    "tradename": "steward",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "indoxacarb 30% [wg] p/p"
  },
  {
    "id": 563,
    "registrynumber": 22708,
    "tradename": "cuper plus",
    "headline": "upl iberia, s.a.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 564,
    "registrynumber": 22717,
    "tradename": "laincobre m",
    "headline": "lainco, s.a.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 565,
    "registrynumber": 22720,
    "tradename": "mcpa dma 500 sl",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 50% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 566,
    "registrynumber": 22723,
    "tradename": "foltene plus",
    "headline": "sipcam inagra, s.a.",
    "madeby": "cimoxanilo 4% + folpet 33,4% [sc] p/v"
  },
  {
    "id": 567,
    "registrynumber": 22730,
    "tradename": "katanga wp",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "fosetil-al 80% [wp] p/p"
  },
  {
    "id": 568,
    "registrynumber": 22742,
    "tradename": "champion flow",
    "headline": "nufarm españa, s.a.",
    "madeby": "hidroxido cuprico 36% (expr. en cu) [sc] p/v"
  },
  {
    "id": 569,
    "registrynumber": 22750,
    "tradename": "pastol aq",
    "headline": "comercial química massó, s.a.",
    "madeby": "copolimero etilenovinilico 69% [pa] p/p"
  },
  {
    "id": 570,
    "registrynumber": 22771,
    "tradename": "grano de oro",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 571,
    "registrynumber": 22779,
    "tradename": "tomahawk",
    "headline": "nufarm españa, s.a.",
    "madeby": "fluroxipir 20% (ester metilheptil) [ec] p/v"
  },
  {
    "id": 572,
    "registrynumber": 22814,
    "tradename": "oleatbio",
    "headline": "tratamientos bio-ecologicos, s.a.",
    "madeby": "sales potasicas de acidos grasos vegetales 15% [sl] p/v"
  },
  {
    "id": 573,
    "registrynumber": 22820,
    "tradename": "vimar",
    "headline": "iqv italia s.r.l.",
    "madeby": "metalaxil 25% [wp] p/p"
  },
  {
    "id": 574,
    "registrynumber": 22826,
    "tradename": "protibel",
    "headline": "goal up lifesciences gmbh",
    "madeby": "oxifluorfen 24% [sc] p/v"
  },
  {
    "id": 575,
    "registrynumber": 22828,
    "tradename": "mazebax 80",
    "headline": "productos a.j.f., s.l.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 576,
    "registrynumber": 22832,
    "tradename": "cimostar",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "cimoxanilo 4% + mancozeb 40% [wp] p/p"
  },
  {
    "id": 577,
    "registrynumber": 22837,
    "tradename": "micene wp",
    "headline": "sipcam inagra, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 578,
    "registrynumber": 22839,
    "tradename": "spintor 480 sc",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "spinosad 48% [sc] p/v"
  },
  {
    "id": 579,
    "registrynumber": 22843,
    "tradename": "zicoluq",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 580,
    "registrynumber": 22852,
    "tradename": "token 5",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 581,
    "registrynumber": 22854,
    "tradename": "maxitan wp",
    "headline": "iqv italia s.r.l.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 582,
    "registrynumber": 22859,
    "tradename": "mancozelm 80 wp",
    "headline": "helm iberica, s.a.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 583,
    "registrynumber": 22868,
    "tradename": "briozil",
    "headline": "cia. iberica brogdex, s. a.",
    "madeby": "imazalil 7,5% (sulfato) + 2- fenilfenol 10% [ec] p/v"
  },
  {
    "id": 584,
    "registrynumber": 22870,
    "tradename": "mullo",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 585,
    "registrynumber": 22875,
    "tradename": "pombal",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "fosetil-al 80% [wp] p/p"
  },
  {
    "id": 586,
    "registrynumber": 22908,
    "tradename": "cuzeb",
    "headline": "productos a.j.f., s.l.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 587,
    "registrynumber": 22912,
    "tradename": "sultrin 40-0,5",
    "headline": "productos a.j.f., s.l.",
    "madeby": "azufre 40% + cipermetrin 0,5% [dp] p/p"
  },
  {
    "id": 588,
    "registrynumber": 22919,
    "tradename": "pg supermojante",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "alquilfenol etoxilado/propoxilado 102,6% (equiv. a 99,6% p/p) [sl] p/v"
  },
  {
    "id": 589,
    "registrynumber": 22942,
    "tradename": "azufega disper wg",
    "headline": "productos a.j.f., s.l.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 590,
    "registrynumber": 22945,
    "tradename": "equation contact",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "mancozeb 62,5% + famoxadona 6,25% [wg] p/p"
  },
  {
    "id": 591,
    "registrynumber": 22949,
    "tradename": "crack 20 wp",
    "headline": "upl iberia, s.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 592,
    "registrynumber": 22954,
    "tradename": "presa 16",
    "headline": "industrias afrasa, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa pb-54) 8% (16x10e6 u.i./g) [wp] p/p"
  },
  {
    "id": 593,
    "registrynumber": 22958,
    "tradename": "beltasur-plus super azul",
    "headline": "probelte s.a.u.",
    "madeby": "mancozeb 20% + oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 594,
    "registrynumber": 22959,
    "tradename": "roundup*energy pro",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 45% (sal potásica) [sl] p/v"
  },
  {
    "id": 595,
    "registrynumber": 22964,
    "tradename": "mustang",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "2,4-d acido 30% (ester etilhexil) + florasulam 0,62% [se] p/v"
  },
  {
    "id": 596,
    "registrynumber": 22977,
    "tradename": "cikeyman",
    "headline": "sipcam inagra, s.a.",
    "madeby": "cimoxanilo 4% + mancozeb 40% [wp] p/p"
  },
  {
    "id": 597,
    "registrynumber": 22981,
    "tradename": "marisol",
    "headline": "rotam agrochemical europe limited",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 598,
    "registrynumber": 22987,
    "tradename": "atonik",
    "headline": "asahi chemical europe sro",
    "madeby": "5-nitroguayacolato sodico 0,1% + o-nitrofenolato sodico 0,2% + p-nitrofenolato sodico 0,3% [sl] p/v"
  },
  {
    "id": 599,
    "registrynumber": 22992,
    "tradename": "laser plus",
    "headline": "industrias afrasa, s.a.",
    "madeby": "glifosato 20% (sal isopropilamina) + oxifluorfen 3% [sc] p/v"
  },
  {
    "id": 600,
    "registrynumber": 22997,
    "tradename": "pombal mz",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "fosetil-al 35% + mancozeb 35% [wp] p/p"
  },
  {
    "id": 601,
    "registrynumber": 23000,
    "tradename": "afrosan duplo",
    "headline": "industrias afrasa, s.a.",
    "madeby": "mancozeb 20% + oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 602,
    "registrynumber": 23008,
    "tradename": "cuprotec bordeles",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 603,
    "registrynumber": 23010,
    "tradename": "orofrex",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "azufre 98,5% [dp] p/p"
  },
  {
    "id": 604,
    "registrynumber": 23015,
    "tradename": "hidrocuper-50",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 605,
    "registrynumber": 23018,
    "tradename": "winche 24 le",
    "headline": "nufarm españa, s.a.",
    "madeby": "oxifluorfen 24% [ec] p/v"
  },
  {
    "id": 606,
    "registrynumber": 23037,
    "tradename": "japica",
    "headline": "k-i -chemical europe sa/nv",
    "madeby": "mepanipirim 50% [wp] p/p"
  },
  {
    "id": 607,
    "registrynumber": 23038,
    "tradename": "pulsar 40",
    "headline": "basf española s.l.u.",
    "madeby": "imazamox 4% [sl] p/v"
  },
  {
    "id": 608,
    "registrynumber": 23042,
    "tradename": "dauparex",
    "headline": "nufarm españa, s.a.",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 609,
    "registrynumber": 23047,
    "tradename": "inteike",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "oxifluorfen 24% [ec] p/v"
  },
  {
    "id": 610,
    "registrynumber": 23055,
    "tradename": "electis",
    "headline": "gowan crop protection ltd.",
    "madeby": "mancozeb 66,7% + zoxamida 8,3% [wg] p/p"
  },
  {
    "id": 611,
    "registrynumber": 23059,
    "tradename": "hereu super",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "oxifluorfen 24% [ec] p/v"
  },
  {
    "id": 612,
    "registrynumber": 23072,
    "tradename": "wismar",
    "headline": "upl iberia, s.a.",
    "madeby": "metamitrona 70% [wg] p/p"
  },
  {
    "id": 613,
    "registrynumber": 23079,
    "tradename": "aries",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 614,
    "registrynumber": 23088,
    "tradename": "elios",
    "headline": "iqv italia s.r.l.",
    "madeby": "mancozeb 64% + metalaxil 8% [wp] p/p"
  },
  {
    "id": 615,
    "registrynumber": 23090,
    "tradename": "citron",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 10% [ec] p/v"
  },
  {
    "id": 616,
    "registrynumber": 23106,
    "tradename": "aq 10",
    "headline": "cbc iberia s.a.u.",
    "madeby": "ampelomices quisqualis 58% [wg] p/p"
  },
  {
    "id": 617,
    "registrynumber": 23117,
    "tradename": "labijardin limacos",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 618,
    "registrynumber": 23138,
    "tradename": "gozai",
    "headline": "nichino europe co., ltd",
    "madeby": "piraflufen-etil 2,65% [ec] p/v"
  },
  {
    "id": 619,
    "registrynumber": 23139,
    "tradename": "ohayo",
    "headline": "isk biosciences europe n.v.",
    "madeby": "fluazinam 50% [sc] p/v"
  },
  {
    "id": 620,
    "registrynumber": 23142,
    "tradename": "betasana sc",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "fenmedifam 16% [sc] p/v"
  },
  {
    "id": 621,
    "registrynumber": 23148,
    "tradename": "pearze triple",
    "headline": "bayer cropscience, s.l.",
    "madeby": "cimoxanilo 4% + folpet 25% + fosetil-al 50% [wg] p/p"
  },
  {
    "id": 622,
    "registrynumber": 23156,
    "tradename": "optica trio",
    "headline": "nufarm uk limited (wyke-uk)",
    "madeby": "mcpa 16% (sal amina) + mecoprop-p 13% (sal amina) + diclorprop-p 31% (sal amina) [sl] p/v"
  },
  {
    "id": 623,
    "registrynumber": 23179,
    "tradename": "cobrestar",
    "headline": "diachem s.p.a.",
    "madeby": "sulfato tribasico de cobre 19% (expr. en cu) [sc] p/v"
  },
  {
    "id": 624,
    "registrynumber": 23184,
    "tradename": "azufril flow",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "azufre 80% [sc] p/v"
  },
  {
    "id": 625,
    "registrynumber": 23186,
    "tradename": "vitra 40 wg",
    "headline": "iqv agro españa, s.l.",
    "madeby": "hidroxido cuprico 40% (expr. en cu) [wg] p/p"
  },
  {
    "id": 626,
    "registrynumber": 23188,
    "tradename": "audace",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 627,
    "registrynumber": 23190,
    "tradename": "champ sc",
    "headline": "nufarm españa, s.a.",
    "madeby": "hidroxido cuprico 36% (expr. en cu) [sc] p/v"
  },
  {
    "id": 628,
    "registrynumber": 23217,
    "tradename": "accelerator progress",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "glifosato 45% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 629,
    "registrynumber": 23247,
    "tradename": "lainzufre wg",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 630,
    "registrynumber": 23248,
    "tradename": "cimoxate fp",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "cimoxanilo 4% + folpet 40% [wp] p/p"
  },
  {
    "id": 631,
    "registrynumber": 23253,
    "tradename": "cal-ex",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 632,
    "registrynumber": 23265,
    "tradename": "goal supreme",
    "headline": "goal up lifesciences gmbh",
    "madeby": "oxifluorfen 48% [sc] p/v"
  },
  {
    "id": 633,
    "registrynumber": 23276,
    "tradename": "botanigard 22 wp",
    "headline": "certis europe b.v. (utrecht)",
    "madeby": "beauveria bassiana (cepa gha) 22 % (4,4 x 10e10 conidias/g [wp] p/p"
  },
  {
    "id": 634,
    "registrynumber": 23287,
    "tradename": "isomate c plus",
    "headline": "cbc (europe) s.r.l.",
    "madeby": "e,e-8,10-dodecadien-1-ol 45% (117 mg/difusor) + dodecan-1-ol 29,6% (61 mg/difusor) + 1-tetradecanol 5,7 % (15 mg/difusor) [vp] p/p"
  },
  {
    "id": 635,
    "registrynumber": 23291,
    "tradename": "align",
    "headline": "sipcam inagra, s.a.",
    "madeby": "azadiractin 2,6% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 636,
    "registrynumber": 23332,
    "tradename": "kemifam oleo",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fenmedifam 16% [se] p/v"
  },
  {
    "id": 637,
    "registrynumber": 23333,
    "tradename": "shark",
    "headline": "sipcam iberia s.l.",
    "madeby": "etofenprox 28,75% [ec] p/v"
  },
  {
    "id": 638,
    "registrynumber": 23342,
    "tradename": "paclot",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "paclobutrazol 25% [sc] p/v"
  },
  {
    "id": 639,
    "registrynumber": 23363,
    "tradename": "curezin 320 azul",
    "headline": "iqv agro españa, s.l.",
    "madeby": "mancozeb 20% + oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 640,
    "registrynumber": 23374,
    "tradename": "ortosol 6500",
    "headline": "productos citrosol s.a.",
    "madeby": "2- fenilfenol 28,6% (sal sódica) [sl] p/v"
  },
  {
    "id": 641,
    "registrynumber": 23376,
    "tradename": "mospilan",
    "headline": "nisso chemical europe gmbh",
    "madeby": "acetamiprid 20% [sp] p/p"
  },
  {
    "id": 642,
    "registrynumber": 23377,
    "tradename": "epik",
    "headline": "sipcam inagra, s.a.",
    "madeby": "acetamiprid 20% [sp] p/p"
  },
  {
    "id": 643,
    "registrynumber": 23392,
    "tradename": "syllit flow",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "dodina 40% [sc] p/v"
  },
  {
    "id": 644,
    "registrynumber": 23396,
    "tradename": "isonet l",
    "headline": "cbc (europe) s.r.l.",
    "madeby": "e/z-7,9-dodecadienil acetato 64,3% (172 mg/difusor) [vp] p/p"
  },
  {
    "id": 645,
    "registrynumber": 23422,
    "tradename": "cabrio",
    "headline": "basf española s.l.u.",
    "madeby": "piraclostrobin 25% [ec] p/v"
  },
  {
    "id": 646,
    "registrynumber": 23433,
    "tradename": "borneo",
    "headline": "kenogard, s.a.",
    "madeby": "etoxazol 11% [sc] p/v"
  },
  {
    "id": 647,
    "registrynumber": 23435,
    "tradename": "platform 40 wg",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "carfentrazona-etil 40% [wg] p/p"
  },
  {
    "id": 648,
    "registrynumber": 23436,
    "tradename": "kocide opti",
    "headline": "spiess-urania chemicals gmbh",
    "madeby": "hidroxido cuprico 30% (expr. en cu) [wg] p/p"
  },
  {
    "id": 649,
    "registrynumber": 23442,
    "tradename": "clic 70 wg",
    "headline": "upl iberia, s.a.",
    "madeby": "metamitrona 70% [wg] p/p"
  },
  {
    "id": 650,
    "registrynumber": 23454,
    "tradename": "codimur sc",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "oxicloruro de cobre 52% (expr. en cu) [sc] p/v"
  },
  {
    "id": 651,
    "registrynumber": 23457,
    "tradename": "matacaracoles lainco",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 652,
    "registrynumber": 23465,
    "tradename": "cuprital super",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "mancozeb 20% + oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 653,
    "registrynumber": 23476,
    "tradename": "sofreval 80 wg",
    "headline": "iqv agro españa, s.l.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 654,
    "registrynumber": 23481,
    "tradename": "glutol",
    "headline": "nufarm españa, s.a.",
    "madeby": "clortoluron 50% [sc] p/v"
  },
  {
    "id": 655,
    "registrynumber": 23483,
    "tradename": "metamitron 70 wg",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "metamitrona 70% [wg] p/p"
  },
  {
    "id": 656,
    "registrynumber": 23489,
    "tradename": "acrux",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "hexitiazox 10% [wp] p/p"
  },
  {
    "id": 657,
    "registrynumber": 23495,
    "tradename": "ikebana antilimacos",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% [gb] p/p"
  },
  {
    "id": 658,
    "registrynumber": 23500,
    "tradename": "tridente",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "mancozeb 15% + oxicloruro de cobre 10% (expr. en cu) + sulfato cuprocalcico 10% [wp] p/p"
  },
  {
    "id": 659,
    "registrynumber": 23514,
    "tradename": "gucor 20-8",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 8% + sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 660,
    "registrynumber": 23515,
    "tradename": "brandt traxi 30-20",
    "headline": "brandt europe, s.l.",
    "madeby": "mancozeb 20% + oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 661,
    "registrynumber": 23523,
    "tradename": "cottolinz",
    "headline": "nufarm españa, s.a.",
    "madeby": "fluometuron 50% [sc] p/v"
  },
  {
    "id": 662,
    "registrynumber": 23529,
    "tradename": "domark evo",
    "headline": "isagro s.p.a.",
    "madeby": "tetraconazol 12,5% [me] p/v"
  },
  {
    "id": 663,
    "registrynumber": 23535,
    "tradename": "barclay eyetak 450",
    "headline": "barclay chemicals manufacturing, ltd.",
    "madeby": "procloraz 45% [ec] p/v"
  },
  {
    "id": 664,
    "registrynumber": 23542,
    "tradename": "fersex chs capsulas tm",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "z-11-hexadecenal 9,7% (4,9 mg/unidad) + z-9-hexadecenal 1% (0,5 mg/unidad) + z-13-octadecenal 1,2% (0,6 mg/unidad) [vp] p/p"
  },
  {
    "id": 665,
    "registrynumber": 23545,
    "tradename": "decis protech",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 1,5% [ew] p/v"
  },
  {
    "id": 666,
    "registrynumber": 23554,
    "tradename": "cimocob",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 667,
    "registrynumber": 23555,
    "tradename": "mancofit plus",
    "headline": "formuladores agroquimicos extremeños, s.l.",
    "madeby": "mancozeb 17,5% + oxicloruro de cobre 22% (expr. en cu) [wp] p/p"
  },
  {
    "id": 668,
    "registrynumber": 23557,
    "tradename": "faecu-38",
    "headline": "formuladores agroquimicos extremeños, s.l.",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 669,
    "registrynumber": 23562,
    "tradename": "previcur energy",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fosetil 31% + propamocarb 53% [sl] p/v"
  },
  {
    "id": 670,
    "registrynumber": 23563,
    "tradename": "cimoxate cu.",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 671,
    "registrynumber": 23564,
    "tradename": "microzufre",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 672,
    "registrynumber": 23574,
    "tradename": "romectin",
    "headline": "rotam agrochemical europe limited",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 673,
    "registrynumber": 23576,
    "tradename": "boxer",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "hidroxido cuprico 25% (expr. en cu) [wg] p/p"
  },
  {
    "id": 674,
    "registrynumber": 23583,
    "tradename": "mildicut",
    "headline": "isk biosciences europe n.v.",
    "madeby": "ciazofamida 2,5% [sc] p/v"
  },
  {
    "id": 675,
    "registrynumber": 23594,
    "tradename": "winner coop. plus 45",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "glifosato 45% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 676,
    "registrynumber": 23595,
    "tradename": "glyfos 45 agrodan",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "glifosato 45% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 677,
    "registrynumber": 23602,
    "tradename": "ortodex",
    "headline": "cia. iberica brogdex, s. a.",
    "madeby": "2- fenilfenol 28,6% (sal sódica) [sl] p/v"
  },
  {
    "id": 678,
    "registrynumber": 23603,
    "tradename": "kilsec",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "pirimicarb 50% [wg] p/p"
  },
  {
    "id": 679,
    "registrynumber": 23604,
    "tradename": "merger",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "bacillus thuringiensis kurstaki (cepa pb-54) 32% (32 mill. de u.i./g) [wp] p/p"
  },
  {
    "id": 680,
    "registrynumber": 23611,
    "tradename": "kabala",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 681,
    "registrynumber": 23614,
    "tradename": "brotanol",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "paclobutrazol 25% [sc] p/v"
  },
  {
    "id": 682,
    "registrynumber": 23619,
    "tradename": "jalisco",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "hexitiazox 10% [wp] p/p"
  },
  {
    "id": 683,
    "registrynumber": 23622,
    "tradename": "codimur 50",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 684,
    "registrynumber": 23630,
    "tradename": "clofentezin 50 sc",
    "headline": "nufarm españa, s.a.",
    "madeby": "clofentezin 50% [sc] p/v"
  },
  {
    "id": 685,
    "registrynumber": 23633,
    "tradename": "olicobre 70 sc",
    "headline": "probelte s.a.u.",
    "madeby": "oxicloruro de cobre 70% (expr. en cu) [sc] p/v"
  },
  {
    "id": 686,
    "registrynumber": 23635,
    "tradename": "cuproman",
    "headline": "formuladores agroquimicos extremeños, s.l.",
    "madeby": "mancozeb 20% + oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 687,
    "registrynumber": 23636,
    "tradename": "emerald",
    "headline": "isagro s.p.a.",
    "madeby": "tetraconazol 12,5% [me] p/v"
  },
  {
    "id": 688,
    "registrynumber": 23651,
    "tradename": "shogun",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "propaquizafop 10% [ec] p/v"
  },
  {
    "id": 689,
    "registrynumber": 23654,
    "tradename": "carakol",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 5% (adicionado de colorante) [gb] p/p"
  },
  {
    "id": 690,
    "registrynumber": 23657,
    "tradename": "cirrus 80 df",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 691,
    "registrynumber": 23671,
    "tradename": "sumilan 25 wp",
    "headline": "sumitomo chemical agro europe s.a.s.",
    "madeby": "dietofencarb 25% [wp] p/p"
  },
  {
    "id": 692,
    "registrynumber": 23679,
    "tradename": "sumifol d",
    "headline": "kenogard, s.a.",
    "madeby": "dietofencarb 25% [wp] p/p"
  },
  {
    "id": 693,
    "registrynumber": 23694,
    "tradename": "teycer original i3",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "imazalil 0,3% [ew] p/v"
  },
  {
    "id": 694,
    "registrynumber": 23699,
    "tradename": "sulcox wp",
    "headline": "isagro s.p.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 695,
    "registrynumber": 23705,
    "tradename": "perlan",
    "headline": "fine agrochemicals ltd.",
    "madeby": "6-benziladenina 1,9% + giberelinas ga4/ga7 1,9% [sl] p/v"
  },
  {
    "id": 696,
    "registrynumber": 23711,
    "tradename": "katanga express",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 697,
    "registrynumber": 23712,
    "tradename": "matecor wg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metribuzina 70% [wg] p/p"
  },
  {
    "id": 698,
    "registrynumber": 23718,
    "tradename": "champ dp",
    "headline": "nufarm españa, s.a.",
    "madeby": "hidroxido cuprico 37,5% (expr. en cu) [wg] p/p"
  },
  {
    "id": 699,
    "registrynumber": 23725,
    "tradename": "reto",
    "headline": "upl iberia, s.a.",
    "madeby": "bensulfuron-metil 60% [wg] p/p"
  },
  {
    "id": 700,
    "registrynumber": 23734,
    "tradename": "shoshi",
    "headline": "lainco, s.a.",
    "madeby": "hexitiazox 10% [wp] p/p"
  },
  {
    "id": 701,
    "registrynumber": 23738,
    "tradename": "dipel df",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa abts-351) (32 mill. de clu/g) 54% (540 g/kg) [wg] p/p"
  },
  {
    "id": 702,
    "registrynumber": 23740,
    "tradename": "kino",
    "headline": "upl iberia, s.a.",
    "madeby": "bensulfuron-metil 60% [wg] p/p"
  },
  {
    "id": 703,
    "registrynumber": 23743,
    "tradename": "festival",
    "headline": "lainco, s.a.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 704,
    "registrynumber": 23748,
    "tradename": "collis",
    "headline": "basf española s.l.u.",
    "madeby": "boscalida 20% + kresoxim-metil 10% [sc] p/v"
  },
  {
    "id": 705,
    "registrynumber": 23750,
    "tradename": "cantus",
    "headline": "basf española s.l.u.",
    "madeby": "boscalida 50% [wg] p/p"
  },
  {
    "id": 706,
    "registrynumber": 23760,
    "tradename": "deccofos",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "fosetil-al 45% [sc] p/v"
  },
  {
    "id": 707,
    "registrynumber": 23764,
    "tradename": "runner",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "metoxifenocida 24% [sc] p/v"
  },
  {
    "id": 708,
    "registrynumber": 23775,
    "tradename": "nimrod ec n",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "bupirimato 25% [ew] p/v"
  },
  {
    "id": 709,
    "registrynumber": 23782,
    "tradename": "decis expert",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 10% [ec] p/v"
  },
  {
    "id": 710,
    "registrynumber": 23788,
    "tradename": "carfal wg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 711,
    "registrynumber": 23804,
    "tradename": "agroxifen",
    "headline": "goal up lifesciences gmbh",
    "madeby": "oxifluorfen 24% [sc] p/v"
  },
  {
    "id": 712,
    "registrynumber": 23808,
    "tradename": "spintor-cebo",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "spinosad 0,024% [cb] p/v"
  },
  {
    "id": 713,
    "registrynumber": 23817,
    "tradename": "panarex",
    "headline": "arysta lifescience registrations great britain ltd.",
    "madeby": "quizalofop-p-tefuril 4% [ec] p/v"
  },
  {
    "id": 714,
    "registrynumber": 23820,
    "tradename": "foltel",
    "headline": "sipcam inagra, s.a.",
    "madeby": "cimoxanilo 4% + folpet 33,4% [sc] p/v"
  },
  {
    "id": 715,
    "registrynumber": 23821,
    "tradename": "manplus",
    "headline": "sipcam inagra, s.a.",
    "madeby": "cimoxanilo 4% + mancozeb 40% [wp] p/p"
  },
  {
    "id": 716,
    "registrynumber": 23840,
    "tradename": "upala direct",
    "headline": "lainco, s.a.",
    "madeby": "cipermetrin 0.01% [al] p/v"
  },
  {
    "id": 717,
    "registrynumber": 23843,
    "tradename": "supercobre-mz",
    "headline": "productos a.j.f., s.l.",
    "madeby": "mancozeb 20% + oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 718,
    "registrynumber": 23852,
    "tradename": "caldo bordeles rsr disperss",
    "headline": "upl iberia, s.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wg] p/p"
  },
  {
    "id": 719,
    "registrynumber": 23854,
    "tradename": "tranil",
    "headline": "sharda europe bvba",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 720,
    "registrynumber": 23855,
    "tradename": "cretiol",
    "headline": "l. gobbi s.r.l.",
    "madeby": "acido giberelico 0,5% + mcpa 1% (ester tioetilico) [ec] p/v"
  },
  {
    "id": 721,
    "registrynumber": 23858,
    "tradename": "klartan ew",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "tau-fluvalinato 24% [ew] p/v"
  },
  {
    "id": 722,
    "registrynumber": 23859,
    "tradename": "ossirame extra 50 wp",
    "headline": "manica cobre s.l.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 723,
    "registrynumber": 23881,
    "tradename": "percix",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 724,
    "registrynumber": 23883,
    "tradename": "bordelés luqsa",
    "headline": "alintra, s.a.",
    "madeby": "sulfato cuprocalcico 20% [wp] p/p"
  },
  {
    "id": 725,
    "registrynumber": 23886,
    "tradename": "fruitfog-i",
    "headline": "fomesa fruitech s.l.",
    "madeby": "imazalil 25% [fd] p/p"
  },
  {
    "id": 726,
    "registrynumber": 23887,
    "tradename": "folpan duo",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "folpet 10% + sulfato cuprocalcico 20% (expr. en cu ) [wp] p/p"
  },
  {
    "id": 727,
    "registrynumber": 23891,
    "tradename": "caldo bordeles valles",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 728,
    "registrynumber": 23900,
    "tradename": "fenhort",
    "headline": "l. gobbi s.r.l.",
    "madeby": "acido giberelico 0,25% + mcpa 0,25% (ester tioetilico) [ec] p/v"
  },
  {
    "id": 729,
    "registrynumber": 23907,
    "tradename": "zaping",
    "headline": "upl iberia, s.a.",
    "madeby": "metamitrona 70% [wg] p/p"
  },
  {
    "id": 730,
    "registrynumber": 23912,
    "tradename": "anibal",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clortoluron 40% + diflufenican 2,5% [sc] p/v"
  },
  {
    "id": 731,
    "registrynumber": 23917,
    "tradename": "fenfen",
    "headline": "lainco, s.a.",
    "madeby": "oxifluorfen 24% [ec] p/v"
  },
  {
    "id": 732,
    "registrynumber": 23919,
    "tradename": "smartfresh",
    "headline": "agrofresh holding france s.a.s.",
    "madeby": "1-metilciclopropeno 3,3% [vp] p/p"
  },
  {
    "id": 733,
    "registrynumber": 23934,
    "tradename": "cubix",
    "headline": "bayer cropscience, s.l.",
    "madeby": "foramsulfuron 2,25% [od] p/v"
  },
  {
    "id": 734,
    "registrynumber": 23939,
    "tradename": "traxi 70 flow",
    "headline": "brandt europe, s.l.",
    "madeby": "oxicloruro de cobre 70% (expr. en cu) [sc] p/v"
  },
  {
    "id": 735,
    "registrynumber": 23940,
    "tradename": "kox",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 736,
    "registrynumber": 23943,
    "tradename": "merpan 47,5 sc",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "captan 47,5% [sc] p/v"
  },
  {
    "id": 737,
    "registrynumber": 23952,
    "tradename": "hidroxigreen 50",
    "headline": "probelte s.a.u.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 738,
    "registrynumber": 23959,
    "tradename": "mojante oro no ionico",
    "headline": "quimicas oro, s.a.",
    "madeby": "alquil poliglicol 20% (eter) [sl] p/v"
  },
  {
    "id": 739,
    "registrynumber": 23975,
    "tradename": "zicoluq 320",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "mancozeb 20% + oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 740,
    "registrynumber": 23976,
    "tradename": "bazthu-32",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa abts-351, 640 g/kg) 64 % (32 millones de clu/g) [wp] p/p"
  },
  {
    "id": 741,
    "registrynumber": 23977,
    "tradename": "signum",
    "headline": "basf española s.l.u.",
    "madeby": "piraclostrobin 6,7% + boscalida 26,7% (i) [wg] p/p"
  },
  {
    "id": 742,
    "registrynumber": 23987,
    "tradename": "neoram 37,5 wg",
    "headline": "isagro s.p.a.",
    "madeby": "oxicloruro de cobre 37,5% (expr. en cu ) [wg] p/p"
  },
  {
    "id": 743,
    "registrynumber": 24000,
    "tradename": "dadora wg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metribuzina 70% [wg] p/p"
  },
  {
    "id": 744,
    "registrynumber": 24001,
    "tradename": "tornado-n",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metamitrona 70% [sc] p/v"
  },
  {
    "id": 745,
    "registrynumber": 24004,
    "tradename": "legacy plus",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clortoluron 40% + diflufenican 2,5% [sc] p/v"
  },
  {
    "id": 746,
    "registrynumber": 24010,
    "tradename": "oberon",
    "headline": "bayer cropscience, s.l.",
    "madeby": "spiromesifen 24% [sc] p/v"
  },
  {
    "id": 747,
    "registrynumber": 24016,
    "tradename": "fungistop",
    "headline": "lainco, s.a.",
    "madeby": "azufre 72% [sc] p/v"
  },
  {
    "id": 748,
    "registrynumber": 24017,
    "tradename": "sulcox bordeles",
    "headline": "isagro s.p.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wp] p/p"
  },
  {
    "id": 749,
    "registrynumber": 24018,
    "tradename": "sanagricola bm wg",
    "headline": "alintra, s.a.",
    "madeby": "sulfato cuprocalcico 20% (expr.en cu) [wg] p/p"
  },
  {
    "id": 750,
    "registrynumber": 24022,
    "tradename": "viper",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "penoxsulam 2,04% [od] p/v"
  },
  {
    "id": 751,
    "registrynumber": 24027,
    "tradename": "nautile",
    "headline": "upl iberia, s.a.",
    "madeby": "cimoxanilo 5% + mancozeb 68% [wg] p/p"
  },
  {
    "id": 752,
    "registrynumber": 24035,
    "tradename": "lexone 70 wg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metribuzina 70% [wg] p/p"
  },
  {
    "id": 753,
    "registrynumber": 24037,
    "tradename": "mirenal",
    "headline": "probelte s.a.u.",
    "madeby": "diflufenican 30% [sc] p/v"
  },
  {
    "id": 754,
    "registrynumber": 24039,
    "tradename": "cuprosan wg",
    "headline": "alintra, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wg] p/p"
  },
  {
    "id": 755,
    "registrynumber": 24042,
    "tradename": "heliosol",
    "headline": "action pin",
    "madeby": "alcoholes terpenicos 66,5% [ec] p/v"
  },
  {
    "id": 756,
    "registrynumber": 24046,
    "tradename": "floranid doble accion",
    "headline": "compo iberia, s.l.",
    "madeby": "2,4-d acido 0,7% (sal dimetilamina) + dicamba 0,1% (sal dimetilamina) [gr] p/p"
  },
  {
    "id": 757,
    "registrynumber": 24058,
    "tradename": "diconox 52 flow",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 52% (expr. en cu) [sc] p/v"
  },
  {
    "id": 758,
    "registrynumber": 24062,
    "tradename": "milbeknock",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "milbemectina 0,93% [ec] p/v"
  },
  {
    "id": 759,
    "registrynumber": 24063,
    "tradename": "camix",
    "headline": "syngenta españa, s.a.",
    "madeby": "mesotriona 4% + s-metolacloro 40% [se] p/v"
  },
  {
    "id": 760,
    "registrynumber": 24064,
    "tradename": "centinela 10 ec",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "penconazol 10% [ec] p/v"
  },
  {
    "id": 761,
    "registrynumber": 24081,
    "tradename": "quizalop",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "quizalofop-p-etil 5% [ec] p/v"
  },
  {
    "id": 762,
    "registrynumber": 24082,
    "tradename": "leopard",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "quizalofop-p-etil 5% [ec] p/v"
  },
  {
    "id": 763,
    "registrynumber": 24085,
    "tradename": "mohican 50 sc",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "diflufenican 50% [sc] p/v"
  },
  {
    "id": 764,
    "registrynumber": 24086,
    "tradename": "afrocobre hc",
    "headline": "iqv agro españa, s.l.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 765,
    "registrynumber": 24087,
    "tradename": "trend 90",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "mojante no ionico 90% [sl] p/v"
  },
  {
    "id": 766,
    "registrynumber": 24089,
    "tradename": "muligan",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "piriproxifen 10% [ec] p/v"
  },
  {
    "id": 767,
    "registrynumber": 24094,
    "tradename": "sparta",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "tebuconazol 20% [ec] p/v"
  },
  {
    "id": 768,
    "registrynumber": 24096,
    "tradename": "epsilon",
    "headline": "probelte factories, s.a.u.",
    "madeby": "bacillus thuringiensis kurstaki (cepa pb-54) 32% (32 mill. de u.i./g) [wp] p/p"
  },
  {
    "id": 769,
    "registrynumber": 24110,
    "tradename": "difcan 300 sc",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "diflufenican 30% [sc] p/v"
  },
  {
    "id": 770,
    "registrynumber": 24112,
    "tradename": "bunazol 250",
    "headline": "sharda europe bvba",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 771,
    "registrynumber": 24123,
    "tradename": "poltix",
    "headline": "sharda europe bvba",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 772,
    "registrynumber": 24125,
    "tradename": "noble",
    "headline": "globachem n.v.",
    "madeby": "difenoconazol 25% [ec] p/v"
  },
  {
    "id": 773,
    "registrynumber": 24128,
    "tradename": "xanilo 45 wg",
    "headline": "sipcam inagra, s.a.",
    "madeby": "cimoxanilo 45% [wg] p/p"
  },
  {
    "id": 774,
    "registrynumber": 24133,
    "tradename": "torrid",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 775,
    "registrynumber": 24136,
    "tradename": "azumo mg",
    "headline": "azufrera y fertilizantes pallarès s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 776,
    "registrynumber": 24137,
    "tradename": "solfoxidante",
    "headline": "azufrera y fertilizantes pallarès s.a.",
    "madeby": "azufre 80% [dp] p/p"
  },
  {
    "id": 777,
    "registrynumber": 24138,
    "tradename": "azufre liquido 800 g/l",
    "headline": "azufrera y fertilizantes pallarès s.a.",
    "madeby": "azufre 80% [sc] p/v"
  },
  {
    "id": 778,
    "registrynumber": 24143,
    "tradename": "vivando",
    "headline": "basf española s.l.u.",
    "madeby": "metrafenona 50% [sc] p/v"
  },
  {
    "id": 779,
    "registrynumber": 24150,
    "tradename": "attrack",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "proteínas hidrolizadas 30% [sl] p/v"
  },
  {
    "id": 780,
    "registrynumber": 24156,
    "tradename": "alister",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "diflufenican 50% [sc] p/v"
  },
  {
    "id": 781,
    "registrynumber": 24157,
    "tradename": "urbole",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "diflufenican 50% [sc] p/v"
  },
  {
    "id": 782,
    "registrynumber": 24158,
    "tradename": "fox",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "bifenox 48% [sc] p/v"
  },
  {
    "id": 783,
    "registrynumber": 24165,
    "tradename": "alfil duplo",
    "headline": "industrias afrasa, s.a.",
    "madeby": "fosetil-al 35% + mancozeb 35% [wp] p/p"
  },
  {
    "id": 784,
    "registrynumber": 24172,
    "tradename": "fox-n",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "bifenox 48% [sc] p/v"
  },
  {
    "id": 785,
    "registrynumber": 24173,
    "tradename": "herocuper 70 azul",
    "headline": "herogra especiales sl",
    "madeby": "oxicloruro de cobre 70% (expr. en cu) [sc] p/v"
  },
  {
    "id": 786,
    "registrynumber": 24185,
    "tradename": "kantarel",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "penconazol 10% [ec] p/v"
  },
  {
    "id": 787,
    "registrynumber": 24200,
    "tradename": "neemazal t/s",
    "headline": "andermatt iberia, s.l.",
    "madeby": "azadiractin 1% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 788,
    "registrynumber": 24205,
    "tradename": "cikeycu",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 789,
    "registrynumber": 24206,
    "tradename": "perfil",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "hexitiazox 10% [wp] p/p"
  },
  {
    "id": 790,
    "registrynumber": 24207,
    "tradename": "alial",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "fosetil-al 80% [wp] p/p"
  },
  {
    "id": 791,
    "registrynumber": 24218,
    "tradename": "granstar 50 sx",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "tribenuron-metil 50% [sg] p/p"
  },
  {
    "id": 792,
    "registrynumber": 24235,
    "tradename": "mystic",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 793,
    "registrynumber": 24239,
    "tradename": "mamut",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "diflufenican 50% [sc] p/v"
  },
  {
    "id": 794,
    "registrynumber": 24242,
    "tradename": "cedomon",
    "headline": "koppert b.v.",
    "madeby": "pseudomonas chlororaphis 11% (8x10e12 ufc/l) [es] p/v"
  },
  {
    "id": 795,
    "registrynumber": 24243,
    "tradename": "floramite 240 sc",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "bifenazato 24% [sc] p/v"
  },
  {
    "id": 796,
    "registrynumber": 24244,
    "tradename": "tusal",
    "headline": "timac agro españa s.a.",
    "madeby": "trichoderma asperellum (cepa t25) 0,5% (1x10e8 ufc/g) + trichoderma atroviride (cepa t11) 0,5% (1x10e8 ufc/g) [wg] p/p"
  },
  {
    "id": 797,
    "registrynumber": 24252,
    "tradename": "expedient 10 ec",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "piriproxifen 10% [ec] p/v"
  },
  {
    "id": 798,
    "registrynumber": 24256,
    "tradename": "sirofop ec",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "diclofop 36% (ester metílico) [ec] p/v"
  },
  {
    "id": 799,
    "registrynumber": 24266,
    "tradename": "tasis 12,5 ec",
    "headline": "indofil industries limited (italia)",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 800,
    "registrynumber": 24269,
    "tradename": "pickill",
    "headline": "syngenta españa, s.a.",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 801,
    "registrynumber": 24277,
    "tradename": "nominee",
    "headline": "bayer cropscience, s.l.",
    "madeby": "bispiribac-sodio 40,8% [sc] p/v"
  },
  {
    "id": 802,
    "registrynumber": 24278,
    "tradename": "philabuster 400 sc",
    "headline": "janssen pmp n.v.",
    "madeby": "imazalil 20% (sulfato) + pirimetanil 20% [sc] p/v"
  },
  {
    "id": 803,
    "registrynumber": 24279,
    "tradename": "templo ew",
    "headline": "rotam agrochemical europe limited",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 804,
    "registrynumber": 24285,
    "tradename": "fungiben",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 805,
    "registrynumber": 24288,
    "tradename": "fortune aza",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "azadiractin 2,6% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 806,
    "registrynumber": 24294,
    "tradename": "ridomil gold mz pepite",
    "headline": "syngenta españa s.a.",
    "madeby": "mancozeb 64% + metalaxil-m 3,9% [wg] p/p"
  },
  {
    "id": 807,
    "registrynumber": 24299,
    "tradename": "diablo",
    "headline": "industrias afrasa, s.a.",
    "madeby": "hexitiazox 10% [wp] p/p"
  },
  {
    "id": 808,
    "registrynumber": 24302,
    "tradename": "safari",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "metil triflusulfuron 50% [wg] p/p"
  },
  {
    "id": 809,
    "registrynumber": 24313,
    "tradename": "oikos",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "azadiractin 2,6% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 810,
    "registrynumber": 24314,
    "tradename": "alazin",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "piriproxifen 10% [ec] p/v"
  },
  {
    "id": 811,
    "registrynumber": 24317,
    "tradename": "hidrocobre 50 alintra",
    "headline": "alintra, s.a.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 812,
    "registrynumber": 24318,
    "tradename": "fantic m",
    "headline": "isagro españa s.l.",
    "madeby": "mancozeb 65% + benalaxil-m 4% [wp] p/p"
  },
  {
    "id": 813,
    "registrynumber": 24319,
    "tradename": "exilis",
    "headline": "fine agrochemicals ltd.",
    "madeby": "6-benziladenina 2,1% [sl] p/v"
  },
  {
    "id": 814,
    "registrynumber": 24323,
    "tradename": "heliosoufre s",
    "headline": "action pin",
    "madeby": "azufre 70% [sc] p/v"
  },
  {
    "id": 815,
    "registrynumber": 24335,
    "tradename": "fruitgard-is-7,5",
    "headline": "fomesa fruitech s.l.",
    "madeby": "imazalil 7,5% (sulfato) [sl] p/v"
  },
  {
    "id": 816,
    "registrynumber": 24337,
    "tradename": "sidecar m",
    "headline": "isagro s.p.a.",
    "madeby": "mancozeb 65% + benalaxil-m 4% [wp] p/p"
  },
  {
    "id": 817,
    "registrynumber": 24343,
    "tradename": "safran",
    "headline": "rotam agrochemical europe limited",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 818,
    "registrynumber": 24358,
    "tradename": "latino",
    "headline": "industrias afrasa, s.a.",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 819,
    "registrynumber": 24360,
    "tradename": "fruitgard-i-50",
    "headline": "fomesa fruitech s.l.",
    "madeby": "imazalil 50% [ec] p/v"
  },
  {
    "id": 820,
    "registrynumber": 24364,
    "tradename": "ossirame 70% flow",
    "headline": "manica cobre s.l.",
    "madeby": "oxicloruro de cobre 70% (expr. en cu) [sc] p/v"
  },
  {
    "id": 821,
    "registrynumber": 24370,
    "tradename": "microcrops especial wg",
    "headline": "field protection, s.l.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 822,
    "registrynumber": 24378,
    "tradename": "orius 25 ew",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 823,
    "registrynumber": 24379,
    "tradename": "otria 25 ew",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 824,
    "registrynumber": 24383,
    "tradename": "nissorun",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "hexitiazox 10% [wp] p/p"
  },
  {
    "id": 825,
    "registrynumber": 24384,
    "tradename": "massocur 12,5 ec",
    "headline": "sharda europe bvba",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 826,
    "registrynumber": 24393,
    "tradename": "fruit fix plus",
    "headline": "certiplant b.v.",
    "madeby": "1-naftilacético 10% [sl] p/v"
  },
  {
    "id": 827,
    "registrynumber": 24397,
    "tradename": "folpan gold",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 40% + metalaxil-m 4,8% [wg] p/p"
  },
  {
    "id": 828,
    "registrynumber": 24400,
    "tradename": "keygib plus",
    "headline": "globachem n.v.",
    "madeby": "6-benziladenina 1,9% + giberelinas ga4/ga7 1,9% [sl] p/v"
  },
  {
    "id": 829,
    "registrynumber": 24401,
    "tradename": "exitox",
    "headline": "iqv agro españa, s.l.",
    "madeby": "hexitiazox 10% [wp] p/p"
  },
  {
    "id": 830,
    "registrynumber": 24408,
    "tradename": "mohican plus",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "clortoluron 40% + diflufenican 2,5% [sc] p/v"
  },
  {
    "id": 831,
    "registrynumber": 24409,
    "tradename": "trineo 25 ew",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 832,
    "registrynumber": 24410,
    "tradename": "ceremonia 25 ec",
    "headline": "globachem n.v.",
    "madeby": "difenoconazol 25% [ec] p/v"
  },
  {
    "id": 833,
    "registrynumber": 24412,
    "tradename": "nimbus",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 834,
    "registrynumber": 24413,
    "tradename": "elosal gd",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 835,
    "registrynumber": 24415,
    "tradename": "maxcel",
    "headline": "kenogard, s.a.",
    "madeby": "6-benziladenina 1,98% [sl] p/v"
  },
  {
    "id": 836,
    "registrynumber": 24416,
    "tradename": "azupec micro wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 837,
    "registrynumber": 24423,
    "tradename": "azufril 80 df",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 838,
    "registrynumber": 24435,
    "tradename": "mycotal",
    "headline": "koppert b.v.",
    "madeby": "lecanicillium muscarium (cepa ve6) 14,8%(1 x 10e10 esporas/g) [wg] p/p"
  },
  {
    "id": 839,
    "registrynumber": 24439,
    "tradename": "admiral 10 ec",
    "headline": "kenogard, s.a.",
    "madeby": "piriproxifen 10% [ec] p/v"
  },
  {
    "id": 840,
    "registrynumber": 24443,
    "tradename": "chorus",
    "headline": "syngenta españa, s.a.",
    "madeby": "ciprodinil 50% [wg] p/p"
  },
  {
    "id": 841,
    "registrynumber": 24445,
    "tradename": "athabel",
    "headline": "nufarm españa, s.a.",
    "madeby": "diflufenican 4% + oxifluorfen 15% [sc] p/v"
  },
  {
    "id": 842,
    "registrynumber": 24447,
    "tradename": "bellis",
    "headline": "basf española s.l.u.",
    "madeby": "boscalida 25,2% + piraclostrobin 12,8% [wg] p/p"
  },
  {
    "id": 843,
    "registrynumber": 24457,
    "tradename": "covinex 700 flow",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "oxicloruro de cobre 70% [sc] p/v"
  },
  {
    "id": 844,
    "registrynumber": 24460,
    "tradename": "helocur 25 ew",
    "headline": "helm iberica, s.a.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 845,
    "registrynumber": 24464,
    "tradename": "wister",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 846,
    "registrynumber": 24465,
    "tradename": "cuper 70 flow-trade",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "oxicloruro de cobre 70% [sc] p/v"
  },
  {
    "id": 847,
    "registrynumber": 24468,
    "tradename": "fungiben lu",
    "headline": "productos flower, s.a.",
    "madeby": "miclobutanil 0,0075% [al] p/v"
  },
  {
    "id": 848,
    "registrynumber": 24469,
    "tradename": "vincare",
    "headline": "comercial química massó, s.a.",
    "madeby": "bentiavalicarb isopropil 1,75% + folpet 50% [wg] p/p"
  },
  {
    "id": 849,
    "registrynumber": 24477,
    "tradename": "norton",
    "headline": "fitalbi s.l.",
    "madeby": "alquil poliglicol 20% (eter) [sl] p/v"
  },
  {
    "id": 850,
    "registrynumber": 24481,
    "tradename": "nilbu",
    "headline": "sharda europe bvba",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 851,
    "registrynumber": 24483,
    "tradename": "vitan premium",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 852,
    "registrynumber": 24484,
    "tradename": "nutrel",
    "headline": "agrichem, s.a.",
    "madeby": "proteínas hidrolizadas 30% [sl] p/v"
  },
  {
    "id": 853,
    "registrynumber": 24492,
    "tradename": "nic-sar",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 854,
    "registrynumber": 24493,
    "tradename": "nicogan",
    "headline": "nufarm españa, s.a.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 855,
    "registrynumber": 24500,
    "tradename": "taquilan",
    "headline": "syngenta españa, s.a.",
    "madeby": "dicamba 48% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 856,
    "registrynumber": 24504,
    "tradename": "orius 20 ew",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 20% [ew] p/v"
  },
  {
    "id": 857,
    "registrynumber": 24505,
    "tradename": "glyfos titan",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "glifosato 68% (sal amónica) [sg] p/p"
  },
  {
    "id": 858,
    "registrynumber": 24507,
    "tradename": "harmony 50 sx",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "tifensulfuron-metil 50% [sg] p/p"
  },
  {
    "id": 859,
    "registrynumber": 24515,
    "tradename": "rusnet",
    "headline": "sharda europe bvba",
    "madeby": "quizalofop-p-etil 5% [ec] p/v"
  },
  {
    "id": 860,
    "registrynumber": 24519,
    "tradename": "florbac",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis aizawai (cepa abts-1857, 540 g/kg) 54% (15 millones de clu/g) [wg] p/p"
  },
  {
    "id": 861,
    "registrynumber": 24520,
    "tradename": "biobit 32",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa abts-351) 54[wg] p/p"
  },
  {
    "id": 862,
    "registrynumber": 24524,
    "tradename": "pyrus 400 sc",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "pirimetanil 40% [sc] p/v"
  },
  {
    "id": 863,
    "registrynumber": 24526,
    "tradename": "teppeki",
    "headline": "isk biosciences europe n.v.",
    "madeby": "flonicamid 50% [wg] p/p"
  },
  {
    "id": 864,
    "registrynumber": 24529,
    "tradename": "smartfresh smarttabs",
    "headline": "agrofresh holding france s.a.s.",
    "madeby": "1-metilciclopropeno 0,63% [vp] p/p"
  },
  {
    "id": 865,
    "registrynumber": 24533,
    "tradename": "discus",
    "headline": "basf española s.l.u.",
    "madeby": "kresoxim-metil 50% [wg] p/p"
  },
  {
    "id": 866,
    "registrynumber": 24538,
    "tradename": "valbon",
    "headline": "sipcam inagra, s.a.",
    "madeby": "bentiavalicarb isopropil 1,75% + mancozeb 70% [wg] p/p"
  },
  {
    "id": 867,
    "registrynumber": 24540,
    "tradename": "mikal premium f",
    "headline": "bayer cropscience, s.l.",
    "madeby": "folpet 25% + fosetil-al 50% + iprovalicarb 4% [wg] p/p"
  },
  {
    "id": 868,
    "registrynumber": 24542,
    "tradename": "proximo",
    "headline": "industrias afrasa, s.a.",
    "madeby": "piriproxifen 10% [ec] p/v"
  },
  {
    "id": 869,
    "registrynumber": 24548,
    "tradename": "nimits",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "procloraz 20% [sc] p/v"
  },
  {
    "id": 870,
    "registrynumber": 24555,
    "tradename": "nico",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 871,
    "registrynumber": 24558,
    "tradename": "irydia",
    "headline": "nufarm españa, s.a.",
    "madeby": "diflufenican 4% + oxifluorfen 15% [sc] p/v"
  },
  {
    "id": 872,
    "registrynumber": 24560,
    "tradename": "conkora",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 873,
    "registrynumber": 24561,
    "tradename": "tayiko",
    "headline": "globachem n.v.",
    "madeby": "difenoconazol 25% [ec] p/v"
  },
  {
    "id": 874,
    "registrynumber": 24564,
    "tradename": "miclonil",
    "headline": "indofil industries limited (italia)",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 875,
    "registrynumber": 24568,
    "tradename": "fantic f",
    "headline": "isagro españa s.l.",
    "madeby": "benalaxil-m 3,75% + folpet 48% [wg] p/p"
  },
  {
    "id": 876,
    "registrynumber": 24574,
    "tradename": "laotta",
    "headline": "lainco, s.a.",
    "madeby": "abamectina 1,8% [ec] p/v"
  },
  {
    "id": 877,
    "registrynumber": 24583,
    "tradename": "cottonex neopro",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "fluometuron 25% + terbutilazina 20,8% [sc] p/v"
  },
  {
    "id": 878,
    "registrynumber": 24584,
    "tradename": "jokari",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "acrinatrin 7,5% [ew] p/v"
  },
  {
    "id": 879,
    "registrynumber": 24585,
    "tradename": "orius 20 ew-n",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 20% [ew] p/v"
  },
  {
    "id": 880,
    "registrynumber": 24598,
    "tradename": "quizalop 5 ec",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "quizalofop-p-etil 5% [ec] p/v"
  },
  {
    "id": 881,
    "registrynumber": 24611,
    "tradename": "apolo 50 sc",
    "headline": "nufarm españa, s.a.",
    "madeby": "clofentezin 50% [sc] p/v"
  },
  {
    "id": 882,
    "registrynumber": 24619,
    "tradename": "rapsan 500 sc",
    "headline": "globachem n.v.",
    "madeby": "metazacloro 50% [sc] p/v"
  },
  {
    "id": 883,
    "registrynumber": 24625,
    "tradename": "talendo",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "proquinazid 20% [ec] p/v"
  },
  {
    "id": 884,
    "registrynumber": 24629,
    "tradename": "hidroblue-50 wp",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 885,
    "registrynumber": 24630,
    "tradename": "flyral",
    "headline": "bioiberica, s.a.u.",
    "madeby": "proteínas hidrolizadas 36% [sl] p/v"
  },
  {
    "id": 886,
    "registrynumber": 24635,
    "tradename": "brai",
    "headline": "lainco, s.a.",
    "madeby": "piriproxifen 10% [ec] p/v"
  },
  {
    "id": 887,
    "registrynumber": 24636,
    "tradename": "nomada",
    "headline": "globachem n.v.",
    "madeby": "difenoconazol 25% [ec] p/v"
  },
  {
    "id": 888,
    "registrynumber": 24638,
    "tradename": "erasmus",
    "headline": "rotam agrochemical europe limited",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 889,
    "registrynumber": 24643,
    "tradename": "abanto",
    "headline": "industrias afrasa, s.a.",
    "madeby": "piretrinas 4% (extr. de pelitre) [ec] p/v"
  },
  {
    "id": 890,
    "registrynumber": 24646,
    "tradename": "shado",
    "headline": "ascenza agro, s.a. (lisboa)",
    "madeby": "sulcotriona 30% [sc] p/v"
  },
  {
    "id": 891,
    "registrynumber": 24651,
    "tradename": "vincit minima",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "flutriafol 2,5% [sc] p/v"
  },
  {
    "id": 892,
    "registrynumber": 24656,
    "tradename": "posta sx",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "tifensulfuron-metil 33,3% + tribenuron-metil 16,7% [sg] p/p"
  },
  {
    "id": 893,
    "registrynumber": 24658,
    "tradename": "bandera",
    "headline": "rotam agrochemical europe ltd.",
    "madeby": "nicosulfuron 4% [od] p/v"
  },
  {
    "id": 894,
    "registrynumber": 24659,
    "tradename": "checkmate cm-f",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "e,e-8,10-dodecadien-1-ol 14% (3,35 x 10e-7 g i.a./cápsula) [cs] p/v"
  },
  {
    "id": 895,
    "registrynumber": 24673,
    "tradename": "gizmo semillas",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 2,5% [fs] p/v"
  },
  {
    "id": 896,
    "registrynumber": 24676,
    "tradename": "zenith",
    "headline": "sipcam inagra, s.a.",
    "madeby": "azadiractin 2,6% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 897,
    "registrynumber": 24678,
    "tradename": "adigor",
    "headline": "syngenta españa, s.a.",
    "madeby": "aceite de colza 44% (expr. como éster metílico de ácidos grasos vegetales) [ec] p/v"
  },
  {
    "id": 898,
    "registrynumber": 24681,
    "tradename": "ventus",
    "headline": "isagro s.p.a.",
    "madeby": "tetraconazol 4% [me] p/v"
  },
  {
    "id": 899,
    "registrynumber": 24682,
    "tradename": "darcos",
    "headline": "rotam agrochemical europe limited",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 900,
    "registrynumber": 24684,
    "tradename": "nic-4",
    "headline": "sharda europe bvba",
    "madeby": "nicosulfuron 4% [od] p/v"
  },
  {
    "id": 901,
    "registrynumber": 24689,
    "tradename": "surround wp crop protectant",
    "headline": "tessenderlo group n.v.",
    "madeby": "caolin 95% [wp] p/p"
  },
  {
    "id": 902,
    "registrynumber": 24692,
    "tradename": "athir max",
    "headline": "sharda europe bvba",
    "madeby": "fluazifop-p-butil 12,5% [ec] p/v"
  },
  {
    "id": 903,
    "registrynumber": 24693,
    "tradename": "sidecar f",
    "headline": "isagro s.p.a.",
    "madeby": "benalaxil-m 3,75% + folpet 48% [wg] p/p"
  },
  {
    "id": 904,
    "registrynumber": 24705,
    "tradename": "pb-rope l",
    "headline": "cbc (europe) s.r.l.",
    "madeby": "z,e/z,z-7,11-hexadecadienil acetato 88,9% (140 mg/difusor) [vp] p/p"
  },
  {
    "id": 905,
    "registrynumber": 24706,
    "tradename": "cuprafor flow",
    "headline": "alintra, s.a.",
    "madeby": "oxicloruro de cobre 70% (expr. en cu) [sc] p/v"
  },
  {
    "id": 906,
    "registrynumber": 24707,
    "tradename": "hidrocu 50 wg",
    "headline": "nufarm españa, s.a.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wg] p/p"
  },
  {
    "id": 907,
    "registrynumber": 24713,
    "tradename": "folmoxanil",
    "headline": "globachem n.v.",
    "madeby": "6-benziladenina 1,9% + giberelinas ga4/ga7 1,9% [sl] p/v"
  },
  {
    "id": 908,
    "registrynumber": 24722,
    "tradename": "bazza",
    "headline": "goal up lifesciences gmbh",
    "madeby": "oxifluorfen 24% [sc] p/v"
  },
  {
    "id": 909,
    "registrynumber": 24731,
    "tradename": "vector cym",
    "headline": "alintra, s.a.",
    "madeby": "cimoxanilo 3% + sulfato cuprocalcico 22,5% (expr. en cu) [wp] p/p"
  },
  {
    "id": 910,
    "registrynumber": 24736,
    "tradename": "zenith a26",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "azadiractin 2,6% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 911,
    "registrynumber": 24737,
    "tradename": "auros 80 ec",
    "headline": "syngenta españa, s.a.",
    "madeby": "prosulfocarb 80% [ec] p/v"
  },
  {
    "id": 912,
    "registrynumber": 24742,
    "tradename": "spectrum",
    "headline": "basf española s.l.u.",
    "madeby": "dimetenamida-p 72% [ec] p/v"
  },
  {
    "id": 913,
    "registrynumber": 24743,
    "tradename": "simun",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 914,
    "registrynumber": 24751,
    "tradename": "decco-opp",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "2- fenilfenol 10% [ec] p/v"
  },
  {
    "id": 915,
    "registrynumber": 24761,
    "tradename": "folpan gold n",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 40% + metalaxil-m 4,8% [wg] p/p"
  },
  {
    "id": 916,
    "registrynumber": 24762,
    "tradename": "successor 600",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "petoxamida 60% [ec] p/v"
  },
  {
    "id": 917,
    "registrynumber": 24765,
    "tradename": "elite plus 6 od",
    "headline": "isk biosciences europe n.v.",
    "madeby": "nicosulfuron 6% [od] p/v"
  },
  {
    "id": 918,
    "registrynumber": 24771,
    "tradename": "gibenina",
    "headline": "globachem n.v.",
    "madeby": "6-benziladenina 1,9% + giberelinas ga4/ga7 1,9% [sl] p/v"
  },
  {
    "id": 919,
    "registrynumber": 24772,
    "tradename": "radar plus",
    "headline": "sharda europe bvba",
    "madeby": "fluazifop-p-butil 12,5% [ec] p/v"
  },
  {
    "id": 920,
    "registrynumber": 24774,
    "tradename": "tansil",
    "headline": "sharda europe bvba",
    "madeby": "tebuconazol 2,5% [fs] p/v"
  },
  {
    "id": 921,
    "registrynumber": 24783,
    "tradename": "ortocil",
    "headline": "productos citrosol s.a.",
    "madeby": "2- fenilfenol 10% [ec] p/v"
  },
  {
    "id": 922,
    "registrynumber": 24786,
    "tradename": "pilclyn",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "tebuconazol 43% [sc] p/v"
  },
  {
    "id": 923,
    "registrynumber": 24787,
    "tradename": "inka",
    "headline": "syngenta españa, s.a.",
    "madeby": "dicamba 48% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 924,
    "registrynumber": 24798,
    "tradename": "decano",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "sulcotriona 30% [sc] p/v"
  },
  {
    "id": 925,
    "registrynumber": 24800,
    "tradename": "sajon",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "nicosulfuron 4% [od] p/v"
  },
  {
    "id": 926,
    "registrynumber": 24802,
    "tradename": "ossirame 30 wp",
    "headline": "manica, spa",
    "madeby": "oxicloruro de cobre 30% (expr. en cu) [wp] p/p"
  },
  {
    "id": 927,
    "registrynumber": 24807,
    "tradename": "luqsazufre-80 wg",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 928,
    "registrynumber": 24808,
    "tradename": "ossirame 50 wp",
    "headline": "manica cobre s.l.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 929,
    "registrynumber": 24809,
    "tradename": "ralon super",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fenoxaprop-p-etil 6,9% [ew] p/v"
  },
  {
    "id": 930,
    "registrynumber": 24812,
    "tradename": "quick 5 ec",
    "headline": "sharda europe bvba",
    "madeby": "quizalofop-p-etil 5% [ec] p/v"
  },
  {
    "id": 931,
    "registrynumber": 24814,
    "tradename": "song",
    "headline": "sipcam inagra, s.a.",
    "madeby": "tebuconazol 25% [ec] p/v"
  },
  {
    "id": 932,
    "registrynumber": 24816,
    "tradename": "azar",
    "headline": "sipcam inagra, s.a.",
    "madeby": "azadiractin 2,6% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 933,
    "registrynumber": 24825,
    "tradename": "regulex 10 sg",
    "headline": "kenogard, s.a.",
    "madeby": "giberelinas ga4/ga7 10% [sg] p/p"
  },
  {
    "id": 934,
    "registrynumber": 24826,
    "tradename": "triumph",
    "headline": "kenogard, s.a.",
    "madeby": "giberelinas ga4/ga7 10% [sg] p/p"
  },
  {
    "id": 935,
    "registrynumber": 24845,
    "tradename": "belthirul-s",
    "headline": "probelte s.a.u.",
    "madeby": "azufre 60% + bacillus thuringiensis kurstaki (cepa pb-54) 0,5% (1x10e6 u.i./g) [dp] p/p"
  },
  {
    "id": 936,
    "registrynumber": 24850,
    "tradename": "tebusha",
    "headline": "sharda europe bvba",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 937,
    "registrynumber": 24852,
    "tradename": "wismar sc",
    "headline": "upl iberia, s.a.",
    "madeby": "metamitrona 70% [sc] p/v"
  },
  {
    "id": 938,
    "registrynumber": 24855,
    "tradename": "tyllanex magnum",
    "headline": "syngenta españa, s.a.",
    "madeby": "s-metolacloro 31,25% + terbutilazina 18,75% [se] p/v"
  },
  {
    "id": 939,
    "registrynumber": 24864,
    "tradename": "flowbrix",
    "headline": "montanwerke brixlegg ag",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 940,
    "registrynumber": 24867,
    "tradename": "laitri",
    "headline": "sharda europe bvba",
    "madeby": "miclobutanil 12,5% [ec] p/v"
  },
  {
    "id": 941,
    "registrynumber": 24868,
    "tradename": "abion e",
    "headline": "abion (euro)",
    "madeby": "parafina 34,63% [ew] p/v"
  },
  {
    "id": 942,
    "registrynumber": 24878,
    "tradename": "fazilo",
    "headline": "compo iberia, s.l.",
    "madeby": "abamectina 0,0015% + piretrinas 0,02% [al] p/v"
  },
  {
    "id": 943,
    "registrynumber": 24880,
    "tradename": "core",
    "headline": "sharda europe bvba",
    "madeby": "difenoconazol 25% [ec] p/v"
  },
  {
    "id": 944,
    "registrynumber": 24883,
    "tradename": "force 1,5 g",
    "headline": "syngenta españa, s.a.",
    "madeby": "teflutrin 1,5% [gr] p/p"
  },
  {
    "id": 945,
    "registrynumber": 24887,
    "tradename": "nicoperts",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 946,
    "registrynumber": 24895,
    "tradename": "dunko",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metazacloro 50% [sc] p/v"
  },
  {
    "id": 947,
    "registrynumber": 24898,
    "tradename": "sulcotrina",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "sulcotriona 30% [sc] p/v"
  },
  {
    "id": 948,
    "registrynumber": 24899,
    "tradename": "nicozea",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "nicosulfuron 4% [od] p/v"
  },
  {
    "id": 949,
    "registrynumber": 24901,
    "tradename": "equation contact dp",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "famoxadona 6,25% + mancozeb 62,5% [wg] p/p"
  },
  {
    "id": 950,
    "registrynumber": 24907,
    "tradename": "klaxon",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "cletodim 24% [ec] p/v"
  },
  {
    "id": 951,
    "registrynumber": 24910,
    "tradename": "cheetah ls",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fenoxaprop-p-etil 6,9% [ew] p/v"
  },
  {
    "id": 952,
    "registrynumber": 24915,
    "tradename": "chaman",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 953,
    "registrynumber": 24916,
    "tradename": "hecate pm",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 954,
    "registrynumber": 24922,
    "tradename": "gibb plus",
    "headline": "globachem n.v.",
    "madeby": "giberelinas ga4/ga7 1% [sl] p/v"
  },
  {
    "id": 955,
    "registrynumber": 24926,
    "tradename": "dinapic",
    "headline": "industrias afrasa, s.a.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 956,
    "registrynumber": 24928,
    "tradename": "lamdex 2.5 wg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "lambda cihalotrin 2,5% [wg] p/p"
  },
  {
    "id": 957,
    "registrynumber": 24930,
    "tradename": "droxi",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "hidroxido cuprico 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 958,
    "registrynumber": 24934,
    "tradename": "impala",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "fenbuconazol 5% [ew] p/v"
  },
  {
    "id": 959,
    "registrynumber": 24935,
    "tradename": "curzate 60 wg",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "cimoxanilo 60% [wg] p/p"
  },
  {
    "id": 960,
    "registrynumber": 24937,
    "tradename": "cera-trap",
    "headline": "bioiberica, s.a.u.",
    "madeby": "proteínas hidrolizadas 5,9% [al] p/v"
  },
  {
    "id": 961,
    "registrynumber": 24942,
    "tradename": "kendo",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "lambda cihalotrin 10% [cs] p/v"
  },
  {
    "id": 962,
    "registrynumber": 24943,
    "tradename": "microthiol special liquido",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 82,5% [sc] p/v"
  },
  {
    "id": 963,
    "registrynumber": 24945,
    "tradename": "dual gold 96 ec",
    "headline": "syngenta españa, s.a.",
    "madeby": "s-metolacloro 96% [ec] p/v"
  },
  {
    "id": 964,
    "registrynumber": 24949,
    "tradename": "airone",
    "headline": "isagro s.p.a.",
    "madeby": "hidroxido cuprico 13,6% (expr. en cu) + oxicloruro de cobre 13,6% (expr. en cu) [sc] p/v"
  },
  {
    "id": 965,
    "registrynumber": 24950,
    "tradename": "airone sc blue",
    "headline": "isagro s.p.a.",
    "madeby": "hidroxido cuprico 13,6% (expr. en cu) + oxicloruro de cobre 13,6% (expr. en cu) [sc] p/v"
  },
  {
    "id": 966,
    "registrynumber": 24951,
    "tradename": "grifon",
    "headline": "isagro españa s.l.",
    "madeby": "hidroxido cuprico 13,6% (expr. en cu) + oxicloruro de cobre 13,6% (expr. en cu) [sc] p/v"
  },
  {
    "id": 967,
    "registrynumber": 24954,
    "tradename": "genoxone zx",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "2,4-d acido 9,3% (ester 2-etilhexil) + triclopir 10,36% (ester butoxietílico) [ec] p/v"
  },
  {
    "id": 968,
    "registrynumber": 24957,
    "tradename": "flowbrix blu",
    "headline": "montanwerke brixlegg ag",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 969,
    "registrynumber": 24977,
    "tradename": "dazide enhance",
    "headline": "fine agrochemicals ltd.",
    "madeby": "daminozida 85% [sg] p/p"
  },
  {
    "id": 970,
    "registrynumber": 24978,
    "tradename": "cal-ex avance ew",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "abamectina 1,8% [ew] p/v"
  },
  {
    "id": 971,
    "registrynumber": 24989,
    "tradename": "stadio f",
    "headline": "isagro s.p.a.",
    "madeby": "benalaxil-m 3,75% + folpet 48% [wg] p/p"
  },
  {
    "id": 972,
    "registrynumber": 24991,
    "tradename": "zolvis 80% wg",
    "headline": "nedrom iberica s.l.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 973,
    "registrynumber": 24998,
    "tradename": "fenova super",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "fenoxaprop-p-etil 6,9% [ew] p/v"
  },
  {
    "id": 974,
    "registrynumber": 25006,
    "tradename": "fusilade max 12,5 ec",
    "headline": "nufarm españa, s.a.",
    "madeby": "fluazifop-p-butil 12,5% [ec] p/v"
  },
  {
    "id": 975,
    "registrynumber": 25011,
    "tradename": "topas",
    "headline": "syngenta españa, s.a.",
    "madeby": "penconazol 20% [ew] p/v"
  },
  {
    "id": 976,
    "registrynumber": 25016,
    "tradename": "dynamec",
    "headline": "syngenta españa, s.a.",
    "madeby": "abamectina 1,8% [ew] p/v"
  },
  {
    "id": 977,
    "registrynumber": 25023,
    "tradename": "karathane star",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "meptildinocap 35% [ec] p/v"
  },
  {
    "id": 978,
    "registrynumber": 25024,
    "tradename": "insegar 25 wg",
    "headline": "syngenta españa, s.a.",
    "madeby": "fenoxicarb 25% [wg] p/p"
  },
  {
    "id": 979,
    "registrynumber": 25027,
    "tradename": "geriones 250",
    "headline": "sharda europe bvba",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 980,
    "registrynumber": 25030,
    "tradename": "bettix flo",
    "headline": "upl iberia, s.a.",
    "madeby": "metamitrona 70% [sc] p/v"
  },
  {
    "id": 981,
    "registrynumber": 25034,
    "tradename": "zafiro",
    "headline": "sipcam inagra, s.a.",
    "madeby": "azadiractin 2,6% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 982,
    "registrynumber": 25035,
    "tradename": "azafit",
    "headline": "sipcam inagra, s.a.",
    "madeby": "azadiractin 2,6% (como azadiractin a) [ec] p/v"
  },
  {
    "id": 983,
    "registrynumber": 25042,
    "tradename": "biomax",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa abts-351) 54[wg] p/p"
  },
  {
    "id": 984,
    "registrynumber": 25044,
    "tradename": "sanagricola wg",
    "headline": "isagro españa s.l.",
    "madeby": "oxicloruro de cobre 37,5% (expr. en cu ) [wg] p/p"
  },
  {
    "id": 985,
    "registrynumber": 25046,
    "tradename": "bordeaux isagro wg",
    "headline": "isagro s.p.a.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wg] p/p"
  },
  {
    "id": 986,
    "registrynumber": 25050,
    "tradename": "sultan n",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metazacloro 50% [sc] p/v"
  },
  {
    "id": 987,
    "registrynumber": 25053,
    "tradename": "tomcat maiz sc",
    "headline": "nufarm españa, s.a.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 988,
    "registrynumber": 25055,
    "tradename": "thiopron 825",
    "headline": "upl iberia, s.a.",
    "madeby": "azufre 82,5% [sc] p/v"
  },
  {
    "id": 989,
    "registrynumber": 25056,
    "tradename": "dipol",
    "headline": "sharda europe bvba",
    "madeby": "fluazifop-p-butil 12,5% [ec] p/v"
  },
  {
    "id": 990,
    "registrynumber": 25069,
    "tradename": "equation pro dp",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "cimoxanilo 30% + famoxadona 22,5% [wg] p/p"
  },
  {
    "id": 991,
    "registrynumber": 25076,
    "tradename": "cratos",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "fenoxaprop-p-etil 6,9% [ew] p/v"
  },
  {
    "id": 992,
    "registrynumber": 25080,
    "tradename": "nicovita",
    "headline": "nufarm españa, s.a.",
    "madeby": "nicosulfuron 4% [sc] p/v"
  },
  {
    "id": 993,
    "registrynumber": 25083,
    "tradename": "explicit 30 wg",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "indoxacarb 30% [wg] p/p"
  },
  {
    "id": 994,
    "registrynumber": 25092,
    "tradename": "trineo 25 wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "tebuconazol 25% [wg] p/p"
  },
  {
    "id": 995,
    "registrynumber": 25094,
    "tradename": "serenade as",
    "headline": "bayer cropscience, s.l.",
    "madeby": "bacillus subtilis 1,37% (1,7 x 10e10 cfu/g) [sc] p/v"
  },
  {
    "id": 996,
    "registrynumber": 25096,
    "tradename": "quickphos pellets",
    "headline": "upl iberia, s.a.",
    "madeby": "fosfuro de aluminio 56% (0,6 g/tableta) [ge] p/p"
  },
  {
    "id": 997,
    "registrynumber": 25098,
    "tradename": "granstar super 50 sx",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "tifensulfuron-metil 25% + tribenuron-metil 25% [sg] p/p"
  },
  {
    "id": 998,
    "registrynumber": 25100,
    "tradename": "decis",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 999,
    "registrynumber": 25110,
    "tradename": "sparta wg",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "tebuconazol 25% [wg] p/p"
  },
  {
    "id": 1000,
    "registrynumber": 25113,
    "tradename": "fluazibel",
    "headline": "sharda europe bvba",
    "madeby": "fluazifop-p-butil 12,5% [ec] p/v"
  },
  {
    "id": 1001,
    "registrynumber": 25114,
    "tradename": "doryoku",
    "headline": "kenogard, s.a.",
    "madeby": "etoxazol 11% [sc] p/v"
  },
  {
    "id": 1002,
    "registrynumber": 25115,
    "tradename": "permit",
    "headline": "nissan chemical europe s.a.s.",
    "madeby": "halosulfuron-metil 75% [wg] p/p"
  },
  {
    "id": 1003,
    "registrynumber": 25116,
    "tradename": "intensity evo",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "aminopiralid 30% (sal potásica) + florasulam 15% [wg] p/p"
  },
  {
    "id": 1004,
    "registrynumber": 25118,
    "tradename": "quadris 25 sc",
    "headline": "syngenta españa, s.a.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1005,
    "registrynumber": 25122,
    "tradename": "zarco",
    "headline": "sharda europe bvba",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 1006,
    "registrynumber": 25125,
    "tradename": "keygib",
    "headline": "globachem n.v.",
    "madeby": "giberelinas ga4/ga7 1% [sl] p/v"
  },
  {
    "id": 1007,
    "registrynumber": 25129,
    "tradename": "mystic 25 wg",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 25% [wg] p/p"
  },
  {
    "id": 1008,
    "registrynumber": 25139,
    "tradename": "starpro 250 ew",
    "headline": "rotam agrochemical europe limited",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 1009,
    "registrynumber": 25143,
    "tradename": "karate zeon + 1.5 cs",
    "headline": "syngenta españa, s.a.",
    "madeby": "lambda cihalotrin 1,5% [cs] p/v"
  },
  {
    "id": 1010,
    "registrynumber": 25146,
    "tradename": "moncut sc",
    "headline": "comercial química massó, s.a.",
    "madeby": "flutolanil 46% [sc] p/v"
  },
  {
    "id": 1011,
    "registrynumber": 25150,
    "tradename": "pregress wg",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 25% [wg] p/p"
  },
  {
    "id": 1012,
    "registrynumber": 25152,
    "tradename": "poltiglia 20 wg",
    "headline": "manica, spa",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1013,
    "registrynumber": 25153,
    "tradename": "ossirame 35 wg",
    "headline": "manica, spa",
    "madeby": "oxicloruro de cobre 35% (expr. en cu ) [wg] p/p"
  },
  {
    "id": 1014,
    "registrynumber": 25156,
    "tradename": "cupergreen flow 70",
    "headline": "laboratorios econatur s.l.",
    "madeby": "oxicloruro de cobre 70% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1015,
    "registrynumber": 25157,
    "tradename": "curenox 38 flow blue",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1016,
    "registrynumber": 25158,
    "tradename": "iqv oxicloruro 50 azul",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 50% (expr. en cu) [wp] p/p"
  },
  {
    "id": 1017,
    "registrynumber": 25162,
    "tradename": "microram 35 wg",
    "headline": "manica cobre s.l.",
    "madeby": "oxicloruro de cobre 35% (expr. en cu ) [wg] p/p"
  },
  {
    "id": 1018,
    "registrynumber": 25163,
    "tradename": "caldo manica 20 wg",
    "headline": "manica cobre s.l.",
    "madeby": "sulfato cuprocalcico 20% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1019,
    "registrynumber": 25164,
    "tradename": "londax",
    "headline": "upl iberia, s.a.",
    "madeby": "bensulfuron-metil 60% [wg] p/p"
  },
  {
    "id": 1020,
    "registrynumber": 25175,
    "tradename": "checkmate ptb-xl",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "5-decen-1-il-acetato 8,34% + 5-decen-1-ol 1,73% [vp] p/p"
  },
  {
    "id": 1021,
    "registrynumber": 25186,
    "tradename": "revus",
    "headline": "syngenta españa, s.a.",
    "madeby": "mandipropamid 25% [sc] p/v"
  },
  {
    "id": 1022,
    "registrynumber": 25199,
    "tradename": "fruitamar-l",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "ana 0,45% + ana amida 1,2% [sl] p/v"
  },
  {
    "id": 1023,
    "registrynumber": 25201,
    "tradename": "duaxo fungicida polivalente",
    "headline": "compo iberia, s.l.",
    "madeby": "difenoconazol 0,0167% [al] p/v"
  },
  {
    "id": 1024,
    "registrynumber": 25202,
    "tradename": "duaxo fungicida polivalente concentrado",
    "headline": "compo iberia, s.l.",
    "madeby": "difenoconazol 1,67% [ec] p/v"
  },
  {
    "id": 1025,
    "registrynumber": 25210,
    "tradename": "ecodian anarsia",
    "headline": "isagro españa s.l.",
    "madeby": "5-decen-1-il-acetato 0,660% + 5-decen-1-ol 0,113% [vp] p/p"
  },
  {
    "id": 1026,
    "registrynumber": 25213,
    "tradename": "cobre iqv sc",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "oxicloruro de cobre 70% [sc] p/v"
  },
  {
    "id": 1027,
    "registrynumber": 25214,
    "tradename": "profiler",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fluopicolida 4,44% + fosetil-al 66,67% [wg] p/p"
  },
  {
    "id": 1028,
    "registrynumber": 25225,
    "tradename": "broadway star",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "florasulam 1,42% + piroxsulam 7,08% [wg] p/p"
  },
  {
    "id": 1029,
    "registrynumber": 25234,
    "tradename": "bioten",
    "headline": "isagro españa s.l.",
    "madeby": "trichoderma asperellum (cepa icc012) 2% (5 x 10 e7 ufc/g) + trichoderma gamsii (cepa icc080) 2% (5 x 10 e7 ufc/g) [wp] p/p"
  },
  {
    "id": 1030,
    "registrynumber": 25235,
    "tradename": "stadio m",
    "headline": "isagro s.p.a.",
    "madeby": "mancozeb 65% + benalaxil-m 4% [wp] p/p"
  },
  {
    "id": 1031,
    "registrynumber": 25243,
    "tradename": "herocuper 38 azul",
    "headline": "herogra especiales sl",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1032,
    "registrynumber": 25244,
    "tradename": "dinalem cobre 380",
    "headline": "herogra especiales sl",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1033,
    "registrynumber": 25246,
    "tradename": "neozil 50 ec",
    "headline": "laboratorios agrochem, s.l.",
    "madeby": "imazalil 50% [ec] p/v"
  },
  {
    "id": 1034,
    "registrynumber": 25251,
    "tradename": "maniflow",
    "headline": "manica, spa",
    "madeby": "sulfato cuprocalcico 12,4% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1035,
    "registrynumber": 25252,
    "tradename": "poltiglia flow 38,5",
    "headline": "manica cobre s.l.",
    "madeby": "sulfato cuprocalcico 12,4% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1036,
    "registrynumber": 25257,
    "tradename": "bioscrop bt 32",
    "headline": "probelte s.a.u.",
    "madeby": "bacillus thuringiensis kurstaki (cepa pb-54) 32% (32 mill. de u.i./g) [wp] p/p"
  },
  {
    "id": 1037,
    "registrynumber": 25258,
    "tradename": "bioscrop bt 16",
    "headline": "probelte s.a.u.",
    "madeby": "bacillus thuringiensis kurstaki (cepa pb-54) 8% (16x10e6 u.i./g) [wp] p/p"
  },
  {
    "id": 1038,
    "registrynumber": 25269,
    "tradename": "hidro 40 wg",
    "headline": "alintra, s.a.",
    "madeby": "hidroxido cuprico 40% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1039,
    "registrynumber": 25272,
    "tradename": "copérnico 25 wg hibio",
    "headline": "albaugh tki d.o.o.",
    "madeby": "hidroxido cuprico 25% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1040,
    "registrynumber": 25273,
    "tradename": "remedier",
    "headline": "isagro s.p.a.",
    "madeby": "trichoderma asperellum (cepa icc012) 2% (5 x 10 e7 ufc/g) + trichoderma gamsii (cepa icc080) 2% (5 x 10 e7 ufc/g) [wp] p/p"
  },
  {
    "id": 1041,
    "registrynumber": 25276,
    "tradename": "copist x",
    "headline": "albaugh tki d.o.o.",
    "madeby": "oxicloruro de cobre 25% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1042,
    "registrynumber": 25277,
    "tradename": "copist h",
    "headline": "albaugh tki d.o.o.",
    "madeby": "hidroxido cuprico 20% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1043,
    "registrynumber": 25278,
    "tradename": "drycop evo 35 wg",
    "headline": "albaugh tki d.o.o.",
    "madeby": "oxicloruro de cobre 35% (exp. en cu) [wg] p/p"
  },
  {
    "id": 1044,
    "registrynumber": 25286,
    "tradename": "chardex",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "mcpa 35% (sal amina) + clopiralida 3,5% (sal amina) [sl] p/v"
  },
  {
    "id": 1045,
    "registrynumber": 25287,
    "tradename": "raxil plus",
    "headline": "bayer cropscience, s.l.",
    "madeby": "protioconazol 25% + tebuconazol 15% [fs] p/v"
  },
  {
    "id": 1046,
    "registrynumber": 25290,
    "tradename": "cerall",
    "headline": "koppert b.v.",
    "madeby": "pseudomonas chlororaphis 20,4% (5 x 10 e9 ufc/ml) [fs] p/v"
  },
  {
    "id": 1047,
    "registrynumber": 25292,
    "tradename": "valis f",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "folpet 48% + valifenalato 6% [wg] p/p"
  },
  {
    "id": 1048,
    "registrynumber": 25293,
    "tradename": "java f",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "folpet 48% + valifenalato 6% [wg] p/p"
  },
  {
    "id": 1049,
    "registrynumber": 25294,
    "tradename": "emendo f",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "folpet 48% + valifenalato 6% [wg] p/p"
  },
  {
    "id": 1050,
    "registrynumber": 25295,
    "tradename": "spyrale ec",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "difenoconazol 10% + fenpropidin 37,5% [ec] p/v"
  },
  {
    "id": 1051,
    "registrynumber": 25296,
    "tradename": "altacor 35 wg",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "clorantraniliprol 35% [wg] p/p"
  },
  {
    "id": 1052,
    "registrynumber": 25297,
    "tradename": "kenpyr",
    "headline": "biagro s.l.",
    "madeby": "piretrinas 2% (extr. de pelitre) [ec] p/v"
  },
  {
    "id": 1053,
    "registrynumber": 25298,
    "tradename": "movento 150 o-teq",
    "headline": "bayer cropscience, s.l.",
    "madeby": "spirotetramat 15% [od] p/v"
  },
  {
    "id": 1054,
    "registrynumber": 25302,
    "tradename": "neozil 10 sl",
    "headline": "laboratorios agrochem, s.l.",
    "madeby": "imazalil 10% (sal de hidrogensulfato) [sl] p/v"
  },
  {
    "id": 1055,
    "registrynumber": 25305,
    "tradename": "tenor",
    "headline": "bayer cropscience, s.l.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 1056,
    "registrynumber": 25307,
    "tradename": "progibb 40 sg",
    "headline": "kenogard, s.a.",
    "madeby": "acido giberelico 40% [sg] p/p"
  },
  {
    "id": 1057,
    "registrynumber": 25313,
    "tradename": "belthirul 16 sc",
    "headline": "probelte s.a.u.",
    "madeby": "bacillus thuringiensis kurstaki (cepa pb-54) 9,74% (16x10e6 u.i./g) [sc] p/v"
  },
  {
    "id": 1058,
    "registrynumber": 25314,
    "tradename": "lepiback",
    "headline": "probelte s.a.u.",
    "madeby": "bacillus thuringiensis kurstaki (cepa pb-54) 8% (16x10e6 u.i./g) [wp] p/p"
  },
  {
    "id": 1059,
    "registrynumber": 25316,
    "tradename": "pergado f",
    "headline": "syngenta españa, s.a.",
    "madeby": "folpet 40% + mandipropamid 5% [wg] p/p"
  },
  {
    "id": 1060,
    "registrynumber": 25324,
    "tradename": "nicosulfuron 4% od",
    "headline": "sharda europe bvba",
    "madeby": "nicosulfuron 4% [od] p/v"
  },
  {
    "id": 1061,
    "registrynumber": 25327,
    "tradename": "novicure",
    "headline": "upl iberia, s.a.",
    "madeby": "sulfato tribasico de cobre 40% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1062,
    "registrynumber": 25328,
    "tradename": "flint max",
    "headline": "bayer cropscience, s.l.",
    "madeby": "tebuconazol 50% + trifloxistrobin 25% [wg] p/p"
  },
  {
    "id": 1063,
    "registrynumber": 25330,
    "tradename": "armetil 25 wp",
    "headline": "industrias quimicas del valles, s.a.",
    "madeby": "metalaxil 25% [wp] p/p"
  },
  {
    "id": 1064,
    "registrynumber": 25334,
    "tradename": "coragen 20 sc",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "clorantraniliprol 20% [sc] p/v"
  },
  {
    "id": 1065,
    "registrynumber": 25336,
    "tradename": "belthirul-f",
    "headline": "probelte s.a.u.",
    "madeby": "bacillus thuringiensis kurstaki 17,6% (17,6 mill. de u.i./g) [sc] p/v"
  },
  {
    "id": 1066,
    "registrynumber": 25342,
    "tradename": "esmalk",
    "headline": "kenogard, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (cepa abts-351) (32 mill. de clu/g) 54% [wg] p/p"
  },
  {
    "id": 1067,
    "registrynumber": 25344,
    "tradename": "musketeer",
    "headline": "bayer cropscience, s.l.",
    "madeby": "diflufenican 15% + iodosulfuron-metil-sodio 1% [od] p/v"
  },
  {
    "id": 1068,
    "registrynumber": 25346,
    "tradename": "kanemite",
    "headline": "comercial química massó, s.a.",
    "madeby": "acequinocil 16,4% [sc] p/v"
  },
  {
    "id": 1069,
    "registrynumber": 25350,
    "tradename": "platinum flow",
    "headline": "spachem, s.l.",
    "madeby": "oxicloruro de cobre 70% [sc] p/v"
  },
  {
    "id": 1070,
    "registrynumber": 25351,
    "tradename": "volare",
    "headline": "bayer cropscience, s.l.",
    "madeby": "propamocarb 52,5% (clorhidrato ) + fluopicolida 6,25% [sc] p/v"
  },
  {
    "id": 1071,
    "registrynumber": 25353,
    "tradename": "affirm",
    "headline": "syngenta españa, s.a.",
    "madeby": "emamectina 0,855% [sg] p/p"
  },
  {
    "id": 1072,
    "registrynumber": 25355,
    "tradename": "fruitgard-opp",
    "headline": "fomesa fruitech s.l.",
    "madeby": "2- fenilfenol 10% [ec] p/v"
  },
  {
    "id": 1073,
    "registrynumber": 25357,
    "tradename": "lamdex extra n",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "lambda cihalotrin 2,5% [wg] p/p"
  },
  {
    "id": 1074,
    "registrynumber": 25358,
    "tradename": "spade flexx",
    "headline": "bayer cropscience, s.l.",
    "madeby": "isoxaflutol 24% [sc] p/v"
  },
  {
    "id": 1075,
    "registrynumber": 25360,
    "tradename": "dinamite",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "acequinocil 16,4% [sc] p/v"
  },
  {
    "id": 1076,
    "registrynumber": 25361,
    "tradename": "berelex 40 sg",
    "headline": "kenogard, s.a.",
    "madeby": "acido giberelico 40% [sg] p/p"
  },
  {
    "id": 1077,
    "registrynumber": 25362,
    "tradename": "leimay",
    "headline": "nissan chemical europe s.a.s.",
    "madeby": "amisulbrom 20% [sc] p/v"
  },
  {
    "id": 1078,
    "registrynumber": 25363,
    "tradename": "talisma ul",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 2% [ul] p/v"
  },
  {
    "id": 1079,
    "registrynumber": 25364,
    "tradename": "nemathorin 150 ec",
    "headline": "isk biosciences europe n.v.",
    "madeby": "fostiazato 15% [ec] p/v"
  },
  {
    "id": 1080,
    "registrynumber": 25366,
    "tradename": "bioselibate cs",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "z-11-hexadecenal 8,33% (209,2 mg/difusor) + z-9-hexadecenal 0,82% (20,4 mg/difusor) + z-13-octadecenal 0,82% (20,4 mg/difusor) [vp] p/p"
  },
  {
    "id": 1081,
    "registrynumber": 25381,
    "tradename": "cythrin max",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 50% [ec] p/v"
  },
  {
    "id": 1082,
    "registrynumber": 25386,
    "tradename": "cythrin garden",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 1% [me] p/v"
  },
  {
    "id": 1083,
    "registrynumber": 25389,
    "tradename": "isomate ofm rosso flex",
    "headline": "cbc (europe) s.r.l.",
    "madeby": "(z/e)-8 dodecenil acetato 90,93% + z-8-dodecen-1-ol 0,67% (240 mg como mezcla de ambas s.a./difusor) [vp] p/p"
  },
  {
    "id": 1084,
    "registrynumber": 25390,
    "tradename": "isonet a tt",
    "headline": "cbc iberia s.a.u.",
    "madeby": "(e)-5-decen-1-yl-acetato 41,7% + (e)-5-decen -1-ol 2,7% (231,1 mg de la mezcla/difusor) [vp] p/p"
  },
  {
    "id": 1085,
    "registrynumber": 25392,
    "tradename": "primo maxx",
    "headline": "syngenta españa, s.a.",
    "madeby": "trinexapac-etil 12,1% [sl] p/v"
  },
  {
    "id": 1086,
    "registrynumber": 25393,
    "tradename": "gazel plus sg",
    "headline": "nisso chemical europe gmbh",
    "madeby": "acetamiprid 20% [sg] p/p"
  },
  {
    "id": 1087,
    "registrynumber": 25394,
    "tradename": "ampexio c",
    "headline": "syngenta españa, s.a.",
    "madeby": "oxicloruro de cobre 13,95% (expr. en cu) + mandipropamid 2,5% [wg] p/p"
  },
  {
    "id": 1088,
    "registrynumber": 25395,
    "tradename": "herbenuron",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1089,
    "registrynumber": 25397,
    "tradename": "manfil 75 wg",
    "headline": "indofil industries limited (italia)",
    "madeby": "mancozeb 75% [wg] p/p"
  },
  {
    "id": 1090,
    "registrynumber": 25398,
    "tradename": "manfil 80 wp",
    "headline": "indofil industries limited (italia)",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 1091,
    "registrynumber": 25400,
    "tradename": "hurler 200",
    "headline": "barclay chemicals manufacturing, ltd.",
    "madeby": "fluroxipir 20% (ester metilheptil) [ec] p/v"
  },
  {
    "id": 1092,
    "registrynumber": 25401,
    "tradename": "boom efekt",
    "headline": "albaugh tki d.o.o.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1093,
    "registrynumber": 25402,
    "tradename": "profume",
    "headline": "douglas blg bvba",
    "madeby": "fluoruro de sulfurilo 99,8% [ga] p/p"
  },
  {
    "id": 1094,
    "registrynumber": 25406,
    "tradename": "taranis 48 sl",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "bentazona 48% (sal sódica) [sl] p/v"
  },
  {
    "id": 1095,
    "registrynumber": 25407,
    "tradename": "amistar top",
    "headline": "syngenta españa, s.a.",
    "madeby": "azoxistrobin 20% + difenoconazol 12,5% [sc] p/v"
  },
  {
    "id": 1096,
    "registrynumber": 25408,
    "tradename": "cabrio duo",
    "headline": "basf española s.l.u.",
    "madeby": "dimetomorf 7,2% + piraclostrobin 4% [ec] p/v"
  },
  {
    "id": 1097,
    "registrynumber": 25411,
    "tradename": "casper",
    "headline": "syngenta españa, s.a.",
    "madeby": "dicamba 50% (sal sódica) + prosulfuron 5% [wg] p/p"
  },
  {
    "id": 1098,
    "registrynumber": 25413,
    "tradename": "tecto 500 sc",
    "headline": "syngenta españa, s.a.",
    "madeby": "tiabendazol 50% [sc] p/v"
  },
  {
    "id": 1099,
    "registrynumber": 25414,
    "tradename": "alverde",
    "headline": "basf española s.l.u.",
    "madeby": "metaflumizona 24% [sc] p/v"
  },
  {
    "id": 1100,
    "registrynumber": 25419,
    "tradename": "scomrid limb aerosol",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "imazalil 2% [ae] p/p"
  },
  {
    "id": 1101,
    "registrynumber": 25420,
    "tradename": "heritage 50 wg",
    "headline": "syngenta españa, s.a.",
    "madeby": "azoxistrobin 50% [wg] p/p"
  },
  {
    "id": 1102,
    "registrynumber": 25421,
    "tradename": "sherpa 100 ew",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 10% [ew] p/v"
  },
  {
    "id": 1103,
    "registrynumber": 25423,
    "tradename": "elumis",
    "headline": "syngenta españa, s.a.",
    "madeby": "nicosulfuron 3% + mesotriona 7,5% [od] p/v"
  },
  {
    "id": 1104,
    "registrynumber": 25424,
    "tradename": "metric",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "clomazona 6% + metribuzina 23,3% [zc] p/v"
  },
  {
    "id": 1105,
    "registrynumber": 25427,
    "tradename": "futureco nofly wp",
    "headline": "futureco bioscience, s.a.",
    "madeby": "paecilomyces fumosoroseus (cepa fe 9901) 18% (2 x 10 e9 cfu/g) [wp] p/p"
  },
  {
    "id": 1106,
    "registrynumber": 25428,
    "tradename": "touchdown premium",
    "headline": "syngenta españa, s.a.",
    "madeby": "glifosato 36% (sal amónica) [sl] p/v"
  },
  {
    "id": 1107,
    "registrynumber": 25439,
    "tradename": "luna privilege",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fluopyram 50% [sc] p/v"
  },
  {
    "id": 1108,
    "registrynumber": 25441,
    "tradename": "roundup ultimate",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 48% (sal potásica) [sl] p/v"
  },
  {
    "id": 1109,
    "registrynumber": 25443,
    "tradename": "voliam targo",
    "headline": "syngenta españa, s.a.",
    "madeby": "abamectina 1,8% + clorantraniliprol 4,5% [sc] p/v"
  },
  {
    "id": 1110,
    "registrynumber": 25446,
    "tradename": "agility top",
    "headline": "nufarm españa, s.a.",
    "madeby": "clortoluron 60% + diflufenican 4% [sc] p/v"
  },
  {
    "id": 1111,
    "registrynumber": 25449,
    "tradename": "glyfoon",
    "headline": "sinon eu gmbh",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1112,
    "registrynumber": 25450,
    "tradename": "ranman top",
    "headline": "isk biosciences europe n.v.",
    "madeby": "ciazofamida 16% [sc] p/v"
  },
  {
    "id": 1113,
    "registrynumber": 25453,
    "tradename": "spotlight plus",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "carfentrazona-etil 6% [me] p/v"
  },
  {
    "id": 1114,
    "registrynumber": 25454,
    "tradename": "ampligo",
    "headline": "syngenta españa, s.a.",
    "madeby": "lambda cihalotrin 5% + clorantraniliprol 10% [zc] p/v"
  },
  {
    "id": 1115,
    "registrynumber": 25455,
    "tradename": "tordon star",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "triclopir 24% (ester butoxietil) + aminopiralid 3% (sal potásica (espi)) [ew] p/v"
  },
  {
    "id": 1116,
    "registrynumber": 25457,
    "tradename": "cameo sx",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "tribenuron-metil 50% [sg] p/p"
  },
  {
    "id": 1117,
    "registrynumber": 25460,
    "tradename": "tolurex 70 sc",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clortoluron 70% [sc] p/v"
  },
  {
    "id": 1118,
    "registrynumber": 25461,
    "tradename": "cyflamid 50 ew",
    "headline": "nisso chemical europe gmbh",
    "madeby": "ciflufenamid 5,13% [ew] p/v"
  },
  {
    "id": 1119,
    "registrynumber": 25462,
    "tradename": "flurostar 200",
    "headline": "globachem n.v.",
    "madeby": "fluroxipir 20% (ester metilheptil) [ec] p/v"
  },
  {
    "id": 1120,
    "registrynumber": 25463,
    "tradename": "beflex",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "beflubutamida 50% [sc] p/v"
  },
  {
    "id": 1121,
    "registrynumber": 25464,
    "tradename": "chaman forte",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "nicosulfuron 24% [sc] p/v"
  },
  {
    "id": 1122,
    "registrynumber": 25466,
    "tradename": "explicit 150ec",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "indoxacarb 15% [ec] p/v"
  },
  {
    "id": 1123,
    "registrynumber": 25467,
    "tradename": "protect garden fungicida al",
    "headline": "sbm développement sas (ecully)",
    "madeby": "tebuconazol 0,0125% + trifloxistrobin 0,0125% [al] p/v"
  },
  {
    "id": 1124,
    "registrynumber": 25476,
    "tradename": "valis m",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "mancozeb 60% + valifenalato 6% [wg] p/p"
  },
  {
    "id": 1125,
    "registrynumber": 25477,
    "tradename": "plinto",
    "headline": "industrias afrasa, s.a.",
    "madeby": "esfenvalerato 2,5% [ec] p/v"
  },
  {
    "id": 1126,
    "registrynumber": 25478,
    "tradename": "abalar",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "esfenvalerato 2,5% [ec] p/v"
  },
  {
    "id": 1127,
    "registrynumber": 25479,
    "tradename": "sfenvalo star",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "esfenvalerato 2,5% [ec] p/v"
  },
  {
    "id": 1128,
    "registrynumber": 25480,
    "tradename": "cidely",
    "headline": "syngenta españa, s.a.",
    "madeby": "ciflufenamid 5,13% [ew] p/v"
  },
  {
    "id": 1129,
    "registrynumber": 25481,
    "tradename": "siz",
    "headline": "sipcam inagra, s.a.",
    "madeby": "ciflufenamid 5,13% [ew] p/v"
  },
  {
    "id": 1130,
    "registrynumber": 25483,
    "tradename": "ceridor 500",
    "headline": "nufarm españa, s.a.",
    "madeby": "mcpa 50% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 1131,
    "registrynumber": 25485,
    "tradename": "patrol",
    "headline": "industrias afrasa, s.a.",
    "madeby": "lambda cihalotrin 2,5% [wg] p/p"
  },
  {
    "id": 1132,
    "registrynumber": 25487,
    "tradename": "accent 75 wg",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "nicosulfuron 75% [wg] p/p"
  },
  {
    "id": 1133,
    "registrynumber": 25490,
    "tradename": "polysect ultra sl",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "acetamiprid 0,5% [sl] p/v"
  },
  {
    "id": 1134,
    "registrynumber": 25491,
    "tradename": "vintage disperss",
    "headline": "upl iberia, s.a.",
    "madeby": "bentiavalicarb isopropil 1,75% + sulfato tribasico de cobre 37,5% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1135,
    "registrynumber": 25495,
    "tradename": "estrella 2,5 wg",
    "headline": "sharda europe bvba",
    "madeby": "lambda cihalotrin 2,5% [wg] p/p"
  },
  {
    "id": 1136,
    "registrynumber": 25498,
    "tradename": "lbg-01f34",
    "headline": "luxembourg pamol (cyprus) ltd",
    "madeby": "fosfonato potasico 50,4 % (exp. como ácido fosforoso) [sl] p/v"
  },
  {
    "id": 1137,
    "registrynumber": 25501,
    "tradename": "alial 80 wg",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 1138,
    "registrynumber": 25502,
    "tradename": "fosbel 80 wg",
    "headline": "probelte s.a.u.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 1139,
    "registrynumber": 25504,
    "tradename": "alfil wg",
    "headline": "industrias afrasa, s.a.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 1140,
    "registrynumber": 25505,
    "tradename": "pombal 80 wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 1141,
    "registrynumber": 25506,
    "tradename": "primma star",
    "headline": "nufarm españa, s.a.",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1142,
    "registrynumber": 25507,
    "tradename": "piton supreme",
    "headline": "albaugh tki d.o.o.",
    "madeby": "glifosato 48% (sal amónica ) [sl] p/v"
  },
  {
    "id": 1143,
    "registrynumber": 25508,
    "tradename": "verdys supreme",
    "headline": "albaugh tki d.o.o.",
    "madeby": "glifosato 48% [sl] p/v"
  },
  {
    "id": 1144,
    "registrynumber": 25509,
    "tradename": "poleci",
    "headline": "sharda europe bvba",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1145,
    "registrynumber": 25511,
    "tradename": "takumi",
    "headline": "nisso chemical europe gmbh",
    "madeby": "ciflufenamid 10% [sc] p/v"
  },
  {
    "id": 1146,
    "registrynumber": 25516,
    "tradename": "elio",
    "headline": "sipcam inagra, s.a.",
    "madeby": "ciflufenamid 10% [sc] p/v"
  },
  {
    "id": 1147,
    "registrynumber": 25519,
    "tradename": "ritmus",
    "headline": "probelte s.a.u.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1148,
    "registrynumber": 25520,
    "tradename": "magnet med",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "deltametrin 0,03% [rb] p/p"
  },
  {
    "id": 1149,
    "registrynumber": 25521,
    "tradename": "alial dos",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "fosetil-al 35% + mancozeb 35% [wp] p/p"
  },
  {
    "id": 1150,
    "registrynumber": 25522,
    "tradename": "nimble",
    "headline": "nufarm españa, s.a.",
    "madeby": "tifensulfuron-metil 50% + tribenuron-metil 25% [wg] p/p"
  },
  {
    "id": 1151,
    "registrynumber": 25525,
    "tradename": "katanga man",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "fosetil-al 35% + mancozeb 35% [wp] p/p"
  },
  {
    "id": 1152,
    "registrynumber": 25526,
    "tradename": "reminel",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "fluroxipir 20% [ec] p/v"
  },
  {
    "id": 1153,
    "registrynumber": 25527,
    "tradename": "cordial",
    "headline": "copyr s.p.a.",
    "madeby": "piretrinas 1,9% [ec] p/v"
  },
  {
    "id": 1154,
    "registrynumber": 25530,
    "tradename": "tizca",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "fluazinam 50% [sc] p/v"
  },
  {
    "id": 1155,
    "registrynumber": 25537,
    "tradename": "barclay propyz",
    "headline": "barclay chemicals manufacturing, ltd.",
    "madeby": "propizamida 40% [sc] p/v"
  },
  {
    "id": 1156,
    "registrynumber": 25538,
    "tradename": "turbopropyz",
    "headline": "barclay chemicals manufacturing, ltd.",
    "madeby": "propizamida 40% [sc] p/v"
  },
  {
    "id": 1157,
    "registrynumber": 25539,
    "tradename": "ppz-400",
    "headline": "barclay chemicals manufacturing, ltd.",
    "madeby": "propizamida 40% [sc] p/v"
  },
  {
    "id": 1158,
    "registrynumber": 25540,
    "tradename": "propyzaflash",
    "headline": "barclay chemicals manufacturing, ltd.",
    "madeby": "propizamida 40% [sc] p/v"
  },
  {
    "id": 1159,
    "registrynumber": 25549,
    "tradename": "dedalo",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "kresoxim-metil 50% [wg] p/p"
  },
  {
    "id": 1160,
    "registrynumber": 25550,
    "tradename": "kweek wet",
    "headline": "biovert sl",
    "madeby": "alquil poliglicol 20% (eter) [sl] p/v"
  },
  {
    "id": 1161,
    "registrynumber": 25551,
    "tradename": "ordago sc",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "pendimetalina 40% [sc] p/v"
  },
  {
    "id": 1162,
    "registrynumber": 25552,
    "tradename": "agrimec pro",
    "headline": "syngenta españa, s.a.",
    "madeby": "abamectina 1,8% [sc] p/v"
  },
  {
    "id": 1163,
    "registrynumber": 25555,
    "tradename": "victus od",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "nicosulfuron 4% [od] p/v"
  },
  {
    "id": 1164,
    "registrynumber": 25558,
    "tradename": "axiendo",
    "headline": "syngenta españa, s.a.",
    "madeby": "lambda cihalotrin 0,0015% [me] p/v"
  },
  {
    "id": 1165,
    "registrynumber": 25561,
    "tradename": "vacciplant",
    "headline": "upl iberia, s.a.",
    "madeby": "laminarin 4,5% [sl] p/v"
  },
  {
    "id": 1166,
    "registrynumber": 25562,
    "tradename": "eco-trap",
    "headline": "vioryl s.a.",
    "madeby": "deltametrin 0,0187% [rb] p/p"
  },
  {
    "id": 1167,
    "registrynumber": 25563,
    "tradename": "karate 1.5 cs",
    "headline": "syngenta españa, s.a.",
    "madeby": "lambda cihalotrin 1,5% [cs] p/v"
  },
  {
    "id": 1168,
    "registrynumber": 25565,
    "tradename": "cabrio team",
    "headline": "basf española s.l.u.",
    "madeby": "dimetomorf 12% + piraclostrobin 6,7% [wg] p/p"
  },
  {
    "id": 1169,
    "registrynumber": 25566,
    "tradename": "ascot",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "lambda cihalotrin 2,5% [wg] p/p"
  },
  {
    "id": 1170,
    "registrynumber": 25570,
    "tradename": "afidor triple accion",
    "headline": "productos flower, s.a.",
    "madeby": "cipermetrin 0,0075% + fenpiroximato 0,009% + tebuconazol 0,02% [al] p/v"
  },
  {
    "id": 1171,
    "registrynumber": 25575,
    "tradename": "kaos-b",
    "headline": "ascenza agro, s.a. (lisboa)",
    "madeby": "bentazona 48% (sal sódica) [sl] p/v"
  },
  {
    "id": 1172,
    "registrynumber": 25576,
    "tradename": "triple accion sipcam jardin",
    "headline": "sipcam jardin , sl",
    "madeby": "cipermetrin 0,0075% + fenpiroximato 0,009% + tebuconazol 0,02% [al] p/v"
  },
  {
    "id": 1173,
    "registrynumber": 25580,
    "tradename": "stomp aqua",
    "headline": "basf española s.l.u.",
    "madeby": "pendimetalina 45,5% [cs] p/v"
  },
  {
    "id": 1174,
    "registrynumber": 25581,
    "tradename": "cythrin spray",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 0,005% [al] p/v"
  },
  {
    "id": 1175,
    "registrynumber": 25584,
    "tradename": "switch one",
    "headline": "syngenta españa, s.a.",
    "madeby": "fludioxonil 50% [wg] p/p"
  },
  {
    "id": 1176,
    "registrynumber": 25585,
    "tradename": "peak 75 wg",
    "headline": "syngenta españa, s.a.",
    "madeby": "prosulfuron 75% [wg] p/p"
  },
  {
    "id": 1177,
    "registrynumber": 25586,
    "tradename": "biox-m",
    "headline": "nutea, s.l.",
    "madeby": "aceite de menta 94,9% [hn] p/v"
  },
  {
    "id": 1178,
    "registrynumber": 25588,
    "tradename": "ortiva top",
    "headline": "syngenta españa, s.a.",
    "madeby": "azoxistrobin 20% + difenoconazol 12,5% [sc] p/v"
  },
  {
    "id": 1179,
    "registrynumber": 25589,
    "tradename": "fluxyr 200 ec",
    "headline": "upl benelux b.v.",
    "madeby": "fluroxipir 20% (ester metilheptil) [ec] p/v"
  },
  {
    "id": 1180,
    "registrynumber": 25590,
    "tradename": "acramite 480sc",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "bifenazato 48% [sc] p/v"
  },
  {
    "id": 1181,
    "registrynumber": 25591,
    "tradename": "enervin top",
    "headline": "basf española s.l.u.",
    "madeby": "ametoctradin 12% + metiram 44% [wg] p/p"
  },
  {
    "id": 1182,
    "registrynumber": 25595,
    "tradename": "bioact wg",
    "headline": "bayer cropscience, s.l.",
    "madeby": "paecilomyces lilacinus (cepa 251) 6% [wg] p/p"
  },
  {
    "id": 1183,
    "registrynumber": 25597,
    "tradename": "fontelis",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "pentiopirad 20% [sc] p/v"
  },
  {
    "id": 1184,
    "registrynumber": 25598,
    "tradename": "vacciplant max",
    "headline": "upl iberia, s.a.",
    "madeby": "laminarin 4,5% [sl] p/v"
  },
  {
    "id": 1185,
    "registrynumber": 25600,
    "tradename": "roundup 6h",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "acido pelargónico 2,04% + glifosato 0,72% (sal isopropilamina) [al] p/v"
  },
  {
    "id": 1186,
    "registrynumber": 25601,
    "tradename": "sabba 33",
    "headline": "finchimica spa",
    "madeby": "pendimetalina 33% [ec] p/v"
  },
  {
    "id": 1187,
    "registrynumber": 25602,
    "tradename": "elevator",
    "headline": "finchimica spa",
    "madeby": "pendimetalina 33% [ec] p/v"
  },
  {
    "id": 1188,
    "registrynumber": 25604,
    "tradename": "ravenas extra",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "clodinafop-propargil 6% + diflufenican 4% [ec] p/v"
  },
  {
    "id": 1189,
    "registrynumber": 25606,
    "tradename": "kaimo",
    "headline": "nufarm españa, s.a.",
    "madeby": "lambda cihalotrin 5% [eg] p/p"
  },
  {
    "id": 1190,
    "registrynumber": 25611,
    "tradename": "xtract",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "meptildinocap 35% [ec] p/v"
  },
  {
    "id": 1191,
    "registrynumber": 25612,
    "tradename": "intrepid",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "metoxifenocida 24% [sc] p/v"
  },
  {
    "id": 1192,
    "registrynumber": 25613,
    "tradename": "fosfol",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 25% + fosetil-al 50% [wg] p/p"
  },
  {
    "id": 1193,
    "registrynumber": 25614,
    "tradename": "mirenal 50 sc",
    "headline": "probelte s.a.u.",
    "madeby": "diflufenican 50% [sc] p/v"
  },
  {
    "id": 1194,
    "registrynumber": 25616,
    "tradename": "starane praderas",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "florasulam 0,25% + fluroxipir 10% (ester metilheptil) [se] p/v"
  },
  {
    "id": 1195,
    "registrynumber": 25619,
    "tradename": "affirm 0.95 sg",
    "headline": "syngenta españa, s.a.",
    "madeby": "emamectina 0,855% [sg] p/p"
  },
  {
    "id": 1196,
    "registrynumber": 25621,
    "tradename": "herold",
    "headline": "bayer cropscience, s.l.",
    "madeby": "diflufenican 20% + flufenacet 40% [sc] p/v"
  },
  {
    "id": 1197,
    "registrynumber": 25622,
    "tradename": "timorex gold",
    "headline": "stockton europe limited",
    "madeby": "extracto del arbol de té (melaleuca alternifolia) 22,25% [ec] p/v"
  },
  {
    "id": 1198,
    "registrynumber": 25624,
    "tradename": "pointer 100 cs",
    "headline": "sipcam inagra, s.a.",
    "madeby": "lambda cihalotrin 10% [cs] p/v"
  },
  {
    "id": 1199,
    "registrynumber": 25626,
    "tradename": "enervin duo",
    "headline": "basf española s.l.u.",
    "madeby": "ametoctradin 30% + dimetomorf 22,5% [sc] p/v"
  },
  {
    "id": 1200,
    "registrynumber": 25628,
    "tradename": "frutargas",
    "headline": "linde gas españa, s.a.",
    "madeby": "etileno 4% [ga] p/p"
  },
  {
    "id": 1201,
    "registrynumber": 25632,
    "tradename": "blossom protect",
    "headline": "bio-ferm gmbh",
    "madeby": "aureobasidium pullulans (cepa dsm 14940) 25% (2,5 x 10e9 cfu/g) + aureobasidium pullulans (cepa dsm 14941) 25% (2,5 x 10e9 cfu/g) [wg] p/p"
  },
  {
    "id": 1202,
    "registrynumber": 25633,
    "tradename": "botector",
    "headline": "bio-ferm gmbh",
    "madeby": "aureobasidium pullulans (cepa dsm 14940) 50% (2,5 x 10e9 cfu/g) + aureobasidium pullulans (cepa dsm 14941) 50% (2,5 x 10e9 cfu/g) [wg] p/p"
  },
  {
    "id": 1203,
    "registrynumber": 25635,
    "tradename": "actiseal op 10",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "2- fenilfenol 10% [ec] p/v"
  },
  {
    "id": 1204,
    "registrynumber": 25636,
    "tradename": "comet 200",
    "headline": "basf española s.l.u.",
    "madeby": "piraclostrobin 20% [ec] p/v"
  },
  {
    "id": 1205,
    "registrynumber": 25637,
    "tradename": "atrapa",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "lambda cihalotrin 10% [cs] p/v"
  },
  {
    "id": 1206,
    "registrynumber": 25640,
    "tradename": "aikido",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "lambda cihalotrin 10% [cs] p/v"
  },
  {
    "id": 1207,
    "registrynumber": 25641,
    "tradename": "magnate",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "imazalil 10% [sl] p/v"
  },
  {
    "id": 1208,
    "registrynumber": 25643,
    "tradename": "samson extra 6 od",
    "headline": "isk biosciences europe n.v.",
    "madeby": "nicosulfuron 6% [od] p/v"
  },
  {
    "id": 1209,
    "registrynumber": 25644,
    "tradename": "racing tf",
    "headline": "nufarm españa, s.a.",
    "madeby": "metsulfuron metil 7% + tifensulfuron-metil 68% [wg] p/p"
  },
  {
    "id": 1210,
    "registrynumber": 25648,
    "tradename": "serenade max",
    "headline": "bayer cropscience, s.l.",
    "madeby": "bacillus subtilis (cepa qst 713) 15,67% (5,13 x 10e10 ufc/g esp) [wp] p/p"
  },
  {
    "id": 1211,
    "registrynumber": 25649,
    "tradename": "spintor 120 sc",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "spinosad 12% [sc] p/v"
  },
  {
    "id": 1212,
    "registrynumber": 25653,
    "tradename": "talisma super",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 2% [ul] p/v"
  },
  {
    "id": 1213,
    "registrynumber": 25655,
    "tradename": "merekal",
    "headline": "nufarm españa, s.a.",
    "madeby": "mecoprop-p 60% (sal amina ) [sl] p/v"
  },
  {
    "id": 1214,
    "registrynumber": 25661,
    "tradename": "prosaro",
    "headline": "bayer cropscience, s.l.",
    "madeby": "protioconazol 12,5% + tebuconazol 12,5% [ec] p/v"
  },
  {
    "id": 1215,
    "registrynumber": 25666,
    "tradename": "alios",
    "headline": "basf española s.l.u.",
    "madeby": "triticonazol 30% [fs] p/v"
  },
  {
    "id": 1216,
    "registrynumber": 25667,
    "tradename": "trinity",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clortoluron 25% + diflufenican 4% + pendimetalina 30% [sc] p/v"
  },
  {
    "id": 1217,
    "registrynumber": 25672,
    "tradename": "express sx",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "tribenuron-metil 50% [sg] p/p"
  },
  {
    "id": 1218,
    "registrynumber": 25675,
    "tradename": "ecodian carpocapsa",
    "headline": "isagro españa s.l.",
    "madeby": "e,e-8,10-dodecadien-1-ol 0,798% (10,63 mg s.a./difusor) [vp] p/p"
  },
  {
    "id": 1219,
    "registrynumber": 25676,
    "tradename": "bioxeda",
    "headline": "nutea, s.l.",
    "madeby": "aceite de clavo 20,38% [ec] p/v"
  },
  {
    "id": 1220,
    "registrynumber": 25680,
    "tradename": "avaunt 150 ec",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "indoxacarb 15% [ec] p/v"
  },
  {
    "id": 1221,
    "registrynumber": 25681,
    "tradename": "checkmate cm-xl",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "e,e-8,10-dodecadien-1-ol 10,39% (270 mg s.a./difusor) [vp] p/p"
  },
  {
    "id": 1222,
    "registrynumber": 25682,
    "tradename": "checkmate puffer cm",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "e,e-8,10-dodecadien-1-ol 18,05% [ae] p/p"
  },
  {
    "id": 1223,
    "registrynumber": 25684,
    "tradename": "principal",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "nicosulfuron 42,9% + rimsulfuron 10,7% [wg] p/p"
  },
  {
    "id": 1224,
    "registrynumber": 25685,
    "tradename": "sphinx",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "dimetomorf 50% [sc] p/v"
  },
  {
    "id": 1225,
    "registrynumber": 25686,
    "tradename": "areva mz wg",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "dimetomorf 9% + mancozeb 60% [wg] p/p"
  },
  {
    "id": 1226,
    "registrynumber": 25689,
    "tradename": "signum wg",
    "headline": "basf española s.l.u.",
    "madeby": "piraclostrobin 6,7% + boscalida 26,7% [wg] p/p"
  },
  {
    "id": 1227,
    "registrynumber": 25690,
    "tradename": "areva combi",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "dimetomorf 11,3% + folpet 60% [wg] p/p"
  },
  {
    "id": 1228,
    "registrynumber": 25691,
    "tradename": "cabrio duo ec",
    "headline": "basf española s.l.u.",
    "madeby": "dimetomorf 7,2% + piraclostrobin 4% [ec] p/v"
  },
  {
    "id": 1229,
    "registrynumber": 25692,
    "tradename": "spruzit",
    "headline": "w.neudorff gmbh kg",
    "madeby": "aceite de colza 82,53% + piretrinas 0,459% [ec] p/v"
  },
  {
    "id": 1230,
    "registrynumber": 25693,
    "tradename": "spruzit rtu",
    "headline": "w.neudorff gmbh kg",
    "madeby": "aceite de colza 0,825% + piretrinas 0,018% [al] p/v"
  },
  {
    "id": 1231,
    "registrynumber": 25695,
    "tradename": "feuver",
    "headline": "bayer cropscience, s.l.",
    "madeby": "protioconazol 30% [fs] p/v"
  },
  {
    "id": 1232,
    "registrynumber": 25697,
    "tradename": "armicarb",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "hidrogenocarbonato de potasio 85% [sp] p/p"
  },
  {
    "id": 1233,
    "registrynumber": 25698,
    "tradename": "armicarb garden",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "hidrogenocarbonato de potasio 85% [sp] p/p"
  },
  {
    "id": 1234,
    "registrynumber": 25700,
    "tradename": "super delta",
    "headline": "sharda spain s.l.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1235,
    "registrynumber": 25703,
    "tradename": "imtrex",
    "headline": "basf española s.l.u.",
    "madeby": "fluxapyroxad 6,25% [ec] p/v"
  },
  {
    "id": 1236,
    "registrynumber": 25706,
    "tradename": "delta ec",
    "headline": "ascenza agro, s.a. (lisboa)",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1237,
    "registrynumber": 25708,
    "tradename": "proxanil",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cimoxanilo 5% + propamocarb 33,52% (clorhidrato ) [sc] p/v"
  },
  {
    "id": 1238,
    "registrynumber": 25709,
    "tradename": "milagro 240 sc",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "nicosulfuron 24% [sc] p/v"
  },
  {
    "id": 1239,
    "registrynumber": 25710,
    "tradename": "k-obiol ec 25",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 2,5% (pos) [ec] p/v"
  },
  {
    "id": 1240,
    "registrynumber": 25711,
    "tradename": "talisma ec",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 8% [ec] p/v"
  },
  {
    "id": 1241,
    "registrynumber": 25712,
    "tradename": "ampligo 150 zc",
    "headline": "syngenta españa, s.a.",
    "madeby": "clorantraniliprol 10% + lambda cihalotrin 5% [zc] p/v"
  },
  {
    "id": 1242,
    "registrynumber": 25718,
    "tradename": "principal plus",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "dicamba 55% (sal sódica) + nicosulfuron 9,2% + rimsulfuron 2,3% [wg] p/p"
  },
  {
    "id": 1243,
    "registrynumber": 25720,
    "tradename": "qualy",
    "headline": "nufarm españa, s.a.",
    "madeby": "ciprodinil 30% [ec] p/v"
  },
  {
    "id": 1244,
    "registrynumber": 25721,
    "tradename": "lontrel 72",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "clopiralida 72% (sal amina) [sg] p/p"
  },
  {
    "id": 1245,
    "registrynumber": 25722,
    "tradename": "kaiso sorbie",
    "headline": "nufarm españa, s.a.",
    "madeby": "lambda cihalotrin 5% [eg] p/p"
  },
  {
    "id": 1246,
    "registrynumber": 25724,
    "tradename": "maestro 80 wg",
    "headline": "ascenza agro, s.a. (lisboa)",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 1247,
    "registrynumber": 25728,
    "tradename": "barbarian super 360",
    "headline": "barclay chemicals manufacturing, ltd.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1248,
    "registrynumber": 25729,
    "tradename": "barbarian xtra 450",
    "headline": "barclay chemicals manufacturing, ltd.",
    "madeby": "glifosato 45% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1249,
    "registrynumber": 25730,
    "tradename": "most micro hl",
    "headline": "sipcam inagra, s.a.",
    "madeby": "pendimetalina 36,5% [cs] p/v"
  },
  {
    "id": 1250,
    "registrynumber": 25732,
    "tradename": "silicosec",
    "headline": "biofa ag",
    "madeby": "tierra de diatomeas 100% [cp] p/p"
  },
  {
    "id": 1251,
    "registrynumber": 25733,
    "tradename": "benta 480 sl",
    "headline": "sharda spain s.l.",
    "madeby": "bentazona 48% (sal sódica) [sl] p/v"
  },
  {
    "id": 1252,
    "registrynumber": 25734,
    "tradename": "m0213bf",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metribuzina 70% [wg] p/p"
  },
  {
    "id": 1253,
    "registrynumber": 25736,
    "tradename": "prestop",
    "headline": "danstar ferment ag",
    "madeby": "gliocladium catenulatum (cepa j1446) 32% (2 x 10e8 cfu/g) [wp] p/p"
  },
  {
    "id": 1254,
    "registrynumber": 25737,
    "tradename": "corzal",
    "headline": "upl benelux b.v.",
    "madeby": "fenmedifam 15,7% [se] p/v"
  },
  {
    "id": 1255,
    "registrynumber": 25743,
    "tradename": "caramba 90",
    "headline": "basf española s.l.u.",
    "madeby": "metconazol 9% [ec] p/v"
  },
  {
    "id": 1256,
    "registrynumber": 25749,
    "tradename": "merekal tc",
    "headline": "nufarm españa, s.a.",
    "madeby": "mecoprop-p 60% (sal potásica) [sl] p/v"
  },
  {
    "id": 1257,
    "registrynumber": 25750,
    "tradename": "chamane",
    "headline": "upl iberia, s.a.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1258,
    "registrynumber": 25751,
    "tradename": "dicarzol 10 sp",
    "headline": "gowan crop protection ltd.",
    "madeby": "formetanato 9% (hidrocloruro) [sp] p/p"
  },
  {
    "id": 1259,
    "registrynumber": 25752,
    "tradename": "alsystin sc",
    "headline": "bayer cropscience, s.l.",
    "madeby": "triflumuron 48% [sc] p/v"
  },
  {
    "id": 1260,
    "registrynumber": 25754,
    "tradename": "finy",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "metsulfuron metil 20% [wg] p/p"
  },
  {
    "id": 1261,
    "registrynumber": 25756,
    "tradename": "karis 10 cs",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "lambda cihalotrin 10% [cs] p/v"
  },
  {
    "id": 1262,
    "registrynumber": 25760,
    "tradename": "meteor",
    "headline": "diachem s.p.a.",
    "madeby": "deltametrin 1,57% [sc] p/v"
  },
  {
    "id": 1263,
    "registrynumber": 25761,
    "tradename": "prevam",
    "headline": "oro agri international b.v.",
    "madeby": "aceite de naranja 6% [sl] p/v"
  },
  {
    "id": 1264,
    "registrynumber": 25762,
    "tradename": "cymbal 45 wg",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "cimoxanilo 45% [wg] p/p"
  },
  {
    "id": 1265,
    "registrynumber": 25766,
    "tradename": "alial doble",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "fosetil-al 35% + mancozeb 35% [wp] p/p"
  },
  {
    "id": 1266,
    "registrynumber": 25767,
    "tradename": "sabba",
    "headline": "finchimica spa",
    "madeby": "pendimetalina 33% [ec] p/v"
  },
  {
    "id": 1267,
    "registrynumber": 25768,
    "tradename": "elevator 33 ec",
    "headline": "finchimica spa",
    "madeby": "pendimetalina 33% [ec] p/v"
  },
  {
    "id": 1268,
    "registrynumber": 25769,
    "tradename": "touareg",
    "headline": "nufarm españa, s.a.",
    "madeby": "clodinafop-propargil 24% [ec] p/v"
  },
  {
    "id": 1269,
    "registrynumber": 25770,
    "tradename": "touareg ec",
    "headline": "nufarm españa, s.a.",
    "madeby": "clodinafop-propargil 24% [ec] p/v"
  },
  {
    "id": 1270,
    "registrynumber": 25771,
    "tradename": "fruitel 180",
    "headline": "bayer cropscience, s.l.",
    "madeby": "etefon 18% [sl] p/v"
  },
  {
    "id": 1271,
    "registrynumber": 25772,
    "tradename": "devrinol f",
    "headline": "upl iberia, s.a.",
    "madeby": "napropamida 45% [sc] p/v"
  },
  {
    "id": 1272,
    "registrynumber": 25776,
    "tradename": "penncozeb flo",
    "headline": "upl iberia, s.a.",
    "madeby": "mancozeb 50% [sc] p/v"
  },
  {
    "id": 1273,
    "registrynumber": 25777,
    "tradename": "picomax",
    "headline": "basf española s.l.u.",
    "madeby": "pendimetalina 32% + picolinafen 1,6% [sc] p/v"
  },
  {
    "id": 1274,
    "registrynumber": 25778,
    "tradename": "herbiton",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 36% (sal potásica) [sl] p/v"
  },
  {
    "id": 1275,
    "registrynumber": 25781,
    "tradename": "caramba ec",
    "headline": "basf española s.l.u.",
    "madeby": "metconazol 9% [ec] p/v"
  },
  {
    "id": 1276,
    "registrynumber": 25782,
    "tradename": "protect garden insecticida al",
    "headline": "sbm développement sas (ecully)",
    "madeby": "deltametrin 0,00075% [al] p/v"
  },
  {
    "id": 1277,
    "registrynumber": 25783,
    "tradename": "designer",
    "headline": "de sangosse s.a.s.",
    "madeby": "latex sintetico 25,6% [ew] p/v"
  },
  {
    "id": 1278,
    "registrynumber": 25784,
    "tradename": "gondor",
    "headline": "de sangosse s.a.s.",
    "madeby": "lecitina de soja 48,8% [ec] p/v"
  },
  {
    "id": 1279,
    "registrynumber": 25787,
    "tradename": "itaka",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1280,
    "registrynumber": 25791,
    "tradename": "roundup 48h",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 0,72% (sal isopropilamina) [al] p/v"
  },
  {
    "id": 1281,
    "registrynumber": 25793,
    "tradename": "ulysses",
    "headline": "rotam agrochemical europe limited",
    "madeby": "tebuconazol 43% [sc] p/v"
  },
  {
    "id": 1282,
    "registrynumber": 25794,
    "tradename": "wing-p",
    "headline": "basf española s.l.u.",
    "madeby": "dimetenamida-p 21,25% + pendimetalina 25% [ec] p/v"
  },
  {
    "id": 1283,
    "registrynumber": 25796,
    "tradename": "cal-ex evo",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "abamectina 1,8% [ew] p/v"
  },
  {
    "id": 1284,
    "registrynumber": 25797,
    "tradename": "gentis",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "2,4-d acido 36% (2-etil-hexil ester) + fluroxipir 9% (ester metilheptil) [ec] p/v"
  },
  {
    "id": 1285,
    "registrynumber": 25798,
    "tradename": "attribut",
    "headline": "bayer cropscience, s.l.",
    "madeby": "propoxicarbazona-sodio 70% [sg] p/p"
  },
  {
    "id": 1286,
    "registrynumber": 25799,
    "tradename": "listego",
    "headline": "basf española s.l.u.",
    "madeby": "imazamox 4% [sl] p/v"
  },
  {
    "id": 1287,
    "registrynumber": 25802,
    "tradename": "montero",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "aminopiralid 1,2% (sal amonio) + triclopir 12% (sal amonio) [sl] p/v"
  },
  {
    "id": 1288,
    "registrynumber": 25804,
    "tradename": "guante 500",
    "headline": "sipcam iberia s.l.",
    "madeby": "ciflufenamid 5,13% [ew] p/v"
  },
  {
    "id": 1289,
    "registrynumber": 25809,
    "tradename": "cythrin 50 ec",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "cipermetrin 5% [ec] p/v"
  },
  {
    "id": 1290,
    "registrynumber": 25811,
    "tradename": "sabero mancozeb 80",
    "headline": "sabero europe b.v.",
    "madeby": "mancozeb 80% [wp] p/p"
  },
  {
    "id": 1291,
    "registrynumber": 25813,
    "tradename": "oceal",
    "headline": "rotam agrochemical europe limited",
    "madeby": "dicamba 70% (sal sódica) [sg] p/p"
  },
  {
    "id": 1292,
    "registrynumber": 25814,
    "tradename": "difend",
    "headline": "globachem n.v.",
    "madeby": "difenoconazol 3% [fs] p/v"
  },
  {
    "id": 1293,
    "registrynumber": 25815,
    "tradename": "spasor pro",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 48% (sal potásica) [sl] p/v"
  },
  {
    "id": 1294,
    "registrynumber": 25819,
    "tradename": "exosex cm",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "e,e-8,10-dodecadien-1-ol 0,1% (2,5 mg s.a./difusor) [vp] p/p"
  },
  {
    "id": 1295,
    "registrynumber": 25820,
    "tradename": "carpovirusine evo2",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "granulovirus de cydia pomonella (aislado r5) 90,9% (1 x 10e13 gv/l) [sc] p/v"
  },
  {
    "id": 1296,
    "registrynumber": 25821,
    "tradename": "crew",
    "headline": "nufarm españa, s.a.",
    "madeby": "nicosulfuron 4% [od] p/v"
  },
  {
    "id": 1297,
    "registrynumber": 25825,
    "tradename": "evade",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "fluroxipir 2% (ester metilheptil) + triclopir 6% (sal trietilamina) [me] p/v"
  },
  {
    "id": 1298,
    "registrynumber": 25826,
    "tradename": "silvanet",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "clopiralida 6% + triclopir 24% (ester butoxietílico) [ec] p/v"
  },
  {
    "id": 1299,
    "registrynumber": 25827,
    "tradename": "sempra",
    "headline": "upl iberia, s.a.",
    "madeby": "diflufenican 50% [sc] p/v"
  },
  {
    "id": 1300,
    "registrynumber": 25828,
    "tradename": "imidan 50wg",
    "headline": "gowan crop protection ltd.",
    "madeby": "fosmet 50% [wg] p/p"
  },
  {
    "id": 1301,
    "registrynumber": 25829,
    "tradename": "mcw 225 300 ec",
    "headline": "nufarm españa, s.a.",
    "madeby": "ciprodinil 30% [ec] p/v"
  },
  {
    "id": 1302,
    "registrynumber": 25830,
    "tradename": "custodia",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "azoxistrobin 12% + tebuconazol 20% [sc] p/v"
  },
  {
    "id": 1303,
    "registrynumber": 25831,
    "tradename": "siroco",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "diflufenican 4% + glifosato 25% (sal isopropilamina) [sc] p/v"
  },
  {
    "id": 1304,
    "registrynumber": 25832,
    "tradename": "oteador",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1305,
    "registrynumber": 25835,
    "tradename": "sakura",
    "headline": "nufarm españa, s.a.",
    "madeby": "bromuconazol 16,7% + tebuconazol 10,7% [ec] p/v"
  },
  {
    "id": 1306,
    "registrynumber": 25837,
    "tradename": "vitene triplo r",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "cimoxanilo 2,85% + fosetil-al 30% + oxicloruro de cobre 16% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1307,
    "registrynumber": 25838,
    "tradename": "decis evo",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 2,5% [ew] p/v"
  },
  {
    "id": 1308,
    "registrynumber": 25842,
    "tradename": "belem 0.8 mg",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrin 0,8% [gr] p/p"
  },
  {
    "id": 1309,
    "registrynumber": 25843,
    "tradename": "nordika",
    "headline": "nufarm españa, s.a.",
    "madeby": "procloraz 6% + tebuconazol 1,5% [es] p/v"
  },
  {
    "id": 1310,
    "registrynumber": 25845,
    "tradename": "forum top",
    "headline": "basf española s.l.u.",
    "madeby": "dimetomorf 9% + metiram 44% [wg] p/p"
  },
  {
    "id": 1311,
    "registrynumber": 25854,
    "tradename": "haksar 500 sl",
    "headline": "ciech sarzyna s.a.",
    "madeby": "mcpa 50% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 1312,
    "registrynumber": 25855,
    "tradename": "kyleo",
    "headline": "nufarm españa, s.a.",
    "madeby": "2,4-d acido 16% (sales alquilamidopropil y dimetilamina) + glifosato 24% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1313,
    "registrynumber": 25856,
    "tradename": "vision plus",
    "headline": "basf española s.l.u.",
    "madeby": "ditianona 25% + pirimetanil 25% [sc] p/v"
  },
  {
    "id": 1314,
    "registrynumber": 25861,
    "tradename": "tazer",
    "headline": "nufarm españa, s.a.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1315,
    "registrynumber": 25862,
    "tradename": "signum fr",
    "headline": "basf española s.l.u.",
    "madeby": "piraclostrobin 6,7% + boscalida 26,7% ( ) [wg] p/p"
  },
  {
    "id": 1316,
    "registrynumber": 25864,
    "tradename": "arigo",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "mesotriona 36% + nicosulfuron 12% + rimsulfuron 3% [wg] p/p"
  },
  {
    "id": 1317,
    "registrynumber": 25865,
    "tradename": "quickphos-p",
    "headline": "upl iberia, s.a.",
    "madeby": "fosfuro de aluminio 56% (0,6 g/tableta) [ge] p/p"
  },
  {
    "id": 1318,
    "registrynumber": 25866,
    "tradename": "quickphos tablet",
    "headline": "upl iberia, s.a.",
    "madeby": "fosfuro de aluminio 56% (3 g/tableta) [ge] p/p"
  },
  {
    "id": 1319,
    "registrynumber": 25867,
    "tradename": "gizmo 60 fs",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 6% [fs] p/v"
  },
  {
    "id": 1320,
    "registrynumber": 25870,
    "tradename": "cleranda",
    "headline": "basf española s.l.u.",
    "madeby": "imazamox 1,75% + metazacloro 37,5% [sc] p/v"
  },
  {
    "id": 1321,
    "registrynumber": 25873,
    "tradename": "solofol",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "folpet 80% [wg] p/p"
  },
  {
    "id": 1322,
    "registrynumber": 25874,
    "tradename": "systiva",
    "headline": "basf española s.l.u.",
    "madeby": "fluxapyroxad 33.3% [fs] p/v"
  },
  {
    "id": 1323,
    "registrynumber": 25875,
    "tradename": "isomate a/ofm",
    "headline": "cbc iberia s.a.u.",
    "madeby": "(e)-5-decen-1-ol 1,1% (5,4 mg/difusor) + (e)-5-decen-1-yl acetato 18,7% (92,2 mg/difusor) + e-8-dodecenilacetato 2,2% (10,7 mg/difusor) + z-8-dodecen-1-ol 0,3% (1,3 mg/difusor) + z-8-dodecenilacetato 33,4% (164,8 mg/difusor) [vp] p/p"
  },
  {
    "id": 1324,
    "registrynumber": 25876,
    "tradename": "liberator",
    "headline": "bayer cropscience, s.l.",
    "madeby": "diflufenican 10% + flufenacet 40% [sc] p/v"
  },
  {
    "id": 1325,
    "registrynumber": 25877,
    "tradename": "profilux",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "cimoxanilo 4,5% + mancozeb 68% [wg] p/p"
  },
  {
    "id": 1326,
    "registrynumber": 25878,
    "tradename": "serenva",
    "headline": "syngenta españa, s.a.",
    "madeby": "ciprodinil 37,5% + fludioxonil 25% [wg] p/p"
  },
  {
    "id": 1327,
    "registrynumber": 25881,
    "tradename": "globaryll 100",
    "headline": "globachem n.v.",
    "madeby": "6-benziladenina 10% [sl] p/v"
  },
  {
    "id": 1328,
    "registrynumber": 25882,
    "tradename": "lambdastar",
    "headline": "life scientific limited",
    "madeby": "lambda cihalotrin 10% [cs] p/v"
  },
  {
    "id": 1329,
    "registrynumber": 25884,
    "tradename": "ready germiplus",
    "headline": "icl italia treviso srl",
    "madeby": "pendimetalina 1,7% [gr] p/p"
  },
  {
    "id": 1330,
    "registrynumber": 25885,
    "tradename": "gramilane g",
    "headline": "diachem s.p.a.",
    "madeby": "pendimetalina 1,7% [gr] p/p"
  },
  {
    "id": 1331,
    "registrynumber": 25886,
    "tradename": "banjo forte",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "dimetomorf 20% + fluazinam 20% [sc] p/v"
  },
  {
    "id": 1332,
    "registrynumber": 25887,
    "tradename": "trianum g",
    "headline": "koppert b.v.",
    "madeby": "trichoderma harzianum rifai (cepa t-22) 1% (1,5 x 10e11 cfu/kg) [gr] p/p"
  },
  {
    "id": 1333,
    "registrynumber": 25889,
    "tradename": "trianum p",
    "headline": "koppert b.v.",
    "madeby": "trichoderma harzianum rifai (cepa t-22) 1% (1 x 10e9 cfu/g) [wg] p/p"
  },
  {
    "id": 1334,
    "registrynumber": 25890,
    "tradename": "betanal tandem",
    "headline": "bayer cropscience, s.l.",
    "madeby": "etofumesato 19% + fenmedifam 20% [sc] p/v"
  },
  {
    "id": 1335,
    "registrynumber": 25893,
    "tradename": "forum gold",
    "headline": "basf española s.l.u.",
    "madeby": "dimetomorf 15% + ditianona 35% [wg] p/p"
  },
  {
    "id": 1336,
    "registrynumber": 25895,
    "tradename": "templier",
    "headline": "rotam agrochemical europe limited",
    "madeby": "nicosulfuron 75% [wg] p/p"
  },
  {
    "id": 1337,
    "registrynumber": 25899,
    "tradename": "solabiol herbicida total natural al",
    "headline": "sbm développement sas (ecully)",
    "madeby": "acido caprilico/caprico 2,97% [al] p/v"
  },
  {
    "id": 1338,
    "registrynumber": 25900,
    "tradename": "addition",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "diflufenican 4% + pendimetalina 40% [sc] p/v"
  },
  {
    "id": 1339,
    "registrynumber": 25903,
    "tradename": "nico 750 wg",
    "headline": "rotam agrochemical europe limited",
    "madeby": "nicosulfuron 75% [wg] p/p"
  },
  {
    "id": 1340,
    "registrynumber": 25904,
    "tradename": "acoidal wg",
    "headline": "quimetal internacional registros e inversiones s.l.",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 1341,
    "registrynumber": 25906,
    "tradename": "finalsan herbicida natural rtu",
    "headline": "w.neudorff gmbh kg",
    "madeby": "acido pelargónico 3,102% (sal amonio) [al] p/v"
  },
  {
    "id": 1342,
    "registrynumber": 25909,
    "tradename": "bariloche 100",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "clopiralida 10% (sal monoetanolamina) [sl] p/v"
  },
  {
    "id": 1343,
    "registrynumber": 25910,
    "tradename": "moddus",
    "headline": "syngenta españa, s.a.",
    "madeby": "trinexapac-etil 25% [me] p/v"
  },
  {
    "id": 1344,
    "registrynumber": 25913,
    "tradename": "quant lb pro",
    "headline": "basf española s.l.u.",
    "madeby": "dodecan-1-yl-acetato 2,72% (127 mg/difusor) + e/z-7,9-dodecadienil acetato 5,17% (240 mg/difusor) [vp] p/p"
  },
  {
    "id": 1345,
    "registrynumber": 25915,
    "tradename": "casper 55 wg",
    "headline": "syngenta españa, s.a.",
    "madeby": "dicamba 50% (sal sódica) + prosulfuron 5% [wg] p/p"
  },
  {
    "id": 1346,
    "registrynumber": 25917,
    "tradename": "atlantis od",
    "headline": "bayer cropscience, s.l.",
    "madeby": "iodosulfuron-metil-sodio 0,2% + mesosulfuron metil 1% [od] p/v"
  },
  {
    "id": 1347,
    "registrynumber": 25918,
    "tradename": "celest trio",
    "headline": "syngenta españa, s.a.",
    "madeby": "difenoconazol 2,5% + fludioxonil 2,5% + tebuconazol 1% [fs] p/v"
  },
  {
    "id": 1348,
    "registrynumber": 25920,
    "tradename": "geoxe 50 wg",
    "headline": "syngenta españa s.a.",
    "madeby": "fludioxonil 50% [wg] p/p"
  },
  {
    "id": 1349,
    "registrynumber": 25924,
    "tradename": "blindar",
    "headline": "isagro s.p.a.",
    "madeby": "trichoderma asperellum (cepa icc012) 2% + trichoderma gamsii (cepa icc080) 2% (3 x 10e7 cfu/g (suma de ambos microorganismos)) [wp] p/p"
  },
  {
    "id": 1350,
    "registrynumber": 25925,
    "tradename": "enervin",
    "headline": "basf española s.l.u.",
    "madeby": "ametoctradin 20% [sc] p/v"
  },
  {
    "id": 1351,
    "registrynumber": 25927,
    "tradename": "nemesis",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "abamectina 1,26% + acrinatrin 2,25% [ew] p/v"
  },
  {
    "id": 1352,
    "registrynumber": 25929,
    "tradename": "arcade 880",
    "headline": "syngenta españa, s.a.",
    "madeby": "metribuzina 8% + prosulfocarb 80% [ec] p/v"
  },
  {
    "id": 1353,
    "registrynumber": 25931,
    "tradename": "koromite",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "milbemectina 0,93% [ec] p/v"
  },
  {
    "id": 1354,
    "registrynumber": 25933,
    "tradename": "xedavir",
    "headline": "xeda italia s.r.l.",
    "madeby": "trichoderma asperellum (cepa tv-1) 2,8% (1 x 10e10 ufc/kg) [wp] p/p"
  },
  {
    "id": 1355,
    "registrynumber": 25934,
    "tradename": "azoxystar",
    "headline": "life scientific limited",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1356,
    "registrynumber": 25935,
    "tradename": "stabilan",
    "headline": "nufarm españa, s.a.",
    "madeby": "clormequat 75% ((c. cloruro)) [sl] p/v"
  },
  {
    "id": 1357,
    "registrynumber": 25936,
    "tradename": "biopolysect al",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "aceite de colza 1,69% ( ) [al] p/v"
  },
  {
    "id": 1358,
    "registrynumber": 25937,
    "tradename": "biopolysect ce",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "aceite de colza 77,7% [ec] p/v"
  },
  {
    "id": 1359,
    "registrynumber": 25938,
    "tradename": "azethyl",
    "headline": "al air liquide españa s.a.",
    "madeby": "etileno 3,905% [ga] p/p"
  },
  {
    "id": 1360,
    "registrynumber": 25939,
    "tradename": "buffer protect",
    "headline": "bio-ferm gmbh",
    "madeby": "acido citrico 42,7% + fosfato disódico 22,7% [sp] p/p"
  },
  {
    "id": 1361,
    "registrynumber": 25941,
    "tradename": "tebkin",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 1362,
    "registrynumber": 25942,
    "tradename": "isonet t",
    "headline": "cbc (europe) s.r.l.",
    "madeby": "mezcla de (e,z,z)-3,8,11-tetradecatrien-1-yl-acetato + (e,z)-3,8-tetradecadien-1-yl-acetato (60 mg de la mezcla/difusor) [vp] p/p"
  },
  {
    "id": 1363,
    "registrynumber": 25947,
    "tradename": "ceraxel",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "fosfonato disódico 50% [sl] p/v"
  },
  {
    "id": 1364,
    "registrynumber": 25948,
    "tradename": "avanguard",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "alfa cipermetrin 10% [ec] p/v"
  },
  {
    "id": 1365,
    "registrynumber": 25951,
    "tradename": "difcor 250 ec",
    "headline": "globachem n.v.",
    "madeby": "difenoconazol 25% [ec] p/v"
  },
  {
    "id": 1366,
    "registrynumber": 25953,
    "tradename": "flexity",
    "headline": "basf española s.l.u.",
    "madeby": "metrafenona 30% [sc] p/v"
  },
  {
    "id": 1367,
    "registrynumber": 25954,
    "tradename": "gibbalin",
    "headline": "globachem n.v.",
    "madeby": "6-benziladenina 1,9% + giberelinas ga4/ga7 1,9% [sl] p/v"
  },
  {
    "id": 1368,
    "registrynumber": 25956,
    "tradename": "mystic 25 ew",
    "headline": "nufarm españa, s.a.",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 1369,
    "registrynumber": 25961,
    "tradename": "esquive wp",
    "headline": "agrauxine s.a. (marcq en baroeul)",
    "madeby": "trichoderma atroviride(cepa i-1237) 5% (1 x 10e8 cfu/g) [wp] p/p"
  },
  {
    "id": 1370,
    "registrynumber": 25965,
    "tradename": "isomate c tt",
    "headline": "cbc iberia s.a.u.",
    "madeby": "1-tetradecanol 7,1% (31 mg s.a./difusor) + dodecan-1-ol 29,7% (132 mg s.a./difusor) + e,e-8,10-dodecadien-1-ol 57,3% (254 mg s.a./difusor) [vp] p/p"
  },
  {
    "id": 1371,
    "registrynumber": 25966,
    "tradename": "isonet l tt",
    "headline": "cbc iberia s.a.u.",
    "madeby": "e/z-7,9-dodecadienil acetato 79,2% (380 mg s.a./difusor) [vp] p/p"
  },
  {
    "id": 1372,
    "registrynumber": 25967,
    "tradename": "isonet z",
    "headline": "cbc iberia s.a.u.",
    "madeby": "(e,z)-2,13-octadecadienil acetato 81,2% + (e,z)-3,13-octadecadienil acetato 2,7% (66 mg de la mezcla de s.a./difusor) [vp] p/p"
  },
  {
    "id": 1373,
    "registrynumber": 25971,
    "tradename": "nexy",
    "headline": "agrauxine s.a. (marcq en baroeul)",
    "madeby": "candida oleophila (cepa o) 8,1% (4,3 x 10e9 cfu/g) [wg] p/p"
  },
  {
    "id": 1374,
    "registrynumber": 25973,
    "tradename": "bonzi",
    "headline": "syngenta españa, s.a.",
    "madeby": "paclobutrazol 0,4% [sc] p/v"
  },
  {
    "id": 1375,
    "registrynumber": "ES-00001",
    "tradename": "dynali",
    "headline": "syngenta españa, s.a.",
    "madeby": "ciflufenamid 3% + difenoconazol 6% [dc] p/v"
  },
  {
    "id": 1376,
    "registrynumber": "ES-00002",
    "tradename": "neoflan",
    "headline": "gowan crop protection ltd.",
    "madeby": "benfluralina 60% [wg] p/p"
  },
  {
    "id": 1377,
    "registrynumber": "ES-00003",
    "tradename": "clincher plus",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "cihalofop-butil 20% [ec] p/v"
  },
  {
    "id": 1378,
    "registrynumber": "ES-00004",
    "tradename": "lieto",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "cimoxanilo 33% + zoxamida 33% [wg] p/p"
  },
  {
    "id": 1379,
    "registrynumber": "ES-00006",
    "tradename": "applaud 25 sc",
    "headline": "nichino europe co., ltd",
    "madeby": "buprofezin 25% [sc] p/v"
  },
  {
    "id": 1380,
    "registrynumber": "ES-00007",
    "tradename": "electis cx",
    "headline": "gowan crop protection ltd.",
    "madeby": "cimoxanilo 33% + zoxamida 33% [wg] p/p"
  },
  {
    "id": 1381,
    "registrynumber": "ES-00008",
    "tradename": "talendo extra",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "proquinazid 16% + tetraconazol 8% [ec] p/v"
  },
  {
    "id": 1382,
    "registrynumber": "ES-00009",
    "tradename": "luna experience",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fluopyram 20% + tebuconazol 20% [sc] p/v"
  },
  {
    "id": 1383,
    "registrynumber": "ES-00010",
    "tradename": "prominent",
    "headline": "isagro españa s.l.",
    "madeby": "proquinazid 16% + tetraconazol 8% [ec] p/v"
  },
  {
    "id": 1384,
    "registrynumber": "ES-00011",
    "tradename": "moximate 505 wp",
    "headline": "indofil industries limited (italia)",
    "madeby": "mancozeb 46,5% + cimoxanilo 4% [wp] p/p"
  },
  {
    "id": 1385,
    "registrynumber": "ES-00012",
    "tradename": "scatto",
    "headline": "isagro españa s.l.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1386,
    "registrynumber": "ES-00013",
    "tradename": "deltagri",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1387,
    "registrynumber": "ES-00014",
    "tradename": "traxos pro",
    "headline": "syngenta españa, s.a.",
    "madeby": "clodinafop-propargil 3% + pinoxaden 3% [ec] p/v"
  },
  {
    "id": 1388,
    "registrynumber": "ES-00015",
    "tradename": "axial pro",
    "headline": "syngenta españa, s.a.",
    "madeby": "pinoxaden 6% [ec] p/v"
  },
  {
    "id": 1389,
    "registrynumber": "ES-00016",
    "tradename": "axcela",
    "headline": "lonza cologne gmbh",
    "madeby": "metaldehido 3% [rb] p/p"
  },
  {
    "id": 1390,
    "registrynumber": "ES-00018",
    "tradename": "buzz ultra df",
    "headline": "sulphur mills limited (mumbai)",
    "madeby": "tebuconazol 75% [wg] p/p"
  },
  {
    "id": 1391,
    "registrynumber": "ES-00019",
    "tradename": "unicorn df",
    "headline": "nufarm españa, s.a.",
    "madeby": "azufre 70% + tebuconazol 4,5% [wg] p/p"
  },
  {
    "id": 1392,
    "registrynumber": "ES-00020",
    "tradename": "adengo",
    "headline": "bayer cropscience, s.l.",
    "madeby": "isoxaflutol 22,5% + tiencarbazona-metil 9% [sc] p/v"
  },
  {
    "id": 1393,
    "registrynumber": "ES-00022",
    "tradename": "influx 480 fs",
    "headline": "syngenta españa, s.a.",
    "madeby": "fludioxonil 48% [fs] p/v"
  },
  {
    "id": 1394,
    "registrynumber": "ES-00023",
    "tradename": "desimo duo",
    "headline": "lonza cologne gmbh",
    "madeby": "metaldehido 3% [rb] p/p"
  },
  {
    "id": 1395,
    "registrynumber": "ES-00024",
    "tradename": "movento gold",
    "headline": "bayer cropscience, s.l.",
    "madeby": "spirotetramat 10% [sc] p/v"
  },
  {
    "id": 1396,
    "registrynumber": "ES-00025",
    "tradename": "viper max",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "penoxsulam 1,33% + cyhalofop-butil 10% [od] p/v"
  },
  {
    "id": 1397,
    "registrynumber": "ES-00026",
    "tradename": "nomate ptb spiral",
    "headline": "scentry biologicals, inc.",
    "madeby": "acetato de (e)-5-decen-1-ilo 8,84% + (e)-5-decen-1-ol 1,56% [vp] p/p"
  },
  {
    "id": 1398,
    "registrynumber": "ES-00027",
    "tradename": "systhane ecozome",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "miclobutanil 4,5% [ew] p/v"
  },
  {
    "id": 1399,
    "registrynumber": "ES-00028",
    "tradename": "luna sensation",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fluopyram 25% + trifloxistrobin 25% [sc] p/v"
  },
  {
    "id": 1400,
    "registrynumber": "ES-00029",
    "tradename": "scholar 230 sc",
    "headline": "syngenta españa, s.a.",
    "madeby": "fludioxonil 23% [sc] p/v"
  },
  {
    "id": 1401,
    "registrynumber": "ES-00030",
    "tradename": "monsoon active",
    "headline": "bayer cropscience, s.l.",
    "madeby": "foramsulfuron 3% + tiencarbazona-metil 1% [od] p/v"
  },
  {
    "id": 1402,
    "registrynumber": "ES-00035",
    "tradename": "prolectus",
    "headline": "kenogard, s.a.",
    "madeby": "fenpirazamina 50% [wg] p/p"
  },
  {
    "id": 1403,
    "registrynumber": "ES-00036",
    "tradename": "frutil",
    "headline": "nippon gases españa, s.l.u.",
    "madeby": "etileno 4% [ga] p/p"
  },
  {
    "id": 1404,
    "registrynumber": "ES-00041",
    "tradename": "decis trap",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 0,015% [rb] p/p"
  },
  {
    "id": 1405,
    "registrynumber": "ES-00042",
    "tradename": "ceratipack",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "deltametrin 0,015% [rb] p/p"
  },
  {
    "id": 1406,
    "registrynumber": "ES-00044",
    "tradename": "folder 80 wg",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "folpet 80% [wg] p/p"
  },
  {
    "id": 1407,
    "registrynumber": "ES-00045",
    "tradename": "turex 50 wg",
    "headline": "mitsui agriscience international s.a./b.v.",
    "madeby": "bacillus thuringiensis aizawai 50% [wg] p/p"
  },
  {
    "id": 1408,
    "registrynumber": "ES-00046",
    "tradename": "metarex inov",
    "headline": "de sangosse s.a.s.",
    "madeby": "metaldehido 4% [gb] p/p"
  },
  {
    "id": 1409,
    "registrynumber": "ES-00047",
    "tradename": "metarex m",
    "headline": "de sangosse s.a.s.",
    "madeby": "metaldehido 2,5% [gb] p/p"
  },
  {
    "id": 1410,
    "registrynumber": "ES-00048",
    "tradename": "anti-limacos directo plus",
    "headline": "de sangosse s.a.s.",
    "madeby": "metaldehido 4% [gb] p/p"
  },
  {
    "id": 1411,
    "registrynumber": "ES-00050",
    "tradename": "lumivia",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "clorantraniliprol 62,5% [fs] p/v"
  },
  {
    "id": 1412,
    "registrynumber": "ES-00051",
    "tradename": "roundup 36kz",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 36% (sal potásica) [sl] p/v"
  },
  {
    "id": 1413,
    "registrynumber": "ES-00052",
    "tradename": "spasor kz",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 36% (sal potásica) [sl] p/v"
  },
  {
    "id": 1414,
    "registrynumber": "ES-00053",
    "tradename": "promanal agro",
    "headline": "w.neudorff gmbh kg",
    "madeby": "aceite de parafina (cas [8042-47-5]) 83% [ec] p/v"
  },
  {
    "id": 1415,
    "registrynumber": "ES-00054",
    "tradename": "ultra-prom",
    "headline": "agrichem, s.a.",
    "madeby": "aceite de parafina (cas [8042-47-5]) 54,6% [ew] p/v"
  },
  {
    "id": 1416,
    "registrynumber": "ES-00056",
    "tradename": "cidely top",
    "headline": "syngenta españa, s.a.",
    "madeby": "difenoconazol 12,5% + ciflufenamida 1,5% [dc] p/v"
  },
  {
    "id": 1417,
    "registrynumber": "ES-00059",
    "tradename": "cidetrak cm",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "e,e-8,10-dodecadien-1-ol 4,6% [vp] p/p"
  },
  {
    "id": 1418,
    "registrynumber": "ES-00060",
    "tradename": "cidetrak egvm",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "(e,z)-7,9-dodecadien-1-yl acetato 3,8% [vp] p/p"
  },
  {
    "id": 1419,
    "registrynumber": "ES-00061",
    "tradename": "cidetrak ofm",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "acetato de (z)-8-dodecen-1-ilo 4,65% + acetato de (e)-8-dodecen-1-ilo 0,3% + z-8-dodecen-1-ol 0,05% [vp] p/p"
  },
  {
    "id": 1420,
    "registrynumber": "ES-00062",
    "tradename": "aviator xpro",
    "headline": "bayer cropscience, s.l.",
    "madeby": "bixafen 7,5% + protioconazol 15% [ec] p/v"
  },
  {
    "id": 1421,
    "registrynumber": "ES-00063",
    "tradename": "sharpen 33% ec",
    "headline": "sharda europe bvba",
    "madeby": "pendimetalina 33% [ec] p/v"
  },
  {
    "id": 1422,
    "registrynumber": "ES-00064",
    "tradename": "penshar 40% sc",
    "headline": "sharda europe bvba",
    "madeby": "pendimetalina 40% [sc] p/v"
  },
  {
    "id": 1423,
    "registrynumber": "ES-00065",
    "tradename": "cabrio wg",
    "headline": "basf española s.l.u.",
    "madeby": "piraclostrobin 20% [wg] p/p"
  },
  {
    "id": 1424,
    "registrynumber": "ES-00066",
    "tradename": "carial top",
    "headline": "syngenta españa, s.a.",
    "madeby": "mandipropamida 25% + difenoconazol 25% [sc] p/v"
  },
  {
    "id": 1425,
    "registrynumber": "ES-00067",
    "tradename": "pointer geo",
    "headline": "sipcam inagra, s.a.",
    "madeby": "lambda cihalotrin 0,4% [gr] p/p"
  },
  {
    "id": 1426,
    "registrynumber": "ES-00068",
    "tradename": "trika lambda 1",
    "headline": "sipcam inagra, s.a.",
    "madeby": "lambda cihalotrin 0,4% [gr] p/p"
  },
  {
    "id": 1427,
    "registrynumber": "ES-00069",
    "tradename": "komodo 10 ec",
    "headline": "upl iberia, s.a.",
    "madeby": "lambda cihalotrin 10% [ec] p/v"
  },
  {
    "id": 1428,
    "registrynumber": "ES-00070",
    "tradename": "sumitrak combo",
    "headline": "kenogard, s.a.",
    "madeby": "e,e-8,10-dodecadien-1-ol 2,4% [vp] p/p"
  },
  {
    "id": 1429,
    "registrynumber": "ES-00072",
    "tradename": "dimix",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "dimetomorf 50% [sc] p/v"
  },
  {
    "id": 1430,
    "registrynumber": "ES-00073",
    "tradename": "brevis",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metamitrona 15% [sg] p/p"
  },
  {
    "id": 1431,
    "registrynumber": "ES-00074",
    "tradename": "electis d",
    "headline": "gowan crop protection ltd.",
    "madeby": "zoxamida 18% + dimetomorf 18% [sc] p/v"
  },
  {
    "id": 1432,
    "registrynumber": "ES-00075",
    "tradename": "nomate cm spiral",
    "headline": "scentry biologicals, inc.",
    "madeby": "e,e-8,10-dodecadien-1-ol 7,75% [vp] p/p"
  },
  {
    "id": 1433,
    "registrynumber": "ES-00079",
    "tradename": "ovipron top",
    "headline": "upl iberia, s.a.",
    "madeby": "aceite de parafina (cas [97862-82-3]) 80% [ec] p/v"
  },
  {
    "id": 1434,
    "registrynumber": "ES-00080",
    "tradename": "latitude xl",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "siltiofam 12,5% [fs] p/p"
  },
  {
    "id": 1435,
    "registrynumber": "ES-00081",
    "tradename": "librax",
    "headline": "basf española s.l.u.",
    "madeby": "fluxapyroxad 62,5 g/l + metconazol 45 g/l [ec] p/v"
  },
  {
    "id": 1436,
    "registrynumber": "ES-00082",
    "tradename": "lepinox plus",
    "headline": "agrichem, s.a.",
    "madeby": "bacillus thuringiensis kurstaki (eg 2348) 37,5% [wp] p/p"
  },
  {
    "id": 1437,
    "registrynumber": "ES-00083",
    "tradename": "hussar plus",
    "headline": "bayer cropscience, s.l.",
    "madeby": "iodosulfuron-metil-sodio 5% + mesosulfuron-metil 0,75% [od] p/v"
  },
  {
    "id": 1438,
    "registrynumber": "ES-00084",
    "tradename": "polithiol",
    "headline": "upl iberia, s.a.",
    "madeby": "aceite de parafina (cas [97862-82-3]) 40% [ew] p/v"
  },
  {
    "id": 1439,
    "registrynumber": "ES-00086",
    "tradename": "madex top",
    "headline": "andermatt iberia, s.l.",
    "madeby": "granulovirus de cydia pomonella (cepa v15) 3 x 10e13 gránulos/l [sc] p/v"
  },
  {
    "id": 1440,
    "registrynumber": "ES-00088",
    "tradename": "toscana",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1441,
    "registrynumber": "ES-00089",
    "tradename": "trimur",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1442,
    "registrynumber": "ES-00090",
    "tradename": "ovispray",
    "headline": "total españa, s.a.u.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 80% [ec] p/v"
  },
  {
    "id": 1443,
    "registrynumber": "ES-00091",
    "tradename": "helosate plus",
    "headline": "helm ag",
    "madeby": "glifosato 45% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1444,
    "registrynumber": "ES-00092",
    "tradename": "hormonal d-60",
    "headline": "probelte s.a.u.",
    "madeby": "2,4-d acido 72% (c. sal dimetilamina) [sl] p/v"
  },
  {
    "id": 1445,
    "registrynumber": "ES-00094",
    "tradename": "rak 3",
    "headline": "basf española s.l.u.",
    "madeby": "e,e-8,10 dodecadienol y n-tetradecilacetato 5,4% [vp] p/p"
  },
  {
    "id": 1446,
    "registrynumber": "ES-00096",
    "tradename": "minecto alpha",
    "headline": "syngenta españa, s.a.",
    "madeby": "cyantraniliprol 10% + acibenzolar-s-metil 1,25% [sc] p/v"
  },
  {
    "id": 1447,
    "registrynumber": "ES-00097",
    "tradename": "moximate 505 wg",
    "headline": "indofil industries limited (italia)",
    "madeby": "cimoxanilo 4% + mancozeb 46,5% [wg] p/p"
  },
  {
    "id": 1448,
    "registrynumber": "ES-00098",
    "tradename": "biathlon 4d",
    "headline": "basf española s.l.u.",
    "madeby": "florasulam 5,4% + tritosulfuron 71,4% [wg] p/p"
  },
  {
    "id": 1449,
    "registrynumber": "ES-00099",
    "tradename": "com 802 09 m rb",
    "headline": "compo iberia, s.l.",
    "madeby": "fosfato ferrico (anhidro) 1,25% [rb] p/p"
  },
  {
    "id": 1450,
    "registrynumber": "ES-00100",
    "tradename": "regalis plus",
    "headline": "basf española s.l.u.",
    "madeby": "prohexadiona-cálcica 10% [wg] p/p"
  },
  {
    "id": 1451,
    "registrynumber": "ES-00101",
    "tradename": "athlet",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "bifenox 20% + clortoluron 50% [sc] p/v"
  },
  {
    "id": 1452,
    "registrynumber": "ES-00102",
    "tradename": "lumax",
    "headline": "syngenta españa, s.a.",
    "madeby": "mesotriona 3,75% + terbutilazina 18,75% + s-metolacloro 31,25% [se] p/v"
  },
  {
    "id": 1453,
    "registrynumber": "ES-00104",
    "tradename": "ruedo",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "florasulam 7,5% + penoxsulam 15% [sc] p/v"
  },
  {
    "id": 1454,
    "registrynumber": "ES-00105",
    "tradename": "celest extra",
    "headline": "syngenta españa, s.a.",
    "madeby": "difenoconazol 2,5% + fludioxonil 2,5% [fs] p/v"
  },
  {
    "id": 1455,
    "registrynumber": "ES-00106",
    "tradename": "misha 20 ew",
    "headline": "sharda europe bvba",
    "madeby": "miclobutanil 20% [ew] p/v"
  },
  {
    "id": 1456,
    "registrynumber": "ES-00107",
    "tradename": "fast fruit max",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "2,4-d acido 10% [sl] p/v"
  },
  {
    "id": 1457,
    "registrynumber": "ES-00108",
    "tradename": "araw",
    "headline": "sipcam iberia s.l.",
    "madeby": "eugenol 3,3% + geraniol 6,6% + timol 6,6% [cs] p/v"
  },
  {
    "id": 1458,
    "registrynumber": "ES-00109",
    "tradename": "topper",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "triclopir (acido) 10% [tb] p/p"
  },
  {
    "id": 1459,
    "registrynumber": "ES-00110",
    "tradename": "cizalla od",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "nicosulfuron 2% + sulcotriona 15% [od] p/v"
  },
  {
    "id": 1460,
    "registrynumber": "ES-00111",
    "tradename": "extensor od",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "nicosulfuron 2% + sulcotriona 15% [od] p/v"
  },
  {
    "id": 1461,
    "registrynumber": "ES-00113",
    "tradename": "nero",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "clomazona 2,4% + petoxamida 40% [ec] p/v"
  },
  {
    "id": 1462,
    "registrynumber": "ES-00114",
    "tradename": "sanmite 10 sc",
    "headline": "nissan chemical europe s.a.s.",
    "madeby": "piridaben 10% [sc] p/v"
  },
  {
    "id": 1463,
    "registrynumber": "ES-00115",
    "tradename": "fandango",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fluoxastrobin 10% + protioconazol 10% [ec] p/v"
  },
  {
    "id": 1464,
    "registrynumber": "ES-00116",
    "tradename": "nissorun flow",
    "headline": "nisso chemical europe gmbh",
    "madeby": "hexitiazox 25% [sc] p/v"
  },
  {
    "id": 1465,
    "registrynumber": "ES-00118",
    "tradename": "metash 3%",
    "headline": "sharda europe bvba",
    "madeby": "metaldehido 3% [gb] p/p"
  },
  {
    "id": 1466,
    "registrynumber": "ES-00119",
    "tradename": "venzar 50 sc",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "lenacilo 50% [sc] p/v"
  },
  {
    "id": 1467,
    "registrynumber": "ES-00120",
    "tradename": "sirtaki",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "clomazona 36% [cs] p/v"
  },
  {
    "id": 1468,
    "registrynumber": "ES-00122",
    "tradename": "jaboland",
    "headline": "iab, s.l.",
    "madeby": "sales potásicas de ácidos grasos vegetales 41,6% [sl] p/v"
  },
  {
    "id": 1469,
    "registrynumber": "ES-00123",
    "tradename": "nakar",
    "headline": "seipasa s.a. (tardienta)",
    "madeby": "sales potásicas de ácidos grasos vegetales 41,6% [sl] p/v"
  },
  {
    "id": 1470,
    "registrynumber": "ES-00124",
    "tradename": "jabolim",
    "headline": "quimicas meristem, s.l.",
    "madeby": "sales potásicas de ácidos grasos vegetales 41,6% [sl] p/v"
  },
  {
    "id": 1471,
    "registrynumber": "ES-00125",
    "tradename": "tec-bom",
    "headline": "grupo agrotecnologia, s.l.",
    "madeby": "sales potásicas de ácidos grasos vegetales 41,6% [sl] p/v"
  },
  {
    "id": 1472,
    "registrynumber": "ES-00127",
    "tradename": "met52 od",
    "headline": "novozymes france s.a.s.",
    "madeby": "metarhizium anisopliae var. anisopliae (cepa f52) 10,5% [od] p/v"
  },
  {
    "id": 1473,
    "registrynumber": "ES-00128",
    "tradename": "tbm 75 wg",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1474,
    "registrynumber": "ES-00129",
    "tradename": "afromyl",
    "headline": "industrias afrasa, s.a.",
    "madeby": "oxamilo 10% [sl] p/v"
  },
  {
    "id": 1475,
    "registrynumber": "ES-00130",
    "tradename": "olredy",
    "headline": "lainco, s.a.",
    "madeby": "oxamilo 10% [sl] p/v"
  },
  {
    "id": 1476,
    "registrynumber": "ES-00131",
    "tradename": "sondae",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "oxamilo 10% [sl] p/v"
  },
  {
    "id": 1477,
    "registrynumber": "ES-00132",
    "tradename": "bencarb",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "oxamilo 10% [sl] p/v"
  },
  {
    "id": 1478,
    "registrynumber": "ES-00133",
    "tradename": "impala star",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "fenbuconazol 2,5% [ew] p/v"
  },
  {
    "id": 1479,
    "registrynumber": "ES-00134",
    "tradename": "pindar",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "penoxsulam 1,6% + triclopir (acido) 12% [od] p/v"
  },
  {
    "id": 1480,
    "registrynumber": "ES-00135",
    "tradename": "trailer",
    "headline": "industrias afrasa, s.a.",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1481,
    "registrynumber": "ES-00136",
    "tradename": "tarika",
    "headline": "lainco, s.a.",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1482,
    "registrynumber": "ES-00137",
    "tradename": "belure-t",
    "headline": "probelte s.a.u.",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1483,
    "registrynumber": "ES-00138",
    "tradename": "alcance sync tec",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "clomazona 4,3% + pendimetalina 29,8% [cs] p/v"
  },
  {
    "id": 1484,
    "registrynumber": "ES-00139",
    "tradename": "dimbo 480 sl",
    "headline": "gharda chemicals europe limited (irlanda)",
    "madeby": "dicamba 48% (c. sal dimetilamina) [sl] p/v"
  },
  {
    "id": 1485,
    "registrynumber": "ES-00140",
    "tradename": "isonet on",
    "headline": "cbc iberia s.a.u.",
    "madeby": "acetato de (e)-11-tetradecen-1-ilo 44,4% + acetato de (z)-11 tetradecen-1-ilo 44,4% [vp] p/p"
  },
  {
    "id": 1486,
    "registrynumber": "ES-00141",
    "tradename": "trimmer sx",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "tribenuron-metil 50% [wg] p/p"
  },
  {
    "id": 1487,
    "registrynumber": "ES-00142",
    "tradename": "sulcotrek",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "sulcotriona 17,3% + terbutilazina 32,7% [sc] p/v"
  },
  {
    "id": 1488,
    "registrynumber": "ES-00145",
    "tradename": "systhane 25",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "miclobutanil 2,5% [ew] p/v"
  },
  {
    "id": 1489,
    "registrynumber": "ES-00150",
    "tradename": "imacide 7.5 ls",
    "headline": "productos citrosol s.a.",
    "madeby": "imazalil (sulfato) 7,5% [sl] p/v"
  },
  {
    "id": 1490,
    "registrynumber": "ES-00151",
    "tradename": "spyrit pro",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "dimetomorf 9% + propamocarb 50% (en forma de clorhidrato) [sc] p/v"
  },
  {
    "id": 1491,
    "registrynumber": "ES-00152",
    "tradename": "glover",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "dimetomorf 9% + propamocarb 50% (en forma de clorhidrato) [sc] p/v"
  },
  {
    "id": 1492,
    "registrynumber": "ES-00153",
    "tradename": "serrate",
    "headline": "syngenta españa, s.a.",
    "madeby": "clodinafop-propargil 20% + piroxsulam 7,5% [wg] p/p"
  },
  {
    "id": 1493,
    "registrynumber": "ES-00154",
    "tradename": "serenade aso",
    "headline": "bayer cropscience, s.l.",
    "madeby": "bacillus subtilis (cepa qst 713) 1,34% [sc] p/v"
  },
  {
    "id": 1494,
    "registrynumber": "ES-00156",
    "tradename": "border 10",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1495,
    "registrynumber": "ES-00157",
    "tradename": "ikebana triple accion",
    "headline": "rotam agrochemical europe ltd.",
    "madeby": "deltametrin 0,001% + tebuconazol 0,02% + abamectina 0,0015% [al] p/v"
  },
  {
    "id": 1496,
    "registrynumber": "ES-00158",
    "tradename": "successor t",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "petoxamida 30% + terbutilazina 18,75% [se] p/v"
  },
  {
    "id": 1497,
    "registrynumber": "ES-00159",
    "tradename": "arya",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "abamectina 1,8% [ew] p/v"
  },
  {
    "id": 1498,
    "registrynumber": "ES-00160",
    "tradename": "starane hl",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "fluroxipir (ester metilheptil) 33,3% [ec] p/v"
  },
  {
    "id": 1499,
    "registrynumber": "ES-00161",
    "tradename": "axil m wg",
    "headline": "upl iberia, s.a.",
    "madeby": "mancozeb 64% + metalaxil 8% [wg] p/p"
  },
  {
    "id": 1500,
    "registrynumber": "ES-00163",
    "tradename": "placaje fp",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "azoxistrobin 9,35% + folpet 50% [sc] p/v"
  },
  {
    "id": 1501,
    "registrynumber": "ES-00164",
    "tradename": "navaron",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "azoxistrobin 9,35% + folpet 50% [sc] p/v"
  },
  {
    "id": 1502,
    "registrynumber": "ES-00165",
    "tradename": "checkmate puffer lb",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "(e,z)-7,9-dodecadien-1-yl acetato 9,11% [ae] p/p"
  },
  {
    "id": 1503,
    "registrynumber": "ES-00166",
    "tradename": "pol-sulphur 80 wg",
    "headline": "ciech sarzyna spolka akcyjna",
    "madeby": "azufre 80% [wg] p/p"
  },
  {
    "id": 1504,
    "registrynumber": "ES-00167",
    "tradename": "pol-sulphur 80 wp",
    "headline": "ciech sarzyna spolka akcyjna",
    "madeby": "azufre 80% [wp] p/p"
  },
  {
    "id": 1505,
    "registrynumber": "ES-00168",
    "tradename": "deccopyr",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "pirimetanil 40% [sc] p/v"
  },
  {
    "id": 1506,
    "registrynumber": "ES-00169",
    "tradename": "dardo (vp)",
    "headline": "ecologia y protección agrícola, s.l.",
    "madeby": "rescalure 4% [vp] p/v"
  },
  {
    "id": 1507,
    "registrynumber": "ES-00170",
    "tradename": "actiseal i 7.5",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "imazalil (sulfato) 7,5% [sl] p/v"
  },
  {
    "id": 1508,
    "registrynumber": "ES-00171",
    "tradename": "citrosol a opp",
    "headline": "productos citrosol s.a.",
    "madeby": "2-fenilfenol 0,25% [ew] p/v"
  },
  {
    "id": 1509,
    "registrynumber": "ES-00174",
    "tradename": "lontrel 600 sl",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "clopiralida 60% [sl] p/v"
  },
  {
    "id": 1510,
    "registrynumber": "ES-00175",
    "tradename": "cliophar 600 sl",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "clopiralida 60% [sl] p/v"
  },
  {
    "id": 1511,
    "registrynumber": "ES-00178",
    "tradename": "ripelock tabs 2.0",
    "headline": "agrofresh holding france s.a.s.",
    "madeby": "1-metilciclopropeno 2% [vp] p/p"
  },
  {
    "id": 1512,
    "registrynumber": "ES-00179",
    "tradename": "smartfresh protabs",
    "headline": "agrofresh holding france s.a.s.",
    "madeby": "1-metilciclopropeno 2% [vp] p/p"
  },
  {
    "id": 1513,
    "registrynumber": "ES-00181",
    "tradename": "helicovex",
    "headline": "andermatt iberia, s.l.",
    "madeby": "helicoverpa armigera nucleopolyedrovirus (7,5 x 10e12 obs/l) 52% [sc] p/v. cepa dsmz: bv-0003"
  },
  {
    "id": 1514,
    "registrynumber": "ES-00182",
    "tradename": "madex twin",
    "headline": "andermatt iberia, s.l.",
    "madeby": "granulovirus de cydia pomonella (cepa v22) 3 x 10e13 gránulos/l [sc] p/v"
  },
  {
    "id": 1515,
    "registrynumber": "ES-00183",
    "tradename": "velum prime",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fluopyram 40% [sc] p/v"
  },
  {
    "id": 1516,
    "registrynumber": "ES-00186",
    "tradename": "deccopyr pot",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "pirimetanil 30% [ge] p/p"
  },
  {
    "id": 1517,
    "registrynumber": "ES-00189",
    "tradename": "spirox 500 ec",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "spiroxamina 50% [ec] p/v"
  },
  {
    "id": 1518,
    "registrynumber": "ES-00190",
    "tradename": "checkmate puffer ofm",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "acetato de (z)-8-dodecen-1-ilo 11,63% + acetato de (e)-8-dodecen-1-ilo 0,75% + (z)-8-dodecen-1-ilo 0,12% [ae] p/p"
  },
  {
    "id": 1519,
    "registrynumber": "ES-00191",
    "tradename": "mister c",
    "headline": "cbc (europe) s.r.l.",
    "madeby": "(e,e)-8,10-dodecadien-1-ol 20,9% [ae] p/p"
  },
  {
    "id": 1520,
    "registrynumber": "ES-00195",
    "tradename": "eradicoat",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "maltodextrin 59,8% [sl] p/v"
  },
  {
    "id": 1521,
    "registrynumber": "ES-00196",
    "tradename": "florgib tablet",
    "headline": "fine agrochemicals ltd.",
    "madeby": "ácido giberélico 18,4% [tb] p/p"
  },
  {
    "id": 1522,
    "registrynumber": "ES-00197",
    "tradename": "florgib 4l",
    "headline": "fine agrochemicals ltd.",
    "madeby": "acido giberelico 4% [sl] p/v"
  },
  {
    "id": 1523,
    "registrynumber": "ES-00198",
    "tradename": "elegant",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "florasulam 0,625% + 2,4-d 30% [se] p/v"
  },
  {
    "id": 1524,
    "registrynumber": "ES-00199",
    "tradename": "fuga",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "flufenacet 50% [sc] p/v"
  },
  {
    "id": 1525,
    "registrynumber": "ES-00200",
    "tradename": "pacifica plus",
    "headline": "bayer cropscience, s.l.",
    "madeby": "iodosulfuron-metil-sodio 1% + amidosulfurón 5% + mesosulfuron-metil 3% [wg] p/v"
  },
  {
    "id": 1526,
    "registrynumber": "ES-00201",
    "tradename": "buguis",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "clodinafop-propargil 9,5% [ec] p/v"
  },
  {
    "id": 1527,
    "registrynumber": "ES-00202",
    "tradename": "ciclope",
    "headline": "industrias afrasa, s.a.",
    "madeby": "clodinafop-propargil 9,5% [ec] p/v"
  },
  {
    "id": 1528,
    "registrynumber": "ES-00203",
    "tradename": "verresta",
    "headline": "basf española s.l.u.",
    "madeby": "cicloxidim 10% [ec] p/v"
  },
  {
    "id": 1529,
    "registrynumber": "ES-00204",
    "tradename": "protone sl",
    "headline": "kenogard, s.a.",
    "madeby": "acido s-abscisico 10,4% [sl] p/v"
  },
  {
    "id": 1530,
    "registrynumber": "ES-00205",
    "tradename": "callisto plus",
    "headline": "syngenta españa, s.a.",
    "madeby": "mesotriona 5% + dicamba 12% [sc] p/v"
  },
  {
    "id": 1531,
    "registrynumber": "ES-00206",
    "tradename": "actiseal f 60",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "fludioxonil 60% [sc] p/v"
  },
  {
    "id": 1532,
    "registrynumber": "ES-00207",
    "tradename": "pretender",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "paclobutrazol 0,4% [sc] p/v"
  },
  {
    "id": 1533,
    "registrynumber": "ES-00209",
    "tradename": "fytosave",
    "headline": "fytofend, s.a.",
    "madeby": "cos-oga 1,25% [sl] p/v"
  },
  {
    "id": 1534,
    "registrynumber": "ES-00210",
    "tradename": "nemguard granules",
    "headline": "cbc (europe) s.r.l.",
    "madeby": "extracto de ajo 45% [gr] p/p"
  },
  {
    "id": 1535,
    "registrynumber": "ES-00211",
    "tradename": "neptune",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "tebuconazol 3,6% + oxicloruro de cobre (exp. como cobre) 36% [sc] p/v"
  },
  {
    "id": 1536,
    "registrynumber": "ES-00214",
    "tradename": "gulfstream",
    "headline": "rotam agrochemical europe ltd.",
    "madeby": "diflufenican 3% + glifosato 27% [sc] p/v"
  },
  {
    "id": 1537,
    "registrynumber": "ES-00215",
    "tradename": "benelus",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "ciprodinil 18,75% + tebuconazol 12,5% [ec] p/v"
  },
  {
    "id": 1538,
    "registrynumber": "ES-00216",
    "tradename": "cimoxate mz wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "cimoxanilo 4% + mancozeb 46,5% [wg] p/p"
  },
  {
    "id": 1539,
    "registrynumber": "ES-00217",
    "tradename": "mirlo wg",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "cimoxanilo 4% + mancozeb 46,5% [wg] p/p"
  },
  {
    "id": 1540,
    "registrynumber": "ES-00218",
    "tradename": "valis plus",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "valifenalato 6% + oxicloruro de cobre 15% (exp. como cu) + hidroxido cuprico 15% (exp. como cu) [wg] p/p"
  },
  {
    "id": 1541,
    "registrynumber": "ES-00219",
    "tradename": "emendo plus",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "valifenalato 6% + oxicloruro de cobre 15% (exp. como cu) + hidroxido cuprico 15% (exp. como cu) [wg] p/p"
  },
  {
    "id": 1542,
    "registrynumber": "ES-00220",
    "tradename": "bismark",
    "headline": "sipcam iberia s.l.",
    "madeby": "pendimetalina 27,5% + clomazona 5,5% [cs] p/v"
  },
  {
    "id": 1543,
    "registrynumber": "ES-00221",
    "tradename": "tripali",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "florasulam 10,5% + metsulfurón metil 8,3% + tribenuron-metil 8,3% [wg] p/p"
  },
  {
    "id": 1544,
    "registrynumber": "ES-00222",
    "tradename": "beloukha",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "acido pelargonico 68% [ec] p/v"
  },
  {
    "id": 1545,
    "registrynumber": "ES-00223",
    "tradename": "diprospero",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "dimetomorf 9% + propamocarb 50% (en forma de clorhidrato) [sc] p/v"
  },
  {
    "id": 1546,
    "registrynumber": "ES-00224",
    "tradename": "cuprofix c disperss",
    "headline": "upl europe ltd. (uk)",
    "madeby": "sulfato cuprocalcico 20% (exp. en cu) + cimoxanilo 4% [wg] p/p"
  },
  {
    "id": 1547,
    "registrynumber": "ES-00225",
    "tradename": "pirecris",
    "headline": "seipasa s.a. (tardienta)",
    "madeby": "piretrinas 2% [ec] p/v"
  },
  {
    "id": 1548,
    "registrynumber": "ES-00226",
    "tradename": "kalimba",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "dicamba 48% (c. sal dimetilamina) [sl] p/v"
  },
  {
    "id": 1549,
    "registrynumber": "ES-00227",
    "tradename": "terdim",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "terbutilazina 30% + dimetenamida-p 26,5% [se] p/v"
  },
  {
    "id": 1550,
    "registrynumber": "ES-00228",
    "tradename": "enervin duo sc",
    "headline": "basf española s.l.u.",
    "madeby": "ametoctradin 30% + dimetomorf 22,5% [sc] p/v"
  },
  {
    "id": 1551,
    "registrynumber": "ES-00231",
    "tradename": "laudis wg",
    "headline": "bayer cropscience, s.l.",
    "madeby": "tembotriona 20% [wg] p/p"
  },
  {
    "id": 1552,
    "registrynumber": "ES-00232",
    "tradename": "interest",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "difenoconazol 3% [fs] p/v"
  },
  {
    "id": 1553,
    "registrynumber": "ES-00233",
    "tradename": "diablo max",
    "headline": "industrias afrasa, s.a.",
    "madeby": "hexitiazox 25,87 % [sc] p/v"
  },
  {
    "id": 1554,
    "registrynumber": "ES-00234",
    "tradename": "tiazosac",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "hexitiazox 25,87 % [sc] p/v"
  },
  {
    "id": 1555,
    "registrynumber": "ES-00235",
    "tradename": "jalisco sc",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "hexitiazox 25,87 % [sc] p/v"
  },
  {
    "id": 1556,
    "registrynumber": "ES-00237",
    "tradename": "pyganic",
    "headline": "kenogard, s.a.",
    "madeby": "piretrinas 12,9 g/l [ec]"
  },
  {
    "id": 1557,
    "registrynumber": "ES-00238",
    "tradename": "cymter wg",
    "headline": "upl iberia, s.a.",
    "madeby": "cimoxanilo 4% + mancozeb 46,5% [wg] p/p"
  },
  {
    "id": 1558,
    "registrynumber": "ES-00239",
    "tradename": "evolya",
    "headline": "syngenta españa, s.a.",
    "madeby": "mesotriona 50% [wg] p/p"
  },
  {
    "id": 1559,
    "registrynumber": "ES-00240",
    "tradename": "spyrit plus wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "fosetil-al 50% + folpet 25% + dimetomorf 6% [wg] p/p"
  },
  {
    "id": 1560,
    "registrynumber": "ES-00241",
    "tradename": "ververol",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "fosetil-al 50% + folpet 25% + dimetomorf 6% [wg] p/p"
  },
  {
    "id": 1561,
    "registrynumber": "ES-00242",
    "tradename": "breaker max",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "piretrinas 4% [ec] p/v"
  },
  {
    "id": 1562,
    "registrynumber": "ES-00243",
    "tradename": "krisant ec",
    "headline": "sipcam iberia s.l.",
    "madeby": "piretrinas 4% [ec] p/v"
  },
  {
    "id": 1563,
    "registrynumber": "ES-00244",
    "tradename": "piretro natura",
    "headline": "cerrus s.a.s.",
    "madeby": "piretrinas 4% [ec] p/v"
  },
  {
    "id": 1564,
    "registrynumber": "ES-00245",
    "tradename": "circus",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "rimsulfuron 25% [wg] p/p"
  },
  {
    "id": 1565,
    "registrynumber": "ES-00246",
    "tradename": "rimsur",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "rimsulfuron 25% [wg] p/p"
  },
  {
    "id": 1566,
    "registrynumber": "ES-00247",
    "tradename": "pombal mz wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "fosetil-al 35% + mancozeb 35% [wg] p/p"
  },
  {
    "id": 1567,
    "registrynumber": "ES-00248",
    "tradename": "medeiro wg",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "fosetil-al 35% + mancozeb 35% [wg] p/p"
  },
  {
    "id": 1568,
    "registrynumber": "ES-00249",
    "tradename": "flipper",
    "headline": "alpha biopesticides limited",
    "madeby": "sales potásicas de ácidos grasos c14-c20 48% [ew] p/v"
  },
  {
    "id": 1569,
    "registrynumber": "ES-00250",
    "tradename": "reflect",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "isopirazam 12,5% [ec] p/v"
  },
  {
    "id": 1570,
    "registrynumber": "ES-00251",
    "tradename": "nealta",
    "headline": "basf española s.l.u.",
    "madeby": "ciflumetofen 20% [sc] p/v"
  },
  {
    "id": 1571,
    "registrynumber": "ES-00254",
    "tradename": "priori gold",
    "headline": "syngenta españa, s.a.",
    "madeby": "azoxistrobin 12,5% + difenoconazol 12,5% [sc] p/v"
  },
  {
    "id": 1572,
    "registrynumber": "ES-00255",
    "tradename": "xedathane 20",
    "headline": "xeda international s.a.",
    "madeby": "pirimetanil 19,2% + aceite de clavo 18,5% [ec] p/v"
  },
  {
    "id": 1573,
    "registrynumber": "ES-00256",
    "tradename": "xedathane-hn",
    "headline": "xeda international s.a.",
    "madeby": "pirimetanil 15,36% [hk] p/v"
  },
  {
    "id": 1574,
    "registrynumber": "ES-00257",
    "tradename": "compo herbistop herbicida concentrado",
    "headline": "compo iberia, s.l.",
    "madeby": "acido pelargonico 23,76% [ew] p/v"
  },
  {
    "id": 1575,
    "registrynumber": "ES-00258",
    "tradename": "cimoxate fp wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "cimoxanilo 8% + folpet 66% [wg] p/p"
  },
  {
    "id": 1576,
    "registrynumber": "ES-00259",
    "tradename": "veravit plus wg",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "cimoxanilo 8% + folpet 66% [wg] p/p"
  },
  {
    "id": 1577,
    "registrynumber": "ES-00260",
    "tradename": "flecha suprem",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "kresoxim-metil 25% + difenoconazol 12,5% [wg] p/p"
  },
  {
    "id": 1578,
    "registrynumber": "ES-00261",
    "tradename": "spotter wg",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "kresoxim-metil 25% + difenoconazol 12,5% [wg] p/p"
  },
  {
    "id": 1579,
    "registrynumber": "ES-00266",
    "tradename": "sivar",
    "headline": "lainco, s.a.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1580,
    "registrynumber": "ES-00267",
    "tradename": "placaje 25 sc",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1581,
    "registrynumber": "ES-00268",
    "tradename": "candil",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1582,
    "registrynumber": "ES-00269",
    "tradename": "legado",
    "headline": "industrias afrasa, s.a.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1583,
    "registrynumber": "ES-00272",
    "tradename": "azaka",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1584,
    "registrynumber": "ES-00273",
    "tradename": "roundup revolution",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 72% [sg] p/p"
  },
  {
    "id": 1585,
    "registrynumber": "ES-00275",
    "tradename": "onyx",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "piridato 60% [ec] p/v"
  },
  {
    "id": 1586,
    "registrynumber": "ES-00276",
    "tradename": "delta plus ew",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "deltametrin 1,5% [ew] p/v"
  },
  {
    "id": 1587,
    "registrynumber": "ES-00277",
    "tradename": "coraza 15 ew",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "deltametrin 1,5% [ew] p/v"
  },
  {
    "id": 1588,
    "registrynumber": "ES-00278",
    "tradename": "areva plus",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "dimetomorf 6% + hidroxido cuprico (exp. en cu) 14% [wg] p/p"
  },
  {
    "id": 1589,
    "registrynumber": "ES-00279",
    "tradename": "krum",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "prosulfocarb 80% [ec] p/v"
  },
  {
    "id": 1590,
    "registrynumber": "ES-00280",
    "tradename": "ossetia",
    "headline": "rotam agrochemical europe ltd.",
    "madeby": "diflufenican 50% [wg] p/p"
  },
  {
    "id": 1591,
    "registrynumber": "ES-00281",
    "tradename": "spasor max",
    "headline": "monsanto agricultura españa, s.l.u.",
    "madeby": "glifosato 72% [sg] p/p"
  },
  {
    "id": 1592,
    "registrynumber": "ES-00282",
    "tradename": "rapax as",
    "headline": "cbc (europe) s.r.l.",
    "madeby": "bacillus thuringiensis kurstaki (cepa eg 2348) 22,6% (24 x 10e6 ui/g) [sc] p/v"
  },
  {
    "id": 1593,
    "registrynumber": "ES-00283",
    "tradename": "t34 biocontrol",
    "headline": "biocontrol technologies, s.l.",
    "madeby": "trichoderma asperellum (cepa t34) 12% (1.0 x 10e12 ufc/kg) [wp] p/p"
  },
  {
    "id": 1594,
    "registrynumber": "ES-00284",
    "tradename": "granprotec",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1595,
    "registrynumber": "ES-00285",
    "tradename": "fysium",
    "headline": "janssen pmp a división of janssen pharmaceutica nv",
    "madeby": "1-metilciclopropeno 97,65% [ga] p/p"
  },
  {
    "id": 1596,
    "registrynumber": "ES-00286",
    "tradename": "citation",
    "headline": "upl iberia, s.a.",
    "madeby": "metribuzina 70% [wg] p/p"
  },
  {
    "id": 1597,
    "registrynumber": "ES-00287",
    "tradename": "radiant",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "spinetoram 12% [sc] p/v"
  },
  {
    "id": 1598,
    "registrynumber": "ES-00288",
    "tradename": "ampexio",
    "headline": "syngenta españa, s.a.",
    "madeby": "mandipropamida 25% + zoxamida 24% [wg] p/p"
  },
  {
    "id": 1599,
    "registrynumber": "ES-00289",
    "tradename": "laincoil",
    "headline": "lainco, s.a.",
    "madeby": "aceite de parafina (cas [8042-47-5]) 79% [ec] p/v"
  },
  {
    "id": 1600,
    "registrynumber": "ES-00290",
    "tradename": "estiuoil",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "aceite de parafina (cas [8042-47-5]) 79% [ec] p/v"
  },
  {
    "id": 1601,
    "registrynumber": "ES-00291",
    "tradename": "insectoil key",
    "headline": "industrial quimica key, s.a.",
    "madeby": "aceite de parafina (cas [8042-47-5]) 79% [ec] p/v"
  },
  {
    "id": 1602,
    "registrynumber": "ES-00293",
    "tradename": "partenope 800",
    "headline": "caf karyon s.l.",
    "madeby": "prosulfocarb 80% [ec] p/v"
  },
  {
    "id": 1603,
    "registrynumber": "ES-00294",
    "tradename": "nitroetil",
    "headline": "carburos metalicos, s.a.",
    "madeby": "etileno 4% [ga] p/p"
  },
  {
    "id": 1604,
    "registrynumber": "ES-00295",
    "tradename": "spyrit m wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "dimetomorf 7,5% + mancozeb 66,7% [wg] p/p"
  },
  {
    "id": 1605,
    "registrynumber": "ES-00296",
    "tradename": "asbelto mz",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "dimetomorf 7,5% + mancozeb 66,7% [wg] p/p"
  },
  {
    "id": 1606,
    "registrynumber": "ES-00297",
    "tradename": "delegate wg",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "spinetoram 25% [wg] p/p"
  },
  {
    "id": 1607,
    "registrynumber": "ES-00298",
    "tradename": "post-phite",
    "headline": "biovert sl",
    "madeby": "fosfonato potasico 25% (exp. como ácido fosforoso) [sl] p/v"
  },
  {
    "id": 1608,
    "registrynumber": "ES-00299",
    "tradename": "gf-2573",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "halauxifen-metil 0,75% [ec] p/v"
  },
  {
    "id": 1609,
    "registrynumber": "ES-00300",
    "tradename": "savial post",
    "headline": "lainco, s.a.",
    "madeby": "fosfonato potasico 25% (exp. como ácido fosforoso) [sl] p/v"
  },
  {
    "id": 1610,
    "registrynumber": "ES-00301",
    "tradename": "blakmur",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "fosfonato potasico 25% (exp. como ácido fosforoso) [sl] p/v"
  },
  {
    "id": 1611,
    "registrynumber": "ES-00302",
    "tradename": "cuneb",
    "headline": "lainco, s.a.",
    "madeby": "fosfonato potasico 51% (exp. como ácido fosforoso) [sl] p/v"
  },
  {
    "id": 1612,
    "registrynumber": "ES-00303",
    "tradename": "phytosarcan",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "fosfonato potasico 51% (exp. como ácido fosforoso) [sl] p/v"
  },
  {
    "id": 1613,
    "registrynumber": "ES-00304",
    "tradename": "fosika",
    "headline": "biovert sl",
    "madeby": "fosfonato potasico 51% (exp. como ácido fosforoso) [sl] p/v"
  },
  {
    "id": 1614,
    "registrynumber": "ES-00305",
    "tradename": "pirouette",
    "headline": "fine agrochemicals ltd.",
    "madeby": "paclobutrazol 0,4% [sc] p/v"
  },
  {
    "id": 1615,
    "registrynumber": "ES-00306",
    "tradename": "cal-6",
    "headline": "contse, s.a.",
    "madeby": "etileno 4% [ga] p/p"
  },
  {
    "id": 1616,
    "registrynumber": "ES-00307",
    "tradename": "littovir",
    "headline": "andermatt iberia, s.l.",
    "madeby": "spodoptera littoralis nucleopoliedrovirus (splinpv) (aislado bv-0005) 5 x 10e11 obs/l (sc)"
  },
  {
    "id": 1617,
    "registrynumber": "ES-00308",
    "tradename": "sinstar",
    "headline": "sinon eu gmbh",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1618,
    "registrynumber": "ES-00309",
    "tradename": "hercampo ultra",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "glifosato 45% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1619,
    "registrynumber": "ES-00310",
    "tradename": "balcony",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "glifosato 45% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1620,
    "registrynumber": "ES-00312",
    "tradename": "premier 50 wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "ciprodinil 50% [wg] p/p"
  },
  {
    "id": 1621,
    "registrynumber": "ES-00313",
    "tradename": "cardinal",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "ciprodinil 50% [wg] p/p"
  },
  {
    "id": 1622,
    "registrynumber": "ES-00314",
    "tradename": "spandis",
    "headline": "syngenta españa, s.a.",
    "madeby": "dicamba 40% + prosulfurón* 4% + nicosulfuron 10% [wg] p/p"
  },
  {
    "id": 1623,
    "registrynumber": "ES-00315",
    "tradename": "diniro",
    "headline": "syngenta españa, s.a.",
    "madeby": "dicamba 40% + prosulfurón* 4% + nicosulfuron 10% [wg] p/p"
  },
  {
    "id": 1624,
    "registrynumber": "ES-00316",
    "tradename": "pmv-01",
    "headline": "de ceuster meststoffen n.v.",
    "madeby": "virus del mosaico del pepino (cepa ch2, aislado 1906) (5 x 10 elevado a 5 viral/microlitos) [sc] p/v"
  },
  {
    "id": 1625,
    "registrynumber": "ES-00318",
    "tradename": "zoxis 250 sc",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1626,
    "registrynumber": "ES-00319",
    "tradename": "affirm opti",
    "headline": "syngenta españa, s.a.",
    "madeby": "emamectina benzoato 0,95% [wg] p/p"
  },
  {
    "id": 1627,
    "registrynumber": "ES-00320",
    "tradename": "u-46 combi fluid",
    "headline": "nufarm españa, s.a.",
    "madeby": "2,4-d acido 34,5% (sal amina) + mcpa 34,5% (sal amina) [sl] p/v"
  },
  {
    "id": 1628,
    "registrynumber": "ES-00321",
    "tradename": "sacron",
    "headline": "upl iberia, s.a.",
    "madeby": "cimoxanilo 45% [wg] p/p"
  },
  {
    "id": 1629,
    "registrynumber": "ES-00322",
    "tradename": "carial flex",
    "headline": "syngenta españa, s.a.",
    "madeby": "cimoxanilo 18% + mandipropamida 25% [wg] p/p"
  },
  {
    "id": 1630,
    "registrynumber": "ES-00325",
    "tradename": "ferramol antilimacos",
    "headline": "w.neudorff gmbh kg",
    "madeby": "fosfato ferrico 1% [rb] p/p"
  },
  {
    "id": 1631,
    "registrynumber": "ES-00326",
    "tradename": "delan pro",
    "headline": "basf española s.l.u.",
    "madeby": "ditianona 12,5% + fosfonato potasico 56,1% [sc] p/v"
  },
  {
    "id": 1632,
    "registrynumber": "ES-00327",
    "tradename": "sluxx hp",
    "headline": "w.neudorff gmbh kg",
    "madeby": "fosfato ferrico hidratado 2,97% [rb] p/p"
  },
  {
    "id": 1633,
    "registrynumber": "ES-00344",
    "tradename": "electis trio wdg",
    "headline": "gowan crop protection ltd.",
    "madeby": "zoxamida 3,6% + fosetil-al 35% + cimoxanilo 2,8% [wg] p/p"
  },
  {
    "id": 1634,
    "registrynumber": "ES-00346",
    "tradename": "amylo-x wg",
    "headline": "mitsui agriscience international s.a./n.v.",
    "madeby": "bacillus amyloliquefaciens (subesp. plantarum, cepa d747) 25% [wg] p/p"
  },
  {
    "id": 1635,
    "registrynumber": "ES-00347",
    "tradename": "leader plus",
    "headline": "kenogard, s.a.",
    "madeby": "sulfosulfuron 80% [wg] p/p"
  },
  {
    "id": 1636,
    "registrynumber": "ES-00348",
    "tradename": "omnera lqm",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "fluroxipir-meptil 13,5% (exp. como fluroxipir ácido) + metsulfuron-metil 0,51% + tifensulfuron-metil 3,03% [od] p/v"
  },
  {
    "id": 1637,
    "registrynumber": "ES-00349",
    "tradename": "vibrance duo",
    "headline": "syngenta españa, s.a.",
    "madeby": "sedaxane 2,5% + fludioxonil 2,5% [fs] p/v"
  },
  {
    "id": 1638,
    "registrynumber": "ES-00350",
    "tradename": "vibrance duo 50 fs",
    "headline": "syngenta españa, s.a.",
    "madeby": "sedaxane 2,5% + fludioxonil 2,5% [fs] p/v"
  },
  {
    "id": 1639,
    "registrynumber": "ES-00351",
    "tradename": "dicopur doble linz",
    "headline": "nufarm españa, s.a.",
    "madeby": "2,4-d acido 34,5% (sal amina) + mcpa 34,5% (sal amina) [sl] p/v"
  },
  {
    "id": 1640,
    "registrynumber": "ES-00352",
    "tradename": "apache ew",
    "headline": "industrias afrasa, s.a.",
    "madeby": "abamectina 1,8% [ew] p/v"
  },
  {
    "id": 1641,
    "registrynumber": "ES-00353",
    "tradename": "laotta ew",
    "headline": "lainco, s.a.",
    "madeby": "abamectina 1,8% [ew] p/v"
  },
  {
    "id": 1642,
    "registrynumber": "ES-00354",
    "tradename": "bermectine gold",
    "headline": "probelte s.a.u.",
    "madeby": "abamectina 1,8% [ew] p/v"
  },
  {
    "id": 1643,
    "registrynumber": "ES-00358",
    "tradename": "next",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "trinexapac-etil 25% [ec] p/v"
  },
  {
    "id": 1644,
    "registrynumber": "ES-00359",
    "tradename": "lentagran",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "piridato 45% [wp] p/p"
  },
  {
    "id": 1645,
    "registrynumber": "ES-00361",
    "tradename": "zypar",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "florasulam 0,5% + halauxifen-metil 0,6% [od] p/v"
  },
  {
    "id": 1646,
    "registrynumber": "ES-00362",
    "tradename": "redigo m",
    "headline": "bayer cropscience, s.l.",
    "madeby": "metalaxil 2% + protioconazol 10% [fs] p/v"
  },
  {
    "id": 1647,
    "registrynumber": "ES-00363",
    "tradename": "pixxaro",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "halauxifen-metil 1,2% + fluroxipir 28% [ec] p/v"
  },
  {
    "id": 1648,
    "registrynumber": "ES-00365",
    "tradename": "spyrit 50 sc",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "dimetomorf 50% [sc] p/v"
  },
  {
    "id": 1649,
    "registrynumber": "ES-00366",
    "tradename": "asbelto max",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "dimetomorf 50% [sc] p/v"
  },
  {
    "id": 1650,
    "registrynumber": "ES-00367",
    "tradename": "u-46 d complet",
    "headline": "nufarm españa, s.a.",
    "madeby": "2,4-d acido 60% (sal amina) [sl] p/v"
  },
  {
    "id": 1651,
    "registrynumber": "ES-00368",
    "tradename": "battle delta",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "flufenacet 40% + diflufenican 20% [sc] p/v"
  },
  {
    "id": 1652,
    "registrynumber": "ES-00369",
    "tradename": "fasthrin 15 wg",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "alfa cipermetrina 15% [wg] p/p"
  },
  {
    "id": 1653,
    "registrynumber": "ES-00370",
    "tradename": "spyrit hidro sc",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "dimetomorf 6% + hidroxido cuprico 20% (exp. en cu) [sc] p/v"
  },
  {
    "id": 1654,
    "registrynumber": "ES-00371",
    "tradename": "traxos one",
    "headline": "syngenta españa, s.a.",
    "madeby": "clodinafop-propargil 3% + florasulam 0,75% + pinoxaden 3% [ec] p/v"
  },
  {
    "id": 1655,
    "registrynumber": "ES-00373",
    "tradename": "asbelto green",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "dimetomorf 6% + hidroxido cuprico 20% (exp. en cu) [sc] p/v"
  },
  {
    "id": 1656,
    "registrynumber": "ES-00375",
    "tradename": "tervigo",
    "headline": "syngenta españa, s.a.",
    "madeby": "abamectina 2% [sc] p/v"
  },
  {
    "id": 1657,
    "registrynumber": "ES-00377",
    "tradename": "maciste",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "lambda cihalotrin 0,4% [gr] p/p"
  },
  {
    "id": 1658,
    "registrynumber": "ES-00378",
    "tradename": "ardent pro",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "acrinatrin 0,9% + abamectina 0,5% [ew] p/v"
  },
  {
    "id": 1659,
    "registrynumber": "ES-00379",
    "tradename": "primma dos",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "2,4-d acido 60% (2-etil-hexil ester) [ec] p/v"
  },
  {
    "id": 1660,
    "registrynumber": "ES-00381",
    "tradename": "sercadis",
    "headline": "basf española s.l.u.",
    "madeby": "fluxapyroxad 30% [sc] p/v"
  },
  {
    "id": 1661,
    "registrynumber": "ES-00382",
    "tradename": "cymbal flow",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "cimoxanilo 22,5% [sc] p/v"
  },
  {
    "id": 1662,
    "registrynumber": "ES-00383",
    "tradename": "drum flow",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "cimoxanilo 22,5% [sc] p/v"
  },
  {
    "id": 1663,
    "registrynumber": "ES-00384",
    "tradename": "elatus",
    "headline": "syngenta españa, s.a.",
    "madeby": "protioconazol 15% + benzovindiflupyr 7,5% [ec] p/v"
  },
  {
    "id": 1664,
    "registrynumber": "ES-00385",
    "tradename": "entomela 50 sl",
    "headline": "phytophyl n.g. stavrakis",
    "madeby": "urea 17% + proteínas hidrolizadas 50% [sl] p/v"
  },
  {
    "id": 1665,
    "registrynumber": "ES-00386",
    "tradename": "entomela 75 sl",
    "headline": "phytophyl n.g. stavrakis",
    "madeby": "urea 25% + proteínas hidrolizadas 75% [sl] p/v"
  },
  {
    "id": 1666,
    "registrynumber": "ES-00387",
    "tradename": "conviso one",
    "headline": "bayer cropscience, s.l.",
    "madeby": "foramsulfuron 5% + tiencarbazona-metil 3% [od] p/v"
  },
  {
    "id": 1667,
    "registrynumber": "ES-00388",
    "tradename": "dicash",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "dicamba 48% (c. sal dimetilamina) [sl] p/v"
  },
  {
    "id": 1668,
    "registrynumber": "ES-00390",
    "tradename": "syllit max",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "dodina 54,4% [sc] p/v"
  },
  {
    "id": 1669,
    "registrynumber": "ES-00394",
    "tradename": "biplay 33 sx",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "tribenuron-metil 22,2% + metsulfuron metil 11,1% [sg] p/p"
  },
  {
    "id": 1670,
    "registrynumber": "ES-00395",
    "tradename": "ally 20 sx",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "metsulfuron metil 20% [sg] p/p"
  },
  {
    "id": 1671,
    "registrynumber": "ES-00396",
    "tradename": "deft",
    "headline": "rotam agrochemical europe limited",
    "madeby": "metsulfuron metil 20% [wg] p/p"
  },
  {
    "id": 1672,
    "registrynumber": "ES-00397",
    "tradename": "racing delta",
    "headline": "nufarm españa, s.a.",
    "madeby": "diflufenican 60% + metsulfuron metil 6% [wg] p/p"
  },
  {
    "id": 1673,
    "registrynumber": "ES-00398",
    "tradename": "racing",
    "headline": "nufarm españa, s.a.",
    "madeby": "metsulfuron metil 20% [wg] p/p"
  },
  {
    "id": 1674,
    "registrynumber": "ES-00399",
    "tradename": "tavas",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "diflufenican 6,25% + metribuzin 25% [sc] p/v"
  },
  {
    "id": 1675,
    "registrynumber": "ES-00401",
    "tradename": "register 25 wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "flazasulfuron 25% [wg] p/p"
  },
  {
    "id": 1676,
    "registrynumber": "ES-00402",
    "tradename": "bioact prime",
    "headline": "bayer cropscience, s.l.",
    "madeby": "paecilomyces lilacinus (cepa 251) 21,6% [dc] p/v"
  },
  {
    "id": 1677,
    "registrynumber": "ES-00403",
    "tradename": "capreno sc",
    "headline": "bayer cropscience, s.l.",
    "madeby": "tembotriona 34,5% + tiencarbazona-metil 6,8% [sc] p/v"
  },
  {
    "id": 1678,
    "registrynumber": "ES-00406",
    "tradename": "copper key flow",
    "headline": "industrial quimica key, s.a.",
    "madeby": "oxicloruro de cobre (exp. en cu) 52% [sc] p/v"
  },
  {
    "id": 1679,
    "registrynumber": "ES-00408",
    "tradename": "bayasant",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "flazasulfuron 25% [wg] p/p"
  },
  {
    "id": 1680,
    "registrynumber": "ES-00410",
    "tradename": "clonex",
    "headline": "growth technology ltd.",
    "madeby": "ácido indolbutírico 0,33% [al] p/v"
  },
  {
    "id": 1681,
    "registrynumber": "ES-00411",
    "tradename": "compo herbistop herbicida",
    "headline": "compo iberia, s.l.",
    "madeby": "acido pelargonico 3,099% [al] p/v"
  },
  {
    "id": 1682,
    "registrynumber": "ES-00412",
    "tradename": "priam top",
    "headline": "helm ag",
    "madeby": "tebuconazol 25% [ew] p/v"
  },
  {
    "id": 1683,
    "registrynumber": "ES-00413",
    "tradename": "temporis",
    "headline": "rotam agrochemical europe ltd.",
    "madeby": "deltametrin 1,5% [ew] p/v"
  },
  {
    "id": 1684,
    "registrynumber": "ES-00414",
    "tradename": "fasthrin 10 ec",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "alfa cipermetrina 10% [ec] p/v"
  },
  {
    "id": 1685,
    "registrynumber": "ES-00417",
    "tradename": "kideka",
    "headline": "nufarm españa, s.a.",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1686,
    "registrynumber": "ES-00433",
    "tradename": "ratron gw",
    "headline": "frunol delicia gmbh",
    "madeby": "fosfuro de zinc 2,5% [rb] p/p"
  },
  {
    "id": 1687,
    "registrynumber": "ES-00436",
    "tradename": "boudha",
    "headline": "rotam agrochemical europe limited",
    "madeby": "metsulfuron metil 25% + tribenuron-metil 25% [wg] p/p"
  },
  {
    "id": 1688,
    "registrynumber": "ES-00442",
    "tradename": "fresco",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "metobromuron 40% [sc] p/v"
  },
  {
    "id": 1689,
    "registrynumber": "ES-00443",
    "tradename": "pol-sulphur 800 sc",
    "headline": "ciech sarzyna spolka akcyjna",
    "madeby": "azufre 80% [sc] p/v"
  },
  {
    "id": 1690,
    "registrynumber": "ES-00445",
    "tradename": "vitisan",
    "headline": "andermatt iberia, s.l.",
    "madeby": "hidrogenocarbonato de potasio 99,99% [sp] p/p"
  },
  {
    "id": 1691,
    "registrynumber": "ES-00447",
    "tradename": "isomexx",
    "headline": "nufarm españa, s.a.",
    "madeby": "metsulfuron metil 20% [wg] p/p"
  },
  {
    "id": 1692,
    "registrynumber": "ES-00448",
    "tradename": "alliance wg",
    "headline": "nufarm españa, s.a.",
    "madeby": "diflufenican 60% + metsulfuron metil 6% [wg] p/p"
  },
  {
    "id": 1693,
    "registrynumber": "ES-00452",
    "tradename": "flocter",
    "headline": "bayer cropscience, s.l.",
    "madeby": "bacillus firmus i-1582 5% [wp] p/p"
  },
  {
    "id": 1694,
    "registrynumber": "ES-00453",
    "tradename": "fruit auxin 30 sl",
    "headline": "l. gobbi s.r.l.",
    "madeby": "1-naftilacético 3,02% [sl] p/v"
  },
  {
    "id": 1695,
    "registrynumber": "ES-00454",
    "tradename": "amidir",
    "headline": "l. gobbi s.r.l.",
    "madeby": "1-naftilacetamida 2,8% [wp] p/p"
  },
  {
    "id": 1696,
    "registrynumber": "ES-00455",
    "tradename": "glosset 600 sc",
    "headline": "globachem n.v.",
    "madeby": "flufenacet 60% [sc] p/v"
  },
  {
    "id": 1697,
    "registrynumber": "ES-00457",
    "tradename": "elatus plus",
    "headline": "syngenta españa, s.a.",
    "madeby": "benzovindiflupyr 10% [ec] p/v"
  },
  {
    "id": 1698,
    "registrynumber": "ES-00458",
    "tradename": "priaxor ec",
    "headline": "basf española s.l.u.",
    "madeby": "fluxapyroxad 7,5% + piraclostrobin 15% [ec] p/v"
  },
  {
    "id": 1699,
    "registrynumber": "ES-00459",
    "tradename": "proradix",
    "headline": "sp sourcon padena gmbh",
    "madeby": "pseudomonas sp. (cepa dsmz 13134) [wp] p/p"
  },
  {
    "id": 1700,
    "registrynumber": "ES-00460",
    "tradename": "premazor turbo",
    "headline": "globachem n.v.",
    "madeby": "diflufenican 4% + glifosato 25% (sal isopropilamina) [sc] p/v"
  },
  {
    "id": 1701,
    "registrynumber": "ES-00461",
    "tradename": "closer",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "sulfoxaflor 12% [sc] p/v"
  },
  {
    "id": 1702,
    "registrynumber": "ES-00462",
    "tradename": "vibrance",
    "headline": "syngenta españa, s.a.",
    "madeby": "sedaxane 50% [fs] p/v"
  },
  {
    "id": 1703,
    "registrynumber": "ES-00463",
    "tradename": "vibrance trio",
    "headline": "syngenta españa, s.a.",
    "madeby": "sedaxane 2,5% + fludioxonil 2,5% + tebuconazol 1% [fs] p/v"
  },
  {
    "id": 1704,
    "registrynumber": "ES-00464",
    "tradename": "vibrance trio 60 fs",
    "headline": "syngenta españa, s.a.",
    "madeby": "sedaxane 2,5% + fludioxonil 2,5% + tebuconazol 1% [fs] p/v"
  },
  {
    "id": 1705,
    "registrynumber": "ES-00466",
    "tradename": "aureo shield",
    "headline": "bio-ferm gmbh",
    "madeby": "aureobasidium pullulans (cepa dsm 14940) 50% (1x10e10 cfu/g) + aureobasidium pullulans (cepa dsm 14941) 50% (1x10e10 cfu/g) [wg] p/p"
  },
  {
    "id": 1706,
    "registrynumber": "ES-00468",
    "tradename": "vintec",
    "headline": "bipa n.v.",
    "madeby": "trichoderma atroviride (cepa sc1) 1x10e10 ufc/g [wg] p/p"
  },
  {
    "id": 1707,
    "registrynumber": "ES-00469",
    "tradename": "isko",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "florasulam 4% + isoxaben 61% [wg] p/p"
  },
  {
    "id": 1708,
    "registrynumber": "ES-00470",
    "tradename": "katanga triple",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "fosetil-al 50% + folpet 25% + cimoxanilo 4% [wp] p/p"
  },
  {
    "id": 1709,
    "registrynumber": "ES-00471",
    "tradename": "cuña duo",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "pendimetalina 25% + terbutilazina 12,5% [zc] p/v"
  },
  {
    "id": 1710,
    "registrynumber": "ES-00472",
    "tradename": "estaca wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "diflufenican 40% + iodosulfuron-metil-sodio 5% + florasulam 2% [wg] p/p"
  },
  {
    "id": 1711,
    "registrynumber": "ES-00473",
    "tradename": "ganater",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "diflufenican 40% + iodosulfuron-metil-sodio 5% + florasulam 2% [wg] p/p"
  },
  {
    "id": 1712,
    "registrynumber": "ES-00474",
    "tradename": "nikita",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "dicamba 31,25% + mesotriona 15% + nicosulfuron 10% [wg] p/p"
  },
  {
    "id": 1713,
    "registrynumber": "ES-00475",
    "tradename": "starship",
    "headline": "nufarm españa, s.a.",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1714,
    "registrynumber": "ES-00477",
    "tradename": "chamane 25 sc",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1715,
    "registrynumber": "ES-00478",
    "tradename": "wish top",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "quizalofop-p-etil 12% [ec] p/v"
  },
  {
    "id": 1716,
    "registrynumber": "ES-00479",
    "tradename": "imidan wg",
    "headline": "gowan crop protection ltd.",
    "madeby": "fosmet 50% [wg] p/p"
  },
  {
    "id": 1717,
    "registrynumber": "ES-00481",
    "tradename": "filder 69 wg",
    "headline": "arysta lifescience benelux sprl.",
    "madeby": "dimetomorf 9% + mancozeb 60% [wg] p/p"
  },
  {
    "id": 1718,
    "registrynumber": "ES-00482",
    "tradename": "codimur 38 flo",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "oxicloruro de cobre 38% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1719,
    "registrynumber": "ES-00483",
    "tradename": "kenja",
    "headline": "isk biosciences europe n.v.",
    "madeby": "isofetamid 40% [sc] p/v"
  },
  {
    "id": 1720,
    "registrynumber": "ES-00484",
    "tradename": "brontes 25",
    "headline": "caf karyon s.l.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1721,
    "registrynumber": "ES-00485",
    "tradename": "grafiti",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1722,
    "registrynumber": "ES-00486",
    "tradename": "infiss",
    "headline": "lainco, s.a.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1723,
    "registrynumber": "ES-00487",
    "tradename": "grial",
    "headline": "industrias afrasa, s.a.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1724,
    "registrynumber": "ES-00489",
    "tradename": "acoidal 800 sc",
    "headline": "quimetal internacional registros e inversiones s.l.",
    "madeby": "azufre 80% [sc] p/v"
  },
  {
    "id": 1725,
    "registrynumber": "ES-00490",
    "tradename": "pendinova",
    "headline": "finchimica spa",
    "madeby": "pendimetalina 33% [ec] p/v"
  },
  {
    "id": 1726,
    "registrynumber": "ES-00491",
    "tradename": "elan",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "orizalina 48% + penoxsulam 0,14% [sc] p/v"
  },
  {
    "id": 1727,
    "registrynumber": "ES-00492",
    "tradename": "camix 560 se",
    "headline": "syngenta españa, s.a.",
    "madeby": "s-metolacloro 50% + mesotriona 6% [se] p/v"
  },
  {
    "id": 1728,
    "registrynumber": "ES-00493",
    "tradename": "bariloche",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "clopiralida 10% [sl] p/v"
  },
  {
    "id": 1729,
    "registrynumber": "ES-00497",
    "tradename": "monolith",
    "headline": "bayer cropscience, s.l.",
    "madeby": "mesosulfuron-metil 4,5% + propoxicarbazona-sodio 6,75% [wg] p/p"
  },
  {
    "id": 1730,
    "registrynumber": "ES-00499",
    "tradename": "ordago caps",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "pendimetalina 40% [cs] p/v"
  },
  {
    "id": 1731,
    "registrynumber": "ES-00500",
    "tradename": "columbo 0,8 mg",
    "headline": "sbm développement sas (ecully)",
    "madeby": "cipermetrina 0,8% [mg] p/p"
  },
  {
    "id": 1732,
    "registrynumber": "ES-00501",
    "tradename": "clipless",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "trinexapac-etil 12% [me] p/v"
  },
  {
    "id": 1733,
    "registrynumber": "ES-00502",
    "tradename": "polyversum",
    "headline": "agrichem, s.a.",
    "madeby": "pythium oligandrum (cepa m1) 17,5% [wp] p/p"
  },
  {
    "id": 1734,
    "registrynumber": "ES-00503",
    "tradename": "sivanto prime",
    "headline": "bayer cropscience, s.l.",
    "madeby": "flupiradifurona 20% [sl] p/v"
  },
  {
    "id": 1735,
    "registrynumber": "ES-00504",
    "tradename": "optix disperss",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 1736,
    "registrynumber": "ES-00506",
    "tradename": "revive ii",
    "headline": "syngenta españa, s.a.",
    "madeby": "benzoato de emamectina 9,5% [al] p/v"
  },
  {
    "id": 1737,
    "registrynumber": "ES-00507",
    "tradename": "compo bio insecticida stop",
    "headline": "compo iberia, s.l.",
    "madeby": "aceite de colza 1,53% [al] p/v"
  },
  {
    "id": 1738,
    "registrynumber": "ES-00508",
    "tradename": "compo bio insecticida stop concentrado",
    "headline": "compo iberia, s.l.",
    "madeby": "aceite de colza 848,24 g/l [ec]"
  },
  {
    "id": 1739,
    "registrynumber": "ES-00514",
    "tradename": "simba",
    "headline": "helm ag",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1740,
    "registrynumber": "ES-00515",
    "tradename": "falstar",
    "headline": "helm ag",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1741,
    "registrynumber": "ES-00519",
    "tradename": "romeo",
    "headline": "agrauxine s.a. (beaucouzé)",
    "madeby": "cerevisane 94,1% [wp] p/p"
  },
  {
    "id": 1742,
    "registrynumber": "ES-00521",
    "tradename": "spintor gr",
    "headline": "sbm développement sas (ecully)",
    "madeby": "spinosad 0,4% [gr] p/p"
  },
  {
    "id": 1743,
    "registrynumber": "ES-00522",
    "tradename": "checkmate puffer ptb",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "acetato de (e)-5-decen-1-ilo 17,48% + 5-decen-1-ol 3,63% [ae] p/p"
  },
  {
    "id": 1744,
    "registrynumber": "ES-00524",
    "tradename": "enervin sc",
    "headline": "basf española s.l.u.",
    "madeby": "ametoctradin 20% [sc] p/v"
  },
  {
    "id": 1745,
    "registrynumber": "ES-00525",
    "tradename": "soleto",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "metobromuron 50% [sc] p/v"
  },
  {
    "id": 1746,
    "registrynumber": "ES-00526",
    "tradename": "matecor express",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "metribuzina 70% [wg] p/p"
  },
  {
    "id": 1747,
    "registrynumber": "ES-00527",
    "tradename": "agrolan 70 wg",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "metribuzina 70% [wg] p/p"
  },
  {
    "id": 1748,
    "registrynumber": "ES-00528",
    "tradename": "button",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1749,
    "registrynumber": "ES-00529",
    "tradename": "zeatryn",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1750,
    "registrynumber": "ES-00530",
    "tradename": "temsa sc",
    "headline": "globachem n.v.",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1751,
    "registrynumber": "ES-00531",
    "tradename": "tessior",
    "headline": "basf española s.l.u.",
    "madeby": "piraclostrobin 0,5% + boscalida 1% [sd] p/v"
  },
  {
    "id": 1752,
    "registrynumber": "ES-00532",
    "tradename": "elatus era",
    "headline": "syngenta españa, s.a.",
    "madeby": "protioconazol 15% + benzovindiflupyr 7,5% [ec] p/v"
  },
  {
    "id": 1753,
    "registrynumber": "ES-00533",
    "tradename": "oblix mt",
    "headline": "upl iberia, s.a.",
    "madeby": "etofumesato 15% + metamitrona 35% [sc] p/v"
  },
  {
    "id": 1754,
    "registrynumber": "ES-00534",
    "tradename": "ethofol 500",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "etofumesato 50% [sc] p/v"
  },
  {
    "id": 1755,
    "registrynumber": "ES-00535",
    "tradename": "tramat 50 sc",
    "headline": "bayer cropscience, s.l.",
    "madeby": "etofumesato 50% [sc] p/v"
  },
  {
    "id": 1756,
    "registrynumber": "ES-00537",
    "tradename": "kemitram 50 la",
    "headline": "bayer cropscience, s.l.",
    "madeby": "etofumesato 50% [sc] p/v"
  },
  {
    "id": 1757,
    "registrynumber": "ES-00538",
    "tradename": "tender",
    "headline": "bayer cropscience, s.l.",
    "madeby": "etofumesato 50% [sc] p/v"
  },
  {
    "id": 1758,
    "registrynumber": "ES-00541",
    "tradename": "kilate",
    "headline": "lainco, s.a.",
    "madeby": "fosetil-al 80% [wp] p/p"
  },
  {
    "id": 1759,
    "registrynumber": "ES-00542",
    "tradename": "paclot new",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "paclobutrazol 25% [sc] p/v"
  },
  {
    "id": 1760,
    "registrynumber": "ES-00543",
    "tradename": "cordial extra",
    "headline": "copyr s.p.a.",
    "madeby": "piretrinas 4,65% (como extracto de pelitre) [ec] p/v"
  },
  {
    "id": 1761,
    "registrynumber": "ES-00544",
    "tradename": "lobetec",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "e/z-7,9-dodecadienil acetato 0,210 g/difusor [vp] p/p"
  },
  {
    "id": 1762,
    "registrynumber": "ES-00547",
    "tradename": "menno florades",
    "headline": "menno chemie-vertrieb gmbh",
    "madeby": "ácido benzoico 9% [sl] p/v"
  },
  {
    "id": 1763,
    "registrynumber": "ES-00548",
    "tradename": "deft premium",
    "headline": "rotam agrochemical europe limited",
    "madeby": "metsulfuron metil 20% [sg] p/p"
  },
  {
    "id": 1764,
    "registrynumber": "ES-00549",
    "tradename": "embrelia",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "isopirazam 10% + difenoconazol 4% [sc] p/v"
  },
  {
    "id": 1765,
    "registrynumber": "ES-00553",
    "tradename": "century sl",
    "headline": "basf española s.l.u.",
    "madeby": "fosfonato potasico 50,4 % (exp. como ácido fosforoso) [sl] p/v"
  },
  {
    "id": 1766,
    "registrynumber": "ES-00554",
    "tradename": "dagonis",
    "headline": "basf española s.l.u.",
    "madeby": "fluxapyroxad 7,5% + difenoconazol 5% [sc] p/v"
  },
  {
    "id": 1767,
    "registrynumber": "ES-00555",
    "tradename": "python",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "florasulam 0,5% + aminopiralid (sal potásica) 1% + 2,4-d (ester 2-etilhexil) 18% [se] p/v"
  },
  {
    "id": 1768,
    "registrynumber": "ES-00557",
    "tradename": "instrata elite",
    "headline": "syngenta españa, s.a.",
    "madeby": "fludioxonil 8,03% + difenoconazol 8,03% [sc] p/v"
  },
  {
    "id": 1769,
    "registrynumber": "ES-00558",
    "tradename": "serifel",
    "headline": "basf española s.l.u.",
    "madeby": "bacillus amyloliquefaciens (cepa mbi 600) 11% [wp] p/p"
  },
  {
    "id": 1770,
    "registrynumber": "ES-00561",
    "tradename": "vivendi 200",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "clopiralida 20% [sl] p/v"
  },
  {
    "id": 1771,
    "registrynumber": "ES-00562",
    "tradename": "zorvec zelavin",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "oxatiapiprolin 10% [od] p/v"
  },
  {
    "id": 1772,
    "registrynumber": "ES-00563",
    "tradename": "zorvec enicade",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "oxatiapiprolin 10% [od] p/v"
  },
  {
    "id": 1773,
    "registrynumber": "ES-00564",
    "tradename": "goltix uno",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "etofumesato 15% + metamitrona 35% [sc] p/v"
  },
  {
    "id": 1774,
    "registrynumber": "ES-00571",
    "tradename": "delmur",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1775,
    "registrynumber": "ES-00572",
    "tradename": "rafaga",
    "headline": "agrolac, s.a.",
    "madeby": "deltametrin 2,5% [ec] p/v"
  },
  {
    "id": 1776,
    "registrynumber": "ES-00573",
    "tradename": "rak 5+6",
    "headline": "basf española s.l.u.",
    "madeby": "acetato de (e/z)-8-dodecen-1-ilo 96,2 g/kg + 51 g/kg de la mezcla acetato de (e)-5-decen-1-ilo y (e)-5-decen-1-ol + acetato de n-hexadecilo 35,6 g/kg (1050 mg de s.a./difusor)"
  },
  {
    "id": 1777,
    "registrynumber": "ES-00574",
    "tradename": "ferrex",
    "headline": "frunol delicia gmbh",
    "madeby": "fosfato ferrico 2,5% [gb] p/p"
  },
  {
    "id": 1778,
    "registrynumber": "ES-00575",
    "tradename": "vertigo",
    "headline": "sipcam oxon s.p.a.",
    "madeby": "diflufenican 50% [sc] p/v"
  },
  {
    "id": 1779,
    "registrynumber": "ES-00578",
    "tradename": "minsk",
    "headline": "rotam agrochemical europe ltd.",
    "madeby": "flazasulfuron 25% [wg] p/p"
  },
  {
    "id": 1780,
    "registrynumber": "ES-00580",
    "tradename": "ascernity",
    "headline": "syngenta españa, s.a.",
    "madeby": "difenoconazol 7,89% + benzovindiflupyr 2,36% [sl] p/v"
  },
  {
    "id": 1781,
    "registrynumber": "ES-00581",
    "tradename": "ostrinil",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "beauveria bassiana (cepa 147) 5 x 10e8 ufc/g [mg] p/p"
  },
  {
    "id": 1782,
    "registrynumber": "ES-00582",
    "tradename": "serenisim",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "beauveria bassiana (cepa npp111b005) 5x10e8 ufc/g [mg] p/p"
  },
  {
    "id": 1783,
    "registrynumber": "ES-00583",
    "tradename": "sinopia",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "metobromuron 40% + clomazona 2,4% [zc] p/v"
  },
  {
    "id": 1784,
    "registrynumber": "ES-00585",
    "tradename": "fragma max",
    "headline": "nufarm españa, s.a.",
    "madeby": "tribenuron-metil 60% + florasulam 20% [wg] p/p"
  },
  {
    "id": 1785,
    "registrynumber": "ES-00586",
    "tradename": "beyond evo",
    "headline": "basf española s.l.u.",
    "madeby": "imazamox 3,33% [sl] p/v"
  },
  {
    "id": 1786,
    "registrynumber": "ES-00589",
    "tradename": "rinidi wg",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "dicamba 55% (sal sódica) + nicosulfuron 9,2% + rimsulfuron 2,3% [wg] p/p"
  },
  {
    "id": 1787,
    "registrynumber": "ES-00591",
    "tradename": "nordox energy",
    "headline": "comercial química massó, s.a.",
    "madeby": "óxido cuproso 45% (exp. en cu) [wg] p/p"
  },
  {
    "id": 1788,
    "registrynumber": "ES-00594",
    "tradename": "teycer original i3t5",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "imazalil 0,3% + tiabendazol 0,5% [ew] p/v"
  },
  {
    "id": 1789,
    "registrynumber": "ES-00596",
    "tradename": "mistral plus",
    "headline": "syngenta españa, s.a.",
    "madeby": "nicosulfuron 5% + dicamba 22% (c. sal sódica) [od] p/v"
  },
  {
    "id": 1790,
    "registrynumber": "ES-00597",
    "tradename": "electis cobre wg",
    "headline": "gowan crop protection ltd.",
    "madeby": "zoxamida 5,88% + oxicloruro de cobre 25% (exp. en cu) [wg] p/p"
  },
  {
    "id": 1791,
    "registrynumber": "ES-00598",
    "tradename": "ecothrin 5sc",
    "headline": "vioryl s.a.",
    "madeby": "piretrinas 5% [sc] p/v"
  },
  {
    "id": 1792,
    "registrynumber": "ES-00599",
    "tradename": "hileo nt",
    "headline": "caf karyon s.l.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1793,
    "registrynumber": "ES-00600",
    "tradename": "teycer originals 10 i2t5",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "imazalil 0,2% + tiabendazol 0,5% [ew] p/v"
  },
  {
    "id": 1794,
    "registrynumber": "ES-00602",
    "tradename": "actiseal t 60",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "tiabendazol 60% [sc] p/v"
  },
  {
    "id": 1795,
    "registrynumber": "ES-00603",
    "tradename": "acaridoil 13 sl",
    "headline": "vioryl s.a.",
    "madeby": "sales potásicas de ácidos grasos vegetales 13,04% [sl] p/v"
  },
  {
    "id": 1796,
    "registrynumber": "ES-00604",
    "tradename": "brillaqua-st",
    "headline": "fomesa fruitech s.l.",
    "madeby": "tiabendazol 0,5[ew] p/v"
  },
  {
    "id": 1797,
    "registrynumber": "ES-00605",
    "tradename": "fruitgard-70",
    "headline": "fomesa fruitech s.l.",
    "madeby": "imazalil 10% + tiabendazol 14% [sc] p/v"
  },
  {
    "id": 1798,
    "registrynumber": "ES-00607",
    "tradename": "citrosol a tbz 5",
    "headline": "productos citrosol s.a.",
    "madeby": "tiabendazol 0,5[ew] p/v"
  },
  {
    "id": 1799,
    "registrynumber": "ES-00608",
    "tradename": "cupraver 52",
    "headline": "nutesca s.l. (jaén)",
    "madeby": "oxicloruro de cobre 52% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1800,
    "registrynumber": "ES-00609",
    "tradename": "citrosol a imad 2 tbz 5",
    "headline": "productos citrosol s.a.",
    "madeby": "imazalil 0,2% + tiabendazol 0,5% [ew] p/v"
  },
  {
    "id": 1801,
    "registrynumber": "ES-00611",
    "tradename": "actiseal it",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "imazalil 7,5% (sulfato) + tiabendazol 22,5% [sc] p/v"
  },
  {
    "id": 1802,
    "registrynumber": "ES-00614",
    "tradename": "teycer original i2t5",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "imazalil 0,2% + tiabendazol 0,5% [ew] p/v"
  },
  {
    "id": 1803,
    "registrynumber": "ES-00615",
    "tradename": "waterwax ttt/2i",
    "headline": "fomesa fruitech s.l.",
    "madeby": "imazalil 0,2% + tiabendazol 0,5% [ew] p/v"
  },
  {
    "id": 1804,
    "registrynumber": "ES-00616",
    "tradename": "waterwax ttt",
    "headline": "fomesa fruitech s.l.",
    "madeby": "tiabendazol 0,5[ew] p/v"
  },
  {
    "id": 1805,
    "registrynumber": "ES-00617",
    "tradename": "britex ti",
    "headline": "cia. iberica brogdex, s. a.",
    "madeby": "imazalil 0,2% + tiabendazol 0,5% [ew] p/v"
  },
  {
    "id": 1806,
    "registrynumber": "ES-00618",
    "tradename": "citrashine-n-t-imz",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "imazalil 0,2% + tiabendazol 0,5% [ew] p/v"
  },
  {
    "id": 1807,
    "registrynumber": "ES-00619",
    "tradename": "citrashine conserv. t-imz",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "imazalil 0,2 + tiabendazol 0,5[ew] p/v"
  },
  {
    "id": 1808,
    "registrynumber": "ES-00620",
    "tradename": "citrashine n-t-50",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "tiabendazol 0,5[ew] p/v"
  },
  {
    "id": 1809,
    "registrynumber": "ES-00624",
    "tradename": "conetrap ceratitis",
    "headline": "probodelt s.l.",
    "madeby": "lambda cihalotrin (0,0075 g de s.a./trampa) [rb] p/p"
  },
  {
    "id": 1810,
    "registrynumber": "ES-00625",
    "tradename": "conetrap bactrocera",
    "headline": "probodelt s.l.",
    "madeby": "lambda cihalotrin (0,0075 g de s.a./trampa) [rb] p/p"
  },
  {
    "id": 1811,
    "registrynumber": "ES-00626",
    "tradename": "actiseal al",
    "headline": "agrofresh fruit protection, s.a.",
    "madeby": "fosetil-al 40% + tiabendazol 12,5% [sc] p/v"
  },
  {
    "id": 1812,
    "registrynumber": "ES-00627",
    "tradename": "vibrance star",
    "headline": "syngenta españa, s.a.",
    "madeby": "sedaxane 2,5% + fludioxonil 2,5% + triticonazol 2% [fs] p/v"
  },
  {
    "id": 1813,
    "registrynumber": "ES-00628",
    "tradename": "callisto 100 sc",
    "headline": "syngenta españa, s.a.",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1814,
    "registrynumber": "ES-00629",
    "tradename": "carnadine",
    "headline": "nufarm españa, s.a.",
    "madeby": "acetamiprid 20% [sl] p/v"
  },
  {
    "id": 1815,
    "registrynumber": "ES-00633",
    "tradename": "chryzotop verde 0,25%",
    "headline": "rhizopon the netherlands b.v.",
    "madeby": "ácido indolbutírico 0,25% [ap] p/p"
  },
  {
    "id": 1816,
    "registrynumber": "ES-00634",
    "tradename": "chryzoplus gris 0,8%",
    "headline": "rhizopon the netherlands b.v.",
    "madeby": "ácido indolbutírico 0,8% [ap] p/p"
  },
  {
    "id": 1817,
    "registrynumber": "ES-00636",
    "tradename": "fragma delta",
    "headline": "nufarm españa, s.a.",
    "madeby": "diflufenican 50% + florasulam 5% [sc] p/v"
  },
  {
    "id": 1818,
    "registrynumber": "ES-00640",
    "tradename": "rival",
    "headline": "agria s.a.",
    "madeby": "propamocarb 60,7% (como hidrocloruro) [sl] p/v"
  },
  {
    "id": 1819,
    "registrynumber": "ES-00641",
    "tradename": "vibrance star 70 fs",
    "headline": "syngenta españa, s.a.",
    "madeby": "sedaxane 2,5% + fludioxonil 2,5% + triticonazol 2% [fs] p/v"
  },
  {
    "id": 1820,
    "registrynumber": "ES-00642",
    "tradename": "atrezzo",
    "headline": "certis europe b.v. (utrecht)",
    "madeby": "propizamida 40% [sc] p/v"
  },
  {
    "id": 1821,
    "registrynumber": "ES-00646",
    "tradename": "pulsar plus",
    "headline": "basf española s.l.u.",
    "madeby": "imazamox 2,5% [sl] p/v"
  },
  {
    "id": 1822,
    "registrynumber": "ES-00647",
    "tradename": "ronstar expert",
    "headline": "bayer cropscience, s.l.",
    "madeby": "diflufenican 36% + iodosulfuron-metil-sodio 1% [wg] p/p"
  },
  {
    "id": 1823,
    "registrynumber": "ES-00649",
    "tradename": "valdor flex",
    "headline": "bayer cropscience, s.l.",
    "madeby": "diflufenican 36% + iodosulfuron-metil-sodio 1% [wg] p/p"
  },
  {
    "id": 1824,
    "registrynumber": "ES-00650",
    "tradename": "sekator od",
    "headline": "bayer cropscience, s.l.",
    "madeby": "amidosulfuron 10% (sodio) + iodosulfuron-metil-sodio 2,5% [od] p/v"
  },
  {
    "id": 1825,
    "registrynumber": "ES-00652",
    "tradename": "puma gold",
    "headline": "bayer cropscience, s.l.",
    "madeby": "fenoxaprop-p-etil 6,4% + iodosulfuron-metil-sodio 0,8% [ec] p/v"
  },
  {
    "id": 1826,
    "registrynumber": "ES-00653",
    "tradename": "requiem prime",
    "headline": "bayer cropscience, s.l.",
    "madeby": "mezcla de terpenoides qrd 460 15,23% [ec] p/v"
  },
  {
    "id": 1827,
    "registrynumber": "ES-00655",
    "tradename": "contans wg",
    "headline": "bayer cropscience, s.l.",
    "madeby": "coniothyrium minitans 5,3% (1 x 10e12 esporas viables/kg) [wg] p/p"
  },
  {
    "id": 1828,
    "registrynumber": "ES-00656",
    "tradename": "acemur",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "acetamiprid 20% [sp] p/p"
  },
  {
    "id": 1829,
    "registrynumber": "ES-00657",
    "tradename": "cornalina",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "acetamiprid 20% [sp] p/p"
  },
  {
    "id": 1830,
    "registrynumber": "ES-00659",
    "tradename": "rocinante",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "hexitiazox 5% + abamectina 1,8% [sc] p/v"
  },
  {
    "id": 1831,
    "registrynumber": "ES-00660",
    "tradename": "crochet",
    "headline": "proplan-plant protection co. s.l.",
    "madeby": "hexitiazox 5% + abamectina 1,8% [sc] p/v"
  },
  {
    "id": 1832,
    "registrynumber": "ES-00666",
    "tradename": "kupros 35 wg",
    "headline": "phoenix-del s.r.l.",
    "madeby": "oxicloruro de cobre 35% (exp. en cu) [wg] p/p"
  },
  {
    "id": 1833,
    "registrynumber": "ES-00669",
    "tradename": "exalt",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "spinetoram 2,5% [sc] p/v"
  },
  {
    "id": 1834,
    "registrynumber": "ES-00670",
    "tradename": "stonic",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "clomazona 36% [cs] p/v"
  },
  {
    "id": 1835,
    "registrynumber": "ES-00671",
    "tradename": "wildcard",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "clomazona 36% [cs] p/v"
  },
  {
    "id": 1836,
    "registrynumber": "ES-00674",
    "tradename": "limocide",
    "headline": "vivagro sarl",
    "madeby": "aceite de naranja 58,96 g/l [me]"
  },
  {
    "id": 1837,
    "registrynumber": "ES-00679",
    "tradename": "mutual",
    "headline": "basf española s.l.u.",
    "madeby": "imazamox 1,67% + pendimetalina 25% [ec] p/v"
  },
  {
    "id": 1838,
    "registrynumber": "ES-00687",
    "tradename": "flame",
    "headline": "albaugh tki d.o.o.",
    "madeby": "tribenuron-metil 50% [sg] p/p"
  },
  {
    "id": 1839,
    "registrynumber": "ES-00688",
    "tradename": "herold trio",
    "headline": "bayer cropscience, s.l.",
    "madeby": "diflufenican 17,1% + flufenacet 17,1% + metribuzin 6,4% [sc] p/v"
  },
  {
    "id": 1840,
    "registrynumber": "ES-00689",
    "tradename": "merplus",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "fosfonatos de potasio 66% + captan 36% [sc] p/v"
  },
  {
    "id": 1841,
    "registrynumber": "ES-00690",
    "tradename": "flosul",
    "headline": "sulphur mills ltd. (uk)",
    "madeby": "azufre 80% [sc] p/v"
  },
  {
    "id": 1842,
    "registrynumber": "ES-00691",
    "tradename": "sanium pin",
    "headline": "sbm développement sas (ecully)",
    "madeby": "flupiradifurona 1,88% [pr] p/p"
  },
  {
    "id": 1843,
    "registrynumber": "ES-00692",
    "tradename": "azoshy",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1844,
    "registrynumber": "ES-00700",
    "tradename": "corum",
    "headline": "basf española s.l.u.",
    "madeby": "bentazona 48% (sal sódica) + imazamox 2,24% [sl] p/v"
  },
  {
    "id": 1845,
    "registrynumber": "ES-00703",
    "tradename": "super-stop-brot 18",
    "headline": "pamena, s.l.",
    "madeby": "hidrazida maleica 18% (sal potásica) [sl] p/v"
  },
  {
    "id": 1846,
    "registrynumber": "ES-00704",
    "tradename": "decis trap completa",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 0,015% [rb] p/p"
  },
  {
    "id": 1847,
    "registrynumber": "ES-00705",
    "tradename": "delan sc",
    "headline": "basf española s.l.u.",
    "madeby": "ditianona 50% [sc] p/v"
  },
  {
    "id": 1848,
    "registrynumber": "ES-00707",
    "tradename": "votivo",
    "headline": "basf española s.l.u.",
    "madeby": "bacillus firmus (cepa i-1582) 1,7 x 10e10 cfu/ml [fs] p/v"
  },
  {
    "id": 1849,
    "registrynumber": "ES-00712",
    "tradename": "kinto plus",
    "headline": "basf española s.l.u.",
    "madeby": "fluxapyroxad 3,33% + triticonazol 3,33% + fludioxonil 3,33% [fs] p/v"
  },
  {
    "id": 1850,
    "registrynumber": "ES-00713",
    "tradename": "actlet c",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "metalaxil-m 2,85% + hidroxido cuprico 21,5% (exp. en cu) [sc] p/v"
  },
  {
    "id": 1851,
    "registrynumber": "ES-00716",
    "tradename": "hidrocuper bio wg",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "hidroxido cuprico 20% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1852,
    "registrynumber": "ES-00717",
    "tradename": "droxicuper flash",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "hidroxido cuprico 20% (expr. en cu) [wg] p/p"
  },
  {
    "id": 1853,
    "registrynumber": "ES-00718",
    "tradename": "abanto max",
    "headline": "industrias afrasa, s.a.",
    "madeby": "piretrinas 4% (extr. de pelitre) [ec] p/v"
  },
  {
    "id": 1854,
    "registrynumber": "ES-00719",
    "tradename": "kusabi",
    "headline": "isk biosciences europe n.v.",
    "madeby": "piriofenona 30% [sc] p/v"
  },
  {
    "id": 1855,
    "registrynumber": "ES-00727",
    "tradename": "boltex c",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "metalaxil-m 2,85% + hidroxido cuprico 21,5% (exp. en cu) [sc] p/v"
  },
  {
    "id": 1856,
    "registrynumber": "ES-00732",
    "tradename": "nemguard sc",
    "headline": "cbc (europe) s.r.l.",
    "madeby": "extracto de ajo 100% [sc] p/v"
  },
  {
    "id": 1857,
    "registrynumber": "ES-00734",
    "tradename": "elite max",
    "headline": "isk biosciences europe n.v.",
    "madeby": "nicosulfuron 6% [od] p/v"
  },
  {
    "id": 1858,
    "registrynumber": "ES-00735",
    "tradename": "quelex",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "halauxifen-metil 10,42% + florasulam 10% [wg] p/p"
  },
  {
    "id": 1859,
    "registrynumber": "ES-00736",
    "tradename": "kalif",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "clomazona 36% [cs] p/v"
  },
  {
    "id": 1860,
    "registrynumber": "ES-00742",
    "tradename": "herbolex",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1861,
    "registrynumber": "ES-00744",
    "tradename": "herbolex 360",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1862,
    "registrynumber": "ES-00751",
    "tradename": "trapío",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "diflufenican 4% + glifosato 16% (sal isopropilamina) [sc] p/v"
  },
  {
    "id": 1863,
    "registrynumber": "ES-00753",
    "tradename": "orlador",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1864,
    "registrynumber": "ES-00754",
    "tradename": "runrud",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1865,
    "registrynumber": "ES-00755",
    "tradename": "hercampo 36",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1866,
    "registrynumber": "ES-00756",
    "tradename": "mohican energy",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "diflufenican 4% + glifosato 16% (sal isopropilamina) [sc] p/v"
  },
  {
    "id": 1867,
    "registrynumber": "ES-00758",
    "tradename": "intensity 10",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "aminopiralid 30% (sal potásica) + florasulam 15% [wg] p/p"
  },
  {
    "id": 1868,
    "registrynumber": "ES-00759",
    "tradename": "elatus era lr",
    "headline": "syngenta españa, s.a.",
    "madeby": "protioconazol 15% + benzovindiflupyr 7,5% [ec] p/v"
  },
  {
    "id": 1869,
    "registrynumber": "ES-00760",
    "tradename": "golbex wg",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 1870,
    "registrynumber": "ES-00761",
    "tradename": "keyfol wg",
    "headline": "industrial quimica key, s.a.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 1871,
    "registrynumber": "ES-00762",
    "tradename": "kilate wg",
    "headline": "lainco, s.a.",
    "madeby": "fosetil-al 80% [wg] p/p"
  },
  {
    "id": 1872,
    "registrynumber": "ES-00763",
    "tradename": "mural",
    "headline": "galenika-fitofarmacija d.o.o.",
    "madeby": "dicamba 48% (c. sal dimetilamina) [sl] p/v"
  },
  {
    "id": 1873,
    "registrynumber": "ES-00764",
    "tradename": "applesmart 3,3 vp",
    "headline": "innvigo sp. z o.o. (warszaw)",
    "madeby": "1-metilciclopropeno 3,3% [vp] p/p"
  },
  {
    "id": 1874,
    "registrynumber": "ES-00765",
    "tradename": "dextop",
    "headline": "agronaturalis ltd.",
    "madeby": "hidrogenocarbonato de potasio 0,425% [al] p/v"
  },
  {
    "id": 1875,
    "registrynumber": "ES-00768",
    "tradename": "primextra liquido gold se",
    "headline": "syngenta españa, s.a.",
    "madeby": "s-metolacloro 31,25% + terbutilazina 18,75% [se] p/v"
  },
  {
    "id": 1876,
    "registrynumber": "ES-00769",
    "tradename": "harpun",
    "headline": "galenika-fitofarmacija d.o.o.",
    "madeby": "piriproxifen 10% [ec] p/v"
  },
  {
    "id": 1877,
    "registrynumber": "ES-00771",
    "tradename": "trico",
    "headline": "kwizda agro gmbh",
    "madeby": "grasa de ovino 6,46% [ew] p/v"
  },
  {
    "id": 1878,
    "registrynumber": "ES-00775",
    "tradename": "buzin",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "metribuzina 70% [wg] p/p"
  },
  {
    "id": 1879,
    "registrynumber": "ES-00785",
    "tradename": "polysect ultra al",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "acetamiprid 0,005% [al] p/v"
  },
  {
    "id": 1880,
    "registrynumber": "ES-00787",
    "tradename": "glifochem",
    "headline": "brokden s.l.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1881,
    "registrynumber": "ES-00793",
    "tradename": "bentarroz",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "bentazona 48% (sal sódica) [sl] p/v"
  },
  {
    "id": 1882,
    "registrynumber": "ES-00794",
    "tradename": "ratron gl",
    "headline": "frunol delicia gmbh",
    "madeby": "fosfuro de zinc 0,8% [gb] p/p"
  },
  {
    "id": 1883,
    "registrynumber": "ES-00795",
    "tradename": "zorvec enicade m",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "oxatiapiprolin 10% [od] p/v"
  },
  {
    "id": 1884,
    "registrynumber": "ES-00796",
    "tradename": "flypack completa",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "deltametrin 0,015% [rb] p/p"
  },
  {
    "id": 1885,
    "registrynumber": "ES-00801",
    "tradename": "zeutec",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "(e,z)-2,13-octadecadien-1-yl acetato 0,122 g/difusor + (e,z)-3,13-octadecadien-1-yl acetato 0,005 g/difusor [vp] p/p"
  },
  {
    "id": 1886,
    "registrynumber": "ES-00802",
    "tradename": "graphotec",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "mezcla de (z,e)-8-dodecen-1-yl acetato + (z)-8-dodecen-1-ol 0,358 g/difusor [vp] p/p"
  },
  {
    "id": 1887,
    "registrynumber": "ES-00804",
    "tradename": "basagran sg",
    "headline": "basf española s.l.u.",
    "madeby": "bentazona 87% (sal sódica) [sg] p/p"
  },
  {
    "id": 1888,
    "registrynumber": "ES-00805",
    "tradename": "basagran l",
    "headline": "basf española s.l.u.",
    "madeby": "bentazona 48% (sal sódica) [sl] p/v"
  },
  {
    "id": 1889,
    "registrynumber": "ES-00810",
    "tradename": "attraxor",
    "headline": "basf española s.l.u.",
    "madeby": "prohexadiona-cálcica 10% [wg] p/p"
  },
  {
    "id": 1890,
    "registrynumber": "ES-00811",
    "tradename": "anartec",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "(e)-5-decen-1-yl acetato 0,234 g/difusor + (e)-5-decen-1-ol 0,048 g/difusor [vp] p/p"
  },
  {
    "id": 1891,
    "registrynumber": "ES-00812",
    "tradename": "sitofex",
    "headline": "alzchem trostberg gmbh",
    "madeby": "forclorfenuron 1% [ec] p/v"
  },
  {
    "id": 1892,
    "registrynumber": "ES-00813",
    "tradename": "decco imz s-7,5",
    "headline": "decco iberica post cosecha s.a.u.",
    "madeby": "imazalil (sulfato) 7,5% [sl] p/v"
  },
  {
    "id": 1893,
    "registrynumber": "ES-00825",
    "tradename": "smerch",
    "headline": "agria s.a.",
    "madeby": "oxifluorfen 24% [ec] p/v"
  },
  {
    "id": 1894,
    "registrynumber": "ES-00826",
    "tradename": "si 533",
    "headline": "sipcam inagra, s.a.",
    "madeby": "oxifluorfen 24% [ec] p/v"
  },
  {
    "id": 1895,
    "registrynumber": "ES-00830",
    "tradename": "xanadu",
    "headline": "upl holdings coöperatief u.a.",
    "madeby": "bensulfuron-metil 50% + metsulfuron-metil 4% [wg] p/p"
  },
  {
    "id": 1896,
    "registrynumber": "ES-00833",
    "tradename": "v10",
    "headline": "valto b.v.",
    "madeby": "virus del mosaico del pepino dulce (aislado vc1) 5-25 mg/l + virus del mosaico del pepino dulce (aislado vx1) 5-25 mg/l [sc] p/v"
  },
  {
    "id": 1897,
    "registrynumber": "ES-00840",
    "tradename": "rivet 24 ec",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "carfentrazona-etil 24% [ec] p/v"
  },
  {
    "id": 1898,
    "registrynumber": "ES-00841",
    "tradename": "fixor 100 sl",
    "headline": "certiplant b.v.",
    "madeby": "1-naftilacético 10% [sl] p/v"
  },
  {
    "id": 1899,
    "registrynumber": "ES-00842",
    "tradename": "mighty",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "mesotriona 10% [sc] p/v"
  },
  {
    "id": 1900,
    "registrynumber": "ES-00843",
    "tradename": "sindoxa",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "indoxacarb 30% [wg] p/p"
  },
  {
    "id": 1901,
    "registrynumber": "ES-00847",
    "tradename": "fruitfog-pyr",
    "headline": "fomesa fruitech s.l.",
    "madeby": "pirimetanil 25% [fd] p/p"
  },
  {
    "id": 1902,
    "registrynumber": "ES-00848",
    "tradename": "majestik",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "maltodextrin 47,6% [sl] p/v"
  },
  {
    "id": 1903,
    "registrynumber": "ES-00849",
    "tradename": 302445,
    "headline": "adama agriculture españa, s.a.",
    "madeby": "metaldehido 3% [gb] p/p"
  },
  {
    "id": 1904,
    "registrynumber": "ES-00851",
    "tradename": "penbotec 400 sc",
    "headline": "janssen pmp a división of janssen pharmaceutica nv",
    "madeby": "pirimetanil 40% [sc] p/v"
  },
  {
    "id": 1905,
    "registrynumber": "ES-00853",
    "tradename": "flecha",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "kresoxim-metil 50% [wg] p/p"
  },
  {
    "id": 1906,
    "registrynumber": "ES-00854",
    "tradename": "decibel wg",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "kresoxim-metil 50% [wg] p/p"
  },
  {
    "id": 1907,
    "registrynumber": "ES-00855",
    "tradename": "sugoby",
    "headline": "lainco, s.a.",
    "madeby": "kresoxim-metil 50% [wg] p/p"
  },
  {
    "id": 1908,
    "registrynumber": "ES-00856",
    "tradename": "total",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "s-metolacloro 96% [ec] p/v"
  },
  {
    "id": 1909,
    "registrynumber": "ES-00857",
    "tradename": "preferal",
    "headline": "biobest group n.v.",
    "madeby": "isaria fumosorosea (cepa apopka 97) 20% [wg] p/p"
  },
  {
    "id": 1910,
    "registrynumber": "ES-00858",
    "tradename": "cuprozin 35 wp",
    "headline": "spiess-urania chemicals gmbh",
    "madeby": "oxicloruro de cobre 35% (exp. en cu) [wp] p/p"
  },
  {
    "id": 1911,
    "registrynumber": "ES-00859",
    "tradename": "curame 25 wg",
    "headline": "manica, spa",
    "madeby": "cimoxanilo 4% + oxicloruro de cobre 25% (exp. en cu) [wg] p/p"
  },
  {
    "id": 1912,
    "registrynumber": "ES-00860",
    "tradename": "bordbio sc",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "sulfato cuprocalcico 12,4% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1913,
    "registrynumber": "ES-00861",
    "tradename": "bordocor",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "sulfato cuprocalcico 12,4% (expr. en cu) [sc] p/v"
  },
  {
    "id": 1914,
    "registrynumber": "ES-00862",
    "tradename": "fantic a",
    "headline": "isagro s.p.a.",
    "madeby": "benalaxil-m 5% + oxicloruro de cobre 15% (exp. en cu) + hidroxido cuprico 15% (exp. en cu) [wg] p/p"
  },
  {
    "id": 1915,
    "registrynumber": "ES-00863",
    "tradename": "cuprantol duo",
    "headline": "isagro s.p.a.",
    "madeby": "oxicloruro de cobre 14% (exp. en cu) + hidroxido cuprico 14% (exp. en cu) [wg] p/p"
  },
  {
    "id": 1916,
    "registrynumber": "ES-00865",
    "tradename": "quimera",
    "headline": "industrias afrasa, s.a.",
    "madeby": "kresoxim-metil 50% [wg] p/p"
  },
  {
    "id": 1917,
    "registrynumber": "ES-00866",
    "tradename": "valcure",
    "headline": "mitsui agriscience international s.a./n.v.",
    "madeby": "bacillus amyloliquefaciens subesp. plantarum (cepa d747) 5% [sc] p/v"
  },
  {
    "id": 1918,
    "registrynumber": "ES-00867",
    "tradename": "orocide",
    "headline": "oro agri international b.v.",
    "madeby": "aceite de naranja 58,96 g/l [me]"
  },
  {
    "id": 1919,
    "registrynumber": "ES-00868",
    "tradename": "kudos",
    "headline": "fine agrochemicals ltd.",
    "madeby": "prohexadiona-cálcica 10% [wg] p/p"
  },
  {
    "id": 1920,
    "registrynumber": "ES-00874",
    "tradename": "cedroz",
    "headline": "taminco bv",
    "madeby": "geraniol 12,1% + timol 4,1% [cs] p/v"
  },
  {
    "id": 1921,
    "registrynumber": "ES-00875",
    "tradename": "emcee",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "mcpa 75% (sal dimetilamina) [sl] p/v"
  },
  {
    "id": 1922,
    "registrynumber": "ES-00876",
    "tradename": "zuxion",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "acetamiprid 20% [sg] p/p"
  },
  {
    "id": 1923,
    "registrynumber": "ES-00877",
    "tradename": "corida",
    "headline": "zenith crop sciences bulgaria ltd. (sofía 1408)",
    "madeby": "tribenuron-metil 75% [wg] p/p"
  },
  {
    "id": 1924,
    "registrynumber": "ES-00878",
    "tradename": "taegro",
    "headline": "novozymes france s.a.s.",
    "madeby": "bacillus amyloliquefaciens (cepa fzb24) 13% [wp] p/p"
  },
  {
    "id": 1925,
    "registrynumber": "ES-00879",
    "tradename": "zorvec vinabria",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "folpet 50% + oxatiapiprolin 1% [sc] p/v"
  },
  {
    "id": 1926,
    "registrynumber": "ES-00883",
    "tradename": "ressivi 375 fs",
    "headline": "syngenta españa, s.a.",
    "madeby": "acibenzolar-s-metil 37,5% [fs] p/v"
  },
  {
    "id": 1927,
    "registrynumber": "ES-00884",
    "tradename": "sonata",
    "headline": "bayer cropscience, s.l.",
    "madeby": "bacillus pumilus (cepa qst 2808) 14,35 g/l (1x10e9 ufc/g) [sc]"
  },
  {
    "id": 1928,
    "registrynumber": "ES-00885",
    "tradename": "restrain",
    "headline": "restrain sistemas s.l.",
    "madeby": "etileno 90% (producido a partir de etanol) [ge] p/p"
  },
  {
    "id": 1929,
    "registrynumber": "ES-00887",
    "tradename": "katoun gold",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "acido pelargónico 50% [ec] p/v"
  },
  {
    "id": 1930,
    "registrynumber": "ES-00888",
    "tradename": "decano od",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "sulcotriona 25% [od] p/v"
  },
  {
    "id": 1931,
    "registrynumber": "ES-00889",
    "tradename": "sulcotrina od",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "sulcotriona 25% [od] p/v"
  },
  {
    "id": 1932,
    "registrynumber": "ES-00890",
    "tradename": "beloukha garden",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "acido pelargónico 50% [ec] p/v"
  },
  {
    "id": 1933,
    "registrynumber": "ES-00892",
    "tradename": "award",
    "headline": "nisso chemical europe gmbh",
    "madeby": "fenpiroximato 6,24% + hexitiazox 3,12% [sc] p/v"
  },
  {
    "id": 1934,
    "registrynumber": "ES-00992",
    "tradename": "chanon",
    "headline": "globachem n.v.",
    "madeby": "aclonifen 60% [sc] p/v"
  },
  {
    "id": 1935,
    "registrynumber": "ES-01080",
    "tradename": "julietta",
    "headline": "agrauxine s.a. (marcq en baroeul)",
    "madeby": "saccharomyces cerevisiae (cepa las02) 96,1% (1 x 10e13 ufc/kg) [wg] p/p"
  },
  {
    "id": 1936,
    "registrynumber": "ES-01084",
    "tradename": "savial direct",
    "headline": "lainco, s.a.",
    "madeby": "fosfonato potasico 0,1275% (exp. como ácido fosforoso) [al] p/v"
  },
  {
    "id": 1937,
    "registrynumber": "ES-01085",
    "tradename": "stretch",
    "headline": "zenith crop sciences bulgaria ltd. (sofía 1408)",
    "madeby": "nicosulfuron 4% [od] p/v"
  },
  {
    "id": 1938,
    "registrynumber": "ES-01092",
    "tradename": "trunfo max",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "azoxistrobin 20% + tebuconazol 20% [sc] p/v"
  },
  {
    "id": 1939,
    "registrynumber": "ES-01093",
    "tradename": "tresine max",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "azoxistrobin 20% + tebuconazol 20% [sc] p/v"
  },
  {
    "id": 1940,
    "registrynumber": "ES-01095",
    "tradename": "deflexo mix",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "s-metolacloro 31,25% + terbutilazina 18,75% [se] p/v"
  },
  {
    "id": 1941,
    "registrynumber": "ES-01096",
    "tradename": "infinor mix",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "s-metolacloro 31,25% + terbutilazina 18,75% [se] p/v"
  },
  {
    "id": 1942,
    "registrynumber": "ES-01098",
    "tradename": "clinic tf",
    "headline": "nufarm españa, s.a.",
    "madeby": "glifosato 36% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1943,
    "registrynumber": "ES-01101",
    "tradename": "citrole forte",
    "headline": "total españa, s.a.u.",
    "madeby": "aceite de parafina (cas [64742-46-7]) 79% [ec] p/v"
  },
  {
    "id": 1944,
    "registrynumber": "ES-01102",
    "tradename": "ecometal",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "metaldehido 1,5% [gb] p/p"
  },
  {
    "id": 1945,
    "registrynumber": "ES-01108",
    "tradename": "deflexo ultra",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "s-metolacloro 35% + sulcotriona 10% [se] p/v"
  },
  {
    "id": 1946,
    "registrynumber": "ES-01109",
    "tradename": "infinor ultra",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "s-metolacloro 35% + sulcotriona 10% [se] p/v"
  },
  {
    "id": 1947,
    "registrynumber": "ES-01112",
    "tradename": "kaltor",
    "headline": "rotam agrochemical europe ltd.",
    "madeby": "dicamba 60% (como sal sódica) + nicosulfuron 15% [sg] p/p"
  },
  {
    "id": 1948,
    "registrynumber": "ES-01113",
    "tradename": "checkmate puffer fruit multi",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "(e,e)-8,10-dodecadien-1-ol 18,05% + mezcla de: [(e)-8-dodecen-1-yl acetato + (z)-8-dodecen-1-yl acetato+ (z)-8-dodecen-1-ol] 12,5% [ae] p/p"
  },
  {
    "id": 1949,
    "registrynumber": "ES-01114",
    "tradename": "shoshi 25 sc",
    "headline": "lainco, s.a.",
    "madeby": "hexitiazox 25,13% [sc] p/v"
  },
  {
    "id": 1950,
    "registrynumber": "ES-01116",
    "tradename": "flurostar xl",
    "headline": "globachem n.v.",
    "madeby": "fluroxipir 14,4% (ester metilheptil) + florasulam 0,25% [se] p/v"
  },
  {
    "id": 1951,
    "registrynumber": "ES-01117",
    "tradename": "frequent",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "fluazifop-p-butil 12,5% [ec] p/v"
  },
  {
    "id": 1952,
    "registrynumber": "ES-01118",
    "tradename": "flypack cerasi",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "deltametrin 0,015 g/trampa [rb] p/p"
  },
  {
    "id": 1953,
    "registrynumber": "ES-01121",
    "tradename": "atlantis activ",
    "headline": "bayer cropscience, s.l.",
    "madeby": "iodosulfuron-metil-sodio 0,9% + mesosulfuron-metil 4,5% (sal sódica) + tiencarbazona-metil 1,5% (sal sódica) [wg] p/p"
  },
  {
    "id": 1954,
    "registrynumber": "ES-01124",
    "tradename": "actlet f",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "folpet 40% + metalaxil-m 5% [wg] p/p"
  },
  {
    "id": 1955,
    "registrynumber": "ES-01125",
    "tradename": "boltex f",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "folpet 40% + metalaxil-m 5% [wg] p/p"
  },
  {
    "id": 1956,
    "registrynumber": "ES-01127",
    "tradename": "c-xtreme",
    "headline": "serbios s.r.l.",
    "madeby": "granulovirus de cydia pomonella (aislado mexicano) 2x10e13 gránulos viables/l [sc] p/v"
  },
  {
    "id": 1957,
    "registrynumber": "ES-01132",
    "tradename": "finalsan herbicida natural",
    "headline": "w.neudorff gmbh kg",
    "madeby": "acido pelargónico 18,67% [ec] p/v"
  },
  {
    "id": 1958,
    "registrynumber": "ES-01134",
    "tradename": "decis trap cerasi",
    "headline": "bayer cropscience, s.l.",
    "madeby": "deltametrin 0,015 g/trampa [rb] p/p"
  },
  {
    "id": 1959,
    "registrynumber": "ES-01135",
    "tradename": "praktis",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "protioconazol 25% [ec] p/v"
  },
  {
    "id": 1960,
    "registrynumber": "ES-01136",
    "tradename": "ortiva pc",
    "headline": "syngenta españa, s.a.",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1961,
    "registrynumber": "ES-01137",
    "tradename": "luma gold 5",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "metaldehido 5% [gb] p/p"
  },
  {
    "id": 1962,
    "registrynumber": "ES-01139",
    "tradename": "casino royale",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "piraclostrobin 6,7% + boscalida 26,7% [wg] p/p"
  },
  {
    "id": 1963,
    "registrynumber": "ES-01140",
    "tradename": "naturen limex",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "fosfato ferrico hidratado 1,24% [gb] p/p"
  },
  {
    "id": 1964,
    "registrynumber": "ES-01141",
    "tradename": "darium",
    "headline": "zenith crop sciences bulgaria ltd. (sofía 1408)",
    "madeby": "quizalofop-p-etil 5% [ec] p/v"
  },
  {
    "id": 1965,
    "registrynumber": "ES-01144",
    "tradename": "belkar",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "halauxifen-metil 1% + picloram 4,8% [ec] p/v"
  },
  {
    "id": 1966,
    "registrynumber": "ES-01145",
    "tradename": "coctel gold",
    "headline": "lainco, s.a.",
    "madeby": "glifosato (sal isopropilamina) 18% + mcpa 18% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1967,
    "registrynumber": "ES-01146",
    "tradename": "galaxia max",
    "headline": "industrias afrasa, s.a.",
    "madeby": "glifosato (sal isopropilamina) 18% + mcpa 18% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1968,
    "registrynumber": "ES-01147",
    "tradename": "glisompa-plus",
    "headline": "probelte s.a.u.",
    "madeby": "glifosato (sal isopropilamina) 18% + mcpa 18% (sal isopropilamina) [sl] p/v"
  },
  {
    "id": 1969,
    "registrynumber": "ES-01151",
    "tradename": "soilguard 1.5 gr",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "teflutrin 1,5% [gr] p/p"
  },
  {
    "id": 1970,
    "registrynumber": "ES-01152",
    "tradename": "tri-soil",
    "headline": "agrauxine s.a. (marcq en baroeul)",
    "madeby": "trichoderma atroviride (cepa i-1237) (1x10e8 ufc/g) [wp] p/p"
  },
  {
    "id": 1971,
    "registrynumber": "ES-01154",
    "tradename": "orbiter",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "florasulam 5% [sc] p/v"
  },
  {
    "id": 1972,
    "registrynumber": "ES-01155",
    "tradename": "overstar",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "florasulam 5% [sc] p/v"
  },
  {
    "id": 1973,
    "registrynumber": "ES-01159",
    "tradename": "elirex one",
    "headline": "de sangosse s.a.s.",
    "madeby": "metaldehido 2,5% [gb] p/p"
  },
  {
    "id": 1974,
    "registrynumber": "ES-01161",
    "tradename": "monex",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "1-naftilacético 1% [wp] p/p"
  },
  {
    "id": 1975,
    "registrynumber": "ES-01163",
    "tradename": "tutatec",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "mezcla de (e,z,z)-3,8,11-tetradecatrien-1-yl-acetato + (e,z)-3,8-tetradecadien-1-yl- acetato 0,185 g/difusor [vp] p/p"
  },
  {
    "id": 1976,
    "registrynumber": "ES-01164",
    "tradename": "botrefin",
    "headline": "finchimica spa",
    "madeby": "ciprodinil 37,5% + fludioxonil 25% [wg] p/p"
  },
  {
    "id": 1977,
    "registrynumber": "ES-01165",
    "tradename": "anl-f004",
    "headline": "agronaturalis ltd.",
    "madeby": "hidrogenocarbonato de potasio 85% [sg] p/p"
  },
  {
    "id": 1978,
    "registrynumber": "ES-01166",
    "tradename": "mallen",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "hidrogenocarbonato de potasio 85% [sg] p/p"
  },
  {
    "id": 1979,
    "registrynumber": "ES-01168",
    "tradename": "ferrimax",
    "headline": "de sangosse s.a.s.",
    "madeby": "fosfato férrico (anhidro) 0,81% [rb] p/p"
  },
  {
    "id": 1980,
    "registrynumber": "ES-01169",
    "tradename": "ironmax pro",
    "headline": "de sangosse s.a.s.",
    "madeby": "fosfato ferrico (anhidro) 2,42% [rb] p/p"
  },
  {
    "id": 1981,
    "registrynumber": "ES-01171",
    "tradename": "steward opz",
    "headline": "fmc agricultural solutions, s.a.u.",
    "madeby": "indoxacarb 30% [wg] p/p"
  },
  {
    "id": 1982,
    "registrynumber": "ES-01172",
    "tradename": "metarex duo",
    "headline": "de sangosse s.a.s.",
    "madeby": "metaldehido 1% + fosfato ferrico (anhidro) 1,62% [rb] p/p"
  },
  {
    "id": 1983,
    "registrynumber": "ES-01176",
    "tradename": "rapiderba al",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "acido pelargónico 4,3% [ew] p/v"
  },
  {
    "id": 1984,
    "registrynumber": "ES-01177",
    "tradename": "mateno forte",
    "headline": "bayer cropscience, s.l.",
    "madeby": "aclonifen 45% + diflufenican 6% + flufenacet 7,5 % [sc] p/v"
  },
  {
    "id": 1985,
    "registrynumber": "ES-01179",
    "tradename": "sunfire",
    "headline": "mitsui agriscience international s.a./n.v. (dublín)",
    "madeby": "flufenacet 50% [sc] p/v"
  },
  {
    "id": 1986,
    "registrynumber": "ES-01180",
    "tradename": "exilis 100 sc",
    "headline": "fine agrochemicals ltd.",
    "madeby": "6-benziladenina 10% [sc] p/v"
  },
  {
    "id": 1987,
    "registrynumber": "ES-01181",
    "tradename": "azoxystrobin 250 g/l sc",
    "headline": "finchimica spa",
    "madeby": "azoxistrobin 25% [sc] p/v"
  },
  {
    "id": 1988,
    "registrynumber": "ES-01183",
    "tradename": "grassrooter",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "etefon 48% [sl] p/v"
  },
  {
    "id": 1989,
    "registrynumber": "ES-01185",
    "tradename": "seltima",
    "headline": "basf española s.l.u.",
    "madeby": "piraclostrobin 10% [cs] p/v"
  },
  {
    "id": 1990,
    "registrynumber": "ES-01186",
    "tradename": "cidetrak cm meso",
    "headline": "certis europe b.v. sucursal en españa",
    "madeby": "(e,e)-8,10-dodecadien-1-ol 1100 mg/difusor [vp] p/p"
  },
  {
    "id": 1991,
    "registrynumber": "ES-01188",
    "tradename": "nitide",
    "headline": "lainco, s.a.",
    "madeby": "fluroxipir (como 1-metil heptil ester) 20% [ew] p/v"
  },
  {
    "id": 1992,
    "registrynumber": "ES-01189",
    "tradename": "keynyl",
    "headline": "industrial quimica key, s.a.",
    "madeby": "fluroxipir (como 1-metil heptil ester) 20% [ew] p/v"
  },
  {
    "id": 1993,
    "registrynumber": "ES-01190",
    "tradename": "tidex",
    "headline": "exclusivas sarabia, s.a.",
    "madeby": "fluroxipir (como 1-metil heptil ester) 20% [ew] p/v"
  },
  {
    "id": 1994,
    "registrynumber": "ES-01191",
    "tradename": "soilguard 0.5 gr",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "teflutrin 0,5% [gr] p/p"
  },
  {
    "id": 1995,
    "registrynumber": "ES-01197",
    "tradename": "voyager",
    "headline": "belchim crop protection españa, s.a.",
    "madeby": "fluazinam 20% + valifenalato 15% [sc] p/v"
  },
  {
    "id": 1996,
    "registrynumber": "ES-01200",
    "tradename": "lenvyor",
    "headline": "basf española s.l.u.",
    "madeby": "mefentrifluconazol 10% [ec] p/v"
  },
  {
    "id": 1997,
    "registrynumber": "ES-01201",
    "tradename": "orocide plus",
    "headline": "oro agri international b.v.",
    "madeby": "aceite de naranja 58,96 g/l [me]"
  },
  {
    "id": 1998,
    "registrynumber": "ES-01202",
    "tradename": "davai",
    "headline": "adama agriculture españa, s.a.",
    "madeby": "imazamox 8% [sl] p/v"
  },
  {
    "id": 1999,
    "registrynumber": "ES-01203",
    "tradename": "abioprotect",
    "headline": "abiopep s.l.",
    "madeby": "virus del mosaico del pepino, cepa europea (eu), aislado atenuado abp1 (al menos 2,5x10e11 copias del genoma viral/l) + virus del mosaico del pepino, cepa chilena (ch2), aislado atenuado abp2 (al menos 2,5x10e11 copias del genoma viral/l) [sc] p/v"
  },
  {
    "id": 2000,
    "registrynumber": "ES-01206",
    "tradename": "ephon top",
    "headline": "nufarm españa, s.a.",
    "madeby": "etefon 66% [sl] p/v"
  },
  {
    "id": 2001,
    "registrynumber": "ES-01211",
    "tradename": "scintilla",
    "headline": "de sangosse s.a.s.",
    "madeby": "azufre 70% [sc] p/v"
  },
  {
    "id": 2002,
    "registrynumber": "ES-01220",
    "tradename": "bonaca",
    "headline": "galenika-fitofarmacija d.o.o.",
    "madeby": "fluroxipir-meptyl 36% [ec] p/v"
  },
  {
    "id": 2003,
    "registrynumber": "ES-01221",
    "tradename": "sunny",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "flufenacet 40% + diflufenican 20% [sc] p/v"
  },
  {
    "id": 2004,
    "registrynumber": "ES-01224",
    "tradename": "integral pro",
    "headline": "basf española s.l.u.",
    "madeby": "bacillus amyloliquefaciens (cepa mbi 600) 2,2 x 10e10 ufc/ml [fs]"
  },
  {
    "id": 2005,
    "registrynumber": "ES-01225",
    "tradename": "rapiderba ultra",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "acido pelargónico 56,5% [ec] p/v"
  },
  {
    "id": 2006,
    "registrynumber": "ES-01226",
    "tradename": "insecticida suelo gr",
    "headline": "sbm développement sas (ecully)",
    "madeby": "spinosad 0,1% [gr] p/p"
  },
  {
    "id": 2007,
    "registrynumber": "ES-01227",
    "tradename": "checkmate puffer cm-pro",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "e,e-8,10-dodecadien-1-ol 9,03% [ae] p/p"
  },
  {
    "id": 2008,
    "registrynumber": "ES-01228",
    "tradename": "daxxos",
    "headline": "w.neudorff gmbh kg",
    "madeby": "fosfato ferrico hidratado 2,97% [rb] p/p"
  },
  {
    "id": 2009,
    "registrynumber": "ES-01230",
    "tradename": "biootwin l",
    "headline": "cbc iberia s.a.u.",
    "madeby": "(e,z)-7,9-dodecadien-1-yl acetato 79,2% [vp] p/p [380 mg/difusor]"
  },
  {
    "id": 2010,
    "registrynumber": "ES-01233",
    "tradename": "subvert",
    "headline": "suterra europe biocontrol, s.l.",
    "madeby": "(e,z)-7,9-dodecadien-1-il-acetato 18,85% [cs] p/p"
  },
  {
    "id": 2011,
    "registrynumber": "ES-01234",
    "tradename": "flash 500 sc",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "diflufenican 50% [sc] p/v"
  },
  {
    "id": 2012,
    "registrynumber": "ES-01237",
    "tradename": "mohican max",
    "headline": "ascenza productos para agricultura s.a.u.",
    "madeby": "diflufenican 40% + florasulam 2% [wg] p/p"
  },
  {
    "id": 2013,
    "registrynumber": "ES-01238",
    "tradename": "mamut max",
    "headline": "trade corporation international, s.a.u.",
    "madeby": "diflufenican 40% + florasulam 2% [wg] p/p"
  },
  {
    "id": 2014,
    "registrynumber": "ES-01239",
    "tradename": "neudosan",
    "headline": "w.neudorff gmbh kg",
    "madeby": "sales de potasio de ácidos grasos insaturados c7-c18 & c18 (cas [67701-09-1] 515g/l [sl] p/v"
  },
  {
    "id": 2015,
    "registrynumber": "ES-01240",
    "tradename": "rango e",
    "headline": "arysta lifescience, s.a.s.",
    "madeby": "quizalofop-p-etil 5% [ec] p/v"
  },
  {
    "id": 2016,
    "registrynumber": "ES-01243",
    "tradename": "zorvec vinabel",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "oxatiapiprolin 4% + zoxamida 30% [se] p/v"
  },
  {
    "id": 2017,
    "registrynumber": "ES-01247",
    "tradename": "flyer",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "florasulam 5% [sc] p/v"
  },
  {
    "id": 2018,
    "registrynumber": "ES-01251",
    "tradename": "splivex",
    "headline": "andermatt iberia, s.l.",
    "madeby": "spodoptera littoralis nucleopoliedrovirus (splinpv) (aislado bv-0005) 5 x 10e11 obs/l (sc)"
  },
  {
    "id": 2019,
    "registrynumber": "ES-01252",
    "tradename": "barracuda",
    "headline": "albaugh tki d.o.o.",
    "madeby": "mesotriona 10% [se] p/v"
  },
  {
    "id": 2020,
    "registrynumber": "ES-01255",
    "tradename": "verpavex",
    "headline": "andermatt iberia, s.l.",
    "madeby": "helicoverpa armigera nucleopolyedrovirus (7,5 x 10e12 obs/l) 52% [sc] p/v. cepa dsmz: bv-0003"
  },
  {
    "id": 2021,
    "registrynumber": "ES-01257",
    "tradename": "xofre al",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "azufre 0,4% [al] p/v"
  },
  {
    "id": 2022,
    "registrynumber": "ES-01259",
    "tradename": "loyant",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "florpyrauxifen-benzyl 2,5% [ec] p/v"
  },
  {
    "id": 2023,
    "registrynumber": "ES-01263",
    "tradename": "revycare",
    "headline": "basf española s.l.u.",
    "madeby": "mefentrifluconazol 10% + piraclostrobin 10% [ec] p/v"
  },
  {
    "id": 2024,
    "registrynumber": "ES-01264",
    "tradename": "bio combo al",
    "headline": "evergreen garden care france s.a.s.",
    "madeby": "azufre 0,4% + sales de potasio de ácidos grasos insaturados c7-c18 & c18 (cas [67701-09-1] 1% [al] p/v"
  },
  {
    "id": 2025,
    "registrynumber": "ES-01268",
    "tradename": "shalimar",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "protioconazol 12,5% + tebuconazol 12,5% [ec] p/v"
  },
  {
    "id": 2026,
    "registrynumber": "ES-01269",
    "tradename": "revystar xl",
    "headline": "basf española s.l.u.",
    "madeby": "fluxapyroxad 5% + mefentrifluconazol 10% [ec] p/v"
  },
  {
    "id": 2027,
    "registrynumber": "ES-01279",
    "tradename": "clomate",
    "headline": "albaugh tki d.o.o.",
    "madeby": "clomazona 36% [cs] p/v"
  },
  {
    "id": 2028,
    "registrynumber": "ES-01280",
    "tradename": "fuerza",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "teflutrin 0,5% [gr] p/p"
  },
  {
    "id": 2029,
    "registrynumber": "ES-01281",
    "tradename": "gibb plus sg",
    "headline": "globachem n.v.",
    "madeby": "giberelinas ga4/ga7 2% [sg] p/p"
  },
  {
    "id": 2030,
    "registrynumber": "ES-01284",
    "tradename": "royalty",
    "headline": "sharda cropchem españa, s.l.",
    "madeby": "boscalida 50% [wg] p/p"
  },
  {
    "id": 2031,
    "registrynumber": "ES-01286",
    "tradename": "granupom top",
    "headline": "andermatt iberia, s.l.",
    "madeby": "granulovirus de cydia pomonella (cepa v15) 3 x 10e13 gránulos/l [sc] p/v"
  },
  {
    "id": 2032,
    "registrynumber": "ES-01287",
    "tradename": "granupom twin",
    "headline": "andermatt iberia, s.l.",
    "madeby": "granulovirus de cydia pomonella (cepa v22) 3 x 10e13 gránulos/l [sc] p/v"
  },
  {
    "id": 2033,
    "registrynumber": "ES-01292",
    "tradename": "questar",
    "headline": "corteva agriscience spain, s.l.u. (sevilla)",
    "madeby": "fenpicoxamid 5% [ec] p/v"
  },
  {
    "id": 2034,
    "registrynumber": "ES-01300",
    "tradename": "cryptotec",
    "headline": "sedq healthy crops, s.l.",
    "madeby": "z-11-hexadecenal 8,9% (0,165 g/difusor) + z-13-octadecenal 8,9% (0,165 g/difusor) [vp] p/p"
  },
  {
    "id": 2035,
    "registrynumber": "ES-01306",
    "tradename": "box t pro press",
    "headline": "m2i biocontrol s.a.s.",
    "madeby": "z-11-hexadecenal 7% [cs] p/p"
  },
  {
    "id": 2036,
    "registrynumber": "ES-01308",
    "tradename": "mildore",
    "headline": "investigaciones y aplicaciones biotecnologicas s.l.",
    "madeby": "bacillus subtilis (cepa iab/bs03) (1 x 10e8 cfu/g) 1% [wp] p/p"
  },
  {
    "id": 2037,
    "registrynumber": "ES-01325",
    "tradename": "talisman",
    "headline": "galenika-fitofarmacija d.o.o.",
    "madeby": "nicosulfuron 4% [od] p/v"
  },
  {
    "id": 2038,
    "registrynumber": "ES-01331",
    "tradename": "semiosnet codling moth",
    "headline": "semiosbio technologies b.v.",
    "madeby": "(e,e)-8,10-dodecadien-1-ol 18,05% [ae] p/p"
  },
  {
    "id": 2039,
    "registrynumber": "ES-01336",
    "tradename": "mister c lr",
    "headline": "cbc iberia s.a.u.",
    "madeby": "(z)-11 tetradecen-1-il acetato 11,4% + (z)-9- tetradecen-1-il acetato 6,3% + (e,e)-8,10-dodecadien-1-ol 16,9% [ae] p/p"
  },
  {
    "id": 2040,
    "registrynumber": "ES-01359",
    "tradename": "isonet lr",
    "headline": "cbc iberia s.a.u.",
    "madeby": "(z)-11 tetradecen-1-il acetato 65,6% + (z)-9- tetradecen-1-il acetato 12,8% [vp] p/p"
  }
]

module.exports = productos;