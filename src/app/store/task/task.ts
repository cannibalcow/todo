import { ShoppingItem } from './shopping-item';
export enum Column {
    BACKLOG, IN_PROGRESS, DONE
}
export class Task {
    id: number;
    title: string;
    description: string;
    estimate: number;
    started: boolean;
    column: Column;
    shoppingList: ShoppingItem[];
}
