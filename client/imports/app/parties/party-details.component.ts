import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/subscription';
import { Meteor } from 'meteor/meteor';

import 'rxjs/add/operator/map';

import { Parties } from '../../../../both/collections/parties.collection';
import { Party } from '../../../../both/models/party.model';

import template from './party-details.component.html';

@Component({
  selector: 'party-details',
  template
})
export class PartyDetailsComponent implements OnInit {
	partyId: string;
	paramsSub: Subscription;
	party: Party;

  constructor(private route: ActivatedRoute) {
  		
  }

  ngOnInit() {
  	 this.paramsSub = this.route.params
  	 .map(params => params['partyId'])
  	 .subscribe(partyId => {
  	 	this.partyId=partyId;

  	 	this.party = Parties.findOne(this.partyId);
  	 });
  }

  saveParty(){
  	if(!Meteor.user()) {
  		alert('Please login');
  		return;
  	}

  	Parties.update(this.party._id, 
  		{
  			$set: {
  		  			name: this.party.name,
  		  			desc: this.party.desc
  		  		}
  		}
  	);
  }

  ngOnDestroy(){
  	this.paramsSub.unsubscribe();
  }


}
