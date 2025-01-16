

export class PresistenceDatabase<T> {
    items: T[] = [];
    nextId = 1;

    find(conditions: any = {}) {
        let items = this.items;
        Object.entries(conditions).forEach(([key, value]) => {
            items = this.items.filter((f: any) => f[key] === value)
        })
        return items;
    }

    create(dto: T): T {

        const item = {
            ...dto,
            _id: this.nextId++,
            createdDate: Date.now()
        }
        this.items.push(item);
        return item;
    }

    update(_id: number, dto: T): T {

        const itemIndex = this.items.findIndex((i: any) => i._id === _id);
        if (itemIndex !== -1) {
            this.items[itemIndex] = { ...this.items[itemIndex], ...dto };
        }
        return this.items[itemIndex];
    }

    delete(_id: number): boolean {
        if (!this.items[_id]) {
            return false;
        }
        this.items = this.items.filter((i: any) => i._id !== _id);
        return true;
    }
}