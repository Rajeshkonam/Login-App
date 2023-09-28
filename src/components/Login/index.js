const Login = props => {
  const {login} = props
  return (
    <button type="button" onClick={login} className="btn">
      Login
    </button>
  )
}
export default Login
