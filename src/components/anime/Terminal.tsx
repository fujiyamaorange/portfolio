import clsx from 'clsx'
import styles from '@/styles/Terminal.module.css'
import { profile } from '@/types/cms-types'

type Props = {
  data: profile
}

export const Terminal: React.VFC<Props> = ({ data }) => {
  const { name, introduce, hobby } = data

  return (
    <main className={styles.container}>
      <div className={styles.terminal}>
        <section className={styles.terminal__bar}>
          <div className={styles.bar__buttons}>
            <button
              className={clsx(styles.bar__button, styles.bar__button__exit)}
            >
              &#10005;
            </button>
            <button disabled className={styles.bar__button}>
              &#9472;
            </button>
            <button disabled className={styles.bar__button}>
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
            <div dangerouslySetInnerHTML={{ __html: introduce }}></div>
          </div>
          <div className={styles.terminal__prompt}>
            <span className={styles.terminal__prompt__user}>user@ubuntu:</span>
            <span className={styles.terminal__prompt__location}>~</span>
            <span className={styles.terminal__prompt__bling}>$</span>
            <p>{hobby}</p>
            <span
              aria-hidden
              className={styles.terminal__prompt__cursor}
            ></span>
          </div>
        </section>
      </div>
    </main>
  )
}
