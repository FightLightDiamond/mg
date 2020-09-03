<?php


namespace ViMagento\HelloWorld\Plugin;


class UpdateProductName
{
    public function beforeSetName(\Magento\Catalog\Model\Product $subject, $name)
    {
        $name = "HelloWorld";
        return [$name];
    }

    public function afterGetName(\Magento\Catalog\Model\Product $subject, $result)
    {
        $result = "Vi-Magento HelloWorld";
        return $result;
    }
}
