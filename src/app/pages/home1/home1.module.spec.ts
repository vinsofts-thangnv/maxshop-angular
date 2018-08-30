import { Home1Module } from './home1.module';

describe('Home1Module', () => {
  let home1Module: Home1Module;

  beforeEach(() => {
    home1Module = new Home1Module();
  });

  it('should create an instance', () => {
    expect(home1Module).toBeTruthy();
  });
});
