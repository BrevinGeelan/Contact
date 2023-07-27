import React, { useState, useEffect } from "react";

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
  const [contact, setContact] = useState(null);
  
  useEffect(() => {
    const fetchContact = async () => {
        try {
            const response = await fetch(
                `http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const data = await response.json();
            setContact(data);
        } catch (error) {
            console.error(error);
        }
    };

    if (selectedContactId !== null) {
        fetchContact();
    }
  }, [selectedContactId]);

  console.log("Contact: ", contact);

  const handleGoBack = () => {
    setSelectedContactId(null);
  }
return (
    <div>
        {contact ? (
            <div>
                <h2> {contact.name}</h2>
                <p>Username: {contact.username}</p>
                <p>Email Address: {contact.email}</p>
            </div>
        ) : (
            <div> No Contact Selected</div>
        )}
        <button onClick={handleGoBack}>Go Back</button>
    </div>
);
    }