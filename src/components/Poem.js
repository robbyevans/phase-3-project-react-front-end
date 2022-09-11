import React,{useState} from "react";

function Poem({poem,onDelete}) {
  const{id,title,lyrics,author,genre}=poem;

  const[isRead,setIsRead]=useState("true")
  
function handleClick(){
  setIsRead(!isRead)
}
function handleDelete(){
  fetch(`http://localhost:9292/songs/${id}`,{
    method:"DELETE",
  })
  .then((resp)=>resp.json())
  .then((item)=>onDelete(item))
}
  
  return (
    <div className="poem-wrapper">
      <div className="content-wrapper">
        <h3>{id}:{title}</h3>
        <p>
          <strong>- By {author}</strong>
        </p>
        <p>{lyrics}</p>
      </div>
      <div className="utilities">
        <div className="like-wrapper">
          <button className="btn like-btn" onClick={handleClick}>{isRead? <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABJElEQVQ4jc3TL0sEURSG8Z/rgkHUFQSxrpjWJmgx2PwEWy0bBcGggkUwiVGTNpuImEwmBcMqyAajxaIGg9rEf2uYKwzDzMq4G3zhMC/nnvPMvXfOkE89vxV054CVcIpe1HNuJBV2iSZeOgn7wl07sAFcBNgm3nHYDqweYBuYCX6pVVMxI1/AMaawjjUsh7USqon6N5zhuYgh1BIFg5jGXoAJcFjN2MQNxosYDkdK023M72A/o64aohw/8m4IKOMg0XSSAYNKeHbHgQ+4Cv61RXOaJvGB+0LOxjSNYRZHeOoEcEE0FduCaUd9mEMD550A1tCPrZ9E/KOMYCL4ckouTfN4lBiniuiX+musxGFdosFeTLz5E9cYFd1TlhqieW22qPln+gZ56UIPQSP2HwAAAABJRU5ErkJggg==">
          </img>:<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAr0lEQVRIid2SQQ6CQAxFHwYX3sIjeAFvIYlH4D7sYGnCglN4Aw9iXBoXkIwbCJOJIzS2CfiTLtqZvN/OFBaqDKiBrQX8DLSAA6qpyxshPAMuQNrn6Ze7Yp0YOx8it4Q74GAJf6LwRDG4A65zAMnEectvXSaDgYsYh3WxgXRNxVq1wcPaoPSTcAVj9bnRAXtLgyYcR9vgaGlw88EWn1x8KmpNcAd2Plh7ghJ4KTP/XW/ES32VE4FecwAAAABJRU5ErkJggg=="></img>}</button>
        </div>
        
        <div className="delete-wrapper"><button className="btn delete-btn" onClick={handleDelete}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAZUlEQVRIiWNgGCmggYGB4T8a7iBGIyMWsf8UOgbFTCYKDSMbwIKBYvU09wGxFqC7kGgfDhofjFowasGoBRQAFiLVoRfr2Ip5rGDAgugplEavxXBhZD1EAT8GBoYnJFjwBKpnGAIAUcAmPA1WYN0AAAAASUVORK5CYII="/></button></div>
      </div>
    </div>
  );
}

export default Poem;
