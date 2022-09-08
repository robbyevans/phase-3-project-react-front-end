import React,{useEffect,useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Header from "./Header";

function App() {

  const [poemList,setPoemList]=useState([])
  const[isTrue,setIsTrue]=useState(true)

  useEffect(()=>{
    fetch("http://localhost:8004/poems")
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
        <Header>


        </Header>
        <button className="btn" onClick={handleClick}> create list</button>
      <div className="app">

        
          {isTrue ? <div className="sidebar"><NewPoemForm onAdd={addNewPoem} /></div> : null}
        

        <PoemsContainer poemList={poemList} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
