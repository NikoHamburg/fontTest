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
        mount: 0.5,
        x: 960,
        y: 220,
        text: {
          text: "Let's start Building!",
          fontFace: "Regular",
          fontSize: 64,
          textColor: 0xbbAABB22,
        },
      },
      Text2: {
        mount: 0.5,
        x: 960,
        y: 420,
        text: {
          text: "Let's start Building!",
          fontFace: "VF-Regular",
          fontSize: 64,
          textColor: 0xbbAABB22,
        },
      },
      Text3: {
        mount: 0.5,
        x: 960,
        y: 620,
        text: {
          text: "Let's start Building!",
          fontFace: "VF-Bold",
          fontSize: 64,
          textColor: 0xbbAABB22,
        },
      },
    };
  }
}

// _init() {}
