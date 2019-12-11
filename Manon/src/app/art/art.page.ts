import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-art',
  templateUrl: './art.page.html',
  styleUrls: ['./art.page.scss'],
})
export class ArtPage implements OnInit {

  
  public form = [
    { val: 'Art News', isChecked: false},
    { val: 'The Art Newspaper', isChecked: false },
    { val: 'Art Net News', isChecked: false }
    
    
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
      case 0: this.url = "https://www.artnews.com/"
                          break;
      case 1: this.url = "https://www.theartnewspaper.com"
      break;
      case 2: this.url = "https://news.artnet.com/art-world"
      break;
    }
  }

}
