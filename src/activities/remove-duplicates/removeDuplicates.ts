import { Request, Response } from "express"


export default class RemoveDupl{
 
    //Recebe uma string extraída do POST como parâmetro
  static removeDuplicates(word: string){
    //Só permite valores únicos com Set e converte em uma string
    return [...new Set(word)].join("")
}

    //Envia uma string com POST e ela será extraída
    static async postWord(req: Request, res: Response){
    const {word} = req.body

    //Condição para saber se o tipo recebido é uma string ou palavra
    if(!word || typeof word !== "string"){
        return res.status(400).json({msg: "Por favor, insira uma palavra válida!"})
    }
    
    
    //String 
    const result = RemoveDupl.removeDuplicates(word)
    res.json({Original: word,
        semDuplicatas: result
    })

}
 
}