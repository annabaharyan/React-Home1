import './App.css';

function add1(){

  return document.querySelector('.num').innerHTML++

}
function add10(){

    let val=+document.querySelector('.num').innerHTML;
    val+=10;
    return document.querySelector('.num').innerHTML=val
  }
function sub1(){

    return document.querySelector('.num').innerHTML--
    }
function sub10(){

      let val=+document.querySelector('.num').innerHTML;
      val-=10;
      return document.querySelector('.num').innerHTML=val
    }

function App() {
  
  return (
   <div id="container">
      <div className='num'>0</div>
      <button className="addOne" onClick={add1}>Add +1</button>
      <button className="subOne" onClick={sub1}>Substract -1</button>
      <button  className="addTen"onClick={add10}>Add +10</button>
      <button  className="subTen"onClick={sub10}>Sub -10</button>
   </div>
  );
}

export default App;

