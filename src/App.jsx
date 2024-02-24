import { useMemo } from "react";
import ReactFlow, { MiniMap, Controls, Background, Panel } from "reactflow";
import { shallow } from "zustand/shallow";

import "reactflow/dist/style.css";
import "./App.css";
import FunctionCallNode from "./FunctionCallNode";
import RevertNode from "./RevertNode";
import ContractNode from "./ContractNode";
import TransactionNode from "./TransactionNode";
import ReturnNode from "./ReturnNode";
import DashedEdge from "./DashedEdge";
import useStore from "./store";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export default function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    selector,
    shallow
  );

  const nodeTypes = useMemo(
    () => ({
      functionCall: FunctionCallNode,
      revert: RevertNode,
      contract: ContractNode,
      transaction: TransactionNode,
      return: ReturnNode,
    }),
    []
  );

  const edgeTypes = useMemo(() => ({ dashed: DashedEdge }), []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <MiniMap />
        <Panel position="bottom-center" className="panel-wide">
          <h3>Participants</h3>
          <table>
            <tr>
              <th>Alias</th>
              <th>Contract Name</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>EOA</td>
              <td></td>
              <td>0x89455D7DA74AB68e95223838755755dFF38e5BDB</td>
            </tr>
            <tr>
              <td>Entry_01</td>
              <td>Entry</td>
              <td>0xF374bc9Efb4179bA2aC895d261d9bD51778e0FD7</td>
            </tr>
            <tr>
              <td>First_01</td>
              <td>First</td>
              <td>0xcEeB76d79a30422F61b69EeceeBfD2aA970D75dD</td>
            </tr>
            <tr>
              <td>Second_01</td>
              <td>Second</td>
              <td>0xE14CCF5f73cAD1bF35BB270634C4b9A55579282a</td>
            </tr>
          </table>
        </Panel>
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
