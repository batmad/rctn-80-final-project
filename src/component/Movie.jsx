/* eslint-disable react/prop-types */

const CardMovie = ({ title, year, imgSrc }) => {
    return (
          <div className="card" style={{ width: "15rem" }}>
                <img src={imgSrc} className="card-img-top" alt={title} style={{ height: "350px", objectFit: "cover" }}/>
                <div className="card-body">
                    <h5 className="card-title">{title} ({year})</h5>
                </div>
          </div>
    );
}

const Movie = ({ movies }) => {
    return (
        <div className="container d-flex flex-wrap gap-3 mt-3 mb-3">
            { 
                movies.map((movie, index) => (
                    <CardMovie
                        key={index}
                        title={movie.Title}
                        year={movie.Year}
                        imgSrc={movie.Poster}
                    />
                ))
            }
        </div>
    );
}

export default Movie;

