import './section-charts1.css'

function SectionCharts() {
    return(

        <div className='charts-container'>
            <section className='charts1'>
                <div className='text-chart-container'>
                    <div className='text-chart1'>Lucros dos Serviços</div>
                    <div className='profit-services'>chart / placeholder</div>
                </div>
                <div className='text-chart-container'>
                    <div className='text-chart2'>Gasto de Materiais na Produção de Serviços</div>
                    <div className='material-expenditure'>chart / placeholder</div>
                </div>
            </section>
            <section className='charts2'>
                <div className='text-chart-container'>
                    <div className='text-chart3'>Produção de Serviços</div>
                    <div className='service-production'>chart / placeholder</div>
                </div>
                <div className='text-chart-container'>
                    <div className='text-chart4'>Valor de Comissão dos Funcionários</div>
                    <div className='commission-value'>chart / placeholder</div>
                </div>
            </section>
        </div>
    )
}

export default SectionCharts