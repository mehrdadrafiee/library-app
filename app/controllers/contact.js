import Ember from 'ember';

let { computed } = Ember;

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  validEmailAddress: computed.match('emailAddress', /^.+@.+\..+$/),
  validMessage: computed.gte('message.length', 5),
  isValid: computed.and('validEmailAddress', 'validMessage'),

  actions: {
    sendMessage() {
      let email = this.get('emailAddress');
      let message = this.get('message');

      alert('Sending your message in progress... ');

      let responseMessage = 'To: ' + email + ', Message: ' + message;
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
