import styles from '../styles/Questao.module.css';
import QuestaoModel from "../model/questao";
import Resposta from './Resposta';
import Enunciado from './Enunciado';
import Temporizador from './Temporizador';

const letras = [
    {valor: "A", cor: "#F2C866"},
    {valor: "B", cor: "#F266BA"},
    {valor: "C", cor: "#85D4F2"},
    {valor: "D", cor: "#BCE596"},
]

interface QuestaoProps {
    valor: QuestaoModel
    tempoParaResponder?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps){
    const questao = props.valor

    const renderRespostas = () => {
        return (
            questao.respostas.map((resp, i) => {
                return (
                    <Resposta
                        key={i}
                        indice={i}
                        valor={resp}
                        letra={letras[i].valor}
                        corFundoLetra={letras[i].cor}
                        respostaFornecida={props.respostaFornecida}
                    />
                )
            })
        )
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto="Questão Teste"/>
            <Temporizador
                duracao={props.tempoParaResponder || 10}
                tempoEsgotado={props.tempoEsgotado}
            />
            {renderRespostas()}
        </div>
    )
}