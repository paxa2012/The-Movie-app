import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class AllCategory extends Component {
    render() {
        let category = this.props.category;
        //console.log(this.props)
        
        
        
        return (




            <div className="container">
                <div className="box-category">
                    {

                        category.map((cat, index) => {
                            return (
                                <Link to={`/category/${cat.id}`} key={index}>
                                    <div className="card">
                                        <h1>{cat.name}</h1>
                                        
                                    </div>
                                </Link>
                            )
                        }
                        )
                        /*<img src={`http://image.tmdb.org/t/p/original${this.props.catigory.poster_path}`} />
                    <p>{this.props.catigory.overview}</p>*/
                    }

                </div>

            </div>
        );
    }
}

export default AllCategory;