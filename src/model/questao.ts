import embaralhar from "../functions/embaralhar"
import RespostaModel from "./resposta"

export default class QuestaoModel{
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean

    constructor(id: number, enunciado: string, respostas: RespostaModel[], acertou = false){
        this.#id = id
        this.#enunciado = enunciado
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id(){
        return this.#id
    }

    get enunciado(){
        return this.#enunciado
    }

    get respostas(){
        return this.#respostas
    }

    get acertou(){
        return this.#acertou
    }

    get respondida(): boolean{
        for (let resposta of this.#respostas) {
            if(resposta.revelada)
                return true
        }
        return false
    }

    get naoRespondida(): boolean{
        return !this.respondida
    }

    /**
     * Altera a lista de respostas retornando uma nova lista contendo as respostas certa e selecionada reveladas de acorto com o indice da resposta selecionada passado como parâmetro 
     * @param indice Indice da resposta selecionada
     * @returns Uma nova instancia de QuestaoModel contendo a nova lista de respostas :RespostasModel modificada
     */
    responderCom(indice: number): QuestaoModel{
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resp, i) => {
            const respSelecionada =  indice === i
            return respSelecionada || resp.certa ?  resp.revelar() : resp
        })
        return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
    }

    /**
     * Embaralha os valores contidos na lista de resposta do objeto QuestaoModel
     * @returns Novo objeto do tipo QuestaoModel contendo os mesmos atributos,
     * mas com a ordem da lista de respostas embaralhada.
     */
    embaralharRespostas(): QuestaoModel{
        let respostasEmbaralhadas = embaralhar(this.#respostas)
        return new QuestaoModel(
            this.#id,
            this.#enunciado,
            respostasEmbaralhadas,
            this.#acertou
        )
    }

    /**
     * Transforma o objeto QuestaoModel em um objeto literal. 
     * @returns Objeto literal.
     */
    paraObjeto(){
        const respostas = this.#respostas.map(r => r.paraObjeto())
        return {
            id: this.#id,
            enunciado: this.#enunciado, 
            respostas: embaralhar(respostas),
            acertou: this.#acertou,
        }
    }

    /**
     * Converte um objeto literal para um objeto QuestaoModel
     * @param questao Objeto literal a ser convertido para um objeto QuestaoModel
     * @returns Objeto QuestaoModel resultado da conversão
     */
    static objetoParaQuestaoModel(questao: QuestaoModel): QuestaoModel{
        const respostas = questao.respostas.map(resp => {
            return RespostaModel.objetoParaRespostaModel(resp)
        })

        return new QuestaoModel(
            questao.id,
            questao.enunciado,
            respostas,
            questao.acertou
        )
    }
}