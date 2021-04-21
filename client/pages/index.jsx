import axios from 'axios';
import { Container } from 'react-bootstrap';

import Navbar from '../components/Navbar';
import QBox from '../components/QBox';

export default function Home({ data }) {
    return (
        <>
            <Navbar />
            <Container fluid id='questions' className='px-5 mb-5'>
                {data.map((q, i) => {
                    return (
                        <div key={i} className='mb-4'>
                            <QBox question={q} />
                        </div>
                    );
                })}
            </Container>
        </>
    );
}

export async function getServerSideProps() {
    const { questions: data } = await axios
        .get('http://127.0.0.1:5000')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    return {
        props: { data },
    };
}