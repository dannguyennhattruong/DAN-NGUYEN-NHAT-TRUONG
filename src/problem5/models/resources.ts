import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ResourceSchema = new Schema({
    resourceName: {
        type: String,
        required: 'resourceName is require!'
    },
    resourceDescription: {
        type: String,
        required: 'resourceDescription is require!'
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});