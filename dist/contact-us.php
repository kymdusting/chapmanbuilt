<?php
$title = 'Contact Us';
include("includes/tpl_header.php"); ?>

<!-- Main Container
================================================== -->
<div id="contact-us" class="site_container container">
	<div class="slogan columns sixteen">
		<h1><?php echo $title ?></h1>
	</div>
	<div class="clear"><!-- ClearFix --></div>

    <div class="seperator_after8">
	    <div class="columns ten">
        	<h3>Get in touch with us</h3>
            <form action="<?=$_SERVER['PHP_SELF']; ?>" method="get">
                <div class="columns two contact_label alpha">
                    <label for="name">Your Name</label>
                </div>
                <div class="columns seven contact_input omega">
					<input type="text" name="textfield" id="name" />
                </div>
                <div class="clear"><!-- ClearFix --></div>
                <div class="columns two contact_label alpha">
                    <label for="email">E-Mail</label>
                </div>
                <div class="columns seven contact_input omega">
                  	<input type="text" name="textfield2" id="email" />
                </div>
                <div class="clear"><!-- ClearFix --></div>
                <div class="columns two contact_label alpha">
                    <label for="org">Organisation</label>
                </div>
                <div class="columns seven contact_input omega">
                  	<input type="text" name="textfield3" id="org" />
                </div>
                <div class="clear"><!-- ClearFix --></div>
                <div class="columns two contact_label alpha">
                    <label for="phone">Phone</label>
                </div>
                <div class="columns seven contact_input omega">
					<input type="text" name="textfield4" id="phone" />
                </div>
                <div class="clear"><!-- ClearFix --></div>
                <div class="columns two contact_label alpha">
                    <label for="message">Your Message</label>
                </div>
                <div class="columns seven contact_input omega">
					<textarea name="textarea" id="message" cols="45" rows="5"></textarea>
                </div>
                <div class="clear"><!-- ClearFix --></div>
                <div class="columns seven contact_button alpha omega offset-by-two">
					<input type="submit" name="button" id="button" value="Send Email" />
                    <span class="response" aria-live="polite">
                      <? require_once('site-handlers/contact-us.php');
                        if (isset($_GET['submit'])) {
                          if($_GET['submit']){ echo contactUs(); }
                        } ?>
                    </span>
                </div>
                <div class="clear"><!-- ClearFix --></div>
            </form>
        </div>
        <div class="columns six offset-by-two">
        	<div class="add-bottom">
                <h3>Luke Chapman</h3>
                <p>Mobile: 0408 681 941<br />
                E-mail: <a href="mailto: luke@chapmanbuilt.com.au"> luke@chapmanbuilt.com.au</a></p>
                <h3>The Office</h3>
                <p>PO Box 5611<br />
                Hughes<br />
                2605</p>
            </div>
        </div>
	</div>
</div>

<!-- Footer
================================================== -->
<?php include("includes/tpl_footer.php"); ?>