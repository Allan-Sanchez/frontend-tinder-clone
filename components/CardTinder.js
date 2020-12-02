import { useState ,useEffect} from "react";
import TinderCard from "react-tinder-card";
import {clientAxios} from "../config/Axios"
const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getData = async() =>{
      const response = await clientAxios.get('/tinder/card');
      setPeople(response.data)
      console.log(response.data);
    }
    getData();
  }, [])

  const swiped = (direccion, nametoDelete) => {
    console.log(nametoDelete);
  };

  const outOfFrame = (nametoDelete) => {
    console.log(nametoDelete);
  };

  return (
    <div>
      <div className="flex justify-center mt-16">
        {people.map((person) => (
          <TinderCard
            className="absolute"
            key={person.name}
            preventSwipe={["up", "dowm"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
            className="card"    
            style={{ backgroundImage: `url(${person.imgUrl})` }}>
              <h3 className="absolute bottom-0 text-gray-800 m-5 font-bold text-2xl">{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
