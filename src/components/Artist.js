import React, { Component } from 'react';
import Header from './Header';
import AlbumList from './AlbumList';


const REQ_URL = "http://localhost:3001/artists";

class Artist extends Component {
    constructor(props){
        super(props);

        this.state = {
            artist: ''
        }
    }

    componentDidMount(){
        const { artistId } = this.props.match.params;

        fetch(`${REQ_URL}/${artistId}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(jsonData => {
            this.setState({
                artist : jsonData
            })
        })
    }

    render(){
        return (
            <div>
               <Header />
               <div className="artist_bio">
                    <div className="avatar">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') 
                        no-repeat`}}
                        >
                        </span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
               </div>
               <AlbumList  albums={this.state.artist.albums}/>
            </div>
        );
    }
};

export default Artist;