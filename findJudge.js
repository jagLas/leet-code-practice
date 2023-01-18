/*
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

var findJudge = function(n, trust) {
    if (n === 1) {
        return 1;
    }

    //make a set of people who trust someone else called trusting
    const trusting = new Set();

    //make an objected called trusted that tracks how many people trust them
    const trusted = {};

    //iterate through trust connections
    trust.forEach(connection => {
        //check if person doing trusting is already in the set
        const trustor = connection[0];
        if (!trusting.has(trustor)) {
            //if not, add them to set
            trusting.add(trustor);
        }

        //check if person being trusted is in trusted obj
        const trustee = connection[1];
        if (!trusted[trustee]) {
            //if not, create it
            trusted[trustee] = 0;
        }       

        //incremement trusted persons trust count
        trusted[trustee]++;
    })

    //find the inverse of trusting set to see who trusts nobody
    const noTrust = [];
    for (let i = 1; i <= n; i++) {
        if(!trusting.has(i)) {
            noTrust.push(i);
        }
    }

    //of the people that trust nobodymake, 
    for (let i = 0; i < noTrust.length; i++) {
        const judge = noTrust[i];
        // check if everybody trusts them
        if (trusted[judge] === n - 1) {
            //return that person
            return judge;
        }
    }

    
    //otherwise, return -1
    return -1;
};

// n = 2;
// trust = [[1,2]]
// console.log(findJudge(n, trust));

// n = 3;
// trust = [[1,3], [2,3]]
// console.log(findJudge(n, trust));

// n = 3;
// trust = [[1,3],[2,3],[3,1]]
// console.log(findJudge(n, trust));