

//Dependencies
const ShortUrl = require('./model')
const { generate } = require('shortid')

const hostName = process.env.HOSTNAME || 'http://localhost:8000/'

const lib = {};


lib.createUrl = async (req,res) => {
    let { longUrl } = req.body;
    if(!longUrl) return res.sendStatus(400)
    try{
        let shortUrl = await ShortUrl.findOne({longUrl})
        if(shortUrl) return res.status(200).send(shortUrl)
        let shortId = generate();
        ShortUrl.create({
            shortId,
            longUrl,
            shortUrl : hostName + shortId
        }).then( data => {
            return res.status(200).send(data)
        })
        .catch(e => {
            console.log(e)
            return res.sendStatus(500)
        })
    }catch(e){
        console.log(e)
        return res.sendStatus(500)
    }
}


lib.serveUrl = (req,res) => {
    let { shortId } = req.params
    if(!shortId) return res.sendStatus(400)
    ShortUrl.findOne({shortId}).then(shortUrl => {
        if(!shortUrl) return res.sendStatus(404)
        res.redirect(shortUrl.longUrl)
    })
    .catch( e => {
        console.log(e)
        return res.sendStatus(500)
    })
}





module.exports =  lib