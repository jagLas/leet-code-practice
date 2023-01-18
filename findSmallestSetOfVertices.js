var findSmallestSetOfVertices = function(n, edges) {
    const vertices = [];
    //repeat algorithm until all edges have been removed
    while (edges.length) {

        //finds the node which hits the highest amount of connected nodes
        let highestCount = -Infinity;
        let highestNode;
        for (let i = 0; i < n; i++) {
            let nodeCount = depthSearchCount(i, edges);
            if (nodeCount > highestCount) {
                highestCount = nodeCount;
                highestNode = i;
            }
        }

        //add highest node to vertices list
        vertices.push(highestNode);

        //remove all edges visited from largest set
        edges = depthSearchDelete(highestNode, edges);
    }

    return vertices;
};

function depthSearchDelete (node, edges) {
    const stack = [node];
    const visited = new Set([node]);

    while(stack.length) {
        const currentNode = stack.pop();

        let neighbors = findNeighbors (currentNode, edges);
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
                visited.add(neighbor);
            }
        })

        //remove all edges from the node from the array
        edges = edges.filter((edge) => {
            if (edge[0] !== currentNode) {
                return edge;
            }
        })
    }

    return edges;
}

function depthSearchCount (node, edges) {
    const stack = [node];
    const visited = new Set([node]);
    let count = 0;

    while(stack.length) {
        const currentNode = stack.pop();

        count++;

        let neighbors = findNeighbors (currentNode, edges);
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
                visited.add(neighbor);
            }
        })
    }

    return count;
}

function findNeighbors (node, edges) {
    const neigbors = [];
    edges.forEach(edge => {
        if (edge[0] === node) {
            neigbors.push(edge[1]);
        }
    })
    return neigbors;
}

let n = 6
let edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
console.log(findSmallestSetOfVertices(n, edges));

n=5
edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
// console.log(depthSearchDelete(3, edges))
// console.log(findSmallestSetOfVertices(n, edges));