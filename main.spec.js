import { sum } from "./main";


describe('sum', () => {
	it('2 + 2 = 4', () => {
		expect(sum(2, 2)).toBe(4);
	});

	it('1 + 2 = 3', () => {
		expect(sum(1, 2)).toBe(3);
	});

	it('2 + 2 != 5', () => {
		expect(sum(2, 2)).not.toBe(5);
	});
});