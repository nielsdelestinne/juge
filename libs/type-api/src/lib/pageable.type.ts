import { Order } from '@juge/type-api';

export type Pageable = Readonly<{
  page: number,
  size: number,
  orderBy: string,
  order: Order
}>
