import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  resData:any;
  newsData:any;
  constructor(public http:HttpClient) { }


  ngOnInit(): void {
    const url="https://newsapi.org/v2/top-headlines?country=in&apiKey=43e44cf2e0fd43afab4ae949b039f303";
    this.http.get(url)
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.status=="ok")
        {
          this.newsData=this.resData.articles;
          console.log(this.newsData);
        }
      })
  }


}