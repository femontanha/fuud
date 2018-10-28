export default (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
