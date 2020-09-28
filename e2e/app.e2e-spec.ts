import { ToDoListAngularJsonServerPage } from './app.po';

describe('to-do-list-angular-json-server App', function() {
  let page: ToDoListAngularJsonServerPage;

  beforeEach(() => {
    page = new ToDoListAngularJsonServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
