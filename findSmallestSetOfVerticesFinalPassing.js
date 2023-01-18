var findSmallestSetOfVertices = function(n, edges) {
    const pointedVertices = new Set();
    edges.forEach(edge => {
        const nextNode = edge[1];
        if (!pointedVertices.has(nextNode)) {
            pointedVertices.add(nextNode);
        }
    })

    const unpointedVertices = [];
    for (let i = 0; i < n; i++) {
        if (!pointedVertices.has(i)) {
            unpointedVertices.push(i);
        }
    }

    return unpointedVertices;
}


let n = 6
let edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
console.log(findSmallestSetOfVertices(n, edges));

n=5
edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
console.log(findSmallestSetOfVertices(n, edges));