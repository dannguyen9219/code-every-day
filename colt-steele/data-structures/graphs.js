/*
// Graphs //
- Used in any social network, advertising, Netflix, routing algoritms, file system optimizations, Google Maps, recommendations
- A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.
- Collection of Nodes and the connections between those Nodes
- Usually there's no parent or starting Node or root

// Graph Terminology //
- Vertex - A Node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distanced between vertices
- Directed might be instgram followers with celebrities and non celebrities
- Undirected might be Facebook friends
- Weighted might be directions between cities on a map
- Unweighted might be Facebook friends


// Storing Graphs: Adjacency Matrix & Adjacency List //
Matrix - 2D representation to store data with rows and columns

Adjacency List
- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge
- This is what we usually use because most data in the real-world tends to lend itself to sparser and/or larger graphs

Adjacency Matrix
- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

// Undirected Graph //

// Graph Class
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
};

// Adding a Vertex
- Write a method called addVertex, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

g.addVertex("Tokyo")
{
    "Tokyo": []
}

// Adding Vertex Code //
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
};

// Adding Edge //
- This function should accept two vertices, we can call them vertex1 and vertex2
- The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
- The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
- Don't worry about handling errors/invalid vertices

// Adding Edge Code //
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
};

let g = new Graph();

g.addEdge("Tokyo", "Dallas")
g.addEdge("Dallas", "Aspen")

{
  "Tokyo": ["Dallas"],
  "Dallas": ["Tokyo", "Aspen"],
  "Aspen": ["Dallas"]
}

// Removing an Edge //
- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1

// Removing an Edge Code //
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
};

let g = new Graph();

g.removeEdge("Tokyo", "Dallas")

{
  "Tokyo": [],
  "Dallas": ["Aspen"],
  "Aspen": ["Dallas"]
}

// Remove Vertex //
- The function should accept a vertex to remove
- The function should loop as long as there are any other vertices in the adjacency list for that vertex
- Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
- Delete the key in the adjacency list for that vertex

// Removing Vertex Code //
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
};

let g = new Graph();


*/
