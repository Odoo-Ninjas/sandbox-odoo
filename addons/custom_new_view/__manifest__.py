{
    "name": "custom_new_view",
    "version": "17.0.1.0",
    "author": "Marc Wimmer (marc@zebroo.de)",
    "depends": [
        "mrp",
        "mrp_batchorder",
        "mrp_product_field_formlocation",
        "sales_pricelist_hpn_stack_logic",
    ],
    "data": ["views/production_form.xml", "views/view.xml"],
    "external_dependencies": {"python": [], "bin": []},
    "assets": {
        "web.assets_backend": [
            "custom_new_view/static/src/css/styles.scss",
            "custom_new_view/static/src/js/pdfviewer.js",
            "custom_new_view/static/src/js/production_model.js",
            "custom_new_view/static/src/js/production_renderer.js",
            "custom_new_view/static/src/js/production_view.js",
            "custom_new_view/static/src/js/production_view_controller.js",
            "custom_new_view/static/src/js/textarea.js",
            "custom_new_view/static/src/xml/templates.xml",
        ]
    },
    "demo": [],
    "test": [],
    "web": True,
    "application": False,
}
