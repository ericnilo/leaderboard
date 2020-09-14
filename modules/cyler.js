export class Cyler {
    constructor(cycleBlockElements, validator, minBlockPosition, maxBlockPosition) {
        this.cycleBlockElements = cycleBlockElements;
        this.validator = validator;
        this.minBlockPosition = minBlockPosition;
        this.maxBlockPosition = maxBlockPosition;
        this.initialStartingBlock = null;
    }

    set currentBlock(currentBlock) {
        if (this.initialStartingBlock !== currentBlock) {
            this.cycleBlockElements.moveBlock(currentBlock);
        }

        this._currentBlock = parseInt(currentBlock);
    }

    get currentBlock() {
        return this._currentBlock;
    }

    initialize(message = '') {
        const startingBlock = prompt(
            `${message} Please enter starting position: ${this.minBlockPosition} to ${this.maxBlockPosition} only`,
            '1'
        );

        if (!this.validator.validate(startingBlock)) {
            this.initialize('Invalid position!!! \n');
            return;
        }

        this.cycleBlockElements.initialize(startingBlock);
        this.initialStartingBlock = startingBlock;

        this.currentBlock = startingBlock;

        this.bindBodyEvent();
    }

    bindBodyEvent() {
        document.body.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    this.decrementBlock();
                    break;
                case 'ArrowDown':
                    this.incrementBlock();
                    break;
                default:
                    // do nothing
            }
        });
    }

    incrementBlock() {
        if (!this.validator.isInRange(this.currentBlock + 1)) {
            return;
        }

        this.currentBlock++;
    }

    decrementBlock() {
        if (!this.validator.isInRange(this.currentBlock - 1)) {
            return;
        }

        this.currentBlock--;
    }
}
