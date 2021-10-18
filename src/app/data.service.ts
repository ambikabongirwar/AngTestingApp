import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  mobiles: Product[] = [
      {
      title: "Card1",
      text: "Content1",
      imageUrl: "https://www.pmc.gov.au/sites/default/files/styles/news_centre_content_page_hero_image/public/media-release/digital-tech-taskforce-hero.jpg?itok=AZaJCF6e",
      },
      {
        title: "Card2",
        text: "Content2",
        imageUrl: "https://www.pmc.gov.au/sites/default/files/styles/news_centre_content_page_hero_image/public/media-release/digital-tech-taskforce-hero.jpg?itok=AZaJCF6e",
      },
      {
        title: "Card3",
        text: "Content3",
        imageUrl: "https://www.pmc.gov.au/sites/default/files/styles/news_centre_content_page_hero_image/public/media-release/digital-tech-taskforce-hero.jpg?itok=AZaJCF6e",
      },
      {
        title: "Card4",
        text: "Content4",
        imageUrl: "https://www.pmc.gov.au/sites/default/files/styles/news_centre_content_page_hero_image/public/media-release/digital-tech-taskforce-hero.jpg?itok=AZaJCF6e",
      },
      {
        title: "Card5",
        text: "Content5",
        imageUrl: "https://www.pmc.gov.au/sites/default/files/styles/news_centre_content_page_hero_image/public/media-release/digital-tech-taskforce-hero.jpg?itok=AZaJCF6e",
      },
      {
        title: "Card6",
        text: "Content6",
        imageUrl: "https://www.pmc.gov.au/sites/default/files/styles/news_centre_content_page_hero_image/public/media-release/digital-tech-taskforce-hero.jpg?itok=AZaJCF6e",
      },
      {
        title: "Card7",
        text: "Content7",
        imageUrl: "https://www.pmc.gov.au/sites/default/files/styles/news_centre_content_page_hero_image/public/media-release/digital-tech-taskforce-hero.jpg?itok=AZaJCF6e",
      },
      {
        title: "Card8",
        text: "Content8",
        imageUrl: "https://www.pmc.gov.au/sites/default/files/styles/news_centre_content_page_hero_image/public/media-release/digital-tech-taskforce-hero.jpg?itok=AZaJCF6e",
      }
    ];
    getMobilesData(): Product[] {
      return this.mobiles;
    }
    updateMobilesData(mobileDetails: Product) {
      this.mobiles.push(mobileDetails);
    }
}
