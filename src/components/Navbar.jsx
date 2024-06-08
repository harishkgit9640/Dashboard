import { useState } from "react"
import Demo from "./Demo"

const Navbar = () => {
    const [user, setUser] = useState(false);
    return (
        <>
            <div className="h-[70px] w-full bg-slate-100 drop-shadow-md flex justify-between items-center px-20 ">
                <div className="brand text-xl text-violet-950 font-bold cursor-pointer">Dashboard</div>
                <ul className="nav-items flex justify-between items-center text-blue-700">
                    <li className="hover:text-red-950" ><a href="#">Dashboard</a></li>
                    <li className="ms-4 hover:text-red-950" ><a href="#">FAQs</a></li>
                    <li className="ms-4 hover:text-red-950" ><a href="#">Support</a></li>
                    <div className="ms-4 hover:text-red-950  border-2 rounded-full px-6 py-2 relative" onClick={() => setUser((prev) => !prev)} > Profile
                        {
                            user && <Demo />
                        }
                        <img src={user ? `https://img.icons8.com/?size=100&id=101314&format=png&color=000000` : `https://img.icons8.com/?size=100&id=60662&format=png&color=000000`} alt="icon" className="ms-2 inline-block" width={12} />
                        {/* <img src="https://img.icons8.com/?size=100&id=101314&format=png&color=000000" alt="icon" className="ms-2 inline-block" width={12} /> */}

                    </div>
                </ul>
            </div>

        </>
    )
}

export default Navbar