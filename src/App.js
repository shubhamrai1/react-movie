import MovieComponent from "./Components/MovieComponent";
import MovieInfoComponent from "./Components/MovieInfoComponent";
import { useState } from "react";
import axios from "axios";
import {Container, Navbar, Form , FormControl} from 'react-bootstrap';

function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get( 
      `http://www.omdbapi.com/?apikey=e87fce5e&s=${searchString}`
     );
      
    console.log(response);
    updateMovieList(response.data.Search);
    
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <>
    
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand href="/">Movie App</Navbar.Brand>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search Movie" className="me-3" aria-label="Search" md={{ span: 6, offset: 3 }}
            value={searchQuery} onChange={onTextChange}/>
        </Form>
      </Container>
    </Navbar>

      <Container>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">  
          {movieList?.length ? (
            movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
            ))
          ) : (
            <div>No Search Result</div>
          )}
        </div>
      </div>
    </Container>
    </>
  );
}

export default App;
