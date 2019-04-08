let messages = []
let id = 0



module.exports = {
    createMesh: (req, res) => {
        let {text, time} = req.body
        // console.log('the bod', req.body)

        messages.push({id, text, time})
        id++;
        // console.log(messages)
        res.status(200).send(messages)
    },

    getMesh: (req, res) => {
        res.status(200).send(messages)
    },


    editMesh: (req, res) => {
        let {id} = req.params
        let {text} = req.body
        console.log('edit body', req.body)

        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1, {...messages[index], text})
        res.status(200).send(messages)
    }, 

    deleteMesh: (req, res) => {
        let {id} = req.params

        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1)
        res.status(200).send(messages)
    }
}