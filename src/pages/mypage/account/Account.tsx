import { getUser } from "@api/user"
import UserInfo from "@components/user/UserInfo"
import { RootState } from "@modules/index"
import { handleException } from "@utils/errorUtils"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"

interface IUserData  {
  userinfo: {
    address: string;
    addressDetail: string;
    birthdate: string;
    email: string;
    gender: string;
  }
}

function Account () {
  const userOid = useSelector((state:RootState) => state.loginInfo.oid)
  const {data, error, isLoading} = useQuery<IUserData>("userData", () => getUser(userOid))
  console.log(error)

  return (
    <>
      {
        isLoading ? 'loading....' : (
          <UserInfo type='modify' />
        )
      }
    </>
  )
}

export default Account