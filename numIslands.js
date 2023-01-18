/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Create a visited set to store visited nodes
    const visited = new Set();
    // Initialize count to 0
    let count = 0;
    // Iterate through all indices in matrix
    grid.forEach((subArray, row) => {
        subArray.forEach((value, col) => {
        // If an index contains a 1 and has not been visited, 
        // console.log(!visited.has([row, col].toString()))
        // console.log(value === 1)
        if (value == 1 && !visited.has([row, col].toString())) {
            // increment island count and start traversing neighbors
            // DO THE THING (increment island count by 1)
            count++;

            // Initialize a stack with current index  
            const stack = [[row, col]];
            // Add stringified version of current index to the visited set
            visited.add([row, col].toString());
            // While stack contains elements
            while (stack.length) {
            // Pop element from stack
            const currentNode = stack.pop();
            // Get valid neighbors of current element
            const neigbors = getNeighbors(currentNode[0], currentNode[1], grid);
            // Iterate over neigbors
            neigbors.forEach(neighbor => {
                // If neighbor has not been visited
                if (!visited.has(neighbor.toString())) {
                // Add neighbor to stack
                stack.push(neighbor);
                // Mark neighbor as visited
                visited.add(neighbor.toString())
                }  
            })
            }
        }
        })

    })

    // Return island count
    return count;

};
  
function getNeighbors(i, j, graph) {
    let height = graph.length;
    let width = graph[0].length;

    const neighbors = [];
    // Up
    if (i > 0 && graph[i - 1][j] == 1){
        neighbors.push([i - 1, j]);
    }

    // Down
    if (i < height - 1 && graph[i + 1][j] == 1) {
        neighbors.push([i + 1, j]);
    }
    // Left
    if (j > 0 && graph[i][j - 1] == 1) {
        neighbors.push([i, j - 1]);
    }

    // Right

    if (j < width - 1 && graph[i][j + 1] == 1) {
        neighbors.push([i, j + 1]);
    }

    return neighbors;
}

grid =
[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

console.log(numIslands(grid))