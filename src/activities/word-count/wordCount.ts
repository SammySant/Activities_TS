import { Request, Response } from "express";

export default class WordCount{

static wordCount(phrase: string){
    phrase = phrase.replace(/[^\w\s]/gi, '').trim(); // Método para ignorar pontuações
    if (phrase === '') {
        return [];
      }
    
    let arrayString = phrase.split(/\s+/); //Serve para dividir a frase em um ou mais espaços consecutivos

    return arrayString;
}

static countRepeatedWords(arrayString: string[]) {
    // Tipagem explícita: o índice é uma string e o valor é um número
    const wordCountMap: { [key: string]: number } = {};
  
    arrayString.forEach(word => {
      // Remove espaços em branco extras e caracteres especiais (exclui letras e números)
      word = word.toLowerCase();


      // Ignora palavras vazias após limpeza
      if (word) {
        if (wordCountMap[word]) {
          wordCountMap[word]++;
        } else {
          wordCountMap[word] = 1;
        }
      }
    });
    return wordCountMap;
}

static postWord(req: Request, res: Response){
    const { phrase } = req.body;

    const result = WordCount.wordCount(phrase)
    const repeatedResult = WordCount.countRepeatedWords(result)

    res.json({ repeatedResult });
}
}
