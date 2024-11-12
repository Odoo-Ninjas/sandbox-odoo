/** @odoo-module */

const { useEffect, useRef, xml, onWillUpdateProps, Component, useState } = owl;
import { useService } from "@web/core/utils/hooks";

export class TextareaAutoSave extends Component {
	setup() {
		super.setup();
		this.orm = useService("orm");
		this.state = useState(this.props);
		this.input1 = useRef("text1");
	}
	async changed() {
		const id = this.props.id;
		const model = this.props.model;
		const field = this.props.fieldname;
		let values = {};
		values[field] = this.state.value;
		await this.orm.write(model, [id], values);
	}
	keydown(ev) {
		if (ev.key == "Escape") {
			ev.target.blur();
		}
	}
}
TextareaAutoSave.template = xml`<textarea
	t-model="state.value"
	t-ref="text1"
	t-on-blur="changed"
	t-on-keydown="keydown"
></textarea>`;
