# Animal Leg Counter

## Problem
Given an array of animal names, return how many animals have exactly four legs.

## Approach
- Use a Set to store animals with four legs
- Iterate through the array and count matches
- Ignore unknown animals

## Time Complexity
O(n), where n is the number of animals in the array.

## Space Complexity
O(1), since the set size is constant.

## Tests
Includes:
- 3 normal cases
- 3 edge cases

All tests pass using Jest.

## How to Run
```bash
npm install
npm test
