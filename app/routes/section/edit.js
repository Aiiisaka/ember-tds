import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionEditRoute extends Route {
  model(params) {
    return this.store.findRecord('section', params.section_id);
  }

  @action editSection(section) {
    section.save().then(() => this.transitionTo('section'));
  }
}
