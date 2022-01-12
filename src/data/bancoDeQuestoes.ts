import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a doença de Chagas?', [
        RespostaModel.errada("Abelha"),
        RespostaModel.errada("Pulga"),
        RespostaModel.errada("Joaninha"),
        RespostaModel.certa("Barata"),
    ]),
    new QuestaoModel(307, 'Qual fruta é conhecida no nordeste como "Jerimum"?', [
        RespostaModel.errada("Cajú"),
        RespostaModel.errada("Côco"),
        RespostaModel.errada("Batata"),
        RespostaModel.certa("Abóbora"),
    ]),
]

export default questoes