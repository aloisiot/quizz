import { useEffect, useState } from 'react'
import styles from '../styles/Botao.module.css'

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (event: any) => void
    variante?: ("primario" | "secundario")
}

export default function Botao(props: BotaoProps) {
    const [variante, setVariante] = useState(styles.primario)

    useEffect(() => {
        if(props.variante){
            setVariante(props.variante === "primario" ? styles.primario : styles.secundario)
        }
    },[props.variante])
    
    const renderBotao = () => {
        return (
            <button
                onClick={props.onClick}
                className={`${styles.botao} ${variante}`}
            >
                {props.texto}
            </button>
        )
    }

    return (
        <>
            {props.href ? <a href={props.href}>{renderBotao()}</a> : renderBotao()}
        </>
    )
}