import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { PartiesListComponent } from './parties/parties-list.component';
import { PartyDetailsComponent } from './parties/party-details.component';

export const routes: Route[] = [
	{ path:'', component: PartiesListComponent },
	{ path:'party/:partyId', component: PartyDetailsComponent, canActivate: ['canActivateForLogin'] },
]

export const ROUTES_PROVIDERS = [
	{ provide: 'canActivateForLogin',useValue: () => !!Meteor.userId() }
]
