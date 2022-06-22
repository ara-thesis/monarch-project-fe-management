import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Axios from 'axios';

function TestApi(){
    
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => console.log(res.data)).catch(err => console.log(err))
    }, [])
    return(
        <Container>
        <div>            
        </div>
        </Container>       
    )
}

// https://www.youtube.com/watch?v=fHNsAyX8kck || Menit ke 7.24

export default TestApi;