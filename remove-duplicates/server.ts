import express from "express"
import { Request, Response } from "express"

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())

//Inicia o Servidor
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta: ${PORT}`)
})

    //Recebe uma string extraída do POST como parâmetro
function removeDuplicates(word: string){
    //Só permite valores únicos com Set e converte em uma string
    return [...new Set(word)].join("")
}

    //Envia uma string com POST e ela será extraída
app.post("/remove-duplicates",(req: Request, res: Response)=>{
    const {word} = req.body

    //Condição para saber se o tipo recebido é uma string ou palavra
    if(!word || typeof word !== "string"){
        return res.status(400).json({msg: "Por favor, insira uma palavra válida!"})
    }

    //String 
    const result = removeDuplicates(word)
    res.json({Original: word,
        semDuplicatas: result
    })

})

