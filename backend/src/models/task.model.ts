import {Entity, model, property} from '@loopback/repository';

@model()
export class Task extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  taskName: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isChecked: boolean;


  constructor(data?: Partial<Task>) {
    super(data);
  }
}

export interface TaskRelations {
  // describe navigational properties here
}

export type TaskWithRelations = Task & TaskRelations;
