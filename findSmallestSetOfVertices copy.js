var findSmallestSetOfVertices = function(n, edges) {
    const edgesObj = sortConnections(edges);
    const vertices = [];
    //repeat algorithm until all edges have been removed
    while (edgesObj.length > 0) {

        //finds the node which hits the highest amount of connected nodes
        let highestCount = -Infinity;
        let highestNode;
        for (let i = 0; i < n; i++) {
            let nodeCount = depthSearchCount(i, edgesObj);
            if (nodeCount > highestCount) {
                highestCount = nodeCount;
                highestNode = i;
            }
        }

        //add highest node to vertices list
        vertices.push(highestNode);

        //remove all edges visited from largest set
        edges = depthSearchDelete(highestNode, edgesObj);
    }

    return vertices;
};

function depthSearchDelete (node, edgesObj) {
    const stack = [node];
    const visited = new Set([node]);

    while(stack.length) {
        const currentNode = stack.pop();

        let neighbors = findNeighbors (currentNode, edgesObj);
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
                visited.add(neighbor);
            }
        })

        //remove all edges from the node from the array
        if (edgesObj[currentNode]){
            delete edgesObj[currentNode]
            edgesObj.length--;
        }

    }

    return edgesObj;
}

function depthSearchCount (node, edgesObj) {
    const stack = [node];
    const visited = new Set([node]);
    let count = 0;

    while(stack.length) {
        const currentNode = stack.pop();

        count++;

        let neighbors = findNeighbors (currentNode, edgesObj);

        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
                visited.add(neighbor);
            }
        })
    }

    return count;
}

function findNeighbors (node, edgesObj) {
    if (!edgesObj[node]) {
        return [];
    }
    return edgesObj[node];
}

function sortConnections (edges) {
    const edgesObj = {'length': 0};
    edges.forEach(edge => {
        if (!edgesObj[edge[0]]) {
            edgesObj[edge[0]] = [];
            edgesObj.length++;
        }

        edgesObj[edge[0]].push(edge[1])
    })

    return edgesObj
}

let n = 6
let edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
let edgesObj = { '0': [ 1, 2 ], '2': [ 5 ], '3': [ 4 ], '4': [ 2 ] }

// console.log(findNeighbors(0, edgesObj))

// console.log(depthSearchCount(6, edgesObj));
console.log(findSmallestSetOfVertices(n, edges));

n=5
edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
// console.log(depthSearchDelete(3, edges))
console.log(findSmallestSetOfVertices(n, edges));