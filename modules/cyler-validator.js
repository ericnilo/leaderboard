export class CylerValidator {
    constructor(minBlockPosition, maxBlockPosition) {
        this.minBlockPosition = minBlockPosition;
        this.maxBlockPosition = maxBlockPosition;
    }

    validate(block) {
        if (block == null || block === '') {
            return false;
        }

        if (!this.isInt(block)) {
            return false;
        }

        return this.isInRange(block);
    }

    isInRange(block) {
        block = parseInt(block);
        return (block >= this.minBlockPosition && block <= this.maxBlockPosition);
    }

    isInt(value) {
        if (isNaN(value)) {
            return false;
        }

        const x = parseFloat(value);

        return (x | 0) === x;
    }
}
