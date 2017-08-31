import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfileSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile-search'
})
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {

  username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getUserInformation() {
    this.navCtrl.push('ProfileSearchResultsPage', {
      username: this.username
    });
  }

}
