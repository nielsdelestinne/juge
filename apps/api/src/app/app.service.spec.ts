import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { Cat, Gender, Order } from '@juge/type-api';

describe('AppService', () => {
  let service: AppService;

  const dummyCats: Cat[] = [
    {name: 'Abbi', age: 7, gender: Gender.FEMALE, isKeptIndoor: false},
    {name: 'Garfield', age: 10, gender: Gender.MALE, isKeptIndoor: true},
    {name: 'Felix', age: 8, gender: Gender.MALE, isKeptIndoor: false},
    {name: 'Minx', age: 3, gender: Gender.FEMALE, isKeptIndoor: true},
    {name: 'Toulouse', age: 5, gender: Gender.MALE, isKeptIndoor: true},
  ];

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        AppService,
        { provide: 'cats', useValue: dummyCats },
      ],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData_pageable', () => {
    it('should correctly return pageable data of first page', () => {
      expect(
        service.getAllCats_pageable({
          page: 0,
          size: 2,
          orderBy: 'name',
          order: Order.ASC,
        })
      ).toEqual([
        {name: 'Abbi', age: 7, gender: Gender.FEMALE, isKeptIndoor: false},
        {name: 'Felix', age: 8, gender: Gender.MALE, isKeptIndoor: false},
      ]);
    });

    it('should correctly return pageable data of first page, ordered descending', () => {
      expect(
        service.getAllCats_pageable({
          page: 0,
          size: 2,
          orderBy: 'name',
          order: Order.DESC,
        })
      ).toEqual([
        {name: 'Toulouse', age: 5, gender: Gender.MALE, isKeptIndoor: true},
        {name: 'Minx', age: 3, gender: Gender.FEMALE, isKeptIndoor: true},
      ]);
    });

    it('should correctly return pageable data of second page', () => {
      expect(
        service.getAllCats_pageable({
          page: 1,
          size: 3,
          orderBy: 'name',
          order: Order.ASC,
        })
      ).toEqual([
        {name: 'Minx', age: 3, gender: Gender.FEMALE, isKeptIndoor: true},
        {name: 'Toulouse', age: 5, gender: Gender.MALE, isKeptIndoor: true},
      ]);
    });
  });
});
