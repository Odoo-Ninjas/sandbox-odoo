from odoo import _, api, fields, models, SUPERUSER_ID
from odoo.exceptions import UserError, RedirectWarning, ValidationError
class View(models.Model):
    _inherit = 'ir.ui.view'

    type = fields.Selection(selection_add=[('production_tablet_view', 'production_tablet_view')])