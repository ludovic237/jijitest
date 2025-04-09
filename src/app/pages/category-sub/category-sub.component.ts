import {Component, OnInit} from '@angular/core';
import {FilterByColorComponent} from '../../components/All filter/filter-by-color/filter-by-color.component';
import {FilterByFuelComponent} from '../../components/All filter/filter-by-fuel/filter-by-fuel.component';
import {
  FilterByExchangePossibleComponent
} from '../../components/All filter/filter-by-exchange-possible/filter-by-exchange-possible.component';
import {FilterByDiscountComponent} from '../../components/All filter/filter-by-discount/filter-by-discount.component';
import {
  FilterByVerifiedCarsComponent
} from '../../components/All filter/filter-by-verified-cars/filter-by-verified-cars.component';
import {
  FilterByVerifiedSellersComponent
} from '../../components/All filter/filter-by-verified-sellers/filter-by-verified-sellers.component';
import {
  FilterByKeyFeaturesComponent
} from '../../components/All filter/filter-by-key-features/filter-by-key-features.component';
import {
  FilterByEngineSizeComponent
} from '../../components/All filter/filter-by-engine-size/filter-by-engine-size.component';
import {
  FilterBySecondConditionComponent
} from '../../components/All filter/filter-by-second-condition/filter-by-second-condition.component';
import {
  FilterByTransmissionComponent
} from '../../components/All filter/filter-by-transmission/filter-by-transmission.component';
import {
  FilterByYearManufactureComponent
} from '../../components/All filter/filter-by-year-manufacture/filter-by-year-manufacture.component';
import {FilterByRadioButtonWithSearch} from '../../components/All filter/filter-by-mark/filter-by-radio-button-with-search.component';
import {FilterByRadioButtonWithRangeWithSaveComponent} from '../../components/All filter/filter-by-price/filter-by-radio-button-with-range-with-save.component';
import {Category, Product} from '../../models/data';
import {ProductService} from '../../services/product.service';
import {CategoryService} from '../../services/category.service';
import {
  ItemElementByCategoryComponent
} from '../../components/All item/item-element-by-category/item-element-by-category.component';
import {ItemSelectionMarkComponent} from '../../components/All item/item-selection-mark/item-selection-mark.component';
import {
  ItemSelectionPriceRangeComponent
} from '../../components/All item/item-selection-price-range/item-selection-price-range.component';
import {Header2Component} from '../../components/header2/header2.component';
import {Adverts} from '../../models/from jiji/reponseListingCars';
import {
  FilterByCheckboxMultipleComponent
} from '../../components/All filter/filter-by-condition/filter-by-checkbox-multiple.component';
import {
  FilterByRangeWithSaveComponent
} from '../../components/All filter/filter-by-mileage/filter-by-range-with-save.component';
import {
  FilterByRadioButtonComponent
} from '../../components/All filter/filter-by-registered/filter-by-radio-button.component';
import {
  FilterByCheckboxMultipleWithSearchComponent
} from '../../components/All filter/filter-by-body/filter-by-checkbox-multiple-with-search.component';

