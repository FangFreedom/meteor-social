import { CollectionObject } from './collection-object.model';

export interface Party extends CollectionObject {
	name : string,
	desc : string,
	owner? : string
}