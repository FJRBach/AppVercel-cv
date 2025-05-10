import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import LocationInfo from './components/LocationInfo';
import AcademicInfo from './components/AcademicInfo';
import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <ImageUploader />
      <PersonalInfo 
        name="Francisco Bachomo" 
        title="Programmer Technician" 
      />
      <LocationInfo city="Colima, México" />
      <AcademicInfo 
        education={[
          { title: 'Programmer Technician (CBTis 19 Miguel Hidalgo y Costilla)', years: '2016 - 2019' },
          { title: 'Computer Engineering (TecNM Colima)', years: '2020 - Present' },
        ]}
      />
    </div>
  );
}

export default App;