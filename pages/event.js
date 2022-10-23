import React, {useState} from 'react';
import { useRouter } from 'next/router';

const EventList = ({eventlists}) => {
    const [event, setEvents] = useState(eventlists);
    const router = useRouter();

    const fetchSportEvents = async () => {
        const response = await fetch('http://localhost:3004/events?category=sport');
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sport', {shallow : true})
    }
  return (
    <div>
    <button onClick={fetchSportEvents}>Sport Event</button>
        <h1>Event List</h1>
        {
            event.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.id}. {item.title} ~ {item.date} <b>{item.category}</b></p>
                        <p>{item.des}</p>
                        <br/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default EventList;


export const getServerSideProps = async (context) => {
    const {query} = context;
    const {category} = query;
    const queryString = category ? 'category=sport' : '';
    const response = await fetch(`http://localhost:3004/events?${queryString}`);
    const data = await response.json();

    return {
        props : {
            eventlists : data
        }
    }
}