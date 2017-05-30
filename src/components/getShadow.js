const shadows = {
  '0dp': 'none',

  '2dp': '0 2px 2px 0 rgba(0, 0, 0, 0.14),' +
    '0 1px 5px 0 rgba(0, 0, 0, 0.12),' +
    '0 3px 1px -2px rgba(0, 0, 0, 0.2)',

  '3dp': '0 3px 4px 0 rgba(0, 0, 0, 0.14),' +
    '0 1px 8px 0 rgba(0, 0, 0, 0.12),' +
    '0 3px 3px -2px rgba(0, 0, 0, 0.4)',

  '4dp': '0 4px 5px 0 rgba(0, 0, 0, 0.14),' +
    '0 1px 10px 0 rgba(0, 0, 0, 0.12),' +
    '0 2px 4px -1px rgba(0, 0, 0, 0.4)',

  '6dp': '0 6px 10px 0 rgba(0, 0, 0, 0.14),' +
    '0 1px 18px 0 rgba(0, 0, 0, 0.12),' +
    '0 3px 5px -1px rgba(0, 0, 0, 0.4)',

  '8dp': '0 8px 10px 1px rgba(0, 0, 0, 0.14),' +
    '0 3px 14px 2px rgba(0, 0, 0, 0.12),' +
    '0 5px 5px -3px rgba(0, 0, 0, 0.4)',

  '12dp': ' 0 12px 16px 1px rgba(0, 0, 0, 0.14),' +
    '0 4px 22px 3px rgba(0, 0, 0, 0.12),' +
    '0 6px 7px -4px rgba(0, 0, 0, 0.4)',

  '16dp': '0 16px 24px 2px rgba(0, 0, 0, 0.14),' +
    '0  6px 30px 5px rgba(0, 0, 0, 0.12),' +
    '0  8px 10px -5px rgba(0, 0, 0, 0.4)',
};

const getShadow = function (depth) {
  return shadows[depth];
};

export default getShadow;