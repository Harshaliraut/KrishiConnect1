import React from 'react'

const App = () => {
 
  return (
    <>
      <NavigationBar />
      <Slider/>
      {/* <Buttons/> */}
      {/* <div style={containerStyles}>
        <Slider slides={slides} />
      </div> */}
       <Home/>
      <Card/>
      <div className="container">
    
      {/* <Schemes/> */}
      <Contact/>
     
      </div>
      <Footer/>
    </>
  );
};

export default App;
