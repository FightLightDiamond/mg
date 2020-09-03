<?php


namespace Magetop\Helloworld\Setup;


use Magento\Framework\DB\Ddl\Table;
use Magento\Framework\Setup\UpgradeSchemaInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\SchemaSetupInterface;

class UpgradeSchema implements UpgradeSchemaInterface
{
    public function upgrade(SchemaSetupInterface $setup, ModuleContextInterface $context)
    {
        $setup->startSetup();
        $tableName = $setup->getTable('magetop_hello');
        if (version_compare($context->getVersion(), '1.0.1', '<')) {
            if ($setup->getConnection()->isTableExists($tableName) != true) {
                $table = $setup->getConnection()->newTable($tableName)
                    ->addColumn(
                        'id',
                        Table::TYPE_INTEGER,
                        null,
                        [
                            'identity' => true,
                            'unsigned' => true,
                            'nullable' => false,
                            'primary' => true
                        ],
                        'ID'
                    )
                    ->addColumn(
                        'title',
                        Table::TYPE_TEXT,
                        null,
                        ['nullable' => false, 'default' => ''],
                        'Title'
                    )
                    ->addColumn(
                        'summary',
                        Table::TYPE_TEXT,
                        null,
                        ['nullable' => false, 'default' => ''],
                        'Summary'
                    )
                    ->addColumn(
                        'description',
                        Table::TYPE_TEXT,
                        null,
                        ['nullable' => false, 'default' => ''],
                        'Description'
                    )
                    ->addColumn(
                        'status',
                        Table::TYPE_SMALLINT,
                        null,
                        [
                            'nullable' => false, 'default' => '0'
                        ],
                        'Status'
                    )
                    ->addColumn(
                        'create_at',
                        Table::TYPE_DATETIME,
                        null,
                        [
                            'nullable' => false
                        ],
                        'Create_at'
                    )
                    ->setComment('Magetop Hello')
                    ->setOption('type', 'InnoDB')
                    ->setOption('charset', 'utf8');
                $setup->getConnection()->createTable($table);
            }
        }
        // Thêm cột vào bảng
        if (version_compare($context->getVersion(), '1.0.1', '<')) {
            if ($setup->getConnection()->isTableExists($tableName) == true) {
                $column = [
                    'image' => [
                        'type' => Table::TYPE_TEXT,
                        ['nullable' => true, 'default' => ''],
                        'comment' => 'Image',
                    ],
                ];
                foreach ($column as $name => $definition) {
                    $setup->getConnection()->addColumn($tableName, $name, $definition);
                }
            }
        }

        $setup->endSetup();
    }
}
