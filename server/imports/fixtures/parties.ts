import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model';

export function loadParties(){
	if(Parties.find().cursor.count()===0){
		const parties: Party[] = [ { name: 'init party 1', desc: 'init 1111'}, { name: 'init party 2 ', desc: 'init 22222'}];

		parties.forEach((party:Party)=>Parties.insert(party));
	}
}