<?php


namespace ViMagento\HelloWorld\Model\ResourceModel;

use Magento\Framework\Model\ResourceModel\Db\AbstractDb;

class Posts extends AbstractDb
{
    protected function _construct()
    {
        // vimagento_helloworld_post là tên bảng , id là khóa chính primary của bảng
        $this->_init('vimagento_helloworld_post', 'id');
    }
}
