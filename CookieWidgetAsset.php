<?php
/**
 * Created by PhpStorm.
 * User: amrabuaza
 */

namespace amrabuaza\CookieWidget;

use yii\web\AssetBundle;

class CookieWidgetAsset extends AssetBundle
{

    public $js = [
        'js/cookie-consent.js',
        'js/cookie-helpers.js',
    ];

    public $css = [
        'css/cookie-consent.css'
    ];

    public $depends = [
        'yii\web\JqueryAsset'
    ];

    public function init()
    {
        $this->sourcePath = __DIR__ . "/assets";
        parent::init();
    }

}