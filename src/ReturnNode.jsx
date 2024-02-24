import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";

// This component should leverage codec-components to render a form

function ReturnNode({ targetPosition, sourcePosition, data }) {
  return (
    <div className="bg-white p-4 rounded border border-black">
      <Handle type="target" position={targetPosition || Position.Left} />
      <h4 className="inline-block mb-2 bg-blue-100 text-blue-700 py-0.5 px-1.5 rounded-full ml-auto text-sm">
        RETURN
      </h4>
      <table className="w-full text-left">
        <tr className="bg-gray-200">
          <th className="font-normal">Type</th>
          <th className="font-normal">Name</th>
          <th className="font-normal">Value</th>
        </tr>
        {data.inputs.map((input, index) => (
          <tr key={index} className="font-mono">
            <td>{input.type}</td>
            <td>{input.name}</td>
            <td>{input.value}</td>
          </tr>
        ))}
      </table>
      <Handle type="source" position={sourcePosition || Position.Right} />
    </div>
  );
}

ReturnNode.propTypes = {
  targetPosition: PropTypes.string,
  sourcePosition: PropTypes.string,
  data: PropTypes.object,
};

export default ReturnNode;
