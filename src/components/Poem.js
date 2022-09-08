import React,{useState} from "react";

function Poem({poem,onDelete}) {
  const{id,title,content,author}=poem;

  const[isRead,setIsRead]=useState("true")
  
function handleClick(){
  setIsRead(!isRead)
}
function handleDelete(){
  fetch(`http://localhost:8004/poems/${id}`,{
    method:"DELETE",
  })
  .then((resp)=>resp.json())
  .then((item)=>onDelete(item))
}
  
  return (
    <div>
      <h3>{id}:{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By{author}</strong>
      </p>
      <button className="btn" onClick={handleClick}>{isRead? "Mark as read":"Mark as unread"}</button>
      <button className="btn" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Poem;
