import React, { Component } from 'react';
import { ListGroup, Col } from 'react-bootstrap';

class Contato extends Component {
    constructor(props) {
        super(props)
        this.state = {mensagens: []}
    }

    componentDidMount() {
        this.loadAsyncData()
    }

    async loadAsyncData() {
        const resposta = await fetch("http://localhost:5000/contatos");
        const json = await resposta.json();
        this.setState({ mensagens: json});
    }
    

    async enviarMensagem(evento) {
        evento.preventDefault()
        const formData = new FormData(evento.target);
        const url = 'http://localhost:5000/contatos';
       
        const resposta = await fetch(url, {
            body: JSON.stringify(Object.fromEntries(formData)), 
            method: 'POST', 
            headers: new Headers({'content-type': 'application/json'})
        })
        console.log(await resposta.text())
        if (resposta.status === 200) {
            alert('Mensagem enviada!')
        } else {
            alert('A mensagem não pode ser enviada.')
        }
    }

    render() {
        return (
        <div>
            <div className="container ml-sm-0 ml-md-5 mt-5">
                
                
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                        <h4 className="mb-3">Abaixo você pode deixar um comentário ou sugestão:</h4>
                            <div className="form-group">
                                <form onSubmit={(evento)=> this.enviarMensagem(evento)}>

                                    <label htmlFor="nome" >Seu nome: </label> <br/>
                                    <input className="form-control" type="text" name="nome" id="nome" placeholder="Seu nome aqui"/> <br/>
                                    
                                    <label htmlFor="email">Seu e-mail: </label>
                                    <input type="email" name="email" className="form-control" id="email" aria-describedby="email" placeholder="Digite seu email"/> <br/>

                                    <label htmlFor="mensagem">Sua mensagem: </label>
                                    <textarea className="form-control" name="mensagem" id="mensagem" rows="4" placeholder="Sua mensagem..."></textarea>
                                
                                    <br/>
                                    <button type="submit" className="btn-primary mb-5">Enviar</button> <br/>
                                </form>
                            </div>

                        
                        </div>

                        <Col xs={6}>
                        <h4>Comentários dos nossos clientes:</h4> <br/>
                        <ListGroup>
                        {this.state.mensagens.map(mensagem => (
                            <ListGroup.Item key={mensagem.mensagem}>
                            <h5>{mensagem.nome}</h5>
                            <p>{mensagem.mensagem}</p>
                            </ListGroup.Item>
                        ))}
                        
                        </ListGroup>
                        
                    </Col>
                    </div>
                
            </div>
           

        </div>
    )

    }
    
}

export default Contato;