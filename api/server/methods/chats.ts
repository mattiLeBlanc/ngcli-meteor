import { Meteor } from 'meteor/meteor';
import { Chats } from '../collections/chats';
import * as moment from 'moment';

Meteor.methods( {
  'chats.add': (  ) => {

    Chats.collection.insert({
      title: 'Bryan Wallace ' + moment().format( 'mmss'),
      picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
    });
  }
});
