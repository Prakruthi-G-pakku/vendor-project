import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addvendor({ onAddvendor }) {
  const [vendorID, setvendorID] = useState('');
  const [vendorCompanyName, setvendorCompanyName] = useState('');
  const [vendorName, setvendorName] = useState('');
  const [vendorLocation, setvendorLocation] = useState('');
  const [vendorRating, setvendorRating] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newvendor = {
      vendor_id: vendorID,
      vendor_company_name:vendorCompanyName,
      vendor_location: vendorLocation,
      vendor_rating: vendorRating,
      vendor_name: vendorName
    };

    try {
      const response = await axios.post('http://localhost:3000/api/vendor/', newvendor);
      
      if (response.status === 201) {
        onAddvendor(response.data);  // Update the parent component if needed
        setvendorID('');
        setvendorCompanyName('');
        setvendorLocation('');
        setvendorRating('');
        setvendorName('');
        navigate('/');
      }
    } catch (error) {
      console.error("Error adding vendor:", error);
      alert("An error occurred while adding the vendor.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add vendor</h2>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">vendor ID:</label>
        <input type="Number" className="form-control" value={vendorID} onChange={(e) => setvendorID(e.target.value)} required />
      </div><br></br>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">vendor Company Name:</label>
        <input type="text" className="form-control" value={vendorCompanyName} onChange={(e) => setvendorCompanyName(e.target.value)} required />
      </div><br></br>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">vendor Location:</label>
        <input type="text" className="form-control" value={vendorLocation} onChange={(e) => setvendorLocation(e.target.value)} required />
      </div><br></br>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">vendor Rating:</label>
        <input type="text" className="form-control" value={vendorRating} onChange={(e) => setvendorRating(e.target.value)} required />
      </div><br></br>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">vendor Name:</label>
        <input type="text" className="form-control" value={vendorName} onChange={(e) => setvendorName(e.target.value)} required />
      </div><br></br>
      <button type="submit" className="btn btn-primary">Add vendor</button>
    </form>
  );
}

export default Addvendor;