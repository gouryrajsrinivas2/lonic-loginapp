import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoggedinPage } from '../loggedin/loggedin';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	constructor(private fire:AngularFireAuth,public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  @ViewChild('username') username;
  @ViewChild('password') password;
  login() {

  	this.fire.auth.signInWithEmailAndPassword(this.username.value,this.password.value)
  	.then(
  		
  		data=>{console.log('loged in',this.fire.auth.currentUser);
  		this.alert('hey you are logged in');
  		this.navCtrl.setRoot(LoggedinPage);
  	})
  	.catch(error=>{
  		console.log("error",error);
  		this.alert(error.message);
  	
  	});
  	

  }
  alert(message:string) {
     this.alertCtrl.create({
      title: 'info',
      subTitle: message,
      buttons: ['OK']
    }).present();
    
  }

  }


