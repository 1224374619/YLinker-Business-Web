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

export const cascaderFormatter = (data: any) => data.map((i: serverCascaderEntity) => {
  const _t : cascaderEntity = {
    value: i.code,
    label: i.tag,
  };
  if (i.children) {
    _t.children = cascaderFormatter(i.children);
  }
  return _t;
});

export const findLabel = (collections: any, code: any) => {
  const _t = collections.filter((i: any) => i.code === code)[DEFAULT_INDEX];
  return _t ? _t.tag : '';
};

export const inspectLabel = (collections: any, value: any, result: string[] = []): string => {
  for (const item of collections) {
    if (item.code && item.tag) {
      item.value = item.code;
      item.label = item.tag;
    }
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
  const t = [];
  t.unshift(value);
  t.unshift(value - value % division);
  return t;
};
