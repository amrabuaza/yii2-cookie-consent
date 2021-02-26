Yii2 Cookie Consent
============================
Yii2 Bootstrap Pincode Input

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist amrabuaza/yii2-cookie-consent "*"
```

or add

```
"amrabuaza/yii2-cookie-consent": "*"
```

to the require section of your `composer.json` file.


Usage
-----

Once the extension is installed, simply use it in your code by  :

```php
<?= CookieWidget::widget([
        'message'                           => Yii::t('app','We use your profiles on this website to understand your use of our website and enhance your user experience'),
        'allowButtonLabel'                  => Yii::t('app','OK I agree'),
        'learnMoreButtonLabel'              => Yii::t('app','More information'),
        'learnMoreLink'                     => Url::to(['/site/about-us']),
    ]); ?>
