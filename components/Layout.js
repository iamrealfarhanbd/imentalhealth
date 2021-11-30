import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
const Layout = ({children}) => {
    return (
        <>
        <Head>
        <meta charSet="utf-8"/>
        <title>LeBari Education HTML-5 Template | Homepage 01</title>
        <link href="/assets/css/bootstrap.css" rel="stylesheet"/>
        <link href="/assets/css/style.css" rel="stylesheet"/>
        <link href="/assets/css/responsive.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon"/>
        <link rel="icon" href="images/favicon.png" type="image/x-icon"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <script src="/assets/js/jquery.js"></script>
        <script src="/assets/js/popper.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="/assets/js/jquery.fancybox.js"></script>
        <script src="/assets/js/appear.js"></script>
        <script src="/assets/js/parallax.min.js"></script>
        <script src="/assets/js/tilt.jquery.min.js"></script>
        <script src="/assets/js/jquery.paroller.min.js"></script>
        <script src="/assets/js/owl.js"></script>
        <script src="/assets/js/wow.js"></script>
        <script src="/assets/js/nav-tool.js"></script>
        <script src="/assets/js/jquery-ui.js"></script>
        <script src="/assets/js/script.js"></script>
        </Head>
        <Header />
       {children}
       <Footer />
       </>
    )
}


export default Layout