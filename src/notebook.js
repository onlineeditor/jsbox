let storage = window.localStorage;

export const TYPE = {
    CODE: 'code',
    THEME: 'theme',
    DRAG_PERCENT: 'drag_percent',
    DRAG_STATUS: 'drag_status',
    LANGUAGE: 'language',
    HTML_PANEL: 'html_panel',
    FONT_SIZE: 'font_size',
};

export function read (key) {
    key += '_jsbox';
    let value = storage.getItem(key);
    if (value === null) {
        return null;
    }
    let type = value.substr(0, value.indexOf(':'));
    value = value.substr(value.indexOf(':') + 1);
    if (type === 'number') {
        return parseFloat(value);
    } else if (type === 'boolean') {
        return value === 'true';
    } else if (type === 'object') {
        return JSON.parse(type);
    }
    return value;
}

export function write (key, value) {
    key += '_jsbox';
    let type = typeof value;
    if (type === 'object') {
        value = JSON.stringify(value);
    } else if (type !== 'string') {
        value = value.toString();
    }
    value = `${type}:${value}`;
    storage.setItem(key, value);
}

export function remove (key) {
    key += '_jsbox';
    storage.removeItem(key);
}