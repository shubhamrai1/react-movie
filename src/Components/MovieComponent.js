import React from 'react'
import styled from "styled-components";
import {Card} from 'react-bootstrap';


const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;

const MovieComponent=(props)=>{
    const { Title, Year, imdbID, Type, Poster } = props.movie;
    return(
        <>
        
        <div className="col-md-4">
        <Card style={{ width: '18rem' }} className="mb-2"
        onClick={() => {
          props.onMovieSelect(imdbID);
          window.scrollTo({ top: 0, behavior: "smooth" });
      }}>
          <Card.Img variant="top" src={Poster} style={{ height: '25rem' }}/>
          <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <InfoColumn>
              <MovieInfo>{Year}</MovieInfo>
              <MovieInfo>{Type}</MovieInfo>
            </InfoColumn>
          </Card.Body>
        </Card>
        </div>
        

        {/*
        <MovieContainer 
            onClick={() => {
                props.onMovieSelect(imdbID);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
            <CoverImage src={Poster}></CoverImage>
            <MovieName>{Title}</MovieName>
            <InfoColumn>
                <MovieInfo>{Year}</MovieInfo>
                <MovieInfo>{Type}</MovieInfo>
            </InfoColumn>
        </MovieContainer>
          */}
        </>
    );
    
}
export default MovieComponent;