import "./cmtItem.css";

export default function CmtItem({userAvaUrl, content, username}){
    
    return(
        <div className="cmt-container">
            <div className="cmt-avatar">
                <img src={userAvaUrl}></img>
            </div>
            <div className="CmtInfor-container">
                <div className="cmt-username">{username}</div>
                <div className="cmt-content">{content}</div>
            </div>
        </div>
    )
}