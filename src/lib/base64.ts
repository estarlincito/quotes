export default class Base64 {
  constructor(public text: string) {}

  //encoded text
  readonly encoded = Buffer.from(this.text, 'utf8').toString('base64');

  //decoded text
  readonly decoded = Buffer.from(this.text, 'base64').toString('utf8');
}
