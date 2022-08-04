import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-apinews',
  templateUrl: './apinews.page.html',
  styleUrls: ['./apinews.page.scss'],
})
export class ApinewsPage implements OnInit {

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
