
const Calender = (props) => {
    const { title, bank, date, btn1, btn2, amt, tenner, rate } = props;

    return (<>
        <div className="Calender w-full h-auto p-2 border-b-2"  >
            <h2 className="text-lg text-black font-bold"> {title} </h2>
            <div className="line-2 my-2 flex justify-evenly items-start ">
                <div className=" w-1/4 p-1 rounded-sm">
                    <div className="title text-[11px]">Scheduled On</div>
                    <div className="date text-center bg-blue-100/[0.3]">
                        <span className="text-3xl font-bold">{date}</span>
                        <h2 className="w-full py-1 text-white text-sm bg-red-500">Oct, 2023</h2>
                    </div>
                </div>
                <div className=" w-3/4 px-1 rounded-sm">
                    <h1 className="font-bold text-sm">{bank}</h1>
                    <div className="details mt-5 flex justify-evenly items-center text-sm">
                        <div className="box-1">
                            <li className="list-none text-slate-500">
                                Deposit Amt
                            </li>
                            <li className="list-none text-black font-bold mt-2">
                                {amt}
                            </li>
                        </div>

                        <div className="box-2">
                            <li className="list-none text-slate-500">
                                Tenure
                            </li>
                            <li className="list-none text-black font-bold mt-2">
                                {tenner}
                            </li>
                        </div>
                        <div className="box-3">
                            <li className="list-none text-slate-500">
                                Interest Rate
                            </li>
                            <li className="list-none text-black font-bold mt-2">
                                {rate}
                            </li>
                        </div>
                    </div>

                </div>
            </div>
            <div className="line-3 flex justify-between items-center text-center ">
                <div className=" w-1/2 me-2 btn outline-none py-2 px-5 bg-blue-600 rounded-md text-white">{btn1}</div>
                <div className=" w-1/2 btn outline-1 py-2 px-5 border-2 border-blue-700 rounded-md text-blue-700">{btn2}</div>
            </div>
        </div>
    </>
    )
}

export default Calender