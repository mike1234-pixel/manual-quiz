// dynamic route
// enter /cars/{whatever} in the url and it will return this component with the prop

import { useRouter } from "next/router";

export default function Car() {

    const router = useRouter()
    const { id } = router.query

    return <h1>Hello {id}</h1>

}