import  { useState }  from "react";
function Lpg(){
   
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs.username+""+inputs.age+""+inputs.weight+""+inputs.email);
    }
  
    return (
        <div className = "l">
        <div>
        <img  className = "l1" src = " https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt = "hello"></img>
        </div>
      <form onSubmit={handleSubmit}>
      <div className = "l5">
      <div className = "l2">
        <label className="gi">Enter your Brand name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        </div>
        <div className = "l3">
        <label className="gi">Enter the level of lpg gass:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          </div>
          <div className = "l3">
        <label className="gi">Enter the weight of cyclinder:
          <input 
            type="number" 
            name="weight" 
            value={inputs.weight|| ""} 
            onChange={handleChange}
          />
          </label>
          </div>
          <div className = "l2">
        <label className="gi">Enter your Email:
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        </div>

          <div className = "l4">
          <input type="submit" />
          </div>
          </div>
      </form>
      </div>
    )
       
}
export default Lpg;
