import React,{useEffect,useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Header from "./Header";
import Footer from "./Footer"

function App() {

  const [poemList,setPoemList]=useState([])
  const[isTrue,setIsTrue]=useState(true)

  useEffect(()=>{
    fetch("https://lyrical-web-app.herokuapp.com/")
    .then((resp)=>(resp.json()))
    .then((poem)=>setPoemList(poem))
  },[])

  function addNewPoem(newPoem){
    setPoemList([...poemList,newPoem])
  }

  function onDelete(item){
    const updatedPoemList=poemList.filter(poem=>poem.id !=item.id)
    setPoemList(updatedPoemList)
    window.location.reload()

  }
  useEffect(()=>{
    console.log('item deleted')
  },[])

    function handleClick(){
      setIsTrue(!isTrue)
    }

  return (
    <div class="wrapper">
        <Header/>
        <button className="btn" onClick={handleClick}> Add Lyrics +</button>
      <div className="app">
          {isTrue ? <div className="sidebar"><NewPoemForm onAdd={addNewPoem} /></div> : null}
        <PoemsContainer poemList={poemList} onDelete={onDelete} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
