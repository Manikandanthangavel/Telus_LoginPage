import Login from './Login'
import './App.css';
import './myStyles.css'
import log from './pictures/logo.jpg'
import First from './First';
function App() {
 
    return (
      <div>
         <html>
           <header>
          <div className='container'>
            <div className='navbar-brand navbar-brand'>
            <a href='http://www.telus.com'>
             <img  src={log} width='230px'></img> 
          </a>
            </div>
          </div>
          </header>
          <br></br>
          <Login/>
          <First/>
          <footer>


    <div className="footer">
        <p><i className="fa fa-lock color-green"></i>This is a secure page</p>
        <div className="divider"></div>
        <img src={log} width='154px' alt='90px'></img>
        <p>© 2021 TELUS Communications Inc.</p>


</div>

</footer>
          </html>
    </div>
  );

}

export default App;
