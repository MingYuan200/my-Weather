
import { IoUmbrella } from "react-icons/io5";

function ShowCity({city}) {

    return (
        <>
            <div className="content">
                {
                    city.weatherElement[0].time.map((time, index) => {
                        return (
                            <div className="item2" key={index}>
                                <p>
                                    {
                                        new Date(time.startTime).toLocaleString(undefined, { day: "numeric" })
                                    }
                                </p>
                                <p>
                                    {
                                        new Date(time.startTime).toLocaleString(undefined, {
                                            hour: "numeric",
                                            minute: "numeric"
                                        })
                                    }
                                    <br />~<br />
                                    {
                                        new Date(time.endTime).toLocaleString(undefined, {
                                            hour: "numeric",
                                            minute: "numeric"
                                        })
                                    }
                                </p>
                                <figure>
                                    <img src={`weathericon/${time.parameter.parameterName}.svg`} alt="" />
                                </figure>
                                <p>
                                    {time.parameter.parameterName}
                                </p>

                                <p>
                                    <IoUmbrella />
                                    {city.weatherElement[4].time[index].parameter.parameterName}%
                                </p>
                            </div>
                        )

                    })
                }
            </div>
        </>

    )
}

export default ShowCity