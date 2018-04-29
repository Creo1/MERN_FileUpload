const mongoose = require('mongoose');
const Schema = mongoose.Schema

const FileDetailSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    uploader: { type: String, required: true },
    filePath: { type: String, required: true },
    fileName: { type: String, required: true }
},
{
  timestamps: true
}

);

module.exports = mongoose.model('FileDetail', FileDetailSchema);