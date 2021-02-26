<?php
/**
 * Created by PhpStorm.
 * User: amrabuaza
 */

/**
 * @var string $message
 * @var string $allowButtonLabel
 * @var string $learnMoreButtonLabel
 * @var string $learnMoreLink
 */

?>

<section id="cookie-consent">
    <div class="cookie-consent-body mt-lg-2">
        <span class="cookie-message font-size-lg-o875 mt-2 font-size-sm-o75 font-weight-bold">
            <?= $message ?>
        </span>
        <div class="d-flex justify-content-center mt-lg-0 mt-3">
            <div class="d-flex">
                <a aria-label="<?= $learnMoreButtonLabel ?>" role="button" tabindex="0"
                   class="cookie-learn-more-btn text-decoration-underline font-size-lg-o75 font-size-sm-o625 mt-lg-0 mt-1 ml-2 mr-2 ml-lg-4 mr-lg-4"
                   href="<?= $learnMoreLink ?>"
                   rel="noopener noreferrer nofollow" target="_blank">
                    <?= $learnMoreButtonLabel ?>
                </a>
                <a aria-label="allow cookies" role="button" tabindex="0"
                   class="cookie-allow-btn font-size-o75 font-weight-bold ml-lg-5 mr-lg-5 ml-4 mr-4">
                    <?= $allowButtonLabel ?>
                </a>
            </div>
        </div>
    </div>
</section>
