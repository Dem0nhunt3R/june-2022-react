const Launch = ({launch}) => {
    const {flight_number, mission_name, links: {mission_patch_small}} = launch;

    return (
        <div className='border border-gray-500 w-1/3 flex items-center flex-col'>
            <h3 className='py-5'>{flight_number} - {mission_name}</h3>
            <img className='py-5' src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;