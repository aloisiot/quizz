export default class RespostaModel{
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor(valor: string, certa: boolean, revelada = false){
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    get valor(){
        return this.#valor
    }

    get certa(){
        return this.#certa
    }

    get revelada(){
        return this.#revelada
    }

    static certa(valor: string){
        return new RespostaModel(valor, true)
    }

    static errada(valor: string){
        return new RespostaModel(valor, false)
    }

    revelar(): RespostaModel{
        return new RespostaModel(this.#valor, this.#certa, true)
    }

    /**
     * Transforma o objeto RespostaModel em um objeto literal. 
     * @returns Objeto literal.
     */
    paraObjeto(){
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada,
        }
    }

    /**
     * Converte um objeto literal para um objeto RespostaModel
     * @param questao Objeto literal a ser convertido para um objeto RespostaModel
     * @returns Objeto RespostaModel resultado da conversão
     */
    static objetoParaRespostaModel(obj: RespostaModel): RespostaModel{
        return new RespostaModel(obj.valor, obj.certa, obj.revelada)
    }
}