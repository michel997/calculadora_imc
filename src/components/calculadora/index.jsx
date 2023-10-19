import { useState } from "react"

import styles from './Calculadora.module.css'

const Calculadora = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAtura] = useState(0);

    const resultado = () => {
        const imc = peso / (altura * altura);
        const finalImc = imc.toFixed(2);
        console.log(finalImc)
        
        if (isNaN(finalImc)) {
            return (
                'Carregando ...'
            )
        } else {
            return finalImc;
        }
    }


    return (
        <div className="container">
        <div className={styles.title}>
            <h1>Calculadora de IMC</h1>
        </div>

        <form className={styles.form}>
            <label className={styles.formLabel}>Seu Peso</label> <br />
            <input className={styles.formInput} type="number" placeholder="Peso (Kg)" onChange={(e) => setPeso(+e.target.value)} /> <br />
            <label className={styles.formLabel}>Sua Altura</label> <br />
            <input className={styles.formInput} type="number" placeholder="Altura (m)" onChange={(e) => setAtura(+e.target.value)} />
        </form>

        <div className={styles.result}>
            <p>Seu IMC: {resultado()}</p>
        </div>
        </div>
    )
}

export default Calculadora