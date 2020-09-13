<?php

namespace ViMagento\OrderGrid\Model;

use Magento\Framework\App\Filesystem\DirectoryList;
use ViMagento\OrderGrid\Api\CategoryImageManagementInterface;

class CategoryImageManagement implements CategoryImageManagementInterface
{
    protected $factory;
    protected $collectionFactory;
    protected $request;

    protected $uploaderFactory;
    protected $adapterFactory;
    protected $filesystem;

    public function __construct(
        \ViMagento\OrderGrid\Model\CategoryImageFactory $factory,
        \ViMagento\OrderGrid\Model\ResourceModel\CategoryImage\CollectionFactory $collectionFactory,
        \Magento\Framework\App\RequestInterface $request,
        \Magento\MediaStorage\Model\File\UploaderFactory $uploaderFactory,
        \Magento\Framework\Image\AdapterFactory $adapterFactory,
        \Magento\Framework\Filesystem $filesystem
    ) {
        $this->collectionFactory = $collectionFactory;
        $this->factory = $factory;
        $this->request = $request;

        $this->uploaderFactory = $uploaderFactory;
        $this->adapterFactory = $adapterFactory;
        $this->filesystem = $filesystem;
    }

    public function getCategoryImages()
    {
        $collection = $this->collectionFactory->create();
//        return $this->factory->get();

//        return $collection->getData();
//        return $collection->addFilter('category_id', 1)->getData();
        return 'api GET return the $param ';
    }

    public function index()
    {
        return $this->collectionFactory->create()
            ->addFieldToFilter('category_id', ['eq' => $this->request->getParam('category_id')])
            ->toArray();
    }

    public function create()
    {
        try {
            $uploaderFactory = $this->uploaderFactory->create(['fileId' => 'image']);
            $uploaderFactory->setAllowedExtensions(['jpg', 'jpeg', 'gif', 'png']);
            $imageAdapter = $this->adapterFactory->create();

            /* start of validated image */
            $uploaderFactory->addValidateCallback(
                'custom_image_upload',
                $imageAdapter,
                'validateUploadFile'
            );

            $uploaderFactory->setAllowRenameFiles(true);
            $uploaderFactory->setFilesDispersion(true);
            $mediaDirectory = $this->filesystem->getDirectoryRead(DirectoryList::MEDIA);
            $destinationPath = $mediaDirectory->getAbsolutePath('custom_image');

            $result = $uploaderFactory->save($destinationPath);

            if (!$result) {
                throw new \Exception(
                    __('File cannot be saved to path: $1', $destinationPath)
                );
            }

            /**
             * Save to
             */
            $data = [
                'category_id' => $this->request->getParam('category_id'),
                'name' => $result['file'],
                'no' => $this->request->getParam('no')
            ];

            $model = $this->factory->create($data);
            $model->addData($data)->save();

            return $data;
            //
        } catch (\Exception $e) {
        }
    }

    public function destroy($id)
    {
        try {
            return $this->collectionFactory->create()
                ->load($id)
                ->delete();
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function sort()
    {
    }
}
