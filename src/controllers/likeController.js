const Dev = require('../models/Dev')

module.exports = {
    async store(req,res){
        const {user} = req.headers
        const {devId} = req.params

        const loggedDev = await Dev.findById(user)
        const targetDev = await Dev.findById(devId)

        if(!targetDev) {
            res.status(400).json({error: 'dev not exist'})
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log('Match')
        }
        
        loggedDev.likes.push(targetDev._id)

        await loggedDev.save();

        res.json(loggedDev)
    }
}