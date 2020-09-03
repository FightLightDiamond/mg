<?php


namespace ViMagento\HelloWorld\Model\ResourceModel\Posts;

use Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection;

class Collection extends AbstractCollection
{
    protected function _construct()
    {
        $this->_init(
            'ViMagento\HelloWorld\Model\Posts',
            'ViMagento\HelloWorld\Model\ResourceModel\Posts'
        );
    }
}
