import { Lightning } from "@lightningjs/sdk";

class displayText extends Lightning.Component {
  static _template() {
    return {
      color: 0xff222222,
      rect: true,
      h: 96,
      w: 500,
      Label: {
        x: 20,
        y: 8,
      },
    };
  }

  _init() {
    this.tag("Label").patch({
      text: {
        text: this.displayText,
        fontSize: this.fontSize,
        fontFace: this.fontFace,
        fontStyle: this.fontStyle || "normal",
        paddingLeft: 12,
        paddingRight: 12,
        letterSpacing: 4,
        wordWrap: true,
        wordWrapWidth: 4,
        textOverflow: "ellipsis",
        textAlign: "center",
        textColor: 0xff555555,
      },
    });
  }

  // _focus() {
  //   this.color = 0xff555555;
  //   this.tag("Label").color = 0xfff1f1f1;
  // }

  // _unfocus() {
  //   this.color = 0xff000000;
  //   this.tag("Label").color = 0xffffffff;
  // }
}

export { displayText };
