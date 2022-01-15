import styles from "../styles/Questionario.module.css"
import Questao from "./Questao";
import QuestaoModel from "../model/questao";
import Botao from "./Botao";

interface QuestionarioProps{
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps){
    
    const respostaFornecida = (indice: number) => {
        if(props.questao.naoRespondida){
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }
    
    return (
        <div className={styles.questionario}>
            {props.questao ? (
                <Questao
                    valor={props.questao}
                    tempoParaResponder={8}
                    tempoEsgotado={props.irProximoPasso}
                    respostaFornecida={respostaFornecida} />
                ) : false
            }
            <Botao
                texto={props.ultima ? "Finalizar" : "Proxima"} 
                onClick={props.irProximoPasso}/>
        </div>
    )
}