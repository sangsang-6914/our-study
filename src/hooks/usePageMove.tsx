import { useNavigate } from "react-router-dom"

function usePageMove (page:string) {
  const navigate = useNavigate()

  return navigate(page)
}

export default usePageMove