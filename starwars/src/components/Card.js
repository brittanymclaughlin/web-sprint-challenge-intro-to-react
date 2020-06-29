import React from "react";
import styled from "styled-components";

function Card ({char, key}) {

    return(
        <Container>
            <h2>{char.name}</h2>
            <p>Gender: {char.gender}</p>
            <p>Birth Year: {char.birth_year}</p>
            <p>Hair: {char.hair_color}<br>
            </br>Eyes: {char.eye_color}</p>
            </Container>
    )
};
const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    width:300px;
    margin:2%;
    padding:1%;
    border-radius:250px;
    opacity:0.5;
    :hover{
        opacity:0.8;
    }
    h2{
        font-size:1.3rem;
        text-decoration:underline;
        
    }
    p{
        font-size:0.8rem;
        
    }
`
export default Card;