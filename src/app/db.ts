import { DBSchema } from '@ngrx/db';

export const schema: DBSchema = {
    version: 1,
    name: 'todo',
    stores: {
        toods: {
            autoIncrement: true,
            primaryKey: 'id'
        }
    }
}
