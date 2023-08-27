import { useCallback } from "react";
import Link from "next/link";
import ContainerLoginForm from "../components/container-login-form";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const DesktoplogIn = () => {
  const router = useRouter();

  const onFrameLinkClick = useCallback(() => {
    router.push("/desktop-create-account");
  }, [router]);

  return (
    <div className={styles.desktoplogIn}>
      <div className={styles.footer}>
        <div className={styles.rectangleCopy103} />
        <div className={styles.builtsight2023}>BuiltSight 2023</div>
      </div>
      <div className={styles.aside}>
        <div className={styles.sidenavBg} />
        <div className={styles.welcomeToBuiltsight}>Welcome to BuiltSight</div>
        <div className={styles.yourGatewayTo}>
          Your gateway to better construction insights
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.main}>
          <ContainerLoginForm />
          <Link
            className={styles.labelWrapper}
            href="/desktop-create-account"
            onClick={onFrameLinkClick}
          >
            <div className={styles.label}>
              <span>Don’t have an account?</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.signUp}>Sign Up</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktoplogIn;
