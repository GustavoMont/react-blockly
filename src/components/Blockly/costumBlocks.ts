import * as Blockly from "blockly/core";

const moveDown = {
  type: "move_down",
  message0: "Ir para baixo",
  colour: 230,
  tooltip: "Mover para baixo",
  helpUrl: "",
};

Blockly.Blocks["move_down"] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Ir para baixo");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("Mover para baixo");
    this.setHelpUrl("");
  },
};
