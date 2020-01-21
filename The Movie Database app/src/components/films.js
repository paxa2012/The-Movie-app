import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Films extends Component {
    goBack() {
        window.history.go(-1);
    }
    render() {
        let id = this.props.match.params.id;
        id = parseInt(id);
        let film = this.props.movie;
        //console.log(this.props)
        return (
            <div className="container">
                <button className="back" onClick={() => this.goBack()}>Вернутся</button>
                <div className="box-film">
                    {
                        film.movie.map(film => {
                            if (id === film.genre_ids[0] || id === film.genre_ids[1] || id === film.genre_ids[2] || id === film.genre_ids[3]) {
                                return (
                                    <Link to={`/ditailfilm/${film.id}`} key={film.id}>
                                        <div className="film">
                                            <div className="box-film__img">
                                                <img src={`http://image.tmdb.org/t/p/original${film.poster_path}`} alt={film.title} />
                                            </div>
                                            <div className="box-film__text">
                                                <h2>{film.title}</h2>  
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }

                        })
                    }
                </div>
            </div >
        );
    }
}

export default Films;