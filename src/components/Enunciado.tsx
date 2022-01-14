import styles from "../styles/Enunciado.module.css"

interface EnunciadoPops{
    texto: string
}

export default function Enunciado({ texto }: EnunciadoPops){
    return (
        <div className={styles.enunciado}>
            <span className={styles.texto}>{texto}</span>
        </div>
    )
}