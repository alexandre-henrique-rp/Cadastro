import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../App.css';
import './FormCliente.css';
import ListarCliente from './ListarCliente';

function Cliente() {
  const [nome, setNome] = useState([]);
  const [sobrenome, setSobrenome] = useState([]);
  const [cpf, setCpf] = useState([]);
  const [cep, setCep] = useState([]);
  const [endereco, setEndereco] = useState([]);
  const [numero, setNumero] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [estado, setEstado] = useState([]);

  const clienteHttp = axios.create({
    baseURL: 'http://localhost:3004/'
  });

  const criarCliente = () => {
    clienteHttp.post('cliente/criar', { nome: nome, sobrenome: sobrenome, cpf: cpf, cep: cep, endereco: endereco, numero: numero, cidade: cidade, estado: estado }).then(function (response) {
      console.log(response.data)
      ListarCliente()
    });
  }


  return (
    <div>
      <div className="formCliente">
        <div className="container">
          <form action="">
            <label>Nome</label>
            <input type="text" className="nome" onChange={e => setNome(e.target.value)} />
            <label>sobrenome</label>
            <input type="text" className="sobrenome" onChange={e => setSobrenome(e.target.value)} />
            <label>CPF</label>
            <input type="text" className="CPF" onChange={e => setCpf(e.target.value)} />
            <label>CEP</label>
            <input type="text" className="CEP" onChange={e => setCep(e.target.value)} />
            <label>Endereço</label>
            <input type="text" className="Endereco" onChange={e => setEndereco(e.target.value)} />
            <label>N°</label>
            <input type="text" className="Numero" onChange={e => setNumero(e.target.value)} />
            <label>Cidade</label>
            <input type="text" className="Cidade" onChange={e => setCidade(e.target.value)} />
            <label>Estado</label>
            <input type="text" className="Estado" onChange={e => setEstado(e.target.value)} />
            <button href="" className="BTM" onClick={criarCliente}>Registrar</button>
          </form>
        </div>

      </div>
      <div className="container">
        <ListarCliente />
      </div>
    </div>
  );
}

export default Cliente;

// up