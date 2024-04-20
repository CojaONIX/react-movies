

const MovieDetailsLong = ({movieDetails}) => {
    return (
        <div className="card-group">
            <div className="card">

                <div className="card-header">
                    <h2>{movieDetails.Title}</h2>
                    <h4>{movieDetails.Actors}</h4>
                </div>

                <img src={movieDetails.Poster} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5>Type: {movieDetails.Type}</h5>
                    <h5>Genre: {movieDetails.Genre}</h5>
                    <h5>Year: {movieDetails.Year}</h5>
                    <h5>imdbID: {movieDetails.imdbID}</h5>
                    <p>{movieDetails.Plot}</p>
                </div>

                <div className="card-footer d-flex justify-content-end">
                    {/*<button className="btn btn-outline-primary">???</button>*/}
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsLong;