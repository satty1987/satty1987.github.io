import React from "react";


function App() {
  const account = window.customer;
  return (

    <div>

      {account ?
        <div>
          <h4>Account Information</h4>
          <p><strong>Customer Name</strong> : {account.customerName}</p>
          <p><strong>Customer Ban</strong> : {account.customerBan}</p>
          <p><strong>Customer Email</strong> : {account.customerEmail}</p>
          <p><strong>Customer Address</strong> : {account.customerAddress}</p>
        </div> : <h4>Sorry No Data Found</h4>
      }

    </div>

  );
}

export default App;
