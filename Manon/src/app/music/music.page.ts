import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, NavController,  } from '@ionic/angular';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  public form = [
    { val: 'Spotify', isChecked: false},
    { val: 'Billboard', isChecked: false },
    { val: 'Music News', isChecked: false },
    { val: 'Rolling Stone', isChecked: false },
    
  ];
  opc;
  n = 0;
  url = "";

  constructor(public NavCtrl: NavController, private browser: InAppBrowser) { }

 
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
      case 0: this.url = "https://open.spotify.com/"
                          break;
      case 1: this.url = "https://www.billboard.com/news"
      break;
      case 2: this.url = "http://www.music-news.com/"
      break;
      case 3: this.url = "https://www.rollingstone.com/music/music-news/"
      break;
    }
  }

  ngOnInit() {
  }



}
