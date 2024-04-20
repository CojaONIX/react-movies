

const MovieDetailsShort = ({movie}) => {
    return (
        <div className="card-group">
            <div className="card">

                <div className="card-header d-flex justify-content-between">
                    <h5>{movie.Title}</h5>
                </div>

                <img src={movie.Poster} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5>Type: {movie.Type}</h5>
                    <h5>Year: {movie.Year}</h5>
                    <h5>imdbID: {movie.imdbID}</h5>
                </div>

                <div className="card-footer d-flex justify-content-end">
                    <button className="btn btn-outline-primary">Details</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsShort;