import { Gender } from './gender.enum';

export type Cat = Readonly<{
  name: string,
  age: number,
  isKeptIndoor: boolean,
  gender: Gender
}>
