
enum Colors {
    'red' = 0,
    'green' = 1,
    'blue' = 2,
};

export function getAvatarColor(num: number) {
    return Colors[num % 3];
}