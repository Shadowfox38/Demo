function Navbar(props)
{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 sticky-top">
      <a className="navbar-brand" href="#"><h3>Demo Site</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a className="nav-link" href="/src/register.html">Sign Up</a></li>
          <li><a className="nav-link" href="#">Login</a></li>
        </ul>
    </div>
  </nav>
  );
}
function Image(props)
{
  return(
    <img src="https://res.cloudinary.com/alexandracaulea/image/upload/v1583497233/intro-illustration_qneuer.svg"></img>
  );
}
function Text(props)
{
  return(
    <section className="intro">
      <h1 className="head">Image Classification</h1>
      <p className="sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit,quis dictum sapien magna in tellus. Sed et vestibulum mi. Pellentesque tincidunt ma. Quisque molestie sodales quam, vitae lacinia odio porttitor posuere.</p>
    </section>
  );
}
class Intro extends React.Component
{
  handle(i)
  {
    if(this.props.mode == i)
      return <Text/>
    else
      return <Image/>
  }
  render()
  {
    return(
      <div className="row mb-4">
        <div className="col-md-6 col-sm-12 my-auto">
          {this.handle(1)}
        </div>
        <div className="col-md-6 col-sm-12 my-auto">
          {this.handle(2)}
        </div>
      </div>
    );
  }
}
function Footer(props)
{
  return(
    <div className="container-fluid text-center text-md-left blue">
      <div className="row">
        <div className="col">
          <footer className="page-footer font-small">
            <div className="footer-copyright text-center py-3">
              <p>An Initiative By Akhil Jain</p>
              <p>© 2020 Copyright: Akhil J</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
function Container(props)
{
  return(
    <div className="container p-4">
      <Intro mode={1}/>
      <Intro mode={2}/>
    </div>
  );
}
class App extends React.Component
{
  render()
  {
    return(
      <div className="main">
        <Navbar/>
        <Container/>
        <Footer/>
      </div>
    );
  }
}
ReactDOM.render(<App/>,document.querySelector('#root'));
