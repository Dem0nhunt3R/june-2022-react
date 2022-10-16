import {useSelector} from "react-redux";

const UserFromApi = () => {
    const {userFromApi} = useSelector(state => state.userReducer);

    return (
        <>
            <h1 style={{textAlign:'center'}}>User from API</h1>
            <hr/>
            {userFromApi && <div>
                <h2>{userFromApi.name}</h2>
                <p>username: {userFromApi.username}</p>
                <p>phone: {userFromApi.phone}</p>
                <p>company: {userFromApi.company.name}</p>
            </div>}
        </>
    );
};

export {UserFromApi};