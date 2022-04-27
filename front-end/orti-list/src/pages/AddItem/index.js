import './styles.css';

import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import { message, Form, Input, Button, InputNumber } from 'antd';

export default function AddItem(){


    const [disable, setDisable] = useState(false)
    const history = useHistory()

    async function handleSubmit(produto){
        setDisable(true)
        api.post('/item', produto)
            .then((response) => {
                if (response.status ===201) {
                    message.success('Produto adicionado com sucesso!');
                    history.push('/produtos')
                }
            })
            .catch((err) => {
                message.error('Aconteceu um erro ao adicionar o produto' + err.response.data.message)
            })
    }

    return(

        <div className='produto__container'>
            <h1>Adicionar novo Produto</h1>
            <br/>
            <div>
                <Form 
                name="basic"
                labelCol={{ span: 4}}
                wrapperCol={{ span: 16}}
                onFinish={handleSubmit}
                autoComplete="off"
                >
                        <Form.Item 
                        label='Nome'
                        name="name"
                        rules={[{ required: true, message: "Defina um produto"}]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item 
                        label='Descrição'
                        name="description"
                        rules={[{ required: true, message: "Defina uma descrição pra o produto"}]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item 
                        label='Quantidade'
                        name="quantity"
                        rules={[{ required: true, message: "Defina uma quantidade"}]}
                        >
                            <InputNumber />
                        </Form.Item>

                        <Form.Item>
                            <Button type='primary' htmlType='submit' disabled={disable}>
                                Adicionar
                            </Button>
                        </Form.Item>
                </Form>
            </div>
        </div>
    )
}