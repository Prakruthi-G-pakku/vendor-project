import React from 'react';
import { Link } from 'react-router-dom';

function Getvendor({ vendors, onDeletevendor }) {
  return (
    <div>
      <ul style={{ textAlign: 'justify' }}>
        {vendors.map((vendor) => (
          <li key={vendor._id}>
            <strong>ID:</strong> {vendor.vendor_id} <span></span>
            <strong>Company Name:</strong> {vendor.vendor_company_name} <span></span>
            <strong>Location:</strong> {vendor.vendor_location} <span></span>
            <strong>Rating:</strong> {vendor.vendor_rating} <span></span>
            <strong>Name:</strong> {vendor.vendor_Name} <span></span>
            <Link to={`/edit-vendor/${vendor._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => onDeletevendor(vendor._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Getvendor;