/**
 * Created by PhpStorm.
 * User: amrabuaza
 */

/**
 * Cookie helper methods
 */

/**
 * Get cookie by name
 *
 * @param name
 * @returns {string|undefined}
 */
function getCookie(name) {
    name = name + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    let len = ca.length;
    for (let i = 0; i < len; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1);
        if (c.indexOf(name) === 0)
            return c.substring(name.length, c.length);
    }
    return undefined;
}

/**
 * Set cookie
 *
 * @param name
 * @param value
 * @param days
 * @param sameSite
 * @param domain
 */
function setCookie(name, value, days, sameSite = false, domain = undefined) {

    let d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    sameSite = sameSite ? ';SameSite=None' : '';

    // when not set domain get current domain from window
    if (!domain) {
        domain = window.location.hostname;
    }
    domain = ";domain=" + domain;

    // set cookie into document
    document.cookie = name + "=" + value + ";" + expires + ";path=/" + sameSite + domain;
}