function Listing() {
  return (
    <div>
      <form action="">
        <label for="title">Title:</label><br />
        <input type="text" id="title" name="title" /><br />
        <label for="description">Description:</label><br />
        <input type="textarea" id="description" name="description" /><br />
        <label for="price">Price:</label><br />
        <input type="number" id="price" name="price" /><br />
        <label for="image">Image:</label><br />
        <input type="file" id="image" name="image" /><br />

      </form>
    </div>
  )
}

export default Listing