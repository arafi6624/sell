import CartIcon from '../assets/cart.png'

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="links-container">
      <li className="link-item"><a href="#" className="logo">Sell.</a></li>
        <li className="link-item"><a href="#" className="link">Home</a></li>
        <li className="link-item"><a href="#" className="link">Create Listing</a></li>
      </ul>
      <div className="user-interactions">
        <div className="cart">
          <img src={CartIcon} alt="" className="cart-icon"/>
          <span className="cart-item-count">00</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar