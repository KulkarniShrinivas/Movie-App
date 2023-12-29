import { useState, useEffect } from "react"

import {fetchDataFromApi}  from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice";


function App() {
  const dispatch = useDispatch();
  //so now we have stored and now how to use this stored values or retrive by using useSelector
  //in state we have all the url and genras from homeslice we can take anything 
  const {url} = useSelector((state) => state.home);


  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    })
  }
  
  return (
 
      <div>
        {url?.total_pages}
      </div>
      
  );
}

export default App
