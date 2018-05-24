import React from 'react';
import { Link } from "react-router-dom";

export default (props) => {

    const showData = ({artistData}) => {
        if(artistData){
          return  artistData.map((item, index) => {
                const style ={
                    background: `url('/images/covers/${item.cover}.jpg') no-repeat`
                }

                return (
                    <Link key={item.id} to={`/artist/${item.id}`}
                        className="artist_item"
                        style={style}
                    >
                        <div><h2>{item.name}</h2></div>
                    </Link>
                );
            })
        }   
    }
    
    return (
        <div className="artists_list">
            <h1> artist list here</h1>
            <div> {showData(props)}</div>
        </div>
    );
};