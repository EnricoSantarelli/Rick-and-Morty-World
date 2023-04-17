export enum STATUS {
    ALIVE = 'Alive',
    DEAD = 'Dead',
    UNKNOWN = 'unknown',
}

export function toStatusEnum(value: string): STATUS {
    switch (value) {
        case "Alive":
            return STATUS.ALIVE;
        case "Dead":
            return STATUS.DEAD;
        case "unknown":
            return STATUS.UNKNOWN;
        default:
            throw new Error("Invalid status");
    }
  }