@Component({
  selector: 'app-category-sub',
  imports: [
    Header2Component,
    ItemElementByCategoryComponent,
    // ItemSelectionMarkComponent,
    ItemSelectionPriceRangeComponent,
    FilterByCheckboxMultipleWithSearchComponent,
    FilterByCheckboxMultipleComponent,
    FilterByRadioButtonWithSearch,
    FilterByRadioButtonWithRangeWithSaveComponent,
    FilterByRangeWithSaveComponent,
    FilterByRadioButtonComponent,
    FilterByCheckboxMultipleWithSearchComponent
  ],
  templateUrl: './category-sub.component.html',
  styleUrl: './category-sub.component.css'
})
export class CategorySubComponent implements OnInit {

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
  filtersLeft: any[] = [
    {
      "label": "Price, ₦",
      "parent_slug": null,
      "slug": "price",
      "attr_type": "int",
      "filter_placeholder": "Price",
      "filter_type": "range",
      "visual_type": "slider",
      "for_header": true,
      "is_multiple": false,
      "attr_id": 1000002,
      "attr_name": "Price, ₦",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "price",
      "unit": "₦",
      "filter_data": {
        "min": {
          "fieldname": "price_min",
          "default": 1600000,
          "value": ""
        },
        "max": {
          "fieldname": "price_max",
          "default": 1850000000,
          "value": ""
        }
      },
      "prefill_options": [
        {
          "from": null,
          "to": 9000000,
          "label": "Under 9 M",
          "item_count": 1306
        },
        {
          "from": 9000000,
          "to": 20000000,
          "label": "9 - 20 M",
          "item_count": 5224
        },
        {
          "from": 20000000,
          "to": 42000000,
          "label": "20 - 42 M",
          "item_count": 8708
        },
        {
          "from": 42000000,
          "to": 150000000,
          "label": "42 - 150 M",
          "item_count": 5442
        },
        {
          "from": 150000000,
          "to": null,
          "label": "More than 150 M",
          "item_count": 1088
        }
      ]
    },
    {
      "label": "Make",
      "parent_slug": null,
      "slug": "filter_attr_1_make",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "term",
      "visual_type": "select",
      "for_header": true,
      "is_multiple": false,
      "attr_id": 1,
      "attr_name": "Make",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_1_make",
      "possible_values": [
        {
          "value": "Acura",
          "count": 2154
        },
        {
          "value": "Alfa Romeo",
          "count": 1
        },
        {
          "value": "Aston Martin",
          "count": 2
        },
        {
          "value": "Audi",
          "count": 237
        },
        {
          "value": "Avatr",
          "count": 4
        },
        {
          "value": "BAIC",
          "count": 1
        },
        {
          "value": "Bajaj",
          "count": 1
        },
        {
          "value": "BAW",
          "count": 2
        },
        {
          "value": "Bentley",
          "count": 37
        },
        {
          "value": "Bestune",
          "count": 7
        },
        {
          "value": "BMW",
          "count": 921
        },
        {
          "value": "Brabus",
          "count": 10
        },
        {
          "value": "Buick",
          "count": 14
        },
        {
          "value": "BYD",
          "count": 9
        },
        {
          "value": "Cadillac",
          "count": 159
        },
        {
          "value": "Changan",
          "count": 38
        },
        {
          "value": "Chery",
          "count": 10
        },
        {
          "value": "Chevrolet",
          "count": 318
        },
        {
          "value": "Chrysler",
          "count": 47
        },
        {
          "value": "Citroen",
          "count": 14
        },
        {
          "value": "CNHTC",
          "count": 1
        },
        {
          "value": "Daewoo",
          "count": 9
        },
        {
          "value": "DAF",
          "count": 1
        },
        {
          "value": "Daihatsu",
          "count": 20
        },
        {
          "value": "Dodge",
          "count": 289
        },
        {
          "value": "Dongfeng",
          "count": 5
        },
        {
          "value": "Ferrari",
          "count": 9
        },
        {
          "value": "Fiat",
          "count": 17
        },
        {
          "value": "Foday",
          "count": 2
        },
        {
          "value": "Ford",
          "count": 2276
        },
        {
          "value": "Foton",
          "count": 5
        },
        {
          "value": "GAC",
          "count": 64
        },
        {
          "value": "Geely",
          "count": 33
        },
        {
          "value": "Genesis",
          "count": 17
        },
        {
          "value": "GMC",
          "count": 56
        },
        {
          "value": "Honda",
          "count": 6582
        },
        {
          "value": "Hozon",
          "count": 1
        },
        {
          "value": "Huawei",
          "count": 2
        },
        {
          "value": "Hummer",
          "count": 21
        },
        {
          "value": "Hyundai",
          "count": 4540
        },
        {
          "value": "Infiniti",
          "count": 284
        },
        {
          "value": "Isuzu",
          "count": 12
        },
        {
          "value": "Iveco",
          "count": 1
        },
        {
          "value": "IVM",
          "count": 15
        },
        {
          "value": "JAC",
          "count": 19
        },
        {
          "value": "Jaguar",
          "count": 88
        },
        {
          "value": "Jeep",
          "count": 351
        },
        {
          "value": "Jetour",
          "count": 31
        },
        {
          "value": "JMC",
          "count": 2
        },
        {
          "value": "Joylong",
          "count": 1
        },
        {
          "value": "Kia",
          "count": 946
        },
        {
          "value": "Lada",
          "count": 1
        },
        {
          "value": "Lamborghini",
          "count": 36
        },
        {
          "value": "Land Rover",
          "count": 2139
        },
        {
          "value": "Lexus",
          "count": 20364
        },
        {
          "value": "Lincoln",
          "count": 41
        },
        {
          "value": "MAN",
          "count": 1
        },
        {
          "value": "Maserati",
          "count": 31
        },
        {
          "value": "Mazda",
          "count": 460
        },
        {
          "value": "Mercedes-Benz",
          "count": 21770
        },
        {
          "value": "Mercury",
          "count": 4
        },
        {
          "value": "MG",
          "count": 5
        },
        {
          "value": "Mikano ZNA",
          "count": 4
        },
        {
          "value": "Mini",
          "count": 190
        },
        {
          "value": "Mitsubishi",
          "count": 298
        },
        {
          "value": "Nissan",
          "count": 1150
        },
        {
          "value": "Nord",
          "count": 1
        },
        {
          "value": "Oldsmobile",
          "count": 2
        },
        {
          "value": "OMAA",
          "count": 2
        },
        {
          "value": "Opel",
          "count": 120
        },
        {
          "value": "Peugeot",
          "count": 789
        },
        {
          "value": "Polaris",
          "count": 1
        },
        {
          "value": "Polestar",
          "count": 1
        },
        {
          "value": "Pontiac",
          "count": 350
        },
        {
          "value": "Porsche",
          "count": 122
        },
        {
          "value": "RAM",
          "count": 10
        },
        {
          "value": "Renault",
          "count": 24
        },
        {
          "value": "Renault Samsung",
          "count": 1
        },
        {
          "value": "Rolls-Royce",
          "count": 85
        },
        {
          "value": "Rover",
          "count": 60
        },
        {
          "value": "Rox Motor",
          "count": 2
        },
        {
          "value": "Samsung",
          "count": 2
        },
        {
          "value": "Saturn",
          "count": 8
        },
        {
          "value": "Scion",
          "count": 46
        },
        {
          "value": "Seat",
          "count": 8
        },
        {
          "value": "Skoda",
          "count": 7
        },
        {
          "value": "Smart",
          "count": 1
        },
        {
          "value": "SsangYong",
          "count": 1
        },
        {
          "value": "Stelato",
          "count": 4
        },
        {
          "value": "Subaru",
          "count": 32
        },
        {
          "value": "Suzuki",
          "count": 46
        },
        {
          "value": "T King",
          "count": 2
        },
        {
          "value": "Tata",
          "count": 4
        },
        {
          "value": "Tesla",
          "count": 34
        },
        {
          "value": "Toyota",
          "count": 49302
        },
        {
          "value": "Triumph",
          "count": 1
        },
        {
          "value": "Volkswagen",
          "count": 809
        },
        {
          "value": "Volvo",
          "count": 125
        },
        {
          "value": "Wuling",
          "count": 6
        },
        {
          "value": "ZX Auto",
          "count": 1
        },
        {
          "value": "Other Make",
          "count": 23
        }
      ],
      "popular_values": [
        {
          "value": "Honda",
          "count": 6582
        },
        {
          "value": "Hyundai",
          "count": 4540
        },
        {
          "value": "Lexus",
          "count": 20364
        },
        {
          "value": "Mercedes-Benz",
          "count": 21770
        },
        {
          "value": "Toyota",
          "count": 49302
        }
      ],
      "value": "Mercedes-Benz"
    },
    {
      "label": "Model",
      "parent_slug": "filter_attr_1_make",
      "slug": "filter_attr_2_model",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "terms",
      "visual_type": "multiselect",
      "for_header": true,
      "is_multiple": true,
      "attr_id": 2,
      "attr_name": "Model",
      "attr_parent_id": 1,
      "attr_parent_name": "filter_attr_1_make",
      "filter_name": "filter_attr_2_model",
      "multiply_params": {
        "limit": 5,
        "btn_name": "Add another Model"
      },
      "possible_values": [
        {
          "value": "1113",
          "count": 2
        },
        {
          "value": "1420",
          "count": 3
        },
        {
          "value": "1422",
          "count": 1
        },
        {
          "value": "190",
          "count": 1
        },
        {
          "value": "190E",
          "count": 1
        },
        {
          "value": "1922",
          "count": 1
        },
        {
          "value": "200",
          "count": 9
        },
        {
          "value": "200E",
          "count": 5
        },
        {
          "value": "220",
          "count": 3
        },
        {
          "value": "220E",
          "count": 3
        },
        {
          "value": "230E",
          "count": 2
        },
        {
          "value": "280E",
          "count": 4
        },
        {
          "value": "300E",
          "count": 4
        },
        {
          "value": "350D",
          "count": 2
        },
        {
          "value": "500SE",
          "count": 2
        },
        {
          "value": "A-Class",
          "count": 92
        },
        {
          "value": "AMG GT",
          "count": 46
        },
        {
          "value": "B-Class",
          "count": 22
        },
        {
          "value": "C-Class",
          "count": 97
        },
        {
          "value": "C180",
          "count": 54
        },
        {
          "value": "C200",
          "count": 30
        },
        {
          "value": "C220",
          "count": 6
        },
        {
          "value": "C230",
          "count": 71
        },
        {
          "value": "C240",
          "count": 43
        },
        {
          "value": "C250",
          "count": 128
        },
        {
          "value": "C280",
          "count": 18
        },
        {
          "value": "C300",
          "count": 2906
        },
        {
          "value": "C320",
          "count": 12
        },
        {
          "value": "C350",
          "count": 244
        },
        {
          "value": "C400",
          "count": 129
        },
        {
          "value": "C43",
          "count": 98
        },
        {
          "value": "C450",
          "count": 101
        },
        {
          "value": "C63",
          "count": 32
        },
        {
          "value": "CL",
          "count": 6
        },
        {
          "value": "CLA-Class",
          "count": 549
        },
        {
          "value": "CLC",
          "count": 1
        },
        {
          "value": "CLK",
          "count": 28
        },
        {
          "value": "CLS",
          "count": 67
        },
        {
          "value": "E200",
          "count": 23
        },
        {
          "value": "E230",
          "count": 3
        },
        {
          "value": "E240",
          "count": 1
        },
        {
          "value": "E250",
          "count": 7
        },
        {
          "value": "E280",
          "count": 2
        },
        {
          "value": "E300",
          "count": 231
        },
        {
          "value": "E320",
          "count": 24
        },
        {
          "value": "E350",
          "count": 880
        },
        {
          "value": "E400",
          "count": 73
        },
        {
          "value": "E43 AMG",
          "count": 39
        },
        {
          "value": "E430",
          "count": 1
        },
        {
          "value": "E450",
          "count": 35
        },
        {
          "value": "E500",
          "count": 6
        },
        {
          "value": "E53 AMG",
          "count": 18
        },
        {
          "value": "E55",
          "count": 1
        },
        {
          "value": "E550",
          "count": 15
        },
        {
          "value": "E63",
          "count": 17
        },
        {
          "value": "EQC",
          "count": 1
        },
        {
          "value": "EQE",
          "count": 3
        },
        {
          "value": "G-Class",
          "count": 608
        },
        {
          "value": "GL-Class",
          "count": 593
        },
        {
          "value": "GLA 250",
          "count": 822
        },
        {
          "value": "GLA-Class",
          "count": 167
        },
        {
          "value": "GLB-Class",
          "count": 131
        },
        {
          "value": "GLC-Class",
          "count": 1486
        },
        {
          "value": "GLE-Class",
          "count": 4103
        },
        {
          "value": "GLE43",
          "count": 181
        },
        {
          "value": "GLE53",
          "count": 82
        },
        {
          "value": "GLK-Class",
          "count": 3003
        },
        {
          "value": "GLS-Class",
          "count": 211
        },
        {
          "value": "Intouro",
          "count": 1
        },
        {
          "value": "M Class",
          "count": 3748
        },
        {
          "value": "Metris",
          "count": 11
        },
        {
          "value": "R-Class",
          "count": 20
        },
        {
          "value": "S-Class",
          "count": 312
        },
        {
          "value": "SC-Class",
          "count": 4
        },
        {
          "value": "SL-Class",
          "count": 10
        },
        {
          "value": "SLK-Class",
          "count": 15
        },
        {
          "value": "Sprinter",
          "count": 14
        },
        {
          "value": "Vaneo",
          "count": 6
        },
        {
          "value": "Viano",
          "count": 17
        },
        {
          "value": "Vito",
          "count": 3
        },
        {
          "value": "VS680L Maybach",
          "count": 11
        },
        {
          "value": "W123",
          "count": 1
        },
        {
          "value": "X Class",
          "count": 7
        }
      ],
      "popular_values": [
        {
          "value": "C300",
          "count": 2906
        },
        {
          "value": "GLC-Class",
          "count": 1486
        },
        {
          "value": "GLE-Class",
          "count": 4103
        },
        {
          "value": "GLK-Class",
          "count": 3003
        },
        {
          "value": "M Class",
          "count": 3748
        }
      ],
      "value": null
    },
    {
      "label": "Year of Manufacture",
      "parent_slug": null,
      "slug": "filter_attr_119_year_of_manufacture",
      "attr_type": "int",
      "filter_placeholder": "year",
      "filter_type": "range",
      "visual_type": "slider",
      "for_header": true,
      "is_multiple": false,
      "attr_id": 119,
      "attr_name": "Year of Manufacture",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_119_year_of_manufacture",
      "filter_data": {
        "min": {
          "fieldname": "filter_attr_119_year_of_manufacture__min",
          "default": 1970,
          "value": ""
        },
        "max": {
          "fieldname": "filter_attr_119_year_of_manufacture__max",
          "default": 2025,
          "value": ""
        }
      },
      "prefill_options": [
        {
          "from": 2021,
          "to": 2025,
          "label": "2021 - 2025",
          "item_count": 1488
        },
        {
          "from": 2016,
          "to": 2020,
          "label": "2016 - 2020",
          "item_count": 7889
        },
        {
          "from": 2011,
          "to": 2015,
          "label": "2011 - 2015",
          "item_count": 9326
        },
        {
          "from": 2006,
          "to": 2010,
          "label": "2006 - 2010",
          "item_count": 2683
        },
        {
          "from": 2001,
          "to": 2005,
          "label": "2001 - 2005",
          "item_count": 312
        },
        {
          "from": 1996,
          "to": 2000,
          "label": "1996 - 2000",
          "item_count": 39
        },
        {
          "from": 1991,
          "to": 1995,
          "label": "1991 - 1995",
          "item_count": 6
        },
        {
          "from": 1986,
          "to": 1990,
          "label": "1986 - 1990",
          "item_count": 6
        },
        {
          "from": 1981,
          "to": 1985,
          "label": "1981 - 1985",
          "item_count": 6
        },
        {
          "from": 1976,
          "to": 1980,
          "label": "1976 - 1980",
          "item_count": 5
        },
        {
          "from": 1971,
          "to": 1975,
          "label": "1971 - 1975",
          "item_count": 9
        },
        {
          "from": 1966,
          "to": 1970,
          "label": "1966 - 1970",
          "item_count": 1
        }
      ]
    },
    {
      "label": "Condition",
      "parent_slug": null,
      "slug": "filter_attr_100_condition",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "terms",
      "visual_type": "multiselect",
      "for_header": true,
      "is_multiple": false,
      "attr_id": 100,
      "attr_name": "Condition",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_100_condition",
      "possible_values": [
        {
          "value": "Brand New",
          "count": 200
        },
        {
          "value": "Foreign Used",
          "count": 16298
        },
        {
          "value": "Local Used",
          "count": 5272
        }
      ],
      "popular_values": [],
      "value": null
    },
    {
      "label": "Transmission",
      "parent_slug": null,
      "slug": "filter_attr_90_transmission",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "terms",
      "visual_type": "multiselect",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 90,
      "attr_name": "Transmission",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_90_transmission",
      "possible_values": [
        {
          "value": "AMT",
          "count": 45
        },
        {
          "value": "Automatic",
          "count": 21637
        },
        {
          "value": "CVT",
          "count": 27
        },
        {
          "value": "Manual",
          "count": 61
        }
      ],
      "popular_values": [],
      "value": null
    },
    {
      "label": "Mileage",
      "parent_slug": null,
      "slug": "filter_attr_3_mileage",
      "attr_type": "int",
      "filter_placeholder": null,
      "filter_type": "range",
      "visual_type": "slider",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 3,
      "attr_name": "Mileage",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_3_mileage",
      "unit": "km",
      "filter_data": {
        "min": {
          "fieldname": "filter_attr_3_mileage__min",
          "default": 1,
          "value": ""
        },
        "max": {
          "fieldname": "filter_attr_3_mileage__max",
          "default": 2000000,
          "value": ""
        }
      },
      "prefill_options": []
    },
    {
      "label": "Registered Car",
      "parent_slug": null,
      "slug": "filter_attr_1163_registered_car",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "term",
      "visual_type": "select",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 1163,
      "attr_name": "Registered Car",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_1163_registered_car",
      "possible_values": [
        {
          "value": "Yes",
          "count": 4122
        },
        {
          "value": "No",
          "count": 13026
        }
      ],
      "popular_values": [],
      "value": null
    },
    {
      "label": "Body",
      "parent_slug": null,
      "slug": "filter_attr_1164_body",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "terms",
      "visual_type": "multiselect",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 1164,
      "attr_name": "Body",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_1164_body",
      "possible_values": [
        {
          "value": "Wagon",
          "count": 0
        },
        {
          "value": "Van",
          "count": 2
        },
        {
          "value": "SUV",
          "count": 8147
        },
        {
          "value": "Station Wagon",
          "count": 61
        },
        {
          "value": "Sedan",
          "count": 2826
        },
        {
          "value": "Pickup",
          "count": 0
        },
        {
          "value": "Panel Van",
          "count": 0
        },
        {
          "value": "Minivan",
          "count": 9
        },
        {
          "value": "Hatchback",
          "count": 2
        },
        {
          "value": "Crossover",
          "count": 1
        },
        {
          "value": "Coupe",
          "count": 128
        },
        {
          "value": "Convertible Coupe",
          "count": 0
        },
        {
          "value": "Convertible",
          "count": 29
        }
      ],
      "popular_values": [],
      "value": null
    },
    {
      "label": "Second Condition",
      "parent_slug": null,
      "slug": "filter_attr_332_second_condition",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "terms",
      "visual_type": "multiselect",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 332,
      "attr_name": "Second Condition",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_332_second_condition",
      "possible_values": [
        {
          "value": "After crash",
          "count": 4
        },
        {
          "value": "Engine issue",
          "count": 21
        },
        {
          "value": "First owner",
          "count": 627
        },
        {
          "value": "First registration",
          "count": 434
        },
        {
          "value": "Gear issue",
          "count": 4
        },
        {
          "value": "Need body repair",
          "count": 2
        },
        {
          "value": "Need repainting",
          "count": 7
        },
        {
          "value": "Need repair",
          "count": 12
        },
        {
          "value": "Original parts",
          "count": 5751
        },
        {
          "value": "Unpainted",
          "count": 5880
        },
        {
          "value": "Wiring problems",
          "count": 16
        },
        {
          "value": "No faults",
          "count": 16679
        }
      ],
      "popular_values": [],
      "value": null
    },
    {
      "label": "Color",
      "parent_slug": null,
      "slug": "filter_attr_88_colour",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "terms",
      "visual_type": "multiselect",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 88,
      "attr_name": "Color",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_88_colour",
      "possible_values": [
        {
          "value": "Beige",
          "count": 31
        },
        {
          "value": "Black",
          "count": 7664
        },
        {
          "value": "Blue",
          "count": 1423
        },
        {
          "value": "Brown",
          "count": 384
        },
        {
          "value": "Burgundy",
          "count": 94
        },
        {
          "value": "Gold",
          "count": 295
        },
        {
          "value": "Gray",
          "count": 3148
        },
        {
          "value": "Green",
          "count": 108
        },
        {
          "value": "Ivory",
          "count": 6
        },
        {
          "value": "Matt Black",
          "count": 49
        },
        {
          "value": "Off white",
          "count": 68
        },
        {
          "value": "Orange",
          "count": 2
        },
        {
          "value": "Pearl",
          "count": 7
        },
        {
          "value": "Pink",
          "count": 4
        },
        {
          "value": "Purple",
          "count": 11
        },
        {
          "value": "Red",
          "count": 1032
        },
        {
          "value": "Silver",
          "count": 1886
        },
        {
          "value": "Teal",
          "count": 9
        },
        {
          "value": "White",
          "count": 5400
        },
        {
          "value": "Yellow",
          "count": 14
        },
        {
          "value": "Other",
          "count": 134
        }
      ],
      "popular_values": [
        {
          "value": "Black",
          "count": 7664
        },
        {
          "value": "Blue",
          "count": 1423
        },
        {
          "value": "Gray",
          "count": 3148
        },
        {
          "value": "Silver",
          "count": 1886
        },
        {
          "value": "White",
          "count": 5400
        }
      ],
      "value": null
    },
    {
      "label": "Engine Size",
      "parent_slug": null,
      "slug": "filter_attr_1363_engine_size",
      "attr_type": "int",
      "filter_placeholder": null,
      "filter_type": "terms",
      "visual_type": "multiselect",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 1363,
      "attr_name": "Engine Size",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_1363_engine_size",
      "unit": "cc",
      "possible_values": [
        {
          "value": 700,
          "count": 0
        },
        {
          "value": 6800,
          "count": 0
        },
        {
          "value": 6700,
          "count": 0
        },
        {
          "value": 6600,
          "count": 0
        },
        {
          "value": 660,
          "count": 0
        },
        {
          "value": 6400,
          "count": 0
        },
        {
          "value": 6300,
          "count": 0
        },
        {
          "value": 6200,
          "count": 2
        },
        {
          "value": 6100,
          "count": 0
        },
        {
          "value": 6000,
          "count": 28
        },
        {
          "value": 600,
          "count": 0
        },
        {
          "value": 6,
          "count": 0
        },
        {
          "value": 5800,
          "count": 1
        },
        {
          "value": 5700,
          "count": 0
        },
        {
          "value": 5600,
          "count": 0
        },
        {
          "value": 5500,
          "count": 304
        },
        {
          "value": 5400,
          "count": 34
        },
        {
          "value": 5300,
          "count": 0
        },
        {
          "value": 5000,
          "count": 42
        },
        {
          "value": 4800,
          "count": 0
        },
        {
          "value": 4700,
          "count": 403
        },
        {
          "value": 4600,
          "count": 20
        },
        {
          "value": 4500,
          "count": 0
        },
        {
          "value": 4400,
          "count": 0
        },
        {
          "value": 4300,
          "count": 4
        },
        {
          "value": 4200,
          "count": 0
        },
        {
          "value": 4100,
          "count": 0
        },
        {
          "value": 4000,
          "count": 332
        },
        {
          "value": 3900,
          "count": 0
        },
        {
          "value": 3800,
          "count": 1
        },
        {
          "value": 3700,
          "count": 20
        },
        {
          "value": 3600,
          "count": 1
        },
        {
          "value": 3500,
          "count": 5489
        },
        {
          "value": 3400,
          "count": 0
        },
        {
          "value": 3300,
          "count": 0
        },
        {
          "value": 3200,
          "count": 20
        },
        {
          "value": 3100,
          "count": 0
        },
        {
          "value": 3000,
          "count": 2761
        },
        {
          "value": 2900,
          "count": 0
        },
        {
          "value": 2800,
          "count": 0
        },
        {
          "value": 2700,
          "count": 0
        },
        {
          "value": 2600,
          "count": 25
        },
        {
          "value": 2500,
          "count": 9
        },
        {
          "value": 2400,
          "count": 2
        },
        {
          "value": 2300,
          "count": 2
        },
        {
          "value": 2200,
          "count": 4
        },
        {
          "value": 2100,
          "count": 41
        },
        {
          "value": 2000,
          "count": 2626
        },
        {
          "value": 1900,
          "count": 0
        },
        {
          "value": 1800,
          "count": 21
        },
        {
          "value": 1700,
          "count": 1
        },
        {
          "value": 1600,
          "count": 5
        },
        {
          "value": 1500,
          "count": 3
        },
        {
          "value": 1400,
          "count": 0
        },
        {
          "value": 1300,
          "count": 12
        },
        {
          "value": 1200,
          "count": 0
        },
        {
          "value": 1100,
          "count": 0
        },
        {
          "value": 1000,
          "count": 0
        }
      ],
      "popular_values": [
        {
          "value": 4700,
          "count": 403
        },
        {
          "value": 4000,
          "count": 332
        },
        {
          "value": 3500,
          "count": 5489
        },
        {
          "value": 3000,
          "count": 2761
        },
        {
          "value": 2000,
          "count": 2626
        }
      ],
      "value": null
    },
    {
      "label": "Fuel",
      "parent_slug": null,
      "slug": "filter_attr_1165_fuel",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "terms",
      "visual_type": "multiselect",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 1165,
      "attr_name": "Fuel",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_1165_fuel",
      "possible_values": [
        {
          "value": "Petrol",
          "count": 10415
        },
        {
          "value": "Hybrid",
          "count": 65
        },
        {
          "value": "Fuel",
          "count": 0
        },
        {
          "value": "Electric",
          "count": 2
        },
        {
          "value": "Diesel",
          "count": 641
        },
        {
          "value": "CNG",
          "count": 0
        }
      ],
      "popular_values": [],
      "value": null
    },
    {
      "label": "Exchange Possible",
      "parent_slug": null,
      "slug": "filter_attr_331_exchange_possible",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "term",
      "visual_type": "select",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 331,
      "attr_name": "Exchange Possible",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_331_exchange_possible",
      "possible_values": [
        {
          "value": "Yes",
          "count": 3075
        },
        {
          "value": "No",
          "count": 3285
        }
      ],
      "popular_values": [],
      "value": null
    },
    {
      "label": "Key Features",
      "parent_slug": null,
      "slug": "filter_attr_1753_features",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "terms",
      "visual_type": "multiselect",
      "for_header": false,
      "is_multiple": false,
      "attr_id": 1753,
      "attr_name": "Key Features",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_attr_1753_features",
      "possible_values": [
        {
          "value": "Air Conditioning",
          "count": 9701
        },
        {
          "value": "Airbags",
          "count": 8891
        },
        {
          "value": "Alloy Wheels",
          "count": 9219
        },
        {
          "value": "AM/FM Radio",
          "count": 9412
        },
        {
          "value": "Android Auto",
          "count": 5081
        },
        {
          "value": "Anti-Lock Brakes",
          "count": 5285
        },
        {
          "value": "Armrests",
          "count": 5952
        },
        {
          "value": "Blind Spot Monitor",
          "count": 4826
        },
        {
          "value": "Bullbar",
          "count": 3382
        },
        {
          "value": "CarPlay",
          "count": 5274
        },
        {
          "value": "CD Player",
          "count": 9073
        },
        {
          "value": "Cruise Control",
          "count": 6022
        },
        {
          "value": "Cup Holders",
          "count": 6300
        },
        {
          "value": "Electric Mirrors",
          "count": 6282
        },
        {
          "value": "Electric Windows",
          "count": 6136
        },
        {
          "value": "Front Fog Lamps",
          "count": 6010
        },
        {
          "value": "Leather Seats",
          "count": 7092
        },
        {
          "value": "LED Headlights",
          "count": 5601
        },
        {
          "value": "Parking Assist",
          "count": 4950
        },
        {
          "value": "Parking Sensors",
          "count": 5191
        },
        {
          "value": "Roof Rack",
          "count": 3885
        },
        {
          "value": "Sidesteps",
          "count": 3508
        },
        {
          "value": "Spotlight",
          "count": 3766
        },
        {
          "value": "Sunroof",
          "count": 5498
        },
        {
          "value": "Traction Control",
          "count": 3528
        },
        {
          "value": "Winch",
          "count": 2583
        },
        {
          "value": "Xenon Lights",
          "count": 2919
        }
      ],
      "popular_values": [
        {
          "value": "Air Conditioning",
          "count": 9701
        },
        {
          "value": "Airbags",
          "count": 8891
        },
        {
          "value": "Alloy Wheels",
          "count": 9219
        },
        {
          "value": "AM/FM Radio",
          "count": 9412
        },
        {
          "value": "CD Player",
          "count": 9073
        }
      ],
      "value": null
    },
    {
      "label": "Verified cars",
      "parent_slug": null,
      "slug": "filter_inspection",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "term",
      "visual_type": "select",
      "for_header": true,
      "is_multiple": false,
      "attr_id": 1000000,
      "attr_name": "Verified cars",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_inspection",
      "possible_values": [
        {
          "value": "Inspected",
          "count": 338,
          "title": "Verified cars"
        },
        {
          "value": "Not inspected",
          "count": 21432,
          "title": "Unverified cars"
        }
      ],
      "popular_values": [],
      "value": null
    },
    {
      "label": "Verified sellers",
      "parent_slug": null,
      "slug": "filter_id_verify",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "term",
      "visual_type": "select",
      "for_header": true,
      "is_multiple": false,
      "attr_id": 1000003,
      "attr_name": "Verified sellers",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_id_verify",
      "possible_values": [
        {
          "value": "Verified sellers",
          "count": 13272
        },
        {
          "value": "Unverified sellers",
          "count": 8498
        }
      ],
      "popular_values": [],
      "value": null
    },
    {
      "label": "Discount",
      "parent_slug": null,
      "slug": "filter_discount",
      "attr_type": "str",
      "filter_placeholder": null,
      "filter_type": "term",
      "visual_type": "select",
      "for_header": true,
      "is_multiple": false,
      "attr_id": 1000004,
      "attr_name": "Discount",
      "attr_parent_id": null,
      "attr_parent_name": null,
      "filter_name": "filter_discount",
      "possible_values": [
        {
          "value": "yes",
          "count": 68,
          "title": "With discount"
        },
        {
          "value": "no",
          "count": 21702,
          "title": "Without discount"
        }
      ],
      "popular_values": [],
      "value": null
    }
  ]
  filtersTop: any[] = [
    {
      "items": [
        {
          "type": "filters",
          "title": "< ₦ 12.0 M",
          "filters": {
            "price_min": null,
            "price_max": 12000000
          }
        },
        {
          "type": "filters",
          "title": "₦ 12  - 18 M",
          "filters": {
            "price_min": 12000000,
            "price_max": 18000000
          }
        },
        {
          "type": "filters",
          "title": "₦ 18  - 28 M",
          "filters": {
            "price_min": 18000000,
            "price_max": 28000000
          }
        },
        {
          "type": "filters",
          "title": "> ₦ 28 M",
          "filters": {
            "price_min": 28000000,
            "price_max": null
          }
        }
      ]
    },
    {
      "items": [
        {
          "type": "filters",
          "title": "Toyota",
          "count": 49302,
          "image_url": "https://assets.jijistatic.net/art/attributes/top-selection/brand-make-icons/toyota.png",
          "filters": {
            "filter_attr_1_make": "Toyota"
          }
        },
        {
          "type": "filters",
          "title": "Mercedes-Benz",
          "count": 21770,
          "image_url": "https://assets.jijistatic.net/art/attributes/top-selection/brand-make-icons/mercedes-benz.png",
          "filters": {
            "filter_attr_1_make": "Mercedes-Benz"
          }
        },
        {
          "type": "filters",
          "title": "Lexus",
          "count": 20364,
          "image_url": "https://assets.jijistatic.net/art/attributes/top-selection/brand-make-icons/lexus.png",
          "filters": {
            "filter_attr_1_make": "Lexus"
          }
        },
        {
          "type": "filters",
          "title": "Honda",
          "count": 6582,
          "image_url": "https://assets.jijistatic.net/art/attributes/top-selection/brand-make-icons/honda.png",
          "filters": {
            "filter_attr_1_make": "Honda"
          }
        },
        {
          "type": "filters",
          "title": "Hyundai",
          "count": 4540,
          "image_url": "https://assets.jijistatic.net/art/attributes/top-selection/cars2x-tinifield/Hyundai2.png",
          "filters": {
            "filter_attr_1_make": "Hyundai"
          }
        },
        {
          "type": "filters",
          "title": "Ford",
          "count": 2276,
          "image_url": "https://assets.jijistatic.net/art/attributes/top-selection/brand-make-icons/ford.png",
          "filters": {
            "filter_attr_1_make": "Ford"
          }
        },
        {
          "type": "filters",
          "title": "Acura",
          "count": 2154,
          "image_url": "https://assets.jijistatic.net/art/attributes/top-selection/brand-make-icons/acura.png",
          "filters": {
            "filter_attr_1_make": "Acura"
          }
        },
        {
          "type": "manual_select",
          "title": "Other",
          "filter_name": "filter_attr_1_make",
          "image_url": "https://assets.jijistatic.net/art/attributes/top-selection/other2x-tinifield.png"
        }
      ],
      "filter_name": "filter_attr_1_make"
    }
  ]

