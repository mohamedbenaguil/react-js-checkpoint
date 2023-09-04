import React from 'react'
import './Register.css'
function Register() {
  return (
    <div>
        <>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossOrigin="anonymous"
  />
  <div className="body">
    <div className="veen">
      <div className="login-btn splits" style={{}}>
        <p>      "Welcome to our website! Here, you'll discover unparalleled quality at prices that perfectly match your expectations."</p>
        <button className="active">Login</button>
      </div>
     
      <div className="wrapper">
        <form id="login" tabIndex={500}>
          <h3>Login</h3>
          <div className="mail">
            <input type="mail" name="" />
            <label>Mail or Username</label>
          </div>
          <div className="passwd">
            <input type="password" name="" />
            <label>Password</label>
          </div>
          <div className="submit">
            <button className="dark">Login</button>
          </div>
        </form>
        <form id="register" tabIndex={502}>
          <h3>Register</h3>
          <div className="name">
            <input type="text" name="" />
            <label>Full Name</label>
          </div>
          <div className="mail">
            <input type="mail" name="" />
            <label>Mail</label>
          </div>
          <div className="uid">
            <input type="text" name="" />
            <label>User Name</label>
          </div>
          <div className="passwd">
            <input type="password" name="" />
            <label>Password</label>
          </div>
          <div className="submit">
            <button className="dark">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t.site-link{\n      padding: 5px 15px;\n\t\t\tposition: fixed;\n\t\t\tz-index: 99999;\n\t\t\tbackground: #fff;\n\t\t\tbox-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);\n\t\t\tright: 30px;\n\t\t\tbottom: 30px;\n\t\t\tborder-radius: 10px;\n\t\t}\n\t\t.site-link img{\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t}\n\t"
    }}
  />
</>

    </div>
  )
}

export default Register