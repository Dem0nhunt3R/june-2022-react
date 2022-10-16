import {useSelector} from "react-redux";

const ChosenUser = () => {
    const {chosenUser} = useSelector(state => state.userReducer);

    return (
        <>
            <h1 style={{textAlign:'center'}}>Selected user</h1>
            <hr/>
            {chosenUser && <div>
                <h2>{chosenUser.name}</h2>
                <p>username: {chosenUser.username}</p>
                <p>phone: {chosenUser.phone}</p>
                <p>company: {chosenUser.company.name}</p>
            </div>}
        </>
    );
};

export {ChosenUser};