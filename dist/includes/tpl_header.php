<!DOCTYPE html>
<!--[if IEMobile 7]><html class="no-js iem7 oldie"><![endif]-->
<!--[if lt IE 7]><html class="no-js ie ie6 oldie" lang="en"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js ie ie7 oldie" lang="en"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js ie ie8 oldie" lang="en"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js ie9" lang="en"><!--<![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html class="no-js" lang="en"><!--<![endif]-->
<head>
	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>Chapman Built - <?php echo $title ?></title>
	<meta name="description" content="Chapman Built - Canberra's building and renovation specialists.">
    <meta name="keywords" content="canberra, queanbeyan, builders, home building, renovations, build a home, builders canberra, residential construction, canberra builders, renovating, build home, new homes, build a house, new houses, display homes, building houses, building materials, homebuilders, kitchen design, building homes, kitchen designs, master builders, renovators, homes to build, building companies, bathroom designs, home renovations, masterton homes, building costs, bathroom ideas, home extensions, designer homes, house renovations, house extensions, home extension, sydney renovations, renovations sydney, project homes, building a new house, renovation ideas, build your own home, home builders sydney, building a new home, sydney bathroom renovations, maintance, landscaping">
    <meta name="author" content="Light Is Everything :: http://lightiseverything.com.au">

	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- CSS
  ================================================== -->

    <?php if ($title == "Home") {
        echo "<link rel='stylesheet' href='css/home.min.css'>";
    } else if (substr($title, 0, 8) == "Our Work" || substr($title, 0, 12) == "Testimonials") {
        if (substr($title, 0, 9) == "Our Work ") {
            echo "<link rel='stylesheet' href='css/work.min.css'>";
        } else {
            echo "<link rel='stylesheet' href='css/work-home.min.css'>";
        }
    }  else {
        echo "<link rel='stylesheet' href='css/main.min.css'>";
    } ?>


	<!-- Favicons
	================================================== -->
	<link rel="shortcut icon" href="images/favicon.ico">
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="144x144" href="images/apple-touch-icon-144x144.png">

	<!-- JS
	================================================== -->
    <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <script type="text/javascript" src="js/respond.src.js"></script>
        <script type="text/javascript" src="js/ie_fix.js"></script>
    <![endif]-->

    <!-- DEV only livereload -->
<!-- <script>(function(){if(window.location.href.substring(7, 11) === 'dev-'){var s = document.createElement('script'),r = document.getElementsByTagName('script')[0];s.src='http://10.0.0.57:35729/livereload.js?snipver=1';r.parentNode.insertBefore(s,r)};}());</script> -->
</head>
</head>
<body>
<div class="main_wrapper">
	<!-- Header Begin
    ================================================== -->
	<header>
        <a href="index.php" class="logo"><img src="images/logo.png" alt="Chapman Built" /></a>
        <!-- ~#Main Navigation -->
        <nav class="head_nav">
			<ul class="mainmenu">
	            <li
                <?php if ($title == "Home")
                        echo " class='act'"; ?>>
                    <a href="index.php">Home</a></li>
                <li class="sep"></li>
                <li
                <?php if ($title == "About Us")
                        echo " class='act'"; ?>>
                    <a href="about-us.php">About Us</a>
                </li>
                <li class="sep"></li>
                <li
                <?php if ($title == "Our Process")
                        echo " class='act'"; ?>>
                    <a href="our-process.php">Our Process</a>
                </li>
                <li class="sep"></li>
                <li
                <?php if (substr($title, 0, 8) == "Our Work")
                        echo " class='act'"; ?>>
                    <a href="our-work.php">Our Work</a>
                    <!-- <ul class="sub_menu level1">
                        <li><a href="griffith-1.php">Griffith &ndash; Meehan Gardens</a></li>
                        <li><a href="hackett-1.php">Hackett &ndash; Grayson Street</a></li>
                        <li><a href="dickson-1.php">Dickson &ndash; Hawdon Street </a></li>
                        <li><a href="campbell-1.php">Campbell &ndash; Patey Street</a></li>
                        <li><a href="ainslie.php">Ainslie &ndash; Ebden Street</a></li>
                        <li><a href="isaacs.php">Isaacs &ndash; Broinowski Place</a></li>
                        <li><a href="campbell-2.php">Campbell &ndash; Blamey Street</a></li>
                        <li><a href="fisher.php">Fisher &ndash; Bingara Place</a></li>
                        <li><a href="downer.php">Downer &ndash; Padbury Street</a></li>
                        <li><a href="campbell-3.php">Campbell &ndash; Ryrie Street</a></li>
                        <li><a href="majura-park.php">Majura Park &ndash; Shop Fitout</a></li>
                        <li><a href="curtin.php">Curtin &ndash; Macalister Street</a></li>
                        <li><a href="curtin-2.php">Curtin &ndash; Holman Street</a></li>
                        <li><a href="garran-1.php">Garran &ndash; Gilmore Crescent</a></li>
                        <li><a href="mawson-1.php">Mawson &ndash; Shackleton Crescent</a></li>
                        <li><a href="yarralumla-1.php">Yarralumla &ndash; Brown Street</a></li>
                    </ul> -->
                </li>
                <li class="sep"></li>
                <li
                <?php if ($title == "Our Services")
                        echo " class='act'"; ?>>
                    <a href="services.php">Our Services</a>
                </li>
                <li class="sep"></li>
                <li
                <?php if ($title == "Testimonials")
                        echo " class='act'"; ?>>
                    <a href="testimonials.php">Testimonials</a>
                </li>
                <li class="sep"></li>
                <li
                <?php if ($title == "Contact Us")
                        echo " class='act'"; ?>>
                    <a href="contact-us.php">Contact Us</a></li>
            </ul>
            <div class="menu_indicator"></div>
		</nav>
        <nav class="mobile_nav">
        	<a href="javascript:void(0)" class="menu_toggle">Menu</a>
        	<ul class="mobile_menu">
            </ul>
        </nav>
        <!-- ~#Social Links -->
        <ul class="socials">
        	<li><b class="fs1" aria-hidden="true" data-icon="&#x21;"></b><span class="offscreen">Call: </span><a href="tel:0408681941">0408 681 941</a></li>
            <li>
            <li><b class="fs1" aria-hidden="true" data-icon="&#x22;"></b><span class="offscreen">Email: </span><a href="mailto:luke@chapmanbuilt.com.au">luke@chapmanbuilt.com.au</a></li>
        </ul>
	</header>
