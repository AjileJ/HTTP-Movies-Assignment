import React, {useState} from 'react';
import axios from 'axios';


const UpdateMovie = props => {
  const initialItem = {
    id: props.match.params.id,
    title: '',
    director: '',
    metascore: '',
    stars: []
  }
 
  const [update, setUpdate] = useState(initialItem);

  const handleChanges = event => {
    console.log(update.title);
    event.preventDefault();
    setUpdate({...update, [event.target.name]:event.target.value})
  }
 

  const handleSubmit = event => {
    const id = props.match.params.id;
    console.log(id);
    event.preventDefault();
    console.log(update)
    axios
    .put(`http://localhost:5000/api/movies/${id}`, update)
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
        {e => handleChanges(e)} value = {update.title}/>
        <input type = 'text' name = 'director' onChange = 
        {e => handleChanges(e)} value = {update.director}/>
        <input type = 'number' name = 'metascore' onChange =
        {e => handleChanges(e)} value = {update.metascore}/>
        {/* <input type = 'array' name = 'stars' onChange = 
        {e => handleChanges(e)} value = {update.stars}/> */}
        <button className = 'form'>Update Movie</button>
      </form>
    </div>
  )
}
export default UpdateMovie;