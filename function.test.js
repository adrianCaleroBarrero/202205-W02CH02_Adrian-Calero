import { pop } from './function.js';

describe('Given the function pop', () => {
    describe('When receive empty array', () => {
        test('Then should be undefined', () => {
            const emptyArr = [];

            expect(pop(emptyArr)).toBe(undefined);
        });
    });

    describe('When receive a normal array', () => {
        test('Then should be length - 1 ', () => {
            const normalArr = [1, 2, 3];
            pop(normalArr);

            expect(normalArr).toContain(1, 2);
        });
    });
    describe('When receive a string', () => {
        test('Then should be Error', () => {
            const string = 'pepe';
            pop(string);
            expect(() => throw new Error()).toThrow();
        });
    });
});
