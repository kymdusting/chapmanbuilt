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
	<link rel="stylesheet" href="css/fw_base.css">
	<link rel="stylesheet" href="css/skeleton.css">
	<link rel="stylesheet" href="css/fw_layout.css">
    <link rel="stylesheet" href="css/plugins/camera.css">
    <link rel="stylesheet" href="css/plugins/elastislide.css">
    <link rel="stylesheet" href="css/plugins/prettyPhoto.css">
    <link rel="stylesheet" href="css/kickstart/kickstart.css">

    <!-- @FontFace /=Disabled=/
    <link rel="stylesheet" href="css/fonts/stylesheet.css">-->

	<!-- Favicons
	================================================== -->
	<link rel="shortcut icon" href="images/favicon.ico">
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="144x144" href="images/apple-touch-icon-144x144.png">

	<!-- JS
	================================================== -->
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type='text/javascript' src='js/jquery.mobile.customized.min.js'></script>
    <script type='text/javascript' src='js/jquery.easing.1.3.js'></script>
    <script type="text/javascript" src="js/jquery.elastislide.js"></script>
    <script type='text/javascript' src='js/camera.min.js'></script>
	<script type='text/javascript' src='js/jquery.prettyPhoto.js'></script>
    <!--<script type='text/javascript' src='js/kickstart.js'></script>-->
    <script type='text/javascript' src='js/prettify.js'></script>
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <script type="text/javascript" src="js/respond.src.js"></script>
        <script type="text/javascript" src="js/ie_fix.js"></script>
	<![endif]-->
	<script type='text/javascript' src='js/fw_ui.js'></script>
    <script type='text/javascript' src='js/fw_scripts.js'></script>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Armata' rel='stylesheet' type='text/css'>

    <?php if ($title == 'Our Work'): ?>
        <script src="js/quicksand.js" type="text/javascript"></script>
        <link  rel="stylesheet" type="text/css" href="css/quicksand.css" />
    <?php endif ?>

    <?php if ($title == 'Testimonials'): ?>
        <link  rel="stylesheet" type="text/css" href="css/quicksand.css" />
    <?php endif ?>
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
                    <ul class="sub_menu level1">
                        <li><a href="griffith-1.php">Griffith &ndash; Meehan Gardens</a></li>
                        <li><a href="hackett-1.php">Hackett &ndash; Grayson Street</a></li>
                        <li><a href="dickson-1.php">Dickson &ndash; Hawdon Street </a></li>
                        <li><a href="campbell-1.php">Campbell &ndash; Patey Street</a></li>
                        <li><a href="ainslie.php">Ainslie &ndash; Ebden Street</a></li>
                        <li><a href="isaacs.php">Isaacs &ndash; Broinowski Place</a></li>
                        <li><a href="campbell-2.php">Campbell &ndash; Blamey Street</a></li>
                        <li><a href="fisher.php">Fisher &ndash; Bingara Place</a></li>
                        <li><a href="downer.php">Downer &ndash; Padbury Street</a></li>
                        <li><a href="ngunnawal.php">Ngunnawal &ndash; Carina Street</a></li>
                        <li><a href="palmerston.php">Palmerston &ndash; Sentry Crescent</a></li>
                        <li><a href="campbell-3.php">Campbell &ndash; Ryrie Street</a></li>
                        <li><a href="majura-park.php">Majura Park &ndash; Shop Fitout</a></li>
                        <li><a href="curtin.php">Curtin &ndash; Macalister Street</a></li>
                    </ul>
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