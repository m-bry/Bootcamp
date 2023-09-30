function Child(props) {
  return (
    <>
      <input 
        type="text" 
        placeholder="Please Enter Your Name"
        onChange={props.handleChange}
        value={props.setName}
        />
    </>
  )
}

export default Child