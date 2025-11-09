import { NewTask } from './new-task';

describe('NewTask', () => {
  it('should create an instance', () => {
    const directive = new NewTask();
    expect(directive).toBeTruthy();
  });
});
