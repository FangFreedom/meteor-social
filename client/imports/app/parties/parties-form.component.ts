import { Meteor } from 'meteor/meteor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InjectUser } from 'angular2-meteor-accounts-ui';

import { Parties } from '../../../../both/collections/parties.collection';

import template from './parties-form.component.html';

@Component ({
	selector: 'parties-form',
	template
})

@InjectUser('user')
export class PartiesFormComponent implements OnInit{
	addForm: FormGroup;
	//user: Meteor.User;
	
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(){
		//console.log(this.user);

		this.addForm = this.formBuilder.group({
			name: ['', Validators.required ],
			desc: [],
		})
	}

	addParty(): void{
		if(!Meteor.user()) {
			alert('Please login');
			return;
		}

		if(this.addForm.valid){
			Parties.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId()}));

			this.addForm.reset();
		}

	}
}
