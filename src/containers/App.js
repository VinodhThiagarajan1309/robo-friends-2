import React, {useState, useEffect} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";

function App() {
    
    // Hook into the App State
    const [searchField, setSearchField] = useState('');
    const [robots, setRobots] = useState([]);
    const [count, setCount] = useState(0);

    // Empty Array at the end means that run UseEffect only once
    // Equivalent to componentDidMount
    useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
               return response.json();
            }).then(users => {
                setRobots(users)
        });
        console.log(count);
    },[count]); // means run this effect only when count changes

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    return (
        
        <div className='tc'>
            <h1 className='f1'>Robo Friends</h1>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
    );

}

export default App;
