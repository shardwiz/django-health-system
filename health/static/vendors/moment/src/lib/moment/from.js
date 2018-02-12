<<<<<<< HEAD
import { createDuration } from '../duration/create';
import { createLocal } from '../create/local';
import { isMoment } from '../moment/constructor';

export function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

export function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}
=======
import { createDuration } from '../duration/create';
import { createLocal } from '../create/local';
import { isMoment } from '../moment/constructor';

export function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

export function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
