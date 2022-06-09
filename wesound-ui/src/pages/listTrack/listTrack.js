import request from "../../api/request";
import React from "react";
import "./listTrack.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/loader/loader";
import TrackItem from "./listTrackItem/item";

const MAX_ITEMS_PER_PAGE = 4;

export default function ListTrack({ queryUrl }) {
  console.log(queryUrl);
  const [activeTrack, setActiveTrack] = React.useState();
  const [trackData, setTrackData] = React.useState({
    status: "idle",
    data: {
      tracks: [],
      total: 0
    }
  });

  const [skip, setSkip] = React.useState(0);

  const fetchTracks = async (skip) => {
    try {
      setTrackData((preState) => ({
        ...preState,
        status: "loading",
      }));
      const res = await request({
        url: queryUrl,
        method: "GET"
      });
      if (res.success) {
        setTrackData((preState) => ({
          status: 'success',
          data: {
            tracks: [...preState.data.tracks, ...res.data],
            total: res.data.total,
          }
        }))
        setSkip(skip);
      } else {
        setTrackData((preState) => ({
          ...preState,
          status: "error",
        }));
      }
    } catch (err) {
      setTrackData((preState) => ({
        ...preState,
        status: "error",
      }));
    }
  };
  React.useEffect(() => {
    fetchTracks(0);
  }, []);
  function changeActiveTrack(newId) {
    if (newId !== activeTrack) {
      setActiveTrack(newId);
    }
  }

  const renderTracks = () => {
    const hasMore = skip < trackData.data.total;
    return (
      <InfiniteScroll
        dataLength={trackData.data.tracks.length}
        next={() => fetchTracks(skip + MAX_ITEMS_PER_PAGE)}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {trackData.data.tracks.map((track) => (
          <div className="TrackItemContain" key={track._id}>
            <TrackItem
              title={track.title}
              poster={track.poster.username}
              imageUrl={track.imageUrl}
              streamUrl={track.streamUrl}
              id={track._id}
              changeActiveTrack={changeActiveTrack}
              activeTrack={activeTrack}
              playCount={track.playCount}
            />
          </div>

        ))}
      </InfiniteScroll>
    );

  }
  return (


    <div className="ListTrack-content">{renderTracks()}</div>


  );
}