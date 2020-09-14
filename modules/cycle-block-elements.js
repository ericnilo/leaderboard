export class CycleBlockElements {
    constructor(blockElements, minBlockPosition, maxBlockPosition) {
        this.blockElements = blockElements;
        this.minBlockPosition = minBlockPosition;
        this.maxBlockPosition = maxBlockPosition;
    }

    get beforeBlockClass() {
        return 'block-default';
    }

    get afterBlockClass() {
        return 'block-inactive';
    }

    get activeBlockClass() {
        return 'block-active';
    }

    initialize(startingBlock) {
        startingBlock = startingBlock - 1;
        this.blockElements.forEach((blockElement, blockIndex) => {
            if (blockIndex < startingBlock) {
                blockElement.classList.add(this.beforeBlockClass);
                return;
            }

            if (blockIndex > startingBlock) {
                blockElement.classList.add(this.afterBlockClass);
                return;
            }

            blockElement.classList.add(this.activeBlockClass);
        });
    }

    moveBlock(block) {
        const blockElementIndex = block - 1;

        if (block === this.minBlockPosition) {
            this.processInactiveBlock(blockElementIndex);
            this.processActiveBlock(blockElementIndex);
            return;
        }

        if (block === this.maxBlockPosition) {
            this.processActiveBlock(blockElementIndex);
            this.processDefaultBlock(blockElementIndex);
            return
        }

        this.processDefaultBlock(blockElementIndex);
        this.processActiveBlock(blockElementIndex);
        this.processInactiveBlock(blockElementIndex);
    }

    processDefaultBlock(blockElementIndex) {
        this.blockElements[blockElementIndex - 1].classList.remove(this.activeBlockClass);
        this.blockElements[blockElementIndex - 1].classList.add(this.beforeBlockClass);
    }

    processActiveBlock(blockElementIndex) {
        this.blockElements[blockElementIndex].classList.remove(this.beforeBlockClass);
        this.blockElements[blockElementIndex].classList.remove(this.afterBlockClass);
        this.blockElements[blockElementIndex].classList.add(this.activeBlockClass);
    }

    processInactiveBlock(blockElementIndex) {
        this.blockElements[blockElementIndex + 1].classList.remove(this.activeBlockClass);
        this.blockElements[blockElementIndex + 1].classList.add(this.afterBlockClass);
    }
}
