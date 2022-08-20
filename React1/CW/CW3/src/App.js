import "./styles.css";
const writers=[
  {name:'Lesya', surname:'Ukrainka'},
  {name:'Taras', surname:'Shevchenko'},
  {name:'Ivan', surname:'Franko'}
]

const Writer=(name,surname)=>{
  return (
    <>
  <li>{name}</li>
  <li>{surname}</li>
  </>
  )
}

const Writers=()=>{
  return (
    <>
    <Writer {...writers[0]}/>
    </>
  )
}
export default function App() {
  return (
    <div className="App">
      <Writers />
    </div>
  );
}
