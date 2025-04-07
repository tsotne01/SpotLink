import React from 'react'

function ClubCard() {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 relative">
            <span className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                Sports & Fitness
            </span>

            <a href="#club-details-1">
                <img className="w-full h-48 object-cover" src="https://placehold.co/600x400/1ABC9C/FFFFFF?text=Run+Club" alt="Batumi Sunrise Runners club image" />
            </a>

            <div className="p-5">
                <a href="#club-details-1">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Batumi Sunrise Runners</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Join us for refreshing morning runs along the beautiful Batumi boulevard. All paces welcome!</p>

                <div className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        <span>Location: Batumi Boulevard Start Point</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                        <span>Schedule: Tues & Thurs at 6:30 AM</span>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <a href="#club-details-1" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-800">
                        Learn More
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
                    </a>
                    <a href="#join-club-1" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Join Club
                        <svg className="w-4 h-4 ms-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ClubCard