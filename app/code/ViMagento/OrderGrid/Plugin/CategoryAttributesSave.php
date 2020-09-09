<?php


namespace ViMagento\OrderGrid\Plugin;


class CategoryAttributesSave
{
    public function aroundSave(\Magento\Catalog\Model\Category $subject, callable $proceed)
    {
        $someValue = $this->doSmthBeforeProductIsSaved();
        $returnValue = null;

        if ($this->canCallProceedCallable($someValue)) {
            $returnValue = $proceed();
        }

        if ($returnValue) {
            $this->postProductToFacebook();
        }

        return $returnValue;
    }
}
