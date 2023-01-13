import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useDispatch, useSelector } from 'react-redux';

import { startProductList, startUpdateProduct } from '../../actions/products';
import './products.css';
import { useNavigate } from 'react-router-dom';
import { columns, columnsWithPromotion, options, selectRow } from '../../helpers/fieldToTable';

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productList } = useSelector(state => state.product);

    const [data, setData] = useState([]);
    const [id, setId] = useState(null);
    const [state, setState] = useState('');

    /* This is a useEffect hook that is called when the component is mounted. It is checking if the
    productList is empty and if it is, it will dispatch the startProductList action. If the
    productList is not empty, it will set the data to the productList. */
    useEffect(() => {
        !productList && dispatch( startProductList() );
        productList && setData( productList );
    }, [productList, dispatch]);

    /* Setting the state to the id if this change. */
    useEffect(() => {
        setState( id );        
    }, [ id ]);

    const handleNavigate = () => {
        navigate(`/category`, {
            replace: true
        });
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('token-init-date');

        window.location.href = '/login';
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
            <BootstrapTable 
                striped bordered hover condensed
                keyField='id'
                data={ data }
                columns={ id && state === id ? columnsWithPromotion( textFilter, dispatch, startUpdateProduct, id ) : columns( textFilter, dispatch, startUpdateProduct ) }
                pagination={ paginationFactory( options( data ) ) }
                filter={ filterFactory() }
                cellEdit={ cellEditFactory({
                    mode: 'click',
                    blurToSave: true,
                })}
                selectRow={ selectRow( setId ) }
            />

            <Button 
                variant="info"
                onClick={ () => handleNavigate() }
            >
                See categories in promotion
            </Button>

            <Button 
                variant="danger"
                onClick={ () => handleLogout() }
                className="mt-2"
            >
                Logout
            </Button>
        </Container>
    )
}