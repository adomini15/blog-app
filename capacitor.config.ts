import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'BlogApp',
  webDir: 'build',
  bundledWebRuntime: false,
  // aggregate for me
  server: {
    allowNavigation: [
      "https://joangregorioperez.com"
    ]
  }
};

export default config;
