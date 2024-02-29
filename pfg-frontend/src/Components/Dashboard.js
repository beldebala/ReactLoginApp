import {Container, Row} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Dashboard(){
    const {userName} = useParams();

    return(
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                Welcome {userName}
            </Row>
        </Container>
    )
}

export default Dashboard;