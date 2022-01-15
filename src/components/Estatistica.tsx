import styles from "../styles/Estatisticas.module.css"

interface EstatisticaProps{
    valor: any
    texto: string
    corFundo?: string
    corFonte?: string
}

export default function Estatistica(props: EstatisticaProps){
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor}
            style={{
                backgroundColor: props.corFundo ? props.corFundo : "var(--amarelo)",
                color: props.corFonte ? props.corFonte : "#222"
            }}>
                {props.valor || 0}
            </div>
            <div className={styles.texto}>
                {props.texto || 0}
            </div>
        </div>
    )
}