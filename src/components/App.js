import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import './App.css';
import '../api/Youtube'
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Header from "./Header";

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('cats');
    }, []);

    const onTermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    return (
        <div className={"main-container ui container"}>

            <Header/>

            <SearchBar onTermSubmit={onTermSubmit}/>

            <div className={"ui grid"}>
                <div className={"ui row"}>
                    <div className={"eleven wide column"}>
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className={"five wide column"}>
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}/>
                    </div>
                </div>

            </div>

        </div>
    );

}


export default App;
