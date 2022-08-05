/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true

1. We can map a character only to itself or to one other character.
2. No two character should map to same character.
3. Replacing each character in string s with the character it is mapped to results in string t.

Matching the order will be easy. Since we will iterate over the two strings and do some sort of comparison from left to right, the task of ensuring that the character order is the same in both strings will take care of itself. Next, we need to somehow maintain a mapping of characters (hint: dictionary) or come up with a way to "convert" both of the strings to a common format (think integer assignment to characters) and then check if the converted strings are the same.
*/

// Solution
let isIsomorphic = function(s, t) {
    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i] = t[i]];
        tMap[t[i]] = s[i];
    }

    for (let i = 0; i < s.length; i++) {
        if(sMap[s[i]] !== t[i]) {
            return false;
        }
        if(tMap[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic('egg', 'add'))