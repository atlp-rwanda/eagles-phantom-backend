/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
export class Application {
  constructor({ server }) {
    this.server = server;
  }

  async start() {
    await this.server.start();
  }
}
