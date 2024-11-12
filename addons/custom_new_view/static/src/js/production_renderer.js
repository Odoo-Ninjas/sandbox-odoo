/** @odoo-module */
import { Component } from "@odoo/owl";
import { PdfViewerProduction } from "./pdfviewer.js";
import { TextareaAutoSave } from "./textarea";

export class ProductionTabletViewRenderer extends Component {}

ProductionTabletViewRenderer.template = "mrp_custom_tablet_view.Renderer";
ProductionTabletViewRenderer.components = { PdfViewerProduction, TextareaAutoSave };