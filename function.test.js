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
            const result = pop(normalArr);

            expect(normalArr).toContain(1, 2);
            expect(result).toBe(3);
        });
    });
    describe('When receive a string', () => {
        test('Then should be Error', () => {
            const string = 'pepe';

            expect(() => pop(string)).toThrow();
        });
    });
});
