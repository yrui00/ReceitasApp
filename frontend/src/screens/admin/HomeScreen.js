import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import AdminMedidasScreen from './MedidasScreens';

export default function AdminHomeScreen() {
    return <div>
        <div className='mainAdmin'>
            <div className="navAdmin">
                <ul>
                    <li><Link to="/admin" >Admin</Link> </li>
                    <li><Link to="/admin/medidas" >Medidas</Link> </li>
                    <li><Link to="/admin/ingredientes" >Ingredientes</Link> </li>
                    <li><Link to="/admin/receitas" >Receitas</Link> </li>
                </ul>
                <Outlet />
            </div>
            <div className="centerAdmin">
                <Routes>
                    <Route path="/medidas/*" element={<AdminMedidasScreen />} />
                    <Route index element={
                        <div>
                            ADMIN
                        </div>
                    } />
                </Routes>
            </div>
        </div>
    </div>;
}
