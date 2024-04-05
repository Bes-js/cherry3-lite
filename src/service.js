const { Model, Schema, Types } = require('cherry3');

/**
 * @name Core
 * @class Core
 * @description Cherry3 Database Model
 * @returns {Model}
 */
const Core = new Model('@core',Schema({
    key: { type: Types.String, required: true },
    value: { type: Types.Object, required: false, default: null},
}),{ $timestamps: true });

module.exports = Core;