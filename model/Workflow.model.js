
const mongoose = require('mongoose');



const workflowSchema = new mongoose.Schema({
  saveduser: {
    type: String,
    required: true,
  },
  nodes: [{
    id: String,
    type: {
      type: String,
      default: 'default' // Default node type
    },
    position: {
      x: {
        type: Number,
        default: 0 // Default x position
      },
      y: {
        type: Number,
        default: 0 // Default y position
      }
    },
    data: {
      label: {
        type: String,
        default: 'New Node' // Default node label
      },
      parentId: {
        type: String,
        default: '0' // Default parent ID
      }
    },
    width: {
      type: Number,
      default: 150 // Default node width
    }
  }],
  edges: [{
    id: String,
    source: {
      type: String,
      default: '0' // Default source node ID
    },
    target: {
      type: String,
      default: '0' // Default target node ID
    },
    label: {
      type: String,
      default: '' // Default edge label
    }
  }]
});


const Workflow = mongoose.model('Workflow', workflowSchema);

module.exports = {Workflow};
