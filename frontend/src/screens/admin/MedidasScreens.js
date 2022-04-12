import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavAdmin from '../../components/navAdmin';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useSelector, useDispatch } from 'react-redux';
import { listMedidas } from '../../actions/medidasActions';

export default function AdminMedidasScreen() {
    const dispatch = useDispatch();
    const medidasList = useSelector((state) => state.medidasList);
    const { loading, error, medidas } = medidasList;

    useEffect(() => {
        dispatch(listMedidas())
    }, [])

    return <div className='cont'>
        <Routes>
            <Route path=":id" element={<Edit />} />
            <Route path="/add" element={<Add />} />
            <Route index element={<Listar medidas={medidas} />} />
        </Routes>
    </div>;
}

const styles = {
    prop1: { flex: '0 0 100px' },
    prop2: { flex: 2 },
    prop3: { flex: '0 0 150px' },
}
function Listar(props) {
    var medidas = props.medidas;
    return <div>
        <NavAdmin titulo="Medidas" bts={['add']} />
        <div className='listar'>
            <div className='topoLista item'>
                <div className='col prop1' style={styles.prop1} ></div>
                <div className='col prop2' style={styles.prop2} >Medida</div>
                <div className='col prop3' style={styles.prop3} ></div>
            </div>
            <div className='lista'>
                {medidas.map((a, b) => { 
                    return <div className='item' key={a.id}>
                        <div className='col prop1' style={styles.prop1} >{a.id}</div>
                        <div className='col prop2' style={styles.prop2} >{a.nome}</div>
                        <div className='col prop3' style={styles.prop3} >
                            <Link to={'/admin/medidas/'+a.id}>
                                <EditRoundedIcon />
                            </Link>
                            <DeleteForeverRoundedIcon />
                        </div>
                    </div>
                })}
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
    const { id } = useParams();
    console.log(id)
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

