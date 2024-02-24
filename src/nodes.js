export default [
  {
    id: "1",
    position: { x: 48, y: 182 },
    data: { label: "EOA" },
    type: "input",
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "2",
    position: { x: 248, y: 48 },
    data: { label: "Entry_01" },
    style: {
      backgroundColor: "rgb(243 244 246)",
      width: 300,
      height: 288,
    },
    targetPosition: "left",
    sourcePosition: "right",
    connectable: false,
    type: "contract",
  },
  {
    id: "2a",
    position: { x: 30, y: 60 },
    data: {
      label: "test_a_catch",
      inputs: [
        {
          name: "x",
          label: "x",
          value: 3,
          type: "uint",
        },
        {
          name: "value",
          label: "value (gwei)",
          value: 0.0,
          type: "uint",
        },
      ],
    },
    parentNode: "2",
    targetPosition: "left",
    sourcePosition: "right",
    type: "transaction",
    style: {
      width: 240,
    },
  },
  {
    id: "3",
    position: { x: 598, y: 48 },
    data: { label: "First_01" },
    style: {
      backgroundColor: "rgb(243 244 246)",
      width: 300,
      height: 650,
    },
    targetPosition: "left",
    sourcePosition: "right",
    connectable: false,
    type: "contract",
  },
  {
    id: "3a",
    position: { x: 30, y: 60 },
    data: {
      label: "catch_revert",
      inputs: [
        {
          name: "x",
          label: "x",
          value: 3,
          type: "uint",
        },
        {
          name: "value",
          label: "value (gwei)",
          value: 0.0,
          type: "uint",
        },
      ],
    },
    parentNode: "3",
    targetPosition: "left",
    sourcePosition: "right",
    type: "functionCall",
    style: {
      width: 240,
    },
  },
  {
    id: "3b",
    position: { x: 30, y: 276 },
    data: {
      label: "self_inc",
      inputs: [
        {
          name: "x",
          label: "x",
          value: 3,
          type: "uint",
        },
        {
          name: "value",
          label: "value (gwei)",
          value: 0.0,
          type: "uint",
        },
      ],
    },
    parentNode: "3",
    targetPosition: "right",
    sourcePosition: "bottom",
    type: "functionCall",
    style: {
      width: 240,
    },
  },
  {
    id: "3c",
    position: { x: 30, y: 500 },
    data: {
      label: "RETURN",
      inputs: [
        {
          name: "",
          label: "",
          value: 4,
          type: "uint",
        },
      ],
    },
    parentNode: "3",
    targetPosition: "top",
    sourcePosition: "left",
    type: "return",
    style: {
      width: 240,
    },
  },
  {
    id: "4",
    position: { x: 948, y: 48 },
    data: { label: "Second_01" },
    style: {
      backgroundColor: "rgb(243 244 246)",
      width: 300,
      height: 438,
    },
    targetPosition: "left",
    sourcePosition: "right",
    connectable: false,
    type: "contract",
  },
  {
    id: "4a",
    position: { x: 30, y: 60 },
    data: {
      label: "double_revert",
      inputs: [
        {
          name: "x",
          label: "x",
          value: 3,
          type: "uint",
        },
        {
          name: "value",
          label: "value (gwei)",
          value: 0.0,
          type: "uint",
        },
      ],
    },
    parentNode: "4",
    targetPosition: "left",
    sourcePosition: "bottom",
    type: "functionCall",
    style: {
      width: 240,
    },
  },
  {
    id: "4b",
    position: { x: 30, y: 269 },
    data: {
      reason: "Rats! Conditions are imperfect I'm a bit sleepy...",
    },
    parentNode: "4",
    targetPosition: "top",
    sourcePosition: "left",
    type: "revert",
    style: {
      width: 240,
    },
  },
];
