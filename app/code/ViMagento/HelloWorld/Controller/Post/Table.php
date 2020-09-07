<?php

namespace ViMagento\HelloWorld\Controller\Post;

class Table extends \Magento\Framework\App\Action\Action
{
    protected $postFactory;

    /**
     * Table constructor.
     * @param \Magento\Framework\App\Action\Context $context
     * @param \ViMagento\HelloWorld\Model\PostFactory $postFactory
     */
    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        \ViMagento\HelloWorld\Model\PostFactory $postFactory
    ) {
        $this->postFactory = $postFactory;
        return parent::__construct($context);
    }

    public function execute()
    {
        $data = $this->postFactory->create()->getCollection();
        foreach ($data as $value) {
            echo "<pre>";
            print_r($value->getData());
            echo "</pre>";
        }
    }
}
