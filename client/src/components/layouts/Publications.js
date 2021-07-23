import React from 'react'
import styled from 'styled-components'
const publications = ({ posts2 }) => {
    return (
        <>
            <MainContainer>
                Welcome to the publications Components ...
                {posts2.map((publications, key) => (
                     <div className="container" >
                <h2>Name :{publications.title}</h2>
                <h4>Name :{publications.content  }</h4>
           
               
                </div>
            ))}
        </MainContainer>
        </>
    );
};

export default publications

// main container 

const MainContainer = styled.div`
margin:7rem 0 ;
`;