import { Component, OnInit } from '@angular/core';
import { Chats } from '../../api/server/collections';
import { Chat } from '../../api/server/models';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';
  chats: Chat[];

  constructor() {}

  ngOnInit() {
    Chats.find({}).subscribe((chats: Chat[]) => {

      this.chats = chats;
    });
  }

  addChats(): void {

    Meteor.call('chats.add');
  }
}
