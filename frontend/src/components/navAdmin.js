import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function NavAdmin(props) {
    const navigate = useNavigate();

    return <div className='topoAdmin' >
        <div className='pageAdmin'>{props.titulo ? props.titulo : ''}</div>
        <div className='bts'>
            {props.bts && props.bts.indexOf('voltar') >= 0 ? <Button variant="contained" onClick={() => { navigate(-1) }}>Voltar</Button> : ''}
            {props.bts && props.bts.indexOf('add') >= 0 ? <Button variant="contained" onClick={() => { navigate('add') }}>Cadastrar Novo</Button> : ''}
        </div>
    </div>;
}
