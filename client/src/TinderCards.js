import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://media.wired.com/photos/5bae7a3f6278de2d2123479b/master/pass/ElonMusk_18261092524731.jpg'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIwPx33VpWyk/v2/-1x-1.jpg'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})` }} 
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;