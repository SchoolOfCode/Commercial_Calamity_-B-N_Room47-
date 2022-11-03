//👉 Write your tests below here:
import { checkDuplicates } from "./main";

import { expect, test } from "@jest/globals";

test('Check for duplicates', () => {
    expect(checkDuplicates(['Forsythe', 'Tarrant','Black','Barrymore','Holnes']).toBe(false));

})