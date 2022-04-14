import { useState } from 'react'
//import styles from './Estado.module.css'
import React from 'react'
const Estado = () => {
    const [estados] = useState([
        {id:1, sigla: 'AC', nome: 'Acre', regiao: 'Norte', lula: Math.ceil(Math.random() * (280008- 140004) + 140004), bolsonaro: Math.ceil(Math.random() * (280008- 140004) + 140004), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:2, sigla: 'AL', nome: 'Alagoas', regiao: 'Nordeste', lula:Math.ceil(Math.random() * (1128844- 564422) + 564422), bolsonaro: Math.ceil(Math.random() * (1128844- 50000) + 500000), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:3, sigla: 'AM', nome: 'Amazonas', regiao: 'Norte', lula:Math.ceil(Math.random() * (1238260- 619130) + 619130), bolsonaro: Math.ceil(Math.random() * (1238260- 619130) + 619130), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:4, sigla: 'AP', nome: 'Amapá', regiao: 'Nordeste', lula:Math.ceil(Math.random() * (264620- 132310) + 132310), bolsonaro: Math.ceil(Math.random() * (264620- 132310) + 132310), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:5, sigla: 'BA', nome: 'Bahia', regiao: 'Nordeste', lula:Math.ceil(Math.random() * (5147774- 2573887) + 2573887), bolsonaro: Math.ceil(Math.random() * (5147774- 2573887) + 2573887), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:6, sigla: 'CE', nome: 'Ceará', regiao: 'Nordeste', lula:Math.ceil(Math.random() * (3163507- 50000) + 1581753), bolsonaro: Math.ceil(Math.random() * (3163507- 1581753) + 1581753), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:7, sigla: 'DF', nome: 'Distrito Federal', regiao: 'Centro-Oeste', lula: Math.ceil(Math.random() * (1069387- 53469) + 53469), bolsonaro: Math.ceil(Math.random() * (1069387- 53469) + 53469), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:8, sigla: 'ES', nome: 'Espirito Santo', regiao: 'Sudeste', lula:Math.ceil(Math.random() * (1411416- 705708) + 705708), bolsonaro: Math.ceil(Math.random() * (1411416- 705708) + 705708), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:9, sigla: 'GO', nome: 'Goiás', regiao: 'Centro-Oeste', lula:Math.ceil(Math.random() * (2374379- 1187189) + 1187189), bolsonaro: Math.ceil(Math.random() * (2374379- 1187189) + 1187189), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:10, sigla: 'MA', nome: 'Maranhão', regiao: 'Nordeste', lula:Math.ceil(Math.random() * (2301697- 1150848) + 1150848), bolsonaro: Math.ceil(Math.random() * (2301697- 1150848) + 1150848), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:11, sigla: 'MG', nome: 'Minas Gerais', regiao: 'Sudeste', lula:Math.ceil(Math.random() * (7770106- 3885053) + 3885053), bolsonaro: Math.ceil(Math.random() * (7770106- 3885053) + 3885053), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:12, sigla: 'MS', nome: 'Mato Grosso do Sul', regiao: 'Centro-Oeste', lula: Math.ceil(Math.random() * (934405- 467202) + 467202), bolsonaro: Math.ceil(Math.random() * (934405- 467202) + 467202), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:13, sigla: 'MT', nome: 'Mato Grosso', regiao: 'Centro-Oeste', lula:Math.ceil(Math.random() * (1136152- 568076) + 568076), bolsonaro: Math.ceil(Math.random() * (1136152- 568076) + 568076), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:14, sigla: 'PA', nome: 'Pará', regiao: 'Norte', lula:Math.ceil(Math.random() * (2830519- 1415259) + 1415259), bolsonaro: Math.ceil(Math.random() * (2830519- 1415259) + 1415259), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:15, sigla: 'PB', nome: 'Paraíba', regiao: 'Nordeste', lula:Math.ceil(Math.random() * (1505030- 752515) + 752515), bolsonaro: Math.ceil(Math.random() * (1505030- 752515) + 752515), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:16, sigla: 'PE', nome: 'Pernambuco', regiao: 'Nordeste', lula:Math.ceil(Math.random() * (3353389- 1676694) + 1676694), bolsonaro: Math.ceil(Math.random() * (3353389- 1676694) + 1676694), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:17, sigla: 'PI', nome: 'Piauí', regiao: 'Nordeste', lula: Math.ceil(Math.random() * (1245092- 622546) + 622546), bolsonaro: Math.ceil(Math.random() * (1245092- 622546) + 622546), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:18, sigla: 'PR', nome: 'Paraná', regiao: 'Sul', lula:Math.ceil(Math.random() * (3865707- 1932853) + 1932853), bolsonaro: Math.ceil(Math.random() * (3865707- 1932853) + 1932853), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:19, sigla: 'RJ', nome: 'Rio de Janeiro', regiao: 'Sudeste', lula:Math.ceil(Math.random() * (6006227- 3003113) + 3003113), bolsonaro: Math.ceil(Math.random() * (6006227- 3003113) + 3003113), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:20, sigla: 'RN', nome: 'Rio Grande do Norte', regiao: 'Nordeste', lula:Math.ceil(Math.random() * (1176127- 588063) + 588063), bolsonaro: Math.ceil(Math.random() * (1176127- 588063) + 588063), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:21, sigla: 'RO', nome: 'Rondonia', regiao: 'Norte', lula:Math.ceil(Math.random() * (549215- 274607) + 274607), bolsonaro: Math.ceil(Math.random() * (549215- 274607) + 274607), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:22, sigla: 'RR', nome: 'Roraima', regiao: 'Norte', lula:Math.ceil(Math.random() * (153262- 76631) + 76631), bolsonaro: Math.ceil(Math.random() * (153262- 76631) + 76631), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:23, sigla: 'RS', nome: 'Rio Grande do Sul', regiao: 'Sul', lula:Math.ceil(Math.random() * (4156112- 2078056) + 2078056), bolsonaro: Math.ceil(Math.random() * (4156112- 2078056) + 2078056), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:24, sigla: 'SC', nome: 'Santa Catarina', regiao: 'Sul', lula: Math.ceil(Math.random() * (2383415- 1191707) + 1191707), bolsonaro: Math.ceil(Math.random() * (2383415- 1191707) + 1191707), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:25, sigla: 'SE', nome: 'Sergipe', regiao: 'Nordeste', lula:Math.ceil(Math.random() * (708404- 354202) + 354202), bolsonaro: Math.ceil(Math.random() * (708404- 354202) + 354202), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:26, sigla: 'SP', nome: 'São Paulo', regiao: 'Sudeste', lula:Math.ceil(Math.random() * (15777254- 7888627) + 7888627), bolsonaro: Math.ceil(Math.random() * (15777254- 7888627) + 7888627), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:27, sigla: 'TO', nome: 'Tocantins', regiao: 'Norte', lula:Math.ceil(Math.random() * (498775- 249387) + 249387), bolsonaro: Math.ceil(Math.random() * (498775- 249387) + 249387), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
        {id:28, sigla: 'ZZ', nome: 'Exterior', regiao: 'Exterior', lula:Math.ceil(Math.random() * (148078- 74039) + 74039), bolsonaro: Math.ceil(Math.random() * (148078- 74039) + 74039), total: 0.0, porcentagem_lula:0.0, porcentagem_bolsonaro:0.0},
    ])
    const [regiao, setRegiao] = useState([])

    let totalLula = estados.reduce((acc, next) => acc = acc + next.lula, 0)
    let totalBolsonaro = estados.reduce((acc, next) => acc = acc + next.bolsonaro, 0)
    let total_resultado = totalLula + totalBolsonaro
    let total_porcentagem_lula = ((totalLula) * 100 / total_resultado).toFixed(2) + '%'
    let total_porcentagem_bolsonaro = ((totalBolsonaro) * 100 / total_resultado).toFixed(2) + '%'
    
    let exterior = estados.filter(estado => estado.regiao === "Exterior")
    let centroOeste = estados.filter(estado => estado.regiao === "Centro-Oeste")
    let norte = estados.filter(estado => estado.regiao === "Norte")
    let nordeste = estados.filter(estado => estado.regiao === "Nordeste")
    let sul = estados.filter(estado => estado.regiao === "Sul")
    let sudeste = estados.filter(estado => estado.regiao === "Sudeste")
    
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      }
      
  return (
    <div>
        <table className={"center"}>
            <thead style={{backgroundColor: "white"}}>
                <tr>
                    <th>#</th>
                    <th>S</th>
                    <th>E</th>
                    <th>R</th>
                    <th>T.V</th>
                    <th>V.L</th>
                    <th>L %</th>
                    <th>B %</th>
                    <th>V.B</th>
                </tr>
            </thead>
            <tbody>
            {estados.map((estado) => (
                <tr className={estado.lula > estado.bolsonaro ? "red_title" : "blue_title"}>
                    <td>{estado.id}</td>
                    <td>{estado.sigla}</td>
                    <td>{estado.nome}</td>
                    <td>{estado.regiao}</td>
                    <td>{estado.total = parseFloat(estado.lula) + parseFloat(estado.bolsonaro)}</td>
                    <td>{formatNumber(estado.lula) } </td>
                    <td>{estado.porcentagem_lula =((estado.lula) * 100 / estado.total).toFixed(2) + '%' }</td>
                    <td>{estado.porcentagem_bolsonaro = ((estado.bolsonaro * 100) / estado.total).toFixed(2) + '%'}</td>
                    <td>{formatNumber(estado.bolsonaro)}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className={"center"}>
            <h1>Resultado</h1>
            <table className={"center"}>
                <thead style={{backgroundColor: "white"}}>
                    <tr>
                    <th>Votos Totais Lula</th>
                    <th>L %</th>
                    <th>B %</th>
                    <th>Votos Totais Bolsonaro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={"red_title"}>{formatNumber(totalLula)}</td>
                        <td className={"red_title"}>{total_porcentagem_lula}</td>
                        <td className={"blue_title"}>{total_porcentagem_bolsonaro}</td>
                        <td className={"blue_title"}>{formatNumber(totalBolsonaro)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            {totalLula > totalBolsonaro ? (<img src="https://veja.abril.com.br/wp-content/uploads/2016/11/lula-mostra-a-lc3adngua.jpg"></img>) : (<img src="https://conteudo.imguol.com.br/c/noticias/03/2021/06/21/jair-bolsonaro-sorrindo-1624273341352_v2_1x1.jpg"></img>)}
            {totalLula > totalBolsonaro ? (<p>LULA ELEITO! #VAIVIRARCUBA</p>): (<p>BOLSONARO ELEITO! #PARTIUCOMERARMA</p>)}
        </div>
        <div>
            <h2>Filtrar por Região: </h2>
            <select name="reg" onChange={(e) => {
                const regiaoSelecionada = e.target.value
                setRegiao(regiaoSelecionada)
            }}>
                    <option value="#"></option>
                    <option value="exterior">Exterior</option>
                    <option value="centro_oeste">Centro Oeste</option>
                    <option value="nordeste">Nordeste</option>
                    <option value="norte">Norte</option>
                    <option value="sudeste">Sudeste</option>
                    <option value="sul">Sul</option>
            </select>
        </div>     
        <div>
            {regiao === "exterior" ? (<table className={"center"}>
            <thead style={{backgroundColor: "white"}}>
                <tr>
                    <th>#</th>
                    <th>S</th>
                    <th>E</th>
                    <th>R</th>
                    <th>T.V</th>
                    <th>V.L</th>
                    <th>L %</th>
                    <th>B %</th>
                    <th>V.B</th>
                </tr>
            </thead>
            <tbody>
            {exterior.map((ex) => (
                <tr className={ex.lula > ex.bolsonaro ? "red_title" : "blue_title"}>
                    <td>{ex.id}</td>
                    <td>{ex.sigla}</td>
                    <td>{ex.nome}</td>
                    <td>{ex.regiao}</td>
                    <td>{ex.total = parseFloat(ex.lula) + parseFloat(ex.bolsonaro)}</td>
                    <td>{ex.lula } </td>
                    <td>{ex.porcentagem_lula =((ex.lula) * 100 / ex.total).toFixed(2) + '%' }</td>
                    <td>{ex.porcentagem_bolsonaro = ((ex.bolsonaro * 100) / ex.total).toFixed(2) + '%'}</td>
                    <td>{ex.bolsonaro}</td>
                </tr>
            ))}
            </tbody>
        </table>) : ("")}
        {regiao === "centro_oeste" ? (<table className={"center"}>
            <thead style={{backgroundColor: "white"}}>
                <tr>
                    <th>#</th>
                    <th>S</th>
                    <th>E</th>
                    <th>R</th>
                    <th>T.V</th>
                    <th>V.L</th>
                    <th>L %</th>
                    <th>B %</th>
                    <th>V.B</th>
                </tr>
            </thead>
            <tbody>
            {centroOeste.map((co) => (
                <tr className={co.lula > co.bolsonaro ? "red_title" : "blue_title"}>
                    <td>{co.id}</td>
                    <td>{co.sigla}</td>
                    <td>{co.nome}</td>
                    <td>{co.regiao}</td>
                    <td>{co.total = parseFloat(co.lula) + parseFloat(co.bolsonaro)}</td>
                    <td>{co.lula } </td>
                    <td>{co.porcentagem_lula =((co.lula) * 100 / co.total).toFixed(2) + '%' }</td>
                    <td>{co.porcentagem_bolsonaro = ((co.bolsonaro * 100) / co.total).toFixed(2) + '%'}</td>
                    <td>{co.bolsonaro}</td>
                </tr>
            ))}
            </tbody>
        </table>) : ("")}
        {regiao === "norte" ? (<table className={"center"}>
            <thead style={{backgroundColor: "white"}}>
                <tr>
                    <th>#</th>
                    <th>S</th>
                    <th>E</th>
                    <th>R</th>
                    <th>T.V</th>
                    <th>V.L</th>
                    <th>L %</th>
                    <th>B %</th>
                    <th>V.B</th>
                </tr>
            </thead>
            <tbody>
            {norte.map((n) => (
                <tr className={n.lula > n.bolsonaro ? "red_title" : "blue_title"}>
                    <td>{n.id}</td>
                    <td>{n.sigla}</td>
                    <td>{n.nome}</td>
                    <td>{n.regiao}</td>
                    <td>{n.total = parseFloat(n.lula) + parseFloat(n.bolsonaro)}</td>
                    <td>{n.lula } </td>
                    <td>{n.porcentagem_lula =((n.lula) * 100 / n.total).toFixed(2) + '%' }</td>
                    <td>{n.porcentagem_bolsonaro = ((n.bolsonaro * 100) / n.total).toFixed(2) + '%'}</td>
                    <td>{n.bolsonaro}</td>
                </tr>
            ))}
            </tbody>
        </table>) : ("")}
        {regiao === "nordeste" ? (<table className={"center"}>
            <thead style={{backgroundColor: "white"}}>
                <tr>
                    <th>#</th>
                    <th>S</th>
                    <th>E</th>
                    <th>R</th>
                    <th>T.V</th>
                    <th>V.L</th>
                    <th>L %</th>
                    <th>B %</th>
                    <th>V.B</th>
                </tr>
            </thead>
            <tbody>
            {nordeste.map((no) => (
                <tr className={no.lula > no.bolsonaro ? "red_title" : "blue_title"}>
                    <td>{no.id}</td>
                    <td>{no.sigla}</td>
                    <td>{no.nome}</td>
                    <td>{no.regiao}</td>
                    <td>{no.total = parseFloat(no.lula) + parseFloat(no.bolsonaro)}</td>
                    <td>{no.lula } </td>
                    <td>{no.porcentagem_lula =((no.lula) * 100 / no.total).toFixed(2) + '%' }</td>
                    <td>{no.porcentagem_bolsonaro = ((no.bolsonaro * 100) / no.total).toFixed(2) + '%'}</td>
                    <td>{no.bolsonaro}</td>
                </tr>
            ))}
            </tbody>
        </table>) : ("")}
        {regiao === "sudeste" ? (<table className={"center"}>
            <thead style={{backgroundColor: "white"}}>
                <tr>
                    <th>#</th>
                    <th>S</th>
                    <th>E</th>
                    <th>R</th>
                    <th>T.V</th>
                    <th>V.L</th>
                    <th>L %</th>
                    <th>B %</th>
                    <th>V.B</th>
                </tr>
            </thead>
            <tbody>
            {sudeste.map((su) => (
                <tr className={su.lula > su.bolsonaro ? "red_title" : "blue_title"}>
                    <td>{su.id}</td>
                    <td>{su.sigla}</td>
                    <td>{su.nome}</td>
                    <td>{su.regiao}</td>
                    <td>{su.total = parseFloat(su.lula) + parseFloat(su.bolsonaro)}</td>
                    <td>{su.lula } </td>
                    <td>{su.porcentagem_lula =((su.lula) * 100 / su.total).toFixed(2) + '%' }</td>
                    <td>{su.porcentagem_bolsonaro = ((su.bolsonaro * 100) / su.total).toFixed(2) + '%'}</td>
                    <td>{su.bolsonaro}</td>
                </tr>
            ))}
            </tbody>
        </table>) : ("")}
        {regiao === "sul" ? (<table className={"center"}>
            <thead style={{backgroundColor: "white"}}>
                <tr>
                    <th>#</th>
                    <th>S</th>
                    <th>E</th>
                    <th>R</th>
                    <th>T.V</th>
                    <th>V.L</th>
                    <th>L %</th>
                    <th>B %</th>
                    <th>V.B</th>
                </tr>
            </thead>
            <tbody>
            {sul.map((s) => (
                <tr className={s.lula > s.bolsonaro ? "red_title" : "blue_title"}>
                    <td>{s.id}</td>
                    <td>{s.sigla}</td>
                    <td>{s.nome}</td>
                    <td>{s.regiao}</td>
                    <td>{s.total = parseFloat(s.lula) + parseFloat(s.bolsonaro)}</td>
                    <td>{s.lula } </td>
                    <td>{s.porcentagem_lula =((s.lula) * 100 / s.total).toFixed(2) + '%' }</td>
                    <td>{s.porcentagem_bolsonaro = ((s.bolsonaro * 100) / s.total).toFixed(2) + '%'}</td>
                    <td>{s.bolsonaro}</td>
                </tr>
            ))}
            </tbody>
        </table>) : ("")}
        </div>
    </div>
  )
}

export default Estado