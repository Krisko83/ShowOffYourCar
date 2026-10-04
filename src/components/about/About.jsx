import styles from './About.module.css';

export default function About() {
    return (
        <main className={styles["about-page"]}>

            <section className={styles["about-hero"]}>
                <h1>About Show off you Car?</h1>
                <h2>
                    This app is only for learning purposes!
                </h2>

                <p>
                    A place where car enthusiasts can share their cars,
                    discover new ones and connect with other people
                    who share the same passion.
                </p>

            </section>

            <section className={styles["about-intro"]}>

                <h2>What is Show off you Car?</h2>

                <p>
                    Show off you Car is a social platform created for people
                    who love cars. Whether you own a classic, a sports car,
                    a daily driver or something completely unique, you can
                    share it with the community.
                </p>

                <p>
                    Post your car, tell its story, receive likes and
                    comments, and discover cars posted by other members.
                </p>

            </section>

            <section className={styles["about-features"]}>

                <article className={styles["about-feature"]}>
                    <div className={styles["feature-icon"]}>🚗</div>

                    <h3>Share Your Car</h3>

                    <p>
                        Create a post for your car and share its photos,
                        specifications and story with the community.
                    </p>
                </article>

                <article className={styles["about-feature"]}>
                    <div className={styles["feature-icon"]}>❤️</div>

                    <h3>React & Like</h3>

                    <p>
                        Find cars you like and show your appreciation
                        with likes and dislikes.
                    </p>
                </article>

                <article className={styles["about-feature"]}>
                    <div className={styles["feature-icon"]}>💬</div>

                    <h3>Join the Discussion</h3>

                    <p>
                        Leave comments, ask questions and connect with
                        other car enthusiasts.
                    </p>
                </article>

            </section>

            <section className={styles["how-it-works"]}>

                <h2>How It Works</h2>

                <div className={styles["steps"]}>

                    <div className={styles["step"]}>
                        <span>1</span>
                        <h3>Create an Account</h3>
                        <p>
                            Join the community and create your profile.
                        </p>
                    </div>

                    <div className={styles["step"]}>
                        <span>2</span>
                        <h3>Post Your Car</h3>
                        <p>
                            Add your car with its details, image and
                            description.
                        </p>
                    </div>

                    <div className={styles["step"]}>
                        <span>3</span>
                        <h3>Share & Connect</h3>
                        <p>
                            Get reactions, comments and connect with
                            other members.
                        </p>
                    </div>

                </div>

            </section>

        </main>
    );
}
 
