import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'SampleApp',
  webDir: 'www',
  cordova: {
    // Needed for Capacitor < 7.0.0 to allows access to the BrazePlugin module in the native code.
    // The `staticPlugins` configuration can be omitted in Capacitor 7.x.x+ projects.
    staticPlugins: [
      'cordova-plugin-braze'
    ],
    // Braze specific configuration goes here
    // See the following links for available configuration keys:
    // - https://www.braze.com/docs/developer_guide/platforms/cordova/sdk_integration/#optional-configurations
    preferences: {
      'com.braze.api_key': 'BRAZE_API_KEY',
      'com.braze.ios_api_endpoint': 'BRAZE_ENDPOINT',
      // Debug log level:
      'com.braze.ios_log_level': '0',
    },
  },
};

export default config;
