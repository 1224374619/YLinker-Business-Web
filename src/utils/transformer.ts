interface serverCascaderEntity {
  code: number,
  tag: string,
  children?: serverCascaderEntity[]
}

interface cascaderEntity {
  value: number,
  label: string,
  children?: cascaderEntity[]
}

const DEFAULT_INDEX = 0;

export const cascaderFormatter = (data: any) => {
  return data.map((i: serverCascaderEntity) => {
    const _t : cascaderEntity = {
      value: i.code,
      label: i.tag,
    };
    if (i.children) {
      _t['children'] = cascaderFormatter(i.children)
    }
    return _t;
  });
}

export const inspectLabel = (collections: any, value: any, result: string[] = []): string => {
  for (let item of collections) {
    if (item.value === value[DEFAULT_INDEX]) {
      result.push(item.label);
      const _t = value.slice(1);
      if (_t.length > 0 && item.children) {
        inspectLabel(item.children, _t, result);
      }
    }
  }
  return result.join('-');
};

export const appendParent = (value: any, division = 100): number[] => {
  let t = [];
  t.unshift(value);
  t.unshift(value - value % division); 
  return t;
};
