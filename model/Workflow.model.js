
const mongoose = require('mongoose');



const workflowSchema = new mongoose.Schema({
  saveduser: {
    type: String,
    required: true,
  },
  savedNodes: [{
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
        default: 'New Node' 
      },
      parentId: {
        type: String,
        default: '0' 
      }
    },
    positionAbsolute:{ 
      x: {
        type: Number,
        default: 0 
      },
      y: {
        type: Number,
        default: 0 
      }
    },
    selected:{
      type:Boolean,
      default:false
    },
    dragging:{
      type:Boolean,
      default:false
    },
    height:{
      type:Number,
      default:40
    },
    width: {
      type: Number,
      default: 150 
    }
  }],
  savedEdges: [{
    id: String,
    source: {
      type: String,
      default: '0' 
    },
    target: {
      type: String,
      default: '35' 
    },
    label: {
      type: String,
      default: ''
    },
    labelBgBorderRadius: {
      type: Number,
      default: 4
    },
    labelBgPadding: {
      type: [Number],
      default: [8, 4]
    },
    labelBgStyle: {
      type: {
        color: String,
        fill: String,
        fillOpacity: Number
      },
      default: {
        color: "#fff",
        fill: "#FFCC00",
        fillOpacity: 0.7
      }
    }
  }],
  userId: {
    type: String,
    required:true
  },
});


const Workflow = mongoose.model('Workflow', workflowSchema);

module.exports = {Workflow};
