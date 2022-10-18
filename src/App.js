/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from "@lightningjs/sdk";
import { displayText } from "./displayText";

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },

      {
        family: "VF-Regular",
        url: Utils.asset("fonts/Vodafone_Rg.ttf"),
      },
      {
        family: "VF-Bold",
        url: Utils.asset("fonts/Vodafone_Bold.ttf"),
      },
    ];
  }
  static _template() {
    return {
      Text: {
        Text1: {
          x: 0,
          y: 0,
          type: displayText,
          displayText: "Regular 64",
          fontSize: 64,
          fontFace: "Regular",
        },
        Text2: {
          x: 500,
          y: 0,
          type: displayText,
          displayText: "Regular bold 64",
          fontSize: 64,
          fontFace: "Regular",
          fontStyle: "bold"
        },
        Text3: {
          x: 1000,
          y: 0,
          type: displayText,
          displayText: "Regular italic 64",
          fontSize: 64,
          fontFace: "Regular",
          fontStyle: "italic"
        },
        Text4: {
          x: 0,
          y: 120,
          type: displayText,
          displayText: "VF-Regular 64",
          fontSize: 64,
          fontFace: "VF-Regular",
        },
        Text5: {
          x: 500,
          y: 120,
          type: displayText,
          displayText: "VF-Regular bold 64",
          fontSize: 64,
          fontFace: "VF-Regular",
          fontStyle: "bold"
        },
        Text6: {
          x: 1000,
          y: 120,
          type: displayText,
          displayText: "VF-Regular italic 64",
          fontSize: 64,
          fontFace: "VF-Regular",
          fontStyle: "italic"
        },
        Text7: {
          x: 0,
          y: 240,
          type: displayText,
          displayText: "VF-Bold 64",
          fontSize: 64,
          fontFace: "VF-Bold",
        },
        Text8: {
          x: 500,
          y: 240,
          type: displayText,
          displayText: "VF-Bold bold 64",
          fontSize: 64,
          fontFace: "VF-Bold",
          fontStyle: "bold"
        },
        Text9: {
          x: 1000,
          y: 240,
          type: displayText,
          displayText: "VF-Bold italic 64",
          fontSize: 64,
          fontFace: "VF-Bold",
          fontStyle: "italic"
        },
        Text10: {
          x: 0,
          y: 360,
          type: displayText,
          displayText: "Regular 32",
          fontSize: 32,
          fontFace: "Regular",
        },
        Text11: {
          x: 500,
          y: 360,
          type: displayText,
          displayText: "Regular bold 32",
          fontSize: 32,
          fontFace: "Regular",
          fontStyle: "bold"
        },
        Text12: {
          x: 1000,
          y: 360,
          type: displayText,
          displayText: "Regular italic 32",
          fontSize: 32,
          fontFace: "Regular",
          fontStyle: "italic"
        },
        Text13: {
          x: 0,
          y: 480,
          type: displayText,
          displayText: "VF-Regular 32",
          fontSize: 32,
          fontFace: "VF-Regular",
        },
        Text14: {
          x: 500,
          y: 480,
          type: displayText,
          displayText: "VF-Regular bold 32",
          fontSize: 32,
          fontFace: "VF-Regular",
          fontStyle: "bold"
        },
        Text15: {
          x: 1000,
          y: 480,
          type: displayText,
          displayText: "VF-Regular italic 32",
          fontSize: 32,
          fontFace: "VF-Regular",
          fontStyle: "italic"
        },
        Text16: {
          x: 0,
          y: 600,
          type: displayText,
          displayText: "VF-Bold 32",
          fontSize: 32,
          fontFace: "VF-Bold",
        },
        Text17: {
          x: 500,
          y: 600,
          type: displayText,
          displayText: "VF-Bold bold 32",
          fontSize: 32,
          fontFace: "VF-Bold",
          fontStyle: "bold"
        },
        Text18: {
          x: 1000,
          y: 600,
          type: displayText,
          displayText: "VF-Bold italic 32",
          fontSize: 32,
          fontFace: "VF-Bold",
          fontStyle: "italic"
        },
      },
    };
  }

  _init() {}
}
