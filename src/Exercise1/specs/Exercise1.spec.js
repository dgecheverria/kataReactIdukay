import React from 'react';
import {shallow} from 'enzyme';
import Exercise1 from '../Exercise1';

describe('Exercise1', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise1/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });

    describe('excercise1',() => {
        fit('deberia retornar el camino correcto ejercicio 1',()=>{
            const array_one = [
                ['I',0,1],
                [1,0,1],
                [1,0,'S']
            ];

            const result = instance.calculo(array_one);
            expect(result[0]).toEqual(['x','x',1]);
            expect(result[1]).toEqual([1,'x',1]);
            expect(result[2]).toEqual([1,'x','x']);
        });
    });
});
