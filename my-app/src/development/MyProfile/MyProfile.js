
const MyProfile = () => {

    const user = localStorage.getItem("user")

    return <h1>Hello {user}</h1>
}

export {MyProfile}