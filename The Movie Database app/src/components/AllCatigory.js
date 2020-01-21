import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class AllCategory extends Component {
    render() {
        let category = this.props.category;
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
                        })
                    }

                </div>
            </div>
        );
    }
}

export default AllCategory;