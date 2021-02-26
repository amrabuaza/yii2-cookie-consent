/**
 * Created by PhpStorm.
 * User: amrabuaza
 */

/*********************************************************************************************************************
 1.0  Put here list of possible Constants
 *********************************************************************************************************************/
const COOKIE_CONSENT_KEY                = "cookieconsent_status";
const COOKIE_CONSENT_ALLOW              = "allow";
const COOKIE_CONSENT_DISMISS            = "dismiss";
const COOKIE_CONSENT_SAVED_DAYS         = 365;
const COOKIE_CONSENT_ELEMENT            = $("#cookie-consent"); // html element

/*********************************************************************************************************************
 2.0  List of events
 *********************************************************************************************************************/

/**
 * When document ready need to check cookies and if not exist need to show cookie message
 */
$(document).ready(function () {

    // get consent cookie
    let consentCookie = getCookie(COOKIE_CONSENT_KEY);

    // check if not exist or not allow need to show cookie message
    if (!consentCookie || consentCookie !== COOKIE_CONSENT_ALLOW) {
        showCookieConsent();
    }

});

/**
 * When user click to allow cookie
 */
$(".cookie-allow-btn").click(function (){
    setCookie(COOKIE_CONSENT_KEY, COOKIE_CONSENT_ALLOW, COOKIE_CONSENT_SAVED_DAYS);
    hideCookieConsent();
});

/*********************************************************************************************************************
 3.0  Cookie consent actions
 *********************************************************************************************************************/

/**
 * Show cookie consent
 */
function showCookieConsent() {
    setTimeout(function () {
        COOKIE_CONSENT_ELEMENT.fadeIn("fast");
    }, 500)
}

/**
 * Hide cookie consent
 */
function hideCookieConsent() {
    COOKIE_CONSENT_ELEMENT.fadeOut("fast");
}

