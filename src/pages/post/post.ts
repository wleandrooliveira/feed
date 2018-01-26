import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
class Post {
  title: string
  body: string
  id: string

  constructor() {}
}

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
  post: Post = new Post()
  constructor(
    public navCtrl: NavController,
    public af: AngularFireDatabase) {}

  submit() {
    this.af.list('/posts').push(this.post)
    this.post = new Post();
    this.navCtrl.parent.select(0)
  }

}
