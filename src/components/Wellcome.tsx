import styles from "../styles/Wellcome.module.css"
import Botao from "./Botao"

interface WellcomeProps{
    comecar: () => void
}

export default function Wellcome(props: WellcomeProps){
    return (
        <div className={styles.start}>
          <h1>Quizz</h1>
          <Botao texto="Começar" onClick={props.comecar}/>
        </div>
    )
}