import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Addvendor from './components/addVendor';
import Getvendor from './components/getVendor';
import Editvendor from './components/editVendor';
import axios from 'axios';

function App() {
  const [vendors, setvendor] = useState([]);

 
  useEffect(() => {
    const fetchvendor = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/vendor/');
        setvendor(response.data);
      } catch (error) {
        console.error('Error fetching vendor:', error);
      }
    };
    fetchvendor();
  }, []);

  const handleAddvendor = (newvendor) => {
    setvendor([...vendors, newvendor]);
  };

  const handleUpdatevendor = (updatedVendor) => {
    const updatedvendors = vendors.map((vendor) =>
      vendor._id === updatedVendor._id ? updatedVendor : vendor
    );
    setvendor(updatedvendors);
  };

  const handleDeletevendor = async (vendorID) => {
    try {
   
      await axios.delete(`http://localhost:3000/api/vendor/${vendorID}`);

      setvendor(vendors.filter((vendor) => vendor._id !== vendor));
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  };

  return (
    <Router>
      <div className="container">
        <h1>Vendor Management</h1>
        <nav>
          <Link to="/">vendor List</Link> | <Link to="/add-vendor">Add vendor</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Getvendor vendors={vendors} onDeletevendor={handleDeletevendor} />} />
          <Route path="/add-vendor" element={<Addvendor onAddvendor={handleAddvendor} />} />
          <Route path="/edit-vendor/:id" element={<Editvendor vendors={vendors} onUpdatevendor={handleUpdatevendor} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;