import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, NavController,  } from '@ionic/angular';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public form = [
    { val: 'FoxNews', isChecked: false},
    { val: 'UsaToday', isChecked: false },
    { val: 'BBC Sports', isChecked: false },
    { val: 'NBC News', isChecked: false },
    
  ];
  opc;
  n = 0;
  url = "";

  constructor(public NavCtrl: NavController, private browser: InAppBrowser) { }

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
      case 0: this.url = "https://www.foxnews.com/sports"
                          break;
      case 1: this.url = "https://www.usatoday.com/sports/"
      break;
      case 2: this.url = "https://www.bbc.com/sport"
      break;
      case 3: this.url = "https://www.nbcnews.com/news/sports/"
      break;
    }
  }

}
