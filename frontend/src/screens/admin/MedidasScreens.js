import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavAdmin from '../../components/navAdmin';
import { Route, Routes, useParams } from 'react-router-dom';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function AdminMedidasScreen() {
    return <div className='cont'>
        <Routes>
            <Route path=":id" element={<Edit />} />
            <Route path="/add" element={<Add /> } />
            <Route index element={<Listar />} />
        </Routes>
    </div>;
}

const styles = {
    prop1: { flex: '0 0 80px' },
    prop2: { flex: 2 },
    prop3: { flex: '0 0 150px' },
}
function Listar() {
    return <div>
        <NavAdmin titulo="Medidas" bts={['add']} />
        <div className='listar'>
            <div className='topoLista item'>
                <div className='col prop1' style={styles.prop1} >1</div>
                <div className='col prop2' style={styles.prop2} >nome</div>
                <div className='col prop3' style={styles.prop3} >bts</div>
            </div>
            <div className='lista'>
                <div className='item'>
                    <div className='col prop1' style={styles.prop1} >1</div>
                    <div className='col prop2' style={styles.prop2} >nome</div>
                    <div className='col prop3' style={styles.prop3} >
                        <EditRoundedIcon />
                        <DeleteForeverRoundedIcon />
                    </div>
                </div>
                <div className='item'>
                    <div className='col prop1' style={styles.prop1} >1</div>
                    <div className='col prop2' style={styles.prop2} >nome</div>
                    <div className='col prop3' style={styles.prop3} >
                        <EditRoundedIcon />
                        <DeleteForeverRoundedIcon />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Add() {
    return <div>
        <NavAdmin titulo="Medidas" bts={['voltar']} />
        <div className='formAdmin'>
            <form>
                <div className='campos'>
                    <div className='campo'>
                        <TextField label="Medida" style={{ width: '100%' }} size="small" />
                    </div>
                    <div className='campo bt'>
                        <Button variant="contained">Enviar</Button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

function Edit(props) {
    const {id} = useParams();
    console.log(id )
    return <div>
        <NavAdmin titulo="Medidas" bts={['voltar']} />
        <div className='formAdmin'>
            <form>
                <div className='campos'>
                    <div className='campo'>
                        <TextField label="Medida" style={{ width: '100%' }} size="small" defaultValue={id} />
                    </div>
                    <div className='campo bt'>
                        <Button variant="contained">Enviar</Button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}

