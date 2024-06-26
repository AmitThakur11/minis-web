import React, { useEffect, useState } from "react";
import AppStore from "../../assets/images/app-store.svg";
import PlayStore from "../../assets/images/play-store.png";
import TopElement from "../../assets/images/top-element.png";
import BottomElement from "../../assets/images/bottom-element.png";
import style from "./Invite.module.scss";

const Invite = () => {
  const [inviteData, setInviteData] = useState({
    parentName: "",
    role: "",
    name: "",
    platform: "",
  });
  useEffect(() => {
    const url = new URL(window.location.href);
    const parentName = url.searchParams.get("parentName") ?? "Parent";
    const role = url.searchParams.get("role") ?? "viewer";
    const name = url.searchParams.get("name") ?? "child";
    const platform = url.searchParams.get("platform") ?? "all";
    setInviteData({
      parentName: parentName,
      role: role,
      name: name,
      platform: platform,
    });
  }, []);

  return (
    <div className={style.invite}>
      <picture>
        <img src={TopElement} alt="top" />
      </picture>
      <article>
        <h1>{`You're invited to view ${inviteData?.name}'s timeline!`}</h1>
        <p>
          {`${inviteData?.parentName} wants you to ${
            inviteData.role.toLowerCase() === "editor" ? "edit" : "view"
          } ${
            inviteData?.name
          }'s timeline. Download the Minis app and accept this invitation so that you never miss a moment.`}
        </p>

        <div className={style.invite__link}>
          {(inviteData.platform === "ios" || inviteData.platform === "all") && (
            <a href="itms-apps://play.google.com/store/apps">
              <img src={AppStore} alt="apple" />
            </a>
          )}
          {(inviteData.platform === "android" ||
            inviteData.platform === "all") && (
            <a href="market://details?id=com.android.vending">
              <img src={PlayStore} alt="google" />
            </a>
          )}
        </div>
      </article>
      <picture>
        <img src={BottomElement} alt="bottom" />
      </picture>
    </div>
  );
};

export default Invite;
