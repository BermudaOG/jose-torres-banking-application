import React from 'react';
import Card from './card';
import bankImage from './bank.png';

function Home() {
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={<img src={bankImage} className="img-fluid" alt="Responsive image" />} // Use the imported image
    />
  );
}

export default Home;
