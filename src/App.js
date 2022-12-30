import logo from './logo.svg';
import './App.css';
import signature from './signature.png';

function App() {
  return (
    <div className="Wrapper">
      <div className='container'>
        <div className='header'>
            <div>2416 N. Ross Ave., Portland, Oregon 97227</div>
            <div>Phone:(503) 288-7437</div>
            <div>Fax:(503) 288-8603</div>
        </div>
        <img className='logo' src={logo}/>
      </div>
      <div className='body'>
        <p>
        Valued Customer, 
        </p>
        <p>
        Due to rising freight and fuel costs, 
        we wanted to let you know about changes 
        to our freight policy. Over the last few 
        years, we have been able to absorb increases 
        in an effort to avoid changes to our pre-paid program. 
        Unfortunately, that is no longer possible. 
        As of January 1st, 2023, the updated freight policy is as follows:
        </p>
          <ul>
            <li>
              UPS and USPS orders of $300 or more qualify for prepaid shipping
            </li>
            <li>
            	Motor freight orders of $2,500 or more qualify for prepaid shipping, unless otherwise indicated
            </li>
            <li>
            	Motor freight orders less than $2500 are subject to shipping charges or can be shipped freight collect
            </li>
            <li>
            	Customers that average $5000 or more monthly are eligible for a reduced prepaid limit of $100
            </li>
          </ul>
          <p>
          Customers located in Alaska and Hawaii placing orders will be billed for all associated shipping charges, regardless of the amount of the order. 
          </p>
          <p>
          We appreciate your understanding and value your business. Please let us know if you have any questions and we look forward to continuing to work with you in 2023. 
          </p>
          <p className="thanks">Thanks,</p>
          <div className='name'>
            Andy Bruhn
            <div>President</div>
          </div>
          <img className="signature" src={signature}/>
      
      </div>

    </div>
  );
}

export default App;
