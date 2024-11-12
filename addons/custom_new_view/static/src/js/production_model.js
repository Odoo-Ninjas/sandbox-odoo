/** @odoo-module */

import { KeepLast } from "@web/core/utils/concurrency";
import { RelationalModel } from "@web/model/relational_model/relational_model";
import { useService } from "@web/core/utils/hooks";
import { Component, onWillStart, useState } from "@odoo/owl";

export class ProductionTableViewModel {
    constructor(orm, resModel, fields, archInfo, domain) {
        this.orm = orm;
		this.actionService = useService('action');
        this.resModel = resModel;
        // We can access arch information parsed by the beautiful arch parser
        const { fieldFromTheArch } = archInfo;
        this.fieldFromTheArch = fieldFromTheArch;
        this.fields = fields;
        this.domain = domain;
        this.keepLast = new KeepLast();
    }

    async load_record() {
        const records = await this.orm.searchRead(
            this.resModel,
            this.domain,
            ["id", "name" ],
            {
                limit: 1,
            }
        );
        records[0]._name = 'mrp.production';
        return records[0];
    }

    async augment_record() {
        const production = await this.orm.searchRead(
            this.resModel,
            this.domain,
            [ ],
            {
                limit: 1,
            }
        );
        for (const key in production[0]) {
            this.record[key] = production[0][key];
        }

        this.record.notes = this.record.notes || '';
    }

    async load() {
        // The keeplast protect against concurrency call
        const { length, records } = await this.keepLast.add(
            this.orm.webSearchRead(this.resModel, this.domain, { specification: {} })
        );
        const production = await this.load_record();
        this.record = production;
        this.recordsLength = this.record.length;
        await this.augment_record();



    }


}