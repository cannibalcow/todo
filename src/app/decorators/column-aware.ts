import { Column } from './../store/task/task';

export function ColumnAware(constructor: Function) {
    constructor.prototype.Column = Column;
}
