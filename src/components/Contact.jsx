import React , { useState }from "react";




function Contact(){
     const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [bmi, setBmi] = useState(0);
  const [bmiword, setBmiword] = useState("");


    const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height) ** 2;
    setBmi(bmi);
  };
    
  function handelBmi(){
   setBmiword(() => {
     if (bmi < 18.5 ) {
          return ("UNDERWEIGHT");
      } else if (bmi >= 18.5 && bmi <= 24.9){
        return ("NORMAL");
      }else if (bmi >= 25 && bmi <= 29.9) {
        return ("OVERWEIGHT");
      }else {
        return ("OBESE");
      }
      });
      
  }
 


    return(
        <form  onSubmit={calculate}>
        <div class="bmicual container">
   <div class="input-group">
  <input value={height} name="Hight" onChange={(e) => setHeight(e.target.value)} class="form-control" id="exampleWight" type="text" class="form-control" placeholder="height in meters" aria-label="Hight" />
  <span class="input-group-text">and</span>
 <input value={mass} name="Wight"  onChange={(e) => setMass(e.target.value)} class="form-control" id="exampleWight" type="text" class="form-control" placeholder="mass in kg" aria-label="Wight" />
 <img src="https://www.cdc.gov/healthyweight/images/assessing/bmi-adult-fb-600x315.jpg" />
  </div>
 <input class="form-control" type="text" value={bmi + " " + bmiword} aria-label="Disabled input example" disabled readonly />
  <input  onClick={handelBmi} class=" btn btn-outline-dark" type="submit" value="Submit"></input>
</div>
</form>
  
    )
}
export default Contact;