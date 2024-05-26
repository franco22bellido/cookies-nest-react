import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCookies, navegar, setCookies } from "./api/cookies.api"

const SetCookies = () => {
    const params = useParams()

    const getData = async () => {
        if (params.route === 'getcookies') {
            const res = await getCookies()
            console.log(res)
        }else if (params.route === 'setcookiess'){
            const res = await setCookies()
            console.log(res)
        } else if (params.route === 'navegar '){
            const res = await navegar()
            console.log(res)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>

        </div>
    )
}

export default SetCookies
