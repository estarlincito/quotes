export default class Base64 {
  constructor(public text: string) {}

  readonly encoded = Buffer.from(this.text, 'utf8').toString('base64');

  readonly decoded = Buffer.from(this.text, 'base64').toString('utf8');
}
