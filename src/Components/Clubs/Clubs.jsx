import React from 'react'
import ClubCard from './ClubCard'

function Clubs() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
            {[1, 2, 3, 4, 5, 6, 7].map((el) => <ClubCard key={el} />)}
        </div>
    )
}

export default Clubs