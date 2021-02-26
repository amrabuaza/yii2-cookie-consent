<?php
/**
 * Created by PhpStorm.
 * User: amrabuaza
 */

namespace amrabuaza\CookieWidget;

use yii\base\Widget;

class CookieWidget extends Widget
{

    /** @var string cookie message */
    public $message;
    /** @var string allow button label */
    public $allowButtonLabel;
    /** @var string learn more button label */
    public $learnMoreButtonLabel;
    /** @var string learn more link */
    public $learnMoreLink = null;

    /**
     * Runs the widget.
     * @return string
     */
    public function run()
    {
        // render html view
        return $this->renderNeededView();
    }

    /**
     * Fetch needed data and return result to print
     *
     * @return string
     */
    public function renderNeededView()
    {
        $view = $this->getView();
        CookieWidgetAsset::register($view);

        $dependencyArray = [
            'message'                       => $this->message,
            'allowButtonLabel'              => $this->allowButtonLabel,
            'learnMoreButtonLabel'          => $this->learnMoreButtonLabel,
            'learnMoreLink'                 => $this->learnMoreLink,
        ];

        return $this->render('_view', $dependencyArray);
    }

}