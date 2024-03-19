/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function User(props) {
        const {u}= props
        const {id, name, age, imgURL, height} = u
   
  return (
    <>
    <div className="userInfo">
        <img src={imgURL} alt="image" />
        <h3>Id: {id}</h3>
        <h2>Name: {name}</h2>
        <p>Age: {age} </p>
        <p>Height: {height}</p>
    </div>
    </>
  )
}