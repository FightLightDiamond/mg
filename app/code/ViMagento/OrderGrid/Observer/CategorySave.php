<?php

namespace ViMagento\OrderGrid\Observer;

use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;
use Magento\MediaStorage\Model\File\UploaderFactory;

class CategorySave implements ObserverInterface
{
    protected $uploaderFactory;

    public function __construct(
        UploaderFactory $uploaderFactory
    ) {
        $this->uploaderFactory = $uploaderFactory;
    }
    public function execute(Observer $observer)
    {
        $category = $observer->getData('category');

        $category->setData('name', 'XXX');

        $request = $observer->getData('request');
        $image_model_attribute = $request->getParam('image_model_attribute');
//        $name2 = $request->getPostValue('name');

//        $uploader = $this->uploaderFactory->create(['image_model_attribute' => $image_model_attribute]);
//        $uploader->setFilesDispersion(false);
//        $uploader->setFilenamesCaseSensitivity(false);
//        $uploader->setAllowRenameFiles(true);
//        $path='category';
//        $result = $uploader->save($path);


//        $request->setData('name', 'Tôi đã thay đổi dữ liệu');
//        $observer->setData('request', $request);
    }
}
