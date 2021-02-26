import express from 'express';

const app = express();

/*
GET => BUSCAR
POST => SALVAR
PUT => ALTERAR
DELETE => DELETAR
PATCH => ALTERAÇÃO ESPECIFICA
*/

//http://localhost:3333/users
app.get('/users', (req, res) => {
    return res.json({
        mensagem: 'Ola Dev'
    })
});

app.post('/', (req, res) => {
    return res.json({
        mensagem: 'Os dados foram salvo com sucesso!!!'
    })
})

app.listen(3333, () => console.log('server is runer'))