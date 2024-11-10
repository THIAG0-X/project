import './section-services.css'
import Search from "../../img/search.png"
//Botão não quer funcionar
import Btn from '../button-component/button'
function SectionServices() {
    return (
        <>
        <section className='section-container'>

            <div className='search-bar'>
                <img src={Search} />
                <input type='text' id='searchbar' name='searchbar' placeholder='Pesquisar Paciente,Funcionários, Serviços...'></input>
                </div>

            <div className='table-and-card'>

                {/* Essa tabela é um placeholder */}
                <table className='table'>
                    <tr className='row'>
                        <th className='cellhead'>
                            Paciente
                        </th>
                        <th className='cellhead'>Funcionário
                        </th>
                        <th className='cellhead'>Serviço
                        </th>
                        <th className='cellhead'>Data do Serviço
                        </th>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                    <tr className='row'>
                        <td className='cell'>Paciente</td>
                        <td className='cell'>Funcionário</td>
                        <td className='cell'>Serviço</td>
                        <td className='cell'>Data de Serviço</td>
                    </tr>
                </table>

                <div class="associate-container">
                    <div className='associatecard'>
                        Selecione um Paciente, Funcionário ou Serviço para edição. Ou aperte o botão para fazer um associação de Serviço.
                    </div>
                <button className='button'>Associar Serviço</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default SectionServices