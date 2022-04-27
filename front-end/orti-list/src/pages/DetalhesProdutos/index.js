import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { useParams, useHistory } from 'react-router-dom';
import './styles.css';

import { Tooltip, Button, Card, message, Modal } from 'antd';
import { ExclamationCircleOutlined, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export default function DetalhesProduto(){

    const [produto, setProduto] = useState([]);
    const history = useHistory();
    let {id} = useParams();

    const { confirm } = Modal;

    function showConfirm(produto) {
    confirm({
        title: 'Deseja mesmo excluir?',
        icon: <ExclamationCircleOutlined />,
        content: produto.name,
        onOk() {
            handleDelete(produto.id);
        },
        onCancel() {
            console.log('Cancel');
        },
    });
    }


    function handleDelete(id){
        api.delete(`/item/${id}`)
        .then((response) =>{
            if (response.status ===200) {
                message.success("Produto foi excluído com sucesso");
                history.push('/produtos')
            }
        })
        .catch((err) =>{
            message.error("Aconteceu um erro inesperado")
        })
    }

    useEffect(() =>{ 
        api.get(`/item/${id}`)
        .then((response) =>{
            setProduto(response.data)
        })
        .catch((err) =>{
            message.error("Aconteceu um erro inesperado")
        })
    }, [])

    return(

        <div className='produto__container'>
            <h1>Detalhes do Produto</h1>
            <br/>
            <div className='produto__card__container'>
                <Card key={produto.id} title={produto.name} bordered={false}>
                    <p>Id: {produto.id}</p>
                    <p>Data de Atualização: {produto.updatedAt}</p>
                    <p>Descrição: {produto.description}</p>
                    <p>Quantidade: {produto.quantity}</p>
                    <hr/>
                    <div className='item__card--actions'>
                        <Tooltip title="Editar">
                            <Button type='text' shape="circle" size="large"
                            icon={<EditTwoTone twoToneColor="#52c41a" />}
                            onClick={() => history.push(`/edit/${produto.id}`, produto)}>                                
                            </Button>
                        </Tooltip>
                        <Tooltip title="Excluir">
                            <Button type='text' danger shape="circle" size="large"
                            icon={<DeleteTwoTone twoToneColor="#640000" />}                            
                            onClick={() => showConfirm(produto)}>
                            </Button>                        
                        </Tooltip>
                    </div>
                </Card>
            </div>


        </div>
    )
}
