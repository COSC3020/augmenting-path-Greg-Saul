// most of this is my graph search code with a few changes to allow for the strings

function augmentingPath(graph, start, end) {
    let visited = {};
    let path = [];
    if(graph.length == 0){return []}
    else if(start == end){return [start]}
    else if(graph.length == 2){return [start, end];}

    function find(n) {
        path.push(n);
        if (n === end) {
            return 1;
        }
        visited[n] = 1;
        for (let neighbor in graph[n]) {
            if (!visited[neighbor]) {
                if (find(neighbor)) {
                    return 1;
                }
            }
        }
        path.pop();
        return 0;
    }

    if (find(start)) {
        return path;
    } else {
        return [];
    }
}
