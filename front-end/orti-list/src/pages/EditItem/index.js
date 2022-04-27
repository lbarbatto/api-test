import './styles.css';

import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { useHistory, useLocation } from 'react-router-dom';

import { messege, Imput, Button, InputNumber } from 'antd';

export default function EditItem(){

    const history = useHistory()
    const location = useLocation()

    const [itemEdit, setItemEdit] = useState({})
}