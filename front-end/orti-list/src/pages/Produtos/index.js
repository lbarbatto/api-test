import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { useHistory } from "react-router-dom";

import './styles.css';

import { Button, Card } from 'antd';

export default function Produtos(){
    const [ produtos, setProdutos] = useState([])
    const history = useHistory()

    useEffect(() => {
        api.get('/item')
        .then((response) => {
        setProdutos(response.data)
        })
        .catch((err) => {
            console.log("Aconteceu um erro." + err)
        })
    },[])

    return(

        <div className="produto__container">
            <h1>Relção de todos os produtos</h1>

            <div className="produto__card__container">
                {produtos.map(produto => (
                    <Card key={produto.id} title={produto.name} bordered={false} style={{ width: 300, margin: 16 }}>
                        <p>Descrição: {produto.description}</p>
                        <p>Quantidade: {produto.quantity}</p>
                        <Button onClick={() => history.push(`/detalhes/${produto.id}`)}>Detalhes</Button>
                    </Card>
                    ))}
            </div>
        </div>
    )

}
