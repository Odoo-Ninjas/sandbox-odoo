/** @odoo-module */

import { registry } from "@web/core/registry";
import { ProductionTabletViewController } from "./production_view_controller";
import { ProductionTableViewModel } from "./production_model";
import { ProductionTabletViewRenderer } from "./production_renderer";

export const productionTabletView = {
    type: "production_tablet_view",
    display_name: "Production Tablet View",
    icon: "fa fa-picture-o", // the icon that will be displayed in the Layout panel
    multiRecord: false,
    Controller: ProductionTabletViewController,
    Model: ProductionTableViewModel,
    Renderer: ProductionTabletViewRenderer,



    props(genericProps, view) {
        const { ArchParser } = view;
        const { arch } = genericProps;
        const archInfo = arch;

        return {
            ...genericProps,
            Model: view.Model,
            Renderer: view.Renderer,
            archInfo,
        };
    },
};

registry.category("views").add("production_tablet_view", productionTabletView);