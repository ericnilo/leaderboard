import {Cyler} from "./cyler.js";
import {CylerValidator} from "./cyler-validator.js";
import {CycleBlockElements} from "./cycle-block-elements.js";

const blockElements = document.querySelectorAll('.block');
const MIN_BLOCK_POSITION = 1;
const MAX_BLOCK_POSITION = blockElements.length;

const cyler = new Cyler(
    new CycleBlockElements(blockElements, MIN_BLOCK_POSITION, MAX_BLOCK_POSITION),
    new CylerValidator(MIN_BLOCK_POSITION, MAX_BLOCK_POSITION),
    MIN_BLOCK_POSITION,
    MAX_BLOCK_POSITION
);
cyler.initialize();
