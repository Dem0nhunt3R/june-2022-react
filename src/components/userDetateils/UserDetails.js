import classes from './UserDetails.module.css'

const UserDetails = ({userInfo}) => {
    console.log(userInfo[0].id)

    return (
        <div className={classes.infoBox}>
            {
                userInfo && userInfo.map(item => {
                    let a = '';
                    let b = '';
                    for (const key in item) {
                        a = key;
                        b = item[key];
                        // return <p className={classes.par}>{key}: {item[key]}</p>;
                    }
                    return <p key={a} className={classes.par}>{a}: {b}</p>
                })

            }
        </div>
    );
};

export default UserDetails;