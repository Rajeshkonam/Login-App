const Logout = props => {
  const {logout} = props
  return (
    <button type="button" onClick={logout} className="btn">
      Logout
    </button>
  )
}
export default Logout
