import React from "react";

function Track(props) {

<div className="TrackContainer">

    <div className="TrackAlbumArt">

    </div>


    <div className="TrackInfo">

    <p className="TrackAlbumName">{props.TrackAlbumName}</p>
    <p className="TrackName">{props.TrackName}</p>
    <p className="TrackArtistName">{props.TrackArtistName}</p>
    <p className="TrackAlbumYear">{props.TrackArtistYear}</p>

    </div>


</div>


}