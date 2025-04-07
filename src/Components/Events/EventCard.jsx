import React from 'react'

function EventCard() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#event-details">
                <img className="rounded-t-lg" src="https://placehold.co/600x400/007BFF/FFFFFF?text=Community+Coding+Day" alt="Placeholder image for a community coding event" />
            </a>
            <div className="p-5">
                <a href="#event-details">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Community Coding Day: Batumi Edition</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Get together with fellow tech enthusiasts in Batumi for a day of collaborative coding, learning, and networking. All skill levels welcome!</p>
                <div className='flex justify-between'>
                    <a href="#event-details" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Learn more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="#register" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
                        Register Now
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default EventCard