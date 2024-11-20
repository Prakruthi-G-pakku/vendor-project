import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Editvendor({vendors, onUpdatevendor }) {
  const { id } = useParams(); 
  const navigate = useNavigate();
  console.log("vendor ID from URL: ", id);
  console.log("vendor List: ", vendors);
  
  const vendor = vendors.find((vendor) => vendor._id === id);

  if (!vendor) {
    return <div>vendor not found!</div>;
  }

  const [vendorID, setvendorID] = useState(vendor.vendor_id);
  const [vendorCompanyName, setvendorCompanyName] = useState(vendor.vendor_company_name);
  const [vendorName, setvendorName] = useState(vendor.vendor_name);
  const [vendorLocation, setvendorLocation] = useState(vendor.vendor_location);
  const [vendorRating, setvendorRating] = useState(vendor.vendor_rating);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedvendor = {
      _id: vendor._id, 
      vendor_id: vendorID,
      vendor_company_name:vendorCompanyName,
      vendor_location: vendorLocation,
      vendor_rating: vendorRating,
      vendor_name: vendorName
    };

    onUpdatevendor(updatedvendor);

    // Redirect back to the list page after the update
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit vendor</h2>
      <div>
        <label>vendor ID:</label>
        <input
          type="Number"
          value={vendorID}
          onChange={(e) => setvendorID(e.target.value)}
          required
        />
      </div><br></br>

      <div>
        <label>vendor Company Name:</label>
        <input
          type="text"
          value={vendorCompanyName}
          onChange={(e) => setvendorCompanyName(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <label>vendor Location:</label>
        <input
          type="text"
          value={vendorLocation}
          onChange={(e) => setvendorLocation(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <label>vendor Rating:</label>
        <input
          type="text"
          value={vendorRating}
          onChange={(e) => setvendorRating(e.target.value)}
          required
        />
      </div><br></br>
      <div>
        <label>vendor Name:</label>
        <input
          type="ttext"
          value={vendorName}
          onChange={(e) => setvendorName(e.target.value)}
          required
        />
      </div><br></br>
      <button type="submit">Update vendor</button>
    </form>
  );
}

export default Editvendor;


//npm install react-router-dom