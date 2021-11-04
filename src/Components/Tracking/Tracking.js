import React from 'react';

const Tracking = () => {
    return (
        <div>
             <div className="container my-5">
    
    <section className="bg-brand shadow w-75 mx-auto p-5 rounded-3">
      <form>
      
        <div className="row d-flex justify-content-center ">
         
          <div className="col-md-5 col-12">
            
            <div className="form-outline">
              <input type="email" id="form5Example27" placeholder='Track Your Order' className="form-control p-3" />
              
            </div>
          </div>
         

         
          <div className="col-auto">
           
            <button type="submit" className="btn btn-outline-light p-3">
              Track Parcel
            </button>
          </div>
          
        </div>
       
      </form>
    </section>
   
  </div>
        </div>
    );
};

export default Tracking;