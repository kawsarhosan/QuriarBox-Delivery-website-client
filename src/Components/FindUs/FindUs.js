import React from 'react';

const FindUs = () => {
    return (
        <div className='container'>
            <div className="  my-5 card bg-dark text-white">
                <img
                    src="/images/delivery.png"
                    className="card-img"
                    alt="..."
                />
                <div className="card-img-overlay text-center p-5">
                    <h2 className='custom-color fw-bold py-5'>FASTEST DELIVERY</h2>
                <p >You can get your valuable item in the <br/> fastest period of  time with safety. <br/> Because your emergency  is our first priority..</p> <br/>
                <h1 className='custom-color '><i class="fas fa-play-circle"></i></h1>
                </div>
            </div>


        <div className=' text-center my-5 fw-bold'>
            <h1 className='fw-bold custom-color '>Find Us</h1>
        </div>
        <div className='container'>
        <div className="card " styleName="max-width: 500px;">
  <div className="row  g-0 d-flex justify-content-center align-items-center">
    <div className="col-md-6">
      <img
        src="/images/map.png"
        alt="..."
        className="img-fluid"
      />
    </div>
    <div className="col-md-6">
      <div className="card-body fw-bold">
        
                <p><i className="fas custom-color fa-home me-2"></i>Farmgate, Tejgaon, Dhaka.</p>
                <p><i className="fas custom-color fa-clock me-2"></i>Monday - Friday: 10 am - 10pm, Sunday: 11 am - 9pm</p>
                <p><i className="fas custom-color fa-envelope me-2"></i>info@quriarbox.com.bd</p>
       
        
      </div>
    </div>
  </div>
</div>
        {/* <div className="d-flex justify-content-center align-items-center">
            <div>
                <img src="/images/map.png" alt="" />
            </div>
            <div className='bg-primary text-white p-2'>
                <p><i className="fas fa-home me-2"></i>Farmgate, Tejgaon, Dhaka.</p>
                <p><i className="fas fa-clock me-2"></i>Monday - Friday: 10 am - 10pm <br/>Sunday: 11 am - 9pm</p>
                <p><i className="fas fa-envelope me-2"></i>Monday - Friday: 10 am - 10pm <br/>Sunday: 11 am - 9pm</p>
            </div>
         </div> */}

     </div>
        </div>
    );
};

export default FindUs;