  rangePrices: any[] = [
    {
      name: "< 5.9 M",
      min: 0,
      max: 5.9,
    },
    {
      name: "5.9 - 10 M",
      min: 5.9,
      max: 10,
    },
    {
      name: "10 - 17 M",
      min: 10,
      max: 17,
    },
    {
      name: "> 17 M",
      min: 17,
      max: 30,
    },

  ];

  datasFilters: any[] = [];

  filters: { [key: string]: string[] } = {
    price: [],
    body: [],
    color: [],
    condition: [],
    transmission: [],
    region: []
  };

  allProducts: Product[] = []; // liste complète

  filteredProducts: Product[] = []; // liste filtrée

  filteredAds = [];
  selectedFilters = {
    condition: '',
    transmission: '',
    minPrice: null,
    maxPrice: null
  };
  categories: Category[] = [];
  products: Product[] = [];
  products1: Product[] = [];
  products2: Product[] = [];
  products3: Product[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) {
  }

  loadFilters(){
    this.datasFilters = this.filtersLeft.map(ad=>{
      // if ()
      return {
        label:ad.label,
        filter_type:ad.filter_type,
        visual_type:ad.visual_type,
        filter_data:ad.filter_data,
        prefill_options:ad.prefill_options,
        possible_values:ad.possible_values,
        popular_values:ad.popular_values,
      }

    })
    console.log("this.datasFilters");
    console.log(this.datasFilters);
  }

