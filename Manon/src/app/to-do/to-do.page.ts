import { Component, OnInit } from '@angular/core';


import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {

  list: any[] = [];

  apoin : string;
  doneby : string;


  constructor(private storage: Storage, private NavCtrl: NavController) {
    this.storage.remove('klist');
    this.storage.get('klist').then(list =>{
      if(list != null){
        this.list = list;
      }
      else{
        this.list = [];
      }
    });
    

  }

  add(id){
    let found = false;
    let it = 0;
    for(let i = 0; i<this.list.length;i++){
      if (this.list[i].mod){
        found = true;
       it = i ;
      }
       
    }

    if(found){
      this.list[it].do = this.apoin;
      this.list[it].date = this.doneby;
      this.list[it].mod = false;
      this.storage.set('klist', this.list);
    }
    else {
      this.list.push({
        id: this.list.length + 1,
        do: this.apoin,
        date: this.doneby
      });
    }
    this.apoin = "";
    this.doneby = "";
    this.storage.set('klist',this.list);

  }

  erase(id){
    let response = [];

    for (let item of this.list){
      if(item.id != id){
        response.push(item);
      }
    }
    this.list = response ;
    this.storage.set('klist',this.list);
  }


  ngOnInit() {
  }

  jumpHome(){
    this.NavCtrl.navigateRoot('home');
  }

}


