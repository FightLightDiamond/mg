<?php


namespace ViMagento\Sort\Plugin\Catalog\Model;


class Config
{
    public function afterGetAttributeUsedForSortByArray(
        \Magento\Catalog\Model\Config $catalogConfig,
        $options
    ) {
        unset($options['price']);
        unset($options['name']);
        $options = [];
        $options['position'] = __('Độ ưu tiên');
        $options['price_desc'] = __('Giá giảm dần');
        $options['price_asc'] = __('Giá tăng dần');
        $options['name_desc'] = __('Tên từ Z - A');
        $options['name_asc'] = __('Tên từ A - Z');
        return $options;
    }
}
