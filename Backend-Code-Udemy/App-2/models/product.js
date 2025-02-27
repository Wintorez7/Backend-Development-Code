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
        fs.readFile(productPath , 'utf-8',(err,data) => {
            if(err){
                console.log(err);
                return;
            }
            const productData = JSON.parse(data);
            productData.push({ id:productData.length + 1 ,name:this.name, price:this.price} )

            fs.writeFile(productPath)
        })
    }

}