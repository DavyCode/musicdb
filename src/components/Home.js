import React, { Component } from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';

const ARTIST_URL = "http://localhost:3001/artists";


class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            data : ''
        }
    }

    componentDidMount(){
        fetch(ARTIST_URL, {
            method : 'GET'    
        })
        .then(response => response.json())
        .then(jsonData => {
            this.setState(() =>({data: jsonData}))
        })

    }

    render(){
        return (
            <div>
               <Banner /> 
               <ArtistList artistData={this.state.data}/>           
            </div>
        );
    }
};

export default Home;