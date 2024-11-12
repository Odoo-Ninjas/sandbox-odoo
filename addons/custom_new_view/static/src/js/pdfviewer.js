/** @odoo-module */

const { useEffect, useRef, xml, onWillUpdateProps, Component, useState } = owl;
import { useService } from "@web/core/utils/hooks";

export class PdfViewerProduction extends Component {
    setup() {
        super.setup();
        this.orm = useService("orm");
        this.state = useState(this.props);
        this.update_data_uri();

        onWillUpdateProps((nextProps) => {
            this.update_data_uri();
        });
    }
    update_data_uri() {
        this.state.datauri = "data:application/pdf;base64," + this.state.pdf;
    }


}
PdfViewerProduction.template = xml`<iframe style="width: 100%; height: 100%;" t-att-src="state.datauri"></iframe>`;
