<div id="custom-component" data-bind="scope:'customcomponent'">
    <!-- ko template: getTemplate() --><!-- /ko -->
    <script type="text/x-magento-init">
    {
        "#custom-component": {
            "Magento_Ui/js/core/app": {
               "components": {
                    "customcomponent": {
                        "component": "ViMagento_OrderGrid/js/custom-component"
                    }
                }
            }
        }
    }
    </script>
</div>
