function Child(props) {
  const { name } = props;
  const { handleChange } = props;
  return (
    <>
      <input 
        type="text" 
        placeholder="Please Enter Your Name"
        onChange={handleChange}
        value={name}
        />
    </>
  )
}

export default Child