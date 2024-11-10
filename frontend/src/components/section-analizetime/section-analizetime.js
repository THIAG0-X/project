import './section-analize-time.css'

function SectionAnalizeTime() {
    return(
        <section className='analize-time'>
            <p>
            Escolha o período de tempo para analizar
            </p>
            <div className='buttons'>
                <button className='buttonstime'>Semanal</button>
                <button className='buttonstime'>Mensal</button>
                <button className='buttonstime'>Anual</button>
            </div>
        </section>
    )
}

export default SectionAnalizeTime