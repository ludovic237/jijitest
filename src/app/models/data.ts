export class data {
    categories: Category[];
    users: User[];
    products: Product[];
    favorites: Favorite[];


  constructor(categories: Category[], users: User[], products: Product[], favorites: Favorite[]) {
    this.categories = categories;
    this.users = users;
    this.products = products;
    this.favorites = favorites;
  }
}

export class Category {
    id: number;
    name: string;
    subCategories: SubCategory[];


  constructor(id: number, name: string, subCategories: SubCategory[]) {
    this.id = id;
    this.name = name;
    this.subCategories = subCategories;
  }

}

export class SubCategory {
    id: number;
    name: string;


  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
export class Country {
    id: number;
    name: string;
    subCountries: SubCountry[];


  constructor(id: number, name: string, subCountries: SubCountry[]) {
    this.id = id;
    this.name = name;
    this.subCountries = subCountries;
  }

}

export class SubCountry {
    id: number;
    name: string;


  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class User {
    id: number;
    username: string;
    email: string;
    password: string;


  constructor(id: number, username: string, email: string, password: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

export class Product {
  [key: string]: any;  // 👈 ajoute ceci en haut de la classe

  id!: number;
    name!: string;
    price!: number;
    imageUrl!: string;
    description!: string;
    categoryId!: number;
    stock!: number;
    userId!: number;
    location!: string;

    // nouvelle propriete 1
    color!: string;
    body!: string;
    condition!: string;

    // nouvelle propriete 2
  regionName!: string;
  transmission!: string;
  mileage!: string;
  category_name!: string;
  isTopAd!: boolean;

  constructor() {

  }
}

export class Favorite {
    id: number;
    userId: number;
    productId: number;


  constructor(id: number, userId: number, productId: number) {
    this.id = id;
    this.userId = userId;
    this.productId = productId;
  }
}

export class Menu {
  id: number;
  name: string;
  number: string;
  image: string;
  url: string;
  subMenu: SubMenu[];


  constructor(id: number, name: string, number: string, image: string, url: string, subMenu: SubMenu[]) {
    this.id = id;
    this.name = name;
    this.number = number;
    this.image = image;
    this.url = url;
    this.subMenu = subMenu;
  }
}

export class SubMenu {
  id: number;
  name: string;
  number: number;
  image: string;
  url: string;


  constructor(id: number, name: string, number: number, image: string, url: string) {
    this.id = id;
    this.name = name;
    this.number = number;
    this.image = image;
    this.url = url;
  }
}
