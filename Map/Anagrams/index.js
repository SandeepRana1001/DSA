var findAnagrams = (s, p) => {
    // if length of s less than length of p
    //  return empty list
    // Endif
    if (s.length < p.length) {
        return [];
    }

    const MAX = 26; //26 represent the english alphabet
    const M = p.length;
    const N = s.length;

    //Create empty array arrP to hold occurance
    // of letters for pattern P
    const arrP = Array(26).fill(0);
    //Create empty array arrS to hold occurance
    // of letters for string S
    const arrS = Array(26).fill(0);

    // Create the base value for UTF-16 code unit
    // for letter 'a' as the start of the alphabet
    const base = "a".charCodeAt(0);

    // This function returns true if contents
    // of arr1[] and arr2[] are same, otherwise
    // false.
    function compare(arrS, arrP) {
        for (let i = 0; i < MAX; i++) {
            if (arrS[i] !== arrP[i]) {
                return false;
            }
        }
        return true;
    }

    // for loop in pattern P & string S and populate
    // array arrP & arrS at the proper index based on
    // the UTF-16 index value up to the length of pattern
    for (let i = 0; i < M; i++) {
        const indexP = p.charCodeAt(i) - base;
        arrP[indexP]++;
        const indexS = s.charCodeAt(i) - base;
        arrS[indexS]++;
    }

    //create and empty array to hold the indexes
    // of the anagrams when found in the string
    let result = [];

    // starting at index M in string create
    // for loop in string S and populate
    // array arrS at the proper index based on
    // the UTF-16 index value
    for (let i = M; i <= N; i++) {
        // if arrS & arrP are equal at the index
        // of the start of the anagram to result[]
        if (compare(arrS, arrP)) {
            result.push(i - M);
        }

        // Remove the first character of previous
        // window
        arrS[s.charCodeAt(i - M) - base]--;

        // Add current character to current
        // window
        arrS[s.charCodeAt(i) - base]++;
    }
    return result;
};