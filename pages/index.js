import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🚀 MEMESOL - To the Moon! 🚀</title>
        <meta name="description" content="MEMESOL - The meme token that's going to make you rich (maybe)!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🚀 MEMESOL - The Only Token You'll Ever Need! 🚀
        </h1>

        <p className={styles.description}>
          ARE YOU READY TO RIDE THE ROCKET TO FINANCIAL FREEDOM? OR AT LEAST HAVE A GOOD LAUGH TRYING?
        </p>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.wiggle}`}>
            <h2>🤔 WTF is [Your Token Name]?</h2>
            <p>
              MEMESOL is the token that will either make you a millionaire or leave you crying in a corner. It's a gamble, a meme, a lifestyle. We're not sure what it is either, but we're here for it!
            </p>
          </div>

          <div className={`${styles.card} ${styles.rotate}`}>
            <h2>💰 tokenomics (aka Numbers We Pulled Out of Our Ass)</h2>
            <p>
              We have a total supply of... uh... a lot. Like, a REALLY big number. We're talking astronomical. We're not even sure how many zeros there are, but who cares? More zeros = more gains, right?
            </p>
            <ul>
              <li><strong>Total Supply:</strong> 1000000000 </li>
              <li><strong>Burn Rate:</strong> We burn coins when we feel like it. It's a vibe.</li>
              <li><strong>Tax:</strong> No tax you idiot.</li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.skew}`}>
            <h2>🛣️ Roadmap (aka Our Wildest Dreams)</h2>
            <p>
              Our roadmap is simple:
            </p>
            <ol>
              <li>Get listed on a DEX (or two, or three... or maybe none)</li>
              <li>Go viral (we're counting on you for this one, you beautiful degen)</li>
              <li>Make everyone rich (or at least have a good laugh trying)</li>
              <li>Buy a Lambo (or a used bicycle, whatever)</li>
            </ol>
          </div>

          <div className={`${styles.card} ${styles.pulse}`}>
            <h2>🤝 How to Buy (aka Throw Your Money at the Screen)</h2>
            <p>
              You can buy [Your Token Name] on PumpFun. Just throw your SOL at the screen and pray to the crypto gods!
            </p>
            <p>
              <a href="https://pump.fun" target="_blank" rel="noopener noreferrer">
                Go BUY you fucking degen!
              </a>
            </p>
          </div>

          <div className={`${styles.card} ${styles.shake}`}>
            <h2>📢 Community (aka Our Cult of Degens)</h2>
            <p>
              Join our amazing community of degens, meme lords, and people who probably should be doing something more productive.
            </p>
             <p>
              <a href="https://t.me/[YourTelegramGroup]" target="_blank" rel="noopener noreferrer">
                Join our Telegram!
              </a>
            </p>
          </div>

          <div className={`${styles.card} ${styles.blink}`}>
            <h2>⚠️ Disclaimer (aka We're Not Responsible for Your Losses)</h2>
            <p>
              MEMESOL is a meme token. It has no inherent value. You could lose all your money. But hey, at least you'll have a good story to tell!
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Made with ❤️ by the [Your Token Name] Team (aka a bunch of apes with keyboards)
        </p>
      </footer>
    </div>
  );
}
