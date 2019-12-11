import { Component, ViewChildren } from '@angular/core';
import { Platform, AlertController, NavController,  } from '@ionic/angular';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { SuperTabs } from '@ionic-super-tabs/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  /*pages = [
    { pageName : 'NewsPage' , title: 'News', icon: 'flame', id:'NewsTab'},
    { pageName : 'FeedPage' , title: 'Feed', icon: 'help-circle', id:'FeedPage'},
    { pageName : 'ToDoPage' , title: 'To Do', icon: 'body', id:'ToDoPage'}
  ];
   selectedTab = 0;

  @ViewChildren(SuperTabs) superTabs: SuperTabs;
  */
 public form = [
    { val: 'Sports', isChecked: false },
    { val: 'Music', isChecked: false },
    { val: 'Art', isChecked: false }
  ];
  name = "";
  n_name = "";
  n=0;
  time = "";
  opc = 0;

  currentTime : any;

  scheduled = [];

  constructor( public NavCtrl: NavController  ,private plt: Platform,private localNotifications: LocalNotifications, private alertCtrl: AlertController) {



    this.plt.ready().then(() => {
      this.localNotifications.on('click').subscribe(res => {
        console.log('click: ', res);
        let msg = res.data ? res.data.mydata: '';
        this.showAlert(res.title, res.text, msg);
      });

      this.localNotifications.on('trigger').subscribe(res => {
        console.log('trigger: ', res);
        let msg = res.data ? res.data.mydata: '';
        this.showAlert(res.title, res.text, msg);
      });
    });
  }
  ngOnInit(){
    this.currentTime =  moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  scheduleNotification(){
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Wow ',
      data: { mydata: 'This is blocked '},
      trigger : {in: 5, unit: ELocalNotificationTriggerUnit.SECOND}
    });
  }

  recurringNotification(){
    this.localNotifications.schedule({
      id: 2,
      title: 'Recurring',
      text: 'This is the recurring notification ',
      trigger: {every: ELocalNotificationTriggerUnit.MINUTE }

    });
  }
  repeatingDaily(){
    this.localNotifications.schedule({
      id: 3,
      title: 'Good Morning',
      text: 'This is every Day ',
      trigger : {every: {hour: 1, minute: 14}} // Tiene que ser la hora en la que se hara deploy en la app (ya en device) para que concuerde con el ciclo de 24 hrs
    });
  }

  getAll(){
    this.localNotifications.getAll().then (res =>{
        this.scheduled = res;
    });
  }

  showAlert(header, sub, msg){
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['Ok']
    }).then(alert => alert.present());
  }

  setStats(){
    this.name = this.n_name;
    for (var i = 0; i<this.form.length;i++){
      if (this.form[i].isChecked == true){
        this.opc = i;
      }
    }
    this.n = 1;

  }

  jumpSports(){
    this.NavCtrl.navigateRoot('feed');

  }

  jumpMusic(){
    this.NavCtrl.navigateRoot('music');
  }

  jumpArt(){
    this.NavCtrl.navigateRoot('art');
  }


  jumpNews(){
    this.NavCtrl.navigateRoot('news');
  }

  jumpToDo(){
    this.NavCtrl.navigateRoot('to-do');
  }


}
