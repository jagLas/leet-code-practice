var findSmallestSetOfVertices = function(n, edges) {
    const edgesObj = sortConnections(edges);
    const depthObj = makeDepthObject(n, edgesObj)

    const vertices = [];
    //repeat algorithm until all edges have been removed
    while (edgesObj.length > 0) {

        //finds the node which hits the highest amount of connected nodes
        let highestCount = -Infinity;
        let highestNode;
        for (const node in depthObj) {
            if (depthObj[node] > highestCount) {
                highestCount = depthObj[node];
                highestNode = Number(node);
            }
        }

        //add highest node to vertices list
        vertices.push(highestNode);

        //remove all edges visited from largest set
        edges = depthSearchDelete(highestNode, edgesObj, depthObj);
    }
    

    return vertices;
};

function makeDepthObject (n, edgesObj) {
    depthObj = {};

    for (let i = 0; i < n; i++) {
        depthObj[i] = depthSearchCount(i, edgesObj)
    }

    return depthObj;
}

function depthSearchDelete (node, edgesObj, depthObj) {
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
            delete depthObj[currentNode]
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
console.log(findSmallestSetOfVertices(n, edges));

n=5
edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
// console.log(findSmallestSetOfVertices(n, edges));