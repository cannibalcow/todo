import { DBSchema } from '@ngrx/db';

export const schema: DBSchema = {
    version: 1,
    name: 'todos',
    stores: {
        todos: {
            autoIncrement: true,
            primaryKey: 'id'
        }
    }
}
