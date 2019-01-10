/**
 * 返回顶部
 */
export function scrollTop(el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000/60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);
  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }
    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }
    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}

/**
 * 倒计时
 */
export function tick (i, cb) {
  setTimeout(function () {
    i--;
    cb(i);
    if (i > 0) {
      tick(i, cb);
    }
  }, 1000)
}

/**
 * 金额 数据 格式化  带，号的
 * source 金额
 */
export function numberComma (source, length = 3) {
  source = String(source).split('.');
  source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{' + length + '})+$)', 'ig'), '$1,');
  return source.join('.');
}

/**
 * 手机号码正则
 */
export function isPhone (num) {
  let phone = Number(num);
  let reg = /(^400[0-9]{7}$)|(^800[0-9]{7}$)|(^1(3|4|7|5|8)([0-9]{9}))|^([0-9]{3,4}-)?[0-9]{7,8}/;
  return reg.test(phone)
}

/**
 * 邮箱正则
 */
export function isEmail (email) {
  let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  return reg.test(email)
}
