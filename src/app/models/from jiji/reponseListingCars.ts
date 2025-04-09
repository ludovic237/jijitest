export class reponseListingCars {
    adverts_list: Adverts_list;
    companies_search: any;
    next_url: string;
    status: string;
    listing_id: string;
    extra_data: Extra_data;

  constructor(adverts_list: Adverts_list, companies_search: any, next_url: string, status: string, listing_id: string, extra_data: Extra_data) {
    this.adverts_list = adverts_list;
    this.companies_search = companies_search;
    this.next_url = next_url;
    this.status = status;
    this.listing_id = listing_id;
    this.extra_data = extra_data;
  }
}

export class Admin_info {

  constructor() {
  }
}

export class Attrs {
    name: string;
    value: string;
    unit: any;

  constructor(name: string, value: string, unit: any) {
    this.name = name;
    this.value = value;
    this.unit = unit;
  }
}

export class Badge_info {
    label: string;
    slug: string;
    bg_color: string;
    text_color: string;
    aside_color: string;
    service_type: string;

  constructor(label: string, slug: string, bg_color: string, text_color: string, aside_color: string, service_type: string) {
    this.label = label;
    this.slug = slug;
    this.bg_color = bg_color;
    this.text_color = text_color;
    this.aside_color = aside_color;
    this.service_type = service_type;
  }
}

export class Event_params {
    cpc_campaign_id: number;
    position_type: string;

  constructor(cpc_campaign_id: number, position_type: string) {
    this.cpc_campaign_id = cpc_campaign_id;
    this.position_type = position_type;
  }
}

export class Fb_view_content_data {
    content_name: string;
    content_category: string;
    content_ids: string[];
    content_type: string;
    value: string;
    currency: string;

  constructor(content_name: string, content_category: string, content_ids: string[], content_type: string, value: string, currency: string) {
    this.content_name = content_name;
    this.content_category = content_category;
    this.content_ids = content_ids;
    this.content_type = content_type;
    this.value = value;
    this.currency = currency;
  }
}

export class Image_obj {
    url: string;
    center: number[];

  constructor(url: string, center: number[]) {
    this.url = url;
    this.center = center;
  }
}

export class Images {
    url: string;
    center: number[];
    size: number[];

  constructor(url: string, center: number[], size: number[]) {
    this.url = url;
    this.center = center;
    this.size = size;
  }
}

export class Labels {
    type: string;
    value: string;

  constructor(type: string, value: string) {
    this.type = type;
    this.value = value;
  }
}

export class Paid_info {
    text: string;
    bg: string;
    package_type: string;
    border: string;
    icon: boolean;
    more_photos: boolean;
    package_title: string;

  constructor(text: string, bg: string, package_type: string, border: string, icon: boolean, more_photos: boolean, package_title: string) {
    this.text = text;
    this.bg = bg;
    this.package_type = package_type;
    this.border = border;
    this.icon = icon;
    this.more_photos = more_photos;
    this.package_title = package_title;
  }
}

export class Price_obj {
    value: number;
    view: string;
    period: any;
    bulk: any;
    type: any;

  constructor(value: number, view: string, period: any, bulk: any, type: any) {
    this.value = value;
    this.view = view;
    this.period = period;
    this.bulk = bulk;
    this.type = type;
  }
}

export class Adverts {
    admin_info: Admin_info;
    as_top: boolean;
    attrs: Attrs[];
    badge_info: Badge_info;
    can_view_contacts: boolean;
    category_id: number;
    category_name: string;
    category_slug: string;
    count_images: number;
    details: string;
    event_params: Event_params;
    fb_view_content_data: Fb_view_content_data;
    guid: string;
    id: number;
    image_obj: Image_obj;
    images: Images[];
    images_count: number;
    is_boost: string;
    is_cv: boolean;
    is_inspected: boolean;
    is_job: boolean;
    is_owner: boolean;
    is_top: boolean;
    labels: Labels[];
    message_url: string;
    paid_info: Paid_info;
    price_obj: Price_obj;
    price_title: string;
    region: string;
    region_id: number;
    region_item_text: string;
    region_name: string;
    region_parent_name: string;
    region_slug: string;
    short_description: string;
    slug: string;
    status: string;
    title: string;
    title_labels: any[];
    tops_count: number;
    url: string;
    user_id: number;
    user_phone: string;

  constructor(admin_info: Admin_info, as_top: boolean, attrs: Attrs[], badge_info: Badge_info, can_view_contacts: boolean, category_id: number, category_name: string, category_slug: string, count_images: number, details: string, event_params: Event_params, fb_view_content_data: Fb_view_content_data, guid: string, id: number, image_obj: Image_obj, images: Images[], images_count: number, is_boost: string, is_cv: boolean, is_inspected: boolean, is_job: boolean, is_owner: boolean, is_top: boolean, labels: Labels[], message_url: string, paid_info: Paid_info, price_obj: Price_obj, price_title: string, region: string, region_id: number, region_item_text: string, region_name: string, region_parent_name: string, region_slug: string, short_description: string, slug: string, status: string, title: string, title_labels: any[], tops_count: number, url: string, user_id: number, user_phone: string) {
    this.admin_info = admin_info;
    this.as_top = as_top;
    this.attrs = attrs;
    this.badge_info = badge_info;
    this.can_view_contacts = can_view_contacts;
    this.category_id = category_id;
    this.category_name = category_name;
    this.category_slug = category_slug;
    this.count_images = count_images;
    this.details = details;
    this.event_params = event_params;
    this.fb_view_content_data = fb_view_content_data;
    this.guid = guid;
    this.id = id;
    this.image_obj = image_obj;
    this.images = images;
    this.images_count = images_count;
    this.is_boost = is_boost;
    this.is_cv = is_cv;
    this.is_inspected = is_inspected;
    this.is_job = is_job;
    this.is_owner = is_owner;
    this.is_top = is_top;
    this.labels = labels;
    this.message_url = message_url;
    this.paid_info = paid_info;
    this.price_obj = price_obj;
    this.price_title = price_title;
    this.region = region;
    this.region_id = region_id;
    this.region_item_text = region_item_text;
    this.region_name = region_name;
    this.region_parent_name = region_parent_name;
    this.region_slug = region_slug;
    this.short_description = short_description;
    this.slug = slug;
    this.status = status;
    this.title = title;
    this.title_labels = title_labels;
    this.tops_count = tops_count;
    this.url = url;
    this.user_id = user_id;
    this.user_phone = user_phone;
  }
}

export class Adverts_list {
    mode_default: string;
    count: number;
    adverts: Adverts[];
    total_pages: number;
    tops_exist: boolean;

  constructor(mode_default: string, count: number, adverts: Adverts[], total_pages: number, tops_exist: boolean) {
    this.mode_default = mode_default;
    this.count = count;
    this.adverts = adverts;
    this.total_pages = total_pages;
    this.tops_exist = tops_exist;
  }
}

export class Extra_data {
    message: any;

  constructor(message: any) {
    this.message = message;
  }
}
