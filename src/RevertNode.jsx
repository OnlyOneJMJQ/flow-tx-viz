import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";

import { ReactComponent as IconX } from "./assets/vector-x.svg";

// This component should leverage codec-components to render a form

function RevertNode({ targetPosition, sourcePosition, data, nodeId }) {
  return (
    <div className="p-4 bg-white rounded border border-black">
      <Handle type="target" position={targetPosition || Position.Left} />
      <div>
        <h4 className="inline-block mb-2 bg-red-100 text-red-700 py-0.5 px-1.5 rounded-full ml-auto text-sm">
          REVERT
        </h4>
        <p>Reason: {data.reason}</p>
      </div>
      <Handle
        type="source"
        position={sourcePosition || Position.Right}
        style={{ background: "none", border: "none" }}
      >
        <IconX
          className={["source"]}
          data-handleid="a"
          data-nodeid={nodeId}
          data-handlepos="right"
          style={{
            position: "absolute",
            top: -3,
            left: -3,
            width: 12,
            height: 12,
          }}
        />
      </Handle>
    </div>
  );
}

RevertNode.propTypes = {
  targetPosition: PropTypes.string,
  sourcePosition: PropTypes.string,
  data: PropTypes.object,
  nodeId: PropTypes.string,
};

export default RevertNode;
