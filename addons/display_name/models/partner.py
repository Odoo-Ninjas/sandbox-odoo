from odoo import _, api, fields, models, SUPERUSER_ID
from odoo.exceptions import UserError, RedirectWarning, ValidationError


class Partner(models.Model):
    _inherit = "res.partner"

    partner2_id = fields.Many2one("res.partner")

    def name_get(self):
        breakpoint()
        res = super().name_get()
        if not self.env.context.get('ctx1'):
            return res

        res = []
        for rec in self:
            res.append((rec.id, "from context: " + rec.name))
        return res
