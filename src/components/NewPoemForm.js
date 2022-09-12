import React,{useState} from "react";

function NewPoemForm(props) {
  const [formData,setFormData]=useState({
 
    title: "",
    author: "",
    genre: "",
    lyrics: ""
  })

    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }

 function handleSubmit(event){
  event.preventDefault();
  
    fetch("https://lyrical-web-app.herokuapp.com/songs/", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "title": formData.title,
        "author": formData.author,
        // "genre": formData.genre,
        "lyrics": formData.lyrics
        // "genre_id": formData.genre_id,
      })
      
    })
    
     .then(res => res.json())
     .then(data => props.onAdd(data))
     setFormData("");
     event.target.reset();
       
 }

  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input name="title" onChange={handleChange}  value={formData.title} placeholder="Song" />
      <input name="author" onChange={handleChange}   value={formData.author} placeholder="Artist" />
      <select  onChange={handleChange} value={formData.genre}>
        <option name= "1" >Reggae</option>
        <option name= "2" >Hip-hop</option>
        <option name= "3" >R&B</option>
        <option name= "4" >Afrobeats</option>
        <option name= "5"  >Bongo</option>
      </select>
      <textarea name="lyrics" onChange={handleChange} value={formData.lyrics} placeholder="Lyrics.." rows={10} />
      <input className="btn input-btn" type="submit" value="Post" />
    </form>
  );
}

export default NewPoemForm;
