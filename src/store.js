import { create } from "zustand";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "reactflow";

import initialNodes from "./nodes";
import initialEdges from "./edges";

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  x: 3,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  updateNodeColor: (nodeId, color) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the changes
          node.data = { ...node.data, color };
        }

        return node;
      }),
    });
  },
  updateXValue: (newValue) => {
    set({
      x: newValue,
    });
  },
}));

export default useStore;
