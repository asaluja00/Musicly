import {Error, Loader, Searchbar, SongCard } from "../components";
import { genres } from '../assets/constants';
import { useGetSongsByCountryQuery, useGetSongsByGenreQuery, useGetSongsBySearchQuery, useGetTopChartsQuery } from "../redux/services/shazamCore";

import { useDispatch , useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Discover = () => {
    const dispatch =useDispatch();
    const {searchTerm} = useParams();

    const {activeSong , isPlaying} = useSelector((state)=> state.player );
    const {data , isFetching ,error } = useGetSongsBySearchQuery(searchTerm);


    const songs= data?.tracks?.hits?.map((song) => song.track);

    console.log(songs);
    console.log("test commit");


    if(isFetching) return <Loader title= "Loading Songs"/>;
    if(error)  return <Error/>

    return (
 
       <div className="flex flex-col">
            <div className="w-full flex justify-center items-center
            sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left"
                >Top Charts</h2>
          
            </div>
        <div className="flex flex-wrap sm:justify-start
         justify-center gap-8">
            {songs.map((song ,i)=>(
                <SongCard
                key={song.key}
                song={song}
                isPlaying = {isPlaying}
                activeSong={activeSong}
                i={i}
                />
            )
            )}
        </div>
       
    </div>




    )
}

export default Discover;
