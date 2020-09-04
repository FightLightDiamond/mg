<?php

namespace ViMagento\HelloWorld\Controller\Adminhtml\Post;

use Magento\Backend\App\Action;
use Magento\Backend\Model\View\Result\RedirectFactory;
use ViMagento\HelloWorld\Model\PostFactory;

class Save extends Action
{
    private $resultRedirect;
    private $postFactory;

    public function __construct(
        Action\Context $context,
        PostFactory $postFactory,
        RedirectFactory $redirectFactory
    ) {
        parent::__construct($context);
        $this->postFactory = $postFactory;
        $this->resultRedirect = $redirectFactory;
    }

    public function execute()
    {
        try {
            $data = $this->getRequest()->getPostValue();
            $id = !empty($data['post_id']) ? $data['post_id'] : null;

            $newData = [
                'name' => $data['name'],
                'status' => $data['status'],
                'content' => $data['content'],
            ];

            $post = $this->postFactory->create();

            if ($id) {
                $post->load($id);
                $this->getMessageManager()->addSuccessMessage(__('Edit thành công'));
            } else {
                $this->getMessageManager()->addSuccessMessage(__('Save thành công.'));
            }
            $post->addData($newData);
            $post->save();
            return $this->resultRedirect->create()->setPath('helloworld/post/index');
        } catch (\Exception $e) {
            $this->getMessageManager()->addErrorMessage(__('Save thất bại.'));
        }
    }
}
