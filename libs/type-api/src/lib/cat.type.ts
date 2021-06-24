import { Gender } from './gender.type';

export type Cat = Readonly<{
  name: string,
  age: number,
  isKeptIndoor: boolean,
  gender: Gender
}>
