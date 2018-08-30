import { Erro404Module } from './erro404.module';

describe('Erro404Module', () => {
  let erro404Module: Erro404Module;

  beforeEach(() => {
    erro404Module = new Erro404Module();
  });

  it('should create an instance', () => {
    expect(erro404Module).toBeTruthy();
  });
});
