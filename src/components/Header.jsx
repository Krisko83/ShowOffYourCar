import '../../public/css/Header.css'

export default function Header() {

    return (
        <>
            <header class="section site-header">
                <div class="header-wrapper">
                    <nav class="site-nav">
                        <span><a href="index.html" class="logo">Site Logo</a></span>
                        <ul class="navigation">
                            <li><a href="index.html ">Home</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="wrapper">
                    <section class="site-header-text">
                        <h2>Welcome to Show off your car app!</h2>
                        {/* <h2>Here you can show your car, like and comment other cars!</h2>
                        <h2>Business Association</h2> */}
                        <p>Here you can show off you fancy car!</p>
                    </section>
                </div>
            </header>

        </>
    );
}