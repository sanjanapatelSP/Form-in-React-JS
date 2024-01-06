import React , {useState}  from 'react';
const App = () =>{

    const [name,setName]=useState(" ....? ")
    const [fullName,setFullName]=useState()
    const inputEvent = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }


    const onSubmit=()=>{
        // console.log("hfubfeuvbfb")
         setFullName(name)
    }
    return (
        <>
        <h1> Hey...! , {fullName} !!</h1>
        <input type='text' placeholder='Enter your name...' onChange={inputEvent}  value={name}/>
        <button onClick={onSubmit} >Click me 👍 </button>
        </>
    )
}

export default App;