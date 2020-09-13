<?php

namespace ViMagento\OrderGrid\Model\Category;

class DataProvider extends \Magento\Catalog\Model\Category\DataProvider
{
    protected function getFieldsMap()
    {
        $fields = parent::getFieldsMap();
        $fields['abc'][] = 'manual'; // custom image field
        return $fields;
    }
}
