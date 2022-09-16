import classes from './UserDetails.module.css'

const UserDetails = ({userInfo}) => {
    return (
        <div className={classes.infoBox}>
            {
                userInfo && userInfo.map(item =>
                    <p key={Object.keys(item).toString()}
                       className={classes.par}>{Object.keys(item)}: {Object.values(item)}
                    </p>
                )
            }
        </div>
    );
};

export default UserDetails;