import React from "react";
import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.profileInfo}>
      <div>
        <img className={s.wallpaper} src="https://mcdn.wallpapersafari.com/medium/75/48/oGzMlE.jpg" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <div className={s.userName}>{props.profile.fullName}</div>
        <ProfileStatusWithHooks status = {props.status} updateStatusThunk = {props.updateStatusThunk}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
