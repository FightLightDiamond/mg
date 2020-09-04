<?php


namespace ViMagento\HelloWorld\Model\ResourceModel\Post;

use Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection;

class Collection extends AbstractCollection
{
    protected function _construct()
    {
        $this->_init(
            'ViMagento\HelloWorld\Model\Post',
            'ViMagento\HelloWorld\Model\ResourceModel\Post'
        );
    }
}
