const Launch = ({launch}) => {
    const {flight_number, mission_name, links: {mission_patch_small}} = launch;

    return (
        <div className='border border-gray-500 w-1/5'>
            <h3>{flight_number} - {mission_name}</h3>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;