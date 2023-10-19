import styles from './Tabela.module.css'

const Tabela = () => {
    return (
        <div>
            <h2 className={styles.title}>Índice de Massa Corporal</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>
                    <tr>
                        <td>Peso Normal</td>
                        <td>18,5 - 24,9</td>
                    </tr>
                    <tr>
                        <td>Sobrepeso</td>
                        <td>25 - 29,9</td>
                    </tr>
                    <tr>
                        <td>Obesidade Grau I</td>
                        <td>30 - 34,5</td>
                    </tr>
                    <tr>
                        <td>Obesidade Grau II</td>
                        <td>35 - 39,9</td>
                    </tr>
                    <tr>
                        <td>Obesidade Grau III</td>
                        <td>Acima de 40</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;