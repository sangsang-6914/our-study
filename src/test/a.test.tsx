export const add2 = (a: number, b: number): number => {
  return a + b;
};

it('add2 test', () => {
  expect(add2(3, 65)).toEqual(68);
});
