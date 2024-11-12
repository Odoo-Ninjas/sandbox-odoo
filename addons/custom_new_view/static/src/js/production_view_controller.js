/** @odoo-module */

import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { Component, onWillStart, useState } from "@odoo/owl";

export class ProductionTabletViewController extends Component {
    setup() {
        this.orm = useService("orm");

        // The controller create the model and make it reactive so whenever this.model is
        // accessed and edited then it'll cause a rerendering
        this.model = useState(
            new this.props.Model(
                this.orm,
                this.props.resModel,
                this.props.fields,
                this.props.archInfo,
                this.props.domain
            )
        );
        this.model.records

        onWillStart(async () => {
            await this.model.load();
        });
    }
}

ProductionTabletViewController.template = "mrp_custom_tablet_view.View";
ProductionTabletViewController.components = { Layout };