  loadProducts() {

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
    this.allProducts = this.transformAdvertsToProducts(this.adverts, new Product());
    console.log("this.allProducts");
    console.log(this.allProducts);
    const dividedList = this.divideArrayIntoFourParts(this.allProducts);
    this.products1 = dividedList[0]
    this.products2 = dividedList[1]
    this.products3 = dividedList[2]
    // this.productService.getProducts().subscribe(data => {
    //   console.log("data");
    //
    //   const dividedList = this.divideArrayIntoFourParts(data);
    //   this.products1 = dividedList[0]
    //   this.products2 = dividedList[1]
    //   this.products3 = dividedList[2]
    //
    // });

    // this.productService.getAllProducts().then((data: Product[]) => {
    //   console.log("data");
    //   console.log(data);
    //   this.products = data;
    // });
  }

  private divideArrayIntoFourParts(arr: Product[]): any[][] {
    const partSize = Math.ceil(arr.length / 3); // Calcul de la taille de chaque partie
    const result: any[][] = [];

    for (let i = 0; i < 3; i++) {
      const start = i * partSize;
      const end = start + partSize;
      result.push(arr.slice(start, end));
    }

    return result;
  }

  originalAds: Adverts[] = []; // toutes les annonces
  displayedAds: Adverts[] = []; // annonces affichées après filtrage

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

