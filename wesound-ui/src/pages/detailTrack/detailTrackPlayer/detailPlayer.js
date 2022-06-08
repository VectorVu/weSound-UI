import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import request from "../../../api/request";
import "./datailPlayer.css"

export default function DetailTrackPlayer({ trackId }) {

    const [wavesurfer, setWaveSuffer] = useState();
    const [track, setTrack] = useState({
        status: "idle",
        data: null
    });
    const [play, setPlay] = useState(false);
    let url
    const imgPause = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjhweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgOCAxNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuMi4yICg5OTgzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5QbGF5IDI4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9ImJ1dHRvbnMiIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjUzLjAwMDAwMCwgLTg5MC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE2NTMsOTA0IEwxNjU0Ljg0NjE1LDg5NyBMMTY1Myw4OTAgTDE2NjEsODk3IEwxNjUzLDkwNCBaIiBpZD0iUGxheS0yOCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
    const imgPlay = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjhweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgOCAxMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuMi4yICg5OTgzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5QYXVzZSAyODwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJidXR0b25zIiBza2V0Y2g6dHlwZT0iTVNBcnRib2FyZEdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY4OS4wMDAwMDAsIC04OTEuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjk0LDg5MSBMMTY5NCw5MDMgTDE2OTcsOTAzIEwxNjk3LDg5MSBMMTY5NCw4OTEgWiBNMTY4OSw4OTEgTDE2ODksOTAzIEwxNjkyLDkwMyBMMTY5Miw4OTEgTDE2ODksODkxIFoiIGlkPSJQYXVzZS0yOCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'
    if (play) {
        url = imgPlay
    } else {
        url = imgPause
    }
    const waveformRef = useRef()

    // async function fetchAudio() {
    //     const getTrack = await request({
    //         url: `/api/tracks/${trackId}`,
    //         method: "GET"
    //     })
    //     if (getTrack.success) {
    //         setTrack({
    //             status: "success",
    //             data: getTrack.data
    //         })
    //         if (waveformRef.current) {
    //             const wave = WaveSurfer.create({
    //                 container: waveformRef.current,
    //                 barWidth: 1,
    //                 barHeight: 0.5, // the height of the wave
    //             });

    //             wave.load(getTrack.data.streamUrl)
    //             wave.on('finish', function () {
    //                 setPlay(!play)
    //                 console.log(1);
    //             });
    //             setWaveSuffer(wave)
    //         }
    //     }
    //     else {
    //         setTrack({
    //             status: "error",
    //             data: null
    //         })
    //     }

    // }
    // useEffect(() => {
    //     fetchAudio();
    // }, [trackId])
    // function onHandlePlayTrack(wavesurfer) {
    //     // handlePlayTrack(wavesurfer)
    // }
    return (
        <div className="detail-header" >

            <div className="header-content" ref={waveformRef}>
                <div className="TrackContent-Title-player">
                    <button className="detailPlay-button">
                        <img src={url}></img>
                    </button>
                    <div className="detail-containerUserName">
                        <div className="detail-trackName">The angel</div>
                        <div className="detail-userName">Carosaome</div>
                    </div>
                </div>

                <div className="detailTrack-img">
                    <img src="https://www.w3schools.com/howto/img_forest.jpg"></img>
                </div>
            </div>
        </div>
    )
}