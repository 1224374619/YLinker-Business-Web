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
  const temp : cascaderEntity = {
    value: i.code,
    label: i.tag,
  };
  if (i.children) {
    temp.children = cascaderFormatter(i.children);
  }
  return temp;
});

export const findLabel = (collections: any, code: any) => {
  const temp = collections.filter((i: any) => i.code === code)[DEFAULT_INDEX];
  return temp ? temp.tag : '';
};

export const inspectLabel = (collections: any, value: any, result: string[] = []): string => {
  Object.keys(collections).forEach((key) => {
    const item = collections[key];
    if (item.code && item.tag) {
      item.value = item.code;
      item.label = item.tag;
    }
    if (item.value === value[DEFAULT_INDEX]) {
      result.push(item.label);
      const temp = value.slice(1);
      if (temp.length > 0 && item.children) {
        inspectLabel(item.children, temp, result);
      }
    }
  });
  return result.join('-');
};

export const appendParent = (value: any, division = 100): number[] => {
  const t = [];
  t.unshift(value);
  t.unshift(value - (value % division));
  return t;
};

export const inspectLabelBySingleCode = (collections:any, value: any, division = 1000, result: string[] = []): string => {
  collections.forEach((i: any) => {
    if (value % i.value < division) {
      if (i.childre) {
        inspectLabelBySingleCode(i.children, value, division / 10, result);
      } else {
        result.push(i.label);
      }
    }
  });
  return result.join('-');
};

export const dataURItoBlob = (dataURI: any) => {
  let byteString;
  if (dataURI.split(',')[DEFAULT_INDEX].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[DEFAULT_INDEX + 1]);
  } else {
    byteString = unescape(dataURI.split(',')[DEFAULT_INDEX + 1]);
  }
  let mimeString = dataURI.split(',')[0].split(':')[DEFAULT_INDEX + 1].split(';')[DEFAULT_INDEX];
  let ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], {type:mimeString});
}