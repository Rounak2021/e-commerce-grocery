import React from 'react'

const ErrorDemoPage = () => {
    return (
        <div>
            <div className="relative h-screen overflow-hidden bg-indigo-900">
                <img
                    src="https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="absolute object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                    <div className="relative z-10 flex flex-col items-center w-full font-mono">
                        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white animate-bounce">
                            UNIX DIGITAL SYSTEMS
                        </h1>
                        <p className="font-extrabold text-white text-2xl my-44 ">
                            Making a better tomorrow...
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ErrorDemoPage