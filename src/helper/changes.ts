import { AbsoluteNumbers } from './absolute-numbers';

export class Changes {
  static getChange(percentagePrevious: number, percentage: number) {
    if (!percentagePrevious && !percentage) {
      return 0;
    }

    if (!percentagePrevious) {
      return percentage;
    }

    if (!percentage) {
      return percentagePrevious;
    }

    let change = (100 / percentagePrevious) * percentage;

    if (!change) {
      return 0;
    }

    if (change > 100) {
      change -= 100;
    } else {
      change = 100 - change;
    }

    return AbsoluteNumbers.fixNumber(change);
  }

  static getChangeOperator(percentagePrevious: number, percentage: number) {
    if (!percentagePrevious && !percentage) {
      return '';
    }

    if (!percentagePrevious) {
      return '+';
    }

    if (!percentage) {
      return '-';
    }

    const change = (100 / percentagePrevious) * percentage;
    const floorChange = AbsoluteNumbers.fixNumber(change);

    if (!floorChange || floorChange === 100) {
      return '';
    }

    if (floorChange > 100 || !percentagePrevious) {
      return '+';
    }

    return '-';
  }
}
