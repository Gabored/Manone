import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public form = [
    { val: 'BBC', isChecked: false},
    { val: 'CNN', isChecked: false },
    { val: 'Twitter', isChecked: false }
    
    
  ];

  opc = 0;
  n =0;
  url = "";


  constructor(private browser: InAppBrowser, private NavCtrl: NavController) {

  }




  ngOnInit() {
  }

  jumpHome(){
    this.NavCtrl.navigateRoot('home');
  }

  openUrl(){
    this.browser.create(this.url, '_blank');
  }

  getFavSite(){
    for (var i = 0; i<this.form.length;i++){
      if (this.form[i].isChecked == true){
        this.opc = i;
        console.log('entre');
        console.log(this.opc);
      }
    }
    switch (this.opc){
      case 0: this.url = "https://www.bbc.com/"
      break;
      case 1: this.url = "https://www.cnn.com"
      break;
      case 2: this.url = "https://twitter.com"
      break;
    }
  }

}
