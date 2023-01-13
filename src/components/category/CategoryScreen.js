import { useEffect } from 'react';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startCategoryList } from '../../actions/categories';

export const CategoryScreen = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categoryList } = useSelector(state => state.category);

    /* Checking if the categoryList is empty and if it is, it will dispatch the startCategoryList
    action. */
    useEffect(() => {
        !categoryList && dispatch( startCategoryList() );
    }, [categoryList, dispatch]);

    const handleReturn = () => {
        navigate(`/`, {
            replace: true
        });
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title className="text-center" style={{ fontSize: '2rem' }}>Categories in promotion</Card.Title>

                    <ListGroup>
                        {categoryList 
                            && categoryList.map( c =>(
                                <ListGroup.Item key={ c.name }>{ c.name.trim() }</ListGroup.Item>
                            )) 
                        }
                    </ListGroup>
                </Card.Body>
            </Card>

            <Button 
                onClick={ () => handleReturn() }
                variant="primary"
                className="mt-5"
            >
                Return
            </Button>
        </Container>
    )
}
