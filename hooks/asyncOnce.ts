export default function asyncOnce(cb: (...args: any[]) => Promise<any>) {
  const map: Record<string, Promise<any> | null> = {};

  return (...args: any[]) => {
    const key = JSON.stringify(args);

    return (map[key] ??= new Promise((resolve, reject) => {
      cb(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => (map[key] = null));
    }));
  };
}
