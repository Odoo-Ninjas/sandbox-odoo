from odoo import _, api, fields, models, SUPERUSER_ID
from odoo.exceptions import UserError, RedirectWarning, ValidationError

class Production(models.Model):
    _inherit = 'mrp.production'

    notes = fields.Text("Notes")


    def tablet_view(self):
        return {
            'view_type': 'form',
            'res_model': self._name,
            'views': [(False, 'production_tablet_view')],
            'type': 'ir.actions.act_window',
            'domain': [('id', '=', self.id)],
            "context": {
            },
            'target': 'current',
            'name': f"{self.name}-tablet",
        }
