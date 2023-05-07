declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly GITHUB_TOKEN: string;
    readonly JWT_SECRET_KEY: string;
    readonly ADMIN_PSW: string;
    readonly ADMIN_EMAIL: string;
  }
}
