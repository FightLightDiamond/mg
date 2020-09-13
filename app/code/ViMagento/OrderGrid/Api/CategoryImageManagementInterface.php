<?php


namespace ViMagento\OrderGrid\Api;


/**
 * Interface CategoryImageManagementInterface
 * @package ViMagento\OrderGrid\Api
 */
interface CategoryImageManagementInterface
{
    /**
     * GET for CategoryImage api
     * @return string
     */

    public function getCategoryImages();

    /**
     * GET for CategoryImage api
     * @return array
     */
    public function index();

    /**
     * POST for CategoryImage api
     * @return array
     */
    public function create();

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id);

    /**
     * POST for CategoryImage api
     * @return array
     */
    public function sort();
}
