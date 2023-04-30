import { MetaFunction } from "remix";

export default function profile() {
  return (
    <div>
      profile
    </div>
  )
}

export const meta: MetaFunction = () => {
  return {
      title: 'My Profile - Account | Sitename'
  }
}