//👉 Write your tests below here:
import { checkDuplicates } from "./main";

import { expect, test } from "@jest/globals";

test('Check for duplicates in array with no duplicates', () => {

    expect(checkDuplicates(['Forsythe', 'Tarrant','Black','Barrymore','Holnes'])).toStrictEqual(false);

})

test('Check for duplicates in array with actual duplicates', () => {

    expect(checkDuplicates(['Forsythe', 'Forsythe', 'Tarrant','Black','Barrymore','Holnes'])).toStrictEqual(true);

})