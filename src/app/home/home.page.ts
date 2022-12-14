import { Component } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newslist:any = [];
  defaultImage: string = "assets/image/placeholder.png";

  constructor(private newsapi:NewsapiService) { }

  ngOnInit(): void {
    this.newsapi.getNews().subscribe((res)=>{
      console.log(res.articles);
      this.newslist = res.articles;

    })
  }

}
