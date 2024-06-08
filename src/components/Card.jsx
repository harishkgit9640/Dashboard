
const Card = (props) => {
    const { title, image, rate, line1, line2, theme, icon } = props;
    return (<>
        <div className={`card h-auto rounded-md bg-${theme}-300/[0.3] p-4 border-4 border-white drop-shadow-md mb-3`} >
            <div className="line-1 flex justify-start items-center">
                <img src={image} width={32} height={32} alt="bajaj" />
                <h2 className={`ms-3 text-lg text-${theme}-600 font-semibold`}> {title} </h2>
            </div>
            <div className="line-2 my-5 flex justify-between items-center">
                <div className={`bg-${theme}-400/[0.3] text-sm p-1 me-2 rounded-sm font-semibold`}> <img src={icon} width={18} className="inline-block" alt={line1} /> {line1} </div>
                <div className={`bg-${theme}-400/[0.3] text-sm p-1 rounded-sm font-semibold`}> <img src={icon} width={18} className="inline-block" alt={line2} /> {line2} </div>
            </div>
            <div className="line-3 flex justify-between items-center ">
                <div className="returns">
                    <li className="list-none text-slate-500 text-sm font-semibold">Interest Upto</li>
                    <li className="list-none text-slate-500 text-sm">{rate} </li>
                </div>
                <div className={`outline-none py-2 px-5 bg-${theme}-600 rounded-md text-white`}>Book Now</div>
            </div>
        </div>
    </>
    )
}

export default Card