import PropTypes from "prop-types";

// This component should leverage codec-components to render a form

function ContractNode({ data }) {
  return (
    <div className="p-4 bg-gray-100">
      <h4 className="w-full text-black text-center">{data.label}</h4>
    </div>
  );
}

ContractNode.propTypes = {
  data: PropTypes.object,
};

export default ContractNode;
