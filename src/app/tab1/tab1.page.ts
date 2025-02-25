import { Component } from '@angular/core';

// Import the BrazePlugin module, we use the `// @ts-ignore` comment below to ignore the TypeScript error
// @ts-ignore
import * as BrazePlugin from 'braze-cordova-sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor() {}

  logCustomEvent() {
    // Example of use of the BrazePlugin API
    // See:
    // - BrazePlugin symbols: https://github.com/braze-inc/braze-cordova-sdk/blob/master/www/BrazePlugin.js
    // - Example usage: https://github.com/braze-inc/braze-cordova-sdk/blob/master/sample-project/www/js/index.js
    BrazePlugin.logCustomEvent("test_event", { "test_key": "test_value" });
  }

}
