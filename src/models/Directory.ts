import { Item } from './Item';

export class Directory extends Item {
	private _children: Map<string, Item> = new Map<string, Item>();

	constructor(name: string = '') {
		super(name);
	}

	get content() {
		return Array.from(this._children.values());
	}

	hasItem(itemName: string) {
		return this._children.has(itemName);
	}

	getItem(itemName: string) {
		return this._children.get(itemName) || null;
	}

	removeItem(itemName: string) {
		const item = this.getItem(itemName);

		if (item) {
			this._children.delete(itemName);
			item.parent = null;
		}
	}
}
