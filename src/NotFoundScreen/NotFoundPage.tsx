import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.alert("Page not found!404")
        navigate("/")
    }, [navigate])
  return (
    <div>
      Page not found
    </div>
  )
}

export default NotFoundPage
