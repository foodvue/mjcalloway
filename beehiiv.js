/**
 * Beehiiv Subscription Helper
 * Calls /api/subscribe proxy to avoid CORS issues
 */

var BEEHIIV = {
  subscribe: function(email, source, customFields) {
    var fields = [{ name: 'source', value: source || 'website' }];

    if (customFields) {
      for (var i = 0; i < customFields.length; i++) {
        fields.push({
          name: customFields[i].name,
          value: String(customFields[i].value)
        });
      }
    }

    return fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        custom_fields: fields,
        send_welcome_email: true,
        double_opt_override: 'off'
      })
    }).then(function(res) {
      if (!res.ok) throw new Error('Subscription failed');
      return res.json();
    });
  }
};
