import { DesarrolloPage } from './app.po';

describe('desarrollo App', () => {
  let page: DesarrolloPage;

  beforeEach(() => {
    page = new DesarrolloPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
