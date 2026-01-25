const LIMIT = 5;
const KEY_DATE = "signalcore_demo_date";
const KEY_COUNT = "signalcore_demo_count";

export function canRunDemo() {
    const today = new Date().toISOString().slice(0, 10);
    const savedDate = localStorage.getItem(KEY_DATE);
    let count = parseInt(localStorage.getItem(KEY_COUNT) || "0", 10);

    if (savedDate !== today) {
        localStorage.setItem(KEY_DATE, today);
        localStorage.setItem(KEY_COUNT, "0");
        count = 0;
    }

    return count < LIMIT;
}

export function incrementDemoCount() {
    const count = parseInt(localStorage.getItem(KEY_COUNT) || "0", 10);
    localStorage.setItem(KEY_COUNT, (count + 1).toString());
}

export function remainingRuns() {
    const count = parseInt(localStorage.getItem(KEY_COUNT) || "0", 10);
    return Math.max(0, LIMIT - count);
}
