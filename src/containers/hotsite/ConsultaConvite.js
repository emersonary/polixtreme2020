import React from 'react';
import Axios from 'axios';

class ConsultaConvite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mensagem: [],
            cpf: []
        }
        
    }

    handleTextChange(e) {
        this.setState({
            cpf: e.target.value
        });
    }

    submit(){
        const user = {
            usuario_autenticador:'POLINATIVO',
            senha:'123456',
            usuario_autenticado:'POLINATIVO'
            };

            var tokenUser = '';
            var data = new Date().getDate();
            var mes = new Date().getMonth();
            var ano = new Date().getFullYear();
            var dataFull = +data+ '/'+mes+'/'+ano;

            const options = {
                headers: {'x-contexto': '{"data_requisicao":"' +dataFull+'"}'}
              };

            Axios.post('https://myoffice.polishop.com/api/Empreendedores/Autenticar', 
            user, options
            )
            .then( Response => {
                tokenUser = Response.data.token;

                const dadosPost = [{
                    nome: 'BuscaConviteEvento',
                    alias: 'BuscaConviteEvento',
                    parametros: [ 
                        {
                        "nome": "cpf",
                        "valor": this.state.cpf //80770843549
                        }],
                    pagina:1,
                    itens_por_pagina: 20
                }]
    
                const options2 = {
                    headers: {'x-contexto': '{"data_requisicao":"' +dataFull+'","token": "' +tokenUser+ '"}'}
                }
    
                Axios.post('https://myoffice.polishop.com/api/Consultas/Customizada',
                dadosPost, options2)
                .then ( Response2 => {
                    console.log(Response2.data[0].dados.itens[0].resposta);    
                                  
                    this.setState({
                       /*if(cpf = null || cpf < 11){
                            mensagem: 'Cpf Invalido!';
                       }*/
                        mensagem: Response2.data[0].dados.itens[0].resposta
                    })
                    
                    //return (this.mensagem);
                    
                })

            });

    }
        
    render(){
        return(
            <div>
                <span>Consulte se o cpf já comprou convite para Evento abaixo: <input type="text" onChange={this.handleTextChange.bind(this)} maxLength="11" placeholder="digite sem pontos e traços"></input></span>
                <button onClick={this.submit.bind(this)}>Consultar</button>
                <br></br><span>{this.state.mensagem}</span>
            </div>
        )
    }
}

export default ConsultaConvite;