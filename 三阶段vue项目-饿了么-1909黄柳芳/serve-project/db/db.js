const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'fangzhang';
/*封装增删改查*/


const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            err ? reject(err) : resolve(client);
            console.log("Connected successfully to server");
        });
    })
}

//查
const find = (ele, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(ele);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}
//增
const insert = (ele, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(ele);
        collection.insertMany(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}
//改
const update = (ele, query1, query2) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(ele);
        collection.updateOne(query1, {
            $set: query2
        }, function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}
//删
const remove = (ele, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(ele);
        collection.deleteOne(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}

//导出方法
module.exports = {
    find,
    insert,
    update,
    remove
}