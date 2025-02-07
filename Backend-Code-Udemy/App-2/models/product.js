const fs = require('fs')

const path = require('path')

const productPath = path.join(__dirname,'../db/product.json')

module.exports = class product{
    constructor(
        name,
        price,
        id
    ){
        this.name = name;
        this.price = price;
        this.id = id;
    }

    async save(){
        fs.readFile(productPath , 'utf-8')
    }

}