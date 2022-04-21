import { useHistory } from 'react-router-dom';
import './styles.css';

import Logo from '../assets/lista_logo.png';
import { Button } from 'antd';

export default function Inicio(){

    const history = useHistory()

    async function listarProdutos(){
        history.push('/produtos')
    };

    return(

        <div className='inicio__container'>
            <section>
                <img className='logo__lista' src={Logo} alt='logo' />
                <br/>

                <Button className='bt__lista' onClick={listarProdutos}>Ver Produtos</Button>
            </section>
        </div>
    )
};