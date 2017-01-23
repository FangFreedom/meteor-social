import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Party } from '../models/party.model';
 
export const Parties = new MongoObservable.Collection<Party>('parties');

function isLogin(){
	return !!Meteor.user();
}

Parties.allow({
	insert: isLogin,
	update: isLogin,
	remove: isLogin
});
