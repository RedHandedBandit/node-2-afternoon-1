const express = require('express');
const MeshCtrl = require('./controllers/Message_Controller')

let app = express()
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', MeshCtrl.getMesh)
app.post(`/api/messages`, MeshCtrl.createMesh)
app.put(`/api/messages/:id`, MeshCtrl.editMesh)
app.delete(`/api/messages/:id`, MeshCtrl.deleteMesh)

let port = 3001
app.listen(port, () => {
    console.log(`if you are quiet you can hear port ${port}`)
})