import React from 'react'
import EventCard from './EventCard'

function Events() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
            {[1, 2, 3, 4, 5.6, 7, 8, 9, 10, 11].map((el) => <EventCard key={el} />)}
        </div>
    )
}

export default Events