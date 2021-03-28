import '../Styles/Sidebar.css'

function Sidebar() {
  return(
    <div className="sidebar">
      <nav>
        <div id="hamburger"><i className="fas fa-bars"></i></div>
          <i className="fas fa-pencil-alt"></i>
          <i className="fas fa-palette"></i>
          <i className="fas fa-eraser"></i>
          <i className="fas fa-shapes"></i>
      </nav>
    </div>
  )
}

export default Sidebar
