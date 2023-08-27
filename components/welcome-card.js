import styles from "./welcome-card.module.css";
const WelcomeCard = () => {
  return (
    <div className={styles.aside}>
      <div className={styles.sidenavBg} />
      <img
        className={styles.dividerVerticalIcon}
        alt=""
        src="/dividervertical.svg"
      />
      <div className={styles.navUser}>
        <div className={styles.navItemdefault}>
          <div className={styles.border} />
          <div className={styles.content}>
            <div className={styles.iconText}>
              <img className={styles.icon} alt="" src="/icon1.svg" />
              <div className={styles.account}>Account</div>
            </div>
            <div className={styles.xBadge}>
              <div className={styles.badgebase}>
                <div className={styles.elements}>
                  <img className={styles.iconLeft} alt="" src="/iconleft.svg" />
                  <b className={styles.badge}>6</b>
                  <img
                    className={styles.iconRight}
                    alt=""
                    src="/iconright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navItemdefault}>
          <div className={styles.border} />
          <div className={styles.content}>
            <div className={styles.iconText}>
              <img className={styles.icon} alt="" src="/icon2.svg" />
              <div className={styles.account}>Logout</div>
            </div>
            <div className={styles.xBadge}>
              <div className={styles.badgebase}>
                <div className={styles.elements}>
                  <img className={styles.iconLeft} alt="" src="/iconleft.svg" />
                  <b className={styles.badge}>6</b>
                  <img
                    className={styles.iconRight}
                    alt=""
                    src="/iconright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navUser1}>
        <img className={styles.icon} alt="" src="/icon3.svg" />
        <div className={styles.navItemdefault}>
          <div className={styles.avatarbase}>
            <div className={styles.avatarmain}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <div className={styles.indicator} />
              <b className={styles.mj}>MJ</b>
            </div>
          </div>
        </div>
        <img className={styles.icon} alt="" src="/icon4.svg" />
      </div>
      <div className={styles.menu}>
        <div className={styles.navItemdefault}>
          <div className={styles.border} />
          <div className={styles.content}>
            <div className={styles.iconText}>
              <img className={styles.icon} alt="" src="/icon5.svg" />
              <div className={styles.account}>Settings</div>
            </div>
            <div className={styles.xBadge}>
              <div className={styles.badgebase}>
                <div className={styles.elements}>
                  <img className={styles.iconLeft} alt="" src="/iconleft.svg" />
                  <b className={styles.badge}>6</b>
                  <img
                    className={styles.iconRight}
                    alt=""
                    src="/iconright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navItemdefault}>
          <div className={styles.border} />
          <div className={styles.content}>
            <div className={styles.iconText}>
              <img className={styles.icon} alt="" src="/icon6.svg" />
              <div className={styles.account}>Notifications</div>
            </div>
            <div className={styles.xBadge3}>
              <div className={styles.badgebase3}>
                <div className={styles.elements}>
                  <img className={styles.iconLeft} alt="" src="/iconleft.svg" />
                  <b className={styles.badge}>23</b>
                  <img
                    className={styles.iconRight}
                    alt=""
                    src="/iconright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.dividerHorizontalIcon}
        alt=""
        src="/dividerhorizontal.svg"
      />
      <div className={styles.menu1}>
        <div className={styles.navItemdefault}>
          <div className={styles.border} />
          <div className={styles.content}>
            <div className={styles.iconText}>
              <img className={styles.icon} alt="" src="/icon7.svg" />
              <div className={styles.account}>Dashboard</div>
            </div>
            <div className={styles.xBadge}>
              <div className={styles.badgebase}>
                <div className={styles.elements}>
                  <img className={styles.iconLeft} alt="" src="/iconleft.svg" />
                  <b className={styles.badge}>6</b>
                  <img
                    className={styles.iconRight}
                    alt=""
                    src="/iconright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navItemdefault}>
          <div className={styles.border} />
          <div className={styles.content}>
            <div className={styles.iconText}>
              <img className={styles.icon} alt="" src="/icon8.svg" />
              <div className={styles.account}>Analytics</div>
            </div>
            <div className={styles.xBadge}>
              <div className={styles.badgebase}>
                <div className={styles.elements}>
                  <img className={styles.iconLeft} alt="" src="/iconleft.svg" />
                  <b className={styles.badge}>6</b>
                  <img
                    className={styles.iconRight}
                    alt=""
                    src="/iconright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navItemdefault}>
          <div className={styles.navItemdefault}>
            <div className={styles.border6} />
            <div className={styles.content6}>
              <div className={styles.iconText}>
                <img className={styles.icon} alt="" src="/icon9.svg" />
                <div className={styles.messages}>Messages</div>
              </div>
              <div className={styles.xBadge6}>
                <div className={styles.badgebase}>
                  <div className={styles.elements}>
                    <img
                      className={styles.iconLeft}
                      alt=""
                      src="/iconleft.svg"
                    />
                    <b className={styles.badge}>6</b>
                    <img
                      className={styles.iconRight}
                      alt=""
                      src="/iconright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navItemdefault}>
          <div className={styles.border} />
          <div className={styles.content}>
            <div className={styles.iconText}>
              <img className={styles.icon} alt="" src="/icon10.svg" />
              <div className={styles.account}>Collections</div>
            </div>
            <div className={styles.xBadge7}>
              <div className={styles.badgebase7}>
                <div className={styles.elements}>
                  <img className={styles.iconLeft} alt="" src="/iconleft.svg" />
                  <b className={styles.badge}>6</b>
                  <img
                    className={styles.iconRight}
                    alt=""
                    src="/iconright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navItemdefault}>
          <div className={styles.border} />
          <div className={styles.content}>
            <div className={styles.iconText}>
              <img className={styles.icon} alt="" src="/icon11.svg" />
              <div className={styles.account}>Users</div>
            </div>
            <div className={styles.xBadge}>
              <div className={styles.badgebase}>
                <div className={styles.elements}>
                  <img className={styles.iconLeft} alt="" src="/iconleft.svg" />
                  <b className={styles.badge}>6</b>
                  <img
                    className={styles.iconRight}
                    alt=""
                    src="/iconright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.welcomeToBuiltsight}>Welcome to BuiltSight</div>
      <div className={styles.yourGatewayTo}>
        Your gateway to better construction insights
      </div>
    </div>
  );
};

export default WelcomeCard;
