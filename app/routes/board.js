import Abstractroute from './abstractroute';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class BoardRoute extends Abstractroute {
  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetail',
        }),
        employee: user,
      });
    }
  }

  @action order() {
    this.transitionTo('my-order.order');
  }

  @action section() {
    this.transitionTo('section');
  }
}
