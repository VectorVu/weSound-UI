import "./listCmt.css";
import React from "react";
import CmtItem from "./commentItem/cmtItem";
import request from "../../../api/request";
export default function ListComment({ trackId }) {
    const [listComment, setListComment] = React.useState();
    const fetchComment = async () => {
        try {
            const res = await request({
                url: `/api/comment/${trackId}`,
                method: "GET"
            })
            if (res.success) {
                setListComment(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        fetchComment();
    }, [])

    const renderComments = () => {
        return (
            <>
                {
                    listComment.map((cmt) => (
                        <div key={cmt._id}>
                            <CmtItem
                                content={cmt.content}
                                username={cmt.author.username}
                                userAvaUrl={cmt.author.avatarUrl}
                            />
                        </div>
                    )
                    )
                }
            </>
        )
    }
    return (
        <div>
            <div className='detail-cmtCount'>
                <img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjAuMyAoNzg5MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPnN0YXRzX2NvbW1lbnQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzLz4NCiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4NCiAgICAgICAgPGcgaWQ9InN0YXRzX2NvbW1lbnQiIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9InJnYigxNTMsIDE1MywgMTUzKSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNNC45OTk2MTQ5OCwzIEMzLjg5NTI1ODEyLDMgMywzLjg4NjU1NDg0IDMsNS4wMDU5MTkwNSBMMyw3Ljk5NDA4MDk1IEMzLDkuMTAxOTE5NDUgMy44ODc0MzMyOSwxMCA0Ljk5OTYxNDk4LDEwIEwxMS4wMDAzODUsMTAgQzEyLjEwNDc0MTksMTAgMTMsOS4xMTM0NDUxNiAxMyw3Ljk5NDA4MDk1IEwxMyw1LjAwNTkxOTA1IEMxMywzLjg5ODA4MDU1IDEyLjExMjU2NjcsMyAxMS4wMDAzODUsMyBMNC45OTk2MTQ5OCwzIFogTTUsMTAgTDUsMTMgTDgsMTAgTDUsMTAgWiIgaWQ9IlJlY3RhbmdsZS00MiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+DQo='></img>
                <span className="TrackAdditionnalCmtCount-num">{listComment ? listComment.length : ''} comments</span>
            </div>
            {listComment ? renderComments() : ''}
        </div>
    )
}