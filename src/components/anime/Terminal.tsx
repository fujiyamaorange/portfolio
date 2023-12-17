import styles from "@/styles/Terminal.module.css";
import { profile } from "@/types/cms-types";
import clsx from "clsx";

type Props = {
  data: profile;
};

export const Terminal: React.VFC<Props> = ({ data }) => {
  const { name, introduce, hobby } = data;

  const onCloseClick = () => {
    alert("NICE!!");
  };

  return (
    <main className={clsx(styles.container, "selection:bg-transparent")}>
      <div className={styles.terminal}>
        <section className={styles.terminal__bar}>
          <div className={styles.bar__buttons}>
            <button
              tabIndex={-1}
              type="button"
              onClick={onCloseClick}
              className={clsx(styles.bar__button, styles.bar__button__exit)}
            >
              &#10005;
            </button>
            <button type="button" disabled className={styles.bar__button}>
              &#9472;
            </button>
            <button type="button" disabled className={styles.bar__button}>
              &#9723;
            </button>
          </div>
          <p className={styles.bar__user}>user@ubuntu: ~</p>
        </section>
        <section className={styles.terminal__body}>
          <div className={styles.terminal__prompt}>
            <span className={styles.terminal__prompt__user}>user@ubuntu:</span>
            <span className={styles.terminal__prompt__location}>~</span>
            <span className={styles.terminal__prompt__bling}>$</span>
            <p>{name}</p>
          </div>
          <div className={styles.terminal__prompt}>
            <span className={styles.terminal__prompt__user}>user@ubuntu:</span>
            <span className={styles.terminal__prompt__location}>~</span>
            <span className={styles.terminal__prompt__bling}>$</span>
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
            <div dangerouslySetInnerHTML={{ __html: introduce }} />
          </div>
          <div className={styles.terminal__prompt}>
            <span className={styles.terminal__prompt__user}>user@ubuntu:</span>
            <span className={styles.terminal__prompt__location}>~</span>
            <span className={styles.terminal__prompt__bling}>$</span>
            <p>{hobby}</p>
            <span className={styles.terminal__prompt__cursor} />
          </div>
        </section>
      </div>
    </main>
  );
};
