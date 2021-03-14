import {Model} from '../model';

export type ExtractModelRelationsType<T> = T extends Model<infer Attributes,
		infer PersistedAttributes,
		infer Relations,
		infer AllAttributes>
	? Relations
	: never;
