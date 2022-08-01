import css from './userInfo.module.css';
import {useState} from "react";

const UserInfo = () => {
    const [showStatus, setShowStatus] = useState(false);

    const showSettings = () => {
        setShowStatus(!showStatus);
    };

    return (
        <div id={'userInfo'} className={css.userInfoBlock}>
            <img
                src="https://forwww.com/wp-content/uploads/2020/02/user_no_photo_300x300.png"
                alt="User_Photo"
                onClick={showSettings}
            />
            <p>User Name</p>

            {showStatus && <div className={css.userSettingsBlock}>
                <div className={css.topSettingBlock}>
                    <b>User_Name</b>
                    <div className={css.viewBlock}>View profile</div>
                </div>
                <hr/>
                <div>Discussions</div>
                <div>Lists</div>
                <div>Ratings</div>
                <div>Watchlist</div>
                <hr/>
                <div>Edit Profile</div>
                <div>Settings</div>
                <hr/>
                <div className={css.bottomSettingBlock}>Logout</div>
            </div>}
        </div>
    );
};

export {
    UserInfo
};