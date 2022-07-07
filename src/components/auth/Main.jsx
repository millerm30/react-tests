import React from 'react'

const Main = () => {
    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className='text-center mt-5'>
            <h1>This is a new screen! You have logged in!</h1>
            <button className="bg-blue-400 border-2 border-blue-500 py-2 px-4 rounded-lg mt-10 hover:bg-blue-500" onClick={handleLogOut}>Logout</button>
        </div>
    );
}

export default Main