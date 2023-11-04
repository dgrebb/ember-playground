import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import backstop from 'ember-backstop/test-support/backstop';
import { setupApplicationTest } from 'ember-playground/tests/helpers';

module('Acceptance | home', function (hooks) {
  setupApplicationTest(hooks);
  hooks.beforeEach(function () {
    // Runs before each test in this module
  });

  hooks.afterEach(function () {
    // Runs after each test in this module
  });
  test('it renders the thing', async function (assert) {
    await visit('/');
    await backstop(assert);
    assert.dom('#ember-welcome-page-id-selector').exists();
  });
});
