/**
 * Beehiiv Subscription Helper
 * Replaces ConvertKit across mjcalloway.com
 */

var BEEHIIV = {
  PUB_ID: 'pub_4ca40bea-12b3-4e26-af57-3a0c132cf2d1',
  API_KEY: 'wFiyTdabO7JljPEiRACHxWGZaUXSJIvbZpU3w2NNaycvusW7YgSWH1fYiJhIdy3F',

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

    return fetch('https://api.beehiiv.com/v2/publications/' + BEEHIIV.PUB_ID + '/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + BEEHIIV.API_KEY
      },
      body: JSON.stringify({
        email: email,
        custom_fields: fields,
        send_welcome_email: true,
        double_opt_override: 'off'
      })
    }).then(function(res) {
      if (!res.ok) throw new Error('Beehiiv subscription failed');
      return res.json();
    });
  }
};
