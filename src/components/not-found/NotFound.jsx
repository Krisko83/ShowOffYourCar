import { Link } from 'react-router';
import styles from './NotFound.module.css'
import { FaCarSide } from 'react-icons/fa';

// export default function NotFound() {

//     return (
//         <section className={styles["error-page"]}>
//             <h1>404</h1>
//             <h2>Page Not Found</h2>
//             <p>The page you're looking for doesn't exist or has been moved.</p>
//             <Link to="/">Back to Home</Link>
//         </section>

        
//     );
// }


 
  
 

export default function NotFound() {
    return (
        <section className={styles['error-page']}>
            <div className={styles['error-content']}>
                <div className={styles['error-icon']}>
                    <FaCarSide />
                </div>

                <h1 className={styles['error-code']}>404</h1>

                <h2>Oops! Wrong Turn</h2>

                <p>
                    Looks like you've taken a wrong turn.
                    The page you're looking for doesn't exist
                    or may have been moved.
                </p>

                <Link to="/" className={styles['home-button']}>
                    <span>Back to Home</span>
                    <span className={styles['arrow']}>→</span>
                </Link>

                <span className={styles['error-footer']}>
                    LOST ON THE ROAD? LET'S GET YOU BACK.
                </span>
            </div>
        </section>
    );
}
 