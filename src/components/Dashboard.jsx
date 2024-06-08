import Piechar from '../components/Piechar'
import Calender from './Calender'
import Card from './Card'
import { Data, calenderData } from './Data'
import FAQ from './FAQ'

const Dashboard = () => {

    return (
        <>
            <div className="container w-full p-10 mx-auto">
                <h1 className="text-2xl font-semibold">Welcome, Mr.Harish</h1>
                {/* pie chart section */}
                <div className="flex justify-between items-center">
                    <div className="w-[30%] h-[250px] drop-shadow-sm border-2 rounded-md bg-white p-3 my-5">
                        <div className="title">Your FD Portfolio</div>
                        <Piechar />
                    </div>
                    {/* calender section */}
                    <div className="calender w-[68%] h-[250px] drop-shadow-sm border-2 rounded-md bg-white p-3 my-5">
                        <div className="title">FD Maturity Timeline</div>
                    </div>
                </div>

                {/* Finance Services */}
                <div className="finance-service flex justify-between items-start">
                    <div className=" w-[68%] left-container">

                        <div className="w-full grid grid-cols-2 gap-3">
                            {
                                Data.map((data) => {
                                    return (
                                        <Card key={data.id}
                                            title={data.title}
                                            icon={data.icon}
                                            image={data.image}
                                            line1={data.line1}
                                            line2={data.line2}
                                            rate={data.rate}
                                            theme={data.theme}
                                        />

                                    )
                                })
                            }

                        </div>


                        <div className="w-full flex justify-between items-center mt-3">
                            <div className="left">
                                <h1 className='text-2xl font-bold' >Get Answer</h1>
                                <p>to All you question</p>
                            </div>
                            <div className="right w-[10%] flex justify-around">
                                <img src="https://img.icons8.com/?size=100&id=100033&format=png&color=DCDCDC" alt="left" width={32} className='' />
                                <img src="https://img.icons8.com/?size=100&id=98967&format=png&color=000000" alt="right" width={32} />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-5">
                            <FAQ />
                            <FAQ />
                            <FAQ />
                        </div>
                    </div>

                    <div className="w-[28%] date-calender border-2 border-b-0 rounded-md shadow-md">
                        {
                            calenderData.map((data) => {
                                return (
                                    <Calender key={data.id}
                                        title={data.title}
                                        bank={data.bank}
                                        date={data.date}
                                        btn1={data.btn1}
                                        btn2={data.btn2}
                                        amt={data.amt}
                                        tenner={data.tenner}
                                        rate={data.rate}
                                    />

                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard