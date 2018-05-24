import React from 'react'


export default (props) => {

    const showAlbums = ({albums}) => {
        if(albums){
                return albums.map((item, index) => 
                    <img key={index} src={`/images/albums/${item.cover}.jpg`}
                    alt="cover" 
                    />
                )
            }
        }

    return  (
        <div className="albums_list">
            {showAlbums(props)}
        </div>
    );
}