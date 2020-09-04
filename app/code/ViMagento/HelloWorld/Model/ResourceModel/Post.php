<?php


namespace ViMagento\HelloWorld\Model\ResourceModel;

use Magento\Framework\Model\ResourceModel\Db\AbstractDb;

class Post extends AbstractDb
{
    protected function _construct()
    {
        // vimagento_helloworld_post là tên bảng , post_id là khóa chính primary của bảng
        $this->_init('vimagento_helloworld_post', 'post_id');
    }
}
