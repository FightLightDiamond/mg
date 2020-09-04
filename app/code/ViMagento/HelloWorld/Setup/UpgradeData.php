<?php


namespace ViMagento\HelloWorld\Setup;


use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;

class UpgradeData implements \Magento\Framework\Setup\UpgradeDataInterface
{
    protected $_postFactory;

    public function __construct(\ViMagento\HelloWorld\Model\PostFactory $postFactory)
    {
        $this->_postFactory = $postFactory;
    }

    public function upgrade(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $data = [
            'name'         => "Magento 2 thêm dữ liệu vào bảng vimagento_helloworld_post 22",
            'post_content' => "Content 22.",
            'status'       => 1
        ];

        $post = $this->_postFactory->create();
        $post->addData($data)->save();
    }
}
