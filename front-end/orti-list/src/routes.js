import React from 'react';
import { Route, Switch} from "react-router-dom";
import Produtos from './pages/Produtos';
import Inicio from './pages/Inicio';
import AddItem from './pages/AddItem';
import DetalhesProduto from './pages/DetalhesProdutos';
import EditItem from './pages/EditItem'


export default function Routes() {
    return(
            <Switch>
                <Route path='/' exact component={Inicio}/>
                <Route path='/produtos' component={Produtos}/>
                <Route path='/add' component={AddItem}/>
                <Route path='/detalhes/:id' component={DetalhesProduto}/>
                <Route path='/edit/:id' component={EditItem}/>
            </Switch>
    )
}