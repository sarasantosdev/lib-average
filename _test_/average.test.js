const {average} = require('../index');

test('average of numbers', () =>{
    expect(average(10, 20, 30)).toBe(20);
});

test('average of vector of numbers', () =>{
    expect(average([10, 20, 30])).toBe(20);
});

test('ignore invalid values', () =>{
    expect(average([10, null, 20,  'a'])).toBe(15)
});

test('return NaN if there are no valid values', () =>{
    expect(average([null, 'a'])).toBeNaN()
});