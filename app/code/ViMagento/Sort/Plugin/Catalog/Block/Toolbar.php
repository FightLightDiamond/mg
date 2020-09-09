<?php

namespace ViMagento\Sort\Plugin\Catalog\Block;

class Toolbar
{
    public function aroundSetCollection(
        \Magento\Catalog\Block\Product\ProductList\Toolbar $subject,
        \Closure $proceed,
        $collection
    ) {
        $currentOrder = $subject->getCurrentOrder();
        $result = $proceed($collection);

        if ($currentOrder) {
            if ($currentOrder == 'price_asc') {
                $subject->getCollection()->setOrder('price', 'asc');
            } elseif ($currentOrder == 'name_asc') {
                $subject->getCollection()->setOrder('name', 'asc');
            } elseif ($currentOrder == 'price_desc') {
                $subject->getCollection()->setOrder('price', 'desc');
            } elseif ($currentOrder == 'name_desc') {
                $subject->getCollection()->setOrder('name', 'desc');
            }
        } else {
            $subject->getCollection()->setOrder('position', 'desc');
        }
        return $result;
    }
}
