import React from 'react';

const Order = (props) => {

    const {title,name, mobile, email} = props.order;
    return (
        <div>
           
                    
                    <tbody>
                     <tr>
                        <td>1</td>
                        <td>{title}</td>
                        <td>{name}</td>
                        <td>{mobile}</td>
                        <td>{email}</td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                 



                
        </div>
    );
};

export default Order;