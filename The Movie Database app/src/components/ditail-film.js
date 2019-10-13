import React, { Component } from 'react';
let data = [];
class DitailFilm extends Component {
    componentDidMount() {
        const fetch = (url) =>{

            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(res.statusText)
                    }
                    return res
                })
                .then(res => res.json())
                .then(res => data = res.results)


        }
    }

    goBack() {
        window.history.go(-1);
    }
    render() {
        let id = this.props.match.params.id;
        id = parseInt(id);
        let ditalfilm = this.props.movie.movie;
        console.log(data)
        return (
            <div className="container">
                {
                    ditalfilm.map((dital, index) => {
                        if (id === dital.id) {
                            this.fetch('https://api.themoviedb.org/3/movie/' + dital.id + '/videos?api_key=38b0b64e1c4ca9ee5b886b99a6aa31c8&language=ru-Ru')
                            return (
                                <div className="box-detaifilm" key={index}>
                                    <div className="box-detaifilm__img"><img src={`http://image.tmdb.org/t/p/original${dital.poster_path}`} alt={dital.title} /></div>
                                    <div className="box-detalfilm__text">
                                        <div className="box-detalfilm__text--title"><h1>{dital.title}</h1></div>
                                        <div className="box-detalfilm__text--des">{dital.overview}</div>
                                        <div className="box-detalfilm__text--counters">
                                            <div className="box-detalfilm__text--counters_rates">{"Рейтинг: " + dital.vote_average}</div>
                                            <div className="box-detalfilm__text--counters_reldate">{'Дата выхода: ' + dital.release_date}</div>
                                            <div className="box-detalfilm__text--counters_popular">{'Популярность: ' + dital.popularity}</div>
                                            <div className="box-detalfilm__text--counters_view">{'Просмотрено: ' + dital.vote_count}</div>
                                        </div>
                                        <button className="back" onClick={() => this.goBack()}>Вернутся</button>

                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <div className="box-detalfilm__video">
                    <h1>Трэйлер</h1>
                    {data.map((t, i) => {
                        return (
                            <iframe key={i} title={t.name}
                                width="1200"
                                height="768"
                                src={"https://www.youtube.com/embed/" + t.key}
                            >
                            </iframe>
                        );
                    })}
                </div>
                {data = []}
            </div>
        );
    }
}

export default DitailFilm;