  extractOptionFilter(ad: any, attrName: string): any[] {
    console.log(ad);
    console.log(attrName);
    return ad?.find((a: any) => a.label.toLowerCase() === attrName.toLowerCase());
  }


  mapFiltersLeft(advert: any): Product {
    const product = new Product();

    product.id = advert.id;
    product.name = advert.title;
    product.price = advert.price_obj?.value || 0;
    product.imageUrl = advert.image_obj?.url || '';
    product.description = advert.short_description;
    product.categoryId = advert.category_id;
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

  transformAdvertsToProducts(adverts: any[], productTemplate: Product): Product[] {
    const productKeys = Object.keys(productTemplate);
    return adverts.map(ad => {
      let product = new Product();
      product = this.mapAdvertToProduct(ad)
      // productKeys.forEach(key => {
      //   switch (key) {
      //     case 'id':
      //       product.id = ad.id;
      //       break;
      //     case 'name':
      //       product.name = ad.title;
      //       break;
      //     case 'price':
      //       product.price = ad.price_obj?.value ?? 0;
      //       break;
      //     case 'imageUrl':
      //       product.imageUrl = ad.image_obj?.url ?? '';
      //       break;
      //     case 'description':
      //       product.description = ad.short_description ?? '';
      //       break;
      //     case 'categoryId':
      //       product.categoryId = ad.category_id;
      //       break;
      //     case 'stock':
      //       product.stock = 1; // default value
      //       break;
      //     case 'userId':
      //       product.userId = ad.user_id;
      //       break;
      //     case 'location':
      //       product.location = ad.region ?? '';
      //       break;
      //     default:
      //       // rechercher dans les attrs du produit
      //       product[key] = this.extractAttrValue(ad, key);
      //       break;
      //   }
      // });
      return product;
    });

  }

  transformAdvertsToProductsOld(adverts: any[]): Product[] {
    return adverts.map(ad => {
      return new Product();
    });
  }

  updateFilter(type: string, values: string[]) {
    console.log("updateFilter");
    console.log(type);
    console.log(values);
    this.filters[type] = values;
    console.log(this.filters);
    // this.applyFilters();
  }

  ngOnInit(): void {
    const storedFilters = localStorage.getItem('categoryFilters');
    if (storedFilters) {
      this.filters = JSON.parse(storedFilters);
    }
    // this.originalAds = this.loadAdvertsFromJson();
    this.loadFilters();
    this.loadProducts();
    this.restoreFilters();
    this.applyFilters();
  }

  loadAdvertsFromJson(): Adverts[] {
    // Tu colles ici la liste brute: const rawAdverts = [ { ... }, { ... } ];
    const rawAdverts = JSON.parse(localStorage.getItem('advertsRaw') || '[]');
    return rawAdverts;
  }

  applyFiltersOther() {
    // this.filteredAds = this.allProducts.filter(ad => {
    //   const conditionMatch = this.selectedFilters.condition ? ad.Condition === this.selectedFilters.condition : true;
    //   const transmissionMatch = this.selectedFilters.transmission ? ad.Transmission === this.selectedFilters.transmission : true;
    //   const priceMatch = (!this.selectedFilters.minPrice || ad.price >= this.selectedFilters.minPrice) &&
    //     (!this.selectedFilters.maxPrice || ad.price <= this.selectedFilters.maxPrice);
    //   return conditionMatch && transmissionMatch && priceMatch;
    // });

    // Sauvegarde dans le localStorage
    localStorage.setItem('selectedFilters', JSON.stringify(this.selectedFilters));
  }

  applyFilters() {
    this.filteredProducts = this.allProducts.filter(product => {
      return (
        (this.filters['body'].length === 0 || this.filters['body'].includes(product.body)) &&
        (this.filters['color'].length === 0 || this.filters['color'].includes(product.color)) &&
        (this.filters['condition'].length === 0 || this.filters['condition'].includes(product.condition))
      );
    });
  }

  resetFilters() {
    this.filters = {
      price: [],
      body: [],
      color: [],
      transmission: [],
      region: [],
      condition: [],
      fuel: []
    };
    localStorage.removeItem('categoryFilters');
    this.applyFilters();
  }

  saveFilters() {
    localStorage.setItem('categoryFilters', JSON.stringify(this.filters));
  }

  restoreFilters() {
    const saved = localStorage.getItem('categoryFilters');
    if (saved) {
      this.filters = JSON.parse(saved);
    }
  }
}
