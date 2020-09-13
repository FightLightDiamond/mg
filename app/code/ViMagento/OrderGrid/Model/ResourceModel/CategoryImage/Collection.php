<?php


namespace ViMagento\OrderGrid\Model\ResourceModel\CategoryImage;


use Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection;

class Collection extends AbstractCollection
{
    protected function _construct()
    {
        $this->_init(
            'ViMagento\OrderGrid\Model\CategoryImage',
            'ViMagento\OrderGrid\Model\ResourceModel\CategoryImage'
        );
    }
}
