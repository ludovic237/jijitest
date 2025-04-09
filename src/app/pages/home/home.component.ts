import { Component } from '@angular/core';
import {HeaderComponent} from './../../components/header/header.component';
import {ItemElementComponent} from '../../components/All item/item-element/item-element.component';
import {CategoryElementComponent} from '../../components/category-element/category-element.component';
import {ProductService} from '../../services/product.service';
import {Category, Product} from '../../models/data';
import {CategoryService} from '../../services/category.service';
import {ItemCategoryElementComponent} from '../../components/All item/item-category-element/item-category-element.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,ItemElementComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data:any={
    "regions": [
      {
        "id": 176,
        "parent_id": null,
        "name": "Kwara State",
        "slug": "kwara",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 146,
        "parent_id": 119,
        "name": "Ikeja",
        "slug": "ikeja",
        "parent_ids": [
          119
        ],
        "is_popular": true
      },
      {
        "id": 265,
        "parent_id": null,
        "name": "Kaduna State",
        "slug": "kaduna",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 56,
        "parent_id": null,
        "name": "Ondo State",
        "slug": "ondo",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 434,
        "parent_id": 405,
        "name": "Lokogoma",
        "slug": "lokogoma",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 619,
        "parent_id": 604,
        "name": "Oshimili South",
        "slug": "asaba",
        "parent_ids": [
          604
        ],
        "is_popular": true
      },
      {
        "id": 213,
        "parent_id": 192,
        "name": "Suleja",
        "slug": "suleja",
        "parent_ids": [
          192
        ],
        "is_popular": true
      },
      {
        "id": 235,
        "parent_id": null,
        "name": "Akwa Ibom State",
        "slug": "akwa-ibom",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 445,
        "parent_id": 405,
        "name": "Apo District",
        "slug": "apo-district",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1196,
        "parent_id": 119,
        "name": "Agbara-Igbesan",
        "slug": "agbara-igbesan",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 430,
        "parent_id": 405,
        "name": "Katampe",
        "slug": "katampe",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 417,
        "parent_id": 405,
        "name": "Garki 1",
        "slug": "garki-i",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1171,
        "parent_id": 405,
        "name": "Kurudu",
        "slug": "kurudu",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 896,
        "parent_id": 405,
        "name": "Abaji",
        "slug": "abaji",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1262,
        "parent_id": 160,
        "name": "Chevron",
        "slug": "chevron",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 436,
        "parent_id": 405,
        "name": "Mabushi",
        "slug": "mabuchi",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 85,
        "parent_id": 76,
        "name": "Auchi",
        "slug": "auchi",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 1053,
        "parent_id": 151,
        "name": "Old Ikoyi",
        "slug": "old-ikoyi",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1268,
        "parent_id": 160,
        "name": "Ikota",
        "slug": "ikota",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 449,
        "parent_id": null,
        "name": "Katsina State",
        "slug": "katsina",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 580,
        "parent_id": null,
        "name": "Sokoto State",
        "slug": "sokoto",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1386,
        "parent_id": 117,
        "name": "Rumuoji",
        "slug": "rumuoji",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1400,
        "parent_id": 117,
        "name": "Rumuwegwu",
        "slug": "rumuwegwu",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 157,
        "parent_id": 158,
        "name": "Apongbon",
        "slug": "apongbon",
        "parent_ids": [
          158,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1291,
        "parent_id": 360,
        "name": "Atisbo / Atisbo",
        "slug": "atisbo-atisbo",
        "parent_ids": [
          360,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1373,
        "parent_id": 117,
        "name": "Rumudaolu",
        "slug": "rumudaolu",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1398,
        "parent_id": 117,
        "name": "Rumusara",
        "slug": "rumusara",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1287,
        "parent_id": 357,
        "name": "Ore Lope",
        "slug": "ore-lope",
        "parent_ids": [
          357,
          356
        ],
        "is_popular": false
      },
      {
        "id": 119,
        "parent_id": null,
        "name": "Lagos State",
        "slug": "lagos",
        "parent_ids": [],
        "is_popular": true
      },
      {
        "id": 362,
        "parent_id": 366,
        "name": "Akala Express",
        "slug": "akala-express",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1343,
        "parent_id": 117,
        "name": "Boibu-Oromerizemgbo",
        "slug": "boibu-oromerizemgbo",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 405,
        "parent_id": null,
        "name": "Abuja (FCT)",
        "slug": "abuja",
        "parent_ids": [],
        "is_popular": true
      },
      {
        "id": 158,
        "parent_id": 119,
        "name": "Lagos Island (Eko)",
        "slug": "lagos-island-west",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1172,
        "parent_id": 405,
        "name": "Mararaba",
        "slug": "mararaba",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1,
        "parent_id": null,
        "name": "Jigawa State",
        "slug": "jigawa",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1441,
        "parent_id": 405,
        "name": "Jiwa",
        "slug": "jiwa",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 25,
        "parent_id": null,
        "name": "Osun State",
        "slug": "osun",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 112,
        "parent_id": 95,
        "name": "Ogu/Bolo",
        "slug": "ogu-bolo",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 1027,
        "parent_id": 149,
        "name": "Igbogbo",
        "slug": "igbogbo",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 958,
        "parent_id": 137,
        "name": "VGC / Ajah",
        "slug": "ajah-vgc",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 105,
        "parent_id": 95,
        "name": "Emohua",
        "slug": "emohua",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 961,
        "parent_id": 124,
        "name": "Egbeda",
        "slug": "egbeda-alimosho",
        "parent_ids": [
          124,
          119
        ],
        "is_popular": false
      },
      {
        "id": 760,
        "parent_id": 723,
        "name": "Tarauni",
        "slug": "tarauni",
        "parent_ids": [
          723
        ],
        "is_popular": true
      },
      {
        "id": 438,
        "parent_id": 405,
        "name": "Mpape",
        "slug": "mpape",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 101,
        "parent_id": 95,
        "name": "Asari-Toru",
        "slug": "asari-toru",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 650,
        "parent_id": 645,
        "name": "Gboko",
        "slug": "gboko",
        "parent_ids": [
          645
        ],
        "is_popular": true
      },
      {
        "id": 1456,
        "parent_id": 435,
        "name": "Kiami",
        "slug": "kiami",
        "parent_ids": [
          435,
          405
        ],
        "is_popular": false
      },
      {
        "id": 428,
        "parent_id": 405,
        "name": "Karmo",
        "slug": "karmo",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1159,
        "parent_id": 175,
        "name": "Akoka",
        "slug": "akoka",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 164,
        "parent_id": 119,
        "name": "Ojo",
        "slug": "ojo",
        "parent_ids": [
          119
        ],
        "is_popular": true
      },
      {
        "id": 1440,
        "parent_id": 425,
        "name": "Phase 5 / Jikwoyi",
        "slug": "jikwoyi-phase-5",
        "parent_ids": [
          425,
          405
        ],
        "is_popular": false
      },
      {
        "id": 160,
        "parent_id": 119,
        "name": "Lekki",
        "slug": "lekki",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 664,
        "parent_id": 645,
        "name": "Otukpo",
        "slug": "otukpo",
        "parent_ids": [
          645
        ],
        "is_popular": true
      },
      {
        "id": 482,
        "parent_id": 476,
        "name": "Gombe LGA",
        "slug": "gombe-imo",
        "parent_ids": [
          476
        ],
        "is_popular": true
      },
      {
        "id": 605,
        "parent_id": 604,
        "name": "Aniocha North",
        "slug": "aniocha-north",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 118,
        "parent_id": 95,
        "name": "Tai",
        "slug": "tai",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 596,
        "parent_id": 580,
        "name": "Sokoto North",
        "slug": "sokoto-north",
        "parent_ids": [
          580
        ],
        "is_popular": true
      },
      {
        "id": 1093,
        "parent_id": 165,
        "name": "Berger",
        "slug": "berger",
        "parent_ids": [
          165,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1217,
        "parent_id": 146,
        "name": "Omole Phase 2",
        "slug": "omole-phase-2",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1222,
        "parent_id": 149,
        "name": "Ibeshe / Ikorodu",
        "slug": "ikorodu-ibeshe",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1198,
        "parent_id": 135,
        "name": "Epe",
        "slug": "epe-epe",
        "parent_ids": [
          135,
          119
        ],
        "is_popular": false
      },
      {
        "id": 188,
        "parent_id": 176,
        "name": "Offa",
        "slug": "offa",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 1116,
        "parent_id": 173,
        "name": "Palmgroove",
        "slug": "palmgroove",
        "parent_ids": [
          173,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1128,
        "parent_id": 174,
        "name": "Idi Araba",
        "slug": "idi-araba",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1028,
        "parent_id": 149,
        "name": "Ijede / Ikorodu",
        "slug": "ikorodu-ijede",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1054,
        "parent_id": 151,
        "name": "Osborne Foreshore Estate",
        "slug": "osborne-foreshore-estate",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1317,
        "parent_id": 366,
        "name": "Ojoo",
        "slug": "ojoo",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1471,
        "parent_id": 545,
        "name": "Pakuro",
        "slug": "pakuro",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 442,
        "parent_id": 405,
        "name": "Pyakasa",
        "slug": "pyakassa",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1099,
        "parent_id": 165,
        "name": "Williams Estate",
        "slug": "williams-estate",
        "parent_ids": [
          165,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1388,
        "parent_id": 117,
        "name": "Rumuokro",
        "slug": "rumuokro",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1290,
        "parent_id": 360,
        "name": "Tede-Okeogun",
        "slug": "tede-okeogun",
        "parent_ids": [
          360,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1442,
        "parent_id": 1441,
        "name": "Karmo / Jiwa",
        "slug": "jiwa-karmo",
        "parent_ids": [
          1441,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1266,
        "parent_id": 160,
        "name": "Ikate-Elegushi",
        "slug": "ikate-elegushi",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 953,
        "parent_id": 137,
        "name": "Off Lekki-Epe Expressway",
        "slug": "off-lekki-epe-expressway",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1168,
        "parent_id": 405,
        "name": "Masaka",
        "slug": "masaka",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 945,
        "parent_id": 140,
        "name": "Awoyaya",
        "slug": "awoyaya",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1460,
        "parent_id": 405,
        "name": "Wumba",
        "slug": "wumba",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1321,
        "parent_id": 366,
        "name": "Ologuneru",
        "slug": "ologuneru",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1406,
        "parent_id": 117,
        "name": "Wimpy",
        "slug": "wimpy",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1064,
        "parent_id": 128,
        "name": "Ipaja / Ipaja",
        "slug": "ipaja-ipaja",
        "parent_ids": [
          128,
          119
        ],
        "is_popular": false
      },
      {
        "id": 162,
        "parent_id": 119,
        "name": "Mushin",
        "slug": "mushin",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 913,
        "parent_id": 119,
        "name": "Gbagada",
        "slug": "gbagada",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 174,
        "parent_id": 119,
        "name": "Surulere",
        "slug": "surulere",
        "parent_ids": [
          119
        ],
        "is_popular": true
      },
      {
        "id": 95,
        "parent_id": null,
        "name": "Rivers State",
        "slug": "rivers",
        "parent_ids": [],
        "is_popular": true
      },
      {
        "id": 1095,
        "parent_id": 165,
        "name": "Magodo Isheri",
        "slug": "magodo-isheri",
        "parent_ids": [
          165,
          119
        ],
        "is_popular": false
      },
      {
        "id": 956,
        "parent_id": 137,
        "name": "Sangotedo",
        "slug": "sangotedo",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1408,
        "parent_id": 445,
        "name": "Apo Resettlement",
        "slug": "apo-resettlement",
        "parent_ids": [
          445,
          405
        ],
        "is_popular": false
      },
      {
        "id": 957,
        "parent_id": 137,
        "name": "Thomas Estate",
        "slug": "thomas-estate",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1136,
        "parent_id": 174,
        "name": "Ojuelegba",
        "slug": "surule-ojuelegba",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 420,
        "parent_id": 405,
        "name": "Guzape District",
        "slug": "guzape",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1094,
        "parent_id": 165,
        "name": "Isheri North",
        "slug": "isheri-north",
        "parent_ids": [
          165,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1311,
        "parent_id": 366,
        "name": "Jericho",
        "slug": "jericho",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1458,
        "parent_id": 405,
        "name": "Okanje",
        "slug": "okanje",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1429,
        "parent_id": 1426,
        "name": "Karsana",
        "slug": "karsana",
        "parent_ids": [
          1426,
          405
        ],
        "is_popular": false
      },
      {
        "id": 780,
        "parent_id": 765,
        "name": "Udi",
        "slug": "udi-agwu",
        "parent_ids": [
          765
        ],
        "is_popular": true
      },
      {
        "id": 597,
        "parent_id": 580,
        "name": "Sokoto South",
        "slug": "sokoto-south",
        "parent_ids": [
          580
        ],
        "is_popular": true
      },
      {
        "id": 1100,
        "parent_id": 165,
        "name": "Yakoyo/Alagbole",
        "slug": "yakoyo-alagbole",
        "parent_ids": [
          165,
          119
        ],
        "is_popular": false
      },
      {
        "id": 415,
        "parent_id": 405,
        "name": "Gaduwa",
        "slug": "gaduwa",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 426,
        "parent_id": 405,
        "name": "Kabusa",
        "slug": "kabusa",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 686,
        "parent_id": 669,
        "name": "Okene",
        "slug": "okene",
        "parent_ids": [
          669
        ],
        "is_popular": true
      },
      {
        "id": 433,
        "parent_id": 405,
        "name": "Kuchigoro",
        "slug": "kuchigworo",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1011,
        "parent_id": 146,
        "name": "Allen Avenue",
        "slug": "allen-avenue",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 195,
        "parent_id": 192,
        "name": "Bida",
        "slug": "bida",
        "parent_ids": [
          192
        ],
        "is_popular": true
      },
      {
        "id": 175,
        "parent_id": 119,
        "name": "Yaba",
        "slug": "yaba",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1062,
        "parent_id": 128,
        "name": "Baruwa",
        "slug": "baruwa",
        "parent_ids": [
          128,
          119
        ],
        "is_popular": false
      },
      {
        "id": 107,
        "parent_id": 95,
        "name": "Gokana",
        "slug": "gokana",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 48,
        "parent_id": 25,
        "name": "Iwo",
        "slug": "iwo",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 1067,
        "parent_id": 154,
        "name": "Ajao Estate",
        "slug": "ajao-estate",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 151,
        "parent_id": 119,
        "name": "Ikoyi",
        "slug": "ikoyi-obalende",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 488,
        "parent_id": null,
        "name": "Adamawa State",
        "slug": "adamawa",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1248,
        "parent_id": 1247,
        "name": "Ogudu GRA",
        "slug": "ogudu-gra",
        "parent_ids": [
          1247,
          119
        ],
        "is_popular": false
      },
      {
        "id": 117,
        "parent_id": 95,
        "name": "Port-Harcourt",
        "slug": "port-harcourt",
        "parent_ids": [
          95
        ],
        "is_popular": true
      },
      {
        "id": 1472,
        "parent_id": 545,
        "name": "Iseri",
        "slug": "iseri",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 1065,
        "parent_id": 128,
        "name": "Ipaja Road",
        "slug": "ipaja-road",
        "parent_ids": [
          128,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1241,
        "parent_id": 1237,
        "name": "Ifako-Ogba",
        "slug": "ifako-ogba",
        "parent_ids": [
          1237,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1288,
        "parent_id": 359,
        "name": "Ofa Metta",
        "slug": "ofa-metta",
        "parent_ids": [
          359,
          356
        ],
        "is_popular": false
      },
      {
        "id": 153,
        "parent_id": 119,
        "name": "Victoria Island",
        "slug": "victoria-island",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1195,
        "parent_id": 119,
        "name": "Abule Egba",
        "slug": "lagos-abule-egba",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1055,
        "parent_id": 151,
        "name": "Parkview Estate",
        "slug": "parkview-estate",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1299,
        "parent_id": 366,
        "name": "Apata",
        "slug": "apata",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 357,
        "parent_id": 356,
        "name": "Afijio",
        "slug": "afijio",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 165,
        "parent_id": 119,
        "name": "Ojodu",
        "slug": "ojodu",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 364,
        "parent_id": 366,
        "name": "Agodi",
        "slug": "agodi",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 960,
        "parent_id": 124,
        "name": "Dopemu",
        "slug": "dopemu",
        "parent_ids": [
          124,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1091,
        "parent_id": 164,
        "name": "Okokomaiko",
        "slug": "okokomaiko",
        "parent_ids": [
          164,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1090,
        "parent_id": 164,
        "name": "Iba / Ojo",
        "slug": "ojo-iba",
        "parent_ids": [
          164,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1302,
        "parent_id": 366,
        "name": "CHallenge / Ibadan",
        "slug": "ibadan-challenge",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1307,
        "parent_id": 366,
        "name": "Idishin",
        "slug": "idishin",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1111,
        "parent_id": 173,
        "name": "Bariga / Shomolu",
        "slug": "shomolu-bariga",
        "parent_ids": [
          173,
          119
        ],
        "is_popular": false
      },
      {
        "id": 621,
        "parent_id": 604,
        "name": "Sapele",
        "slug": "sapele",
        "parent_ids": [
          604
        ],
        "is_popular": true
      },
      {
        "id": 125,
        "parent_id": 119,
        "name": "Amuwo-Odofin",
        "slug": "amuwo-odofin",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1212,
        "parent_id": 141,
        "name": "Alagbado",
        "slug": "alagbado",
        "parent_ids": [
          141,
          119
        ],
        "is_popular": false
      },
      {
        "id": 944,
        "parent_id": 137,
        "name": "Ajiwe",
        "slug": "ajiwe",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 879,
        "parent_id": 405,
        "name": "Bwari",
        "slug": "bwari",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1204,
        "parent_id": 140,
        "name": "Igando-Oloja",
        "slug": "igando-oloja",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1270,
        "parent_id": 160,
        "name": "Jakande",
        "slug": "jakande",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1183,
        "parent_id": 125,
        "name": "Abule Ado",
        "slug": "abule-ado",
        "parent_ids": [
          125,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1407,
        "parent_id": 117,
        "name": "Woji",
        "slug": "woji",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 227,
        "parent_id": 216,
        "name": "Ohafia",
        "slug": "ohafia",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 1107,
        "parent_id": 171,
        "name": "Ojuwoye",
        "slug": "ojuwoye",
        "parent_ids": [
          171,
          119
        ],
        "is_popular": false
      },
      {
        "id": 412,
        "parent_id": 405,
        "name": "Duboyi",
        "slug": "duboyi",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1035,
        "parent_id": 143,
        "name": "Abaranje",
        "slug": "abaranje",
        "parent_ids": [
          143,
          119
        ],
        "is_popular": false
      },
      {
        "id": 366,
        "parent_id": 356,
        "name": "Ibadan",
        "slug": "ibadan",
        "parent_ids": [
          356
        ],
        "is_popular": true
      },
      {
        "id": 795,
        "parent_id": 791,
        "name": "Ilawe",
        "slug": "ekiti-south-west",
        "parent_ids": [
          791
        ],
        "is_popular": true
      },
      {
        "id": 459,
        "parent_id": 449,
        "name": "Daura",
        "slug": "daura",
        "parent_ids": [
          449
        ],
        "is_popular": true
      },
      {
        "id": 333,
        "parent_id": 329,
        "name": "Ezinihitte Mbaise",
        "slug": "ezinihitte-mbaise",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 987,
        "parent_id": 133,
        "name": "Isheri / Egbe Idimu",
        "slug": "isheri",
        "parent_ids": [
          133,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1118,
        "parent_id": 174,
        "name": "Abraham Adesanya",
        "slug": "abraham-adesanya",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1175,
        "parent_id": 56,
        "name": "Akungba",
        "slug": "akungba",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 1293,
        "parent_id": 361,
        "name": "Egbeda / Egbeda",
        "slug": "egbeda-egbeda",
        "parent_ids": [
          361,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1264,
        "parent_id": 160,
        "name": "Igbo-efon",
        "slug": "igbo-efon",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1029,
        "parent_id": 149,
        "name": "Ikorodu Garage",
        "slug": "ikorodu-garage",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 990,
        "parent_id": 913,
        "name": "Ifako-Gbagada",
        "slug": "ifako-gbagada",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1108,
        "parent_id": 171,
        "name": "Oshodi Expressway",
        "slug": "oshodi-expressway",
        "parent_ids": [
          171,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1207,
        "parent_id": 140,
        "name": "Elerangbe",
        "slug": "elerangbe",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1355,
        "parent_id": 117,
        "name": "Eneka",
        "slug": "eneka",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 959,
        "parent_id": 124,
        "name": "Akowonjo",
        "slug": "akowonjo",
        "parent_ids": [
          124,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1367,
        "parent_id": 117,
        "name": "Oroworukwo",
        "slug": "oroworukwo",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 124,
        "parent_id": 119,
        "name": "Alimosho",
        "slug": "alimosho",
        "parent_ids": [
          119
        ],
        "is_popular": true
      },
      {
        "id": 1034,
        "parent_id": 149,
        "name": "Agbowa",
        "slug": "agbowa",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1354,
        "parent_id": 117,
        "name": "Eliozu",
        "slug": "eliozu",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1208,
        "parent_id": 140,
        "name": "Elemoro",
        "slug": "elemoro",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 389,
        "parent_id": null,
        "name": "Plateau State",
        "slug": "plateau",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 369,
        "parent_id": 356,
        "name": "Ayete",
        "slug": "ibarapa-north",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 1088,
        "parent_id": 164,
        "name": "Ajangbadi",
        "slug": "ajangbadi",
        "parent_ids": [
          164,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1269,
        "parent_id": 160,
        "name": "Ilaje / Lekki",
        "slug": "lekki-ilaje",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 905,
        "parent_id": 156,
        "name": "Kosofe / Kosofe",
        "slug": "kosofe-kosofe",
        "parent_ids": [
          156,
          119
        ],
        "is_popular": false
      },
      {
        "id": 180,
        "parent_id": 176,
        "name": "Ekiti-Kwara",
        "slug": "ekiti-kwara",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 1306,
        "parent_id": 366,
        "name": "Ibadan Polytechnic/University",
        "slug": "ibadan-polytechnic",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 785,
        "parent_id": 782,
        "name": "Kolokuma/Opokuma",
        "slug": "kolokuma",
        "parent_ids": [
          782
        ],
        "is_popular": false
      },
      {
        "id": 127,
        "parent_id": 119,
        "name": "Apapa",
        "slug": "apapa",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 198,
        "parent_id": 192,
        "name": "Chanchaga",
        "slug": "chanchaga",
        "parent_ids": [
          192
        ],
        "is_popular": true
      },
      {
        "id": 1121,
        "parent_id": 174,
        "name": "Aguda / Surulere",
        "slug": "aguda",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 143,
        "parent_id": 119,
        "name": "Ikotun/Igando",
        "slug": "igando-ikotun",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1025,
        "parent_id": 149,
        "name": "Akute Ajuwon",
        "slug": "akute-ajuwon",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 358,
        "parent_id": 356,
        "name": "Akinyele",
        "slug": "akinyele",
        "parent_ids": [
          356
        ],
        "is_popular": true
      },
      {
        "id": 1166,
        "parent_id": 175,
        "name": "Sabo / Yaba",
        "slug": "yaba-sabo",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 875,
        "parent_id": 690,
        "name": "Potiskum",
        "slug": "potiskum",
        "parent_ids": [
          690
        ],
        "is_popular": true
      },
      {
        "id": 897,
        "parent_id": 879,
        "name": "Bwari / Bwari",
        "slug": "bwari-bwari",
        "parent_ids": [
          879,
          405
        ],
        "is_popular": false
      },
      {
        "id": 671,
        "parent_id": 669,
        "name": "Ajaokuta",
        "slug": "ajaokuta",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 1401,
        "parent_id": 117,
        "name": "Ruuodomaya",
        "slug": "ruuodomaya",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 328,
        "parent_id": 307,
        "name": "Oyi",
        "slug": "oyi",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 551,
        "parent_id": 545,
        "name": "Ewekoro",
        "slug": "ewekoro",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 726,
        "parent_id": 723,
        "name": "Bagwai",
        "slug": "bagwai",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 1147,
        "parent_id": 153,
        "name": "Bonny Camp",
        "slug": "bonny-camp",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 728,
        "parent_id": 723,
        "name": "Bichi",
        "slug": "bichi",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 1140,
        "parent_id": 153,
        "name": "1004",
        "slug": "1004",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1189,
        "parent_id": 130,
        "name": "Oko Afo",
        "slug": "oko-afo",
        "parent_ids": [
          130,
          119
        ],
        "is_popular": false
      },
      {
        "id": 955,
        "parent_id": 137,
        "name": "Peninsula Estate",
        "slug": "peninsula-estate",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 231,
        "parent_id": 216,
        "name": "Ukwa",
        "slug": "ukwa",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 653,
        "parent_id": 645,
        "name": "Gwer",
        "slug": "gwer",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 1360,
        "parent_id": 117,
        "name": "Okuru",
        "slug": "okuru",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1000,
        "parent_id": 140,
        "name": "Eleko",
        "slug": "eleko",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 997,
        "parent_id": 913,
        "name": "Soluyi",
        "slug": "soluyi",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 12,
        "parent_id": 1,
        "name": "Gwaram",
        "slug": "gwaram",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 810,
        "parent_id": 808,
        "name": "Afikpo North",
        "slug": "afikpo-north",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 1179,
        "parent_id": 137,
        "name": "Olokonla",
        "slug": "olokonla",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 772,
        "parent_id": 765,
        "name": "Igbo-Eze North",
        "slug": "igbo-eze-south",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 1297,
        "parent_id": 366,
        "name": "Alakia",
        "slug": "alakia",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 992,
        "parent_id": 913,
        "name": "Millenuim/UPS",
        "slug": "millenuim-ups",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1045,
        "parent_id": 151,
        "name": "Banana Island",
        "slug": "banana-island",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 612,
        "parent_id": 604,
        "name": "Ika South",
        "slug": "ika-south",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 822,
        "parent_id": 821,
        "name": "Abadam",
        "slug": "abadam",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 1049,
        "parent_id": 151,
        "name": "Gerard Road",
        "slug": "gerard-road",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 76,
        "parent_id": null,
        "name": "Edo State",
        "slug": "edo",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1051,
        "parent_id": 151,
        "name": "MacPherson",
        "slug": "macpherson",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 609,
        "parent_id": 604,
        "name": "Ethiope East",
        "slug": "ethiope-east",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 1273,
        "parent_id": 160,
        "name": "Lekki Free Trade Zone",
        "slug": "lekki-free-trade-zone",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 988,
        "parent_id": 133,
        "name": "Pap",
        "slug": "pap",
        "parent_ids": [
          133,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1423,
        "parent_id": 417,
        "name": "Area 9",
        "slug": "area-9",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 121,
        "parent_id": 119,
        "name": "Agboyi/Ketu",
        "slug": "agboyi-ketu",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 149,
        "parent_id": 119,
        "name": "Ikorodu",
        "slug": "ikorodu",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 447,
        "parent_id": 405,
        "name": "Wuse",
        "slug": "wuse",
        "parent_ids": [
          405
        ],
        "is_popular": true
      },
      {
        "id": 154,
        "parent_id": 119,
        "name": "Isolo",
        "slug": "isolo",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 475,
        "parent_id": 449,
        "name": "Zango",
        "slug": "zango",
        "parent_ids": [
          449
        ],
        "is_popular": true
      },
      {
        "id": 1416,
        "parent_id": 417,
        "name": "Area 2",
        "slug": "area-2",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1312,
        "parent_id": 366,
        "name": "Mapo",
        "slug": "mapo",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1393,
        "parent_id": 117,
        "name": "Rumuomoi",
        "slug": "rumuomoi",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1409,
        "parent_id": 445,
        "name": "Guze",
        "slug": "guze",
        "parent_ids": [
          445,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1444,
        "parent_id": 1441,
        "name": "Hulumi",
        "slug": "hulumi",
        "parent_ids": [
          1441,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1284,
        "parent_id": 357,
        "name": "Ilora",
        "slug": "ilora",
        "parent_ids": [
          357,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1447,
        "parent_id": 1441,
        "name": "Tungan",
        "slug": "tungan",
        "parent_ids": [
          1441,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1191,
        "parent_id": 134,
        "name": "Ife-Odan",
        "slug": "ife-odan",
        "parent_ids": [
          134,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1419,
        "parent_id": 417,
        "name": "Area 5",
        "slug": "area-5",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1396,
        "parent_id": 117,
        "name": "Rumuoto",
        "slug": "rumuoto",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1012,
        "parent_id": 146,
        "name": "Awolowo Way",
        "slug": "awolowo-way",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1018,
        "parent_id": 146,
        "name": "Oba Akran",
        "slug": "oba-akran",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1339,
        "parent_id": 384,
        "name": "Kosobo",
        "slug": "kosobo",
        "parent_ids": [
          384,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1372,
        "parent_id": 117,
        "name": "Rumuahalu",
        "slug": "rumuahalu",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 386,
        "parent_id": 356,
        "name": "Saki East",
        "slug": "saki-east",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 137,
        "parent_id": 119,
        "name": "Ajah",
        "slug": "ajah",
        "parent_ids": [
          119
        ],
        "is_popular": true
      },
      {
        "id": 971,
        "parent_id": 125,
        "name": "Satellite Town",
        "slug": "satellite-town",
        "parent_ids": [
          125,
          119
        ],
        "is_popular": false
      },
      {
        "id": 259,
        "parent_id": 235,
        "name": "Oron",
        "slug": "oron",
        "parent_ids": [
          235
        ],
        "is_popular": true
      },
      {
        "id": 324,
        "parent_id": 307,
        "name": "Onitsha",
        "slug": "onitsha-north",
        "parent_ids": [
          307
        ],
        "is_popular": true
      },
      {
        "id": 1021,
        "parent_id": 146,
        "name": "Oregun",
        "slug": "oregun",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1144,
        "parent_id": 153,
        "name": "Ahmadu Bello Way",
        "slug": "ahmadu-bello-way",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1319,
        "parent_id": 366,
        "name": "Old Bodija",
        "slug": "old-bodija",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1242,
        "parent_id": 1237,
        "name": "Ogba Bus-Stop",
        "slug": "ogba-bus-stop",
        "parent_ids": [
          1237,
          119
        ],
        "is_popular": false
      },
      {
        "id": 292,
        "parent_id": 288,
        "name": "Bakassi",
        "slug": "bakassi",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 134,
        "parent_id": 119,
        "name": "Ejigbo",
        "slug": "ejigbo",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 216,
        "parent_id": null,
        "name": "Abia State",
        "slug": "abia",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 766,
        "parent_id": 765,
        "name": "Aninri",
        "slug": "aninri",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 170,
        "parent_id": 119,
        "name": "Orile",
        "slug": "orile",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1122,
        "parent_id": 174,
        "name": "Alaka Estate",
        "slug": "alaka-estate",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 936,
        "parent_id": 122,
        "name": "Mulero",
        "slug": "mulero",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 133,
        "parent_id": 119,
        "name": "Egbe/Idimu",
        "slug": "egbe-idimu",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 377,
        "parent_id": 356,
        "name": "Ogbomosho South",
        "slug": "ogbomosho-south",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 918,
        "parent_id": 329,
        "name": "Ezinihitte",
        "slug": "ezinihitte",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 986,
        "parent_id": 133,
        "name": "Idimu",
        "slug": "idimu",
        "parent_ids": [
          133,
          119
        ],
        "is_popular": false
      },
      {
        "id": 363,
        "parent_id": 366,
        "name": "Ajibode",
        "slug": "ajibode",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1437,
        "parent_id": 425,
        "name": "Phase 2 / Jikwoyi",
        "slug": "jikwoyi-phase-2",
        "parent_ids": [
          425,
          405
        ],
        "is_popular": false
      },
      {
        "id": 379,
        "parent_id": 356,
        "name": "Olorunsogo",
        "slug": "olorunsogo",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 373,
        "parent_id": 356,
        "name": "Itesiwaju",
        "slug": "itesiwaju",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 335,
        "parent_id": 329,
        "name": "Ideato South",
        "slug": "ideato-south",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 1410,
        "parent_id": 445,
        "name": "Wasa",
        "slug": "wasa",
        "parent_ids": [
          445,
          405
        ],
        "is_popular": false
      },
      {
        "id": 88,
        "parent_id": 76,
        "name": "Benin City",
        "slug": "oredo",
        "parent_ids": [
          76
        ],
        "is_popular": true
      },
      {
        "id": 1461,
        "parent_id": 447,
        "name": "Zone 1 / Wuse",
        "slug": "wuse-zone-1",
        "parent_ids": [
          447,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1368,
        "parent_id": 117,
        "name": "Aba Expressway",
        "slug": "aba-expressway",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 446,
        "parent_id": 405,
        "name": "Wuse 2",
        "slug": "wuse-ii",
        "parent_ids": [
          405
        ],
        "is_popular": true
      },
      {
        "id": 422,
        "parent_id": 405,
        "name": "Gwarinpa",
        "slug": "gwarinpa",
        "parent_ids": [
          405
        ],
        "is_popular": true
      },
      {
        "id": 407,
        "parent_id": 405,
        "name": "Central Business District",
        "slug": "central-business-district",
        "parent_ids": [
          405
        ],
        "is_popular": true
      },
      {
        "id": 604,
        "parent_id": null,
        "name": "Delta State",
        "slug": "delta",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1178,
        "parent_id": 137,
        "name": "Oke Ira / Ajah",
        "slug": "oke-ira",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1015,
        "parent_id": 146,
        "name": "Mangoro",
        "slug": "mangoro",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 979,
        "parent_id": 127,
        "name": "Olodi Apapa",
        "slug": "olodi-apapa",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 122,
        "parent_id": 119,
        "name": "Agege",
        "slug": "agege",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 416,
        "parent_id": 405,
        "name": "Galadimawa",
        "slug": "galadimawa",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 584,
        "parent_id": 580,
        "name": "Gada",
        "slug": "gada",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 529,
        "parent_id": 526,
        "name": "Bogoro",
        "slug": "bogoro",
        "parent_ids": [
          526
        ],
        "is_popular": true
      },
      {
        "id": 1381,
        "parent_id": 117,
        "name": "Rumuigbo",
        "slug": "rumuigbo",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 129,
        "parent_id": 130,
        "name": "Badagry / Badagry",
        "slug": "badagry-badagry",
        "parent_ids": [
          130,
          119
        ],
        "is_popular": false
      },
      {
        "id": 45,
        "parent_id": 25,
        "name": "Irepodun-Osun",
        "slug": "irepodun-osun",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 629,
        "parent_id": 604,
        "name": "Warri",
        "slug": "warri-south",
        "parent_ids": [
          604
        ],
        "is_popular": true
      },
      {
        "id": 932,
        "parent_id": 122,
        "name": "Iju",
        "slug": "iju",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 329,
        "parent_id": null,
        "name": "Imo State",
        "slug": "imo",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 585,
        "parent_id": 580,
        "name": "Gwadabawa",
        "slug": "gwadabawa",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 140,
        "parent_id": 119,
        "name": "Ibeju",
        "slug": "ibeju",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1434,
        "parent_id": 422,
        "name": "Dape",
        "slug": "dape",
        "parent_ids": [
          422,
          405
        ],
        "is_popular": false
      },
      {
        "id": 419,
        "parent_id": 405,
        "name": "Gudu",
        "slug": "gudu",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 727,
        "parent_id": 723,
        "name": "Bebeji",
        "slug": "bebeji",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 356,
        "parent_id": null,
        "name": "Oyo State",
        "slug": "oyo",
        "parent_ids": [],
        "is_popular": true
      },
      {
        "id": 353,
        "parent_id": 329,
        "name": "Owerri",
        "slug": "owerri-municipal",
        "parent_ids": [
          329
        ],
        "is_popular": true
      },
      {
        "id": 128,
        "parent_id": 119,
        "name": "Ipaja",
        "slug": "ayobo-ipaja",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 943,
        "parent_id": 137,
        "name": "Ado / Ajah",
        "slug": "ado-ajah",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 704,
        "parent_id": null,
        "name": "Kebbi State",
        "slug": "kebbi",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 444,
        "parent_id": 405,
        "name": "Utako",
        "slug": "utako",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 173,
        "parent_id": 119,
        "name": "Shomolu",
        "slug": "shomolu",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1180,
        "parent_id": 124,
        "name": "Akesan",
        "slug": "akesan",
        "parent_ids": [
          124,
          119
        ],
        "is_popular": false
      },
      {
        "id": 291,
        "parent_id": 288,
        "name": "Akpabuyo",
        "slug": "akpabuyo",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 141,
        "parent_id": 119,
        "name": "Ifako-Ijaiye",
        "slug": "ifako-ijaiye",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1124,
        "parent_id": 174,
        "name": "Bode Thomas",
        "slug": "bode-thomas",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1206,
        "parent_id": 140,
        "name": "Bogije",
        "slug": "bogije",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1205,
        "parent_id": 140,
        "name": "Aiyeteju",
        "slug": "aiyeteju",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 240,
        "parent_id": 235,
        "name": "Essien Udim",
        "slug": "essien-udim",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 435,
        "parent_id": 405,
        "name": "Lugbe District",
        "slug": "lugbe",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 998,
        "parent_id": 140,
        "name": "Akodo",
        "slug": "akodo",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 345,
        "parent_id": 329,
        "name": "Obowo",
        "slug": "obowo",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 307,
        "parent_id": null,
        "name": "Anambra State",
        "slug": "anambra",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 171,
        "parent_id": 119,
        "name": "Oshodi",
        "slug": "oshodi",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 714,
        "parent_id": 704,
        "name": "Jega",
        "slug": "jega",
        "parent_ids": [
          704
        ],
        "is_popular": true
      },
      {
        "id": 1143,
        "parent_id": 153,
        "name": "Adeola Odeku",
        "slug": "adeola-odeku",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1164,
        "parent_id": 175,
        "name": "Jibowu",
        "slug": "jibowu",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1431,
        "parent_id": 421,
        "name": "Kutunku",
        "slug": "kutunku",
        "parent_ids": [
          421,
          405
        ],
        "is_popular": false
      },
      {
        "id": 190,
        "parent_id": 176,
        "name": "Oyun",
        "slug": "oyun",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 1117,
        "parent_id": 173,
        "name": "Shomolu / Shomolu",
        "slug": "shomolu-2",
        "parent_ids": [
          173,
          119
        ],
        "is_popular": false
      },
      {
        "id": 800,
        "parent_id": 791,
        "name": "Ijero",
        "slug": "ijero",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 510,
        "parent_id": null,
        "name": "Zamfara State",
        "slug": "zamfara",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1223,
        "parent_id": 149,
        "name": "Isiu",
        "slug": "isiu",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 737,
        "parent_id": 723,
        "name": "Garko",
        "slug": "garko",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 545,
        "parent_id": null,
        "name": "Ogun State",
        "slug": "ogun",
        "parent_ids": [],
        "is_popular": true
      },
      {
        "id": 526,
        "parent_id": null,
        "name": "Bauchi State",
        "slug": "bauchi",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 63,
        "parent_id": 56,
        "name": "Ese-Odo",
        "slug": "ese-odo",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 566,
        "parent_id": null,
        "name": "Nasarawa State",
        "slug": "nassarawa",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1151,
        "parent_id": 153,
        "name": "Ligali Ayorinde",
        "slug": "ligali-ayorinde",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1133,
        "parent_id": 174,
        "name": "Lawanson",
        "slug": "lawanson",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 656,
        "parent_id": 645,
        "name": "Kwande",
        "slug": "kwande",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 156,
        "parent_id": 119,
        "name": "Kosofe",
        "slug": "kosofe",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 423,
        "parent_id": 405,
        "name": "Jabi",
        "slug": "jabi",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 163,
        "parent_id": 119,
        "name": "Ilupeju",
        "slug": "ilupeju",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 418,
        "parent_id": 405,
        "name": "Garki 2",
        "slug": "garki-ii",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1465,
        "parent_id": 447,
        "name": "Zone 5 / Wuse",
        "slug": "wuse-zone-5",
        "parent_ids": [
          447,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1277,
        "parent_id": 160,
        "name": "Ologolo",
        "slug": "ologolo",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 676,
        "parent_id": 669,
        "name": "Idah",
        "slug": "idah",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 110,
        "parent_id": 95,
        "name": "Obio-Akpor",
        "slug": "obio-akpor",
        "parent_ids": [
          95
        ],
        "is_popular": true
      },
      {
        "id": 406,
        "parent_id": 405,
        "name": "Asokoro",
        "slug": "asokoro",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 411,
        "parent_id": 405,
        "name": "Dei-Dei",
        "slug": "dei-dei",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1236,
        "parent_id": 162,
        "name": "CHallenge / Mushin",
        "slug": "mushin-challenge",
        "parent_ids": [
          162,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1237,
        "parent_id": 119,
        "name": "Ogba",
        "slug": "ogba",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1145,
        "parent_id": 153,
        "name": "Akin Adesola",
        "slug": "akin-adesola",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1123,
        "parent_id": 174,
        "name": "Alaka/Iponri",
        "slug": "alaka-iponri",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1139,
        "parent_id": 174,
        "name": "Western Avenue",
        "slug": "western-avenue",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1289,
        "parent_id": 359,
        "name": "Atiba / Atiba",
        "slug": "atiba-atiba",
        "parent_ids": [
          359,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1405,
        "parent_id": 117,
        "name": "Waterlines",
        "slug": "waterlines",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 779,
        "parent_id": 765,
        "name": "Udenu",
        "slug": "udenu",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 645,
        "parent_id": null,
        "name": "Benue State",
        "slug": "benue",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 804,
        "parent_id": 791,
        "name": "Irepodun/Ifelodun",
        "slug": "irepodun-ifelodun",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 1032,
        "parent_id": 149,
        "name": "Jumofak",
        "slug": "jumofak",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1375,
        "parent_id": 117,
        "name": "Rumuekini",
        "slug": "rumuekini",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 630,
        "parent_id": null,
        "name": "Taraba State",
        "slug": "taraba",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1024,
        "parent_id": 149,
        "name": "Agric",
        "slug": "agric",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1022,
        "parent_id": 146,
        "name": "Toyin Street",
        "slug": "toyin-street",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 506,
        "parent_id": 488,
        "name": "Song",
        "slug": "song",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 1031,
        "parent_id": 149,
        "name": "Isawo",
        "slug": "isawo",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 793,
        "parent_id": 791,
        "name": "Efon",
        "slug": "efon",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 1023,
        "parent_id": 146,
        "name": "Unity Road",
        "slug": "unity-road",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 750,
        "parent_id": 723,
        "name": "Kura",
        "slug": "kura",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 1069,
        "parent_id": 154,
        "name": "Ire Akari",
        "slug": "isolo-ire-akari",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1384,
        "parent_id": 117,
        "name": "Rumuodara",
        "slug": "rumuodara",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1220,
        "parent_id": 149,
        "name": "Erunwe",
        "slug": "erunwe",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1186,
        "parent_id": 130,
        "name": "Aradagun",
        "slug": "aradagun",
        "parent_ids": [
          130,
          119
        ],
        "is_popular": false
      },
      {
        "id": 502,
        "parent_id": 488,
        "name": "Mubi North",
        "slug": "mubi-north",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 55,
        "parent_id": 25,
        "name": "Osogbo",
        "slug": "osogbo",
        "parent_ids": [
          25
        ],
        "is_popular": true
      },
      {
        "id": 884,
        "parent_id": 307,
        "name": "Aghamelu",
        "slug": "aghamelu",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 47,
        "parent_id": 25,
        "name": "Isokan",
        "slug": "isokan",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 1345,
        "parent_id": 117,
        "name": "D-Line",
        "slug": "d-line",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 964,
        "parent_id": 125,
        "name": "Agboju",
        "slug": "agboju",
        "parent_ids": [
          125,
          119
        ],
        "is_popular": false
      },
      {
        "id": 815,
        "parent_id": 808,
        "name": "Ishielu",
        "slug": "ishielu",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 669,
        "parent_id": null,
        "name": "Kogi State",
        "slug": "kogi",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 787,
        "parent_id": 782,
        "name": "Ogbia",
        "slug": "ogbia",
        "parent_ids": [
          782
        ],
        "is_popular": false
      },
      {
        "id": 1210,
        "parent_id": 140,
        "name": "Orimedu",
        "slug": "orimedu",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1044,
        "parent_id": 151,
        "name": "Awolowo Road",
        "slug": "awolowo-road",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 120,
        "parent_id": 141,
        "name": "Agbado",
        "slug": "agbado",
        "parent_ids": [
          141,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1019,
        "parent_id": 146,
        "name": "Obafemi Awolowo Way",
        "slug": "obafemi-awolowo-way",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1106,
        "parent_id": 171,
        "name": "Mafoluku",
        "slug": "mafoluku",
        "parent_ids": [
          171,
          119
        ],
        "is_popular": false
      },
      {
        "id": 383,
        "parent_id": 356,
        "name": "Ori Ire",
        "slug": "ori-ire",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 1296,
        "parent_id": 366,
        "name": "Akobo",
        "slug": "akobo",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 942,
        "parent_id": 137,
        "name": "Abraham Adesanya Estate",
        "slug": "abraham-adesanya-estate",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 938,
        "parent_id": 122,
        "name": "Oko-Oba",
        "slug": "oko-oba",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 933,
        "parent_id": 122,
        "name": "Iju-Ishaga",
        "slug": "iju-ishaga",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 930,
        "parent_id": 122,
        "name": "Fagba",
        "slug": "fagba",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 940,
        "parent_id": 122,
        "name": "Pen Cinema",
        "slug": "pen-cinema",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1074,
        "parent_id": 156,
        "name": "Mile 12",
        "slug": "mile-12",
        "parent_ids": [
          156,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1157,
        "parent_id": 175,
        "name": "Abule-Oja",
        "slug": "abule-oja",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 889,
        "parent_id": 821,
        "name": "Konduga",
        "slug": "konduga",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 723,
        "parent_id": null,
        "name": "Kano State",
        "slug": "kano",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1247,
        "parent_id": 119,
        "name": "Ogudu",
        "slug": "ogudu",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 249,
        "parent_id": 235,
        "name": "Ikot Ekpene",
        "slug": "ikot-ekpene",
        "parent_ids": [
          235
        ],
        "is_popular": true
      },
      {
        "id": 1137,
        "parent_id": 174,
        "name": "Orile-Iganmu",
        "slug": "orile-iganmu",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 603,
        "parent_id": 580,
        "name": "Yabo",
        "slug": "yabo",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 1235,
        "parent_id": 168,
        "name": "Onigbongbo",
        "slug": "onigbongbo",
        "parent_ids": [
          168,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1361,
        "parent_id": 117,
        "name": "Old GRA",
        "slug": "old-gra",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1131,
        "parent_id": 174,
        "name": "Itire",
        "slug": "itire",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1190,
        "parent_id": 134,
        "name": "Ejigbo / Ejigbo",
        "slug": "ejigbo-ejigbo",
        "parent_ids": [
          134,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1250,
        "parent_id": 912,
        "name": "New Garage / Ojota",
        "slug": "ojota-new-garage",
        "parent_ids": [
          912,
          119
        ],
        "is_popular": false
      },
      {
        "id": 883,
        "parent_id": 235,
        "name": "Uquo-Ibeno",
        "slug": "uquo-ibeno",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 70,
        "parent_id": 56,
        "name": "Okeigbo",
        "slug": "okeigbo",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 46,
        "parent_id": 25,
        "name": "Irewole",
        "slug": "irewole",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 263,
        "parent_id": 235,
        "name": "Urue-Offong/Oruko",
        "slug": "urue-offong",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 974,
        "parent_id": 127,
        "name": "Apapa Road",
        "slug": "apapa-road",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 973,
        "parent_id": 127,
        "name": "Apapa G.R.A",
        "slug": "apapa-gra",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 397,
        "parent_id": 389,
        "name": "Kanke",
        "slug": "kanke",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 911,
        "parent_id": 119,
        "name": "Magodo",
        "slug": "magodo",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 912,
        "parent_id": 119,
        "name": "Ojota",
        "slug": "ojota",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 806,
        "parent_id": 791,
        "name": "Moba",
        "slug": "moba",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 976,
        "parent_id": 127,
        "name": "Kirikiri",
        "slug": "kirikiri",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 978,
        "parent_id": 127,
        "name": "Liverpool",
        "slug": "liverpool",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1374,
        "parent_id": 117,
        "name": "Rumuduru",
        "slug": "rumuduru",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1332,
        "parent_id": 366,
        "name": "Yemetu",
        "slug": "yemetu",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 975,
        "parent_id": 127,
        "name": "Ijora",
        "slug": "ijora",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1334,
        "parent_id": 369,
        "name": "Igangan",
        "slug": "igangan",
        "parent_ids": [
          369,
          356
        ],
        "is_popular": false
      },
      {
        "id": 182,
        "parent_id": 176,
        "name": "Ilorin East",
        "slug": "ilorin-east",
        "parent_ids": [
          176
        ],
        "is_popular": true
      },
      {
        "id": 413,
        "parent_id": 405,
        "name": "Durumi",
        "slug": "durumi",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1192,
        "parent_id": 134,
        "name": "Ilawo",
        "slug": "ilawo",
        "parent_ids": [
          134,
          119
        ],
        "is_popular": false
      },
      {
        "id": 839,
        "parent_id": 782,
        "name": "Yenagoa",
        "slug": "yenagoa",
        "parent_ids": [
          782
        ],
        "is_popular": true
      },
      {
        "id": 1252,
        "parent_id": 173,
        "name": "Oworonshoki / Shomolu",
        "slug": "shomolu-oworonshoki",
        "parent_ids": [
          173,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1283,
        "parent_id": 357,
        "name": "Fiditi",
        "slug": "fiditi",
        "parent_ids": [
          357,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1285,
        "parent_id": 357,
        "name": "Iware",
        "slug": "iware",
        "parent_ids": [
          357,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1315,
        "parent_id": 366,
        "name": "Odo Oba",
        "slug": "odo-oba",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1325,
        "parent_id": 366,
        "name": "Pdinjo",
        "slug": "pdinjo",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1335,
        "parent_id": 369,
        "name": "Ayete / Ayete",
        "slug": "ayete-ayete",
        "parent_ids": [
          369,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1030,
        "parent_id": 149,
        "name": "Ipakodo",
        "slug": "ipakodo",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 914,
        "parent_id": 160,
        "name": "Lekki Phase 1",
        "slug": "lekki-phase",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 877,
        "parent_id": 405,
        "name": "Kuje",
        "slug": "kuje",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1162,
        "parent_id": 175,
        "name": "Fola Agoro",
        "slug": "fola-agoro",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1341,
        "parent_id": 117,
        "name": "Abuloma",
        "slug": "abuloma",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1070,
        "parent_id": 154,
        "name": "Kogberegbe Street",
        "slug": "kogberegbe-street",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1327,
        "parent_id": 366,
        "name": "Sabo / Ibadan",
        "slug": "ibadan-sabo",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 626,
        "parent_id": 604,
        "name": "Uvwie",
        "slug": "uvwie",
        "parent_ids": [
          604
        ],
        "is_popular": true
      },
      {
        "id": 1438,
        "parent_id": 425,
        "name": "Phase 3 / Jikwoyi",
        "slug": "jikwoyi-phase-3",
        "parent_ids": [
          425,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1435,
        "parent_id": 422,
        "name": "Life Camp",
        "slug": "life-camp",
        "parent_ids": [
          422,
          405
        ],
        "is_popular": false
      },
      {
        "id": 217,
        "parent_id": 216,
        "name": "Aba North",
        "slug": "aba-north",
        "parent_ids": [
          216
        ],
        "is_popular": true
      },
      {
        "id": 1412,
        "parent_id": 879,
        "name": "Kuduru",
        "slug": "kuduru",
        "parent_ids": [
          879,
          405
        ],
        "is_popular": false
      },
      {
        "id": 518,
        "parent_id": 510,
        "name": "Kaura Namoda",
        "slug": "kaura-namoda",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 1356,
        "parent_id": 117,
        "name": "GRA Phase 1 / Port-Harcourt",
        "slug": "ph-gra-phase-1",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1120,
        "parent_id": 174,
        "name": "Adeniran Ogunsanya",
        "slug": "adeniran-ogunsanya",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1417,
        "parent_id": 417,
        "name": "Area 3",
        "slug": "area-3",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1352,
        "parent_id": 117,
        "name": "Elelenwo",
        "slug": "elelenwo",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 552,
        "parent_id": 545,
        "name": "Ifo",
        "slug": "ifo",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 970,
        "parent_id": 125,
        "name": "Ibeshe / Amuwo-Odofin",
        "slug": "ibeshe",
        "parent_ids": [
          125,
          119
        ],
        "is_popular": false
      },
      {
        "id": 185,
        "parent_id": 176,
        "name": "Isin",
        "slug": "isin",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 1322,
        "parent_id": 366,
        "name": "Olomi",
        "slug": "olomi",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1101,
        "parent_id": 912,
        "name": "Ogudu Road",
        "slug": "ogudu-road",
        "parent_ids": [
          912,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1098,
        "parent_id": 165,
        "name": "Unity Estate",
        "slug": "unity-estate",
        "parent_ids": [
          165,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1450,
        "parent_id": 426,
        "name": "Burum",
        "slug": "burum",
        "parent_ids": [
          426,
          405
        ],
        "is_popular": false
      },
      {
        "id": 130,
        "parent_id": 119,
        "name": "Badagry",
        "slug": "badagry",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 31,
        "parent_id": 25,
        "name": "Boripe",
        "slug": "boripe",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 214,
        "parent_id": 192,
        "name": "Tafa",
        "slug": "tafa",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 1230,
        "parent_id": 154,
        "name": "Iyana Isolo",
        "slug": "iyana-isolo",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1344,
        "parent_id": 117,
        "name": "Choba",
        "slug": "choba",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 594,
        "parent_id": 580,
        "name": "Shagari",
        "slug": "shagari",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 1082,
        "parent_id": 168,
        "name": "LSDPC Maryland Estate",
        "slug": "lsdpc-maryland-estate",
        "parent_ids": [
          168,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1047,
        "parent_id": 151,
        "name": "Dolphin Estate",
        "slug": "dolphin-estate",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 27,
        "parent_id": 25,
        "name": "Aiyedire",
        "slug": "aiyedire",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 1340,
        "parent_id": 384,
        "name": "Oyo / Oyo",
        "slug": "oyo-oyo",
        "parent_ids": [
          384,
          356
        ],
        "is_popular": false
      },
      {
        "id": 525,
        "parent_id": 510,
        "name": "Zurmi",
        "slug": "zurmi",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 765,
        "parent_id": null,
        "name": "Enugu State",
        "slug": "enugu",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1112,
        "parent_id": 173,
        "name": "Fadeyi",
        "slug": "fadeyi",
        "parent_ids": [
          173,
          119
        ],
        "is_popular": false
      },
      {
        "id": 168,
        "parent_id": 119,
        "name": "Maryland",
        "slug": "maryland",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 321,
        "parent_id": 307,
        "name": "Nnewi",
        "slug": "nnewi",
        "parent_ids": [
          307
        ],
        "is_popular": true
      },
      {
        "id": 429,
        "parent_id": 405,
        "name": "Karu",
        "slug": "karu",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1428,
        "parent_id": 1426,
        "name": "Kagini",
        "slug": "kagini",
        "parent_ids": [
          1426,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1475,
        "parent_id": 156,
        "name": "Erunkan",
        "slug": "erunkan",
        "parent_ids": [
          156,
          119
        ],
        "is_popular": false
      },
      {
        "id": 768,
        "parent_id": 765,
        "name": "Enugu",
        "slug": "enugu-north",
        "parent_ids": [
          765
        ],
        "is_popular": true
      },
      {
        "id": 432,
        "parent_id": 405,
        "name": "Kubwa",
        "slug": "kubwa",
        "parent_ids": [
          405
        ],
        "is_popular": true
      },
      {
        "id": 1385,
        "parent_id": 117,
        "name": "Rumuogba",
        "slug": "rumuogba",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1397,
        "parent_id": 117,
        "name": "Rumurolu",
        "slug": "rumurolu",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 361,
        "parent_id": 356,
        "name": "Egbeda",
        "slug": "egbeda",
        "parent_ids": [
          356
        ],
        "is_popular": true
      },
      {
        "id": 1109,
        "parent_id": 171,
        "name": "Shogunle",
        "slug": "shogunle",
        "parent_ids": [
          171,
          119
        ],
        "is_popular": false
      },
      {
        "id": 927,
        "parent_id": 122,
        "name": "Agbotikuyo",
        "slug": "agbotikuyo",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 745,
        "parent_id": 723,
        "name": "Karaye",
        "slug": "karaye",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 991,
        "parent_id": 913,
        "name": "Medina",
        "slug": "medina",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 950,
        "parent_id": 137,
        "name": "Graceland Estate",
        "slug": "graceland-estate",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1156,
        "parent_id": 175,
        "name": "Abule-Ijesha",
        "slug": "abule-ijesha",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 36,
        "parent_id": 25,
        "name": "Ife",
        "slug": "ife",
        "parent_ids": [
          25
        ],
        "is_popular": true
      },
      {
        "id": 548,
        "parent_id": 545,
        "name": "Ado-Odo/Ota",
        "slug": "ado-odo-ota",
        "parent_ids": [
          545
        ],
        "is_popular": true
      },
      {
        "id": 1292,
        "parent_id": 361,
        "name": "Oluwo",
        "slug": "oluwo",
        "parent_ids": [
          361,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1342,
        "parent_id": 117,
        "name": "Amadi-Ama",
        "slug": "amadi-ama",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 744,
        "parent_id": 723,
        "name": "Kano Municipal",
        "slug": "kano-municipal",
        "parent_ids": [
          723
        ],
        "is_popular": true
      },
      {
        "id": 448,
        "parent_id": 405,
        "name": "Wuye",
        "slug": "wuye",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 218,
        "parent_id": 216,
        "name": "Aba South",
        "slug": "aba-south",
        "parent_ids": [
          216
        ],
        "is_popular": true
      },
      {
        "id": 1333,
        "parent_id": 369,
        "name": "Tapa",
        "slug": "tapa",
        "parent_ids": [
          369,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1418,
        "parent_id": 417,
        "name": "Area 4",
        "slug": "area-4",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1227,
        "parent_id": 154,
        "name": "Ago Palace",
        "slug": "ago-palace",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1130,
        "parent_id": 174,
        "name": "Iponri",
        "slug": "iponri",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1078,
        "parent_id": 158,
        "name": "Marina",
        "slug": "marina",
        "parent_ids": [
          158,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1446,
        "parent_id": 1441,
        "name": "Paipe",
        "slug": "paipe",
        "parent_ids": [
          1441,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1414,
        "parent_id": 879,
        "name": "Zango / Bwari",
        "slug": "bwari-zango",
        "parent_ids": [
          879,
          405
        ],
        "is_popular": false
      },
      {
        "id": 380,
        "parent_id": 356,
        "name": "Oluyole",
        "slug": "oluyole",
        "parent_ids": [
          356
        ],
        "is_popular": true
      },
      {
        "id": 1259,
        "parent_id": 175,
        "name": "Oyingbo",
        "slug": "oyingbo",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1348,
        "parent_id": 117,
        "name": "Diobu Mile 3",
        "slug": "diobu-mile-3",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 906,
        "parent_id": 669,
        "name": "Olamaboro",
        "slug": "olamaboro",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 318,
        "parent_id": 307,
        "name": "Idemili",
        "slug": "idemili",
        "parent_ids": [
          307
        ],
        "is_popular": true
      },
      {
        "id": 996,
        "parent_id": 913,
        "name": "Phase 2",
        "slug": "phase-2",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1138,
        "parent_id": 174,
        "name": "Randle Avenue",
        "slug": "randle-avenue",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1391,
        "parent_id": 117,
        "name": "Rumuola",
        "slug": "rumuola",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 40,
        "parent_id": 25,
        "name": "Ifedayo",
        "slug": "ifedayo",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 1167,
        "parent_id": 175,
        "name": "Tejuosho",
        "slug": "tejuosho",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 183,
        "parent_id": 176,
        "name": "Ilorin West",
        "slug": "ilorin-west",
        "parent_ids": [
          176
        ],
        "is_popular": true
      },
      {
        "id": 288,
        "parent_id": null,
        "name": "Cross River State",
        "slug": "cross-river",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1256,
        "parent_id": 119,
        "name": "Tarkwa Bay Island",
        "slug": "tarkwa-bay-island",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 104,
        "parent_id": 95,
        "name": "Eleme",
        "slug": "eleme",
        "parent_ids": [
          95
        ],
        "is_popular": true
      },
      {
        "id": 439,
        "parent_id": 405,
        "name": "Mbora",
        "slug": "nbora",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 869,
        "parent_id": 356,
        "name": "Ogbomosho North",
        "slug": "ogbomosho-north",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 1173,
        "parent_id": 405,
        "name": "Orozo",
        "slug": "orozo",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1445,
        "parent_id": 1441,
        "name": "Idu",
        "slug": "idu",
        "parent_ids": [
          1441,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1257,
        "parent_id": 175,
        "name": "Constain",
        "slug": "constain",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1197,
        "parent_id": 119,
        "name": "Eko Atlantic",
        "slug": "eko-atlantic",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 1214,
        "parent_id": 119,
        "name": "Ilashe",
        "slug": "ilashe",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 661,
        "parent_id": 645,
        "name": "Ohimini",
        "slug": "ohimini",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 1265,
        "parent_id": 160,
        "name": "Ikate",
        "slug": "ikate",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1174,
        "parent_id": 405,
        "name": "Zuba",
        "slug": "zuba",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 782,
        "parent_id": null,
        "name": "Bayelsa State",
        "slug": "bayelsa",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 414,
        "parent_id": 405,
        "name": "Dutse-Alhaji",
        "slug": "dutse",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 427,
        "parent_id": 405,
        "name": "Kado",
        "slug": "kado",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1169,
        "parent_id": 405,
        "name": "Idu Industrial",
        "slug": "idu-industrial",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 192,
        "parent_id": null,
        "name": "Niger State",
        "slug": "niger",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 431,
        "parent_id": 405,
        "name": "Kaura",
        "slug": "kaura",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1278,
        "parent_id": 160,
        "name": "Osapa london",
        "slug": "osapa-london",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1432,
        "parent_id": 422,
        "name": "Dawaki",
        "slug": "dawaki",
        "parent_ids": [
          422,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1453,
        "parent_id": 430,
        "name": "Katampe Extension",
        "slug": "katampe-extension",
        "parent_ids": [
          430,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1452,
        "parent_id": 430,
        "name": "Katampe (Main)",
        "slug": "katampe-main",
        "parent_ids": [
          430,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1234,
        "parent_id": 911,
        "name": "GRA Phase 2 Shangisha",
        "slug": "gra-phase-2",
        "parent_ids": [
          911,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1039,
        "parent_id": 143,
        "name": "Igando / Ikotun/Igando",
        "slug": "igando",
        "parent_ids": [
          143,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1272,
        "parent_id": 160,
        "name": "Lekki Expressway",
        "slug": "lekki-expressway",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 690,
        "parent_id": null,
        "name": "Yobe State",
        "slug": "yobe",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1007,
        "parent_id": 146,
        "name": "Adeniyi Jones",
        "slug": "adeniyi-jones",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 972,
        "parent_id": 127,
        "name": "Ajegunle",
        "slug": "ajegunle",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 934,
        "parent_id": 122,
        "name": "LSDPC estate",
        "slug": "lsdpc-estate",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1153,
        "parent_id": 153,
        "name": "Sanusi Fafunwa",
        "slug": "sanusi-fafunwa",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 983,
        "parent_id": 133,
        "name": "Arida",
        "slug": "arida",
        "parent_ids": [
          133,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1379,
        "parent_id": 117,
        "name": "Rumueprikom",
        "slug": "rumueprikom",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 984,
        "parent_id": 133,
        "name": "College",
        "slug": "college",
        "parent_ids": [
          133,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1219,
        "parent_id": 149,
        "name": "Apeka",
        "slug": "apeka",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1395,
        "parent_id": 117,
        "name": "Rumuosi",
        "slug": "rumuosi",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1457,
        "parent_id": 435,
        "name": "Sabon Lugbe",
        "slug": "sabon-lugbe",
        "parent_ids": [
          435,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1261,
        "parent_id": 160,
        "name": "Agungi",
        "slug": "agungi",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 951,
        "parent_id": 140,
        "name": "Lakowe",
        "slug": "lakowe",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1301,
        "parent_id": 366,
        "name": "Bodija",
        "slug": "bodija",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1323,
        "parent_id": 366,
        "name": "Oluyole Estate",
        "slug": "oluyole-estate",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1455,
        "parent_id": 435,
        "name": "FHA",
        "slug": "fha",
        "parent_ids": [
          435,
          405
        ],
        "is_popular": false
      },
      {
        "id": 572,
        "parent_id": 566,
        "name": "Keffi",
        "slug": "keffi",
        "parent_ids": [
          566
        ],
        "is_popular": true
      },
      {
        "id": 1403,
        "parent_id": 117,
        "name": "Trans Amadi",
        "slug": "trans-amadi",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1233,
        "parent_id": 911,
        "name": "GRA Phase 1",
        "slug": "gra-phase-1",
        "parent_ids": [
          911,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1314,
        "parent_id": 366,
        "name": "Moniya",
        "slug": "moniya",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1077,
        "parent_id": 158,
        "name": "Lagos Island / Lagos Island",
        "slug": "lagos-island-2",
        "parent_ids": [
          158,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1221,
        "parent_id": 149,
        "name": "Gberigbe",
        "slug": "gberigbe",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1267,
        "parent_id": 160,
        "name": "Ilasan",
        "slug": "ilasan",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1199,
        "parent_id": 135,
        "name": "Epe Road",
        "slug": "epe-road",
        "parent_ids": [
          135,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1026,
        "parent_id": 149,
        "name": "Ebute",
        "slug": "ebute",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1041,
        "parent_id": 143,
        "name": "Ikotun / Ikotun/Igando",
        "slug": "ikotun",
        "parent_ids": [
          143,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1010,
        "parent_id": 146,
        "name": "Alausa",
        "slug": "alausa",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1263,
        "parent_id": 160,
        "name": "Idado",
        "slug": "idado",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1300,
        "parent_id": 366,
        "name": "Basorun",
        "slug": "basorun",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1249,
        "parent_id": 1247,
        "name": "Ogudu-Orioke",
        "slug": "ogudu-orioke",
        "parent_ids": [
          1247,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1083,
        "parent_id": 168,
        "name": "Mende",
        "slug": "mende",
        "parent_ids": [
          168,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1218,
        "parent_id": 149,
        "name": "Adamo",
        "slug": "adamo",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1050,
        "parent_id": 151,
        "name": "Ikoyi S.W",
        "slug": "ikoyi-sw",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1298,
        "parent_id": 366,
        "name": "Alalubosa",
        "slug": "alalubosa",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1310,
        "parent_id": 366,
        "name": "Iyanganku",
        "slug": "iyanganku",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1068,
        "parent_id": 154,
        "name": "Bucknor",
        "slug": "bucknor",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1072,
        "parent_id": 154,
        "name": "Oke-Afa",
        "slug": "oke-afa",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1176,
        "parent_id": 122,
        "name": "New Oko Oba",
        "slug": "new-oko-oba",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1037,
        "parent_id": 143,
        "name": "Egbe / Ikotun/Igando",
        "slug": "egbe",
        "parent_ids": [
          143,
          119
        ],
        "is_popular": false
      },
      {
        "id": 501,
        "parent_id": 488,
        "name": "Michika",
        "slug": "michika",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 907,
        "parent_id": 176,
        "name": "Ilorin South",
        "slug": "ilorin-south",
        "parent_ids": [
          176
        ],
        "is_popular": true
      },
      {
        "id": 1316,
        "parent_id": 366,
        "name": "Odo Ona",
        "slug": "odo-ona",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1425,
        "parent_id": 417,
        "name": "Area 11",
        "slug": "area-11",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1224,
        "parent_id": 149,
        "name": "Ita Oluwo",
        "slug": "ita-oluwo",
        "parent_ids": [
          149,
          119
        ],
        "is_popular": false
      },
      {
        "id": 102,
        "parent_id": 95,
        "name": "Bonny",
        "slug": "bonny",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 1243,
        "parent_id": 1237,
        "name": "Ogba GRA",
        "slug": "ogba-gra",
        "parent_ids": [
          1237,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1084,
        "parent_id": 168,
        "name": "Shonibare Estate",
        "slug": "shonibare-estate",
        "parent_ids": [
          168,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1304,
        "parent_id": 366,
        "name": "Eleyele",
        "slug": "eleyele",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1329,
        "parent_id": 366,
        "name": "Samonda",
        "slug": "samonda",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 755,
        "parent_id": 723,
        "name": "Nasarawa-Kano",
        "slug": "nasarawa-kano",
        "parent_ids": [
          723
        ],
        "is_popular": true
      },
      {
        "id": 425,
        "parent_id": 405,
        "name": "Jikwoyi",
        "slug": "jukwoyi",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1231,
        "parent_id": 156,
        "name": "Ketu-Alapere",
        "slug": "ketu-alapere",
        "parent_ids": [
          156,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1213,
        "parent_id": 141,
        "name": "Alakuko",
        "slug": "alakuko",
        "parent_ids": [
          141,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1201,
        "parent_id": 140,
        "name": "Ibeju-Agbe",
        "slug": "ibeju-agbe",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1245,
        "parent_id": 1237,
        "name": "Oke-Ira / Ogba",
        "slug": "ogba-oke-ira",
        "parent_ids": [
          1237,
          119
        ],
        "is_popular": false
      },
      {
        "id": 910,
        "parent_id": 156,
        "name": "Ketu-Ikosi",
        "slug": "ketu",
        "parent_ids": [
          156,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1135,
        "parent_id": 174,
        "name": "Ogunlana",
        "slug": "ogunlana",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1271,
        "parent_id": 160,
        "name": "Lafiaji",
        "slug": "lafiaji",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1097,
        "parent_id": 165,
        "name": "River Valley Estate",
        "slug": "river-valley-estate",
        "parent_ids": [
          165,
          119
        ],
        "is_popular": false
      },
      {
        "id": 658,
        "parent_id": 645,
        "name": "Makurdi",
        "slug": "makurdi",
        "parent_ids": [
          645
        ],
        "is_popular": true
      },
      {
        "id": 821,
        "parent_id": null,
        "name": "Borno State",
        "slug": "borno",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 1200,
        "parent_id": 913,
        "name": "Pedro",
        "slug": "pedro",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 931,
        "parent_id": 122,
        "name": "Ifako",
        "slug": "ifako",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 963,
        "parent_id": 124,
        "name": "Shasha",
        "slug": "shasha",
        "parent_ids": [
          124,
          119
        ],
        "is_popular": false
      },
      {
        "id": 994,
        "parent_id": 913,
        "name": "Oworonshoki / Gbagada",
        "slug": "oworonshoki",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1141,
        "parent_id": 153,
        "name": "Ademola Adetokunbo",
        "slug": "ademola-adetokunbo",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1225,
        "parent_id": 128,
        "name": "Abesan",
        "slug": "abesan",
        "parent_ids": [
          128,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1436,
        "parent_id": 425,
        "name": "Phase 1 / Jikwoyi",
        "slug": "jikwoyi-phase-1",
        "parent_ids": [
          425,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1462,
        "parent_id": 447,
        "name": "Zone 2 / Wuse",
        "slug": "wuse-zone-2",
        "parent_ids": [
          447,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1463,
        "parent_id": 447,
        "name": "Zone 3 / Wuse",
        "slug": "wuse-zone-3",
        "parent_ids": [
          447,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1161,
        "parent_id": 175,
        "name": "Ebute Metta",
        "slug": "ebute-metta",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1150,
        "parent_id": 153,
        "name": "Kofo Abayomi",
        "slug": "kofo-abayomi",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 757,
        "parent_id": 723,
        "name": "Rimin Gado",
        "slug": "rimin-gado",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 803,
        "parent_id": 791,
        "name": "Ilejemeje",
        "slug": "ilejemeje",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 965,
        "parent_id": 125,
        "name": "Alakija",
        "slug": "alakija",
        "parent_ids": [
          125,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1059,
        "parent_id": 163,
        "name": "Ilupeju Industrial Estate",
        "slug": "ilupeju-industrial-estate",
        "parent_ids": [
          163,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1089,
        "parent_id": 164,
        "name": "Alaba",
        "slug": "alaba",
        "parent_ids": [
          164,
          119
        ],
        "is_popular": false
      },
      {
        "id": 618,
        "parent_id": 604,
        "name": "Oshimili North",
        "slug": "oshimili-north",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 1058,
        "parent_id": 163,
        "name": "Ikorodu Road / Ilupeju",
        "slug": "ikorodu-road",
        "parent_ids": [
          163,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1380,
        "parent_id": 117,
        "name": "Rumuibekwe",
        "slug": "rumuibekwe",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 993,
        "parent_id": 913,
        "name": "New Garage / Gbagada",
        "slug": "new-garage",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 410,
        "parent_id": 405,
        "name": "Dakwo District",
        "slug": "dakwo",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 97,
        "parent_id": 95,
        "name": "Ahoada",
        "slug": "ahoada",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 560,
        "parent_id": 545,
        "name": "Obafemi-Owode",
        "slug": "obafemi-owode",
        "parent_ids": [
          545
        ],
        "is_popular": true
      },
      {
        "id": 556,
        "parent_id": 545,
        "name": "Ijebu Ode",
        "slug": "ijebu-ode",
        "parent_ids": [
          545
        ],
        "is_popular": true
      },
      {
        "id": 440,
        "parent_id": 405,
        "name": "Nyanya",
        "slug": "nyanya",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1142,
        "parent_id": 153,
        "name": "Adeola Hopewell",
        "slug": "adeola-hopewell",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1308,
        "parent_id": 366,
        "name": "Ijaiye Orile",
        "slug": "ijaiye-orile",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1371,
        "parent_id": 117,
        "name": "Rumolumeni",
        "slug": "rumolumeni",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1056,
        "parent_id": 163,
        "name": "Bye Pass Ilupeju",
        "slug": "bye-pass-ilupeju",
        "parent_ids": [
          163,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1251,
        "parent_id": 170,
        "name": "Iganmu",
        "slug": "iganmu",
        "parent_ids": [
          170,
          119
        ],
        "is_popular": false
      },
      {
        "id": 949,
        "parent_id": 137,
        "name": "Eden Garden Estate",
        "slug": "eden-garden-estate",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 989,
        "parent_id": 913,
        "name": "Atunrase Medina",
        "slug": "atunrase-medina",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1087,
        "parent_id": 162,
        "name": "Papa Ajao / Mushin",
        "slug": "papa-ajao",
        "parent_ids": [
          162,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1351,
        "parent_id": 117,
        "name": "Elekahia",
        "slug": "elekahia",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 980,
        "parent_id": 127,
        "name": "Snake Island",
        "slug": "snake-island",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 421,
        "parent_id": 405,
        "name": "Gwagwalada",
        "slug": "gwagwalada",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1320,
        "parent_id": 366,
        "name": "Old Iyanru/Ijanagang",
        "slug": "old-iyanru-ijanagang",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 296,
        "parent_id": 288,
        "name": "Calabar",
        "slug": "calabar-municipal",
        "parent_ids": [
          288
        ],
        "is_popular": true
      },
      {
        "id": 792,
        "parent_id": 791,
        "name": "Ado Ekiti",
        "slug": "ado-ekiti",
        "parent_ids": [
          791
        ],
        "is_popular": true
      },
      {
        "id": 643,
        "parent_id": 630,
        "name": "Zing",
        "slug": "zing",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 287,
        "parent_id": 265,
        "name": "Zaria",
        "slug": "zaria",
        "parent_ids": [
          265
        ],
        "is_popular": true
      },
      {
        "id": 841,
        "parent_id": 192,
        "name": "Minna",
        "slug": "minna",
        "parent_ids": [
          192
        ],
        "is_popular": true
      },
      {
        "id": 1282,
        "parent_id": 357,
        "name": "Akinmoorin",
        "slug": "akinmoorin",
        "parent_ids": [
          357,
          356
        ],
        "is_popular": false
      },
      {
        "id": 32,
        "parent_id": 25,
        "name": "Ede",
        "slug": "ede",
        "parent_ids": [
          25
        ],
        "is_popular": true
      },
      {
        "id": 1086,
        "parent_id": 162,
        "name": "Ladipo",
        "slug": "ladipo",
        "parent_ids": [
          162,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1449,
        "parent_id": 1441,
        "name": "Jiwa / Jiwa",
        "slug": "jiwa-jiwa",
        "parent_ids": [
          1441,
          405
        ],
        "is_popular": false
      },
      {
        "id": 708,
        "parent_id": 704,
        "name": "Augie",
        "slug": "augie",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 1328,
        "parent_id": 366,
        "name": "Salvation Army",
        "slug": "salvation-army",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1280,
        "parent_id": 357,
        "name": "Jobele",
        "slug": "jobele",
        "parent_ids": [
          357,
          356
        ],
        "is_popular": false
      },
      {
        "id": 395,
        "parent_id": 389,
        "name": "Jos",
        "slug": "jos",
        "parent_ids": [
          389
        ],
        "is_popular": true
      },
      {
        "id": 1347,
        "parent_id": 117,
        "name": "Diobu Mile 2",
        "slug": "diobu-mile-2",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1127,
        "parent_id": 174,
        "name": "Gbaja",
        "slug": "gbaja",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 756,
        "parent_id": 723,
        "name": "Rano",
        "slug": "rano",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 116,
        "parent_id": 95,
        "name": "Oyigbo",
        "slug": "oyigbo",
        "parent_ids": [
          95
        ],
        "is_popular": true
      },
      {
        "id": 1421,
        "parent_id": 417,
        "name": "Area 7",
        "slug": "area-7",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1286,
        "parent_id": 357,
        "name": "Imini",
        "slug": "imini",
        "parent_ids": [
          357,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1163,
        "parent_id": 175,
        "name": "Iwaya",
        "slug": "iwaya",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1244,
        "parent_id": 1237,
        "name": "Ogba Industrial Estate",
        "slug": "ogba-industrial-estate",
        "parent_ids": [
          1237,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1294,
        "parent_id": 366,
        "name": "Adamasingba",
        "slug": "adamasingba",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1331,
        "parent_id": 366,
        "name": "Wakajaye",
        "slug": "wakajaye",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 233,
        "parent_id": 216,
        "name": "Umuahia",
        "slug": "umuahia",
        "parent_ids": [
          216
        ],
        "is_popular": true
      },
      {
        "id": 309,
        "parent_id": 307,
        "name": "Anambra East",
        "slug": "anambra-east",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 108,
        "parent_id": 95,
        "name": "Ikwerre",
        "slug": "ikwerre",
        "parent_ids": [
          95
        ],
        "is_popular": true
      },
      {
        "id": 555,
        "parent_id": 545,
        "name": "Ijebu",
        "slug": "ijebu",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 199,
        "parent_id": 192,
        "name": "Edati",
        "slug": "edati",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 96,
        "parent_id": 95,
        "name": "Abua/Odual",
        "slug": "abua-odual",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 1061,
        "parent_id": 128,
        "name": "Ayobo",
        "slug": "ayobo",
        "parent_ids": [
          128,
          119
        ],
        "is_popular": false
      },
      {
        "id": 409,
        "parent_id": 405,
        "name": "Dakibiyu",
        "slug": "dakidiya",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 135,
        "parent_id": 119,
        "name": "Epe",
        "slug": "epe",
        "parent_ids": [
          119
        ],
        "is_popular": false
      },
      {
        "id": 274,
        "parent_id": 265,
        "name": "Kaduna / Kaduna State",
        "slug": "kaduna-north",
        "parent_ids": [
          265
        ],
        "is_popular": true
      },
      {
        "id": 424,
        "parent_id": 405,
        "name": "Jahi",
        "slug": "jahi",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 62,
        "parent_id": 56,
        "name": "Akure",
        "slug": "akure-south",
        "parent_ids": [
          56
        ],
        "is_popular": true
      },
      {
        "id": 313,
        "parent_id": 307,
        "name": "Awka",
        "slug": "awka-south",
        "parent_ids": [
          307
        ],
        "is_popular": true
      },
      {
        "id": 264,
        "parent_id": 235,
        "name": "Uyo",
        "slug": "uyo",
        "parent_ids": [
          235
        ],
        "is_popular": true
      },
      {
        "id": 547,
        "parent_id": 545,
        "name": "Abeokuta South",
        "slug": "abeokuta-south",
        "parent_ids": [
          545
        ],
        "is_popular": true
      },
      {
        "id": 849,
        "parent_id": 821,
        "name": "Gwoza",
        "slug": "gwoza",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 437,
        "parent_id": 405,
        "name": "Maitama",
        "slug": "maitama",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 791,
        "parent_id": null,
        "name": "Ekiti State",
        "slug": "ekiti",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 808,
        "parent_id": null,
        "name": "Ebonyi State",
        "slug": "ebonyi",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 842,
        "parent_id": 545,
        "name": "Sagamu",
        "slug": "sagamu",
        "parent_ids": [
          545
        ],
        "is_popular": true
      },
      {
        "id": 623,
        "parent_id": 604,
        "name": "Ugheli",
        "slug": "ughelli-north",
        "parent_ids": [
          604
        ],
        "is_popular": true
      },
      {
        "id": 546,
        "parent_id": 545,
        "name": "Abeokuta North",
        "slug": "abeokuta-north",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 370,
        "parent_id": 356,
        "name": "Ido",
        "slug": "ido",
        "parent_ids": [
          356
        ],
        "is_popular": true
      },
      {
        "id": 715,
        "parent_id": 704,
        "name": "Kalgo",
        "slug": "kalgo",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 87,
        "parent_id": 76,
        "name": "Ikpoba-Okha",
        "slug": "ikpoba-okha",
        "parent_ids": [
          76
        ],
        "is_popular": true
      },
      {
        "id": 82,
        "parent_id": 76,
        "name": "Ekpoma",
        "slug": "esan-west",
        "parent_ids": [
          76
        ],
        "is_popular": true
      },
      {
        "id": 809,
        "parent_id": 808,
        "name": "Abakaliki",
        "slug": "abakaliki",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 681,
        "parent_id": 669,
        "name": "Lokoja",
        "slug": "lokoja",
        "parent_ids": [
          669
        ],
        "is_popular": true
      },
      {
        "id": 78,
        "parent_id": 76,
        "name": "Egor",
        "slug": "egor",
        "parent_ids": [
          76
        ],
        "is_popular": true
      },
      {
        "id": 777,
        "parent_id": 765,
        "name": "Nsukka",
        "slug": "nsukka",
        "parent_ids": [
          765
        ],
        "is_popular": true
      },
      {
        "id": 73,
        "parent_id": 56,
        "name": "Ondo / Ondo State",
        "slug": "ondo-west",
        "parent_ids": [
          56
        ],
        "is_popular": true
      },
      {
        "id": 735,
        "parent_id": 723,
        "name": "Fagge",
        "slug": "fagge",
        "parent_ids": [
          723
        ],
        "is_popular": true
      },
      {
        "id": 346,
        "parent_id": 329,
        "name": "Oguta",
        "slug": "oguta",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 113,
        "parent_id": 95,
        "name": "Okrika",
        "slug": "okrika",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 111,
        "parent_id": 95,
        "name": "Ogba/Egbema/Ndoni",
        "slug": "ogba-egbema-ndoni",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 384,
        "parent_id": 356,
        "name": "Oyo",
        "slug": "oyo-east",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 44,
        "parent_id": 25,
        "name": "Ilesa",
        "slug": "ilesa",
        "parent_ids": [
          25
        ],
        "is_popular": true
      },
      {
        "id": 100,
        "parent_id": 95,
        "name": "Andoni",
        "slug": "andoni",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 1274,
        "parent_id": 160,
        "name": "Lekki Phase 2",
        "slug": "lekki-phase-2",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 99,
        "parent_id": 95,
        "name": "Akuku Toru",
        "slug": "akuku-toru",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 1014,
        "parent_id": 146,
        "name": "Ikeja GRA",
        "slug": "ikeja-gra",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 836,
        "parent_id": 821,
        "name": "Maiduguri",
        "slug": "maiduguri",
        "parent_ids": [
          821
        ],
        "is_popular": true
      },
      {
        "id": 528,
        "parent_id": 526,
        "name": "Bauchi LGA",
        "slug": "bauchi-bay",
        "parent_ids": [
          526
        ],
        "is_popular": true
      },
      {
        "id": 106,
        "parent_id": 95,
        "name": "Etche",
        "slug": "etche",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 508,
        "parent_id": 488,
        "name": "Yola North",
        "slug": "yola-north",
        "parent_ids": [
          488
        ],
        "is_popular": true
      },
      {
        "id": 238,
        "parent_id": 235,
        "name": "Eket",
        "slug": "eket",
        "parent_ids": [
          235
        ],
        "is_popular": true
      },
      {
        "id": 570,
        "parent_id": 566,
        "name": "Karu-Nasarawa",
        "slug": "karu-nasarawa",
        "parent_ids": [
          566
        ],
        "is_popular": true
      },
      {
        "id": 103,
        "parent_id": 95,
        "name": "Degema",
        "slug": "degema",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 114,
        "parent_id": 95,
        "name": "Omuma",
        "slug": "omuma",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 1426,
        "parent_id": 405,
        "name": "Gwagwa",
        "slug": "gwagwa",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 90,
        "parent_id": 76,
        "name": "Okada",
        "slug": "ovia-north-east",
        "parent_ids": [
          76
        ],
        "is_popular": true
      },
      {
        "id": 1216,
        "parent_id": 146,
        "name": "Omole Phase 1",
        "slug": "omole-phase-1",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 622,
        "parent_id": 604,
        "name": "Udu",
        "slug": "udu",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 476,
        "parent_id": null,
        "name": "Gombe State",
        "slug": "gombe",
        "parent_ids": [],
        "is_popular": false
      },
      {
        "id": 816,
        "parent_id": 808,
        "name": "Ivo",
        "slug": "ivo",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 574,
        "parent_id": 566,
        "name": "Lafia",
        "slug": "lafia",
        "parent_ids": [
          566
        ],
        "is_popular": true
      },
      {
        "id": 468,
        "parent_id": 449,
        "name": "Katsina",
        "slug": "katsina-lga",
        "parent_ids": [
          449
        ],
        "is_popular": true
      },
      {
        "id": 561,
        "parent_id": 545,
        "name": "Odeda",
        "slug": "odeda",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 75,
        "parent_id": 56,
        "name": "Owo",
        "slug": "owo",
        "parent_ids": [
          56
        ],
        "is_popular": true
      },
      {
        "id": 606,
        "parent_id": 604,
        "name": "Aniocha South",
        "slug": "aniocha-south",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 710,
        "parent_id": 704,
        "name": "Birnin Kebbi",
        "slug": "birnin-kebbi",
        "parent_ids": [
          704
        ],
        "is_popular": true
      },
      {
        "id": 941,
        "parent_id": 140,
        "name": "Abijo",
        "slug": "abijo",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 267,
        "parent_id": 265,
        "name": "Chikun",
        "slug": "chikun",
        "parent_ids": [
          265
        ],
        "is_popular": true
      },
      {
        "id": 349,
        "parent_id": 329,
        "name": "Orlu",
        "slug": "orlu",
        "parent_ids": [
          329
        ],
        "is_popular": true
      },
      {
        "id": 1170,
        "parent_id": 405,
        "name": "Karshi",
        "slug": "karshi",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 890,
        "parent_id": 821,
        "name": "Kwaya Kusar",
        "slug": "kwaya",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 77,
        "parent_id": 76,
        "name": "Akoko-Edo",
        "slug": "akoko-edo",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 1155,
        "parent_id": 153,
        "name": "Victoria Island Extension",
        "slug": "victoria-island-extension",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 109,
        "parent_id": 95,
        "name": "Khana",
        "slug": "khana",
        "parent_ids": [
          95
        ],
        "is_popular": false
      },
      {
        "id": 637,
        "parent_id": 630,
        "name": "Jalingo",
        "slug": "jalingo",
        "parent_ids": [
          630
        ],
        "is_popular": true
      },
      {
        "id": 509,
        "parent_id": 488,
        "name": "Yola South",
        "slug": "yola-south",
        "parent_ids": [
          488
        ],
        "is_popular": true
      },
      {
        "id": 7,
        "parent_id": 1,
        "name": "Dutse-Jigawa",
        "slug": "dutse-jigawa",
        "parent_ids": [
          1
        ],
        "is_popular": true
      },
      {
        "id": 614,
        "parent_id": 604,
        "name": "Isoko",
        "slug": "isoko",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 80,
        "parent_id": 76,
        "name": "Esan North East",
        "slug": "esan-north-east",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 308,
        "parent_id": 307,
        "name": "Aguata",
        "slug": "aguata",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 1020,
        "parent_id": 146,
        "name": "Opebi",
        "slug": "opebi",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 22,
        "parent_id": 1,
        "name": "Miga",
        "slug": "miga",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 9,
        "parent_id": 1,
        "name": "Garki",
        "slug": "garki",
        "parent_ids": [
          1
        ],
        "is_popular": true
      },
      {
        "id": 52,
        "parent_id": 25,
        "name": "Olorunda-Osun",
        "slug": "olorunda-osun",
        "parent_ids": [
          25
        ],
        "is_popular": true
      },
      {
        "id": 376,
        "parent_id": 356,
        "name": "Lagelu",
        "slug": "lagelu",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 299,
        "parent_id": 288,
        "name": "Ikom",
        "slug": "ikom",
        "parent_ids": [
          288
        ],
        "is_popular": true
      },
      {
        "id": 550,
        "parent_id": 545,
        "name": "Ilaro",
        "slug": "egbado-south",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 617,
        "parent_id": 604,
        "name": "Okpe",
        "slug": "okpe",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 228,
        "parent_id": 216,
        "name": "Osisioma Ngwa",
        "slug": "osisioma",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 549,
        "parent_id": 545,
        "name": "Ayetoro",
        "slug": "egbado-north",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 372,
        "parent_id": 356,
        "name": "Iseyin",
        "slug": "iseyin",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 83,
        "parent_id": 76,
        "name": "Fugar",
        "slug": "etsako-central",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 557,
        "parent_id": 545,
        "name": "Ikenne",
        "slug": "ikenne",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 91,
        "parent_id": 76,
        "name": "Ovia South",
        "slug": "ovia-south-west",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 348,
        "parent_id": 329,
        "name": "Okigwe",
        "slug": "okigwe",
        "parent_ids": [
          329
        ],
        "is_popular": true
      },
      {
        "id": 776,
        "parent_id": 765,
        "name": "Nkanu West",
        "slug": "nkanu-west",
        "parent_ids": [
          765
        ],
        "is_popular": true
      },
      {
        "id": 472,
        "parent_id": 449,
        "name": "Mashi",
        "slug": "mashi",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 236,
        "parent_id": 235,
        "name": "Abak",
        "slug": "abak",
        "parent_ids": [
          235
        ],
        "is_popular": true
      },
      {
        "id": 517,
        "parent_id": 510,
        "name": "Gusau",
        "slug": "gusau",
        "parent_ids": [
          510
        ],
        "is_popular": true
      },
      {
        "id": 1413,
        "parent_id": 879,
        "name": "Ushafa",
        "slug": "ushafa",
        "parent_ids": [
          879,
          405
        ],
        "is_popular": false
      },
      {
        "id": 968,
        "parent_id": 125,
        "name": "Festac",
        "slug": "festac",
        "parent_ids": [
          125,
          119
        ],
        "is_popular": false
      },
      {
        "id": 812,
        "parent_id": 808,
        "name": "Ebonyi",
        "slug": "ebonyi-ebonyi",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 654,
        "parent_id": 645,
        "name": "Katsina-Ala",
        "slug": "katsina-ala",
        "parent_ids": [
          645
        ],
        "is_popular": true
      },
      {
        "id": 1040,
        "parent_id": 143,
        "name": "Ijegun",
        "slug": "ijegun",
        "parent_ids": [
          143,
          119
        ],
        "is_popular": false
      },
      {
        "id": 79,
        "parent_id": 76,
        "name": "Irrua",
        "slug": "esan-central",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 81,
        "parent_id": 76,
        "name": "Ubiaja",
        "slug": "esan-south-east",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 86,
        "parent_id": 76,
        "name": "Igueben",
        "slug": "igueben",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 93,
        "parent_id": 76,
        "name": "Owan",
        "slug": "owan",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 954,
        "parent_id": 137,
        "name": "Ogombo",
        "slug": "ogombo",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1181,
        "parent_id": 124,
        "name": "Iseri Olofin",
        "slug": "iseri-olofin",
        "parent_ids": [
          124,
          119
        ],
        "is_popular": false
      },
      {
        "id": 94,
        "parent_id": 76,
        "name": "Uhunmwonde",
        "slug": "uhunmwonde",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 693,
        "parent_id": 690,
        "name": "Damaturu",
        "slug": "damaturu",
        "parent_ids": [
          690
        ],
        "is_popular": true
      },
      {
        "id": 1454,
        "parent_id": 405,
        "name": "Kpeyegyi",
        "slug": "kpeyegyi",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 1309,
        "parent_id": 366,
        "name": "Iwo Road",
        "slug": "iwo-road",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 337,
        "parent_id": 329,
        "name": "Ikeduru",
        "slug": "ikeduru",
        "parent_ids": [
          329
        ],
        "is_popular": true
      },
      {
        "id": 1459,
        "parent_id": 405,
        "name": "Sabo Gida",
        "slug": "sabo-gida",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 534,
        "parent_id": 526,
        "name": "Giade",
        "slug": "giade",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 89,
        "parent_id": 76,
        "name": "Orhionmwon",
        "slug": "orhionmwon",
        "parent_ids": [
          76
        ],
        "is_popular": false
      },
      {
        "id": 595,
        "parent_id": 580,
        "name": "Silame",
        "slug": "silame",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 304,
        "parent_id": 288,
        "name": "Ogoja",
        "slug": "ogoja",
        "parent_ids": [
          288
        ],
        "is_popular": true
      },
      {
        "id": 219,
        "parent_id": 216,
        "name": "Arochukwu",
        "slug": "arochukwu",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 563,
        "parent_id": 545,
        "name": "Ogun Waterside",
        "slug": "ogun-waterside",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 610,
        "parent_id": 604,
        "name": "Ethiope West",
        "slug": "ethiope-west",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 1066,
        "parent_id": 128,
        "name": "Iyana Ipaja",
        "slug": "iyana-paja",
        "parent_ids": [
          128,
          119
        ],
        "is_popular": false
      },
      {
        "id": 310,
        "parent_id": 307,
        "name": "Anambra West",
        "slug": "anambra-west",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 562,
        "parent_id": 545,
        "name": "Odogbolu",
        "slug": "odogbolu",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 1229,
        "parent_id": 154,
        "name": "Okota",
        "slug": "okota",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 269,
        "parent_id": 265,
        "name": "Igabi",
        "slug": "igabi",
        "parent_ids": [
          265
        ],
        "is_popular": true
      },
      {
        "id": 967,
        "parent_id": 125,
        "name": "Apple Junction",
        "slug": "apple-junction",
        "parent_ids": [
          125,
          119
        ],
        "is_popular": false
      },
      {
        "id": 952,
        "parent_id": 137,
        "name": "Lekki Gardens Estate",
        "slug": "lekki-gardens-estate",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 340,
        "parent_id": 329,
        "name": "Mbaitoli",
        "slug": "mbaitoli",
        "parent_ids": [
          329
        ],
        "is_popular": true
      },
      {
        "id": 359,
        "parent_id": 356,
        "name": "Atiba",
        "slug": "atiba",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 381,
        "parent_id": 356,
        "name": "Ona-Ara",
        "slug": "oyo-ona-ara",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 801,
        "parent_id": 791,
        "name": "Ikere",
        "slug": "ikere",
        "parent_ids": [
          791
        ],
        "is_popular": true
      },
      {
        "id": 319,
        "parent_id": 307,
        "name": "Ihiala",
        "slug": "ihiala",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 387,
        "parent_id": 356,
        "name": "Saki West",
        "slug": "saki-west",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 611,
        "parent_id": 604,
        "name": "Ika North East",
        "slug": "ika-north-east",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 564,
        "parent_id": 545,
        "name": "Remo North",
        "slug": "remo-north",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 1474,
        "parent_id": 842,
        "name": "Shimawa",
        "slug": "shimawa",
        "parent_ids": [
          842,
          545
        ],
        "is_popular": false
      },
      {
        "id": 926,
        "parent_id": 405,
        "name": "Kwali",
        "slug": "kwali",
        "parent_ids": [
          405
        ],
        "is_popular": false
      },
      {
        "id": 181,
        "parent_id": 176,
        "name": "Ifelodun-Kwara",
        "slug": "ifelodun-kwara",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 220,
        "parent_id": 216,
        "name": "Bende",
        "slug": "bende",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 177,
        "parent_id": 176,
        "name": "Asa",
        "slug": "asa",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 588,
        "parent_id": 580,
        "name": "Illela",
        "slug": "illela",
        "parent_ids": [
          580
        ],
        "is_popular": true
      },
      {
        "id": 326,
        "parent_id": 307,
        "name": "Orumba",
        "slug": "orumba",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 388,
        "parent_id": 356,
        "name": "Surulere-Oyo",
        "slug": "surulere-oyo",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 576,
        "parent_id": 566,
        "name": "Nasarawa",
        "slug": "nasarawa",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 724,
        "parent_id": 723,
        "name": "Ajingi",
        "slug": "ajingi",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 1326,
        "parent_id": 366,
        "name": "Rind Road",
        "slug": "rind-road",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 778,
        "parent_id": 765,
        "name": "Oji-River",
        "slug": "oji-river",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 223,
        "parent_id": 216,
        "name": "Isiala Ngwa",
        "slug": "isiala-ngwa",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 646,
        "parent_id": 645,
        "name": "Ado",
        "slug": "ado",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 1081,
        "parent_id": 168,
        "name": "Anthony Village",
        "slug": "anthony-village",
        "parent_ids": [
          168,
          119
        ],
        "is_popular": false
      },
      {
        "id": 783,
        "parent_id": 782,
        "name": "Brass",
        "slug": "brass",
        "parent_ids": [
          782
        ],
        "is_popular": false
      },
      {
        "id": 666,
        "parent_id": 645,
        "name": "Ukum",
        "slug": "ukum",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 61,
        "parent_id": 56,
        "name": "Iju/Itaogbolu",
        "slug": "akure-north",
        "parent_ids": [
          56
        ],
        "is_popular": true
      },
      {
        "id": 225,
        "parent_id": 216,
        "name": "Obi Ngwa",
        "slug": "obi-ngwa",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 311,
        "parent_id": 307,
        "name": "Anaocha",
        "slug": "anaocha",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 71,
        "parent_id": 56,
        "name": "Okitipupa",
        "slug": "okitipupa",
        "parent_ids": [
          56
        ],
        "is_popular": true
      },
      {
        "id": 314,
        "parent_id": 307,
        "name": "Ayamelum",
        "slug": "ayamelum",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 368,
        "parent_id": 356,
        "name": "Eruwa",
        "slug": "ibarapa-east",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 730,
        "parent_id": 723,
        "name": "Dala",
        "slug": "dala",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 917,
        "parent_id": 645,
        "name": "Buruku",
        "slug": "buruku",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 330,
        "parent_id": 329,
        "name": "Aboh-Mbaise",
        "slug": "aboh-mbaise",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 221,
        "parent_id": 216,
        "name": "Ikwuano",
        "slug": "ikwuano",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 741,
        "parent_id": 723,
        "name": "Gwale",
        "slug": "gwale",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 748,
        "parent_id": 723,
        "name": "Kumbotso",
        "slug": "kumbotso",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 687,
        "parent_id": 669,
        "name": "Omala",
        "slug": "omala",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 775,
        "parent_id": 765,
        "name": "Nkanu East",
        "slug": "nkanu-east",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 799,
        "parent_id": 791,
        "name": "Ido-Osi",
        "slug": "ido-osi",
        "parent_ids": [
          791
        ],
        "is_popular": true
      },
      {
        "id": 1177,
        "parent_id": 122,
        "name": "Meiran",
        "slug": "meiran",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 341,
        "parent_id": 329,
        "name": "Ngor-Okpala",
        "slug": "ngor-okpuala",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 625,
        "parent_id": 604,
        "name": "Ukwuani",
        "slug": "ukwuani",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 853,
        "parent_id": 765,
        "name": "Awgu",
        "slug": "awgu",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 922,
        "parent_id": 669,
        "name": "Kogi LGA",
        "slug": "kogi-lga",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 266,
        "parent_id": 265,
        "name": "Birnin-Gwari",
        "slug": "birnin-gwari",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 490,
        "parent_id": 488,
        "name": "Fufore",
        "slug": "fufore",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 770,
        "parent_id": 765,
        "name": "Ezeagu",
        "slug": "ezeagu",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 315,
        "parent_id": 307,
        "name": "Dunukofia",
        "slug": "dunukofia",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 607,
        "parent_id": 604,
        "name": "Bomadi",
        "slug": "bomadi",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 647,
        "parent_id": 645,
        "name": "Agatu",
        "slug": "agatu",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 1370,
        "parent_id": 117,
        "name": "Rukpokwu",
        "slug": "rukpokwu",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1046,
        "parent_id": 151,
        "name": "Bourdillon",
        "slug": "bourdillon",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 616,
        "parent_id": 604,
        "name": "Ndokwa West",
        "slug": "ndokwa-west",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 1473,
        "parent_id": 25,
        "name": "Ikirun",
        "slug": "ikirun",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 946,
        "parent_id": 140,
        "name": "Badore",
        "slug": "badore",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 331,
        "parent_id": 329,
        "name": "Ahiazu-Mbaise",
        "slug": "ahiazu-mbaise",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 1160,
        "parent_id": 175,
        "name": "Alagomeji",
        "slug": "alagomeji",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 360,
        "parent_id": 356,
        "name": "Atisbo",
        "slug": "atisbo",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 642,
        "parent_id": 630,
        "name": "Wukari",
        "slug": "wukari",
        "parent_ids": [
          630
        ],
        "is_popular": true
      },
      {
        "id": 682,
        "parent_id": 669,
        "name": "Mopa-Muro",
        "slug": "mopa-muro",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 784,
        "parent_id": 782,
        "name": "Ekeremor",
        "slug": "ekeremor",
        "parent_ids": [
          782
        ],
        "is_popular": false
      },
      {
        "id": 187,
        "parent_id": 176,
        "name": "Moro",
        "slug": "moro",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 1338,
        "parent_id": 384,
        "name": "Ojongbodu",
        "slug": "ojongbodu",
        "parent_ids": [
          384,
          356
        ],
        "is_popular": false
      },
      {
        "id": 559,
        "parent_id": 545,
        "name": "Ipokia",
        "slug": "ipokia",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 184,
        "parent_id": 176,
        "name": "Irepodun-Kwara",
        "slug": "irepodun-kwara",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 802,
        "parent_id": 791,
        "name": "Ikole",
        "slug": "ikole",
        "parent_ids": [
          791
        ],
        "is_popular": true
      },
      {
        "id": 229,
        "parent_id": 216,
        "name": "Ugwunagbo",
        "slug": "ugwunagbo",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 1239,
        "parent_id": 1237,
        "name": "Aguda / Ogba",
        "slug": "ogba-aguda",
        "parent_ids": [
          1237,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1275,
        "parent_id": 160,
        "name": "Nicon Town",
        "slug": "nicon-town",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 332,
        "parent_id": 329,
        "name": "Ehime-Mbano",
        "slug": "ehime-mbano",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 334,
        "parent_id": 329,
        "name": "Ideato North",
        "slug": "ideato-north",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 26,
        "parent_id": 25,
        "name": "Aiyedade",
        "slug": "aiyedaade",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 458,
        "parent_id": 449,
        "name": "Danja",
        "slug": "danja",
        "parent_ids": [
          449
        ],
        "is_popular": true
      },
      {
        "id": 278,
        "parent_id": 265,
        "name": "Kaura-Kaduna",
        "slug": "kaura-kaduna",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 338,
        "parent_id": 329,
        "name": "Isiala Mbano",
        "slug": "isiala-mbano",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 807,
        "parent_id": 791,
        "name": "Oye",
        "slug": "oye",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 1303,
        "parent_id": 366,
        "name": "Dugbe (Onireke)",
        "slug": "dugbe-onireke",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 789,
        "parent_id": 782,
        "name": "Southern Ijaw",
        "slug": "southern-ijaw",
        "parent_ids": [
          782
        ],
        "is_popular": false
      },
      {
        "id": 648,
        "parent_id": 645,
        "name": "Apa",
        "slug": "apa",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 16,
        "parent_id": 1,
        "name": "Kafin Hausa",
        "slug": "kafin-hausa",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 239,
        "parent_id": 235,
        "name": "Esit-Eket",
        "slug": "esit-eket",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 253,
        "parent_id": 235,
        "name": "Mkpat Enin",
        "slug": "mkpat-enin",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 725,
        "parent_id": 723,
        "name": "Albasu",
        "slug": "albasu",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 1008,
        "parent_id": 146,
        "name": "Agidingbi",
        "slug": "agidingbi",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1466,
        "parent_id": 447,
        "name": "Zone 6 / Wuse",
        "slug": "wuse-zone-6",
        "parent_ids": [
          447,
          405
        ],
        "is_popular": false
      },
      {
        "id": 34,
        "parent_id": 25,
        "name": "Egbedore",
        "slug": "egbedore",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 69,
        "parent_id": 56,
        "name": "Odigbo",
        "slug": "odigbo",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 1038,
        "parent_id": 143,
        "name": "Governors Road",
        "slug": "governors-road",
        "parent_ids": [
          143,
          119
        ],
        "is_popular": false
      },
      {
        "id": 224,
        "parent_id": 216,
        "name": "Isuikwuato",
        "slug": "isuikwuato",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 391,
        "parent_id": 389,
        "name": "Bassa-Plateau",
        "slug": "bassa-plateau",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 558,
        "parent_id": 545,
        "name": "Imeko Afon",
        "slug": "imeko-afon",
        "parent_ids": [
          545
        ],
        "is_popular": false
      },
      {
        "id": 788,
        "parent_id": 782,
        "name": "Sagbama",
        "slug": "sagbama",
        "parent_ids": [
          782
        ],
        "is_popular": false
      },
      {
        "id": 57,
        "parent_id": 56,
        "name": "Ikare Akoko",
        "slug": "akoko-north-east",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 320,
        "parent_id": 307,
        "name": "Njikoka",
        "slug": "njikoka",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 1358,
        "parent_id": 117,
        "name": "GRA Phase 3 / Port-Harcourt",
        "slug": "ph-gra-phase-3",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 489,
        "parent_id": 488,
        "name": "Demsa",
        "slug": "demsa",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 615,
        "parent_id": 604,
        "name": "Ndokwa East",
        "slug": "ndokwa-east",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 1165,
        "parent_id": 175,
        "name": "Onike",
        "slug": "onike",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1389,
        "parent_id": 117,
        "name": "Rumuokwachi",
        "slug": "rumuokwachi",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1424,
        "parent_id": 417,
        "name": "Area 10",
        "slug": "area-10",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1468,
        "parent_id": 447,
        "name": "Zone 8 / Wuse",
        "slug": "wuse-zone-8",
        "parent_ids": [
          447,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1383,
        "parent_id": 117,
        "name": "Rumuobiakani",
        "slug": "rumuobiakani",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 651,
        "parent_id": 645,
        "name": "Guma",
        "slug": "guma",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 781,
        "parent_id": 765,
        "name": "Uzo-Uwani",
        "slug": "uzo-uwani",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 811,
        "parent_id": 808,
        "name": "Afikpo South",
        "slug": "afikpo-south",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 268,
        "parent_id": 265,
        "name": "Giwa",
        "slug": "giwa",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 316,
        "parent_id": 307,
        "name": "Ekwusigo",
        "slug": "ekwusigo",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 323,
        "parent_id": 307,
        "name": "Ogbaru",
        "slug": "ogbaru",
        "parent_ids": [
          307
        ],
        "is_popular": false
      },
      {
        "id": 948,
        "parent_id": 137,
        "name": "Crown Estate",
        "slug": "crown-estate",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1430,
        "parent_id": 421,
        "name": "Giri",
        "slug": "giri",
        "parent_ids": [
          421,
          405
        ],
        "is_popular": false
      },
      {
        "id": 41,
        "parent_id": 25,
        "name": "Ifelodun-Osun",
        "slug": "ifelodun-osun",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 66,
        "parent_id": 56,
        "name": "Ilaje",
        "slug": "ilaje",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 232,
        "parent_id": 216,
        "name": "Umu Nneochi",
        "slug": "umunneochi",
        "parent_ids": [
          216
        ],
        "is_popular": false
      },
      {
        "id": 367,
        "parent_id": 356,
        "name": "Igbo Ora",
        "slug": "ibarapa-central",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 375,
        "parent_id": 356,
        "name": "Kajola",
        "slug": "kajola",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 1017,
        "parent_id": 146,
        "name": "Mobolaji Bank Anthony Way",
        "slug": "mobolaji-bank-anthony-way",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 197,
        "parent_id": 192,
        "name": "Bosso",
        "slug": "bosso",
        "parent_ids": [
          192
        ],
        "is_popular": true
      },
      {
        "id": 608,
        "parent_id": 604,
        "name": "Burutu",
        "slug": "burutu",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 343,
        "parent_id": 329,
        "name": "Nkwerre",
        "slug": "nkwerre",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 1330,
        "parent_id": 366,
        "name": "Soka",
        "slug": "ibadan-soka",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1240,
        "parent_id": 1237,
        "name": "Ajayi Road",
        "slug": "ajayi-road",
        "parent_ids": [
          1237,
          119
        ],
        "is_popular": false
      },
      {
        "id": 301,
        "parent_id": 288,
        "name": "Obudu",
        "slug": "obudu",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 493,
        "parent_id": 488,
        "name": "Gombi",
        "slug": "gombi",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 194,
        "parent_id": 192,
        "name": "Agwara",
        "slug": "agwara",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 347,
        "parent_id": 329,
        "name": "Ohaji/Egbema",
        "slug": "ohaji-egbema",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 527,
        "parent_id": 526,
        "name": "Alkaleri",
        "slug": "alkaleri",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 289,
        "parent_id": 288,
        "name": "Abi",
        "slug": "abi",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 640,
        "parent_id": 630,
        "name": "Takum",
        "slug": "takum",
        "parent_ids": [
          630
        ],
        "is_popular": true
      },
      {
        "id": 722,
        "parent_id": 704,
        "name": "Zuru",
        "slug": "zuru",
        "parent_ids": [
          704
        ],
        "is_popular": true
      },
      {
        "id": 365,
        "parent_id": 366,
        "name": "Agbowo",
        "slug": "agbowo",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 478,
        "parent_id": 476,
        "name": "Balanga",
        "slug": "balanga",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 620,
        "parent_id": 604,
        "name": "Patani",
        "slug": "patani",
        "parent_ids": [
          604
        ],
        "is_popular": false
      },
      {
        "id": 732,
        "parent_id": 723,
        "name": "Dawakin Kudu",
        "slug": "dawakin-kudu",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 1276,
        "parent_id": 160,
        "name": "Orange Island",
        "slug": "orange-island",
        "parent_ids": [
          160,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1126,
        "parent_id": 174,
        "name": "Eric Moore",
        "slug": "eric-moore",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 773,
        "parent_id": 765,
        "name": "Igbo Eze South",
        "slug": "igbo-eze-north",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 374,
        "parent_id": 356,
        "name": "Iwajowa",
        "slug": "iwajowa",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 813,
        "parent_id": 808,
        "name": "Ezza",
        "slug": "ezza",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 342,
        "parent_id": 329,
        "name": "Njaba",
        "slug": "njaba",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 679,
        "parent_id": 669,
        "name": "Kabba/Bunu",
        "slug": "kabba-bunu",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 1467,
        "parent_id": 447,
        "name": "Zone 7 / Wuse",
        "slug": "wuse-zone-7",
        "parent_ids": [
          447,
          405
        ],
        "is_popular": false
      },
      {
        "id": 64,
        "parent_id": 56,
        "name": "Idanre",
        "slug": "idanre",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 179,
        "parent_id": 176,
        "name": "Edu",
        "slug": "edu",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 1464,
        "parent_id": 447,
        "name": "Zone 4 / Wuse",
        "slug": "wuse-zone-4",
        "parent_ids": [
          447,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1226,
        "parent_id": 128,
        "name": "Boys Town",
        "slug": "boys-town",
        "parent_ids": [
          128,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1411,
        "parent_id": 445,
        "name": "Zone B",
        "slug": "zone-b",
        "parent_ids": [
          445,
          405
        ],
        "is_popular": false
      },
      {
        "id": 271,
        "parent_id": 265,
        "name": "Jaba",
        "slug": "jaba",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 1092,
        "parent_id": 164,
        "name": "Satelite Town",
        "slug": "satelite-town",
        "parent_ids": [
          164,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1357,
        "parent_id": 117,
        "name": "GRA Phase 2 / Port-Harcourt",
        "slug": "ph-gra-phase-2",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1415,
        "parent_id": 417,
        "name": "Area 1",
        "slug": "area-1",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 290,
        "parent_id": 288,
        "name": "Akamkpa",
        "slug": "akamkpa",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 371,
        "parent_id": 356,
        "name": "Irepo",
        "slug": "irepo",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 655,
        "parent_id": 645,
        "name": "Konshisha",
        "slug": "konshisha",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 672,
        "parent_id": 669,
        "name": "Ankpa",
        "slug": "ankpa",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 847,
        "parent_id": 526,
        "name": "Gamawa",
        "slug": "gamawa",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 581,
        "parent_id": 580,
        "name": "Binji",
        "slug": "binji",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 67,
        "parent_id": 56,
        "name": "Ile-Oluji-Okeigbo",
        "slug": "ile-oluji",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 241,
        "parent_id": 235,
        "name": "Etim-Ekpo",
        "slug": "etim-ekpo",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 336,
        "parent_id": 329,
        "name": "Ihitte/Uboma",
        "slug": "ihitte-uboma",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 567,
        "parent_id": 566,
        "name": "Akwanga",
        "slug": "akwanga",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 786,
        "parent_id": 782,
        "name": "Nembe",
        "slug": "nembe",
        "parent_ids": [
          782
        ],
        "is_popular": false
      },
      {
        "id": 668,
        "parent_id": 645,
        "name": "Vandeikya",
        "slug": "vandeikya",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 736,
        "parent_id": 723,
        "name": "Gabasawa",
        "slug": "gabasawa",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 771,
        "parent_id": 765,
        "name": "Igbo-Etiti",
        "slug": "igbo-etiti",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 820,
        "parent_id": 808,
        "name": "Onicha",
        "slug": "onicha",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 390,
        "parent_id": 389,
        "name": "Barkin Ladi",
        "slug": "barkin-ladi",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 1184,
        "parent_id": 130,
        "name": "Age Mowo",
        "slug": "age-mowo",
        "parent_ids": [
          130,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1036,
        "parent_id": 143,
        "name": "Egan",
        "slug": "egan",
        "parent_ids": [
          143,
          119
        ],
        "is_popular": false
      },
      {
        "id": 400,
        "parent_id": 389,
        "name": "Mangu",
        "slug": "mangu",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 477,
        "parent_id": 476,
        "name": "Akko",
        "slug": "akko",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 729,
        "parent_id": 723,
        "name": "Bunkure",
        "slug": "bunkure",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 731,
        "parent_id": 723,
        "name": "Dambatta",
        "slug": "dambatta",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 242,
        "parent_id": 235,
        "name": "Etinan",
        "slug": "etinan",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 247,
        "parent_id": 235,
        "name": "Ikono",
        "slug": "ikono",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 1324,
        "parent_id": 366,
        "name": "Omi Adio",
        "slug": "omi-adio",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 530,
        "parent_id": 526,
        "name": "Damban",
        "slug": "damban",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 352,
        "parent_id": 329,
        "name": "Oru",
        "slug": "oru",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 495,
        "parent_id": 488,
        "name": "Hong",
        "slug": "hong",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 674,
        "parent_id": 669,
        "name": "Dekina",
        "slug": "dekina",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 237,
        "parent_id": 235,
        "name": "Eastern Obolo",
        "slug": "eastern-obolo",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 763,
        "parent_id": 723,
        "name": "Ungogo",
        "slug": "ungogo",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 68,
        "parent_id": 56,
        "name": "Irele",
        "slug": "irele",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 582,
        "parent_id": 580,
        "name": "Bodinga",
        "slug": "bodinga",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 662,
        "parent_id": 645,
        "name": "Oju",
        "slug": "oju",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 339,
        "parent_id": 329,
        "name": "Isu",
        "slug": "isu",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 244,
        "parent_id": 235,
        "name": "Ibesikpo Asutan",
        "slug": "ibesikpo-asutan",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 273,
        "parent_id": 265,
        "name": "Kachia",
        "slug": "kachia",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 378,
        "parent_id": 356,
        "name": "Ogo Oluwa",
        "slug": "oyo-ogo-oluwa",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 587,
        "parent_id": 580,
        "name": "Gudu LGA",
        "slug": "gudu-sokoto",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 742,
        "parent_id": 723,
        "name": "Gwarzo",
        "slug": "gwarzo",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 774,
        "parent_id": 765,
        "name": "Isi-Uzo",
        "slug": "isi-uzo",
        "parent_ids": [
          765
        ],
        "is_popular": false
      },
      {
        "id": 817,
        "parent_id": 808,
        "name": "Ikwo",
        "slug": "ikwo",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 42,
        "parent_id": 25,
        "name": "Ila",
        "slug": "ila",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 294,
        "parent_id": 288,
        "name": "Biase",
        "slug": "biase",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 302,
        "parent_id": 288,
        "name": "Obubra",
        "slug": "obubra",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 305,
        "parent_id": 288,
        "name": "Yala",
        "slug": "yala",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 293,
        "parent_id": 288,
        "name": "Bekwara",
        "slug": "bekwara",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 1158,
        "parent_id": 175,
        "name": "Adekunle",
        "slug": "adekunle",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 396,
        "parent_id": 389,
        "name": "Kanam",
        "slug": "kanam",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 494,
        "parent_id": 488,
        "name": "Guyuk",
        "slug": "guyuk",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 631,
        "parent_id": 630,
        "name": "Ardo-Kola",
        "slug": "ardo-kola",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 203,
        "parent_id": 192,
        "name": "Kontagora",
        "slug": "kontagora",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 306,
        "parent_id": 288,
        "name": "Yakuur",
        "slug": "yakuur",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 398,
        "parent_id": 389,
        "name": "Langtang North",
        "slug": "langtang-north",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 498,
        "parent_id": 488,
        "name": "Madagali",
        "slug": "madagali",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 635,
        "parent_id": 630,
        "name": "Gashaka",
        "slug": "gashaka",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 657,
        "parent_id": 645,
        "name": "Logo",
        "slug": "logo",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 797,
        "parent_id": 791,
        "name": "Emure",
        "slug": "emure",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 818,
        "parent_id": 808,
        "name": "Ohaozara",
        "slug": "ohaozara",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 60,
        "parent_id": 56,
        "name": "Oka",
        "slug": "akoko-south-west",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 248,
        "parent_id": 235,
        "name": "Ikot Abasi",
        "slug": "ikot-abasi",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 272,
        "parent_id": 265,
        "name": "Jema'a",
        "slug": "jemaa",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 491,
        "parent_id": 488,
        "name": "Ganye",
        "slug": "ganye",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 492,
        "parent_id": 488,
        "name": "Girei",
        "slug": "girei",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 1080,
        "parent_id": 158,
        "name": "Onikan",
        "slug": "onikan",
        "parent_ids": [
          158,
          119
        ],
        "is_popular": false
      },
      {
        "id": 929,
        "parent_id": 122,
        "name": "Cement",
        "slug": "cement",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 28,
        "parent_id": 25,
        "name": "Atakumosa East",
        "slug": "atakumosa-east",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 892,
        "parent_id": 821,
        "name": "Ngala",
        "slug": "ngala",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 691,
        "parent_id": 690,
        "name": "Bade",
        "slug": "bade",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 796,
        "parent_id": 791,
        "name": "Aramoko",
        "slug": "ekiti-west",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 823,
        "parent_id": 821,
        "name": "Askira/Uba",
        "slug": "askira",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 870,
        "parent_id": 389,
        "name": "Riyom",
        "slug": "riyom",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 254,
        "parent_id": 235,
        "name": "Nsit Ibom",
        "slug": "nsit-ibom",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 255,
        "parent_id": 235,
        "name": "Nsit Ubium",
        "slug": "nsit-ubium",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 270,
        "parent_id": 265,
        "name": "Ikara",
        "slug": "ikara",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 1009,
        "parent_id": 146,
        "name": "Airport Road / Ikeja",
        "slug": "airport-road",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 285,
        "parent_id": 265,
        "name": "Sanga",
        "slug": "sanga",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 1096,
        "parent_id": 165,
        "name": "Morgan Estate",
        "slug": "morgan-estate",
        "parent_ids": [
          165,
          119
        ],
        "is_popular": false
      },
      {
        "id": 533,
        "parent_id": 526,
        "name": "Ganjuwa",
        "slug": "ganjuwa",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 575,
        "parent_id": 566,
        "name": "Nasarawa-Eggon",
        "slug": "nasarawa-eggon",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 283,
        "parent_id": 265,
        "name": "Makarfi",
        "slug": "makarfi",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 634,
        "parent_id": 630,
        "name": "Donga",
        "slug": "donga",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 738,
        "parent_id": 723,
        "name": "Garum Mallam",
        "slug": "garum-mallam",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 916,
        "parent_id": 1,
        "name": "Biriniwa",
        "slug": "biriniwa",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 49,
        "parent_id": 25,
        "name": "Obokun",
        "slug": "obokun",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 65,
        "parent_id": 56,
        "name": "Ifedore",
        "slug": "ifedore",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 204,
        "parent_id": 192,
        "name": "Lapai",
        "slug": "lapai",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 282,
        "parent_id": 265,
        "name": "Lere",
        "slug": "lere",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 496,
        "parent_id": 488,
        "name": "Jada",
        "slug": "jada",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 511,
        "parent_id": 510,
        "name": "Anka",
        "slug": "anka",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 586,
        "parent_id": 580,
        "name": "Goronyo",
        "slug": "goronyo",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 794,
        "parent_id": 791,
        "name": "Omuo",
        "slug": "ekiti-east",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 947,
        "parent_id": 137,
        "name": "Canaan Estate",
        "slug": "canaan-estate",
        "parent_ids": [
          137,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1134,
        "parent_id": 174,
        "name": "Masha",
        "slug": "masha",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 825,
        "parent_id": 821,
        "name": "Bayo",
        "slug": "bayo",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 2,
        "parent_id": 1,
        "name": "Auyo",
        "slug": "auyo",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 29,
        "parent_id": 25,
        "name": "Atakumosa West",
        "slug": "atakumosa-west",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 251,
        "parent_id": 235,
        "name": "Itu",
        "slug": "itu",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 13,
        "parent_id": 1,
        "name": "Gwiwa",
        "slug": "gwiwa",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 277,
        "parent_id": 265,
        "name": "Kajuru",
        "slug": "kajuru",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 300,
        "parent_id": 288,
        "name": "Obanliku",
        "slug": "obanliku",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 344,
        "parent_id": 329,
        "name": "Nwangele",
        "slug": "nwangele",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 382,
        "parent_id": 356,
        "name": "Orelope",
        "slug": "orelope",
        "parent_ids": [
          356
        ],
        "is_popular": false
      },
      {
        "id": 1433,
        "parent_id": 422,
        "name": "Bunkoro",
        "slug": "bunkoro",
        "parent_ids": [
          422,
          405
        ],
        "is_popular": false
      },
      {
        "id": 403,
        "parent_id": 389,
        "name": "Shendam",
        "slug": "shendam",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 479,
        "parent_id": 476,
        "name": "Billiri",
        "slug": "billiri",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 583,
        "parent_id": 580,
        "name": "Dange-Shuni",
        "slug": "dange-shuni",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 659,
        "parent_id": 645,
        "name": "Obi",
        "slug": "obi",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 660,
        "parent_id": 645,
        "name": "Ogbadibo",
        "slug": "ogbadibo",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 1115,
        "parent_id": 173,
        "name": "Onipanu",
        "slug": "onipanu",
        "parent_ids": [
          173,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1439,
        "parent_id": 425,
        "name": "Phase 4 / Jikwoyi",
        "slug": "jikwoyi-phase-4",
        "parent_ids": [
          425,
          405
        ],
        "is_popular": false
      },
      {
        "id": 692,
        "parent_id": 690,
        "name": "Bursari",
        "slug": "bursari",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 1390,
        "parent_id": 117,
        "name": "Rumuokwurusi",
        "slug": "rumuokwurusi",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1114,
        "parent_id": 173,
        "name": "Obanikoro",
        "slug": "obanikoro",
        "parent_ids": [
          173,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1129,
        "parent_id": 174,
        "name": "Ijesha",
        "slug": "ijesha",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1295,
        "parent_id": 366,
        "name": "Adeoyo",
        "slug": "adeoyo",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 749,
        "parent_id": 723,
        "name": "Kunchi",
        "slug": "kunchi",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 762,
        "parent_id": 723,
        "name": "Tudun Wada",
        "slug": "tudun-wada",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 764,
        "parent_id": 723,
        "name": "Wudil",
        "slug": "wudil",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 824,
        "parent_id": 821,
        "name": "Bama",
        "slug": "bama",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 1042,
        "parent_id": 151,
        "name": "2nd Avenue Extension",
        "slug": "2nd-avenue-extension",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 856,
        "parent_id": 265,
        "name": "Soba",
        "slug": "soba",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 3,
        "parent_id": 1,
        "name": "Babura",
        "slug": "babura",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 1119,
        "parent_id": 174,
        "name": "Adelabu",
        "slug": "adelabu",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 53,
        "parent_id": 25,
        "name": "Oriade",
        "slug": "oriade-osun",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 178,
        "parent_id": 176,
        "name": "Baruten",
        "slug": "baruten",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 258,
        "parent_id": 235,
        "name": "Onna",
        "slug": "onna",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 262,
        "parent_id": 235,
        "name": "Uruan",
        "slug": "uruan",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 404,
        "parent_id": 389,
        "name": "Wase",
        "slug": "wase",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 513,
        "parent_id": 510,
        "name": "Birnin Magaji",
        "slug": "birnin-magaji",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 536,
        "parent_id": 526,
        "name": "Jama'are",
        "slug": "jamaare",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 601,
        "parent_id": 580,
        "name": "Wamako",
        "slug": "wamako",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 638,
        "parent_id": 630,
        "name": "Karim-Lamido",
        "slug": "karim-lamido",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 695,
        "parent_id": 690,
        "name": "Geidam",
        "slug": "geidam",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 733,
        "parent_id": 723,
        "name": "Dawakin Tofa",
        "slug": "dawakin-tofa",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 740,
        "parent_id": 723,
        "name": "Gezawa",
        "slug": "gezawa",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 798,
        "parent_id": 791,
        "name": "Aiyekire (Gbonyin)",
        "slug": "gbonyin",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 805,
        "parent_id": 791,
        "name": "Ise/Orun",
        "slug": "ise-orun",
        "parent_ids": [
          791
        ],
        "is_popular": false
      },
      {
        "id": 1238,
        "parent_id": 1237,
        "name": "Acme Road",
        "slug": "acme-road",
        "parent_ids": [
          1237,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1363,
        "parent_id": 117,
        "name": "Omagwa",
        "slug": "omagwa",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 74,
        "parent_id": 56,
        "name": "Ose",
        "slug": "ose",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 189,
        "parent_id": 176,
        "name": "Oke-Ero",
        "slug": "oke-ero",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 243,
        "parent_id": 235,
        "name": "Ibeno",
        "slug": "ibeno",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 1258,
        "parent_id": 175,
        "name": "Makoko",
        "slug": "makoko",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1443,
        "parent_id": 1441,
        "name": "Basan Jiwa",
        "slug": "basan-jiwa",
        "parent_ids": [
          1441,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1378,
        "parent_id": 117,
        "name": "Rumuepirieli",
        "slug": "rumuepirieli",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 982,
        "parent_id": 127,
        "name": "Trade Fair",
        "slug": "trade-fair",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 245,
        "parent_id": 235,
        "name": "Ibiono Ibom",
        "slug": "ibiono-ibom",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 256,
        "parent_id": 235,
        "name": "Obot Akara",
        "slug": "obot-akara",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 1132,
        "parent_id": 174,
        "name": "Kilo",
        "slug": "kilo",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 670,
        "parent_id": 669,
        "name": "Adavi",
        "slug": "adavi",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 1305,
        "parent_id": 366,
        "name": "Ibadan North West",
        "slug": "ibadan-north-west",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1422,
        "parent_id": 417,
        "name": "Area 8",
        "slug": "area-8",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 30,
        "parent_id": 25,
        "name": "Boluwaduro",
        "slug": "boluwaduro",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 276,
        "parent_id": 265,
        "name": "Kagarko",
        "slug": "kagarko",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 402,
        "parent_id": 389,
        "name": "Quaan Pan",
        "slug": "quaan-pan",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 1404,
        "parent_id": 117,
        "name": "Uzoba",
        "slug": "uzoba",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1318,
        "parent_id": 366,
        "name": "Oke Ado",
        "slug": "oke-ado",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1246,
        "parent_id": 1237,
        "name": "Wempco Road",
        "slug": "wempco-road",
        "parent_ids": [
          1237,
          119
        ],
        "is_popular": false
      },
      {
        "id": 481,
        "parent_id": 476,
        "name": "Funakaye",
        "slug": "funakaye",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 512,
        "parent_id": 510,
        "name": "Bakura",
        "slug": "bakura",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 1254,
        "parent_id": 174,
        "name": "Ijeshatedo",
        "slug": "ijeshatedo",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 531,
        "parent_id": 526,
        "name": "Darazo",
        "slug": "darazo",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 532,
        "parent_id": 526,
        "name": "Dass",
        "slug": "dass",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 537,
        "parent_id": 526,
        "name": "Katagum",
        "slug": "katagum",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 573,
        "parent_id": 566,
        "name": "Kokona",
        "slug": "kokona",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 590,
        "parent_id": 580,
        "name": "Kebbe",
        "slug": "kebbe",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 261,
        "parent_id": 235,
        "name": "Ukanafun",
        "slug": "ukanafun",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 675,
        "parent_id": 669,
        "name": "Ibaji",
        "slug": "ibaji",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 279,
        "parent_id": 265,
        "name": "Kauru",
        "slug": "kauru",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 298,
        "parent_id": 288,
        "name": "Etung",
        "slug": "etung",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 392,
        "parent_id": 389,
        "name": "Bokkos",
        "slug": "bokkos",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 399,
        "parent_id": 389,
        "name": "Langtang South",
        "slug": "langtang-south",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 452,
        "parent_id": 449,
        "name": "Batsari",
        "slug": "batsari",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 463,
        "parent_id": 449,
        "name": "Funtua",
        "slug": "funtua",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 500,
        "parent_id": 488,
        "name": "Mayo-Belwa",
        "slug": "mayo-belwa",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 591,
        "parent_id": 580,
        "name": "Kware",
        "slug": "kware",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 632,
        "parent_id": 630,
        "name": "Bali",
        "slug": "bali",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 636,
        "parent_id": 630,
        "name": "Ibi",
        "slug": "ibi",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 208,
        "parent_id": 192,
        "name": "Mokwa",
        "slug": "mokwa",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 734,
        "parent_id": 723,
        "name": "Doguwa",
        "slug": "doguwa",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 861,
        "parent_id": 723,
        "name": "Warawa",
        "slug": "warawa",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 873,
        "parent_id": 630,
        "name": "Kurmi",
        "slug": "kurmi",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 882,
        "parent_id": 235,
        "name": "Oruk Anam",
        "slug": "oruk-anam",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 894,
        "parent_id": 808,
        "name": "Izzi",
        "slug": "izzi",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 246,
        "parent_id": 235,
        "name": "Ika",
        "slug": "ika",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 280,
        "parent_id": 265,
        "name": "Kubau",
        "slug": "kubau",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 286,
        "parent_id": 265,
        "name": "Zango-Kataf",
        "slug": "zango-kataf",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 899,
        "parent_id": 1,
        "name": "Sule-Tankarkar",
        "slug": "sule-tankarkar",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 303,
        "parent_id": 288,
        "name": "Odukpani",
        "slug": "odukpani",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 680,
        "parent_id": 669,
        "name": "Koton Karfe",
        "slug": "kotonkarfe-kogi",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 450,
        "parent_id": 449,
        "name": "Bakori",
        "slug": "bakori",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 487,
        "parent_id": 476,
        "name": "Yamaltu/Deba",
        "slug": "yamaltu-deba",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 1188,
        "parent_id": 130,
        "name": "Mafo",
        "slug": "mafo",
        "parent_ids": [
          130,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1353,
        "parent_id": 117,
        "name": "Elimbu",
        "slug": "elimbu",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 644,
        "parent_id": 630,
        "name": "Lau",
        "slug": "lau",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 663,
        "parent_id": 645,
        "name": "Okpokwu",
        "slug": "okpokwu",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 995,
        "parent_id": 913,
        "name": "Phase 1 / Gbagada",
        "slug": "gbagada-phase-1",
        "parent_ids": [
          913,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1182,
        "parent_id": 124,
        "name": "Orisunbare",
        "slug": "orisunbare",
        "parent_ids": [
          124,
          119
        ],
        "is_popular": false
      },
      {
        "id": 985,
        "parent_id": 133,
        "name": "Council",
        "slug": "council",
        "parent_ids": [
          133,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1057,
        "parent_id": 163,
        "name": "Coker Road",
        "slug": "coker-road",
        "parent_ids": [
          163,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1187,
        "parent_id": 130,
        "name": "Ilogbo Eremi",
        "slug": "ilogbo-eremi",
        "parent_ids": [
          130,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1209,
        "parent_id": 140,
        "name": "Idi-Orogbo",
        "slug": "idi-orogbo",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1253,
        "parent_id": 174,
        "name": "Barracks",
        "slug": "barracks",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 252,
        "parent_id": 235,
        "name": "Mbo",
        "slug": "mbo",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 667,
        "parent_id": 645,
        "name": "Ushongo",
        "slug": "ushongo",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 746,
        "parent_id": 723,
        "name": "Kibiya",
        "slug": "kibiya",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 747,
        "parent_id": 723,
        "name": "Kiru",
        "slug": "kiru",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 819,
        "parent_id": 808,
        "name": "Ohaukwu",
        "slug": "ohaukwu",
        "parent_ids": [
          808
        ],
        "is_popular": false
      },
      {
        "id": 827,
        "parent_id": 821,
        "name": "Chibok",
        "slug": "chibok",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 828,
        "parent_id": 821,
        "name": "Damboa",
        "slug": "damboa",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 831,
        "parent_id": 821,
        "name": "Jere",
        "slug": "jere",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 846,
        "parent_id": 154,
        "name": "Osolo Way",
        "slug": "osolo-way",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 859,
        "parent_id": 723,
        "name": "Garun Mallam",
        "slug": "garun-mallam",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 871,
        "parent_id": 630,
        "name": "Gassol",
        "slug": "gassol",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 898,
        "parent_id": 329,
        "name": "Onuimo",
        "slug": "onuimo",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 58,
        "parent_id": 56,
        "name": "Okeagbe",
        "slug": "akoko-north-west",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 196,
        "parent_id": 192,
        "name": "Borgu",
        "slug": "borgu",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 981,
        "parent_id": 127,
        "name": "Tin Can",
        "slug": "tin-can",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1313,
        "parent_id": 366,
        "name": "Molete",
        "slug": "molete",
        "parent_ids": [
          366,
          356
        ],
        "is_popular": false
      },
      {
        "id": 480,
        "parent_id": 476,
        "name": "Dukku",
        "slug": "dukku",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 483,
        "parent_id": 476,
        "name": "Kaltungo",
        "slug": "kaltungo",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 1193,
        "parent_id": 134,
        "name": "Olla",
        "slug": "olla",
        "parent_ids": [
          134,
          119
        ],
        "is_popular": false
      },
      {
        "id": 485,
        "parent_id": 476,
        "name": "Nafada",
        "slug": "nafada",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 519,
        "parent_id": 510,
        "name": "Maradun",
        "slug": "maradun",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 523,
        "parent_id": 510,
        "name": "Talata Mafara",
        "slug": "talata-mafara",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 535,
        "parent_id": 526,
        "name": "Itas/Gadau",
        "slug": "itas",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 544,
        "parent_id": 526,
        "name": "Zaki",
        "slug": "zaki",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 569,
        "parent_id": 566,
        "name": "Doma",
        "slug": "doma",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 1394,
        "parent_id": 117,
        "name": "Rumuoparali",
        "slug": "rumuoparali",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 577,
        "parent_id": 566,
        "name": "Obi-Nasarawa",
        "slug": "obi-nasarawa",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 578,
        "parent_id": 566,
        "name": "Toto",
        "slug": "toto",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 665,
        "parent_id": 645,
        "name": "Tarka",
        "slug": "tarka",
        "parent_ids": [
          645
        ],
        "is_popular": false
      },
      {
        "id": 1402,
        "parent_id": 117,
        "name": "Shell Location",
        "slug": "shell-location",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 350,
        "parent_id": 329,
        "name": "Orsu",
        "slug": "orsu",
        "parent_ids": [
          329
        ],
        "is_popular": false
      },
      {
        "id": 683,
        "parent_id": 669,
        "name": "Ofu",
        "slug": "ofu",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 694,
        "parent_id": 690,
        "name": "Fika",
        "slug": "fika",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 696,
        "parent_id": 690,
        "name": "Gujba",
        "slug": "gujba",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 699,
        "parent_id": 690,
        "name": "Karasuwa",
        "slug": "karasuwa",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 705,
        "parent_id": 704,
        "name": "Aleiro",
        "slug": "aleiro",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 717,
        "parent_id": 704,
        "name": "Sakaba",
        "slug": "sakaba",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 1076,
        "parent_id": 158,
        "name": "C.M.S",
        "slug": "cms",
        "parent_ids": [
          158,
          119
        ],
        "is_popular": false
      },
      {
        "id": 739,
        "parent_id": 723,
        "name": "Gaya",
        "slug": "gaya",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 743,
        "parent_id": 723,
        "name": "Kabo",
        "slug": "kabo",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 924,
        "parent_id": 235,
        "name": "Nsit Atai",
        "slug": "nsit-atai",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 1085,
        "parent_id": 162,
        "name": "Ilasamaja",
        "slug": "ilasamaja",
        "parent_ids": [
          162,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1369,
        "parent_id": 117,
        "name": "Rainbow Town",
        "slug": "rainbow-town",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 8,
        "parent_id": 1,
        "name": "Gagarawa",
        "slug": "gagarawa",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 54,
        "parent_id": 25,
        "name": "Orolu",
        "slug": "orolu",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 210,
        "parent_id": 192,
        "name": "Paikoro",
        "slug": "paikoro",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 250,
        "parent_id": 235,
        "name": "Ini",
        "slug": "ini",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 257,
        "parent_id": 235,
        "name": "Okobo",
        "slug": "okobo",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 281,
        "parent_id": 265,
        "name": "Kudan",
        "slug": "kudan",
        "parent_ids": [
          265
        ],
        "is_popular": false
      },
      {
        "id": 401,
        "parent_id": 389,
        "name": "Pankshin",
        "slug": "pankshin",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 454,
        "parent_id": 449,
        "name": "Bindawa",
        "slug": "bindawa",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 504,
        "parent_id": 488,
        "name": "Numan",
        "slug": "numan",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 540,
        "parent_id": 526,
        "name": "Ningi",
        "slug": "ningi",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 543,
        "parent_id": 526,
        "name": "Warji",
        "slug": "warji",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 503,
        "parent_id": 488,
        "name": "Mubi South",
        "slug": "mubi-south",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 598,
        "parent_id": 580,
        "name": "Tambuwal",
        "slug": "tambuwal",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 599,
        "parent_id": 580,
        "name": "Tangaza",
        "slug": "tangaza",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 639,
        "parent_id": 630,
        "name": "Sardauna",
        "slug": "sardauna",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 707,
        "parent_id": 704,
        "name": "Argungu",
        "slug": "argungu",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 759,
        "parent_id": 723,
        "name": "Sumaila",
        "slug": "sumaila",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 721,
        "parent_id": 704,
        "name": "Yauri",
        "slug": "yauri",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 826,
        "parent_id": 821,
        "name": "Biu",
        "slug": "biu",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 920,
        "parent_id": 690,
        "name": "Fune",
        "slug": "fune",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 1350,
        "parent_id": 117,
        "name": "East West Road",
        "slug": "east-west-road",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 858,
        "parent_id": 723,
        "name": "Rogo",
        "slug": "rogo",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 10,
        "parent_id": 1,
        "name": "Gumel",
        "slug": "gumel",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 921,
        "parent_id": 669,
        "name": "Igalamela-Odolu",
        "slug": "igalamela-odolu",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 191,
        "parent_id": 176,
        "name": "Pategi",
        "slug": "pategi",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 1125,
        "parent_id": 174,
        "name": "Coker",
        "slug": "coker",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1105,
        "parent_id": 171,
        "name": "Bolade",
        "slug": "bolade",
        "parent_ids": [
          171,
          119
        ],
        "is_popular": false
      },
      {
        "id": 193,
        "parent_id": 192,
        "name": "Agaie",
        "slug": "agaie",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 260,
        "parent_id": 235,
        "name": "Udung Uko",
        "slug": "udung-uko",
        "parent_ids": [
          235
        ],
        "is_popular": false
      },
      {
        "id": 451,
        "parent_id": 449,
        "name": "Batagarawa",
        "slug": "batagarawa",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 295,
        "parent_id": 288,
        "name": "Boki",
        "slug": "boki",
        "parent_ids": [
          288
        ],
        "is_popular": false
      },
      {
        "id": 461,
        "parent_id": 449,
        "name": "Dutsin-Ma",
        "slug": "dutsin-ma",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 484,
        "parent_id": 476,
        "name": "Kwami",
        "slug": "kwami",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 497,
        "parent_id": 488,
        "name": "Lamurde",
        "slug": "lamurde",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 514,
        "parent_id": 510,
        "name": "Bukkuyum",
        "slug": "bukkuyum",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 579,
        "parent_id": 566,
        "name": "Wamba",
        "slug": "wamba",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 571,
        "parent_id": 566,
        "name": "Keana",
        "slug": "keana",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 589,
        "parent_id": 580,
        "name": "Isa",
        "slug": "isa",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 678,
        "parent_id": 669,
        "name": "Ijumu",
        "slug": "ijumu",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 874,
        "parent_id": 690,
        "name": "Nangere",
        "slug": "nangere",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 697,
        "parent_id": 690,
        "name": "Gulani",
        "slug": "gulani",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 698,
        "parent_id": 690,
        "name": "Jakusko",
        "slug": "jakusko",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 880,
        "parent_id": 1,
        "name": "Kazaure",
        "slug": "kazaure",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 701,
        "parent_id": 690,
        "name": "Machina",
        "slug": "machina",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 702,
        "parent_id": 690,
        "name": "Nguru",
        "slug": "nguru",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 709,
        "parent_id": 704,
        "name": "Bagudo",
        "slug": "bagudo",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 761,
        "parent_id": 723,
        "name": "Tofa",
        "slug": "tofa",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 833,
        "parent_id": 821,
        "name": "Kukawa",
        "slug": "kukawa",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 864,
        "parent_id": 449,
        "name": "Musawa",
        "slug": "musawa",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 876,
        "parent_id": 690,
        "name": "Yusufari",
        "slug": "yusufari",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 200,
        "parent_id": 192,
        "name": "Gbako",
        "slug": "gbako",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 206,
        "parent_id": 192,
        "name": "Magama",
        "slug": "magama",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 453,
        "parent_id": 449,
        "name": "Baure",
        "slug": "baure",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 470,
        "parent_id": 449,
        "name": "Malumfashi",
        "slug": "malumfashi",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 186,
        "parent_id": 176,
        "name": "Kaiama",
        "slug": "kaiama",
        "parent_ids": [
          176
        ],
        "is_popular": false
      },
      {
        "id": 520,
        "parent_id": 510,
        "name": "Maru",
        "slug": "maru",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 524,
        "parent_id": 510,
        "name": "Tsafe",
        "slug": "tsafe",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 538,
        "parent_id": 526,
        "name": "Kirfi",
        "slug": "kirfi",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 962,
        "parent_id": 124,
        "name": "Pipeline",
        "slug": "pipeline",
        "parent_ids": [
          124,
          119
        ],
        "is_popular": false
      },
      {
        "id": 542,
        "parent_id": 526,
        "name": "Toro",
        "slug": "toro",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 1337,
        "parent_id": 377,
        "name": "Ogbomosho / Ogbomosho South",
        "slug": "ogbomosho",
        "parent_ids": [
          377,
          356
        ],
        "is_popular": false
      },
      {
        "id": 568,
        "parent_id": 566,
        "name": "Awe",
        "slug": "awe",
        "parent_ids": [
          566
        ],
        "is_popular": false
      },
      {
        "id": 592,
        "parent_id": 580,
        "name": "Rabah",
        "slug": "rabah",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 673,
        "parent_id": 669,
        "name": "Bassa",
        "slug": "bassa",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 688,
        "parent_id": 669,
        "name": "Yagba East",
        "slug": "yagba-east",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 689,
        "parent_id": 669,
        "name": "Yagba West",
        "slug": "yagba-west",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 522,
        "parent_id": 510,
        "name": "Shinkafi",
        "slug": "shinkafi",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 706,
        "parent_id": 704,
        "name": "Arewa-Dandi",
        "slug": "arewa-dandi",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 752,
        "parent_id": 723,
        "name": "Makoda",
        "slug": "makoda",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 893,
        "parent_id": 821,
        "name": "Nganzai",
        "slug": "nganzai",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 832,
        "parent_id": 821,
        "name": "Kala/Balge",
        "slug": "kala",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 902,
        "parent_id": 449,
        "name": "Mai'adua",
        "slug": "maiadua",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 852,
        "parent_id": 821,
        "name": "Monguno",
        "slug": "monguno",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 857,
        "parent_id": 723,
        "name": "Tsanyawa",
        "slug": "tsanyawa",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 888,
        "parent_id": 821,
        "name": "Kaga",
        "slug": "kaga",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 900,
        "parent_id": 449,
        "name": "Kaita",
        "slug": "kaita",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 919,
        "parent_id": 704,
        "name": "Fakai",
        "slug": "fakai",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 1202,
        "parent_id": 140,
        "name": "Magbon-Alade",
        "slug": "magbon-alade",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1359,
        "parent_id": 117,
        "name": "New Layout",
        "slug": "new-layout",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1387,
        "parent_id": 117,
        "name": "Rumuokoro",
        "slug": "rumuokoro",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 18,
        "parent_id": 1,
        "name": "Kiri Kasamma",
        "slug": "kiri-kasamma",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 20,
        "parent_id": 1,
        "name": "Maigatari",
        "slug": "maigatari",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 21,
        "parent_id": 1,
        "name": "Malam Madori",
        "slug": "malam-madori",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 23,
        "parent_id": 1,
        "name": "Taura",
        "slug": "taura",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 1048,
        "parent_id": 151,
        "name": "Falomo",
        "slug": "falomo",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 937,
        "parent_id": 122,
        "name": "Oke-Odo",
        "slug": "oke-odo",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1185,
        "parent_id": 130,
        "name": "Ajido",
        "slug": "ajido",
        "parent_ids": [
          130,
          119
        ],
        "is_popular": false
      },
      {
        "id": 977,
        "parent_id": 127,
        "name": "Kirikiri 1",
        "slug": "kirikiri-1",
        "parent_ids": [
          127,
          119
        ],
        "is_popular": false
      },
      {
        "id": 928,
        "parent_id": 122,
        "name": "Capitol",
        "slug": "capitol",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1052,
        "parent_id": 151,
        "name": "Mosley Road",
        "slug": "mosley-road",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1349,
        "parent_id": 117,
        "name": "Diobu Mile 4",
        "slug": "diobu-mile-4",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 59,
        "parent_id": 56,
        "name": "Isua",
        "slug": "akoko-south-east",
        "parent_ids": [
          56
        ],
        "is_popular": false
      },
      {
        "id": 205,
        "parent_id": 192,
        "name": "Lavun",
        "slug": "lavun",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 1228,
        "parent_id": 154,
        "name": "Cele",
        "slug": "cele",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 456,
        "parent_id": 449,
        "name": "Dan Musa",
        "slug": "dan-musa",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 464,
        "parent_id": 449,
        "name": "Ingawa",
        "slug": "ingawa",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 1149,
        "parent_id": 153,
        "name": "Karimu Kotun",
        "slug": "karimu-kotun",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1448,
        "parent_id": 1441,
        "name": "Zhidu",
        "slug": "zhidu",
        "parent_ids": [
          1441,
          405
        ],
        "is_popular": false
      },
      {
        "id": 499,
        "parent_id": 488,
        "name": "Maiha",
        "slug": "maiha",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 507,
        "parent_id": 488,
        "name": "Toungo",
        "slug": "toungo",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 602,
        "parent_id": 580,
        "name": "Wurno",
        "slug": "wurno",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 641,
        "parent_id": 630,
        "name": "Ussa",
        "slug": "ussa",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 684,
        "parent_id": 669,
        "name": "Ogori/Magongo",
        "slug": "ogori-magongo",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 685,
        "parent_id": 669,
        "name": "Okehi",
        "slug": "okehi",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 703,
        "parent_id": 690,
        "name": "Yunusari",
        "slug": "yunusari",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 711,
        "parent_id": 704,
        "name": "Bunza",
        "slug": "bunza",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 719,
        "parent_id": 704,
        "name": "Suru",
        "slug": "suru",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 751,
        "parent_id": 723,
        "name": "Madobi",
        "slug": "madobi",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 904,
        "parent_id": 704,
        "name": "Maiyama",
        "slug": "maiyama",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 848,
        "parent_id": 821,
        "name": "Dikwa",
        "slug": "dikwa",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 865,
        "parent_id": 449,
        "name": "Rimi",
        "slug": "rimi",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 885,
        "parent_id": 526,
        "name": "Shira",
        "slug": "shira",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 925,
        "parent_id": 690,
        "name": "Tarmua",
        "slug": "tarmua",
        "parent_ids": [
          690
        ],
        "is_popular": false
      },
      {
        "id": 935,
        "parent_id": 122,
        "name": "Magbon",
        "slug": "magbon",
        "parent_ids": [
          122,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1194,
        "parent_id": 134,
        "name": "Orilowo",
        "slug": "orilowo",
        "parent_ids": [
          134,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1211,
        "parent_id": 140,
        "name": "Mopo-Ijebu Eputu",
        "slug": "mopo-ijebu-eputu",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 677,
        "parent_id": 669,
        "name": "Igala Mela",
        "slug": "igala-mela",
        "parent_ids": [
          669
        ],
        "is_popular": false
      },
      {
        "id": 887,
        "parent_id": 821,
        "name": "Hawul",
        "slug": "hawul",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 1232,
        "parent_id": 158,
        "name": "Idumota",
        "slug": "idumota",
        "parent_ids": [
          158,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1366,
        "parent_id": 117,
        "name": "Orogbum",
        "slug": "orogbum",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1427,
        "parent_id": 1426,
        "name": "Kaba",
        "slug": "kaba",
        "parent_ids": [
          1426,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1382,
        "parent_id": 117,
        "name": "Rumukalagbo",
        "slug": "rumukalagbo",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1255,
        "parent_id": 174,
        "name": "Papa Ajao / Surulere",
        "slug": "surulere-papa-ajao",
        "parent_ids": [
          174,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1346,
        "parent_id": 117,
        "name": "Diobu Mile 1",
        "slug": "diobu-mile-1",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 891,
        "parent_id": 821,
        "name": "Mobbar",
        "slug": "mobbar",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 903,
        "parent_id": 449,
        "name": "Sabuwa",
        "slug": "sabuwa",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 1060,
        "parent_id": 163,
        "name": "Town Planning Way",
        "slug": "town-planning-way",
        "parent_ids": [
          163,
          119
        ],
        "is_popular": false
      },
      {
        "id": 712,
        "parent_id": 704,
        "name": "Dandi",
        "slug": "dandi",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 1260,
        "parent_id": 175,
        "name": "Saint Agnes",
        "slug": "saint-agnes",
        "parent_ids": [
          175,
          119
        ],
        "is_popular": false
      },
      {
        "id": 923,
        "parent_id": 389,
        "name": "Mikang",
        "slug": "mikang",
        "parent_ids": [
          389
        ],
        "is_popular": false
      },
      {
        "id": 15,
        "parent_id": 1,
        "name": "Jahun",
        "slug": "jahun",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 1376,
        "parent_id": 117,
        "name": "Rumuekwe",
        "slug": "rumuekwe",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 19,
        "parent_id": 1,
        "name": "Kiyawa",
        "slug": "kiyawa",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 24,
        "parent_id": 1,
        "name": "Yankwashi",
        "slug": "yankwashi",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 1152,
        "parent_id": 153,
        "name": "Saka Tinubu",
        "slug": "saka-tinubu",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 209,
        "parent_id": 192,
        "name": "Muya",
        "slug": "muya",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 467,
        "parent_id": 449,
        "name": "Kankara",
        "slug": "kankara",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 1103,
        "parent_id": 171,
        "name": "Airport Road / Oshodi",
        "slug": "airport-road-oshodi",
        "parent_ids": [
          171,
          119
        ],
        "is_popular": false
      },
      {
        "id": 211,
        "parent_id": 192,
        "name": "Rafi",
        "slug": "rafi",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 1281,
        "parent_id": 357,
        "name": "Aawe",
        "slug": "aawe",
        "parent_ids": [
          357,
          356
        ],
        "is_popular": false
      },
      {
        "id": 1451,
        "parent_id": 426,
        "name": "Ketti",
        "slug": "ketti",
        "parent_ids": [
          426,
          405
        ],
        "is_popular": false
      },
      {
        "id": 1336,
        "parent_id": 377,
        "name": "Arowomole",
        "slug": "arowomole",
        "parent_ids": [
          377,
          356
        ],
        "is_popular": false
      },
      {
        "id": 201,
        "parent_id": 192,
        "name": "Gurara",
        "slug": "gurara",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 1043,
        "parent_id": 151,
        "name": "Abacha Estate",
        "slug": "abacha-estate",
        "parent_ids": [
          151,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1215,
        "parent_id": 146,
        "name": "Computer Village",
        "slug": "ikeja-computer-village",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1079,
        "parent_id": 158,
        "name": "Obalende",
        "slug": "obalende",
        "parent_ids": [
          158,
          119
        ],
        "is_popular": false
      },
      {
        "id": 466,
        "parent_id": 449,
        "name": "Kafur",
        "slug": "kafur",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 515,
        "parent_id": 510,
        "name": "Bungudu",
        "slug": "bungudu",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 969,
        "parent_id": 125,
        "name": "Green Estate",
        "slug": "green-estate",
        "parent_ids": [
          125,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1071,
        "parent_id": 154,
        "name": "Mile 2",
        "slug": "mile-2",
        "parent_ids": [
          154,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1110,
        "parent_id": 171,
        "name": "Matori",
        "slug": "matori",
        "parent_ids": [
          171,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1146,
        "parent_id": 153,
        "name": "Akin Olugbade",
        "slug": "akin-olugbade",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1148,
        "parent_id": 153,
        "name": "Idowu Taylor",
        "slug": "idowu-taylor",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 516,
        "parent_id": 510,
        "name": "Gummi",
        "slug": "gummi",
        "parent_ids": [
          510
        ],
        "is_popular": false
      },
      {
        "id": 600,
        "parent_id": 580,
        "name": "Tureta",
        "slug": "tureta",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 716,
        "parent_id": 704,
        "name": "Ngaski",
        "slug": "ngaski",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 14,
        "parent_id": 1,
        "name": "Hadejia",
        "slug": "hadejia",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 720,
        "parent_id": 704,
        "name": "Wasagu/Danko",
        "slug": "wasagu-danko",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 830,
        "parent_id": 821,
        "name": "Guzamala",
        "slug": "guzamala",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 850,
        "parent_id": 821,
        "name": "Shani",
        "slug": "shani",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 474,
        "parent_id": 449,
        "name": "Sandamu",
        "slug": "sandamu",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 758,
        "parent_id": 723,
        "name": "Shanono",
        "slug": "shanono",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 718,
        "parent_id": 704,
        "name": "Shanga",
        "slug": "shanga",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 854,
        "parent_id": 1,
        "name": "Ringim",
        "slug": "ringim",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 473,
        "parent_id": 449,
        "name": "Safana",
        "slug": "safana",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 469,
        "parent_id": 449,
        "name": "Kusada",
        "slug": "kusada",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 1392,
        "parent_id": 117,
        "name": "Rumuomasi",
        "slug": "rumuomasi",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1203,
        "parent_id": 140,
        "name": "Iberikodo",
        "slug": "iberikodo",
        "parent_ids": [
          140,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1013,
        "parent_id": 146,
        "name": "Balogun",
        "slug": "balogun",
        "parent_ids": [
          146,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1364,
        "parent_id": 117,
        "name": "Orada Diobu",
        "slug": "orada-diobu",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 860,
        "parent_id": 723,
        "name": "Takai",
        "slug": "takai",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 862,
        "parent_id": 449,
        "name": "Kurfi",
        "slug": "kurfi",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 505,
        "parent_id": 488,
        "name": "Shelleng",
        "slug": "shelleng",
        "parent_ids": [
          488
        ],
        "is_popular": false
      },
      {
        "id": 1420,
        "parent_id": 417,
        "name": "Area 6",
        "slug": "area-6",
        "parent_ids": [
          417,
          405
        ],
        "is_popular": false
      },
      {
        "id": 539,
        "parent_id": 526,
        "name": "Misau",
        "slug": "misau",
        "parent_ids": [
          526
        ],
        "is_popular": false
      },
      {
        "id": 51,
        "parent_id": 25,
        "name": "Ola-Oluwa",
        "slug": "ola-oluwa",
        "parent_ids": [
          25
        ],
        "is_popular": false
      },
      {
        "id": 872,
        "parent_id": 630,
        "name": "Yorro",
        "slug": "yorro",
        "parent_ids": [
          630
        ],
        "is_popular": false
      },
      {
        "id": 901,
        "parent_id": 449,
        "name": "Kankia",
        "slug": "kankia",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 909,
        "parent_id": 192,
        "name": "Mashegu",
        "slug": "mashegu",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 1154,
        "parent_id": 153,
        "name": "Tiamiyu Savage",
        "slug": "tiamiyu-savage",
        "parent_ids": [
          153,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1377,
        "parent_id": 117,
        "name": "Rumueme",
        "slug": "rumueme",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 6,
        "parent_id": 1,
        "name": "Buji",
        "slug": "buji",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 593,
        "parent_id": 580,
        "name": "Sabon Birni",
        "slug": "sabon-birni",
        "parent_ids": [
          580
        ],
        "is_popular": false
      },
      {
        "id": 11,
        "parent_id": 1,
        "name": "Guri",
        "slug": "guri",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 17,
        "parent_id": 1,
        "name": "Kaugama",
        "slug": "kaugama",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 202,
        "parent_id": 192,
        "name": "Katcha",
        "slug": "katcha",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 207,
        "parent_id": 192,
        "name": "Mariga",
        "slug": "mariga",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 212,
        "parent_id": 192,
        "name": "Shiroro",
        "slug": "shiroro",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 863,
        "parent_id": 449,
        "name": "Matazu",
        "slug": "matazu",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 215,
        "parent_id": 192,
        "name": "Wushishi",
        "slug": "wushishi",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 455,
        "parent_id": 449,
        "name": "Charanchi",
        "slug": "charanchi",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 460,
        "parent_id": 449,
        "name": "Dutsi",
        "slug": "dutsi",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 462,
        "parent_id": 449,
        "name": "Faskari",
        "slug": "faskari",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 1113,
        "parent_id": 173,
        "name": "Ikorodu Road / Shomolu",
        "slug": "shomolu-ikorodu-road",
        "parent_ids": [
          173,
          119
        ],
        "is_popular": false
      },
      {
        "id": 1365,
        "parent_id": 117,
        "name": "Orazi",
        "slug": "orazi",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 1399,
        "parent_id": 117,
        "name": "Rumuwaji",
        "slug": "rumuwaji",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      },
      {
        "id": 457,
        "parent_id": 449,
        "name": "Dandume",
        "slug": "dandume",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 465,
        "parent_id": 449,
        "name": "Jibia",
        "slug": "jibia",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 471,
        "parent_id": 449,
        "name": "Mani",
        "slug": "mani",
        "parent_ids": [
          449
        ],
        "is_popular": false
      },
      {
        "id": 486,
        "parent_id": 476,
        "name": "Shomgom",
        "slug": "shomgom",
        "parent_ids": [
          476
        ],
        "is_popular": false
      },
      {
        "id": 713,
        "parent_id": 704,
        "name": "Gwandu",
        "slug": "gwandu",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 754,
        "parent_id": 723,
        "name": "Minjibir",
        "slug": "minjibir",
        "parent_ids": [
          723
        ],
        "is_popular": false
      },
      {
        "id": 829,
        "parent_id": 821,
        "name": "Gubio",
        "slug": "gubio",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 834,
        "parent_id": 821,
        "name": "Mafa",
        "slug": "mafa",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 855,
        "parent_id": 1,
        "name": "Roni",
        "slug": "roni",
        "parent_ids": [
          1
        ],
        "is_popular": false
      },
      {
        "id": 866,
        "parent_id": 704,
        "name": "Koko/Besse",
        "slug": "koko-besse",
        "parent_ids": [
          704
        ],
        "is_popular": false
      },
      {
        "id": 868,
        "parent_id": 192,
        "name": "Rijau",
        "slug": "rijau",
        "parent_ids": [
          192
        ],
        "is_popular": false
      },
      {
        "id": 851,
        "parent_id": 821,
        "name": "Marte",
        "slug": "marte",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 835,
        "parent_id": 821,
        "name": "Magumeri",
        "slug": "magumeri",
        "parent_ids": [
          821
        ],
        "is_popular": false
      },
      {
        "id": 1362,
        "parent_id": 117,
        "name": "Olu Obasanjo",
        "slug": "olu-obasanjo",
        "parent_ids": [
          117,
          95
        ],
        "is_popular": false
      }
    ],
    "third_level_region_category_ids": [
      42,
      43,
      44,
      45,
      46,
      77,
      276,
      277,
      278,
      282,
      283,
      395,
      9
    ],
    "hidden_regions": [],
    "categories": [
      {
        "id": 5,
        "parent_id": null,
        "slug": "vehicles",
        "name": "Vehicles",
        "image": "vehicles",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/vehicles-x3.png",
        "position": 100,
        "childes": [
          {
            "id": 49,
            "parent_id": 5,
            "slug": "cars",
            "name": "Cars",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/vehicles-x3.png",
            "position": 101,
            "childes": []
          },
          {
            "id": 50,
            "parent_id": 5,
            "slug": "buses",
            "name": "Buses & Microbuses",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/vehicles/buses-x3.png",
            "position": 102,
            "childes": []
          },
          {
            "id": 51,
            "parent_id": 5,
            "slug": "heavy-equipments-machinery",
            "name": "Heavy Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/vehicles/heavy-equipment-x3.png",
            "position": 103,
            "childes": []
          },
          {
            "id": 52,
            "parent_id": 5,
            "slug": "motorcycles-and-scooters",
            "name": "Motorcycles & Scooters",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/vehicles/moto.png",
            "position": 104,
            "childes": []
          },
          {
            "id": 53,
            "parent_id": 5,
            "slug": "trucks-commercial-agricultiral",
            "name": "Trucks & Trailers",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/vehicles/trucks-and-trailers-x3.png",
            "position": 105,
            "childes": []
          },
          {
            "id": 54,
            "parent_id": 5,
            "slug": "car-parts-and-accessories",
            "name": "Vehicle Parts & Accessories",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/vehicles/vehicle-parts-and-accessories-x3.png",
            "position": 106,
            "childes": []
          },
          {
            "id": 55,
            "parent_id": 5,
            "slug": "watercrafts-vehicle",
            "name": "Watercraft & Boats",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/vehicles/watercrafts-x3.png",
            "position": 108,
            "childes": []
          },
          {
            "id": 186,
            "parent_id": 15,
            "slug": "automotive-services",
            "name": "Automotive Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/automotive-services-x3.png",
            "position": 1001,
            "childes": []
          }
        ]
      },
      {
        "id": 8,
        "parent_id": null,
        "slug": "real-estate",
        "name": "Property",
        "image": "real-estate",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/property-x3.png",
        "position": 200,
        "listing_on_top_lvl": true,
        "childes": [
          {
            "id": 5260870,
            "parent_id": 8,
            "slug": "new-builds",
            "name": "New Builds",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/real-estate/new-builds-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 69,
            "parent_id": 8,
            "slug": "houses-apartments-for-rent",
            "name": "Houses & Apartments for Rent",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/real-estate/houses-and-apartments-for-rent-x3.png",
            "position": 204,
            "childes": []
          },
          {
            "id": 70,
            "parent_id": 8,
            "slug": "houses-apartments-for-sale",
            "name": "Houses & Apartments for Sale",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/real-estate/houses-and-apartments-for-sale-x3.png",
            "position": 205,
            "childes": []
          },
          {
            "id": 71,
            "parent_id": 8,
            "slug": "land-and-plots-for-rent",
            "name": "Land & Plots for Rent",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/real-estate/land-for-rent-x3.png",
            "position": 206,
            "childes": []
          },
          {
            "id": 72,
            "parent_id": 8,
            "slug": "land-and-plots-for-sale",
            "name": "Land & Plots for Sale",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/real-estate/land-and-plots-for-sale-x3.png",
            "position": 207,
            "childes": []
          },
          {
            "id": 73,
            "parent_id": 8,
            "slug": "commercial-property-for-rent",
            "name": "Commercial Property for Rent",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/real-estate/commercial-property-for-rent-x3.png",
            "position": 208,
            "childes": []
          },
          {
            "id": 74,
            "parent_id": 8,
            "slug": "commercial-properties",
            "name": "Commercial Property for Sale",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/real-estate/commercial-property-for-sale-x3.png",
            "position": 209,
            "childes": []
          },
          {
            "id": 75,
            "parent_id": 8,
            "slug": "event-centers-and-venues",
            "name": "Event Centres, Venues & Workstations",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/real-estate/event-centers-and-venues-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 76,
            "parent_id": 8,
            "slug": "temporary-and-vacation-rentals",
            "name": "Short Let Property",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/real-estate/short-let-x3.png",
            "position": 211,
            "childes": []
          }
        ]
      },
      {
        "id": 1,
        "parent_id": null,
        "slug": "mobile-phones-tablets",
        "name": "Mobile Phones & Tablets",
        "image": "mobile",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/phones-x3.png",
        "position": 300,
        "childes": [
          {
            "id": 17,
            "parent_id": 1,
            "slug": "mobile-phones",
            "name": "Mobile Phones",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/phones-x3.png",
            "position": 301,
            "childes": []
          },
          {
            "id": 19,
            "parent_id": 1,
            "slug": "cell-phones-tablets-accessories",
            "name": "Accessories for Mobile Phones & Tablets",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/mobile/accessories-for-mobile-and-tablet-x3.png",
            "position": 310,
            "childes": []
          },
          {
            "id": 20,
            "parent_id": 1,
            "slug": "smart-watches",
            "name": "Smart Watches & Trackers",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/mobile/watches.png",
            "position": 311,
            "childes": []
          },
          {
            "id": 18,
            "parent_id": 1,
            "slug": "tablets",
            "name": "Tablets",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/mobile/tablets-x3.png",
            "position": 312,
            "childes": []
          }
        ]
      },
      {
        "id": 2,
        "parent_id": null,
        "slug": "electronics",
        "name": "Electronics",
        "image": "electronics",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics-x3.png",
        "position": 400,
        "childes": [
          {
            "id": 35,
            "parent_id": 2,
            "slug": "accessories-and-supplies-for-electronics",
            "name": "Accessories & Supplies for Electronics",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/accessories-and-supplies-for-electronics-x3.png",
            "position": 630,
            "childes": []
          },
          {
            "id": 21,
            "parent_id": 2,
            "slug": "computers-and-laptops",
            "name": "Laptops & Computers",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/laptops.png",
            "position": 601,
            "childes": []
          },
          {
            "id": 22,
            "parent_id": 2,
            "slug": "tv-dvd-equipment",
            "name": "TV & DVD Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/tv-x3.png",
            "position": 602,
            "childes": []
          },
          {
            "id": 25,
            "parent_id": 2,
            "slug": "audio-and-music-equipment",
            "name": "Audio & Music Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/audio-x3.png",
            "position": 610,
            "childes": []
          },
          {
            "id": 26,
            "parent_id": 2,
            "slug": "computer-accessories",
            "name": "Computer Accessories",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/computer-accessories-x3.png",
            "position": 612,
            "childes": []
          },
          {
            "id": 28,
            "parent_id": 2,
            "slug": "computer-hardware",
            "name": "Computer Hardware",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/computer-hardware-x3.png",
            "position": 613,
            "childes": []
          },
          {
            "id": 30,
            "parent_id": 2,
            "slug": "computer-monitors",
            "name": "Computer Monitors",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/computer-monitors-x3.png",
            "position": 617,
            "childes": []
          },
          {
            "id": 31,
            "parent_id": 2,
            "slug": "headphones",
            "name": "Headphones",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/headphones-x3.png",
            "position": 618,
            "childes": []
          },
          {
            "id": 33,
            "parent_id": 2,
            "slug": "networking-products",
            "name": "Networking Products",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/networking-products-x3.png",
            "position": 632,
            "childes": []
          },
          {
            "id": 23,
            "parent_id": 2,
            "slug": "cameras-video-cameras-and-accessories",
            "name": "Photo & Video Cameras",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/cameras-x3.png",
            "position": 621,
            "childes": []
          },
          {
            "id": 32,
            "parent_id": 2,
            "slug": "printers-and-scanners",
            "name": "Printers & Scanners",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/printers-and-scanners-x3.png",
            "position": 622,
            "childes": []
          },
          {
            "id": 34,
            "parent_id": 2,
            "slug": "security-and-surveillance",
            "name": "Security & Surveillance",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/security-and-surveillance-x3.png",
            "position": 631,
            "childes": []
          },
          {
            "id": 29,
            "parent_id": 2,
            "slug": "computer-software",
            "name": "Software",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/software-x3.png",
            "position": 624,
            "childes": []
          },
          {
            "id": 27,
            "parent_id": 2,
            "slug": "videogames",
            "name": "Video Games",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/video-games-x3.png",
            "position": 630,
            "childes": []
          },
          {
            "id": 24,
            "parent_id": 2,
            "slug": "video-games-and-consoles",
            "name": "Video Game Consoles",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/electronics/game-consoles-x3.png",
            "position": 631,
            "childes": []
          }
        ]
      },
      {
        "id": 3,
        "parent_id": null,
        "slug": "home-garden",
        "name": "Home, Furniture & Appliances",
        "image": "home",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/home-x3.png",
        "position": 500,
        "childes": [
          {
            "id": 36,
            "parent_id": 3,
            "slug": "furniture",
            "name": "Furniture",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/home-x3.png",
            "position": 503,
            "childes": []
          },
          {
            "id": 37,
            "parent_id": 3,
            "slug": "garden",
            "name": "Garden Supplies",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/home/garden-x3.png",
            "position": 504,
            "childes": []
          },
          {
            "id": 39,
            "parent_id": 3,
            "slug": "decor-accessories",
            "name": "Home Accessories",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/home/home-accessories-x3.png",
            "position": 506,
            "childes": []
          },
          {
            "id": 38,
            "parent_id": 3,
            "slug": "home-appliances",
            "name": "Home Appliances",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/home/home-appliances-x3.png",
            "position": 507,
            "childes": []
          },
          {
            "id": 40,
            "parent_id": 3,
            "slug": "kitchen-appliances",
            "name": "Kitchen Appliances",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/home/kitchen-appliances-x3.png",
            "position": 508,
            "childes": []
          },
          {
            "id": 41,
            "parent_id": 3,
            "slug": "kitchen-and-dining",
            "name": "Kitchenware & Cookware",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/home/kitchen-and-dining-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 5096136,
            "parent_id": 3,
            "slug": "household-chemicals",
            "name": "Household Chemicals",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/home/household-chemicals-x3.png",
            "position": 1,
            "childes": []
          }
        ]
      },
      {
        "id": 11,
        "parent_id": null,
        "slug": "health-and-beauty",
        "name": "Health & Beauty",
        "image": "beauty",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/health-x3.png",
        "position": 600,
        "childes": [
          {
            "id": 92,
            "parent_id": 11,
            "slug": "bath-body",
            "name": "Bath & Body",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/beauty/bath-and-body.png",
            "position": 601,
            "childes": []
          },
          {
            "id": 93,
            "parent_id": 11,
            "slug": "fragrance",
            "name": "Fragrances",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/beauty/fragrance-x3.png",
            "position": 602,
            "childes": []
          },
          {
            "id": 94,
            "parent_id": 11,
            "slug": "hair-beauty",
            "name": "Hair Beauty",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/beauty/hair-beauty-x3.png",
            "position": 603,
            "childes": []
          },
          {
            "id": 95,
            "parent_id": 11,
            "slug": "makeup",
            "name": "Make-Up",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/beauty/makeup-x3.png",
            "position": 604,
            "childes": []
          },
          {
            "id": 96,
            "parent_id": 11,
            "slug": "sexual-wellness",
            "name": "Sexual Wellness",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/beauty/sexual-welness-x3.png",
            "position": 605,
            "childes": []
          },
          {
            "id": 97,
            "parent_id": 11,
            "slug": "skin-care",
            "name": "Skincare",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/beauty/skin-care-x3.png",
            "position": 606,
            "childes": []
          },
          {
            "id": 98,
            "parent_id": 11,
            "slug": "hookah-and-vaporizers",
            "name": "Tobacco Accessories",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/beauty/tobacco-accessories-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 99,
            "parent_id": 11,
            "slug": "tools-accessories",
            "name": "Tools & Accessories",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/beauty/tools-and-accessories-x3.png",
            "position": 608,
            "childes": []
          },
          {
            "id": 100,
            "parent_id": 11,
            "slug": "supplements",
            "name": "Vitamins & Supplements",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/beauty/vitamins-and-supplements-x3.png",
            "position": 610,
            "childes": []
          }
        ]
      },
      {
        "id": 4,
        "parent_id": null,
        "slug": "fashion-and-beauty",
        "name": "Fashion",
        "image": "fashion",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/fashion-x3.png",
        "position": 700,
        "childes": [
          {
            "id": 42,
            "parent_id": 4,
            "slug": "bags",
            "name": "Bags",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/fashion/bags-x3.png",
            "position": 401,
            "childes": []
          },
          {
            "id": 43,
            "parent_id": 4,
            "slug": "clothing",
            "name": "Clothing",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/fashion/clothing.png",
            "position": 402,
            "childes": []
          },
          {
            "id": 44,
            "parent_id": 4,
            "slug": "accessories",
            "name": "Clothing Accessories",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/fashion/accessories-x3.png",
            "position": 403,
            "childes": []
          },
          {
            "id": 45,
            "parent_id": 4,
            "slug": "jewellery-and-watches",
            "name": "Jewelry",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/fashion/jewelry-x3.png",
            "position": 404,
            "childes": []
          },
          {
            "id": 46,
            "parent_id": 4,
            "slug": "shoes",
            "name": "Shoes",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/fashion/shoes-x3.png",
            "position": 405,
            "childes": []
          },
          {
            "id": 47,
            "parent_id": 4,
            "slug": "watches",
            "name": "Watches",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/mobile/watches-x3.png",
            "position": 406,
            "childes": []
          },
          {
            "id": 48,
            "parent_id": 4,
            "slug": "wedding-wear",
            "name": "Wedding Wear & Accessories",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/fashion/wedding wear-x3.png",
            "position": 1,
            "childes": []
          }
        ]
      },
      {
        "id": 7,
        "parent_id": null,
        "slug": "hobbies-art-sport",
        "name": "Sports, Arts & Outdoors",
        "image": "hobbies",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/hobbies-x3.png",
        "position": 800,
        "childes": [
          {
            "id": 63,
            "parent_id": 7,
            "slug": "art-collectibles",
            "name": "Arts & Crafts",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/hobbies/arts-x3.png",
            "position": 1301,
            "childes": []
          },
          {
            "id": 64,
            "parent_id": 7,
            "slug": "books-and-games",
            "name": "Books & Games",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/hobbies/books-x3.png",
            "position": 1302,
            "childes": []
          },
          {
            "id": 65,
            "parent_id": 7,
            "slug": "camping-gear",
            "name": "Camping Gear",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/hobbies/camping-x3.png",
            "position": 1303,
            "childes": []
          },
          {
            "id": 66,
            "parent_id": 7,
            "slug": "cds-and-dvds",
            "name": "CDs & DVDs",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/hobbies/cds-and-dvds-x3.png",
            "position": 1304,
            "childes": []
          },
          {
            "id": 67,
            "parent_id": 7,
            "slug": "musical-instruments",
            "name": "Musical Instruments & Gear",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/hobbies/musical-instruments-and-gear-x3.png",
            "position": 1305,
            "childes": []
          },
          {
            "id": 68,
            "parent_id": 7,
            "slug": "sports-bicycles-and-fitness",
            "name": "Sports Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/hobbies/sports-equipment-x3.png",
            "position": 1306,
            "childes": []
          }
        ]
      },
      {
        "id": 14,
        "parent_id": null,
        "slug": "seeking-work-cvs",
        "name": "Seeking Work CVs",
        "image": "jobseekers",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/jobseekers-x3.png",
        "position": 900,
        "listing_on_top_lvl": true,
        "childes": [
          {
            "id": 148,
            "parent_id": 14,
            "slug": "accounting-and-finance-cvs",
            "name": "Accounting & Finance CVs",
            "image": null,
            "image_v2": null,
            "position": 901,
            "childes": []
          },
          {
            "id": 149,
            "parent_id": 14,
            "slug": "advertising-and-marketing-cvs",
            "name": "Advertising & Marketing CVs",
            "image": null,
            "image_v2": null,
            "position": 902,
            "childes": []
          },
          {
            "id": 150,
            "parent_id": 14,
            "slug": "arts-and-entertainment-cvs",
            "name": "Arts & Entertainment CVs",
            "image": null,
            "image_v2": null,
            "position": 903,
            "childes": []
          },
          {
            "id": 151,
            "parent_id": 14,
            "slug": "childcare-and-babysitting-cvs",
            "name": "Childcare & Babysitting CVs",
            "image": null,
            "image_v2": null,
            "position": 903,
            "childes": []
          },
          {
            "id": 152,
            "parent_id": 14,
            "slug": "clerical-and-administrative-cvs",
            "name": "Clerical & Administrative CVs",
            "image": null,
            "image_v2": null,
            "position": 904,
            "childes": []
          },
          {
            "id": 153,
            "parent_id": 14,
            "slug": "computing-and-it-cvs",
            "name": "Computing & IT CVs",
            "image": null,
            "image_v2": null,
            "position": 905,
            "childes": []
          },
          {
            "id": 154,
            "parent_id": 14,
            "slug": "construction-and-skilled-trade-cvs",
            "name": "Construction & Skilled Trade CVs",
            "image": null,
            "image_v2": null,
            "position": 906,
            "childes": []
          },
          {
            "id": 155,
            "parent_id": 14,
            "slug": "consulting-and-strategy-cvs",
            "name": "Consulting & Strategy CVs",
            "image": null,
            "image_v2": null,
            "position": 907,
            "childes": []
          },
          {
            "id": 156,
            "parent_id": 14,
            "slug": "customer-service-cvs",
            "name": "Customer Services CVs",
            "image": null,
            "image_v2": null,
            "position": 908,
            "childes": []
          },
          {
            "id": 157,
            "parent_id": 14,
            "slug": "driver-cvs",
            "name": "Driver CVs",
            "image": null,
            "image_v2": null,
            "position": 909,
            "childes": []
          },
          {
            "id": 158,
            "parent_id": 14,
            "slug": "engineering-and-architecture-cvs",
            "name": "Engineering & Architecture CVs",
            "image": null,
            "image_v2": null,
            "position": 910,
            "childes": []
          },
          {
            "id": 159,
            "parent_id": 14,
            "slug": "farming-and-veterinary-cvs",
            "name": "Farming & Veterinary CVs",
            "image": null,
            "image_v2": null,
            "position": 911,
            "childes": []
          },
          {
            "id": 160,
            "parent_id": 14,
            "slug": "gardening-and-landscaping-cvs",
            "name": "Gardening & Landscaping CVs",
            "image": null,
            "image_v2": null,
            "position": 912,
            "childes": []
          },
          {
            "id": 161,
            "parent_id": 14,
            "slug": "health-and-beauty-cvs",
            "name": "Health & Beauty CVs",
            "image": null,
            "image_v2": null,
            "position": 913,
            "childes": []
          },
          {
            "id": 162,
            "parent_id": 14,
            "slug": "healthcare-and-nursing-cvs",
            "name": "Healthcare & Nursing CVs",
            "image": null,
            "image_v2": null,
            "position": 914,
            "childes": []
          },
          {
            "id": 163,
            "parent_id": 14,
            "slug": "hotel-cvs",
            "name": "Hotel CVs",
            "image": null,
            "image_v2": null,
            "position": 915,
            "childes": []
          },
          {
            "id": 164,
            "parent_id": 14,
            "slug": "housekeeping-and-cleaning-cvs",
            "name": "Housekeeping & Cleaning CVs",
            "image": null,
            "image_v2": null,
            "position": 916,
            "childes": []
          },
          {
            "id": 165,
            "parent_id": 14,
            "slug": "human-resources-cvs",
            "name": "Human Resources CVs",
            "image": null,
            "image_v2": null,
            "position": 917,
            "childes": []
          },
          {
            "id": 166,
            "parent_id": 14,
            "slug": "internship-cvs",
            "name": "Internship CVs",
            "image": null,
            "image_v2": null,
            "position": 918,
            "childes": []
          },
          {
            "id": 167,
            "parent_id": 14,
            "slug": "legal-cvs",
            "name": "Legal CVs",
            "image": null,
            "image_v2": null,
            "position": 919,
            "childes": []
          },
          {
            "id": 168,
            "parent_id": 14,
            "slug": "logistics-and-transportation-cvs",
            "name": "Logistics & Transportation CVs",
            "image": null,
            "image_v2": null,
            "position": 920,
            "childes": []
          },
          {
            "id": 169,
            "parent_id": 14,
            "slug": "management-cvs",
            "name": "Management CVs",
            "image": null,
            "image_v2": null,
            "position": 921,
            "childes": []
          },
          {
            "id": 170,
            "parent_id": 14,
            "slug": "manual-labour-cvs",
            "name": "Manual Labour CVs",
            "image": null,
            "image_v2": null,
            "position": 922,
            "childes": []
          },
          {
            "id": 171,
            "parent_id": 14,
            "slug": "manufacturing-cvs",
            "name": "Manufacturing CVs",
            "image": null,
            "image_v2": null,
            "position": 923,
            "childes": []
          },
          {
            "id": 172,
            "parent_id": 14,
            "slug": "mining-industry-cvs",
            "name": "Mining Industry CVs",
            "image": null,
            "image_v2": null,
            "position": 924,
            "childes": []
          },
          {
            "id": 173,
            "parent_id": 14,
            "slug": "office-cvs",
            "name": "Office CVs",
            "image": null,
            "image_v2": null,
            "position": 925,
            "childes": []
          },
          {
            "id": 174,
            "parent_id": 14,
            "slug": "part-time-and-weekend-cvs",
            "name": "Part-Time & Weekend CVs",
            "image": null,
            "image_v2": null,
            "position": 926,
            "childes": []
          },
          {
            "id": 175,
            "parent_id": 14,
            "slug": "quality-control-and-assurance-cvs",
            "name": "Quality Control & Assurance CVs",
            "image": null,
            "image_v2": null,
            "position": 926,
            "childes": []
          },
          {
            "id": 176,
            "parent_id": 14,
            "slug": "research-and-survey-cvs",
            "name": "Research & Survey CVs",
            "image": null,
            "image_v2": null,
            "position": 927,
            "childes": []
          },
          {
            "id": 177,
            "parent_id": 14,
            "slug": "restaurant-and-bar-cvs",
            "name": "Restaurant & Bar CVs",
            "image": null,
            "image_v2": null,
            "position": 928,
            "childes": []
          },
          {
            "id": 178,
            "parent_id": 14,
            "slug": "retail-cvs",
            "name": "Retail CVs",
            "image": null,
            "image_v2": null,
            "position": 929,
            "childes": []
          },
          {
            "id": 179,
            "parent_id": 14,
            "slug": "sales-and-telemarketing-cvs",
            "name": "Sales & Telemarketing CVs",
            "image": null,
            "image_v2": null,
            "position": 930,
            "childes": []
          },
          {
            "id": 180,
            "parent_id": 14,
            "slug": "security-cvs",
            "name": "Security CVs",
            "image": null,
            "image_v2": null,
            "position": 931,
            "childes": []
          },
          {
            "id": 181,
            "parent_id": 14,
            "slug": "sports-club-cvs",
            "name": "Sports Club CVs",
            "image": null,
            "image_v2": null,
            "position": 932,
            "childes": []
          },
          {
            "id": 182,
            "parent_id": 14,
            "slug": "teaching-cvs",
            "name": "Teaching CVs",
            "image": null,
            "image_v2": null,
            "position": 933,
            "childes": []
          },
          {
            "id": 183,
            "parent_id": 14,
            "slug": "technology-cvs",
            "name": "Technology CVs",
            "image": null,
            "image_v2": null,
            "position": 934,
            "childes": []
          },
          {
            "id": 184,
            "parent_id": 14,
            "slug": "travel-and-tourism-cvs",
            "name": "Travel & Tourism CVs",
            "image": null,
            "image_v2": null,
            "position": 935,
            "childes": []
          },
          {
            "id": 185,
            "parent_id": 14,
            "slug": "other-cvs",
            "name": "Other CVs",
            "image": null,
            "image_v2": null,
            "position": 936,
            "childes": []
          }
        ]
      },
      {
        "id": 15,
        "parent_id": null,
        "slug": "services",
        "name": "Services",
        "image": "services",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services-x3.png",
        "position": 1000,
        "listing_on_top_lvl": true,
        "childes": [
          {
            "id": 186,
            "parent_id": 15,
            "slug": "automotive-services",
            "name": "Automotive Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/automotive-services-x3.png",
            "position": 1001,
            "childes": []
          },
          {
            "id": 187,
            "parent_id": 15,
            "slug": "building-and-trades-services",
            "name": "Building & Trade Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/building-services-x3.png",
            "position": 1002,
            "childes": []
          },
          {
            "id": 188,
            "parent_id": 15,
            "slug": "chauffeur-and-airport-transfer-services",
            "name": "Chauffeur & Airport Transfer Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/chauffeur-and-airport-transfer-x3.png",
            "position": 1003,
            "childes": []
          },
          {
            "id": 189,
            "parent_id": 15,
            "slug": "child-care-and-education-services",
            "name": "Child Care & Education Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/child-care-and-education-services-x3.png",
            "position": 1004,
            "childes": []
          },
          {
            "id": 207,
            "parent_id": 15,
            "slug": "classes-and-courses",
            "name": "Classes & Courses",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/classes-and-courses-x3.png",
            "position": 1025,
            "childes": []
          },
          {
            "id": 190,
            "parent_id": 15,
            "slug": "cleaning-services",
            "name": "Cleaning Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/cleaning-services-x3.png",
            "position": 1005,
            "childes": []
          },
          {
            "id": 191,
            "parent_id": 15,
            "slug": "computer-and-it-services",
            "name": "Computer & IT Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/computer-and-it-services-x3.png",
            "position": 1006,
            "childes": []
          },
          {
            "id": 192,
            "parent_id": 15,
            "slug": "dj-and-entertainment-services",
            "name": "DJ & Entertainment Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/dj-and-entertainment-services-x3.png",
            "position": 1006,
            "childes": []
          },
          {
            "id": 195,
            "parent_id": 15,
            "slug": "fitness-and-personal-training-services",
            "name": "Fitness & Personal Training Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/fitness-and-personal-training-services-x3.png",
            "position": 1009,
            "childes": []
          },
          {
            "id": 194,
            "parent_id": 15,
            "slug": "health-and-beauty-services",
            "name": "Health & Beauty Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/health-and-beauty-services-x3.png",
            "position": 1008,
            "childes": []
          },
          {
            "id": 196,
            "parent_id": 15,
            "slug": "landscaping-and-gardening-services",
            "name": "Landscaping & Gardening Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/landscaping-and-gardening-services-x3.png",
            "position": 1010,
            "childes": []
          },
          {
            "id": 198,
            "parent_id": 15,
            "slug": "legal-services",
            "name": "Legal Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/legal-services-x3.png",
            "position": 1012,
            "childes": []
          },
          {
            "id": 202,
            "parent_id": 15,
            "slug": "removals-and-storage-services",
            "name": "Logistics Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/logistics-services-x3.png",
            "position": 1020,
            "childes": []
          },
          {
            "id": 197,
            "parent_id": 15,
            "slug": "manufacturing-services",
            "name": "Manufacturing Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/manufacturing-services-x3.png",
            "position": 1011,
            "childes": []
          },
          {
            "id": 193,
            "parent_id": 15,
            "slug": "party-catering-and-event-services",
            "name": "Party, Catering & Event Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/party-catering-and-event-services-x3.png",
            "position": 1007,
            "childes": []
          },
          {
            "id": 199,
            "parent_id": 15,
            "slug": "pet-services",
            "name": "Pet Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/pet-services-x3.png",
            "position": 1013,
            "childes": []
          },
          {
            "id": 200,
            "parent_id": 15,
            "slug": "photography-and-video-services",
            "name": "Photography & Video Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/photography-and-video-services-x3.png",
            "position": 1014,
            "childes": []
          },
          {
            "id": 3690756,
            "parent_id": 15,
            "slug": "printing-services",
            "name": "Printing Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/printing-services-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 201,
            "parent_id": 15,
            "slug": "recruitment-services",
            "name": "Recruitment Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/recruitment-services-x3.png",
            "position": 1015,
            "childes": []
          },
          {
            "id": 5231891,
            "parent_id": 15,
            "slug": "rental-services",
            "name": "Rental Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/rental-services-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 203,
            "parent_id": 15,
            "slug": "repair-services",
            "name": "Repair Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/repair-services.png",
            "position": 1021,
            "childes": []
          },
          {
            "id": 204,
            "parent_id": 15,
            "slug": "tax-and-financial-services",
            "name": "Tax & Financial Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/tax-and-financial-services-x3.png",
            "position": 1022,
            "childes": []
          },
          {
            "id": 205,
            "parent_id": 15,
            "slug": "travel-agents-and-tours",
            "name": "Travel Agents & Tours",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/travel-agents-and-tours-x3.png",
            "position": 1023,
            "childes": []
          },
          {
            "id": 206,
            "parent_id": 15,
            "slug": "wedding-venues-and-services",
            "name": "Wedding Venues & Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/wedding-venues-and-services-x3.png",
            "position": 1024,
            "childes": []
          },
          {
            "id": 208,
            "parent_id": 15,
            "slug": "other-services",
            "name": "Other Services",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/services/other-services-x3.png",
            "position": 1026,
            "childes": []
          }
        ]
      },
      {
        "id": 12,
        "parent_id": null,
        "slug": "jobs",
        "name": "Jobs",
        "image": "jobs",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/jobs-x3.png",
        "position": 1100,
        "listing_on_top_lvl": true,
        "childes": [
          {
            "id": 101,
            "parent_id": 12,
            "slug": "accounting-and-finance-jobs",
            "name": "Accounting & Finance Jobs",
            "image": null,
            "image_v2": null,
            "position": 1101,
            "childes": []
          },
          {
            "id": 102,
            "parent_id": 12,
            "slug": "advertising-and-marketing-jobs",
            "name": "Advertising & Marketing Jobs",
            "image": null,
            "image_v2": null,
            "position": 1,
            "childes": []
          },
          {
            "id": 103,
            "parent_id": 12,
            "slug": "arts-and-entertainment-jobs",
            "name": "Arts & Entertainment Jobs",
            "image": null,
            "image_v2": null,
            "position": 1102,
            "childes": []
          },
          {
            "id": 104,
            "parent_id": 12,
            "slug": "childcare-and-babysitting-jobs",
            "name": "Childcare & Babysitting Jobs",
            "image": null,
            "image_v2": null,
            "position": 1103,
            "childes": []
          },
          {
            "id": 105,
            "parent_id": 12,
            "slug": "clerical-and-administrative-jobs",
            "name": "Clerical & Administrative Jobs",
            "image": null,
            "image_v2": null,
            "position": 1105,
            "childes": []
          },
          {
            "id": 106,
            "parent_id": 12,
            "slug": "computing-and-it-jobs",
            "name": "Computing & IT Jobs",
            "image": null,
            "image_v2": null,
            "position": 1106,
            "childes": []
          },
          {
            "id": 107,
            "parent_id": 12,
            "slug": "construction-and-skilled-trade-jobs",
            "name": "Construction & Skilled Trade Jobs",
            "image": null,
            "image_v2": null,
            "position": 1106,
            "childes": []
          },
          {
            "id": 108,
            "parent_id": 12,
            "slug": "consulting-and-strategy-jobs",
            "name": "Consulting & Strategy Jobs",
            "image": null,
            "image_v2": null,
            "position": 1107,
            "childes": []
          },
          {
            "id": 109,
            "parent_id": 12,
            "slug": "customer-service-jobs",
            "name": "Customer Services Jobs",
            "image": null,
            "image_v2": null,
            "position": 1108,
            "childes": []
          },
          {
            "id": 110,
            "parent_id": 12,
            "slug": "driver-jobs",
            "name": "Driver Jobs",
            "image": null,
            "image_v2": null,
            "position": 1109,
            "childes": []
          },
          {
            "id": 111,
            "parent_id": 12,
            "slug": "engineering-and-architecture-jobs",
            "name": "Engineering & Architecture Jobs",
            "image": null,
            "image_v2": null,
            "position": 1110,
            "childes": []
          },
          {
            "id": 112,
            "parent_id": 12,
            "slug": "farming-and-veterinary-jobs",
            "name": "Farming & Veterinary Jobs",
            "image": null,
            "image_v2": null,
            "position": 1111,
            "childes": []
          },
          {
            "id": 113,
            "parent_id": 12,
            "slug": "gardening-and-landscaping-jobs",
            "name": "Gardening & Landscaping Jobs",
            "image": null,
            "image_v2": null,
            "position": 1112,
            "childes": []
          },
          {
            "id": 114,
            "parent_id": 12,
            "slug": "health-and-beauty-jobs",
            "name": "Health & Beauty Jobs",
            "image": null,
            "image_v2": null,
            "position": 1112,
            "childes": []
          },
          {
            "id": 115,
            "parent_id": 12,
            "slug": "healthcare-and-nursing-jobs",
            "name": "Healthcare & Nursing Jobs",
            "image": null,
            "image_v2": null,
            "position": 1113,
            "childes": []
          },
          {
            "id": 116,
            "parent_id": 12,
            "slug": "hotel-jobs",
            "name": "Hotel Jobs",
            "image": null,
            "image_v2": null,
            "position": 1114,
            "childes": []
          },
          {
            "id": 117,
            "parent_id": 12,
            "slug": "housekeeping-and-cleaning-jobs",
            "name": "Housekeeping & Cleaning Jobs",
            "image": null,
            "image_v2": null,
            "position": 1115,
            "childes": []
          },
          {
            "id": 118,
            "parent_id": 12,
            "slug": "human-resources-jobs",
            "name": "Human Resources Jobs",
            "image": null,
            "image_v2": null,
            "position": 1116,
            "childes": []
          },
          {
            "id": 119,
            "parent_id": 12,
            "slug": "internship-jobs",
            "name": "Internship Jobs",
            "image": null,
            "image_v2": null,
            "position": 1116,
            "childes": []
          },
          {
            "id": 120,
            "parent_id": 12,
            "slug": "legal-jobs",
            "name": "Legal Jobs",
            "image": null,
            "image_v2": null,
            "position": 1117,
            "childes": []
          },
          {
            "id": 121,
            "parent_id": 12,
            "slug": "logistics-and-transportation-jobs",
            "name": "Logistics & Transportation Jobs",
            "image": null,
            "image_v2": null,
            "position": 1118,
            "childes": []
          },
          {
            "id": 122,
            "parent_id": 12,
            "slug": "management-jobs",
            "name": "Management Jobs",
            "image": null,
            "image_v2": null,
            "position": 1119,
            "childes": []
          },
          {
            "id": 123,
            "parent_id": 12,
            "slug": "manual-labour-jobs",
            "name": "Manual Labour Jobs",
            "image": null,
            "image_v2": null,
            "position": 1120,
            "childes": []
          },
          {
            "id": 124,
            "parent_id": 12,
            "slug": "manufacturing-jobs",
            "name": "Manufacturing Jobs",
            "image": null,
            "image_v2": null,
            "position": 1121,
            "childes": []
          },
          {
            "id": 125,
            "parent_id": 12,
            "slug": "mining-industry-jobs",
            "name": "Mining Industry Jobs",
            "image": null,
            "image_v2": null,
            "position": 1122,
            "childes": []
          },
          {
            "id": 126,
            "parent_id": 12,
            "slug": "office-jobs",
            "name": "Office Jobs",
            "image": null,
            "image_v2": null,
            "position": 1123,
            "childes": []
          },
          {
            "id": 127,
            "parent_id": 12,
            "slug": "part-time-and-weekend-jobs",
            "name": "Part-Time & Weekend Jobs",
            "image": null,
            "image_v2": null,
            "position": 1124,
            "childes": []
          },
          {
            "id": 128,
            "parent_id": 12,
            "slug": "quality-control-and-assurance-jobs",
            "name": "Quality Control & Assurance Jobs",
            "image": null,
            "image_v2": null,
            "position": 1125,
            "childes": []
          },
          {
            "id": 129,
            "parent_id": 12,
            "slug": "research-and-survey-jobs",
            "name": "Research & Survey Jobs",
            "image": null,
            "image_v2": null,
            "position": 1126,
            "childes": []
          },
          {
            "id": 130,
            "parent_id": 12,
            "slug": "restaurant-and-bar-jobs",
            "name": "Restaurant & Bar Jobs",
            "image": null,
            "image_v2": null,
            "position": 1127,
            "childes": []
          },
          {
            "id": 131,
            "parent_id": 12,
            "slug": "retail-jobs",
            "name": "Retail Jobs",
            "image": null,
            "image_v2": null,
            "position": 1128,
            "childes": []
          },
          {
            "id": 132,
            "parent_id": 12,
            "slug": "sales-and-telemarketing-jobs",
            "name": "Sales & Telemarketing Jobs",
            "image": null,
            "image_v2": null,
            "position": 1129,
            "childes": []
          },
          {
            "id": 133,
            "parent_id": 12,
            "slug": "security-jobs",
            "name": "Security Jobs",
            "image": null,
            "image_v2": null,
            "position": 1130,
            "childes": []
          },
          {
            "id": 134,
            "parent_id": 12,
            "slug": "sports-club-jobs",
            "name": "Sports Club Jobs",
            "image": null,
            "image_v2": null,
            "position": 1131,
            "childes": []
          },
          {
            "id": 135,
            "parent_id": 12,
            "slug": "teaching-jobs",
            "name": "Teaching Jobs",
            "image": null,
            "image_v2": null,
            "position": 1133,
            "childes": []
          },
          {
            "id": 136,
            "parent_id": 12,
            "slug": "technology-jobs",
            "name": "Technology Jobs",
            "image": null,
            "image_v2": null,
            "position": 1134,
            "childes": []
          },
          {
            "id": 137,
            "parent_id": 12,
            "slug": "travel-and-tourism-jobs",
            "name": "Travel & Tourism Jobs",
            "image": null,
            "image_v2": null,
            "position": 1135,
            "childes": []
          },
          {
            "id": 138,
            "parent_id": 12,
            "slug": "other-jobs",
            "name": "Other Jobs",
            "image": null,
            "image_v2": null,
            "position": 1136,
            "childes": []
          }
        ]
      },
      {
        "id": 13,
        "parent_id": null,
        "slug": "babies-and-kids",
        "name": "Babies & Kids",
        "image": "babies",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies-x3.png",
        "position": 1200,
        "childes": [
          {
            "id": 139,
            "parent_id": 13,
            "slug": "babies-and-kids-accessories",
            "name": "Baby & Kids' Accessories",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/babies-and-kids-accessories-x3.png",
            "position": 1201,
            "childes": []
          },
          {
            "id": 140,
            "parent_id": 13,
            "slug": "baby-care",
            "name": "Baby & Child Care",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/baby-and-child-care-x3.png",
            "position": 1202,
            "childes": []
          },
          {
            "id": 141,
            "parent_id": 13,
            "slug": "childrens-clothing",
            "name": "Children's Clothing",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/childrens-clothing-x3.png",
            "position": 1203,
            "childes": []
          },
          {
            "id": 142,
            "parent_id": 13,
            "slug": "childrens-furniture",
            "name": "Children's Furniture",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/childrens-furniture-x3.png",
            "position": 1204,
            "childes": []
          },
          {
            "id": 143,
            "parent_id": 13,
            "slug": "childrens-gear-and-safety",
            "name": "Children's Gear & Safety",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/childrens-gear-and-safety-x3.png",
            "position": 1205,
            "childes": []
          },
          {
            "id": 144,
            "parent_id": 13,
            "slug": "childrens-shoes",
            "name": "Children's Shoes",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/childrens-shoes-x3.png",
            "position": 1206,
            "childes": []
          },
          {
            "id": 145,
            "parent_id": 13,
            "slug": "maternity-and-pregnancy",
            "name": "Maternity & Pregnancy",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/maternity-and-pregnancy-x3.png",
            "position": 1207,
            "childes": []
          },
          {
            "id": 146,
            "parent_id": 13,
            "slug": "prams-and-strollers",
            "name": "Prams & Strollers",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/prams-and-strollers-x3.png",
            "position": 1208,
            "childes": []
          },
          {
            "id": 5118560,
            "parent_id": 13,
            "slug": "playground-equipment",
            "name": "Playground Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/playground-equipment-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 147,
            "parent_id": 13,
            "slug": "toys",
            "name": "Toys",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/babies/toys-x3.png",
            "position": 1209,
            "childes": []
          }
        ]
      },
      {
        "id": 6,
        "parent_id": null,
        "slug": "animals-and-pets",
        "name": "Animals & Pets",
        "image": "animals",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/animals-x3.png",
        "position": 1300,
        "childes": [
          {
            "id": 56,
            "parent_id": 6,
            "slug": "birds",
            "name": "Birds",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/animals/birds-x3.png",
            "position": 1201,
            "childes": []
          },
          {
            "id": 57,
            "parent_id": 6,
            "slug": "cats-and-kittens",
            "name": "Cats & Kittens",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/animals/cat-x3.png",
            "position": 1202,
            "childes": []
          },
          {
            "id": 58,
            "parent_id": 6,
            "slug": "dogs-and-puppies",
            "name": "Dogs & Puppies",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/animals/dogs-x3.png",
            "position": 1203,
            "childes": []
          },
          {
            "id": 59,
            "parent_id": 6,
            "slug": "fish",
            "name": "Fish",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/animals/fish-x3.png",
            "position": 1204,
            "childes": []
          },
          {
            "id": 60,
            "parent_id": 6,
            "slug": "pets-accessories",
            "name": "Pet Accessories",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/animals/accessories-x3.png",
            "position": 1205,
            "childes": []
          },
          {
            "id": 62,
            "parent_id": 6,
            "slug": "other-animals",
            "name": "Other Animals",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/animals/other-x3.png",
            "position": 1207,
            "childes": []
          }
        ]
      },
      {
        "id": 10,
        "parent_id": null,
        "slug": "agriculture-and-foodstuff",
        "name": "Agriculture & Food",
        "image": "agriculture",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/agriculture-x3.png",
        "position": 1400,
        "childes": [
          {
            "id": 88,
            "parent_id": 10,
            "slug": "farm-machinery-equipment",
            "name": "Farm Machinery & Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/agriculture/equipment-x3.png",
            "position": 1400,
            "childes": []
          },
          {
            "id": 89,
            "parent_id": 10,
            "slug": "feeds-supplements-seeds",
            "name": "Feeds, Supplements & Seeds",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/agriculture/feeds-x3.png",
            "position": 1402,
            "childes": []
          },
          {
            "id": 90,
            "parent_id": 10,
            "slug": "livestock-and-poultry",
            "name": "Farm Animals",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/agriculture/livestock-and-poultry-x3.png",
            "position": 1403,
            "childes": []
          },
          {
            "id": 91,
            "parent_id": 10,
            "slug": "meals-and-drinks",
            "name": "Meals & Drinks",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/agriculture-x3.png",
            "position": 1404,
            "childes": []
          }
        ]
      },
      {
        "id": 9,
        "parent_id": null,
        "slug": "office-and-commercial-equipment-tools",
        "name": "Commercial Equipment & Tools",
        "image": "equipment",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment-x3.png",
        "position": 1500,
        "childes": [
          {
            "id": 77,
            "parent_id": 9,
            "slug": "industrial-ovens",
            "name": "Industrial Ovens",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/industrial-ovens-x3.png",
            "position": 1501,
            "childes": []
          },
          {
            "id": 78,
            "parent_id": 9,
            "slug": "manufacturing-equipments",
            "name": "Manufacturing Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/manufacturing-equipment-x3.png",
            "position": 1502,
            "childes": []
          },
          {
            "id": 79,
            "parent_id": 9,
            "slug": "manufacturing-materials-and-tools",
            "name": "Manufacturing Materials & Tools",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/manufacturing-materials-and-tools-x3.png",
            "position": 1503,
            "childes": []
          },
          {
            "id": 80,
            "parent_id": 9,
            "slug": "medical-equipment",
            "name": "Medical Supplies & Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/medical-equipment-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 81,
            "parent_id": 9,
            "slug": "printing-equipment",
            "name": "Printing Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/printing-equipment-x3.png",
            "position": 1505,
            "childes": []
          },
          {
            "id": 82,
            "parent_id": 9,
            "slug": "restaurant-and-catering-equipment",
            "name": "Restaurant & Catering Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/restaurant-and-catering-equipment-x3.png",
            "position": 1506,
            "childes": []
          },
          {
            "id": 83,
            "parent_id": 9,
            "slug": "safety-equipment",
            "name": "Safetywear & Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/safety-equipment-vest-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 84,
            "parent_id": 9,
            "slug": "salon-equipment",
            "name": "Salon Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/salon-equipment-x3.png",
            "position": 1508,
            "childes": []
          },
          {
            "id": 85,
            "parent_id": 9,
            "slug": "stage-lighting-and-effects",
            "name": "Stage Lighting & Effects",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/stage-lighting-and-effects-x3.png",
            "position": 1509,
            "childes": []
          },
          {
            "id": 86,
            "parent_id": 9,
            "slug": "stationery",
            "name": "Stationery",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/stationery-x3.png",
            "position": 1510,
            "childes": []
          },
          {
            "id": 87,
            "parent_id": 9,
            "slug": "store-equipments",
            "name": "Store Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/equipment/store-equipment-x3.png",
            "position": 1511,
            "childes": []
          }
        ]
      },
      {
        "id": 16,
        "parent_id": null,
        "slug": "repair-and-construction",
        "name": "Repair & Construction",
        "image": "repair",
        "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair-x3.png",
        "position": 1600,
        "childes": [
          {
            "id": 209,
            "parent_id": 16,
            "slug": "building-materials",
            "name": "Building Materials",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/building-materials-x3.png",
            "position": 1601,
            "childes": []
          },
          {
            "id": 210,
            "parent_id": 16,
            "slug": "doors",
            "name": "Doors",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/doors-x3.png",
            "position": 1602,
            "childes": []
          },
          {
            "id": 211,
            "parent_id": 16,
            "slug": "power-equipments",
            "name": "Electrical Equipment",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/electrical-equipment-x3.png",
            "position": 1603,
            "childes": []
          },
          {
            "id": 212,
            "parent_id": 16,
            "slug": "power-tools",
            "name": "Electrical Hand Tools",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/electrical-tools-x3.png",
            "position": 1,
            "childes": []
          },
          {
            "id": 213,
            "parent_id": 16,
            "slug": "hand-and-power-tools",
            "name": "Hand Tools",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/hand-tools.png",
            "position": 1606,
            "childes": []
          },
          {
            "id": 214,
            "parent_id": 16,
            "slug": "measuring-and-layout-tools",
            "name": "Measuring & Layout Tools",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/measuring-&-layout-tools-x3.png",
            "position": 1607,
            "childes": []
          },
          {
            "id": 215,
            "parent_id": 16,
            "slug": "plumbing-and-water-supply",
            "name": "Plumbing & Water Supply",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/plumbing-&-water-supply-x3.png",
            "position": 1608,
            "childes": []
          },
          {
            "id": 216,
            "parent_id": 16,
            "slug": "solar-energy-products",
            "name": "Solar Energy",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/solar-energy-products-x3.png",
            "position": 1609,
            "childes": []
          },
          {
            "id": 217,
            "parent_id": 16,
            "slug": "windows",
            "name": "Windows",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/windows-x3.png",
            "position": 1610,
            "childes": []
          },
          {
            "id": 218,
            "parent_id": 16,
            "slug": "other-repair-and-constraction-items",
            "name": "Other Repair & Constraction Items",
            "image": null,
            "image_v2": "https://assets.jijistatic.net/art/attributes/categories/repair/other-repair-&-constraction-items-x3.png",
            "position": 1611,
            "childes": []
          }
        ]
      }
    ],
    "auction_categories": [
      49
    ],
    "bidding": {
      "steps": {
        "rules": [
          {
            "max": 50000,
            "step": 1000
          },
          {
            "max": 100000,
            "step": 2000
          },
          {
            "max": 250000,
            "step": 5000
          },
          {
            "max": 1000000,
            "step": 10000
          },
          {
            "max": 2500000,
            "step": 20000
          },
          {
            "max": 10000000,
            "step": 40000
          },
          {
            "max": null,
            "step": 50000
          }
        ],
        "type": "value",
        "min_step": 30000
      },
      "values": {
        "rules": [
          {
            "max": 0.4,
            "vals": [
              0.45,
              0.55
            ]
          },
          {
            "max": 0.55,
            "vals": [
              0.6,
              0.65
            ]
          },
          {
            "max": 0.7,
            "vals": [
              0.75,
              0.8
            ]
          },
          {
            "max": 0.85,
            "vals": [
              0.9,
              1
            ]
          }
        ],
        "type": "percent",
        "dest": "price"
      },
      "min_bid_amount": 157000,
      "max_bid_amount": 156600000,
      "sell_scale": {
        "no_bid": {
          "msg": "Place your first bid to stand a chance for a deal!"
        },
        "outbid": {
          "msg": "Someone outbid you. Place a new bid to compete for this car!"
        },
        "rules": [
          {
            "min": 0.2,
            "max": 0.6,
            "color": "#EB6972",
            "msg": "Consider a higher bid. Seller is unlikely to agree to this one"
          },
          {
            "min": 0.6,
            "max": 0.8,
            "color": "#FFBC65",
            "msg": "We recommend placing a higher bid now to avoid negotiations later"
          },
          {
            "min": 0.8,
            "max": 0.9,
            "color": "#6CCC7B",
            "msg": "Nice offer! Consider increasing your bid to secure a deal"
          },
          {
            "min": 0.9,
            "color": "#6CCC7B",
            "msg": "Seller is likely to accept your bid if it remains the highest"
          }
        ]
      }
    },
    "config": {
      "domain": "jiji.ng",
      "country_name": "Nigeria",
      "currency": {
        "symbol": "₦",
        "name": "Naira",
        "price_format": "{symbol} {price}",
        "code": "NGN",
        "price_accuracy": 1000,
        "cents_in_unit": 100
      },
      "tz": "Africa/Lagos",
      "debug": false,
      "tag_manager": {
        "UA_id": null,
        "AW_id": "AW-961380439",
        "cars_id": "G-3Z1QJFFS8L",
        "cars_aw_id": "AW-10955045569"
      },
      "languages_data": {
        "default_locale": "en",
        "items": [
          {
            "name": "English",
            "translated_name": "English",
            "id": "en",
            "locale": "en-NG",
            "filename": "https://assets.jijistatic.net/static/bundles/translations/en-51bac70d.json"
          },
          {
            "name": "Hausa",
            "translated_name": "Hausa",
            "id": "ha",
            "locale": "ha-NG",
            "filename": "https://assets.jijistatic.net/static/bundles/translations/ha-46158361.json"
          }
        ]
      },
      "adsense_data": {
        "targeting_price_list": [
          [
            0,
            500000
          ],
          [
            500000,
            1000000
          ],
          [
            1000000,
            2000000
          ],
          [
            2000000,
            3000000
          ],
          [
            3000000,
            4000000
          ],
          [
            4000000,
            5000000
          ],
          [
            5000000,
            10000000
          ],
          [
            10000000,
            100000000000
          ]
        ]
      },
      "premium_services": {
        "pay_via_bank": []
      },
      "has_app": true,
      "validation": {
        "phone": {
          "country_code": "234",
          "prefix": "0",
          "operators": [
            "70",
            "80",
            "81",
            "90",
            "91"
          ],
          "operator_length": 2,
          "phone_len": 10,
          "regexp": "^(?:2340|234|0|)((70|80|81|90|91)\\d{8})$",
          "search_regexp": "(^|[^\\d])(((?:2340|234|0)?(70|80|81|90|91)\\d{6,8})|(447\\d{9}))(?!\\d)",
          "search_regexp_advanced": "(?<!\\d)[_\\W]{,5}(((?:2[_\\W]{,5}3[_\\W]{,5}4[_\\W]{,5}0|2[_\\W]{,5}3[_\\W]{,5}4|0)?[_\\W]{,5}(7[_\\W]{,5}0|8[_\\W]{,5}0|8[_\\W]{,5}1|9[_\\W]{,5}0|9[_\\W]{,5}1)[_\\W]{,5}(\\d[_\\W]{,5}){5,7}\\d)|(4[_\\W]{,5}4[_\\W]{,5}7[_\\W]{,5}(\\d[_\\W]{,5}){8}\\d))(?!\\d)"
        },
        "password": {
          "min_length": 6,
          "max_length": 100
        },
        "lot_id": {
          "regexp": "^(NG[ -]?)?\\d+$",
          "flags": "i"
        }
      },
      "app": {
        "android": {
          "name": "Jiji Nigeria: Buy&Sell Online",
          "id": "ng.jiji.app",
          "url": "https://play.google.com/store/apps/details?id=ng.jiji.app"
        },
        "ios": {
          "name": "Jiji Nigeria",
          "id": "966165025",
          "url": "https://itunes.apple.com/us/app/jiji.ng/id966165025"
        }
      },
      "messenger": {
        "ws_server_url": "wss://ws.jiji.ng/ws",
        "audio_max_size": 5242880
      },
      "social_data": {
        "one_tap_client_id": "882600435014-q07n5pempn80t3hhoqc6cqn5vchp0otq.apps.googleusercontent.com",
        "truecaller": {
          "app_key": "5fgIxcf37a142c3cc426d9b8c88ead83fb956",
          "app_name": "Jiji Nigeria"
        },
        "whats_app_support_contact_link": "https://wa.me/2347059978547",
        "facebook_support_contact_id": "463583521052737",
        "intercom_support_contact_id": "ugmhsbgy",
        "whats_app_available": false,
        "sharing": {
          "twitter": "https://twitter.com/share?text=Join+Jiji&url=https%3A%2F%2Fjiji.ng",
          "mail": "mailto:?subject=Join+Jiji&body=https%3A%2F%2Fjiji.ng%3Futm_campaign%3DemailButton%26utm_medium%3Dsite-share-button%26utm_source%3Demail%26p%3D27",
          "facebook": "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjiji.ng%3Futm_campaign%3DfacebookButton%26utm_medium%3Dsite-share-button%26utm_source%3Dfacebook%26p%3D27&t=Join+Jiji",
          "whats_app": "whatsapp://send?text=https%3A%2F%2Fjiji.ng"
        },
        "facebook": {
          "app_id": 294481384086302,
          "pages": 294481384086302
        },
        "facebook_auth": {
          "url": "/social-auth.html",
          "params": [
            "url",
            "fb_share"
          ]
        },
        "google_auth": {
          "url": "/google-auth.html",
          "params": [
            "url"
          ]
        }
      },
      "auction": {
        "ws_server_url": "wss://ws.jiji.ng/ws-auction",
        "enabled": false,
        "visible": false
      },
      "device": {
        "desktop": true,
        "tablet": false,
        "mobile": false,
        "is_web_view": false
      },
      "urls": {
        "media_recorder_polyfill": "https://assets.jijistatic.net/static/bundles/js/media-recorder-polyfill-js.79b94f4f7b5fb4b9ffee.min.js",
        "svg_sprite_url": "https://assets.jijistatic.net/static/bundles/sprites/svg/sprite-svg-6a412bf4.svg"
      },
      "is_analytics_force_disabled": false,
      "premium_services_enabled": true
    },
    "flags": {
      "web_log_advert_mobile_adsense_showing": true,
      "web_jiji_6046_redesign": true,
      "web_third_level_region_enabled": true,
      "web_24319": true,
      "web_sell_now_v5": true,
      "web_sell_now_v2": true,
      "web_new_post_ad": true,
      "web_not_reload_advert_adsense": true,
      "web_additional_fb_flag": true,
      "web_use_google_one_tap": true,
      "web_advert_with_video": true,
      "web_advert_title_on_bot_listing": true,
      "web_last_visited_adverts": true,
      "web_new_ps": true,
      "web_facebook_delayed_init": true,
      "web_new_listing_view": true,
      "web_preload_spa": true,
      "web_show_cookie_hint": true,
      "web_hiring": true,
      "web_deferred_adsense_analytics_load": true,
      "web_truecaller_enable": true,
      "web_23116": true,
      "web_show_delivery_popup": true,
      "web_sell_now_v3": true,
      "web_19668": true,
      "web_pro_sales": true,
      "web_sell_now_v4": false,
      "web_recommended_ad_price": false,
      "web_simplify_create_advert_form": false,
      "web_show_contact_required_auth": true,
      "web_clarity_analytics": false,
      "web_similar_ssr": true,
      "web_23669": true,
      "web_26178": true
    },
    "token": "Ijg1YmQyMDI0MjQyYjIyOTNiOWNhMjdjYTkxNTlmMzUwZGM1ZDA2ZmMi.Z_WsSA.n2MAF_8yybOAZZk-4KEKlvJBkAk",
    "app_id": "cK6rlyJomu6LH28uyx6PHDQcfxpVG59SCUvsw8sbmuA=",
    "fb_pixel_ids": [
      "2360032340708416",
      "2150104691766621"
    ],
    "twitter_business_id": "o4kdg",
    "tiktok_ads_id": "CRMLAFJC77U6OCTLR8MG",
    "path_for_static": "https://assets.jijistatic.net/static/",
    "footer": {
      "links": [
        {
          "group": "about_us",
          "title": "About us",
          "links": [
            {
              "text": "About Jiji",
              "url": "/about.html"
            },
            {
              "text": "We are hiring!",
              "url": "/hiring.html"
            },
            {
              "text": "Terms & Conditions",
              "url": "/rules.html"
            },
            {
              "text": "Privacy Policy",
              "url": "/privacy.html"
            },
            {
              "text": "Billing Policy",
              "url": "/billing-policy.html"
            },
            {
              "text": "Candidate Privacy Policy",
              "url": "/jiji-pages/candidate-privacy-policy"
            },
            {
              "text": "Cookie Policy",
              "url": "/jiji-pages/cookie-policy"
            },
            {
              "text": "Copyright Infringement Policy",
              "url": "/jiji-pages/copyright-infringement-policy"
            }
          ]
        },
        {
          "group": "support",
          "title": "Support",
          "links": [
            {
              "text": "support@jiji.ng",
              "url": "mailto:support@jiji.ng"
            },
            {
              "text": "Safety tips",
              "url": "/safety-tips.html"
            },
            {
              "text": "Contact Us",
              "url": "/contacts.html"
            },
            {
              "text": "FAQ",
              "url": "/faq"
            }
          ]
        },
        {
          "group": "apps_data",
          "title": "Our apps",
          "links": [
            {
              "text": "",
              "url": "https://itunes.apple.com/us/app/jiji.ng/id966165025",
              "image_url": "https://assets.jijistatic.net/static/img/single-images/app-store.svg"
            },
            {
              "text": "",
              "url": "https://play.google.com/store/apps/details?id=ng.jiji.app",
              "image_url": "https://assets.jijistatic.net/static/img/single-images/google-play.svg"
            }
          ]
        },
        {
          "group": "resources",
          "title": "Our resources",
          "links": [
            {
              "text": "Our blog",
              "url": "https://jiji-blog.com",
              "exist_in_spa": false
            },
            {
              "text": "Jiji on FB",
              "url": "https://www.facebook.com/Jiji.Nigeria",
              "exist_in_spa": false
            },
            {
              "text": "Our Instagram",
              "url": "https://www.instagram.com/jijinigeria/",
              "exist_in_spa": false
            },
            {
              "text": "Our YouTube",
              "url": "https://www.youtube.com/channel/UCvAyphNspDQMFnp7g57jH-g",
              "exist_in_spa": false
            },
            {
              "text": "Our Twitter",
              "url": "https://twitter.com/jijinigeria",
              "exist_in_spa": false
            }
          ]
        },
        {
          "group": "hot_links",
          "title": "Hot links",
          "links": [
            {
              "text": "Jiji Africa",
              "url": "https://jiji.africa"
            }
          ]
        },
        {
          "group": "other_countries",
          "title": "Other countries",
          "links": [
            {
              "text": "Kenya",
              "url": "https://jiji.co.ke",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/kenya.svg"
            },
            {
              "text": "Uganda",
              "url": "https://jiji.ug",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/uganda.svg"
            },
            {
              "text": "Tanzania",
              "url": "https://jiji.co.tz",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/tanzania.svg"
            },
            {
              "text": "Ghana",
              "url": "https://jiji.com.gh",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/ghana.svg"
            },
            {
              "text": "Ethiopia",
              "url": "https://jiji.com.et",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/ethiopia.svg"
            },
            {
              "text": "Senegal",
              "url": "https://jiji.sn",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/senegal.svg"
            },
            {
              "text": "Côte d’Ivoire",
              "url": "https://jiji.co.ci",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/civ.svg"
            },
            {
              "text": "Bangladesh",
              "url": "https://jiji-bd.com",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/bangladesh.svg"
            },
            {
              "text": "Sri Lanka",
              "url": "https://jiji.lk",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/srilanka.svg"
            },
            {
              "text": "Democratic Republic of the Congo",
              "url": "https://jiji.cd",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/congo.svg"
            },
            {
              "text": "Pakistan",
              "url": "https://milay.pk",
              "image_url": "https://assets.jijistatic.net/static/img/footer-anchors/pakistan.svg"
            }
          ]
        }
      ],
      "aside_text": "",
      "copyright": "© 2025 Jiji.ng"
    },
    "user": {
      "id": 14899351,
      "guid": "eRFdFOiLDtPLhLlHMFbGHV5G",
      "language": null,
      "googletag_seller_keyword": null,
      "fb_data": {
        "em": "lg.ngono@gmail.com",
        "ph": null,
        "fn": "Ludovic Gael",
        "ln": "NGONO ONANA",
        "external_id": 14899351
      },
      "auth_url": null,
      "created_at": "Apr 7, 2025, 6:07:03 PM",
      "statuses": {
        "duplicated": false,
        "blocked": false,
        "spammer": false,
        "hacked": false,
        "active": true
      },
      "sha256_email_address": "d1359efa4b432ebb11f41547e4fe2f01855f375b130326c532210d0c6aac32d0",
      "sha256_phone_number": null,
      "email": "lg.ngono@gmail.com",
      "email_confirmed": true,
      "phone": null,
      "phones": [],
      "phone_confirmed": false,
      "avatar": null,
      "username": "Ludovic Gael Ngono Onana",
      "slug": null,
      "paid": false,
      "required_phone_confirm": false,
      "phone_confirm_for_chat": false,
      "loan": {
        "can_apply": false,
        "status": null,
        "show_popup": false,
        "form_url": null
      }
    },
    "header": {
      "links": [
        {
          "name": "saved",
          "icon": "tab-saved",
          "tooltip": "Saved",
          "url": "/profile/saved",
          "show_on_tablet": true
        },
        {
          "name": "messages",
          "icon": "chat-filled",
          "tooltip": "My messages",
          "url": "/profile-messages",
          "show_on_tablet": true
        },
        {
          "name": "notifications",
          "icon": "ring-small",
          "tooltip": "Notifications",
          "url": "/profile/notifications",
          "show_on_tablet": true
        },
        {
          "icon": "ps-ads",
          "tooltip": "My adverts",
          "url": "/profile/adverts",
          "show_on_tablet": true
        },
        {
          "icon": "user-avatar-2",
          "image_url": null,
          "url": "/profile",
          "full_size_icon": true,
          "show_on_tablet": true,
          "menu": [
            {
              "text": "My shop",
              "url": "/sellerpage-eRFdFOiLDtPLhLlHMFbGHV5G",
              "icon": "dashboard"
            },
            {
              "text": "Feedback",
              "icon": "positive-small",
              "url": "/profile/feedback"
            },
            {
              "text": "Performance",
              "icon": "statistics-outlined",
              "url": "/profile/statistics",
              "underlined": true
            },
            {
              "text": "Settings",
              "icon": "settings-new",
              "url": "/profile/settings"
            },
            {
              "text": "Log out",
              "icon": "logout",
              "url": "/logout.html"
            }
          ]
        }
      ]
    }
  }
  adverts: any[] = [
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        },
        {
          "name": "Mileage",
          "value": 51000,
          "unit": "km"
        }
      ],
      "badge_info": {
        "label": "6X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 19,
      "details": "Toyota Rav4 Limited \n2020 model\nThumbstart \nMultimedia screen\nDigital / computerized rear view...",
      "event_params": {
        "cpc_campaign_id": 191420,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Toyota RAV4 Limited FWD 2020 Silver",
        "content_category": "Cars",
        "content_ids": [
          "jFx6qzTBgUo9PNG0x95P2R90"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "jFx6qzTBgUo9PNG0x95P2R90",
      "id": 46841555,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/169849342_MzAwLTQwMC05YWFkMjc4ZDA0.webp",
        "center": [
          50,
          66
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/169849342_MzAwLTQwMC05YWFkMjc4ZDA0.webp",
          "center": [
            50,
            66
          ],
          "size": [
            300,
            400
          ]
        }
      ],
      "images_count": 19,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": true,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/2580046_46841555",
      "paid_info": {
        "text": "Promoted",
        "bg": "#FFF4B8",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 45000000,
        "view": "₦ 45,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 45,000,000",
      "region": "Lagos State, Ikeja",
      "region_id": 146,
      "region_item_text": "Lagos, Ikeja",
      "region_name": "Ikeja",
      "region_parent_name": "Lagos State",
      "region_slug": "ikeja",
      "short_description": "Toyota Rav4 Limited \n2020 model\nThumbstart \nMultimedia screen\nDigital / computerized rear view...",
      "slug": "toyota-rav4-limited-fwd-2020-silver",
      "status": "active",
      "title": "Toyota RAV4 Limited FWD 2020 Silver",
      "title_labels": [],
      "tops_count": 1,
      "url": "/ikeja/cars/toyota-rav4-limited-fwd-2020-silver-jFx6qzTBgUo9PNG0x95P2R90.html?page=2&pos=1&cur_pos=1&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 2580046,
      "user_phone": "07032729797"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Local Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "5X Diamond",
        "slug": "booster_diamond_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 14,
      "details": "In good condition \nEngine and gear working very fine\nAc is chilling \nNo fault \nBuy and Drive",
      "event_params": {
        "cpc_campaign_id": 193317,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Acura MDX 2005 Red",
        "content_category": "Cars",
        "content_ids": [
          "wifjpEtFcvWqNawto9jMtSL9"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "wifjpEtFcvWqNawto9jMtSL9",
      "id": 47070012,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/170804904_MzAwLTUzNC0wOTUxYmY4N2M2.webp",
        "center": [
          66,
          53
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/170804904_MzAwLTUzNC0wOTUxYmY4N2M2.webp",
          "center": [
            66,
            53
          ],
          "size": [
            300,
            534
          ]
        }
      ],
      "images_count": 14,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/7820236_47070012",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "DIAMOND"
      },
      "price_obj": {
        "value": 4700000,
        "view": "₦ 4,700,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 4,700,000",
      "region": "Lagos State, Ikeja",
      "region_id": 146,
      "region_item_text": "Lagos, Ikeja",
      "region_name": "Ikeja",
      "region_parent_name": "Lagos State",
      "region_slug": "ikeja",
      "short_description": "In good condition \nEngine and gear working very fine\nAc is chilling \nNo fault \nBuy and Drive",
      "slug": "acura-mdx-2005-red",
      "status": "active",
      "title": "Acura MDX 2005 Red",
      "title_labels": [],
      "tops_count": 0,
      "url": "/ikeja/cars/acura-mdx-2005-red-wifjpEtFcvWqNawto9jMtSL9.html?page=2&pos=2&cur_pos=2&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 7820236,
      "user_phone": "08067142094"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "Diamond",
        "slug": "booster_diamond",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 5,
      "details": "Foreign used Mercedes-Benz GLE53 AMG coupe with original custom duty",
      "event_params": {
        "cpc_campaign_id": 193360,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Mercedes-Benz GLE53 2022 White",
        "content_category": "Cars",
        "content_ids": [
          "uihoJ2DW8LxjqLaeOxaKTxhH"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "uihoJ2DW8LxjqLaeOxaKTxhH",
      "id": 45158367,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/162288364_MzAwLTMwOC02MDc3Y2Q4ZTky.webp",
        "center": [
          57,
          63
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/162288364_MzAwLTMwOC02MDc3Y2Q4ZTky.webp",
          "center": [
            57,
            63
          ],
          "size": [
            300,
            308
          ]
        }
      ],
      "images_count": 5,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/10364316_45158367",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "DIAMOND"
      },
      "price_obj": {
        "value": 198000000,
        "view": "₦ 198,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 198,000,000",
      "region": "Abuja (FCT), Central Business District",
      "region_id": 407,
      "region_item_text": "Abuja, Central Business District",
      "region_name": "Central Business District",
      "region_parent_name": "Abuja (FCT)",
      "region_slug": "central-business-district",
      "short_description": "Foreign used Mercedes-Benz GLE53 AMG coupe with original custom duty",
      "slug": "mercedes-benz-gle53-2022-white",
      "status": "active",
      "title": "Mercedes-Benz GLE53 2022 White",
      "title_labels": [],
      "tops_count": 0,
      "url": "/central-business-district/cars/mercedes-benz-gle53-2022-white-uihoJ2DW8LxjqLaeOxaKTxhH.html?page=2&pos=3&cur_pos=3&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 10364316,
      "user_phone": "07031055679"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Local Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        },
        {
          "name": "Mileage",
          "value": 133000,
          "unit": "km"
        }
      ],
      "badge_info": {
        "label": "TOP",
        "slug": "top",
        "bg_color": "#ffaf45",
        "text_color": "#ffffff",
        "aside_color": "#C8822C",
        "service_type": "top"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 8,
      "details": "Acura Zdx keyless navigation system Bluetooth reverse camera \nChilling Ac, panoramic roof full...",
      "fb_view_content_data": {
        "content_name": "Acura ZDX Base AWD 2010 Black",
        "content_category": "Cars",
        "content_ids": [
          "1hXY9oVnOtr34vJihpjbEaah"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "1hXY9oVnOtr34vJihpjbEaah",
      "id": 43673428,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/155563011_MzAwLTQwMC05NThhOTEzNzA3.webp",
        "center": [
          52,
          1430
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/155563011_MzAwLTQwMC05NThhOTEzNzA3.webp",
          "center": [
            52,
            1430
          ],
          "size": [
            300,
            400
          ]
        }
      ],
      "images_count": 8,
      "is_boost": false,
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": true,
      "labels": [],
      "message_url": "/profile-messages/13089416_43673428",
      "paid_info": {
        "bg": "#FFF4B8"
      },
      "price_obj": {
        "value": 9800000,
        "view": "₦ 9,800,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 9,800,000",
      "region": "Oyo State, Ibadan",
      "region_id": 366,
      "region_item_text": "Oyo, Ibadan",
      "region_name": "Ibadan",
      "region_parent_name": "Oyo State",
      "region_slug": "ibadan",
      "short_description": "Acura Zdx keyless navigation system Bluetooth reverse camera \nChilling Ac, panoramic roof full...",
      "slug": "acura-zdx-base-awd-2010-black",
      "status": "active",
      "title": "Acura ZDX Base AWD 2010 Black",
      "title_labels": [],
      "tops_count": 1,
      "url": "/ibadan/cars/acura-zdx-base-awd-2010-black-1hXY9oVnOtr34vJihpjbEaah.html?page=2&pos=4&cur_pos=4&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 13089416,
      "user_phone": "09056498978"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        },
        {
          "name": "Mileage",
          "value": 70000,
          "unit": "km"
        }
      ],
      "badge_info": {
        "label": "5X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 14,
      "details": "Here comes a very clean 2008 GL450 for sale , very rugged for Nigerian road, durable and dependable...",
      "event_params": {
        "cpc_campaign_id": 176868,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Mercedes-Benz GL-Class GL 450 2008 Black",
        "content_category": "Cars",
        "content_ids": [
          "NUt1wTuetaOMFfTGjrNih0w"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "NUt1wTuetaOMFfTGjrNih0w",
      "id": 41158306,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/144195456_MzAwLTIyNS1lMmEyNjIzM2I4.webp",
        "center": [
          60,
          48
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/144195456_MzAwLTIyNS1lMmEyNjIzM2I4.webp",
          "center": [
            60,
            48
          ],
          "size": [
            300,
            225
          ]
        }
      ],
      "images_count": 14,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [],
      "message_url": "/profile-messages/11642447_41158306",
      "paid_info": {
        "text": "Promoted",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 10500000,
        "view": "₦ 10,500,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 10,500,000",
      "region": "Lagos State, Alimosho",
      "region_id": 124,
      "region_item_text": "Lagos, Alimosho",
      "region_name": "Alimosho",
      "region_parent_name": "Lagos State",
      "region_slug": "alimosho",
      "short_description": "Here comes a very clean 2008 GL450 for sale , very rugged for Nigerian road, durable and dependable...",
      "slug": "mercedes-benz-gl-class-gl-450-2008-black",
      "status": "active",
      "title": "Mercedes-Benz GL-Class GL 450 2008 Black",
      "title_labels": [],
      "tops_count": 0,
      "url": "/alimosho/cars/mercedes-benz-gl-class-gl-450-2008-black-NUt1wTuetaOMFfTGjrNih0w.html?page=2&pos=5&cur_pos=5&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 11642447,
      "user_phone": "08034982554"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "2X TOP",
        "slug": "multi_top",
        "bg_color": "#fb5645",
        "text_color": "#ffffff",
        "aside_color": "#a94442",
        "service_type": "top"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 9,
      "details": "Fresh In glk350 4Matic 2015  \nPano roof / Power Booth / Parking Sensors/ Navigation/ Luxury Rims...",
      "event_params": {
        "cpc_campaign_id": 167034,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Mercedes-Benz GLK-Class 2015 Black",
        "content_category": "Cars",
        "content_ids": [
          "wilmj6rp8tTLpxMtXg760xiu"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "wilmj6rp8tTLpxMtXg760xiu",
      "id": 46903540,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/170091090_MzAwLTQwMC02ODk0Y2I1MWE3.webp",
        "center": [
          50,
          50
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/170091090_MzAwLTQwMC02ODk0Y2I1MWE3.webp",
          "center": [
            50,
            50
          ],
          "size": [
            300,
            400
          ]
        }
      ],
      "images_count": 9,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": true,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/4443562_46903540",
      "paid_info": {
        "text": "Promoted",
        "bg": "#FFF4B8",
        "package_type": "diamond",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "DIAMOND"
      },
      "price_obj": {
        "value": 23000000,
        "view": "₦ 23,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 23,000,000",
      "region": "Lagos State, Amuwo-Odofin",
      "region_id": 125,
      "region_item_text": "Lagos, Amuwo-Odofin",
      "region_name": "Amuwo-Odofin",
      "region_parent_name": "Lagos State",
      "region_slug": "amuwo-odofin",
      "short_description": "Fresh In glk350 4Matic 2015  \nPano roof / Power Booth / Parking Sensors/ Navigation/ Luxury Rims...",
      "slug": "mercedes-benz-glk-class-2015-black",
      "status": "active",
      "title": "Mercedes-Benz GLK-Class 2015 Black",
      "title_labels": [],
      "tops_count": 2,
      "url": "/amuwo-odofin/cars/mercedes-benz-glk-class-2015-black-wilmj6rp8tTLpxMtXg760xiu.html?page=2&pos=6&cur_pos=6&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 4443562,
      "user_phone": "08081220077"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {},
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 10,
      "details": "Foreign used,Full Option, Full duty,Accident Free, Sound engine,Absolutely nothing to fix Buy and...",
      "event_params": {
        "cpc_campaign_id": 182842,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Land Rover Range Rover 2015 Black",
        "content_category": "Cars",
        "content_ids": [
          "z5D89cygKSNtOsI8tbHkNkoW"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "z5D89cygKSNtOsI8tbHkNkoW",
      "id": 46490072,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/168260555_MzAwLTQwMC02MzliYmVmZTFl.webp",
        "center": [
          40,
          56
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/168260555_MzAwLTQwMC02MzliYmVmZTFl.webp",
          "center": [
            40,
            56
          ],
          "size": [
            300,
            400
          ]
        }
      ],
      "images_count": 10,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [],
      "message_url": "",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "",
        "icon": true,
        "more_photos": false
      },
      "price_obj": {
        "value": 20000000,
        "view": "₦ 20,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 20,000,000",
      "region": "Lagos State, Lekki",
      "region_id": 160,
      "region_item_text": "Lagos, Lekki",
      "region_name": "Lekki",
      "region_parent_name": "Lagos State",
      "region_slug": "lekki",
      "short_description": "Foreign used,Full Option, Full duty,Accident Free, Sound engine,Absolutely nothing to fix Buy and...",
      "slug": "land-rover-range-rover-2015-black",
      "status": "active",
      "title": "Land Rover Range Rover 2015 Black",
      "title_labels": [],
      "tops_count": 0,
      "url": "/lekki/cars/land-rover-range-rover-2015-black-z5D89cygKSNtOsI8tbHkNkoW.html?page=2&pos=7&cur_pos=7&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 3647436,
      "user_phone": "09090000146"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "Diamond",
        "slug": "booster_diamond",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 12,
      "details": "Foreign used 2014 Lexus Es350 upgraded to 2017 is up for sale\nThumbstart \nLeather seats\nV6...",
      "event_params": {
        "cpc_campaign_id": 192951,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Lexus ES 350 FWD 2014 Gray",
        "content_category": "Cars",
        "content_ids": [
          "bpz36Mv9dRq2ctviYCWXm7bX"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "bpz36Mv9dRq2ctviYCWXm7bX",
      "id": 45129009,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/162147231_MzAwLTIyNS0wNGRmYTFjYjI2.webp",
        "center": [
          46,
          49
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/162147231_MzAwLTIyNS0wNGRmYTFjYjI2.webp",
          "center": [
            46,
            49
          ],
          "size": [
            300,
            225
          ]
        }
      ],
      "images_count": 12,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [],
      "message_url": "/profile-messages/1014409_45129009",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "DIAMOND"
      },
      "price_obj": {
        "value": 19000000,
        "view": "₦ 19,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 19,000,000",
      "region": "Lagos State, Ilupeju",
      "region_id": 163,
      "region_item_text": "Lagos, Ilupeju",
      "region_name": "Ilupeju",
      "region_parent_name": "Lagos State",
      "region_slug": "ilupeju",
      "short_description": "Foreign used 2014 Lexus Es350 upgraded to 2017 is up for sale\nThumbstart \nLeather seats\nV6...",
      "slug": "lexus-es-350-fwd-2014-gray",
      "status": "active",
      "title": "Lexus ES 350 FWD 2014 Gray",
      "title_labels": [],
      "tops_count": 0,
      "url": "/ilupeju/cars/lexus-es-350-fwd-2014-gray-bpz36Mv9dRq2ctviYCWXm7bX.html?page=2&pos=8&cur_pos=8&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 1014409,
      "user_phone": "08022089354"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        },
        {
          "name": "Mileage",
          "value": 85000,
          "unit": "km"
        }
      ],
      "badge_info": {
        "label": "5X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 12,
      "details": "Here comes a very clean GL 450 , just arrived and is ready to go. Just buy and drive . Everything...",
      "event_params": {
        "cpc_campaign_id": 176868,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Mercedes-Benz GL-Class GL 450 2013 White",
        "content_category": "Cars",
        "content_ids": [
          "7GyqY8Jrb1vUdARJFTpuEAB"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "7GyqY8Jrb1vUdARJFTpuEAB",
      "id": 41737544,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/146845393_MzAwLTQwMC1hNTUxZmY1ZTcz.webp",
        "center": [
          60,
          44
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/146845393_MzAwLTQwMC1hNTUxZmY1ZTcz.webp",
          "center": [
            60,
            44
          ],
          "size": [
            300,
            400
          ]
        }
      ],
      "images_count": 12,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [],
      "message_url": "/profile-messages/11642447_41737544",
      "paid_info": {
        "text": "Promoted",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 29000000,
        "view": "₦ 29,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 29,000,000",
      "region": "Lagos State, Alimosho",
      "region_id": 124,
      "region_item_text": "Lagos, Alimosho",
      "region_name": "Alimosho",
      "region_parent_name": "Lagos State",
      "region_slug": "alimosho",
      "short_description": "Here comes a very clean GL 450 , just arrived and is ready to go. Just buy and drive . Everything...",
      "slug": "mercedes-benz-gl-class-gl-450-2013-white",
      "status": "active",
      "title": "Mercedes-Benz GL-Class GL 450 2013 White",
      "title_labels": [],
      "tops_count": 0,
      "url": "/alimosho/cars/mercedes-benz-gl-class-gl-450-2013-white-7GyqY8Jrb1vUdARJFTpuEAB.html?page=2&pos=9&cur_pos=9&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 11642447,
      "user_phone": "08034982554"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        },
        {
          "name": "Mileage",
          "value": 125000,
          "unit": "km"
        }
      ],
      "badge_info": {
        "label": "6X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 0,
      "details": "Mint clean Toyota Highlander Limited edition \nThumbstart/ push to start\nNavigation/ Multimedia...",
      "event_params": {
        "cpc_campaign_id": 191420,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Toyota Highlander Limited 2010 Gold",
        "content_category": "Cars",
        "content_ids": [
          "C6oviyRNUxnXA18fqnkYRJ3x"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "C6oviyRNUxnXA18fqnkYRJ3x",
      "id": 46883553,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/170000338_MzAwLTIyNS1kOTBhZGZiNmI5.webp",
        "center": [
          45,
          43
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/170000338_MzAwLTIyNS1kOTBhZGZiNmI5.webp",
          "center": [
            45,
            43
          ],
          "size": [
            300,
            225
          ]
        }
      ],
      "images_count": 0,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/2580046_46883553",
      "paid_info": {
        "text": "Promoted",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 17500000,
        "view": "₦ 17,500,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 17,500,000",
      "region": "Lagos State, Alimosho",
      "region_id": 124,
      "region_item_text": "Lagos, Alimosho",
      "region_name": "Alimosho",
      "region_parent_name": "Lagos State",
      "region_slug": "alimosho",
      "short_description": "Mint clean Toyota Highlander Limited edition \nThumbstart/ push to start\nNavigation/ Multimedia...",
      "slug": "toyota-highlander-limited-2010-gold",
      "status": "active",
      "title": "Toyota Highlander Limited 2010 Gold",
      "title_labels": [],
      "tops_count": 0,
      "url": "/alimosho/cars/toyota-highlander-limited-2010-gold-C6oviyRNUxnXA18fqnkYRJ3x.html?page=2&pos=10&cur_pos=10&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 2580046,
      "user_phone": "07032729797"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        },
        {
          "name": "Mileage",
          "value": 28000,
          "unit": "km"
        }
      ],
      "badge_info": {
        "label": "4X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 19,
      "details": "Toyota land cruiser prado 2017 upgraded to 2020 in prado company in dubia navigation system revised...",
      "event_params": {
        "cpc_campaign_id": 179889,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Toyota Land Cruiser Prado 4.0 2017 Black",
        "content_category": "Cars",
        "content_ids": [
          "gQbmxu7oAH3Zka15axHrdTi"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "gQbmxu7oAH3Zka15axHrdTi",
      "id": 33966803,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/110098385_MzAwLTIyNS1lN2JhZTkxY2Q1.webp",
        "center": null
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/110098385_MzAwLTIyNS1lN2JhZTkxY2Q1.webp",
          "center": null,
          "size": [
            300,
            225
          ]
        }
      ],
      "images_count": 19,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/79301_33966803",
      "paid_info": {
        "text": "Promoted",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 30800000,
        "view": "₦ 30,800,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 30,800,000",
      "region": "Lagos State, Amuwo-Odofin",
      "region_id": 125,
      "region_item_text": "Lagos, Amuwo-Odofin",
      "region_name": "Amuwo-Odofin",
      "region_parent_name": "Lagos State",
      "region_slug": "amuwo-odofin",
      "short_description": "Toyota land cruiser prado 2017 upgraded to 2020 in prado company in dubia navigation system revised...",
      "slug": "toyota-land-cruiser-prado-4-0-2017-black",
      "status": "active",
      "title": "Toyota Land Cruiser Prado 4.0 2017 Black",
      "title_labels": [],
      "tops_count": 0,
      "url": "/amuwo-odofin/cars/toyota-land-cruiser-prado-4-0-2017-black-gQbmxu7oAH3Zka15axHrdTi.html?page=2&pos=11&cur_pos=11&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 79301,
      "user_phone": "08090717972"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "7X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 0,
      "details": "Toyota Camry 2011 , everything is  working perfectly engine, gear, Ac . Foriegn used,  custom duty...",
      "event_params": {
        "cpc_campaign_id": 182633,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Toyota Camry 2011 Red",
        "content_category": "Cars",
        "content_ids": [
          "p2UslcdEjzrbaJ0yhQOlG8wx"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "p2UslcdEjzrbaJ0yhQOlG8wx",
      "id": 46745621,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/169802810_MzAwLTM5OC04ZjNmNWE2N2Jj.webp",
        "center": [
          46,
          49
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/169802810_MzAwLTM5OC04ZjNmNWE2N2Jj.webp",
          "center": [
            46,
            49
          ],
          "size": [
            300,
            398
          ]
        }
      ],
      "images_count": 0,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": true,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/6525885_46745621",
      "paid_info": {
        "text": "Promoted",
        "bg": "#FFF4B8",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 11500000,
        "view": "₦ 11,500,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 11,500,000",
      "region": "Lagos State, Ojodu",
      "region_id": 165,
      "region_item_text": "Lagos, Ojodu",
      "region_name": "Ojodu",
      "region_parent_name": "Lagos State",
      "region_slug": "ojodu",
      "short_description": "Toyota Camry 2011 , everything is  working perfectly engine, gear, Ac . Foriegn used,  custom duty...",
      "slug": "toyota-camry-2011-red",
      "status": "active",
      "title": "Toyota Camry 2011 Red",
      "title_labels": [],
      "tops_count": 1,
      "url": "/ojodu/cars/toyota-camry-2011-red-p2UslcdEjzrbaJ0yhQOlG8wx.html?page=2&pos=12&cur_pos=12&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 6525885,
      "user_phone": "09033524982"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        },
        {
          "name": "Mileage",
          "value": 85000,
          "unit": "km"
        }
      ],
      "badge_info": {
        "label": "6X Diamond",
        "slug": "booster_diamond_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 20,
      "details": "Newly cleared , key start, panoramic roof , leather interior , v6 engine , navigation screen , BT,...",
      "event_params": {
        "cpc_campaign_id": 192666,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Mercedes-Benz GLK-Class 350 2010 White",
        "content_category": "Cars",
        "content_ids": [
          "qgGDnHzr0Fu1EhRfe4gl7hym"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "qgGDnHzr0Fu1EhRfe4gl7hym",
      "id": 46484582,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/168235404_MzAwLTQwMC1jNzg5N2Y3YTNh.webp",
        "center": [
          51,
          76
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/168235404_MzAwLTQwMC1jNzg5N2Y3YTNh.webp",
          "center": [
            51,
            76
          ],
          "size": [
            300,
            400
          ]
        }
      ],
      "images_count": 20,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/5670811_46484582",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "DIAMOND"
      },
      "price_obj": {
        "value": 17400000,
        "view": "₦ 17,400,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 17,400,000",
      "region": "Lagos State, Alimosho",
      "region_id": 124,
      "region_item_text": "Lagos, Alimosho",
      "region_name": "Alimosho",
      "region_parent_name": "Lagos State",
      "region_slug": "alimosho",
      "short_description": "Newly cleared , key start, panoramic roof , leather interior , v6 engine , navigation screen , BT,...",
      "slug": "mercedes-benz-glk-class-350-2010-white",
      "status": "active",
      "title": "Mercedes-Benz GLK-Class 350 2010 White",
      "title_labels": [],
      "tops_count": 0,
      "url": "/alimosho/cars/mercedes-benz-glk-class-350-2010-white-qgGDnHzr0Fu1EhRfe4gl7hym.html?page=2&pos=13&cur_pos=13&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 5670811,
      "user_phone": "07013623663"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "10X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 12,
      "details": "Clean tokunbo toyota venza\nblack on cream\npush start \npano roof\nalloy wheels \nnice ride!!",
      "discount": {
        "percent": 4,
        "old_price": {
          "value": 16500000,
          "view": "₦ 16,500,000",
          "period": null,
          "bulk": null
        },
        "date_start": 1743968853,
        "date_end": 1745264853
      },
      "event_params": {
        "cpc_campaign_id": 172280,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Toyota Venza V6 2009 Black",
        "content_category": "Cars",
        "content_ids": [
          "xDlLg4C5J3F0NyG6hYvC1L5I"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "xDlLg4C5J3F0NyG6hYvC1L5I",
      "id": 46779471,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/169541009_MzAwLTIyNS0zZmM2ZmIyYjc1.webp",
        "center": [
          52,
          48
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/169541009_MzAwLTIyNS0zZmM2ZmIyYjc1.webp",
          "center": [
            52,
            48
          ],
          "size": [
            300,
            225
          ]
        }
      ],
      "images_count": 12,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/8033073_46779471",
      "paid_info": {
        "text": "Promoted",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 15840000,
        "view": "₦ 15,840,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 15,840,000",
      "region": "Lagos State, Surulere",
      "region_id": 174,
      "region_item_text": "Lagos, Surulere",
      "region_name": "Surulere",
      "region_parent_name": "Lagos State",
      "region_slug": "surulere",
      "short_description": "Clean tokunbo toyota venza\nblack on cream\npush start \npano roof\nalloy wheels \nnice ride!!",
      "slug": "toyota-venza-v6-2009-black",
      "status": "active",
      "title": "Toyota Venza V6 2009 Black",
      "title_labels": [],
      "tops_count": 0,
      "url": "/surulere/cars/toyota-venza-v6-2009-black-xDlLg4C5J3F0NyG6hYvC1L5I.html?page=2&pos=14&cur_pos=14&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 8033073,
      "user_phone": "08107631811"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "4X Diamond",
        "slug": "booster_diamond_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 9,
      "details": "Full option\nNo issues\nDirect belgium",
      "event_params": {
        "cpc_campaign_id": 177555,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Mercedes-Benz GLE-Class 2016 White",
        "content_category": "Cars",
        "content_ids": [
          "9Z5PB5GuTNmr0ZRBDrGogzTr"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "9Z5PB5GuTNmr0ZRBDrGogzTr",
      "id": 46808444,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/169666647_MzAwLTI2Ny0wYTEwMGZmMDM3.webp",
        "center": [
          50,
          49
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/169666647_MzAwLTI2Ny0wYTEwMGZmMDM3.webp",
          "center": [
            50,
            49
          ],
          "size": [
            300,
            267
          ]
        }
      ],
      "images_count": 9,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/395979_46808444",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "DIAMOND"
      },
      "price_obj": {
        "value": 43000000,
        "view": "₦ 43,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 43,000,000",
      "region": "Lagos State, Ikeja",
      "region_id": 146,
      "region_item_text": "Lagos, Ikeja",
      "region_name": "Ikeja",
      "region_parent_name": "Lagos State",
      "region_slug": "ikeja",
      "short_description": "Full option\nNo issues\nDirect belgium",
      "slug": "mercedes-benz-gle-class-2016-white",
      "status": "active",
      "title": "Mercedes-Benz GLE-Class 2016 White",
      "title_labels": [],
      "tops_count": 0,
      "url": "/ikeja/cars/mercedes-benz-gle-class-2016-white-9Z5PB5GuTNmr0ZRBDrGogzTr.html?page=2&pos=15&cur_pos=15&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 395979,
      "user_phone": "08052539145"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Local Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {},
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 5,
      "details": "Super Clean Nigerian Used 2019 GLC Coupe.Less than a year registered",
      "event_params": {
        "cpc_campaign_id": 193307,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Mercedes-Benz GLC-Class 2019 Gray",
        "content_category": "Cars",
        "content_ids": [
          "iSQ46WVRnrwk8c03dRAOKNf1"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "iSQ46WVRnrwk8c03dRAOKNf1",
      "id": 46238744,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/167153844_MzAwLTM5OC0wNzllM2FmZjA1.webp",
        "center": [
          49,
          51
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/167153844_MzAwLTM5OC0wNzllM2FmZjA1.webp",
          "center": [
            49,
            51
          ],
          "size": [
            300,
            398
          ]
        }
      ],
      "images_count": 5,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/13852698_46238744",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "",
        "icon": true,
        "more_photos": false
      },
      "price_obj": {
        "value": 52000000,
        "view": "₦ 52,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 52,000,000",
      "region": "Edo State, Benin City",
      "region_id": 88,
      "region_item_text": "Edo, Benin City",
      "region_name": "Benin City",
      "region_parent_name": "Edo State",
      "region_slug": "benin-city",
      "short_description": "Super Clean Nigerian Used 2019 GLC Coupe.Less than a year registered",
      "slug": "mercedes-benz-glc-class-2019-gray",
      "status": "active",
      "title": "Mercedes-Benz GLC-Class 2019 Gray",
      "title_labels": [],
      "tops_count": 0,
      "url": "/oredo/cars/mercedes-benz-glc-class-2019-gray-iSQ46WVRnrwk8c03dRAOKNf1.html?page=2&pos=16&cur_pos=16&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 13852698,
      "user_phone": "08140663655"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Brand New",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "5X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 15,
      "details": "All New 2024 Range Rover Autobiography Brand new condition direct from Land Rover USA” Original...",
      "event_params": {
        "cpc_campaign_id": 180031,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "New Land Rover Range Rover 2024 White",
        "content_category": "Cars",
        "content_ids": [
          "5VHmnmTFqeJrqzT0JlPVHH5F"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "5VHmnmTFqeJrqzT0JlPVHH5F",
      "id": 45329528,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/163084940_MzAwLTMxMi1iYjI4MTRhYjZi.webp",
        "center": [
          49,
          51
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/163084940_MzAwLTMxMi1iYjI4MTRhYjZi.webp",
          "center": [
            49,
            51
          ],
          "size": [
            300,
            312
          ]
        }
      ],
      "images_count": 15,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/7157492_45329528",
      "paid_info": {
        "text": "Promoted",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 525000000,
        "view": "₦ 525,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 525,000,000",
      "region": "Abuja (FCT), Gwarinpa",
      "region_id": 422,
      "region_item_text": "Abuja, Gwarinpa",
      "region_name": "Gwarinpa",
      "region_parent_name": "Abuja (FCT)",
      "region_slug": "gwarinpa",
      "short_description": "All New 2024 Range Rover Autobiography Brand new condition direct from Land Rover USA” Original...",
      "slug": "new-land-rover-range-rover-2024-white",
      "status": "active",
      "title": "New Land Rover Range Rover 2024 White",
      "title_labels": [],
      "tops_count": 0,
      "url": "/gwarinpa/cars/new-land-rover-range-rover-2024-white-5VHmnmTFqeJrqzT0JlPVHH5F.html?page=2&pos=17&cur_pos=17&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 7157492,
      "user_phone": "07034393982"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "4X Diamond",
        "slug": "booster_diamond_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 9,
      "details": "Direct toks\nAll wheel drive\nLagos cleared\nAll papers complete",
      "event_params": {
        "cpc_campaign_id": 177555,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Lexus IS 350 AWD 2014 Gray",
        "content_category": "Cars",
        "content_ids": [
          "92Vg7z9VA4l4COF6R0aoXyCY"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "92Vg7z9VA4l4COF6R0aoXyCY",
      "id": 43937631,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/156748760_MzAwLTMwNy01ZDJkYjVjYjU1.webp",
        "center": [
          49,
          44
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/156748760_MzAwLTMwNy01ZDJkYjVjYjU1.webp",
          "center": [
            49,
            44
          ],
          "size": [
            300,
            307
          ]
        }
      ],
      "images_count": 9,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/395979_43937631",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "DIAMOND"
      },
      "price_obj": {
        "value": 28500000,
        "view": "₦ 28,500,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 28,500,000",
      "region": "Lagos State, Isolo",
      "region_id": 154,
      "region_item_text": "Lagos, Isolo",
      "region_name": "Isolo",
      "region_parent_name": "Lagos State",
      "region_slug": "isolo",
      "short_description": "Direct toks\nAll wheel drive\nLagos cleared\nAll papers complete",
      "slug": "lexus-is-350-awd-2014-gray",
      "status": "active",
      "title": "Lexus IS 350 AWD 2014 Gray",
      "title_labels": [],
      "tops_count": 0,
      "url": "/isolo/cars/lexus-is-350-awd-2014-gray-92Vg7z9VA4l4COF6R0aoXyCY.html?page=2&pos=18&cur_pos=18&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 395979,
      "user_phone": "08052539145"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Local Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "10X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 10,
      "details": "Escape brand new 2016 GLE450",
      "event_params": {
        "cpc_campaign_id": 186238,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Mercedes-Benz GLE-Class 2016",
        "content_category": "Cars",
        "content_ids": [
          "kV4b7to34JkpgZ1eFDNEQPZb"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "kV4b7to34JkpgZ1eFDNEQPZb",
      "id": 46721214,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/169278379_MzAwLTQwMC04ZDEwZjQxZmY5.webp",
        "center": [
          46,
          63
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/169278379_MzAwLTQwMC04ZDEwZjQxZmY5.webp",
          "center": [
            46,
            63
          ],
          "size": [
            300,
            400
          ]
        }
      ],
      "images_count": 10,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [],
      "message_url": "/profile-messages/6026013_46721214",
      "paid_info": {
        "text": "Promoted",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 68000000,
        "view": "₦ 68,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 68,000,000",
      "region": "Abuja (FCT), Lokogoma",
      "region_id": 434,
      "region_item_text": "Abuja, Lokogoma",
      "region_name": "Lokogoma",
      "region_parent_name": "Abuja (FCT)",
      "region_slug": "lokogoma",
      "short_description": "Escape brand new 2016 GLE450",
      "slug": "mercedes-benz-gle-class-2016",
      "status": "active",
      "title": "Mercedes-Benz GLE-Class 2016",
      "title_labels": [],
      "tops_count": 0,
      "url": "/lokogoma/cars/mercedes-benz-gle-class-2016-kV4b7to34JkpgZ1eFDNEQPZb.html?page=2&pos=19&cur_pos=19&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 6026013,
      "user_phone": "07066412969"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "7X Diamond",
        "slug": "booster_diamond_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 19,
      "details": "2012 Toyota Camry\nLE Sedan \n*Bluetooth \n*Power Driver Seat\n*Tire Pressure Warning \n*USB Inputs...",
      "event_params": {
        "cpc_campaign_id": 188660,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Toyota Camry 2012 Black",
        "content_category": "Cars",
        "content_ids": [
          "v5sCJBH256p7RwVE2I9AvmpO"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "v5sCJBH256p7RwVE2I9AvmpO",
      "id": 40797868,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/143298004_MzAwLTMwMC0yMjE0ZGI4Mjli.webp",
        "center": [
          56,
          47
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/143298004_MzAwLTMwMC0yMjE0ZGI4Mjli.webp",
          "center": [
            56,
            47
          ],
          "size": [
            300,
            300
          ]
        }
      ],
      "images_count": 19,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/10062567_40797868",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "DIAMOND"
      },
      "price_obj": {
        "value": 13500000,
        "view": "₦ 13,500,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 13,500,000",
      "region": "Lagos State, Lekki",
      "region_id": 160,
      "region_item_text": "Lagos, Lekki",
      "region_name": "Lekki",
      "region_parent_name": "Lagos State",
      "region_slug": "lekki",
      "short_description": "2012 Toyota Camry\nLE Sedan \n*Bluetooth \n*Power Driver Seat\n*Tire Pressure Warning \n*USB Inputs...",
      "slug": "toyota-camry-2012-black",
      "status": "active",
      "title": "Toyota Camry 2012 Black",
      "title_labels": [],
      "tops_count": 0,
      "url": "/lekki/cars/toyota-camry-2012-black-v5sCJBH256p7RwVE2I9AvmpO.html?page=2&pos=20&cur_pos=20&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 10062567,
      "user_phone": "08024249021"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "2X Diamond",
        "slug": "booster_diamond_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 7,
      "details": "Foreign used,\nFull option.\nFull duty.\nAccident Free,\nSound engine,\nAbsolutely nothing to fix.\nBuy...",
      "event_params": {
        "cpc_campaign_id": 182842,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Chevrolet Camaro 2014 Red",
        "content_category": "Cars",
        "content_ids": [
          "IJ4boj1yPn6aVWvkJKKjNPU"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "IJ4boj1yPn6aVWvkJKKjNPU",
      "id": 46489742,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/168297636_MzAwLTQwMC05NzRiM2MzZTkz.webp",
        "center": [
          50,
          1444
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/168297636_MzAwLTQwMC05NzRiM2MzZTkz.webp",
          "center": [
            50,
            1444
          ],
          "size": [
            300,
            400
          ]
        }
      ],
      "images_count": 7,
      "is_boost": "diamond",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [],
      "message_url": "",
      "paid_info": {
        "text": "Promoted",
        "package_type": "diamond",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "DIAMOND"
      },
      "price_obj": {
        "value": 23000000,
        "view": "₦ 23,000,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 23,000,000",
      "region": "Lagos State, Lekki",
      "region_id": 160,
      "region_item_text": "Lagos, Lekki",
      "region_name": "Lekki",
      "region_parent_name": "Lagos State",
      "region_slug": "lekki",
      "short_description": "Foreign used,\nFull option.\nFull duty.\nAccident Free,\nSound engine,\nAbsolutely nothing to fix.\nBuy...",
      "slug": "chevrolet-camaro-2014-red",
      "status": "active",
      "title": "Chevrolet Camaro 2014 Red",
      "title_labels": [],
      "tops_count": 0,
      "url": "/lekki/cars/chevrolet-camaro-2014-red-IJ4boj1yPn6aVWvkJKKjNPU.html?page=2&pos=21&cur_pos=21&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 3647436,
      "user_phone": "09090000146"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        },
        {
          "name": "Mileage",
          "value": 74000,
          "unit": "km"
        }
      ],
      "badge_info": {
        "label": "5X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 12,
      "details": "Available for sale is a 2015 4runner, fully upgraded to 2023 model. Everything works perfectly...",
      "event_params": {
        "cpc_campaign_id": 176868,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Toyota 4-Runner 2015 Black",
        "content_category": "Cars",
        "content_ids": [
          "54wPKS7PN1j6BcmWtZ7GWvSY"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "54wPKS7PN1j6BcmWtZ7GWvSY",
      "id": 40124932,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/139267393_MzAwLTQwMC1hMjc3MTFmNDU1.webp",
        "center": [
          50,
          50
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/139267393_MzAwLTQwMC1hMjc3MTFmNDU1.webp",
          "center": [
            50,
            50
          ],
          "size": [
            300,
            400
          ]
        }
      ],
      "images_count": 12,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [],
      "message_url": "/profile-messages/11642447_40124932",
      "paid_info": {
        "text": "Promoted",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 38500000,
        "view": "₦ 38,500,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 38,500,000",
      "region": "Lagos State, Alimosho",
      "region_id": 124,
      "region_item_text": "Lagos, Alimosho",
      "region_name": "Alimosho",
      "region_parent_name": "Lagos State",
      "region_slug": "alimosho",
      "short_description": "Available for sale is a 2015 4runner, fully upgraded to 2023 model. Everything works perfectly...",
      "slug": "toyota-4-runner-2015-black",
      "status": "active",
      "title": "Toyota 4-Runner 2015 Black",
      "title_labels": [],
      "tops_count": 0,
      "url": "/alimosho/cars/toyota-4-runner-2015-black-54wPKS7PN1j6BcmWtZ7GWvSY.html?page=2&pos=22&cur_pos=22&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 11642447,
      "user_phone": "08034982554"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Local Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {},
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 5,
      "details": "ML 350 mesedise Benz 2015 Benz for sell very clean smells like new one very clean... \nBut the car is...",
      "event_params": {
        "cpc_campaign_id": 179688,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Mercedes-Benz M Class 2015 Gray",
        "content_category": "Cars",
        "content_ids": [
          "dkCnaHqdLZC6sLId0qw94jJR"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "dkCnaHqdLZC6sLId0qw94jJR",
      "id": 47036737,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/170662404_MzAwLTY2Ny03MTBkNWNlYjgx.webp",
        "center": [
          48,
          46
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/170662404_MzAwLTY2Ny03MTBkNWNlYjgx.webp",
          "center": [
            48,
            46
          ],
          "size": [
            300,
            667
          ]
        }
      ],
      "images_count": 5,
      "is_boost": false,
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [
        {
          "type": "id_verify",
          "value": "Verified ID"
        }
      ],
      "message_url": "/profile-messages/6133997_47036737",
      "paid_info": {},
      "price_obj": {
        "value": 24500000,
        "view": "₦ 24,500,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 24,500,000",
      "region": "Lagos State, Victoria Island",
      "region_id": 153,
      "region_item_text": "Lagos, Victoria Island",
      "region_name": "Victoria Island",
      "region_parent_name": "Lagos State",
      "region_slug": "victoria-island",
      "short_description": "ML 350 mesedise Benz 2015 Benz for sell very clean smells like new one very clean... \nBut the car is...",
      "slug": "mercedes-benz-m-class-2015-gray",
      "status": "active",
      "title": "Mercedes-Benz M Class 2015 Gray",
      "title_labels": [],
      "tops_count": 0,
      "url": "/victoria-island/cars/mercedes-benz-m-class-2015-gray-dkCnaHqdLZC6sLId0qw94jJR.html?page=2&pos=23&cur_pos=23&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 6133997,
      "user_phone": "08131923013"
    },
    {
      "admin_info": {},
      "as_top": false,
      "attrs": [
        {
          "name": "Condition",
          "value": "Foreign Used",
          "unit": null
        },
        {
          "name": "Transmission",
          "value": "Automatic",
          "unit": null
        }
      ],
      "badge_info": {
        "label": "3X Enterprise",
        "slug": "booster_enterprise_multi",
        "bg_color": "#00B53F",
        "text_color": "#ffffff",
        "aside_color": "#229826",
        "service_type": "boost"
      },
      "can_view_contacts": true,
      "category_id": 29,
      "category_name": "Cars",
      "category_slug": "cars",
      "count_images": 6,
      "details": "This 2017 Toyota Highlander is in pristine condition, essentially like new. It's 100% ready to drive...",
      "event_params": {
        "cpc_campaign_id": 192238,
        "position_type": "cpc"
      },
      "fb_view_content_data": {
        "content_name": "Toyota Highlander XLE 4x4 V6 (3.5L 6cyl 8A) 2017 Burgundy",
        "content_category": "Cars",
        "content_ids": [
          "2zfre3oawJfCj2W4rUbh0RmK"
        ],
        "content_type": "product",
        "value": "0.18",
        "currency": "USD"
      },
      "guid": "2zfre3oawJfCj2W4rUbh0RmK",
      "id": 45986987,
      "image_obj": {
        "url": "https://pictures-nigeria.jijistatic.net/166028576_MzAwLTIyNS1lODEyNTI1MThm.webp",
        "center": [
          47,
          51
        ]
      },
      "images": [
        {
          "url": "https://pictures-nigeria.jijistatic.net/166028576_MzAwLTIyNS1lODEyNTI1MThm.webp",
          "center": [
            47,
            51
          ],
          "size": [
            300,
            225
          ]
        }
      ],
      "images_count": 6,
      "is_boost": "enterprise",
      "is_cv": false,
      "is_inspected": false,
      "is_job": false,
      "is_owner": false,
      "is_top": false,
      "labels": [],
      "message_url": "/profile-messages/14536061_45986987",
      "paid_info": {
        "text": "Promoted",
        "package_type": "enterprise",
        "border": "#00B53F",
        "icon": true,
        "more_photos": false,
        "package_title": "ENTERPRISE"
      },
      "price_obj": {
        "value": 37500000,
        "view": "₦ 37,500,000",
        "period": null,
        "bulk": null,
        "type": null
      },
      "price_title": "₦ 37,500,000",
      "region": "Lagos State, Surulere",
      "region_id": 174,
      "region_item_text": "Lagos, Surulere",
      "region_name": "Surulere",
      "region_parent_name": "Lagos State",
      "region_slug": "surulere",
      "short_description": "This 2017 Toyota Highlander is in pristine condition, essentially like new. It's 100% ready to drive...",
      "slug": "toyota-highlander-xle-4x4-v6-3-5l-6cyl-8a-2017-burgundy",
      "status": "active",
      "title": "Toyota Highlander XLE 4x4 V6 (3.5L 6cyl 8A) 2017 Burgundy",
      "title_labels": [],
      "tops_count": 0,
      "url": "/surulere/cars/toyota-highlander-xle-4x4-v6-3-5l-6cyl-8a-2017-burgundy-2zfre3oawJfCj2W4rUbh0RmK.html?page=2&pos=24&cur_pos=24&ads_per_page=24&ads_count=117514&lid=CSZ7LPaBrVlx5SE2",
      "user_id": 14536061,
      "user_phone": "08103547830"
    }
  ]
  allProducts: Product[] = [];
  subMenu!: any[]
  showMenuCategories = false;
  showSubMenuCategories = false;
  categories:Category[] = [];
  products:Product[] = [];
  products1:Product[] = [];
  products2:Product[] = [];
  products3:Product[] = [];
  products4:Product[] = [];

  constructor(private productService: ProductService,private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadProducts();
  }

  onHoverMenu(name: string) {
    this.showSubMenuCategories = true;
    console.log(name)
    console.log("1")
    this.subMenu = this.data.categories!.find((i:any) => i.name.toLowerCase() === name.toLowerCase())!.childes;
  }

  onLeaveMenu(name: string) {
    // this.showSubMenuCategories = false;
    // console.log(this.menuData.find(item => item.name == name).subMenu)
    console.log(name)
    console.log("2")
    // this.subMenu = this.menuData.find(item => item.name == name).subMenu;
  }

  onLeaveSubMenu() {
    this.showSubMenuCategories = false;
  }

  loadProducts() {

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
    this.allProducts = this.transformAdvertsToProducts(this.adverts, new Product()).map(ad=> {
      // if(ad.category_name === categoryName){
      return ad;
      // }
    });
    console.log("this.allProducts");
    console.log(this.allProducts);
    const dividedList = this.divideArrayIntoFourParts(this.allProducts);
    this.products1 = dividedList[1]
    this.products2 = dividedList[2]
    this.products3 = dividedList[3]
    this.products4 = dividedList[0]
    // this.productService.getProducts().subscribe(data => {
    //   console.log("data");
    //
    //   const dividedList = this.divideArrayIntoFourParts(data);
    //   this.products1 = dividedList[1]
    //   this.products2 = dividedList[2]
    //   this.products3 = dividedList[3]
    //   this.products4 = dividedList[0]
    //
    // });
    // this.productService.getAllProducts().then((data: Product[]) => {
    //   console.log("data");
    //   console.log(data);
    //   this.products = data;
    // });
  }

  transformAdvertsToProducts(adverts: any[], productTemplate: Product): Product[] {
    const productKeys = Object.keys(productTemplate);
    return adverts.map(ad => {
      let product = new Product();
      product = this.mapAdvertToProduct(ad)
      return product;
    });

  }

  mapAdvertToProduct(advert: any): Product {
    const product = new Product();

    product.id = advert.id;
    product.name = advert.title;
    product.price = advert.price_obj?.value || 0;
    product.imageUrl = advert.image_obj?.url || '';
    product.description = advert.short_description;
    product.categoryId = advert.category_id;
    product.category_name = advert.category_name;
    product.stock = 1; // Default (ou à adapter)
    product.userId = advert.user_id;
    product.location = advert.region || '';

    // attributs spécifiques dans advert.attrs
    product.condition = this.extractAttrValue(advert, 'Condition');
    product.color = this.extractAttrValue(advert, 'Color');
    product.body = this.extractAttrValue(advert, 'Body');

    // 👇 Nouvelles propriétés
    product.regionName = advert.region_name || '';
    product.transmission = this.extractAttrValue(advert, 'Transmission');
    product.mileage = this.extractAttrValue(advert, 'Mileage');
    product.isTopAd = advert.is_top || false;

    return product;
  }

  extractAttrValue(ad: any, attrName: string): any {
    const attr = ad.attrs?.find((a: any) => a.name.toLowerCase() === attrName.toLowerCase());
    return attr ? attr.value : undefined;
  }

  private divideArrayIntoFourParts(arr: Product[]): any[][] {
    const partSize = Math.ceil(arr.length / 4); // Calcul de la taille de chaque partie
    const result: any[][] = [];

    for (let i = 0; i < 4; i++) {
      const start = i * partSize;
      const end = start + partSize;
      result.push(arr.slice(start, end));
    }

    return result;
  }

}
