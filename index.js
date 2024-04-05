const CherryModel = require('./src/service');
const CherryError = require('cherry3/src/errorHandler');
const package = require('./package.json');



/**
 * @module Cherry
 * @description This module is a simple key-value database
 * @example const db = require('cherry3');
 * @example const db = require('cherry3').default;
 * @example const { set, get, fetch, delete, has, add, sub, inc, dec, all, fetchAll, push, pull } = require('cherry3');
 * @async
 */

module.exports = {

    /**
     * @type {String}
     * @description This is the version of the package
     * @example console.log(db.version);
     * @returns {String}
     */
    version: package.version,



    /**
     * @param {String} key
     * @param {Any} value
     * @returns {Promise<Any>}
     * @async
     * @description This function sets a value to a key
     * @example await db.set('test','hello world');
     * @example db.set('test','hello world').then(data => console.log(data));
     * @example db.set('test','hello world').catch(error => console.log(error));
     * @returns {Promise<Any>}
     */
    set: async function (key, value) {
        if (!key) throw new CherryError('key is required', 'error');
        if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');

        try {
            await CherryModel.findOneAndUpdate({ key: key }, { $set: { value: value } }, { $upsert: true });
            var data = await this.get(key);
            return data;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        };
    },








    /**
     * @param {String} key
     * @returns {Promise<Any>}
     * @async
     * @description This function gets a value from a key
     * @example await db.get('test');
     * @example db.get('test').then(data => console.log(data));
     * @example db.get('test').catch(error => console.log(error));
     * @returns {Promise<Any>}
     */
    get: async function (key) {
        if (!key) throw new CherryError('key is required', 'error');
        if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');

        try {
            var data = await CherryModel.findOne({ key: key });
            if (!data) return null;
            return data.value;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        };
    },









    /**
     * @param {String} key
     * @returns {Promise<Any>}
     * @async
     * @description This function fetches a value from a key
     * @example await db.fetch('test');
     * @example db.fetch('test').then(data => console.log(data));
     * @example db.fetch('test').catch(error => console.log(error));
     * @returns {Promise<Any>}
     */
    fetch: async function (key) {
        if (!key) throw new CherryError('key is required', 'error');
        if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');

        try {
            var data = await this.get(key);
            return data;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }
    },








    /**
     * @param {String} key
     * @returns {Promise<Boolean>}
     * @async
     * @description This function deletes a key
     * @example await db.delete('test');
     * @example db.delete('test').then(data => console.log(data));
     * @example db.delete('test').catch(error => console.log(error));
     * @returns {Promise<Boolean>}
     */
    delete: async function (key) {
        if (!key) throw new CherryError('key is required', 'error');
        if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');

        try {
            var data = await this.has(key);
            if (!data) return false;
            await CherryModel.findOneAndDelete({ key: key });
            return true;
        }
        catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }
    },








    /**
     * @param {String} key
     * @returns {Promise<Boolean>}
     * @async
     * @description This function checks if a key exists
     * @example await db.has('test');
     * @example db.has('test').then(data => console.log(data));
     * @example db.has('test').catch(error => console.log(error));
     * @returns {Promise<Boolean>}
     */
    has: async function (key) {
        if (!key) throw new CherryError('key is required', 'error');
        if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');

        try {
            var data = await this.get(key);
            if (data) return true;
            return false;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }
    },

    /**
     * @param {String} key
     * @returns {Promise<String>}
     * @async
     * @description This function checks the type of a key
     * @example await db.type('test');
     * @example db.type('test').then(data => console.log(data));
     * @example db.type('test').catch(error => console.log(error));
     * @returns {Promise<String>}
     */
    type: async function (key) {
    if (!key) throw new CherryError('key is required', 'error');
    if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');

    try {
        var data = await this.get(key);
        if (!data) return null;
        return typeof data;
    } catch (error) {
        throw new CherryError(`${error.message}`, 'error');
    }

    },





    /**
     * @param {String} key
     * @param {Any} value
     * @returns {Promise<Any>}
     * @async
     * @description This function adds a value to a key
     * @example await db.add('test',5);
     * @example db.add('test',5).then(data => console.log(data));
     * @example db.add('test',5).catch(error => console.log(error));
     * @returns {Promise<Number>}
     */
    add: async function (key, value) {
        if (!key) throw new CherryError('key is required', 'error');
        if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');
        if (!value) throw new CherryError('Value is required', 'error');
        if (typeof value !== 'number') throw new CherryError('Value must be a number', 'error');


        try {
            var data = await this.get(key);
            if (!data) return await this.set(key, value);
            if (typeof data !== 'number') throw new CherryError('Value must be a number', 'error');
            var newValue = data + value;
            await this.set(key, newValue);
            return newValue;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }


    },








    /**
     * @param {String} key
     * @param {Any} value
     * @returns {Promise<Any>}
     * @async
     * @description This function subtracts a value from a key
     * @example await db.sub('test',5);
     * @example db.sub('test',5).then(data => console.log(data));
     * @example db.sub('test',5).catch(error => console.log(error));
     * @returns {Promise<Number>}
     */
    sub: async function (key, value) {
        if (!key) throw new CherryError('key is required', 'error');
        if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');
        if (!value) throw new CherryError('Value is required', 'error');
        if (typeof value !== 'number') throw new CherryError('Value must be a number', 'error');

        try {
            var data = await this.get(key);
            if (!data) return await this.set(key, value);
            if (typeof data !== 'number') throw new CherryError('Value must be a number', 'error');
            var newValue = data - value;
            await this.set(key, newValue);
            return newValue;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }

    },



    /**
     * @param {String} key
     * @param {Any} value
     * @returns {Promise<Any>}
     * @async
     * @description This function increments a value to a key
     * @example await db.inc('test',5);
     * @example db.inc('test',5).then(data => console.log(data));
     * @example db.inc('test',5).catch(error => console.log(error));
     * @returns {Promise<Number>}
     */
    inc: async function (key, value) {
        try {
            var data = await this.add(key, value);
            return data;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }
    },









    /**
     * @param {String} key
     * @param {Any} value
     * @returns {Promise<Any>}
     * @async
     * @description This function decrements a value from a key
     * @example await db.dec('test',5);
     * @example db.dec('test',5).then(data => console.log(data));
     * @example db.dec('test',5).catch(error => console.log(error));
     * @returns {Promise<Number>}
     */
    dec: async function (key, value) {
        try {
            var data = await this.sub(key, value);
            return data;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }
    },






    /**
     * @param {String} key
     * @param {Any} value
     * @returns {Promise<Any>}
     * @async
     * @description This function appends a value to a key
     * @example await db.all()
     * @example db.all().then(data => console.log(data));
     * @example db.all().catch(error => console.log(error));
     * @example db.all({ $limit: 5 }).then(data => console.log(data));
     * @example db.all({ $skip: 5 }).then(data => console.log(data));
     * @example db.all({ $limit: 5, $skip: 5 }).then(data => console.log(data));
     * @returns {Promise<any[]>}
     */
    all: async function ({ $limit = undefined, $skip = undefined } = {}) {
        if ($limit && typeof $limit !== 'number') throw new CherryError('$limit must be a number', 'error');
        if ($skip && typeof $skip !== 'number') throw new CherryError('$skip must be a number', 'error');

        try {
            var data = await CherryModel.allRows({ $limit: $limit, $skip: $skip });
            return data;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }

    },


    /**
     * @param {String} key
     * @param {Any} value
     * @returns {Promise<Any>}
     * @async
     * @description This function fetches all keys
     * @example await db.fetchAll()
     * @example db.fetchAll().then(data => console.log(data));
     * @example db.fetchAll().catch(error => console.log(error));
     * @example db.fetchAll({ $limit: 5 }).then(data => console.log(data));
     * @example db.fetchAll({ $skip: 5 }).then(data => console.log(data));
     * @example db.fetchAll({ $limit: 5, $skip: 5 }).then(data => console.log(data));
     * @returns {Promise<any[]>}
     */
    fetchAll: async function ({ $limit = undefined, $skip = undefined } = {}) {
        if ($limit && typeof $limit !== 'number') throw new CherryError('$limit must be a number', 'error');
        if ($skip && typeof $skip !== 'number') throw new CherryError('$skip must be a number', 'error');

        try {
            var data = await this.all({ $limit: $limit, $skip: $skip });
            return data;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }
    },






    /**
     * @param {String} key
     * @param {Any} value
     * @returns {Promise<Any>}
     * @async
     * @description This function pushes a value to a key
     * @example await db.push('test','hello world');
     * @example db.push('test','hello world').then(data => console.log(data));
     * @example db.push('test','hello world').catch(error => console.log(error));
     * @example db.push('test',['hello','world']).then(data => console.log(data));
     * @returns {Promise<[]>}
     */
    push: async function (key, value) {
        if (!key) throw new CherryError('key is required', 'error');
        if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');
        if (!value) throw new CherryError('Value is required', 'error');

        try {
            var data = await this.get(key);
            if (!data) return await this.set(key, [value]);
            if (!Array.isArray(data)) throw new CherryError('Value must be an array', 'error');

            var valueIsArray = Array.isArray(value) ? true : false;

            if (valueIsArray) {
                for (let i = 0; i < value.length; i++) {
                    data.push(value[i]);
                }
            } else {
                data.push(value);
            }
            await this.set(key, data);
            return data;
        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }

    },








    /**
     * @param {String} key
     * @param {Any} value
     * @returns {Promise<Any>}
     * @async
     * @description This function pulls a value from a key
     * @example await db.pull('test','hello world');
     * @example db.pull('test','hello world').then(data => console.log(data));
     * @example db.pull('test','hello world').catch(error => console.log(error));
     * @example db.pull('test',['hello','world']).then(data => console.log(data));
     * @returns {Promise<[]>}
     */
    pull: async function (key, value) {
        if (!key) throw new CherryError('key is required', 'error');
        if (typeof key !== 'string') throw new CherryError('key must be a string', 'error');
        if (!value) throw new CherryError('Value is required', 'error');

        try {
            var data = await this.get(key);
            if (!data) return null;
            if (!Array.isArray(data)) throw new CherryError('Value must be an array', 'error');

            var valueIsArray = Array.isArray(value) ? true : false;

            if (valueIsArray) {

                for (let i = 0; i < value.length; i++) {
                    await CherryModel.findOneAndUpdate({ key: key }, { $pull: { value: [value[i]] } });
                }
                var newData = await this.get(key);
                return newData;

            } else {

                await CherryModel.findOneAndUpdate({ key: key }, { $pull: { value: [value] } });
                var newData = await this.get(key);
                return newData;

            };

        } catch (error) {
            throw new CherryError(`${error.message}`, 'error');
        }
    },









};
