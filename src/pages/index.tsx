import { useEffect, useState } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import { useRouter } from "next/router";
import Wellcome from "../components/Wellcome";

export default function Home() {
  const [idsQuestoes, setIdsQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(null)
  const [acertos, setAcertos] = useState<number>(0)
  const [respondidas, setRespondidas] = useState<number>(0)
  const [comecar, setComecar] = useState<boolean>(false)
  const router = useRouter()

  async function carregarIdQuestoes(){
    const resp = await fetch(`${window.location.origin}/api/questionario`)
    const ids = await resp.json()
    setIdsQuestoes(ids)
  }

  async function carregarQuestao(idQuestao: number){
    const resp = await fetch(`${window.location.origin}/api/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.objetoParaQuestaoModel(json)
    setQuestao(novaQuestao)
  }

  function questaoRespondida (questaoRespondida: QuestaoModel){
    setQuestao(questaoRespondida)
    setRespondidas(respondidas + 1)

    if(questaoRespondida.acertou)
      setAcertos(acertos + 1)
  }

  function idProximaQuestao() {
    if(questao){
      const proximoIndice = idsQuestoes.indexOf(questao.id) +1
      return idsQuestoes[proximoIndice]
    }
  }

  function irParaProximaQuestao(proximoId: number){
    carregarQuestao(proximoId)
  }

  function finalizar(){
    router.push({
      pathname: "/resultado",
      query: {
        respondidas,
        acertos,
        total: idsQuestoes.length || 0
      }
    })
  }

  function irProximoPasso (){
    const proximoId = idProximaQuestao()
    proximoId ? irParaProximaQuestao(proximoId) : finalizar()
  }

  useEffect(() => {
    carregarIdQuestoes()
  },[])

  useEffect(() => {
    if(idsQuestoes.length > 0)
      carregarQuestao(idsQuestoes[0])
  },[idsQuestoes])

  return (
    <>
      {comecar ? (
        questao &&
          <Questionario
            questao={questao}
            ultima={idProximaQuestao() === undefined}
            questaoRespondida={questaoRespondida}
            irProximoPasso={irProximoPasso}
          />
      ) : <Wellcome comecar={() => setComecar(true)}/>}
    </>
  )
}
