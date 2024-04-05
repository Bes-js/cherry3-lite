/**
 * cherry3-lite definitions
 */


/**
 * @module Cherry
 * @description This module is a simple key-value database
 * @example const db = require('cherry3');
 * @example const db = require('cherry3').default;
 * @example const { set, get, fetch, delete, has, add, sub, inc, dec, all, fetchAll, push, pull } = require('cherry3');
 * @async
 */
declare module 'cherry3-lite' {
    
    export type ValueData = string | object | number | null | boolean | bigint | symbol | any[];

    
    /**
     * @type {String}
     * @description This is the version of the package
     * @example console.log(db.version);
     * @returns {String}
     */
    const version: string;

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
    function fetch(key: string): Promise<ValueData | null>;

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
    function get(key: string): Promise<ValueData | null>;

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
    function set(key: string, value: ValueData): Promise<ValueData | null>;

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
    function add(key: string, value: number): Promise<number>;

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
    function sub(key: string, value: number): Promise<number>;

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
    function inc(key: string, value: number): Promise<number>;

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
    function dec(key: string, value: number): Promise<number>;

     /**
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
    function all(options?:{$limit?:number,$skip?:number}): Promise<{id:number,key:string,value:ValueData,createdAt:Date,updatedAt:Date}[]>;

    /**
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
    function fetchAll(options?:{$limit?:number,$skip?:number}): Promise<{id:number,key:string,value:ValueData,createdAt:Date,updatedAt:Date}[]>;

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
    function has(key: string): Promise<boolean>;

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
    function deleteAs(key: string): Promise<boolean>;

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
    function type(key: string): Promise<string>;

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
    function push(key: string, value: ValueData): Promise<any[]>;

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
    function pull(key: string, value: ValueData): Promise<any[]>;
   


   /**
    * @namespace Cherry
    * @description This module is a simple key-value database
    * @example const db = require('cherry3');
    * @exports set
    * @exports get
    * @exports fetch
    * @exports delete
    * @exports has
    * @exports type
    * @exports add
    * @exports sub
    * @exports inc
    * @exports dec
    * @exports all
    * @exports fetchAll
    * @exports push
    * @exports pull
    * @exports version
    */
    export {
       set,
       get,
       fetch,
       deleteAs as delete,
       has,
       type,
       add,
       sub,
       inc,
       dec,
       all,
       fetchAll,
       push,
       pull,
       version
    }

}