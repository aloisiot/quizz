import { useState } from "react";
import Botao from "../components/Botao";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import styles from "../styles/Home.module.css"

const questaoTest = new QuestaoModel(1, "enunciado ficticio", [
  RespostaModel.errada("Azul"),
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Amarelo"),
  RespostaModel.certa("Branco"),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoTest)

  const tempoEsgotado = () => {
    if(questao.naoRespondida){
        setQuestao(questao.responderCom(-1))
    }
}

  const respostaFornecida = (indice: number) => {
    setQuestao(questao.responderCom(indice))
  }

  return (
    <div className={styles.home}>
      <Questao 
        valor={questao}
        tempoParaResponder={8}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
      />
      <Botao
        texto="Proxima"
        href="/resultado"
      />
    </div>
  )
}
