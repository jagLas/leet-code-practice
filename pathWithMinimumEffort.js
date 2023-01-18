/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    
};

function depthSearchEffort (heights) {
    let minEffort = -1;
    //make a stack and put the first node in it as an object with a path, effort, and visited field
    const stack = [{'path': [[0, 0]], 'effort': 0, 'visited': new Set([[0,0]])}];
    while (!stack.length) {
        const current = stack.pop();
        const currentNode = current.path[current.path.length - 1];
        const neighbors = getNeighbors(currentNode[0], currentNode[1]);
        neighbors.forEach(neighbor => {
            if (!current.visited.has(neighbor)) {
                const newObj = {'path': current.path.concat(neighbor), 'effort': Math.abs()} //finish obj
            }
        })
    }
}

function getNeighbors (row, col, heights) {
    const neighbors = []; 
    if (row > 0) {
        neighbors.push([row - 1, col]);
    }

    if (row < heights.length - 1) {
        neighbors.push([row + 1, col]);
    }

    if (col > 0) {
        neighbors.push([row, col - 1]);
    }

    if (col < heights[0].length - 1) {
        neighbors.push([row, col + 1]);
    }

    return neighbors;
}

heights = [[1,2,2],[3,8,2],[5,3,5]];
console.log(getNeighbors(4, 0, heights))