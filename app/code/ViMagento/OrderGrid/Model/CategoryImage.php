<?php


namespace ViMagento\OrderGrid\Model;


use Magento\Framework\Model\AbstractModel;

class CategoryImage extends AbstractModel
{
    protected function _construct()
    {
        $this->_init('ViMagento\OrderGrid\Model\ResourceModel\CategoryImage');
    }
}
