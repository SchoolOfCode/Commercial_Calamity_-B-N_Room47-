//👉 Write your tests below here:
import { checkDuplicates, numberOfDupes} from "./main";


import { expect, test } from "@jest/globals";

test('Check for duplicates in array with no duplicates', () => {
    expect(checkDuplicates(['Forsythe', 'Tarrant','Black','Barrymore','Holnes'])).toStrictEqual(false);
})

test('Check for duplicates in array with more duplicates', () => {
    expect(checkDuplicates(['Forsythe', 'Forsythe', 'Tarrant','Black','Barrymore','Holnes'])).toStrictEqual(true);
})

test('Check for duplicates in array with actual duplicates', () => {
    expect(checkDuplicates(['Forsythe', 'Forsythe', 'Tarrant', 'Tarrant', 'Tarrant', 'Tarrant', 'Black', 'Barrymore', 'Barrymore', 'Holnes'])).toStrictEqual(true);
})

test('Check for duplicates in array with actual duplicates', () => {
    expect(checkDuplicates([1001, 1002, 1003, 1003, 1003, 1004, 2004])).toStrictEqual(true);
})

test('Testing to see how many duplicates there are', () => {
    expect(numberOfDupes(['Forsythe', 'Forsythe', 'Tarrant', 'Tarrant', 'Tarrant', 'Tarrant', 'Black', 'Barrymore', 'Barrymore', 'Holnes'])).toBe(5)
})

test('Check for duplicates in array with actual duplicates', () => {
    expect(numberOfDupes(['Forsythe', 'Tarrant', 'Black', 'Barrymore', 'Holnes'])).toBe(0);
})

