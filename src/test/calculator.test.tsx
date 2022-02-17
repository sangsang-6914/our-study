import add from './calculator';

const testObj = {
  id: 1234,
  name: '우상훈',
};

const testObj2 = {
  id: 1234,
  name: '우상훈',
};

it('add correctly', () => {
  expect(add(3, 2)).toBe(5);
});

test('add2', () => {
  expect(add(3, 72)).toBe(75);
});

test('object 비교', () => {
  expect(testObj).toEqual(testObj2);
});
