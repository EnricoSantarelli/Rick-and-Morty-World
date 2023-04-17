export enum STATUS {
    ALIVE = 'ALIVE',
    DEAD = 'DEAD',
    UNKNOWN = 'UNKNOWN',
}

export function toStatusEnum(value: string): STATUS {
    switch (value) {
        case "ALIVE":
            return STATUS.ALIVE;
        case "DEAD":
            return STATUS.DEAD;
        case "UNKNOWN":
            return STATUS.UNKNOWN;
        default:
            throw new Error("Invalid status");
    }
  }

