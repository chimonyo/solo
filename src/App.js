import Nav from "./Nav"
import data from "./data"
import Travels from "./Travels"

function App() {
  const travels = data.map(item => {
    return (
      <Travels
          img={item.imageUrl} 
          locationIcon={item.locationIcon}
          location={item.location}
          link={item.googleMapsUrl}
          title={item.title}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
        />        
    )
  })


  return (
    <>
    <Nav />
    {travels}
    </>
  );
}

export default App;
