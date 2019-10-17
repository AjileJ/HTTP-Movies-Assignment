import React, {useState} from 'react';
import axios from 'axios';

const initialItem = {
  title: '',
  director: '',
  metascore: '',
  stars: []
}



const UpdateMovie = props => {
 
  const [update, setUpdate] = useState(initialItem);

  const handleChanges = ev => {
    ev.preventDefault();
    setUpdate({...update, [ev.target.name]:ev.target.value})
  }
 

  const handleSubmit = event => {
    event.preventDefault();
    axios
    .put(`http://localhost:5000/update-movie/${update.id}`, update)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err.response)
    })
    props.history.push('/')
  }
  return (
    <div>
      <h1>Update Items</h1>
      <form onSubmit={handleSubmit}>
        <input type = 'text' name = 'title' onChange = 
        {handleChanges} value = {update.title}/>
        <input type = 'text' name = 'director' onChange = {handleChanges} value = {update.director}/>
        <input type = 'number' name = 'metascore' onChange = {handleChanges} value = {update.metascore}/>
        <input type = 'array' name = 'stars' onChange = 
        {handleChanges} value = {update.stars}/>
        <button className = 'form'>Update Movie</button>
      </form>
    </div>
  )
}
export default UpdateMovie;