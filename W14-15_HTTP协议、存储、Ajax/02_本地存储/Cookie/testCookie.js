// 写入 Cookie 的 Set 方法，这里使用箭头函数
const set = (name, value, {maxAge, domian, path, secure} = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`;
    }
    if (domian !== undefined) {
        cookieText += `; domian=${domian}`;
    }
    if (path !== undefined) {
        cookieText += `; path=${path}`;
    }
    if (secure !== undefined) {
        cookieText += `; secure`;
    }
    document.cookie = cookieText;
};

// 通过 name 属性获取 Cookie 的值的 Get 方法
const get = name => {
    name = `${encodeURIComponent(name)}`;
    const cookiesArr = document.cookie.split('; ');
    for(let cookieItem of cookiesArr) {
        const [cookieName, cookieValue] = cookieItem.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return;
};

// 通过 name，domain，path 一块确定删除 Cookie 的 Remove 方法
const remove = (name, {domian, path} = {}) => {
    set(name, '', {domian, path, maxAge: -1});
};

export {set, get, remove};