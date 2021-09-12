export class Utils {
    static toMap(items, key) {
        let result = new Map();

        if (items == null || key == null) {
            return result;
        }

        for (let item of items) {
            result.set(item[key], item);
        }

        return result;
    }
}