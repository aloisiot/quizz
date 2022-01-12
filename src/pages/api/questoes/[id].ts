import questoes from '../../../data/bancoDeQuestoes'

export default function getQuestoes(req, resp){
    const idSelecionada = +req.query.id
    let resultado = questoes.filter((q) => q.id === idSelecionada)
    
    if(resultado.length === 1){
        resp.status(200).json(resultado[0].paraObjeto())
    } else {
        resp.status(204).send()
    }
}