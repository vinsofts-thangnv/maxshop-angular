import { Shop1Module } from './shop1.module';

describe('Shop1Module', () => {
  let shop1Module: Shop1Module;

  beforeEach(() => {
    shop1Module = new Shop1Module();
  });

  it('should create an instance', () => {
    expect(shop1Module).toBeTruthy();
  });
});
