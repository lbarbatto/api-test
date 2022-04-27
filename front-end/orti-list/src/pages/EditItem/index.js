import './styles.css';

import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { useHistory, useLocation } from 'react-router-dom';

import { message, Button, InputNumber, Input, Tooltip } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

export default function EditItem(){

    const history = useHistory()
    const location = useLocation()

    const [itemEdit, setItemEdit] = useState({})

    useEffect(() => {
        console.log(location)
        setItemEdit({ ... location.state})
    },[location])

    async function handleSubmitEdit(produto){
        api.patch(`./item/${produto.id}`, produto)
        .then((response) => {
            if(response.status ===200) {
                message.success("Editado com sucesso!", 5)
                history.push('/produtos')
            }
        })
        .catch((err) => {
            message.error("Aconteceu um erro inesperado" + err.response.data.message, 5)
        })
    }


    return(

        <div className='produto__container'>
            <h1>Editar Produto</h1>
            <br/>            
            <div className='produto__edit'>
                <div className='produto__campo'>
                    <span className='produto__lable'>Nome:</span>
                    <Input value={itemEdit?.name} onChange={(e) => {
                        setItemEdit((itemEdit) => {
                            return { ... itemEdit, name: e.target.value}
                        })
                    }}/>
                </div>
                <div className='produto__campo'>
                    <span className='produto__lable'>Descrição:</span>
                    <Input value={itemEdit?.description} onChange={(e) => {
                        setItemEdit((itemEdit) => {
                            return { ... itemEdit, description: e.target.value}
                        })
                    }}/>
                </div>
                <div className='produto__campo'>
                    <span className='produto__lable'>Quantidade:</span>
                    <InputNumber value={itemEdit?.quantity} onChange={(e) => {
                        setItemEdit((itemEdit) => {
                            return { ... itemEdit, quantity: e}
                        })
                    }}/>
                </div>
                <div className='bt__confirm'>
                    <Tooltip title="Confirmar">
                        <Button type='text' shape="circle"
                        icon={<CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: '100px' }} />}
                        onClick={() => handleSubmitEdit(itemEdit)}>                                
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}