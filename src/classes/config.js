export class Config {
  appName;
  constructor(cfg) {
    Object.keys(cfg).forEach((key) => {
      this[key] = cfg[key];
    });
  }
}
