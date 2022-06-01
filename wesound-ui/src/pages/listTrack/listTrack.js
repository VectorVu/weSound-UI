import axios from "axios";
import React from "react";
import "./listTrack.css"
import ProfileTrack from "../Profile/profile-components/profile-track/profile-track";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/loader/loader";
export default function ListTrack(){
    // const [trackData, setTrackData]= React.useState({
    //     status :"idle",
    //     data:{
    //         tracks:[],
    //         total:0
    //     }
    // });
   
    // const [skip, setSkip] = React.useState(0);

    // const fetchTracks = async (skip) => {
    //   try {
    //     setTrackData((preState) => ({
    //       ...preState,
    //       status: "loading",
    //     }));
    //     const res = await axios.get("/api/tracks", {
    //       params: {
    //         offset: skip,
    //       },
    //     });
  
    //     if (res.success) {
    //       setTrackData((preState) => ({
    //         status: 'success',
    //         data: {
    //           tracks: [...preState.data.tracks, ...res.data.data],
    //           total: res.data.total,
    //         }
    //       }))
    //       setSkip(skip);
    //     } else {
    //       setTrackData((preState) => ({
    //         ...preState,
    //         status: "error",
    //       }));
    //     }
    //   } catch (err) {
    //     setTrackData((preState) => ({
    //       ...preState,
    //       status: "error",
    //     }));
    //   }
    // };
    // React.useEffect(() => {
    //     fetchTracks(0);
    //   }, []);
    const [testState, setTestState] = React.useState({
        items: Array.from({length: 10})
    });
    const fetchTrackTest =()=>{
        setTimeout(() => {
            setTestState({
              items: testState.items.concat(Array.from({ length: 10 }))
            });
          }, 1500);
    }
    
  
    const renderTracks = () => {
    //   const hasMore = skip < trackData.data.total;
      return (
        <InfiniteScroll
        //   dataLength={trackData.data.tracks.length}
          dataLength={testState.items.length}

        //   next={() => fetchTracks(skip + MAX_ITEMS_PER_PAGE)}
          next={() => fetchTrackTest()}
        //   hasMore={hasMore}
          hasMore={true}
          loader={<Loader/>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {/* {trackData.data.tracks.map((track) => (
            <Row key={track._id}>
              <Col xs={12} md={3} key={track._id}>
                <Link to={`/tracks/${track._id}`}>
                  <Card
                    title={track.title}
                    description={track.description}
                    imageUrl={track.imageUrl}
                    note={track.createdName}
                  />
                </Link>
              </Col>
            </Row>  
          ))} */}
          {
              testState.items.map((i, index)=>(
                  <ProfileTrack key={index}/>
              ))
          }

        </InfiniteScroll>
      );
      
    }
    return (
        
          
            <div className="ListTrack-content">{renderTracks()}</div>
         
        
      );
}