/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
//use that graph to traverse and find the shortest path
//use breadthSearch and return when target found.
var ladderLength = function(beginWord, endWord, wordList) {
    //generate a hash table for node relations
    const graph = makeGraph(wordList.concat(beginWord));

    //initiate a queue for breadth search
    const queue = [[beginWord]];
    //create a set for visited nodes
    visited = new Set([beginWord]);

    //while the queue has things in it
    while (queue) {
        //dequeue the next path
        let currentPath = queue.shift();

        //if the next path is undefined, it means there were no neighbors left to explore
        if (currentPath === undefined) {
            //return since it cannot be found
            return 0;
        }

        //identify the last word in the path
        let currentWord = currentPath[currentPath.length - 1];

        //check if it is the target word, if so return the length of the path
        if (currentWord === endWord) {
            return currentPath.length;
        }

        //retrieve neighbors from hash
        const neighbors = graph[currentWord];

        //check if each neighbor has been visited
        neighbors.forEach(neighbor => {
            //if not
            if(!visited.has(neighbor)) {
                //add it to visited list
                visited.add(neighbor);
                //add it to the queue
                queue.push(currentPath.concat(neighbor));
            }
        })
    }
};

//make a function that creates a graph of one word to the other words
function makeGraph(wordList) {
    //identify word length of words in list
    const wordLengths = wordList[0].length;
    //initialize object
    const graph = {};
    //initialize an array for each word in list
    wordList.forEach(word => {
        graph[word] = [];
    })

    //iterate through all combinations of words
    for (let i = 0; i < wordList.length - 1; i++) {
        const word1 = wordList[i];
        for (let j = i + 1; j < wordList.length; j++) {
            const word2 = wordList[j];

            //got character by character through paris of words and increment each time char is same
            let sameLetterCount = 0;
            for (let k = 0; k < wordLengths; k++){
                if (word1.charCodeAt(k) === word2.charCodeAt(k)) {
                    sameLetterCount++;
                }
            }

            //if count is 1 less than word length, then it differs by 1 letter
            if (sameLetterCount === wordLengths - 1) {
                //add both words to hash table
                graph[word1].push(word2)
                graph[word2].push(word1)
            }
        }
    }
    
    return graph;
}




// beginWord = 'hit'
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log","cog"]
// console.log(ladderLength(beginWord, endWord, wordList))

beginWord = 'hit'
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
console.log(ladderLength(beginWord, endWord, wordList))
