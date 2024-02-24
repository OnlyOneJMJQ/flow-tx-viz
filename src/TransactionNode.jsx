import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";

// This component should leverage codec-components to render a form

function TransactionNode({ targetPosition, sourcePosition, data }) {
  return (
    <div className="bg-white p-4 rounded border border-black">
      <Handle type="target" position={targetPosition || Position.Left} />
      <div className="flex mb-2">
        <h4>{data.label}</h4>
        <p className="bg-green-200 text-green-700 py-0.5 px-1.5 rounded-full ml-auto text-sm">
          TX
        </p>
      </div>
      {data.inputs.map((input, index) => (
        <>
          <label key={"label-" + index} htmlFor={input.name}>
            {input.label}: {input.type}
          </label>
          <input
            key={"input-" + index}
            id={input.name}
            name={input.name}
            type={input.type}
            value={input.value}
            className="nodrag bg-white border border-gray-400 rounded-sm p-1 w-full mb-2"
          />
        </>
      ))}
      <Handle type="source" position={sourcePosition || Position.Right} />
    </div>
  );
}

TransactionNode.propTypes = {
  targetPosition: PropTypes.string,
  sourcePosition: PropTypes.string,
  data: PropTypes.object,
};

export default TransactionNode;
