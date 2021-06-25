import { Cat, Gender } from '@juge/type-api';

export function generateCats(amount = 50): Cat[] {
  const cats: Cat[] = [];

  for(let i = 0; i < amount; i++) {
    cats.push({
      name: generateName(i),
      age: i,
      isKeptIndoor: true,
      gender: Gender.MALE

    })
  }

  return cats;
}

function generateName(i: number) {
  return Math.abs(10 + (i % 26)).toString(36).toUpperCase() + 'catoski' + i;
}
