import { useEffect, useMemo, useRef, useState } from "react";
import { Body } from "./Components/Body"
import SignUp from "./Components/Signup"


function App() {
  const [userData, setUserData] = useState([])
  const [search, setSearch] = useState("")

  function useDebounce(value, delay ){
    const [debouncedValue, setDebouncedValue] = useState(value)
    
    useEffect(()=>{

      let timer = setTimeout(()=>{
        setDebouncedValue(value)
      },delay)

      return ()=>{
        clearTimeout(timer)
      }

    },[delay,value])


    return debouncedValue
  }

  async function getData(){
    const data = await fetch("https://dummyjson.com/users")
    const userData = await data.json();
    console.log(userData.users)
    setUserData(userData.users)
  }

  const debouncedValue = useDebounce(search, 500)

  console.log(debouncedValue)

  const filteredSearch = useMemo(()=>{
    return userData?.filter((user)=>user.firstName.toLowerCase().includes(search.toLowerCase()))
  },[debouncedValue,userData])

  useEffect(()=>{
    
    getData()

  },[])
  
  return (
    <div style={{display : "flex"  , alignItems : "center", justifyContent : "space-around"}}>
    <div style={{flexDirection : "column"}}>
      <label>Search Input</label>
      <input value={search} onChange={(e) => setSearch(e.target.value) } />
    </div>
    <div>
    <ul>User Details</ul>
    {filteredSearch?.map((user)=>
      <div key={user?.id}>
      <li>{user?.firstName}</li>
      </div>
    )}
    </div>

    </div>
  )
}

export default App
