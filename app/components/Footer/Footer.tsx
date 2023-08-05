import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer className="bg-neutral-900 text-center text-white mt-4 absolute bottom-auto w-full">
            <div className="px-6 pt-6 w-[100%]">
                <div className="mb-6 flex justify-center">
                    {/* facebook */}
                    <a href="https://web.facebook.com/Ramzyrox" target="_blank" type="button" className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" data-te-ripple-init data-te-ripple-color="light">
                        <img src="/icons/facebook.svg" alt="" className="mx-auto h-full w-4" />
                    </a>
                    {/* instagram */}
                    <a href="https://www.instagram.com/ramzy_ahamed" target='_blank' type="button" className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" data-te-ripple-init data-te-ripple-color="light">
                        <img src="/icons/instagram.svg" alt="" className="mx-auto h-full w-4" />
                    </a>
                    {/* linkedin */}
                    <a href="https://www.linkedin.com/in/ramzyahamed/" target='_blank' type="button" className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" data-te-ripple-init data-te-ripple-color="light">
                        <img src="/icons/linkedin.svg" alt="" className="mx-auto h-full w-4" />
                    </a>
                    {/* github */}
                    <a href="https://github.com/ramzy1996" target='_blank' type="button" className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" data-te-ripple-init data-te-ripple-color="light">
                        <img src="/icons/github.svg" alt="" className="mx-auto h-full w-4" />
                    </a>
                </div>
            </div>
            {/*Copyright section*/}
            <div className="p-4 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © {year} Copyright: Ramzy Ahmed
            </div>
        </footer>

    )
}

export default Footer