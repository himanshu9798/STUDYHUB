import React, { useState } from 'react';
import './query.css'
import { FaEnvelope, FaStar } from 'react-icons/fa';
import img from '../image/bg1.jpg'

function Query() {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("")



  const handleStarClick = (index) => {
    setRating(index);
    if (index === 1) {
      setText("Poor😈");
    } else if (index === 2) {
      setText("Fair😔");
    } else if (index === 3) {
      setText("Good 😊");
    } else if (index === 4) {
      setText("Better👍");
    } else if (index === 5) {
      setText("Best👌");
    }
  };

  return (
    <div className='Query'
    style={{
      
    }}>
      {/* <img style={{position:"absolute",top:"35%",left:"30%",zIndex:"-1"}} src={logo} alt='logo'></img> */}
      <h1 style={{ textAlign: 'center', color: '#05d6fa' }}>
        If You Have Any Query You Feel Free To Contact Us!
      </h1>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          width: '40%',
          boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.3), -10px -10px 30px rgba(255, 255, 255, 0.6)",
          marginLeft: '30%',
          borderRadius:"5%",
          lineHeight: '2px',
          marginBottom: "5%"
        }}
      >
        <FaEnvelope size={50} style={{ color: '#4A90E2', marginLeft: '45%' }} />
        <h1 style={{ textAlign: 'center', color: '#4A90E2' }}>FEEDBACK FORM</h1>
        <p style={{ textAlign: 'center' }}>
          The Query You Have or Feedback For Us
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
        >
          <FaStar
            size={30}
            style={{ color: rating >= 1 ? '#4A90E2' : 'gray' }}
            onClick={() => handleStarClick(1)}
          />
          <FaStar
            size={30}
            style={{ color: rating >= 2 ? '#4A90E2' : 'gray' }}
            onClick={() => handleStarClick(2)}
          />
          <FaStar
            size={30}
            style={{ color: rating >= 3 ? '#4A90E2' : 'gray' }}
            onClick={() => handleStarClick(3)}
          />
          <FaStar
            size={30}
            style={{ color: rating >= 4 ? '#4A90E2' : 'gray' }}
            onClick={() => handleStarClick(4)}
          />
          <FaStar
            size={30}
            style={{ color: rating >= 5 ? '#4A90E2' : 'gray' }}
            onClick={() => handleStarClick(5)}
          /> 
        </div>
        <h2 style={{ textAlign: "center", color: "#4A90E2" }}>{text}</h2>
        <form style={{ padding: "20px" }}>
          <input style={{ width: "100%", height: "30px", border: "none", outline: "2px double black" }} type='text' placeholder=' 👤Email Address'></input>
          <br /><br /><br /><br />   <br /><br /><br /><br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <input style={{ width: "65%", height: "35px", border: "none", outline: "2px double black" }} type="text" placeholder='Name'></input>

            <fieldset style={{ width: "65%", marginLeft: "5%", border: "2px double",backgroundColor:"white" }}>
              <legend>Type:</legend>
              <select style={{ border: "none", outline: "none", width: "100%", marginTop: "1%" }} >
                <option style={{width:"100%",height:"100%"}}>Suggestion</option>
                <option style={{width:"100%",height:"100%"}}>Query</option>
                <option style={{width:"100%",height:"100%"}}>Feedback</option>
                <option style={{width:"100%",height:"100%"}}>Other</option>
              </select>
            </fieldset>

          </div>
          <br /><br /><br /><br />   <br /><br /><br /><br />
          <textarea style={{ width: "100%", height: "100px", border: "none", outline: "2px double black" }} placeholder='Message'>


          </textarea>
          <br /><br /><br /><br />   <br /><br /><br /><br />
          <button style={{ width: "100%", textAlign: "center", backgroundColor: "#4A90E2", fontSize: "20px", fontWeight: "1000", color: "white" }}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Query;
