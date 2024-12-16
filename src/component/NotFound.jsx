/* eslint-disable react/prop-types */

const NotFound = ({title, message}) => {
    return (
        <div className="container gap-3 mt-3 mb-3">
            <div className="card text-center border-0">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound;