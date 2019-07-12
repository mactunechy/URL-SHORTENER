

const config = require('config')
const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(
        config.get("db_string"),
        {useNewUrlParser : true}
        ).then( () => console.log('Connected to db successfully...'))
        .catch(e => {
            console.error(e)
            process.exit(1)
        })
}
