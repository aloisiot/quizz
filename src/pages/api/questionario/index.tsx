import questoes from "../../../data/bancoDeQuestoes";
import embaralhar from "../../../functions/embaralhar";

export default function questionario(req, resp) {
    const questoesEmbaralhadas = embaralhar(questoes.map( q => q.id))
    resp.status(200).json(questoesEmbaralhadas)
}