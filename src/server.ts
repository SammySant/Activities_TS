import express from 'express';
import routes from './routes';

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(routes)

app.listen(port, () =>{
    console.log(`Servidor executando na porta ${port}`)
})

