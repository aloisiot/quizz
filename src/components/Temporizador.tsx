/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/Temporizador.module.css'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

interface TemporizadorProps{
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps){
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={80}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#12CC80', '#F7B801', '#FF0000',]}
                colorsTime={[5, 2, 0]}
                strokeWidth={8}
                >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}