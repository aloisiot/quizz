import styles from "../styles/Resultado.module.css"
import { useRouter } from "next/router"
import Estatistica from "../components/Estatistica"
import Botao from "../components/Botao"

export default function Resultado(){
    const router = useRouter()

    const respondidas = +router.query.respondidas
    const acertos = +router.query.acertos
    const total = +router.query.total

    return (
        <div className={styles.resultado}>
            <h1 className={styles.title}>Resultado Final</h1>
            <div style={{display: "flex"}}>
                <Estatistica
                    texto="perguntas"
                    corFundo="#CE307E"
                    valor={total}/>
                
                <Estatistica
                    texto="respondidas"
                    valor={respondidas}/>
                
                <Estatistica
                    texto="acertos"
                    valor={acertos}
                    corFundo="#30D2AA"/>
            </div>
            <Botao
                href="/" texto="Tente novamente"/>
        </div>
    )
}