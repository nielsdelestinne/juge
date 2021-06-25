import { Cat, Gender } from '@juge/type-api';

export function generateCats(amount = 50): Cat[] {
  const cats: Cat[] = [];
  for(let i = 0; i < amount; i++) {
    cats.push({
      name: 'Jim',
      age: i,
      isKeptIndoor: true,
      gender: Gender.MALE

    })
  }
  return cats;
}
