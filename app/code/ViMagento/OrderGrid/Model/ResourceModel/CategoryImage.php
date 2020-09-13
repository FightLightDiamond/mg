<?php


namespace ViMagento\OrderGrid\Model\ResourceModel;


use Magento\Framework\Model\ResourceModel\Db\AbstractDb;

class CategoryImage extends AbstractDb
{
    protected function _construct()
    {
        // vimagento_helloworld_post là tên bảng , post_id là khóa chính primary của bảng
        $this->_init('catalog_product_images', 'id');
    }
}
